"use client";

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Target, Loader2, Briefcase } from 'lucide-react';
import Link from 'next/link';

// 1. Update the type definition to expect a Promise
export default function UpdateProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    
    // 2. Unwrap the params Promise using React.use()
    const resolvedParams = use(params);
    const projectId = resolvedParams.id;
    
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '', budget: '', status: ''
    });

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/project/update/${projectId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: formData.title || undefined,
                    budget: formData.budget ? Number(formData.budget) : undefined,
                    status: formData.status || undefined
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to update project');

            router.push('/project-management');
            router.refresh();

        } catch (err: any) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pt-19 pb-20">
            <div className="w-full bg-[#0B1120] border-b border-slate-800 pt-8 pb-8 px-4 md:px-8">
                <div className="max-w-3xl mx-auto flex items-center gap-6">
                    <Link href="/project-management" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors"><ArrowLeft className="w-5 h-5" /></Link>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Update Sprint</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Modify Parameters</h1>
                        <p className="text-xs text-slate-500 font-mono mt-2">ID: {projectId}</p>
                    </div>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
                <form onSubmit={handleUpdate} className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-xl p-8 md:p-12 shadow-sm relative">
                    <div className="space-y-8 relative z-10">
                        <div>
                            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Update Title</label>
                            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Leave blank to keep existing" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Update Budget (₹)</label>
                            <input type="number" min="0" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Leave blank to keep existing" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Update Status</label>
                            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                <option value="">-- Keep Current Status --</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col-reverse md:flex-row justify-end gap-4 relative z-10">
                        <Link href="/project-management" className="px-8 py-4 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-center border border-slate-300 dark:border-slate-700 rounded-lg">Cancel</Link>
                        <button type="submit" disabled={isLoading} className="flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-sm disabled:opacity-50">
                            {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <Target className="w-4 h-4" />} Deploy Updates
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}