"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

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

      toast.success("Login successful !");

      router.push("/");

    } catch (error) {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-22 px-4 font-sans text-[#0f1111] dark:text-white selection:bg-[#c8f3fa] dark:selection:bg-blue-900">

      {/* Logo */}
      <div className="mb-4 mt-2">
        <Logo className="dark:invert" />
      </div>

      {/* Main Login Box */}
      <div className="w-full max-w-[350px] border border-[#ddd] dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-[8px] p-[18px] pb-6 mb-6">

        <h1 className="text-[28px] font-normal leading-[1.2] mb-4 text-[#0f1111] dark:text-white">Sign in</h1>

        <form onSubmit={submitHandle}>

          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-[13px] font-bold mb-1 pl-0.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-[13px] font-bold pl-0.5">
                Password
              </label>
              <p
                onClick={() => router.push("/password/forgot")}
                className="text-[12px] text-[#0066c0] dark:text-blue-500 hover:text-[#c40000] dark:hover:text-white hover:underline cursor-pointer"
              >
                Forgot your password?
              </p>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1.5 text-[13px] rounded-[3px] border bg-white dark:bg-[#111111] dark:text-white border-[#a6a6a6] dark:border-gray-600 focus:border-[#007185] dark:focus:border-blue-500 focus:ring-[3px] focus:ring-[#c8f3fa] dark:focus:ring-blue-900/30 outline-none transition-colors shadow-[0_1px_2px_rgba(15,17,17,.15)_inset] dark:shadow-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-500 dark:text-gray-400 hover:text-gray-700 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Premium Sign-in Button (Midnight Navy) */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#0A2540] hover:bg-[#001428] dark:bg-[#1E3A8A] dark:hover:bg-[#172554] text-white text-[13px] py-[6px] px-3 rounded-[8px] transition-colors mb-4 flex justify-center items-center h-8 font-medium shadow-sm ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Conditions of Use Note */}
        <p className="text-[12px] leading-[1.5] text-[#0f1111] dark:text-gray-300 mt-1">
          By continuing, you agree to Yandu's{" "}
          <span className="text-[#0066c0] dark:text-blue-500 hover:underline cursor-pointer">Conditions of Use</span> and{" "}
          <span className="text-[#0066c0] dark:text-blue-500 hover:underline cursor-pointer">Privacy Notice</span>.
        </p>

      </div>

      {/* Divider for "New to Yandu?" */}
      <div className="w-full max-w-[350px] relative flex py-4 items-center">
        <div className="flex-grow border-t border-[#eee] dark:border-gray-800"></div>
        <span className="flex-shrink mx-4 text-[12px] text-[#767676] dark:text-gray-500">New to Yandu?</span>
        <div className="flex-grow border-t border-[#eee] dark:border-gray-800"></div>
      </div>

      {/* Create Account Button (Secondary Button) */}
      <button
        onClick={() => router.push("/signup")}
        className="w-full max-w-[350px] bg-white dark:bg-[#1a1a1a] border border-[#adb1b8] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#252525] text-[#0f1111] dark:text-white text-[13px] py-[6px] rounded-[8px] shadow-sm transition-colors cursor-pointer"
      >
        Create your Yandu account
      </button>

      {/* Footer Links */}
      <div className="w-full max-w-[350px] flex flex-col items-center mt-8 pb-10">
        <div className="w-full border-t border-[#eee] dark:border-gray-800 mb-6"></div>
        <div className="flex gap-4 text-[11px] text-[#0066c0] dark:text-blue-500 mb-3 font-medium">
          <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Conditions of Use</a>
          <a href="#" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Privacy Notice</a>
          <a href="/help-centre" className="hover:text-[#c40000] dark:hover:text-white hover:underline">Help</a>
        </div>
        <p className="text-[11px] text-[#565959] dark:text-gray-500">
          © 2026, Yandu, Inc. or its affiliates
        </p>
      </div>

    </div>
  );
};

export default Login;