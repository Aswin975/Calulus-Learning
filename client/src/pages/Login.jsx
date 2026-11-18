
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);

    // Backend authentication will be added later.
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900 md:grid-cols-2">

          {/* Left Side - Welcome Section */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-12 text-white md:flex">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-2xl" />

            <div className="relative z-10">
              <div className="mb-12 flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-3">
                  <GraduationCap size={30} />
                </div>
                <span className="text-2xl font-extrabold">
                  CalculusLearning
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight">
                Welcome back to your learning journey.
              </h1>

              <p className="text-lg leading-8 text-blue-100">
                Continue learning, explore new concepts, and build your
                mathematical confidence one lesson at a time.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
              <BookOpen size={32} />
              <div>
                <p className="font-bold">Keep learning. Keep growing.</p>
                <p className="text-sm text-blue-100">
                  Your next lesson is waiting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex flex-col justify-center p-7 sm:p-12">
            <div className="mb-8">
              <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <GraduationCap size={30} />
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Welcome Back!
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Sign in to continue your learning journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800">
                  <Mail size={19} className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-blue-600 hover:text-indigo-600 dark:text-blue-400"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800">
                  <Lock size={19} className="text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-400 transition hover:text-blue-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 accent-blue-600"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-slate-500 dark:text-slate-400"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Sign In
                <ArrowRight size={19} />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-blue-600 hover:text-indigo-600 dark:text-blue-400"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
