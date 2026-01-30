import React from 'react';
import { Play, Film, Layers, Monitor, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const VideoEditing = () => {
    const router = useRouter();

    const services = [
        {
            title: "Social Media Reels",
            desc: "Fast-paced, high-engagement short-form content optimized for Instagram, TikTok, and YouTube Shorts.",
        },
        {
            title: "Commercial & Corporate",
            desc: "Professional brand stories, product showcases, and high-quality corporate presentations.",
        },
        {
            title: "Color Grading & SFX",
            desc: "Cinematic look-and-feel with advanced color correction and immersive sound design.",
        }
    ];

    // Data for your video grid
    const videoProjects = [
        { id: 1, title: "Yandu Showreel 2026", tag: "Business Product Ad", src: "/videos/yandu.mp4" },
        { id: 2, title: "Product Commercial", tag: "Ad", src: "/videos/product.mp4" },
        { id: 3, title: "Street Cinematography", tag: "B-Roll", src: "/videos/street.mp4" },
    ];

    return (
        <div className="font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-gray-200 transition-colors duration-300 min-h-screen pb-20">

            {/* 1. Hero Section */}
            <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Yandu Studios</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">Post-Production & Video Editing</h1>
                    <p className="text-xl md:text-2xl text-slate-300 dark:text-zinc-400 font-light">
                        Bringing your footage to life with cinematic precision.
                    </p>
                </div>
            </section>

            {/* 2. Capabilities Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What We Do</h2>
                        <div className="h-px bg-slate-100 dark:bg-zinc-800 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-blue-500/50 transition-all group">
                                {/* <div className="mb-4 transform group-hover:scale-110 transition-transform">{service.icon}</div> */}
                                <h3 className="font-bold text-xl mb-3 dark:text-blue-400">{service.title}</h3>
                                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Showreel - Fixed Small Grid */}
            <section className="bg-slate-50 dark:bg-zinc-900/50 py-10 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Our Showreel
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* 3 videos in a row */}
                    {/* 3 videos in a row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {videoProjects.map((project) => (
                            <div
                                key={project.id}
                                className="relative w-full h-[240px] md:h-[260px] lg:h-[280px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-zinc-800"
                            >
                                {/* Video */}
                                <video
                                    className="w-full h-full object-cover"
                                    src={project.src}
                                    loop autoPlay muted controls playsInline
                                />

                                {/* Overlay (IMPORTANT FIX) */}
                                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-white font-bold text-sm">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. Pricing / Packages */}
            <section className="py-10 px-4 bg-white dark:bg-zinc-950 transition-colors">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Investment</h2>
                        <p className="text-slate-600 dark:text-zinc-400">Professional editing packages tailored for global creators.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Creator Pack */}
                        <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 flex flex-col hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-slate-700 dark:text-zinc-300">Creator</h3>
                            <p className="text-4xl font-black mt-4 mb-6">$99<span className="text-4xl font-normal text-slate-400">+</span></p>
                            <ul className="space-y-4 flex-grow">
                                {["Short-form Vertical Content", "Subtitles & Captions", "Basic Color Correction", "2 Revision Rounds"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                                        <CheckCircle size={16} className="text-blue-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pro Production - Featured Card */}
                        <div className="p-8 bg-slate-900 dark:bg-slate-800 rounded-3xl shadow-2xl transform md:-translate-y-4 relative text-white">
                            <div className="absolute top-4 right-6">
                                <Film size={24} className="text-blue-400 dark:text-blue-200 opacity-50" />
                            </div>
                            <h3 className="text-lg font-bold opacity-80">Pro Production</h3>
                            <p className="text-4xl font-black mt-4 mb-6">$299<span className="text-4xl font-normal opacity-60">+</span></p>
                            <ul className="space-y-4 flex-grow">
                                {["Long-form Video Editing", "Advanced Color Grading", "Motion Graphics & VFX", "Custom Sound Design", "4K High-Bitrate Render"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                                        <CheckCircle size={16} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Custom Production */}
                        <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 flex flex-col hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-slate-700 dark:text-zinc-300">Custom / Ads</h3>
                            <p className="text-4xl font-black mt-4 mb-6 text-blue-600 dark:text-blue-400">Custom</p>
                            <ul className="space-y-4 flex-grow">
                                {["Full Brand Campaigns", "Documentary Style Editing", "Complex Multi-cam Setup", "White-label Production"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                                        <CheckCircle size={16} className="text-blue-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => router.push("/contact")}
                                className="mt-8 w-full py-4 px-6 cursor-pointer rounded-2xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform active:scale-95"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="px-4 text-center mt-10">
                <div className="max-w-4xl mx-auto bg-slate-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-500/20">
                    <h3 className="text-4xl font-bold mb-6">Ready to edit?</h3>
                    <Link href="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-full shadow-xl hover:scale-105 transition-all text-lg">
                        Get a Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default VideoEditing;