import CourseCard from "@/components/courses/CourseCard";
export const metadata = {
  title: "Courses | Career Tech",
  description:
    "Explore Career Tech courses in Full Stack Development, UI/UX Design, React, Next.js and AI.",
};

const courses = [
  {
    slug: "ai-full-stack",
    icon: "🤖",
    title: "AI-Powered Full Stack Development",
    description:
      "Learn modern full-stack development with AI tools and build real-world projects.",
    duration: "2.5 Months",
    level: "Beginner to Advanced",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "AI",
    ],
  },

  {
    slug: "ui-ux",
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Learn user research, wireframing, prototyping and modern interface design.",
    duration: "3 Months",
    level: "Beginner",
    technologies: [
      "Figma",
      "UI Design",
      "UX",
      "Prototyping",
    ],
  },

  {
    slug: "react",
    icon: "⚛️",
    title: "React.js Development",
    description:
      "Build modern, responsive and reusable web applications using React.js.",
    duration: "2 Months",
    level: "Intermediate",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
  },

  {
    slug: "nextjs",
    icon: "▲",
    title: "Next.js Development",
    description:
      "Learn modern Next.js development with routing, SEO, APIs and deployment.",
    duration: "2 Months",
    level: "Intermediate",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "SEO",
    ],
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-3xl text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
          OUR COURSES
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
          Learn Skills. Build Your Career.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Practical, career-focused courses designed to help you
          learn modern technologies and build real-world projects.
        </p>

      </div>

      {/* Courses */}
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {courses.map((course) => (
          <CourseCard
            key={course.slug}
            {...course}
          />
        ))}

      </div>

    </main>
  );
}