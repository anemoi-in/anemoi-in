/* ------------------------------------------------------------------ */
/*  Anemoi Supply Co. — content model                                  */
/* ------------------------------------------------------------------ */

export type Material = {
  id: string;
  name: string;
  short: string;
  material: string;
  image: string;
  swatch: string; // hex chip shown in tables
  bestFor: string;
  blurb: string;
  palmMil: string;
  sizes: string;
  boxCount: number;
  caseCount: number;
  colorName: string;
  powder: string;
  aql: string;
  shelfLife: string;
  standards: string[];
  priceFrom: string;
  specRows: [string, string][];
  bestForList: string[];
  watchFor: string[];
  priceBreaks: { qty: string; perCase: string; perGlove: string }[];
};

export const MATERIALS: Material[] = [
  {
    id: "nitrile",
    name: "Nitrile Pro 35",
    short: "Nitrile",
    material: "100% nitrile butadiene",
    image: "https://image.qwenlm.ai/generated-images/32e8b83c-0b2b-4bc6-97a8-d9fc4cd3ed9d/_result.png",
    swatch: "#0e7c72",
    bestFor: "The default for clinics, kitchens and chemical work alike.",
    blurb:
      "Our flagship. A 3.5 mil powder-free nitrile with textured fingertips, chemo-permeation data on file and the lowest puncture rate in the range.",
    palmMil: "3.5 mil",
    sizes: "XS – XL",
    boxCount: 200,
    caseCount: 2000,
    colorName: "Anemoi teal",
    powder: "Powder-free",
    aql: "AQL 1.5",
    shelfLife: "5 years",
    standards: ["ASTM D6319", "EN 455-1/2/3", "FDA 510(k)", "ASTM D6978 chemo"],
    priceFrom: "$0.032 / glove",
    specRows: [
      ["Material", "100% nitrile butadiene, powder-free"],
      ["Palm thickness", "3.5 mil (89 µm)"],
      ["Cuff", "9.5 in beaded, rolled"],
      ["Sizes", "XS, S, M, L, XL"],
      ["Color", "Anemoi teal (high visibility)"],
      ["Surface", "Textured fingertips, chlorinated inner"],
      ["Box / case", "200 gloves · 10 boxes per case"],
      ["Inspection level", "AQL 1.5, ASTM D6319 sampled every lot"],
      ["Shelf life", "5 years from manufacture"],
      ["Documents per lot", "CoA, SDS, 510(k) listing on request"],
    ],
    bestForList: [
      "Patient exam and procedure rooms",
      "Raw-protein and allergen handling in kitchens",
      "Janitorial, sanitation and chemical splash tasks",
      "USP <800> handling where chemo data is required",
    ],
    watchFor: [
      "Not the highest-tactility option — see Latex Exam 40 for micro-procedures",
      "For extended immersion, double-glove or move to an 8 mil industrial nitrile",
    ],
    priceBreaks: [
      { qty: "1 – 9 cases", perCase: "$64.00", perGlove: "$0.0320" },
      { qty: "10 – 49 cases", perCase: "$58.00", perGlove: "$0.0290" },
      { qty: "50 – 199 cases", perCase: "$52.00", perGlove: "$0.0260" },
      { qty: "200+ cases", perCase: "$47.00", perGlove: "$0.0235" },
    ],
  },
  {
    id: "latex",
    name: "Latex Exam 40",
    short: "Latex",
    material: "Natural rubber latex, low-protein",
    image: "https://image.qwenlm.ai/generated-images/1bbde13f-ee4e-47a1-953f-12fc3e7916dd/_result.png",
    swatch: "#d9cdb4",
    bestFor: "Where fingertip feel is the job — dental, suturing, fine assembly.",
    blurb:
      "A 4.0 mil low-protein natural latex with the elastic recovery synthetics can't match. Washed twice to keep residual protein under 50 µg/g.",
    palmMil: "4.0 mil",
    sizes: "XS – XL",
    boxCount: 200,
    caseCount: 2000,
    colorName: "Natural ivory",
    powder: "Powder-free",
    aql: "AQL 1.5",
    shelfLife: "3 years",
    standards: ["ASTM D3578", "EN 455-1/2/3", "FDA 510(k)"],
    priceFrom: "$0.034 / glove",
    specRows: [
      ["Material", "Natural rubber latex, powder-free"],
      ["Palm thickness", "4.0 mil (102 µm)"],
      ["Cuff", "9.5 in beaded, rolled"],
      ["Sizes", "XS, S, M, L, XL"],
      ["Color", "Natural ivory"],
      ["Residual protein", "< 50 µg/g (double-washed)"],
      ["Box / case", "200 gloves · 10 boxes per case"],
      ["Inspection level", "AQL 1.5, ASTM D3578 sampled every lot"],
      ["Shelf life", "3 years from manufacture"],
      ["Documents per lot", "CoA, SDS, protein assay on request"],
    ],
    bestForList: [
      "Dental and surgical assisting",
      "Micro-procedures needing maximal tactile feedback",
      "Fine assembly and inspection benches",
      "Teams with no latex-sensitivity policy in place",
    ],
    watchFor: [
      "Never for latex-allergic staff or patients — screen first",
      "Oils and solvents degrade latex fast; use nitrile for chemical work",
    ],
    priceBreaks: [
      { qty: "1 – 9 cases", perCase: "$69.00", perGlove: "$0.0345" },
      { qty: "10 – 49 cases", perCase: "$63.00", perGlove: "$0.0315" },
      { qty: "50 – 199 cases", perCase: "$57.00", perGlove: "$0.0285" },
      { qty: "200+ cases", perCase: "$52.00", perGlove: "$0.0260" },
    ],
  },
  {
    id: "vinyl",
    name: "Vinyl Clear 30",
    short: "Vinyl",
    material: "PVC with bio-based plasticizer",
    image: "https://image.qwenlm.ai/generated-images/81319f67-5a9d-4add-962e-10f6108a914d/_result.png",
    swatch: "#c9d6d6",
    bestFor: "High-turnover, low-risk stations where cost per change is everything.",
    blurb:
      "A 3.0 mil clear vinyl built for deli counters, front-of-house and light-duty change-after-every-task routines. The lowest cost-per-glove-change in the range.",
    palmMil: "3.0 mil",
    sizes: "S – XL",
    boxCount: 200,
    caseCount: 2000,
    colorName: "Clear",
    powder: "Powder-free",
    aql: "AQL 2.5",
    shelfLife: "3 years",
    standards: ["ASTM D5250", "FDA 21 CFR 177", "EN 455-1/2"],
    priceFrom: "$0.022 / glove",
    specRows: [
      ["Material", "PVC, phthalate-free plasticizer, powder-free"],
      ["Palm thickness", "3.0 mil (76 µm)"],
      ["Cuff", "9.5 in beaded"],
      ["Sizes", "S, M, L, XL"],
      ["Color", "Clear"],
      ["Fit", "Ambidextrous, relaxed fit"],
      ["Box / case", "200 gloves · 10 boxes per case"],
      ["Inspection level", "AQL 2.5, ASTM D5250 sampled every lot"],
      ["Shelf life", "3 years from manufacture"],
      ["Documents per lot", "CoA, food-contact letter of guarantee"],
    ],
    bestForList: [
      "Deli, bakery and front-of-house service",
      "Short-duration food handling with frequent changes",
      "Light cleaning and housekeeping",
      "Salon, spa and cosmetic applications",
    ],
    watchFor: [
      "Not for chemicals, solvents or sharp-edge work",
      "Looser fit than nitrile — size down if between sizes",
    ],
    priceBreaks: [
      { qty: "1 – 9 cases", perCase: "$44.00", perGlove: "$0.0220" },
      { qty: "10 – 49 cases", perCase: "$40.00", perGlove: "$0.0200" },
      { qty: "50 – 199 cases", perCase: "$37.00", perGlove: "$0.0185" },
      { qty: "200+ cases", perCase: "$34.00", perGlove: "$0.0170" },
    ],
  },
];

