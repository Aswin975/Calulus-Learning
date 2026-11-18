
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  GraduationCap,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/#courses" },
    { name: "Categories", path: "/#categories" },
    { name: "About", path: "/#about" },
  ];

  return (

    <>
   <nav className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/95">

      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between !pl-12 !pr-8 lg:!pl-16 lg:!pr-12">

        {/* LOGO */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
            <GraduationCap size={27} />
          </div>

          <div>
            <h1 className="whitespace-nowrap text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Calculus<span className="text-blue-600">Learning</span>
            </h1>

            <p className="text-[10px] font-medium tracking-[2px] text-slate-500 dark:text-slate-400">
              LEARN. PRACTICE. MASTER.
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative py-2 text-[15px] font-medium transition-colors duration-200 hover:text-blue-600 ${
                index === 0
                  ? "text-blue-600"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-6 lg:flex">

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-yellow-300 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/login"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600 dark:text-slate-200"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Register Now
            <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 lg:hidden">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-blue-50 dark:text-yellow-300 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun size={21} /> : <Moon size={21} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 hover:bg-blue-50 dark:text-white dark:hover:bg-slate-800"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}

            <div className="my-3 border-t border-slate-100 dark:border-slate-800" />

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Log in
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg"
            >
              Get Started
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      )}
    </nav>

       <div className="h-[76px]" />
       </>
  );
}

export default Navbar;
