
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import MadeByHumans from "@/components/MadeByHumans";
import Footer from "@/components/Footer";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fluida | Cut Supplier Payment Costs by 88% | Global B2B Payments</title>
        <meta name="description" content="Send funds worldwide to vendors, suppliers, and contractors in real time at a fraction of the cost. Cut supplier payment costs by 88% with Fluida's revolutionary B2B payment platform." />
        <meta name="keywords" content="B2B payments, supplier payments, global payments, international transfers, payment platform, business payments, fintech, vendor payments, contractor payments" />
        <link rel="canonical" href="https://getfluida.com/" />
        <meta property="og:title" content="Fluida | Cut Supplier Payment Costs by 88%" />
        <meta property="og:description" content="Revolutionary B2B payment platform. Send funds worldwide to vendors, suppliers, and contractors in real time at 88% lower cost." />
        <meta property="og:url" content="https://getfluida.com/" />
        <meta property="twitter:title" content="Fluida | Cut Supplier Payment Costs by 88%" />
        <meta property="twitter:description" content="Revolutionary B2B payment platform. Send funds worldwide at 88% lower cost." />
      </Helmet>
      <TopBanner />
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <HumanoidSection />
        <SpecsSection />
        <DetailsSection />
        <ImageShowcaseSection />
        <Features />
        <Testimonials />
        <Newsletter />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
