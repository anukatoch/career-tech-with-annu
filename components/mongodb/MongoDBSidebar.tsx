"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { mongodbSections } from "@/data/mongodb/topics";

type MongoDBSidebarProps = {
  activeTopic: string;
  onTopicSelect: (topicId: string) => void;
};

export default function MongoDBSidebar({
  activeTopic,
  onTopicSelect,
}: MongoDBSidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([
    mongodbSections[0]?.id,
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeTopicRef = useRef<HTMLButtonElement | null>(null);

  const allTopics = useMemo(
    () =>
      mongodbSections.flatMap((section) =>
        section.topics.map((topic) => ({
          ...topic,
          sectionId: section.id,
          sectionTitle: section.title,
        })),
      ),
    [],
  );

  const activeIndex = Math.max(
    0,
    allTopics.findIndex((topic) => topic.id === activeTopic),
  );

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  const activeSection = mongodbSections.find((section) =>
    section.topics.some((topic) => topic.id === activeTopic),
  );

  useEffect(() => {
    if (activeSection && !openSections.includes(activeSection.id)) {
      setOpenSections((current) => [...current, activeSection.id]);
    }
  }, [activeSection, openSections]);

  useEffect(() => {
    if (!activeTopicRef.current) return;

    activeTopicRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeTopic]);

  const toggleSection = (sectionId: string) => {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId],
    );
  };

  const handleTopicClick = (topicId: string, sectionId: string) => {
    onTopicSelect(topicId);

    if (!openSections.includes(sectionId)) {
      setOpenSections((current) => [...current, sectionId]);
    }

    setMobileOpen(false);
  };

  const filteredTopics = useMemo(() => {
    const value = searchTerm.trim().toLowerCase();

    if (!value) return [];

    return allTopics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(value) ||
        topic.sectionTitle.toLowerCase().includes(value),
    );
  }, [searchTerm, allTopics]);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const sectionsToOpen = filteredTopics.map(
      (topic) => topic.sectionId,
    );

    setOpenSections((current) => [
      ...new Set([...current, ...sectionsToOpen]),
    ]);
  }, [searchTerm, filteredTopics]);

  return (
    <aside className="sticky top-6 h-fit lg:top-6">
      {/* Mobile Course Navigation */}
      <button
        type="button"
        onClick={() => setMobileOpen((current) => !current)}
        className="mb-4 flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-[#07152f] to-[#123b82] px-5 py-4 text-left text-white shadow-lg lg:hidden"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400 font-bold text-slate-950">
            DB
          </span>

          <div>
            <p className="text-sm font-semibold">MongoDB</p>
            <p className="text-xs text-blue-200">
              Course Navigation
            </p>
          </div>
        </div>

        <span className="text-xl">
          {mobileOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Main Sidebar */}
      <div
        className={`${
          mobileOpen ? "flex" : "hidden"
        } w-full flex-col rounded-[26px] border border-slate-300 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.10)] max-h-[75vh] overflow-y-auto overscroll-contain lg:flex lg:h-[calc(100vh-48px)] lg:max-h-none lg:overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="shrink-0 rounded-t-[26px] bg-gradient-to-br from-[#07152f] via-[#102b66] to-[#4c1d95] p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-400 text-lg font-extrabold text-slate-950 shadow-lg">
              DB
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-200">
                Career Tech with Annu
              </p>

              <h2 className="text-xl font-bold">
                MongoDB
              </h2>

              <p className="text-sm text-blue-100">
                Complete Masterclass
              </p>
            </div>
          </div>

          {/* Progress Card */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-100">
                Your Progress
              </span>

              <span className="text-sm font-bold">
                {progress}%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-green-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-2 text-xs text-blue-200">
              Topic {activeIndex + 1} of {allTopics.length}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="shrink-0 border-b border-slate-200 bg-white p-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search MongoDB topics..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="sidebar-scroll min-h-0 flex-1 overflow-y-auto p-4">
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Course Content
            </p>

            <span className="text-xs font-semibold text-slate-400">
              {allTopics.length} Topics
            </span>
          </div>

          {searchTerm.trim() &&
            filteredTopics.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-sm font-semibold text-slate-700">
                  No topics found
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Try another MongoDB topic.
                </p>
              </div>
            )}

          {mongodbSections.map((section, sectionIndex) => {
            const isOpen = openSections.includes(section.id);

            return (
              <div
                key={section.id}
                className="mb-3 overflow-hidden rounded-[19px] border-2 border-slate-200 bg-white"
              >
                {/* Section Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-slate-50"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                    {String(sectionIndex + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-slate-800">
                      {section.title}
                    </span>

                    <span className="mt-0.5 block text-xs text-slate-400">
                      {section.topics.length} Topics
                    </span>
                  </span>

                  <span
                    className={`text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Topics */}
                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50/60 p-2">
                    {section.topics.map(
                      (topic, topicIndex) => {
                        const isActive =
                          topic.id === activeTopic;

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
                                topic.id,
                                section.id,
                              )
                            }
                            className={`group relative mb-1 flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition ${
                              isActive
                                ? "bg-gradient-to-r from-[#07152f] to-[#123b82] text-white shadow-md"
                                : "text-slate-600 hover:bg-white hover:text-slate-900"
                            }`}
                          >
                            {isActive && (
                              <span className="absolute bottom-2 left-0 top-2 w-1 rounded-r-full bg-cyan-400" />
                            )}

                            <span
                              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                                isActive
                                  ? "bg-white/15 text-cyan-200"
                                  : "bg-slate-200 text-slate-500"
                              }`}
                            >
                              {topicIndex + 1}
                            </span>

                            <span className="min-w-0 flex-1">
                              <span
                                className={`block text-sm font-semibold leading-5 ${
                                  isActive
                                    ? "text-white"
                                    : "text-slate-700"
                                }`}
                              >
                                {topic.title}
                              </span>

                              <span
                                className={`mt-1 block text-[11px] ${
                                  isActive
                                    ? "text-blue-200"
                                    : "text-slate-400"
                                }`}
                              >
                                Learning
                              </span>
                            </span>

                            {isActive && (
                              <span className="mt-1 text-sm text-green-300">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Quick Access */}
          <div className="mt-5">
            <p className="mb-3 px-1 text-xs font-bold uppercase tracking-widest text-slate-500">
              Quick Access
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  const section =
                    mongodbSections.find(
                      (item) => item.id === "interview",
                    );

                  const firstTopic =
                    section?.topics[0];

                  if (firstTopic) {
                    handleTopicClick(
                      firstTopic.id,
                      "interview",
                    );
                  }
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                🎯 Interview
              </button>

              <button
                type="button"
                onClick={() => {
                  const section =
                    mongodbSections.find(
                      (item) => item.id === "projects",
                    );

                  const firstTopic =
                    section?.topics[0];

                  if (firstTopic) {
                    handleTopicClick(
                      firstTopic.id,
                      "projects",
                    );
                  }
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
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