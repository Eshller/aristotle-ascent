import type {
  NavLink,
  Stat,
  Service,
  ProcessStep,
  Testimonial,
  ContactInfo,
} from "./types";

export const SITE_NAME = "Aristotle Ascent";
export const SITE_TAGLINE = "Higher-education guidance studio";
export const SITE_DESCRIPTION =
  "Independent counselling for ambitious students and families—clear strategy for applications, funding, and global study, with human support at every step.";
export const SITE_URL = process.env.SITE_URL ?? "https://aristotleascent.com";

export const SECTION = {
  home: "/#home",
  about: "/#about",
  services: "/#services",
  process: "/#process",
  testimonials: "/#testimonials",
  contact: "/#contact",
} as const;

export const BLOG_PATH = "/blog" as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Studio", href: SECTION.about },
  { label: "Services", href: SECTION.services },
  { label: "Method", href: SECTION.process },
  { label: "Outcomes", href: SECTION.testimonials },
  { label: "Insights", href: BLOG_PATH },
  { label: "Contact", href: SECTION.contact },
];

export const STATS: readonly Stat[] = [
  { value: "500+", label: "Learners supported" },
  { value: "95%", label: "Strong-fit outcomes" },
  { value: "200+", label: "Institution network" },
  { value: "12+", label: "Years in practice" },
];

export const SERVICES: readonly Service[] = [
  {
    icon: "GraduationCap",
    title: "Admissions & application strategy",
    description:
      "Comprehensive support across domestic and international applications—from positioning and essays to interview preparation and disciplined timelines—so your process stays clear, focused, and free of last-minute stress.",
  },
  {
    icon: "Compass",
    title: "Career and pathway design",
    description:
      " Clarify your direction before you commit. We map your strengths, identify best-fit courses and majors, and design a considered roadmap that aligns your university choices with long-term career outcomes. ",
  },
  {
    icon: "Wallet",
    title: "Scholarships & financial aid",
    description:
      "Identify realistic funding paths, prepare competitive scholarship materials, and understand cost trade-offs so decisions stay transparent.",
  },
  {
    icon: "Globe",
    title: "International study planning",
    description:
      "Country shortlists, visa and documentation checkpoints, and practical preparation so moving abroad feels manageable, not overwhelming.",
  },
  {
    icon: "Lightbulb",
    title: "Academic coaching & skills",
    description:
      "At Aristotle we provide targeted tutoring and structured study systems that build confidence with academic consistency, whether for improving grades or preparing for standardised tests through focused practice reviews and continuous support.  Curated extracurricular guidance designed to shape depth, leadership, and sustained impact beyond academic performance.",
  },
  {
    icon: "Handshake",
    title: "Family guidance sessions",
    description:
      "Structured conversations for parents and guardians: expectations, communication, and how to support the student without adding pressure.",
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    stepLabel: "I",
    title: "Listen & clarify",
    description:
      "We start with your story—academic record, constraints, ambitions, and timeline—so advice is grounded in reality, not generic templates.",
  },
  {
    stepLabel: "II",
    title: "Design the plan",
    description:
      "You receive a prioritised action plan: targets, milestones, and materials to prepare, aligned with your strengths and risk tolerance.",
  },
  {
    stepLabel: "III",
    title: "Execute together",
    description:
      "Hands-on editing, mock interviews, and decision support as deadlines approach—you are never guessing what to do next.",
  },
  {
    stepLabel: "IV",
    title: "Stay supported",
    description:
      "After offers arrive, we help you compare options and prepare for transition—then remain a sounding board as you settle in.",
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Elena V.",
    credential: "Graduate programme, Netherlands",
    quote:
      "They replaced noise with a clear sequence of steps. I always knew what to work on next, and the applications finally felt under control.",
  },
  {
    name: "Marcus T.",
    credential: "Merit award + placement, North America",
    quote:
      "I almost skipped scholarship rounds—I did not think my profile was competitive. Their framing helped me present my work in a way that actually landed funding.",
  },
  {
    name: "The Okonkwo family",
    credential: "First-gen international study",
    quote:
      "We needed someone who could speak to both our daughter and to us as parents. The sessions were calm, specific, and respectful of our budget.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "aristotleascent.info@gmail.com",
  phone: "+971-524716969",
  address: "123 Scholar Avenue, Education City",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM",
  socials: [
    // { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
    // { platform: "Facebook", url: "#" },
    { platform: "YouTube", url: "#" },
  ],
};

/** Form / schema — must match service titles exactly */
export const PROGRAM_OPTIONS = [
  "Admissions & application strategy",
  "Career and pathway design",
  "Scholarships & financial aid",
  "International study planning",
  "Academic coaching & skills",
  "Family guidance sessions",
] as const;

export const FOOTER_SERVICE_LINKS: readonly { label: string; href: string }[] = [
  { label: "Admissions", href: SECTION.services },
  { label: "Pathways", href: SECTION.services },
  { label: "Funding", href: SECTION.services },
  { label: "Study abroad", href: SECTION.services },
  { label: "Coaching", href: SECTION.services },
];

export const FOOTER_COMPANY_LINKS: readonly NavLink[] = [
  { label: "Studio", href: SECTION.about },
  { label: "Method", href: SECTION.process },
  { label: "Outcomes", href: SECTION.testimonials },
  { label: "Insights", href: BLOG_PATH },
  { label: "Contact", href: SECTION.contact },
];

/** Hero marketing lines (kept in constants for a single source of truth) */
export const HERO = {
  eyebrow: "Independent education studio",
  titleBefore: "Clarity for your",
  titleAccent: "next chapter",
  titleAfter: "in higher education",
  p1: " In today's world with a complex and uncertain landscape, Aristotle Ascent offers disciplined thinking, clear direction, and decisions grounded in evidence.Strategy-led counselling for students and families navigating competitive admissions, global options, and high-stakes decisions—without the one-size-fits-all playbook.",
  p2: "We go beyond admissions—shaping your trajectory through present insight and future-focused guidance, so you are prepared for what lies ahead. ",
  primaryCta: "Plan a conversation",
  secondaryCta: "View services",
} as const;

export const ABOUT = {
  label: "The studio",
  headlineBefore: "Thoughtful guidance,",
  headlineAccent: "built around you",
  p1: "Aristotle Ascent takes its name from a tradition of rigorous inquiry—but our work is firmly practical. We guide students and families through complex higher education decisions, helping you evaluate options, manage risk, and move forward with clarity and evidence.",
  p2: "Every engagement balances structure with flexibility: clear milestones, candid feedback, and dedicated support to shape thoughtful, authentic applications that reflect you—not a template.",
  quote:
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  quoteAttr: "Aristotle",
} as const;

/** Exclusivity / cohort cap — used to set expectations site-wide */
export const EXCLUSIVITY = {
  badge: "Limited intake · 10–15 students per year",
  headline: "An intentionally small studio",
  body:
    "To protect the quality of our work, Aristotle Ascent partners with only 10 to 15 students each year. This keeps every engagement personal, deeply researched, and guided by senior attention from start to offer.",
  cta: "Request a place in this year's cohort",
} as const;
