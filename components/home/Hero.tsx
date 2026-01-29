"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1522071823991-b99c223a709e?auto=format&fit=crop&w=1920&q=80",
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
    // CHANGE 1: Added 'flex-col' and 'items-center' to stack children vertically and center them
    <section className="w-full flex flex-col items-center pt-10 px-4 mt-10">

      {/* HERO IMAGE BOX */}
      <div className="relative w-full max-w-7xl h-[360px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">

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
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-3xl">
            Find the perfect freelance services for your business
          </h1>

          <p className="mt-4 text-gray-200 max-w-2xl">
            Connect with top-tier talent in design, development, and marketing –
            fast, easy, and secure.
          </p>

          {/* Hire & Contact Button */}
          <div>
            <button className="px-8 py-3 m-3 bg-[#0d6efd] cursor-pointer text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5">
              Hire a Freelancer
            </button>
            <button 
              onClick={()=> router.push("/contact")}
              className="px-8 py-3 m-3 bg-green-600 cursor-pointer text-white text-lg font-semibold rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Start now for free
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-white/90 font-medium">
            <span>✓ 1M+ Projects</span>
            <span>✓ 500K+ Clients</span>
            <span>✓ 24/7 Support</span>
          </div>
        </div>

      </div>


      {/* ADD Block */}
      {/* CHANGE 2: Removed 'absolute inset-0'. Added 'mt-16' for spacing. */}
      <div className="w-full flex flex-col items-center justify-center gap-4 text-center px-4 mt-16 mb-10">

        <div className="w-full max-w-7xl mx-auto px-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            What success with Yandu looks like
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-blue-600">Visionary founders</span> turn to Yandu freelancers to bring their vision to life.
          </p>
        </div>

        {/* video block */}
        <div className="relative w-full max-w-7xl h-[360px] md:h-[420px] lg:h-[580px] rounded-2xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover relative z-10"
            src="/videos/yandu.mp4"
            autoPlay loop muted controls
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;