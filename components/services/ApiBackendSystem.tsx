"use client";

import React from "react";
import { CheckCircle, ArrowRight, Server, Database, ShieldCheck, Cpu, Globe, Zap, Network } from "lucide-react";
import { useRouter } from "next/navigation";

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

const ApiBackendSystem = () => {
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
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Systems</span>
              <div className="h-px w-12 bg-slate-700"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              API & Backend
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Scalable, secure, and high-performance backend architectures that power the next generation of applications.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                99.9% UPTIME
              </div>
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-3 bg-[#3b82f6] cursor-pointer text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                BUILD SYSTEM
              </button>
            </div>
          </div>

          {/* Decorative Visual (Right Side) */}
          <div className="hidden md:flex relative z-10">
            <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                <Server size={48} className="text-[#3b82f6]" />
              </div>
            </div>
            {/* Floating Icons */}
            <div className="absolute top-0 right-10 bg-[#3b82f6] p-3 rounded-full animate-bounce">
              <Database size={20} className="text-white fill-white" />
            </div>
          </div>

        </div>

        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      </div>


      {/* ================= REST OF THE SECTIONS (Centered Container) ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        {/* ================= HEADER: ARCHITECTURE ================= */}
        <SectionHeader subtitle="Core Infrastructure" title="System Architecture" />

        {/* ================= SECTION 2: ARCHITECTURE CARDS ================= */}

        {/* Card 1: Scalability Text */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] relative overflow-hidden group">
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Scalability</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Built for <br /> Millions.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Microservices ready. Load balanced. Auto-scaling capable. We build systems that grow with you.</p>
          <div className="w-16 h-2 bg-[#3b82f6] rounded-full mt-auto"></div>
        </div>

        {/* Card 2: Server Visual */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden">
          <div className="w-full flex justify-between items-start z-10">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Uptime</span>
            <Zap size={16} className="text-[#3b82f6]" />
          </div>

          <div className="text-center z-10 mt-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">High Performance</h3>
          </div>

          {/* CSS Server Illustration */}
          <div className="relative flex flex-col items-center justify-center w-full px-4 scale-110">
            <div className="flex flex-col gap-1">
              <div className="w-32 h-6 bg-[#111318] dark:bg-[#1c1f26] rounded border border-slate-300 dark:border-slate-600 flex items-center px-2 gap-2 shadow-sm">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></div>
              </div>
              <div className="w-32 h-6 bg-[#111318] dark:bg-[#1c1f26] rounded border border-slate-300 dark:border-slate-600 flex items-center px-2 gap-2 shadow-sm">
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-75"></div>
              </div>
              <div className="w-32 h-6 bg-[#111318] dark:bg-[#1c1f26] rounded border border-slate-300 dark:border-slate-600 flex items-center px-2 gap-2 shadow-sm">
                <div className="w-1 h-1 bg-[#3b82f6] rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-4 transition-colors"></div>
          </div>
        </div>

        {/* Card 3: Security */}
        <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] shadow-sm relative group overflow-hidden">
          <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Security</div>

          <div className="text-center z-10 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bank-Grade</h3>
            <p className="text-xs text-slate-500 mt-1">JWT • OAuth • Encryption</p>
          </div>

          {/* Shield Icon */}
          <div className="w-24 h-24 bg-white dark:bg-[#111318] rounded-full flex items-center justify-center shadow-lg text-[#3b82f6] group-hover:scale-110 transition-transform duration-500">
            <ShieldCheck size={40} />
          </div>
        </div>


        {/* ================= HEADER: PRICING ================= */}
        <SectionHeader subtitle="Investment" title="Backend Plans" />

        {/* ================= SECTION 3: PRICING ================= */}

        {/* Pricing 1: Starter */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Starter API</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">REST / CRUD</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$149</span>
            <span className="text-sm text-slate-600 dark:text-slate-500 line-through transition-colors">$249+</span>
          </div>

          <ul className="space-y-4 mt-auto">
            {["Node.js & Express Setup", "MongoDB / SQL Database", "Basic Authentication", "API Documentation"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400 transition-colors">
                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing 2: Professional (Mid) */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl dark:shadow-none hover:border-[#3b82f6] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#3b82f6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Pro System</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Scalable Backend</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">$399</span>
          </div>

          <ul className="space-y-4 mt-auto">
            {["Advanced REST / GraphQL", "JWT Role-Based Auth", "Redis Caching Layer", "Dockerized Deployment"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors">
                <CheckCircle size={16} className="text-[#3b82f6]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing 3: Enterprise */}
        <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#3b82f6] transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3b82f6] to-cyan-400"></div>
          <span className="text-[10px] uppercase font-bold text-[#3b82f6] mb-2 tracking-widest">Enterprise</span>
          <h3 className="text-2xl font-bold text-white mb-4">Microservices</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-white">Custom</span>
          </div>

          <ul className="space-y-4 mt-auto">
            {["Microservices Architecture", "High-Load Optimization", "Message Queues (RabbitMQ)", "AWS/GCP Cloud Setup"].map((item, i) => (
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


        {/* ================= HEADER: FEATURED ================= */}
        <SectionHeader subtitle="Case Studies" title="System Highlights" />

        {/* ================= SECTION 4: CASE STUDY ================= */}
        <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">

          <div className="z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Infrastructure Highlight</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Real-Time Core</h2>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              How we architected a WebSocket-based notification system handling 10k+ concurrent connections for a live auction platform.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="flex items-center cursor-pointer gap-2 text-white font-bold hover:text-[#3b82f6] transition-colors">
                Contact Us <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                <Network size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">15ms</h3>
                <span className="text-xs text-slate-500">Average Latency</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg transition-colors flex gap-2 items-center">
              <Zap size={12} className="text-yellow-500 fill-yellow-500" /> Live
            </div>
          </div>

          {/* Background Decor */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        {/* ================= SECTION 5: FINAL CTA ================= */}
        {/* <div className="md:col-span-3 mt-16 mb-10">
                    <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Need a robust backend?</h2>
                            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                Let's architect a secure, high-performance system that scales effortlessly with your user base.
                            </p>
                            <button
                                onClick={() => router.push("/contact")}
                                className="px-10 py-4 bg-[#3b82f6] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#2563eb] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Contact for Quotation
                            </button>
                        </div>
                    </div>
                </div> */}

      </div>
    </div>
  );
};

export default ApiBackendSystem;