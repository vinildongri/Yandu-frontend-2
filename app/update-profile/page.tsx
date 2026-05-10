// app/update-profile/page.tsx
import { Metadata } from "next";
import UpdateProfileClient from "./UpdateProfileClient";

export const metadata: Metadata = {
    title: "Update Profile | Yandu",
    // The ultimate security tag for private pages:
    robots: {
        index: false,
        follow: false,
        nocache: true,
    },
}

export default function UpdateProfilePage() {
    return <UpdateProfileClient />;
}