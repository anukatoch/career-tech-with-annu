type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 text-5xl">💻</div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <button className="mt-6 rounded-lg border border-blue-600 px-5 py-2 text-blue-700 transition hover:bg-blue-600 hover:text-white">
        View Project
      </button>
    </div>
  );
};

export default ProjectCard;