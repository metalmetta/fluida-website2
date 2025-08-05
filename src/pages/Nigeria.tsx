import { useState, useEffect } from "react";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { getLocationInfo, getPersonalizedHeadline } from "@/utils/geoip";

const Nigeria = () => {
  const [personalizedHeadline, setPersonalizedHeadline] = useState("Get Paid in USD or EUR — No Local Bank Hassles");
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    const loadLocationData = async () => {
      try {
        const { country: detectedCountry } = await getLocationInfo();
        setCountry(detectedCountry);
        
        const baseHeadline = (
          <>
            Get Paid for your work in USD or EUR,
            <br />
            Bank as a local
          </>
        );
        const customHeadline = getPersonalizedHeadline(detectedCountry, baseHeadline);
        setPersonalizedHeadline(customHeadline);
      } catch (error) {
        console.warn('Failed to load location data:', error);
      }
    };

    loadLocationData();
  }, []);

  const landingPageData = {
    route: "/nigeria",
    headline: personalizedHeadline,
    subheadline: "Fluida gives you a real global account to receive payments from clients on Upwork, Guru, Workana and beyond. No FX hefty fees, no delays.",
    ctaButton: "Join the waitlist",
    bullets: [
      "Get real and local USD/EUR banking details",
      "No forced currency conversion, store your earnings in USDC",
      "Off-ramp NGN instantly to your local bank account or eNaira wallet"
    ],
    heroImage: "/hero4.png",
    metaTitle: country && country !== "your country" ? `${country} Freelancers: Get Paid in USD/EUR | Fluida` : "Freelancers: Get Paid in USD/EUR | Fluida",
    metaDescription: country && country !== "your country" ? `Open your global account and receive USD/EUR payments like a local. Perfect for ${country} freelancers working with Upwork, Fiverr, and international clients. Avoid high FX fees.` : "Open your global account and receive USD/EUR payments like a local. Perfect for freelancers working with Upwork, Fiverr, and international clients. Avoid high FX fees.",
    metaKeywords: country && country !== "your country" ? `${country} freelancers, USD payments, EUR payments, global account, Upwork, Fiverr, freelancer payments, ${country}` : "freelancers, USD payments, EUR payments, global account, Upwork, Fiverr, freelancer payments"
  };

  return <LandingPageTemplate data={landingPageData} />;
};

export default Nigeria;