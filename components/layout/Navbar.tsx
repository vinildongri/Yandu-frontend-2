import React from 'react';
import Link from "next/link";
import { ChevronDown, Code, Layout, BarChart } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    // { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      items: [
        { name: 'Web Development', icon: <Code className="w-4 h-4" />, desc: 'Custom apps & sites' },
        { name: 'UI/UX Design', icon: <Layout className="w-4 h-4" />, desc: 'User-centric interfaces' },
        { name: 'Marketing', icon: <BarChart className="w-4 h-4" />, desc: 'Growth & SEO strategies' }
      ]
    },
    // { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-10">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          <Link
            href={link.href}
            className="flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 py-2"
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            )}
            
            {/* The professional animated underline */}
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          {/* Dropdown Menu */}
          {link.hasDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-64 p-2 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800">
                {link.items?.map((item) => (
                  <button key={item.name} className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left group/item">
                    <div className="mt-1 p-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;