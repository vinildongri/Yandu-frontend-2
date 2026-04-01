"use client"
import Logo from '@/components/Logo';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const UpdatePassword= () =>{

  const router = useRouter();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 1. Client-side Validation
    if (!oldPassword) {
      setError('Please enter your current password.');
      return;
    }
    if (newPassword.length < 6) {
      setError('Passwords must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Real Backend Connection
      // Replace the URL with your actual API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/password/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        // 'include' is required to send cookies so the backend can identify 'req.user'
        credentials: 'include', 
        body: JSON.stringify({
          oldPassword,
          password: newPassword,       // Mapped to match your backend 'password' variable
          confirmPassword: confirmPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        // This catches your "old Password is Incorrect" or "Passwords do not match" errors from backend
        setError(data.message || 'An error occurred while updating your password.');
      }
    } catch (err) {
      setError('Connection error. Please check your network or backend server.');
      console.error('Update password fetch error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State View
  if (isSuccess) {
    return (
      <div className="min-h-screen pt-22 bg-white dark:bg-black flex flex-col items-center pt-8 font-sans">
        <div className="mb-6 mt-2">
          <Logo className="dark:invert" />
        </div>
        <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-6 text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#067d62] dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-normal text-[#0f1111] dark:text-white mb-2">Password updated</h1>
          <p className="text-[13px] text-[#0f1111] dark:text-gray-300 mb-6">Your password has been successfully updated.</p>
          <button 
            onClick={() => router.push("/login")}
            className="w-full bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-2 px-3 rounded-[8px] transition-colors font-medium h-10 cursor-pointer"
          >
            Sign-In
          </button>
        </div>
      </div>
    );
  }

  // Main Form View
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">
      
      <div className="mb-4 mt-2">
        <Logo className="dark:invert" />
      </div>

      <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6">
        
        <h1 className="text-[28px] font-normal leading-[1.2] mb-2 text-[#0f1111] dark:text-white">Create new password</h1>
        
        <p className="text-[13px] leading-relaxed mb-4 text-[#0f1111] dark:text-gray-300">
          We'll ask for this password whenever you sign in.
        </p>

        {error && (
          <div className="flex items-start gap-2 text-[#c40000] dark:text-red-400 mb-4 border border-[#c40000] dark:border-red-500/50 p-3 rounded-[4px] shadow-[0_0_0_4px_rgba(221,0,0,.1)_inset] dark:shadow-[0_0_0_4px_rgba(220,38,38,.1)_inset]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
            <div className="text-[13px]">
              <span className="font-bold">There was a problem</span><br/>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Old Password Input */}
          <div className="mb-4">
            <label className="block text-[13px] font-bold mb-1 pl-0.5 text-[#0f1111] dark:text-white">
              Old password
            </label>
            <input
              type="password"
              autoFocus
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
                setError('');
              }}
              className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
            />
          </div>
          
          {/* New Password Input */}
          <div className="mb-4">
            <label className="block text-[13px] font-bold mb-1 pl-0.5 text-[#0f1111] dark:text-white">
              New password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError('');
              }}
              className={`w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none outline-none transition-colors
                ${error && newPassword.length > 0 && newPassword.length < 6
                  ? 'border-[#c40000] focus:border-[#c40000] focus:ring-[3px] focus:ring-[#c40000]/20 dark:border-red-500 dark:focus:ring-red-500/20' 
                  : 'border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30'
                }`}
            />
            <div className="flex items-start gap-1 mt-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#007185] dark:text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[12px] text-[#0f1111] dark:text-gray-400">
                Passwords must be at least 6 characters.
              </span>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-5">
            <label className="block text-[13px] font-bold mb-1 pl-0.5 text-[#0f1111] dark:text-white">
              Password again
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError('');
              }}
              className={`w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none outline-none transition-colors
                ${error && confirmPassword !== newPassword
                  ? 'border-[#c40000] focus:border-[#c40000] focus:ring-[3px] focus:ring-[#c40000]/20 dark:border-red-500 dark:focus:ring-red-500/20' 
                  : 'border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30'
                }`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mb-4 flex justify-center items-center h-8"
          >
            {isSubmitting ? (
               <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            ) : (
              'Save changes and sign in'
            )}
          </button>
        </form>

      </div>

      <div className="w-full max-w-[350px] mb-6">
        <h3 className="font-bold text-[13px] mb-1 text-[#0f1111] dark:text-white">Secure password tips:</h3>
        <ul className="list-disc pl-5 text-[13px] text-[#0f1111] dark:text-gray-300 space-y-1">
          <li>Use at least 8 characters, a combination of numbers and letters is best.</li>
          <li>Do not use the same password you have used with us previously.</li>
          <li>Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
        </ul>
      </div>

      <div className="w-full max-w-[350px] relative mt-2 mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#eee] dark:border-gray-800"></div>
        </div>
      </div>

      <div className="w-full max-w-[350px] flex flex-col items-center mt-2 pb-10">
        <div className="flex gap-4 text-[11px] text-[#0066c0] dark:text-blue-500 mb-3 font-medium">
          <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Conditions of Use</a>
          <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Privacy Notice</a>
          <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Help</a>
        </div>
        <p className="text-[11px] text-[#565959] dark:text-gray-500">
          © 1996-2026, Yandu, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default UpdatePassword;