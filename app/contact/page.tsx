import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "./ContactForm"; // Import the client piece!

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project",
  description: "Get in touch with Yandu's engineering and creative teams. Let's discuss your next web, app, or digital branding project.",
}

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-[#fafafa] dark:bg-[#080808] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30">

      {/* Background Architectural Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200 dark:bg-slate-900" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-slate-200 dark:bg-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* LEFT: Identity & Status (Static Content) */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Q1 2026
              </div>
              <h1 className="text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]">
                Have an idea?<br />
                <span className="text-slate-400">Let’s talk.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                From technical architecture to creative execution, I help brands build digital products that perform.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Direct Contact</p>
                <a href="mailto:vinilwork88@gmail.com" className="group text-lg font-medium flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  vinilwork88@gmail.com
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Service-Driven Form (Client Component) */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;