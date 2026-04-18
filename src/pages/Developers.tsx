import React from "react";
import MarketingDocPage from "@/components/MarketingDocPage";

const Developers = () => (
  <MarketingDocPage
    title="Fluida for developers | API, auth, and agent discovery"
    description="Base URLs, authentication, OpenAPI, GraphQL, and resources for AI agents integrating with Fluida."
    canonicalPath="/developers"
  >
    <h1>Developers &amp; AI agents</h1>
    <p>
      Fluida exposes a <strong>REST</strong> API and <strong>GraphQL</strong> for the B2B dashboard. This page is the
      human-friendly entry point; machine-readable discovery lives at the URLs below so coding agents and automation
      can find authoritative facts without scraping the marketing UI.
    </p>
    <h2>Canonical discovery</h2>
    <ul>
      <li>
        <a href="/openapi.json">OpenAPI 3.1</a> (<code>https://getfluida.com/openapi.json</code>)
      </li>
      <li>
        <a href="/llms.txt">Root llms.txt</a> — full product and architecture context
      </li>
      <li>
        <a href="/docs/llms.txt">Scoped developer llms.txt</a> — API-focused excerpt
      </li>
      <li>
        <a href="/?mode=agent">Agent JSON</a> (<code>?mode=agent</code>)
      </li>
      <li>
        <a href="/.well-known/api-catalog">RFC 9727 API catalog</a>
      </li>
      <li>
        <a href="/.well-known/oauth-protected-resource">RFC 9728 OAuth protected resource metadata</a>
      </li>
    </ul>
    <h2>Base URLs</h2>
    <ul>
      <li>
        <strong>REST:</strong> <code>https://app.getfluida.com/api/v1/</code>
      </li>
      <li>
        <strong>GraphQL:</strong> <code>https://app.getfluida.com/graphql</code>
      </li>
      <li>
        <strong>Web app:</strong> <a href="https://app.getfluida.com">https://app.getfluida.com</a>
      </li>
    </ul>
    <h2>Authentication for agents</h2>
    <p>
      Entity-scoped requests use <code>Authorization: Basic</code> with Base64 encoding of{" "}
      <code>userId:entityId</code> and the header <code>X-Entity-ID: &lt;entity-uuid&gt;</code>. Always scope automation
      to a single entity UUID provided by the business customer; never guess entity IDs.
    </p>
    <pre>
      <code>
        {`Authorization: Basic <base64(userId:entityId)>
X-Entity-ID: <entity-uuid>`}
      </code>
    </pre>
    <h2>Rate limits</h2>
    <p>
      Integrations should backoff on <code>429 Too Many Requests</code>. When returned by the API, responses may
      include <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, and <code>Retry-After</code>. Batch
      jobs should use conservative concurrency until you have measured limits for your workload.
    </p>
    <h2>Errors</h2>
    <p>
      Prefer parsing <code>application/json</code> error payloads with stable <code>code</code> fields when the API
      returns them. HTML error pages should be treated as unexpected for API routes.
    </p>
    <h2>Register for product access</h2>
    <p>
      <a href="https://app.getfluida.com/register">Create an account</a> — KYB is required before payment features unlock.
    </p>
  </MarketingDocPage>
);

export default Developers;
