import CourseCard from "@/components/ui/CourseCard";

const courses = [
  {
    badge: "⭐ Job Ready Program",
    title: "AI Powered Full Stack",
    duration: "2.5 Months",
    level: "Beginner to Advanced",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "AI Tools",
    ],
  },
  {
    badge: "🎨 Portfolio Focused",
    title: "UI/UX Design",
    duration: "3 Months",
    level: "Beginner",
    technologies: [
      "Figma",
      "UI Design",
      "UX",
      "Prototype",
      "Design System",
    ],
  },
  {
    badge: "⚛ Project Based",
    title: "React.js Masterclass",
    duration: "6 Weeks",
    level: "Intermediate",
    technologies: [
      "React",
      "Hooks",
      "API",
      "Redux",
      "Tailwind",
    ],
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FEATURED COURSES
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Learn From Industry-Focused Programs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Choose a learning path designed to build practical skills and prepare you for your career.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;