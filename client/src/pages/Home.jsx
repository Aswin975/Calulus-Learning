
import { useState } from "react";
import {
  ArrowRight,
  Search,
  Play,
  Calculator,
  FunctionSquare,
  Sigma,
  Atom,
  Sparkles,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

// Category data
const categories = [
  { name: "Calculus", icon: FunctionSquare },
  { name: "Algebra", icon: Sigma },
  { name: "Mathematics", icon: Calculator },
  { name: "Physics", icon: Atom },
];

// Why choose us data
const features = [
  {
    icon: BookOpen,
    title: "Learn at your pace",
    description:
      "Access lessons whenever you want and learn without pressure.",
  },
  {
    icon: Users,
    title: "Student focused",
    description:
      "A simple learning environment designed around your needs.",
  },
  {
    icon: Award,
    title: "Build your skills",
    description:
      "Practice concepts and develop confidence through learning.",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Course filtering
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
   <div className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="site-container relative grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:gap-10 lg:gap-16 lg:py-20">

          {/* HERO CONTENT */}
          <div className="flex flex-col items-start">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              A smarter way to learn mathematics
            </div>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[68px] dark:text-white">
              Mathematics
              <br />
              made
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}simpler.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 md:text-lg dark:text-slate-300">
              Discover a better way to understand mathematics.
              Learn at your own pace with interactive lessons,
              practical examples and expert-designed courses.
            </p>

            {/* HERO BUTTONS */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Courses
                <ArrowRight size={19} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                <Play size={17} />
                Learn More
              </a>

            </div>

            {/* LEARNING BENEFITS */}
            <div className="mt-12 grid w-full max-w-lg grid-cols-3 gap-4">

              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
                  Learn
                </h3>
                <p className="mt-1 text-xs text-slate-500 md:text-sm dark:text-slate-300">
                  At your own pace
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
                  Practice
                </h3>
                <p className="mt-1 text-xs text-slate-500 md:text-sm dark:text-slate-300">
                  Build confidence
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
                  Master
                </h3>
                <p className="mt-1 text-xs text-slate-500 md:text-sm dark:text-slate-300">
                  Achieve your goals
                </p>
              </div>

            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-200 to-violet-200 opacity-60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-7 text-white shadow-2xl sm:p-10">

              {/* Top label */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-widest text-blue-200 dark:text-slate-300">
                  MATHEMATICS STUDIO
                </span>

                <Sigma size={28} className="text-blue-300" />
              </div>

              {/* Mathematical illustration */}
              <div className="py-12 text-center">

                <p className="mb-8 text-xs font-semibold tracking-[0.2em] text-blue-200 sm:text-sm dark:text-slate-300">
                  DISCOVER THE BEAUTY OF MATH
                </p>

                <div className="space-y-5">
                  <div className="text-5xl font-light tracking-wide sm:text-6xl">
                    ∫ f(x) dx
                  </div>

                  <div className="mx-auto h-px w-40 bg-blue-400/50" />

                  <div className="text-3xl font-light text-blue-200">
                    lim x → ∞
                  </div>

                  <div className="text-4xl font-light text-violet-300">
                    ∑ ∞ π
                  </div>
                </div>

              </div>

              {/* Bottom learning card */}
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg">

                <div className="flex items-center justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500">
                      <BookOpen size={23} />
                    </div>

                    <div>
                      <p className="font-semibold dark:text-slate-300">
                        Your learning journey
                      </p>

                      <p className="mt-1 text-xs text-blue-200 dark:text-slate-300">
                        Starts here
                      </p>
                    </div>

                  </div>

                  <ArrowRight size={23} className="text-blue-200" />

                </div>
              </div>

            </div>

            {/* Floating cards */}
            <div className="absolute -left-5 top-20 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <Calculator className="mb-2 text-blue-600" size={25} />
              <p className="text-xs font-bold dark:text-slate-300">Think logically</p>
            </div>

            <div className="absolute -right-5 bottom-24 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <Award className="mb-2 text-violet-600" size={25} />
              <p className="text-xs font-bold dark:text-slate-300">Learn confidently</p>
            </div>

          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
     <section className="site-container bg-slate-50 pt-8 pb-4 dark:bg-slate-900">

        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/50n dark:border-slate-700 dark:bg-slate-900 dark:shadow-none" >

          <Search className="ml-3 shrink-0 text-slate-400" size={22} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                document.getElementById("courses")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            placeholder="What do you want to learn today?"
            className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-400"
          />

          <button
            onClick={() =>
              document.getElementById("courses")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>

        </div>
      </section>

      {/* CATEGORY SECTION */}
       {/* <section id="categories" className="site-container pt-8 pb-4">

        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-slate-300">
            Explore subjects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Browse Categories
          </h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">

          {["All", ...categories.map((c) => c.name)].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                document.getElementById("courses")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className={`shrink-0 rounded-xl border px-6 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </section> */}

      {/* POPULAR COURSES */}
 <section
  id="courses"
  className="bg-slate-50 pt-8 pb-8 md:pt-10 md:pb-10 dark:bg-slate-900"
>
        <div className="site-container">

          {/* Section Heading */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-slate-300">
                Start Learning
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Popular Courses
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-300">
                Discover courses designed to help you master mathematics.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
              }}
              className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
            >
              See All
              <ArrowRight size={19} />
            </button>

          </div>

          {/* Course Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">

            {["All", ...categories.map((c) => c.name)].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Course Cards */}
          {filteredCourses.length > 0 ? (

            
<div className="relative">

  <div
    id="course-carousel"
    className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5"
  >
    {filteredCourses.map((course) => (
      <div
          key={course.id}
          className="w-[80%] shrink-0 snap-start sm:w-[44%] lg:w-[calc(31%-12px)]"
        >
          <CourseCard course={course} />
       </div>
    ))}
  </div>

  {/* Carousel Navigation */}
  <div className="mt-5 flex justify-center gap-3">

    <button
      onClick={() =>
        document.getElementById("course-carousel")?.scrollBy({
          left: -350,
          behavior: "smooth",
        })
      }
      aria-label="Previous courses"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-blue-600 hover:text-white"
    >
      <ArrowRight className="rotate-180" size={20} />
    </button>

    <button
      onClick={() =>
        document.getElementById("course-carousel")?.scrollBy({
          left: 350,
          behavior: "smooth",
        })
      }
      aria-label="Next courses"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-blue-600 hover:text-white"
    >
      <ArrowRight size={20} />
    </button>

  </div>
</div>


          ) : (

            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center">

              <Search className="mx-auto mb-4 text-slate-300" size={40} />

              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                No courses found
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                Try another search or select a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 font-semibold text-blue-600"
              >
                Clear filters
              </button>

            </div>

          )}

        </div>
      </section>

      {/* ABOUT / FEATURES SECTION */}
      <section id="about" className="site-container section-spacing dark:border-slate-700 dark:bg-slate-900">

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-slate-300">
            Why Calculus Learning?
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            Learning that makes a difference
          </h2>

          <p className="mt-4 leading-7 text-slate-500 dark:text-slate-300">
            Our goal is to make difficult mathematical concepts easier
            to understand through structured lessons and practical learning.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

return (
  <div
    key={feature.title}
    className="rounded-2xl border border-slate-100 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500 dark:hover:shadow-blue-950/30"
  >

    {/* Feature Icon */}
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors dark:bg-slate-800 dark:text-blue-400">
      <Icon size={29} />
    </div>

    {/* Feature Title */}
    <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
      {feature.title}
    </h3>

    {/* Feature Description */}
    <p className="leading-7 text-slate-500 dark:text-slate-300">
      {feature.description}
    </p>

  </div>
);

          })}

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="site-container pb-20">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-violet-700 px-7 py-16 text-center text-white md:px-16 md:py-20">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-300/20 blur-3xl" />

          <div className="relative">

            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-100 dark:text-slate-300">
              Your future starts here
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight md:text-5xl dark:text-white">
              Your learning journey starts today.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100 dark:text-slate-300">
              Explore new concepts, challenge yourself and discover
              how exciting mathematics can be.
            </p>

            <a
              href="/register"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Join us today
              <ArrowRight size={19} />
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
    <footer className="border-t border-slate-100 bg-indigo-50 dark:border-slate-800 dark:bg-slate-950">

        <div className="site-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Calculus<span className="text-blue-600">Learning</span>
            </h3>

            <p className="mt-1 text-xs tracking-wider text-slate-400">
              LEARN. PRACTICE. MASTER.
            </p>
          </div>

          <p className="text-center text-sm text-slate-500">
            © 2026 Calculus Learning. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default Home;
