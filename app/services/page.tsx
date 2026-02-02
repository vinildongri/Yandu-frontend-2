"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  { title: "Web & App Development", image: "/servicesPics/webDev.jpg", href: "/services/web-app-dev" },
  { title: "API & Backend Systems", image: "/servicesPics/api.jpg", href: "/services/api-backend-dev" },
  { title: "Video Editing", image: "/servicesPics/videoEditing.jpg", href: "/services/video-editing" },
  { title: "Logo Design", image: "/servicesPics/logo.jpg", href: "/services/logo-design" },
  { title: "Optimization & Security", image: "/servicesPics/security.jpg", href: "/services/security" },
  { title: "Social Media Strategy", image: "/servicesPics/socialMedia.jpg", href: "/services/social-media" },
  { title: "Graphic Design", image: "/servicesPics/graphic.jpg", href: "/services/graphic-design" },
  { title: "Database Management", image: "/servicesPics/dataBase.jpg", href: "/services/database" },
  {title: "UI/UX Design", image:"/servicesPics/uiUxDesign.jpg", href: "/services/ui-ux-design"}
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">
      
      {/* 1. Header Section */}
      <section className="pt-24 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">Yandu Solutions</span>
            <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            All Services
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A complete ecosystem of digital tools designed to scale your business from concept to market dominance.
          </p>
        </div>
      </section>

      {/* 2. Grid Section */}
      <section className="px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 border border-slate-200 dark:border-slate-800"
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                
                {/* Floating Glass Box */}
                <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-5 rounded-2xl flex items-center justify-between group-hover:bg-white/20 dark:group-hover:bg-black/60 transition-colors duration-300">
                  <div className="flex flex-col">
                     <h3 className="text-white text-lg font-bold leading-tight">
                        {cat.title}
                     </h3>
                     <span className="text-[10px] text-slate-300 uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Explore
                     </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

              </div>
              
              {/* Top Right Decoration */}
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                 <Sparkles size={16} className="text-[#3b82f6]" />
              </div>

            </Link>
          ))}
        </div>
      </section>
      
    </div>
  );
}