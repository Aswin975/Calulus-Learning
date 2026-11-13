import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, GraduationCap, ChevronDown, PlayCircle, } from "lucide-react";
import { courses } from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const [openModule, setOpenModule] = useState(0);
  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Course not found
        </h1>

        <Link to="/" className="mt-5 text-blue-600">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="site-container flex items-center justify-between py-5">

          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="text-blue-600" size={30} />

            <h1 className="text-xl font-bold text-slate-900">
              Calculus<span className="text-blue-600">Learning</span>
            </h1>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

        </div>
      </header>

      {/* Course Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-16 text-white">

        <div className="site-container grid items-center gap-10 md:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
              {course.category}
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-5xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-xl leading-8 text-blue-100">
              {course.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-6 text-sm text-blue-100">

              <span className="flex items-center gap-2">
                <Clock size={18} />
                {course.duration}
              </span>

              <span className="flex items-center gap-2">
                <BookOpen size={18} />
                {course.lessons} Lessons
              </span>

              <span>
                {course.level}
              </span>

            </div>

            <button className="mt-9 rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400">
              Start Learning
            </button>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={course.image}
              alt={course.title}
              className="h-80 w-full object-cover"
            />
          </div>

        </div>
      </section>

     
{/* Course Overview */}
<section className="site-container grid gap-12 py-16 lg:grid-cols-3">

  {/* Main Content */}
  <div className="space-y-10 lg:col-span-2">

    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Course Overview
      </p>

      <h2 className="mt-3 text-3xl font-bold text-slate-900">
        About this course
      </h2>

      <p className="mt-5 leading-8 text-slate-600">
        {course.description}
        {" "}This course is designed to help students understand
        important concepts through structured lessons and practical exercises.
      </p>
    </div>

    {/* Learning Objectives */}
    <div className="rounded-2xl border border-slate-200 bg-white p-7">

      <h2 className="text-2xl font-bold text-slate-900">
        What you'll learn
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        {(course.whatYouWillLearn || [
          "Understand important concepts",
          "Build problem-solving skills",
          "Practice with examples",
          "Apply your knowledge"
        ]).map((objective, index) => (

          <div key={index} className="flex items-start gap-3">

            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              ✓
            </div>

            <p className="text-sm leading-6 text-slate-600">
              {objective}
            </p>

          </div>

        ))}

      </div>
    </div>

  </div>

  {/* Course Information */}
  <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

    <h3 className="text-lg font-bold text-slate-900">
      Course Information
    </h3>

    <div className="mt-6 space-y-5 text-sm">

      <div className="flex justify-between">
        <span className="text-slate-500">Level</span>
        <span className="font-semibold text-slate-800">
          {course.level}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">Duration</span>
        <span className="font-semibold text-slate-800">
          {course.duration}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">Lessons</span>
        <span className="font-semibold text-slate-800">
          {course.lessons}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-slate-500">Category</span>
        <span className="font-semibold text-slate-800">
          {course.category}
        </span>
      </div>

    </div>

  </aside>

</section>

{/* Course Curriculum */}
<section className="site-container py-16">
  <div className="mb-8">
  <Link
  to={`/courses/${course.id}/learn`}
  className="mt-9 inline-block rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-400"
>
  Start Learning
</Link>

  <h2 className="mt-3 text-3xl font-bold text-slate-900">
    Course Curriculum
  </h2>
    <p className="mt-3 text-slate-500">
      Explore the modules and lessons included in this course.
    </p>
  </div>

  <div className="space-y-4">
    {course.curriculum?.map((module, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
      >
        <button
          onClick={() =>
            setOpenModule(openModule === index ? -1 : index)
          }
          className="flex w-full items-center justify-between p-5 text-left transition hover:bg-blue-50"
        >
          <div>
            <h3 className="font-bold text-slate-900">
              {module.module}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {module.lessons.length} Lessons
            </p>
          </div>

          <ChevronDown
            className={`shrink-0 text-blue-600 transition-transform ${
              openModule === index ? "rotate-180" : ""
            }`}
          />
        </button>

        {openModule === index && (
          <div className="border-t border-slate-100">
            {module.lessons.map((lesson, lessonIndex) => (
              <div
                key={lessonIndex}
                className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <PlayCircle
                    size={20}
                    className="shrink-0 text-blue-500"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {lesson.title}
                  </span>
                </div>

                <span className="flex shrink-0 items-center gap-1 text-xs text-slate-500">
                  <Clock size={14} />
                  {lesson.duration}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default CourseDetails;
