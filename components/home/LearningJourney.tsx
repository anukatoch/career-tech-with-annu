const journey = [
  {
    step: "01",
    title: "Learn",
    description: "Master the fundamentals with structured lessons and live coding sessions.",
  },
  {
    step: "02",
    title: "Practice",
    description: "Solve assignments and coding challenges to strengthen your concepts.",
  },
  {
    step: "03",
    title: "Build",
    description: "Create real-world projects that showcase your practical skills.",
  },
  {
    step: "04",
    title: "Portfolio",
    description: "Build a professional GitHub portfolio and resume.",
  },
  {
    step: "05",
    title: "Get Hired",
    description: "Prepare for interviews and become job-ready with career mentorship.",
  },
];

const LearningJourney = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            LEARNING JOURNEY
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Your Roadmap to a Tech Career
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Follow a structured learning path designed to help you become an industry-ready developer.
          </p>
        </div>

        <div className="space-y-8">

          {journey.map((item) => (

            <div
              key={item.step}
              className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                {item.step}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default LearningJourney;