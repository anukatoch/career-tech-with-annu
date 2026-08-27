const MissionVision = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR PURPOSE
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Learning With a Purpose
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We focus on practical skills, real projects and career guidance
            that help students move confidently towards their future.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 text-4xl">🎯</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              To make technology learning simple, practical and
              career-focused so students can build real skills,
              real projects and a confident career.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 text-4xl">🚀</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              To become a trusted career-learning platform where
              students learn the latest technologies and get the
              right guidance to start and grow their careers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;