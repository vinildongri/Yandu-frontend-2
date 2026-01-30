"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    id: "webDevelopment",
    title: "Web Development: Why Speed Matters",
    excerpt: "How we optimize React and Next.js sites to load under 2 seconds for better SEO.",
    category: "Development",
    tag: "Web Development",
    readTime: "4 min read",
    date: "Jan 28, 2026",
  },
   {
    id: "2",
    title: "Mobile App: Cross-Platform vs Native",
    excerpt: "Choosing between Flutter/React Native and Swift/Kotlin for your next app.",
    category: "Development",
    tag: "App Development",
    readTime: "8 min read",
    date: "Jan 10, 2026",
  },
  {
    id: "3",
    title: "Short-Form Video Strategy",
    excerpt: "How to edit engaging Reels and Shorts that drive social media growth.",
    category: "Creative",
    tag: "Video Editing",
    readTime: "6 min read",
    date: "Jan 15, 2026",
  },
  {
    id: "4",
    title: "Securing Your Backend API",
    excerpt: "Essential security practices we implement for every Node.js and Python backend.",
    category: "Development",
    tag: "API & Security",
    readTime: "7 min read",
    date: "Jan 20, 2026",
  },
  {
    id: "5",
    title: "The 2026 Logo Design Trends",
    excerpt: "Minimalism vs. Abstract: What works best for startup branding this year.",
    category: "Creative",
    tag: "Logo Design",
    readTime: "5 min read",
    date: "Jan 25, 2026",
  },
  {
    id: "6",
    title: "Social Media Growth Hacks",
    excerpt: "Organic strategies to grow your brand presence without breaking the bank.",
    category: "Strategy",
    tag: "Social Media",
    readTime: "5 min read",
    date: "Jan 05, 2026",
  },
  {
    id: "7",
    title: "SQL vs NoSQL: Choosing the Right Database",
    excerpt: "When to use PostgreSQL vs MongoDB for your startup's data architecture.",
    category: "Database", 
    tag: "Database Management", 
    readTime: "9 min read",
    date: "Jan 26, 2026",
  },
  {
    id: "8",
    title: "The Psychology of UI/UX",
    excerpt: "Understanding how color, spacing, and micro-interactions influence user decisions.",
    category: "Creative",
    tag: "UI/UX Design",
    readTime: "7 min read",
    date: "Jan 29, 2026",
  },
];

// --- 2. Sub-Components ---

function GuideCard({ guide }: { guide: Guide }) {
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case "Development": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Database": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Creative": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Strategy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Link href={`/services/${guide.id}`} className="group block h-full">
      <div className="h-full border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
        
        {/* Header Tags */}
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(guide.category)}`}>
            {guide.tag}
          </span>
          <span className="text-xs text-gray-500">{guide.readTime}</span>
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {guide.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
          {guide.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 mt-auto">
          Read Article 
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// --- 3. Main Component ---

const Guides = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGuides = guidesData.filter((guide) => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen pt-22 bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Yandu <span className="text-blue-600">Guides</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Insights on Web, App, Database, and Strategy for your business.
        </p>
      </div>

      {/* Controls: Category Filter Only */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No guides found for this category.
          </div>
        )}
      </div>

    </div>
  );
};

export default Guides;