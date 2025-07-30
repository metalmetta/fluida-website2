
import { Link } from "react-router-dom";
import { Twitter, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Logo and CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
              alt="Fluida Logo" 
              className="h-10 w-auto" 
            />
            <a 
              href="https://bookva.ai/fluida" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Right side - Links and Social */}
          <div className="flex items-center gap-8">
            <div className="flex space-x-6">
              <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/getfluida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on X"
              >
                <Twitter className="w-5 h-5" />
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
        <div className="border-t border-gray-800 pt-6 mt-8">
          <p className="text-sm text-center text-gray-500">
            © 2025 Fluida Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
