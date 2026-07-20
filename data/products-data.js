/* =========================================================
   DECORA INDUSTRIES — product catalogue data
   ---------------------------------------------------------
   This file defines the catalogue as a GLOBAL JavaScript array
   (window.DECORA_PRODUCTS) instead of a JSON file fetched with
   fetch(). That guarantees the catalogue works even when the site
   is opened directly from disk (file://) with no web server.

   ── HOW TO ADD A PRODUCT ──────────────────────────────────
   Copy any object below, paste it into the array, and edit:
     id .................. unique slug, also used in
                           product-details.html?id=YOUR-ID
     name ................ display name
     category ............ MUST match one of CATEGORIES below
     audience ............ any of: "Home","Office","Retail",
                           "Warehouse","Institution","Industrial"
     image ............... main image path (see assets/images/products/)
     gallery ............. extra image paths (optional)
     shortDescription .... one line for cards
     features ............ bullet list
     specifications ...... key/value object (rendered as a table)
     configurations ...... available sizes/variants (optional)
     industries .......... suited industries (optional)
     customisation ....... custom-manufacturing notes (optional)
     featured ............ true to show on the homepage
   Product images live in  assets/images/products/  — replace the
   .svg placeholders with real .webp photos using the same filename.
   ========================================================= */

/* Category list — keep in sync with the objects below. */
window.DECORA_CATEGORIES = [
  "Steel Almirahs","Steel Racks","Steel Lockers","Steel Storage Units",
  "Steel Book Shelves","Shopping Mart Shelving","Warehouse Storage Racks",
  "Office Storage Solutions","Institutional Lockers","Barbed Wire",
  "Fencing Wire","Custom Steel Fabrication"
];

/* Audience filter list. */
window.DECORA_AUDIENCES = ["Home","Office","Retail","Warehouse","Institution","Industrial"];

