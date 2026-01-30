import React from 'react';
import { Code, Terminal, Rocket, CheckCircle, ArrowRight, Zap, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const WebAppDev = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      desc: "A high-performance strategy game featuring real-time state management and fluid CSS animations.",
      tag: "Game X/O", src: "/products/tic-tac-toe-cover.jpg",
      href: "https://tic-tac-toe-three-ashen-57.vercel.app/"
    },
    {
      title: "NoteGen",
      desc: "AI-powered chatbot & PDF summarizer",
      tag: "GenAI / MERN", src: "/products/noteGen.jpg",
      href: "https://note-gen-frontend.vercel.app/"
    },
    {
      title: "Yandu Business",
      desc: "The official digital headquarters for Yandu, featuring high-performance service funnels and an integrated client inquiry system.",
      tag: "Full-Stack Agency", src: "/products/business.jpg",
      href: "/"
    },
  ];

  const router = useRouter();

  return (
    <div className="font-sans bg-white dark:bg-zinc-950 text-slate-900 dark:text-gray-200 transition-colors duration-300 min-h-screen pb-20">

      {/* 1. Hero Section */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Yandu Solutions</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">Web & App Development</h1>
          <p className="text-xl md:text-2xl text-slate-300 dark:text-zinc-400 font-light">
            Turning your ideas into high-performance digital reality.
          </p>
        </div>
      </section>

      {/* 2. Process Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Workflow</h2>
            <div className="h-px bg-slate-100 dark:bg-zinc-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {[
              { title: "1. Discovery", desc: "Consultation to define project scope, tech-stack (MERN/Next.js) & (Kotlin/Compose), and architecture." },
              { title: "2. Development", desc: "Agile sprints focused on clean code, responsiveness, and performance." },
              { title: "3. Deployment", desc: "Rigorous testing and launching on optimized platforms like Vercel or AWS for web & global app stores for android." }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 hover:border-blue-500/50 transition-all">
                <h3 className="font-bold text-xl mb-3 text-blue-600 dark:text-blue-400">{step.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-24 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Developed Products</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all group">
                <div className="h-48 bg-slate-200 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden">
                  <div className="text-slate-400 dark:text-zinc-600 group-hover:scale-110 transition-transform duration-500">
                    <img src={project.src} alt="" />
                  </div>
                </div>
                <div className="p-8">
                  <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800/50">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <Link
                    href={project.href}
                    target='_blank'
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                    View Project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Section - Buttons Removed */}
      <section className="py-24 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Investment</h2>
            <p className="text-slate-600 dark:text-zinc-400">Premium digital solutions priced for global standards.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Page */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 flex flex-col hover:border-blue-500/30 transition-colors">
              <h3 className="text-lg font-bold text-slate-700 dark:text-zinc-300">Starter</h3>
              <p className="text-4xl font-black mt-4 mb-6">$199<span className="text-4xl font-normal text-slate-400">+</span></p>
              <ul className="space-y-4 flex-grow">
                {["Single Page React/Next.js", "Fully Responsive UI", "Standard Contact Form", "SEO Optimization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                    <CheckCircle size={16} className="text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full-Stack App */}
            <div className="p-8 bg-slate-900 dark:bg-slate-800 rounded-3xl shadow-2xl transform md:-translate-y-4 relative text-white">
              <div className="absolute top-4 right-6">
                <Rocket size={24} className="text-blue-400 dark:text-blue-200 opacity-50" />
              </div>
              <h3 className="text-lg font-bold opacity-80">Full-Stack App</h3>
              <p className="text-4xl font-black mt-4 mb-6">$599<span className="text-4xl font-normal opacity-60">+</span></p>
              <ul className="space-y-4 flex-grow">
                {["Full MERN Stack Solution", "Custom Admin Dashboard", "Database Integration", "User Authentication", "API Development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm opacity-90">
                    <CheckCircle size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom/AI */}
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-zinc-800 flex flex-col hover:border-blue-500/30 transition-colors">
              <h3 className="text-lg font-bold text-slate-700 dark:text-zinc-300">Custom / AI</h3>
              <p className="text-4xl font-black mt-4 mb-6 text-blue-600 dark:text-blue-400">Custom</p>
              <ul className="space-y-4 flex-grow">
                {["Complex Architecture", "AI/LLM Integration", "Advanced PDF Processing", "Cloud Infrastructure Setup"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                    <CheckCircle size={16} className="text-blue-600" /> {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/contact")}
                className="mt-8 w-full py-4 px-6 cursor-pointer rounded-2xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-900 hover:text-white ark:hover:bg-white dark:hover:text-black transition-all duration-300 transform active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section - Unified Entry Point */}
      <section className="px-4 text-center pb-24 mt-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-950 rounded-[3.5rem] p-16 text-white shadow-4xl relative overflow-hidden">
          {/* Decorative Icon */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Globe size={200} />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in working with Yandu?
          </h3>
          <p className="text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it's a simple landing page or a complex AI-driven application,
            let’s discuss how we can build your next big idea.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-14 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Contact for Quotation
          </button>
        </div>
      </section>

    </div>
  );
};

export default WebAppDev;