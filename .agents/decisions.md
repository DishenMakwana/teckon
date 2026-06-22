# Architecture Decisions Log

This document records the major design and implementation decisions made in the codebase.

---

## ADR 1: Next.js App Router Selection
- **Status:** Approved
- **Context:** The site is a modern product showcase website. Next.js App Router provides excellent SEO, server components by default, and page routing.
- **Decision:** Use Next.js 14/15 App Router. Pages are Server Components by default; Client Components are used only when interactive state is required (e.g. filters, map, interactive forms).

---

## ADR 2: Static Local Data Modeling (`data.ts`)
- **Status:** Approved
- **Context:** The site needs to showcase products, reviews, and blog posts without requiring a backend database.
- **Decision:** Implement all data lists (products, reviews, blogs) in `src/lib/data.ts` using TypeScript objects. This keeps the application simple, cost-efficient, and easy to deploy.

---

## ADR 3: Syncing Product Filters with URL Query Parameters
- **Status:** Approved
- **Context:** Users should be able to share links with pre-applied filters, and navigating back/forward should preserve the selected product filters.
- **Decision:** Sync product page filter states directly with the URL query parameters using Next.js `useSearchParams` and `useRouter`. Initialize filter state directly from the URL when loading the page.

---

## ADR 4: Side-by-Side Contact Page Layout
- **Status:** Approved
- **Context:** The contact page had duplicate contact details and an unoptimized visual structure.
- **Decision:** Remove the redundant "Direct Contact" section. Position the Inquiry Form and the interactive Google Map side-by-side on desktop views (collapsing to stacked on mobile) to optimize layout and interaction.

---

## ADR 5: Wrapping the Inquiry Form in a Styled Container
- **Status:** Approved
- **Context:** The contact form lacked structure and visibility against the page background.
- **Decision:** Wrap the form inside a card container styled with subtle borders, padding, and backdrop effects (Tailwind styles) to make it stand out and look premium.

---

## ADR 6: Client Reviews and Blog Animations
- **Status:** Approved
- **Context:** The homepage client feedback section and blog sections were static.
- **Decision:** Add CSS/motion transitions to enhance visual appeal. Ensure reviewer names are fully visible alongside ratings (stars), correcting the previous design where names were hidden or obscured.
