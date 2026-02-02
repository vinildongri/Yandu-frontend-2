import React from "react";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    PenTool,
    Image as ImageIcon,
    Layers,
    Printer,
    Megaphone,
    Share2,
    Monitor
} from "lucide-react";
import { useRouter } from "next/navigation";

// Helper for Section Headers (Inline for Server Component efficiency)
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ec4899] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {title}
        </h2>
    </div>
);

export default function GraphicDesign() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

            {/* ================= SECTION 1: HERO ================= */}
            {/* Optimized: CSS Animation kept, but structure flattened */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Studio</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Graphic Design</h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            We craft pixel-perfect visuals that capture attention and communicate your brand's message instantly across print and digital media.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                HIGH IMPACT
                            </div>
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-[#ec4899] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#db2777] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                            >
                                START PROJECT
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Reduced nesting */}
                    <div className="hidden md:block relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_25s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <ImageIcon size={48} className="text-[#ec4899]" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-10 bg-[#ec4899] p-3 rounded-full animate-bounce">
                            <PenTool size={20} className="text-white fill-white" />
                        </div>
                    </div>
                </div>

                {/* Static Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ec4899] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= SECTION 2: FEATURES ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <SectionHeader subtitle="The Approach" title="Visual Communication" />

                {/* Card 1: Storytelling */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] group relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Storytelling</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        More Than <br /> Just Art.
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Design is about solving problems. We use color psychology and layout hierarchy.</p>
                    <div className="w-16 h-2 bg-[#ec4899] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Layers Visual */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden group">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Composition</span>
                        <Layers size={16} className="text-[#ec4899]" />
                    </div>
                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Depth & Detail</h3>
                    </div>

                    {/* Optimized Visual: Reduced DOM depth */}
                    <div className="relative flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-500">
                        <div className="absolute w-20 h-20 bg-slate-200 dark:bg-slate-700 rounded-xl -rotate-12"></div>
                        <div className="absolute w-20 h-20 bg-slate-300 dark:bg-slate-600 rounded-xl rotate-12"></div>
                        <div className="relative w-20 h-20 bg-[#ec4899] rounded-xl flex items-center justify-center text-white shadow-lg">
                            <PenTool size={28} />
                        </div>
                    </div>
                </div>

                {/* Card 3: Formats */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] group relative overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Versatility</div>
                    <div className="text-center z-10 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Print & Digital</h3>
                        <p className="text-xs text-slate-500 mt-1">CMYK • RGB • Vector</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#ec4899] transition-colors"><Monitor size={24} /></div>
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#ec4899] transition-colors"><Printer size={24} /></div>
                    </div>
                </div>


                {/* ================= SECTION 3: PRICING ================= */}
                <SectionHeader subtitle="Investment" title="Creative Packages" />

                {/* Pricing 1 */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:border-[#ec4899] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Social Kit</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">$199</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through">$299+</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["5 Custom Post Templates", "Story Highlights Covers", "Profile Banner Design"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <CheckCircle size={16} className="text-[#ec4899]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2 */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl hover:border-[#ec4899] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ec4899] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Marketing</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ad Suite</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">$499</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Google/Meta Ad Creatives", "Email Newsletter Design", "Presentation Deck (10 slides)"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                <CheckCircle size={16} className="text-[#ec4899]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3 */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#ec4899] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec4899] to-purple-500"></div>
                    <span className="text-[10px] uppercase font-bold text-[#ec4899] mb-2 tracking-widest">Enterprise</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Retainer</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">$999</span>
                        <span className="text-sm text-slate-500">/mo</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Dedicated Graphic Designer", "Priority Turnaround (24h)", "Full Copyright Transfer"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#ec4899]" /> {item}
                            </li>
                        ))}
                    </ul>
                    {/* <Link href="/contact" className="mt-4 flex items-center gap-2 text-white font-bold hover:text-[#ec4899] transition-colors text-sm">
             Contact Us <ArrowRight size={16} />
          </Link> */}
                </div>


                {/* ================= SECTION 4: CASE STUDY ================= */}
                <SectionHeader subtitle="Portfolio" title="Recent Campaigns" />

                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#ec4899]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Featured Work</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Urban Apparel</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            A complete visual identity rollout for a streetwear brand, including posters, social assets, and lookbook.
                        </p>
                        <div className="flex items-center justify-center md:justify-start">
                            <a
                                href="mailto:vinilwork88@gmail.com"
                                className="flex items-center gap-2 text-white font-bold hover:text-[#ec4899] transition-colors"
                            >
                                Contact Us <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">
                        {/* Simple CSS Composition for visual interest */}
                        <div className="relative w-32 h-40 bg-slate-800 border border-slate-600 shadow-xl flex items-center justify-center transform rotate-6">
                            <div className="text-[#ec4899] font-black text-3xl">50%</div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center">
                            <Megaphone size={12} className="text-[#ec4899]" /> Live
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#ec4899] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                </div>


                {/* ================= SECTION 5: FINAL CTA ================= */}
                <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#ec4899] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to stand out?</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">Let's create visuals that your audience won't be able to scroll past.</p>
                            <Link
                                href="/contact"
                                className="inline-block cursor-pointer px-10 py-4 bg-[#ec4899] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#db2777] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Start Your Design
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}