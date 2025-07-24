
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-8">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/lovable-uploads/3ecdfdbf-07a6-433e-aa29-44c5a5d3b0bb.png" 
            alt="Fluida Logo" 
            className="h-8 sm:h-10" 
          />
          <p className="text-center text-gray-600 text-sm">
            This template takes inspiration from{" "}
            <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
              DesignJoy's
            </a>{" "}
            BUILD WARS design, built entirely with Lovable by{" "}
            <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
              Rezaul Arif
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
