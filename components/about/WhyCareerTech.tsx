const benefits = [
  {
    icon: "💻",
    title: "Practical Learning",
    description:
      "Learn by building real-world projects instead of learning only theory.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Learning",
    description:
      "Learn modern AI tools and use them to improve your learning and development skills.",
  },
  {
    icon: "🎯",
    title: "Career Focused",
    description:
      "Build your resume, portfolio and interview skills to become job-ready.",
  },
  {
    icon: "🚀",
    title: "Latest Technologies",
    description:
      "Learn modern technologies and skills that are relevant to today's tech industry.",
  },
];

export default function WhyCareerTech() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            WHY CAREER TECH
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Why Learn With Career Tech?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We focus on practical skills, modern technology and the right
            career guidance to help students move forward with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-4xl">
                {benefit.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}