
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Clock,
  BookOpen,
} from "lucide-react";
import { courses } from "../data/courses";

function Learn() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === Number(id));

  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [openModule, setOpenModule] = useState(0);

  if (!course) {
    return <div className="p-10">Course not found.</div>;
  }

  const allLessons = (course.curriculum || []).flatMap(
    (module, moduleIndex) =>
      module.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        moduleIndex,
        lessonIndex,
      }))
  );

  const currentLesson = allLessons[activeLesson];

  const toggleComplete = () => {
    if (!currentLesson) return;

    setCompletedLessons((previous) =>
      previous.includes(activeLesson)
        ? previous.filter((item) => item !== activeLesson)
        : [...previous, activeLesson]
    );
  };

  const progress = allLessons.length
    ? Math.round((completedLessons.length / allLessons.length) * 100)
    : 0;

  if (!currentLesson) {
    return <div className="p-10">No lessons available yet.</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="site-container flex items-center justify-between py-4">
          <Link
            to={`/courses/${course.id}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Course
          </Link>

          <span className="font-bold text-blue-700">
            Calculus Learning
          </span>
        </div>
      </header>

      <div className="site-container grid gap-8 py-8 lg:grid-cols-3">
        <main className="min-w-0 lg:col-span-2">
          <div className="overflow-hidden rounded-2xl bg-slate-950">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
               src={currentLesson.videoUrl || "https://www.youtube.com/embed/aircAruvnKk"}
                title="Course lesson video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold text-blue-600">
              {course.title}
            </p>

            <h1 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              {currentLesson.title}
            </h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <Clock size={16} />
                {currentLesson.duration}
                </p>

                <p className="mt-5 text-base leading-7 text-slate-600">
                {currentLesson.description || "Explore this lesson and strengthen your understanding through practical examples."}
                </p>

         <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <button
                disabled={activeLesson === 0}
                onClick={() => setActiveLesson((value) => value - 1)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous Lesson
              </button>

              <button
                onClick={toggleComplete}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <CheckCircle size={18} />
                {completedLessons.includes(activeLesson)
                  ? "Completed"
                  : "Mark as Complete"}
              </button>

              <button
                disabled={activeLesson === allLessons.length - 1}
                onClick={() => setActiveLesson((value) => value + 1)}
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next Lesson
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">
            Course Content
          </h2>

          <div className="mt-4">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">Your Progress</span>
              <span className="font-bold text-blue-600">{progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              {completedLessons.length} of {allLessons.length} lessons completed
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {course.curriculum?.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className="overflow-hidden rounded-xl border border-slate-200"
              >
                <button
                  onClick={() =>
                    setOpenModule(
                      openModule === moduleIndex ? -1 : moduleIndex
                    )
                  }
                  className="flex w-full items-center justify-between gap-3 bg-slate-50 p-4 text-left"
                >
                  <span className="text-sm font-bold text-slate-800">
                    {module.module}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      openModule === moduleIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openModule === moduleIndex && (
                  <div className="p-2">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const lessonNumber = allLessons.findIndex(
                        (item) =>
                          item.moduleIndex === moduleIndex &&
                          item.lessonIndex === lessonIndex
                      );

                      const isActive = activeLesson === lessonNumber;
                      const isCompleted =
                        completedLessons.includes(lessonNumber);

                      return (
                        <button
                          key={lessonIndex}
                          onClick={() => setActiveLesson(lessonNumber)}
                          className={`flex w-full items-center gap-3 rounded-lg p-3 text-left ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle size={18} className="shrink-0 text-green-600" />
                          ) : (
                            <PlayCircle size={18} className="shrink-0" />
                          )}

                          <span className="flex-1 text-sm font-medium">
                            {lesson.title}
                          </span>

                          <span className="text-xs text-slate-400">
                            {lesson.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Learn;
