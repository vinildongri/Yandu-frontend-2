"use client";
import { useEffect, useState } from 'react';
import AdminDashboard from './components/AdminDashboard';
import ClientDashboard from './components/ClientDashboard';

// Tell TypeScript what to expect inside the user object
interface User {
    _id: string;
    role: string;
    name?: string;
    email?: string;
}

export default function ProjectManagementHub() {
    // Apply the User interface here
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, { credentials: 'include' });
                if (!res.ok) throw new Error("Not logged in");
                const data = await res.json();
                setUser(data.user);
            } catch (err) {
                window.location.href = '/login';
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);

    if (isLoading) return <div>Loading...</div>;

    // The red line here will now be gone!
    if (user?.role === 'admin') {
        return <AdminDashboard user={user} />;
    } else {
        return <ClientDashboard user={user} />;
    }
}