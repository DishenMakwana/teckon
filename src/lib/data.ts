// Central data store for all website content

export const COMPANY = {
  name: "Shreeji Hydraulics",
  brand: "Teckon™",
  brandFull: "Teckon™ Quality Spares",
  tagline: "Quality Spares",
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
    image: "/images/product-jcb.webp",
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
    name: "JCB Hydraulic Cylinder Seal Kit",
    description: "Complete seal and O-ring kit for JCB boom cylinders. NBR/Polyurethane seals for extended service life in demanding conditions.",
    image: "/images/product-jcb.webp",
    specs: {
      "Material": "NBR / Polyurethane",
      "Temperature Range": "-20°C to +120°C",
      "Compatible Models": "JCB 3CX, 3DX, JS130",
      "Kit Contents": "24 pieces — seals, O-rings, wiper rings",
    },
  },
  {
    slug: "jcb-3dx-control-valve",
    model: "TQS-JCB-003",
    ref: "REF-25/221318",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB 3DX Main Control Valve",
    description: "Precision-matched main directional control valve for JCB 3DX backhoe loaders. Controls boom, dipper, bucket and stabiliser circuits simultaneously.",
    image: "/images/product-jcb.webp",
    specs: {
      "Valve Type": "6-spool directional control",
      "Pressure Rating": "250 bar",
      "Flow Rate": "120 L/min",
      "Compatible Models": "JCB 3DX, 3DX Super",
      "Ports": "SAE flanged",
    },
  },
  {
    slug: "jcb-boom-cylinder",
    model: "TQS-JCB-004",
    ref: "REF-811/50201",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB 3DX Boom Lift Cylinder",
    description: "OEM-equivalent boom lift cylinder for JCB 3DX and 3CX backhoe loaders. Chrome-hardened rod, precision honed bore for consistent performance.",
    image: "/images/product-jcb.webp",
    specs: {
      "Bore Diameter": "115 mm",
      "Rod Diameter": "70 mm",
      "Stroke Length": "780 mm",
      "Max Pressure": "280 bar",
      "Compatible Models": "JCB 3DX, 3CX, 4CX",
    },
  },
  {
    slug: "jcb-dipper-cylinder",
    model: "TQS-JCB-005",
    ref: "REF-811/50334",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB JS Series Dipper Arm Cylinder",
    description: "High-strength dipper arm cylinder for JCB JS series tracked excavators. Built with thick-wall barrel and heavy-duty end cap design.",
    image: "/images/product-jcb.webp",
    specs: {
      "Bore Diameter": "130 mm",
      "Rod Diameter": "80 mm",
      "Stroke Length": "1,020 mm",
      "Max Pressure": "350 bar",
      "Compatible Models": "JCB JS130, JS200, JS220",
    },
  },
  {
    slug: "jcb-pin-bush-kit",
    model: "TQS-JCB-006",
    ref: "REF-JCB-PBK-3DX",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB 3DX Complete Pin & Bush Kit",
    description: "Full machine pin and bronze bush kit for JCB 3DX backhoe loaders. Covers boom, dipper, bucket, tipping link and stabiliser pivot points.",
    image: "/images/product-jcb.webp",
    specs: {
      "Kit Contents": "32 pins + 32 bronze bushes",
      "Pin Material": "Alloy steel, case hardened",
      "Bush Material": "Manganese bronze",
      "Grease Nipples Included": "Yes — 32 pieces",
      "Compatible Models": "JCB 3DX, 3DX Super, 3CX",
    },
  },
  {
    slug: "jcb-engine-oil-filter",
    model: "TQS-JCB-007",
    ref: "REF-02/100279",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB Dieselmax Engine Oil Filter",
    description: "Premium engine oil filter for JCB Dieselmax engines. High-efficiency filter media traps metallic wear particles to protect engine internals.",
    image: "/images/product-jcb.webp",
    specs: {
      "Filter Media": "High-efficiency synthetic fibre",
      "Micron Rating": "15 micron",
      "Operating Pressure": "6 bar",
      "Thread Size": "M20 x 1.5",
      "Compatible Models": "JCB 3DX, 4DX, JS130, JS200, NXT 215",
    },
  },
  {
    slug: "jcb-hydraulic-filter",
    model: "TQS-JCB-008",
    ref: "REF-32/925682",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB Hydraulic Return Filter Element",
    description: "High-capacity return line filter element for JCB hydraulic systems. Prevents system contamination from worn pump and valve particles.",
    image: "/images/product-jcb.webp",
    specs: {
      "Micron Rating": "10 micron (absolute)",
      "Flow Rate": "up to 200 L/min",
      "Collapse Pressure": "10 bar",
      "Bypass Valve Setting": "2.5 bar",
      "Compatible Models": "JCB 3DX, 3CX, 4CX, JS series",
    },
  },
  {
    slug: "jcb-fuel-filter",
    model: "TQS-JCB-009",
    ref: "REF-32/925944",
    category: "jcb",
    categoryLabel: "JCB Hydraulic Spares",
    name: "JCB Fuel Filter & Water Separator",
    description: "Two-stage fuel filtration assembly for JCB Dieselmax engines. Primary water separator plus secondary fine filter for clean fuel delivery.",
    image: "/images/product-jcb.webp",
    specs: {
      "Filtration Stage": "2-stage (water separator + fine filter)",
      "Micron Rating": "5 micron (fine filter)",
      "Water Separation": "98% efficiency",
      "Thread": "M16 x 1.5",
      "Compatible Models": "JCB 3DX, 4DX, JS130–JS220",
    },
  },

  // ── HITACHI ───────────────────────────────────────────────────
  {
    slug: "hitachi-main-pump",
    model: "TQS-HIT-001",
    ref: "REF-HPV102FW",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi HPV102 Main Hydraulic Pump Rebuild Kit",
    description: "Variable displacement axial piston pump rebuild kit for Hitachi EX200 and EX220 excavators. Includes piston shoes, cylinder block, valve plate and retainer.",
    image: "/images/product-excavator.webp",
    specs: {
      "Pump Type": "Variable displacement axial piston",
      "Displacement": "102 cc/rev",
      "Max Pressure": "343 bar",
      "Compatible Models": "Hitachi EX200-2, EX200-3, EX220",
      "Kit Contents": "Piston shoes, cylinder block, valve plate, retainer, seals",
    },
  },
  {
    slug: "hitachi-swing-motor",
    model: "TQS-HIT-002",
    ref: "REF-HIT-SMT-ZX200",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi Zaxis Swing Motor Assembly",
    description: "Complete swing motor and planetary gearbox assembly for Hitachi Zaxis 200 and 210 excavators. Resolves swing drift and oil mixing faults.",
    image: "/images/product-excavator.webp",
    specs: {
      "Type": "Axial piston motor + planetary gearbox",
      "Torque Rating": "3,500 Nm",
      "Gear Ratio": "1:17",
      "Brake Type": "Spring-applied, hydraulic release",
      "Compatible Models": "Hitachi ZX200, ZX200-3, ZX210, ZX220",
    },
  },
  {
    slug: "hitachi-final-drive",
    model: "TQS-HIT-003",
    ref: "REF-HIT-FDV-EX200",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi EX200 Final Drive Travel Motor",
    description: "Complete travel motor and final drive assembly for Hitachi EX200 and Zaxis 200 excavators. Two-speed selection with automatic shift functionality.",
    image: "/images/product-excavator.webp",
    specs: {
      "Motor Type": "2-speed radial piston",
      "Gear Stages": "3-stage planetary reduction",
      "Max Torque": "18,500 Nm at output",
      "Drive Speed": "Low: 2.5 km/h | High: 4.5 km/h",
      "Compatible Models": "Hitachi EX200, EX200-5, ZX200, ZX200-3",
    },
  },
  {
    slug: "hitachi-boom-cylinder-seal",
    model: "TQS-HIT-004",
    ref: "REF-HIT-BCS-ZX200",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi ZX200 Boom Cylinder Seal Kit",
    description: "Premium seal kit for Hitachi Zaxis 200 boom cylinders. Polyurethane rod seals with NBR O-ring set for long service life in Indian site conditions.",
    image: "/images/product-excavator.webp",
    specs: {
      "Seal Material": "Polyurethane rod seal + NBR O-rings",
      "Temperature Range": "-30°C to +110°C",
      "Kit Contents": "18 pieces — rod seals, piston seals, wipers, O-rings",
      "Compatible Models": "Hitachi ZX200, ZX200-3, ZX210, ZX220",
    },
  },
  {
    slug: "hitachi-track-roller",
    model: "TQS-HIT-005",
    ref: "REF-HIT-TRL-ZX200",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi ZX200 Bottom Track Roller",
    description: "Heavy-duty single flange bottom track roller for Hitachi Zaxis 200 series excavators. Sealed-for-life duo-cone floating seal design.",
    image: "/images/product-excavator.webp",
    specs: {
      "Flange Type": "Single flange",
      "Material": "Forged alloy steel, induction hardened",
      "Seal Type": "Duo-cone floating seal",
      "Shaft Diameter": "60 mm",
      "Compatible Models": "Hitachi ZX200, ZX200-3, ZX210, EX200",
    },
  },
  {
    slug: "hitachi-duo-cone-seal",
    model: "TQS-HIT-006",
    ref: "REF-HIT-DCS-3401",
    category: "hitachi",
    categoryLabel: "Hitachi Excavator Parts",
    name: "Hitachi Duo-Cone Floating Seal Set",
    description: "Genuine-spec duo-cone floating seal pair for Hitachi excavator undercarriage. Prevents mud and water ingress into track roller and final drive oil chambers.",
    image: "/images/product-excavator.webp",
    specs: {
      "Seal Type": "Duo-cone (metal face + rubber toric ring)",
      "Face OD": "120 mm / 145 mm / 165 mm (available)",
      "Rubber Ring": "Nitrile (NBR)",
      "Application": "Track rollers, carrier rollers, idlers, final drives",
      "Compatible": "Hitachi, Komatsu, CAT excavators",
    },
  },

  // ── TEREX ────────────────────────────────────────────────────
  {
    slug: "terex-hydraulic-cylinder",
    model: "TQS-TRX-001",
    ref: "REF-TX-CYL-007",
    category: "terex",
    categoryLabel: "Terex Equipment Parts",
    name: "Terex Hydraulic Lift Cylinder",
    description: "Heavy-duty hydraulic lift cylinder for Terex Backhoe loaders and rough terrain forklifts. Chrome-plated rod for corrosion resistance.",
    image: "/images/product-excavator.webp",
    specs: {
      "Bore Diameter": "80–120 mm",
      "Stroke Length": "600–1200 mm",
      "Pressure Rating": "250 bar",
      "Compatible Models": "Terex TLB840, TLB890, RT555",
    },
  },
  {
    slug: "terex-seal-kit",
    model: "TQS-TRX-002",
    ref: "REF-TX-SK-TLB840",
    category: "terex",
    categoryLabel: "Terex Equipment Parts",
    name: "Terex TLB840 Full Cylinder Seal Kit Set",
    description: "Complete seal kit set covering all cylinders on the Terex TLB840 backhoe loader — boom, dipper, bucket, loader and stabiliser kits bundled together.",
    image: "/images/product-excavator.webp",
    specs: {
      "Kit Coverage": "All 6 cylinder positions",
      "Total Pieces": "96 seals across all kits",
      "Seal Material": "Polyurethane + NBR",
      "Compatible Models": "Terex TLB840, TLB890",
    },
  },
  {
    slug: "terex-steering-unit",
    model: "TQS-TRX-003",
    ref: "REF-TX-STR-009",
    category: "terex",
    categoryLabel: "Terex Equipment Parts",
    name: "Terex Hydraulic Steering Unit",
    description: "Orbital hydraulic steering unit (OSP/OLS type) for Terex wheeled backhoe loaders. Full-flow type with load-sensing port for responsive steering.",
    image: "/images/product-jcb.webp",
    specs: {
      "Type": "Orbital (Gerotor) steering unit",
      "Displacement": "100–250 cc/rev (available)",
      "Max Pressure": "175 bar",
      "Compatible Models": "Terex TLB840, TLB890, Fermec 860",
    },
  },

  // ── CAT ───────────────────────────────────────────────────────
  {
    slug: "cat-control-valve",
    model: "TQS-CAT-001",
    ref: "REF-CAT-1779426",
    category: "cat",
    categoryLabel: "CAT Components",
    name: "CAT 424 Control Valve Assembly",
    description: "Precision-engineered directional control valve for Caterpillar 424B backhoe loaders. Full compatibility with OEM specifications.",
    image: "/images/product-jcb.webp",
    specs: {
      "Valve Type": "Directional Control, 4-spool",
      "Pressure Rating": "300 bar",
      "Flow Rate": "80 L/min",
      "Compatible Models": "CAT 424B, CAT 428E, CAT 432F",
    },
  },
  {
    slug: "cat-bucket-cylinder",
    model: "TQS-CAT-002",
    ref: "REF-CAT-1371419",
    category: "cat",
    categoryLabel: "CAT Components",
    name: "CAT 428E Bucket Cylinder Assembly",
    description: "Complete bucket cylinder for Caterpillar 428E backhoe loaders. Hard-chrome plated rod and precision machined bore for OEM-level performance.",
    image: "/images/product-jcb.webp",
    specs: {
      "Bore Diameter": "105 mm",
      "Rod Diameter": "65 mm",
      "Stroke Length": "760 mm",
      "Max Pressure": "300 bar",
      "Compatible Models": "CAT 428E, CAT 432F",
    },
  },
  {
    slug: "cat-hydraulic-pump",
    model: "TQS-CAT-003",
    ref: "REF-CAT-2381490",
    category: "cat",
    categoryLabel: "CAT Components",
    name: "CAT 424B Main Hydraulic Gear Pump",
    description: "Tandem gear pump assembly for Caterpillar 424B backhoe loader. Delivers consistent flow to loader and backhoe circuits simultaneously.",
    image: "/images/product-jcb.webp",
    specs: {
      "Pump Type": "Tandem gear pump",
      "Front Section Flow": "75 L/min @ 2,200 rpm",
      "Rear Section Flow": "45 L/min @ 2,200 rpm",
      "Max Pressure": "250 bar",
      "Compatible Models": "CAT 424B, 428C, 428D",
    },
  },
  {
    slug: "cat-seal-kit",
    model: "TQS-CAT-004",
    ref: "REF-CAT-SK-428E",
    category: "cat",
    categoryLabel: "CAT Components",
    name: "CAT 428E Cylinder Seal Kit Bundle",
    description: "Full cylinder seal kit bundle for CAT 428E covering boom, stick, bucket, loader and stabiliser positions. Polyurethane and NBR seals.",
    image: "/images/product-jcb.webp",
    specs: {
      "Coverage": "5 cylinder seal kits",
      "Total Seals": "80 pieces",
      "Seal Material": "Polyurethane + FKM O-rings",
      "Compatible Models": "CAT 428E, 432F",
    },
  },

  // ── BREAKERS & TIPPERS ────────────────────────────────────────
  {
    slug: "breaker-accumulator",
    model: "TQS-BRK-001",
    ref: "REF-BRK-ACC-12",
    category: "breakers",
    categoryLabel: "Breakers & Tippers",
    name: "Hydraulic Breaker Accumulator",
    description: "High-performance nitrogen-charged accumulator for hydraulic rock breakers. Reduces peak pressure spikes and extends breaker life.",
    image: "/images/product-excavator.webp",
    specs: {
      "Volume": "2–10 L",
      "Pre-charge Pressure": "50–90 bar",
      "Max Working Pressure": "180 bar",
      "Compatible": "All major breaker brands",
    },
  },
  {
    slug: "breaker-front-head-seal",
    model: "TQS-BRK-002",
    ref: "REF-BRK-FHS-45",
    category: "breakers",
    categoryLabel: "Breakers & Tippers",
    name: "Hydraulic Breaker Front Head Seal Kit",
    description: "Complete front head seal kit for medium-class hydraulic rock breakers. Prevents oil leakage around the chisel/tool bushing area.",
    image: "/images/product-excavator.webp",
    specs: {
      "Seal Material": "Polyurethane + NBR",
      "Kit Contents": "Rod seals, dust seals, O-rings, back-up rings",
      "Compatible": "Furukawa, Atlas Copco, Soosan, MSB breakers",
      "Application": "500–1000 kg class breakers",
    },
  },
  {
    slug: "tipper-cylinder-kit",
    model: "TQS-BRK-003",
    ref: "REF-TIP-CYL-TRL",
    category: "breakers",
    categoryLabel: "Breakers & Tippers",
    name: "Tipper Body Telescopic Hydraulic Cylinder",
    description: "Multi-stage telescopic hydraulic cylinder for truck-mounted tipper bodies. Hot-dip galvanized outer sleeve for corrosion protection.",
    image: "/images/product-excavator.webp",
    specs: {
      "Type": "3-stage telescopic",
      "Closed Length": "1,200–1,600 mm",
      "Extended Length": "3,500–4,500 mm",
      "Working Pressure": "200 bar",
      "Capacity": "8–20 tonne tipper bodies",
    },
  },

  // ── L770 / TATA JD ────────────────────────────────────────────
  {
    slug: "l770-track-roller",
    model: "TQS-L770-001",
    ref: "REF-L770-TR-09",
    category: "l770",
    categoryLabel: "L770 / Tata JD Spares",
    name: "L770 Track Roller Assembly",
    description: "Heavy-duty bottom track roller for L770 crawler loaders. Sealed for life with premium bearing steel construction.",
    image: "/images/product-excavator.webp",
    specs: {
      "Flange Type": "Double flange",
      "Material": "Forged alloy steel",
      "Seal Type": "Duo-cone floating seal",
      "Compatible": "L770, Tata JD crawler loaders",
    },
  },
  {
    slug: "l770-front-idler",
    model: "TQS-L770-002",
    ref: "REF-L770-IDL-02",
    category: "l770",
    categoryLabel: "L770 / Tata JD Spares",
    name: "L770 Front Idler Assembly",
    description: "Cast steel front idler with yoke and recoil spring assembly for L770 and Tata JD crawler loaders. Controls track tension and absorbs ground shocks.",
    image: "/images/product-excavator.webp",
    specs: {
      "Material": "Cast alloy steel, machined OD",
      "Seal Type": "Duo-cone floating seal",
      "Recoil Spring": "Coil spring with grease recoil cylinder",
      "Compatible": "L770, Tata JD, Komatsu D31 class",
    },
  },
  {
    slug: "l770-drive-sprocket",
    model: "TQS-L770-003",
    ref: "REF-L770-SPR-07",
    category: "l770",
    categoryLabel: "L770 / Tata JD Spares",
    name: "L770 Drive Sprocket Segment Set",
    description: "Bolt-on drive sprocket segment set for L770 crawler loaders. Manufactured from Boron alloy steel for maximum wear life.",
    image: "/images/product-excavator.webp",
    specs: {
      "Material": "Boron alloy steel, 48 HRC hardness",
      "Segments per Set": "8 segments",
      "Tooth Profile": "OEM matched",
      "Compatible": "L770, Tata JD crawler loaders",
    },
  },

  // ── EXCAVATOR ────────────────────────────────────────────────
  {
    slug: "excavator-bucket-cylinder",
    model: "TQS-EXC-001",
    ref: "REF-EXC-BCK-22",
    category: "excavator",
    categoryLabel: "Excavator Earthmoving Parts",
    name: "Excavator Bucket Cylinder",
    description: "Complete bucket cylinder assembly for mid-size excavators (13–20 ton class). Hardened chrome rod with high-grade sealing system.",
    image: "/images/product-excavator.webp",
    specs: {
      "Bore": "100 mm",
      "Stroke": "850 mm",
      "Max Pressure": "350 bar",
      "Compatible": "Various 13–20 ton excavators",
    },
  },
  {
    slug: "excavator-swing-motor",
    model: "TQS-EXC-002",
    ref: "REF-EXC-SMT-20T",
    category: "excavator",
    categoryLabel: "Excavator Earthmoving Parts",
    name: "20-Ton Class Excavator Swing Motor",
    description: "Universal-fit swing motor assembly for 18–22 ton class excavators. Includes brake assembly and relief valves. Suits multiple brands.",
    image: "/images/product-excavator.webp",
    specs: {
      "Displacement": "60 cc/rev",
      "Max Pressure": "280 bar",
      "Max Speed": "35 rpm",
      "Brake": "Spring-applied, hydraulic release multi-disc",
      "Applicable Class": "18–22 ton excavators",
    },
  },
  {
    slug: "excavator-travel-motor",
    model: "TQS-EXC-003",
    ref: "REF-EXC-TRV-20T",
    category: "excavator",
    categoryLabel: "Excavator Earthmoving Parts",
    name: "Excavator Two-Speed Travel Motor",
    description: "Two-speed travel motor assembly for 20-ton class excavators. Automatic speed shift from high to low under load for climbing performance.",
    image: "/images/product-excavator.webp",
    specs: {
      "Type": "2-speed axial piston",
      "Displacement": "High: 80 cc | Low: 140 cc",
      "Max Pressure": "350 bar",
      "Parking Brake": "Spring-applied, hydraulic release",
      "Applicable Class": "18–23 ton excavators",
    },
  },
  {
    slug: "excavator-carrier-roller",
    model: "TQS-EXC-004",
    ref: "REF-EXC-CRL-20T",
    category: "excavator",
    categoryLabel: "Excavator Earthmoving Parts",
    name: "Excavator Carrier (Top) Roller",
    description: "Single-flange carrier roller for 20-ton class tracked excavators. Supports the return run of the track chain and prevents derailment.",
    image: "/images/product-excavator.webp",
    specs: {
      "Flange Type": "Single flange",
      "Material": "Forged alloy steel, heat-treated",
      "Seal Type": "Duo-cone floating seal",
      "Applicable Class": "15–25 ton excavators",
      "Brands": "Hitachi, Komatsu, CAT, JCB, Volvo",
    },
  },

  // ── GENERAL HYDRAULICS ────────────────────────────────────────
  {
    slug: "hydraulic-hose-assembly",
    model: "TQS-GEN-001",
    ref: "REF-GEN-HOSE-45",
    category: "general",
    categoryLabel: "General Hydraulics",
    name: "High-Pressure Hydraulic Hose Assembly",
    description: "4-wire spiral hydraulic hose assemblies for high-pressure applications. Custom lengths and fittings available for all machine types.",
    image: "/images/product-jcb.webp",
    specs: {
      "Working Pressure": "Up to 420 bar",
      "Temperature Range": "-40°C to +120°C",
      "Inner Diameter": "6–50 mm",
      "Certification": "ISO 3862 / SAE J517",
    },
  },
  {
    slug: "hydraulic-fitting-set",
    model: "TQS-GEN-002",
    ref: "REF-GEN-FIT-BSP",
    category: "general",
    categoryLabel: "General Hydraulics",
    name: "BSP Hydraulic Fitting Assortment Kit",
    description: "Comprehensive 120-piece BSP hydraulic fitting kit including male-female adaptors, elbows, tees, and reducers. Suits all construction equipment brands.",
    image: "/images/product-jcb.webp",
    specs: {
      "Total Pieces": "120 fittings",
      "Thread Standard": "BSP (BSPP / BSPT)",
      "Sizes": "1/4\" to 2\"",
      "Material": "Carbon steel, zinc plated",
      "Pressure Rating": "Up to 500 bar",
    },
  },
  {
    slug: "hydraulic-bladder-accumulator",
    model: "TQS-GEN-003",
    ref: "REF-GEN-ACC-BLD",
    category: "general",
    categoryLabel: "General Hydraulics",
    name: "Hydraulic Bladder Accumulator",
    description: "Nitrogen pre-charged bladder accumulator for energy storage, pulsation dampening and emergency power in hydraulic circuits.",
    image: "/images/product-jcb.webp",
    specs: {
      "Volume": "1–50 L (available)",
      "Pre-charge Pressure": "25–200 bar",
      "Max Working Pressure": "350 bar",
      "Bladder Material": "NBR / FKM / EPDM",
      "Shell": "Carbon steel or stainless steel",
    },
  },

  // ── FILTERS ───────────────────────────────────────────────────
  {
    slug: "hydraulic-filter-spin-on",
    model: "TQS-FLT-001",
    ref: "REF-FLT-HYD-10M",
    category: "filters",
    categoryLabel: "Filters & Service Parts",
    name: "Universal Hydraulic Spin-On Filter",
    description: "High-efficiency spin-on hydraulic filter suitable for all major construction equipment. 10-micron absolute filtration for clean system operation.",
    image: "/images/product-jcb.webp",
    specs: {
      "Micron Rating": "10 micron absolute",
      "Max Flow": "150 L/min",
      "Collapse Rating": "210 bar",
      "Bypass Valve": "3.5 bar",
      "Thread": "3/4\"-16 UNF (also M20 variant available)",
    },
  },
  {
    slug: "engine-air-filter-primary",
    model: "TQS-FLT-002",
    ref: "REF-FLT-AIR-PRM",
    category: "filters",
    categoryLabel: "Filters & Service Parts",
    name: "Heavy Equipment Primary Air Filter",
    description: "Primary outer air filter element for heavy construction equipment. Cellulose/synthetic blend media for superior dust retention in Indian site conditions.",
    image: "/images/product-jcb.webp",
    specs: {
      "Filter Media": "Cellulose + synthetic blend",
      "Dust Holding Capacity": "High (extended service life)",
      "Inner Diameter": "150–200 mm (model specific)",
      "Application": "Construction, mining, agriculture equipment",
      "Compatible": "JCB, Hitachi, Komatsu, CAT, Volvo, Terex",
    },
  },
  {
    slug: "universal-fuel-filter",
    model: "TQS-FLT-003",
    ref: "REF-FLT-FUEL-5M",
    category: "filters",
    categoryLabel: "Filters & Service Parts",
    name: "Universal Diesel Fuel Filter",
    description: "5-micron primary fuel filter for diesel construction equipment engines. Compatible thread sizes covering all major brands in the Indian market.",
    image: "/images/product-jcb.webp",
    specs: {
      "Micron Rating": "5 micron (fine filtration)",
      "Max Flow": "300 L/hr",
      "Thread": "M16 x 1.5 / 3/4\"-16 UNF",
      "Water Separation": "Partial (pre-separator stage)",
      "Compatible": "JCB Dieselmax, Cummins, Perkins, Yanmar engines",
    },
  },
];

