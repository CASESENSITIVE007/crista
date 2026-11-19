// All images live in /public/images, and every link points to a section on this page.
// Nothing on this demo site sends visitors to an external website.
export const IMG = "/images";

export const LOGO = `${IMG}/infoglen-logo-dark.png`;
export const LOGO_WHITE = `${IMG}/white-logo.png`;

// On-page section anchors
export const SECTIONS = {
  home: "#home",
  ai: "#ai-success",
  services: "#services",
  partner: "#partner",
  work: "#testimonials",
  csr: "#csr",
  contact: "#contact",
} as const;

export type NavLink = { label: string; href: string };
export type NavItem = {
  label: string;
  href?: string;
  links?: NavLink[];
  feature?: { title: string; text: string; image: string; cta: string; href: string };
};

export const services: NavLink[] = [
  "Sales Cloud",
  "Service Cloud",
  "Marketing Cloud",
  "Revenue Cloud",
  "Experience Cloud",
  "Nonprofit Cloud",
  "CPQ to RCA Migration",
  "Salesforce AI",
  "Agentforce",
  "Predictive AI",
].map((label) => ({ label, href: SECTIONS.services }));

export const solutions: NavLink[] = [
  "Attrition Risk",
  "Sentiment Analysis",
  "Schedulynk",
  "Agentforce Lead Nurturing",
].map((label) => ({ label, href: SECTIONS.services }));

export const navItems: NavItem[] = [
  {
    label: "Services",
    links: services,
    feature: {
      title: "Financial Services",
      text: "Salesforce & AI solutions built for financial services organizations to help improve experiences and accelerate growth.",
      image: `${IMG}/financial-service-nav-1.png`,
      cta: "Explore Financial Services",
      href: SECTIONS.services,
    },
  },
  {
    label: "Solutions",
    links: solutions,
    feature: {
      title: "Schedulynk",
      text: "One calendar view of your whole operation: scheduling, dispatching and workforce coordination inside Salesforce.",
      image: `${IMG}/schedulynk.jpg`,
      cta: "Go to Schedulynk",
      href: SECTIONS.services,
    },
  },
  {
    label: "Artificial intelligence (AI)",
    links: [
      "Agentforce",
      "Attrition Risk",
      "Agentforce Lead Nurturing",
      "Sentiment Analysis",
      "Free AI Readiness Assessment",
    ].map((label) => ({ label, href: SECTIONS.ai })),
  },
  { label: "Our Work", href: SECTIONS.work },
  {
    label: "About",
    links: [
      { label: "Why Infoglen", href: SECTIONS.partner },
      { label: "Client Stories", href: SECTIONS.work },
      { label: "GreenGlen", href: SECTIONS.csr },
      { label: "Infoglen Giving", href: SECTIONS.csr },
      { label: "Contact", href: SECTIONS.contact },
    ],
  },
  { label: "Contact", href: SECTIONS.contact },
];

const BG = [`${IMG}/banner-1.png`, `${IMG}/bg1-1.webp`, `${IMG}/bg2.webp`, `${IMG}/banner-3.png`];

export const slides = [
  {
    title: "Build Your Salesforce AI Roadmap in 1 hour.",
    sub: "Get a clear, custom AI roadmap based on your actual data. Completely free, zero pressure.",
    cta: "Claim Your Free AI Session",
    href: SECTIONS.contact,
    bg: BG[0],
  },
  {
    title: "Meet Glen: An AI SDR That Never Sleeps.",
    sub: "Always-on agent. Scale pipeline without scaling headcount.",
    cta: "Put Glen to Work",
    href: SECTIONS.ai,
    bg: BG[1],
  },
  {
    title: "AI That Protects Your Recurring Revenue.",
    sub: "24/7 account monitoring that detects churn signals.",
    cta: "Stop Churn Now",
    href: SECTIONS.services,
    bg: BG[2],
  },
  {
    title: "AI That Predicts What's Coming Next.",
    sub: "2X predictive accuracy with our AI Prediction Model, because efficiency isn't luck, it's science.",
    cta: "See it in Action",
    href: SECTIONS.services,
    bg: BG[3],
  },
  {
    title: "AI That Works Like a Teammate.",
    sub: "Build intelligent agents to automate conversations and workflows.",
    cta: "Explore Agentforce Solutions",
    href: SECTIONS.ai,
    bg: BG[0],
  },
  {
    title: "The Missing Signal in Your CRM is Customer Sentiment.",
    sub: "Your accounts are talking. Now you can hear them.",
    cta: "Explore Sentiment Analysis",
    href: SECTIONS.services,
    bg: BG[1],
  },
  {
    title: "Every Appointment. Every Technician. One View.",
    sub: "Schedulynk brings scheduling, dispatching and workforce coordination together inside Salesforce.",
    cta: "See It in Action",
    href: SECTIONS.services,
    bg: BG[2],
  },
];

