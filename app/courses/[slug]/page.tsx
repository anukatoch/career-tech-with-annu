import CourseModules from "@/components/courses/CourseModules";
import CourseProjects from "@/components/courses/CourseProjects";
import CareerSupport from "@/components/courses/CareerSupport";
import CoursePricing from "@/components/courses/CoursePricing";
import CourseEnquiry from "@/components/courses/CourseEnquiry";
import type { Metadata } from "next";


type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const courseData: Record<
  string,
  {
  
  title: string;
  description: string;
  duration: string;
   price: string;
   included: string[];
  skills: string[];
   
  modules: {
    number: string;
    title: string;
    topics: string;
  }[];
  projects: {
  icon: string;
  title: string;
  description: string;
}[];
}
  

  
> = {
  "ai-full-stack": {
  title: "AI-Powered Full Stack Development",
  description:
    "Learn modern full-stack development with AI tools and build real-world projects.",
  duration: "2.5 Months",
  price: "17999",
  included: [
  "Live Practical Training",
  "Real-World Projects",
  "AI Tools & Coding Assistance",
  "GitHub Portfolio Guidance",
  "Career Guidance",
],

  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "AI Tools",
  ],

  modules: [
    {
      number: "01",
      title: "JavaScript Fundamentals",
      topics:
        "Variables, functions, arrays, objects, DOM, ES6+, async JavaScript",
    },
    {
      number: "02",
      title: "React.js",
      topics:
        "Components, props, state, hooks, forms, API integration and reusable UI",
    },
    {
      number: "03",
      title: "Next.js",
      topics:
        "App Router, layouts, dynamic routes, SEO and API handling",
    },
    {
      number: "04",
      title: "Node.js + Express",
      topics:
        "Server, REST APIs, middleware, authentication and backend development",
    },
    {
      number: "05",
      title: "MongoDB",
      topics:
        "Database, collections, documents, CRUD operations and Mongoose",
    },
    {
      number: "06",
      title: "AI Tools & Integration",
      topics:
        "AI-assisted coding, prompts, APIs and integrating AI features into projects",
    },
    {
      number: "07",
      title: "Real-World Projects",
      topics:
        "Build practical projects such as E-commerce, Job Portal and CRUD applications",
    },
    {
      number: "08",
      title: "Git & Deployment",
      topics:
        "Git, GitHub, project deployment and making projects portfolio-ready",
    },
  ],

  
  projects: [
  {
    icon: "🛒",
    title: "E-Commerce Website",
    description:
      "Build a complete shopping application with products, cart and user features.",
  },
  {
    icon: "💼",
    title: "Job Portal",
    description:
      "Create a job portal where users can explore and manage job opportunities.",
  },
  {
    icon: "📊",
    title: "Admin Dashboard",
    description:
      "Build a responsive dashboard with data, tables and useful management features.",
  },
],
},

"ui-ux": {
  title: "UI/UX Design",
  description:
    "Learn UI/UX design, user research, wireframing and prototyping.",
  duration: "3 Months",
  price: "13999",
  included: [
  "Live Practical UI/UX Training",
  "Figma & Prototyping Practice",
  "Real-World Design Projects",
  "Portfolio & Case Study Guidance",
  "Career Guidance",
],

  skills: [
    "Figma",
    "UI Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
  ],

  modules: [
    {
      number: "01",
      title: "UI/UX Fundamentals",
      topics:
        "Introduction to UI/UX, design thinking, user-centered design and design principles",
    },
    {
      number: "02",
      title: "User Research",
      topics:
        "User personas, interviews, surveys, user journeys and understanding user needs",
    },
    {
      number: "03",
      title: "Wireframing",
      topics:
        "Low-fidelity wireframes, layouts, information architecture and user flows",
    },
    {
      number: "04",
      title: "Figma",
      topics:
        "Frames, components, auto layout, styles, prototyping and design systems",
    },
    {
      number: "05",
      title: "UI Design",
      topics:
        "Typography, colors, spacing, grids, visual hierarchy and responsive design",
    },
    {
      number: "06",
      title: "Prototyping",
      topics:
        "Interactive prototypes, micro-interactions and usability testing",
    },
    {
      number: "07",
      title: "Real-World Projects",
      topics:
        "Design websites, mobile applications, dashboards and portfolio projects",
    },
    {
      number: "08",
      title: "Portfolio & Career",
      topics:
        "Case studies, Behance portfolio, presentation skills and interview preparation",
    },
  ],



    

  projects: [
    {
      icon: "🎨",
      title: "Website UI Design",
      description:
        "Design a modern and responsive website interface using Figma.",
    },
    {
      icon: "📱",
      title: "Mobile App Design",
      description:
        "Create a complete mobile application UI with user flows and interactive prototypes.",
    },
    {
      icon: "📊",
      title: "Dashboard Design",
      description:
        "Design a professional dashboard with cards, tables, charts and responsive layouts.",
    },
  ],
},


 react: {
  title: "React.js Development",
  description:
    "Build modern and reusable web applications using React.js.",
  duration: "2 Months",
  price: "13999",
  included: [
  "Live Practical React Training",
  "Hooks & API Integration",
  "Real-World React Projects",
  "GitHub Portfolio Guidance",
  "Career Guidance",
],

  skills: [
    "JavaScript",
    "React",
    "Hooks",
    "API",
    "Tailwind CSS",
  ],

  modules: [
    {
      number: "01",
      title: "JavaScript for React",
      topics:
        "ES6+, functions, arrays, objects, destructuring, modules and async JavaScript",
    },
    {
      number: "02",
      title: "React Fundamentals",
      topics:
        "Components, JSX, props, state, events and conditional rendering",
    },
    {
      number: "03",
      title: "React Hooks",
      topics:
        "useState, useEffect, useContext, custom hooks and state management",
    },
    {
      number: "04",
      title: "Forms & Validation",
      topics:
        "Controlled components, form handling, validation and reusable forms",
    },
    {
      number: "05",
      title: "API Integration",
      topics:
        "REST APIs, fetch, loading states, error handling and CRUD operations",
    },
    {
      number: "06",
      title: "Tailwind CSS",
      topics:
        "Responsive layouts, components, styling and modern UI development",
    },
    {
      number: "07",
      title: "Real-World Projects",
      topics:
        "Build practical React applications using APIs and reusable components",
    },
    {
      number: "08",
      title: "Git & Deployment",
      topics:
        "GitHub, project deployment and preparing React projects for portfolio",
    },
  ],

    projects: [
    {
      icon: "⚛️",
      title: "React Dashboard",
      description:
        "Build a responsive dashboard using reusable React components and modern UI.",
    },
    {
      icon: "🛍️",
      title: "Product Management App",
      description:
        "Create a React application to manage products with forms, API integration and CRUD operations.",
    },
    {
      icon: "📋",
      title: "Task Management App",
      description:
        "Build a practical task management application with state management and reusable components.",
    },
  ],
},

