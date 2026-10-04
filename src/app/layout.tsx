import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VENOMOUS — Web Development, Video Editing & Graphic Design",
  description:
    "VENOMOUS by Samuel Tafese creates modern websites, professional video content, and graphic designs that help businesses build a stronger digital presence.",
  metadataBase: new URL("https://venomous.studio"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Samuel Tafese",
    "VENOMOUS",
    "Digital Creative Studio",
    "Web Developer",
    "Video Editor",
    "Graphic Designer",
    "Next.js Development",
    "Brand Identity",
    "Commercial Video Editing",
    "Short-Form Video Production",
  ],
  authors: [{ name: "Samuel Tafese", url: "https://venomous.studio" }],
  creator: "Samuel Tafese",
  publisher: "VENOMOUS",
  openGraph: {
    title: "VENOMOUS — Web Development, Video Editing & Graphic Design",
    description:
      "VENOMOUS by Samuel Tafese creates modern websites, professional video content, and graphic designs that help businesses build a stronger digital presence.",
    url: "https://venomous.studio",
    siteName: "VENOMOUS",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "VENOMOUS — Digital Creative Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VENOMOUS — Web Development, Video Editing & Graphic Design",
    description:
      "VENOMOUS by Samuel Tafese creates modern websites, professional video content, and graphic designs that help businesses build a stronger digital presence.",
    creator: "@sam_fullstack_d",
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[var(--background)] text-[var(--text-primary)] selection:bg-[#2563EB] selection:text-white transition-colors duration-250">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
