"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522071823991-b99c223a709e?auto=format&fit=crop&w=1920&q=80",
];

const items = [
  { label: "Web Development", link: "/contact" },
  { label: "App Development", link: "/contact" },
  { label: "API & Backend", link: "/contact" },
  { label: "Video Editing", link: "/contact" },
  { label: "Logo Design", link: "/contact" },
];

const Hero = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Increased duration slightly for better UX
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-6 md:pt-10 px-4 mt-10">
      
      {/* HERO IMAGE BOX */}
      <div className="relative w-full max-w-7xl min-h-[550px] md:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl flex items-center">
        
        {/* Background Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
              index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } transition-transform duration-[4000ms]`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark Overlay - slightly heavier for better text contrast */}
        <div className="absolute inset-0 bg-blue-950/60"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-5 py-12 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl leading-tight">
            Find the perfect freelance services for your business
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-2xl">
            Connect with top-tier talent – fast, easy, and secure.
          </p>

          {/* Action Buttons - Stacked on mobile */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button className="px-8 py-3.5 bg-[#0d6efd] text-white text-md font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all active:scale-95">
              Hire a Freelancer
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-3.5 bg-green-600 text-white text-md font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all active:scale-95"
            >
              Start now for free
            </button>
          </div>

          {/* Service Tags - Smaller & scrollable on tiny screens */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.link)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-xs md:text-sm font-medium backdrop-blur-md hover:bg-white hover:text-blue-900 transition-all"
              >
                <span>{item.label}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-md flex justify-between text-[10px] md:text-xs uppercase tracking-widest text-white/70">
            <span>✓ 1M+ Projects</span>
            <span>✓ 500K+ Clients</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Video Block Section */}
      <div className="w-full flex flex-col items-center justify-center gap-8 text-center px-4 mt-20 mb-16">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success with Yandu
          </h2>
          <p className="text-md md:text-xl text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-blue-600">Visionary founders</span> trust our freelancers to build the future.
          </p>
        </div>

        {/* video container with Aspect Ratio fix */}
        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
          <video
            className="w-full h-full object-cover"
            src="/videos/yandu.mp4"
            autoPlay loop muted controls
            playsInline // Crucial for mobile autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;