export const aiCards = [
  {
    title: "Our AI Consulting Services Unleash Your Salesforce's Full AI Potential",
    image: `${IMG}/124727-1.png`,
    href: SECTIONS.services,
  },
  {
    title: "Our Top Pre-Built Agents Boost Productivity Instantly with Ready-to-Deploy AI Agents",
    image: `${IMG}/124727-1-1.png`,
    href: SECTIONS.services,
  },
  {
    title: "Keep your pipeline moving 24/7 with Glen, your AI SDR",
    image: `${IMG}/124727-1-2.png`,
    href: SECTIONS.contact,
  },
];

export const clientLogos = [
  "Google_2015_logo.svg",
  "file.svg",
  "blastx.svg",
  "awna.svg",
  "ecolab.svg",
  "rapid7.svg",
  "procore.svg",
  "verifone.svg",
  "file-1.svg",
].map((f) => `${IMG}/${f}`);

export const serviceCards = [
  { label: "Sales Cloud Implementation", icon: `${IMG}/sales-cloud-icon.png` },
  { label: "Service Cloud Implementation", icon: `${IMG}/service-cloud.png` },
  { label: "Marketing Cloud Implementation", icon: `${IMG}/marketing-cloud-icon.png` },
  { label: "Revenue Cloud Implementation", icon: `${IMG}/revenue-clou-dicon.png` },
  { label: "Experience Cloud Implementation", icon: `${IMG}/experience-cloud-icon.png` },
].map((c) => ({ ...c, href: SECTIONS.contact }));

export const solutionCards = [
  { label: "Account Health App", icon: `${IMG}/account-health-app-icon.png` },
  { label: "Sentiment Analysis", icon: `${IMG}/sentiment-score-analysis-icon.png` },
  { label: "Agentforce Lead Nurturing", icon: `${IMG}/bdr-agentforce-icon.png` },
  { label: "Schedulynk", icon: `${IMG}/field-service-scheduler-icon.png` },
  { label: "Predictive AI", icon: `${IMG}/opportunit-nba-icon.png` },
].map((c) => ({ ...c, href: SECTIONS.contact }));

export const testimonials = [
  {
    industry: "Engineering, Construction, & Real Estate",
    length: "6 Months",
    quote:
      "Choosing the right Salesforce implementation partner can make or break a company, and we are so thankful to have found Infoglen. Working with them has been a refreshing experience, their deep knowledge, kindness, attention to detail, and fair pricing have been incredible.",
    image: `${IMG}/architect-man-showing-something-project-his-colleague-foreman.webp`,
  },
  {
    industry: "Nonprofit",
    length: "2 Months",
    quote:
      "It's been a great experience working with Infoglen. They're a team committed to provide solutions that are truly useful for our company. Once the work is completed, they follow up to identify further areas for improvement and thus provide the best solution. Personally, they're 100% recommended.",
    image: `${IMG}/close-up-people-volunteer-teamwork-putting-finger-star-shapehands-togetherstack-handsunity-teamwork-world-environment-day.webp`,
  },
  {
    industry: "Engineering, Construction, & Real Estate",
    length: "2 Months",
    quote:
      "When we set out to develop a web-to-lead form, we knew how important it was to get it right. After a previous attempt didn't quite work out, we turned to Infoglen, and from the start, they delivered exactly what we needed. They took the time to understand our goals, mapped out a clear plan, and stayed on track every step of the way.",
    image: `${IMG}/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept-1.webp`,
  },
  {
    industry: "Hi-Tech",
    length: "4 Months",
    quote:
      "I've found the Infoglen teammates supporting me to be very engaged and collaborative. I truly enjoy working and solving problems together.",
    image: `${IMG}/looking-three-dimentional-hologram.webp`,
  },
  {
    industry: "Hi-Tech",
    length: "9 Months",
    quote:
      "The team is dedicated to our success and is amazing! They've worked hard to accommodate our needs and consistently look for creative solutions to address our use cases. They're clear about which options are \"out of the box\" versus \"custom\" and always provide us with the pros and cons of each choice.",
    image: `${IMG}/representation-user-experience-interface-design.webp`,
  },
  {
    industry: "Communications",
    length: "12 Months",
    quote:
      "Infoglen has been instrumental in supporting Google Fiber Webpass with our Field Service needs. With the team's help we were able to completely manage our Field technician calendar. The Infoglen folks are highly knowledgeable on all aspects of FSL and are experts in suggesting the way forward and help us achieve our solution architecture.",
    image: `${IMG}/happy-corporate-manager-shaking-hands-with-black-worker-after-staff-meeting-factory.webp`,
  },
];
