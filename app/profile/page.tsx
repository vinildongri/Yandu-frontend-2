"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// 1. Added optional avatar string to the interface
interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    isVerified: boolean;
    avatar?: string; 
}

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 2. Add state for image preview and a ref for the hidden file input
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include'
                });

                if (!response.ok) throw new Error('Failed to fetch profile data');

                const data = await response.json();
                setUser(data.user);
                
                // If the user already has an avatar from the database, set it
                if (data.user.avatar) {
                    setImagePreview(data.user.avatar);
                }
                
            } catch (err) {
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

    // 3. Function to handle when a user selects a file
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Create a temporary local URL to show the image instantly
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);

        // TODO: Send this file to your backend
        // Example:
        // const formData = new FormData();
        // formData.append('avatar', file);
        // await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload-avatar`, {
        //     method: 'POST',
        //     body: formData,
        //     credentials: 'include'
        // });
    };

    if (isLoading) return <div className="text-center mt-20 text-gray-500">Loading profile...</div>;
    if (error) return <div className="text-center mt-20 text-red-500">Error: {error}</div>;
    if (!user) return <div className="text-center mt-20 text-gray-500">No profile data found.</div>;

    // Get the first letter of the name safely
    const firstLetter = user.name ? user.name.charAt(0).toUpperCase() : "?";

    return (
        <div className="max-w-6xl mx-auto p-6 pt-12 md:pt-22">
            <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                
                {/* Avatar Section */}
                <div className="relative group shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 dark:border-zinc-800 flex items-center justify-center bg-blue-600 text-white text-3xl font-bold shadow-sm">
                        {imagePreview ? (
                            <img 
                                src={imagePreview} 
                                alt={`${user.name}'s avatar`} 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span>{firstLetter}</span>
                        )}
                    </div>

                    {/* Hidden File Input */}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange} 
                        className="hidden" 
                        accept="image/*"
                    />

                    {/* Camera Button Overlay */}
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute bottom-0 right-0 bg-gray-900 dark:bg-zinc-700 text-white p-2 rounded-full border-2 border-white dark:border-zinc-900 hover:bg-gray-700 transition shadow-md"
                        aria-label="Upload profile picture"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                    </button>
                </div>

                {/* User Info Section */}
                <div className="flex-1 w-full text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
                    <p className="text-sm text-gray-400 mt-0.5">{user.email}</p>

                    {user.isVerified && (
                        <span className="inline-block mt-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            Verified Account
                        </span>
                    )}
                </div>

                {/* Navigation Button */}
                <Link
                    href="/profile/update" 
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition w-full md:w-auto text-center font-medium shrink-0"
                >
                    Update Profile
                </Link>
                
            </div>
        </div>
    );
};

export default Profile;