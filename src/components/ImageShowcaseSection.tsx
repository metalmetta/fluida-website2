
import React from "react";
import OptimizedImage from "./OptimizedImage";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <OptimizedImage 
              src="/money.png" 
              alt="Financial technology interface showing cost savings" 
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Financial Technology</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Withdraw, convert, or pay anyone anywherewith real-time, multi-currency payouts powered by your Global Stablecoin Account.

Withdraw in USD, EUR, COP, MXN, and more.

Send payouts via PIX, SPEI, ACH, SEPA, and more.

Enable stablecoin payouts and withdraws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
