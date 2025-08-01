import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const StartupsLatam = () => {
  const landingPageData = {
    route: "/startups-latam",
    headline: "LATAM startups: Get paid in USD with real US banking details",
    subheadline: "No US company required",
    ctaButton: "Get early access",
    bullets: [
      "ACH and wire transfers supported",
      "Perfect for SaaS and B2B clients",
      "Trusted by global founders"
    ],
    heroImage: "/placeholder.svg",
    metaTitle: "LATAM Startups: USD Banking Without US Company | Fluida",
    metaDescription: "Get real US banking details for your LATAM startup without forming a US company. Accept ACH and wire transfers from US clients. Perfect for SaaS and B2B businesses.",
    metaKeywords: "LATAM startups, USD banking, US banking details, ACH transfers, wire transfers, SaaS payments, B2B payments, Latin America startups"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default StartupsLatam;