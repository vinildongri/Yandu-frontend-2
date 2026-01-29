import React from 'react';
import { ChevronRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const services = [
    "Web Development", "App Development", "API & Backend Systems",
    "Video Editing", "Logo Design", "Optimization & Security",
    "Social Media Strategy", "Graphic Design", "Database Management"
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-[#fafafa] dark:bg-[#080808] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30">

      {/* Background Architectural Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200 dark:bg-slate-900" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-slate-200 dark:bg-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* LEFT: Identity & Status */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Q1 2026
              </div>
              <h1 className="text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]">
                Have an idea?<br />
                <span className="text-slate-400">Let’s talk.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                From technical architecture to creative execution, I help brands build digital products that perform.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Direct Contact</p>
                <a href="mailto:hello@yourdomain.com" className="group text-lg font-medium flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  hello@yourdomain.com
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex gap-6">
                {['LinkedIn', 'GitHub', 'Twitter'].map((link) => (
                  <a key={link} href="#" className="text-sm font-medium text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Service-Driven Form */}
          <div className="lg:w-2/3">
            <form className="space-y-12 bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-slate-800 p-8 lg:p-16 rounded-3xl shadow-sm">

              {/* Service Selection Grid */}
              <div className="space-y-6">
                <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600 dark:text-slate-500 block">Required Services</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label key={service} className="relative flex items-center p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group">
                      <input type="checkbox" name="services" value={service} className="peer hidden" />
                      <div className="w-5 h-5 rounded-md border border-slate-200 dark:border-slate-700 mr-4 flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors">
                        <CheckCircle2 size={14} className="text-white hidden peer-checked:block" />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 peer-checked:text-slate-900 dark:peer-checked:text-white transition-colors">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Full Name</label>
                  <input
                    type="text"
                    placeholder="E.g. Alexander Ross"
                    className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Email Address</label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-800"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4">
                <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">The Brief</label>
                <textarea
                  rows={3}
                  placeholder="What are we building?"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors resize-none placeholder:text-slate-300 dark:placeholder:text-slate-800"
                ></textarea>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold cursor-pointer hover:bg-slate-600 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-500/10"
                >
                  Request Consultation
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;