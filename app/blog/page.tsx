"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
const categories = [
  "All",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "AI",
];
const masterclasses = [
  {
    category: "JavaScript",
    title: "JavaScript Masterclass",
    description:
      "Learn JavaScript step-by-step from fundamentals to advanced concepts, practical coding, challenges and interview preparation.",
    topics: "100+ Topics",
    projects: "5+ Projects",
    link: "/blog/javascript",
    icon: "JS",
  },

  {
    category: "React",
    title: "React Masterclass",
    description:
      "Learn React from the basics to hooks, components, API integration, CRUD applications, projects and interview preparation.",
    topics: "40+ Topics",
    projects: "3+ Projects",
    link: "/blog/react",
    icon: "⚛",
  },

  {
    category: "Node.js",
    title: "Node.js Masterclass",
    description:
      "Learn Node.js step-by-step with Express.js, REST APIs, MongoDB, authentication, backend projects and interview preparation.",
    topics: "70+ Topics",
    projects: "4+ Projects",
    link: "/blog/node",
    icon: "Node",
  },
  {
  category: "Express.js",
  title: "Express.js Masterclass",
  description:
    "Learn Express.js step-by-step with routing, middleware, REST APIs, MongoDB, authentication, security, projects and interview preparation.",
  topics: "60+ Topics",
  projects: "4+ Projects",
  link: "/blog/express",
  icon: "Ex",
},
];

const tutorials = [
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Kya Hai?",
    description:
      "Learn JavaScript from the beginning with simple explanations, real-world examples and practical coding.",
    time: "8 min read",
    link: "/blog/javascript",
  },
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Variables",
    description:
      "Understand var, let and const with practical examples and interview questions.",
    time: "10 min read",
    link: "/blog/javascript",
  },
  {
    category: "JavaScript",
    level: "Beginner",
    title: "JavaScript Data Types",
    description:
      "Learn strings, numbers, booleans, undefined, null and other important JavaScript data types.",
    time: "12 min read",
    link: "/blog/javascript",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredMasterclasses = useMemo(() => {
    return masterclasses.filter((course) => {
      const matchesCategory =
        activeCategory === "All" || course.category === activeCategory;

      const searchText = search.toLowerCase();
const matchesSearch =
  (course.title ?? "").toLowerCase().includes(searchText) ||
  course.description.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((tutorial) => {
      const matchesCategory =
        activeCategory === "All" || tutorial.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        tutorial.title.toLowerCase().includes(searchText) ||
        tutorial.description.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);

    setTimeout(() => {
      document
        .getElementById("learning-content")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Career Tech with Annu
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Learn. Build. Grow.
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Practical coding tutorials, structured learning paths, real-world
            projects, interview preparation and developer challenges.
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
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Learning Content */}
      <section
        id="learning-content"
        className="scroll-mt-8 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Structured Learning
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              {activeCategory === "All"
                ? "Start Your Learning Journey"
                : `${activeCategory} Learning`}
            </h2>

            <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-600">
              {activeCategory === "All"
                ? "Follow complete learning paths instead of learning random topics. Each masterclass is organized step-by-step for practical development."
                : `Explore structured ${activeCategory} learning resources with practical examples and projects.`}
            </p>
          </div>

          {/* Masterclasses */}
          {filteredMasterclasses.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">
              {filteredMasterclasses.map((course) => (
                <article
                  key={course.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-8 text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold backdrop-blur-sm">
                        {course.icon}
                      </div>

                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      {course.title}
                    </h3>

                    <p className="mt-4 leading-7 text-blue-100">
                      {course.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-900">
                          {course.topics}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Learning Topics
                        </p>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-2xl font-bold text-slate-900">
                          {course.projects}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          Practical Projects
                        </p>
                      </div>
                    </div>

                    <Link
                      href={course.link}
                      className="mt-7 flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                    >
                      Start Learning
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* No Masterclass */}
          {filteredMasterclasses.length === 0 &&
            filteredTutorials.length === 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  No learning content found
                </h3>

                <p className="mt-2 text-gray-600">
                  Try another category or search term.
                </p>
              </div>
            )}
        </div>
      </section>

      {/* Quick Tutorials */}
      {filteredTutorials.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Quick Tutorials
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                Latest Tutorials
              </h2>

              <p className="mt-2 text-gray-600">
                Learn individual concepts with practical examples.
              </p>
            </div>

            <span className="hidden text-sm text-gray-500 sm:block">
              {filteredTutorials.length} Tutorials
            </span>
          </div>

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

                <Link
                  href={tutorial.link}
                  className="mt-6 inline-block font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Read Tutorial →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}