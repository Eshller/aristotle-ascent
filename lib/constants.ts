import type {
  NavLink,
  Stat,
  Service,
  ProcessStep,
  Testimonial,
  ContactInfo,
} from "./types";

export const SITE_NAME = "Aristotle Ascent";
export const SITE_TAGLINE = "Education Counselling & Consulting";
export const SITE_DESCRIPTION =
  "We believe every student has the potential to achieve greatness. Holistic, personalized counselling to guide learners through their educational journeys.";
export const SITE_URL = process.env.SITE_URL ?? "https://aristotleascent.com";

/** Nav matches the original site: no Home link; Stories → #testimonials */
export const NAV_LINKS: readonly NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: readonly Stat[] = [
  { value: "500+", label: "Students Guided" },
  { value: "95%", label: "Acceptance Rate" },
  { value: "200+", label: "Partner Institutions" },
  { value: "12+", label: "Years of Excellence" },
];

export const SERVICES: readonly Service[] = [
  {
    icon: "GraduationCap",
    title: "University Admissions Counselling",
    description:
      "Strategic guidance through local and international university applications, personal statements, and interview preparation to help students gain entry to their dream institutions.",
  },
  {
    icon: "Compass",
    title: "Career & Academic Pathway Planning",
    description:
      "Helping students map out their educational journey aligned with their passions, strengths, and long-term career ambitions through in-depth assessments and personalized roadmaps.",
  },
  {
    icon: "Wallet",
    title: "Scholarship & Financial Aid Guidance",
    description:
      "Identifying the best scholarship opportunities and grants, assisting with compelling applications to make quality education accessible and affordable for every student.",
  },
  {
    icon: "Globe",
    title: "Study Abroad Consulting",
    description:
      "End-to-end support for students pursuing international education — from destination selection, visa processes, to cultural preparation and transition planning.",
  },
  {
    icon: "Lightbulb",
    title: "Academic Tutoring & Support",
    description:
      "Personalized academic support and subject-specific tutoring designed to boost performance, build confidence, and develop strong study skills for lifelong learning.",
  },
  {
    icon: "Handshake",
    title: "Parent & Family Consulting",
    description:
      "Empowering parents with the knowledge and tools to support their children's academic success, bridging the communication gap between family aspirations and student needs.",
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    stepLabel: "I",
    title: "Discovery Session",
    description:
      "A deep-dive consultation to understand your background, goals, strengths, and dreams — the foundation of everything we build together.",
  },
  {
    stepLabel: "II",
    title: "Personalised Roadmap",
    description:
      "We craft a tailored academic and career strategy that aligns with your unique profile and maximises your opportunities.",
  },
  {
    stepLabel: "III",
    title: "Active Guidance",
    description:
      "Hands-on support through applications, essays, interviews and decisions — you're never navigating this alone.",
  },
  {
    stepLabel: "IV",
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at acceptance. We continue supporting your transition and growth well into your academic journey.",
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Sarah K.",
    credential: "Accepted to University of Edinburgh, UK",
    quote:
      "Aristotle Ascent changed the trajectory of my life. My counsellor helped me discover a passion I never knew I had and guided me to a university that felt perfectly right. I couldn't be happier.",
  },
  {
    name: "James O.",
    credential: "Full Scholarship, University of Toronto",
    quote:
      "The scholarship guidance I received was extraordinary. They found opportunities I had no idea existed and helped me craft an application that earned me a full scholarship. Truly life-changing.",
  },
  {
    name: "Mrs. Adebayo",
    credential: "Parent of Student, Netherlands",
    quote:
      "As a parent, I was lost in the maze of university applications. The team guided our entire family with such patience and expertise. My daughter is now thriving abroad — we are beyond grateful.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "info@aristotleascent.edu",
  phone: "+1 (800) 000-0000",
  address: "123 Scholar Avenue, Education City",
  hours: "Mon–Sat: 8:00 AM – 7:00 PM",
  socials: [
    { platform: "Instagram", url: "#" },
    { platform: "LinkedIn", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "YouTube", url: "#" },
  ],
};

/** Form / schema: must match service titles exactly */
export const PROGRAM_OPTIONS = [
  "University Admissions Counselling",
  "Career & Academic Pathway Planning",
  "Scholarship & Financial Aid Guidance",
  "Study Abroad Consulting",
  "Academic Tutoring & Support",
  "Parent & Family Consulting",
] as const;

/** Footer services column (short labels from the original site) */
export const FOOTER_SERVICE_LINKS: readonly { label: string; href: string }[] = [
  { label: "University Admissions", href: "#services" },
  { label: "Career Planning", href: "#services" },
  { label: "Scholarships", href: "#services" },
  { label: "Study Abroad", href: "#services" },
  { label: "Tutoring", href: "#services" },
];

export const FOOTER_COMPANY_LINKS: readonly NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
