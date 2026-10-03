export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  position: string;
  testimonial: string;
  image?: string;
  projectSlug?: string;
  serviceCategory?: string;
  rating?: number;
  date?: string;
}

// Production ready: Kept empty by default per Section 24:
// "Do NOT invent testimonials. Prepare editable testimonial structure.
// Until real testimonials are added, use a discreet empty state rather than fake reviews."
export const TESTIMONIALS: Testimonial[] = [];
