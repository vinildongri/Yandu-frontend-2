"use client"
import React from 'react';
import Navbar from './Navbar';
import { ThemeToggle } from '../ThemeToggle';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-19 flex items-center justify-between">

        {/* Logo Section */}
        <div 
          onClick={()=>router.push("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img 
            src="/images/yandu_logo.png" alt="Yandu Logo" 
            className="h-10 w-auto " // dark:invert-[0.9] Inverts logo slightly if needed for dark mode
          />
          <h1 className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white leading-none">
            Yandu<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* Refined Navbar */}
        <Navbar />
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={ () => router.push("/contact")}
            className="hidden sm:block px-5 py-2.5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;