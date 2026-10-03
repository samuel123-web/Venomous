export interface ToolCategory {
  category: string;
  badge: string;
  description: string;
  tools: {
    name: string;
    role: string;
    proficiency: string;
    level: number;
    color: string;
    highlight: string;
  }[];
}

export const TOOLKIT_DATA: ToolCategory[] = [
  {
    category: "Development",
    badge: "ENGINEERING",
    description: "Production-grade frontend, responsive architectures, and fullstack solutions.",
    tools: [
      { name: "React", role: "UI Framework", proficiency: "Expert", level: 96, color: "#61DAFB", highlight: "Component Architecture & Hooks" },
      { name: "Next.js", role: "Fullstack Framework", proficiency: "Expert", level: 95, color: "#FFFFFF", highlight: "App Router & Server Actions" },
      { name: "TypeScript", role: "Type-Safe Language", proficiency: "Advanced", level: 92, color: "#3178C6", highlight: "Strict Typing & Data Contracts" },
      { name: "JavaScript (ES6+)", role: "Core Language", proficiency: "Expert", level: 96, color: "#F7DF1E", highlight: "Modern Asynchronous Patterns" },
      { name: "Node.js", role: "Backend Runtime", proficiency: "Advanced", level: 88, color: "#5FA04E", highlight: "APIs & Server Integrations" },
      { name: "Git", role: "Version Control", proficiency: "Advanced", level: 90, color: "#F05032", highlight: "Branching & Collaboration" },
      { name: "GitHub", role: "Code Repository & CI/CD", proficiency: "Advanced", level: 92, color: "#A1A1AA", highlight: "Workflows & Automation" },
    ],
  },
  {
    category: "Design",
    badge: "CREATIVE & UI/UX",
    description: "Vector identity design, typography, layout systems, and high-fidelity prototypes.",
    tools: [
      { name: "Figma", role: "UI/UX & Systems", proficiency: "Expert", level: 95, color: "#F24E1E", highlight: "Component Design & Auto Layout" },
      { name: "Adobe Photoshop", role: "Raster & Image Retouch", proficiency: "Expert", level: 94, color: "#31A8FF", highlight: "Compositing, Mockups & Textures" },
      { name: "Adobe Illustrator", role: "Vector Precision", proficiency: "Expert", level: 95, color: "#FF9A00", highlight: "Logos, Monograms & Vector Art" },
    ],
  },
  {
    category: "Video",
    badge: "MOTION & CINEMA",
    description: "High-retention social reels, commercial cutting, sound design, and color grading.",
    tools: [
      { name: "Adobe Premiere Pro", role: "NLE Video Editing", proficiency: "Expert", level: 95, color: "#9999FF", highlight: "Pacing, Narrative & Multicam" },
      { name: "Adobe After Effects", role: "Motion Graphics & VFX", proficiency: "Advanced", level: 90, color: "#9999FF", highlight: "Kinetic Type, Tracking & 3D UI" },
      { name: "CapCut Pro", role: "Viral Short-Form", proficiency: "Expert", level: 96, color: "#00F0FF", highlight: "Rapid Pacing & Trend Execution" },
    ],
  },
];
