// Central data store for all website content

export const COMPANY = {
  name: "Shreeji Hydraulics",
  brand: "Teckon",
  brandFull: "Teckon Quality Spares",
  tagline: "Premium Hydraulic Parts & Spares for Heavy Machinery",
  founded: 2000,
  email: "shreejihyd4008@gmail.com",
  phones: {
    main: "+91-63518 79842",
    mainRaw: "+916351879842",
    alpesh: "+91-94269 15578",
    alpeshRaw: "+919426915578",
    jc: "+91-94262 02945",
    jcRaw: "+919426202945",
  },
  whatsapp: "https://wa.me/919426915578?text=Hello%20Shreeji%20Hydraulics,%20I%20want%20to%20inquire%20about%20hydraulic%20spares",
  address: {
    line1: "36-C Bhaktinagar, Udhyognagar,",
    line2: "Gondal Road, Rajkot-2, Gujarat 360004",
    full: "36-C Bhaktinagar, Udhyognagar, Gondal Road, Rajkot-2, Gujarat 360004",
  },
  social: {
    facebook: "https://facebook.com/shreejihydraulics",
    linkedin: "https://linkedin.com/company/shreeji-hydraulics",
    instagram: "https://instagram.com/shreejihydraulics",
  },
  certifications: ["ISO 9001:2015 Certified", "Make in India", "Est. Since 2000"],
};

export const PRODUCTS = [
  {
    slug: "jcb-hydraulic-pump",
    model: "TQS-JCB-001",
    ref: "REF-20/925345",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB Hydraulic Pump Assembly",
    description: "Premium replacement hydraulic pump assembly for JCB 3CX, 4CX, and JS series. High-pressure rated with precision-machined components.",
    image: "/images/product-jcb.png",
    specs: {
      "Pressure Rating": "350 bar",
      "Flow Rate": "60–120 L/min",
      "Compatible Models": "JCB 3CX, 4CX, JS130, JS200",
      "Material": "Cast iron housing, hardened steel internals",
      "Warranty": "12 months",
    },
  },
  {
    slug: "jcb-seal-kit",
    model: "TQS-JCB-002",
    ref: "REF-892/00413",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB Hydraulic Seal Kit",
    description: "Complete seal and O-ring kit for JCB boom cylinders. NBR/Polyurethane seals for extended service life.",
    image: "/images/product-jcb.png",
    specs: {
      "Material": "NBR / Polyurethane",
      "Temperature Range": "-20°C to +120°C",
      "Compatible Models": "JCB 3CX, JS130",
      "Kit Contents": "24 pieces — seals, O-rings, wiper rings",
    },
  },
  {
    slug: "terex-hydraulic-cylinder",
    model: "TQS-TRX-001",
    ref: "REF-TX-CYL-007",
    category: "terex",
    categoryLabel: "Terex Equipment Parts",
    name: "Terex Hydraulic Lift Cylinder",
    description: "Heavy-duty hydraulic lift cylinder for Terex Backhoe loaders and rough terrain forklifts. Chrome-plated rod for corrosion resistance.",
    image: "/images/product-excavator.png",
    specs: {
      "Bore Diameter": "80–120 mm",
      "Stroke Length": "600–1200 mm",
      "Pressure Rating": "250 bar",
      "Compatible Models": "Terex TLB840, TLB890, RT555",
    },
  },
  {
    slug: "cat-control-valve",
    model: "TQS-CAT-001",
    ref: "REF-CAT-1779426",
    category: "cat",
    categoryLabel: "CAT Components",
    name: "CAT 424 Control Valve Assembly",
    description: "Precision-engineered directional control valve for Caterpillar 424B backhoe loaders. Full compatibility with OEM specifications.",
    image: "/images/product-jcb.png",
    specs: {
      "Valve Type": "Directional Control, 4-spool",
      "Pressure Rating": "300 bar",
      "Flow Rate": "80 L/min",
      "Compatible Models": "CAT 424B, CAT 428E, CAT 432F",
    },
  },
  {
    slug: "breaker-accumulator",
    model: "TQS-BRK-001",
    ref: "REF-BRK-ACC-12",
    category: "breakers",
    categoryLabel: "Breakers & Tippers",
    name: "Hydraulic Breaker Accumulator",
    description: "High-performance nitrogen-charged accumulator for hydraulic rock breakers. Reduces peak pressure spikes and extends breaker life.",
    image: "/images/product-excavator.png",
    specs: {
      "Volume": "2–10 L",
      "Pre-charge Pressure": "50–90 bar",
      "Max Working Pressure": "180 bar",
      "Compatible": "All major breaker brands",
    },
  },
  {
    slug: "l770-track-roller",
    model: "TQS-L770-001",
    ref: "REF-L770-TR-09",
    category: "l770",
    categoryLabel: "L770 / Tata JD Spares",
    name: "L770 Track Roller Assembly",
    description: "Heavy-duty bottom track roller for L770 crawler loaders. Sealed for life with premium bearing steel construction.",
    image: "/images/product-excavator.png",
    specs: {
      "Flange Type": "Double flange",
      "Material": "Forged alloy steel",
      "Seal Type": "Duo-cone floating seal",
      "Compatible": "L770, Tata JD crawler loaders",
    },
  },
  {
    slug: "excavator-bucket-cylinder",
    model: "TQS-EXC-001",
    ref: "REF-EXC-BCK-22",
    category: "excavator",
    categoryLabel: "Excavator Earthmoving Parts",
    name: "Excavator Bucket Cylinder",
    description: "Complete bucket cylinder assembly for mid-size excavators (13–20 ton class). Hardened chrome rod with high-grade sealing system.",
    image: "/images/product-excavator.png",
    specs: {
      "Bore": "100 mm",
      "Stroke": "850 mm",
      "Max Pressure": "350 bar",
      "Compatible": "Various 13–20 ton excavators",
    },
  },
  {
    slug: "hydraulic-hose-assembly",
    model: "TQS-GEN-001",
    ref: "REF-GEN-HOSE-45",
    category: "general",
    categoryLabel: "General Hydraulics",
    name: "High-Pressure Hydraulic Hose Assembly",
    description: "4-wire spiral hydraulic hose assemblies for high-pressure applications. Custom lengths and fittings available.",
    image: "/images/product-jcb.png",
    specs: {
      "Working Pressure": "Up to 420 bar",
      "Temperature Range": "-40°C to +120°C",
      "Inner Diameter": "6–50 mm",
      "Certification": "ISO 3862 / SAE J517",
    },
  },
];

