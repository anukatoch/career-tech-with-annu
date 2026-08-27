

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;

    const whatsappMessage = `Hello, I want career guidance.

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    // Apna actual WhatsApp number yahan add karna
    // Example: 919876543210
    const whatsappNumber = "919999999999";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-green-50 p-10 text-center">
          <div className="text-5xl">🎉</div>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Thank You!
          </h2>

          <p className="mt-3 text-slate-600">
            Your message has been submitted successfully.
            We will contact you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            CONTACT INFORMATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Let's Talk About Your Career
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Whether you are a student looking to start your tech career
            or need guidance about the right course, feel free to contact us.
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Phone
                </h3>

                <p className="text-slate-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Email
                </h3>

                <p className="text-slate-600">
                  info@careertech.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Location
                </h3>

                <p className="text-slate-600">
                  Dwarka, New Delhi
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-slate-900">
            Get Career Guidance
          </h3>

          <p className="mt-2 text-slate-600">
            Fill in your details and we will get back to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}