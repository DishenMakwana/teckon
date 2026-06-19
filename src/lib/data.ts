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
    slug: "hitachi-excavator-hydraulic-pump-guide",
    title: "Hitachi Excavator Hydraulics: EX200 & Zaxis Troubleshooting",
    excerpt: "Learn how to diagnose common hydraulic pump failures, maintain pressure levels, and choose the right spare parts for Hitachi EX200 and Zaxis excavators.",
    date: "2025-03-01",
    author: "Alpesh Patel",
    category: "Hitachi Spares",
    image: "/images/product-excavator.png",
    content: `
## Introduction
Hitachi excavators, especially the legendary EX200 and the modern Zaxis series, are renowned for their speed and heavy digging capabilities. The secret behind this efficiency lies in their high-pressure main hydraulic pumps. Keeping these pumps running smoothly requires technical expertise and high-quality replacement spares.

## 1. Common Hydraulic Pump Failure Indicators
Before a main pump fails completely, it usually displays warning signs that operators and fleet managers should look out for:
- **Abnormal Noise:** High-pitched whining or grinding noises often point to aeration (air in the fluid) or cavitation, which can destroy the piston shoes and cylinder block.
- **Drift in Hydraulic Speed:** If boom or bucket operations become sluggish under load, it indicates internal pump leakage or a failing regulator.
- **Excessive Oil Heat:** When pump components wear out, internal bypass oil increases, generating friction and spiking the hydraulic oil temperature.

## 2. Main Pump Regulators and Adjustment
The Hitachi EX200 series uses dual variable displacement axial piston pumps. Troubleshooting often involves inspecting the regulators, which control the pump's displacement based on system pressure:
- Check the servo valves for sticky movement or dirt accumulation.
- Ensure the solenoid valves (like the SG or High-Pressure Solenoid) are responding to electrical commands from the controller.
- Measure control pressures (pilot pressure) to ensure they are at the standard 39 bar.

## 3. Selecting Quality Replacement Spares
When rebuilding a Hitachi pump (such as the HPV102 or HPV118 series), using premium spares is critical:
- **Piston Shoe & Cylinder Block:** Must be manufactured from high-tensile brass and hardened steel to withstand pressures up to 34.3 MPa.
- **Valve Plate & Retainer Plate:** Flatness must be within microns to prevent high-pressure oil bypassing.
- **Regulator Valves:** Spring tensions and spool clearances must match original specs exactly.

## Conclusion
Preventative maintenance and early troubleshooting of Hitachi hydraulic pumps can save lakhs in repair costs. When parts replacement becomes necessary, choosing Teckon's premium spares ensures OEM-level reliability.
    `,
  },
  {
    slug: "jcb-gear-pumps-vs-piston-pumps",
    title: "JCB 3CX Hydraulics: Gear Pumps vs Piston Pumps Guide",
    excerpt: "An in-depth technical comparison comparing gear pumps and piston pumps in JCB 3CX loaders, and how to identify which pump spares your machine needs.",
    date: "2025-02-25",
    author: "Teckon Technical Team",
    category: "JCB Spares",
    image: "/images/product-jcb.png",
    content: `
## Introduction
The JCB 3CX backhoe loader is the backbone of Indian construction. Over the years, JCB has utilized different hydraulic pump architectures to power the loader and backhoe cylinders. For maintenance crews and parts buyers, understanding the difference between Gear Pumps and Variable Displacement Piston Pumps is essential.

## 1. Gear Pumps (Fixed Displacement)
Most classic JCB 3CX models utilize tandem or triple gear pumps. These are fixed displacement pumps, meaning they deliver a constant volume of oil per engine revolution:
- **Design:** Robust, simple, and highly resistant to contamination.
- **Operation:** High flow rates but lower efficiency under varying load conditions, as excess flow is bypassed back to the reservoir via relief valves.
- **Signs of Wear:** Internal housing wear or side-plate wear leading to low pressure when the oil heats up.

## 2. Piston Pumps (Variable Displacement)
Modern and eco-friendly JCB models feature axial piston pumps with load-sensing regulators (often manufactured by Rexroth or Parker):
- **Design:** Complex design with swashplates, pistons, and dynamic controllers.
- **Operation:** Only pumps the exact amount of oil required by the control valves. This reduces engine load, saves fuel (up to 15%), and reduces hydraulic heat generation.
- **Signs of Wear:** Cylinder block scoring, piston play, or regulator feedback issues.

## 3. Maintenance and Spares Checklist
Whether your JCB 3CX runs a gear pump or a piston pump, keep these tips in mind:
- **Suction Strainers:** Always replace the hydraulic tank suction strainer when replacing a pump. A clogged strainer causes cavitation and immediately ruins a new pump.
- **Drive Splines:** Inspect the pump drive shaft and engine flywheel coupling splines. Worn splines will strip, leaving the machine powerless.
- **Relief Valve Setting:** After pump installation, calibrate the main relief valve pressure according to JCB specs (usually 250 bar for backhoe circuits).

## Conclusion
Identify your JCB's pump model code (e.g., 20/925345 or 20/925580) before ordering parts. At Shreeji Hydraulics, we provide premium-grade replacements for both gear and piston pump architectures.
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
    slug: "hitachi-swing-motor-maintenance",
    title: "Guide to Hitachi Swing Motor & Final Drive Maintenance",
    excerpt: "How to prevent swing motor leaks, troubleshoot gear noise, and inspect track adjusters on Hitachi excavators to avoid costly downtime.",
    date: "2025-02-14",
    author: "JC Patel",
    category: "Hitachi Spares",
    image: "/images/product-excavator.png",
    content: `
## Introduction
Excavator swing motors and final drives work under immense stress. Slew movements and constant track travel wear down gears, bearings, and hydraulic motors. In Hitachi excavators (such as the Zaxis 200, 210, and 220), keeping the swing and travel devices in pristine condition is paramount to preventing catastrophic gear failures.

## 1. Swing Motor Troubleshooting
The swing motor rotates the excavator's upper structure. Common issues include:
- **Swing Drift:** When you release the swing joy-stick, the structure continues to rotate. This is usually caused by worn swing brake disks or faulty relief valves inside the motor head.
- **Oil Mixing:** Hydraulic oil leaking into the swing gearbox (or vice versa). This is caused by a failure of the main shaft oil seal. If ignored, the hydraulic oil dilutes the gear lube, causing complete gear destruction.

## 2. Final Drive & Travel Motor Spares
The travel device (final drive) includes a hydraulic motor connected to a planetary gearbox that drives the track sprocket:
- **Duo-Cone Floating Seals:** These seals protect the final drive gears from mud, dust, and water ingress. If you see oil leaking from the inside of the track sprocket, replace the floating seal immediately.
- **Planetary Gears:** Inspect gear teeth for pitting or chipping. Even a single damaged tooth can lock up the entire gearbox, breaking the casing.

## 3. Track Adjusters and Tensioners
A loose or overly tight track causes excessive wear on bottom rollers, carrier rollers, and sprockets:
- **Tension Cylinder:** Uses grease pressure to push the idler forward. If the seal inside the cylinder fails, it won't hold tension.
- **Recoil Springs:** Ensure the heavy coil springs are free of cracks and properly aligned.

## Conclusion
Keep the gear oils changed every 1000 hours, and visually inspect for seal leaks daily. Shreeji Hydraulics stocks a complete range of swing motor gear shafts, planetary gears, bearings, and duo-cone seals for Hitachi excavators.
    `,
  },
  {
    slug: "jcb-cylinder-seal-kits-guide",
    title: "JCB Cylinder Seal Kits: How to Prevent Hydraulic Leakage",
    excerpt: "Understanding seal kit wear, choosing between polyurethane and NBR seals, and step-by-step instructions for replacing boom and bucket cylinder seals on JCB equipment.",
    date: "2025-01-28",
    author: "Teckon Quality Team",
    category: "JCB Spares",
    image: "/images/product-jcb.png",
    content: `
## Introduction
External oil leaks on hydraulic cylinders are not only messy and expensive, but they also reduce operating pressure and allow contaminants to enter the hydraulic system. For JCB backhoes and loaders, cylinder seal kit maintenance is the most common routine repair. Here is how to do it right.

## 1. Anatomy of a Hydraulic Cylinder Seal Kit
A heavy-duty cylinder seal kit consists of several distinct seals, each with a specific function:
- **Rod Seal (U-Cup):** Prevents oil from escaping past the cylinder rod as it strokes.
- **Buffer Seal:** Installed in front of the rod seal, it absorbs pressure spikes and protects the main rod seal.
- **Wiper Seal (Dust Seal):** Scrapes dirt, mud, and ice off the rod as it retracts, keeping contaminants out.
- **Piston Seals:** Double-acting seals that separate the piston side from the rod side inside the cylinder barrel, ensuring pressure holds.
- **Wear Rings (Guide Rings):** Prevent metal-to-metal contact between the rod/piston and the cylinder body.

## 2. Polyurethane vs. NBR (Nitrile) Seals
- **Polyurethane (PU):** Offers superior tear resistance, high extrusion resistance, and long life under high pressure. Ideal for the main rod and piston seals.
- **NBR/Rubber:** Excellent elasticity and sealability at low pressures, commonly used for static O-rings and backup rings.

## 3. Step-by-Step Replacement Tips
- **Inspect the Rod:** Run your hand along the chrome-plated rod. If you feel any nicks, burrs, or deep scratches, the new seals will be sliced and leak within days. Polish or replace the rod first.
- **Use Installation Tools:** Never use sharp screwdrivers to seat U-cup seals; you will damage the sealing lip. Use plastic seal twisters or hooks.
- **Match Seal Dimensions:** Even slightly off-size seals will fail. Always verify the cylinder model (e.g. Boom, Bucket, Dipper, Stabilizer, or Steering cylinder) to get the exact matching Teckon kit.

## Conclusion
By replacing worn seal kits proactively, you prevent cylinder barrel scoring and maintain full digging power. Teckon seal kits are made from premium imported raw materials to match or exceed OEM longevity.
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
    year: "2024",
    name: "ACMA Automechanika New Delhi 2024",
    location: "New Delhi, India 🇮🇳",
    description: "Visited the premier auto components expo to explore advancements in high-precision engine and transmission machinery parts.",
    type: "past",
    image: "/images/events/automechanika-2024.png",
  },
  {
    year: "2024",
    name: "Excon South Asia 2024",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited South Asia's premier construction equipment exhibition to connect with excavator and backhoe loaders manufacturers.",
    type: "past",
    image: "/images/events/excon-south-asia-2024.png",
  },
  {
    year: "2023",
    name: "Excon Bengaluru 2023",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited to study hydraulic system upgrades and build associations with construction machinery component suppliers.",
    type: "past",
    image: "/images/events/excon-bengaluru-2023.png",
  },
  {
    year: "2023",
    name: "Auto Expo Components 2023",
    location: "New Delhi, India 🇮🇳",
    description: "Visited the largest auto components exhibition to analyze the aftermarket spare parts market developments.",
    type: "past",
    image: "/images/events/auto-expo-components-2023.png",
  },
  {
    year: "2022",
    name: "bauma CONEXPO India 2022",
    location: "Greater Noida, India 🇮🇳",
    description: "Visited the construction machinery expo to meet with raw material suppliers and machinery makers.",
    type: "past",
    image: "/images/events/bauma-india-2022.png",
  },
  {
    year: "2022",
    name: "Excon South Asia 2022",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited to evaluate new hydraulics parts designs and network with heavy equipment dealers.",
    type: "past",
    image: "/images/events/excon-south-asia-2022.png",
  },
  {
    year: "2020",
    name: "Auto Expo Components 2020",
    location: "New Delhi, India 🇮🇳",
    description: "Visited to keep abreast of advanced metallurgical standards and sealing technologies in hydraulic systems.",
    type: "past",
    image: "/images/events/auto-expo-components-2020.png",
  },
  {
    year: "2019",
    name: "Excon Bengaluru 2019",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited to study gear pump technologies and strengthen relationships with heavy machinery spare parts distributors.",
    type: "past",
    image: "/images/events/excon-bengaluru-2019.png",
  },
  {
    year: "2018",
    name: "bauma CONEXPO India 2018",
    location: "Greater Noida, India 🇮🇳",
    description: "Visited to engage with earthmoving and road construction machinery manufacturers.",
    type: "past",
    image: "/images/events/bauma-india-2018.png",
  },
  {
    year: "2017",
    name: "Excon Bengaluru 2017",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited to connect with hydraulic power generation specialists and parts vendors across India.",
    type: "past",
    image: "/images/events/excon-bengaluru-2017.png",
  },
  {
    year: "2016",
    name: "Auto Expo Components 2016",
    location: "New Delhi, India 🇮🇳",
    description: "Visited to study precision gear grinding and lapping technologies for hydraulic pumps.",
    type: "past",
    image: "/images/events/auto-expo-components-2016.png",
  },
  {
    year: "2015",
    name: "Excon Bengaluru 2015",
    location: "Bengaluru, India 🇮🇳",
    description: "Visited to review fluid power transmission systems and forge partnerships in the aftermarket spare parts segment.",
    type: "past",
    image: "/images/events/excon-bengaluru-2015.png",
  },
  {
    year: "2014",
    name: "bauma CONEXPO India 2014",
    location: "Greater Noida, India 🇮🇳",
    description: "Visited to examine emerging hydraulic technology developments in earthmoving machinery.",
    type: "past",
    image: "/images/events/bauma-india-2014.png",
  },
];
