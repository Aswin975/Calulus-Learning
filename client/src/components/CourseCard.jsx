
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function CourseCard({ course }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50">

      {/* Course Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">

        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-60" />

        {/* Level Badge */}
        <span className="absolute left-4 top-4 rounded-lg border border-white/50 bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
          {course.level}
        </span>

        {/* Category */}
        <span className="absolute bottom-4 left-4 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {course.category}
        </span>

      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
          {course.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-7 text-slate-500">
          {course.description}
        </p>

        {/* Course Information */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-5">

          <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Clock size={16} className="text-blue-500" />
            {course.duration}
          </span>

          <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <BookOpen size={16} className="text-blue-500" />
            {course.lessons} Lessons
          </span>

        </div>

        {/* Explore Button */}
                <Link
                    to={`/courses/${course.id}`}
                    className="mt-5 flex w-full items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    Explore Course
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
          </Link>

      </div>
    </div>
  );
}

export default CourseCard;
