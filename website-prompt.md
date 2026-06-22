# 🌐 Website Generation Prompt
>
> **For use with:** Lovable (lovable.dev), Emergent (emgnt.ai), v0, Bolt.new, or any AI website builder

---

## 📌 Fill In Before Pasting

Replace every value in this table before copying the prompt:

| Placeholder | Your Value | Example |
|---|---|---|
| `Shreeji Hydraulics` | *(your company name)* | Shreeji Hydraulics |
| `Teckon` | *(brand / short name)* | Teckon |
| `Premium Hydraulic Parts & Spares for Heavy Machinery` | *(one-line tagline)* | Premium Hydraulic Parts & Spares for Heavy Machinery |
| `/logo.png` | *(URL or `/logo.png`)* | Teckon Quality Spares Logo |
| `Teckon Quality Spares Logo` | *(alt text for logo)* | Teckon Quality Spares Logo |
| `Hydraulic Parts & Equipment` | *(your industry)* | Hydraulic Parts & Equipment |
| `Hydraulic Parts, Spares & Components for JCB, Hitachi, Terex, CAT, Tata Heavy Equipment` | *(what you sell)* | Hydraulic Parts, Spares & Components |
| `2000` | *(founding year)* | 2000 |
| `Pan-India & International Markets` | *(export reach)* | Pan-India & International Markets |
| `ISO 9001:2015, Make in India` | *(quality badges)* | ISO 9001:2015, Make in India |
| `shreejihyd4008@gmail.com` | *(contact email)* | <shreejihyd4008@gmail.com> |
| `+91-63518 79842` | *(contact phone)* | +91-63518 79842 |
| `36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004` | *(full address)* | 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004 |
| `+91-9426915578` | *(WhatsApp number)* | +91-9426915578 |
| `https://facebook.com/shreejihydraulics` | *(Facebook page URL)* | <https://facebook.com/shreejihydraulics> |
| `https://linkedin.com/company/shreeji-hydraulics` | *(LinkedIn URL)* | <https://linkedin.com/company/shreeji-hydraulics> |
| `https://instagram.com/shreejihydraulics` | *(Instagram URL)* | <https://instagram.com/shreejihydraulics> |
| `#1E293B` | *(hex color)* | #1E293B (Teckon Blue) |
| `#0B0F19` | *(hex color)* | #0B0F19 (Dark Blue) |
| `#FF6B35` | *(hex color)* | #FF6B35 (Teckon Orange) |
| `#FFBE00` | *(hex color)* | #FFBE00 (JCB Yellow Accent) |
| `#0B0F19` | *(hex color)* | #0B0F19 (JCB Black / Industrial Contrast) |
| `Mr. J.C. Patel` | *(founder full name)* | Mr. J.C. Patel |
| `Co-Founder & Director` | *(founder title)* | Co-Founder & Director |
| `Mr. Alpesh Patel` | *(second founder full name)* | Mr. Alpesh Patel |
| `Co-Founder & Director` | *(second founder title)* | Co-Founder & Director |

---

## 🪪 Visiting Card Reference Details

Use the supplied visiting card as a visual and content reference. Extract and use these real business details consistently across the website:

- **Business name:** Shreeji Hydraulic Spares / Shreeji Hydraulics
- **Brand / logo mark:** Teckon Quality Spares
- **Primary contacts:** J.C. Patel and Alpesh Patel
- **Mobile numbers:** +91-94262 02945, +91-94269 15578, +91-63518 79842
- **Email:** <shreejihyd4008@gmail.com>
- **Address:** 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004
- **Deals in:** JCB, L770, Terex, Tata JD, CAT 424, Hitachi, Breakers, Tipper, Excavator Earthmoving, and all types of hydraulic parts
- **Visual direction:** Industrial heavy-machinery look with JCB-inspired yellow and black accents, Teckon dark blue/slate branding, bold machinery imagery, and strong CTA buttons with standardized hover darkening effects.

---

## 🚀 PROMPT — PASTE THIS INTO LOVABLE / EMERGENT

---

Build me a professional **B2C corporate website in Next.js** for **Shreeji Hydraulics** (brand name: **Teckon**), a company in the **Hydraulic Parts & Equipment** industry founded in **2000**. The website should look premium, modern, and industrial — inspired by high-end B2C manufacturing company websites and JCB-style heavy-equipment branding.

---

### 🎨 Brand & Design System

- **Logo:** Use "Teckon™" as the logo. Display it in the top navigation bar and footer.
- **Tagline:** "Premium Hydraulic Parts & Spares for Heavy Machinery"
- **Primary Color:** `#1E293B` (Teckon Blue)
- **Secondary Color:** `#0B0F19` (Dark Blue)
- **Accent / Highlight Color:** `#FF6B35` (Teckon Orange)
- **JCB-Inspired Accent:** `#FFBE00` (machinery yellow)
- **Industrial Contrast:** `#0B0F19` (machinery black)
- **Color Direction:** Use a balanced JCB-inspired yellow/black/white industrial scheme with Teckon blue/slate as the brand anchor. Avoid a flat single-color look; combine yellow CTAs, black text/headers, blue trust sections, and white/gray content areas for a premium heavy-machinery feel. All yellow buttons should have a standardized hover darkening transition.
- **Typography:** Use `Outfit` or `Inter` from Google Fonts — headings bold/heavy weight, body text regular weight.
- **Design Style:** Premium industrial B2C — dark header, clean white sections alternating with light gray, bold hero imagery, subtle shadows and micro-animations.
- **Responsive:** Fully mobile-first responsive layout across desktop, laptop, tablet, and mobile.
- **Animations:** Use high-quality Framer Motion animations on every page. Include scroll reveal, staggered cards, animated counters, smooth page transitions, carousel motion, hover lift, button micro-interactions, and mobile drawer transitions. Animations must feel polished and fast, not distracting.

---

### 🧱 Tech Stack

- **Framework:** Next.js 16+ (App Router). Create the website in Next.js, using reusable components, route-level metadata (such as dynamic sitemaps and robots.txt), and clean file structure.
- **Styling:** Tailwind CSS v4 (configured via `@import` and `@theme` in globals.css)
- **Icons:** Lucide React
- **Animations:** Framer Motion for subtle entrance and scroll-reveal animations
- **Carousel:** Swiper.js for product and testimonial sliders
- **Forms:** React Hook Form with validation, country-code selection dropdown, and numeric input sanitization
- **Maps:** Embed a Google Maps iframe for the contact page (displayed side-by-side with the inquiry form)
- **India Reach Map:** Use `@svg-maps/india` package with custom SVG path rendering to build an interactive, responsive India map on the homepage and highlight selected states (Gujarat, Rajasthan, Maharashtra, Madhya Pradesh) accurately, accompanied by an interactive detail panel.
- **Email Integration:** Send inquiries using Resend API via Next.js Server Actions with clean, responsive HTML email templates, reply CTAs, and a WhatsApp reply link generator.

---

### 🗺️ Pages & Routing

Build the following pages:

```
/ → Homepage
/about → About Us
/products → Products Catalog
/products/[slug] → Product Details Page
/quality → Quality & Manufacturing
/events → Events & Exhibitions
/careers → Careers
/blog → Blog / News
/blog/[slug] → Blog Post Detail Page
/contact → Contact Us
/privacy-policy → Privacy Policy
/terms → Terms & Conditions
```

**Important routing instruction:** Generate each page as a separate URL route, not as sections on one single scrolling page. Home, About Us, Products, Quality, Events, Careers, Blog, Contact, Privacy Policy, Terms & Conditions, product detail pages, and blog detail pages must all have their own Next.js App Router route files and independent page layouts. Navigation links, footer links, CTA buttons, breadcrumbs, product cards, and blog cards must route users to the correct URL with normal page navigation instead of scrolling to anchors on the homepage.

**Do not create a one-page website.** The homepage may include preview sections such as About Company, Top Products, and Testimonials, but those previews must link to their full dedicated pages (`/about`, `/products`, `/blog`, etc.). Do not place all About Us, Products, Quality, Events, Careers, Blog, and Contact content inside the homepage.

---

### 📐 Layout Components (Shared Across All Pages)

#### Top Info Bar (above navigation)

