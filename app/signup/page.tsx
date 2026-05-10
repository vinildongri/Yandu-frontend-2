// app/signup/page.tsx
import { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
    title: "Create Account | Start Your Journey",
    description: "Join Yandu today to access premium freelancers, manage digital projects, and build the future of your brand.",
}

export default function SignupPage() {
    return <SignupForm />;
}