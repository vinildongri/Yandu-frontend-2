"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  CreditCard,
  Settings,
  FileText,
  ChevronRight,
  Mail,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

/* -------------------- Types -------------------- */
interface HelpCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "blue" | "purple" | "emerald" | "orange";
  href:string
}

interface FaqItem {
  question: string;
  answer: string;
}

const HelpCentre = () => {

const router = useRouter()

  const categories: HelpCategory[] = [
    {
      id: 1,
      title: "Getting Started",
      description:
        "Everything you need to know about onboarding, contracts, and starting your first project with Yandu.",
      icon: <BookOpen size={28} />,
      color: "blue",
      href: "/contact",
    },
    {
      id: 2,
      title: "Billing & Payments",
      description:
        "Understand our milestone payment structure, invoices, and refund policies.",
      icon: <CreditCard size={28} />,
      color: "emerald",
      href: "/billing-payments",
    },
    {
      id: 3,
      title: "Project Management",
      description:
        "How we track progress, handle revisions, and communicate during the development phase.",
      icon: <Settings size={28} />,
      color: "purple",
      href: "/project-management",
    },
    {
      id: 4,
      title: "Technical Support",
      description:
        "Guides on hosting, domain setup, and troubleshooting common issues after launch.",
      icon: <FileText size={28} />,
      color: "orange",
      // href: "/technical-support",
      href: "/howItWorks"
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "How long does a typical website take?",
      answer:
        "A standard portfolio site takes 1–2 weeks, while full-stack apps may take 4–8 weeks. Timelines are finalized in the proposal.",
    },
    {
      question: "Do you require a deposit?",
      answer:
        "Yes. We work on milestones. Typically, a 30% upfront deposit is required to start the project.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "We provide 14 days of post-launch support for bugs. New features can be handled via maintenance or hourly billing.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "We don’t host sites, but we help you set up platforms like Vercel, AWS, or Hostinger.",
    },
  ];

  /* -------------------- Helpers -------------------- */
  const colorMap: Record<
    HelpCategory["color"],
    { bg: string; border: string }
  > = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
      border: "hover:border-blue-300 dark:hover:border-blue-500/50",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
      border: "hover:border-purple-300 dark:hover:border-purple-500/50",
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white",
      border: "hover:border-emerald-300 dark:hover:border-emerald-500/50",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white",
      border: "hover:border-orange-300 dark:hover:border-orange-500/50",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] pb-20 transition-colors">
      {/* -------------------- Hero -------------------- */}
      <section className="bg-[#111318] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">

          <div className="inline-flex items-center justify-center gap-2 mb-0">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Support Center</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            How can we <span className="text-blue-500">help?</span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Browse guides or FAQs to quickly find answers and move forward.
          </p>
        </div>

        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 blur-[150px] opacity-10" />
      </section>

      {/* -------------------- Categories -------------------- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group bg-white dark:bg-[#111318] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl ${colorMap[cat.color].border}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorMap[cat.color].bg}`}
              >
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white">
                {cat.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {cat.description}
              </p>

              <div
              onClick={()=>router.push(cat.href)} 
              className="flex items-center cursor-pointer text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                View Guides
                <ChevronRight size={14} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- FAQ -------------------- */}
      <section className="px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111318] p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors"
            >
              <h3 className="flex gap-3 font-bold dark:text-white mb-2">
                <HelpCircle size={18} className="text-slate-400 mt-1" />
                {faq.question}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- Contact -------------------- */}
      <section className="px-4 mt-16 text-center">
        <div className="max-w-4xl mx-auto bg-[#111318] p-12 rounded-[3rem] border border-slate-800 text-white relative overflow-hidden">
          <div className="inline-flex w-16 h-16 items-center justify-center bg-blue-500/20 rounded-2xl mb-6">
            <Mail size={32} className="text-blue-500" />
          </div>

          <h3 className="text-4xl font-bold mb-4">Still stuck?</h3>
          <p className="text-slate-400 mb-8">
            Reach out directly and we’ll help you out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:vinilwork88@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full font-bold"
            >
              Contact Support
            </Link>

            <Link
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-full font-bold flex items-center gap-2 justify-center"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCentre;
