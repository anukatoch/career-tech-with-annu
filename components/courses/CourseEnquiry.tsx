"use client";

import { useState } from "react";

export default function CourseEnquiry({
  courseName,
}: {
  courseName: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

const whatsappMessage = `Hello, I want to enquire about the following course:

Course: ${courseName}

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

  const whatsappNumber = "9199999999";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");

  setSubmitted(true);
};

  if (submitted) {
    return (
      <section className="mt-16">
        <div className="mx-auto max-w-2xl rounded-3xl bg-green-50 p-10 text-center">
          <div className="text-5xl">🎉</div>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Thank You!
          </h2>

          <p className="mt-3 text-slate-600">
            Your enquiry has been submitted successfully.
            We will contact you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
  <section id="enquiry" className="mt-16">
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            ENQUIRE NOW
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Start Your Learning Journey
          </h2>

          <p className="mt-3 text-slate-600">
            Fill in your details and we will get in touch with you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mt-5">
            <label className="mb-2 block font-medium text-slate-700">
              Phone / WhatsApp
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="mb-2 block font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mt-5">
            <label className="mb-2 block font-medium text-slate-700">
              Message
            </label>

            <textarea
               name="message"
               rows={4}
              placeholder="Tell us what you want to learn..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Submit Enquiry
          </button>

        </form>
      </div>
    </section>
  );
}