import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    message:
      "I joined with zero coding knowledge. The practical projects helped me build confidence and start my career.",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    message:
      "The classes were easy to understand and project-based. I created a strong portfolio and got my first freelance project.",
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer",
    message:
      "Career guidance, interview preparation and live projects made me job-ready. It was an amazing learning experience.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            SUCCESS STORIES
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Our Students Build Their Careers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Real stories from students who transformed their skills into successful careers.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((student) => (
            <TestimonialCard key={student.name} {...student} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;