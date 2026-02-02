"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  ArrowRight,
  Trash2,
  Smartphone,
  Server,
  Video,
  PenTool,
  ShieldCheck,
  Share2,
  Palette,
  Database,
  Layout,
  Globe,
  Check,
  Sparkles,
  ChevronRight,
  Zap
} from "lucide-react";

// --- Utility for cleaner classes ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==============================================================================
// DATA & CONFIG (Full List)
// ==============================================================================

const SERVICE_CATEGORIES = [
  {
    id: "webdev",
    title: "Web Development",
    description: "High-performance websites", // Added missing description
    icon: Globe, // FIXED: Passed Component, not JSX Element
    color: "text-emerald-500", // Added matching color theme
    bg: "bg-emerald-500/10",   // Added matching background
    options: [
      { id: "web-spa", label: "Single Page App", price: 800, desc: "Landing page, React/Next.js" },
      { id: "web-multi", label: "Multi-Page Website", price: 1500, desc: "Corporate, 5-10 pages" },
      { id: "web-mern", label: "MERN Stack System", price: 2000, desc: "Full SaaS architecture" },
      { id: "web-seo", label: "Adv. SEO Setup", price: 400, desc: "Schema, Speed, Meta tags" },
      { id: "web-cms", label: "CMS Integration", price: 600, desc: "Sanity/Strapi/WordPress" },
    ]
  },
  {
    id: "appdev",
    title: "Mobile App Dev",
    description: "iOS & Android native apps", // Added missing description
    icon: Smartphone, // FIXED: Passed Component, not JSX Element
    color: "text-emerald-500", // Added matching color theme
    bg: "bg-emerald-500/10",   // Added matching background
    options: [
      { id: "app-android", label: "Android (Kotlin)", price: 1800, desc: "Native performance" },
      { id: "app-ios", label: "iOS (Swift)", price: 2000, desc: "Native Apple ecosystem" },
      { id: "app-flutter", label: "Hybrid (Flutter)", price: 2200, desc: "iOS & Android single base" },
    ]
  },
  {
    id: "backend",
    title: "API & Backend Systems",
    description: "Scalable server infrastructure",
    icon: Server,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    options: [
      { id: "api-dev", label: "API Development", price: 700, desc: "Secure REST APIs" },
      { id: "auth", label: "Auth System", price: 400, desc: "JWT / OAuth" },
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centric interfaces",
    icon: Layout,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    options: [
      { id: "wireframes", label: "Wireframes", price: 300, desc: "User journey focused" },
      { id: "ui-design", label: "UI Design", price: 700, desc: "Modern interface" },
    ],
  },
  {
    id: "video",
    title: "Video Editing",
    description: "Engaging visual storytelling",
    icon: Video,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    options: [
      { id: "short-video", label: "Short Form Videos", price: 300, desc: "Reels / Shorts" },
      { id: "promo-video", label: "Promo Video", price: 600, desc: "Brand storytelling" },
    ],
  },
  {
    id: "logo",
    title: "Logo Design",
    description: "Memorable brand identities",
    icon: PenTool,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    options: [
      { id: "logo-basic", label: "Basic Logo", price: 200, desc: "Minimal & clean" },
      { id: "logo-brand", label: "Brand Identity", price: 450, desc: "Logo + brand kit" },
    ],
  },
  {
    id: "security",
    title: "Optimization & Security",
    description: "Speed and protection",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    options: [
      { id: "speed-opt", label: "Speed Optimization", price: 300, desc: "Performance boost" },
      { id: "security-audit", label: "Security Audit", price: 500, desc: "Vulnerability check" },
    ],
  },
  {
    id: "social",
    title: "Social Media Strategy",
    description: "Grow your audience",
    icon: Share2,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    options: [
      { id: "content-plan", label: "Content Strategy", price: 250, desc: "Growth focused plan" },
      { id: "account-setup", label: "Account Setup", price: 150, desc: "Profiles & branding" },
    ],
  },
  {
    id: "graphics",
    title: "Graphic Design",
    description: "Marketing visuals & assets",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    options: [
      { id: "social-posts", label: "Social Media Creatives", price: 200, desc: "Posts & banners" },
      { id: "marketing-design", label: "Marketing Design", price: 400, desc: "Ads & visuals" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    description: "Data structure & migration",
    icon: Database,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    options: [
      { id: "db-design", label: "Database Design", price: 350, desc: "Optimized structure" },
      { id: "db-migration", label: "Migration & Backup", price: 500, desc: "Secure data flow" },
    ],
  },
];

// ==============================================================================
// SUB-COMPONENTS
// ==============================================================================

const AnimatedPrice = ({ price }: { price: number }) => {
  return (
    <motion.span
      key={price}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block"
    >
      ${price.toLocaleString()}
    </motion.span>
  );
};

const ServiceCard = ({ 
  item, 
  isActive, 
  onToggle 
}: { 
  item: any; 
  isActive: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
      className={cn(
        "group relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 outline-none select-none h-full",
        isActive
          ? "border-emerald-500 bg-slate-900/5 dark:bg-emerald-500/5 shadow-md ring-1 ring-emerald-500/50"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15171e] hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-sm"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className={cn(
          "font-semibold text-sm transition-colors pr-4",
          isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"
        )}>
          {item.label}
        </h4>
        <div className={cn(
          "w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300",
          isActive ? "bg-emerald-500 border-emerald-500 scale-110" : "border-slate-300 dark:border-slate-600 group-hover:border-emerald-500/50"
        )}>
          {isActive && <Check size={12} className="text-white" strokeWidth={3} />}
        </div>
      </div>
      
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
        {item.desc}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50">
        <span className={cn(
          "font-mono font-bold transition-colors",
           isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"
        )}>
          ${item.price}
        </span>
      </div>
    </div>
  );
};

// ==============================================================================
// MAIN COMPONENT
// ==============================================================================

const ServiceCalculator = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedItems = useMemo(() => 
    SERVICE_CATEGORIES.flatMap((cat) =>
      cat.options.filter((opt) => selectedIds.includes(opt.id))
    ), [selectedIds]);

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-emerald-500/20">
      
      {/* HEADER SECTION */}
      <header className="relative overflow-hidden bg-[#0f172a] pt-24 pb-32 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={12} />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Build Your Dream Project
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Select the services you need to get an instant estimated quote. 
              No hidden fees, fully transparent.
            </p>
          </motion.div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 mb-32 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          
          {/* LEFT COLUMN: OPTIONS */}
          <div className="flex-1 space-y-8">
            {SERVICE_CATEGORIES.map((category, idx) => (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-[#111318] p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn("p-3 rounded-xl", category.bg)}>
                    <category.icon size={24} className={category.color} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.options.map((opt) => (
                    <ServiceCard
                      key={opt.id}
                      item={opt}
                      isActive={selectedIds.includes(opt.id)}
                      onToggle={() => toggleItem(opt.id)}
                    />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* RIGHT COLUMN: SUMMARY (Desktop Sticky) */}
          <div className="hidden lg:block w-[380px] shrink-0">
            <div className="sticky top-24">
              <div className="bg-[#0f172a] text-white rounded-3xl p-6 border border-slate-800 shadow-2xl overflow-hidden relative">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-800">
                    <h3 className="font-bold text-lg">Your Selection</h3>
                    {selectedItems.length > 0 && (
                      <button
                        onClick={() => setSelectedIds([])}
                        className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                      >
                        <Trash2 size={12} /> Clear
                      </button>
                    )}
                  </div>

                  {/* Scrollable List */}
                  <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    <AnimatePresence mode="popLayout">
                      {selectedItems.length === 0 ? (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="py-8 text-center"
                        >
                          <p className="text-sm text-slate-500 italic">
                            Select services to begin...
                          </p>
                        </motion.div>
                      ) : (
                        selectedItems.map((item) => (
                          <motion.div
                            layout
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            key={item.id}
                            className="flex justify-between text-sm group"
                          >
                            <span className="text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                            <span className="font-mono text-slate-400">${item.price}</span>
                          </motion.div>
                        ))
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Total & Action */}
                  <div className="bg-slate-800/50 rounded-xl p-5 backdrop-blur-md border border-slate-700/50 mb-6">
                    <div className="flex justify-between items-end">
                      <span className="text-slate-400 text-sm font-medium">Estimated Total</span>
                      <div className="text-3xl font-bold text-emerald-400">
                        <AnimatedPrice price={total} />
                      </div>
                    </div>
                  </div>

                  <Link
                    href={total > 0 ? "/contact" : "#"}
                    className={cn(
                      "w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform",
                      total > 0
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 translate-y-0"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed"
                    )}
                  >
                    <span>Finalize Quote</span>
                    <ArrowRight size={16} />
                  </Link>
                  
                  <div className="mt-6 flex justify-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1"><ShieldCheck size={12}/> Secure</div>
                    <div className="flex items-center gap-1"><Zap size={12}/> Fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MOBILE FIXED BOTTOM BAR (Visible only on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-lg border-t border-slate-800 p-4 lg:hidden z-50">
         <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400">Total Estimate</span>
              <span className="text-xl font-bold text-emerald-400">
                 <AnimatedPrice price={total} />
              </span>
            </div>
            <Link
              href="/contact"
              className={cn(
                "px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors",
                total > 0
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-500"
              )}
            >
              Next <ChevronRight size={16} />
            </Link>
         </div>
      </div>

    </div>
  );
};

export default ServiceCalculator;