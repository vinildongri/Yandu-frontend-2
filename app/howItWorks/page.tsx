import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  FileText, 
  Code, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

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

  // Helper to get color classes based on the step color (matching your About page distinct colors)
  const getColorClasses = (color: String) => {
    switch(color) {
      case 'purple': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white';
      case 'emerald': return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white';
      case 'orange': return 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white';
      default: return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white';
    }
  };

  const getBorderClasses = (color: String) => {
     switch(color) {
      case 'purple': return 'hover:border-purple-200 dark:hover:border-purple-500/50';
      case 'emerald': return 'hover:border-emerald-200 dark:hover:border-emerald-500/50';
      case 'orange': return 'hover:border-orange-200 dark:hover:border-orange-500/50';
      default: return 'hover:border-blue-200 dark:hover:border-blue-500/50';
    }
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* 1. Hero Section (Matching About Page) */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            How We <span className="text-blue-500">Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
            From concept to code, our process is transparent, collaborative, and designed to deliver results.
          </p>
        </div>
      </section>

      {/* 2. Timeline Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-zinc-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-20">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Center Dot (Hidden on mobile to use the card icon instead, or kept for structure) */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white dark:bg-zinc-950 border-4 border-slate-300 dark:border-zinc-700 rounded-full z-10 transform -translate-x-1/2 md:-translate-x-1/2 mt-8 md:mt-0"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  
                  <div className={`group bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 transition-all duration-300 ${getBorderClasses(step.color)}`}>
                    
                    {/* Icon Box */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(step.color)}`}>
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section (Matching About Page) */}
      <section className="py-24 px-4 text-center bg-slate-50 dark:bg-zinc-900/50 transition-colors border-t border-slate-100 dark:border-zinc-800/50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to start your project?</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Let's turn your ideas into reality with the Yandu workflow.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all hover:shadow-slate-200 dark:hover:shadow-blue-500/20"
          >
            Start a Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;