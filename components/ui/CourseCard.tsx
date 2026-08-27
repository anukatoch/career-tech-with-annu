type CourseCardProps = {
  badge: string;
  title: string;
  duration: string;
  level: string;
  technologies: string[];
};

const CourseCard = ({
  badge,
  title,
  duration,
  level,
  technologies,
}: CourseCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-2 text-slate-600">
        <p>⏱ Duration: {duration}</p>
        <p>📈 Level: {level}</p>
      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Explore Course
      </button>

    </div>
  );
};

export default CourseCard;