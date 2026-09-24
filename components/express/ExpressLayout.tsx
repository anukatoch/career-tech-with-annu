"use client";

import { useEffect, useMemo, useState } from "react";
import ExpressSidebar from "@/components/express/ExpressSidebar";
import { expressSections } from "@/data/express/topics";
import { expressTopicContent } from "@/data/express/topicContent";

export default function ExpressLayout() {
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

  const [activeTopic, setActiveTopic] = useState(
    allTopics[0]?.id ?? ""
  );

  /* ---------------- URL TOPIC ---------------- */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");

    if (topic && allTopics.some((item) => item.id === topic)) {
      setActiveTopic(topic);
    }
  }, [allTopics]);

  /* ---------------- ACTIVE TOPIC ---------------- */

  const activeTopicData = allTopics.find(
    (topic) => topic.id === activeTopic
  );

  const content = expressTopicContent[activeTopic];

  const activeIndex = Math.max(
    0,
    allTopics.findIndex((topic) => topic.id === activeTopic)
  );

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  /* ---------------- PREVIOUS / NEXT ---------------- */

  const previousTopic =
    activeIndex > 0 ? allTopics[activeIndex - 1] : null;

  const nextTopic =
    activeIndex < allTopics.length - 1
      ? allTopics[activeIndex + 1]
      : null;

  /* ---------------- TOPIC SELECT ---------------- */

  const handleTopicSelect = (topicId: string) => {
    setActiveTopic(topicId);

    const params = new URLSearchParams(window.location.search);
    params.set("topic", topicId);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#102b66] to-[#4c1d95] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              {/* Learning Path */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 font-black text-white">
                  E
                </span>

                <span className="text-sm font-bold">
                  LEARNING PATH
                </span>

                <span className="text-blue-200">/</span>

                <span className="text-sm text-blue-100">
                  Express.js Masterclass
                </span>
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
                Career Tech with Annu
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Express.js Masterclass
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
                Learn Express.js step-by-step with routing, middleware,
                REST APIs, MongoDB, authentication and real-world
                backend projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <HeroStat value="90+" label="Topics" />
              <HeroStat value="4+" label="Projects" />
              <HeroStat value="✓" label="Practice Included" />
              <HeroStat value="🎯" label="Interview Ready" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto w-[94%] max-w-[1600px] px-2 py-8 sm:px-4 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">

          {/* Sidebar */}

          <ExpressSidebar
            activeTopic={activeTopic}
            onTopicSelect={handleTopicSelect}
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Topic Header */}

            <div className="border-b border-slate-200 px-6 py-8 sm:px-10">
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span>Express.js Masterclass</span>

                <span>→</span>

                <span>{activeTopicData?.sectionTitle}</span>

                <span>→</span>

                <span className="text-blue-600">
                  Topic {String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                {activeTopicData?.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  Beginner Friendly
                </span>

                <span className="rounded-full bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700">
                  Practical
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                  Interview Focused
                </span>
              </div>

              {/* Progress */}

              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-500">
                    Course Progress
                  </span>

                  <span className="font-bold text-blue-600">
                    {progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                ACTUAL TOPIC CONTENT
            ================================================= */}

            {content ? (
              <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-10">

                {/* ---------------- CONCEPT ---------------- */}

                <section>
                  <SectionHeading
                    number="01"
                    label="CONCEPT"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {content.concept.heading}
                  </h3>

                  <div className="mt-5 space-y-4">
                    {content.concept.paragraphs.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-lg leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>

                  {/* Remember */}

                  <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">💡</span>

                      <div>
                        <p className="font-bold text-slate-900">
                          Remember
                        </p>

                        <p className="mt-1 leading-7 text-slate-600">
                          {content.concept.remember}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <Divider />

                {/* ---------------- ANALOGY ---------------- */}

                <section>
                  <SectionHeading
                    number="02"
                    label="REAL-WORLD ANALOGY"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {content.analogy.heading}
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {content.analogy.items.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-2xl">
                            {item.icon}
                          </span>

                          <div>
                            <h4 className="font-bold text-slate-900">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <Divider />

                {/* ---------------- VISUAL ---------------- */}

                <section>
                  <SectionHeading
                    number="03"
                    label="VISUAL EXPLANATION"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {content.visual.heading}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {content.visual.description}
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {content.visual.steps.map((step, index) => (
                      <div
                        key={index}
                        className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                          {step.icon}
                        </div>

                        <h4 className="mt-4 font-bold text-slate-900">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Flow */}

                  <div className="mt-7 overflow-x-auto rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      Flow
                    </p>

                    <div className="min-w-max text-lg font-bold text-slate-800">
                      {content.visual.flow}
                    </div>
                  </div>
                </section>

                <Divider />

                {/* ---------------- CODE ---------------- */}

                <section>
                  <SectionHeading
                    number="04"
                    label="CODE EXAMPLE"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {content.code.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {content.code.description}
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950 shadow-lg">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        {content.code.language}
                      </span>

                      <span className="text-xs text-slate-500">
                        Example
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                      <code>{content.code.code}</code>
                    </pre>
                  </div>

                  {/* Output */}

                  <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                      Output
                    </p>

                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-slate-700">
                      {content.code.output}
                    </pre>
                  </div>

                  {/* Explanation */}

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-bold text-slate-900">
                      Explanation
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {content.code.explanation}
                    </p>
                  </div>
                </section>

                <Divider />

                {/* ---------------- INTERVIEW ---------------- */}

                <section>
                  <SectionHeading
                    number="05"
                    label="INTERVIEW"
                  />

                  <div className="mt-6 rounded-2xl border border-purple-100 bg-purple-50/60 p-6">
                    <p className="text-sm font-bold text-purple-700">
                      Interview Question
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-slate-950">
                      {content.interview.question}
                    </h3>

                    <div className="mt-5 rounded-xl bg-white p-5">
                      <p className="font-bold text-slate-900">
                        Answer
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        {content.interview.answer}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-bold text-slate-900">
                        💡 Interview Tip
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {content.interview.tip}
                      </p>
                    </div>
                  </div>
                </section>

                <Divider />

                {/* ---------------- TRICKY ---------------- */}

                <section>
                  <SectionHeading
                    number="06"
                    label="TRICKY QUESTION"
                  />

                  <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
                    <h3 className="text-lg font-bold text-slate-950">
                      {content.tricky.question}
                    </h3>

                    <div className="mt-4 rounded-xl bg-white p-5">
                      <p className="font-bold text-slate-900">
                        Answer
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        {content.tricky.answer}
                      </p>
                    </div>
                  </div>
                </section>

                <Divider />

                {/* ---------------- PRACTICE ---------------- */}

                <section>
                  <SectionHeading
                    number="07"
                    label="PRACTICE"
                  />

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                    <h3 className="text-xl font-bold text-slate-950">
                      Practice Task
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-700">
                      {content.practice.question}
                    </p>

                    <div className="mt-5 rounded-xl bg-white p-5">
                      <p className="font-bold text-slate-900">
                        Hint
                      </p>

                      <p className="mt-2 leading-7 text-slate-600">
                        {content.practice.hint}
                      </p>
                    </div>
                  </div>
                </section>

                <Divider />

                {/* ---------------- CHALLENGE ---------------- */}

                <section>
                  <SectionHeading
                    number="08"
                    label="MINI CHALLENGE"
                  />

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                    <h3 className="text-2xl font-bold text-slate-950">
                      {content.challenge.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {content.challenge.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-100 bg-white p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-600">
                        Your Task
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {content.challenge.task}
                      </p>
                    </div>
                  </div>
                </section>

                {/* ---------------- PREVIOUS / NEXT ---------------- */}

                <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
                  {previousTopic ? (
                    <button
                      type="button"
                      onClick={() =>
                        handleTopicSelect(previousTopic.id)
                      }
                      className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        ← Previous
                      </p>

                      <p className="mt-2 font-bold text-slate-900">
                        {previousTopic.title}
                      </p>
                    </button>
                  ) : (
                    <div />
                  )}

                  {nextTopic ? (
                    <button
                      type="button"
                      onClick={() =>
                        handleTopicSelect(nextTopic.id)
                      }
                      className="rounded-2xl border border-slate-200 bg-white p-5 text-right transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                        Next →
                      </p>

                      <p className="mt-2 font-bold text-slate-900">
                        {nextTopic.title}
                      </p>
                    </button>
                  ) : null}
                </div>
              </div>
            ) : (
              /* =================================================
                 CONTENT NOT CREATED YET
              ================================================== */

              <div className="px-6 py-10 sm:px-10">
                <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-purple-50/50 p-7">
                  <SectionHeading
                    number="01"
                    label="CONTENT"
                  />

                  <h3 className="mt-6 text-2xl font-bold text-slate-950">
                    {activeTopicData?.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Detailed learning content for this topic is being
                    prepared.
                  </p>

                  <div className="mt-7 rounded-2xl border border-blue-100 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">💡</span>

                      <div>
                        <p className="font-bold text-slate-900">
                          Content Coming Next
                        </p>

                        <p className="mt-1 leading-7 text-slate-600">
                          Examples, visual explanation, code,
                          interview questions, practice and challenge
                          will be added for this topic.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </article>
        </div>
      </main>
    </div>
  );
}

/* ============================================================
   HELPERS
============================================================ */

function SectionHeading({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-black text-white shadow-md">
        {number}
      </span>

      <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-slate-200" />;
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm">
      <div className="text-3xl font-black">{value}</div>

      <div className="mt-1 text-sm font-semibold text-blue-100">
        {label}
      </div>
    </div>
  );
}