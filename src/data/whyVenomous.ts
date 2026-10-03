export interface Principle {
  number: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
}

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Business Focus",
    tagline: "Outcomes over vanity metrics.",
    description:
      "Every project starts with the business goal. Code and design exist to drive client inquiries, user retention, and revenue — not just to look pretty in a vacuum.",
    accent: "#2563EB",
  },
  {
    number: "02",
    title: "Custom Work",
    tagline: "Zero generic cookie-cutter templates.",
    description:
      "Create bespoke solutions tailored to your unique market positioning rather than simply copying generic themes or SaaS tropes.",
    accent: "#F97316",
  },
  {
    number: "03",
    title: "Creative + Technical",
    tagline: "The rare bridge between engineering and art.",
    description:
      "Combine visual creativity, cinematic storytelling, and robust software engineering under a single unified standard.",
    accent: "#3B82F6",
  },
  {
    number: "04",
    title: "Detail Driven",
    tagline: "Obsession with microscopic craft.",
    description:
      "Spacing, typography, micro-interactions, responsive image compression, sound syncing, and Core Web Vitals all matter fundamentally.",
    accent: "#FB923C",
  },
  {
    number: "05",
    title: "Modern",
    tagline: "Current tech stacks and contemporary aesthetics.",
    description:
      "Built with Next.js, React 19, TypeScript, modern CSS, and industry-standard creative suites (Premiere, After Effects, Figma).",
    accent: "#2563EB",
  },
  {
    number: "06",
    title: "Scalable",
    tagline: "Engineered for longevity and expansion.",
    description:
      "Build with modular architecture and clean code so your digital ecosystem can scale as your business grows without rewrites.",
    accent: "#F97316",
  },
];
