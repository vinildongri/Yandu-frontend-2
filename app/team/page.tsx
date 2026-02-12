import React from 'react';
import { Linkedin, Twitter, Mail, Globe, PenTool, Video, User, Code, Github } from 'lucide-react';
import Link from "next/link"

const Team = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">

      {/* 1. Hero Section */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Meet The Minds</h1>
          <p className="text-xl md:text-2xl text-slate-300 dark:text-zinc-400 font-light">
            The experts behind Yandu's digital innovations.
          </p>
        </div>
      </section>

      {/* 2. Founder Spotlight (Captain's Section) */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 flex flex-col md:flex-row">

            {/* Founder Image */}
            <div className="w-full md:w-2/5 h-96 md:h-auto relative bg-slate-200 dark:bg-zinc-800">
              <img
                src="/team/vinil2.jpg"
                alt="Founder of Yandu"
                className="object-cover w-full h-full "
              />
            </div>

            {/* Founder Details */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-blue-600 dark:bg-blue-500 text-white py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest">Founder & Lead Engineer</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Vinil</h2>
              <p className="text-lg text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed italic">
                "I started Yandu with a single mission: to bridge the gap between complex backend engineering and stunning frontend design. We build systems that don't just work—they scale."
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50">MERN Stack</span>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50">Kotlin / Compose</span>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50">Node.js</span>
                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800/50">GenAI Tools</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/feed/"
                  target='_blank'
                  className="p-3 bg-slate-100 dark:bg-zinc-800 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
                  <Linkedin size={22} />
                </Link>
                <Link
                  href="https://github.com/vinildongri"
                  target='_blanck'
                  className="p-3 bg-slate-100 dark:bg-zinc-800 rounded-xl hover:bg-slate-900 dark:hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                  <Github />
                </Link>
                <Link
                  href="mailto:dongrivinil@gmail.com"
                  className="p-3 bg-slate-100 dark:bg-zinc-800 rounded-xl hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1">
                  <Mail size={22} />
                </Link>
                <Link
                  href="https://portfolio-frontend-nine-indol.vercel.app/"
                  target='_blanck'
                  className="p-3 bg-slate-100 dark:bg-zinc-800 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <User size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Specialists */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-24 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Specialists</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Yandu operates as a collective of top-tier talent covering design, video, and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Design Specialist */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all group">
              <div className="h-70 bg-purple-100 dark:bg-purple-900/20 relative overflow-hidden">
                <img
                  src="/team/pavan.jpg"
                  alt="Creative Lead"
                  className="object-cover w-full h-70 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                {/* <h3 className="text-xl font-bold text-slate-900 dark:text-white">Creative Lead</h3> */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pavan Kumar</h3>
                {/* <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Branding & UI/UX</p> */}
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Fullstack Developer</p>
                {/* <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Focuses on Logo Design and Brand Identity, ensuring every visual element aligns with the brand soul.
                </p> */}
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Web Developer → Bridges the gap between aesthetic vision and technical execution. Pavan specializes in building cohesive digital experiences, ensuring that every line of code—from the database to the user interface—stays true to the brand’s identity and soul.
                </p>
              </div>
            </div>

            {/* Video Specialist */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl dark:hover:shadow-pink-500/10 transition-all group">
              <div className="h-70 bg-pink-100 dark:bg-pink-900/20 relative overflow-hidden">
                <img
                  src="/team/joshua2.jpg"
                  alt="Media Specialist"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Joshua Sunny</h3>
                <p className="text-pink-600 dark:text-pink-400 font-semibold mb-4">Motion Graphics & Editing</p>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Visual Storyteller → Bridges the gap between technical precision and artistic emotion.
                  Joshua specializes in high-impact multimedia, blending video editing and motion graphics to turn static concepts into compelling, screen-ready narratives.
                </p>
              </div>
            </div>

            {/* Strategy Specialist */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl dark:hover:shadow-orange-500/10 transition-all group">
              <div className="h-70 bg-orange-100 dark:bg-orange-900/20 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Growth Strategist"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Growth Strategist</h3>
                <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4">SEO & Positioning</p>
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  Ensures digital products gain visibility through data-driven SEO and social media strategies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Join the Network CTA */}
      <section className="py-24 px-4 bg-white dark:bg-zinc-950 text-center transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl mb-6">
            <User className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
          <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Join the Yandu Network</h3>
          <p className="text-xl text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed">
            We are always looking for elite freelancers. If you're a master of code, design, or video, let's collaborate.
          </p>
          <Link href="/contact" className="inline-block bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all hover:shadow-slate-200 dark:hover:shadow-blue-500/20">
            Work With Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Team;