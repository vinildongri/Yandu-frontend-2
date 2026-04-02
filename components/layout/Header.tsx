"use client"
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { ThemeToggle } from '../ThemeToggle';
import { useRouter, usePathname } from 'next/navigation'; // 1. Import usePathname
import { HelpCircle, LogOut, Menu, Settings, User, X } from 'lucide-react';
import toast from 'react-hot-toast';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname(); // 2. Get the current path
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, { credentials: "include" });
        if (!res.ok) return;
        const data = await res.json();
        setUser(data.user);
        setIsLoggedIn(true);
      } catch (err) {
        console.log(err);
      }
    };

    checkUser();
  }, [pathname]); // re-run whenever route changes


  // Add this right below your other useState lines
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProfile(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 h-[76px] bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">

      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a className="flex items-center gap-3" href="/">
          <img src="/images/yandu_logo.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-black text-slate-800 dark:text-white">Yandu<span className="text-blue-600">.</span></h1>
        </a>

        {/* Action Right Area */}
        <div className="flex items-center gap-4">

          <div className="hidden md:block">
            <Navbar isMobile={false} />
          </div>

          {/* <ThemeToggle /> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* 3. Condition: Login/Signup for guests, Get Started (conditional) + Avatar for logged in */}
          {!isLoggedIn ? (
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => router.push("/login")}
                className="text-sm cursor-pointer font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600"
              >
                Login
              </button>

              <button
                onClick={() => router.push("/signup")}
                className="px-5 py-2.5 cursor-pointer bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all"
              >
                Sign Up
              </button>
            </div>
          ) : (
            // 1. Attached the dropdownRef here! No conditional wrapper on the main div.
            <div className="hidden sm:flex items-center gap-3 relative" ref={dropdownRef}>

              {/* 2. ONLY hide the 'Get Started' button on the contact page */}
              {pathname !== "/contact" && (
                <button
                  onClick={() => router.push("/contact")}
                  className="px-5 py-2.5 cursor-pointer bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95"
                >
                  Get Started
                </button>
              )}

              {/* Avatar (Always visible when logged in) */}
              <div
                onClick={() => setOpenProfile(!openProfile)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold cursor-pointer border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              >
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              {/* Profile Dropdown */}
              {openProfile && (
                <div className="absolute right-0 top-14 w-72 bg-white dark:bg-[#1e1e1e] shadow-2xl rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">

                  {/* Header Info */}
                  <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-semibold text-slate-900 dark:text-white truncate">{user?.name}</span>
                      <span className="text-sm text-slate-500 truncate">{user?.email}</span>
                    </div>
                  </div>

                  {/* Menu Links */}
                  <div className="flex flex-col py-2">
                    <button
                      onClick={() => {
                        router.push("/profile");
                        setOpenProfile(false);
                      }}
                      className="flex cursor-pointer items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-800/80 transition-colors"
                    >
                      <User size={18} className="text-slate-500 dark:text-slate-400" />
                      Your Profile
                    </button>

                    {/* Theme Toggle */}
                    <div className="px-3 cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-200">
                      <ThemeToggle />
                    </div>

                    <button
                      onClick={() => { router.push("/help-centre"); setIsOpen(false); }}
                      className="flex cursor-pointer items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-800/80 transition-colors"
                    >
                      <HelpCircle size={18} className="text-slate-500 dark:text-slate-400" />
                      Help
                    </button>

                    <button
                      onClick={() => {
                        router.push("/settings");
                        setOpenProfile(false);
                      }}
                      className="flex items-center cursor-pointer gap-3 w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-800/80 transition-colors"
                    >
                      <Settings size={18} className="text-slate-500 dark:text-slate-400" />
                      Account Settings
                    </button>

                    <div className="h-px bg-gray-200 dark:bg-gray-800 my-1"></div>

                    <button
                      onClick={async () => {
                        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
                          method: "GET",
                          credentials: "include"
                        });

                        console.log(await res.json());
                        setOpenProfile(false);
                        router.push("/");
                        toast.success("Logged out successfully");

                        setTimeout(() => {
                          window.location.reload();
                        }, 1500);
                      }}
                      className="flex items-center gap-3 w-full cursor-pointer text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    >
                      <LogOut size={18} />
                      Log out
                    </button>
                  </div>

                </div>
              )}

            </div>
          )}

        </div>
      </div>



      {/* --- MOBILE MENU (FULL SCREEN) --- */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] h-[100dvh] bg-white dark:bg-gray-950 px-6 py-4 flex flex-col overflow-y-auto animate-in slide-in-from-top duration-300">

          {/* 1. TOP HEADER: 'X' Button, Centered Logo, and Get Started Button */}
          <div className="relative flex items-center justify-between mb-6 min-h-[40px]">
            {/* Left: Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-800 dark:text-white p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Center: Logo (Absolutely positioned to stay dead center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-black text-slate-800 dark:text-white pointer-events-none">
              Yandu<span className="text-blue-600">.</span>
            </div>

            {/* Right: Get Started Button */}
            <div className="z-10">
              {pathname !== "/contact" && (
                <button
                  onClick={() => { router.push("/contact"); setIsOpen(false); }}
                  className="px-2 py-1.5 text-xs cursor-pointer bg-blue-600 text-white font-bold rounded-lg shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>

          {!isLoggedIn ? (
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={() => { router.push("/login"); setIsOpen(false); }}
                className="w-full py-3 border border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-slate-800 dark:text-white"
              >
                Login
              </button>
              <button
                onClick={() => { router.push("/signupPage"); setIsOpen(false); }}
                className="w-full cursor-pointer py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20"
              >
                Sign Up
              </button>
              <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />
            </div>
          ) : (
            <div className="flex flex-col flex-1 pb-8">

              {/* 2. PROFILE SECTION */}
              <div
                onClick={() => { router.push("/profile"); setIsOpen(false); }}
                className="flex items-center gap-4 py-5 border-b border-slate-200 dark:border-gray-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-900/50"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-semibold text-slate-900 dark:text-white text-lg truncate">
                    {user?.name || "Your Profile"}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>

              {/* 3. NAVIGATION LINKS */}
              <div className="flex flex-col">

                <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />

                <div className="pb-4 pt-0 flex items-center justify-between border-b border-slate-200 dark:border-gray-800" />

                <div className="py-4 flex items-center justify-between border-b border-slate-200 dark:border-gray-800">
                  {/* <span className="font-medium text-slate-800 dark:text-slate-200">Theme</span> */}
                  <ThemeToggle />
                </div>

                <button
                  onClick={() => { router.push("/settings"); setIsOpen(false); }}
                  className="w-full text-left py-4 font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-gray-800 hover:text-blue-600 transition-colors"
                >
                  Account Settings
                </button>

                <button
                  onClick={() => { router.push("/help-centre"); setIsOpen(false); }}
                  className="w-full text-left py-4 font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-gray-800 hover:text-blue-600 transition-colors"
                >
                  Help
                </button>

                <button
                  onClick={async () => {
                    try {
                      const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`,
                        {
                          method: "GET",
                          credentials: "include",
                        }
                      );

                      const data = await res.json();

                      if (res.ok) {
                        toast.success(data.message); // ✅ backend message
                        setIsOpen(false);
                        router.push("/");
                      } else {
                        toast.error(data.message || "Logout failed");
                      }
                    } catch (error) {
                      toast.error("Something went wrong");
                      console.error(error);
                    }
                  }}
                  className="w-full text-left py-4 font-medium text-red-500 hover:text-red-600 transition-colors"
                >
                  Log out
                </button>
              </div>

            </div>
          )}
        </div>
      )}

    </header>
  );
};

export default Header;