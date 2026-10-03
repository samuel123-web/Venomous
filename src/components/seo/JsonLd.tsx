import React from "react";
import { CONTACT_INFO } from "@/data/contactInfo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://venomous.studio/#person",
        name: CONTACT_INFO.name,
        jobTitle: "Founder & Creative Technologist",
        description:
          "Web Developer, Video Editor, and Graphic Designer helping businesses build a stronger digital presence.",
        url: "https://venomous.studio",
        email: CONTACT_INFO.email,
        sameAs: [
          CONTACT_INFO.githubHref,
          CONTACT_INFO.linkedinHref,
          CONTACT_INFO.instagramHref,
          CONTACT_INFO.telegramHref,
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://venomous.studio/#organization",
        name: "VENOMOUS",
        alternateName: "VENOMOUS Creative Studio",
        url: "https://venomous.studio",
        logo: "https://venomous.studio/brand/logo.png",
        founder: {
          "@id": "https://venomous.studio/#person",
        },
        description:
          "VENOMOUS is a premium digital creative brand combining Web Development, Video Editing, and Graphic Design to help businesses build a stronger digital presence.",
        email: CONTACT_INFO.email,
        areaServed: "Worldwide",
        priceRange: "$$$",
        knowsAbout: [
          "Web Development",
          "Next.js",
          "React",
          "Video Editing",
          "Short-Form Video Production",
          "Graphic Design",
          "Brand Identity Design",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
