"use client";

import React from "react";
import {
    CheckCircle,
    ArrowRight,
    Layout,
    PenTool,
    Layers,
    Smartphone,
    MousePointer2,
    Palette,
    Eye
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <div className="md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b5cf6] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {title}
        </h2>
    </div>
);

const UiUxDesign = () => {
    const router = useRouter();

    return (
        // Main Wrapper
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">

            {/* ================= SECTION 1: HERO (FULL WIDTH) ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">

                {/* Inner Container */}
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    {/* Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Creative</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            UI/UX Design
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            We don't just make things look pretty. We design intuitive, human-centric interfaces that guide users and drive conversions.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                PIXEL PERFECT
                            </div>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-8 py-3 bg-[#8b5cf6] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#7c3aed] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                START DESIGN
                            </button>
                        </div>
                    </div>

                    {/* Decorative Visual (Right Side) */}
                    <div className="hidden md:flex relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <PenTool size={48} className="text-[#8b5cf6]" />
                            </div>
                        </div>
                        {/* Floating Icons */}
                        <div className="absolute top-0 right-10 bg-[#8b5cf6] p-3 rounded-full animate-bounce">
                            <Layout size={20} className="text-white fill-white" />
                        </div>
                    </div>

                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= REST OF THE SECTIONS (Centered Container) ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* ================= HEADER: PHILOSOPHY ================= */}
                <SectionHeader subtitle="The Process" title="Design Thinking" />

                {/* ================= SECTION 2: FEATURE CARDS ================= */}

                {/* Card 1: Empathy (Text) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Research</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        User First <br /> Strategy.
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Before we draw a single pixel, we understand your user. We build user personas, empathy maps, and journey flows.</p>
                    <div className="w-16 h-2 bg-[#8b5cf6] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Prototyping (Visual) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Wireframing</span>
                        <Layers size={16} className="text-[#8b5cf6]" />
                    </div>

                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lo-Fi to Hi-Fi</h3>
                    </div>

                    {/* CSS Wireframe Illustration */}
                    <div className="relative flex flex-col items-center justify-center w-full px-4 scale-110">
                        <div className="w-32 h-44 bg-white dark:bg-[#1c1f26] border-2 border-slate-200 dark:border-slate-600 rounded-2xl p-2 flex flex-col gap-2 shadow-lg relative z-10">
                            {/* Skeleton UI */}
                            <div className="w-full h-24 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                            <div className="w-2/3 h-2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                            <div className="w-1/2 h-2 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                            <div className="mt-auto w-full h-8 bg-[#8b5cf6] rounded-lg opacity-80"></div>
                        </div>
                        {/* Cursor */}
                        <div className="absolute bottom-4 right-12 text-slate-900 dark:text-white z-20 animate-bounce">
                            <MousePointer2 size={24} className="fill-white dark:fill-slate-900" />
                        </div>
                    </div>
                </div>

                {/* Card 3: Design Systems (Visual) */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] shadow-sm relative group overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Consistency</div>

                    <div className="text-center z-10 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Design Systems</h3>
                        <p className="text-xs text-slate-500 mt-1">Atomic Design Principles</p>
                    </div>

                    {/* Palette Illustration */}
                    <div className="flex items-center gap-2 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-12 h-12 rounded-full bg-[#8b5cf6] shadow-lg"></div>
                        <div className="w-12 h-12 rounded-full bg-pink-500 shadow-lg -ml-4"></div>
                        <div className="w-12 h-12 rounded-full bg-cyan-500 shadow-lg -ml-4"></div>
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#111318] flex items-center justify-center border dark:border-slate-600 shadow-lg -ml-4">
                            <Palette size={16} className="text-slate-400" />
                        </div>
                    </div>
                </div>


                {/* ================= HEADER: PRICING ================= */}
                <SectionHeader subtitle="Investment" title="Design Packages" />

                {/* ================= SECTION 3: PRICING ================= */}

                {/* Pricing 1: UX Audit */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#8b5cf6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">UX Audit</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$199</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through transition-colors">$299+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Heuristic Evaluation", "Accessibility Check (WCAG)", "User Flow Analysis", "Improvement Report"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                                <CheckCircle size={16} className="text-[#8b5cf6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2: App Design (Mid) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl dark:shadow-none hover:border-[#8b5cf6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#8b5cf6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Full Design</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">App UI/UX</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$899</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Up to 10 Screens", "Clickable Figma Prototype", "Custom Iconography", "Developer Handoff"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
                                <CheckCircle size={16} className="text-[#8b5cf6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3: Enterprise */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#8b5cf6] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-pink-500"></div>
                    <span className="text-[10px] uppercase font-bold text-[#8b5cf6] mb-2 tracking-widest">Enterprise</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Design System</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">Custom</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Comprehensive Style Guide", "Reusable Component Library", "Motion Design & Lottie", "Dark/Light Mode Variants"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#8b5cf6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>


                {/* ================= HEADER: SHOWCASE ================= */}
                <SectionHeader subtitle="Portfolio" title="Visual Stories" />

                {/* ================= SECTION 4: CASE STUDY ================= */}
                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Redesign Case Study</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Fintech Reimagined</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            How we simplified a complex banking dashboard into a clean, 3-click transaction experience for mobile users.
                        </p>
                        <a
                            href="mailto:vinilwork88@gmail.com"
                            className="flex items-center gap-2 text-white font-bold hover:text-[#ec4899] transition-colors"
                        >
                            Contact Us <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">

                        {/* Mockup Screen Visual */}
                        <div className="w-full h-full p-4 flex gap-4">
                            <div className="w-1/2 h-full bg-[#111318] rounded-xl p-2 opacity-50 border border-red-500/30">
                                <div className="text-[8px] text-red-400 text-center mb-1">BEFORE</div>
                                <div className="space-y-1">
                                    <div className="h-1 bg-slate-700 w-full"></div>
                                    <div className="h-1 bg-slate-700 w-3/4"></div>
                                </div>
                            </div>
                            <div className="w-1/2 h-full bg-slate-800 rounded-xl p-2 border border-green-500/30 relative">
                                <div className="text-[8px] text-green-400 text-center mb-1">AFTER</div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                                    <CheckCircle size={12} className="text-white" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg transition-colors flex gap-2 items-center">
                            <Eye size={12} className="text-purple-500" /> +200% Conversions
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                </div>


                {/* ================= SECTION 5: FINAL CTA ================= */}
                <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8b5cf6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ugly apps don't sell.</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Let's build an experience your users will rave about.
                            </p>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-10 py-4 bg-[#8b5cf6] cursor-pointer text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#7c3aed] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Get a Free Design Review
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UiUxDesign;