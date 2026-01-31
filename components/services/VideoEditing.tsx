"use client";

import React from "react";
import { Play, Film, Layers, Monitor, CheckCircle, Sparkles, ArrowRight, Hexagon } from "lucide-react";
import { useRouter } from "next/navigation";

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

// Reusing your established SectionHeader component
const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
    <div className="md:col-span-3 flex flex-col items-center justify-center text-center mt-12 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e94e66] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            {title}
        </h2>
    </div>
);

const VideoEditing = () => {
    const router = useRouter();

    const videoProjects = [
        { id: 1, title: "Yandu Showreel 2026", tag: "Business Product Ad", src: "/videos/yandu.mp4" },
        { id: 2, title: "Product Commercial", tag: "Ad", src: "/videos/product.mp4" },
        { id: 3, title: "Street Cinematography", tag: "B-Roll", src: "/videos/street.mp4" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">

            {/* ================= SECTION 1: HERO (Yandu Signature Style) ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Studios</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Post Production</h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            Cinematic precision and storytelling combined to bring your raw footage to life.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-8 py-3 bg-[#e94e66] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#d63d54] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(233,78,102,0.4)]"
                            >
                                START EDITING
                            </button>
                        </div>
                    </div>

                    {/* Decorative Visual */}
                    <div className="hidden md:flex relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <Play size={48} className="text-[#e94e66] fill-[#e94e66]" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e94e66] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>

            {/* ================= MAIN CONTENT CONTAINER ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* ================= CAPABILITIES ================= */}
                <SectionHeader subtitle="Our Skills" title="Editing Capabilities" />

                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm rounded-[2rem] p-8 flex flex-col justify-center h-[340px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Short Form</span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">Social Media Reels</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Fast-paced content optimized for Instagram, TikTok, and YouTube Shorts.</p>
                    <div className="w-16 h-2 bg-[#e94e66] rounded-full mt-auto"></div>
                </div>

                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm rounded-[2rem] p-8 flex flex-col justify-center h-[340px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Brand Story</span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">Corporate Films</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Professional showcases and brand stories with high-quality presentations.</p>
                    <div className="w-16 h-2 bg-slate-300 dark:bg-slate-700 rounded-full mt-auto"></div>
                </div>

                <div className="bg-[#111318] border border-slate-800 shadow-2xl rounded-[2rem] p-8 flex flex-col justify-center h-[340px] relative overflow-hidden group">
                    <span className="text-[10px] uppercase font-bold text-[#e94e66] mb-4 tracking-widest">Visuals</span>
                    <h2 className="text-3xl font-bold text-white leading-tight mb-2">Color & Sound</h2>
                    <p className="text-sm text-slate-400">Cinematic color correction and immersive sound design (SFX).</p>
                    <div className="absolute top-8 right-8 text-[#e94e66]"><Sparkles size={20} /></div>
                </div>

                {/* ================= SHOWREEL ================= */}
                <SectionHeader subtitle="Our Work" title="The Showreel" />

                {videoProjects.map((project) => (
                    <div key={project.id} className="relative h-[300px] bg-[#111318] rounded-[2rem] overflow-hidden border border-slate-800 group shadow-lg">
                        <video
                            src={project.src}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls // Now clickable
                        />

                        {/* Added pointer-events-none so the video underneath receives the clicks */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
                            <span className="text-[10px] font-bold text-[#e94e66] uppercase tracking-widest">
                                {project.tag}
                            </span>
                            <h3 className="text-white font-bold text-xl">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}

                {/* ================= PRICING ================= */}
                <SectionHeader subtitle="Investment" title="Pricing Plans" />

                {/* Pricing Cards - Using the same scale/style as LogoDesign */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 rounded-[2rem] p-8 flex flex-col h-[400px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter</span>
                    <h3 className="text-2xl font-bold dark:text-white mb-4">Creator Pack</h3>
                    <div className="text-5xl font-bold dark:text-white mb-8">$99</div>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#e94e66]" /> Reels & Shorts</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#e94e66]" /> Captions & Subtitles</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-[#111318] border-2 border-[#e94e66] rounded-[2rem] p-8 flex flex-col h-[400px] relative">
                    <div className="absolute top-0 right-0 bg-[#e94e66] text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Pro</span>
                    <h3 className="text-2xl font-bold dark:text-white mb-4">Pro Production</h3>
                    <div className="text-5xl font-bold dark:text-white mb-8">$299</div>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#e94e66]" /> Advanced Grading</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#e94e66]" /> Motion Graphics</li>
                        <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#e94e66]" /> 4K Render</li>
                    </ul>
                </div>

                <div className="bg-[#111318] border border-slate-800 rounded-[2rem] p-8 flex flex-col h-[400px] text-white">
                    <span className="text-[10px] uppercase font-bold text-[#e94e66] mb-2 tracking-widest">Custom</span>
                    <h3 className="text-2xl font-bold mb-4">Ads & Films</h3>
                    <div className="text-5xl font-bold mb-8">Quote</div>
                    <p className="text-slate-400 text-sm mb-6">Full brand campaigns and documentary style storytelling.</p>
                    <button onClick={() => router.push("/contact")} className="mt-auto w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-[#e94e66] hover:text-white transition-all">Contact Us</button>
                </div>

            </div>
        </div>
    );
};

export default VideoEditing;