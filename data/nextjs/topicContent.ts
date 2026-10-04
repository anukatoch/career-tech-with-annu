export type NextTopicContent = {
  concept: {
    heading: string;
    paragraphs: string[];
    remember: string;
  };

  analogy: {
    heading: string;
    items: {
      icon: string;
      title: string;
      text: string;
    }[];
  };

  visual: {
    heading: string;
    description: string;
    steps: {
      icon: string;
      title: string;
      text: string;
    }[];
    flow: string;
  };

  code: {
    title: string;
    description: string;
    language: string;
    code: string;
    output: string;
    explanation: string;
  };

  interview: {
    question: string;
    answer: string;
    tip: string;
  };

  tricky: {
    question: string;
    answer: string;
  };

  practice: {
    question: string;
    hint: string;
  };

  challenge: {
    title: string;
    description: string;
    task: string;
  };
};

export const nextTopicContent: Record<
  string,
  NextTopicContent
> = {
  "what-is-nextjs": {
    concept: {
      heading: "What is Next.js?",
      paragraphs: [
        "Next.js is a React framework for building modern web applications.",
        "It provides features such as routing, layouts, Server Components, Client Components, data fetching, API Route Handlers, optimization and production deployment.",
        "Next.js uses React for building the user interface while providing additional application-level features.",
      ],
      remember:
        "Next.js is a framework built on top of React. React handles the UI, while Next.js provides a broader application structure.",
    },

    analogy: {
      heading: "React vs Next.js – Real World Analogy",
      items: [
        {
          icon: "⚛️",
          title: "React",
          text: "Think of React as the collection of UI building blocks used to create screens and components.",
        },
        {
          icon: "🏗️",
          title: "Next.js",
          text: "Think of Next.js as the complete structure around those React building blocks.",
        },
        {
          icon: "🚀",
          title: "Production",
          text: "Next.js provides features that help us build and deploy production applications.",
        },
      ],
    },

    visual: {
      heading: "How Next.js Works with React",
      description:
        "Next.js uses React as its foundation and adds application-level capabilities.",
      steps: [
        {
          icon: "⚛️",
          title: "React",
          text: "Create reusable UI components.",
        },
        {
          icon: "🛣️",
          title: "Routing",
          text: "Create application pages and routes.",
        },
        {
          icon: "🖥️",
          title: "Rendering",
          text: "Use Server Components and Client Components.",
        },
        {
          icon: "🚀",
          title: "Production",
          text: "Build and deploy the complete application.",
        },
      ],
      flow: "React → Next.js → Web Application → Production",
    },

    code: {
      title: "Your First Next.js Page",
      description:
        "A basic App Router page can be created using page.tsx.",
      language: "tsx",
      code: `export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js</h1>

      <p>
        My first Next.js page.
      </p>
    </main>
  );
}`,
      output:
        "The browser displays the heading Welcome to Next.js and the paragraph below it.",
      explanation:
        "In the App Router, a page.tsx file defines the UI for a route.",
    },

    interview: {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework used to build modern production-ready web applications.",
      tip:
        "Mention React, routing, rendering and production features when answering this question.",
    },

    tricky: {
      question: "Is Next.js a replacement for React?",
      answer:
        "No. Next.js is built using React. It adds additional application-level features around React.",
    },

    practice: {
      question:
        "Create a Next.js page that displays a heading, paragraph and button.",
      hint:
        "Use app/page.tsx and return JSX from the page component.",
    },

    challenge: {
      title: "Build a Welcome Page",
      description:
        "Create your first Next.js landing page.",
      task:
        "Create a page containing a heading, paragraph, button and three feature cards.",
    },
  },
};