- Left side: 📧 <shreejihyd4008@gmail.com> | 📞 +91-63518 79842
- Right side: Social icons linking to Facebook, WhatsApp (wa.me/919426915578), LinkedIn, Instagram
- Background: `#0B0F19`, text white, small font size

#### Main Navigation

- Logo on the left: "Teckon™"
- Nav links: Home | About Us | Products (dropdown) | Quality | Events | Careers | Blog | Contact
- Products dropdown shows product categories (JCB Spares, Terex Parts, CAT Components, Breakers & Tippers, L770 / Tata JD, Excavator Parts, General Hydraulics)
- Sticky on scroll with a subtle box-shadow when scrolled
- Mobile: Hamburger menu with slide-out drawer

#### Footer

- **Column 1:** Brand logo "TECKON™", tagline "Premium Hydraulic Parts & Spares", social icons.
- **Column 2:** Quick Links (all main pages: Home, About Us, Products, Quality, Events, Careers, Blog, Contact Us)
- **Column 3:** Product Range links (JCB Hydraulic Spares, Terex Parts, CAT 424 Components, Breakers & Tippers, L770 / Tata JD Spares, Excavator Parts, General Hydraulics) which link directly to `/products?category=<category_id>`
- **Column 4:** Contact info — address "36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004", phone "+91-63518 79842" and "+91-94269 15578 (Alpesh)", email "<shreejihyd4008@gmail.com>"
- **Bottom bar:** Copyright Shreeji Hydraulics | Privacy Policy | Terms & Conditions
- **Badges row:** Display two white-card badges: ISO 9001:2015 Certified logo (WebP, hover scale-105) and Make in India lion logo (WebP, zoomed in at scale-1.35, hover scale-1.5).
- Background: `#0B0F19`, white text

#### Quick Access Buttons (visible on every page)

- Add persistent quick-access CTA controls on every page.
- Desktop: fixed right-side vertical quick action rail with:
  - **WhatsApp Chat** button linking to `https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares`
  - **Call Now** button linking to `tel:+916351879842`
  - **Quick Inquiry** button linking to `/contact`
- Mobile: bottom sticky CTA bar with three equal buttons:
  - **Call** (`tel:+916351879842`)
  - **WhatsApp** (`https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares`)
  - **Inquiry** (`/contact`)
- Use Lucide icons, strong yellow/black contrast, accessible labels, hover/focus states, and safe-area padding for mobile devices.
- Keep quick-access buttons above page content without hiding important text or form controls.

---

### 📄 Page 1 — Homepage `/`

Build these sections in order:

#### 1.1 Hero Banner

- Clean layout to fit viewport cleanly. No scroll indicator.
- Background: dark overlay on an industrial/machinery image with JCB-style yellow heavy equipment (`/images/hero-banner.webp`)
- **H1:** "Premium Hydraulic Parts & Spares for Heavy Machinery"
- **Subtext:** "Teckon has been a trusted leader in Hydraulic Parts & Equipment since 2000, delivering precision-engineered hydraulic spares across India and international markets."
- Three CTA buttons: "Explore Products" (links to /products) | "WhatsApp Inquiry" (links to WhatsApp) | "Call Now" (tel link)
- Subtle animated gradient background

#### 1.2 Stats / Counter Strip

- Horizontal strip with 4 animated counters:
  - `25+` Years of Experience
  - `10+` States Served
  - `5000+` Products in Stock
  - `99%` Client Satisfaction
- Background: `#1E293B` (Teckon Blue), white text, large bold numbers

#### 1.3 Our Top Products (Carousel)

- Section title: "Our Top Products"
- Swiper/carousel of 3–5 product category cards using Swiper.js
- Each card: product WebP image, category name, short description, "View Products" button
- Smooth auto-play carousel with manual navigation dots/arrows
- Product categories:
  - JCB Hydraulic Spares
  - Terex Equipment Parts
  - CAT (Caterpillar) Components
  - Breakers & Tippers
  - General Hydraulic Parts
  - Excavator Earthmoving Parts
  - Tata JD / L770 / CAT 424 Spares

#### 1.4 About Company

