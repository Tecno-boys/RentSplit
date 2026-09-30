function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const STATS = [
  {
    icon: "account_balance_wallet",
    iconColor: "var(--primary-container)",
    label: "Personal Net Balance",
    value: "+$114.50",
    valueClass: "rd-currency-display",
    valueColor: "var(--primary-container)",
    sub: "Owed to you by flatmates",
    footer: "cta",
  },
  {
    icon: "donut_large",
    iconColor: "var(--secondary)",
    label: "October Flat Spend",
    value: "$4,820.00",
    valueClass: "rd-currency-display",
    valueColor: "var(--primary)",
    footer: "progress",
    progressPct: 92.6,
    footerLeft: "Paced at 92.6%",
    footerRight: "Target $5,200",
  },
  {
    icon: "real_estate_agent",
    iconColor: "var(--secondary-fixed)",
    label: "Upcoming Rent & Bills",
    value: "Nov 1st",
    valueClass: "rd-headline-md",
    valueColor: "var(--primary)",
    subCurrency: "$3,400.00 Lease Total",
    subCurrencyColor: "var(--secondary-fixed)",
    footer: "text-icon",
    footerLeft: "Automatic ACH via Vault",
    footerIcon: "verified_user",
    footerIconColor: "var(--secondary)",
  },
  {
    icon: "hub",
    iconColor: "var(--primary-container)",
    label: "Debt Engine Status",
    value: "2 Swaps Needed",
    valueClass: "rd-headline-md",
    valueColor: "var(--primary)",
    sub: "Resolves 12 micro-debts instantly",
    footer: "tags",
    tagLeft: "Max Efficiency",
    tagRight: "Graph v2",
  },
];

const LEDGER_ENTRIES = [
  {
    icon: "shopping_cart",
    iconColor: "var(--primary-container)",
    name: "Trader Joe's Groceries",
    meta: "Paid by Marcus • Split 4 ways",
    amount: "$96.40",
    status: "Settling",
    statusClass: "rd-status-settling",
  },
  {
    icon: "bolt",
    iconColor: "var(--secondary)",
    name: "ConEd Power",
    meta: "Paid by Samira • Split 4 ways",
    amount: "$142.00",
    status: "Settled",
    statusClass: "rd-status-settled",
  },
  {
    icon: "wifi",
    iconColor: "var(--secondary-fixed)",
    name: "Spectrum Wi-Fi",
    meta: "Auto-paid Vault • Split 4 ways",
    amount: "$89.99",
    status: "Settled",
    statusClass: "rd-status-settled",
  },
  {
    icon: "local_cafe",
    iconColor: "var(--primary-container)",
    name: "Whole Foods Household",
    meta: "Paid by Leo • Marcus & Leo split",
    amount: "$64.20",
    status: "Pending",
    statusClass: "rd-status-pending",
  },
];

const FEED_ITEMS = [
  {
    icon: "document_scanner",
    tone: "tone-primary",
    title: "Marcus uploaded a receipt",
    time: "14m ago",
    desc: "AI OCR parsed 7 line items from Trader Joe's receipt with 99.4% confidence.",
  },
  {
    icon: "check_circle",
    tone: "tone-secondary-fixed",
    title: "ConEd Power bill settled",
    time: "2h ago",
    desc: "Samira marked payment verified for all 4 loft residents ($35.50 each).",
  },
  {
    icon: "autorenew",
    tone: "tone-secondary",
    title: "Spectrum Wi-Fi auto-debited",
    time: "Yesterday",
    desc: "$89.99 successfully drawn from reserve vault without manual intervention.",
  },
];

const SETTLEMENTS = [
  {
    name: "Samira Khan",
    room: "Bedroom 2",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaj6f0cMsQCeoWfjmkPWKWEuWIcZ904mQIecq5Yqi_bhgX2sg5iNcp3Rs5R-BzT-Y3Ep55H-NpDpaJOva4TkQNSDYr_iXTlgO9T3NqKLbdoeISJX6-wLX5nQpUD_XjUu7FijYzHhHe72b1ysX1hlT4EfUNPk4gP3D4fCtAiq6PVFkvAIiF-CLufU3G2iRAKp7h5YlzdSMTNfT7F_loKBPtKll9G8Nn4kavT5gRgv3xordLBQ9-PXDsUQ",
    alt: "Close-up environmental headshot of Samira Khan smiling softly inside modern apartment living room",
    amount: "$78.50",
    status: "owed",
  },
  {
    name: "Leo Chen",
    room: "Bedroom 3",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxjUrjz_TYk8JdAQ_J8emf-8p80x9F9aIkkbTdMKW9cJYfRMWByFcf9dcTameVOQGc8YotBJc4Es7E7QBvhUbAIoq1TNMdLRtOnedmxyG8GsWUta_uGz9sTiNtWi4pLox0gxLrC07JvbLVbFztHRJgju7mJeAual2cqRhx8eM9n7vHyFcX-r_1eiVh-wXvLj5DGzmKqyn0QuJUsQrUZQiM0RdMcFVhxeNU8YJelgXYIaP3pmme6A3d0A",
    alt: "Portrait photo of Leo Chen wearing minimal black top in loft setting with plants",
    amount: "$36.00",
    status: "owed",
  },
  {
    name: "Chloe Dupont",
    room: "Master Suite",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6uXMbbAB8gaDUg1KQlEMhapfZwV6gjcOfYObEitpFgA_LgRVArbFq3_3AwkZnIZ9mNBJ0MyzT0jnDsmxL1f-DiN51qn9U1u7Az9oIvDf_1e7PSitsuMGeCrcgKmERNrUjvEfswsrcd83izoxQyk9TzkxGDvIHpNDot26whnhEn_eFXbgkFDE4cSGchDQ0BsShGMBiSQaSqBMirkkY2SlbsRpia8yODj-9J01XC2QuXKQQ8vdewXyww",
    alt: "Portrait photo of Chloe Dupont in high contrast low light interior setting",
    amount: "$0.00",
    status: "settled",
  },
];

const SUPPLIES = [
  {
    icon: "clean_hands",
    tone: "neutral",
    name: "Paper towels",
    status: "Adequate",
    statusClass: "adequate",
  },
  {
    icon: "soap",
    tone: "warn",
    name: "Dishwasher Pods",
    sub: "3 left • Samira's turn",
    status: "Low",
    statusClass: "low",
  },
  {
    icon: "water_drop",
    tone: "neutral",
    name: "Olive oil",
    status: "Full",
    statusClass: "full",
  },
];

export {STATS, LEDGER_ENTRIES, FEED_ITEMS, SETTLEMENTS, SUPPLIES, Icon}