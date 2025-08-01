import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
            origin: `landing-page-${data.route}`
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you for signing up!",
        description: "You'll receive updates about Fluida soon."
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
      
      <main className="space-y-4 sm:space-y-8">
        {/* Hero Section */}
        <section className="overflow-hidden relative bg-cover" style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%',
          padding: '120px 20px 60px'
        }}>
          <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
          
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-950 mb-6">
                  {data.headline}
                </h1>
                
                <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                  {data.subheadline}
                </p>

                {/* Features bullets */}
                <ul className="mb-8 space-y-3">
                  {data.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pulse-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative flex-grow">
                    <input 
                      type="email" 
                      inputMode="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      placeholder="Enter your email address" 
                      className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 text-gray-700" 
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="bg-pulse-500 border-2 border-pulse-500 text-white hover:bg-pulse-600 hover:border-pulse-600 font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : data.ctaButton}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

        {/* Trust Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by businesses worldwide
              </h2>
              <p className="text-gray-600 mb-8">
                Join thousands of companies already saving money on global payments with Fluida
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a
                  href="https://www.economyup.it/startup/come-si-costruisce-una-startup-buona-per-la-silicon-valley-successi-e-piccoli-fallimenti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <span className="text-sm font-bold">E</span>
                  </div>
                  <span className="font-medium">EconomyUp</span>
                </a>
                <a
                  href="https://www.c14.so/fluida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <span className="text-sm font-bold">C14</span>
                  </div>
                  <span className="font-medium">C14 Startup Database</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Newsletter Section */}
        <Newsletter />

        {/* Final CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-gray-600 mb-8">
                Schedule a demo to see how Fluida can transform your global payments
              </p>
              <a 
                href="https://bookva.ai/fluida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pulse-500 border-2 border-pulse-500 text-white hover:bg-pulse-600 hover:border-pulse-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 group"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;