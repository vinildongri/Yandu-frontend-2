// app/update-profile/UpdateProfileClient.tsx
"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

const UpdateProfileClient = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true); // 👈 for initial load

    const router = useRouter();

    const fetchUserProfile = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
            method: "GET",
            credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch profile data");

        return res.json();
    };

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchUserProfile();

                console.log("PROFILE DATA:", data); // 👈 debug once

                // ✅ Safe access (handles undefined + nested response)
                setName(data?.user?.name ?? data?.name ?? "");
                setEmail(data?.user?.email ?? data?.email ?? "");

            } catch (error: any) {
                toast.error("Failed to load profile");
            } finally {
                setFetching(false);
            }
        };

        loadProfile();
    }, []);

    const submitHandle = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ name, email })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            toast.success("Profile updated successfully!");
            router.back();

        } catch (error: any) {
            toast.error(error.message || "Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Prevent UI glitch before data loads
    if (fetching) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-[#0f1111] dark:text-white">
                <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-6 w-6 text-[#0A2540] dark:text-[#1E3A8A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm font-medium">Loading profile...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white">
            <div className="w-full max-w-[350px] flex items-center mb-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                    <ArrowLeft size={18} strokeWidth={2.5} />
                    Back
                </button>
            </div>

            {/* Logo */}
            <div className="mb-4 mt-2">
                <Logo className="dark:invert" />
            </div>

            {/* Main Box */}
            <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6 shadow-sm">

                <h1 className="text-[28px] mb-4">Update Profile</h1>

                <form onSubmit={submitHandle}>

                    {/* Name */}
                    <div className="mb-3">
                        <label className="block text-[13px] font-bold mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            value={name || ""}  // ✅ always safe
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-[13px] font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email || ""} // ✅ always safe
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 outline-none transition-colors"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mb-2 flex justify-center items-center h-8 font-medium shadow-sm disabled:opacity-70"
                    >
                        {loading ? "Saving..." : "Save changes"}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdateProfileClient;