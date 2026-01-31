"use client";

import React from "react";
import { CheckCircle, ArrowRight, Instagram, TrendingUp, Heart, Share2, BarChart3, Hexagon, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <div className="md:col-span-3 flex flex-col items-center justify-center text-center mt-12 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {title}
        </h2>
    </div>
);

const SocialMedia = () => {
    const router = useRouter();

    return (
        // Main Wrapper with Dark/Light Mode Transition
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">

            {/* ================= SECTION 1: HERO (FULL WIDTH) ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">

                {/* Inner Container */}
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    {/* Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Digital</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Social Media
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            We turn passive scrollers into loyal customers through data-driven content, community management, and viral strategies.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                +400% ENGAGEMENT
                            </div>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-8 py-3 bg-[#3b82f6] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            >
                                START CAMPAIGN
                            </button>
                        </div>
                    </div>

                    {/* Decorative Visual (Right Side) */}
                    <div className="hidden md:flex relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <Share2 size={48} className="text-[#3b82f6]" />
                            </div>
                        </div>
                        {/* Floating Icons */}
                        <div className="absolute top-0 right-10 bg-[#3b82f6] p-3 rounded-full animate-bounce">
                            <Heart size={20} className="text-white fill-white" />
                        </div>
                    </div>

                </div>

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= REST OF THE SECTIONS (Centered Container) ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* ================= HEADER: PHILOSOPHY ================= */}
                <SectionHeader subtitle="The Strategy" title="Viral Engineering" />

                {/* ================= SECTION 2: STRATEGY & VIRALITY ================= */}

                {/* Card 1: Text */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Philosophy</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        Stop Scrolling. Start Connecting.
                    </h2>
                    <div className="w-16 h-2 bg-[#3b82f6] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Virality Visual */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Growth</span>
                        <TrendingUp size={16} className="text-[#3b82f6]" />
                    </div>

                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Viral Scale</h3>
                    </div>

                    {/* CSS Graph Illustration */}
                    <div className="relative flex flex-col items-center justify-center w-full px-4 scale-110">
                        <div className="flex items-end gap-2 h-24 w-full justify-center">
                            <div className="w-4 h-8 bg-slate-200 dark:bg-slate-700 rounded-t-sm transition-colors"></div>
                            <div className="w-4 h-12 bg-slate-200 dark:bg-slate-700 rounded-t-sm transition-colors"></div>
                            <div className="w-4 h-10 bg-slate-200 dark:bg-slate-700 rounded-t-sm transition-colors"></div>
                            <div className="w-4 h-16 bg-[#3b82f6] rounded-t-sm shadow-lg shadow-blue-500/30 relative">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#3b82f6]">40k</div>
                            </div>
                            <div className="w-4 h-14 bg-slate-200 dark:bg-slate-700 rounded-t-sm transition-colors"></div>
                        </div>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-2 transition-colors"></div>
                    </div>
                </div>

                {/* Card 3: Platform Management */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] shadow-sm relative group overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Multi-Platform</div>

                    {/* Phone Mockup */}
                    <div className="w-40 h-64 bg-[#0a0a0a] rounded-[2rem] border-4 border-slate-300 dark:border-slate-600 shadow-2xl flex flex-col items-center pt-4 relative z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-12 h-1 bg-slate-800 rounded-full mb-4"></div>
                        <div className="w-full px-4 gap-2 flex flex-col">
                            <div className="w-full h-24 bg-[#1c1f26] rounded-xl flex items-center justify-center">
                                <Instagram className="text-[#3b82f6]" />
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                                <div className="flex flex-col gap-1">
                                    <div className="w-16 h-2 bg-slate-800 rounded-full"></div>
                                    <div className="w-10 h-2 bg-slate-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ================= HEADER: PRICING ================= */}
                <SectionHeader subtitle="Invest in Growth" title="Campaign Pricing" />

                {/* ================= SECTION 3: PRICING ================= */}

                {/* Pricing 1: Content Only */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Content Kit</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$499</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through transition-colors">$600+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["12 Custom Posts/Mo", "Story Templates", "Caption Copywriting", "Hashtag Strategy"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2: Growth Mgmt */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Growth</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Management</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$999</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["30 Posts + 4 Reels", "Community Management", "Comment Replying", "Monthly Analytics Report"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3: Full Authority */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#3b82f6] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-cyan-400"></div>
                    <span className="text-[10px] uppercase font-bold text-[#3b82f6] mb-2 tracking-widest">Dominance</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Full Authority</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">$1999</span>
                        <span className="text-sm text-slate-500 line-through">$2500+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Daily Content (Reels/Post)", "Paid Ad Management", "Influencer Outreach", "24/7 Crisis Mgmt"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* ================= HEADER: FEATURED ================= */}
                <SectionHeader subtitle="Case Studies" title="Recent Hits" />

                {/* ================= SECTION 4: CASE STUDY ================= */}
                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Portfolio Highlight</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Yandu Trends</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            How we grew a local startup's Instagram from 0 to 10k followers in just 3 months using Reels strategy.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <button
                                onClick={()=>router.push("/contact")}
                             className="flex items-center cursor-pointer gap-2 text-white font-bold hover:text-[#3b82f6] transition-colors">
                                Contact Us <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                                <BarChart3 size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">+12.4M</h3>
                                <span className="text-xs text-slate-500">Impressions Generated</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg transition-colors flex gap-2 items-center">
                            <Heart size={12} className="text-red-500 fill-red-500" /> Viral
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                </div>

            </div>
        </div>
    );
};

export default SocialMedia;