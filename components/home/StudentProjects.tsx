import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Build a complete shopping website with payment integration.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Job Portal",
    description: "Develop a modern job portal with authentication.",
    technologies: ["Next.js", "JWT", "MongoDB"],
  },
  {
    title: "Learning Management System",
    description: "Create an online learning platform with dashboard.",
    technologies: ["React", "Express", "MongoDB"],
  },
];

const StudentProjects = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            STUDENT PROJECTS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Build Projects That Impress Recruiters
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Gain practical experience by building industry-level projects during the course.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;