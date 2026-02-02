import React from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  ArrowRight, 
  Building2, 
  MapPin, 
  Globe, 
  Users, 
  Briefcase, 
  Plane, 
  Landmark
} from "lucide-react";

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f97316] mb-2">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
      {title}
    </h2>
  </div>
);

export default function StartupCities() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

      {/* ================= SECTION 1: HERO ================= */}
      <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">
          
          <div className="max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Expansion</span>
              <div className="h-px w-12 bg-slate-700"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Local. <br/><span className="text-[#f97316]">Scale Global.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Establish your presence in the world's leading tech hubs. From virtual offices in Silicon Valley to talent acquisition in Bangalore.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                50+ LOCATIONS
              </div>
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#f97316] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                FIND YOUR CITY
              </Link>
            </div>
          </div>

          {/* Visual: City Skyline Illustration */}
          <div className="hidden md:block relative z-10">
            <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
              <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center">
                <Globe size={48} className="text-[#f97316]" />
              </div>
            </div>
            {/* Skyline Silhouette */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1 opacity-80">
                <div className="w-4 h-12 bg-[#f97316] rounded-t-sm"></div>
                <div className="w-6 h-20 bg-[#f97316] rounded-t-md"></div>
                <div className="w-5 h-16 bg-white rounded-t-sm"></div>
                <div className="w-8 h-24 bg-[#f97316] rounded-t-lg"></div>
                <div className="w-4 h-10 bg-white rounded-t-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      </div>


      {/* ================= SECTION 2: ECOSYSTEM GRID ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <SectionHeader subtitle="Infrastructure" title="The City Stack" />

        {/* Card 1: Virtual Presence (Text) */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] group relative overflow-hidden">
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest">Address</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Virtual <br /> HQ.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">Get a prestigious business address in New York, London, or Tokyo without the overhead of a physical lease.</p>
          <div className="w-16 h-2 bg-[#f97316] rounded-full mt-auto"></div>
        </div>

        {/* Card 2: Connectivity Visual */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden group">
          <div className="w-full flex justify-between items-start z-10">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Network</span>
            <MapPin size={16} className="text-[#f97316]" />
          </div>
          <div className="text-center z-10 mt-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Global Access</h3>
          </div>
          
          {/* CSS Map Node Illustration */}
          <div className="relative w-full h-32 mt-4 scale-110">
             {/* Lines */}
             <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
             <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
             
             {/* Nodes */}
             <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#f97316] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 animate-pulse"></div>
             <div className="absolute top-4 left-10 w-2 h-2 bg-slate-400 rounded-full"></div>
             <div className="absolute bottom-4 right-10 w-2 h-2 bg-slate-400 rounded-full"></div>
             <div className="absolute top-4 right-10 w-2 h-2 bg-slate-400 rounded-full"></div>
             <div className="absolute bottom-4 left-10 w-2 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>

        {/* Card 3: Talent Pools */}
        <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] group relative overflow-hidden">
          <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Talent</div>
          <div className="text-center z-10 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Local Teams</h3>
            <p className="text-xs text-slate-500 mt-1">Hire • Onboard • Comply</p>
          </div>
          
          {/* Avatar Stack */}
          <div className="flex -space-x-4">
             <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#23262f] bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">NY</div>
             <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#23262f] bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-xs font-bold">LDN</div>
             <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#23262f] bg-[#f97316] text-white flex items-center justify-center text-xs font-bold shadow-lg z-10">YOU</div>
          </div>
        </div>


        {/* ================= SECTION 3: PRICING / LOCATIONS ================= */}
        <SectionHeader subtitle="Expansion" title="Location Tiers" />

        {/* Tier 1: Digital Nomad */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:border-[#f97316] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Remote</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Nomad Pass</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-slate-900 dark:text-white">$99</span>
            <span className="text-sm text-slate-600 dark:text-slate-500 line-through">/mo</span>
          </div>
          <ul className="space-y-4 mt-auto">
            {["Virtual Business Address", "Mail Handling & Scanning", "Meeting Room Access (2h)", "Community App Access"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                <CheckCircle size={16} className="text-[#f97316]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 2: Hybrid */}
        <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl hover:border-[#f97316] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#f97316] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
          <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Startup</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">City Hub</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-slate-900 dark:text-white">$499</span>
            <span className="text-sm text-slate-600 dark:text-slate-500">/mo</span>
          </div>
          <ul className="space-y-4 mt-auto">
            {["Dedicated Desk (24/7)", "Business Registration Support", "Local Phone Number", "Networking Events"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                <CheckCircle size={16} className="text-[#f97316]" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#f97316] transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f97316] to-red-500"></div>
          <span className="text-[10px] uppercase font-bold text-[#f97316] mb-2 tracking-widest">Corporate</span>
          <h3 className="text-2xl font-bold text-white mb-4">Global HQ</h3>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl font-bold text-white">Custom</span>
          </div>
          <ul className="space-y-4 mt-auto">
            {["Private Office Suite", "Legal & Compliance Setup", "Relocation Assistance", "Multi-City Access Pass"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                <CheckCircle size={16} className="text-[#f97316]" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-4 flex items-center gap-2 text-white font-bold hover:text-[#f97316] transition-colors text-sm">
             Request Tour <ArrowRight size={16} />
          </Link>
        </div>


        {/* ================= SECTION 4: HIGHLIGHT ================= */}
        <SectionHeader subtitle="Spotlight" title="Featured Hub" />

        <div className="md:col-span-3 bg-[#111318] border border-slate-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
          
          <div className="z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f97316]"></span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">New Location</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Yandu: Austin, TX</h2>
            <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
              Our newest flagship space in the heart of Texas tech. 50,000 sqft of innovation space, podcast studios, and venture capital access.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <button className="flex items-center gap-2 text-white font-bold hover:text-[#f97316] transition-colors">
                View Gallery <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-md h-48 bg-[#1c1f26] dark:bg-[#2a2d36] border border-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 shadow-xl overflow-hidden">
             
             {/* Building Icon Visual */}
             <div className="text-[#f97316] opacity-90">
                <Building2 size={64} />
             </div>

             <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#111318] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-[10px] font-bold px-4 py-2 rounded-lg shadow-lg flex gap-2 items-center">
                <Briefcase size={12} className="text-[#f97316]" /> Open Now
             </div>
          </div>

          {/* Background Decor */}
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#f97316] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        </div>


        {/* ================= SECTION 5: FINAL CTA ================= */}
        <div className="md:col-span-3 mt-16 mb-10">
          <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f97316] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The world is your office.</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Join a network of ambitious founders building the future in cities across the globe.
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#f97316] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Membership
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}