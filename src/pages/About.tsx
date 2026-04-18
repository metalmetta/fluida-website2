import React from "react";
import MarketingDocPage from "@/components/MarketingDocPage";

const About = () => (
  <MarketingDocPage
    title="About Fluida | B2B payments for global vendors"
    description="Fluida builds international B2B payment software for businesses that pay suppliers and contractors across borders using fiat and Solana USDC."
    canonicalPath="/about"
  >
    <h1>About Fluida</h1>
    <p>
      Fluida is a financial technology company focused on <strong>business-to-business (B2B) payments</strong>—not
      consumer remittances, not payroll HR software, and not generic “Fluida” WordPress themes or artist names you
      might find elsewhere on the web. When people search for <strong>Fluida payments</strong> or{" "}
      <strong>getfluida.com</strong>, they mean this product: a dashboard for vendor bills, contacts, and treasury
      movement that pairs regulated fiat rails with <strong>Solana USDC</strong> for speed and cost efficiency.
    </p>
    <p>
      The company was founded in 2024. Teams use Fluida to reduce friction on <strong>international supplier payouts</strong>,
      centralize bill tracking, and access liquidity workflows that fit how SMBs actually operate. Fluida is a
      technology provider; banking services are delivered through licensed partners where applicable.
    </p>
    <h2>What makes this “Fluida” distinct</h2>
    <ul>
      <li>Public marketing site: <a href="https://getfluida.com">getfluida.com</a></li>
      <li>Live application: <a href="https://app.getfluida.com">app.getfluida.com</a></li>
      <li>Developer discovery: <a href="/developers">/developers</a>, <a href="/openapi.json">/openapi.json</a>,{" "}
        <a href="/llms.txt">/llms.txt</a></li>
    </ul>
    <h2>Press and profiles</h2>
    <p>
      Coverage includes pieces from Foundation Capital, EconomyUp, and other profiles linked from our homepage
      structured data. For press inquiries, see our <a href="/press">Press</a> page or email{" "}
      <a href="mailto:press@getfluida.com">press@getfluida.com</a>.
    </p>
  </MarketingDocPage>
);

export default About;
