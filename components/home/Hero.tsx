import Link from "next/link";


const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 lg:flex-row">

      {/* Left */}

      <div className="flex-1">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 AI Powered Career Learning Platform
        </span>

        <h1 className="mt-6 text-6xl font-extrabold leading-[1.1] tracking-tight lg:text-7xl">
          Learn Skills.
          <br />
          Build Career.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Practical Full Stack Development, UI/UX Design and AI-powered
          learning that prepares students for real careers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
        <Link
  href="/courses"
  className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
>
  Explore Courses
</Link>

          <button className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100">
            Free Career Guidance
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">

          <div>✅ Live Projects</div>

          <div>✅ AI Tools</div>

          <div>✅ Career Mentorship</div>

          <div>✅ Interview Preparation</div>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-1 justify-center">

        <div className="flex h-96 w-96 items-center justify-center rounded-full bg-blue-100 text-8xl">
          👩‍💻
        </div>

      </div>

    </section>
  );
};

export default Hero;