export const BLOG_POSTS = [
  {
    slug: "hydraulic-maintenance-guide",
    title: "The Complete Guide to Hydraulic System Maintenance",
    excerpt: "Proper maintenance of hydraulic systems can extend equipment life by up to 40%. Learn the critical checkpoints every operator should know.",
    date: "2025-03-15",
    author: "Teckon Technical Team",
    category: "Maintenance",
    image: "/images/blog-hydraulics.png",
    content: `
## Introduction
Hydraulic systems are the lifeblood of heavy machinery. Whether you're operating a JCB backhoe, a Terex rough terrain forklift, or a Caterpillar excavator, the health of your hydraulic system directly determines your machine's performance and longevity.

## 1. Regular Fluid Checks
The most critical maintenance task is monitoring hydraulic fluid levels and quality. Contaminated fluid accounts for over 70% of hydraulic system failures.

**Key checks:**
- Fluid level (daily)
- Fluid color — should be clear amber, not cloudy or dark
- Contamination by water or metal particles
- Fluid temperature during operation

## 2. Filter Replacement Schedule
Hydraulic filters should be replaced every 250–500 operating hours depending on operating conditions. In dusty environments like construction sites, replace more frequently.

## 3. Cylinder Rod Inspection
Hydraulic cylinder rods should be inspected for:
- Chrome plating damage or scoring
- Contamination buildup
- Seal leaks (visible as oil film on the rod)

## 4. Pressure Testing
Annual pressure testing by qualified technicians ensures your system operates within design specifications. Pressure drops indicate seal wear or internal leakage.

## Conclusion
A disciplined maintenance schedule, combined with genuine quality spare parts from certified suppliers like Teckon, will significantly reduce downtime and total ownership cost.
    `,
  },
  {
    slug: "jcb-vs-cat-hydraulics",
    title: "JCB vs CAT Hydraulic Systems: What You Need to Know",
    excerpt: "A technical comparison of JCB and Caterpillar hydraulic architectures, and why using the right spares matters for each platform.",
    date: "2025-02-08",
    author: "Alpesh Patel",
    category: "Technical",
    image: "/images/blog-hydraulics.png",
    content: `
## Overview
JCB and Caterpillar are the two dominant brands in the Indian construction equipment market. While both use hydraulic systems extensively, their architectures differ significantly — affecting which spare parts are compatible and how maintenance should be performed.

## JCB Hydraulic Architecture
JCB uses a load-sensing variable displacement piston pump system on their JS series excavators and a gear pump system on their 3CX/4CX backhoe loaders. Key characteristics:
- Centre-pivot boom design on backhoes
- Integrated hydraulic cooling circuit
- Proprietary seal geometry on cylinders

## CAT Hydraulic Architecture  
Caterpillar equipment generally employs a more complex electro-hydraulic control system on newer models, while older machines like the CAT 424B use conventional open-center hydraulic circuits.

## Why Original-Quality Spares Matter
Using substandard replacement hydraulic parts can void warranties, cause premature failure, and in the worst case, create safety hazards. Teckon sources all parts to OEM specifications, ensuring fit, form, and function equivalence.

## Conclusion
Understanding your specific machine's hydraulic architecture helps you make better maintenance decisions. Our technical team is always available to help identify the right part for your equipment.
    `,
  },
  {
    slug: "teckon-expansion-2025",
    title: "Teckon Expands Pan-India Distribution Network in 2025",
    excerpt: "Shreeji Hydraulics strengthens its presence across Gujarat, Rajasthan, Maharashtra and Madhya Pradesh with new distribution partnerships.",
    date: "2025-01-20",
    author: "Teckon Team",
    category: "Company News",
    image: "/images/about-factory.png",
    content: `
## Exciting Expansion News
We are proud to announce that Teckon Quality Spares has significantly expanded its distribution network across India, making it easier than ever for equipment operators and dealers to access genuine hydraulic spare parts quickly.

## New Distribution Hubs
In 2025, we have established new distribution partnerships in:
- **Jaipur, Rajasthan** — Serving the booming infrastructure sector
- **Pune, Maharashtra** — Catering to the large construction equipment base
- **Indore, Madhya Pradesh** — Supporting central India's growing mining sector

## Faster Delivery Commitment
With these new hubs, we can now guarantee 24-48 hour delivery across major cities in Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh for stocked items.

## Looking Ahead
We continue to invest in our inventory, quality systems, and people to serve our growing customer base. With over 5000 SKUs in stock and ISO 9001:2015 certification, Teckon remains committed to being your most reliable hydraulic parts partner.

For inquiries about distribution partnerships or product availability in your region, contact us at shreejihyd4008@gmail.com.
    `,
  },
];

export const EVENTS = [
  {
    year: "2025",
    name: "bauma CONEXPO India 2025",
    location: "Greater Noida, India 🇮🇳",
    description: "India's largest construction equipment trade fair. Teckon exhibited its latest range of hydraulic spares and met with 200+ industry partners.",
    type: "upcoming",
  },
  {
    year: "2024",
    name: "Excon South Asia 2024",
    location: "Bengaluru, India 🇮🇳",
    description: "South Asia's premier construction equipment expo. Teckon presented new product lines for JCB and Terex equipment.",
    type: "past",
  },
  {
    year: "2024",
    name: "Mining India Expo 2024",
    location: "Hyderabad, India 🇮🇳",
    description: "Focused on hydraulic components for mining equipment. Strong interest in our breaker and excavator parts range.",
    type: "past",
  },
  {
    year: "2023",
    name: "Gujarat Industrial Expo 2023",
    location: "Ahmedabad, India 🇮🇳",
    description: "Regional showcase of Teckon's manufacturing capabilities and full product catalog for Gujarat's industrial sector.",
    type: "past",
  },
];