nextjs: {
  title: "Next.js Development",
  description:
    "Learn modern Next.js development with routing, SEO, APIs and deployment.",
  duration: "2 Months",
   price: "13999",
   included: [
  "Live Practical Next.js Training",
  "Routing, SEO & API Development",
  "Real-World Next.js Projects",
  "Deployment & GitHub Guidance",
  "Career Guidance",
],

  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "SEO",
    "API",
  ],

  modules: [
    {
      number: "01",
      title: "Next.js Fundamentals",
      topics:
        "Next.js setup, project structure, React Server Components and rendering",
    },
    {
      number: "02",
      title: "App Router",
      topics:
        "Layouts, pages, nested routes, route groups and navigation",
    },
    {
      number: "03",
      title: "Dynamic Routing",
      topics:
        "Dynamic routes, slug pages, route parameters and navigation",
    },
    {
      number: "04",
      title: "Data Fetching",
      topics:
        "Server-side data fetching, APIs, loading states and error handling",
    },
    {
      number: "05",
      title: "SEO & Metadata",
      topics:
        "Metadata, page titles, descriptions and SEO-friendly Next.js pages",
    },
    {
      number: "06",
      title: "API & Backend",
      topics:
        "API routes, forms, server actions and connecting databases",
    },
    {
      number: "07",
      title: "Real-World Project",
      topics:
        "Build a complete production-style Next.js application",
    },
    {
      number: "08",
      title: "Deployment",
      topics:
        "GitHub, production build, environment variables and deployment",
    },
  ],
  projects: [
    {
      icon: "🌐",
      title: "SEO-Friendly Website",
      description:
        "Build a fast and SEO-friendly website using Next.js routing, metadata and responsive design.",
    },
    {
      icon: "📝",
      title: "Blog / CMS Website",
      description:
        "Create a modern blog platform with dynamic routes, content pages and reusable components.",
    },
    {
      icon: "🚀",
      title: "Full-Stack Next.js App",
      description:
        "Build a complete application with APIs, database integration, authentication and deployment.",
    },
  ],
},

};


export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = courseData[slug];

  if (!course) {
    return {
      title: "Course Not Found | Career Tech",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Career Tech`,
    description: course.description,
  };
};
export default async function CourseDetails({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = courseData[slug];

  if (!course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Course Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">

          {/* Label */}
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            COURSE DETAILS
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            {course.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {course.description}
          </p>

          {/* Duration */}
          <div className="mt-8">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              ⏱ {course.duration}
            </span>
          </div>

          {/* Skills */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What You Will Learn
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {course.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-blue-50 px-4 py-2 text-blue-700"
              >
                {skill}
              </span>
            ))}
          </div>
     <CourseModules modules={course.modules} />
      <CourseProjects projects={course.projects} />
         
         <CareerSupport/>
       <CoursePricing
  price={course.price}
  included={course.included}
/>
      <CourseEnquiry courseName={course.title} />
          {/* CTA */}
          {/* <button className="mt-10 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
            Enquire Now
          </button> */}

        </div>
      </div>
    </main>
  );
}