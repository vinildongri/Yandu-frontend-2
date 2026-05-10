// app/profile/page.tsx
import { Metadata } from "next";
import ProfileClient from "./ProfileClient";

export const metadata: Metadata = {
    title: "My Profile | Yandu",
    // The ultimate security tag for private dashboards:
    robots: {
        index: false,
        follow: false,
        nocache: true,
    },
}

export default function ProfilePage() {
    return <ProfileClient />;
}