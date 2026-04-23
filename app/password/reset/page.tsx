"use client";

import Logo from "@/components/Logo";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// --- 1. The Main Form Component ---
function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Securely grab the token from the URL query parameter (?token=xyz...)
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Enterprise Security Check: Fail gracefully if the token is missing
    if (!token) {
        return (
            <div className="w-full max-w-[350px] border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800 rounded-[8px] p-6 text-center">
                <h2 className="text-[18px] font-semibold text-red-700 dark:text-red-400 mb-2">Invalid Link</h2>
                <p className="text-[13px] text-gray-700 dark:text-gray-300">
                    This password reset link is invalid or missing a security token. Please request a new link from the forgot password page.
                </p>
                <button
                    onClick={() => router.push('/password/forgot')}
                    className="mt-4 text-[13px] text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Return to Forgot Password
                </button>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        setIsLoading(true);

        try {
            // Note: Ensure your backend router is expecting a PUT request at /password/reset/:token
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/password/reset/${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ password, confirmPassword }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Your reset token has expired or is invalid.");
            }

            setMessage("Password successfully reset! Redirecting to login...");
            setPassword("");
            setConfirmPassword("");

            setTimeout(() => router.push('/login'), 2000);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6 shadow-sm">
            <h1 className="text-[28px] font-normal leading-[1.2] mb-2 text-[#0f1111] dark:text-white">
                Create new password
            </h1>

            <p className="text-[13px] mb-4 text-[#0f1111] dark:text-gray-300">
                We'll ask for this password whenever you sign in.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="password" className="block text-[13px] font-bold mb-1 pl-0.5 text-black dark:text-white">
                        New password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 dark:text-gray-400 hover:text-gray-700 font-medium"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-[13px] font-bold mb-1 pl-0.5 text-black dark:text-white">
                        Password again
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
                    />
                </div>

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

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mt-2 mb-2 flex justify-center items-center h-8 font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Saving..." : "Save changes"}
                </button>
            </form>
        </div>
    );
}

// --- 2. The Main Page Layout ---
// MNCs separate the layout from the logic and use Suspense for client-side data fetching
export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">
            <div className="mb-4 mt-2">
                <Logo className="dark:invert" />
            </div>

            {/* Suspense is required by Next.js when using useSearchParams in production */}
            <Suspense fallback={<div className="text-sm text-gray-500">Loading secure connection...</div>}>
                <ResetPasswordForm />
            </Suspense>

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
}