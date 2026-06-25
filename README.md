# Teckon — Premium Heavy Machinery Hydraulic Spares Portal

Teckon™ (Shreeji Hydraulics, founded in 2000) is a premium, modern B2B/B2C manufacturing showcase portal for heavy machinery hydraulic parts and spares (specializing in JCB, Hitachi, CAT, Terex, Tata JD, and Case components).

Designed with a high-fidelity industrial visual identity (heavy-machinery JCB yellow, dark slate-blue branding) and packed with interactive telemetry tools, dynamic B2B panels, and optimized filtering systems.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Interactive Maps:** `@svg-maps/india` & `topojson-client` (SVG India Map Chart)
- **Sliders/Carousel:** `swiper` (Autoplay category & review sliders)
- **Forms & Validation:** `react-hook-form` & `react-phone-number-input`
- **Email Delivery:** `resend` (API for RFQ submissions)

---

## 🌟 Advanced Features Implemented

### 1. ⚙️ Interactive Diagnostics Bench & Cylinder Simulator
- Interactive SVG Cylinder Blueprint Simulator responsive to user faders (adjusting Bore, Rod, and Stroke in real-time).
- High-precision `requestAnimationFrame` animation loop rendering mechanical movement.
- Visual telemetry details including oil flow indicator arrows (High-pressure orange/red vs. low-pressure blue/green).
- Interactive presets, manual position slider, auto-cycle, and a high-fidelity neon-accented SVG gauge showing mechanical force metrics.

### 2. 🗺️ Interactive Pan-India Supply Network
- Custom SVG map of India highlighting primary nodes: Gujarat (HQ, Primary Supply Hub), Rajasthan, Maharashtra, and Madhya Pradesh.
- Real-time details panel reflecting state-specific information (hubs, roles, distribution points) on hover/click.
- Interactive legend toggle to highlight regions and custom responsive sizing.

### 3. 🔩 Intelligent Products Catalog & B2B Fitment Checker
- **Interleaved Listing:** Displays products using a round-robin category interleaving algorithm to showcase a diverse catalog.
- **Search & Filters:** Debounced search, a custom floating glassmorphic category filter popover, and a "Customer Choice" (⭐) toggle filter.
- **Infinite Pagination:** Load-on-scroll layout with a 100ms simulated database fetching latency and skeleton loaders.
- **Image Lightbox:** Custom lightbox modal supporting click-to-zoom, panning/dragging, and viewport centering.
- **Product B2B Panel (`/products/[slug]`):**
  - **Fitment Checker:** Direct search to check machinery compatibility.
  - **Cutoff Timer:** Live 5:00 PM shipping cutoff countdown timer.
  - **Delivery Estimator:** Live ETA dates for major industrial regions.
  - **Resource Downloads:** High-fidelity CAD drawing and technical diagram links.
  - **Wholesale RFQ Form:** Instant multi-item request for quotation.

### 4. 📰 Reading Progress & Blog Filters
- Fully featured Blog listing page with search and category filters.
- **Reading Progress Bar:** Floating scroll progress indicator on blog post detail pages.
- Sticky editorial sidebar structure with author details and related posts carousel.

### 5. 📑 Glassmorphic Sticky Legal Docs
- Overhauled Privacy Policy and Terms and Conditions pages.
- Glassmorphic sidebars tracking scroll height via `IntersectionObserver`.
- Document-wide keyword search inputs highlighting matched sections in real-time.
- Summary TL;DR panels providing bulleted takeaways for corporate users.

### 6. 📞 B2B Quick Actions Rail
- Desktop floating action rail and a sticky bottom mobile CTA bar with direct phone calls, WhatsApp chat pre-filled templates, and instant inquiry forms.
- Dual-column 720px header Mega-Menu featuring Lucide icons and telemetry banner links.

---

## 💻 Local Setup & Installation

Follow these steps to run the Teckon portal locally on your development machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18.x or later) and `npm` (or `yarn`/`pnpm`/`bun`) installed.

### 2. Clone the Repository
```bash
git clone <repository-url>
cd teckon
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file (or copy from `env.example`) in the root directory:
```bash
cp env.example .env
```
Open the `.env` file and insert your credentials:
```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to explore the portal.

### 6. Building for Production
To create a optimized production build:
```bash
npm run build
npm run start
```
To run the ESLint linter check:
```bash
npm run lint
```
