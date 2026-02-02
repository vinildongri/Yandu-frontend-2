"use client";

import React from "react";
import Link from "next/link";
import { 
  Code, 
  PenTool, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Zap, 
  ArrowRight,
  Monitor,
  Smartphone,
  Video,
  Palette
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">
      
      {/* 1. Hero Section */}
      <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">
            
            {/* Left Content */}
            <div className="max-w-2xl text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Since 2024</span>
                    <div className="h-px w-12 bg-slate-700"></div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  We Are <span className="text-[#3b82f6]">Yandu</span>
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                   Where Engineering Meets Creativity. We are a full-service digital partner building the future of web, mobile, and brand identity.
                </p>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex relative z-10">
                <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                        <Cpu size={48} className="text-[#3b82f6]" />
                    </div>
                </div>
                <div className="absolute top-0 right-10 bg-[#3b82f6] p-3 rounded-full animate-bounce">
                    <Zap size={20} className="text-white fill-white" />
                </div>
            </div>

          </div>
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b82f6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      </div>

      {/* 2. Story Section (Who We Are) */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
           <div className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Yandu Workspace"
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">More Than Just Code</h2>
                 <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                    At <span className="font-bold text-[#3b82f6]">Yandu</span>, we believe that a great digital product requires a perfect balance of logic and design.
                 </p>
                 <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    Founded with a passion for innovation, we handle everything under one roof—from robust <strong className="text-slate-900 dark:text-white">backend systems</strong> to <strong className="text-slate-900 dark:text-white">brand identities</strong> that resonate.
                 </p>

                 {/* Capabilities Pills */}
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><Monitor size={18}/></div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Web Dev</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400"><Smartphone size={18}/></div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">App Dev</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"><Video size={18}/></div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Video Editing</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                        <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400"><Palette size={18}/></div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Design</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. The Yandu Advantage */}
      <section className="py-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6] mb-2 block">Our DNA</span>
             <h2 className="text-4xl font-bold text-slate-900 dark:text-white">The Yandu Advantage</h2>
             <div className="h-1 w-20 bg-[#3b82f6] mx-auto rounded-full mt-6 mb-6"></div>
             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
               We integrate core disciplines to deliver complete, high-performance products.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Dev Card */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-colors">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Development</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Scalable Web, App, and Backend systems built for the future.</p>
            </div>

            {/* Stability Card */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Stability</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">High-speed optimization and rigorous security protocols.</p>
            </div>

            {/* Creative Card */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Creative</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Visual storytelling and branding that resonates with your audience.</p>
            </div>

            {/* Growth Card */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-500/50 transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Growth</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Data-driven strategies to scale your brand reach efficiently.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="px-4 text-center mt-12 mb-10">
        <div className="max-w-4xl mx-auto bg-[#111318] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">Ready to build with Yandu?</h3>
                <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                   Let's turn your vision into a digital reality.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/20"
                >
                  Get Started Today <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;