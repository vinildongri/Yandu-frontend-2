"use client";

import React, { useEffect, useState } from 'react';
import { Calendar, IndianRupee, Loader2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

// Define the TypeScript interface for a Project
interface Project {
    _id: string;
    title: string;
    status: string;
    budget: number;
    startDate: string;
}

const ClientDashboard = ({ user }: { user: any }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMyProjects = async () => {
            try {
                // IMPORTANT: Ensure this route exists on your backend!
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/my-projects`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include' // CRITICAL: This tells the backend exactly WHICH user is asking
                });

                if (!res.ok) throw new Error(`Failed to fetch your projects. Status: ${res.status}`);

                const data = await res.json();

                // Set the projects (handles both raw array and wrapped { projects: [...] } object)
                setProjects(Array.isArray(data) ? data : data.projects || []);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMyProjects();
    }, []);

    // Helper function to color-code the status badge and add an icon
    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'Completed': return {
                style: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
                icon: <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            };
            case 'In Progress': return {
                style: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-800',
                icon: <Clock className="w-3.5 h-3.5 mr-1.5" />
            };
            case 'Pending': return {
                style: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-800',
                icon: <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
            };
            default: return {
                style: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700',
                icon: null
            };
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] pt-24 pb-20 font-sans">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Welcome back, {user?.name?.split(' ')[0] || 'Client'}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Manage, track, and view the status of your ongoing contracts.</p>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-[#3b82f6] mb-4" />
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Loading your workspace...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-2xl">
                        {error}
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !error && projects.length === 0 && (
                    <div className="text-center py-20 bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-[#3b82f6]" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Active Projects</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                            You don't have any ongoing contracts at the moment. If you recently requested a service, the Yandu team is reviewing it and will update this space soon.
                        </p>
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => {
                        const statusConfig = getStatusConfig(project.status);

                        return (
                            <div key={project._id} className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group">

                                {/* Status Badge */}
                                <div className="flex justify-start mb-5">
                                    <span className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${statusConfig.style}`}>
                                        {statusConfig.icon}
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 truncate" title={project.title}>
                                    {project.title}
                                </h3>

                                {/* Details */}
                                <div className="space-y-3 text-sm pt-4 border-t border-slate-100 dark:border-slate-800/50">
                                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                                        <span className="flex items-center text-slate-500 dark:text-slate-400">
                                            <IndianRupee className="w-4 h-4 mr-2" /> Budget
                                        </span>
                                        <span className="font-semibold text-slate-900 dark:text-white">
                                            {project.budget.toLocaleString('en-IN')}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                                        <span className="flex items-center text-slate-500 dark:text-slate-400">
                                            <Calendar className="w-4 h-4 mr-2" /> Start Date
                                        </span>
                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                            {new Date(project.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default ClientDashboard;