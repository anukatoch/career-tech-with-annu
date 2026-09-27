"use client";

import { useEffect, useMemo, useState } from "react";
import MongoDBSidebar from "@/components/mongodb/MongoDBSidebar";
import { mongodbSections } from "@/data/mongodb/topics";
import { mongodbTopicContent } from "@/data/mongodb/topicContent";

export default function MongoDBLayout() {
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

  const [activeTopic, setActiveTopic] = useState(
    allTopics[0]?.id || "",
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (
      topic &&
      allTopics.some((item) => item.id === topic)
    ) {
      setActiveTopic(topic);
    }
  }, [allTopics]);

  const handleTopicSelect = (topicId: string) => {
    setActiveTopic(topicId);

    const url = new URL(window.location.href);
    url.searchParams.set("topic", topicId);
    window.history.replaceState({}, "", url.toString());

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeTopicData = allTopics.find(
    (topic) => topic.id === activeTopic,
  );

  const activeIndex = Math.max(
    0,
    allTopics.findIndex((topic) => topic.id === activeTopic),
  );

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  const content = mongodbTopicContent[activeTopic];

  const previousTopic =
    activeIndex > 0
      ? allTopics[activeIndex - 1]
      : null;

  const nextTopic =
    activeIndex < allTopics.length - 1
      ? allTopics[activeIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#102b66] to-[#4c1d95] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1600px] px-6 py-14 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-400 text-xs font-extrabold text-slate-950">
                  DB
                </span>

                <span className="text-sm font-semibold tracking-wide text-blue-200">
                  Career Tech with Annu
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Learning Path
              </p>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                MongoDB Masterclass
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
                Learn MongoDB step-by-step with practical database
                concepts, CRUD operations, queries, aggregation,
                Mongoose, projects and interview preparation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <HeroStat
                value="59+"
                label="Topics"
              />

              <HeroStat
                value="4+"
                label="Projects"
              />

              <HeroStat
                value="✓"
                label="Practice Included"
              />

              <HeroStat
                value="🎯"
                label="Interview Ready"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Area */}
      <main className="mx-auto w-[94%] max-w-[1600px] px-2 py-8 sm:px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">
          <MongoDBSidebar
            activeTopic={activeTopic}
            onTopicSelect={handleTopicSelect}
          />

          <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Topic Header */}
            <div className="border-b border-slate-200 bg-white px-6 py-8 sm:px-10">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>MongoDB</span>
                <span>›</span>
                <span>
                  {activeTopicData?.sectionTitle}
                </span>
                <span>›</span>
                <span className="font-medium text-slate-800">
                  {activeTopicData?.title}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Topic {activeIndex + 1}
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {activeTopicData?.title}
                  </h2>
                </div>

                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                  {progress}% Complete
                </div>
              </div>
            </div>

            {!content ? (
              <div className="p-8 sm:p-10">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <h3 className="text-xl font-bold text-amber-900">
                    Content Coming Next
                  </h3>

                  <p className="mt-2 leading-7 text-amber-800">
                    This MongoDB topic is available in the
                    learning path. Detailed lesson content will
                    be added next.
                  </p>
                </div>
              </div>
            ) : (
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                {/* Concept */}
                <SectionHeading
                  number="01"
                  title="Concept"
                />

                <section className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {content.concept.heading}
                  </h3>

                  <div className="mt-5 space-y-4">
                    {content.concept.paragraphs.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl"
                        >
                          {paragraph}
                        </p>
                      ),
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                      Remember
                    </p>

                    <p className="mt-2 text-base leading-7 text-slate-700">
                      {content.concept.remember}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* Analogy */}
                <SectionHeading
                  number="02"
                  title="Real-World Analogy"
                />

                <section className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {content.analogy.heading}
                  </h3>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {content.analogy.items.map(
                      (item, index) => (
                        <AnalogyCard
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          text={item.text}
                        />
                      ),
                    )}
                  </div>
                </section>

                <Divider />

                {/* Visual */}
                <SectionHeading
                  number="03"
                  title="Visual Understanding"
                />

                <section className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {content.visual.heading}
                  </h3>

                  <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
                    {content.visual.description}
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {content.visual.steps.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                              {step.icon}
                            </span>

                            <div>
                              <h4 className="font-bold text-slate-900">
                                {step.title}
                              </h4>

                              <p className="mt-2 leading-7 text-slate-600">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Flow
                    </p>

                    <div className="min-w-max font-mono text-sm text-green-300 sm:text-base">
                      {content.visual.flow}
                    </div>
                  </div>
                </section>

                <Divider />

                {/* Code */}
                <SectionHeading
                  number="04"
                  title="Example & Code"
                />

                <section className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {content.code.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {content.code.description}
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        {content.code.language}
                      </span>

                      <span className="text-xs text-green-300">
                        Example
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-5 text-sm leading-7 text-green-300 sm:text-base">
                      <code>{content.code.code}</code>
                    </pre>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                      Output
                    </p>

                    <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                      {content.code.output}
                    </pre>
                  </div>

                  <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-5">
                    <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                      Explanation
                    </p>

                    <p className="mt-2 leading-7 text-slate-700">
                      {content.code.explanation}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* Interview */}
                <SectionHeading
                  number="05"
                  title="Interview Question"
                />

                <section className="mt-6">
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
                    <p className="text-lg font-bold text-indigo-950">
                      Q: {content.interview.question}
                    </p>

                    <p className="mt-4 leading-8 text-slate-700">
                      <strong>Answer:</strong>{" "}
                      {content.interview.answer}
                    </p>

                    <p className="mt-4 rounded-xl bg-white/70 p-4 text-sm leading-6 text-slate-600">
                      💡 <strong>Tip:</strong>{" "}
                      {content.interview.tip}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* Tricky */}
                <SectionHeading
                  number="06"
                  title="Tricky Question"
                />

                <section className="mt-6">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <p className="font-bold text-amber-950">
                      {content.tricky.question}
                    </p>

                    <p className="mt-4 leading-7 text-slate-700">
                      <strong>Answer:</strong>{" "}
                      {content.tricky.answer}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* Practice */}
                <SectionHeading
                  number="07"
                  title="Practice"
                />

                <section className="mt-6">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-lg font-bold text-slate-900">
                      {content.practice.question}
                    </p>

                    <p className="mt-4 leading-7 text-slate-600">
                      <strong>Hint:</strong>{" "}
                      {content.practice.hint}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* Challenge */}
                <SectionHeading
                  number="08"
                  title="Mini Challenge"
                />

                <section className="mt-6">
                  <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50 p-6">
                    <p className="text-xl font-bold text-slate-950">
                      {content.challenge.title}
                    </p>

                    <p className="mt-3 leading-7 text-slate-600">
                      {content.challenge.description}
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-5">
                      <p className="text-sm font-bold uppercase tracking-wider text-purple-700">
                        Your Task
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {content.challenge.task}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Previous / Next */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={!previousTopic}
                  onClick={() =>
                    previousTopic &&
                    handleTopicSelect(previousTopic.id)
                  }
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                  {previousTopic && (
                    <span className="ml-2 font-normal text-slate-400">
                      {previousTopic.title}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  disabled={!nextTopic}
                  onClick={() =>
                    nextTopic &&
                    handleTopicSelect(nextTopic.id)
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 text-left text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next →
                  {nextTopic && (
                    <span className="ml-2 font-normal text-blue-100">
                      {nextTopic.title}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </main>
  );
}

/* ---------------- Helpers ---------------- */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
        {number}
      </span>

      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h3>
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-slate-200" />;
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
      <p className="text-xl font-black sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[11px] font-medium text-blue-100 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function AnalogyCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
          {icon}
        </span>

        <div>
          <h4 className="font-bold text-slate-900">
            {title}
          </h4>

          <p className="mt-2 leading-7 text-slate-600">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}