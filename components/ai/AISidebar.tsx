"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { aiSections } from "@/data/ai/topics";

type AISidebarProps = {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
};

export default function AISidebar({
  activeTopic,
  onTopicSelect,
}: AISidebarProps) {
  /* =========================================
     STATE
  ========================================= */

  const [openSections, setOpenSections] = useState<string[]>(
    aiSections[0]?.id ? [aiSections[0].id] : []
  );

  const [searchTerm, setSearchTerm] = useState("");

  const activeTopicRef =
    useRef<HTMLButtonElement | null>(null);

  /* =========================================
     ALL TOPICS
  ========================================= */

  const allTopics = useMemo(
    () => aiSections.flatMap((section) => section.topics),
    []
  );

  const activeIndex = allTopics.findIndex(
    (topic) => topic.id === activeTopic
  );

  const completedTopics =
    activeIndex >= 0 ? activeIndex + 1 : 1;

  const progress =
    allTopics.length > 0
      ? Math.round(
          (completedTopics / allTopics.length) * 100
        )
      : 0;

  /* =========================================
     SEARCH
  ========================================= */

  const filteredSections = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return aiSections;
    }

    return aiSections
      .map((section) => ({
        ...section,

        topics: section.topics.filter((topic) =>
          topic.title.toLowerCase().includes(search)
        ),
      }))
      .filter(
        (section) => section.topics.length > 0
      );
  }, [searchTerm]);

  /* =========================================
     ACTIVE TOPIC -> OPEN ITS SECTION
     
     IMPORTANT:
     Only ONE section will remain open.
  ========================================= */

  useEffect(() => {
    const activeSection = aiSections.find((section) =>
      section.topics.some(
        (topic) => topic.id === activeTopic
      )
    );

    if (activeSection) {
      setOpenSections([activeSection.id]);
    }
  }, [activeTopic]);

  /* =========================================
     SCROLL ACTIVE TOPIC
  ========================================= */

  useEffect(() => {
    activeTopicRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [activeTopic]);

  /* =========================================
     ACCORDION TOGGLE

     ONLY ONE SECTION OPEN AT A TIME
  ========================================= */

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) => {
      /* Same section clicked -> close it */
      if (current.includes(sectionId)) {
        return [];
      }

      /* Different section -> close old,
         open new */
      return [sectionId];
    });
  };

  /* =========================================
     TOPIC CLICK
  ========================================= */

  const handleTopicClick = (topicId: string) => {
    onTopicSelect(topicId);
  };

  /* =========================================
     UI
  ========================================= */

  return (
    <aside className="w-full lg:sticky lg:top-6">

      {/* =====================================
          MAIN SIDEBAR
      ===================================== */}

      <div className="flex w-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.10)]">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="bg-gradient-to-br from-[#071d45] via-[#123a80] to-[#214fa0] px-5 pb-5 pt-5 text-white">

          {/* TITLE AREA */}

          <div className="flex items-center gap-3">

            {/* AI ICON */}

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-4 border-blue-500/40 bg-blue-600 text-lg font-black shadow-lg">
              AI
            </div>

            {/* COURSE TITLE */}

            <div className="min-w-0">

              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-blue-200">
                CAREER TECH WITH ANNU
              </p>

              <h2 className="mt-0.5 text-xl font-black">
                AI & Gen AI
              </h2>

              <p className="text-sm font-medium text-blue-100">
                Complete Masterclass
              </p>

            </div>

          </div>

          {/* =================================
              PROGRESS CARD
          ================================= */}

          <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 px-4 py-4">

            {/* PROGRESS TITLE */}

            <div className="flex items-center justify-between">

              <p className="text-xs font-black uppercase tracking-[0.12em] text-blue-100">
                YOUR PROGRESS
              </p>

              <p className="text-xl font-black">
                {progress}%
              </p>

            </div>

            {/* PROGRESS BAR */}

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#09265c]">

              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            {/* PROGRESS INFO */}

            <div className="mt-3 flex items-center justify-between">

              <p className="text-[11px] font-medium text-blue-100">
                Topic {completedTopics} of{" "}
                {allTopics.length}
              </p>

              <p className="text-[11px] font-black text-cyan-300">
                Keep going 🚀
              </p>

            </div>

          </div>
        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        <div className="border-b border-slate-200 bg-white p-4">

          <div className="relative">

            {/* SEARCH ICON */}

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">
              🔎
            </span>

            {/* INPUT */}

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              placeholder="Search AI topics..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* =====================================
            COURSE CONTENT
        ===================================== */}

        <div className="max-h-[calc(100vh-300px)] overflow-y-auto px-3 py-4">

          {/* COURSE CONTENT TITLE */}

          <div className="mb-4 px-2">

            <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-800">
              COURSE CONTENT
            </p>

            <p className="mt-1 text-xs font-medium text-slate-400">
              Learn step-by-step
            </p>

          </div>

          {/* =====================================
              SECTIONS
          ===================================== */}

          <div className="space-y-2">

            {filteredSections.map(
              (section, sectionIndex) => {

                /* Is this section open? */

                const isOpen =
                  openSections.includes(section.id);

                /* Does this section contain
                   active topic? */

                const hasActiveTopic =
                  section.topics.some(
                    (topic) =>
                      topic.id === activeTopic
                  );

                return (
                  <div
                    key={section.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                      hasActiveTopic
                        ? "border-blue-400"
                        : "border-slate-200"
                    }`}
                  >

                    {/* =================================
                        SECTION HEADER
                    ================================= */}

                    <button
                      type="button"
                      onClick={() =>
                        toggleSection(section.id)
                      }
                      className={`group flex w-full items-center justify-between px-3 py-3 text-left transition-all duration-200 ${
                        hasActiveTopic
                          ? "bg-blue-50"
                          : "bg-white hover:bg-blue-50"
                      }`}
                    >

                      {/* LEFT SIDE */}

                      <div className="flex min-w-0 items-center gap-3">

                        {/* SECTION NUMBER */}

                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-all ${
                            hasActiveTopic
                              ? "bg-[#123a80] text-white"
                              : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                          }`}
                        >
                          {String(
                            sectionIndex + 1
                          ).padStart(2, "0")}
                        </div>

                        {/* SECTION TITLE */}

                        <div className="min-w-0">

                          <p
                            className={`truncate text-sm font-black transition-colors ${
                              hasActiveTopic
                                ? "text-[#123a80]"
                                : "text-slate-800 group-hover:text-blue-700"
                            }`}
                          >
                            {section.title}
                          </p>

                          <p
                            className={`mt-0.5 text-[11px] font-medium ${
                              hasActiveTopic
                                ? "text-blue-600"
                                : "text-slate-400"
                            }`}
                          >
                            {section.topics.length} topics
                          </p>

                        </div>

                      </div>

                      {/* =================================
                          DROPDOWN BUTTON
                      ================================= */}

                      <span
                        className={`ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all duration-200 ${
                          isOpen
                            ? "bg-[#123a80] text-white"
                            : "bg-blue-50 text-[#123a80] group-hover:bg-blue-100"
                        }`}
                      >
                        {isOpen ? "⌃" : "⌄"}
                      </span>

                    </button>

                    {/* =================================
                        TOPICS
                    ================================= */}

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-white p-2">

                        <div className="space-y-1">

                          {section.topics.map(
                            (topic, topicIndex) => {

                              const isActive =
                                topic.id ===
                                activeTopic;

                              return (
                                <button
                                  key={topic.id}
                                  ref={
                                    isActive
                                      ? activeTopicRef
                                      : undefined
                                  }
                                  type="button"
                                  onClick={() =>
                                    handleTopicClick(
                                      topic.id
                                    )
                                  }
                                  className={`group/topic relative flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-200 ${
                                    isActive
                                      ? "bg-[#123a80] text-white shadow-[0_5px_14px_rgba(15,23,42,0.15)]"
                                      : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-800"
                                  }`}
                                >

                                  {/* =================================
                                      ACTIVE CYAN LINE
                                  ================================= */}

                                  {isActive && (
                                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-400" />
                                  )}

                                  {/* =================================
                                      TOPIC NUMBER
                                  ================================= */}

                                  <span
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-black transition-all ${
                                      isActive
                                        ? "bg-[#1d365f] text-cyan-300"
                                        : "bg-slate-100 text-slate-500 group-hover/topic:bg-blue-100 group-hover/topic:text-blue-700"
                                    }`}
                                  >
                                    {String(
                                      topicIndex + 1
                                    ).padStart(2, "0")}
                                  </span>

                                  {/* =================================
                                      TOPIC INFORMATION
                                  ================================= */}

                                  <span className="min-w-0 flex-1">

                                    <span
                                      className={`block truncate text-[13px] font-black ${
                                        isActive
                                          ? "text-white"
                                          : "text-slate-800 group-hover/topic:text-blue-700"
                                      }`}
                                    >
                                      {topic.title}
                                    </span>

                                    <span
                                      className={`mt-1 block text-[10px] font-medium ${
                                        isActive
                                          ? "text-blue-200"
                                          : "text-slate-400"
                                      }`}
                                    >
                                      Learning
                                    </span>

                                  </span>

                                  {/* =================================
                                      ACTIVE CHECK
                                  ================================= */}

                                  {isActive && (
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-[#123a80]">
                                      ✓
                                    </span>
                                  )}

                                </button>
                              );
                            }
                          )}

                        </div>

                      </div>
                    )}

                  </div>
                );
              }
            )}

          </div>

          {/* =====================================
              NO SEARCH RESULT
          ===================================== */}

          {filteredSections.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center">

              <div className="text-2xl">
                🔎
              </div>

              <p className="mt-2 text-sm font-black text-slate-800">
                No topics found
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Try another search term.
              </p>

            </div>
          )}

        </div>

      </div>
    </aside>
  );
}