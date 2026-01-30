import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  CreditCard, 
  Settings, 
  MessageCircle, 
  FileText,
  ChevronRight,
  Mail
} from 'lucide-react';

// --- Type Definitions ---
interface HelpCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'emerald' | 'orange';
}

interface FaqItem {
  question: string;
  answer: string;
}

const HelpCentre = () => {
  // --- Data ---
  const categories: HelpCategory[] = [
    {
      id: 1,
      title: "Getting Started",
      description: "Everything you need to know about onboarding, contracts, and starting your first project with Yandu.",
      icon: <BookOpen size={24} />,
      color: "blue"
    },
    {
      id: 2,
      title: "Billing & Payments",
      description: "Understand our milestone payment structure, invoices, and refund policies.",
      icon: <CreditCard size={24} />,
      color: "emerald"
    },
    {
      id: 3,
      title: "Project Management",
      description: "How we track progress, handle revisions, and communicate during the development phase.",
      icon: <Settings size={24} />,
      color: "purple"
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Guides on hosting, domain setup, and troubleshooting common issues after launch.",
      icon: <FileText size={24} />,
      color: "orange"
    }
  ];

  const faqs: FaqItem[] = [
    {
      question: "How long does a typical website take?",
      answer: "Timelines vary based on complexity. A standard portfolio site takes 1-2 weeks, while a full-stack web app may take 4-8 weeks. We provide a strict timeline in our initial proposal."
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes. We work on a milestone basis. Typically, a 30% deposit is required to kickstart the project, with the remaining balance split across key delivery milestones."
    },
    {
      question: "What if I need changes after the project is done?",
      answer: "We offer a 14-day support period after launch for bug fixes. For new features or design changes, we can set up a separate maintenance contract or charge an hourly rate."
    },
    {
      question: "Do you provide hosting?",
      answer: "We don't host sites ourselves, but we will help you set up your hosting account (e.g., Vercel, AWS, Hostinger) so you have full ownership and control."
    }
  ];

  // --- Helper Functions ---
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
    <div className="font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* 1. Hero Section (No Search Bar) */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Browse our guides below or contact our support team directly.
          </p>
        </div>
      </section>

      {/* 2. Topic Categories */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-950 transition-colors -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className={`group bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-zinc-800 cursor-pointer transition-all duration-300 ${getBorderClasses(cat.color)} hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${getColorClasses(cat.color)}`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center text-xs font-semibold text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  View Articles <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top FAQs Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-zinc-900/50 transition-colors border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700/50 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                  <span className="text-blue-500 mt-1"><MessageCircle size={18} /></span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Footer */}
      <section className="py-20 px-4 text-center bg-white dark:bg-zinc-950 transition-colors border-t border-slate-100 dark:border-zinc-800">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 mb-6">
            <Mail size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Still stuck?</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HelpCentre;