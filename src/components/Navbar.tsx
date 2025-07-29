
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = window.innerWidth < 768 ? 100 : 80;
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleSectionNavigation = (sectionId: string) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }

    // If we're already on the homepage, just scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = window.innerWidth < 768 ? 100 : 80;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage with hash, then scroll
      navigate(`/#${sectionId}`);
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
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => {
            // Close mobile menu if open when clicking logo
            if (isMenuOpen) {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }
          }}
          aria-label="Fluida Homepage"
        >
          <img 
            src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
            alt="Fluida Logo" 
            className="h-16 sm:h-20 md:h-24" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleSectionNavigation('solution')} className="nav-link">Solution</button>
          <button onClick={() => handleSectionNavigation('features')} className="nav-link">Features</button>
          <button onClick={() => handleSectionNavigation('testimonials')} className="nav-link">Testimonials</button>
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

        {/* Mobile menu button - increased touch target with background */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200/50" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-12">
          <button 
            onClick={() => handleSectionNavigation('solution')}
            className="text-xl font-medium py-4 px-8 w-full max-w-xs text-center rounded-lg hover:bg-gray-100 transition-colors" 
          >
            Solution
          </button>
          <button 
            onClick={() => handleSectionNavigation('features')}
            className="text-xl font-medium py-4 px-8 w-full max-w-xs text-center rounded-lg hover:bg-gray-100 transition-colors" 
          >
            Features
          </button>
          <button 
            onClick={() => handleSectionNavigation('testimonials')}
            className="text-xl font-medium py-4 px-8 w-full max-w-xs text-center rounded-lg hover:bg-gray-100 transition-colors" 
          >
            Testimonials
          </button>
          <Link 
            to="/pricing" 
            className="text-xl font-medium py-4 px-8 w-full max-w-xs text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Pricing
          </Link>
          <a 
            href="https://bookva.ai/fluida"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 mt-8 w-full max-w-xs"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