- Two-column layout: left = image (company/factory photo WebP), right = text
- **Heading:** "About Teckon"
- **Text:** "Teckon is a leading manufacturer and distributor of hydraulic parts and spares, established in 2000. We specialize in high-quality hydraulic components for JCB, Terex, Caterpillar, and other heavy machinery. We combine advanced engineering with stringent quality control to deliver world-class hydraulic parts for industrial applications across India and internationally."
- "Read More" button linking to /about
- Decorative accent line on heading

#### 1.5 Why Choose Us

- Section title: "Why Choose Teckon?"
- Grid of 4 USP cards with icons:
  - 🏭 **Advanced Manufacturing** — State-of-the-art production facilities with precision machinery
  - 🌍 **Global Reach** — Serving clients across India and international markets
  - ✅ **Quality Assured** — ISO 9001:2015 certified with rigorous quality control
  - 🔧 **Specialized Solutions** — Custom hydraulic parts for JCB, Terex, CAT, and more
- Cards: white background, icon in `#1E293B`, hover lift animation

#### 1.6 Our Partners / Clients

- Section title: "Our Trusted Partners"
- Horizontal scrolling logo strip (grayscale logos on hover → color)
- 8–10 partner logo boxes
- Auto-scroll marquee animation

#### 1.7 Global Presence

- Section title: "Our Global Presence"
- Left: descriptive text about Teckon's India reach and supply network
- Right: interactive/responsive India map built with `@svg-maps/india` package
- Highlight these states properly:
  - Gujarat (HQ, Primary Supply Hub: Rajkot - `#FFBE00`)
  - Rajasthan (Key Distribution Partner: Jaipur & Jodhpur - `#FF9D3D`)
  - Maharashtra (Distribution Hub: Pune & Mumbai - `#FF6B35`)
  - Madhya Pradesh (Central Network Node: Indore & Bhopal - `#E84393`)
- Highlighted states should use their distinct color schemes, while other states remain semi-transparent white/gray.
- Add hover/click state triggers and display an interactive State Info panel showing name, city, role, and details when hovered or selected.
- Include a small interactive legend listing the states, enabling users to click to select/toggle.
- Stat chips: "Strong Reach Across 4 States", "Trusted Hydraulic Spares Network", "Serving Gujarat, Rajasthan, Maharashtra & Madhya Pradesh"

#### 1.8 Testimonials

- Testimonial cards in a Swiper.js carousel with autoplay and pagination dot controls.
- Quote, client name, company, star rating, and initials-based avatar with colored gradient backgrounds.
- Use 6 real reviews representing key clients (e.g. from Jaipur, Pune, Indore, Udaipur, Nashik) testifying to the quality and durability of JCB, Terex, CAT, and Hitachi spares.

---

### 📄 Page 2 — About Us `/about`

Sections in order:

#### 2.1 Hero Banner

- Background image WebP with dark overlay
- **H1:** "About Teckon"
- Breadcrumb: Home > About Us

#### 2.2 Innovation Pillars

- 3-column grid:
  - 🌱 Sustainable Manufacturing
  - ⚙️ Advanced Automation
  - 📈 Efficient Production
- Icon + heading + short paragraph each

#### 2.3 Meet the Founder / Leadership

- Two-column layout for each founder, ordered with J.C. Patel first and Alpesh Patel second:
  - Left/right alternating layout for portrait image and text.
  - **Name:** Mr. J.C. Patel
  - **Title:** Co-Founder & Director
  - **Contact:** +91-94262 02945 (click-to-call)
  - Bio paragraph: As Co-Founder, Mr. J.C. Patel brings extensive expertise in hydraulic engineering and supply chain management. His technical knowledge and industry relationships have been instrumental in establishing Teckon™'s reputation for quality and reliability. With decades of experience in the hydraulic parts industry, Mr. J.C. Patel continues to guide product development and quality assurance, ensuring every Teckon™ part meets the highest standards of performance.
  
  - **Name:** Mr. Alpesh Patel
  - **Title:** Co-Founder & Director
  - **Contact:** +91-94269 15578 (click-to-call)
  - Bio paragraph: Co-Founder and driving force behind Teckon™'s growth, Mr. Alpesh Patel has over 25 years of experience in hydraulic parts distribution and manufacturing. With a deep understanding of the construction equipment industry, he has built Teckon™ into a trusted name for hydraulic spares across India. Under his leadership, Teckon™ has expanded from a local distributor in Rajkot to a company with nationwide reach, earning ISO 9001:2015 certification and the trust of major equipment operators.

