"use client";

import Logo from "@/components/Logo";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");
        setError("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/password/forgot`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setMessage(data.message);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">

            {/* Logo */}
            <div className="mb-4 mt-2">
                <Logo className="dark:invert" />
            </div>

            {/* Main Form Box */}
            <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6">

                <h1 className="text-[28px] font-normal leading-[1.2] mb-2 text-[#0f1111] dark:text-white">
                    Password assistance
                </h1>

                <p className="text-[13px] mb-4 text-[#0f1111] dark:text-gray-300">
                    Enter the email address associated with your Yandu account.
                </p>

                <form onSubmit={handleSubmit}>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[13px] font-bold mb-1 pl-0.5">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
                        />
                    </div>

                    {/* Feedback Messages */}
                    {message && (
                        <div className="mb-3 p-2 rounded bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                            <p className="text-[13px] text-green-700 dark:text-green-400 font-medium">{message}</p>
                        </div>
                    )}
                    {error && (
                        <div className="mb-3 p-2 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                            <p className="text-[13px] text-[#c40000] dark:text-red-400 font-medium">{error}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mt-2 mb-2 flex justify-center items-center h-8 font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
            </div>

            {/* Footer Links */}
            <div className="w-full max-w-[350px] flex flex-col items-center mt-8 pb-10">
                <div className="w-full border-t border-[#eee] dark:border-gray-800 mb-6"></div>
                <div className="flex gap-4 text-[11px] text-[#0066c0] dark:text-blue-500 mb-3 font-medium">
                    <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Conditions of Use</a>
                    <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Privacy Notice</a>
                    <a href="/help-centre" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Help</a>
                </div>
                <p className="text-[11px] text-[#565959] dark:text-gray-500">
                    © 2026, Yandu, Inc. or its affiliates
                </p>
            </div>

        </div>
    );
};

export default ForgotPassword;