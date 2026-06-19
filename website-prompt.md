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
| `Hydraulic Parts, Spares & Components for JCB, Terex, CAT, Tata Heavy Equipment` | *(what you sell)* | Hydraulic Parts, Spares & Components |
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
| `#1A3A7A` | *(hex color)* | #1A3A7A (Teckon Blue) |
| `#002D5C` | *(hex color)* | #002D5C (Dark Blue) |
| `#FF6B35` | *(hex color)* | #FF6B35 (Teckon Orange) |
| `#FFCC00` | *(hex color)* | #FFCC00 (JCB Yellow Accent) |
| `#111111` | *(hex color)* | #111111 (JCB Black / Industrial Contrast) |
| `Mr. Alpesh Patel` | *(founder full name)* | Mr. Alpesh Patel |
| `Managing Director` | *(founder title)* | Managing Director |
| `Mr. J.C. Patel` | *(second founder full name)* | Mr. J.C. Patel |
| `Co-Founder` | *(second founder title)* | Co-Founder |

---

## 🪪 Visiting Card Reference Details

Use the supplied visiting card as a visual and content reference. Extract and use these real business details consistently across the website:

- **Business name:** Shreeji Hydraulic Spares / Shreeji Hydraulics
- **Brand / logo mark:** Teckon Quality Spares
- **Primary contacts:** J.C. Patel and Alpesh Patel
- **Mobile numbers:** +91-94262 02945, +91-94269 15578, +91-63518 79842
- **Email:** <shreejihyd4008@gmail.com>
- **Address:** 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat
- **Deals in:** JCB, L770, Terex, Tata JD, CAT 424, Breakers, Tipper, Excavator Earthmoving, and all types of hydraulic parts
- **Visual direction:** Industrial heavy-machinery look with JCB-inspired yellow and black accents, Teckon blue branding, bold machinery imagery, and strong CTA buttons.

---

## 🚀 PROMPT — PASTE THIS INTO LOVABLE / EMERGENT

---

Build me a professional **B2C corporate website in Next.js** for **Shreeji Hydraulics** (brand name: **Teckon**), a company in the **Hydraulic Parts & Equipment** industry founded in **2000**. The website should look premium, modern, and industrial — inspired by high-end B2C manufacturing company websites and JCB-style heavy-equipment branding.

---

### 🎨 Brand & Design System

- **Logo:** Use "Teckon Quality Spares" as the logo. Display it in the top navigation bar.
- **Tagline:** "Premium Hydraulic Parts & Spares for Heavy Machinery"
- **Primary Color:** `#1A3A7A` (Teckon Blue)
- **Secondary Color:** `#002D5C` (Dark Blue)
- **Accent / Highlight Color:** `#FF6B35` (Teckon Orange)
- **JCB-Inspired Accent:** `#FFCC00` (machinery yellow)
- **Industrial Contrast:** `#111111` (machinery black)
- **Color Direction:** Use a balanced JCB-inspired yellow/black/white industrial scheme with Teckon blue as the brand anchor. Avoid a flat single-color look; combine yellow CTAs, black text/headers, blue trust sections, and white/gray content areas for a premium heavy-machinery feel.
- **Typography:** Use `Inter` or `Outfit` from Google Fonts — headings bold/heavy weight, body text regular weight.
- **Design Style:** Premium industrial B2C — dark header, clean white sections alternating with light gray, bold hero imagery, subtle shadows and micro-animations.
- **Responsive:** Fully mobile-first responsive layout across desktop, laptop, tablet, and mobile.
- **Animations:** Use high-quality Framer Motion animations on every page, not only the homepage. Include scroll reveal, staggered cards, animated counters, smooth page transitions, carousel motion, hover lift, button micro-interactions, and mobile drawer transitions. Animations must feel polished and fast, not distracting.

---

### 🧱 Tech Stack

- **Framework:** Next.js 16+ (App Router). Create the website in Next.js, using reusable components, route-level metadata, and clean file structure.
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React or Heroicons
- **Animations:** Framer Motion for subtle entrance animations
- **Carousel:** Embla Carousel or Swiper.js for product sliders
- **Forms:** React Hook Form with basic validation
- **Maps:** Embed a Google Maps iframe for the contact page
- **India Reach Map:** Use an open-source React map library such as `react-simple-maps` with a reliable open India states GeoJSON/TopoJSON dataset to render an India map on the homepage and highlight selected states accurately.

