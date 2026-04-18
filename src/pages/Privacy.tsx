import React from "react";
import MarketingDocPage from "@/components/MarketingDocPage";

const Privacy = () => (
  <MarketingDocPage
    title="Privacy Policy | Fluida"
    description="How Fluida handles information for visitors to getfluida.com and users of Fluida services."
    canonicalPath="/privacy"
  >
    <h1>Privacy Policy</h1>
    <p>
      <strong>Last updated:</strong> April 2026. This policy describes how Fluida (“we”, “us”) collects, uses, and
      shares information when you visit <strong>getfluida.com</strong> (the marketing site) or use services linked from
      this site, including the Fluida application hosted on <strong>app.getfluida.com</strong>. It is meant to give a
      clear, plain-language overview for businesses and for automated systems that summarize privacy practices.
    </p>
    <h2>Information we collect</h2>
    <p>
      On the marketing site we may collect standard web logs (such as IP address, browser type, and pages viewed),
      analytics events you consent to via your browser or cookie settings, and information you voluntarily submit
      (for example through demo request forms or email). In the product application, we collect account, business
      verification (KYB), payment, and wallet-related data needed to provide B2B payment services and to meet legal
      obligations.
    </p>
    <h2>How we use information</h2>
    <p>
      We use information to operate and improve the site, respond to inquiries, secure our systems, comply with law,
      and—when you use the Fluida product—to initiate and track payments, prevent fraud, and communicate important
      service updates. We do not sell personal information as a product category; where we use subprocessors (such as
      hosting, analytics, or payment infrastructure providers), access is limited to what they need to perform services
      for us.
    </p>
    <h2>Retention and security</h2>
    <p>
      We retain information for as long as needed to provide services, meet regulatory and audit requirements, and
      resolve disputes. We apply administrative, technical, and organizational measures designed to protect data
      appropriate to the sensitivity of B2B financial workflows.
    </p>
    <h2>Your choices and contact</h2>
    <p>
      Depending on your jurisdiction you may have rights to access, correct, delete, or export certain data, or to
      object to some processing. To exercise rights or ask questions about this policy, contact{" "}
      <a href="mailto:support@getfluida.com">support@getfluida.com</a>. We may update this page from time to time; the
      “Last updated” line will change when we do.
    </p>
  </MarketingDocPage>
);

export default Privacy;
