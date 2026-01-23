"use client";
import { CheckCircle2, Globe, Star, TrendingUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const features = [
  {
    id: 0,
    title: "Strict Vetting Process",
    desc: "We don’t just onboard. Every freelancer undergoes a rigorous technical assessment and behavioral interview.",
    icon: CheckCircle2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    id: 1,
    title: "Timezone-Aligned",
    desc: "Work seamlessly with experts whose schedules overlap with your business hours for real-time communication.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: 2,
    title: "Scaled Solutions",
    desc: "Grow without limits. From individual specialists to fully dedicated teams, our infrastructure scales with your needs.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
];

const ValueSection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-16">
          {/* Title Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wide uppercase border border-indigo-100 dark:border-indigo-800/50">
                <Star className="w-3 h-3 fill-current" />
                Quality Guaranteed
              </span>
            </div>

            <h2 className="text-4xl text-center md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-[1.1] tracking-tight">
              {/* Empowering your vision with the world's best specialists. */}
              Where your vision meets world-class expertise.
            </h2>
          </div>

          {/* Stats Section (Now Below Title) */}
          <div className="flex gap-12 border-l-4 border-indigo-100 dark:border-indigo-800 pl-6 md:pl-8">
            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                98%
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                Satisfaction Rate
              </p>
            </div>

            <div>
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                24h
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-1">
                Avg Match Time
              </p>
            </div>
          </div>
        </div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed">
              "Stop settling for generalists. Yandu connects you with niche experts
              who understand the nuances of your industry."
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-full shrink-0 ${feature.bgColor}`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-black/60 to-transparent z-10 pointer-events-none"></div>

            {features.map((feature, index) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                  ${index === activeIndex
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-105 translate-x-10"}`}
              />
            ))}

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg max-w-xs border border-white/50 dark:border-gray-700 transition-all duration-300">
              <div className="flex items-center gap-3 mb-1">
                {(() => {
                  const ActiveIcon = features[activeIndex].icon;
                  return (
                    <ActiveIcon
                      className={`w-5 h-5 ${features[activeIndex].color}`}
                    />
                  );
                })()}
                <span className="font-bold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">
                  Yandu Feature
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium animate-[fadeIn_0.3s_ease-out]">
                {features[activeIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection2;