/* ------------------------------------------------------------------ */

export type Industry = {
  id: string;
  name: string;
  navLabel: string;
  icon: "pulse" | "cloche" | "gear";
  image: string;
  tagline: string;
  heroTitle: string;
  heroCopy: string;
  callouts: string[];
  recommended: { materialId: string; role: string; reason: string }[];
  compliance: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    navLabel: "Healthcare",
    icon: "pulse",
    image: "https://image.qwenlm.ai/generated-images/e8830233-6c0d-4945-9481-f447b5b82a54/_result.png",
    tagline: "ANEMOI FOR HEALTHCARE",
    heroTitle: "Gloves your infection-control team will sign off on.",
    heroCopy:
      "Exam-grade nitrile, latex and vinyl with lot-level certificates of analysis, USP <800> chemo-permeation data and AQL 1.5 inspection on every production run — for hospitals, clinics, dental, vet and laboratory teams.",
    callouts: ["USP <800> chemo data on file", "CoA with every lot", "AQL 1.5 — not 2.5"],
    recommended: [
      {
        materialId: "nitrile",
        role: "Frontline exam & USP <800> tasks",
        reason: "Chemo-permeation tested to ASTM D6978; the safest default across wards.",
      },
      {
        materialId: "latex",
        role: "High-tactility procedures",
        reason: "Where suturing, dental and micro-work need elastic, second-skin fit.",
      },
      {
        materialId: "vinyl",
        role: "Low-risk, high-turnover stations",
        reason: "Reception, transport and environmental-service touchpoints.",
      },
    ],
    compliance: [
      { title: "FDA 510(k) listed", desc: "Every SKU is a listed medical device, not just the factory." },
      { title: "AQL 1.5 sampling", desc: "Tighter than the 2.5 common in food-grade lines. Results on the CoA." },
      { title: "USP <800> / ASTM D6978", desc: "Chemo-permeation breakthrough data available per lot for nitrile." },
      { title: "EN 455-1 through -4", desc: "Freedom from holes, physical properties, biocompatibility, shelf life." },
      { title: "Lot traceability", desc: "Carton code traces back to dipping line, shift and raw-material batch." },
    ],
    faqs: [
      {
        q: "Do you provide a certificate of analysis with each shipment?",
        a: "Yes. Every case ships with a lot-level CoA covering pinhole AQL results, tensile and elongation, and dimensional checks. SDS and 510(k) listings are available as a standing document pack for your formulary file.",
      },
      {
        q: "Can we standardize on one SKU across multiple facilities?",
        a: "That's most of our healthcare volume. We lock pricing for 12 months on program agreements, hold safety stock against your forecast, and release on your schedule so central supply never chases a backorder.",
      },
      {
        q: "What do you offer for chemo and hazardous-drug handling?",
        a: "Nitrile Pro 35 carries ASTM D6978 permeation data for the common USP <800> drug list. For HD compounding we recommend double-gloving and a 60-minute change interval; our team can share the full breakthrough table.",
      },
      {
        q: "How fast can a new account get product in the door?",
        a: "Sample packs ship same week. Approved accounts with product on our Chicago floor typically see first delivery in 3–5 business days, regional carriers permitting.",
      },
    ],
  },
  {
    id: "food-service",
    name: "Food Service",
    navLabel: "Food Service",
    icon: "cloche",
    image: "https://image.qwenlm.ai/generated-images/cddb8276-6b57-428e-ba84-71ea21e99d90/_result.png",
    tagline: "ANEMOI FOR FOOD SERVICE",
    heroTitle: "Gloves that survive the line — and the health inspector.",
    heroCopy:
      "Food-contact compliant nitrile and vinyl for prep kitchens, protein lines, delis and front of house. Powder-free, low-odor, and teal-colored so a torn glove is visible before it becomes a complaint.",
    callouts: ["21 CFR 177 food contact", "Tear-visible teal", "Low-odor, powder-free"],
    recommended: [
      {
        materialId: "nitrile",
        role: "Prep & raw-protein handling",
        reason: "Puncture resistance for boning knives and shellfish; no latex allergen risk.",
      },
      {
        materialId: "vinyl",
        role: "Front of house & deli counter",
        reason: "Lowest cost per glove-change for short-duration serving tasks.",
      },
      {
        materialId: "latex",
        role: "Where latex policy allows",
        reason: "Superior grip and feel for butchery and plating — only in latex-cleared kitchens.",
      },
    ],
    compliance: [
      { title: "FDA 21 CFR 177", desc: "Food-contact letter of guarantee included with every vinyl and nitrile lot." },
      { title: "Powder-free & low-odor", desc: "No corn-starch powder, no rubber smell transferring to product." },
      { title: "High-visibility teal", desc: "A torn nitrile glove reads instantly against food — color is a control." },
      { title: "HACCP documentation", desc: "Spec sheets, CoAs and allergen statements packaged for your binder." },
      { title: "Case-level traceability", desc: "Carton lot codes map to production date for recall-ready records." },
    ],
    faqs: [
      {
        q: "Are your gloves safe for direct contact with ready-to-eat food?",
        a: "Yes. Nitrile Pro 35 and Vinyl Clear 30 both ship with a food-contact letter of guarantee under FDA 21 CFR 177, and all three lines are powder-free so there's no transfer risk from donning aids.",
      },
      {
        q: "We run 14 locations. Can deliveries be split per store?",
        a: "Yes — consolidated billing, split drops. Most multi-unit groups order by the pallet and have us release cases per location on a weekly cadence matched to your par levels.",
      },
      {
        q: "Why teal instead of standard blue?",
        a: "Blue is the industry default, which means it's also the color of half the packaging in a walk-in. Anemoi teal is distinct enough that a fragment on a plate gets spotted — and food-safety auditors notice the intentionality.",
      },
      {
        q: "What glove do you recommend for a raw chicken station?",
        a: "Nitrile Pro 35, changed at least every 30 minutes or on task switch. The 3.5 mil palm holds up to bone edges far better than vinyl, and nitrile carries no latex allergen labeling requirement.",
      },
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    navLabel: "Industrial",
    icon: "gear",
    image: "https://image.qwenlm.ai/generated-images/38a84dc9-940e-408c-a654-5b35d3a4f379/_result.png",
    tagline: "ANEMOI FOR INDUSTRIAL",
    heroTitle: "Hand protection engineered for the maintenance budget.",
    heroCopy:
      "Chemical-splash nitrile, high-grip latex and economy vinyl for manufacturing, aerospace, labs and facilities teams — with permeation data on request and bulk release programs that keep MRO closets stocked.",
    callouts: ["ASTM F739 permeation data", "9.5 in extended cuff", "Bulk release program"],
    recommended: [
      {
        materialId: "nitrile",
        role: "Chemical splash & sanitation",
        reason: "Oils, greases, caustics and solvents — the industrial default for a reason.",
      },
      {
        materialId: "latex",
        role: "Grip-critical assembly",
        reason: "Wet-grip and dexterity for machine tending and component handling.",
      },
      {
        materialId: "vinyl",
        role: "Light duty & inspection",
        reason: "Paint-shop masking, parts inspection and janitorial rotations.",
      },
    ],
    compliance: [
      { title: "ASTM D6319 / D3578", desc: "Physical property testing on every production lot, values on the CoA." },
      { title: "Permeation data on request", desc: "ASTM F739 breakthrough times against common solvent and acid panels." },
      { title: "9.5 in beaded cuff", desc: "Extended wrist coverage for splash and drip exposure." },
      { title: "SDS per SKU", desc: "Current safety data sheets maintained and revision-tracked." },
      { title: "Scheduled release", desc: "Blanket POs with monthly releases against your consumption rate." },
    ],
    faqs: [
      {
        q: "Can you provide chemical permeation data for our specific solvents?",
        a: "Yes. We maintain ASTM F739 breakthrough data for a standard panel — acetone, MEK, toluene, sulfuric 96%, sodium hydroxide 40% and others — and can commission extended-panel testing for program accounts.",
      },
      {
        q: "Do you support blanket purchase orders with scheduled releases?",
        a: "That's our preferred way to work with plants. Commit to annual volume, and we hold inventory against it, release monthly to match consumption, and invoice per release with net-30 terms.",
      },
      {
        q: "What's the difference between your exam nitrile and a heavy-duty industrial nitrile?",
        a: "Nitrile Pro 35 is a 3.5 mil exam-grade glove — right for splash, sanitation and general handling. For continuous immersion or sharp-edge work you'd step up to an 8–15 mil reusable nitrile, which we can source for program accounts.",
      },
      {
        q: "Can gloves be branded or spec'd to our internal standard?",
        a: "Program accounts ordering 500+ cases annually can spec cuff length, color and box labeling under a private-label agreement, with the same AQL inspection applied.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */

export type ArticleSection =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "list"; items: string[] }
  | { t: "quote"; x: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  diagram: "thickness" | "aql" | "chemo" | "sizing";
  sections: ArticleSection[];
};

export const POSTS: Post[] = [
  {
    slug: "latex-vs-nitrile-vs-vinyl",
    title: "Latex vs nitrile vs vinyl: choosing the right glove for your industry",
    category: "Buying guide",
    date: "Jan 12, 2026",
    readTime: "7 min read",
    excerpt:
      "The three-way decision every buyer makes — reduced to one question: which failure can you least afford? Punctures, allergies, or cost-per-change.",
    diagram: "thickness",
    sections: [
      {
        t: "p",
        x: "Every glove material is a trade. Latex trades allergy risk for feel. Nitrile trades a little feel for puncture and chemical resistance. Vinyl trades nearly all durability for the lowest cost per change. None of them is 'best' — they are each best at not failing in a specific way.",
      },
      { t: "h2", x: "Start with the failure you can't afford" },
      {
        t: "p",
        x: "In a clinic, the unforgivable failure is a pinhole during an exam — so inspection level matters more than price, and AQL 1.5 beats AQL 2.5. In a kitchen, it's a fragment on a plate — so color and tear-visibility matter. In a plant, it's solvent breakthrough on skin — so permeation data matters. Write down your failure mode before you compare spec sheets.",
      },
      { t: "h2", x: "Where each material earns its keep" },
      {
        t: "list",
        items: [
          "Latex — unmatched elastic recovery and tactile feedback. The choice for dental, suturing and fine assembly. Requires a latex-sensitivity screening policy.",
          "Nitrile — the generalist. Best puncture resistance of the three, solid chemical resistance, no latex proteins. The default for healthcare, raw-protein kitchens and sanitation.",
          "Vinyl — the economist. Adequate for short-duration, low-risk tasks with frequent changes: deli counters, front of house, light housekeeping.",
        ],
      },
      {
        t: "quote",
        x: "A glove is a control, not a consumable. Price it the way you price any other control: by what it prevents.",
      },
      { t: "h2", x: "The 30-second decision" },
      {
        t: "list",
        items: [
          "Chemicals, sharp edges, or unknowns? Nitrile.",
          "Maximum fingertip feel, latex-cleared environment? Latex.",
          "Frequent changes, minimal mechanical stress? Vinyl.",
          "Unsure? Start with nitrile — it's the wrong answer least often.",
        ],
      },
      {
        t: "p",
        x: "Whichever you choose, insist on the paperwork: a lot-level certificate of analysis with the AQL result printed on it. A glove without test data behind it is just colored rubber.",
      },
    ],
  },
  {
    slug: "aql-1-5-explained",
    title: "What AQL 1.5 actually means — and why it belongs on your spec sheet",
    category: "Quality & testing",
    date: "Dec 03, 2025",
    readTime: "5 min read",
    excerpt:
      "AQL is the single most-misunderstood number in glove procurement. Here's what the sampling math says, what it doesn't say, and how to hold a supplier to it.",
    diagram: "aql",
    sections: [
      {
        t: "p",
        x: "AQL — Acceptable Quality Limit — is a sampling standard, not a promise about every glove. It says: we will inspect a statistical sample of this lot, and if the defect rate in that sample is below the limit, the lot ships. AQL 1.5 means the lot passes with up to 1.5% defects at the sampling boundary.",
      },
      { t: "h2", x: "Why the number matters more than the brochure" },
      {
        t: "p",
        x: "Most food-grade gloves are inspected at AQL 2.5. Medical exam gloves at AQL 1.5. That difference is roughly a third fewer tolerated pinholes per lot — and for a 200-bed hospital burning through 40,000 gloves a month, it's hundreds of fewer defects a year reaching a clinician's hand.",
      },
      {
        t: "list",
        items: [
          "AQL applies per lot, per test — pinholes, dimensions and physical properties each get their own sample.",
          "Lower AQL costs more to manufacture: tighter lines, more rejected batches, slower throughput.",
          "A supplier quoting AQL 1.5 should be able to show you the worksheet, not just the claim.",
        ],
      },
      {
        t: "quote",
        x: "Ask one question: 'Can I see the pinhole worksheet for this lot?' Watch what happens to the conversation.",
      },
      { t: "h2", x: "Hold it in the contract" },
      {
        t: "p",
        x: "Put the inspection level in your purchase spec, not the marketing page: 'Exam glove, nitrile, 3.5 mil, inspected to AQL 1.5 per ASTM D6319, lot-level CoA required with each shipment.' Now it's verifiable, and every quote you receive is comparable line for line.",
      },
    ],
  },
  {
    slug: "usp-800-chemo-gloves",
    title: "USP <800> and chemo-rated gloves: a procurement checklist",
    category: "Healthcare",
    date: "Nov 18, 2025",
    readTime: "6 min read",
    excerpt:
      "'Chemo-rated' isn't a regulated term. ASTM D6978 permeation data is. Here's the checklist pharmacy and procurement teams use to separate real data from label claims.",
    diagram: "chemo",
    sections: [
      {
        t: "p",
        x: "USP <800> requires chemotherapy-tested gloves for hazardous drug handling — and then leaves the testing specifics to ASTM D6978, which measures how long a glove keeps specific drugs from permeating to the skin. The phrase 'chemo-rated' on a box means nothing without the breakthrough table behind it.",
      },
      { t: "h2", x: "The checklist" },
      {
        t: "list",
        items: [
          "Require ASTM D6978 data — not 'tested to' claims. Ask for the drug list and breakthrough times.",
          "Check the drugs on the list match your formulary: carboplatin, cisplatin, cyclophosphamide, doxorubicin, paclitaxel at minimum.",
          "Confirm double-glove policy compatibility — most programs pair two exam-weight nitrile gloves.",
          "Verify change interval guidance: 60 minutes, or immediately on spill, splash or tear.",
          "Get the data per lot, or at least per manufacturing spec — permeation varies with thickness and cure.",
        ],
      },
      {
        t: "quote",
        x: "The breakthrough table is the product. The glove is just the delivery mechanism for the table.",
      },
      { t: "h2", x: "What Nitrile Pro 35 ships with" },
      {
        t: "p",
        x: "Breakthrough times against the common USP <800> panel at 3.5 mil, refreshed when the manufacturing spec changes, referenced on the lot CoA. For HD compounding benches we additionally recommend a heavier over-glove — our team will spec the pairing for your volume.",
      },
    ],
  },
  {
    slug: "kitchen-glove-sizing",
    title: "Sizing gloves for a 200-person kitchen brigade",
    category: "Food Service",
    date: "Oct 07, 2025",
    readTime: "4 min read",
    excerpt:
      "Most glove waste in kitchens isn't torn gloves — it's the wrong sizes getting stretched, split and double-bagged. A sizing run takes one afternoon and pays for itself by February.",
    diagram: "sizing",
    sections: [
      {
        t: "p",
        x: "Walk any high-volume kitchen and watch the glove station: a cook grabs the only size on the shelf, stretches a medium over a large hand, splits it on the third chicken, and takes two more. One bad sizing assumption just tripled your consumption.",
      },
      { t: "h2", x: "The afternoon that fixes it" },
      {
        t: "list",
        items: [
          "Measure palm circumference across every station, once — dominant hand, just below the knuckles.",
          "Map measurements to sizes: under 7 in → S, 7–8 in → M, 8–9 in → L, over 9 in → XL.",
          "Stock the distribution you measured, not an even split. Most brigades skew one size heavier than buyers expect.",
          "Label each station's box. 'M station' beats 'glove shelf' every time.",
        ],
      },
      {
        t: "quote",
        x: "Glove cost per cover is a sizing problem wearing a purchasing costume.",
      },
      {
        t: "p",
        x: "We'll ship a mixed sizing sampler — 50 gloves across five sizes per material — so you can run the measurement pass before committing to a case mix. Most groups cut glove spend 20–30% without changing a single habit.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    quote:
      "Fourteen months into our program agreement and Anemoi hasn't missed a release date. The CoA in every carton means my infection-control team stopped auditing incoming stock — the paperwork audits itself.",
    name: "Marisol Vega",
    role: "Director of Procurement",
    org: "Riverbend Health Network · 340 beds",
    metric: "98.6%",
    metricLabel: "on-time fill rate, 14 months",
  },
  {
    quote:
      "We switched the prep lines to the teal nitrile and the difference was visible in a week — torn gloves actually get noticed now. Our last two health inspections closed with zero glove-handling citations.",
    name: "Dale Whitfield",
    role: "Corporate Executive Chef",
    org: "Harlow & Rye Restaurant Group · 14 locations",
    metric: "−62%",
    metricLabel: "glove failures reported per shift",
  },
  {
    quote:
      "I asked for permeation data on three solvents and had ASTM F739 tables back in two days, mapped to the exact lot we'd receive. That's the whole reason they won the aerospace contract.",
    name: "Priya Natarajan",
    role: "EHS Manager",
    org: "Coreline Aerospace Components",
    metric: "3 for 3",
    metricLabel: "chemical audits passed, 2025",
  },
];

export const CERT_PILLS = [
  { label: "FDA registered facility", short: "FDA Registered" },
  { label: "ISO 9001:2015 certified", short: "ISO 9001" },
  { label: "ASTM D6319 batch tested", short: "ASTM Tested" },
];

export const TICKER_ITEMS = [
  "ASTM D6319",
  "EN 455-1/2/3",
  "ISO 9001:2015",
  "FDA 510(k) LISTED",
  "AQL 1.5 INSPECTION",
  "POWDER-FREE",
  "USP <800> CHEMO DATA",
  "21 CFR 177 FOOD CONTACT",
  "ASTM D6978 PERMEATION",
  "LOT-TRACEABLE",
];

export const WHY_ITEMS = [
  {
    n: "01",
    icon: "flask",
    title: "Every batch, tested twice",
    body: "Production-line sampling plus independent re-test before release. Pinhole, tensile, elongation and dimensional checks — values printed on the CoA, not summarized as 'passed'.",
  },
  {
    n: "02",
    icon: "trace",
    title: "Traceable to the carton",
    body: "Every case carries a lot code that maps to dipping line, shift and raw-material batch. If an auditor asks where your gloves came from, the answer is one scan away.",
  },
  {
    n: "03",
    icon: "factory",
    title: "Direct from audited lines",
    body: "We buy capacity on ISO 9001 factories we audit ourselves, twice a year — no brokered lots, no mystery origin. You get the same production run as our largest program accounts.",
  },
  {
    n: "04",
    icon: "doc",
    title: "Compliance paperwork included",
    body: "CoA, SDS, food-contact guarantees and 510(k) listings ship as a standing document pack. Your binder stays current without chasing a sales rep.",
  },
];

export const HOME_STATS = [
  { value: 18.2, decimals: 1, suffix: "M", label: "gloves shipped in 2025" },
  { value: 0.38, decimals: 2, suffix: "%", label: "lot rejection rate" },
  { value: 98.6, decimals: 1, suffix: "%", label: "on-time fill rate" },
];

export const B2B_TERMS = [
  "Net-30 terms on approved accounts",
  "12-month locked pricing on programs",
  "Scheduled releases against your forecast",
  "Safety stock held on our Chicago floor",
];
