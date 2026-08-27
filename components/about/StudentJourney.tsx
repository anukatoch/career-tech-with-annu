const steps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand concepts with simple explanations, practical examples and guided learning.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Strengthen your skills through assignments, coding practice and hands-on exercises.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Create real-world projects that you can showcase in your portfolio.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Get career guidance, improve your confidence and prepare for real opportunities.",
  },
];

export default function StudentJourney() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            STUDENT JOURNEY
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            From Learning to Career
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A simple learning journey designed to help students build skills,
            projects and confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-md">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}