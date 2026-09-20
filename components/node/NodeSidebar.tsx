"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { nodeSections } from "@/data/node/topics";

type NodeSidebarProps = {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
};

export default function NodeSidebar({
  activeTopic,
  onTopicSelect,
}: NodeSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [openSections, setOpenSections] = useState<string[]>(
    nodeSections.length > 0 ? [nodeSections[0].id] : []
  );

  const activeTopicRef = useRef<HTMLButtonElement | null>(null);

  /* =========================================================
     ALL TOPICS
  ========================================================= */

  const allTopics = useMemo(
    () => nodeSections.flatMap((section) => section.topics),
    []
  );

  const activeIndex = Math.max(
    0,
    allTopics.findIndex((topic) => topic.id === activeTopic)
  );

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  const activeSection = nodeSections.find((section) =>
    section.topics.some((topic) => topic.id === activeTopic)
  );

  /* =========================================================
     KEEP ACTIVE SECTION OPEN
  ========================================================= */

  useEffect(() => {
    if (!activeSection) return;

    setOpenSections((current) => {
      if (current.includes(activeSection.id)) {
        return current;
      }

      return [...current, activeSection.id];
    });
  }, [activeSection]);

  /* =========================================================
     ACTIVE TOPIC SCROLL
  ========================================================= */

  useEffect(() => {
    if (!activeTopicRef.current) return;

    const timer = setTimeout(() => {
      activeTopicRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTopic]);

  /* =========================================================
     TOGGLE SECTION
  ========================================================= */

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) => {
      if (current.includes(sectionId)) {
        return current.filter((id) => id !== sectionId);
      }

      return [...current, sectionId];
    });
  };

  /* =========================================================
     TOPIC CLICK
  ========================================================= */

  const handleTopicClick = (
    topicId: string,
    sectionId: string
  ) => {
    onTopicSelect(topicId);

    setOpenSections((current) => {
      if (current.includes(sectionId)) {
        return current;
      }

      return [...current, sectionId];
    });

    setMobileOpen(false);
  };

  /* =========================================================
     SEARCH
  ========================================================= */

  const filteredSections = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return nodeSections;
    }

    return nodeSections
      .map((section) => {
        const sectionMatch = section.title
          .toLowerCase()
          .includes(query);

        const matchingTopics = section.topics.filter((topic) =>
          topic.title.toLowerCase().includes(query)
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
      .filter(Boolean) as typeof nodeSections;
  }, [searchTerm]);

  /* =========================================================
     OPEN SEARCH RESULTS
  ========================================================= */

  useEffect(() => {
    if (!searchTerm.trim()) return;

    setOpenSections(
      filteredSections.map((section) => section.id)
    );
  }, [searchTerm, filteredSections]);

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <aside className="w-full lg:sticky lg:top-6 lg:self-start">

      {/* =====================================================
          MOBILE COURSE NAVIGATION
      ===================================================== */}

      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() =>
            setMobileOpen((current) => !current)
          }
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm"
        >
          <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
              🟢
            </div>

            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                Course Navigation
              </p>

              <p className="mt-1 truncate text-sm font-black text-slate-900">
                {allTopics.find(
                  (topic) => topic.id === activeTopic
                )?.title || "Node.js"}
              </p>
            </div>

          </div>

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform ${
              mobileOpen
                ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
          mobileOpen ? "block" : "hidden"
        } w-full overflow-y-auto rounded-[26px] border border-slate-300 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.10)] lg:block lg:max-h-[calc(100vh-48px)]`}
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#0b2454] to-[#123b82] px-6 py-7 text-white">

          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/10" />

          <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-violet-400/10" />

          <div className="relative">

            {/* BRAND */}

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-blue-500 text-2xl font-black text-white shadow-lg ring-4 ring-white/10">
                🟢
              </div>

              <div className="min-w-0">

                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-200">
                  Career Tech with Annu
                </p>

                <h2 className="mt-1 text-[23px] font-black tracking-tight text-white">
                  Node.js
                </h2>

                <p className="mt-1 text-[13px] font-semibold text-blue-100/75">
                  Complete Masterclass
                </p>

              </div>

            </div>

            {/* PROGRESS */}

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">

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
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 transition-all"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div className="mt-2.5 flex items-center justify-between">

                <p className="text-[12px] font-semibold text-blue-100/70">
                  Topic {activeIndex + 1} of {allTopics.length}
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

        <div className="border-b border-slate-200 bg-slate-50 p-4">

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
              placeholder="Search Node.js topics..."
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-3.5 pl-11 pr-12 text-[14px] font-bold text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-black text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            )}

          </div>

        </div>

        {/* ===================================================
            COURSE CONTENT
        =================================================== */}

        <div className="bg-white px-3 pb-6 pt-5">

          <div className="mb-4 px-2">

            <h3 className="text-[14px] font-black uppercase tracking-[0.13em] text-slate-950">
              Course Content
            </h3>

            <p className="mt-1 text-[12px] font-semibold text-slate-500">
              Learn step-by-step
            </p>

          </div>

          {/* =================================================
              SECTION LIST
          ================================================= */}

          <div className="space-y-3">

            {filteredSections.map((section) => {

              const originalIndex =
                nodeSections.findIndex(
                  (item) => item.id === section.id
                );

              const isOpen =
                openSections.includes(section.id);

              const hasActiveTopic =
                section.topics.some(
                  (topic) =>
                    topic.id === activeTopic
                );

              return (
                <div
                  key={section.id}
                  className={`overflow-hidden rounded-[19px] border-2 ${
                    hasActiveTopic
                      ? "border-blue-300 shadow-md"
                      : "border-slate-200 shadow-sm"
                  }`}
                >

                  {/* SECTION HEADER */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleSection(section.id)
                    }
                    aria-expanded={isOpen}
                    className={`flex w-full items-center gap-3 px-3.5 py-4 text-left ${
                      isOpen || hasActiveTopic
                        ? "bg-blue-50"
                        : "bg-white"
                    }`}
                  >

                    {/* SECTION NUMBER */}

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                        isOpen || hasActiveTopic
                          ? "bg-gradient-to-br from-[#0b1f44] to-[#164b9b] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {String(
                        originalIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    {/* SECTION NAME */}

                    <div className="min-w-0 flex-1">

                      <h4 className="text-[17px] font-black leading-[1.4] text-slate-900">
                        {section.title.replace(
                          /^\d+\.\s*/,
                          ""
                        )}
                      </h4>

                      <p className="mt-1 text-[12px] font-bold text-blue-600">
                        {section.topics.length}{" "}
                        {section.topics.length === 1
                          ? "topic"
                          : "topics"}
                      </p>

                    </div>

                    {/* ARROW */}

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform ${
                        isOpen
                          ? "rotate-180 border-blue-200 bg-[#0b1f44] text-white"
                          : "border-slate-200 bg-slate-50 text-slate-600"
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

                  {/* =================================================
                      TOPICS
                  ================================================= */}

                  {isOpen && (
                    <div className="border-t-2 border-blue-100 bg-slate-100/80 p-2.5">

                      {section.topics.map(
                        (topic, topicIndex) => {

                          const isActive =
                            topic.id ===
                            activeTopic;

                          return (
                            <button
                              key={topic.id}
                              type="button"
                              ref={
                                isActive
                                  ? activeTopicRef
                                  : null
                              }
                              onClick={() =>
                                handleTopicClick(
                                  topic.id,
                                  section.id
                                )
                              }
                              className={`relative mb-2 flex w-full items-center gap-3 rounded-[15px] px-3 py-3.5 text-left last:mb-0 ${
                                isActive
                                  ? "bg-gradient-to-r from-[#07152f] to-[#123b82] shadow-lg"
                                  : "border border-transparent bg-white hover:border-blue-200 hover:bg-blue-50"
                              }`}
                            >

                              {/* ACTIVE LINE */}

                              {isActive && (
                                <span className="absolute left-0 top-3 h-[calc(100%-24px)] w-1 rounded-r-full bg-cyan-400" />
                              )}

                              {/* TOPIC NUMBER */}

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

                              {/* TOPIC NAME */}

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
                                  Learning
                                </p>

                              </div>

                              {/* ACTIVE CHECK */}

                              {isActive && (
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950">
                                  ✓
                                </span>
                              )}

                            </button>
                          );
                        }
                      )}

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* =================================================
              NO RESULTS
          ================================================= */}

          {filteredSections.length === 0 && (
            <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-9 text-center">

              <div className="text-3xl">
                🔎
              </div>

              <h4 className="mt-3 text-sm font-black text-slate-900">
                No topic found
              </h4>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                Try another Node.js topic
              </p>

            </div>
          )}

        </div>

        {/* ===================================================
            QUICK ACCESS
        =================================================== */}

        <div className="border-t border-slate-200 bg-slate-50 p-4">

          <p className="mb-3 px-1 text-[11px] font-black uppercase tracking-[0.14em] text-slate-600">
            Quick Access
          </p>

          <div className="grid grid-cols-2 gap-2.5">

            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 bg-white px-3 py-3 text-[13px] font-black text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              🎯 Interview
            </button>

            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 bg-white px-3 py-3 text-[13px] font-black text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              💻 Projects
            </button>

          </div>

        </div>

      </div>

    </aside>
  );
}