---

### 🗺️ Pages & Routing

Build the following pages:

```
/ → Homepage
/about → About Us
/products → Products Catalog
/quality → Quality & Manufacturing
/events → Events & Exhibitions
/careers → Careers
/blog → Blog / News
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
- Background: `#002D5C`, text white, small font size

#### Main Navigation

- Logo on the left: "Teckon Quality Spares"
- Nav links: Home | About Us | Products (dropdown) | Quality | Events | Careers | Blog | Contact
- Products dropdown shows product categories (e.g., JCB Spares, Terex Parts, CAT Components, General Hydraulics)
- Search icon button on the right
- Sticky on scroll with a subtle box-shadow when scrolled
- Mobile: Hamburger menu with slide-out drawer

#### Footer

- **Column 1:** Company name "Teckon", tagline "Premium Hydraulic Parts & Spares", social icons
- **Column 2:** Quick Links (all main pages)
- **Column 3:** Products links (JCB Spares, Terex Parts, CAT Components, Breakers & Tippers)
- **Column 4:** Contact info — address "36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat", phone "+91-63518 79842", email "<shreejihyd4008@gmail.com>"
- **Bottom bar:** Copyright Shreeji Hydraulics | Privacy Policy | Terms & Conditions
- **Badges row:** Display text badges for "ISO 9001:2015 Certified", "Make in India"
- Background: `#002D5C`, white text

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

- Full-viewport-height hero section
- Background: dark overlay on an industrial/machinery image with JCB-style yellow heavy equipment (use a placeholder gradient if no image)
- **H1:** "Premium Hydraulic Parts & Spares for Heavy Machinery"
- **Subtext:** "Teckon has been a trusted leader in Hydraulic Parts & Equipment since 2000, delivering precision-engineered hydraulic spares across India and international markets."
- Three CTA buttons: "Explore Products" (links to /products) | "WhatsApp Inquiry" (links to WhatsApp) | "Call Now" (tel link)
- Subtle animated gradient or particle background

#### 1.2 Stats / Counter Strip

- Horizontal strip with 4 animated counters:
  - `25+` Years of Experience
  - `100+` Countries Served
  - `5000+` Products in Stock
  - `99%` Client Satisfaction
- Background: `#1A3A7A`, white text, large bold numbers

#### 1.3 Our Top Products (Carousel)

- Section title: "Our Top Products"
- Swiper/carousel of 3–5 product category cards
- Each card: product image (placeholder), category name, short description, "View Products" button
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

- Two-column layout: left = image (company/factory photo placeholder), right = text
- **Heading:** "About Teckon"
- **Text:** "Teckon is a leading manufacturer and distributor of hydraulic parts and spares, established in 2000. We specialize in high-quality hydraulic components for JCB, Terex, Caterpillar, and other heavy machinery. We combine advanced engineering with stringent quality control to deliver world-class hydraulic parts for industrial applications across India and internationally."
- "Read More" button linking to /about
- Decorative accent line or color block on heading

#### 1.5 Why Choose Us

- Section title: "Why Choose Teckon?"
- Grid of 4 USP cards with icons:
  - 🏭 **Advanced Manufacturing** — State-of-the-art production facilities with precision machinery
  - 🌍 **Global Reach** — Serving clients across India and 100+ international markets
  - ✅ **Quality Assured** — ISO 9001:2015 certified with rigorous quality control
  - 🔧 **Specialized Solutions** — Custom hydraulic parts for JCB, Terex, CAT, and more
- Cards: white background, icon in `#1A3A7A`, hover lift animation

#### 1.6 Our Partners / Clients

- Section title: "Our Trusted Partners"
- Horizontal scrolling logo strip (grayscale logos on hover → color)
- 8–10 placeholder partner logo boxes (gray rectangles with "Partner Logo" text if no real logos)
- Auto-scroll marquee animation

#### 1.7 Global Presence

- Section title: "Our Global Presence"
- Left: descriptive text about Teckon's India reach and supply network
- Right: interactive/responsive India map built with an open-source library such as `react-simple-maps`
- Use a reliable India states GeoJSON/TopoJSON dataset and highlight these states properly:
  - Gujarat
  - Rajasthan
  - Maharashtra
  - Madhya Pradesh
- Highlighted states should use Teckon/JCB-inspired colors such as `#FFCC00` or `#FF6B35`, while other states remain muted gray.
- Add hover tooltips or labels showing the state name.
- Include a small legend: "Current Strong Reach" with the highlighted color.
- Stat chips: "Strong Reach Across 4 States", "Trusted Hydraulic Spares Network", "Serving Gujarat, Rajasthan, Maharashtra & Madhya Pradesh"

#### 1.8 Testimonials (Optional Enhancement)

- 3 testimonial cards in a carousel
- Quote, client name, company, star rating
- Placeholder data if real testimonials unavailable

---

### 📄 Page 2 — About Us `/about`

Sections in order:

#### 2.1 Hero Banner

- Background image with dark overlay
- **H1:** "About Teckon"
- Breadcrumb: Home > About Us

#### 2.2 Innovation Pillars

- 3-column grid:
  - 🌱 Sustainable Manufacturing
  - ⚙️ Advanced Automation
  - 📈 Efficient Production
- Icon + heading + short paragraph each

#### 2.3 Meet the Founder / Leadership

- Two-column layout for each founder:
  - Left = portrait placeholder image, right = text
  - **Name:** Mr. Alpesh Patel
  - **Title:** Managing Director
  - **Contact:** +91-94269 15578
  - Bio paragraph: Founder and driving force behind Teckon's growth, Mr. Alpesh Patel has over 25 years of experience in hydraulic parts distribution and manufacturing. Under his leadership, Teckon has become a trusted supplier for major equipment brands globally.
  
  - **Name:** Mr. J.C. Patel
  - **Title:** Co-Founder & Director
  - **Contact:** +91-94262 02945
  - Bio paragraph: As co-founder, Mr. J.C. Patel brings extensive expertise in hydraulic engineering and supply chain management. His vision has helped establish Teckon's reputation for quality and reliability.

#### 2.4 Vision & Mission

- Two cards side by side:
  - 🎯 **Vision:** "To be the global leader in hydraulic parts and spares manufacturing, delivering innovation and precision to every client worldwide."
  - 🚀 **Mission:** "To manufacture and distribute world-class hydraulic parts through cutting-edge technology, continuous improvement, and an unwavering commitment to quality and customer satisfaction."
- Cards with `#1A3A7A` left border accent

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

- Dropdown or tab-based filter by category
- Categories: JCB Spares | L770 Parts | Terex Parts | Tata JD Parts | CAT 424 Components | Breakers & Tippers | Excavator Earthmoving | General Hydraulics | All Products
- Filter updates the product grid dynamically (client-side filtering)

#### 3.3 Product Grid

- Responsive 3-column grid (2 on tablet, 1 on mobile)
- Each product card contains:
  - Product image placeholder (gray with product icon)
  - Model Code (e.g., `PROD-001`)
  - Reference number (e.g., `REF-XXXXX`)
  - Short description
  - "View Details" button
- Hover: card lifts with shadow, button changes color

#### 3.4 Product Detail Page `/products/[slug]`

- Title: product name
- Image gallery (2–3 placeholder images)
- Specs table: dimensions, pressure rating, flow rate, applications
- Inquiry CTA button: "Request a Quote" (links to /contact with pre-filled subject)

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
  - Photo placeholder
- Use placeholder events until real ones are provided:
  - Trade Show A — 2025 — International
  - Trade Show B — 2024 — Domestic
  - Trade Show C — 2023 — Domestic
  - Trade Show D — 2022 — Domestic

---

### 📄 Page 6 — Careers `/careers`

#### 6.1 Culture Section

- Heading: "Join the Teckon Team"
- 3-column grid of culture values with icons

#### 6.2 Open Positions

- Notice: "We're always looking for talented individuals. Check back for openings or send your resume to `shreejihyd4008@gmail.com`"
- Email CTA button

---

### 📄 Page 7 — Blog `/blog`

#### 7.1 Blog Grid

- 3-column card grid
- Each card: Featured image placeholder, date, category tag, article title, excerpt, "Read More" link
- Placeholder 3 articles related to Hydraulic Parts & Equipment and company updates

#### 7.2 Individual Blog Post `/blog/[slug]`

- Full article view with hero image, date, author, content
- Related articles section at the bottom

---

### 📄 Page 8 — Contact Us `/contact`

#### 8.1 Contact Details

- Three-column info cards:
  - 📍 **Address:** 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004
  - 📞 **Phone:** +91-63518 79842 (click-to-call link)
  - 📧 **Email:** <shreejihyd4008@gmail.com> (mailto link)
  - 💬 **WhatsApp:** +91-9426915578 (WhatsApp link)

#### 8.2 Inquiry Form

Form fields:

- Full Name (required)
- Email Address (required, validated)
- Phone Number (required)
- City
- Country
- Product / Subject (dropdown: JCB Spares, Terex Parts, CAT Components, Breakers & Tippers, General Hydraulics, Other)
- Message (textarea)
- Submit Button: "Send Inquiry" in `#FF6B35`

On submit: show success toast notification and send inquiry to <shreejihyd4008@gmail.com>

#### 8.3 Direct Contact CTA Strip

- Add a high-visibility CTA strip above the map with:
  - WhatsApp Chat: `https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares`
  - Call Sales: `tel:+916351879842`
  - Call Alpesh Patel: `tel:+919426915578`
  - Call J.C. Patel: `tel:+919426202945`
  - Email: `mailto:shreejihyd4008@gmail.com`
- Buttons should be large, touch-friendly, and styled with JCB yellow / industrial black accents.

#### 8.4 Google Maps Embed

- Embed Google Maps iframe for "36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat"
- Full-width, 400px height

---

### 📄 Page 9 — Privacy Policy `/privacy-policy`

- Standard privacy policy page with dark heading and white card content
- Sections: Data Collection, Data Usage, Cookies, User Rights, Contact for Privacy

---

### 📄 Page 10 — Terms & Conditions `/terms`

- Standard T&C page
- Sections: Acceptance, IP Rights, Prohibited Use, Limitation of Liability, Governing Law (India)

---

### ✨ UX & Polish Requirements

- **Page transitions:** Smooth fade-in between route changes
- **Section animations:** Every page should include purposeful animation: hero text reveal, staggered cards, timeline reveal, animated counters, carousel movement, form field focus transitions, and footer/social hover states using Framer Motion.
- **Hover states:** All cards, buttons, and nav links have hover feedback
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
- `robots.txt` and `sitemap.xml` generated for google crawler.

---

### 📦 File / Asset Placeholders

If logo or images are not yet available, use:

- **Logo:** Use text "Teckon Quality Spares" in `#1A3A7A` color with professional font
- **Product images:** Gray box with a gear/pump SVG icon centered
- **Team/founder photo:** Gray avatar circle
- **Hero background:** CSS gradient from `#111111` to `#002D5C` with `#FFCC00` accent bands if no real machinery photo is available
- **Partner logos:** Gray rounded boxes with "Partner" text

---

### Before generating, verify

- All company details are filled in: Shreeji Hydraulics (Teckon)
- Contact email: <shreejihyd4008@gmail.com>
- Contact phone: +91-63518 79842
- WhatsApp: +91-9426915578
- Address: 36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat
- Visiting card details are reflected: J.C. Patel, Alpesh Patel, Teckon Quality Spares, JCB/L770/Terex/Tata JD/CAT 424/Breakers/Tipper/Excavator product references
- Website is built in Next.js 16+ App Router
- JCB-inspired yellow/black color scheme is used tastefully with Teckon blue branding
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
- Contact form must validate inputs, show success state, and send inquiry to <shreejihyd4008@gmail.com>
- Mobile hamburger menu must animate smoothly
- Homepage must include a responsive India map using an open-source map library, with Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh highlighted accurately
- WhatsApp button links to +91-9426915578
- Direct call buttons link to +91-63518 79842, +91-94269 15578, and +91-94262 02945 where appropriate
- Quick inquiry buttons are available on every page
- All contact numbers and email are clickable and functional
- Home, About Us, Products, Quality, Events, Careers, Blog, Contact, Privacy Policy, Terms, product details, and blog details must open on their own URLs, not as same-page anchor sections

---

> **NOTE FOR AI BUILDER:** All actual company values have been filled in. The website should be 100% functional and visually complete with these real details about Shreeji Hydraulics (Teckon). All details are now specific and production-ready — no raw `[BRACKET]` text should remain visible in the final output.

---
