"use client";

import { useEffect, useMemo, useState } from "react";
import ReactSidebar from "@/components/react/ReactSidebar";
import { reactSections } from "@/data/react/topics";
import { reactTopicContent } from "@/data/react/topicContent";

type Topic = {
  id: string;
  title: string;
  sectionId: string;
  sectionTitle: string;
};

type VisualData = {
  heading: string;
  description: string;
  steps: {
    icon: string;
    title: string;
    text: string;
  }[];
  flow: string;
};

export default function ReactLayout() {
  const allTopics = useMemo<Topic[]>(
    () =>
      reactSections.flatMap((section) =>
        section.topics.map((topic) => ({
          ...topic,
          sectionId: section.id,
          sectionTitle: section.title,
        }))
      ),
    []
  );

  const [activeTopic, setActiveTopic] = useState(
    allTopics[0]?.id || "what-is-react"
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const topicFromUrl = params.get("topic");

    if (
      topicFromUrl &&
      allTopics.some((topic) => topic.id === topicFromUrl)
    ) {
      setActiveTopic(topicFromUrl);
    }
  }, [allTopics]);

  const handleTopicSelect = (topicId: string) => {
    setActiveTopic(topicId);

    const url = new URL(window.location.href);
    url.searchParams.set("topic", topicId);

    window.history.pushState({}, "", url.toString());

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const activeIndex = Math.max(
    0,
    allTopics.findIndex((topic) => topic.id === activeTopic)
  );

  const activeTopicData = allTopics[activeIndex];

  const activeSection = reactSections.find(
    (section) => section.id === activeTopicData?.sectionId
  );

  const content = reactTopicContent[activeTopicData?.id];

  const visual = content?.visual as VisualData | undefined;

  const previousTopic = allTopics[activeIndex - 1];
  const nextTopic = allTopics[activeIndex + 1];

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  if (!activeTopicData || !content) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-black text-slate-900">
          React Topic Not Found
        </h1>

        <p className="mt-3 text-slate-600">
          Please select a valid React topic from the course navigation.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#102b66] to-[#4c1d95] text-white">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">

            <div>

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400 text-lg font-black text-white">
                  ⚛
                </span>

                <span className="text-sm font-bold tracking-wide">
                  LEARNING PATH
                </span>

                <span className="text-white/50">
                  /
                </span>

                <span className="text-sm font-semibold text-blue-200">
                  React Masterclass
                </span>

              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
                Career Tech with Annu
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                React Masterclass
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                Learn React step by step with concepts, real-world
                examples, visual understanding, practical coding and
                interview preparation.
              </p>

            </div>

            {/* HERO STATS */}

            <div className="grid grid-cols-2 gap-4">

              <HeroStat
                value="100+"
                label="Topics"
              />

              <HeroStat
                value="5+"
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

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto w-[94%] max-w-[1600px] px-2 py-8 sm:px-4 lg:px-6">

        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">

          {/* SIDEBAR */}

          <ReactSidebar
            activeTopic={activeTopic}
            onTopicSelect={handleTopicSelect}
          />

          {/* CONTENT */}

          <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* =================================================
                TOPIC HEADER
            ================================================= */}

            <section className="border-b border-slate-200 px-6 py-10 sm:px-10">

              <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-500">

                <span>
                  {activeSection?.title}
                </span>

                <span>
                  →
                </span>

                <span className="text-blue-600">
                  Topic {String(activeIndex + 1).padStart(2, "0")}
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {activeTopicData.title}
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  Beginner Friendly
                </span>

                <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
                  Practical
                </span>

                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  Interview Focused
                </span>

              </div>

              <div className="mt-7">

                <div className="mb-2 flex items-center justify-between text-sm font-bold">

                  <span className="text-slate-500">
                    Course Progress
                  </span>

                  <span className="text-blue-600">
                    {progress}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all"
                    style={{ width: `${progress}%` }}
                  />

                </div>

              </div>

            </section>

            {/* =================================================
                01 CONCEPT
            ================================================= */}

            {content?.concept && (
              <section className="px-6 py-12 sm:px-10">

                <SectionLabel
                  number="01"
                  label="CONCEPT"
                />

                <h3 className="mt-5 text-3xl font-black text-slate-950">
                  {content.concept.heading}
                </h3>

                <div className="mt-6 space-y-5">

                  {content.concept.paragraphs?.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg leading-9 text-slate-700"
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                </div>

                {content.concept.remember && (
                  <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">

                    <p className="text-sm font-black uppercase tracking-widest text-yellow-700">
                      ⭐ Remember This
                    </p>

                    <p className="mt-3 text-lg font-bold leading-8 text-slate-800">
                      {content.concept.remember}
                    </p>

                  </div>
                )}

              </section>
            )}

            {/* =================================================
                02 REAL WORLD ANALOGY
            ================================================= */}

            {content?.analogy && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="02"
                    label="REAL WORLD ANALOGY"
                  />

                  <h3 className="mt-5 text-3xl font-black text-slate-950">
                    {content.analogy.heading}
                  </h3>

                  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {content.analogy.items.map(
                      (item, index) => (
                        <AnalogyCard
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          text={item.text}
                        />
                      )
                    )}

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                03 VISUAL UNDERSTANDING
            ================================================= */}

            {visual && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="03"
                    label="VISUAL UNDERSTANDING"
                  />

                  <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">

                    <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                      Understand Visually
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-slate-950">
                      {visual.heading}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {visual.description}
                    </p>

                    {/* VISUAL STEPS */}

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

                      {visual.steps.map(
                        (step, index) => (
                          <div
                            key={index}
                            className="relative rounded-2xl border border-blue-200 bg-white p-5 shadow-sm"
                          >

                            <div className="flex items-center justify-between">

                              <span className="text-3xl">
                                {step.icon}
                              </span>

                              <span className="text-sm font-black text-slate-300">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                            </div>

                            <h4 className="mt-5 text-xl font-black text-slate-950">
                              {step.title}
                            </h4>

                            <p className="mt-2 leading-7 text-slate-600">
                              {step.text}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                    {/* FLOW */}

                    <div className="mt-8 rounded-2xl border border-blue-200 bg-white p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                        Simple Flow
                      </p>

                      <div className="mt-4 overflow-x-auto">

                        <p className="min-w-max text-lg font-black text-slate-900 sm:text-xl">
                          {visual.flow}
                        </p>

                      </div>

                    </div>

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                04 PRACTICAL CODE
            ================================================= */}

            {content?.code && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="04"
                    label="PRACTICAL CODE"
                  />

                  <h3 className="mt-5 text-3xl font-black text-slate-950">
                    {content.code.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {content.code.description}
                  </p>

                  {/* CODE */}

                  <div className="mt-8 overflow-hidden rounded-3xl bg-slate-950">

                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                      <span className="text-sm font-bold text-slate-300">
                        {content.code.language || "React"}
                      </span>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                        CODE
                      </span>

                    </div>

                    <pre className="overflow-x-auto p-6 text-sm leading-7 text-emerald-300 sm:text-base">
                      <code>{content.code.code}</code>
                    </pre>

                  </div>

                  {/* OUTPUT */}

                  <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">

                    <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
                      Output
                    </p>

                    <pre className="mt-4 whitespace-pre-wrap font-mono text-base font-bold text-slate-800">
                      {content.code.output}
                    </pre>

                  </div>

                  {/* EXPLANATION */}

                  <div className="mt-6 rounded-2xl bg-blue-50 p-6">

                    <p className="text-sm font-black uppercase tracking-widest text-blue-700">
                      Step-by-Step Explanation
                    </p>

                    <p className="mt-3 text-lg leading-8 text-slate-700">
                      {content.code.explanation}
                    </p>

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                05 INTERVIEW
            ================================================= */}

            {content?.interview && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="05"
                    label="INTERVIEW QUESTION"
                  />

                  <div className="mt-7 rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-8">

                    <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                      Interview Question
                    </p>

                    <h3 className="mt-4 text-2xl font-black text-slate-950">
                      {content.interview.question}
                    </h3>

                    <div className="mt-6 rounded-2xl bg-white p-5">

                      <p className="text-lg leading-8 text-slate-700">
                        {content.interview.answer}
                      </p>

                    </div>

                    {content.interview.tip && (
                      <p className="mt-5 font-bold text-blue-700">
                        💡 Tip: {content.interview.tip}
                      </p>
                    )}

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                06 TRICKY
            ================================================= */}

            {content?.tricky && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="06"
                    label="TRICKY QUESTION"
                  />

                  <div className="mt-7 rounded-3xl border border-orange-200 bg-orange-50 p-6 sm:p-8">

                    <h3 className="text-2xl font-black text-slate-950">
                      {content.tricky.question}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-700">
                      {content.tricky.answer}
                    </p>

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                07 PRACTICE
            ================================================= */}

            {content?.practice && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="07"
                    label="PRACTICE YOURSELF"
                  />

                  <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">

                    <p className="text-xl font-black text-slate-950">
                      {content.practice.question}
                    </p>

                    <div className="mt-5 rounded-2xl bg-white p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-amber-700">
                        Hint
                      </p>

                      <p className="mt-2 font-mono text-slate-700">
                        {content.practice.hint}
                      </p>

                    </div>

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                08 MINI CHALLENGE
            ================================================= */}

            {content?.challenge && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10">

                  <SectionLabel
                    number="08"
                    label="MINI CHALLENGE"
                  />

                  <div className="mt-7 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">

                    <p className="text-sm font-black uppercase tracking-widest text-cyan-400">
                      🚀 Challenge
                    </p>

                    <h3 className="mt-4 text-3xl font-black">
                      {content.challenge.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-300">
                      {content.challenge.description}
                    </p>

                    <div className="mt-6 rounded-2xl bg-white/10 p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                        Your Task
                      </p>

                      <p className="mt-3 text-lg leading-8 text-white">
                        {content.challenge.task}
                      </p>

                    </div>

                  </div>

                </section>

              </>
            )}

            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            <Divider />

            <section className="grid gap-4 px-6 py-8 sm:grid-cols-2 sm:px-10">

              {previousTopic ? (
                <button
                  type="button"
                  onClick={() => handleTopicSelect(previousTopic.id)}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >

                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                    ← Previous Topic
                  </p>

                  <p className="mt-2 font-black text-slate-900 group-hover:text-blue-700">
                    {previousTopic.title}
                  </p>

                </button>
              ) : (
                <div />
              )}

              {nextTopic && (
                <button
                  type="button"
                  onClick={() => handleTopicSelect(nextTopic.id)}
                  className="group rounded-2xl border border-blue-200 bg-blue-50 p-5 text-right transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
                >

                  <p className="text-xs font-black uppercase tracking-widest text-blue-500">
                    Next Topic →
                  </p>

                  <p className="mt-2 font-black text-slate-900 group-hover:text-blue-700">
                    {nextTopic.title}
                  </p>

                </button>
              )}

            </section>

          </article>

        </div>

      </main>

    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Divider() {
  return (
    <div className="mx-6 border-t border-slate-200 sm:mx-10" />
  );
}

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-black text-white shadow-lg">
        {number}
      </div>

      <p className="text-sm font-black tracking-[0.25em] text-blue-600">
        {label}
      </p>

    </div>
  );
}

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

      <p className="text-3xl font-black">
        {value}
      </p>

      <p className="mt-1 text-sm font-semibold text-blue-100">
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
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg">

      <div className="text-3xl">
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-black text-slate-950">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}