
import { Link } from "react-router-dom";
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const handleSectionNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
              alt="Fluida Logo" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Cut supplier payment costs by 88% with our global B2B payment platform. Send funds worldwide to vendors, suppliers, and contractors in real time.
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/getfluida" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/getfluida" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://bookva.ai/fluida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pulse-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pulse-600 transition-colors"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cost Reduction Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Platform Comparison
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press & Media
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNavigation('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-left leading-relaxed max-w-2xl mb-4 md:mb-0">
              © 2025 Fluida Inc. All rights reserved. Fluida Inc. is a financial technology company, not a bank or a money services business. Certain services are provided by our licensed partners across the globe.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
