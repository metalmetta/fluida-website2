import React from "react";
import MarketingDocPage from "@/components/MarketingDocPage";

const Contact = () => (
  <MarketingDocPage
    title="Contact Fluida | Sales and support"
    description="Reach Fluida for customer support, press, demos, and partnerships."
    canonicalPath="/contact"
  >
    <h1>Contact Fluida</h1>
    <p>
      We route inquiries to the right team so businesses and partners get a fast answer. Fluida serves verified
      companies paying vendors internationally; if you are evaluating the product for your finance or operations team,
      the fastest path is often a live conversation with our team in addition to the self-serve links below.
    </p>
    <h2>Customer support</h2>
    <p>
      Email <a href="mailto:support@getfluida.com">support@getfluida.com</a> for help with onboarding, payments, or
      account access. Please include your business name and the email you use to sign in so we can locate your
      workspace quickly.
    </p>
    <h2>Demos and sales</h2>
    <p>
      Book time with our team via{" "}
      <a href="https://bookva.ai/fluida" target="_blank" rel="noopener noreferrer">
        bookva.ai/fluida
      </a>
      . We walk through bill payment flows, entity setup, and how fiat and USDC movements appear in the dashboard.
    </p>
    <h2>Press</h2>
    <p>
      Media requests: <a href="mailto:press@getfluida.com">press@getfluida.com</a>. You can also visit{" "}
      <a href="/press">/press</a> for announcements and assets.
    </p>
    <h2>Product access</h2>
    <p>
      New businesses can create an account at{" "}
      <a href="https://app.getfluida.com/register">app.getfluida.com/register</a>. KYB (Know Your Business)
      verification is required before payment features are enabled, in line with partner compliance requirements.
    </p>
  </MarketingDocPage>
);

export default Contact;
