"use client"

import { useState, useEffect } from "react";

// 1. Define an Interface for your User data (based on your Postman response)
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
}

const Profile = () => {
    // 2. Tell TypeScript what kind of data these states will hold
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include'
                });

                if (!response.ok) throw new Error('Failed to fetch profile data');

                const data = await response.json();

                setUser(data.user);
                setFormData({ name: data.user.name, email: data.user.email });
            } catch (err) {
                // 3. TypeScript requires us to check if the error is actually an Error object
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, []);

    // 4. Add types to your React events
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to update profile');

            const updatedData = await response.json();

            setUser(updatedData.user);
            setIsEditing(false);
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                alert('Error updating profile: ' + err.message);
            }
        } finally {
            setIsUpdating(false);
        }
    };

    if (isLoading) return <div className="text-center mt-20 text-gray-500">Loading profile...</div>;
    if (error) return <div className="text-center mt-20 text-red-500">Error: {error}</div>;
    if (!user) return <div className="text-center mt-20 text-gray-500">No profile data found.</div>;

    return (
        <div className="max-w-6xl mx-auto p-6 pt-12 md:pt-22">
            <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 w-full text-center md:text-left">
                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="border dark:border-zinc-700 dark:bg-zinc-800 rounded px-3 py-1.5 w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border dark:border-zinc-700 dark:bg-zinc-800 rounded px-3 py-1.5 w-full max-w-md focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                                placeholder="Email"
                            />
                            <div className="flex gap-2 justify-center md:justify-start mt-2">
                                <button
                                    type="submit"
                                    disabled={isUpdating}
                                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-700 disabled:opacity-50"
                                >
                                    {isUpdating ? "Saving..." : "Save Changes"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setFormData({ name: user.name, email: user.email });
                                    }}
                                    disabled={isUpdating}
                                    className="bg-gray-200 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 px-4 py-2 rounded-xl text-sm hover:bg-gray-300 dark:hover:bg-zinc-700"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1 capitalize">Role: {user.role}</p>
                            <p className="text-sm text-gray-400 mt-0.5">{user.email}</p>

                            {user.isVerified && (
                                <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                    Verified Account
                                </span>
                            )}
                        </>
                    )}
                </div>

                {!isEditing && (
                    <button
                        onClick={() => {
                            setFormData({ name: user.name, email: user.email });
                            setIsEditing(true);
                        }}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition w-full md:w-auto"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;