// app/profile/ProfileClient.tsx
"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

// 1. Define the User Interfaces
export interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    authProvider: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ProfileResponse {
    user: User;
}

// 2. Define the fetcher function
const fetchUserProfile = async (): Promise<ProfileResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) throw new Error("Failed to fetch profile data");

    return res.json();
};

const ProfileClient = () => {
    // 3. React Query handles loading, error, and caching
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchUserProfile,
        retry: 1,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center text-gray-600 dark:text-gray-400 bg-slate-50 dark:bg-black min-h-screen">
                <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-6 w-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Loading profile...</span>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center text-red-500 bg-slate-50 dark:bg-black min-h-screen">
                Error: {error instanceof Error ? error.message : "Something went wrong"}
            </div>
        );
    }

    if (!data?.user) {
        return (
            <div className="flex justify-center items-center text-gray-600 dark:text-gray-400 bg-slate-50 dark:bg-black min-h-screen">
                No profile data found.
            </div>
        );
    }

    const user = data.user;

    // Helper to format the creation date
    const formatJoinedDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
        });
    };

    // Helper to get the first initial and capitalize it
    const userInitial = user.name.charAt(0).toUpperCase();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black pt-20 px-4 sm:px-6 font-sans antialiased text-[#0f1111] dark:text-white">
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl font-bold">My Profile</h1>

                {/* --- Top Card (Identity & Main Action) --- */}
                <div className="bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-gray-800 flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0">
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left sm:space-x-6">
                        {/* Avatar */}
                        <div className="w-20 h-20 mb-4 sm:mb-0 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex shrink-0 items-center justify-center border-2 border-indigo-100 dark:border-indigo-800/50">
                            <span className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">
                                {userInitial}
                            </span>
                        </div>

                        {/* User Identity Details */}
                        <div className="space-y-1 w-full overflow-hidden">
                            <p className="text-xl sm:text-2xl font-semibold text-[#0f1111] dark:text-white truncate">
                                {user.name}
                            </p>
                            <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/update-profile"
                        className="w-full sm:w-auto bg-indigo-600 dark:bg-[#1E3A8A] text-white font-medium text-sm py-2.5 px-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-[#172554] transition-colors inline-block text-center shadow-sm"
                    >
                        Edit
                    </Link>
                </div>

                {/* --- Bottom Card (Personal Information List) --- */}
                <div className="bg-white dark:bg-[#0a0a0a] rounded-xl shadow-sm border border-slate-100 dark:border-gray-800 overflow-hidden">
                    <div className="p-6 sm:p-8 pb-4 border-b border-slate-100 dark:border-gray-800/50">
                        <h2 className="text-lg sm:text-xl font-semibold text-[#0f1111] dark:text-white">
                            Personal Information
                        </h2>
                    </div>

                    <ul className="divide-y divide-slate-100 dark:divide-gray-800">
                        {/* Row 1: Account Status */}
                        <li className="p-6 sm:p-8">
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-x-12 w-full sm:w-3/4 sm:items-center">
                                <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">
                                    Account Status
                                </span>
                                <span className="flex items-center text-slate-900 dark:text-gray-200">
                                    <div
                                        className={`w-2.5 h-2.5 rounded-full mr-2.5 shrink-0 ${user.isVerified ? "bg-green-500" : "bg-yellow-500"
                                            }`}
                                    ></div>
                                    {user.isVerified ? "Verified Member" : "Unverified"}
                                </span>
                            </div>
                        </li>

                        {/* Row 2: Customer Since */}
                        <li className="p-6 sm:p-8">
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-x-12 w-full sm:w-3/4 sm:items-center">
                                <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">
                                    Customer Since
                                </span>
                                <span className="text-slate-900 dark:text-gray-200">
                                    {formatJoinedDate(user.createdAt)}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileClient;