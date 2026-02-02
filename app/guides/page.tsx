"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  Hash,
  BookOpen,
  Filter
} from "lucide-react";
import { useRouter } from "next/navigation";

// --- 1. Types & Data ---

interface Guide {
  id: string;
  title: string;
  excerpt: string;
  category: "Development" | "Creative" | "Strategy" | "Database";
  readTime: string;
  date: string;
  tag: string;
}

const CATEGORIES = ["All", "Development", "Database", "Creative", "Strategy"];

const guidesData: Guide[] = [
  {
    id: "web-app-dev",
    title: "Web Development: Why Speed Matters",
    excerpt: "How we optimize React and Next.js sites to load under 2 seconds for better SEO.",
    category: "Development",
    tag: "Web Development",
    readTime: "4 min",
    date: "Jan 28, 2026",
  },
  {
    id: "/video-editing",
    title: "Short-Form Video Strategy",
    excerpt: "How to edit engaging Reels and Shorts that drive social media growth.",
    category: "Creative",
    tag: "Video Editing",
    readTime: "6 min",
    date: "Jan 15, 2026",
  },
  {
    id: "/web-app-dev",
    title: "Mobile App: Cross-Platform vs Native",
    excerpt: "Choosing between Kotlin/Swift and Flutter/React Native for your next app.",
    category: "Development",
    tag: "App Development",
    readTime: "8 min",
    date: "Jan 10, 2026",
  },
  {
    id: "/api-backend-dev",
    title: "Securing Your Backend API",
    excerpt: "Essential security practices we implement for every Node.js and Python backend.",
    category: "Development",
    tag: "API & Security",
    readTime: "7 min",
    date: "Jan 20, 2026",
  },
  {
    id: "/logo-design",
    title: "The 2026 Logo Design Trends",
    excerpt: "Minimalism vs. Abstract: What works best for startup branding this year.",
    category: "Creative",
    tag: "Logo Design",
    readTime: "5 min",
    date: "Jan 25, 2026",
  },
  {
    id: "/social-media",
    title: "Social Media Growth Hacks",
    excerpt: "Organic strategies to grow your brand presence without breaking the bank.",
    category: "Strategy",
    tag: "Social Media",
    readTime: "5 min",
    date: "Jan 05, 2026",
  },
  {
    id: "/database",
    title: "SQL vs NoSQL: Choosing the Right Database",
    excerpt: "When to use PostgreSQL vs MongoDB for your startup's data architecture.",
    category: "Database",
    tag: "Database Management",
    readTime: "9 min",
    date: "Jan 26, 2026",
  },
  {
    id: "/ui-ux-design",
    title: "The Psychology of UI/UX",
    excerpt: "Understanding how color, spacing, and micro-interactions influence user decisions.",
    category: "Creative",
    tag: "UI/UX Design",
    readTime: "7 min",
    date: "Jan 29, 2026",
  },
  {
    id: "/graphic-design",
    title: "Visual Storytelling in Graphic Design",
    excerpt: "How typography, color theory, and layout work together to communicate powerful brand messages.",
    category: "Creative",
    tag: "Graphic Design",
    readTime: "6 min",
    date: "Jan 29, 2026",
  },
  {
    id: "/optimization-security",
    title: "Optimization & Security: Building Fast and Safe Applications",
    excerpt: "How performance optimization and security best practices work together to create reliable, scalable user experiences.",
    category: "Development",
    tag: "Optimization & Security",
    readTime: "9 min",
    date: "Jan 29, 2026",
  },

];

// --- 2. Sub-Components ---

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/services/${guide.id}`} className="group block h-full">
      <div className="h-full border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 bg-white dark:bg-[#111318] hover:border-[#3b82f6] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">

        {/* Top Tag */}
        <div className="flex justify-between items-start mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800/50">
            <Hash size={10} /> {guide.tag}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
            <ArrowRight size={16} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#3b82f6] transition-colors">
            {guide.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
            {guide.excerpt}
          </p>
        </div>

        {/* Meta Footer */}
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#3b82f6]" />
            {guide.date}
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#3b82f6]" />
            {guide.readTime}
          </div>
        </div>

      </div>
    </Link>
  );
}

// --- 3. Main Component ---

const Guides = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const filteredGuides = guidesData.filter((guide) => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">

      {/* Hero Section */}
      <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Yandu Knowledge Base</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights & <span className="text-[#3b82f6]">Strategy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deep dives into Web Architecture, App Development, Database Management, and Brand Strategy.
          </p>
        </div>
        {/* Background Glow */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-slate-50/80 dark:bg-[#1c1f26]/80 backdrop-blur-md py-6 border-b border-slate-200 dark:border-slate-800 mb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-2 text-slate-400 dark:text-slate-600 hidden md:block"><Filter size={16} /></span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 cursor-pointer rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border ${selectedCategory === cat
                    ? "bg-[#3b82f6] text-white border-[#3b82f6] shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-[#111318] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[#3b82f6] hover:text-[#3b82f6]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <BookOpen size={48} className="mb-4 opacity-20" />
            <p className="text-lg">No guides found for this category.</p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-[#111318] rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Stay ahead of the curve</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Get the latest Yandu insights on tech and design delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:vinilwork88@gmail.com"
                className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full font-bold"
              >
                Contact Support
              </Link>

              <Link
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-full font-bold flex items-center gap-2 justify-center"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
};

export default Guides;