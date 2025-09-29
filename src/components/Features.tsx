
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Landmark, Plus, SendHorizontal, ReceiptText, ScanQrCode, Nfc } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
          Everything you need for your <br className="hidden sm:block" />Business Payments
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Landmark className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Global Stablecoin Accounts"
            description="Enjoy the global reach of stablecoins with the ease of a traditional account, and put your idle balance to work with yield."
            index={0}
          />
          <FeatureCard
            icon={<Plus className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Pay-ins"
            description="Deposit into your account or collect customer payments. Fluida simplifies global capital flow into your business."
            index={1}
          />
          <FeatureCard
            icon={<SendHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Payouts"
            description="Send money globally in seconds. Withdraw, convert, or pay anyone globally with real-time local currency payouts."
            index={2}
          />
          <FeatureCard
            icon={<ReceiptText className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Invoicing"
            description="Bill clients worldwide with ease. Send professional invoices, get paid in multiple currencies, and let Fluida handle tracking, reconciliation, and payment flexibility automatically."
            index={3}
          />
          <FeatureCard
            icon={<ScanQrCode className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Virtual Accounts"
            description="Store and manage your funds effortlessly. Virtual accounts give you secure USD, EUR, and digital asset management with real-time visibility and easy bank integration."
            index={4}
          />
          <FeatureCard
            icon={<Nfc className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Corporate Cards"
            description="Empower your team with global spending. The Fluida Corporate Card connects to your USDC balance for instant, low-cost payments worldwide."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
