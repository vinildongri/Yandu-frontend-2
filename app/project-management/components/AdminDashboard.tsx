"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit2, Calendar, User, IndianRupee, Loader2 } from 'lucide-react';

// Define the TypeScript interface based on your JSON response
interface Project {
    _id: string;
    title: string;
    status: string;
    budget: number;
    startDate: string;
    client: {
        _id: string;
        name: string;
        email: string;
    };
}

const AdminDashboard = ({ user }: { user: any }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Adjust this URL if your route is slightly different 
                // (e.g., /api/v1/admin/projects vs /projects)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/projects`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include' // CRITICAL: Required for your cookies!
                });

                if (!res.ok) throw new Error(`Failed to fetch projects. Status: ${res.status}`);

                const data = await res.json();
                // Assuming your backend returns an array directly, or an object like { projects: [...] }
                // Update this depending on if data is the array itself or nested.
                setProjects(Array.isArray(data) ? data : data.projects || []);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Helper function to color-code the status badge
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Completed': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
            case 'In Progress': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-800';
            case 'Pending': return 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-800';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Admin Workspace</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage all client contracts and deployments.</p>
                    </div>
                    <Link href="/project-management/create">
                        <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all active:scale-95">
                            <Plus className="w-4 h-4" /> Deploy Contract
                        </button>
                    </Link>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-[#3b82f6]" />
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-2xl">
                        {error}
                    </div>
                )}

                {/* Projects Grid */}
                {!isLoading && !error && projects.length === 0 && (
                    <div className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem]">
                        <p className="text-slate-500 dark:text-slate-400">No projects found. Create one to get started!</p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project._id} className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group relative">

                            {/* Status Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${getStatusStyle(project.status)}`}>
                                    {project.status}
                                </span>

                                {/* Edit Button */}
                                <Link href={`/project-management/${project._id}`}>
                                    <button className="p-2 text-slate-400 hover:text-[#3b82f6] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 truncate">
                                {project.title}
                            </h3>

                            {/* Details */}
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center text-slate-600 dark:text-slate-300">
                                    <IndianRupee className="w-4 h-4 mr-3 text-slate-400" />
                                    <span className="font-semibold text-slate-900 dark:text-white mr-1">{project.budget.toLocaleString('en-IN')}</span>
                                </div>

                                <div className="flex items-center text-slate-600 dark:text-slate-300">
                                    <User className="w-4 h-4 mr-3 text-slate-400" />
                                    <span className="truncate">{project.client.name}</span>
                                </div>

                                <div className="flex items-center text-slate-600 dark:text-slate-300">
                                    <Calendar className="w-4 h-4 mr-3 text-slate-400" />
                                    <span>{new Date(project.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;