"use client";

import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Loader2, X, ShieldCheck, AlertTriangle } from "lucide-react";

const ContactForm = () => {
    const services = [
        "Web Development", "App Development", "API & Backend Systems",
        "Video Editing", "Logo Design", "Optimization & Security",
        "Social Media Strategy", "Graphic Design", "Database Management"
    ];

    interface FormData {
        name: string;
        email: string;
        mobile: string;
        company: string;
        services: string[];
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        mobile: "",
        company: "",
        services: [],
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, title: '', message: '', type: 'success' });

    const showToast = (title: string, message: string, type: 'success' | 'error') => {
        setToast({ show: true, title, message, type });
        setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleServiceChange = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send/mail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                showToast("Request Received", "We have received your details and will contact you shortly.", "success");
                setFormData({ name: '', email: '', mobile: '', company: '', services: [], message: '' });
            } else {
                showToast("Submission Failed", data.message || "Something went wrong.", "error");
            }
        } catch (error) {
            showToast("Connection Error", "Unable to reach the server.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {toast.show && (
                <div className="fixed top-6 pt-19 left-1/2 -translate-x-1/2 z-50 w-full max-w-[420px] animate-in slide-in-from-top-4 fade-in duration-300 px-4">
                    {/* Your exact toast HTML here */}
                    <div className={`relative overflow-hidden rounded-xl border p-4 shadow-2xl bg-white dark:bg-[#111] ${toast.type === 'success' ? 'border-emerald-100 dark:border-emerald-900/30' : 'border-red-100 dark:border-red-900/30'}`}>
                        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <div className="flex items-start gap-4">
                            <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-inner ${toast.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                {toast.type === 'success' ? <ShieldCheck size={20} /> : <AlertTriangle size={20} />}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm text-slate-900 dark:text-white">{toast.title}</h3>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{toast.message}</p>
                            </div>
                            <button onClick={() => setToast(prev => ({ ...prev, show: false }))} className="shrink-0 text-slate-400 hover:text-slate-900 transition-colors">
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12 bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-slate-800 p-8 lg:p-16 rounded-3xl shadow-sm">
                {/* Your exact form inputs go here */}
                <div className="space-y-6">
                    <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600 dark:text-slate-500 block">Required Services</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services.map((service) => (
                            <label key={service} className="relative flex items-center p-4 rounded-xl border border-slate-100 dark:border-slate-800/50 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group">
                                <input type="checkbox" name="services" value={service} checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} className="peer hidden" />
                                <div className="w-5 h-5 rounded-md border border-slate-200 dark:border-slate-700 mr-4 flex items-center justify-center peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-colors">
                                    <CheckCircle2 size={14} className="text-white hidden peer-checked:block" />
                                </div>
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 peer-checked:text-slate-900 dark:peer-checked:text-white transition-colors">{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2"><label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Full Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors" /></div>
                    <div className="space-y-2"><label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors" /></div>
                    <div className="space-y-2"><label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Mobile Number</label><input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors" /></div>
                    <div className="space-y-2"><label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">Company (Optional)</label><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors" /></div>
                </div>

                <div className="space-y-4">
                    <label className="text-[12px] uppercase tracking-widest font-bold text-slate-600">The Brief</label>
                    <textarea name='message' value={formData.message} onChange={handleChange} rows={3} className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-indigo-600 transition-colors resize-none"></textarea>
                </div>

                <div className="pt-4">
                    <button type="submit" disabled={loading} className="w-full sm:w-auto px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:bg-slate-600 transition-all flex items-center justify-center gap-2 group disabled:opacity-50">
                        {loading ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <>Request Consultation<ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;