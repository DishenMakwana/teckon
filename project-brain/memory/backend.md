# Backend Memory

Source: extracted from `.agents/` — mirrors real project state.

## Architecture
Static-first Next.js site. No database server, no REST API, no auth backend.
All "backend" = React Server Components + Server Actions.

## Server Components (RSC)
- Default for all `page.tsx` — maximize performance + SEO
- Client Components (`"use client"`) only when interactive state required
- Keep Client Components small and nested

## Server Actions
- Location: `src/app/actions/`
- Used for form submissions (e.g. contact/inquiry form)
- No external API calls currently

## No Backend Services
- No database server (data is static in `src/lib/data.ts`)
- No authentication
- No session management
- No external API integrations (future: e-commerce checkout planned)

## Future Roadmap (per Terms/Privacy disclosures)
- E-commerce transition planned: checkout data collection, payment gateway
- Current site is catalog-only showcase
