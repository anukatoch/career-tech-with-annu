import Link from "next/link";

type CourseCardProps = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  icon: string;

  // Dono names support karenge
  skills?: string[];
  technologies?: string[];
};

export default function CourseCard({
  slug,
  title,
  description,
  duration,
  icon,
  skills,
  technologies,
}: CourseCardProps) {

  // skills mile to skills use hoga
  // warna technologies use hoga
  // dono na mile to empty array
  const courseSkills = skills ?? technologies ?? [];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
        {icon}
      </div>

      {/* Course Title */}
      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {/* Duration */}
      <div className="mt-5 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
        ⏱ {duration}
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {courseSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* View Course Button */}
      <Link
        href={`/courses/${slug}`}
        className="mt-7 block w-full rounded-lg bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        View Course
      </Link>

    </div>
  );
}