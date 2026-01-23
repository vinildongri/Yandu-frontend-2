"use client"
import React from "react";

const Footer = () => {
  const links = {
    Product: ["About", "Team"],
    Support: ["How it works", "Trust & Safety", "Help Centre"],
    Discover: ["Guides", "Stories", "News"],
    Resources: ["Business Cost Calculator", "Startup Cities"],
    Browse: ["Freelance Services", "Freelance Services By Country", "Freelance Skills"],
  };

  return (
    <footer className="bg-[#0b1221] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Logo */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <span className="bg-white text-[#0b1221] w-8 h-8 flex items-center justify-center rounded-full text-xl">Y</span>
            YANDU
          </h2>
        </div>

        {/* Middle Section: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:underline transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <SocialLink href="#" label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </SocialLink>
            <SocialLink href="#" label="Twitter">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </SocialLink>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Yandu Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for social icons to keep code clean
// 1. Define the types for the props
interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

// 2. Apply the types to the component
const SocialLink = ({ href, children, label }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-400 hover:text-white transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </a>
);

export default Footer;