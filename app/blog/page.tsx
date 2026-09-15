"use client";

import { useState } from "react";

const categories = [
  "All",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "AI",
];

const tutorials = [
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Kya Hai?",
    description:
      "Learn JavaScript from the beginning with simple explanations, real-world examples and practical coding.",
    time: "8 min read",
  },
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Variables",
    description:
      "Understand var, let and const with practical examples and interview questions.",
    time: "10 min read",
  },
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Data Types",
    description:
      "Learn strings, numbers, booleans, undefined, null and other important JavaScript data types.",
    time: "12 min read",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      activeCategory === "All" || tutorial.category === activeCategory;

    const matchesSearch =
      tutorial.title.toLowerCase().includes(search.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Career Tech with Annu
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Learn. Build. Grow. 
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Practical coding tutorials with real-world examples, interview
            questions, coding practice and developer challenges.
          </p>
        </div>

        {/* Search */}
        <div className="mt-10 max-w-2xl">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Tutorials */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Tutorials
            </h2>

            <p className="mt-2 text-gray-600">
              Learn step-by-step and become interview ready.
            </p>
          </div>

          <span className="hidden text-sm text-gray-500 sm:block">
            {filteredTutorials.length} Tutorials
          </span>
        </div>

        {filteredTutorials.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              No tutorials found
            </h3>

            <p className="mt-2 text-gray-600">
              Try another search or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTutorials.map((tutorial) => (
              <article
                key={tutorial.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    {tutorial.category}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {tutorial.level}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {tutorial.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {tutorial.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm">
                  <span className="text-gray-500">{tutorial.time}</span>

                  <span className="font-medium text-gray-700">
                    🎯 Interview Ready
                  </span>
                </div>

                <button className="mt-6 font-semibold text-blue-600 transition group-hover:text-blue-800">
                  Read Tutorial →
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}