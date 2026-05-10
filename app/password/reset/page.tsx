// app/password/reset/page.tsx
import { Metadata } from "next";
import ResetPasswordClient from "./ResetPasswordClient";

export const metadata: Metadata = {
    title: "Create New Password | Yandu",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ResetPasswordPage() {
    return <ResetPasswordClient />;
}