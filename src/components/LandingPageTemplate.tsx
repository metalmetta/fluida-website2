import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sendWelcomeEmail } from "@/utils/email";

interface LandingPageData {
  route: string;
  headline: string;
  subheadline: string;
  ctaButton: string;
  bullets: string[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

interface LandingPageTemplateProps {
  data: LandingPageData;
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({ data }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('signups')
        .insert([
          {
            email,
            company_name: `Landing Page Signup - ${data.route}`,
            origin: 'website'
          }
        ]);

      if (error) {
        throw error;
      }

      // Send welcome email
      try {
        await sendWelcomeEmail(email);
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't show error to user, just log it
      }

      toast({
        title: "Access requested successfully!",
        description: "You'll be the first to know when we're ready."
      });
      setEmail("");
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.metaKeywords} />
        <link rel="canonical" href={`https://getfluida.com${data.route}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://getfluida.com${data.route}`} />
        <meta property="twitter:title" content={data.metaTitle} />
        <meta property="twitter:description" content={data.metaDescription} />
      </Helmet>
      
      <TopBanner />
      <Navbar />
      
      <main className="space-y-4 sm:space-y-8 pt-8 sm:pt-12">
        {/* Hero Section */}
        <section className="overflow-hidden relative bg-cover" id="hero" role="banner" style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%',
          padding: isMobile ? '120px 16px 60px' : '168px 20px 60px'
        }}>
          <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
          
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
              <div className="w-full lg:w-1/2">
                
                <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" style={{
                  animationDelay: "0.3s"
                }}>
                  <span itemProp="name">{data.headline}</span>
                </h1>
                
                <p style={{
                  animationDelay: "0.5s"
                }} className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-6 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left px-1 sm:px-0" itemProp="description">
                  {data.subheadline}
                </p>

                {/* Features bullets */}
                <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 opacity-0 animate-fade-in px-1 sm:px-0" style={{
                  animationDelay: "0.6s"
                }}>
                  {data.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-black text-sm sm:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Request Access Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-stretch sm:items-center opacity-0 animate-fade-in px-1 sm:px-0" style={{
                  animationDelay: "0.7s"
                }}>
                  <div className="relative w-full sm:w-80">
                    <input 
                      type="email" 
                      inputMode="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-4 sm:py-3 rounded-xl sm:rounded-lg border-2 border-black bg-transparent backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-black text-base"
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:border-black font-semibold py-4 sm:py-3 px-6 rounded-xl sm:rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] sm:min-h-[48px] whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4" />
                    {isSubmitting ? "Requesting..." : "Request Access"}
                  </button>
                </form>
              </div>
              
              <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    src={data.heroImage} 
                    alt="Hero illustration" 
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
        </section>

        {/* Features Section */}
        <Features />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Newsletter Section */}
        <Newsletter />

      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;