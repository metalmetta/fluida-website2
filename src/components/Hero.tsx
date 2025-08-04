import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import LottieAnimation from "./LottieAnimation";
import OptimizedImage from "./OptimizedImage";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getLocationInfo, getPersonalizedHeadline } from "@/utils/geoip";
import { sendWelcomeEmail } from "@/utils/email";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroTitle, setHeroTitle] = useState("Cut Costs by 88% on");
  const [heroSubtitle, setHeroSubtitle] = useState("Supplier Payments");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
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
            company_name: 'Request Access - Main Page',
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

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Load location data for personalization
    const loadLocationData = async () => {
      try {
        const { country } = await getLocationInfo();
        
        if (country && country !== "your country") {
          // Personalize for specific countries
          const personalizations: Record<string, { title: string; subtitle: string }> = {
            'Nigeria': { title: `Cut Costs by 88% on Payments in`, subtitle: `Nigeria` },
            'India': { title: `Cut Costs by 88% on Payments in`, subtitle: `India` },
            'Pakistan': { title: `Cut Costs by 88% on Payments in`, subtitle: `Pakistan` },
            'Bangladesh': { title: `Cut Costs by 88% on Payments in`, subtitle: `Bangladesh` },
            'Philippines': { title: `Cut Costs by 88% on Payments in`, subtitle: `Philippines` },
            'Kenya': { title: `Cut Costs by 88% on Payments in`, subtitle: `Kenya` },
            'Ghana': { title: `Cut Costs by 88% on Payments in`, subtitle: `Ghana` },
            'Egypt': { title: `Cut Costs by 88% on Payments in`, subtitle: `Egypt` },
            'South Africa': { title: `Cut Costs by 88% on Payments in`, subtitle: `South Africa` },
            'Indonesia': { title: `Cut Costs by 88% on Payments in`, subtitle: `Indonesia` },
            'Vietnam': { title: `Cut Costs by 88% on Payments in`, subtitle: `Vietnam` },
            'Brazil': { title: `Cut Costs by 88% on Payments in`, subtitle: `Brazil` },
            'Mexico': { title: `Cut Costs by 88% on Payments in`, subtitle: `Mexico` },
            'Argentina': { title: `Cut Costs by 88% on Payments in`, subtitle: `Argentina` },
            'Colombia': { title: `Cut Costs by 88% on Payments in`, subtitle: `Colombia` },
            'Ukraine': { title: `Cut Costs by 88% on Payments in`, subtitle: `Ukraine` },
            'Turkey': { title: `Cut Costs by 88% on Payments in`, subtitle: `Turkey` },
          };

          const personalization = personalizations[country];
          if (personalization) {
            setHeroTitle(personalization.title);
            setHeroSubtitle(personalization.subtitle);
          }
        }
      } catch (error) {
        console.warn('Failed to load location data for personalization:', error);
      }
    };

    loadLocationData();
  }, []);
  useEffect(() => {
    fetch('/loop-header.lottie').then(response => response.json()).then(data => setLottieData(data)).catch(error => console.error("Error loading Lottie animation:", error));
  }, []);
  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  return <section className="overflow-hidden relative bg-cover" id="hero" role="banner" style={{
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%',
    padding: isMobile ? '112px 16px 40px' : '168px 20px 60px'
  }}>
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            
            
            <h1 className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <span itemProp="name">{heroTitle}</span>
              <br className="hidden sm:inline" /> <span itemProp="description">{heroSubtitle}</span>
            </h1>
            
            <p style={{
            animationDelay: "0.5s"
          }} className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left" itemProp="description">
              Send funds worldwide to your Vendors, Suppliers and Contractors in real time at a fraction of the cost. 
              <Link to="/blog/reduce-international-payment-fees-suppliers" className="text-pulse-600 hover:text-pulse-700 underline ml-1">
                Learn how to save on payment fees.
              </Link>
            </p>
            
            {/* Request Access Form */}
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center opacity-0 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  inputMode="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email for early access" 
                  className="w-full px-4 py-3 rounded-lg border border-black bg-transparent backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-black"
                  required 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:border-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="w-4 h-4" />
                {isSubmitting ? "Requesting..." : "Request Access"}
              </button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? <div className="relative z-10 animate-fade-in" style={{
            animationDelay: "0.9s"
          }}>
                <LottieAnimation animationPath={lottieData} className="w-full h-auto max-w-lg mx-auto" loop={true} autoplay={true} />
              </div> : <>
              <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
              <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <OptimizedImage 
                  src="/hero2.png" 
                  alt="Atlas Robot" 
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.5
              }}></div>
              </div>
              </>}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>;
};
export default Hero;