"use client"
import Logo from '@/components/Logo';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation";
import toast from 'react-hot-toast';

const VerifyOtp = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get email from URL params (e.g., /verify?email=user@example.com)
    const email = searchParams.get("email") || "your email";

    const [otp, setOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    // Handle countdown timer for Resend button
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Simply handles input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 6);
        setOtp(value);
        if (isError) setIsError(false);
    };

    // Real Backend Verification
    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();

        if (otp.length < 6) {
            setIsError(true);
            return;
        }

        setIsVerifying(true);
        setIsError(false);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ email, otp })
            });

            const data = await res.json();

            if (res.ok) {
                setIsSuccess(true);
            } else {
                setIsError(true);
                setOtp(''); // Clear input on failure
            }
        } catch (error) {
            setIsError(true);
            console.error("Connection error:", error);
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Prevent multiple clicks if timer is still running
        if (timeLeft > 0 || isVerifying) return;

        try {
            setIsVerifying(true); // Reuse the loading state for the button/UI

            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/resend-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setTimeLeft(30);
                setIsError(false);
                setOtp('');
                toast.success("A new OTP has been sent to your email.");
            } else {
                toast.error(data.message || "Failed to resend OTP. Please try again.");
            }
        } catch (error) {
            console.error("Resend error:", error);
            toast.error("Network error. Please check your connection.");
        } finally {
            setIsVerifying(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">

                <div className="mb-4 mt-2">
                    <Logo className="dark:invert" />
                </div>

                <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-6 text-center mt-8">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#067d62] dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h1 className="text-2xl font-normal mb-2 text-[#0f1111] dark:text-white">Verification Complete</h1>

                    <p className="text-[13px] text-[#0f1111] dark:text-gray-300 mb-6">
                        Your account has been verified. You can now start exploring projects.
                    </p>

                    {/* Premium Midnight Navy Button */}
                    <button
                        onClick={() => router.push("/")}
                        className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-2 px-3 rounded-[8px] transition-all duration-300 font-medium h-10 shadow-sm"
                    >
                        Go to Dashboard
                    </button>
                </div>

                {/* Simple Footer for Success State */}
                <p className="text-[11px] text-[#565959] dark:text-gray-500 mt-8">
                    © 2026, Yandu, Inc. or its affiliates
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">

            {/* Logo */}
            <div className="mb-4 mt-2">
                <Logo className="dark:invert" />
            </div>

            {/* Main Verification Box */}
            <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6">
                <h1 className="text-[28px] font-normal leading-[1.2] mb-3">Verification required</h1>

                <p className="text-[13px] leading-relaxed mb-4 text-[#0f1111] dark:text-gray-300">
                    To continue, complete this verification step. We've sent an OTP to the email <span className="font-bold text-black dark:text-white">{email}</span>.
                </p>

                {/* Amazon Style Error Banner */}
                {isError && (
                    <div className="flex items-start gap-2 text-[#c40000] dark:text-red-400 mb-4 border border-[#c40000] dark:border-red-500/50 p-3 rounded-[4px] shadow-[0_0_0_4px_rgba(221,0,0,.1)_inset] dark:shadow-[0_0_0_4px_rgba(220,38,38,.1)_inset]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mt-0.5 shrink-0">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        <div className="text-[13px]">
                            <span className="font-bold">There was a problem</span><br />
                            Invalid OTP. Please check your code and try again.
                        </div>
                    </div>
                )}

                <form onSubmit={handleVerify}>
                    <div className="mb-5 flex flex-col gap-1.5">
                        <label className="block text-[13px] font-bold text-[#0f1111] dark:text-white pl-0.5">
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            autoFocus
                            maxLength={6}
                            value={otp}
                            onChange={handleChange}
                            placeholder="6-digit code"
                            className={`w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none
                            ${isError
                                    ? 'border-[#c40000] focus:border-[#c40000] focus:ring-[3px] focus:ring-[#c40000]/20 dark:border-red-500'
                                    : 'border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30'
                                }`}
                        />
                    </div>

                    {/* Premium Midnight Navy Button */}
                    <button
                        type="submit"
                        disabled={isVerifying}
                        className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition duration-300 mb-4 flex justify-center items-center h-8 font-medium shadow-sm"
                    >
                        {isVerifying ? (
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'Verify Account'
                        )}
                    </button>
                </form>

                <div className="text-center text-[13px]">
                    {timeLeft > 0 ? (
                        <span className="text-[#565959] dark:text-gray-400">
                            Resend OTP in {timeLeft}s
                        </span>
                    ) : (
                        <a
                            href="#"
                            onClick={handleResend}
                            className="text-[#0066c0] dark:text-blue-500 hover:text-[#c40000] dark:hover:text-white hover:underline font-medium"
                        >
                            Resend OTP
                        </a>
                    )}
                </div>
            </div>

            {/* Footer Links */}
            <div className="w-full max-w-[350px] flex flex-col items-center mt-4 pb-10">
                <div className="w-full border-t border-[#eee] dark:border-gray-800 mb-6"></div>
                <div className="flex gap-4 text-[11px] text-[#0066c0] dark:text-blue-500 mb-3 font-medium">
                    <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Terms of Service</a>
                    <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Help Center</a>
                </div>
                <p className="text-[11px] text-[#565959] dark:text-gray-500">
                    © 2026, Yandu, Inc.
                </p>
            </div>
        </div>
    );
};

export default VerifyOtp;