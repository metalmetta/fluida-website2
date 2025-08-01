import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const CryptoDevs = () => {
  const landingPageData = {
    route: "/crypto-devs",
    headline: "Off-ramp crypto to a real EUR or USD account",
    subheadline: "For builders, freelancers, and web3 pros",
    ctaButton: "Request access",
    bullets: [
      "Instant conversion to fiat",
      "Receive USDC and withdraw to EUR/USD IBAN",
      "Works with self-custody wallets"
    ],
    heroImage: "/placeholder.svg",
    metaTitle: "Crypto Developers: Off-ramp to Real EUR/USD Accounts | Fluida",
    metaDescription: "Perfect for crypto developers, builders, and web3 professionals. Convert USDC instantly to fiat and withdraw to real EUR/USD IBAN accounts. Works with self-custody wallets.",
    metaKeywords: "crypto developers, USDC, off-ramp, EUR account, USD account, web3, blockchain developers, crypto to fiat, self-custody wallets"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default CryptoDevs;