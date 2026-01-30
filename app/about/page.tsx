import React from 'react';
import { 
  Code, 
  PenTool, 
  TrendingUp, 
  Monitor, 
  Smartphone, 
  Video, 
  Palette, 
  Shield 
} from 'lucide-react';

// Props definition for the Link component
interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ children, href, className }: LinkProps) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// Props definition for the Image component
interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => (
  <img src={src} alt={alt} className={className} />
);

const About = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 dark:bg-black text-white text-center py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            We Are <span className="text-blue-500">Yandu</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            Where Engineering Meets Creativity.
          </p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative h-64 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 ring-1 ring-black/5 dark:ring-white/10">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Yandu Workspace"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">More Than Just Code</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                At <span className="font-bold text-blue-600 dark:text-blue-400">Yandu</span>, we believe that a great digital product requires a perfect balance of logic and design.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Founded with a passion for innovation, Yandu is a full-service digital partner. 
                Whether you need a robust <strong>backend system</strong> or a <strong>logo</strong> that defines your brand identity, we handle it all under one roof.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-8">
                 <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><Monitor size={20}/></div> Web Dev
                 </div>
                 <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><Smartphone size={20}/></div> App Dev
                 </div>
                 <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400"><Video size={20}/></div> Video Editing
                 </div>
                 <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                    <div className="p-2 bg-pink-50 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400"><Palette size={20}/></div> Graphic Design
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Yandu Advantage */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-24 px-4 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">The Yandu Advantage</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              We integrate eight core disciplines to deliver a complete, high-performance product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dev Card */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Development</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Scalable Web, App, and Backend systems built for the future.</p>
              <ul className="text-xs text-left text-slate-400 dark:text-zinc-500 space-y-2">
                <li>• Custom API Systems</li>
                <li>• Full-stack Architecture</li>
              </ul>
            </div>

            {/* Stability Card */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all group">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Stability</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">High-speed optimization and rigorous security protocols.</p>
              <ul className="text-xs text-left text-slate-400 dark:text-zinc-500 space-y-2">
                <li>• Performance Tuning</li>
                <li>• Security Audits</li>
              </ul>
            </div>

            {/* Creative Card */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:border-purple-200 dark:hover:border-purple-500/50 transition-all group">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Creative</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Visual storytelling that resonates with your audience.</p>
              <ul className="text-xs text-left text-slate-400 dark:text-zinc-500 space-y-2">
                <li>• Brand Identity</li>
                <li>• UI/UX Motion</li>
              </ul>
            </div>

            {/* Growth Card */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-500/50 transition-all group">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Growth</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Data-driven strategies to scale your brand reach.</p>
              <ul className="text-xs text-left text-slate-400 dark:text-zinc-500 space-y-2">
                <li>• Market Positioning</li>
                <li>• Analytics & Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 px-4 text-center bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to build with Yandu?</h3>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Let's turn your vision into a digital reality.</p>
          <Link href="/contact" className="inline-block bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full shadow-xl transition-all hover:shadow-slate-200 dark:hover:shadow-blue-500/20">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;