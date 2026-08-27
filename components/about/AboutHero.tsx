import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">

        {/* Left */}

        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Career Tech
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Empowering Students with
            <span className="text-blue-700"> Practical Tech Skills</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Career Tech helps students become job-ready through
            practical learning, live projects, AI-powered tools,
            and career-focused mentorship.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/courses"
              className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="flex h-80 w-80 items-center justify-center rounded-full bg-blue-100 text-8xl shadow-lg">
            💻
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;