"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { javascriptSections } from "@/data/javascript/topics";

type JsSidebarProps = {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
};

export default function JsSidebar({
  activeTopic,
  onTopicSelect,
}: JsSidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(
    javascriptSections.length > 0
      ? [javascriptSections[0].id]
      : []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeTopicRef = useRef<HTMLButtonElement | null>(null);

  /* =========================================================
     ALL TOPICS
  ========================================================= */

  const allTopics = useMemo(
    () =>
      javascriptSections.flatMap(
        (section) => section.topics
      ),
    []
  );

  const activeIndex = Math.max(
    0,
    allTopics.findIndex(
      (topic) => topic.id === activeTopic
    )
  );

  const progress =
    allTopics.length > 0
      ? Math.round(
          ((activeIndex + 1) / allTopics.length) * 100
        )
      : 0;

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  const activeSection = javascriptSections.find(
    (section) =>
      section.topics.some(
        (topic) => topic.id === activeTopic
      )
  );

  /* =========================================================
     OPEN ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    if (!activeSection) return;

    setOpenSections((current) => {
      if (current.includes(activeSection.id)) {
        return current;
      }

      return [...current, activeSection.id];
    });
  }, [activeTopic, activeSection]);

  /* =========================================================
     TOGGLE SECTION
  ========================================================= */

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId]
    );
  };

  /* =========================================================
     TOPIC CLICK
  ========================================================= */

  const handleTopicClick = (
    topicId: string,
    sectionId: string
  ) => {
    onTopicSelect(topicId);

    setOpenSections((current) =>
      current.includes(sectionId)
        ? current
        : [...current, sectionId]
    );

    // Close mobile navigation after selecting topic
    setMobileOpen(false);
  };
  useEffect(() => {
  if (!activeTopicRef.current) return;

  activeTopicRef.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}, [activeTopic]);

  /* =========================================================
     SEARCH
  ========================================================= */

  const filteredSections = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return javascriptSections;
    }

    return javascriptSections
      .map((section) => {
        const sectionMatch = section.title
          .toLowerCase()
          .includes(query);

        const matchingTopics = section.topics.filter(
          (topic) =>
            topic.title
              .toLowerCase()
              .includes(query)
        );

        if (sectionMatch) {
          return section;
        }

        if (matchingTopics.length > 0) {
          return {
            ...section,
            topics: matchingTopics,
          };
        }

        return null;
      })
      .filter(Boolean) as typeof javascriptSections;
  }, [searchTerm]);

  /* =========================================================
     OPEN SEARCH RESULTS
  ========================================================= */

  useEffect(() => {
    if (!searchTerm.trim()) return;

    setOpenSections(
      filteredSections.map(
        (section) => section.id
      )
    );
  }, [searchTerm, filteredSections]);

  return (
    <aside className="w-full lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] lg:self-start">

      {/* =====================================================
          MOBILE COURSE NAVIGATION
      ===================================================== */}

      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md"
        >
          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7df1e] text-lg font-black text-slate-950">
              JS
            </div>

            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                Course Navigation
              </p>

              <p className="mt-1 truncate text-sm font-black text-slate-900">
                {allTopics.find(
                  (topic) =>
                    topic.id === activeTopic
                )?.title || "JavaScript"}
              </p>
            </div>
          </div>

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all ${
              mobileOpen
                ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </div>

      {/* =====================================================
          MAIN SIDEBAR
      ===================================================== */}

    <div
  className={`${
    mobileOpen ? "flex" : "hidden"
  } w-full flex-col rounded-[26px] border border-slate-300 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.10)] max-h-[75vh] overflow-y-auto overscroll-contain lg:flex lg:h-[calc(100vh-48px)] lg:max-h-none lg:overflow-hidden`}
>
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#07152f] via-[#0b2454] to-[#123b82] px-6 py-7 text-white">

          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10" />

          <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet-400/10" />

          <div className="relative">

            {/* BRAND */}

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-[#f7df1e] text-xl font-black text-slate-950 shadow-[0_8px_25px_rgba(0,0,0,0.20)] ring-4 ring-white/10">
                JS
              </div>

              <div className="min-w-0">

                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-200">
                  Career Tech with Annu
                </p>

                <h2 className="mt-1 text-[23px] font-black tracking-tight text-white">
                  JavaScript
                </h2>

                <p className="mt-1 text-[13px] font-semibold text-blue-100/75">
                  Complete Masterclass
                </p>

              </div>

            </div>

            {/* PROGRESS */}

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">

              <div className="flex items-center justify-between">

                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-blue-100">
                  Your Progress
                </p>

                <span className="text-lg font-black text-white">
                  {progress}%
                </span>

              </div>

              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-black/20">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div className="mt-2.5 flex items-center justify-between">

                <p className="text-[12px] font-semibold text-blue-100/70">
                  Topic {activeIndex + 1} of{" "}
                  {allTopics.length}
                </p>

                <p className="text-[12px] font-bold text-cyan-300">
                  Keep going 🚀
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* ===================================================
            SEARCH
        =================================================== */}

        <div className="shrink-0 border-b border-slate-200 bg-slate-50 p-4">

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              placeholder="Search JavaScript topics..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-3.5 pl-11 pr-4 text-[14px] font-bold text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* ===================================================
            SCROLLABLE COURSE CONTENT
        =================================================== */}

    <div className="sidebar-scroll overflow-y-auto">

          <div className="bg-white px-3 pb-5 pt-5">

            {/* HEADER */}

            <div className="mb-4 flex items-center justify-between px-2">

              <div>

                <h3 className="text-[14px] font-black uppercase tracking-[0.13em] text-slate-950">
                  Course Content
                </h3>

                <p className="mt-1 text-[12px] font-semibold text-slate-500">
                  Learn step-by-step
                </p>

              </div>

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[11px] font-black text-blue-700 transition hover:bg-blue-100"
                >
                  Clear
                </button>
              )}

            </div>

            {/* =================================================
                SECTION LIST
            ================================================= */}

            <div className="space-y-3">

              {filteredSections.map((section) => {

                const originalIndex =
                  javascriptSections.findIndex(
                    (item) =>
                      item.id === section.id
                  );

                const isOpen =
                  openSections.includes(
                    section.id
                  );

                const hasActiveTopic =
                  section.topics.some(
                    (topic) =>
                      topic.id === activeTopic
                  );

                return (
                  <div
                    key={section.id}
                    className={`overflow-hidden rounded-[19px] border-2 transition-all duration-200 ${
                      hasActiveTopic
                        ? "border-blue-300 shadow-[0_5px_20px_rgba(37,99,235,0.10)]"
                        : "border-slate-200 shadow-sm hover:border-slate-300"
                    }`}
                  >

                    {/* SECTION HEADER */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleSection(section.id)
                      }
                      aria-expanded={isOpen}
                      className={`group flex w-full items-center gap-3 px-3.5 py-4 text-left transition ${
                        isOpen || hasActiveTopic
                          ? "bg-blue-50"
                          : "bg-white hover:bg-slate-50"
                      }`}
                    >

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black transition ${
                          isOpen || hasActiveTopic
                            ? "bg-gradient-to-br from-[#0b1f44] to-[#164b9b] text-white shadow-md"
                            : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                        }`}
                      >
                        {String(
                          originalIndex + 1
                        ).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">

                        <h4
                          className={`text-[17px] font-black leading-[1.4] tracking-[-0.01em] ${
                            isOpen ||
                            hasActiveTopic
                              ? "text-[#081a3a]"
                              : "text-slate-900"
                          }`}
                        >
                          {section.title.replace(
                            /^\d+\.\s*/,
                            ""
                          )}
                        </h4>

                        <p
                          className={`mt-1 text-[12px] font-bold ${
                            isOpen ||
                            hasActiveTopic
                              ? "text-blue-600"
                              : "text-slate-500"
                          }`}
                        >
                          {section.topics.length}{" "}
                          {section.topics.length === 1
                            ? "topic"
                            : "topics"}
                        </p>

                      </div>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-blue-200 bg-[#0b1f44] text-white shadow-md"
                            : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>

                    </button>

                    {/* TOPICS */}

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >

                      <div className="min-h-0 overflow-hidden">

                        <div className="border-t-2 border-blue-100 bg-slate-100/80 p-2.5">

                          {section.topics.map(
                            (topic, topicIndex) => {

                              const isActive =
                                topic.id === activeTopic;

                              return (
                              <button
  key={topic.id}
  type="button"
  ref={isActive ? activeTopicRef : null}
  onClick={() =>
    handleTopicClick(
      topic.id,
      section.id
    )
  }
                                  className={`group relative mb-2 flex w-full items-center gap-3 rounded-[15px] px-3 py-3.5 text-left transition-all duration-200 last:mb-0 ${
                                    isActive
                                      ? "bg-gradient-to-r from-[#07152f] to-[#123b82] shadow-[0_7px_20px_rgba(15,23,42,0.20)]"
                                      : "border border-transparent bg-white hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm"
                                  }`}
                                >

                                  {isActive && (
                                    <span className="absolute left-0 top-3 h-[calc(100%-24px)] w-1 rounded-r-full bg-cyan-400" />
                                  )}

                                  <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[12px] font-black ${
                                      isActive
                                        ? "bg-white/10 text-cyan-300"
                                        : "bg-slate-100 text-slate-700"
                                    }`}
                                  >
                                    {String(
                                      topicIndex + 1
                                    ).padStart(2, "0")}
                                  </span>

                                  <div className="min-w-0 flex-1">

                                    <p
                                      className={`text-[15px] font-black leading-6 ${
                                        isActive
                                          ? "text-white"
                                          : "text-slate-900"
                                      }`}
                                    >
                                      {topic.title}
                                    </p>

                                    <p
                                      className={`mt-0.5 text-[12px] font-bold ${
                                        isActive
                                          ? "text-blue-100/75"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {topic.level ||
                                        "Learning"}
                                    </p>

                                  </div>

                                  {isActive && (
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950 shadow-md">
                                      ✓
                                    </span>
                                  )}

                                </button>
                              );
                            }
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* NO RESULTS */}

            {filteredSections.length === 0 && (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-9 text-center">

                <div className="text-3xl">
                  🔎
                </div>

                <h4 className="mt-3 text-sm font-black text-slate-900">
                  No topic found
                </h4>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Try another JavaScript topic
                </p>

              </div>
            )}

          </div>

        </div>

        {/* ===================================================
            QUICK ACCESS
        =================================================== */}

        <div className="shrink-0 border-t border-slate-200 bg-slate-50 p-4">

          <p className="mb-3 px-1 text-[11px] font-black uppercase tracking-[0.14em] text-slate-600">
            Quick Access
          </p>

          <div className="grid grid-cols-2 gap-2.5">

            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 bg-white px-3 py-3 text-[13px] font-black text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              🎯 Interview
            </button>

            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 bg-white px-3 py-3 text-[13px] font-black text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              💻 Projects
            </button>

          </div>

        </div>

      </div>
    </aside>
  );
}