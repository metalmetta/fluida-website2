
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header className="fixed top-[50px] left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={cn(
          "transition-all duration-500 ease-out",
          "bg-black/90 backdrop-blur-xl border border-white/10",
          "rounded-full shadow-2xl shadow-black/20",
          isScrolled 
            ? "px-6 py-3" 
            : "px-8 py-4"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo - compact for island */}
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Fluida"
          >
            <img 
              src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
              alt="Fluida Logo" 
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-8" : "h-10"
              )}
            />
          </a>

          {/* Desktop Navigation - compact island style */}
          <nav className="hidden lg:flex items-center space-x-1 ml-8">
            <a href="#solution" className="text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 text-sm font-medium">
              Solution
            </a>
            <a href="#features" className="text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 text-sm font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 text-sm font-medium">
              Testimonials
            </a>
            <Link to="/pricing" className="text-white/90 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200 text-sm font-medium">
              Pricing
            </Link>
          </nav>

          {/* CTA Button - island style */}
          <div className="hidden md:flex items-center ml-6">
            <a 
              href="https://bookva.ai/fluida" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2 text-sm"
            >
              Demo
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button - island style */}
          <button 
            className="md:hidden text-white/90 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all duration-200 ml-4" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - island-style dropdown */}
      <div className={cn(
        "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 md:hidden",
        "bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl",
        "transition-all duration-300 ease-out min-w-[280px]",
        isMenuOpen 
          ? "opacity-100 scale-100 translate-y-0" 
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      )}>
        <nav className="flex flex-col p-4 space-y-2">
          <Link 
            to="/" 
            className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 text-center font-medium" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </Link>
          <a 
            href="#solution" 
            className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 text-center font-medium" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Solution
          </a>
          <a 
            href="#features" 
            className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 text-center font-medium" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 text-center font-medium" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Testimonials
          </a>
          <Link 
            to="/pricing" 
            className="text-white/90 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all duration-200 text-center font-medium" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Pricing
          </Link>
          <div className="border-t border-white/10 my-2"></div>
          <a 
            href="https://bookva.ai/fluida"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-gray-100 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 mt-2"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
