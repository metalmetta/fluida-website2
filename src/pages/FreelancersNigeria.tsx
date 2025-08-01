import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const FreelancersNigeria = () => {
  const landingPageData = {
    route: "/freelancers-nigeria",
    headline: "Get Paid in USD or EUR — No Local Bank Hassles",
    subheadline: "Fluida gives you a real global account to receive payments from clients on Upwork, Fiverr, and beyond. No FX traps, no delays.",
    ctaButton: "Join the waitlist",
    bullets: [
      "Get real USD/EUR banking details",
      "No forced currency conversion",
      "Works seamlessly with global freelance platforms"
    ],
    heroImage: "/hero2.png",
    metaTitle: "Nigerian Freelancers: Get Paid in USD/EUR | Fluida",
    metaDescription: "Open your global account and receive USD/EUR payments like a local. Perfect for Nigerian freelancers working with Upwork, Fiverr, and international clients. Avoid high FX fees.",
    metaKeywords: "Nigerian freelancers, USD payments, EUR payments, global account, Upwork, Fiverr, freelancer payments, Nigeria"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default FreelancersNigeria;
