export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  tagline: string;
  heading: string;
  description: string;
  services: string[];
  technologies: string[];
  tools: string[];
  color: string;
  ctaText: string;
  deliverables: string[];
  businessValue: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    id: "web-development",
    title: "WEB DEVELOPMENT",
    tagline: "Build the digital home.",
    heading: "BUILD THE DIGITAL HOME.",
    description:
      "I create modern, responsive websites and web applications designed around real business goals and user experience.",
    services: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce",
      "Web applications",
      "Dashboards",
      "Custom systems",
      "API integrations",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "Databases",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Git", "VS Code"],
    color: "#2563EB",
    ctaText: "Explore Web Development →",
    businessValue:
      "Your website is the single most critical asset in your conversion ecosystem. I build fast, clean, high-converting platforms that reflect your authority and drive qualified client inquiries.",
    deliverables: [
      "High-speed, production-grade Next.js codebase",
      "Mobile-first responsive architecture (320px to 4K)",
      "Technical SEO & Core Web Vitals optimization",
      "Secure forms, CMS integration & custom logic",
    ],
  },
  {
    number: "02",
    id: "video-editing",
    title: "VIDEO EDITING",
    tagline: "Capture attention.",
    heading: "CAPTURE ATTENTION.",
    description:
      "I turn raw footage into professional short-form and promotional content designed for modern digital platforms.",
    services: [
      "Reels",
      "TikTok videos",
      "Promotional videos",
      "Product advertisements",
      "Brand videos",
      "Cinematic edits",
      "Color grading",
      "Motion graphics",
      "Social content",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "CapCut Pro",
      "DaVinci Resolve",
      "Motion Graphics",
      "Sound Design",
    ],
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    color: "#F97316",
    ctaText: "Explore Video Editing →",
    businessValue:
      "Modern algorithms reward retention and watch time. I transform raw clips into punchy, hypnotic visual stories that capture attention in the first 2 seconds and convert viewers into loyal followers and clients.",
    deliverables: [
      "High-retention 9:16 vertical reels & TikTok assets",
      "Cinematic horizontal brand commercials & showcases",
      "Dynamic sound design, audio leveling & SFX",
      "Custom kinetic typography and animated hooks",
    ],
  },
  {
    number: "03",
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    tagline: "Create recognition.",
    heading: "CREATE RECOGNITION.",
    description:
      "I design visual identities and digital assets that help businesses communicate clearly and look professional.",
    services: [
      "Logo design",
      "Brand identity",
      "Social media graphics",
      "Posters",
      "Business cards",
      "Digital advertising",
      "Marketing graphics",
      "Visual systems",
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Vector Systems",
      "Typography Systems",
      "Color Science",
    ],
    tools: ["Photoshop", "Illustrator", "Figma"],
    color: "#3B82F6",
    ctaText: "Explore Graphic Design →",
    businessValue:
      "First impressions dictate perceived pricing power. I craft unmistakable visual identities and cohesive brand assets that instill immediate customer trust and distinguish your business from commoditized competitors.",
    deliverables: [
      "Scalable vector logo suite & trademark marks",
      "Complete Brand Guidelines (Typography, Color, Rules)",
      "Digital marketing asset kits & social templates",
      "Print-ready stationary, brochures & packaging files",
    ],
  },
];
