
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
    <header
      className={cn(
        "fixed left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        "top-[40px]", // Account for banner height
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Fluida"
        >
          <img 
            src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
            alt="Fluida Logo" 
            className="h-16 sm:h-20 md:h-24" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="nav-link">Solution</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <a 
            href="https://bookva.ai/fluida" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
          >
            Schedule a Demo
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </nav>

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
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Features
          </a>
          <Link 
            to="/pricing" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Pricing
          </Link>
          <a 
            href="#details" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
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
