"use client";

import React from "react";
import Link from "next/link";
import { 
  Search, 
  FileText, 
  Code, 
  Rocket, 
  ArrowRight,
  Zap,
  CheckCircle
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description: "We start by listening. We discuss your business goals, target audience, and specific requirements to ensure we understand your vision perfectly.",
      icon: <Search size={24} />,
      color: "blue" 
    },
    {
      id: 2,
      title: "Strategy & Proposal",
      description: "Yandu provides a tailored roadmap. We define the tech stack (React, Node.js, Kotlin), timeline, and a transparent budget. No hidden surprises.",
      icon: <FileText size={24} />,
      color: "purple"
    },
    {
      id: 3,
      title: "Development & Iteration",
      description: "This is where the magic happens. We build your project with clean code, providing regular updates so you can review progress as we go.",
      icon: <Code size={24} />,
      color: "emerald"
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "We deploy your project to the live environment. After launch, we provide documentation and support to ensure smooth operation.",
      icon: <Rocket size={24} />,
      color: "orange"
    },
  ];

  // Helper to get color classes based on the step color
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'purple': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white';
      case 'emerald': return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white';
      case 'orange': return 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white';
      default: return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white';
    }
  };

  const getBorderClasses = (color: string) => {
     switch(color) {
      case 'purple': return 'hover:border-purple-200 dark:hover:border-purple-500/50';
      case 'emerald': return 'hover:border-emerald-200 dark:hover:border-emerald-500/50';
      case 'orange': return 'hover:border-orange-200 dark:hover:border-orange-500/50';
      default: return 'hover:border-blue-200 dark:hover:border-blue-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">
      
      {/* 1. Hero Section */}
      <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 relative z-10 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Our Process</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How We <span className="text-[#3b82f6]">Work</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From concept to code, our process is transparent, collaborative, and designed to deliver results.
            </p>
          </div>
          {/* Background Glow */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      {/* 2. Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-[#1c1f26] border-4 border-slate-300 dark:border-slate-700 rounded-full z-10 transform -translate-x-1/2 md:-translate-x-1/2 mt-8 md:mt-0 shadow-lg"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  
                  <div className={`group bg-white dark:bg-[#111318] p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 ${getBorderClasses(step.color)} hover:shadow-xl hover:shadow-blue-900/5`}>
                    
                    {/* Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(step.color)}`}>
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="px-4 text-center mt-10">
        <div className="max-w-4xl mx-auto bg-[#111318] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3b82f6] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">Ready to start your project?</h3>
                <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                  Let's turn your ideas into reality with the Yandu workflow.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/20"
                >
                  Start a Project <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;