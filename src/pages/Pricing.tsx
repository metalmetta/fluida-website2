import React from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {

  return (
    <div className="min-h-screen">
      <TopBanner />
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only a small fee for successful transactions. No hidden costs, no monthly subscriptions.
            </p>
          </div>

          {/* Single Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Simple & Fair
                </span>
              </div>
              
              <div className="p-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Transaction Fee
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Only pay when you succeed
                </p>
                
                <div className="mb-12">
                  <span className="text-6xl font-bold text-primary">
                    0.5%
                  </span>
                  <span className="text-xl text-gray-600 ml-2">
                    per transaction
                  </span>
                </div>
                
                <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">No setup fees</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">No monthly subscription</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Full platform access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Real-time analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">API access</span>
                  </li>
                </ul>
                
                <button className="w-full py-4 px-8 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300 hover:shadow-lg text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-left bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How is the 0.5% fee calculated?
                </h3>
                <p className="text-gray-600">
                  The fee is calculated as 0.5% of each successful transaction amount. You only pay when transactions are completed successfully.
                </p>
              </div>
              <div className="text-left bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Are there any minimum fees or monthly charges?
                </h3>
                <p className="text-gray-600">
                  No, there are no minimum fees, setup costs, or monthly subscriptions. You only pay the 0.5% transaction fee when you use the platform.
                </p>
              </div>
              <div className="text-left bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  When are fees collected?
                </h3>
                <p className="text-gray-600">
                  Fees are automatically deducted from successful transactions in real-time. You'll receive detailed reports of all fee calculations.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start with zero upfront costs
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Begin using our platform immediately. You only pay the 0.5% fee when you succeed.
            </p>
            <a
              href="https://bookva.ai/fluida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;