"use client";

import { useEffect, useMemo, useState } from "react";
import NodeSidebar from "@/components/node/NodeSidebar";
import { nodeSections } from "@/data/node/topics";
import { nodeTopicContent } from "@/data/node/topicContent";

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

export default function NodeLayout() {
  const allTopics = useMemo(
    () =>
      nodeSections.flatMap((section) =>
        section.topics.map((topic) => ({
          ...topic,
          sectionId: section.id,
          sectionTitle: section.title,
        }))
      ),
    []
  );

  const [activeTopic, setActiveTopic] = useState(
    allTopics[0]?.id || "what-is-nodejs"
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

  const activeSection = nodeSections.find(
    (section) => section.id === activeTopicData?.sectionId
  );

  const content = nodeTopicContent[activeTopicData?.id];

  const visual = (content as any)?.visual as VisualData | undefined;

  const previousTopic = allTopics[activeIndex - 1];
  const nextTopic = allTopics[activeIndex + 1];

  const progress =
    allTopics.length > 0
      ? Math.round(((activeIndex + 1) / allTopics.length) * 100)
      : 0;

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

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-400 text-sm font-black text-slate-950">
                  Node
                </span>

                <span className="text-sm font-bold tracking-wide">
                  LEARNING PATH
                </span>

                <span className="text-white/50">/</span>

                <span className="text-sm font-semibold text-blue-200">
                  Node.js Masterclass
                </span>

              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
                Career Tech with Annu
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Node.js Masterclass
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
                Learn Node.js step by step with backend concepts, practical
                examples, REST APIs, Express.js, MongoDB, authentication,
                projects and interview preparation.
              </p>

            </div>

            {/* HERO STATS */}

            <div className="grid grid-cols-2 gap-4">

              <HeroStat
                value="70+"
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

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto w-[94%] max-w-[1600px] px-2 py-8 sm:px-4 lg:px-6">

        <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">

          {/* SIDEBAR */}

          <NodeSidebar
            activeTopic={activeTopic}
            onTopicSelect={handleTopicSelect}
          />

          {/* CONTENT */}

          <article className="min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* =================================================
                TOPIC HEADER
            ================================================= */}

            <section className="border-b border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-blue-50/40 px-6 py-10 sm:px-10 lg:px-12">

              {/* Breadcrumb */}

              <div className="flex flex-wrap items-center gap-3 text-sm font-bold">

                <span className="text-slate-500">
                  {activeSection?.title}
                </span>

                <span className="text-slate-300">→</span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                  Topic {String(activeIndex + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Topic Title */}

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem]">
                {activeTopicData?.title}
              </h2>

              {/* Topic Description */}

              {activeTopicData?.description && (
                <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">
                  {activeTopicData.description}
                </p>
              )}

              {/* Learning Tags */}

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                  📘 Beginner Friendly
                </span>

                <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700">
                  💻 Practical
                </span>

                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  🎯 Interview Focused
                </span>

              </div>

              {/* Progress */}

              <div className="mt-8 max-w-3xl">

                <div className="mb-2 flex items-center justify-between text-sm font-bold">

                  <span className="text-slate-500">
                    Your Course Progress
                  </span>

                  <span className="font-black text-blue-600">
                    {progress}%
                  </span>

                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />

                </div>

                <p className="mt-2 text-xs font-semibold text-slate-400">
                  Topic {activeIndex + 1} of {allTopics.length}
                </p>

              </div>

            </section>

            {/* =================================================
                MISSING CONTENT
            ================================================= */}

            {!content && (
              <section className="px-6 py-16 sm:px-10 lg:px-12">

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-8 text-center">

                  <div className="text-4xl">📚</div>

                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    Topic Content Coming Soon
                  </h3>

                  <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-600">
                    The selected Node.js topic exists in the course navigation,
                    but detailed learning content has not been added yet.
                  </p>

                </div>

              </section>
            )}

            {/* =================================================
                01 CONCEPT
            ================================================= */}

            {content?.concept && (
              <section className="px-6 py-12 sm:px-10 lg:px-12">

                <SectionLabel
                  number="01"
                  label="CONCEPT"
                />

                <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/70">

                  <div className="border-b border-slate-200 bg-white px-6 py-6 sm:px-8">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                        🧠
                      </div>

                      <div>

                        <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                          Core Concept
                        </p>

                        <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                          {content.concept.heading}
                        </h3>

                      </div>

                    </div>

                  </div>

                  <div className="px-6 py-7 sm:px-8 sm:py-8">

                    <div className="max-w-4xl space-y-5">

                      {content.concept.paragraphs?.map(
                        (paragraph, index) => (
                          <div
                            key={index}
                            className="flex gap-4"
                          >

                            <span className="mt-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                            <p className="text-lg leading-9 text-slate-700 sm:text-xl">
                              {paragraph}
                            </p>

                          </div>
                        )
                      )}

                    </div>

                    {content.concept.remember && (
                      <div className="mt-9 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 sm:p-7">

                        <div className="flex items-start gap-4">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                            ⭐
                          </div>

                          <div>

                            <p className="text-sm font-black uppercase tracking-widest text-yellow-700">
                              Remember This
                            </p>

                            <p className="mt-3 text-lg font-bold leading-8 text-slate-800">
                              {content.concept.remember}
                            </p>

                          </div>

                        </div>

                      </div>
                    )}

                  </div>

                </div>

              </section>
            )}

            {/* =================================================
                02 REAL WORLD ANALOGY
            ================================================= */}

            {content?.analogy && (
              <>
                <Divider />

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="02"
                    label="REAL WORLD ANALOGY"
                  />

                  <div className="mt-7">

                    <div className="max-w-3xl">

                      <p className="text-sm font-black uppercase tracking-widest text-purple-600">
                        Make It Easy to Understand
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                        {content.analogy.heading}
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-slate-600">
                        Connect the Node.js concept with familiar real-world
                        situations.
                      </p>

                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                      {content.analogy.items.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl"
                          >

                            <div className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition group-hover:text-purple-100">
                              {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-3xl transition duration-300 group-hover:scale-110">
                              {item.icon}
                            </div>

                            <h4 className="relative mt-6 text-xl font-black leading-tight text-slate-950">
                              {item.title}
                            </h4>

                            <p className="relative mt-3 text-base leading-7 text-slate-600">
                              {item.text}
                            </p>

                            <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-20" />

                          </div>
                        )
                      )}

                    </div>

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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="03"
                    label="VISUAL UNDERSTANDING"
                  />

                  <div className="mt-7">

                    <div className="max-w-3xl">

                      <p className="text-sm font-black uppercase tracking-widest text-cyan-600">
                        Learn Visually
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                        {visual.heading}
                      </h3>

                      <p className="mt-3 text-lg leading-8 text-slate-600">
                        {visual.description}
                      </p>

                    </div>

                    <div className="relative mt-10">

                      <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-cyan-300 md:block" />

                      <div className="space-y-5">

                        {visual.steps.map(
                          (step, index) => (
                            <div
                              key={index}
                              className="group relative flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg sm:p-6"
                            >

                              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-purple-600 text-2xl shadow-md">
                                {step.icon}
                              </div>

                              <div className="min-w-0 flex-1">

                                <div className="flex flex-wrap items-center gap-3">

                                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                                    Step {String(index + 1).padStart(2, "0")}
                                  </span>

                                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                                  <span className="text-xs font-bold text-slate-400">
                                    Learning Point
                                  </span>

                                </div>

                                <h4 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">
                                  {step.title}
                                </h4>

                                <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                                  {step.text}
                                </p>

                              </div>

                              <div className="hidden items-center text-xl font-black text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500 sm:flex">
                                →
                              </div>

                            </div>
                          )
                        )}

                      </div>

                    </div>

                    <div className="mt-10 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50">

                      <div className="border-b border-blue-100 px-6 py-5 sm:px-7">

                        <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                          Simple Flow
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-500">
                          Remember the concept as a simple sequence.
                        </p>

                      </div>

                      <div className="overflow-x-auto px-6 py-7 sm:px-7">

                        <div className="flex min-w-max items-center gap-3">

                          {visual.flow
                            .split("→")
                            .map((part, index, parts) => (
                              <div
                                key={index}
                                className="flex items-center gap-3"
                              >

                                <div className="rounded-2xl border border-blue-200 bg-white px-5 py-3 shadow-sm">
                                  <span className="text-base font-black text-slate-900">
                                    {part.trim()}
                                  </span>
                                </div>

                                {index < parts.length - 1 && (
                                  <span className="text-xl font-black text-blue-500">
                                    →
                                  </span>
                                )}

                              </div>
                            ))}

                        </div>

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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="04"
                    label="PRACTICAL CODE"
                  />

                  <div className="mt-7 max-w-4xl">

                    <p className="text-sm font-black uppercase tracking-widest text-emerald-600">
                      Learn by Coding
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                      {content.code.title}
                    </h3>

                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      {content.code.description}
                    </p>

                  </div>

                  <div className="mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl">

                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">

                      <div className="flex items-center gap-3">

                        <div className="flex gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-red-400/80" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                          <span className="h-3 w-3 rounded-full bg-green-400/80" />
                        </div>

                        <span className="text-sm font-bold text-slate-300">
                          Node.js
                        </span>

                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black tracking-wide text-slate-400">
                        CODE
                      </span>

                    </div>

                    <div className="overflow-x-auto">

                      <pre className="p-6 text-sm leading-8 text-slate-100 sm:p-8 sm:text-base">
                        <code>{content.code.code}</code>
                      </pre>

                    </div>

                  </div>

                  <div className="mt-6 grid gap-5 lg:grid-cols-2">

                    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-7">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg">
                          ▶
                        </div>

                        <div>

                          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">
                            Program Output
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-emerald-600">
                            What you should see
                          </p>

                        </div>

                      </div>

                      <pre className="mt-5 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-emerald-100 bg-white p-5 font-mono text-base font-bold leading-7 text-slate-800">
                        {content.code.output}
                      </pre>

                    </div>

                    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-7">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
                          💡
                        </div>

                        <div>

                          <p className="text-xs font-black uppercase tracking-widest text-blue-700">
                            How It Works
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-blue-600">
                            Understand the code
                          </p>

                        </div>

                      </div>

                      <p className="mt-5 text-lg leading-8 text-slate-700">
                        {content.code.explanation}
                      </p>

                    </div>

                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">

                    <p className="text-sm font-bold leading-6 text-slate-600">
                      💻{" "}
                      <span className="font-black text-slate-900">
                        Practice Tip:
                      </span>{" "}
                      Read the code first, predict the output, and then run it
                      yourself.
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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="05"
                    label="INTERVIEW QUESTION"
                  />

                  <div className="mt-7 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50">

                    <div className="border-b border-indigo-100 px-6 py-5 sm:px-8">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                          🎯
                        </div>

                        <div>

                          <p className="text-sm font-black uppercase tracking-widest text-indigo-700">
                            Interview Preparation
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-indigo-500">
                            Test your understanding
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-8">

                      <div className="flex gap-4">

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-black text-white">
                          Q
                        </span>

                        <h3 className="text-xl font-black leading-8 text-slate-950 sm:text-2xl">
                          {content.interview.question}
                        </h3>

                      </div>

                      <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <div className="flex items-center gap-2">

                          <span className="text-lg">
                            💡
                          </span>

                          <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                            Answer
                          </p>

                        </div>

                        <p className="mt-4 text-lg leading-8 text-slate-700">
                          {content.interview.answer}
                        </p>

                      </div>

                      {content.interview.tip && (
                        <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

                          <div className="flex items-start gap-3">

                            <span className="text-xl">
                              ⭐
                            </span>

                            <div>

                              <p className="text-sm font-black uppercase tracking-widest text-yellow-700">
                                Interview Tip
                              </p>

                              <p className="mt-2 font-bold leading-7 text-slate-700">
                                {content.interview.tip}
                              </p>

                            </div>

                          </div>

                        </div>
                      )}

                    </div>

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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="06"
                    label="TRICKY QUESTION"
                  />

                  <div className="mt-7 overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50">

                    <div className="border-b border-orange-100 px-6 py-5 sm:px-8">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
                          🧩
                        </div>

                        <div>

                          <p className="text-sm font-black uppercase tracking-widest text-orange-700">
                            Think Before You Answer
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-orange-500">
                            A common Node.js interview trap
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-8">

                      <div className="flex items-start gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
                          ?
                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="text-xs font-black uppercase tracking-widest text-orange-600">
                            Tricky Question
                          </p>

                          <h3 className="mt-3 text-xl font-black leading-8 text-slate-950 sm:text-2xl">
                            {content.tricky.question}
                          </h3>

                        </div>

                      </div>

                      <div className="mt-7 rounded-2xl border border-orange-200 bg-orange-50 p-5">

                        <div className="flex items-start gap-3">

                          <span className="text-xl">
                            💭
                          </span>

                          <div>

                            <p className="text-sm font-black uppercase tracking-widest text-orange-700">
                              Think About It
                            </p>

                            <p className="mt-2 leading-7 text-slate-700">
                              Try to predict the answer before reading the
                              explanation.
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                        <div className="flex items-center gap-3">

                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-sm">
                            ✓
                          </div>

                          <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
                            Explanation
                          </p>

                        </div>

                        <p className="mt-4 text-lg leading-8 text-slate-700">
                          {content.tricky.answer}
                        </p>

                      </div>

                      <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

                        <div className="flex items-start gap-3">

                          <span className="text-xl">
                            ⚠️
                          </span>

                          <div>

                            <p className="text-sm font-black uppercase tracking-widest text-yellow-700">
                              Key Takeaway
                            </p>

                            <p className="mt-2 font-bold leading-7 text-slate-700">
                              Do not memorize the answer. Understand why Node.js
                              behaves that way.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="07"
                    label="PRACTICE YOURSELF"
                  />

                  <div className="mt-7 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-yellow-50">

                    <div className="border-b border-amber-100 px-6 py-5 sm:px-8">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl">
                          🧠
                        </div>

                        <div>

                          <p className="text-sm font-black uppercase tracking-widest text-amber-700">
                            Practice Time
                          </p>

                          <p className="mt-0.5 text-sm font-semibold text-amber-600">
                            Try it yourself before checking the hint
                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-8">

                      <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">

                        <div className="flex items-start gap-4">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-black text-white">
                            ?
                          </div>

                          <div className="min-w-0">

                            <p className="text-xs font-black uppercase tracking-widest text-amber-700">
                              Your Task
                            </p>

                            <p className="mt-3 text-xl font-black leading-8 text-slate-950 sm:text-2xl">
                              {content.practice.question}
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="mt-5 grid gap-4 md:grid-cols-3">

                        <div className="rounded-2xl border border-slate-200 bg-white p-5">
                          <span className="text-2xl">1️⃣</span>

                          <h4 className="mt-3 font-black text-slate-950">
                            Think
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Understand the question and plan your solution.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5">
                          <span className="text-2xl">2️⃣</span>

                          <h4 className="mt-3 font-black text-slate-950">
                            Code
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Write and run your own Node.js solution.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-5">
                          <span className="text-2xl">3️⃣</span>

                          <h4 className="mt-3 font-black text-slate-950">
                            Check
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Use the hint only when you are stuck.
                          </p>
                        </div>

                      </div>

                      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">

                        <div className="flex items-start gap-4">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-lg">
                            💡
                          </div>

                          <div className="min-w-0">

                            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
                              Hint
                            </p>

                            <p className="mt-3 font-mono text-base leading-7 text-slate-700">
                              {content.practice.hint}
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">

                        <span className="text-lg">
                          🎯
                        </span>

                        <p className="text-sm font-bold leading-6 text-slate-600">

                          <span className="font-black text-slate-900">
                            Practice Rule:
                          </span>{" "}
                          Do not copy the solution immediately. Try to solve
                          the problem independently first.

                        </p>

                      </div>

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

                <section className="px-6 py-12 sm:px-10 lg:px-12">

                  <SectionLabel
                    number="08"
                    label="MINI CHALLENGE"
                  />

                  <div className="relative mt-7 overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">

                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

                    <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

                    <div className="relative">

                      <div className="border-b border-white/10 px-6 py-7 sm:px-8">

                        <div className="flex items-center gap-3">

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-xl text-slate-950">
                            🚀
                          </div>

                          <div>

                            <p className="text-sm font-black uppercase tracking-widest text-cyan-400">
                              Mini Challenge
                            </p>

                            <p className="mt-1 text-sm font-semibold text-slate-400">
                              Put your Node.js knowledge into practice
                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="px-6 py-8 sm:px-8 sm:py-9">

                        <div className="max-w-4xl">

                          <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                            Your Challenge
                          </p>

                          <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                            {content.challenge.title}
                          </h3>

                          <p className="mt-4 text-lg leading-8 text-slate-300">
                            {content.challenge.description}
                          </p>

                        </div>

                        <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-white/5 p-6 sm:p-7">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                              🎯
                            </div>

                            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                              Your Task
                            </p>

                          </div>

                          <p className="mt-4 text-lg leading-8 text-white sm:text-xl">
                            {content.challenge.task}
                          </p>

                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-3">

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <span className="text-2xl">
                              🧠
                            </span>

                            <h4 className="mt-3 font-black text-white">
                              Understand
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              Make sure you understand the concept before
                              coding.
                            </p>

                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <span className="text-2xl">
                              💻
                            </span>

                            <h4 className="mt-3 font-black text-white">
                              Build
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              Write the solution yourself and test your code.
                            </p>

                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <span className="text-2xl">
                              🏆
                            </span>

                            <h4 className="mt-3 font-black text-white">
                              Complete
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                              Check your result and improve your solution if
                              needed.
                            </p>

                          </div>

                        </div>

                        <div className="mt-7 flex items-start gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">

                          <span className="text-xl">
                            ⭐
                          </span>

                          <div>

                            <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                              Challenge Rule
                            </p>

                            <p className="mt-2 font-bold leading-7 text-slate-200">
                              Try to solve the challenge independently before
                              looking for a solution.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </section>
              </>
            )}

            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            <Divider />

            <section className="grid gap-5 px-6 py-9 sm:grid-cols-2 sm:px-10 lg:px-12">

              {/* Previous */}

              {previousTopic ? (
                <button
                  onClick={() => handleTopicSelect(previousTopic.id)}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                      ← Previous Topic
                    </span>

                    <span className="text-xl text-slate-300 transition group-hover:-translate-x-1 group-hover:text-blue-600">
                      ←
                    </span>

                  </div>

                  <div className="mt-5">

                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                      Topic {String(activeIndex).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-lg font-black leading-7 text-slate-900">
                      {previousTopic.title}
                    </p>

                  </div>

                </button>
              ) : (
                <div />
              )}

              {/* Next */}

              {nextTopic && (
                <button
                  onClick={() => handleTopicSelect(nextTopic.id)}
                  className="group rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                >

                  <div className="flex items-center justify-between">

                    <span className="ml-auto text-xl text-blue-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                      →
                    </span>

                    <span className="text-sm font-black uppercase tracking-widest text-blue-600">
                      Next Topic →
                    </span>

                  </div>

                  <div className="mt-5">

                    <p className="text-xs font-black uppercase tracking-widest text-blue-400">
                      Topic {String(activeIndex + 2).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-lg font-black leading-7 text-slate-950">
                      {nextTopic.title}
                    </p>

                  </div>

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