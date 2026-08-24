const benefits = [
  {
    icon: "🎯",
    title: "Career Guidance",
    description:
      "Get clear guidance to choose the right skills, learning path and direction for your career goals.",
  },
  {
    icon: "📄",
    title: "Resume & Portfolio",
    description:
      "Build a strong resume and professional project portfolio to showcase your skills and work.",
  },
  {
    icon: "🎤",
    title: "Interview Preparation",
    description:
      "Practice technical questions, improve your confidence and prepare for interviews step by step.",
  },
  {
    icon: "💼",
    title: "Job Assistance",
    description:
      "Get support and guidance for job opportunities, applications and becoming career-ready.",
  },
];

export default function CareerSupport() {
  return (
    <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-12 md:px-10">

      {/* Section Heading */}
      <div className="mb-10 text-center">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          WHY LEARN WITH US
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
          More Than Just a Course
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          We don't just teach technology. We help you build practical skills,
          confidence and a clear path towards your career.
        </p>

      </div>

      {/* Benefits */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >

            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition-transform duration-300 group-hover:scale-110">
              {benefit.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900">
              {benefit.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {benefit.description}
            </p>

            {/* Bottom Line */}
            <div className="mt-5 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />

          </div>
        ))}

      </div>

    </section>
  );
}