#### 2.4 Vision & Mission

- Two cards side by side:
  - 🎯 **Vision:** "To be the leading manufacturer of hydraulic parts and spares in India, delivering innovation and precision to every client nationwide."
  - 🚀 **Mission:** "To manufacture and distribute world-class hydraulic parts through cutting-edge technology, continuous improvement, and an unwavering commitment to quality and customer satisfaction."
- Cards with `#1E293B` left border accent

#### 2.5 Core Values

- 5 value cards in a row:
  - ✅ Quality
  - 🤝 Integrity
  - 💡 Innovation
  - 👥 Customer Focus
  - 🏆 Teamwork
- Icon + value name + one-line description

---

### 📄 Page 3 — Products `/products`

#### 3.1 Page Header

- Title: "Hydraulic Parts & Spares — Product Catalog"
- Breadcrumb: Home > Products

#### 3.2 Filter Bar

- Tab-based filter by category
- Categories: JCB Spares | L770 / Tata JD | Terex Parts | CAT Components | Breakers & Tippers | Excavator Parts | General Hydraulics | All Products
- Filter selection must sync with the URL parameter `?category=<category>` (e.g. `?category=jcb`), dynamically reading URL parameters on page load using `useSearchParams()` wrapped inside a Next.js `Suspense` boundary.

#### 3.3 Product Grid

- Responsive 3-column grid (2 on tablet, 1 on mobile)
- Each product card contains:
  - Product image loading WebP asset (`/images/product-jcb.webp` or `/images/product-excavator.webp`) using a custom `SafeImage` or Next.js `Image` component. LCP images should load eagerly (`loading="eager"` or `priority`).
  - Model Code (e.g., `TQS-JCB-001`)
  - Reference number (e.g., `REF-20/925345`)
  - Short description
  - "View Details" button
- Hover: card lifts with shadow, button changes color (standardized hover darkening effect)

#### 3.4 Product Detail Page `/products/[slug]`

- Title: product name
- Image gallery (2–3 WebP images)
- Specs table: dimensions, pressure rating, flow rate, applications
- Inquiry CTA buttons: "Request a Quote" (links to `/contact` with pre-filled subject) and "WhatsApp" (direct link)

---

### 📄 Page 4 — Quality `/quality`

#### 4.1 Quality Hero

- **Headline:** "Precision. Performance. Perfection."
- **Subtext:** "Teckon is ISO 9001:2015 certified, maintaining the highest standards across every stage of production. All hydraulic parts undergo rigorous testing to ensure reliability and durability."

#### 4.2 Manufacturing Process Steps

- Numbered vertical timeline with icons:
  1. 📐 **Design & Development** — CAD/CAM, engineering analysis for hydraulic systems
  2. 🔨 **Forging & Machining** — CNC, VMC, and specialized hydraulic machining
  3. 🔬 **Lab Testing** — Pressure testing, metallurgical analysis
  4. 📏 **Quality Control** — CMM inspection, tolerance verification
  5. 🏗️ **Assembly** — Precision assembly in controlled environment
  6. ✅ **Final Testing** — Hydraulic pressure and performance testing on certified equipment

#### 4.3 Certifications Section

- Grid of certification badges/cards
- Display: ISO 9001:2015 Certified, Make in India, Authorized Distributor for Major Brands

---

### 📄 Page 5 — Events `/events`

#### 5.1 Page Header

- Title: "Events & Exhibitions"
- Breadcrumb: Home > Events

#### 5.2 Event Timeline / Grid

- Alternating left-right timeline layout
- Each event card:
  - Year badge (e.g., "2025")
  - Event name (e.g., "Bauma Munich 2025")
  - Location with flag emoji
  - Short description
  - Photo placeholder WebP
- Use real or detailed events:
  - Excon Bengaluru — 2023 — Domestic
  - Bauma Conexpo India — Noida 2024 — Domestic

---

### 📄 Page 6 — Careers `/careers`

