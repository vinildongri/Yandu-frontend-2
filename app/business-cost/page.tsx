// app/business-cost/page.tsx
import { Metadata } from "next";
import ServiceCalculator from "./ServiceCalculator"; // Import the client component

export const metadata: Metadata = {
  title: "Project Cost Calculator | Transparent Freelance Pricing",
  description: "Get an instant, transparent estimate for your next digital project. Calculate the exact cost for MERN stack web development, native mobile apps, APIs, and design.",
}

export default function BusinessCostPage() {
  return <ServiceCalculator />;
}