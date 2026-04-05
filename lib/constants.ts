import type {
  NavLink,
  Stat,
  Service,
  ProcessStep,
  Testimonial,
  ContactInfo,
} from "./types";

export const SITE_NAME = "Aristotle Ascent";
export const SITE_DESCRIPTION =
  "Premium education counselling and consulting. Expert guidance for undergraduate, postgraduate, MBA, and study abroad admissions.";
export const SITE_URL = process.env.SITE_URL ?? "https://aristotleascent.com";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const STATS: readonly Stat[] = [
  { value: "500+", label: "Students Counselled" },
  { value: "95%", label: "Admission Success Rate" },
  { value: "200+", label: "Partner Universities" },
  { value: "15+", label: "Years of Experience" },
];

export const SERVICES: readonly Service[] = [
  {
    icon: "GraduationCap",
    title: "Undergraduate Admissions",
    description:
      "Strategic guidance for securing admission to top undergraduate programs worldwide, from profile building to application submission.",
  },
  {
    icon: "BookOpen",
    title: "Postgraduate Programs",
    description:
      "Comprehensive support for Master's and PhD applications, including research proposal development and university shortlisting.",
  },
  {
    icon: "Briefcase",
    title: "MBA Consulting",
    description:
      "Tailored MBA admissions strategy covering school selection, essay refinement, interview preparation, and scholarship applications.",
  },
  {
    icon: "Globe",
    title: "Study Abroad",
    description:
      "End-to-end guidance for international education, including visa assistance, accommodation, and pre-departure orientation.",
  },
  {
    icon: "Target",
    title: "Career Counselling",
    description:
      "Personalised career mapping and aptitude assessment to help students choose the right academic path aligned with their goals.",
  },
  {
    icon: "PenTool",
    title: "Test Preparation",
    description:
      "Expert strategies and resources for standardised tests including SAT, GRE, GMAT, IELTS, and TOEFL.",
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "A detailed one-on-one session to understand your academic background, aspirations, and preferences.",
  },
  {
    step: 2,
    title: "Profile Assessment",
    description:
      "Comprehensive evaluation of your academic profile, extracurriculars, and strengths to identify the best-fit opportunities.",
  },
  {
    step: 3,
    title: "University Shortlisting",
    description:
      "Data-driven selection of universities and programs that align with your profile, goals, and budget.",
  },
  {
    step: 4,
    title: "Application Support",
    description:
      "Hands-on assistance with essays, SOPs, recommendation letters, and application submission.",
  },
  {
    step: 5,
    title: "Interview Prep & Final Guidance",
    description:
      "Mock interviews, visa guidance, and pre-departure support to ensure a smooth transition.",
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Priya Sharma",
    program: "MS Computer Science",
    university: "Stanford University",
    quote:
      "Aristotle Ascent transformed my application journey. Their strategic approach to SOPs and university selection was invaluable. I couldn't have made it to Stanford without their guidance.",
  },
  {
    name: "Arjun Mehta",
    program: "MBA",
    university: "London Business School",
    quote:
      "The personalised attention and deep understanding of the MBA landscape set Aristotle Ascent apart. They helped me craft a compelling narrative that resonated with admissions committees.",
  },
  {
    name: "Ananya Reddy",
    program: "Undergraduate Engineering",
    university: "MIT",
    quote:
      "From profile building in 10th grade to my MIT acceptance, the team was with me every step. Their long-term approach to admissions consulting is truly exceptional.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "contact@aristotleascent.com",
  phone: "+91 98765 43210",
  address: "Mumbai, Maharashtra, India",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/aristotleascent" },
    { platform: "Instagram", url: "https://instagram.com/aristotleascent" },
    { platform: "Twitter", url: "https://x.com/aristotleascent" },
  ],
};

export const PROGRAM_OPTIONS = [
  "Undergraduate Admissions",
  "Postgraduate Programs",
  "MBA Consulting",
  "Study Abroad",
  "Career Counselling",
  "Test Preparation",
] as const;
