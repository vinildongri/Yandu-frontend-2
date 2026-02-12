"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522071823991-b99c223a709e?auto=format&fit=crop&w=1920&q=80",
];

const items = [
  { label: "Web & App Development", link: "/services/web-app-dev" },
  { label: "API & Backend Systems", link: "/services/api-backend-dev" },
  { label: "Video Editing", link: "/services/video-editing" },
  { label: "Logo Design", link: "/services/logo-design" },
  { label: "Social Media", link: "/services/social-media" }
];

const Hero = () => {

  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-10 px-4 mt-10">

      {/* FIX 1: Changed height Logic 
         - Mobile: 'h-auto min-h-[500px]' (Grows with text, minimum 500px tall)
         - Desktop: 'md:h-[500px] lg:h-[600px]' (Fixed height looks cleaner on big screens)
      */}
      <div className="relative w-full max-w-7xl h-auto min-h-[500px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300">

        {/* Background Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${index === current ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/60"></div>

        {/* Content */}
        {/* FIX 2: Added 'py-12' (padding vertical) so text doesn't hit edges on mobile */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-12 text-white">
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl leading-tight">
            Find the perfect freelance services for your business
          </h1>

          <p className="mt-6 text-base md:text-xl text-gray-200 max-w-2xl font-light">
            Connect with top-tier talent in design, development, and marketing –
            fast, easy, and secure.
          </p>

          {/* Hire & Contact Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={()=> router.push("/team")}
              className="px-8 py-3 cursor-pointer bg-[#0d6efd] hover:bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
              Hire a Freelancer
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-3 cursor-pointer bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Start now for free
            </button>
          </div>

          {/* FIX 3: Added 'hidden md:flex' 
             This hides the small service tags on Mobile, because they take up too much space.
             They will reappear on Laptop/Desktop.
          */}
          <div className="mt-8 hidden md:flex flex-wrap justify-center gap-3">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => router.push(item.link)}
                className="group flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-medium text-white hover:bg-white/20 hover:border-white transition-all duration-300"
              >
                <span>{item.label}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Stats - Adjusted margin */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-white/80 font-medium tracking-wide">
            <span>✓ 1M+ Projects</span>
            <span>✓ 500K+ Clients</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Second Section (Video) */}
      <div className="w-full flex flex-col items-center justify-center gap-4 text-center px-4 mt-20 mb-10">
        <div className="w-full max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What success with Yandu looks like
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-blue-600">Visionary founders</span> turn to Yandu freelancers to bring their vision to life.
          </p>
        </div>

        <div className="relative w-full max-w-7xl h-[250px] sm:h-[360px] md:h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          <video
            className="w-full h-full object-cover"
            src="/videos/yandu.mp4"
            autoPlay loop muted controls
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;