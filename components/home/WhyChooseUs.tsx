const features = [
  {
    id: 1,
    icon: "💻",
    title: "Practical Learning",
    description:
      "Learn by building real-world applications instead of only theory.",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Real Projects",
    description:
      "Build portfolio projects that prepare you for real industry jobs.",
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI Powered Learning",
    description:
      "Master modern AI tools to improve your productivity and development skills.",
  },
  {
    id: 4,
    icon: "🎯",
    title: "Career Mentorship",
    description:
      "Resume building, interview preparation and complete career guidance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 ">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need
            <br />
            to Build Your Tech Career
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Learn modern technologies through practical training, real projects,
            AI-powered learning and career-focused mentorship.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;