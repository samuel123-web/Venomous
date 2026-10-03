export interface ProcessStep {
  step: string;
  title: string;
  eyebrow: string;
  description: string;
  deliverables: string[];
  duration: string;
  focus: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    eyebrow: "PHASE 01",
    title: "DISCOVER",
    description:
      "Understand the business, audience, goals, and technical requirements before writing a line of code or cutting a frame of footage.",
    deliverables: [
      "In-depth discovery questionnaire & target market breakdown",
      "Competitor audit & unique value proposition positioning",
      "Technical architecture and asset requirement roadmap",
    ],
    duration: "Week 1",
    focus: "Strategic Alignment & Scope",
  },
  {
    step: "02",
    eyebrow: "PHASE 02",
    title: "STRATEGIZE",
    description:
      "Define creative, technical, and content direction. We establish wireframes, visual moodboards, audio direction, and conversion pathways.",
    deliverables: [
      "Interactive low-fidelity wireframes and UX flows",
      "Typography, color palette & design system foundations",
      "Video hook scripts & visual narrative storyboards",
    ],
    duration: "Week 1-2",
    focus: "Architecture & Blueprints",
  },
  {
    step: "03",
    eyebrow: "PHASE 03",
    title: "CREATE",
    description:
      "Design, develop, edit, and build. High-fidelity UI design in Figma, clean TypeScript/Next.js engineering, and precision video production.",
    deliverables: [
      "Production Next.js application codebase with Tailwind CSS",
      "High-resolution vector assets & brand components",
      "Edited video sequences with color grading & sound mix",
    ],
    duration: "Weeks 2-4",
    focus: "Execution & Craftsmanship",
  },
  {
    step: "04",
    eyebrow: "PHASE 04",
    title: "REFINE",
    description:
      "Test, optimize, and polish. Cross-browser stress testing, mobile responsiveness checks, Core Web Vitals optimization, and micro-interaction tuning.",
    deliverables: [
      "Lighthouse 95+ performance optimization audits",
      "Cross-device mobile testing (320px to 4K)",
      "Motion smoothing, accessibility verification & feedback reviews",
    ],
    duration: "Week 4-5",
    focus: "Quality Assurance & Speed",
  },
  {
    step: "05",
    eyebrow: "PHASE 05",
    title: "LAUNCH",
    description:
      "Deliver the finished project, deploy to high-availability edge networks, configure domain/DNS, and hand over clean documentation.",
    deliverables: [
      "Live production deployment on Vercel/Cloudflare",
      "Domain DNS setup, SSL certificates & Google Search Console indexing",
      "Asset library handoff and video export master files",
    ],
    duration: "Launch Day",
    focus: "Deployment & Growth",
  },
];
