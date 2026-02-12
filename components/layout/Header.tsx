"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import { ThemeToggle } from '../ThemeToggle';
import { useRouter, usePathname } from 'next/navigation'; // 1. Import usePathname
import { Menu, X } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); // 2. Get the current path
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 h-[76px] bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a className="flex items-center gap-3" href="/">
          <img src="/images/yandu_logo.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-black text-slate-800 dark:text-white">Yandu<span className="text-blue-600">.</span></h1>
        </a>

        {/* Action Right Area */}
        <div className="flex items-center gap-2">

          <div className="hidden md:block">
            <Navbar isMobile={false} />
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 3. Condition: Only show if NOT on /contact page */}
          {pathname !== "/contact" && (
            <button
              onClick={() => router.push("/contact")}
              className="hidden cursor-pointer sm:block px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95"
            >
              Get Started
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden h-70 fixed inset-x-0 top-[76px] bottom-0 z-50 bg-white dark:bg-gray-950 border-t border-slate-100 dark:border-slate-800 px-6 py-6 flex flex-col gap-6 overflow-y-auto animate-in slide-in-from-top duration-300">

          <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />

          {/* 4. Same Condition for Mobile Button */}
          {pathname !== "/contact" && (
            <button
              onClick={() => { router.push("/contact"); setIsOpen(false); }}
              className="w-full cursor-pointer py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 shrink-0 mb-8"
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;