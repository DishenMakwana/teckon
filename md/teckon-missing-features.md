# Teckon Website Gaps & Missing Parts Analysis (vs. Suryansh)

This document highlights what **Teckon** (Shreeji Hydraulics) is missing on its website compared to **Suryansh** (JBS Industries) and provides an actionable blueprint to add these features, categories, and technical parts to your codebase.

---

## 🔍 Gaps & Gaps Comparison

| Feature / Area | Suryansh (thesuryansh.com) | Teckon (our site) | Gap Status & Recommendation |
| :--- | :--- | :--- | :--- |
| **Product Segments** | 13 detailed categories (Borewell, Harvester, Charging Pumps, MRVs, Axel, Engine parts, etc.) | 8 general categories (JCB, Terex, CAT, Breakers, L770, Excavator, General) | ❌ **High Gap:** Missing transmission pumps, engine parts, valves, axle parts, harvester and rig-specific pages. |
| **Brands Range** | Carraro, Dana, Avtec, Komatsu, LeeBoy, Liugong, Bull, Escort Digmax, JCB, Case, Terex | JCB, Terex, CAT, Tata JD, Case | ⚠️ **Medium Gap:** Missing specialized supplier brands for transmissions, motor graders, and loader attachments. |
| **Specs Details** | CC (displacement), Direction of rotation, Body material, Specific usage description, Country of origin | Pressure rating, Flow rate, Compatible models, Dimensions (generic) | ⚠️ **Medium Gap:** Needs rotation direction, CC capacity, body material type, and exact application usage details. |
| **About Us Page** | Detailed founder story ( repair workshop in 1996 to Rajkot factory in 2015), 4 pillars, corporate structure | Placeholder founder bios with generic info | ❌ **High Gap:** Needs historical narrative and structured company milestones. |
| **Events Page** | Real trade shows (Bauma Munich 2025, Bauma India 2024, Excon 2023, 2019) with Stand/Hall details | Placeholder entries (Trade Show A 2025, Trade Show B 2024, etc.) | ❌ **High Gap:** Needs real exhibition data to boost trust. |
| **Legal Disclaimer** | Prominent "For Reference Only" aftermarket part disclaimer | Standard terms & conditions | ❌ **High Gap:** Missing disclaimer protecting against trademark/patent issues on OEM parts. |

---

## 🔩 1. Product Categories & Technical Data to Add

To capture the search traffic and clients searching for the same parts Suryansh offers, you should expand your product catalog (`src/lib/data.ts`) with these categories and details:

### A. Missing Product Categories
1. **Transmission Charging Pumps (Transmission Spares):** Charging pumps for Carraro, Dana, Avtec, and JCB machinery.
2. **Engine Parts & Spares:** JCB Engine components (Oil cooler cover plates, belt tensioners, idler pulleys, water pumps, oil seals).
3. **Main Relief Valves (MRV) & Unloader Valves:** Valve spools for JCB 3DX/4DX, Terex TLB, Case, Escort Digmax, and Bull backhoes.
4. **Rear Axle & Wheel Parts:** Planetary hubs (5/10 hole) and CW stud hubs for JCB 3DX/4DX.
5. **Specialized Segments:** Water Drilling Rig (Borewell Rig) pumps, Sugarcane Harvesters, and Motor Graders (LeeBoy, Komatsu).

### B. Updated Technical Parameters Scheme
Your product model interface (`src/types/index.ts` or `src/lib/data.ts`) should be updated to support the following fields:
```typescript
interface Product {
  slug: string;
  model: string; // e.g. TQS-JCB-001
  ref: string; // OEM Reference No. (e.g. 20/925345 or Carraro 135190)
  category: string;
  categoryLabel: string;
  name: string;
  description: string;
  image: string;
  specs: {
    "Displacement (CC)"?: string; // e.g. 29/19/16 CC
    "Body Material"?: string; // e.g. Gray Cast Iron
    "Direction of Rotation"?: string; // e.g. Anti-Clockwise, Clockwise
    "Specific Usage"?: string; // e.g. Boom lifting, extending, tilting
    "Compatible Models"?: string; // e.g. JCB 3CX, Case 770
    "Country of Origin"?: string; // Make in India
    [key: string]: string | undefined;
  }
}
```

---

## 🏢 2. About Us Content Gaps to Fill
Suryansh uses a "Repair workshop to Factory" narrative to build high organic trust. Your about page should replace the generic leadership section with a structured journey:
* **The Story:** Add a narrative detailing Mr. Alpesh Patel and Mr. J.C. Patel's 25+ years in the industry (e.g., how they started, their manufacturing transition, and the establishment of "Teckon" brand since 2000).
* **Manufacturing Pillars:** Frame your operations under structural headings:
  1. *Precision Engineering* (CAD/CAM design check)
  2. *Heavy Forging & Casting* (durability focus)
  3. *Testing Rig Quality Control* (hydraulic testing bench)
  4. *Reliable Supply Chain* (pan-India delivery reach)

---

## 🎪 3. Events Page Gaps to Fill
Replace the placeholder trade shows in `src/lib/data.ts` with real exhibition histories. If Shreeji Hydraulics/Teckon has participated in major trade fairs (like Excon Bengaluru or local auto expos), list them with real stand/booth details:
* **Example Event:** *Excon Bengaluru 2023 - Exhibition Center, Stall No. XX*
* **Example Event:** *Bauma Conexpo India - Noida 2024, Hall 7, Stand XX*

---

## ⚖️ 4. Legal Aftermarket Disclaimer (Important)
Add a legal disclaimer section in your footer (`src/components/layout/Footer.tsx`) or terms page (`src/app/terms/page.tsx`) to protect the brand from OEM liabilities. 

**Recommended Disclaimer Text:**
> *“For Reference Only: All manufacturer names, OEM part numbers, symbols, and descriptions (such as JCB, Terex, CAT, Case, Tata JD, Carraro, Dana, etc.) are used for identification and reference purposes only. It is not implied that any part listed is the product of these original equipment manufacturers. We are an independent supplier of high-quality aftermarket replacement parts.”*

---

## 📋 5. Codebase Action Plan

Here is a step-by-step checklist to update your site to close the gap:

### Step 1: Update Navigation & Footer Categories
Add the new segments to your navigation menus (`src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`):
* [ ] Add dropdown categories for **Charging Pumps**, **Engine Parts**, **Relief Valves**, and **Axle Parts**.

### Step 2: Add New Products & Specs to Data Store
Modify `src/lib/data.ts` to include high-volume replacement items. For example, add the following key parts:
* [ ] **Transmission Charging Pump Carraro 135190** (Part No: `TQS-CP-006`).
* [ ] **JCB Telehandler 3-Stage Pump 20/925588** (Part No: `TQS-HP-588`).
* [ ] **JCB Oil Cooler Cover Plate 320/04212** (Part No: `TQS-EP-001`).
* [ ] **JCB 3DX Xtra Main Relief Valve 336/D7544** (Part No: `TQS-MRV-001`).
* [ ] **JCB 5-Hole Planetary Hub 450/10216** (Part No: `TQS-AH-001`).

### Step 3: Implement Technical Data Table in Product Detail Page
* [ ] Modify the product details page (`src/app/products/[slug]/page.tsx`) to render a clean, structured parameters table containing CC, Rotation, Body Material, and Specific Usage.

### Step 4: Add Legal Disclaimer to Footer
* [ ] Add the reference disclaimer at the bottom of `src/components/layout/Footer.tsx` above the copyright note.
