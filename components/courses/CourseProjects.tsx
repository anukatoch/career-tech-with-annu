type CourseProject = {
  icon: string;
  title: string;
  description: string;
};

type CourseProjectsProps = {
  projects: CourseProject[];
};
export default function CourseProjects({
  projects =[],
}: CourseProjectsProps) {
  return (
    <section className="mt-16">
      {/* Heading */}
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          REAL-WORLD PROJECTS
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          Projects You Will Build
        </h2>

        <p className="mt-3 text-slate-600">
          Apply your learning by building practical projects for your portfolio.
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 text-4xl">
              {project.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {project.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-5 font-semibold text-blue-700">
              Build Project →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}