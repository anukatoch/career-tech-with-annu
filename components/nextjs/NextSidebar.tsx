"use client";

import { useState } from "react";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Next.js Introduction",
    items: [
      { number: "01", title: "What Is Next.js?", slug: "what-is-nextjs" },
      { number: "02", title: "Why Next.js?", slug: "why-nextjs" },
      { number: "03", title: "Next.js Features", slug: "features" },
      { number: "04", title: "Next.js vs React", slug: "nextjs-vs-react" },
      { number: "05", title: "Where Is Next.js Used?", slug: "where-nextjs-used" },
      { number: "06", title: "How Next.js Works", slug: "how-nextjs-works" },
    ],
  },

  {
    id: "setup",
    number: "02",
    title: "Next.js Setup",
    items: [
      { number: "01", title: "Create Next.js App", slug: "create-next-app" },
      { number: "02", title: "Project Structure", slug: "project-structure" },
      { number: "03", title: "Run Next.js Project", slug: "run-project" },
      { number: "04", title: "VS Code Setup", slug: "vscode-setup" },
    ],
  },

  {
    id: "routing",
    number: "03",
    title: "Routing",
    items: [
      { number: "01", title: "App Router", slug: "app-router" },
      { number: "02", title: "Pages and Layouts", slug: "pages-layouts" },
      { number: "03", title: "Dynamic Routes", slug: "dynamic-routes" },
      { number: "04", title: "Nested Routes", slug: "nested-routes" },
      { number: "05", title: "Link Component", slug: "link-component" },
    ],
  },

  {
    id: "components",
    number: "04",
    title: "Components",
    items: [
      { number: "01", title: "Server Components", slug: "server-components" },
      { number: "02", title: "Client Components", slug: "client-components" },
      { number: "03", title: "use client", slug: "use-client" },
      { number: "04", title: "Reusable Components", slug: "reusable-components" },
    ],
  },

  {
    id: "data-fetching",
    number: "05",
    title: "Data Fetching",
    items: [
      { number: "01", title: "Fetch API", slug: "fetch-api" },
      { number: "02", title: "Async Components", slug: "async-components" },
      { number: "03", title: "Loading UI", slug: "loading-ui" },
      { number: "04", title: "Error Handling", slug: "error-handling" },
    ],
  },

  {
    id: "api",
    number: "06",
    title: "API & Backend",
    items: [
      { number: "01", title: "Route Handlers", slug: "route-handlers" },
      { number: "02", title: "GET API", slug: "get-api" },
      { number: "03", title: "POST API", slug: "post-api" },
      { number: "04", title: "PUT API", slug: "put-api" },
      { number: "05", title: "DELETE API", slug: "delete-api" },
    ],
  },

  {
    id: "database",
    number: "07",
    title: "Database",
    items: [
      { number: "01", title: "MongoDB Connection", slug: "mongodb" },
      { number: "02", title: "Mongoose", slug: "mongoose" },
      { number: "03", title: "CRUD Operations", slug: "crud" },
    ],
  },

  {
    id: "authentication",
    number: "08",
    title: "Authentication",
    items: [
      {
        number: "01",
        title: "Authentication Basics",
        slug: "authentication",
      },
      {
        number: "02",
        title: "Login & Register",
        slug: "login-register",
      },
      { number: "03", title: "NextAuth", slug: "nextauth" },
      {
        number: "04",
        title: "Protected Routes",
        slug: "protected-routes",
      },
    ],
  },

  {
    id: "styling",
    number: "09",
    title: "Styling",
    items: [
      { number: "01", title: "CSS", slug: "css" },
      { number: "02", title: "CSS Modules", slug: "css-modules" },
      { number: "03", title: "Tailwind CSS", slug: "tailwind-css" },
    ],
  },

  {
    id: "advanced",
    number: "10",
    title: "Advanced Next.js",
    items: [
      { number: "01", title: "Middleware", slug: "middleware" },
      {
        number: "02",
        title: "Environment Variables",
        slug: "environment-variables",
      },
      {
        number: "03",
        title: "SEO & Metadata",
        slug: "seo-metadata",
      },
      {
        number: "04",
        title: "Image Optimization",
        slug: "image-optimization",
      },
    ],
  },

  {
    id: "deployment",
    number: "11",
    title: "Deployment",
    items: [
      { number: "01", title: "Build Next.js App", slug: "build" },
      { number: "02", title: "Deploy on Vercel", slug: "vercel" },
      {
        number: "03",
        title: "Environment Variables",
        slug: "deployment-env",
      },
    ],
  },

  {
    id: "projects",
    number: "12",
    title: "Next.js Projects",
    items: [
      { number: "01", title: "Blog Website", slug: "blog-project" },
      {
        number: "02",
        title: "E-Commerce Website",
        slug: "ecommerce-project",
      },
      { number: "03", title: "Job Portal", slug: "job-portal-project" },
      {
        number: "04",
        title: "Full Stack Project",
        slug: "fullstack-project",
      },
    ],
  },
];

