"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Target, ArrowLeft, Briefcase, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Select from 'react-select'; // <-- Import the standard searchable select

export default function CreateProjectPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // State to hold the formatted options for react-select
    const [clientOptions, setClientOptions] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        title: '', budget: '', client: '', status: 'In Progress', startDate: new Date().toISOString().split('T')[0]
    });

    // Fetch clients when the page loads and format them for the search bar
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (res.ok) {
                    const data = await res.json();
                    const users = data.users || data || [];

                    // Format the data exactly how react-select needs it: { value, label }
                    const formattedOptions = users.map((user: any) => ({
                        value: user._id,
                        label: `${user.name} (${user.email})`
                    }));

                    setClientOptions(formattedOptions);
                }
            } catch (err) {
                console.error("Failed to fetch clients:", err);
            }
        };

        fetchClients();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.client) {
            alert("Please select a client from the dropdown.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/project/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ ...formData, budget: Number(formData.budget) }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Creation Failed');

            router.push('/project-management');
            router.refresh();

        } catch (err: any) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Styling to match your Tailwind Dark/Light mode theme
    const selectStyles = {
        control: (base: any, state: any) => ({
            ...base,
            backgroundColor: 'transparent',
            borderColor: state.isFocused ? '#3b82f6' : 'transparent',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.5)' : 'none',
            padding: '4px',
            borderRadius: '1rem',
            cursor: 'pointer',
        }),
        menu: (base: any) => ({
            ...base,
            backgroundColor: '#1c1f26',
            border: '1px solid #1e293b',
            borderRadius: '1rem',
            overflow: 'hidden',
            zIndex: 50
        }),
        option: (base: any, state: any) => ({
            ...base,
            backgroundColor: state.isFocused ? '#1e293b' : 'transparent',
            color: 'white',
            cursor: 'pointer',
            padding: '12px 20px',
        }),
        singleValue: (base: any) => ({ ...base, color: 'inherit' }),
        input: (base: any) => ({ ...base, color: 'inherit' })
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-19 dark:bg-[#1c1f26] font-sans pb-20">
            <div className="bg-[#111318] text-white px-8 py-5 border-b border-slate-800">
                <div className="max-w-3xl mx-auto flex items-center gap-4">
                    <Link href="/project-management" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5 text-[#3b82f6]" />
                    </Link>
                    <Briefcase className="text-[#3b82f6] w-6 h-6" />
                    <h1 className="text-2xl font-bold tracking-tight">Deploy Contract</h1>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-6 mt-12">
                <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative">
                    <div className="space-y-8 relative z-10">

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Project Title</label>
                            <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all" placeholder="e.g. Website Redesign" />
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Budget (₹)</label>
                                <input type="number" required value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Start Date</label>
                                <input type="date" required value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all" />
                            </div>
                        </div>

                        {/* THE SEARCHABLE DROPDOWN */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Assign to Client</label>
                            <div className="w-full bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white transition-all">
                                <Select
                                    instanceId="client-search-dropdown" // Prevents hydration error
                                    options={clientOptions}
                                    styles={selectStyles}
                                    placeholder="Search or select a client..."
                                    onChange={(selectedOption: any) => setFormData({ ...formData, client: selectedOption?.value })}
                                    noOptionsMessage={() => "No clients found"}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#3b82f6] mb-3">Initial Status</label>
                            <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full px-5 py-4 bg-slate-50 dark:bg-[#1c1f26] border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#3b82f6] outline-none transition-all appearance-none">
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                    </div>

                    <div className="mt-12 flex justify-end gap-4 relative z-10">
                        <Link href="/project-management" className="px-8 py-4 text-sm font-bold uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Cancel</Link>
                        <button type="submit" disabled={isLoading} className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-10 py-4 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 disabled:opacity-50">
                            {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <Target className="w-4 h-4" />} Deploy Project
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}