export const BLOG_POSTS = [
  {
    slug: "hydraulic-maintenance-guide",
    title: "The Complete Guide to Hydraulic System Maintenance",
    excerpt: "Proper maintenance of hydraulic systems can extend equipment life by up to 40%. Learn the critical checkpoints every operator should know.",
    date: "2025-03-15",
    author: "Teckon™ Technical Team",
    category: "Maintenance",
    image: "/images/blog-hydraulics.webp",
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
A disciplined maintenance schedule, combined with genuine quality spare parts from certified suppliers like Teckon™, will significantly reduce downtime and total ownership cost.
    `,
  },
  {
    slug: "hitachi-excavator-hydraulic-pump-guide",
    title: "Hitachi Excavator Hydraulics: EX200 & Zaxis Troubleshooting",
    excerpt: "Learn how to diagnose common hydraulic pump failures, maintain pressure levels, and choose the right spare parts for Hitachi EX200 and Zaxis excavators.",
    date: "2025-03-01",
    author: "Alpesh Patel",
    category: "Hitachi Spares",
    image: "/images/product-excavator.webp",
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
Preventative maintenance and early troubleshooting of Hitachi hydraulic pumps can save lakhs in repair costs. When parts replacement becomes necessary, choosing Teckon™'s premium spares ensures OEM-level reliability.
    `,
  },
  {
    slug: "jcb-gear-pumps-vs-piston-pumps",
    title: "JCB 3CX Hydraulics: Gear Pumps vs Piston Pumps Guide",
    excerpt: "An in-depth technical comparison comparing gear pumps and piston pumps in JCB 3CX loaders, and how to identify which pump spares your machine needs.",
    date: "2025-02-25",
    author: "Teckon™ Technical Team",
    category: "JCB Spares",
    image: "/images/product-jcb.webp",
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
    image: "/images/blog-hydraulics.webp",
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
Using substandard replacement hydraulic parts can void warranties, cause premature failure, and in the worst case, create safety hazards. Teckon™ sources all parts to OEM specifications, ensuring fit, form, and function equivalence.

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
    image: "/images/product-excavator.webp",
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
    author: "Teckon™ Quality Team",
    category: "JCB Spares",
    image: "/images/product-jcb.webp",
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
- **Match Seal Dimensions:** Even slightly off-size seals will fail. Always verify the cylinder model (e.g. Boom, Bucket, Dipper, Stabilizer, or Steering cylinder) to get the exact matching Teckon™ kit.

## Conclusion
By replacing worn seal kits proactively, you prevent cylinder barrel scoring and maintain full digging power. Teckon™ seal kits are made from premium imported raw materials to match or exceed OEM longevity.
    `,
  },
  {
    slug: "teckon-expansion-2025",
    title: "Teckon™ Expands Pan-India Distribution Network in 2025",
    excerpt: "Shreeji Hydraulics strengthens its presence across Gujarat, Rajasthan, Maharashtra and Madhya Pradesh with new distribution partnerships.",
    date: "2025-01-20",
    author: "Teckon™ Team",
    category: "Company News",
    image: "/images/about-factory.webp",
    content: `
## Exciting Expansion News
We are proud to announce that Teckon™ Quality Spares has significantly expanded its distribution network across India, making it easier than ever for equipment operators and dealers to access genuine hydraulic spare parts quickly.

## New Distribution Hubs
In 2025, we have established new distribution partnerships in:
- **Jaipur, Rajasthan** — Serving the booming infrastructure sector
- **Pune, Maharashtra** — Catering to the large construction equipment base
- **Indore, Madhya Pradesh** — Supporting central India's growing mining sector

## Faster Delivery Commitment
With these new hubs, we can now guarantee 24-48 hour delivery across major cities in Gujarat, Rajasthan, Maharashtra, and Madhya Pradesh for stocked items.

## Looking Ahead
We continue to invest in our inventory, quality systems, and people to serve our growing customer base. With over 5000 SKUs in stock and ISO 9001:2015 certification, Teckon™ remains committed to being your most reliable hydraulic parts partner.

For inquiries about distribution partnerships or product availability in your region, contact us at shreejihyd4008@gmail.com.
    `,
  },
  {
    slug: "jcb-filters-complete-guide",
    title: "Understanding JCB Filters: Engine, Hydraulic, Fuel & Air — A Complete Guide",
    excerpt: "Filters are the most critical consumable parts on any JCB machine. Replacing them on time prevents 70% of all hydraulic and engine failures. Here's everything you need to know.",
    date: "2025-04-10",
    author: "Teckon™ Technical Team",
    category: "JCB Spares",
    image: "/images/product-jcb.webp",
    content: `
## Introduction
Of all the spare parts on a JCB machine, filters are the cheapest to replace — yet the most expensive to ignore. A clogged or bypassed filter can contaminate an entire hydraulic system within hours, leading to pump failure, valve wear, and cylinder scoring that can cost lakhs to repair. Here is a detailed breakdown of every filter type used in JCB equipment.

## 1. Engine Oil Filters
The engine oil filter is your first line of defence against internal engine wear. In JCB 3DX, 4DX, and JS series machines, the Dieselmax engine produces fine metal particles as normal wear occurs. Without a properly functioning oil filter, these particles recirculate and act like liquid sandpaper on your crankshaft, camshaft, and cylinder liners.

**Replacement Interval:** Every 250 operating hours or 6 months — whichever comes first.
**Signs of Failure:** Rising oil pressure on the gauge, engine ticking sounds, or dark foamy oil on the dipstick.

## 2. Hydraulic Return Line Filters
The hydraulic return filter captures particles from the entire hydraulic circuit as oil flows back to the tank. This is the most critical filter on any excavator or backhoe loader because it prevents contamination from a failing component from destroying every other component downstream.

**Replacement Interval:** Every 500 hours (or sooner in dusty environments like construction sites or quarries).
**Signs of Failure:** Filter bypass indicator lamp illuminated, hydraulic oil temperature rising above 80°C, or sluggish cylinder movement.

## 3. Fuel Filters
JCB Dieselmax engines use a two-stage fuel filtration system — a primary water separator filter and a secondary fine fuel filter. Water in diesel fuel is extremely damaging to modern common-rail injection systems, causing injector corrosion and pump failure.

**Replacement Interval:** Primary filter every 500 hours; secondary filter every 1,000 hours.
**Signs of Failure:** Hard starting, black smoke, loss of power under load, or injector stutter.

## 4. Air Filters (Primary and Secondary)
In construction environments, a JCB machine can ingest hundreds of grams of dust per day. The air filter prevents this from entering the engine and causing catastrophic cylinder bore wear. JCB uses a two-element system — a primary outer element and a secondary safety element.

**Replacement Interval:** Primary element every 500 hours. Secondary element only when the primary is replaced for the third time.
**Signs of Failure:** Air restriction warning lamp on the dashboard, black smoke, or a visible drop in engine power.

## 5. Transmission and Axle Filters (4WD Models — JCB 4DX)
The JCB 4DX and other 4-wheel drive machines have additional transmission oil filters. These protect the powershift gearbox and axle differentials from gear wear particles.

**Replacement Interval:** Every 1,000 hours.
**Signs of Failure:** Gear slippage, jerky engagement, or overheating of the transmission.

## Why Genuine-Quality Filters Matter
Not all replacement filters are equal. Low-cost imitation filters often use lower-grade filter media with larger pore sizes. This means they pass particles that are too large for hydraulic valves and pump clearances — causing accelerated wear even though the filter looks clean.

Teckon™ stocks a complete range of premium hydraulic, engine, fuel, and air filters for JCB 3DX, 3CX, 4CX, JS130, JS200, and NXT series machines — all manufactured to OEM specifications.

## Conclusion
Maintain your filter schedule strictly. Keep a maintenance logbook. A ₹500 filter can protect a ₹3,00,000 hydraulic pump. The maths is simple.
    `,
  },
  {
    slug: "how-to-choose-bucket-teeth-excavator",
    title: "How to Choose the Right Bucket Teeth for Your Excavator or Backhoe",
    excerpt: "Bucket teeth are the highest-wear parts on any digging machine. Choosing the wrong type or wrong material can halve your productivity and double your replacement costs.",
    date: "2025-04-22",
    author: "Alpesh Patel",
    category: "Ground Engaging Tools",
    image: "/images/product-excavator.webp",
    content: `
## Introduction
Bucket teeth — also called digging teeth or GET (Ground Engaging Tools) — are the hardened steel tips attached to the leading edge of an excavator or backhoe loader bucket. They are the part of the machine that actually contacts the ground, and they wear out faster than any other structural component. Choosing the right tooth type, material, and adapter system is critical for productivity and cost control.

## 1. Types of Bucket Teeth
There are three primary tooth profile categories:

**Standard (General Purpose) Teeth**
Used for mixed soil conditions — clay, compacted earth, gravel. These are the most common type and provide a good balance between penetration and wear life. Suitable for typical road building, foundation excavation, and urban construction.

**Rock/Heavy Duty Teeth**
Designed for granite, basalt, limestone, and hard rock excavation. These teeth are blunter and much thicker, with a heavier tip volume to absorb impact loads. They wear more slowly in abrasive conditions but create more resistance in soft ground, burning extra fuel.

**Penetration/Sharp Teeth**
These long, tapered, narrow teeth are designed for maximum penetration into dense clay or compacted subsoil. They require less breakout force and reduce fuel consumption in medium-hard ground, but wear quickly in rocky conditions.

## 2. Adapter Systems
The adapter is the welded base piece on the bucket that the tooth pin connects to. You must match your tooth to your existing adapter system. Common systems used on JCB, Hitachi, CAT, and Komatsu machines include:

- **Boss systems** — Integrated adapter welded into the bucket lip
- **Tiger systems** — Used on JCB 3DX and JS series
- **GET-Plus / Heavy Duty systems** — For large excavators above 20 tonnes

Always verify the adapter part number before ordering replacement teeth. An incorrect tooth that fits loosely will rock, accelerating wear on both the tooth and the adapter — costing far more than the tooth itself.

## 3. Material Grade
Bucket teeth are manufactured in different steel hardness grades:
- **400 Brinell (HB):** Standard wear applications
- **500 HB:** Heavy-duty abrasive applications
- **Carbide-tipped:** Extreme wear, quarry and mining use

Teckon™ recommends 500 HB teeth for most Indian construction site conditions where mixed rock, gravel, and clay are common.

## 4. When to Replace
Replace bucket teeth when:
- The tooth has worn to less than 60% of its original length
- You notice rounded, blunt tips causing the bucket to skid rather than penetrate
- Cracks or fractures appear near the pin eye
- You need more than one additional engine rpm to maintain digging speed

Worn teeth waste fuel, reduce production, and stress the bucket lip and adapters. Timely replacement saves money overall.

## Conclusion
At Teckon™, we stock standard, heavy-duty, and penetration bucket teeth for all major machine brands. Our technical team can recommend the right tooth for your site conditions, material type, and machine model.
    `,
  },
  {
    slug: "cev-stage-5-machines-parts-guide",
    title: "CEV Stage 5 Machines: What Changed and Which New Parts Are Different",
    excerpt: "India's CEV Stage 5 emission regulations came into force in 2024. If you've recently bought a new JCB, Hitachi, or Komatsu machine, here's what changed under the hood — and which parts are now different.",
    date: "2025-05-05",
    author: "Teckon™ Technical Team",
    category: "Industry Update",
    image: "/images/blog-hydraulics.webp",
    content: `
## What is CEV Stage 5?
Construction Equipment Vehicle (CEV) Stage 5 is India's latest off-road emission standard, aligned with Europe's Stage V regulations. It came into effect for new machines in January 2025, replacing the earlier CEV Stage IV standard. The new standard significantly reduces particulate matter (PM) and nitrogen oxide (NOx) emissions from diesel engines used in construction equipment.

## Key Engine Changes in Stage 5 Machines

**1. Diesel Particulate Filter (DPF)**
The most significant addition on Stage 5 machines is the Diesel Particulate Filter. This is a ceramic honeycomb device fitted in the exhaust system that traps fine soot particles. It periodically "regenerates" by burning off accumulated soot at high temperature. DPF failure or blockage causes severe engine de-rating (power loss) and a dashboard warning light.

**2. Selective Catalytic Reduction (SCR) with DEF/AdBlue**
Stage 5 machines also require a Diesel Exhaust Fluid (DEF), commonly called AdBlue, injection system. The SCR system injects a urea-water solution into the exhaust stream to convert NOx into harmless nitrogen and water. AdBlue tanks typically need refilling every 200–300 hours. Running out of AdBlue causes the engine controller to reduce power progressively until the machine stops.

**3. Exhaust Gas Recirculation (EGR) Upgrades**
Many Stage 5 engines feature updated EGR coolers and valves to handle the more aggressive emission targets. EGR valve sticking or EGR cooler blockage is a common fault in dusty environments.

## Parts That Are New or Changed on Stage 5 Machines
- **DPF Assembly** — New consumable, replacement required every 3,000–5,000 hours
- **DPF Temperature Sensors** — Critical for regeneration control
- **AdBlue (DEF) Pump and Injector** — New component entirely
- **AdBlue Tank Level Sensor** — New component
- **SCR Catalyst** — New exhaust after-treatment component
- **Updated EGR Cooler** — Revised design for higher thermal loads
- **New Engine Control Module (ECM)** — Updated software and hardware for emissions management

## Important Note for Parts Buyers
If your machine is a Stage 5 model (any new JCB, Hitachi, or CAT purchased in 2024 or later), do NOT assume that older Stage IV parts will fit. Always verify the stage level and engine serial number when ordering replacement engine or exhaust components.

## Conclusion
CEV Stage 5 is a major shift in how construction equipment engines work. Understanding the new after-treatment systems and stocking the right service parts is critical to keeping your fleet running legally and efficiently. Our Teckon™ technical team is trained to advise on Stage 5 parts compatibility across all major brands.
    `,
  },
  {
    slug: "hydraulic-oil-selection-guide-jcb-hitachi-komatsu",
    title: "Hydraulic Oil Selection Guide for JCB, Hitachi & Komatsu Machines",
    excerpt: "Using the wrong viscosity or wrong type of hydraulic oil can destroy a pump in hours. This cross-brand guide covers everything you need to know about selecting the right fluid for your machine.",
    date: "2025-05-18",
    author: "JC Patel",
    category: "Technical",
    image: "/images/blog-hydraulics.webp",
    content: `
## Introduction
Hydraulic oil is not just a lubricant — it is the power transmission medium, the heat transfer fluid, and the anti-corrosion agent in your machine's hydraulic system, all in one. Selecting the wrong oil grade or viscosity is one of the most common — and most expensive — mistakes made by equipment operators and workshop managers.

## Understanding Viscosity Grades
Hydraulic oils are classified by viscosity using the ISO VG (Viscosity Grade) system. The most common grades used in construction equipment are:

- **ISO VG 32** — Used in light-duty applications and in very cold climates
- **ISO VG 46** — Standard grade for most Indian construction equipment operating at moderate temperatures
- **ISO VG 68** — Recommended for machines operating in very hot climates or under heavy continuous load

The key rule: **higher viscosity = thicker oil = more suitable for high temperature and high load, but harder to pump when cold.**

## JCB Hydraulic Oil Recommendations
JCB specifies their proprietary **JCB HP46** hydraulic oil for most applications in India (ISO VG 46 equivalent). They also permit equivalent oils meeting the following standards:
- DIN 51524 Part 2 (HLP)
- ISO 6743/4 (HM grade)

For the JCB 3DX backhoe loader, the hydraulic system capacity is approximately **120 litres**. Full system oil change interval is every **2,000 operating hours**.

## Hitachi Hydraulic Oil Recommendations
Hitachi specifies **Cosmo Hydro AW 46** or equivalent for the Zaxis and EX series. Critical: the Hitachi Zaxis series uses a separate, smaller charge of **gear oil (80W-90)** in the swing gearbox and final drives — do NOT use hydraulic oil in these locations.

## Komatsu Hydraulic Oil Recommendations
Komatsu specifies **Komatsu Hydraulic Oil 46** or an equivalent ISO VG 46 anti-wear hydraulic oil. The PC200 and PC300 series machines have a hydraulic tank capacity of approximately **155 litres**. Oil change interval is every **1,000 hours** or annually.

## Multi-Grade vs Single-Grade Oils
In locations that experience significant temperature variation (like Rajasthan or high-altitude sites in Himachal Pradesh), multi-grade hydraulic oils (such as ISO VG 46 with VI improver additives) are recommended. These oils maintain stable viscosity from cold morning start-up to hot afternoon peak operation, preventing cavitation at start-up and reducing internal leakage at high temperatures.

## Signs You Have the Wrong Oil or Old Oil
- White/milky appearance — water contamination
- Dark brown/black colour — severe oxidation, oil is past its service life
- Varnish deposits on cylinder rods — oil breakdown with additive depletion
- Increased pump noise at start-up — oil too thick (wrong grade or cold)
- Overheating — oil too thin, insufficient film strength

## Conclusion
Always use the manufacturer-specified oil grade for your machine model and operating climate. At Teckon™, we supply a range of premium hydraulic service fluids suitable for JCB, Hitachi, Komatsu, and Terex equipment. Our technical team is happy to advise on the correct specification for your application.
    `,
  },
  {
    slug: "backhoe-loader-vs-excavator-parts-guide",
    title: "Backhoe Loader vs Excavator: Understanding the Differences & Spare Parts You'll Need",
    excerpt: "Backhoe loaders and excavators are often confused — but their hydraulic systems, spare parts, and maintenance needs are very different. This guide helps contractors and fleet managers understand what to expect.",
    date: "2025-06-01",
    author: "Teckon™ Technical Team",
    category: "Technical",
    image: "/images/product-excavator.webp",
    content: `
## Overview
Backhoe loaders (like the JCB 3DX) and tracked excavators (like the Hitachi ZX210 or JCB NXT 215 LC) are both digging machines — but they are fundamentally different in design, application, and the spare parts they require. Understanding the difference helps you plan maintenance budgets, stock the right spares, and reduce machine downtime.

## Backhoe Loaders: Design & Parts Characteristics

**What Makes a Backhoe Loader Different:**
A backhoe loader is a multi-function machine with both a front bucket (loader) and a rear backhoe (digging arm). It runs on wheels, making it highly mobile on public roads and construction sites. The JCB 3DX is the most popular backhoe loader in India, accounting for a significant share of all earthmoving equipment in the country.

**Key Parts Specific to Backhoe Loaders:**
- **Stabilizer Cylinders** — The four outrigger legs that stabilise the machine during digging. These are unique to backhoes and not found on excavators.
- **Loader Arm and Bucket Cylinders** — Front-end lift and tilt cylinders for the loader bucket
- **Swing Frame/Slew Cylinder** — The backhoe swings left and right via a hydraulic cylinder, unlike excavators which use a full 360° swing motor
- **Wheel Hubs and Axle Seals** — Wheeled machines have much more complex axle and driveline components
- **Torque Converter and Powershift Transmission** — Wheeled machines have automatic transmissions that tracked excavators do not

## Tracked Excavators: Design & Parts Characteristics

**What Makes an Excavator Different:**
A tracked excavator provides full 360° continuous rotation via a hydraulic swing motor and planetary gearbox. It sits on steel or rubber tracks, providing superior stability on uneven terrain and in deep excavation work. Modern excavators are larger, more powerful, and more complex than backhoe loaders.

**Key Parts Specific to Tracked Excavators:**
- **Swing Motor and Swing Gearbox** — No equivalent on a backhoe loader. This is a major, expensive assembly.
- **Travel Motors and Final Drives** — Two separate hydraulic motors driving two tracks via planetary gearboxes
- **Undercarriage Components** — Track chains, track rollers, carrier rollers, idlers, sprockets — entirely absent on wheeled backhoes
- **Main Hydraulic Pump (Variable Displacement)** — Most excavators use larger, more complex variable displacement axial piston pumps
- **Control Valves (LSV/Main Control Valve)** — Multi-function, high-flow hydraulic control valves that are larger and more expensive than those on backhoes

## Parts Cost Comparison

| Component | Backhoe Loader (JCB 3DX) | Tracked Excavator (JCB NXT 215) |
|---|---|---|
| Main Hydraulic Pump | ₹35,000–₹80,000 | ₹1,20,000–₹2,50,000 |
| Control Valve | ₹20,000–₹50,000 | ₹80,000–₹1,50,000 |
| Swing Motor | Not applicable | ₹60,000–₹1,20,000 |
| Seal Kits (per cylinder) | ₹800–₹3,000 | ₹1,500–₹6,000 |
| Track Roller (each) | Not applicable | ₹2,500–₹6,000 |

## Choosing the Right Machine for Your Work
- **Backhoe loaders** are best for road construction, utility work, and sites where machine mobility between locations is important
- **Tracked excavators** are best for mass excavation, heavy foundation work, quarrying, and sites where machine stability and continuous heavy digging is required

## Conclusion
Whether you operate backhoe loaders or tracked excavators, Teckon™ has you covered with a comprehensive spare parts inventory for both machine types. Our team can identify the correct part for any model based on your serial number and machine configuration.
    `,
  },
  {
    slug: "pins-and-bushes-guide-construction-equipment",
    title: "Pins and Bushes: The Small Parts That Keep Heavy Machines Running",
    excerpt: "Pins and bushes are the smallest — and most overlooked — structural components on any excavator or backhoe loader. Ignoring their wear leads to dangerous play in the boom and bucket, causing structural damage and safety risks.",
    date: "2025-06-10",
    author: "Alpesh Patel",
    category: "Maintenance",
    image: "/images/product-excavator.webp",
    content: `
## Introduction
In a heavy construction machine, hundreds of steel pins connect the boom, arm, bucket, cylinder eyes, and linkage components together. Each pin rotates inside a bronze or steel bush. Over time, this rotary motion under enormous loads causes the pin surface to wear, and the bush bore to enlarge. The result is "slop" or "play" in the joints — a dangerous and productivity-destroying condition.

## What Are Pins and Bushes?
**Pins** are precision-machined steel shafts, typically ground to tight dimensional tolerances, that act as pivot points for structural connections. On a JCB 3DX backhoe loader, there are over 30 individual pins across the boom, dipper, bucket, stabilisers, and loader arm.

**Bushes** are hollow cylindrical sleeves — usually made from manganese bronze, phosphor bronze, or hardened steel — pressed into the bores of the connecting structure. The pin rotates within the bush, with the bush acting as the sacrificial wear element. It is much cheaper to replace a bush than to re-bore a boom or arm casting.

## The Lubrication Connection
Pins and bushes rely on grease to create a protective film between the metal surfaces. On JCB machines, there are grease nipples at every pin location. The JCB maintenance schedule requires greasing every **50 operating hours** in normal conditions, and every **10 hours** in harsh, muddy, or dusty environments.

Failure to grease is the single biggest cause of premature pin and bush wear. Dry pins overheat, gall, and seize — often requiring hydraulic pressing equipment to extract.

## Signs of Worn Pins and Bushes
- **Visible play or slop** in the boom, arm, or bucket when operated slowly
- **Banging or clunking** sounds during digging or lifting cycles
- **Grease leaking** from around a joint (indicates the bush bore has enlarged beyond the seal's ability to retain grease)
- **Uneven bucket curl** or boom drift that does not respond to cylinder adjustment
- **Cracks at pin bore locations** on the boom or arm castings — a serious structural warning sign

## Types of Pins and Bushes for JCB and Hitachi
For JCB 3DX, common replacement sets include:
- Dipper arm pin and bush kit
- Bucket pin and bush kit
- Tipping link pin and bush
- Boom cylinder pin kit (upper and lower)
- Stabiliser bottom pin and bush

For Hitachi ZX and EX series:
- Arm-to-boom connection pin set
- Bucket linkage pin and bush
- Travel motor coupling bush

## Replacement Tips
- Always replace pins and bushes **in matched sets** — a new pin in a worn bush will develop play within weeks
- Heat the parent structure with a heat torch before pressing a new bush in — this prevents bush distortion during installation
- After installation, always apply fresh grease immediately to protect the new bush before any machine operation

## Conclusion
Pins and bushes are inexpensive preventive maintenance items that protect the far more expensive structural steel of your machine's boom and arm. Teckon™ supplies complete pin and bush kits for JCB, Hitachi, CAT, and Terex equipment, matched to OEM dimensions and manufactured from superior-grade bronze and steel.
    `,
  },
  {
    slug: "ground-engaging-tools-complete-guide",
    title: "Ground Engaging Tools (GET) Explained: Rippers, Cutting Edges & Wear Plates",
    excerpt: "Ground Engaging Tools are the parts of your machine that touch the earth. They wear fastest and impact productivity the most. Learn about every GET category, when to replace them, and how to choose the right specification.",
    date: "2025-06-15",
    author: "Teckon™ Technical Team",
    category: "Ground Engaging Tools",
    image: "/images/product-excavator.webp",
    content: `
## Introduction
Ground Engaging Tools (GET) is the collective term for all wear parts that directly contact the ground during excavation, loading, dozing, or grading operations. These include bucket teeth, cutting edges, side cutters, wear plates, rippers, and end bits. GET are the highest-wearing components on any earthmoving machine — and getting the right specification for your site conditions can dramatically reduce your cost-per-tonne and improve cycle times.

## Category 1: Bucket Teeth and Adapters
The most visible GET category. Teeth are tip-shaped hardened steel points attached via a pin-and-lock system to a welded adapter on the bucket lip.

**Tooth Selection Criteria:**
- **Soft Ground (clay, topsoil):** Standard penetration tooth — long, tapered tip for easy soil entry
- **Mixed Ground (gravel, compacted earth):** General purpose tooth — medium tip volume for balanced wear and penetration
- **Hard Rock (granite, basalt):** Heavy duty or rock tooth — blunt, thick tip to absorb impact and resist fracture

## Category 2: Cutting Edges (Blade Edges)
Cutting edges are long flat steel plates bolted to the bottom edge of a bucket or dozer blade. They protect the structural steel of the bucket lip from direct abrasion. When the cutting edge is worn down, it must be replaced before the bucket lip itself begins to wear — a far more expensive repair.

**Grades Available:**
- **Mild steel cutting edges** — For light sandy soil, minimum wear applications
- **400 HB hardened edges** — Standard construction use
- **500 HB hardened edges** — Mining, quarry, and hard rock applications

**Replacement Trigger:** Replace when the edge has worn to 50% of its original profile thickness.

## Category 3: Side Cutters
Side cutters (also called end bits or corner guards) are bolted to the left and right corners of the bucket, where diagonal wear is highest. They protect the bucket corners from wearing into an asymmetric shape that reduces capacity and digging efficiency.

Side cutters are available as:
- **Reversible type** — Can be flipped to use both faces before replacement
- **Bolt-on type** — Direct replacement of the corner section

## Category 4: Rippers and Shanks
Rippers are heavy, curved tooth-like implements mounted on the rear of a dozer or grader to break apart compacted soil, laterite, soft rock, or asphalt before other equipment can work. The shank is the main structural body; the ripper tip is the replaceable wear element.

Common applications in India:
- Road construction — breaking laterite and moorum layers
- Quarry preparation — loosening overburden before blasting
- Agricultural subsoiling — breaking deep hardpan to improve water infiltration

## Category 5: Wear Plates and Wear Liners
Wear plates are flat or curved sheets of hardened steel welded inside high-wear areas of buckets, chutes, or hoppers to protect the base material. They are sacrificial — designed to be replaced rather than the structural shell beneath.

**Common Specifications:**
- 400 HB: General construction bucket lining
- 500 HB: Mining and quarry bucket lining
- 600 HB (Tungsten Carbide tipped): Extreme abrasion applications

## Monitoring and Replacement Strategy
Implement a weekly visual GET inspection routine:
- Measure tooth length against the minimum specification
- Check adapter wear and tightness of the tooth retention pin
- Inspect cutting edge profile thickness
- Look for cracking at bolt holes on side cutters and wear plates

Document wear rates — this helps you predict replacement intervals, order parts proactively, and avoid unplanned downtime.

## Conclusion
Ground Engaging Tools may be consumable, but they are strategic. The right GET specification reduces fuel consumption, increases bucket fill factors, and extends the service life of your buckets. Teckon™ supplies a comprehensive range of GET for JCB, CAT, Hitachi, Komatsu, and Volvo equipment across all hardness grades and adapter systems.
    `,
  },
  {
    slug: "pre-owned-equipment-parts-demand-india",
    title: "Pre-Owned Construction Equipment: How It Shapes India's Spare Parts Market",
    excerpt: "India has one of the world's largest pre-owned construction equipment markets. Understanding this market helps fleet managers and parts buyers make smarter purchasing decisions.",
    date: "2025-06-18",
    author: "Teckon™ Team",
    category: "Industry Insight",
    image: "/images/about-factory.webp",
    content: `
## India's Pre-Owned Equipment Landscape
India's construction equipment market is unique globally — a significant proportion of machines operating on Indian job sites are second-hand units, often 7–15 years old. This creates an enormous and sustained demand for spare parts, rebuilding kits, and maintenance services that is largely separate from the new machine market.

According to industry estimates, India has approximately 5 lakh (500,000) construction machines in active operation, with roughly 30–40% being pre-owned units. These machines require 2–3 times the spare parts of a newer machine simply due to their age and accumulated wear.

## Why Pre-Owned Machines Drive the Aftermarket Parts Market
**1. Higher Wear, Higher Parts Consumption**
A 10-year-old JCB 3DX may have accumulated 15,000–20,000 operating hours. At this stage, major components — hydraulic pumps, swing motors, final drives, cylinder seal kits, pins and bushes — are on their second or third replacement cycle. This is the sweet spot for a quality aftermarket parts supplier.

**2. OEM Parts Support Decline**
For machines older than 7–8 years, original equipment manufacturers often begin phasing out direct parts support or significantly increasing prices for aging parts. This opens the door for quality aftermarket suppliers who can maintain inventory for older model numbers.

**3. The SAMIL Effect — Formalisation of the Pre-Owned Market**
In January 2025, JCB India and Shriram Automall India Limited (SAMIL) signed a Memorandum of Understanding to formalise the sale of pre-owned JCB machines. This kind of formalisation brings more machines into the organised second-hand market, increasing visibility and driving demand for service and parts from new owners who inherit machines with unknown maintenance histories.

## What Parts Do Pre-Owned Machine Owners Need Most?
Based on our experience at Teckon™ serving the pre-owned equipment segment, the highest-demand parts for older machines are:

**Hydraulic System:**
- Complete pump overhaul/rebuild kits (piston shoes, cylinder block, valve plate)
- Full cylinder seal kit sets for boom, dipper, bucket, and stabiliser cylinders
- Control valve rebuild kits and O-ring sets
- Hydraulic hose assemblies (deteriorated by age and UV)

**Undercarriage (for tracked excavators):**
- Track rollers (bottom rollers)
- Carrier rollers (top rollers)
- Idler assemblies
- Duo-cone floating seals (common failure in older machines)
- Track chains and links

**Engine:**
- Engine gasket sets
- Turbocharger rebuild kits
- Water pump assemblies
- Fan belt and alternator belt sets

**Structural:**
- Pin and bush complete machine kits
- Stabiliser pad wear plates
- Bucket teeth and cutting edges

## Buying Smart: OEM vs Aftermarket for Pre-Owned Machines
For a machine over 8 years old, the economic case for using premium-quality aftermarket parts (rather than OEM) becomes very strong. The machine's resale value doesn't justify paying OEM premium prices for every component. The key is choosing aftermarket parts that match OEM dimensional and material specifications — this is exactly what Teckon™ provides.

## Conclusion
The pre-owned construction equipment market is not a secondary consideration — it is the backbone of the Indian aftermarket parts industry. At Teckon™, we have specifically structured our inventory and technical expertise to serve this market segment, with parts coverage extending back to machines manufactured in the early 2000s.

Contact our team to find the right parts for your fleet, regardless of machine age or model year.
    `,
  },
];

// Parts categories taxonomy (inspired by JCB parts structure)
export const PARTS_CATEGORIES = [
  {
    slug: "filters",
    name: "Filters",
    icon: "🔵",
    description: "Engine oil, hydraulic, fuel, and air filters for all major construction equipment brands.",
    items: ["Engine Oil Filters", "Hydraulic Return Line Filters", "Fuel Filters", "Air Filters (Primary & Secondary)", "Transmission Filters"],
    machines: ["JCB 3DX", "JCB 4DX", "JCB NXT 215 LC", "Hitachi ZX200", "CAT 424B"],
  },
  {
    slug: "pins-and-bushes",
    name: "Pins & Bushes",
    icon: "⚙️",
    description: "Precision-machined pivot pins and bronze bushes for boom, dipper, bucket and linkage connections.",
    items: ["Dipper Arm Pins", "Bucket Pins", "Boom Cylinder Pins", "Tipping Link Pins", "Stabiliser Bottom Pins", "Bronze Bush Kits"],
    machines: ["JCB 3DX", "JCB 3CX", "Hitachi EX200", "Terex TLB840"],
  },
  {
    slug: "ground-engaging-tools",
    name: "Ground Engaging Tools",
    icon: "⛏️",
    description: "Bucket teeth, cutting edges, side cutters, rippers, and wear plates for earthmoving applications.",
    items: ["Standard Bucket Teeth", "Rock/Heavy Duty Teeth", "Cutting Edges (400HB/500HB)", "Side Cutters", "Ripper Shanks & Tips", "Wear Plates"],
    machines: ["All Excavators", "All Backhoe Loaders", "Dozers", "Motor Graders"],
  },
  {
    slug: "powertrain-components",
    name: "Powertrain Components",
    icon: "🔧",
    description: "Engine, gearbox, axle and drivetrain parts for wheeled and tracked construction equipment.",
    items: ["Engine Overhaul Kits", "Gearbox Repair Kits", "Axle Components", "Drive Shafts", "Torque Converters", "Transmission Filters"],
    machines: ["JCB 4DX", "JCB 3DX", "CAT 424B", "L770 Crawler Loader"],
  },
  {
    slug: "electrical-lighting",
    name: "Electrical & Lighting",
    icon: "💡",
    description: "Wiring harnesses, LED work lights, switches, relays, and instrument clusters.",
    items: ["Wiring Harness Assemblies", "LED Work Lights", "Switches & Relays", "Instrument Clusters", "Alternators", "Starter Motors"],
    machines: ["JCB 3DX", "JCB JS130", "Hitachi ZX", "CAT 424B"],
  },
  {
    slug: "cab-body-parts",
    name: "Cab & Body Parts",
    icon: "🚧",
    description: "Glass, door seals, mirrors, panels and structural cab components for operator safety and comfort.",
    items: ["Windscreen Glass", "Door Seals & Rubber", "Side Mirrors", "Cab Door Hinges", "Operator Seat Assemblies", "ROPS/FOPS Panels"],
    machines: ["JCB 3DX", "JCB JS series", "Hitachi ZX series", "Terex equipment"],
  },
  {
    slug: "undercarriage",
    name: "Undercarriage Parts",
    icon: "🔩",
    description: "Track rollers, carrier rollers, idlers, sprockets, track chains and duo-cone seals for tracked equipment.",
    items: ["Bottom Track Rollers", "Carrier (Top) Rollers", "Front Idler Assemblies", "Drive Sprockets", "Track Chain Links", "Duo-Cone Floating Seals"],
    machines: ["Hitachi ZX200", "Hitachi EX200", "JCB JS130", "JCB JS200", "L770 Crawler"],
  },
  {
    slug: "service-fluids",
    name: "Service Fluids",
    icon: "🛢️",
    description: "Hydraulic oils, engine oils, transmission fluids, and greases specified for major equipment brands.",
    items: ["Hydraulic Oil ISO VG 46", "Hydraulic Oil ISO VG 68", "Engine Oil 15W-40", "Gear Oil 80W-90", "Multiplex Grease", "Anti-Wear Additives"],
    machines: ["All Construction Equipment"],
  },
];

export const EVENTS = [
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