interface NextSidebarProps {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
}

export default function NextSidebar({
  activeTopic,
  onTopicSelect,
}: NextSidebarProps) {
  const [openSection, setOpenSection] = useState<string | null>(
    "introduction"
  );

  const [search, setSearch] = useState("");

  const totalTopics = sections.reduce(
    (total, section) => total + section.items.length,
    0
  );

  const activeIndex = sections.reduce((total, section) => {
    const index = section.items.findIndex(
      (item) => item.slug === activeTopic
    );

    return index >= 0 ? total + index + 1 : total;
  }, 0);

  const progress =
    totalTopics > 0
      ? Math.round((activeIndex / totalTopics) * 100)
      : 1;

  const toggleSection = (sectionId: string) => {
    setOpenSection((current) =>
      current === sectionId ? null : sectionId
    );
  };

  const handleTopicClick = (
    topicId: string,
    sectionId: string
  ) => {
    onTopicSelect(topicId);

    // Section open rahega
    setOpenSection(sectionId);
  };

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <aside className="w-full h-full min-h-screen bg-white">
      {/* =========================================
          TOP HEADER
      ========================================== */}
      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#071b43]
          via-[#102f70]
          to-[#173a82]
          px-7
          pt-10
          pb-9
          text-white
        "
      >
        {/* Decorative circles */}
        <div
          className="
            absolute
            -right-16
            -top-20
            h-44
            w-44
            rounded-full
            bg-blue-400/10
          "
        />

        <div
          className="
            absolute
            -left-16
            bottom-[-70px]
            h-44
            w-44
            rounded-full
            bg-blue-300/10
          "
        />

        {/* Brand */}
        <div className="relative flex items-center gap-5">
          {/* Logo */}
          <div
            className="
              flex
              h-[86px]
              w-[86px]
              shrink-0
              items-center
              justify-center
              rounded-[23px]
              border-[5px]
              border-blue-300/20
              bg-[#287cf2]
              shadow-lg
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-green-300
                to-emerald-400
              "
            />
          </div>

          <div>
            <p
              className="
                text-[13px]
                font-bold
                tracking-[2px]
                text-blue-200
              "
            >
              CAREER TECH WITH ANNU
            </p>

            <h1 className="mt-2 text-[30px] font-extrabold leading-none">
              Next.js
            </h1>

            <p className="mt-3 text-[16px] font-medium text-blue-100">
              Complete Masterclass
            </p>
          </div>
        </div>

        {/* Progress */}
        <div
          className="
            relative
            mt-10
            rounded-[20px]
            border
            border-blue-300/20
            bg-white/[0.07]
            px-5
            py-6
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[14px]
                font-bold
                tracking-[1.5px]
                text-blue-100
              "
            >
              YOUR PROGRESS
            </span>

            <span className="text-[24px] font-extrabold">
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#102d63]">
            <div
              className="
                h-full
                rounded-full
                bg-cyan-400
                transition-all
                duration-500
              "
              style={{
                width: `${Math.max(progress, 1)}%`,
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[14px] font-medium text-blue-200">
              Topic {Math.max(activeIndex, 1)} of {totalTopics}
            </span>

            <span className="text-[14px] font-bold text-cyan-300">
              Keep going 🚀
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          SEARCH
      ========================================== */}
      <div className="border-b border-gray-200 bg-white px-5 py-5">
        <div
          className="
            flex
            h-[68px]
            items-center
            gap-3
            rounded-[18px]
            border
            border-gray-200
            bg-white
            px-5
            shadow-[0_2px_6px_rgba(0,0,0,0.06)]
          "
        >
          <span className="text-[23px]">🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Next.js topics..."
            className="
              w-full
              bg-transparent
              text-[16px]
              font-medium
              text-gray-800
              outline-none
              placeholder:text-gray-400
            "
          />
        </div>
      </div>

      {/* =========================================
          COURSE CONTENT
      ========================================== */}
      <div className="px-4 py-7">
        <div className="px-2">
          <h2
            className="
              text-[15px]
              font-extrabold
              tracking-[1.5px]
              text-gray-900
            "
          >
            COURSE CONTENT
          </h2>

          <p className="mt-2 text-[14px] font-medium text-gray-500">
            Learn step-by-step
          </p>
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-3">
          {filteredSections.map((section) => {
            const isOpen = openSection === section.id;

            return (
              <div
                key={section.id}
                className={`
                  overflow-hidden
                  rounded-[20px]
                  border
                  transition-all
                  duration-200
                  ${
                    isOpen
                      ? "border-[#62a9ff] bg-white"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                {/* Section Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    px-4
                    py-4
                    text-left
                    transition-colors
                    ${
                      isOpen
                        ? "bg-[#edf5ff]"
                        : "bg-white hover:bg-gray-50"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Section Number */}
                    <div
                      className={`
                        flex
                        h-[40px]
                        w-[40px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[13px]
                        text-[15px]
                        font-extrabold
                        ${
                          isOpen
                            ? "bg-[#123c82] text-white"
                            : "bg-[#eef2f7] text-[#61728d]"
                        }
                      `}
                    >
                      {section.number}
                    </div>

                    <div>
                      <h3
                        className={`
                          text-[15px]
                          font-extrabold
                          ${
                            isOpen
                              ? "text-[#172033]"
                              : "text-gray-800"
                          }
                        `}
                      >
                        {section.title}
                      </h3>

                      <p
                        className={`
                          mt-1
                          text-[12px]
                          font-medium
                          ${
                            isOpen
                              ? "text-blue-600"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {section.items.length} topics
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`
                      flex
                      h-[40px]
                      w-[40px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[12px]
                      text-lg
                      transition-all
                      duration-200
                      ${
                        isOpen
                          ? "bg-[#123c82] text-white"
                          : "bg-[#eef2f7] text-gray-600"
                      }
                    `}
                  >
                    <span
                      className={`
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-0" : "rotate-180"}
                      `}
                    >
                      ⌃
                    </span>
                  </div>
                </button>

                {/* Topics */}
                {isOpen && (
                  <div className="border-t border-gray-200 p-2">
                    {section.items.map((item) => {
                      const isActive = activeTopic === item.slug;

                      return (
                        <button
                          key={item.slug}
                          type="button"
                          onClick={() =>
                            handleTopicClick(
                              item.slug,
                              section.id
                            )
                          }
                          className={`
                            relative
                            mb-2
                            flex
                            min-h-[76px]
                            w-full
                            items-center
                            gap-4
                            rounded-[17px]
                            px-4
                            text-left
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "bg-[#123875] text-white shadow-md"
                                : "bg-white text-gray-800 hover:bg-[#f5f8fc]"
                            }
                          `}
                        >
                          {/* Cyan active line */}
                          {isActive && (
                            <span
                              className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-[5px]
                                rounded-l-full
                                bg-cyan-400
                              "
                            />
                          )}

                          {/* Topic Number */}
                          <div
                            className={`
                              flex
                              h-[38px]
                              w-[38px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-[12px]
                              text-[13px]
                              font-bold
                              ${
                                isActive
                                  ? "bg-[#1d355d] text-cyan-300"
                                  : "bg-[#f0f4f8] text-[#61728d]"
                              }
                            `}
                          >
                            {item.number}
                          </div>

                          {/* Topic Text */}
                          <div className="min-w-0 flex-1">
                            <p
                              className={`
                                text-[15px]
                                font-extrabold
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-gray-800"
                                }
                              `}
                            >
                              {item.title}
                            </p>

                            <p
                              className={`
                                mt-1
                                text-[12px]
                                font-medium
                                ${
                                  isActive
                                    ? "text-blue-200"
                                    : "text-gray-400"
                                }
                              `}
                            >
                              Learning
                            </p>
                          </div>

                          {/* Completed */}
                          {isActive && (
                            <div
                              className="
                                flex
                                h-[30px]
                                w-[30px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-cyan-400
                                text-[18px]
                                font-black
                                text-[#073267]
                              "
                            >
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}