#### 6.1 Culture Section

- Heading: "Join the Teckon Team"
- 3-column grid of culture values with icons

#### 6.2 Open Positions

- Notice: "We are always on the lookout for talented, driven, and passionate individuals who want to grow their careers in the hydraulic engineering and manufacturing industry. If you want to be a part of our dynamic team in India, please share your details and send your resume directly to our HR department."
- Email CTA button linking to `mailto:shreejihyd4008@gmail.com?subject=Resume%20Submission%20—%20Teckon%E2%84%A2%20Quality%20Spares`

---

### 📄 Page 7 — Blog `/blog`

#### 7.1 Blog Grid

- 3-column card grid
- Each card: Featured image, date, category tag, article title, excerpt, "Read More" link
- Real detailed blog articles related to JCB and Hitachi auto parts with animations and clean UI. Examples:
  - "The Complete Guide to Hydraulic System Maintenance"
  - "Hitachi Excavator Hydraulics: EX200 & Zaxis Troubleshooting"
  - "JCB 3CX Hydraulics: Gear Pumps vs Piston Pumps Guide"
  - "JCB vs CAT Hydraulic Systems: What You Need to Know"

#### 7.2 Individual Blog Post `/blog/[slug]`

- Full article view with hero image, date, author, content
- Related articles section at the bottom

---

### 📄 Page 8 — Contact Us `/contact`

#### 8.1 Contact Details

- Five-column responsive info cards at the top:
  - 📍 **Address:** 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004
  - 📧 **Email:** <shreejihyd4008@gmail.com> (mailto link)
  - 📞 **Call Sales:** +91-63518 79842 (click-to-call link)
  - 💬 **Alpesh Patel:** +91-94269 15578 (WhatsApp click-to-chat link)
  - 💬 **J.C. Patel:** +91-94262 02945 (WhatsApp click-to-chat link)

#### 8.2 Layout

- Side-by-side layout: Inquiry Form on the left, Google Maps Embed on the right.

#### 8.3 Inquiry Form

Form fields validated with React Hook Form:
- Full Name (required)
- Email Address (required, validated with pattern matching)
- Phone Number (required, exactly 10 digits, auto-sanitized to remove non-numeric input, with a country-code selection dropdown)
- City
- Country (auto-updates when a country code is selected, e.g. +91 is India, +86 is China, etc.)
- Product / Subject (dropdown: JCB Hydraulic Spares, Terex Parts, CAT Components, Breakers & Tippers, L770 / Tata JD Spares, Excavator Parts, General Hydraulics, Other)
- Message (textarea)
- Submit Button: "Send Inquiry" in `#FF6B35`

On submit: Calls a Next.js Server Action (`sendInquiryAction`) to deliver the email securely using the **Resend API**. Show success/error toast or alert notification on submit. If the API key is not configured, fallback gracefully by printing to the server console.

#### 8.4 Google Maps Embed

- Embed Google Maps iframe for "Teckon™ Shreeji Hydraulics Location — Gondal Road, Rajkot, Gujarat"
- Displayed in a card matching the form height.

---

### 📄 Page 9 — Privacy Policy `/privacy-policy`

- Standard privacy policy page with dark heading and white card content
- Sections: Data Collection (distinguishing Personally Identifiable Information and Derivative/Usage Data), Data Usage, Cookies, Data Sharing (documenting trusted third-party service providers like Resend for email delivery), User Rights

---

### 📄 Page 10 — Terms & Conditions `/terms`

- Standard T&C page
- Sections: Acceptance, Intellectual Property Rights, Use of OEM Part Numbers and Trademarks (aftermarket parts disclaimer specifying 'For Reference Only', 'No Affiliation', 'Aftermarket Products' and 'Ownership of Trademarks'), Product Information, Prohibited Use, Limitation of Liability, Warranty, Governing Law (India)

---

### ✨ UX & Polish Requirements

