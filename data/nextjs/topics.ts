export type NextTopic = {
  id: string;
  title: string;
};

export type NextSection = {
  id: string;
  title: string;
  topics: NextTopic[];
};

export const nextSections: NextSection[] = [
  {
    id: "introduction",
    title: "Next.js Introduction",
    topics: [
      { id: "what-is-nextjs", title: "What Is Next.js?" },
      { id: "why-nextjs", title: "Why Next.js?" },
      { id: "features", title: "Next.js Features" },
      { id: "nextjs-vs-react", title: "Next.js vs React" },
      { id: "where-nextjs-used", title: "Where Is Next.js Used?" },
      { id: "how-nextjs-works", title: "How Next.js Works" },
    ],
  },
  {
    id: "setup",
    title: "Next.js Setup",
    topics: [
      { id: "create-next-app", title: "Create Next.js App" },
      { id: "project-structure", title: "Project Structure" },
      { id: "run-project", title: "Run Next.js Project" },
      { id: "vscode-setup", title: "VS Code Setup" },
    ],
  },
  {
    id: "routing",
    title: "Routing",
    topics: [
      { id: "app-router", title: "App Router" },
      { id: "pages-layouts", title: "Pages and Layouts" },
      { id: "dynamic-routes", title: "Dynamic Routes" },
      { id: "nested-routes", title: "Nested Routes" },
      { id: "link-component", title: "Link Component" },
    ],
  },
  {
    id: "components",
    title: "Components",
    topics: [
      { id: "server-components", title: "Server Components" },
      { id: "client-components", title: "Client Components" },
      { id: "use-client", title: "use client" },
      { id: "reusable-components", title: "Reusable Components" },
    ],
  },
  {
    id: "data-fetching",
    title: "Data Fetching",
    topics: [
      { id: "fetch-api", title: "Fetch API" },
      { id: "async-components", title: "Async Components" },
      { id: "loading-ui", title: "Loading UI" },
      { id: "error-handling", title: "Error Handling" },
    ],
  },
  {
    id: "api",
    title: "API & Backend",
    topics: [
      { id: "route-handlers", title: "Route Handlers" },
      { id: "get-api", title: "GET API" },
      { id: "post-api", title: "POST API" },
      { id: "put-api", title: "PUT API" },
      { id: "delete-api", title: "DELETE API" },
    ],
  },
  {
    id: "database",
    title: "Database",
    topics: [
      { id: "mongodb", title: "MongoDB Connection" },
      { id: "mongoose", title: "Mongoose" },
      { id: "crud", title: "CRUD Operations" },
    ],
  },
  {
    id: "authentication",
    title: "Authentication",
    topics: [
      { id: "authentication", title: "Authentication Basics" },
      { id: "login-register", title: "Login & Register" },
      { id: "nextauth", title: "NextAuth" },
      { id: "protected-routes", title: "Protected Routes" },
    ],
  },
  {
    id: "styling",
    title: "Styling",
    topics: [
      { id: "css", title: "CSS" },
      { id: "css-modules", title: "CSS Modules" },
      { id: "tailwind-css", title: "Tailwind CSS" },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Next.js",
    topics: [
      { id: "middleware", title: "Middleware" },
      { id: "environment-variables", title: "Environment Variables" },
      { id: "seo-metadata", title: "SEO & Metadata" },
      { id: "image-optimization", title: "Image Optimization" },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    topics: [
      { id: "build", title: "Build Next.js App" },
      { id: "vercel", title: "Deploy on Vercel" },
      { id: "deployment-env", title: "Environment Variables" },
    ],
  },
  {
    id: "projects",
    title: "Next.js Projects",
    topics: [
      { id: "blog-project", title: "Blog Website" },
      { id: "ecommerce-project", title: "E-Commerce Website" },
      { id: "job-portal-project", title: "Job Portal" },
      { id: "fullstack-project", title: "Full Stack Project" },
    ],
  },
];
