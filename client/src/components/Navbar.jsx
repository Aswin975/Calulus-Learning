
import { useState } from "react";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl">

    <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between !pl-12 !pr-8 lg:!pl-16 lg:!pr-12">

        {/* LOGO */}
        <a href="/" className="flex shrink-0 items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
            <GraduationCap size={27} />
          </div>

          <div>
            <h1 className="whitespace-nowrap text-xl font-bold tracking-tight text-slate-900">
              Calculus<span className="text-blue-600">Learning</span>
            </h1>

            <p className="text-[10px] font-medium tracking-[2px] text-slate-500">
              LEARN. PRACTICE. MASTER.
            </p>
          </div>

        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-10 lg:flex">

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-[15px] font-medium transition-colors duration-200 hover:text-blue-600 ${
                index === 0 ? "text-blue-600" : "text-slate-600"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-600" />
              )}
            </a>
          ))}

        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-6 lg:flex">

          <a
            href="/login"
            className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
          >
            Log in
          </a>

          <a
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
            >
                Get Started
           <ArrowRight size={20} strokeWidth={2.5} />
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition hover:bg-blue-50 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <div className="my-3 border-t border-slate-100" />

            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50"
            >
              Log in
            </a>

            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
             className="mt-4 flex items-center justify-center gap-6 rounded-2xl bg-blue-600 px-12 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/30 ring-1 ring-blue-500 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95"
              >
              Get Started
             <ArrowRight size={22} strokeWidth={2.5} />
            </a>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
