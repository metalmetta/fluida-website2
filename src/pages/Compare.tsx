import React from "react";
import MarketingDocPage from "@/components/MarketingDocPage";

const Compare = () => (
  <MarketingDocPage
    title="Fluida vs Wise, Stripe & PayPal | B2B vendor payments"
    description="High-level comparison of Fluida to common alternatives for international B2B supplier payouts."
    canonicalPath="/compare"
  >
    <h1>Fluida vs Wise, Stripe, and PayPal (B2B vendor payments)</h1>
    <p>
      This page helps finance and engineering teams choose infrastructure for <strong>international B2B supplier and
      contractor payouts</strong>. Numbers are directional—always validate fees and coverage against your own
      corridors, volumes, and contracts.
    </p>
    <h2>Comparison matrix</h2>
    <div className="not-prose overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 p-2 text-left">Dimension</th>
            <th className="border border-gray-200 p-2 text-left">Fluida</th>
            <th className="border border-gray-200 p-2 text-left">Wise (Business)</th>
            <th className="border border-gray-200 p-2 text-left">Stripe</th>
            <th className="border border-gray-200 p-2 text-left">PayPal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-2">Primary fit</td>
            <td className="border border-gray-200 p-2">SMB B2B bills, vendors, hybrid fiat + USDC</td>
            <td className="border border-gray-200 p-2">International accounts and transfers</td>
            <td className="border border-gray-200 p-2">Payments acceptance, payouts, treasury APIs</td>
            <td className="border border-gray-200 p-2">Consumer + SMB checkout and wallet sends</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2">Stablecoin / Solana</td>
            <td className="border border-gray-200 p-2">Native USDC on Solana in product vision</td>
            <td className="border border-gray-200 p-2">Not core positioning</td>
            <td className="border border-gray-200 p-2">Crypto adjacent features vary by product</td>
            <td className="border border-gray-200 p-2">Not core for B2B AP</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2">Bill / vendor AP focus</td>
            <td className="border border-gray-200 p-2">Central bill + contact model</td>
            <td className="border border-gray-200 p-2">Transfers; lighter AP-specific workflows</td>
            <td className="border border-gray-200 p-2">Broad platform; AP often custom-built</td>
            <td className="border border-gray-200 p-2">Less common for AP teams at scale</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2">Fee posture (typical)</td>
            <td className="border border-gray-200 p-2">Positioned for large savings vs legacy wires</td>
            <td className="border border-gray-200 p-2">Transparent FX + transfer fees</td>
            <td className="border border-gray-200 p-2">Card + platform + payout pricing</td>
            <td className="border border-gray-200 p-2">Consumer-weighted pricing</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2">KYB / compliance</td>
            <td className="border border-gray-200 p-2">Business verification required for payments</td>
            <td className="border border-gray-200 p-2">Strong business onboarding</td>
            <td className="border border-gray-200 p-2">KYC/KYB via Stripe stack</td>
            <td className="border border-gray-200 p-2">Account verification</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>When Fluida is a strong match</h2>
    <ul>
      <li>You run recurring <strong>international vendor or contractor payouts</strong> and want a unified bill view.</li>
      <li>You are open to <strong>USDC on Solana</strong> as part of settlement or treasury, alongside fiat.</li>
      <li>You want API access scoped by <strong>business entity</strong> for multi-entity operators.</li>
    </ul>
    <p>
      See <a href="/pricing">pricing</a> and <a href="/developers">developers</a> for next steps, or start at{" "}
      <a href="https://app.getfluida.com/register">app.getfluida.com/register</a>.
    </p>
  </MarketingDocPage>
);

export default Compare;
