"use client";

import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Copyright, 
  FileCheck, 
  CreditCard,
  UserCheck,
  ArrowRight,
  Shield,
  CheckCircle2
} from "lucide-react";

const TrustSafety = () => {
  const guarantees = [
    {
      id: 1,
      title: "100% IP Ownership",
      description: "You paid for it, you own it. Once the final milestone is settled, all intellectual property rights and source code are transferred to you immediately.",
      icon: <Copyright size={28} />,
      color: "purple"
    },
    {
      id: 2,
      title: "Milestone Payments",
      description: "We believe in fair play. Projects are broken down into milestones. You verify the progress at every stage before releasing the next payment.",
      icon: <CreditCard size={28} />,
      color: "emerald"
    },
    {
      id: 3,
      title: "Strict Confidentiality",
      description: "Your idea is your business. We are happy to sign an NDA (Non-Disclosure Agreement) before we even hear your pitch to ensure your trade secrets stay secret.",
      icon: <Lock size={28} />,
      color: "blue"
    },
    {
      id: 4,
      title: "Code Integrity",
      description: "We don't use pirated themes or insecure plugins. We write clean, documented, and secure code that you can scale without worrying about vulnerabilities.",
      icon: <FileCheck size={28} />,
      color: "orange"
    }
  ];

  // Helper for color classes
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'purple': return 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white';
      case 'emerald': return 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white';
      case 'orange': return 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white';
      default: return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white';
    }
  };

  const getBorderClasses = (color: string) => {
     switch(color) {
      case 'purple': return 'hover:border-purple-300 dark:hover:border-purple-500/50';
      case 'emerald': return 'hover:border-emerald-300 dark:hover:border-emerald-500/50';
      case 'orange': return 'hover:border-orange-300 dark:hover:border-orange-500/50';
      default: return 'hover:border-blue-300 dark:hover:border-blue-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans transition-colors duration-500 pb-20">
      
      {/* 1. Hero Section */}
      <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 relative z-10 text-center">
            
            <div className="inline-flex items-center justify-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Trust & Safety</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built on <span className="text-emerald-500">Trust.</span><br/> Secured by Design.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              We take the risk out of freelancing. Here is how we protect your money, your ideas, and your data.
            </p>
          </div>
          {/* Background Glow (Emerald Theme) */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      </div>

      {/* 2. The Guarantee Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-white dark:bg-[#111318] p-10 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 ${getBorderClasses(item.color)} hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${getColorClasses(item.color)}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Standards Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Community Guidelines</h2>
             <p className="text-slate-600 dark:text-slate-400">The standards we uphold for every client and partner.</p>
          </div>
          
          <div className="space-y-6">
            {/* Policy 1 */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors group">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <UserCheck size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zero Tolerance for Spam</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        We respect your inbox. Yandu will never sell your contact details to third parties or spam you with irrelevant offers. All communication is strictly project-related.
                    </p>
                </div>
            </div>

            {/* Policy 2 */}
            <div className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-6 hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-colors group">
                <div className="shrink-0">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Payment Protection</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        All payments are processed through secure gateways. We do not store your credit card information on our servers. Invoices are generated for every transaction for tax transparency.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Footer */}
      <section className="px-4 text-center mt-16">
        <div className="max-w-4xl mx-auto bg-[#111318] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
            {/* Background Decor (Emerald Theme) */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl text-emerald-500 mb-6">
                   <Shield size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-6">Have more questions?</h3>
                <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto">
                   Read our full Help Centre articles or chat with us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                    href="/help-centre" 
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all"
                    >
                    Visit Help Centre
                    </Link>
                    <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-emerald-500/20"
                    >
                    Start a Project <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default TrustSafety;