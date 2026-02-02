import React from "react";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    Zap,
    Lock,
    Globe,
    Activity,
    Search,
    Server
} from "lucide-react";

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#06b6d4] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {title}
        </h2>
    </div>
);

const OptimizationSecurity = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

            {/* ================= SECTION 1: HERO ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Ops</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Faster. Safer. <br /><span className="text-[#06b6d4]">Unbreakable.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            We optimize your digital infrastructure for sub-second load times and fortify it against modern cyber threats.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                99% SCORE
                            </div>
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-[#06b6d4] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#0891b2] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                            >
                                SECURE NOW
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Shield & Lightning */}
                    <div className="hidden md:block relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <ShieldCheck size={48} className="text-[#06b6d4]" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-10 bg-[#06b6d4] p-3 rounded-full animate-bounce">
                            <Zap size={20} className="text-white fill-white" />
                        </div>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= SECTION 2: FEATURES ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <SectionHeader subtitle="Core Services" title="Performance & Defense" />

                {/* Card 1: Speed (Text) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] group relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Velocity</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        Sub-Second <br /> Load Times.
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Google loves fast sites. We optimize code, compress assets, and configure CDNs to make your site fly.</p>
                    <div className="w-16 h-2 bg-[#06b6d4] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Security Visual (Lock) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden group">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Defense</span>
                        <Lock size={16} className="text-[#06b6d4]" />
                    </div>
                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bank-Grade Security</h3>
                    </div>

                    {/* CSS Lock Illustration */}
                    <div className="relative flex flex-col items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-500">
                        <div className="w-16 h-12 border-4 border-slate-300 dark:border-slate-600 rounded-t-full mb-[-10px]"></div>
                        <div className="w-24 h-20 bg-[#06b6d4] rounded-xl flex items-center justify-center shadow-lg relative z-10">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Card 3: SEO/Analytics */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] group relative overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Visibility</div>
                    <div className="text-center z-10 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical SEO</h3>
                        <p className="text-xs text-slate-500 mt-1">Core Web Vitals • Schema</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#06b6d4] transition-colors"><Search size={24} /></div>
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#06b6d4] transition-colors"><Activity size={24} /></div>
                    </div>
                </div>


                {/* ================= SECTION 3: PRICING ================= */}
                <SectionHeader subtitle="Investment" title="Protection Plans" />

                {/* Pricing 1: Audit */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:border-[#06b6d4] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Diagnostic</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Site Audit</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">$199</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through">$299+</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Full Security Scan", "Performance Bottleneck Report", "SEO Health Check", "Actionable Fix List"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 2: Optimization */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl hover:border-[#06b6d4] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#06b6d4] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Performance</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Speed Boost</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">$499</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Image Optimization (WebP)", "Code Minification", "CDN Setup (Cloudflare)", "Cache Configuration"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing 3: Security */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#06b6d4] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-blue-500"></div>
                    <span className="text-[10px] uppercase font-bold text-[#06b6d4] mb-2 tracking-widest">Enterprise</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Hardening</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">$999</span>
                        <span className="text-sm text-slate-500">/yr</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["DDoS Protection", "Firewall (WAF) Setup", "Malware Removal", "24/7 Uptime Monitoring"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                    {/* <Link href="/contact" className="mt-4 flex items-center gap-2 text-white font-bold hover:text-[#06b6d4] transition-colors text-sm">
                        Contact Us <ArrowRight size={16} />
                    </Link> */}
                </div>


                {/* ================= SECTION 4: CASE STUDY ================= */}
                <SectionHeader subtitle="Results" title="Optimization Impact" />

                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Case Study</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">E-Commerce Rescue</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            We reduced a Shopify store's load time from 4.2s to 0.8s, resulting in a 40% increase in conversion rate.
                        </p>
                        <a
                            href="mailto:vinilwork88@gmail.com"
                            className="flex items-center gap-2 text-white font-bold hover:text-[#06b6d4] transition-colors"
                        >
                            Contact Us <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">

                        {/* Speedometer Visual */}
                        <div className="flex items-center gap-6">
                            <div className="relative w-32 h-16 border-t-8 border-l-8 border-r-8 border-slate-600 rounded-t-full flex justify-center items-end">
                                <div className="absolute bottom-0 w-1 h-14 bg-[#06b6d4] origin-bottom transform rotate-45 transition-transform duration-1000 group-hover:rotate-[80deg]"></div>
                                <div className="w-4 h-4 bg-slate-400 rounded-full z-10 relative -mb-2"></div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white">98<span className="text-sm font-normal text-slate-500">/100</span></h3>
                                <p className="text-xs text-[#06b6d4]">Performance</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center">
                            <Zap size={12} className="text-[#06b6d4]" /> Optimized
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#06b6d4] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                </div>


                {/* ================= SECTION 5: FINAL CTA ================= */}
                <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#06b6d4] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Don't let hackers win.</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">Secure your assets and speed up your growth with Yandu Ops.</p>
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 bg-[#06b6d4] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#0891b2] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Get a Free Audit
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OptimizationSecurity;