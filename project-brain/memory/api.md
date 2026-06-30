# API Memory

Source: extracted from `.agents/` — mirrors real project state.

## Current State
No external REST API. No third-party API integrations.

## Server Actions
- Location: `src/app/actions/`
- Used for: contact/inquiry form submission
- Pattern: Next.js Server Actions (not API routes)

## Internal Data Access
All data via direct import from `src/lib/data.ts` — no fetch calls needed.

## External Services Used (non-API)
- Google Maps (embedded iframe on contact page)
- WhatsApp link (prefilled message URL from B2B panel)
- Open Graph / Twitter card metadata (no API, static config in `layout.tsx`)

## Future (per e-commerce roadmap)
- Payment gateway integration planned
- Checkout data collection
- No timeline defined
