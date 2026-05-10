// app/password/forgot/page.tsx
import { Metadata } from "next";
import ForgotPasswordClient from "./ForgotPasswordClient";

export const metadata: Metadata = {
    title: "Forgot Password | Yandu",
    description: "Reset the password for your Yandu account.",
    robots: {
        index: false, // Tells Google NOT to show this in search results
        follow: false,
    },
}

export default function ForgotPasswordPage() {
    return <ForgotPasswordClient />;
}