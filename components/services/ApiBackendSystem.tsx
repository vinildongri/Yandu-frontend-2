"use client";

import React from "react";
import {
  Server,
  Database,
  ShieldCheck,
  CheckCircle,
  Globe,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ApiBackendSystem = () => {
  const router = useRouter();

  const services = [
    {
      title: "REST & GraphQL APIs",
      desc: "Secure, scalable APIs built with Node.js, Express, and modern backend architectures.",
      icon: <Server className="text-blue-500" size={32} />,
    },
    {
      title: "Database Design",
      desc: "Optimized schema design with MongoDB, PostgreSQL, and Redis for high performance.",
      icon: <Database className="text-blue-500" size={32} />,
    },
    {
      title: "Authentication & Security",
      desc: "JWT, OAuth, role-based access control, and industry-grade security practices.",
      icon: <ShieldCheck className="text-blue-500" size={32} />,
    },
  ];

  const backendProjects = [
    {
      id: 1,
      title: "E-commerce Backend",
      tag: "Node.js · MongoDB",
      desc: "Order, payment, and inventory APIs",
    },
    {
      id: 2,
      title: "SaaS Platform APIs",
      tag: "REST · JWT",
      desc: "Multi-tenant scalable backend",
    },
    {
      id: 3,
      title: "Real-time System",
      tag: "WebSockets · Redis",
      desc: "Live notifications & messaging",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-slate-900 dark:text-gray-200 min-h-screen">

      {/* HERO */}
      <section className="bg-slate-900 dark:bg-black text-white py-24 px-4 text-center">
        <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">
          Yandu Systems
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
          API & Backend Systems
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Powerful, secure, and scalable backend solutions that fuel modern applications.
        </p>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 dark:text-white">
            What We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 hover:border-blue-500/40 transition"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKEND SOLUTIONS */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
            Backend Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {backendProjects.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-lg"
              >
                <span className="text-blue-500 text-xs font-bold uppercase">
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACKEND PRICING */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-white mb-4">
              Backend Pricing
            </h2>
            <p className="text-slate-600 dark:text-zinc-400">
              Transparent pricing for scalable backend systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* STARTER */}
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
              <h3 className="font-bold text-lg">Starter API</h3>
              <p className="text-4xl font-black mt-4 mb-6">
                $149<span className="text-xl text-slate-400">+</span>
              </p>

              <ul className="space-y-4">
                {[
                  "REST API (CRUD)",
                  "MongoDB / SQL Setup",
                  "Basic Authentication",
                  "API Documentation",
                  "1 Revision",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                    <CheckCircle size={16} className="text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PROFESSIONAL */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl transform md:-translate-y-4">
              <h3 className="font-bold text-lg opacity-80">
                Professional Backend
              </h3>
              <p className="text-4xl font-black mt-4 mb-6">
                $399<span className="text-xl opacity-60">+</span>
              </p>

              <ul className="space-y-4">
                {[
                  "Advanced REST / GraphQL APIs",
                  "JWT & Role-based Auth",
                  "Scalable Database Design",
                  "Security Best Practices",
                  "Dockerized Setup",
                  "3 Revisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ENTERPRISE */}
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex flex-col">
              <h3 className="font-bold text-lg">Enterprise / SaaS</h3>
              <p className="text-4xl font-black mt-4 mb-6 text-blue-600">
                Custom
              </p>

              <ul className="space-y-4 flex-grow">
                {[
                  "Microservices Architecture",
                  "High-load Optimization",
                  "Redis / Queues",
                  "Cloud Deployment (AWS/GCP)",
                  "Monitoring & Logging",
                  "Dedicated Support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-400">
                    <CheckCircle size={16} className="text-blue-500" /> {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/contact")}
                className="mt-8 w-full py-4 rounded-2xl border-2 border-slate-900 dark:border-white font-bold hover:bg-slate-900 hover:text-white transition"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Unified CTA */}
      <section className="px-4 text-center pb-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-950 rounded-[3.5rem] p-16 text-white shadow-4xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Globe size={200} />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Need a backend that actually performs?</h3>
          <p className="text-xl opacity-70 mb-10 max-w-xl mx-auto">Let's discuss your architecture and build a system ready for the next 1 million users.</p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-14 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            Launch Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApiBackendSystem;