- **Page transitions:** Smooth fade-in between route changes
- **Section animations:** Every page should include purposeful animation: hero text reveal, staggered cards, timeline reveal, animated counters, carousel movement, form field focus transitions, and footer/social hover states using Framer Motion.
- **Hover states:** All cards, buttons, and nav links have hover feedback (standardized hover darkening transitions for yellow buttons).
- **Loading states:** Skeleton loaders for product grid
- **WhatsApp floating button:** Fixed bottom-right WhatsApp chat button linking to `wa.me/919426915578`
- **Call floating button:** Fixed direct call button linking to `tel:+916351879842`
- **Quick Inquiry button:** Persistent shortcut linking to `/contact` on every page
- **Back to top button:** Appears after scrolling 300px
- **Active nav state:** Current page link is highlighted in nav
- **404 page:** Custom "Page Not Found" with navigation back to homepage

---

### 📱 Mobile Specific

- Hamburger nav with animated slide-out drawer
- All cards become single-column on mobile
- Touch-friendly carousel with swipe support
- Tap-to-call: +91-63518 79842 prominently visible
- Tap-to-WhatsApp: +91-9426915578 prominently visible
- Tap-to-Email: <shreejihyd4008@gmail.com> prominently visible
- Bottom sticky CTA bar on mobile: "📞 Call" | "💬 WhatsApp" | "⚡ Inquiry"
- Verify that the mobile sticky CTA bar does not overlap forms, footer links, or important content. Add bottom padding to page content when needed.

---

### 🔒 SEO Requirements

- Each page has a unique `<title>` and `<meta description>`
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- Single `<h1>` per page, proper heading hierarchy
- Image `alt` attributes on all images
- Dynamic `robots.ts` and `sitemap.ts` generated for google crawler.

---

### 📦 File / Asset Placeholders

If logo or images are not yet available, use:

- **Logo:** Use text "Teckon™" in `#1E293B` color with professional font
- **Product images:** WebP fallback images or gear/pump SVG icon centered
- **Team/founder photo:** WebP portrait photos of the founders
- **Hero background:** WebP banner `/images/hero-banner.webp` or CSS gradient from `#0B0F19` to `#1E293B` with `#FFBE00` accent bands
- **Partner logos:** Grayscale WebP logos (hover transition to full-color)

---

### Before generating, verify

- All company details are filled in: Shreeji Hydraulics (Teckon™)
- Contact email: <shreejihyd4008@gmail.com>
- Contact phone: +91-63518 79842
- WhatsApp: +91-9426915578
- Address: 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004
- Visiting card details are reflected: J.C. Patel, Alpesh Patel, Teckon™ Quality Spares, JCB/L770/Terex/Tata JD/CAT 424/Hitachi/Breakers/Tipper/Excavator product references
- Website is built in Next.js 16+ App Router
- JCB-inspired yellow/black color scheme is used tastefully with Teckon™ blue/slate branding
- Every page has scroll, hover, and transition animations
- Every page includes direct WhatsApp, call, and quick inquiry access
- No raw placeholder text remains in the final output
- Every page has a unique <title> and meta description
- Mobile responsive breakpoints are defined
- All interactive elements have hover/focus states

---

### Success criteria

- Site must be 100% functional with placeholder content (no broken links)
- All animations must work on scroll and hover
- Contact form must validate inputs, show success/error alerts, and send inquiry via Resend Server Action (Secure email delivery)
- Mobile hamburger menu must animate smoothly
- Homepage must include a responsive India map using the `@svg-maps/india` package, with Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh highlighted accurately with distinct colors, hover/click details panel, and legend list
- WhatsApp buttons link to appropriate phone numbers (+91-94269 15578 / +91-94262 02945)
- Direct call buttons link to +91-63518 79842, +91-94269 15578, and +91-94262 02945 where appropriate
- Quick inquiry buttons are available on every page
- All contact numbers and email are clickable and functional
- Home, About Us, Products, Quality, Events, Careers, Blog, Contact, Privacy Policy, Terms, product details, and blog details must open on their own URLs, not as same-page anchor sections
- Product catalog filters sync selection with URL parameters (`?category=<category>`), handling dynamic router/view transition states correctly with Next.js router and Suspense

---

> **NOTE FOR AI BUILDER:** All actual company values have been filled in. The website should be 100% functional and visually complete with these real details about Shreeji Hydraulics (Teckon™). All details are now specific and production-ready — no raw `[BRACKET]` text should remain visible in the final output.

---
