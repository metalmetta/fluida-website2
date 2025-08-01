import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const StartupsLatam = () => {
  const landingPageData = {
    route: "/latam",
    headline: "Get USD Payments with Real US Banking — No Entity Needed",
    subheadline: "Fluida gives LATAM businesses US account details to receive ACH and wire transfers from global clients. No LLC, no legal complexity.",
    ctaButton: "Get early access",
    bullets: [
      "Real US banking details — no US entity required",
      "Perfect for SaaS and B2B invoices",
      "Used by LATAM founders and remote teams"
    ],
    heroImage: "/hero2.png",
    metaTitle: "LATAM Businesses: USD Banking Without US Company | Fluida",
    metaDescription: "Get real US banking details for your LATAM business without forming a US company. Accept ACH and wire transfers from US clients. Perfect for SaaS and B2B businesses.",
    metaKeywords: "LATAM Businesses, USD banking, US banking details, ACH transfers, wire transfers, SaaS payments, B2B payments, Latin America startups"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default StartupsLatam;
