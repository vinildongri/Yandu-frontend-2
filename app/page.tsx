import { CTA } from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import ValueSection from "@/components/home/ValueSection";
import ValueSection2 from "@/components/home/ValueSection2";

export default function Home() {
  // 1. The AI SEO Dictionary (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Yandu",
    "founder": {
      "@type": "Person",
      "name": "Dongri Vineel"
    },
    "description": "A premium freelance development and creative agency specializing in Next.js, MERN stack, and native mobile applications.",
    "url": "https://www.yandu.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "India"
    },
    "offers": {
      "@type": "Offer",
      "description": "Full-Stack Web Development, Fractional CTO Services, and UI/UX Design"
    }
  };

  return (
    <>
      {/* 2. Injecting the AI Schema invisibly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Full screen hero */}
      <Hero />

      {/* Normal page sections */}
      <main className="bg-zinc-50 dark:bg-black">
        <ValueSection2 />
        <ServicesPreview />
        <CTA />
      </main>
    </>
  );
}