"use client";

import { Pencil } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

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

const fetchUserProfile = async (): Promise<ProfileResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) throw new Error("Failed to fetch profile data");

    return res.json();
};

const ContactInfoPage = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchUserProfile,
        retry: 1,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20 text-gray-600 dark:text-gray-400">
                Loading contact info...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center py-20 text-red-500">
                Error: {error instanceof Error ? error.message : "Something went wrong"}
            </div>
        );
    }

    if (!data?.user) {
        return (
            <div className="flex justify-center items-center py-20 text-gray-600 dark:text-gray-400">
                No account data found.
            </div>
        );
    }

    const user = data.user;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">Contact info</h2>

            <div className="space-y-6">

                {/* --- Account Card --- */}
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg border border-gray-200 dark:border-gray-800 p-8 shadow-sm transition-colors">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Account</h3>

                        {/* Premium Blue Pencil Button */}
                        <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <Pencil size={14} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">User ID</label>
                            <p className="text-[15px] text-gray-700 dark:text-gray-400">{user._id}</p>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">Name</label>
                            <p className="text-[15px] text-gray-700 dark:text-gray-400">{user.name}</p>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">Email</label>
                            <p className="text-[15px] text-gray-700 dark:text-gray-400">{user.email}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* Premium Blue Text Link */}
                        <button className="text-blue-600 cursor-pointer dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-[15px] font-medium transition-colors">
                            Close my account
                        </button>
                    </div>
                </div>

                {/* --- Location & Details Card (Replaced Section) --- */}
                <div className="bg-white dark:bg-[#0a0a0a] rounded-lg border border-gray-200 dark:border-gray-800 p-8 shadow-sm transition-colors">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Location & Details</h3>

                        {/* Premium Blue Pencil Button */}
                        <button className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <Pencil size={14} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">Phone number</label>
                            <p className="text-[15px] text-gray-500 italic dark:text-gray-500">Not provided</p>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">Location</label>
                            <p className="text-[15px] text-gray-500 italic dark:text-gray-500">Not provided</p>
                        </div>
                        <div>
                            <label className="block text-[15px] font-medium text-gray-900 dark:text-gray-200 mb-1">Time zone</label>
                            <p className="text-[15px] text-gray-700 dark:text-gray-400">UTC (Coordinated Universal Time)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfoPage;