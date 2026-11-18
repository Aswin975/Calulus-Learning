
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const hasPrice = course.price !== undefined;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-blue-950/30">

      {/* Course Banner */}
      <div className="relative h-36 shrink-0 overflow-hidden bg-slate-100 sm:h-40">
        <img
          src={course.bannerImage || course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-1 text-xs font-bold text-blue-700 shadow-sm">
          {course.level}
        </span>
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-4">

        {/* Course Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {(course.tags || ["RECORDED CLASS", "STUDY MATERIALS", "TESTS"]).map(
            (tag, index) => (
              <span
                key={index}
                className="rounded-md bg-slate-100 px-2 py-1.5 text-[9px] font-bold tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[40px] flex-1 text-sm leading-5 text-slate-500 dark:text-slate-400">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-blue-500" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <BookOpen size={15} className="text-blue-500" />
            {course.lessons} Lessons
          </span>
        </div>

        {/* Pricing */}
        {hasPrice && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xl font-extrabold text-slate-900 dark:text-white">
              ₹{course.price}
            </span>

            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{course.originalPrice}
              </span>
            )}

            {course.discount && (
              <span className="text-xs font-bold text-green-600">
                {course.discount}% OFF
              </span>
            )}
          </div>
        )}

        {/* Explore Button */}
        <Link
          to={`/courses/${course.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Explore Course
          <ArrowUpRight size={17} />
        </Link>

      </div>
    </div>
  );
}

export default CourseCard;