window.DECORA_PRODUCTS = [
  {
    id: "steel-almirah-two-door",
    name: "Two-Door Steel Almirah",
    category: "Steel Almirahs",
    audience: ["Home","Office"],
    image: "assets/images/products/steel-almirah-two-door.svg",
    gallery: ["assets/images/products/three-door-almirah.svg","assets/images/products/industrial-storage-cabinet.svg"],
    shortDescription: "A durable two-door storage cabinet built for homes, offices and hostels.",
    features: [
      "Powder-coated steel construction resists dents and corrosion",
      "Adjustable internal shelves and a hanging section",
      "Recessed handle with a secure locking system",
      "Concealed hinges for a clean, flush front"
    ],
    specifications: {
      Material: "CRCA steel",
      Gauge: "20 / 22 gauge options",
      Finish: "Powder-coated",
      Dimensions: "1980 × 915 × 485 mm (customisable)",
      Shelves: "3–4 adjustable",
      Locking: "Cam lock with two keys",
      Colours: "Grey, ivory, blue, maroon or to order"
    },
    configurations: ["2-door standard","2-door with locker compartment","2-door wide"],
    industries: ["Homes and Residential","Offices and Corporate","Schools and Institutions"],
    customisation: "Height, width, shelf count, gauge and colour can be produced to requirement for bulk orders.",
    featured: true
  },
  {
    id: "steel-locker-four-door",
    name: "Four-Door Steel Locker",
    category: "Steel Lockers",
    audience: ["Office","Institution","Industrial"],
    image: "assets/images/products/steel-locker-four-door.svg",
    gallery: ["assets/images/products/personnel-locker-6.svg"],
    shortDescription: "Compartmentalised locker for staff, factories, schools and gyms.",
    features: [
      "Four independently locking compartments",
      "Ventilation louvres on every door",
      "Reinforced door frames for daily heavy use",
      "Card-holder slot and numbering plate"
    ],
    specifications: {
      Material: "CRCA steel",
      Gauge: "20 gauge body, 18 gauge doors",
      Finish: "Powder-coated",
      Dimensions: "1980 × 380 × 460 mm (customisable)",
      Compartments: "4",
      Locking: "Individual cam locks (padlock-ready option)",
      Colours: "Grey standard, custom on order"
    },
    configurations: ["4-door","6-door","9-door","12-door"],
    industries: ["Factories and Workshops","Schools and Institutions","Offices and Corporate"],
    customisation: "Compartment count, lock type (cam, padlock, digital) and colours available to order.",
    featured: true
  },
  {
    id: "heavy-duty-adjustable-rack",
    name: "Heavy-Duty Adjustable Rack",
    category: "Steel Racks",
    audience: ["Warehouse","Retail","Industrial","Office"],
    image: "assets/images/products/heavy-duty-adjustable-rack.svg",
    gallery: ["assets/images/products/slotted-angle-rack.svg"],
    shortDescription: "Bolt-free slotted rack with adjustable shelf levels for storerooms.",
    features: [
      "Boltless slotted-angle assembly",
      "Shelf heights adjustable in 25 mm steps",
      "High load capacity per shelf",
      "Expandable with add-on bays"
    ],
    specifications: {
      Material: "Slotted-angle steel",
      Finish: "Powder-coated / zinc options",
      Dimensions: "Configurable height, width and depth",
      Shelves: "4–7 levels",
      "Load per shelf": "Up to 150 kg (config dependent)",
      Colours: "Grey, blue"
    },
    configurations: ["4-shelf","5-shelf","6-shelf","Double-bay"],
    industries: ["Warehouses and Logistics","Retail and Shopping Marts","Offices and Corporate"],
    customisation: "Dimensions, shelf count and load rating tailored to your storeroom and load profile.",
    featured: true
  },
  {
    id: "retail-gondola-shelf",
    name: "Retail Gondola Shelving Unit",
    category: "Shopping Mart Shelving",
    audience: ["Retail"],
    image: "assets/images/products/retail-gondola-shelf.svg",
    gallery: ["assets/images/products/supermarket-end-cap.svg"],
    shortDescription: "Double-sided display shelving for supermarkets and shopping marts.",
    features: [
      "Double-sided merchandising with adjustable shelves",
      "Perforated back panel for hooks and accessories",
      "Base plinth with kick-plate",
      "Modular bays link into continuous runs"
    ],
    specifications: {
      Material: "Steel with perforated panels",
      Finish: "Powder-coated",
      Dimensions: "1500–1800 mm high (customisable)",
      Shelves: "Adjustable, 4–6 per side",
      Configuration: "Single or double sided",
      Colours: "White, grey, custom brand colours"
    },
    configurations: ["Wall unit (single-sided)","Island unit (double-sided)","End-cap unit"],
    industries: ["Retail and Shopping Marts","Hotels and Hospitality"],
    customisation: "Height, shelf pitch, back-panel type and brand colours produced to store layout.",
    featured: true
  },
  {
    id: "industrial-storage-cabinet",
    name: "Industrial Storage Cabinet",
    category: "Steel Storage Units",
    audience: ["Industrial","Warehouse","Office"],
    image: "assets/images/products/industrial-storage-cabinet.svg",
    gallery: [],
    shortDescription: "Lockable heavy-gauge cabinet for tools, spares and consumables.",
    features: [
      "Heavy-gauge welded body",
      "Adjustable shelves rated for tools and spares",
      "Three-point locking for security",
      "Levelling feet for uneven floors"
    ],
    specifications: {
      Material: "Heavy-gauge steel",
      Gauge: "18 gauge",
      Finish: "Powder-coated",
      Dimensions: "1900 × 900 × 450 mm (customisable)",
      Shelves: "3–4 adjustable",
      Locking: "Three-point handle lock",
      Colours: "Grey, blue"
    },
    configurations: ["Standard","Wide","With drawers"],
    industries: ["Factories and Workshops","Warehouses and Logistics"],
    customisation: "Drawer/shelf mix, gauge and dimensions built to your tooling requirement.",
    featured: true
  },
  {
    id: "steel-book-shelf",
    name: "Steel Book Shelf",
    category: "Steel Book Shelves",
    audience: ["Institution","Office","Home"],
    image: "assets/images/products/steel-book-shelf.svg",
    gallery: ["assets/images/products/library-book-rack.svg"],
    shortDescription: "Open steel shelving for schools, libraries and offices.",
    features: [
      "Open-front adjustable shelves",
      "Rounded safety edges",
      "Sway-braced frame for stability",
      "Single or double-sided options"
    ],
    specifications: {
      Material: "CRCA steel",
      Finish: "Powder-coated",
      Dimensions: "1800 × 900 × 300 mm (customisable)",
      Shelves: "5 adjustable",
      Configuration: "Single or double sided",
      Colours: "Grey, ivory, custom"
    },
    configurations: ["Single-sided","Double-sided","Low reading-room unit"],
    industries: ["Schools and Institutions","Offices and Corporate","Homes and Residential"],
    customisation: "Height, shelf count and single/double-sided layout to suit library aisles.",
    featured: true
  },
  {
    id: "warehouse-pallet-rack",
    name: "Warehouse Pallet Rack",
    category: "Warehouse Storage Racks",
    audience: ["Warehouse","Industrial"],
    image: "assets/images/products/warehouse-pallet-rack.svg",
    gallery: ["assets/images/products/long-span-shelving.svg"],
    shortDescription: "Selective pallet racking for high-density warehouse storage.",
    features: [
      "Bolted upright frames with beam levels",
      "Designed for forklift pallet handling",
      "Safety locking clips on every beam",
      "Scalable across multiple bays and levels"
    ],
    specifications: {
      Material: "Structural / roll-formed steel",
      Finish: "Powder-coated / galvanised options",
      Dimensions: "Engineered to bay and clear-height",
      Levels: "3–6 beam levels",
      "Load per level": "Up to 2000 kg (design dependent)",
      Colours: "Blue uprights, orange beams (standard)"
    },
    configurations: ["Selective racking","Long-span shelving","Multi-tier"],
    industries: ["Warehouses and Logistics","Factories and Workshops"],
    customisation: "Bay size, beam load rating and level count engineered to your pallet and SKU profile.",
    featured: true
  },
  {
    id: "barbed-wire-roll",
    name: "High-Tensile Barbed Wire Roll",
    category: "Barbed Wire",
    audience: ["Industrial"],
    image: "assets/images/products/barbed-wire-roll.svg",
    gallery: ["assets/images/products/chain-link-fencing.svg"],
    shortDescription: "Galvanised high-tensile barbed wire for perimeter security.",
    features: [
      "Hot-dip galvanised for corrosion resistance",
      "Consistent, sharp double-twist barbs",
      "High-tensile core for long spans",
      "Supplied in weatherproof rolls"
    ],
    specifications: {
      Material: "Galvanised steel wire",
      "Wire gauge": "12 / 14 gauge options",
      "Barb spacing": "75–150 mm",
      "Coating": "Hot-dip / GI",
      "Roll length": "Custom (per weight or metre)",
      Application: "Boundary and perimeter security"
    },
    configurations: ["Double-twist","Single-strand","Concertina coil"],
    industries: ["Construction and Infrastructure","Agricultural properties","Factories and Workshops"],
    customisation: "Gauge, barb spacing, coating weight and roll length supplied to specification.",
    featured: true
  },
  {
    id: "three-door-almirah",
    name: "Three-Door Steel Almirah",
    category: "Steel Almirahs",
    audience: ["Home","Institution"],
    image: "assets/images/products/three-door-almirah.svg",
    gallery: [],
    shortDescription: "Wide three-door wardrobe for hostels and large households.",
    features: ["Wide three-door body","Hanging rail plus shelves","Locker sub-compartment","Powder-coated finish"],
    specifications: { Material:"CRCA steel", Finish:"Powder-coated", Dimensions:"1980 × 1370 × 485 mm (customisable)", Locking:"Cam lock", Colours:"Grey, ivory, custom" },
    configurations: ["3-door standard","3-door with locker"],
    industries: ["Homes and Residential","Schools and Institutions"],
    customisation: "Internal layout and dimensions produced to order.",
    featured: false
  },
  {
    id: "personnel-locker-6",
    name: "Six-Compartment Locker",
    category: "Institutional Lockers",
    audience: ["Institution","Industrial","Office"],
    image: "assets/images/products/personnel-locker-6.svg",
    gallery: [],
    shortDescription: "Six-door personnel locker for changing rooms and staff areas.",
    features: ["Six ventilated compartments","Individual locks","Sloping top option","Numbered doors"],
    specifications: { Material:"CRCA steel", Finish:"Powder-coated", Dimensions:"1980 × 380 × 460 mm (customisable)", Compartments:"6", Locking:"Individual cam locks", Colours:"Grey, custom" },
    configurations: ["6-door","9-door","12-door"],
    industries: ["Factories and Workshops","Schools and Institutions","Hotels and Hospitality"],
    customisation: "Door count and lock type to order.",
    featured: false
  },
  {
    id: "slotted-angle-rack",
    name: "Slotted Angle Rack",
    category: "Steel Racks",
    audience: ["Office","Warehouse","Retail"],
    image: "assets/images/products/slotted-angle-rack.svg",
    gallery: [],
    shortDescription: "Economical boltless rack for files, stock and general storage.",
    features: ["Boltless assembly","Adjustable shelf levels","Reconfigurable and expandable","Powder-coated angles"],
    specifications: { Material:"Slotted-angle steel", Finish:"Powder-coated", Dimensions:"Configurable", Shelves:"5 levels", Colours:"Grey, blue" },
    configurations: ["File rack","Storeroom rack","Double-bay"],
    industries: ["Offices and Corporate","Warehouses and Logistics"],
    customisation: "Dimensions and shelf count to order.",
    featured: false
  },
  {
    id: "mobile-storage-unit",
    name: "Mobile Storage Unit",
    category: "Steel Storage Units",
    audience: ["Office","Industrial"],
    image: "assets/images/products/mobile-storage-unit.svg",
    gallery: [],
    shortDescription: "Compact cabinet on castors for flexible workspace storage.",
    features: ["Lockable castors","Drawer and shelf mix","Compact footprint","Powder-coated finish"],
    specifications: { Material:"CRCA steel", Finish:"Powder-coated", Dimensions:"650 × 450 × 500 mm (customisable)", Locking:"Central lock", Colours:"Grey, custom" },
    configurations: ["3-drawer","Shelf + drawer","Under-desk"],
    industries: ["Offices and Corporate","Factories and Workshops"],
    customisation: "Drawer/shelf configuration to order.",
    featured: false
  },
  {
    id: "library-book-rack",
    name: "Double-Sided Library Rack",
    category: "Steel Book Shelves",
    audience: ["Institution"],
    image: "assets/images/products/library-book-rack.svg",
    gallery: [],
    shortDescription: "Double-sided library shelving for high-capacity aisles.",
    features: ["Double-sided shelves","Adjustable levels","End panels with signage slot","Sway-braced base"],
    specifications: { Material:"CRCA steel", Finish:"Powder-coated", Dimensions:"1980 × 1000 × 500 mm (customisable)", Configuration:"Double sided", Colours:"Grey, ivory" },
    configurations: ["Double-sided","Single-sided","Low unit"],
    industries: ["Schools and Institutions"],
    customisation: "Aisle length and shelf pitch to order.",
    featured: false
  },
  {
    id: "supermarket-end-cap",
    name: "Supermarket End-Cap Shelf",
    category: "Shopping Mart Shelving",
    audience: ["Retail"],
    image: "assets/images/products/supermarket-end-cap.svg",
    gallery: [],
    shortDescription: "High-visibility end-of-aisle promotional shelving.",
    features: ["Promotional end-cap format","Adjustable shelves","Branding header option","Links to gondola runs"],
    specifications: { Material:"Steel", Finish:"Powder-coated", Dimensions:"1500 × 900 × 400 mm (customisable)", Colours:"White, grey, brand colours" },
    configurations: ["Standard","With header","With basket"],
    industries: ["Retail and Shopping Marts"],
    customisation: "Header branding and shelf layout to order.",
    featured: false
  },
  {
    id: "long-span-shelving",
    name: "Long-Span Shelving",
    category: "Warehouse Storage Racks",
    audience: ["Warehouse","Retail","Industrial"],
    image: "assets/images/products/long-span-shelving.svg",
    gallery: [],
    shortDescription: "Wide-span shelving for bulky, hand-loaded stock.",
    features: ["Long clear spans between uprights","Steel or board deck options","Boltless beam locking","Expandable bays"],
    specifications: { Material:"Roll-formed steel", Finish:"Powder-coated", Dimensions:"Configurable", Levels:"3–5", "Load per level":"Up to 500 kg", Colours:"Grey, blue" },
    configurations: ["Steel deck","Board deck","Multi-tier"],
    industries: ["Warehouses and Logistics","Retail and Shopping Marts"],
    customisation: "Span, deck type and load rating to order.",
    featured: false
  },
  {
    id: "chain-link-fencing",
    name: "Chain-Link Fencing Roll",
    category: "Fencing Wire",
    audience: ["Industrial"],
    image: "assets/images/products/chain-link-fencing.svg",
    gallery: ["assets/images/products/barbed-wire-roll.svg"],
    shortDescription: "Galvanised chain-link mesh for boundaries and enclosures.",
    features: ["Galvanised / PVC-coated options","Uniform diamond mesh","Supplied in rolls to length","Suits posts and rails"],
    specifications: { Material:"Galvanised steel wire", "Wire gauge":"8–12 gauge", "Mesh size":"25–75 mm", Coating:"GI / PVC", "Roll height":"Custom", Application:"Boundary and enclosures" },
    configurations: ["GI mesh","PVC-coated mesh","Concertina add-on"],
    industries: ["Construction and Infrastructure","Agricultural properties","Factories and Workshops"],
    customisation: "Mesh size, gauge, coating and roll height supplied to specification.",
    featured: false
  }
];
