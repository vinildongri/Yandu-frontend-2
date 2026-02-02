"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { title: "Web Development", image: "/servicesPics/webDev.jpg", href: "/services/web-app-dev" },
  { title: "App Development", image: "/servicesPics/appDev.jpg", href: "/services/api-backend-dev" },
  { title: "API & Backend Systems", image: "/servicesPics/api.jpg", href: "/services/api-backend-dev" },
  { title: "Video Editing", image: "/servicesPics/videoEditing.jpg", href: "/services/video-editing" },
  { title: "Logo Design", image: "/servicesPics/logo.jpg", href: "/services/logo-design" },
  { title: "Optimization & Security", image: "/servicesPics/security.jpg", href: "/services/optimization-security" },
  { title: "Social Media Strategy", image: "/servicesPics/socialMedia.jpg", href: "/services/social-media" },
  { title: "Graphic Design", image: "/servicesPics/graphic.jpg", href: "/services/graphic-design" },
  { title: "Database Management", image: "/servicesPics/dataBase.jpg", href: "/services/database" },
  { title: "UI/UX Design", image: "/servicesPics/uiUxDesign.jpg", href: "/services/ui-ux-design" }
];

export const ServicesPreview = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 px-6 max-w-7xl mx-auto">
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10
        bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
        bg-[size:24px_24px]"
      />

      {/* Heading + Buttons */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-purple-800">
          Most popular categories
        </h2>

        {/* Scroll buttons */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-purple-200 hover:bg-purple-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-purple-700" />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-purple-200 hover:bg-purple-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-purple-700" />
          </button>
        </div>
      </div>

      {/* Cards – Horizontal Scroll */}
      <div
        ref={scrollRef}

        className="flex gap-6 overflow-x-auto  pb-4 scroll-smooth"
      >
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={cat.href}
            className="relative h-64 min-w-[260px] sm:min-w-[280px] lg:min-w-[300px]
                       rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            {/* Glass label */}
            <div className="absolute top-4 left-4 z-10">
              <div className="border border-white/70 px-6 py-3 rounded-xl bg-white/25 backdrop-blur-md group-hover:bg-white/30 transition">
                <h3 className="relative text-white text-2xl font-semibold">
                  {cat.title}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-10">
        <Link href="/services" className="text-purple-700 font-semibold hover:underline">
          View All Services →
        </Link>
      </div>
    </section>
  );
};
