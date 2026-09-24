"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { expressSections } from "@/data/express/topics";

type ExpressSidebarProps = {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
};

export default function ExpressSidebar({
  activeTopic,
  onTopicSelect,
}: ExpressSidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([
    expressSections[0]?.id ?? "",
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeTopicRef = useRef<HTMLButtonElement | null>(null);

  const allTopics = useMemo(
    () =>
      expressSections.flatMap((section) =>
        section.topics.map((topic) => ({
          ...topic,
          sectionId: section.id,
          sectionTitle: section.title,
        }))
      ),
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

  const activeSection = expressSections.find((section) =>
    section.topics.some((topic) => topic.id === activeTopic)
  );

  useEffect(() => {
    if (!activeTopicRef.current) return;

    activeTopicRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeTopic]);

  useEffect(() => {
    if (!activeSection) return;

    setOpenSections((current) =>
      current.includes(activeSection.id)
        ? current
        : [...current, activeSection.id]
    );
  }, [activeSection]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId]
    );
  };

  const handleTopicClick = (topicId: string, sectionId: string) => {
    onTopicSelect(topicId);

    setOpenSections((current) =>
      current.includes(sectionId) ? current : [...current, sectionId]
    );

    setMobileOpen(false);
  };

  const filteredTopics = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return [];

    return allTopics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.sectionTitle.toLowerCase().includes(query)
    );
  }, [allTopics, searchTerm]);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const sectionIds = filteredTopics.map((topic) => topic.sectionId);

    setOpenSections((current) => [
      ...new Set([...current, ...sectionIds]),
    ]);
  }, [searchTerm, filteredTopics]);

  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      {/* Mobile Course Navigation */}
      <button
        type="button"
        onClick={() => setMobileOpen((current) => !current)}
        className="mb-4 flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white px-5 py-4 font-semibold text-slate-900 shadow-sm lg:hidden"
        aria-expanded={mobileOpen}
      >
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            E
          </span>

          <span>Course Navigation</span>
        </span>

        <span className="text-xl">
          {mobileOpen ? "⌃" : "⌄"}
        </span>
      </button>

      {/* Main Sidebar */}
      <div
        className={`${
          mobileOpen ? "flex" : "hidden"
        } w-full flex-col overflow-hidden rounded-[26px] border border-slate-300 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.10)] lg:flex lg:h-[calc(100vh-48px)]`}
      >
        {/* Sidebar Header */}
        <div className="shrink-0 overflow-hidden rounded-t-[26px] bg-gradient-to-br from-[#07152f] via-[#123b82] to-[#1e3a8a] p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-lg font-black text-white shadow-lg ring-4 ring-blue-400/20">
              E
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                Career Tech with Annu
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Express.js
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                Complete Masterclass
              </p>
            </div>
          </div>

          {/* Progress Card */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-200">
                Your Progress
              </span>

              <span className="text-lg font-black text-white">
                {progress}%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-900/50">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Topic {Math.min(activeIndex + 1, allTopics.length)} of{" "}
                {allTopics.length}
              </span>

              <span className="font-semibold text-cyan-300">
                Keep going 🚀
              </span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-slate-200 bg-white p-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search Express.js topics..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pl-10 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              🔎
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="sidebar-scroll flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4 px-2">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
              Course Content
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Learn step-by-step
            </p>
          </div>

          {searchTerm.trim() ? (
            <div className="space-y-2">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                  <button
                    key={`${topic.sectionId}-${topic.id}`}
                    type="button"
                    onClick={() =>
                      handleTopicClick(topic.id, topic.sectionId)
                    }
                    className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                      activeTopic === topic.id
                        ? "border-blue-300 bg-blue-50 text-blue-900"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/40"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {topic.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {topic.sectionTitle}
                    </p>
                  </button>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 p-5 text-center">
                  <p className="text-sm font-semibold text-slate-600">
                    No topics found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try another search term.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              {expressSections.map((section, sectionIndex) => {
                const isOpen = openSections.includes(section.id);

                const sectionHasActiveTopic = section.topics.some(
                  (topic) => topic.id === activeTopic
                );

                return (
                  <div
                    key={section.id}
                    className={`overflow-hidden rounded-[19px] border-2 bg-white transition ${
                      sectionHasActiveTopic
                        ? "border-blue-300"
                        : "border-slate-200"
                    }`}
                  >
                    {/* Section */}
                    <button
                      type="button"
                      onClick={() => toggleSection(section.id)}
                      className={`flex w-full items-center gap-3 px-3 py-3 text-left transition ${
                        sectionHasActiveTopic
                          ? "bg-blue-50"
                          : "bg-white hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                          sectionHasActiveTopic
                            ? "bg-[#123b82] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-slate-900">
                          {section.title}
                        </span>

                        <span className="mt-1 block text-xs text-blue-600">
                          {section.topics.length} Topics
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold ${
                          sectionHasActiveTopic
                            ? "bg-[#123b82] text-white"
                            : "text-slate-400"
                        }`}
                      >
                        {isOpen ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {/* Topics */}
                    {isOpen && (
                      <div className="space-y-2 border-t border-slate-200 bg-slate-50/50 p-2">
                        {section.topics.map((topic, topicIndex) => {
                          const isActive = activeTopic === topic.id;

                          return (
                            <button
                              key={topic.id}
                              ref={isActive ? activeTopicRef : null}
                              type="button"
                              onClick={() =>
                                handleTopicClick(
                                  topic.id,
                                  section.id
                                )
                              }
                              className={`group relative flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                                isActive
                                  ? "bg-gradient-to-r from-[#07152f] to-[#123b82] text-white shadow-md"
                                  : "bg-white text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              {isActive && (
                                <span className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-cyan-400" />
                              )}

                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                                  isActive
                                    ? "bg-white/10 text-cyan-300"
                                    : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {String(topicIndex + 1).padStart(2, "0")}
                              </span>

                              <span className="min-w-0 flex-1">
                                <span
                                  className={`block text-sm font-bold leading-5 ${
                                    isActive
                                      ? "text-white"
                                      : "text-slate-800"
                                  }`}
                                >
                                  {topic.title}
                                </span>

                                <span
                                  className={`mt-1 block text-xs ${
                                    isActive
                                      ? "text-slate-300"
                                      : "text-slate-400"
                                  }`}
                                >
                                  Learning
                                </span>
                              </span>

                              {isActive && (
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-sm font-black text-slate-950">
                                  ✓
                                </span>
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
          )}

          {/* Quick Access */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Quick Access
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  const topic = allTopics.find(
                    (item) => item.id === "express-interview"
                  );

                  if (topic) {
                    handleTopicClick(
                      topic.id,
                      topic.sectionId
                    );
                  }
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                🎯 Interview
              </button>

              <button
                type="button"
                onClick={() => {
                  const topic = allTopics.find(
                    (item) => item.id === "express-project-1"
                  );

                  if (topic) {
                    handleTopicClick(
                      topic.id,
                      topic.sectionId
                    );
                  }
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                💻 Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}