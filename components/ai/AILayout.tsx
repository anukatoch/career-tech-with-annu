"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import AISidebar from "@/components/ai/AISidebar";
import { aiSections } from "@/data/ai/topics";
import { aiTopicContent } from "@/data/ai/topicContent";

export default function AILayout() {
  const searchParams = useSearchParams();

  const allTopics = useMemo(
    () => aiSections.flatMap((section) => section.topics),
    []
  );

  const firstTopic = allTopics[0];

  const topicFromUrl = searchParams.get("topic");

  const initialTopic =
    allTopics.find((topic) => topic.id === topicFromUrl)?.id ??
    firstTopic?.id ??
    "";

  const [activeTopic, setActiveTopic] = useState(initialTopic);

  const activeIndex = allTopics.findIndex(
    (topic) => topic.id === activeTopic
  );

  const currentTopic =
    allTopics[activeIndex] ?? firstTopic;

  const currentContent =
    currentTopic && aiTopicContent[currentTopic.id]
      ? aiTopicContent[currentTopic.id]
      : null;

  const activeSection = aiSections.find((section) =>
    section.topics.some((topic) => topic.id === activeTopic)
  );

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

  const previousTopic =
    activeIndex > 0
      ? allTopics[activeIndex - 1]
      : null;

  const nextTopic =
    activeIndex < allTopics.length - 1
      ? allTopics[activeIndex + 1]
      : null;

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

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-br from-[#07152f] via-[#102b66] to-[#4c1d95] text-white">

        <div className="mx-auto w-[94%] max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">

            {/* HERO CONTENT */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-200">
                Career Tech with Annu
              </p>

              <div className="mt-4 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-400 text-xl font-black text-slate-950 shadow-xl">
                  AI
                </div>

                <div>

                  <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                    AI & Gen AI Masterclass
                  </h1>

                </div>

              </div>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
                Learn Artificial Intelligence and Generative AI step-by-step
                with concepts, practical coding, API integration, projects
                and interview preparation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                  🤖 AI Fundamentals
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                  💻 Practical Coding
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                  🚀 Real Projects
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                  🎯 Interview Ready
                </span>

              </div>

            </div>

            {/* HERO STATS */}

            <div className="grid grid-cols-2 gap-4">

              <HeroStat
                value={`${allTopics.length}+`}
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

      <div className="mx-auto w-[94%] max-w-[1600px] px-2 py-8 sm:px-4 lg:px-6">

        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">

          {/* SIDEBAR */}

          <AISidebar
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
                  {activeSection?.title ?? "AI & Gen AI"}
                </span>

                <span>→</span>

                <span className="text-violet-600">
                  Topic {String(activeIndex + 1).padStart(2, "0")}
                </span>

              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div>

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-xl bg-violet-100 px-3 py-2 text-sm font-black text-violet-700">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                      {activeSection?.title}
                    </span>

                  </div>

                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {currentTopic?.title ?? "AI Masterclass"}
                  </h2>

                  <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                    Learn this topic with simple concepts, real-world
                    understanding, practical coding, interview questions
                    and hands-on practice.
                  </p>

                </div>

                {/* PROGRESS */}

                <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:min-w-[180px]">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                      Progress
                    </span>

                    <span className="text-sm font-black text-violet-600">
                      {progress}%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className="h-full rounded-full bg-violet-600 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    {activeIndex + 1} of {allTopics.length} topics
                  </p>

                </div>

              </div>

            </section>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="px-6 py-10 sm:px-10">

              {currentContent ? (
                <>

                  {/* CONCEPT */}

                  <ContentSection
                    number="01"
                    label="Concept"
                    title={currentContent.concept.heading}
                  >

                    <div className="space-y-4">

                      {currentContent.concept.paragraphs.map(
                        (paragraph, index) => (
                          <p
                            key={index}
                            className="text-base leading-8 text-slate-700"
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                    </div>

                    <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-violet-600">
                        Remember
                      </p>

                      <p className="mt-2 font-bold leading-7 text-slate-800">
                        {currentContent.concept.remember}
                      </p>

                    </div>

                  </ContentSection>

                  {/* ANALOGY */}

                  <ContentSection
                    number="02"
                    label="Real-World Analogy"
                    title={currentContent.analogy.heading}
                  >

                    <div className="grid gap-5 md:grid-cols-3">

                      {currentContent.analogy.items.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                          >

                            <div className="text-3xl">
                              {item.icon}
                            </div>

                            <h4 className="mt-4 font-black text-slate-900">
                              {item.title}
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {item.text}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                  </ContentSection>

                  {/* VISUAL */}

                  <ContentSection
                    number="03"
                    label="Visual Understanding"
                    title={currentContent.visual.heading}
                  >

                    <p className="text-base leading-8 text-slate-700">
                      {currentContent.visual.description}
                    </p>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">

                      {currentContent.visual.steps.map(
                        (step, index) => (
                          <div
                            key={index}
                            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                          >

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg">
                              {step.icon}
                            </div>

                            <div>

                              <h4 className="font-black text-slate-900">
                                {step.title}
                              </h4>

                              <p className="mt-1 text-sm leading-7 text-slate-600">
                                {step.text}
                              </p>

                            </div>

                          </div>
                        )
                      )}

                    </div>

                    <div className="mt-7 overflow-x-auto rounded-2xl bg-slate-950 p-5">

                      <p className="mb-3 text-xs font-black uppercase tracking-widest text-violet-300">
                        Flow
                      </p>

                      <code className="whitespace-nowrap font-mono text-sm font-bold text-white">
                        {currentContent.visual.flow}
                      </code>

                    </div>

                  </ContentSection>

                  {/* CODE */}

                  <ContentSection
                    number="04"
                    label="Example & Code"
                    title={currentContent.code.title}
                  >

                    <p className="mb-5 text-base leading-8 text-slate-700">
                      {currentContent.code.description}
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

                      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

                        <span className="text-xs font-black uppercase tracking-widest text-violet-300">
                          {currentContent.code.language}
                        </span>

                        <span className="text-xs font-semibold text-slate-500">
                          Example
                        </span>

                      </div>

                      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                        <code>
                          {currentContent.code.code}
                        </code>
                      </pre>

                    </div>

                    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
                        Output
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {currentContent.code.output}
                      </p>

                    </div>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                      <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                        Explanation
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {currentContent.code.explanation}
                      </p>

                    </div>

                  </ContentSection>

                  {/* INTERVIEW */}

                  <ContentSection
                    number="05"
                    label="Interview Question"
                    title="Interview Preparation"
                  >

                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

                      <p className="text-lg font-black text-slate-900">
                        {currentContent.interview.question}
                      </p>

                      <div className="mt-5">

                        <p className="text-xs font-black uppercase tracking-widest text-blue-600">
                          Answer
                        </p>

                        <p className="mt-2 leading-8 text-slate-700">
                          {currentContent.interview.answer}
                        </p>

                      </div>

                      <div className="mt-5 rounded-xl bg-white p-4">

                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                          Interview Tip
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                          {currentContent.interview.tip}
                        </p>

                      </div>

                    </div>

                  </ContentSection>

                  {/* TRICKY */}

                  <ContentSection
                    number="06"
                    label="Tricky Question"
                    title="Think Carefully"
                  >

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

                      <p className="text-lg font-black text-slate-900">
                        {currentContent.tricky.question}
                      </p>

                      <div className="mt-5 rounded-xl bg-white p-5">

                        <p className="text-xs font-black uppercase tracking-widest text-amber-600">
                          Answer
                        </p>

                        <p className="mt-2 leading-8 text-slate-700">
                          {currentContent.tricky.answer}
                        </p>

                      </div>

                    </div>

                  </ContentSection>

                  {/* PRACTICE */}

                  <ContentSection
                    number="07"
                    label="Practice"
                    title="Practice Yourself"
                  >

                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

                      <p className="text-lg font-black text-slate-900">
                        {currentContent.practice.question}
                      </p>

                      <div className="mt-5 rounded-xl bg-white p-5">

                        <p className="text-xs font-black uppercase tracking-widest text-indigo-600">
                          Hint
                        </p>

                        <p className="mt-2 leading-7 text-slate-700">
                          {currentContent.practice.hint}
                        </p>

                      </div>

                    </div>

                  </ContentSection>

                  {/* CHALLENGE */}

                  <ContentSection
                    number="08"
                    label="Mini Challenge"
                    title={currentContent.challenge.title}
                  >

                    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6">

                      <p className="text-base leading-8 text-slate-700">
                        {currentContent.challenge.description}
                      </p>

                      <div className="mt-5 rounded-2xl bg-slate-950 p-5">

                        <p className="text-xs font-black uppercase tracking-widest text-violet-300">
                          Your Task
                        </p>

                        <p className="mt-2 leading-8 text-white">
                          {currentContent.challenge.task}
                        </p>

                      </div>

                    </div>

                  </ContentSection>

                </>
              ) : (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">

                  <h3 className="text-xl font-black text-slate-900">
                    Content Coming Soon
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    The navigation is ready. Topic content will be added
                    section by section.
                  </p>

                </div>
              )}

              {/* =================================================
                  PREVIOUS / NEXT
              ================================================= */}

              <div className="mt-10 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">

                {previousTopic ? (
                  <button
                    type="button"
                    onClick={() =>
                      handleTopicSelect(previousTopic.id)
                    }
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"
                  >

                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                      ← Previous
                    </p>

                    <p className="mt-2 font-black text-slate-900">
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
                    className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-right transition hover:-translate-y-0.5 hover:border-violet-400 hover:shadow-md"
                  >

                    <p className="text-xs font-black uppercase tracking-widest text-violet-500">
                      Next →
                    </p>

                    <p className="mt-2 font-black text-slate-900">
                      {nextTopic.title}
                    </p>

                  </button>
                ) : (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-right">

                    <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                      Course Complete
                    </p>

                    <p className="mt-2 font-black text-slate-900">
                      🎉 You completed all topics!
                    </p>

                  </div>
                )}

              </div>

            </div>

          </article>

        </div>

      </div>

    </main>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

      <p className="text-3xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-sm font-semibold text-blue-100">
        {label}
      </p>

    </div>
  );
}

/* =========================================================
   CONTENT SECTION
========================================================= */

function ContentSection({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 py-10 first:pt-0 last:border-b-0">

      <div className="mb-6 flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-700">
          {number}
        </div>

        <div>

          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-600">
            {label}
          </p>

          <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
            {title}
          </h3>

        </div>

      </div>

      {children}

    </section>
  );
}