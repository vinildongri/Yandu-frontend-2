// app/help-centre/page.tsx
import { Metadata } from "next";
import HelpCentreClient from "./HelpCentreClient.";

export const metadata: Metadata = {
  title: "Help Centre & Support | Yandu",
  description: "Get answers to common questions about Yandu's workflow, billing, technical support, and getting started on your next digital project.",
}

export default function HelpCentrePage() {
  return <HelpCentreClient />;
}