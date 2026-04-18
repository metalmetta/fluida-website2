const AGENT_PAYLOAD = {
  product: {
    name: "Fluida",
    tagline: "B2B international vendor payments (fiat + Solana USDC)",
    marketing_site: "https://getfluida.com",
    app_url: "https://app.getfluida.com",
    register_url: "https://app.getfluida.com/register",
    category: ["B2B payments", "cross-border", "vendor payouts", "USDC", "Solana"],
  },
  api: {
    base_url: "https://app.getfluida.com",
    rest_prefix: "/api/v1",
    graphql_path: "/graphql",
    openapi_url: "https://getfluida.com/openapi.json",
  },
  authentication: {
    type: "http_basic_entity",
    description:
      "Authorization: Basic base64(userId:entityId). Required header X-Entity-ID: UUID of the business entity for entity-scoped routes.",
    oauth_protected_resource: "https://getfluida.com/.well-known/oauth-protected-resource",
  },
  documentation: {
    llms_txt: "https://getfluida.com/llms.txt",
    llms_developers: "https://getfluida.com/docs/llms.txt",
    developers: "https://getfluida.com/developers",
    compare: "https://getfluida.com/compare",
  },
  supporting_urls: {
    sitemap: "https://getfluida.com/sitemap.xml",
    about: "https://getfluida.com/about",
    contact: "https://getfluida.com/contact",
    privacy: "https://getfluida.com/privacy",
    pricing: "https://getfluida.com/pricing",
    api_catalog: "https://getfluida.com/.well-known/api-catalog",
    mcp_manifest: "https://getfluida.com/.well-known/mcp/manifest.json",
    mcp_server_card: "https://getfluida.com/.well-known/mcp/server-card.json",
  },
};

export const config = {
  matcher: ["/", "/index.html"],
};

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);

  if (url.searchParams.get("mode") === "agent") {
    return new Response(JSON.stringify(AGENT_PAYLOAD), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=3600",
      },
    });
  }

  const accept = request.headers.get("accept") || "";
  if (accept.includes("text/markdown")) {
    return Response.redirect(new URL("/index.md", url.origin).toString(), 302);
  }

  return undefined;
}
