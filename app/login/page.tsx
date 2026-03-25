"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();


  const submitHandle = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      if (data.errors && Array.isArray(data.errors)) {
        data.errors.forEach((err: any) => {
          toast.error(err.message);
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
      return;
    }

    toast.success("Login successful 🎉");

    router.push("/");

  } catch (error) {
    toast.error("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-white dark:bg-[#0f0f0f] flex flex-col items-center pb-0 pt-40 px-4 sm:px-6 font-sans">

      <h1 className="text-3xl sm:text-[32px] font-semibold text-gray-900 dark:text-white mb-10 text-center">
        Log in to Yandu
      </h1>

      <div className="w-full max-w-[620px]">

        {/* Google Login */}
        <div className="mb-6">
          <button
            type="button"
            className="w-full flex cursor-pointer items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#252525] transition-all font-medium text-[15px]"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>


        {/* Divider */}
        <div className="flex items-center mb-8">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="px-4 text-[13px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            or
          </span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>


        {/* Login Form */}
        <form onSubmit={submitHandle} className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
              Email address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>


          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-11 px-4 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>


          {/* Continue Button */}
          <button
            type="submit"
            className="w-full h-12 cursor-pointer mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition"
          >
            Continue
          </button>


          {/* Forgot password */}
          <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot password?
          </p>

        </form>


        {/* Signup */}
        <p className="text-center text-[14px] text-gray-600 dark:text-gray-400 mt-10 mb-12">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>

    </section>
  );
};

export default Login;