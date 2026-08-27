type CourseModule = {
  number: string;
  title: string;
  topics: string;
};

type CourseModulesProps = {
  modules: CourseModule[];
};

export default function CourseModules({
  modules,
}: CourseModulesProps) {
  return (
    <section className="mt-12">
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
          COURSE SYLLABUS
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          What You Will Learn
        </h2>

        <p className="mt-3 text-slate-600">
          A practical learning path designed to take you from fundamentals
          to real-world development.
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.number}
            className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {module.number}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {module.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {module.topics}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}