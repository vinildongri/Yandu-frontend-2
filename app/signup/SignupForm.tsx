// app/signup/SignupForm.tsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

const SignupForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const submitHandle = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            const name = `${firstName} ${lastName}`;

            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.errors && Array.isArray(data.errors)) {
                    data.errors.forEach((err: any) => {
                        toast.error(err.message);
                    });
                } else {
                    toast.error(data.message || "Something went wrong");
                }
                return;
            }

            toast.success("Account created. Please check your email for the verification OTP.");

            // Standard MNC practice: Short delay before redirecting to allow toast to be seen
            setTimeout(() => {
                router.push(`/verify-otp?email=${email}`);
            }, 1500);

        } catch (error) {
            toast.error("Server error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">

            <div className="mb-4 mt-2">
                <Logo className="dark:invert" />
            </div>

            <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6">
                <h1 className="text-[28px] font-normal leading-[1.2] mb-4 text-[#0f1111] dark:text-white">Create account</h1>

                <form onSubmit={submitHandle}>
                    <div className="mb-3">
                        <label className="block text-[13px] font-bold mb-1 pl-0.5">First name</label>
                        <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] outline-none transition-colors"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-[13px] font-bold mb-1 pl-0.5">Last name</label>
                        <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] outline-none transition-colors"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-[13px] font-bold mb-1 pl-0.5">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] outline-none transition-colors"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[13px] font-bold mb-1 pl-0.5">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="At least 8 characters"
                                className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] outline-none transition-colors"
                            />
                        </div>
                        <div className="flex items-start gap-1 mt-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#007185] dark:text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[12px] text-[#0f1111] dark:text-gray-400">Passwords must be at least 8 characters.</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mb-4 flex justify-center items-center h-8 font-medium shadow-sm disabled:opacity-70"
                    >
                        {loading ? (
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : "Verify email"}
                    </button>
                </form>

                <p className="text-[12px] leading-[1.5] text-[#0f1111] dark:text-gray-300 mt-1">
                    By creating an account, you agree to Yandu's <span className="text-[#0066c0] dark:text-blue-500 hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-[#0066c0] dark:text-blue-500 hover:underline cursor-pointer">Privacy Notice</span>.
                </p>

                <div className="mt-6 pt-6 border-t border-[#eee] dark:border-gray-800 text-[13px]">
                    Already have an account? <span onClick={() => router.push("/login")} className="text-[#0066c0] dark:text-blue-500 hover:underline cursor-pointer font-medium">Sign in</span>
                </div>
            </div>

            <div className="w-full max-w-[350px] flex flex-col items-center mt-4 pb-10">
                <div className="w-full border-t border-[#eee] dark:border-gray-800 mb-6"></div>
                <div className="flex gap-4 text-[11px] text-[#0066c0] dark:text-blue-500 mb-3 font-medium">
                    <a href="#" className="hover:underline">Conditions of Use</a>
                    <a href="#" className="hover:underline">Privacy Notice</a>
                    <a href="/help-centre" className="hover:underline">Help</a>
                </div>
                <p className="text-[11px] text-[#565959] dark:text-gray-500">© 2026, Yandu, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default SignupForm;