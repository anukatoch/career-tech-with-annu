

export default function CoursePricing({ price, included }) {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-lg md:p-12">

        {/* Label */}
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          START YOUR JOURNEY
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Ready to Build Your Career?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Learn practical skills, build real projects and get the guidance
          you need to move forward in your tech career.
        </p>

        {/* Price */}
        <div className="mt-8">
          <p className="text-sm font-medium text-slate-500">
            Course Fee
          </p>

          <div className="mt-2 text-4xl font-bold text-slate-900">
            ₹{price}/-
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Flexible payment options available
          </p>
        </div>

        {/* Included */}
        <div className="mx-auto mt-8 max-w-md text-left">
          <h3 className="mb-4 text-lg font-bold text-slate-900">
            What You Get
          </h3>

          <div className="space-y-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-slate-700"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">
                  ✓
                </span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#enquiry"
          className="mt-10 inline-block rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
        >
          Enroll Now
        </a>

        <p className="mt-4 text-sm text-slate-500">
          Limited seats available
        </p>

      </div>
    </section>
  );
}