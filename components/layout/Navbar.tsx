import React from 'react';
import Link from "next/link";
import { 
  ChevronDown, 
  Code, 
  Layout, 
  BarChart, 
  Smartphone, 
  Server, 
  Video, 
  Palette, 
  ShieldCheck, 
  Share2, 
  Database 
} from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      items: [
        { name: 'Web Development', href: '/services/web-dev', icon: <Code className="w-4 h-4" />, desc: 'Custom apps & sites' },
        { name: 'App Development', href: '/services/app-dev', icon: <Smartphone className="w-4 h-4" />, desc: 'iOS & Android solutions' },
        { name: 'API & Backend Systems', href: '/services/backend', icon: <Server className="w-4 h-4" />, desc: 'Robust server architecture' },
        { name: 'Video Editing', href: '/services/video-editing', icon: <Video className="w-4 h-4" />, desc: 'Professional post-production' },
        { name: 'Logo Design', href: '/services/logo-design', icon: <Palette className="w-4 h-4" />, desc: 'Brand identity & logos' },
        { name: 'Graphic Design', href: '/services/graphic-design', icon: <Layout className="w-4 h-4" />, desc: 'Visual storytelling' },
        { name: 'Optimization & Security', href: '/services/security', icon: <ShieldCheck className="w-4 h-4" />, desc: 'Performance & protection' },
        { name: 'Social Media Strategy', href: '/services/social-media', icon: <Share2 className="w-4 h-4" />, desc: 'Growth & engagement' },
        { name: 'Database Management', href: '/services/database', icon: <Database className="w-4 h-4" />, desc: 'Data structure & storage' },
      ]
    },
    {name: "Our Team", href: "/team"},
    // {name: "Meet The Minds", href: "/team"},
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
            
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          {/* Dropdown Menu - Adjusted width to 'w-80' and 'grid' for many items */}
          {link.hasDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-[480px] p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
                {link.items?.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left group/item"
                  >
                    <div className="mt-1 p-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.name}</div>
                      <div className="text-[11px] leading-tight text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                  </Link>
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