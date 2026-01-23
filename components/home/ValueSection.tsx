"use client"
import React, { useState } from 'react';
import { CheckCircle2, Globe, TrendingUp, Star } from 'lucide-react';

const features = [
  {
    id: 0,
    title: "Strict Vetting Process",
    desc: "We don't just add anyone. Every freelancer undergoes a rigorous technical assessment and behavioral interview.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    id: 1,
    title: "Timezone-Aligned",
    desc: "Work seamlessly. We match you with experts who overlap with your business hours for real-time communication.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    title: "Scaled Solutions",
    desc: "Grow without limits. From solo experts to full-scale dedicated teams, our infrastructure scales dynamically.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const ValueSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl w-full mx-auto bg-white">
      
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-100 p-8 md:p-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-end">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wide uppercase border border-indigo-100">
                <Star className="w-3 h-3 fill-current" />
                Quality Guaranteed
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Empowering your vision with the world's best specialists.
            </h2>
          </div>

          <div className="flex gap-12 border-l-4 border-indigo-100 pl-8 md:mb-4 shrink-0">
            <div>
              <div className="text-4xl font-extrabold text-indigo-600">98%</div>
              <p className="text-slate-500 text-sm font-medium mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-indigo-600">24h</div>
              <p className="text-slate-500 text-sm font-medium mt-1">Avg Match Time</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: List */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-lg text-slate-600 italic mb-8 leading-relaxed">
              "Stop settling for generalists. Yandu connects you with niche experts who understand the nuances of your industry."
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                const Icon = feature.icon;
                
                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden
                      ${isActive 
                        ? `bg-indigo-50 border-indigo-200 shadow-sm` 
                        : 'bg-white border-transparent hover:bg-slate-50'
                      }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-slate-100'}`}>
                        <Icon 
                          className={`w-6 h-6 transition-colors duration-300 
                          ${isActive ? feature.color : 'text-slate-400'}`} 
                        />
                      </div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description is now always visible (no conditional rendering) */}
                    <div className="ml-[52px] mt-2">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Static Active Line to show selection */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-indigo-500 rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image Display */}
          <div className="lg:col-span-7 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none"></div>

            {/* Images */}
            {features.map((feature, index) => (
              <img
                key={feature.id}
                src={feature.image}
                alt={feature.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                  ${index === activeIndex 
                    ? 'opacity-100 scale-100 translate-x-0' 
                    : 'opacity-0 scale-105 translate-x-10'}`}
              />
            ))}

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg max-w-xs border border-white/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-1">
                {(() => {
                   const ActiveIcon = features[activeIndex].icon;
                   return <ActiveIcon className={`w-5 h-5 ${features[activeIndex].color}`} />;
                })()}
                <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                  Yandu Feature
                </span>
              </div>
              <p className="text-slate-700 font-medium animate-[fadeIn_0.3s_ease-out]">
                {features[activeIndex].title}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueSection;