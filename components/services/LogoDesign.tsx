"use client";

import React from "react";
import { CheckCircle, ArrowRight, Layout, Hexagon, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <div className="md:col-span-3 flex flex-col items-center justify-center text-center mt-12 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e94e66] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {title}
        </h2>
    </div>
);

const LogoDesign = () => {
    const router = useRouter();

    return (
        // Main Wrapper
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">

            {/* ================= SECTION 1: HERO (FULL WIDTH) ================= */}
            {/* Moved outside the grid to span full width like the 'Meet The Minds' image */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">

                {/* Inner Container to align content with the rest of the page */}
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    {/* Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Design Studio</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Logo Design</h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            Top-tier visual identities crafted to reflect your brand's personality, values, and long-term vision.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                $62k ONOMISS
                            </div>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-8 py-3 bg-[#e94e66] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#d63d54] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(233,78,102,0.4)]"
                            >
                                START PROJECT
                            </button>
                        </div>
                    </div>

                    {/* Decorative Visual (Right Side) */}
                    <div className="hidden md:flex relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <Hexagon size={48} className="text-[#e94e66]" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Background Glows (Absolute to full width container) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e94e66] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= REST OF THE SECTIONS (Centered Container) ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* ================= HEADER: PHILOSOPHY ================= */}
                <SectionHeader subtitle="Our Approach" title="The Design Philosophy" />

                {/* ================= SECTION 2: PHILOSOPHY ================= */}

                {/* Card 1: Text */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Philosophy</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                        Full Brand Design that Breathes.
                    </h2>
                    <p className="text-sm text-slate-600">We believe a brand should never feel cluttered. Our philosophy centers on intentional white space and bold typography, ensuring your identity has the room to speak clearly to your audience</p>
                    <div className="w-16 h-2 bg-[#e94e66] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Visual (Monitor) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Visuals</span>
                        <Sparkles size={16} className="text-[#e94e66]" />
                    </div>

                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Design that Breathes</h3>
                    </div>

                    {/* CSS Monitor Illustration */}
                    <div className="relative flex flex-col items-center justify-center scale-110">
                        <div className="w-32 h-24 bg-[#111318] dark:bg-[#1c1f26] rounded-xl border-4 border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-lg relative z-10 transition-colors">
                            <div className="text-[#e94e66]">
                                <Layout size={32} />
                            </div>
                        </div>
                        <div className="w-8 h-4 bg-slate-300 dark:bg-slate-600 -mt-1 transition-colors"></div>
                        <div className="w-16 h-1 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors"></div>
                    </div>

                    <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"></div>
                </div>

                {/* Card 3: Full Professional */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] shadow-sm relative group overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Professional</div>

                    <div className="w-56 h-36 bg-[#0a0a0a] rounded-xl border-4 border-slate-300 dark:border-slate-600 shadow-2xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e94e66] flex items-center justify-center text-white text-xs font-bold">Y</div>
                            <span className="text-white font-bold text-lg">Yandu</span>
                        </div>
                    </div>
                    <div className="w-12 h-6 bg-slate-300 dark:bg-slate-600 -mt-1 z-0 transition-colors"></div>
                    <div className="w-32 h-1 bg-slate-300 dark:bg-slate-600 rounded-full z-0 transition-colors"></div>
                </div>


                {/* ================= HEADER: PRICING ================= */}
                <SectionHeader subtitle="Invest in Quality" title="Pricing Plans" />

                {/* ================= SECTION 3: PRICING ================= */}

                {/* Pricing 1: Starter */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#e94e66] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Basic Logo</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$99</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through transition-colors">$149+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["1 Unique Concept", "2 Revision Rounds", "PNG & JPG Formats"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                                <CheckCircle size={16} className="text-[#e94e66]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2: Full Brand */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl dark:shadow-none hover:border-[#e94e66] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#e94e66] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Standard</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Full Identity</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$249</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["3 Logo Concepts", "Unlimited Revisions", "Vector Source Files", "Social Media Kit"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
                                <CheckCircle size={16} className="text-[#e94e66]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3: Premium */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#e94e66] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e94e66] to-purple-600"></div>
                    <span className="text-[10px] uppercase font-bold text-[#e94e66] mb-2 tracking-widest">Premium</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Brand Identity</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">$999</span>
                        <span className="text-sm text-slate-500 line-through">$1200+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Everything in Standard", "Brand Guidelines Book", "Priority Support", "Copyright Transfer"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#e94e66]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* ================= HEADER: FEATURED ================= */}
                <SectionHeader subtitle="Case Studies" title="Featured Work" />

                {/* ================= SECTION 4: GOMAP ================= */}
                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#e94e66]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Portfolio Highlight</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Look on Inside</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            Test known color st wood forest constster and many other iconic brand visual assets created by Yandu.
                        </p>
                        <div 
                        onClick={()=>router.push("/contact")}
                        className="flex items-center justify-center md:justify-start gap-4">
                            <button className="flex items-center cursor-pointer gap-2 text-white font-bold hover:text-[#e94e66] transition-colors">
                                Contact Us <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#e94e66] rounded-xl flex items-center justify-center shadow-lg shadow-pink-900/50">
                                <Layout size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">GoMap</h3>
                                <span className="text-xs text-slate-500">Mobile Identity System</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg transition-colors">
                            4.9 ★ Rating
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
                </div>

            </div>
        </div>
    );
};

export default LogoDesign;