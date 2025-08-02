import React from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";

const CryptoDevs = () => {
  const landingPageData = {
    route: "/crypto",
    headline: "Convert USDC to EUR or USD - Instantly and On Your Terms",
    subheadline: "Fluida gives crypto builders real IBAN and USD accounts to off-ramp without friction. No custodial wallets, no middlemen.",
    ctaButton: "Request access",
    bullets: [
      "Off-ramp USDC to fiat in seconds",
      "Withdraw to real EUR/IBAN or USD/ACH accounts",
      "Fully compatible with self-custody wallets"
    ],
    heroImage: "/hero2.png",
    metaTitle: "Crypto Developers: Off-ramp to Real EUR/USD Accounts | Fluida",
    metaDescription: "Perfect for crypto developers, builders, and web3 professionals. Convert USDC instantly to fiat and withdraw to real EUR/USD IBAN accounts. Works with self-custody wallets.",
    metaKeywords: "crypto developers, USDC, off-ramp, EUR account, USD account, web3, blockchain developers, crypto to fiat, self-custody wallets"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default CryptoDevs;
