export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "web" | "video" | "design";
  categoryLabel: string;
  industry: string;
  year: string;
  client: string;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  services: string[];
  technologies: string[];
  tools: string[];
  liveUrl?: string;
  videoUrl?: string;
  aspectRatio?: "16/9" | "9/16" | "4/3";
  featured: boolean;
  // Case Study Sections
  overview: string;
  challenge: string;
  strategy: string;
  design: string;
  development: string;
  content: string;
  outcome: string;
  keyDeliverables: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "apex-performance",
    title: "Apex Performance Studio",
    slug: "apex-performance-studio",
    category: "web",
    categoryLabel: "Web Development",
    industry: "Gyms & High-Performance Fitness",
    year: "2026",
    client: "Apex Athletics Co.",
    summary: "High-conversion web application, custom class booking engine, and member portal built for a luxury athletic training facility.",
    description:
      "A high-speed Next.js web application engineered for a modern fitness facility, integrating custom schedule filtering, real-time membership reservations, and cinematic media assets.",
    heroImage: "/projects/apex-web.jpg",
    gallery: [
      "/projects/apex-web.jpg",
      "/projects/apex-booking.jpg",
      "/projects/apex-mobile.jpg",
    ],
    services: [
      "Next.js Web Application",
      "Interactive Class Schedule",
      "Member Reservation Flow",
      "Performance Optimization",
      "API Integrations",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs"],
    tools: ["VS Code", "GitHub", "Figma", "Vercel"],
    liveUrl: "https://apex-studio-demo.venomous.studio",
    featured: true,
    overview:
      "Apex Performance Studio needed to transition away from clunky generic third-party scheduling widgets into an integrated, bespoke digital experience reflecting their elite physical facility.",
    challenge:
      "The client's previous website suffered from slow load times (>4.2s), clunky iFrame booking widgets with high mobile dropout rates, and generic aesthetics that failed to reflect their premium training environment.",
    strategy:
      "We engineered a custom lightweight booking interface backed by Next.js and TypeScript, reducing client clicks to reservation from seven steps down to two, while integrating high-energy video elements and high-contrast dark typography.",
    design:
      "Crafted an aggressive yet sophisticated visual system: matte obsidian surfaces (#0D0D0D), neon amber accents (#F97316), and razor-sharp typographic hierarchy matching the intensity of elite athletic training.",
    development:
      "Built with Next.js App Router, React Server Components for near-instant first paint, optimistic UI state updates for class booking, and strict TypeScript types across all booking models.",
    content:
      "Integrated micro-looping trainer reels and raw industrial gym footage optimized in WebP/WebM formats, maintaining 60fps scrolling performance on mobile devices.",
    outcome:
      "Project Outcome: Decreased initial page load time from 4.2 seconds to 0.7 seconds. Eliminated mobile booking abandonment bottlenecks, enabling the facility to process member registrations seamlessly without third-party portal redirects.",
    keyDeliverables: [
      "Custom responsive Next.js web application",
      "Real-time class schedule & filter system",
      "Mobile-first member onboarding flow",
      "CMS-ready instructor and class schedule models",
    ],
  },
  {
    id: "luminary-nocturne",
    title: "Luminary Nocturne Campaign",
    slug: "luminary-nocturne-campaign",
    category: "video",
    categoryLabel: "Video Editing",
    industry: "E-commerce & Luxury Fashion",
    year: "2026",
    client: "Luminary Studios",
    summary: "Cinematic commercial series, high-impact vertical short-form reels, and bespoke sound design for an avant-garde evening wear collection.",
    description:
      "A cinematic promotional video campaign combining rhythmic cuts, precision color grading, and custom motion graphics designed to drive high engagement across Instagram and TikTok.",
    heroImage: "/projects/luminary-video.jpg",
    gallery: [
      "/projects/luminary-video.jpg",
      "/projects/luminary-color.jpg",
      "/projects/luminary-motion.jpg",
    ],
    services: [
      "Commercial Video Editing",
      "Color Grading & Color Science",
      "Dynamic Short-Form Reels",
      "Sound Design & Audio Mastering",
      "Kinetic Motion Graphics",
    ],
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro"],
    tools: ["Adobe Premiere Pro", "After Effects", "Audition"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "9/16",
    featured: true,
    overview:
      "Luminary Nocturne launched a signature midnight streetwear capsule requiring promotional visual storytelling that arrested social media feeds and retained viewers through the final CTA.",
    challenge:
      "Raw footage had inconsistent lighting conditions across three night shoot locations. Social viewer attention spans required immediate hook retention in the first 1.5 seconds without feeling cheap or overly frantic.",
    strategy:
      "Designed a split-second hook structure combining macro fabric close-ups with heavy bass-drop audio syncing, followed by seamless speed ramps that showcase the drape and texture of each garment in motion.",
    design:
      "Established a cinematic anamorphic color palette featuring deep cool blues (#0F172A), metallic highlights, and selective skin-tone masking for a luxury filmic mood.",
    development:
      "Delivered in multiple aspect ratios (9:16 for Reels/TikTok, 16:9 for Website Hero, 1:1 for paid carousel placements) with lossless audio compression and platform-optimized bitrates.",
    content:
      "Scripted on-screen kinetic typographic overlays highlighting garment materials, limited-edition numbers, and drop dates in synch with custom sound FX.",
    outcome:
      "Project Outcome: Delivered a coherent 6-part social video series and 1 flagship 4K brand reel. Achieved superior viewer retention with complete watch-through rates and high community share ratios across brand social channels.",
    keyDeliverables: [
      "1x 60-second 4K Master Brand Film",
      "6x 9:16 High-Retention Social Reels",
      "Custom LUT & Color Profile Documentation",
      "Full Sound Design Mix with Stems",
    ],
  },
  {
    id: "kromos-architectural",
    title: "Kromos Architectural Lab",
    slug: "kromos-architectural-lab",
    category: "design",
    categoryLabel: "Graphic Design",
    industry: "Architecture & Interior Design",
    year: "2026",
    client: "Kromos Studio",
    summary: "Comprehensive brand identity system, architectural monogram, bespoke typography guidelines, and luxury print collateral.",
    description:
      "A minimalist, structural visual identity built for an international architectural studio, blending mathematical precision with timeless editorial elegance.",
    heroImage: "/projects/kromos-design.jpg",
    gallery: [
      "/projects/kromos-design.jpg",
      "/projects/kromos-guidelines.jpg",
      "/projects/kromos-collateral.jpg",
    ],
    services: [
      "Brand Identity & Monogram Design",
      "Comprehensive Brand Guidelines",
      "Editorial Portfolio Layout",
      "Luxury Print Collateral",
      "Digital Asset Kits",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    liveUrl: "https://kromos-brand-demo.venomous.studio",
    featured: true,
    overview:
      "Kromos Architectural Lab required a complete visual rebrand to reposition their firm for multi-million dollar commercial and civic architecture commissions.",
    challenge:
      "The firm's original visual assets were disjointed, lacking a clear logo mark and visual unity between their pitch documents, project monographs, and digital touchpoints.",
    strategy:
      "Developed a custom geometric monogram rooted in architectural blueprints and golden ratio proportions, paired with an austere monochrome palette accented with blueprint cyan (#0284C7).",
    design:
      "Created an 80-page comprehensive Brand Identity manual specifying typographic scales, grid systems, negative space allowances, foil-stamped business cards, and project monograph templates.",
    development:
      "Exported vector SVG systems, optimized digital stationery templates, and vector social media kits ready for multi-team distribution.",
    content:
      "Architectural copywriting guidelines defining the firm's vocal tone: restrained, authoritative, cerebral, and visionary.",
    outcome:
      "Project Outcome: Unified all international studio presentations and project proposal bids under an unmistakable, prestigious visual identity that won major institutional developer confidence.",
    keyDeliverables: [
      "Primary & Secondary Vector Monogram Suite",
      "80-Page Comprehensive Brand Guidelines Book",
      "Luxury foil-stamped stationery and business card system",
      "Digital presentation deck templates in Figma & PDF",
    ],
  },
  {
    id: "aura-living",
    title: "Aura Living Modern Furniture",
    slug: "aura-living-modern-furniture",
    category: "web",
    categoryLabel: "Web Development",
    industry: "Furniture & Interior Design",
    year: "2025",
    client: "Aura Living Ltd.",
    summary: "Sculptural e-commerce showroom, interactive 3D material selector, and fluid product exploration for artisanal furniture.",
    description:
      "An editorial e-commerce platform blending silky smooth layout animations, high-resolution product imagery, and lightning-fast checkout flows.",
    heroImage: "/projects/aura-furniture.jpg",
    gallery: [
      "/projects/aura-furniture.jpg",
      "/projects/aura-product.jpg",
      "/projects/aura-cart.jpg",
    ],
    services: [
      "Headless E-commerce Architecture",
      "Interactive Material Customizer",
      "Fluid Layout & Page Transitions",
      "Mobile Optimized Cart Experience",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify API"],
    tools: ["VS Code", "Figma", "Shopify CLI"],
    liveUrl: "https://aura-living-demo.venomous.studio",
    featured: true,
    overview:
      "Aura manufactures handcrafted Scandinavian and Japandi-inspired bespoke furniture. They required an online flagship showroom that replicated the tactile luxury of their physical studio.",
    challenge:
      "Standard e-commerce templates failed to showcase the craftsmanship, grain details, and scale of their custom furniture pieces, resulting in low conversions for items priced above $2,000.",
    strategy:
      "We engineered an editorial, magazine-style layout where products are presented in architectural context, paired with interactive fabric and wood finish switches that update instantly without reloading.",
    design:
      "Warm minimalist aesthetic: soft stone backgrounds (#161616), warm ivory typography (#F4F4F5), and ultra-thin 1px borders creating gallery-like frames around each furniture piece.",
    development:
      "Implemented with Next.js App Router, image prefetching, custom responsive image sizing for retina displays, and headless commerce integration.",
    content:
      "Curated macro artisan video clips showing hand-planing, joinery, and upholstery assembly embedded seamlessly into product storytelling sections.",
    outcome:
      "Project Outcome: Dramatically elevated digital brand perception. Customers spent 3.4x longer exploring product material variations, leading to higher average order values and direct custom showroom inquiries.",
    keyDeliverables: [
      "Custom responsive e-commerce web application",
      "Dynamic material & finish switcher",
      "Architectural lookbook module",
      "Optimized mobile checkout funnel",
    ],
  },
  {
    id: "veloce-capital",
    title: "Veloce Capital Brand System",
    slug: "veloce-capital-brand-system",
    category: "design",
    categoryLabel: "Graphic Design",
    industry: "Startups & Venture Capital",
    year: "2025",
    client: "Veloce Ventures",
    summary: "Modern venture capital brand system, pitch deck frameworks, executive typography, and data visualization guidelines.",
    description:
      "A high-velocity visual identity for a seed-stage venture fund investing in robotics and autonomous systems.",
    heroImage: "/projects/veloce-design.jpg",
    gallery: [
      "/projects/veloce-design.jpg",
      "/projects/veloce-deck.jpg",
      "/projects/veloce-data.jpg",
    ],
    services: [
      "Visual Identity System",
      "Investor Pitch Deck System",
      "Data Visualization Design",
      "Annual Review Editorial",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
    tools: ["Figma", "Illustrator"],
    liveUrl: "https://veloce-capital-demo.venomous.studio",
    featured: false,
    overview:
      "Veloce Capital raised their Fund II and needed a brand identity that stood apart from traditional stuffy private equity firms while conveying institutional credibility to limited partners.",
    challenge:
      "The firm needed to appeal to both deep-tech founders building hardware/AI and institutional LPs managing endowments. The visual identity had to balance cutting-edge tech with financial prudence.",
    strategy:
      "Created a sharp, aerodynamic logomark representing kinetic momentum and venture acceleration, supported by high-contrast technical typography and structured data charts.",
    design:
      "Deep space black (#0A0A0A) coupled with electric blue (#2563EB) and laser orange (#F97316) data highlights for portfolio performance graphs.",
    development:
      "Constructed modular Figma component libraries for pitch decks, LP reports, social deal announcements, and founder interview collateral.",
    content:
      "Established clear guidelines for simplifying complex financial and robotics data into easily digestible executive summaries.",
    outcome:
      "Project Outcome: Provided the fund with an iconic visual toolkit deployed across their successful Fund II closing documentation and global partner roadshows.",
    keyDeliverables: [
      "Master Logomark and Symbol Variations",
      "40-Slide Master Investor Deck Framework",
      "Data Chart & Infographic Style System",
      "Social Deal Announcement Kit",
    ],
  },
  {
    id: "echo-motion-series",
    title: "Echo Motion Short-Form Series",
    slug: "echo-motion-short-form-series",
    category: "video",
    categoryLabel: "Video Editing",
    industry: "Personal Brands & Tech Creators",
    year: "2025",
    client: "Echo Media Group",
    summary: "Viral retention short-form editing, animated kinetic typography, sound effects mapping, and 3D UI callouts for tech entrepreneurs.",
    description:
      "A high-energy social video editing system designed to maximize algorithm watch time, engagement, and profile conversion for personal brands.",
    heroImage: "/projects/echo-video.jpg",
    gallery: [
      "/projects/echo-video.jpg",
      "/projects/echo-retention.jpg",
      "/projects/echo-motion.jpg",
    ],
    services: [
      "Short-Form Video Editing (Reels & TikTok)",
      "Sound Design & Audio Pacing",
      "Dynamic B-Roll Selection",
      "Kinetic Subtitles & Keyframing",
    ],
    technologies: ["Premiere Pro", "After Effects", "CapCut"],
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    aspectRatio: "9/16",
    featured: false,
    overview:
      "Echo Media manages prominent tech founders who publish daily insights. They needed video production that transformed unpolished talking-head phone recordings into broadcast-grade social clips.",
    challenge:
      "Creators spoke at erratic tempos with frequent pauses, requiring aggressive pacing surgery, pattern interrupts every 3 seconds, and compelling visual metaphors without losing the speaker's authenticity.",
    strategy:
      "Implemented a systematic 4-tier editing workflow: Dialogue polishing and silence removal, rhythmic pacing matching background audio, custom sound effects on every concept shift, and customized animated typography.",
    design:
      "Styled typography with high-contrast drop shadows, brand-colored keyword emphasis (blue and orange), and custom vector iconography that appears at key inflection points.",
    development:
      "Automated export templates with hardware-accelerated rendering presets calibrated for Instagram and TikTok compression algorithms.",
    content:
      "Formulated viral hook frameworks for opening video titles, ensuring viewers read and watch simultaneously within the first 2 seconds.",
    outcome:
      "Project Outcome: Transformed over 30 talking-head videos into viral-ready assets that consistently achieved higher retention curves and generated qualified inbound partnership inquiries for the creators.",
    keyDeliverables: [
      "30+ Edited Short-Form Video Assets",
      "Custom Kinetic Subtitle Preset Library",
      "Bespoke Sound FX Soundboard for Tech Edits",
      "Hook Framing & Headline Playbook",
    ],
  },
  {
    id: "savoria-bistro",
    title: "Savoria Bistro & Lounge",
    slug: "savoria-bistro-lounge",
    category: "web",
    categoryLabel: "Web Development",
    industry: "Restaurants & Hospitality",
    year: "2025",
    client: "Savoria Hospitality",
    summary: "Sensory dining website, interactive cocktail & dinner menus, instant table reservations, and rich video atmosphere integration.",
    description:
      "A dark, intimate digital experience built for an upscale culinary bistro, designed to convert casual diners into confirmed private dining reservations.",
    heroImage: "/projects/savoria-web.jpg",
    gallery: [
      "/projects/savoria-web.jpg",
      "/projects/savoria-menu.jpg",
      "/projects/savoria-reserve.jpg",
    ],
    services: [
      "Bespoke Hospitality Website",
      "Dynamic Interactive Menu System",
      "Table Booking System Integration",
      "Atmospheric Video Backgrounds",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tools: ["VS Code", "Figma", "Premiere Pro"],
    liveUrl: "https://savoria-bistro-demo.venomous.studio",
    featured: false,
    overview:
      "Savoria Bistro needed a digital presence that captured the smoky, candle-lit elegance of their physical dining room while making it effortless for guests to browse seasonal menus and reserve tables.",
    challenge:
      "Their previous PDF menus were unreadable on mobile phones, causing frustration for guests on the go. Reservation links were buried across multiple external pages.",
    strategy:
      "Engineered an interactive, filterable menu with categorized tabs (Chef's Tasting, Craft Cocktails, Wine List) with dietary indicators, coupled with a sticky one-tap reservation bar on mobile.",
    design:
      "Deep charcoal background (#0C0C0C), warm amber candle glow accents (#F97316), and serif headlines paired with ultra-clean sans-serif body copy.",
    development:
      "Next.js App Router with static generation for menu items, enabling instant sub-100ms tab switching without server latency.",
    content:
      "Integrated looping micro-videos of flame-seared steaks, shaken cocktails, and kitchen artistry, creating an appetite-inducing sensory experience.",
    outcome:
      "Project Outcome: Eliminated illegible PDF menus with an ultra-responsive digital menu system. Evening weekend reservations booked out 3 weeks in advance through the streamlined reservation funnel.",
    keyDeliverables: [
      "Responsive luxury restaurant web experience",
      "Interactive dietary-filterable menu system",
      "Mobile sticky reservation action bar",
      "Private dining event inquiry portal",
    ],
  },
  {
    id: "zenith-skyline",
    title: "Zenith Skyline Residences",
    slug: "zenith-skyline-residences",
    category: "web",
    categoryLabel: "Web Development",
    industry: "Real Estate & Luxury Properties",
    year: "2025",
    client: "Zenith Urban Development",
    summary: "Immersive luxury real estate development portal with interactive penthouse floor plans, unit availability matrix, and private viewing booking.",
    description:
      "A high-end architectural showcase designed for a 45-story luxury residential tower, turning international property buyers into qualified private viewing inquiries.",
    heroImage: "/projects/zenith-realestate.jpg",
    gallery: [
      "/projects/zenith-realestate.jpg",
      "/projects/zenith-floorplans.jpg",
      "/projects/zenith-inquire.jpg",
    ],
    services: [
      "Luxury Real Estate Portal",
      "Interactive Floor Plan Viewer",
      "Residence Availability Filter",
      "VIP Private Tour Booking Engine",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tools: ["VS Code", "Figma", "Illustrator"],
    liveUrl: "https://zenith-skyline-demo.venomous.studio",
    featured: false,
    overview:
      "Zenith Urban Development needed a prestigious digital portal for their flagship skyscraper project to present floor plans and penthouse features to high-net-worth buyers worldwide.",
    challenge:
      "Buyers from multiple time zones needed to explore unit layouts, architectural finishes, and panoramic views without requiring an immediate in-person sales center visit.",
    strategy:
      "Engineered an interactive floor plan explorer allowing visitors to toggle between 1-bedroom, 2-bedroom, and duplex penthouses, view dimensions, and immediately request private architectural dossiers.",
    design:
      "Minimalist slate surfaces, crisp silver borders, and architectural blueprint grids that underscore the structural magnificence of the property.",
    development:
      "Interactive SVG floor plan hotspots, smooth zoom-and-pan controls, and encrypted lead qualification forms connected to sales CRM.",
    content:
      "Curated daylight-to-dusk panoramic imagery and lifestyle copy focusing on privacy, acoustic engineering, and high-altitude luxury.",
    outcome:
      "Project Outcome: Provided the development firm with an elite digital asset that successfully supported private showings and secured pre-sale reservations across premier penthouse units.",
    keyDeliverables: [
      "Custom responsive real estate portal",
      "Interactive architectural floor plan explorer",
      "VIP Private Tour booking interface",
      "Multi-currency pricing and specification sheets",
    ],
  },
];
