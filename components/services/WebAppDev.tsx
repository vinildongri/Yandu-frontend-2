"use client";

import React from "react";
import { CheckCircle, ArrowRight, Smartphone, Globe, Code, Rocket, Zap, Layout } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <div className="md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {title}
        </h2>
    </div>
);

const WebAppDev = () => {
    const router = useRouter();

    const projects = [
        {
            title: "Tic-Tac-Toe",
            desc: "A high-performance strategy game featuring real-time state management and fluid CSS animations.",
            tag: "Game X/O", src: "/products/tic-tac-toe-cover.jpg",
            href: "https://tic-tac-toe-three-ashen-57.vercel.app/"
        },
        {
            title: "NoteGen",
            desc: "AI-powered chatbot & PDF summarizer",
            tag: "GenAI / MERN", src: "/products/noteGen.jpg",
            href: "https://note-gen-frontend.vercel.app/"
        },
        {
            title: "Yandu Business",
            desc: "The official digital headquarters for Yandu, featuring high-performance service funnels.",
            tag: "Full-Stack Agency", src: "/products/business.jpg",
            href: "/"
        },
    ];

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
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Solutions</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Web & App Dev
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            Turning your ideas into high-performance digital reality with cutting-edge MERN and Native technologies.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                100% RESPONSIVE
                            </div>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-8 py-3 bg-[#3b82f6] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            >
                                START BUILDING
                            </button>
                        </div>
                    </div>

                    {/* Decorative Visual (Right Side) */}
                    <div className="hidden md:flex relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <Code size={48} className="text-[#3b82f6]" />
                            </div>
                        </div>
                        {/* Floating Icons */}
                        <div className="absolute top-0 right-10 bg-[#3b82f6] p-3 rounded-full animate-bounce">
                            <Rocket size={20} className="text-white fill-white" />
                        </div>
                    </div>

                </div>

                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= REST OF THE SECTIONS (Centered Container) ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* ================= HEADER: WORKFLOW ================= */}
                <SectionHeader subtitle="Our Process" title="Development Workflow" />

                {/* ================= SECTION 2: PROCESS CARDS ================= */}

                {/* Card 1: Discovery */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Phase 01</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        Discovery & Architecture
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Defining project scope and selecting the optimal stack (MERN / Next.js / Kotlin).</p>
                    <div className="w-16 h-2 bg-[#3b82f6] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Development Visual */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Phase 02</span>
                        <Zap size={16} className="text-[#3b82f6]" />
                    </div>

                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Agile Sprints</h3>
                    </div>

                    {/* CSS Code Illustration */}
                    <div className="relative flex flex-col items-center justify-center w-full px-4 scale-110">
                        <div className="w-32 h-24 bg-[#111318] dark:bg-[#1c1f26] rounded-xl border-4 border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-lg relative z-10 transition-colors">
                            <div className="text-[#3b82f6] font-mono text-xs">
                                {"< />"}
                            </div>
                        </div>
                        <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-4 transition-colors"></div>
                    </div>
                </div>

                {/* Card 3: Deployment */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] shadow-sm relative group overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Phase 03</div>
                    <div className="text-center z-10">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Global Launch</h3>
                        <p className="text-xs text-slate-500">Vercel • AWS • Play Store</p>
                    </div>
                    {/* Cloud Icon */}
                    <div className="mt-6 w-20 h-20 bg-white dark:bg-[#111318] rounded-full flex items-center justify-center shadow-lg text-[#3b82f6]">
                        <Globe size={32} />
                    </div>
                </div>


                {/* ================= HEADER: PRICING ================= */}
                <SectionHeader subtitle="Investment" title="Development Tiers" />

                {/* ================= SECTION 3: PRICING ================= */}

                {/* Pricing 1: Starter */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Landing Page</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$199</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through transition-colors">$299+</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["Single Page React/Next.js", "Fully Responsive UI", "SEO Optimization"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2: Full-Stack (Mid) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Dynamic</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Full-Stack App</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$599</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["MERN Stack Solution", "Admin Dashboard", "Database Integration", "User Authentication"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3: Custom / AI */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#3b82f6] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-cyan-400"></div>
                    <span className="text-[10px] uppercase font-bold text-[#3b82f6] mb-2 tracking-widest">Enterprise</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Custom / AI</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">Custom</span>
                    </div>

                    <ul className="space-y-4 mt-auto">
                        {["AI/LLM Integration", "Complex Architecture", "Cloud Infrastructure", "24/7 Priority Support"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
                            </li>
                        ))}
                    </ul>
                    {/* <button
                        onClick={() => router.push("/contact")}
                        className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                        Contact Us
                    </button> */}
                </div>


                {/* ================= HEADER: PRODUCTS ================= */}
                <SectionHeader subtitle="Portfolio" title="Developed Products" />

                {/* ================= SECTION 4: PRODUCT SHOWCASE ================= */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-[#111318] border border-slate-100 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all group">
                            <div className="h-48 bg-slate-100 dark:bg-[#1c1f26] flex items-center justify-center relative overflow-hidden">
                                <div className="text-slate-400 group-hover:scale-105 transition-transform duration-500 w-full h-full">
                                    {/* Replace with actual Image component */}
                                    <img src={project.src} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest mb-4">
                                    {project.tag}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{project.desc}</p>
                                <Link
                                    href={project.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#3b82f6] hover:underline"
                                >
                                    View Project <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


                {/* ================= SECTION 5: FINAL CTA ================= */}
                <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Interested in working with Yandu?</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Whether it's a simple landing page or a complex AI-driven application, let’s discuss how we can build your next big idea.
                            </p>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-10 py-4 bg-[#3b82f6] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Contact for Quotation
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebAppDev;