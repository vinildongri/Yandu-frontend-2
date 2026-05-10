import React from "react";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    Kanban,
    Clock,
    Users,
    MessageSquare,
    CalendarCheck,
    Target,
    BarChart3
} from "lucide-react";

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6366f1] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {title}
        </h2>
    </div>
);

const ProjectManagement = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

            {/* ================= SECTION 1: HERO ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Workflow</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Total Clarity. <br /><span className="text-[#6366f1]">Zero Chaos.</span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            We replace guesswork with transparent, Agile workflows. Track every milestone, sprint, and delivery in real-time.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                                AGILE CERTIFIED
                            </div>
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-[#6366f1] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#4f46e5] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                            >
                                START SPRINT
                            </Link>
                        </div>
                    </div>

                    {/* Visual: Kanban Board Illustration */}
                    <div className="hidden md:block relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                                <Target size={48} className="text-[#6366f1]" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-10 bg-[#6366f1] p-3 rounded-full animate-bounce">
                            <Kanban size={20} className="text-white fill-white" />
                        </div>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366f1] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= SECTION 2: METHODOLOGY ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <SectionHeader subtitle="How We Work" title="Agile Methodology" />

                {/* Card 1: Philosophy (Text) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] group relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Structure</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        Sprints, <br /> Not Marathons.
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We break complex projects into 2-week deliverable chunks. You see progress constantly, not just at the deadline.</p>
                    <div className="w-16 h-2 bg-[#6366f1] rounded-full mt-auto"></div>
                </div>

                {/* Card 2: Kanban Visual */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden group">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Tracking</span>
                        <Kanban size={16} className="text-[#6366f1]" />
                    </div>
                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Live Boards</h3>
                    </div>

                    {/* CSS Kanban Illustration */}
                    <div className="flex gap-2 scale-110 group-hover:scale-125 transition-transform duration-500 mt-4">
                        {/* Col 1 */}
                        <div className="w-16 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 flex flex-col gap-1">
                            <div className="h-1 w-8 bg-slate-300 dark:bg-slate-600 rounded mb-1"></div>
                            <div className="h-8 w-full bg-white dark:bg-[#1c1f26] rounded shadow-sm border border-slate-200 dark:border-slate-700"></div>
                            <div className="h-8 w-full bg-white dark:bg-[#1c1f26] rounded shadow-sm border border-slate-200 dark:border-slate-700"></div>
                        </div>
                        {/* Col 2 */}
                        <div className="w-16 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 flex flex-col gap-1">
                            <div className="h-1 w-8 bg-[#6366f1] rounded mb-1"></div>
                            <div className="h-12 w-full bg-white dark:bg-[#1c1f26] rounded shadow-sm border border-slate-200 dark:border-slate-700 border-l-2 border-l-[#6366f1]"></div>
                        </div>
                        {/* Col 3 */}
                        <div className="w-16 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 flex flex-col gap-1">
                            <div className="h-1 w-8 bg-emerald-500 rounded mb-1"></div>
                            <div className="h-8 w-full bg-white dark:bg-[#1c1f26] rounded shadow-sm border border-slate-200 dark:border-slate-700 opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Communication */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] group relative overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Access</div>
                    <div className="text-center z-10 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Direct Access</h3>
                        <p className="text-xs text-slate-500 mt-1">Slack • Discord • Email</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#6366f1] transition-colors"><MessageSquare size={24} /></div>
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#6366f1] transition-colors"><Users size={24} /></div>
                    </div>
                </div>


                {/* ================= SECTION 3: PRICING / TIERS ================= */}
                <SectionHeader subtitle="Engagement Models" title="Management Plans" />

                {/* Tier 1: Asynchronous */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:border-[#6366f1] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Standard</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Async Mgmt</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">Free</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500">with projects</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Weekly Email Updates", "Trello Board Access", "Standard Support", "Milestone Reports"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <CheckCircle size={16} className="text-[#6366f1]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tier 2: Dedicated PM */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl hover:border-[#6366f1] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#6366f1] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Recommended</div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Active</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Dedicated PM</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-slate-900 dark:text-white">$399</span>
                        <span className="text-sm text-slate-600 dark:text-slate-500 line-through">/mo</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Daily Slack/Discord Comms", "Bi-Weekly Video Syncs", "Backlog Management", "Priority Revisions"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                <CheckCircle size={16} className="text-[#6366f1]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tier 3: Fractional CTO */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#6366f1] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366f1] to-indigo-400"></div>
                    <span className="text-[10px] uppercase font-bold text-[#6366f1] mb-2 tracking-widest">Executive</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Fractional CTO</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">Custom</span>
                    </div>
                    <ul className="space-y-4 mt-auto">
                        {["Technical Roadmapping", "Vendor Management", "Code Reviews & QA", "Board-Level Reporting"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#6366f1]" /> {item}
                            </li>
                        ))}
                    </ul>
                    {/* <Link href="/contact" className="mt-4 flex items-center gap-2 text-white font-bold hover:text-[#6366f1] transition-colors text-sm">
                        Contact Us <ArrowRight size={16} />
                    </Link> */}
                </div>


                {/* ================= SECTION 4: STATS / PROOF ================= */}
                <SectionHeader subtitle="Reliability" title="Performance Metrics" />

                <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

                    <div className="z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Track Record</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">On-Time. Every Time.</h2>
                        <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                            Our structured approach has maintained a 98% on-time delivery rate across 50+ enterprise projects in 2025.
                        </p>
                        <a
                            href="mailto:vinilwork88@gmail.com"
                            className="flex items-center gap-2 text-white font-bold hover:text-[#6366f1] transition-colors"
                        >
                            Contact Us <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">

                        {/* Chart Visual */}
                        <div className="flex items-end gap-3 h-24">
                            <div className="w-8 bg-slate-800 h-[40%] rounded-t-sm"></div>
                            <div className="w-8 bg-slate-700 h-[60%] rounded-t-sm"></div>
                            <div className="w-8 bg-slate-600 h-[50%] rounded-t-sm"></div>
                            <div className="w-8 bg-[#6366f1] h-[90%] rounded-t-sm relative shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-[#6366f1]">Now</div>
                            </div>
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center">
                            <BarChart3 size={12} className="text-[#6366f1]" /> +15% Efficiency
                        </div>
                    </div>

                    {/* Background Decor */}
                    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#6366f1] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                </div>


                {/* ================= SECTION 5: FINAL CTA ================= */}
                <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6366f1] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Stop Herding Cats.</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Get a dedicated team that manages itself, so you can focus on growing your business.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 bg-[#6366f1] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#4f46e5] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectManagement;