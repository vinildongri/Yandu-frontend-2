// app/guides/page.tsx
import { Metadata } from "next";
import GuidesClient from "./GuidesClient";

export const metadata: Metadata = {
  title: "Tech & Startup Guides | Digital Growth Resources",
  description: "Expert guides, tutorials, and insights on web development, app creation, UI/UX design, and scaling your digital business from the Yandu engineering team.",
  keywords: ["startup guides", "web development blog", "hire app developers", "UI/UX tutorials", "freelance agency tips"]
}

export default function GuidesPage() {
  return <GuidesClient />;
}