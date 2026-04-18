# AGENTS.md — Fluida marketing site (`fluida-website2`)

This repository is the **public marketing site** for Fluida (Vite + React + TypeScript), deployed to **Vercel** at `https://getfluida.com`. The live product dashboard is a separate app at `https://app.getfluida.com`.

## What to edit

- **Pages and layout:** `src/pages/`, `src/components/`
- **Global HTML shell & crawlable bootstrap:** `index.html` (includes static `<details>` summary and JSON-LD for bots)
- **Static agent/discovery assets (copied to site root):** `public/` — `llms.txt`, `openapi.json`, `index.md`, `robots.txt`, `sitemap.xml`, `schemamap.xml`, `public/.well-known/*`, `public/docs/llms.txt`
- **Edge behavior:** `middleware.ts` at repo root — `?mode=agent` returns JSON; `Accept: text/markdown` on `/` redirects to `/index.md`
- **Deploy headers:** `vercel.json` (`Link`, `Content-Signal`, MIME for `api-catalog` and `index.md`)

## What not to assume

- API implementation is **not** in this repo. OpenAPI at `/openapi.json` documents the **contract** for `https://app.getfluida.com`. Backend behavior changes belong in the private monorepo (`fluida_mono` per `llms.txt`).
- Do not add secrets, API keys, or customer data to this repo.

## Verification checklist

1. `npm run build` — must pass.
2. After deploy: `curl -sS 'https://getfluida.com/?mode=agent' | head`
3. `curl -sSI 'https://getfluida.com/'` — confirm `Link` and `Content-Signal` headers when served from Vercel.
4. Fetch `https://getfluida.com/openapi.json` and `https://getfluida.com/.well-known/api-catalog` — valid JSON.

## Conventions

- Match existing Tailwind + shadcn patterns; keep marketing copy factual and aligned with `public/llms.txt`.
- New top-level marketing routes: add to `src/App.tsx`, `public/sitemap.xml`, and footer/nav where appropriate.
