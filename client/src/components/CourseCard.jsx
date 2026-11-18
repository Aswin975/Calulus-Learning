
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  const hasPrice = course.price !== undefined;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60">

      {/* Course Banner */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={course.bannerImage || course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
          {course.level}
        </span>
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5">

        {/* Course Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {(course.tags || ["RECORDED CLASS", "STUDY MATERIALS", "TESTS"]).map(
            (tag, index) => (
              <span
                key={index}
                className="bg-slate-100 px-3 py-2 text-[10px] font-semibold tracking-wide text-slate-600"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="mt-5 flex items-center gap-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-blue-500" />
            {course.duration}
          </span>

          <span className="flex items-center gap-2">
            <BookOpen size={15} className="text-blue-500" />
            {course.lessons} Lessons
          </span>
        </div>

        {/* Pricing - shown when course price exists */}
        {hasPrice && (
          <div className="mt-5 flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">
              ₹{course.price}
            </span>

            {course.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ₹{course.originalPrice}
              </span>
            )}

            {course.discount && (
              <span className="text-sm font-semibold text-green-600">
                {course.discount}% OFF
              </span>
            )}
          </div>
        )}

        {/* Explore Button */}
        <Link
          to={`/courses/${course.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:from-blue-700 hover:to-violet-700"
        >
          Explore Course
          <ArrowUpRight size={19} />
        </Link>

      </div>
    </div>
  );
}

export default CourseCard;
