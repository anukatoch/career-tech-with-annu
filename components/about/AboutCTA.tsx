export default function AboutCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center shadow-lg">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
          START YOUR JOURNEY
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Ready to Build Your Career?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
          Learn practical skills, build real projects and get the right
          guidance to move confidently towards your career.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
            Explore Courses
          </button>

          <button className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Get Career Guidance
          </button>
        </div>

      </div>
    </section>
  );
}