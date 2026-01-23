import { CTA } from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import ValueSection from "@/components/home/ValueSection";
import ValueSection2 from "@/components/home/ValueSection2";

export default function Home() {
  return (
    <>
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
