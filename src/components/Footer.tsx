
import { Link } from "react-router-dom";
import { X, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="section-container py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Logo and CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="/logowhite.png" 
              alt="Fluida Logo" 
              className="h-10 w-auto" 
            />
          </div>
          
          {/* Right side - Links and Social */}
          <div className="flex items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/developers" className="hover:text-white transition-colors">Developers</Link>
              <Link to="/compare" className="hover:text-white transition-colors">Compare</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/getfluida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on X"
              >
                <X className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/getfluida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright */}
        <div className="border-t border-gray-800 pt-4 mt-6">
          <p className="text-sm text-center text-gray-500">
            © 2025 Fluida. All rights reserved. Fluida is a financial technology company, not a bank.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
