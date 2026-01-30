import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Copyright, 
  FileCheck, 
  CreditCard,
  UserCheck,
  ArrowRight
} from 'lucide-react';

const TrustSafety = () => {
  const guarantees = [
    {
      id: 1,
      title: "100% IP Ownership",
      description: "You paid for it, you own it. Once the final milestone is settled, all intellectual property rights and source code are transferred to you immediately.",
      icon: <Copyright size={24} />,
      color: "purple"
    },
    {
      id: 2,
      title: "Milestone-Based Payments",
      description: "We believe in fair play. Projects are broken down into milestones. You verify the progress at every stage before releasing the next payment.",
      icon: <CreditCard size={24} />,
      color: "emerald"
    },
    {
      id: 3,
      title: "Strict Confidentiality",
      description: "Your idea is your business. We are happy to sign an NDA (Non-Disclosure Agreement) before we even hear your pitch to ensure your trade secrets stay secret.",
      icon: <Lock size={24} />,
      color: "blue"
    },
    {
      id: 4,
      title: "Code Integrity",
      description: "We don't use pirated themes or insecure plugins. We write clean, documented, and secure code that you can scale without worrying about vulnerabilities.",
      icon: <FileCheck size={24} />,
      color: "orange"
    }
  ];

  // Helper for color classes (Consistent with your other pages)
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
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-6 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck size={24} className="mr-2" />
            <span className="font-semibold tracking-wide uppercase text-sm">Trust & Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Built on <span className="text-emerald-400">Trust.</span> Secured by Design.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
            We take the risk out of freelancing. Here is how we protect your money, your ideas, and your data.
          </p>
        </div>
      </section>

      {/* 2. The Guarantee Grid */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((item) => (
              <div key={item.id} className={`group bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 transition-all duration-300 ${getBorderClasses(item.color)}`}>
                <div className="flex items-start gap-6">
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${getColorClasses(item.color)}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
      <section className="py-20 px-4 bg-slate-50 dark:bg-zinc-900/50 transition-colors border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            Our Community Guidelines
          </h2>
          
          <div className="space-y-6">
            {/* Policy 1 */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <UserCheck className="text-blue-500" size={24} />
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white">Zero Tolerance for Spam</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 ml-9">
                We respect your inbox. Yandu will never sell your contact details to third parties or spam you with irrelevant offers. All communication is strictly project-related.
              </p>
            </div>

            {/* Policy 2 */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <ShieldCheck className="text-emerald-500" size={24} />
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white">Payment Protection</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 ml-9">
                All payments are processed through secure gateways. We do not store your credit card information on our servers. Invoices are generated for every transaction for tax transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 px-4 text-center bg-white dark:bg-zinc-950 transition-colors border-t border-slate-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Have more questions?</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            Read our full Help Centre articles or chat with us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/helpCentre" 
              className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-900 dark:text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Visit Help Centre
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:shadow-slate-200 dark:hover:shadow-emerald-500/20"
            >
              Contact Support <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrustSafety;