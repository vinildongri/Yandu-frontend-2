import React from 'react'
import Navbar from './Navbar';
import { SunIcon } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

const Header = () => {
  return (
    // Inside Header.tsx
    <header className="transition-colors duration-300 fixed top-0 w-full z-50 bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/yandu_logo.png" alt="Yandu Logo" className="h-10 w-auto"
          />

          <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 leading-none">
            Yandu<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* <button className='text-blue-600'>
            <SunIcon />
        </button> */}

        <ThemeToggle />

      </div>
    </header>
  );
};

export default Header;
