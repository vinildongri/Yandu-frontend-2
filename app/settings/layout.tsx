"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const pathname = usePathname();

    const navGroups = [
        {
            title: "Billing",
            items: [
                { path: '/billing-payments', label: 'Billing & payments' }
            ],
        },
        {
            title: 'User Settings',
            items: [
                { path: '/settings/contact-info', label: 'Contact Info' },
                { path: '/profile', label: 'My Profile' },
                { path: '/update-profile', label: 'Update Profile' },
                { path: '/settings/update-password', label: 'Update Password' },
                { path: '/project-management', label: 'My Projects'}
            ]
        }
    ];

    return (
        // Added dark:bg-black to the main container
        <div className="min-h-screen bg-white dark:bg-black py-10 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    {/* Added dark:text-white to the main heading */}
                    <h1 className="text-3xl font-medium text-gray-900 dark:text-white mb-8 px-4">Settings</h1>
                    <nav className="space-y-6">
                        {navGroups.map((group, groupIdx) => (
                            <div key={groupIdx}>
                                {/* Added dark:text-white to group titles */}
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3 px-4">
                                    {group.title}
                                </h2>
                                <div className="space-y-1">
                                    {group.items.map((tab) => {
                                        const isActive = pathname === tab.path;

                                        return (
                                            <Link
                                                key={tab.path}
                                                href={tab.path}
                                                className={`w-full flex items-center px-4 py-2 text-sm transition-colors text-left ${isActive
                                                    // Active state: Added dark:border-white and dark:text-white
                                                    ? 'border-l-4 border-black dark:border-white font-medium text-gray-900 dark:text-white'
                                                    // Inactive state: Added dark:text-gray-400 and dark:hover:text-white
                                                    : 'border-l-4 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                                    }`}
                                            >
                                                {tab.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 space-y-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SettingsLayout;