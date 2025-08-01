import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const FreelancersNigeria = () => {
  const landingPageData = {
    route: "/freelancers-nigeria",
    headline: "Nigerian freelancers: Get paid in USD or EUR",
    subheadline: "Open your global account and avoid high FX fees",
    ctaButton: "Join the waitlist",
    bullets: [
      "Receive USD/EUR like a local",
      "No forced currency conversion",
      "Works with Upwork, Fiverr, and more"
    ],
    heroImage: "/hero2.png",
    metaTitle: "Nigerian Freelancers: Get Paid in USD/EUR | Fluida",
    metaDescription: "Open your global account and receive USD/EUR payments like a local. Perfect for Nigerian freelancers working with Upwork, Fiverr, and international clients. Avoid high FX fees.",
    metaKeywords: "Nigerian freelancers, USD payments, EUR payments, global account, Upwork, Fiverr, freelancer payments, Nigeria"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default FreelancersNigeria;