export type ExpressTopicContent = {
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

export const expressTopicContent: Record<
  string,
  ExpressTopicContent
> = {
  "what-is-express": {
    concept: {
      heading: "What Is Express.js?",
      paragraphs: [
        "Express.js is a lightweight web application framework for Node.js. It provides a simple and flexible way to create web servers, APIs and backend applications.",
        "Node.js gives us the runtime environment, while Express.js provides useful features such as routing, middleware and request-response handling. This makes backend development easier to organize and maintain.",
        "Express.js is commonly used to build REST APIs that communicate with frontend applications such as React, mobile applications and other services.",
      ],
      remember:
        "Express.js is a Node.js web framework that simplifies server, routing, middleware and API development.",
    },

    analogy: {
      heading: "Think of Express.js Like a Reception Desk",
      items: [
        {
          icon: "🏢",
          title: "Node.js",
          text: "The building where the backend application runs.",
        },
        {
          icon: "🧑‍💼",
          title: "Express.js",
          text: "The receptionist who organizes incoming requests and sends them to the correct place.",
        },
        {
          icon: "📨",
          title: "Request",
          text: "A client asks the server for some information or wants to perform an action.",
        },
        {
          icon: "📤",
          title: "Response",
          text: "The server sends information or a result back to the client.",
        },
      ],
    },

    visual: {
      heading: "How Express.js Fits Into a Web Application",
      description:
        "A frontend sends an HTTP request to an Express server. Express receives the request, finds the appropriate route and sends a response.",
      steps: [
        {
          icon: "🖥️",
          title: "Client",
          text: "A browser, React application or mobile application sends a request.",
        },
        {
          icon: "📨",
          title: "Request",
          text: "The request contains information such as URL, method, headers and sometimes data.",
        },
        {
          icon: "⚙️",
          title: "Express",
          text: "Express processes the request through routing and middleware.",
        },
        {
          icon: "📦",
          title: "Response",
          text: "Express sends HTML, JSON or another response back to the client.",
        },
      ],
      flow: "Client → HTTP Request → Express.js → Route / Middleware → Response",
    },

    code: {
      title: "Your First Express Server",
      description:
        "This example creates a small Express application with one GET route.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
      output: `Server running on port 3000

Browser:
Welcome to Express.js`,
      explanation:
        "express() creates the Express application. app.get() defines a GET route for the root URL. res.send() sends the response, and app.listen() starts the server on port 3000.",
    },

    interview: {
      question: "What is Express.js?",
      answer:
        "Express.js is a lightweight and flexible web application framework for Node.js. It simplifies server creation, routing, middleware and API development.",
      tip:
        "In an interview, clearly explain the relationship: Node.js is the runtime, while Express.js is a framework built on top of Node.js.",
    },

    tricky: {
      question:
        "Is Express.js a replacement for Node.js?",
      answer:
        "No. Express.js runs on Node.js. Node.js provides the runtime environment, while Express.js provides higher-level tools for building web applications and APIs.",
    },

    practice: {
      question:
        "Create an Express server with a GET /about route that returns 'About Our Application'.",
      hint:
        "Create an app with express(), use app.get('/about', ...), and send the response with res.send().",
    },

    challenge: {
      title: "Build a Basic Express Server",
      description:
        "Create a small Express application with multiple routes.",
      task:
        "Create /, /about and /contact routes. Each route should return a different message. Start the server on port 3000 and test every route in the browser.",
    },
  },

  "why-express": {
    concept: {
      heading: "Why Use Express.js?",
      paragraphs: [
        "Node.js can create an HTTP server using its built-in http module, but larger applications require routing, middleware, validation, authentication and organized request handling.",
        "Express.js provides a simple structure for these tasks. Instead of manually handling every request and URL, developers can define routes and middleware using readable methods.",
        "Express.js also works well with databases, authentication libraries, frontend applications and API testing tools, making it useful for full-stack development.",
      ],
      remember:
        "Express.js reduces the amount of low-level HTTP code required to build Node.js web applications and APIs.",
    },

    analogy: {
      heading: "Why Developers Use Express",
      items: [
        {
          icon: "🧰",
          title: "Useful Tools",
          text: "Express provides routing and middleware features without requiring developers to build everything from scratch.",
        },
        {
          icon: "🛣️",
          title: "Easy Routing",
          text: "Different URLs and HTTP methods can be connected to different functions.",
        },
        {
          icon: "🧩",
          title: "Middleware",
          text: "Common tasks can be placed into reusable middleware functions.",
        },
        {
          icon: "📈",
          title: "Scalable Structure",
          text: "Routes, controllers and middleware can be separated as an application grows.",
        },
      ],
    },

    visual: {
      heading: "Node.js HTTP Module vs Express.js",
      description:
        "Both can create servers, but Express provides a higher-level development experience.",
      steps: [
        {
          icon: "1️⃣",
          title: "Node.js",
          text: "Create the HTTP server and manually inspect incoming requests.",
        },
        {
          icon: "2️⃣",
          title: "Express",
          text: "Create routes using readable methods such as app.get() and app.post().",
        },
        {
          icon: "3️⃣",
          title: "Middleware",
          text: "Add reusable processing before or after route handlers.",
        },
        {
          icon: "4️⃣",
          title: "API",
          text: "Build organized REST APIs more easily.",
        },
      ],
      flow: "Node.js → Express.js → Routing + Middleware → REST API",
    },

    code: {
      title: "Simple Express Routing",
      description:
        "Express allows routes to be written in a clear and readable way.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/products", (req, res) => {
  res.send("Products");
});

app.listen(3000);`,
      output: `GET /
Home

GET /products
Products`,
      explanation:
        "Each app.get() call defines a separate GET route. Express checks the incoming URL and executes the matching route handler.",
    },

    interview: {
      question: "Why is Express.js used with Node.js?",
      answer:
        "Express.js provides convenient features such as routing, middleware and request-response handling that make Node.js web application development easier.",
      tip:
        "Mention practical benefits rather than saying only that Express is 'easy'.",
    },

    tricky: {
      question:
        "Can we build a web server without Express.js in Node.js?",
      answer:
        "Yes. Node.js includes the built-in http module, so an HTTP server can be created without Express. Express provides a more convenient framework for larger applications.",
    },

    practice: {
      question:
        "Create three GET routes: /, /products and /contact.",
      hint:
        "Use app.get() separately for each URL.",
    },

    challenge: {
      title: "Create a Small Website Backend",
      description:
        "Use Express routing to create the backend structure for a small website.",
      task:
        "Create routes for Home, About, Courses and Contact. Return a meaningful message from each route and test them in the browser.",
    },
  },

  "express-features": {
    concept: {
      heading: "Express.js Features",
      paragraphs: [
        "Express.js provides several features that make backend development with Node.js easier. The most important features include routing, middleware, request-response handling and support for building REST APIs.",
        "Express also supports static files, modular routers and integration with databases and authentication libraries.",
        "Because Express is minimal and flexible, developers can choose how they want to structure their application instead of being forced into one large architecture.",
      ],
      remember:
        "Important Express.js features include routing, middleware, request-response handling, REST API support and modular application structure.",
    },

    analogy: {
      heading: "Express Features as a Toolkit",
      items: [
        {
          icon: "🛣️",
          title: "Routing",
          text: "Directs different requests to the correct handler.",
        },
        {
          icon: "⚙️",
          title: "Middleware",
          text: "Runs reusable logic during request processing.",
        },
        {
          icon: "📡",
          title: "REST APIs",
          text: "Helps create backend endpoints for applications.",
        },
        {
          icon: "🗂️",
          title: "Routers",
          text: "Allow large applications to divide routes into separate modules.",
        },
      ],
    },

    visual: {
      heading: "Major Express.js Features",
      description:
        "Express features work together to process a client request.",
      steps: [
        {
          icon: "📨",
          title: "Request",
          text: "The client sends an HTTP request.",
        },
        {
          icon: "⚙️",
          title: "Middleware",
          text: "Middleware can inspect or modify the request.",
        },
        {
          icon: "🛣️",
          title: "Router",
          text: "Express identifies the appropriate route.",
        },
        {
          icon: "📤",
          title: "Response",
          text: "The route sends a response to the client.",
        },
      ],
      flow: "Request → Middleware → Router → Route Handler → Response",
    },

    code: {
      title: "Routing and Middleware Together",
      description:
        "This example shows a simple middleware function and route.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

app.get("/products", (req, res) => {
  res.json({
    message: "Product list",
  });
});

app.listen(3000);`,
      output: `Request received

{
  "message": "Product list"
}`,
      explanation:
        "app.use() registers middleware. The next() function passes control to the next middleware or matching route. The /products route then sends a JSON response.",
    },

    interview: {
      question: "What are some important features of Express.js?",
      answer:
        "Important features include routing, middleware, request-response handling, REST API development, static file serving and modular routers.",
      tip:
        "Explain at least two features with a practical example when answering in an interview.",
    },

    tricky: {
      question:
        "Does Express force one specific application architecture?",
      answer:
        "No. Express is intentionally minimal and flexible. Developers can organize routes, controllers, services and other files according to the application's requirements.",
    },

    practice: {
      question:
        "Write middleware that prints 'Request received' before a /products route executes.",
      hint:
        "Use app.use() and call next() inside the middleware.",
    },

    challenge: {
      title: "Explore Express Features",
      description:
        "Build a small application using multiple Express features.",
      task:
        "Create two routes, add logging middleware and return JSON from one route. Observe the order in which middleware and route handlers execute.",
    },
  },

  "express-vs-node": {
    concept: {
      heading: "Express.js vs Node.js",
      paragraphs: [
        "Node.js is a JavaScript runtime that allows JavaScript to execute outside the browser. It provides core modules and APIs for working with files, networking, processes and HTTP.",
        "Express.js is a web framework that runs on Node.js. It adds convenient abstractions for routing, middleware and web application development.",
        "Therefore, Node.js and Express.js are not competitors. Express.js depends on Node.js and is commonly used to make Node.js backend development more organized.",
      ],
      remember:
        "Node.js is the runtime environment; Express.js is a web framework that runs on Node.js.",
    },

    analogy: {
      heading: "Think About the Difference",
      items: [
        {
          icon: "🖥️",
          title: "Node.js",
          text: "Provides the environment in which backend JavaScript runs.",
        },
        {
          icon: "🧰",
          title: "Express.js",
          text: "Provides tools and patterns that simplify web application development.",
        },
        {
          icon: "🏗️",
          title: "Application",
          text: "Uses Node.js and Express.js together to create a backend.",
        },
      ],
    },

    visual: {
      heading: "Relationship Between Node.js and Express.js",
      description:
        "Express is built to work on top of the Node.js runtime.",
      steps: [
        {
          icon: "🟨",
          title: "JavaScript",
          text: "The programming language used to write the application.",
        },
        {
          icon: "🟢",
          title: "Node.js",
          text: "Runs JavaScript on the server.",
        },
        {
          icon: "⚡",
          title: "Express.js",
          text: "Provides web development features.",
        },
        {
          icon: "🌐",
          title: "Backend",
          text: "Handles requests, APIs and application logic.",
        },
      ],
      flow: "JavaScript → Node.js Runtime → Express.js → Backend Application",
    },

    code: {
      title: "Node.js HTTP Server",
      description:
        "Node.js can create an HTTP server directly using its built-in module.",
      language: "javascript",
      code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js");
});

server.listen(3000);`,
      output: `Hello from Node.js`,
      explanation:
        "This code uses Node.js's built-in http module. Express.js can simplify this kind of server development by providing routing and middleware APIs.",
    },

    interview: {
      question: "What is the difference between Node.js and Express.js?",
      answer:
        "Node.js is a JavaScript runtime environment, while Express.js is a web application framework that runs on Node.js.",
      tip:
        "A strong short answer is: Node.js provides the runtime; Express.js simplifies web application development on that runtime.",
    },

    tricky: {
      question: "Is Express.js required to use Node.js?",
      answer:
        "No. Node.js can be used independently with its built-in modules. Express.js is an optional framework.",
    },

    practice: {
      question:
        "Explain in your own words how Node.js and Express.js work together.",
      hint:
        "Think about runtime versus framework.",
    },

    challenge: {
      title: "Compare Node and Express",
      description:
        "Understand the different responsibilities of Node.js and Express.js.",
      task:
        "Create one simple HTTP server using Node's http module and another using Express. Compare how routing is handled in both examples.",
    },
  },

  "where-express-used": {
    concept: {
      heading: "Where Is Express.js Used?",
      paragraphs: [
        "Express.js is commonly used for backend web applications and REST APIs. It can act as the server layer between a frontend application and a database.",
        "A React application can communicate with an Express API to retrieve or modify data. Express can also handle authentication, validation, file uploads and other backend responsibilities.",
        "Express is suitable for small APIs as well as larger backend applications when the codebase is organized into routes, controllers, services and other modules.",
      ],
      remember:
        "Express.js is commonly used for REST APIs, backend applications, authentication systems and database-driven applications.",
    },

    analogy: {
      heading: "Express in a Full-Stack Application",
      items: [
        {
          icon: "🖥️",
          title: "Frontend",
          text: "A React or other client application displays the user interface.",
        },
        {
          icon: "⚡",
          title: "Express API",
          text: "Express receives requests and executes backend logic.",
        },
        {
          icon: "🗄️",
          title: "Database",
          text: "The backend reads or stores application data.",
        },
        {
          icon: "🔐",
          title: "Security",
          text: "The backend can handle authentication and authorization.",
        },
      ],
    },

    visual: {
      heading: "Express in a Full-Stack Application",
      description:
        "Express commonly sits between the frontend and database.",
      steps: [
        {
          icon: "⚛️",
          title: "Frontend",
          text: "Sends a request to an API endpoint.",
        },
        {
          icon: "🚀",
          title: "Express",
          text: "Processes routing, middleware and application logic.",
        },
        {
          icon: "🗄️",
          title: "Database",
          text: "Stores or retrieves required information.",
        },
        {
          icon: "📤",
          title: "JSON Response",
          text: "Express sends the result back to the frontend.",
        },
      ],
      flow: "React → Express API → Database → Express API → React",
    },

    code: {
      title: "Simple Product API",
      description:
        "Express can provide JSON data to a frontend application.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
  ]);
});

app.listen(3000);`,
      output: `[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Keyboard"
  }
]`,
      explanation:
        "The /api/products endpoint returns product data as JSON. A frontend application can request this endpoint and use the returned data to display products.",
    },

    interview: {
      question: "Where is Express.js commonly used?",
      answer:
        "Express.js is commonly used for REST APIs, web backends, authentication systems, database-driven applications and server-side services.",
      tip:
        "Give one practical example, such as a React frontend communicating with an Express REST API.",
    },

    tricky: {
      question:
        "Can Express.js be used with a frontend framework such as React?",
      answer:
        "Yes. React can act as the frontend while Express provides the backend API.",
    },

    practice: {
      question:
        "Create a /api/products endpoint that returns an array of three products.",
      hint:
        "Use res.json() to return the array.",
    },

    challenge: {
      title: "Build a Product API",
      description:
        "Create a small backend endpoint that could be consumed by a frontend application.",
      task:
        "Create /api/products and return at least five product objects containing id, name and price. Test the endpoint in the browser or Postman.",
    },
  },

  "how-express-works": {
    concept: {
      heading: "How Express.js Works",
      paragraphs: [
        "When a client sends a request to an Express application, Express receives that request and processes it through the application's middleware and routing system.",
        "Middleware can perform tasks such as logging, authentication, validation or parsing request data. After middleware calls next(), Express continues processing the request.",
        "Express then finds a matching route and executes its handler. The handler creates a response using methods such as res.send() or res.json().",
      ],
      remember:
        "Express processes requests through middleware and routing before sending a response back to the client.",
    },

    analogy: {
      heading: "Express Request Pipeline",
      items: [
        {
          icon: "📨",
          title: "Request Arrives",
          text: "The client sends an HTTP request to the server.",
        },
        {
          icon: "🔍",
          title: "Middleware",
          text: "Express runs applicable middleware functions.",
        },
        {
          icon: "🛣️",
          title: "Route Matching",
          text: "Express finds a route matching the HTTP method and URL.",
        },
        {
          icon: "📤",
          title: "Response",
          text: "The route handler sends the final response.",
        },
      ],
    },

    visual: {
      heading: "Express Request Flow",
      description:
        "The request moves through a sequence of processing steps before the client receives the response.",
      steps: [
        {
          icon: "1️⃣",
          title: "Client Request",
          text: "A browser, frontend or API client sends a request.",
        },
        {
          icon: "2️⃣",
          title: "Middleware",
          text: "Middleware can inspect, modify or reject the request.",
        },
        {
          icon: "3️⃣",
          title: "Route",
          text: "Express identifies the matching route handler.",
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "The route sends data back to the client.",
        },
      ],
      flow: "Client → Middleware → Route → Handler → Response",
    },

    code: {
      title: "Understanding the Request Flow",
      description:
        "This example shows middleware running before a route handler.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});

app.get("/users", (req, res) => {
  console.log("Route executed");
  res.json({
    message: "Users returned",
  });
});

app.listen(3000);`,
      output: `Middleware executed
Route executed

{
  "message": "Users returned"
}`,
      explanation:
        "The request first reaches the middleware. Calling next() passes control to the matching route. The route then creates and sends the response.",
    },

    interview: {
      question: "How does an Express.js request work?",
      answer:
        "A request enters the Express application, passes through applicable middleware, is matched to a route, and is then handled by the route handler that sends the response.",
      tip:
        "Remember the basic sequence: Request → Middleware → Route → Response.",
    },

    tricky: {
      question:
        "What happens if middleware does not call next() and does not send a response?",
      answer:
        "The request may remain pending because Express has not been told to continue to the next middleware or route and no response has been sent.",
    },

    practice: {
      question:
        "Create middleware that logs the request URL and then allows a /users route to execute.",
      hint:
        "Use req.url for the URL and call next() after logging.",
    },

    challenge: {
      title: "Trace an Express Request",
      description:
        "Build a small application that demonstrates the Express request pipeline.",
      task:
        "Create two middleware functions and one route. Add console messages to each stage and observe the exact order in which they execute when the route is requested.",
    },
  },
    "install-express": {
    concept: {
      heading: "Installing Express.js",
      paragraphs: [
        "Express.js is installed as an npm package inside a Node.js project. Before installing Express, make sure Node.js and npm are available on your system.",
        "The usual approach is to create a project folder, initialize npm and then install Express as a dependency.",
        "After installation, Express becomes available to the application through require() or import syntax, depending on the project configuration.",
      ],
      remember:
        "Express.js is installed inside a Node.js project using npm install express.",
    },

    analogy: {
      heading: "Installing Express Like Adding a Tool",
      items: [
        {
          icon: "📁",
          title: "Project",
          text: "First create a Node.js project where your backend code will live.",
        },
        {
          icon: "📦",
          title: "Package",
          text: "Express is added to the project as an npm package.",
        },
        {
          icon: "⚙️",
          title: "Install",
          text: "npm downloads Express and records it as a project dependency.",
        },
        {
          icon: "🚀",
          title: "Use",
          text: "The application can then import Express and create a server.",
        },
      ],
    },

    visual: {
      heading: "Express Installation Flow",
      description:
        "Express is installed as a dependency of a Node.js project.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Folder",
          text: "Create a folder for the backend application.",
        },
        {
          icon: "2️⃣",
          title: "Initialize npm",
          text: "Run npm init -y to create package.json.",
        },
        {
          icon: "3️⃣",
          title: "Install Express",
          text: "Run npm install express.",
        },
        {
          icon: "4️⃣",
          title: "Import Express",
          text: "Use Express in the application code.",
        },
      ],
      flow: "Project → npm init → npm install express → Express Application",
    },

    code: {
      title: "Install Express.js",
      description:
        "Run these commands inside your Node.js project folder.",
      language: "bash",
      code: `npm init -y
npm install express`,
      output: `added packages

node_modules/
package.json
package-lock.json`,
      explanation:
        "npm init -y creates package.json with default values. npm install express downloads Express and adds it to the dependencies section of package.json.",
    },

    interview: {
      question: "How do you install Express.js?",
      answer:
        "Create a Node.js project, initialize npm and run npm install express.",
      tip:
        "Remember that Express should normally be installed inside the project where it will be used.",
    },

    tricky: {
      question:
        "Do you need to install Express globally to create an Express application?",
      answer:
        "No. Express is normally installed locally in the project using npm install express.",
    },

    practice: {
      question:
        "Create a new Node.js project and install Express.js in it.",
      hint:
        "Use npm init -y followed by npm install express.",
    },

    challenge: {
      title: "Prepare an Express Project",
      description:
        "Create the basic project environment required for Express development.",
      task:
        "Create a new folder, initialize npm, install Express and verify that Express appears under dependencies in package.json.",
    },
  },

  "create-express-project": {
    concept: {
      heading: "Creating an Express Project",
      paragraphs: [
        "An Express project starts with a normal Node.js project. The project contains package.json, the installed dependencies and application source files.",
        "A simple project can begin with one server file. As the application grows, routes, controllers, middleware and configuration can be separated into different folders.",
        "Starting with a clean structure makes the backend easier to understand and maintain.",
      ],
      remember:
        "An Express application is a Node.js project with Express installed as a dependency.",
    },

    analogy: {
      heading: "Think of a Project as an Organized Workspace",
      items: [
        {
          icon: "🏠",
          title: "Project Folder",
          text: "The main workspace containing the complete backend application.",
        },
        {
          icon: "📋",
          title: "package.json",
          text: "Stores project information, scripts and dependencies.",
        },
        {
          icon: "🧠",
          title: "Source Code",
          text: "Contains the server and application logic.",
        },
        {
          icon: "📦",
          title: "node_modules",
          text: "Contains installed packages used by the project.",
        },
      ],
    },

    visual: {
      heading: "Basic Express Project Structure",
      description:
        "A beginner-friendly Express project can start with a small structure.",
      steps: [
        {
          icon: "📁",
          title: "express-app",
          text: "Main project folder.",
        },
        {
          icon: "📋",
          title: "package.json",
          text: "Project configuration and dependencies.",
        },
        {
          icon: "📦",
          title: "node_modules",
          text: "Installed npm packages.",
        },
        {
          icon: "📄",
          title: "server.js",
          text: "Application entry point.",
        },
      ],
      flow: "express-app → package.json + node_modules + server.js",
    },

    code: {
      title: "Create a Project",
      description:
        "These commands create a basic Express project.",
      language: "bash",
      code: `mkdir express-app
cd express-app

npm init -y
npm install express`,
      output: `express-app/
├── node_modules/
├── package-lock.json
└── package.json`,
      explanation:
        "mkdir creates the project folder, cd moves into it, npm init creates package.json and npm install express adds Express to the project.",
    },

    interview: {
      question: "What files are commonly present in a basic Express project?",
      answer:
        "A basic project commonly contains package.json, package-lock.json, node_modules and an application file such as server.js or app.js.",
      tip:
        "The exact structure can vary depending on the project's architecture.",
    },

    tricky: {
      question: "Should node_modules be manually created?",
      answer:
        "No. npm creates node_modules automatically when packages are installed.",
    },

    practice: {
      question:
        "Create a folder named express-app and initialize it as an npm project.",
      hint:
        "Use mkdir, cd and npm init -y.",
    },

    challenge: {
      title: "Create Your First Express Workspace",
      description:
        "Set up a clean Express development environment.",
      task:
        "Create an express-app project, install Express and create an empty server.js file ready for your first server.",
    },
  },

  "install-express-npm": {
    concept: {
      heading: "Installing Express with npm",
      paragraphs: [
        "npm is the package manager commonly used with Node.js projects. It can download packages, manage dependencies and execute project scripts.",
        "The command npm install express downloads Express into the current project and adds it to package.json dependencies.",
        "Using a local project dependency keeps the application independent and makes the required package versions easier to reproduce on another computer.",
      ],
      remember:
        "npm install express installs Express locally and records it as a project dependency.",
    },

    analogy: {
      heading: "npm as a Package Manager",
      items: [
        {
          icon: "📦",
          title: "Find",
          text: "npm identifies the package requested by the developer.",
        },
        {
          icon: "⬇️",
          title: "Download",
          text: "The package and its required dependencies are downloaded.",
        },
        {
          icon: "📝",
          title: "Record",
          text: "The dependency is recorded in package.json.",
        },
        {
          icon: "🛠️",
          title: "Use",
          text: "The application can import and use the installed package.",
        },
      ],
    },

    visual: {
      heading: "What Happens During npm install",
      description:
        "The npm command performs several tasks automatically.",
      steps: [
        {
          icon: "1️⃣",
          title: "Command",
          text: "Developer runs npm install express.",
        },
        {
          icon: "2️⃣",
          title: "Download",
          text: "npm downloads Express and required packages.",
        },
        {
          icon: "3️⃣",
          title: "node_modules",
          text: "Packages are stored inside node_modules.",
        },
        {
          icon: "4️⃣",
          title: "package.json",
          text: "Express is added to dependencies.",
        },
      ],
      flow: "npm install express → Download → node_modules → dependencies",
    },

    code: {
      title: "Install Express",
      description:
        "Run the command from the project directory.",
      language: "bash",
      code: `npm install express`,
      output: `added packages

dependencies:
  express`,
      explanation:
        "The command installs Express as a regular application dependency. package.json is updated automatically.",
    },

    interview: {
      question: "What does npm install express do?",
      answer:
        "It downloads Express and its required dependencies into the project and adds Express to package.json.",
      tip:
        "Know the difference between installing a package and importing it in JavaScript.",
    },

    tricky: {
      question:
        "Does npm install express create the Express server automatically?",
      answer:
        "No. It only installs the package. You still need to write application code and create the server.",
    },

    practice: {
      question:
        "Install Express in a test Node.js project and inspect package.json.",
      hint:
        "Look for Express under the dependencies section.",
    },

    challenge: {
      title: "Understand npm Dependencies",
      description:
        "Learn how Express becomes part of a Node.js project.",
      task:
        "Install Express, open package.json and identify the Express version listed under dependencies.",
    },
  },

  "first-express-app": {
    concept: {
      heading: "First Express Application",
      paragraphs: [
        "A basic Express application creates an Express instance, defines one or more routes and starts a server listening on a port.",
        "The express() function creates the application object. Route methods such as app.get() define how the application responds to requests.",
        "The app.listen() method starts the server so that clients can connect to it.",
      ],
      remember:
        "A basic Express application needs an Express app, at least one route and a listening server.",
    },

    analogy: {
      heading: "Building Your First Express Application",
      items: [
        {
          icon: "🏗️",
          title: "Create App",
          text: "Create the Express application instance.",
        },
        {
          icon: "🛣️",
          title: "Add Route",
          text: "Tell Express what to do for a particular URL.",
        },
        {
          icon: "🎧",
          title: "Listen",
          text: "Start listening for incoming requests.",
        },
        {
          icon: "🌐",
          title: "Visit",
          text: "Open the URL in a browser or API client.",
        },
      ],
    },

    visual: {
      heading: "First Express Application Flow",
      description:
        "Three basic steps are enough to create a simple Express server.",
      steps: [
        {
          icon: "1️⃣",
          title: "express()",
          text: "Create the Express application.",
        },
        {
          icon: "2️⃣",
          title: "app.get()",
          text: "Create the first GET route.",
        },
        {
          icon: "3️⃣",
          title: "app.listen()",
          text: "Start the server on a port.",
        },
        {
          icon: "4️⃣",
          title: "Browser",
          text: "Request the route and receive the response.",
        },
      ],
      flow: "express() → Route → app.listen() → Browser Request",
    },

    code: {
      title: "Your First Express Application",
      description:
        "This is a minimal Express application.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
      output: `Server running on port 3000

Browser:
Hello Express.js`,
      explanation:
        "require() loads Express, express() creates the application, app.get() creates the home route and app.listen() starts the server.",
    },

    interview: {
      question: "What are the basic steps to create an Express application?",
      answer:
        "Install Express, import it, create an application instance, define routes and start the server using app.listen().",
      tip:
        "Be able to explain what each line of a basic Express server does.",
    },

    tricky: {
      question:
        "Does calling express() start the server?",
      answer:
        "No. express() creates the application object. app.listen() starts the server and begins listening for requests.",
    },

    practice: {
      question:
        "Create an Express application with a GET / route returning 'Hello Express'.",
      hint:
        "Use express(), app.get() and app.listen().",
    },

    challenge: {
      title: "Build Your First Express App",
      description:
        "Create and run a complete beginner Express application.",
      task:
        "Create an Express server on port 3000 with /, /about and /contact routes. Return a different message from each route.",
    },
  },

  "running-express-server": {
    concept: {
      heading: "Running Express Server",
      paragraphs: [
        "After writing an Express application, the server must be started using Node.js. The JavaScript file containing the application can be executed with the node command.",
        "When app.listen() starts successfully, the application begins accepting HTTP requests on the specified port.",
        "During development, developers can restart the server manually or use tools such as nodemon to automatically restart it when source files change.",
      ],
      remember:
        "Use node filename.js to start a Node.js Express application unless a project script is configured.",
    },

    analogy: {
      heading: "Starting the Server",
      items: [
        {
          icon: "📄",
          title: "Server File",
          text: "Contains the Express application code.",
        },
        {
          icon: "▶️",
          title: "Run",
          text: "Node.js executes the server file.",
        },
        {
          icon: "🎧",
          title: "Listen",
          text: "Express starts listening on the configured port.",
        },
        {
          icon: "🌐",
          title: "Connect",
          text: "A browser or API client can now send requests.",
        },
      ],
    },

    visual: {
      heading: "Running an Express Server",
      description:
        "The server must be running before a client can access the API.",
      steps: [
        {
          icon: "1️⃣",
          title: "Write Code",
          text: "Create server.js with the Express application.",
        },
        {
          icon: "2️⃣",
          title: "Run Node",
          text: "Execute node server.js.",
        },
        {
          icon: "3️⃣",
          title: "Listen",
          text: "Express listens on the configured port.",
        },
        {
          icon: "4️⃣",
          title: "Test",
          text: "Open the URL in a browser or Postman.",
        },
      ],
      flow: "server.js → node server.js → Port 3000 → Client Request",
    },

    code: {
      title: "Run an Express Server",
      description:
        "Save the application as server.js and run it from the terminal.",
      language: "bash",
      code: `node server.js`,
      output: `Server running on port 3000`,
      explanation:
        "The node command executes the JavaScript file. Once app.listen() starts successfully, the server can receive requests.",
    },

    interview: {
      question: "How do you run an Express application?",
      answer:
        "If the entry file is server.js, run node server.js from the project directory, or use an npm script configured in package.json.",
      tip:
        "Mention npm scripts when discussing how Express applications are commonly started in projects.",
    },

    tricky: {
      question:
        "Can you access an Express route if the Node.js process is stopped?",
      answer:
        "No. The server process must be running to receive and process requests.",
    },

    practice: {
      question:
        "Create server.js, start it using Node.js and open the server URL in a browser.",
      hint:
        "Use node server.js and visit localhost:3000.",
    },

    challenge: {
      title: "Run and Test Your Server",
      description:
        "Practice the complete development cycle.",
      task:
        "Start your Express server, test the home route, stop the server and observe what happens when you try to access the route again.",
    },
  },

  "express-project-structure": {
    concept: {
      heading: "Understanding Express Project Structure",
      paragraphs: [
        "A small Express application can start with one server file, but real-world applications usually separate responsibilities into multiple folders.",
        "Routes define API endpoints, controllers contain request-handling logic, middleware handles reusable processing and configuration files contain environment-specific settings.",
        "There is no single mandatory Express folder structure. The goal is to keep related responsibilities organized and make the application easier to maintain.",
      ],
      remember:
        "Express does not force one folder structure; organize the project according to its size and responsibilities.",
    },

    analogy: {
      heading: "Organizing a Backend Like an Office",
      items: [
        {
          icon: "🚪",
          title: "Routes",
          text: "Act like the reception desk that directs requests.",
        },
        {
          icon: "🧠",
          title: "Controllers",
          text: "Handle the main request-related application logic.",
        },
        {
          icon: "⚙️",
          title: "Middleware",
          text: "Performs reusable processing before or after route handling.",
        },
        {
          icon: "🗄️",
          title: "Models",
          text: "Represent and manage application data when using a database.",
        },
      ],
    },

    visual: {
      heading: "A Scalable Express Structure",
      description:
        "As the application grows, code can be separated into logical modules.",
      steps: [
        {
          icon: "🛣️",
          title: "routes",
          text: "Contains endpoint definitions.",
        },
        {
          icon: "🧠",
          title: "controllers",
          text: "Contains request-handling functions.",
        },
        {
          icon: "⚙️",
          title: "middleware",
          text: "Contains reusable request processing.",
        },
        {
          icon: "🗄️",
          title: "models",
          text: "Contains database-related structures.",
        },
      ],
      flow: "Request → Routes → Middleware → Controllers → Models",
    },

    code: {
      title: "Example Project Structure",
      description:
        "A larger Express application can be organized like this.",
      language: "text",
      code: `express-app/
│
├── server.js
├── package.json
│
├── routes/
│   └── productRoutes.js
│
├── controllers/
│   └── productController.js
│
├── middleware/
│   └── authMiddleware.js
│
└── models/
    └── productModel.js`,
      output: `Organized backend application`,
      explanation:
        "The structure separates routing, request logic, middleware and data-related code. This makes larger applications easier to navigate and maintain.",
    },

    interview: {
      question: "Does Express.js require a specific project structure?",
      answer:
        "No. Express is flexible and does not enforce one folder structure. Developers usually organize files according to the application's requirements.",
      tip:
        "Explain why separation of concerns becomes important as the project grows.",
    },

    tricky: {
      question:
        "Should every small Express project immediately have routes, controllers, services and models folders?",
      answer:
        "Not necessarily. Small projects can use a simpler structure. Additional layers can be introduced when the application becomes more complex.",
    },

    practice: {
      question:
        "Create a simple Express project with routes, controllers and middleware folders.",
      hint:
        "Start with one file in each folder and connect them gradually.",
    },

    challenge: {
      title: "Design an Express Backend",
      description:
        "Create a clean structure for a small REST API.",
      task:
        "Create routes, controllers and middleware folders for a product API. Decide which responsibility belongs in each folder before writing the implementation.",
    },
  },
    "creating-server": {
    concept: {
      heading: "Express Server",
      paragraphs: [
        "An Express server is a Node.js application that listens for incoming HTTP requests and sends responses back to clients.",
        "The Express application is created using express(). Routes define what should happen when a particular URL and HTTP method are requested.",
        "The server starts listening for requests when app.listen() is called with a port number.",
      ],
      remember:
        "An Express server receives HTTP requests, processes them and sends HTTP responses.",
    },

    analogy: {
      heading: "Think of an Express Server Like a Reception Desk",
      items: [
        {
          icon: "🏢",
          title: "Server",
          text: "The building where the backend application operates.",
        },
        {
          icon: "📨",
          title: "Request",
          text: "A visitor arrives and asks for something.",
        },
        {
          icon: "🛣️",
          title: "Route",
          text: "The request is directed to the correct department.",
        },
        {
          icon: "📤",
          title: "Response",
          text: "The department sends the requested information back.",
        },
      ],
    },

    visual: {
      heading: "How an Express Server Works",
      description:
        "The client communicates with the Express server through HTTP requests and responses.",
      steps: [
        {
          icon: "🖥️",
          title: "Client",
          text: "A browser, frontend application or API client sends a request.",
        },
        {
          icon: "📨",
          title: "HTTP Request",
          text: "The request contains a method and URL.",
        },
        {
          icon: "⚡",
          title: "Express Server",
          text: "Express processes the request and finds the appropriate route.",
        },
        {
          icon: "📤",
          title: "HTTP Response",
          text: "The server sends data or a message back to the client.",
        },
      ],
      flow: "Client → HTTP Request → Express Server → Route → HTTP Response",
    },

    code: {
      title: "Create an Express Server",
      description:
        "This example creates a simple Express server on port 3000.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express Server is Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
      output: `Server running on port 3000

Browser:
Express Server is Running`,
      explanation:
        "express() creates the application. app.get() creates the root route, while app.listen() starts the server and makes it listen for incoming requests on port 3000.",
    },

    interview: {
      question: "What is an Express server?",
      answer:
        "An Express server is a Node.js application that uses Express to receive HTTP requests, process them through middleware and routes, and send responses.",
      tip:
        "Mention request, route processing and response when explaining an Express server.",
    },

    tricky: {
      question:
        "Does creating an Express app automatically make it accessible through a browser?",
      answer:
        "No. The server must start listening on a port using app.listen().",
    },

    practice: {
      question:
        "Create an Express server on port 4000 with a GET / route.",
      hint:
        "Use express(), app.get() and app.listen(4000).",
    },

    challenge: {
      title: "Build a Running Express Server",
      description:
        "Create a server that responds to multiple URLs.",
      task:
        "Create an Express server on port 4000 with /, /about and /services routes. Return a different message from every route.",
    },
  },

  "request-response": {
    concept: {
      heading: "Request and Response",
      paragraphs: [
        "Every HTTP interaction between a client and an Express server involves a request and a response. The client sends the request and the server sends the response.",
        "Express provides two important objects inside a route handler: req for the incoming request and res for the outgoing response.",
        "The request object contains information such as the URL, HTTP method, parameters, query values and headers. The response object provides methods for sending data back to the client.",
      ],
      remember:
        "req represents the incoming request and res represents the outgoing response.",
    },

    analogy: {
      heading: "Request and Response Like an Order",
      items: [
        {
          icon: "🙋",
          title: "Customer",
          text: "The client asks the server for something.",
        },
        {
          icon: "📝",
          title: "Request",
          text: "The request contains the details of what the client wants.",
        },
        {
          icon: "⚙️",
          title: "Server",
          text: "Express processes the request.",
        },
        {
          icon: "📦",
          title: "Response",
          text: "The server sends the result back to the client.",
        },
      ],
    },

    visual: {
      heading: "Request → Processing → Response",
      description:
        "Express provides req and res objects to handle the communication.",
      steps: [
        {
          icon: "📨",
          title: "req",
          text: "Contains information received from the client.",
        },
        {
          icon: "🔍",
          title: "Process",
          text: "The route handler processes the request.",
        },
        {
          icon: "📤",
          title: "res",
          text: "Used to create the server response.",
        },
        {
          icon: "🌐",
          title: "Client",
          text: "Receives the final response.",
        },
      ],
      flow: "Client → req → Express Logic → res → Client",
    },

    code: {
      title: "Using req and res",
      description:
        "The route handler receives request and response objects.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.get("/info", (req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.send("Request received successfully");
});

app.listen(3000);`,
      output: `GET
/info

Request received successfully`,
      explanation:
        "req.method gives the HTTP method and req.url gives the requested URL. res.send() sends a response to the client.",
    },

    interview: {
      question: "What are req and res in Express.js?",
      answer:
        "req is the request object containing information about the incoming client request. res is the response object used to send data back to the client.",
      tip:
        "Remember: req comes into the server, res goes back to the client.",
    },

    tricky: {
      question: "Can a route send a response using req.send()?",
      answer:
        "No. The response must be sent using the res object, such as res.send(), res.json() or res.status().",
    },

    practice: {
      question:
        "Create a /info route that prints req.method and req.url and sends a response.",
      hint:
        "Use console.log(req.method), console.log(req.url) and res.send().",
    },

    challenge: {
      title: "Inspect an Express Request",
      description:
        "Learn what information Express receives from a client.",
      task:
        "Create a route that prints the request method, URL and headers in the terminal and sends a simple response to the browser.",
    },
  },

  "http-methods": {
    concept: {
      heading: "HTTP Methods in Express.js",
      paragraphs: [
        "HTTP methods describe the action a client wants to perform on a resource. Express provides route methods such as get(), post(), put(), patch() and delete().",
        "GET is commonly used to retrieve data, POST to create data, PUT to replace existing data, PATCH to partially update data and DELETE to remove data.",
        "Choosing the appropriate HTTP method helps make REST APIs predictable and easier for frontend applications and other clients to use.",
      ],
      remember:
        "GET reads, POST creates, PUT replaces, PATCH partially updates and DELETE removes data.",
    },

    analogy: {
      heading: "HTTP Methods as Different Actions",
      items: [
        {
          icon: "👀",
          title: "GET",
          text: "Ask the server to provide information.",
        },
        {
          icon: "➕",
          title: "POST",
          text: "Ask the server to create a new resource.",
        },
        {
          icon: "🔄",
          title: "PUT / PATCH",
          text: "Ask the server to update existing information.",
        },
        {
          icon: "🗑️",
          title: "DELETE",
          text: "Ask the server to remove a resource.",
        },
      ],
    },

    visual: {
      heading: "Common HTTP Methods",
      description:
        "Express maps HTTP methods to route handlers.",
      steps: [
        {
          icon: "GET",
          title: "Read",
          text: "Retrieve existing data.",
        },
        {
          icon: "POST",
          title: "Create",
          text: "Create a new resource.",
        },
        {
          icon: "PUT",
          title: "Replace",
          text: "Replace an existing resource.",
        },
        {
          icon: "PATCH",
          title: "Update",
          text: "Update part of a resource.",
        },
      ],
      flow: "GET → Read | POST → Create | PUT → Replace | PATCH → Update | DELETE → Remove",
    },

    code: {
      title: "Express HTTP Methods",
      description:
        "Express provides a route method for each common HTTP method.",
      language: "javascript",
      code: `app.get("/products", (req, res) => {
  res.send("Get products");
});

app.post("/products", (req, res) => {
  res.send("Create product");
});

app.put("/products/1", (req, res) => {
  res.send("Replace product");
});

app.patch("/products/1", (req, res) => {
  res.send("Update product");
});

app.delete("/products/1", (req, res) => {
  res.send("Delete product");
});`,
      output: `GET    /products
POST   /products
PUT    /products/1
PATCH  /products/1
DELETE /products/1`,
      explanation:
        "Each Express route method corresponds to an HTTP method. The URL and method together determine which route handler should execute.",
    },

    interview: {
      question: "What are common HTTP methods used in Express?",
      answer:
        "Common methods are GET, POST, PUT, PATCH and DELETE. They are commonly used for reading, creating, replacing, updating and deleting resources.",
      tip:
        "Know the practical purpose of each method rather than memorizing only their names.",
    },

    tricky: {
      question: "What is the main difference between PUT and PATCH?",
      answer:
        "PUT is commonly used to replace an entire resource, while PATCH is commonly used to partially update a resource.",
    },

    practice: {
      question:
        "Create GET and POST routes for /products and a DELETE route for /products/:id.",
      hint:
        "Use app.get(), app.post() and app.delete().",
    },

    challenge: {
      title: "Create CRUD Routes",
      description:
        "Create the basic route structure for a product API.",
      task:
        "Create GET, POST, PUT, PATCH and DELETE routes for products. Return a simple message from each route and test them using an API client.",
    },
  },

  "http-status-codes": {
    concept: {
      heading: "HTTP Status Codes",
      paragraphs: [
        "HTTP status codes tell the client what happened when the server processed a request. Express allows developers to set the status code using res.status().",
        "Status codes are grouped into categories. 2xx generally indicates success, 3xx indicates redirection, 4xx indicates a client-side problem and 5xx indicates a server-side problem.",
        "Common API responses include 200 for a successful request, 201 when a resource is created, 400 for invalid input, 401 for unauthenticated access, 404 when a resource is not found and 500 for an internal server error.",
      ],
      remember:
        "Status codes communicate the result of an HTTP request to the client.",
    },

    analogy: {
      heading: "Status Codes as Result Messages",
      items: [
        {
          icon: "✅",
          title: "200 OK",
          text: "The request was processed successfully.",
        },
        {
          icon: "🆕",
          title: "201 Created",
          text: "A new resource was successfully created.",
        },
        {
          icon: "❌",
          title: "400 Bad Request",
          text: "The request contains invalid or unacceptable data.",
        },
        {
          icon: "🔎",
          title: "404 Not Found",
          text: "The requested resource could not be found.",
        },
      ],
    },

    visual: {
      heading: "HTTP Status Code Categories",
      description:
        "Status codes are grouped according to the general result of the request.",
      steps: [
        {
          icon: "2️⃣",
          title: "2xx Success",
          text: "The request was successfully processed.",
        },
        {
          icon: "3️⃣",
          title: "3xx Redirect",
          text: "The client needs to follow a different location or action.",
        },
        {
          icon: "4️⃣",
          title: "4xx Client Error",
          text: "Something is wrong with the request or access.",
        },
        {
          icon: "5️⃣",
          title: "5xx Server Error",
          text: "The server encountered a problem processing the request.",
        },
      ],
      flow: "Request → Server Result → HTTP Status Code → Client",
    },

    code: {
      title: "Sending Status Codes",
      description:
        "Use res.status() to set the HTTP status code.",
      language: "javascript",
      code: `app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Products fetched successfully",
  });
});

app.post("/products", (req, res) => {
  res.status(201).json({
    message: "Product created successfully",
  });
});`,
      output: `GET  /products
Status: 200

POST /products
Status: 201`,
      explanation:
        "res.status() sets the status code and res.json() sends a JSON response. These methods can be chained together.",
    },

    interview: {
      question: "What is the purpose of HTTP status codes?",
      answer:
        "Status codes communicate the result of an HTTP request to the client.",
      tip:
        "Know commonly used codes such as 200, 201, 400, 401, 403, 404 and 500.",
    },

    tricky: {
      question:
        "Does a 404 status mean the Express server is completely down?",
      answer:
        "No. A 404 usually means the server responded but could not find the requested resource or route.",
    },

    practice: {
      question:
        "Create a route that returns status 404 with a JSON error message.",
      hint:
        "Use res.status(404).json().",
    },

    challenge: {
      title: "Create Meaningful API Responses",
      description:
        "Practice returning appropriate status codes.",
      task:
        "Create product routes that return 200 for successful GET, 201 for successful POST and 404 when a requested product is not found.",
    },
  },

  "http-headers": {
    concept: {
      heading: "HTTP Headers",
      paragraphs: [
        "HTTP headers contain additional information about a request or response. They can describe the content type, authentication information, caching instructions and other communication details.",
        "In Express, request headers can be read through req.headers or req.get(). Response headers can be set using res.set() or res.header().",
        "Headers are especially important when building APIs because clients and servers use them to communicate metadata about requests and responses.",
      ],
      remember:
        "HTTP headers carry metadata about requests and responses.",
    },

    analogy: {
      heading: "Headers as Information Attached to a Package",
      items: [
        {
          icon: "📦",
          title: "Package",
          text: "Represents the actual request or response data.",
        },
        {
          icon: "🏷️",
          title: "Label",
          text: "Provides additional information about what is inside.",
        },
        {
          icon: "📋",
          title: "Metadata",
          text: "Describes how the data should be interpreted.",
        },
        {
          icon: "🔐",
          title: "Authorization",
          text: "Can carry authentication-related information.",
        },
      ],
    },

    visual: {
      heading: "Request and Response Headers",
      description:
        "Headers can travel in both directions between client and server.",
      steps: [
        {
          icon: "📨",
          title: "Request Headers",
          text: "The client sends metadata to the server.",
        },
        {
          icon: "🔍",
          title: "Read Headers",
          text: "Express can access request header values.",
        },
        {
          icon: "📤",
          title: "Response Headers",
          text: "The server can attach metadata to the response.",
        },
        {
          icon: "🖥️",
          title: "Client",
          text: "The client reads the response headers.",
        },
      ],
      flow: "Client Headers → Express → Response Headers → Client",
    },

    code: {
      title: "Reading and Setting Headers",
      description:
        "Express provides simple methods for working with HTTP headers.",
      language: "javascript",
      code: `app.get("/headers", (req, res) => {
  const userAgent = req.get("user-agent");

  res.set("X-App-Name", "Express API");

  res.json({
    userAgent,
  });
});`,
      output: `{
  "userAgent": "Browser information..."
}

Response Header:
X-App-Name: Express API`,
      explanation:
        "req.get() reads a request header. res.set() adds a custom response header before sending the JSON response.",
    },

    interview: {
      question: "What are HTTP headers?",
      answer:
        "HTTP headers are key-value metadata sent with HTTP requests and responses. They provide additional information about the communication.",
      tip:
        "Examples include Content-Type, Authorization, Accept and Cache-Control.",
    },

    tricky: {
      question:
        "Are HTTP headers the same as the response body?",
      answer:
        "No. Headers contain metadata about the request or response, while the body contains the actual data being transferred.",
    },

    practice: {
      question:
        "Read the user-agent request header and send a custom X-App-Name response header.",
      hint:
        "Use req.get() and res.set().",
    },

    challenge: {
      title: "Explore HTTP Headers",
      description:
        "Understand how metadata travels between a client and Express.",
      task:
        "Create a route that reads the Accept header and returns a custom response header named X-API-Version.",
    },
  },
  "app-listen": {
  concept: {
    heading: "app.listen()",
    paragraphs: [
      "The app.listen() method starts an Express server and makes it listen for incoming HTTP requests on a specific port.",
      "A port acts like a communication endpoint through which clients such as browsers, frontend applications and API testing tools can communicate with the server.",
      "The first argument of app.listen() is the port number. An optional callback function can be used to confirm that the server has started successfully.",
    ],
    remember:
      "app.listen() starts the Express server and tells it which port to listen on.",
  },

  analogy: {
    heading: "Think of a Port Like a Door",
    items: [
      {
        icon: "🏢",
        title: "Server",
        text: "The Express application is the building where the backend runs.",
      },
      {
        icon: "🚪",
        title: "Port",
        text: "The port is like a numbered door through which requests enter.",
      },
      {
        icon: "👂",
        title: "Listen",
        text: "app.listen() tells the server to wait for incoming requests.",
      },
      {
        icon: "🌐",
        title: "Client",
        text: "A browser or API client connects to the server through that port.",
      },
    ],
  },

  visual: {
    heading: "How app.listen() Works",
    description:
      "The server becomes available after app.listen() starts listening on the selected port.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create App",
        text: "Create the Express application using express().",
      },
      {
        icon: "2️⃣",
        title: "Choose Port",
        text: "Select a port such as 3000.",
      },
      {
        icon: "3️⃣",
        title: "Start Listening",
        text: "app.listen() starts the server.",
      },
      {
        icon: "4️⃣",
        title: "Receive Requests",
        text: "The server can now receive HTTP requests.",
      },
    ],
    flow:
      "Express App → app.listen(3000) → Server Listening → Client Request",
  },

  code: {
    title: "Using app.listen()",
    description:
      "This example starts an Express server on port 3000.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output: `Server running on port 3000

Browser:
Welcome to Express.js`,
    explanation:
      "app.listen(3000) starts the server and tells Express to listen for incoming requests on port 3000. The callback runs after the server starts successfully.",
  },

  interview: {
    question: "What is the purpose of app.listen() in Express.js?",
    answer:
      "app.listen() starts the Express server and makes it listen for incoming HTTP requests on a specified port.",
    tip:
      "Remember that express() creates the application, while app.listen() starts the server.",
  },

  tricky: {
    question:
      "What happens if app.listen() is not called?",
    answer:
      "The Express application is created, but no server is started to listen for incoming requests.",
  },

  practice: {
    question:
      "Create an Express server that listens on port 5000.",
    hint:
      "Use app.listen(5000) and add a callback that prints a message to the terminal.",
  },

  challenge: {
    title: "Start a Custom Express Server",
    description:
      "Practice starting an Express application on a custom port.",
    task:
      "Create an Express application that listens on port 5000 and create a GET / route that returns a welcome message.",
  },
},
  "req-object": {
    concept: {
      heading: "req Object",
      paragraphs: [
        "The req object represents the HTTP request received by an Express server.",
        "It contains useful information sent by the client, including the request method, URL, headers, route parameters, query parameters and request body.",
        "Express passes the req object to every route handler so that the application can inspect and use information from the incoming request.",
      ],
      remember:
        "The req object contains information about the incoming client request.",
    },

    analogy: {
      heading: "req Object as a Request Form",
      items: [
        {
          icon: "📨",
          title: "Incoming Request",
          text: "The client sends information to the server.",
        },
        {
          icon: "📋",
          title: "Request Details",
          text: "The req object contains details about that request.",
        },
        {
          icon: "🔍",
          title: "Read Information",
          text: "The route handler can read method, URL, headers and other values.",
        },
        {
          icon: "⚙️",
          title: "Process",
          text: "The application uses the information to perform its work.",
        },
      ],
    },

    visual: {
      heading: "What Can req Provide?",
      description:
        "The req object provides access to different parts of an HTTP request.",
      steps: [
        {
          icon: "🌐",
          title: "req.url",
          text: "Provides the requested URL.",
        },
        {
          icon: "📨",
          title: "req.method",
          text: "Provides the HTTP method.",
        },
        {
          icon: "🎯",
          title: "req.params",
          text: "Provides route parameter values.",
        },
        {
          icon: "🔎",
          title: "req.query",
          text: "Provides query parameter values.",
        },
      ],
      flow:
        "Client Request → req → method + URL + params + query + body + headers",
    },

    code: {
      title: "Reading the req Object",
      description:
        "The req object can be used to inspect basic request information.",
      language: "javascript",
      code: `app.get("/products", (req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  res.send("Products");
});`,
      output: `Method: GET
URL: /products

Browser:
Products`,
      explanation:
        "req.method contains the HTTP method and req.url contains the requested URL. Express provides many other properties for accessing request information.",
    },

    interview: {
      question: "What is the req object in Express.js?",
      answer:
        "The req object represents the incoming HTTP request and provides access to information such as method, URL, parameters, query values, headers and body.",
      tip:
        "Remember that req is used to read information coming from the client.",
    },

    tricky: {
      question:
        "Is req created manually inside every route?",
      answer:
        "No. Express automatically provides the req object to the route handler.",
    },

    practice: {
      question:
        "Create a route that prints req.method and req.url in the terminal.",
      hint:
        "Use app.get() and console.log().",
    },

    challenge: {
      title: "Inspect a Request",
      description:
        "Explore the information available through the Express request object.",
      task:
        "Create a GET /info route and print the request method, URL and headers in the terminal.",
    },
  },

  "res-object": {
    concept: {
      heading: "res Object",
      paragraphs: [
        "The res object represents the HTTP response that Express sends back to the client.",
        "It provides methods for sending text, JSON data, status codes, files and other response information.",
        "Common response methods include res.send(), res.json(), res.status() and res.sendFile().",
      ],
      remember:
        "The res object is used to create and send the server response.",
    },

    analogy: {
      heading: "res Object as the Reply",
      items: [
        {
          icon: "📨",
          title: "Request",
          text: "The client sends a request to the server.",
        },
        {
          icon: "⚙️",
          title: "Processing",
          text: "The Express application processes the request.",
        },
        {
          icon: "📤",
          title: "Response",
          text: "The res object prepares the server's reply.",
        },
        {
          icon: "🖥️",
          title: "Client",
          text: "The browser or application receives the response.",
        },
      ],
    },

    visual: {
      heading: "Common res Methods",
      description:
        "Express provides several methods through the response object.",
      steps: [
        {
          icon: "📝",
          title: "res.send()",
          text: "Send text, HTML or other response data.",
        },
        {
          icon: "📦",
          title: "res.json()",
          text: "Send a JSON response.",
        },
        {
          icon: "🔢",
          title: "res.status()",
          text: "Set the HTTP status code.",
        },
        {
          icon: "📄",
          title: "res.sendFile()",
          text: "Send a file to the client.",
        },
      ],
      flow:
        "Request → Express Processing → res → HTTP Response → Client",
    },

    code: {
      title: "Using the res Object",
      description:
        "The response object can send different types of responses.",
      language: "javascript",
      code: `app.get("/message", (req, res) => {
  res.send("Hello from Express");
});`,
      output: `Hello from Express`,
      explanation:
        "res.send() sends the response to the client. Once the response has been sent, the request-response cycle is completed.",
    },

    interview: {
      question: "What is the res object in Express.js?",
      answer:
        "The res object represents the HTTP response and provides methods for sending data and controlling response information.",
      tip:
        "Mention res.send(), res.json() and res.status() as common examples.",
    },

    tricky: {
      question:
        "Can one route normally send multiple responses?",
      answer:
        "A request should normally receive one final response. Attempting to send another response after the response has already been sent can cause an error.",
    },

    practice: {
      question:
        "Create a route that sends a simple message using res.send().",
      hint:
        "Create a GET /message route.",
    },

    challenge: {
      title: "Create Different Responses",
      description:
        "Practice using the response object.",
      task:
        "Create three routes that return text, JSON and a custom status code.",
    },
  },

  "req-params": {
    concept: {
      heading: "req.params",
      paragraphs: [
        "req.params contains values captured from dynamic route parameters.",
        "A route parameter is defined using a colon, such as :id. When a client requests a URL containing that value, Express makes it available through req.params.",
        "Route parameters are commonly used to identify a specific resource such as a product, user, course or order.",
      ],
      remember:
        "Use req.params to read dynamic values defined inside the route path.",
    },

    analogy: {
      heading: "req.params as a Resource Identifier",
      items: [
        {
          icon: "🔗",
          title: "URL",
          text: "The resource ID is included in the URL.",
        },
        {
          icon: "🎯",
          title: "Parameter",
          text: "Express captures the dynamic part of the URL.",
        },
        {
          icon: "📦",
          title: "req.params",
          text: "The captured value becomes available to the route.",
        },
        {
          icon: "🔍",
          title: "Find Resource",
          text: "The application can use the value to find a record.",
        },
      ],
    },

    visual: {
      heading: "req.params Flow",
      description:
        "Route parameters allow one route to work with many resource IDs.",
      steps: [
        {
          icon: "1️⃣",
          title: "Define",
          text: "Create /products/:id.",
        },
        {
          icon: "2️⃣",
          title: "Request",
          text: "Client requests /products/101.",
        },
        {
          icon: "3️⃣",
          title: "Capture",
          text: "Express captures 101.",
        },
        {
          icon: "4️⃣",
          title: "Read",
          text: "Use req.params.id.",
        },
      ],
      flow:
        "/products/:id → /products/101 → req.params.id → 101",
    },

    code: {
      title: "Reading req.params",
      description:
        "Use req.params to access a dynamic route value.",
      language: "javascript",
      code: `app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    productId: id
  });
});`,
      output: `GET /products/101

{
  "productId": "101"
}`,
      explanation:
        "The :id part of the route is dynamic. Express stores its value in req.params.id.",
    },

    interview: {
      question: "What is req.params used for?",
      answer:
        "req.params is used to access dynamic values defined in an Express route path.",
      tip:
        "Use /users/:id as a simple interview example.",
    },

    tricky: {
      question:
        "Is req.params.id automatically a number?",
      answer:
        "No. Route parameter values are strings by default. Convert them when numeric operations are required.",
    },

    practice: {
      question:
        "Create GET /students/:id and return the student ID.",
      hint:
        "Use req.params.id.",
    },

    challenge: {
      title: "Create a Dynamic Resource Route",
      description:
        "Use route parameters to identify resources.",
      task:
        "Create GET /courses/:id and return the course ID received through req.params.",
    },
  },

  "req-query": {
    concept: {
      heading: "req.query",
      paragraphs: [
        "req.query contains query parameters sent after the question mark in a URL.",
        "Query parameters are commonly used for search, filtering, sorting and pagination.",
        "For example, /products?category=books&limit=10 contains two query parameters that can be accessed through req.query.",
      ],
      remember:
        "Use req.query to read optional key-value parameters from the URL.",
    },

    analogy: {
      heading: "req.query as Search Filters",
      items: [
        {
          icon: "🔎",
          title: "Search",
          text: "Specify what the user wants to find.",
        },
        {
          icon: "🎯",
          title: "Filter",
          text: "Limit the returned results.",
        },
        {
          icon: "📄",
          title: "Page",
          text: "Control which group of results is returned.",
        },
        {
          icon: "↕️",
          title: "Sort",
          text: "Specify how results should be ordered.",
        },
      ],
    },

    visual: {
      heading: "req.query Flow",
      description:
        "Query parameters provide optional information to an API.",
      steps: [
        {
          icon: "1️⃣",
          title: "URL",
          text: "Create the API URL.",
        },
        {
          icon: "2️⃣",
          title: "?",
          text: "Start the query string.",
        },
        {
          icon: "3️⃣",
          title: "Parameters",
          text: "Add key-value pairs.",
        },
        {
          icon: "4️⃣",
          title: "req.query",
          text: "Read the values inside the route.",
        },
      ],
      flow:
        "/products?category=books → req.query.category → books",
    },

    code: {
      title: "Reading Query Parameters",
      description:
        "Read search and category values from a URL.",
      language: "javascript",
      code: `app.get("/products", (req, res) => {
  const search = req.query.search;
  const category = req.query.category;

  res.json({
    search,
    category
  });
});`,
      output: `GET /products?search=laptop&category=electronics

{
  "search": "laptop",
  "category": "electronics"
}`,
      explanation:
        "req.query contains all query parameters. Multiple parameters are separated using &.",
    },

    interview: {
      question: "What is req.query?",
      answer:
        "req.query contains query parameters provided in the URL after the question mark.",
      tip:
        "Remember that query parameters are commonly used for filtering, searching and pagination.",
    },

    tricky: {
      question:
        "What is the difference between req.query and req.params?",
      answer:
        "req.params reads dynamic values from the route path, while req.query reads optional values from the query string.",
    },

    practice: {
      question:
        "Create GET /products and read category and search from req.query.",
      hint:
        "Test the route using /products?category=books&search=node.",
    },

    challenge: {
      title: "Build a Search Endpoint",
      description:
        "Use query parameters to control an API response.",
      task:
        "Create GET /products that accepts search, category and page query parameters and returns them as JSON.",
    },
  },

  "req-body": {
    concept: {
      heading: "req.body",
      paragraphs: [
        "req.body contains data sent by the client inside the body of an HTTP request.",
        "Request bodies are commonly used with POST, PUT and PATCH requests when the client needs to send data to the server.",
        "For JSON request bodies, Express applications commonly use express.json() middleware to parse the incoming data.",
      ],
      remember:
        "Use req.body to read data submitted inside the request body.",
    },

    analogy: {
      heading: "req.body as a Submitted Form",
      items: [
        {
          icon: "📝",
          title: "Form Data",
          text: "The client prepares information to send.",
        },
        {
          icon: "📨",
          title: "Request Body",
          text: "The information travels inside the HTTP request.",
        },
        {
          icon: "⚙️",
          title: "Express",
          text: "Middleware parses the request body.",
        },
        {
          icon: "📦",
          title: "req.body",
          text: "The route handler accesses the submitted data.",
        },
      ],
    },

    visual: {
      heading: "req.body Flow",
      description:
        "The request body carries data from the client to the server.",
      steps: [
        {
          icon: "1️⃣",
          title: "Client",
          text: "Creates JSON data.",
        },
        {
          icon: "2️⃣",
          title: "POST/PUT/PATCH",
          text: "Sends the data in the request body.",
        },
        {
          icon: "3️⃣",
          title: "express.json()",
          text: "Parses JSON request data.",
        },
        {
          icon: "4️⃣",
          title: "req.body",
          text: "The route reads the parsed data.",
        },
      ],
      flow:
        "Client → JSON Body → express.json() → req.body → Route",
    },

    code: {
      title: "Reading req.body",
      description:
        "Use express.json() to read JSON data sent by the client.",
      language: "javascript",
      code: `const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  res.json({
    name,
    email
  });
});

app.listen(3000);`,
      output: `POST /users

Request:
{
  "name": "Student",
  "email": "student@example.com"
}

Response:
{
  "name": "Student",
  "email": "student@example.com"
}`,
      explanation:
        "express.json() parses JSON request bodies and makes the parsed data available through req.body.",
    },

    interview: {
      question: "What is req.body used for?",
      answer:
        "req.body is used to access data sent inside the body of an HTTP request.",
      tip:
        "Mention express.json() when discussing JSON request bodies.",
    },

    tricky: {
      question:
        "Why might req.body be undefined for a JSON request?",
      answer:
        "If JSON body-parsing middleware has not been configured, Express may not parse the incoming JSON body.",
    },

    practice: {
      question:
        "Create POST /products and read name and price from req.body.",
      hint:
        "Add app.use(express.json()) before the route.",
    },

    challenge: {
      title: "Build a Create API",
      description:
        "Practice receiving structured data from a client.",
      task:
        "Create POST /products that accepts name, price and category through req.body and returns the received data.",
    },
  },

  "res-send": {
    concept: {
      heading: "res.send()",
      paragraphs: [
        "res.send() sends a response to the client and is commonly used for simple text, HTML and other response data.",
        "It is one of the easiest response methods for beginners because Express handles the appropriate response details automatically for common data types.",
        "After res.send() completes the response, the route should not attempt to send another response for the same request.",
      ],
      remember:
        "Use res.send() when you want to send a simple response to the client.",
    },

    analogy: {
      heading: "res.send() as Sending a Message",
      items: [
        {
          icon: "📨",
          title: "Request",
          text: "The client asks the server for something.",
        },
        {
          icon: "⚙️",
          title: "Process",
          text: "The server handles the request.",
        },
        {
          icon: "💬",
          title: "Message",
          text: "The server prepares a response message.",
        },
        {
          icon: "📤",
          title: "Send",
          text: "res.send() sends the response to the client.",
        },
      ],
    },

    visual: {
      heading: "res.send() Flow",
      description:
        "res.send() completes a simple request-response cycle.",
      steps: [
        {
          icon: "1️⃣",
          title: "Request",
          text: "Client sends a request.",
        },
        {
          icon: "2️⃣",
          title: "Route",
          text: "Express matches the route.",
        },
        {
          icon: "3️⃣",
          title: "res.send()",
          text: "The server sends response data.",
        },
        {
          icon: "4️⃣",
          title: "Client",
          text: "The client receives the response.",
        },
      ],
      flow: "Request → Route → res.send() → Client",
    },

    code: {
      title: "Using res.send()",
      description:
        "Send a simple text response from an Express route.",
      language: "javascript",
      code: `app.get("/welcome", (req, res) => {
  res.send("Welcome to the Express API");
});`,
      output: `GET /welcome

Welcome to the Express API`,
      explanation:
        "res.send() sends the specified response to the client. It is useful for simple text or HTML responses.",
    },

    interview: {
      question: "What does res.send() do?",
      answer:
        "res.send() sends a response to the client and completes the current request-response cycle.",
      tip:
        "Compare res.send() with res.json() when asked about different response formats.",
    },

    tricky: {
      question:
        "Can res.send() be called twice in the same route?",
      answer:
        "A route should normally send only one final response. Sending another response after the first can cause a headers-already-sent error.",
    },

    practice: {
      question:
        "Create GET /hello and return a simple message using res.send().",
      hint:
        "Use app.get('/hello', ...) and res.send().",
    },

    challenge: {
      title: "Create Simple Responses",
      description:
        "Practice using res.send() with multiple routes.",
      task:
        "Create /home, /about and /contact routes and return a different text response from each.",
    },
  },

  "res-json": {
    concept: {
      heading: "res.json()",
      paragraphs: [
        "res.json() sends a JSON response to the client. JSON is commonly used when Express APIs communicate with frontend applications.",
        "The method converts JavaScript objects and arrays into JSON and sends them as an HTTP response.",
        "JSON responses are especially useful for REST APIs because frontend applications can easily process structured data.",
      ],
      remember:
        "Use res.json() when an Express API needs to send structured JSON data.",
    },

    analogy: {
      heading: "JSON as Structured Data",
      items: [
        {
          icon: "📦",
          title: "Data",
          text: "The server has structured application data.",
        },
        {
          icon: "🧩",
          title: "Object",
          text: "The data can be represented as a JavaScript object or array.",
        },
        {
          icon: "🔄",
          title: "res.json()",
          text: "Express sends the data as JSON.",
        },
        {
          icon: "💻",
          title: "Frontend",
          text: "A frontend application can read the structured response.",
        },
      ],
    },

    visual: {
      heading: "res.json() Flow",
      description:
        "JSON is a common format for communication between backend and frontend applications.",
      steps: [
        {
          icon: "1️⃣",
          title: "Data",
          text: "Server prepares JavaScript data.",
        },
        {
          icon: "2️⃣",
          title: "Object",
          text: "Data is represented as an object or array.",
        },
        {
          icon: "3️⃣",
          title: "res.json()",
          text: "Express sends the data as JSON.",
        },
        {
          icon: "4️⃣",
          title: "Frontend",
          text: "The client receives structured data.",
        },
      ],
      flow: "Server Data → res.json() → JSON Response → Frontend",
    },

    code: {
      title: "Sending JSON",
      description:
        "Return a product object from an Express API.",
      language: "javascript",
      code: `app.get("/product", (req, res) => {
  res.json({
    id: 1,
    name: "Laptop",
    price: 50000
  });
});`,
      output: `{
  "id": 1,
  "name": "Laptop",
  "price": 50000
}`,
      explanation:
        "res.json() converts the JavaScript object into a JSON response that can be consumed by a frontend or API client.",
    },

    interview: {
      question: "Why is res.json() commonly used in REST APIs?",
      answer:
        "It sends structured JSON data, which is a common format for communication between backend APIs and frontend applications.",
      tip:
        "Mention objects, arrays and frontend API communication.",
    },

    tricky: {
      question:
        "Can res.json() send an array?",
      answer:
        "Yes. res.json() can send JavaScript objects as well as arrays.",
    },

    practice: {
      question:
        "Create GET /students and return an array of three student objects using res.json().",
      hint:
        "Create an array and pass it to res.json().",
    },

    challenge: {
      title: "Create a JSON API",
      description:
        "Practice returning structured API data.",
      task:
        "Create GET /courses and return an array containing course id, title and duration fields.",
    },
  },

  "res-status": {
    concept: {
      heading: "res.status()",
      paragraphs: [
        "res.status() is used to set the HTTP status code of an Express response.",
        "Status codes communicate the result of a request to the client. Common API codes include 200 for success, 201 for creation, 400 for bad input, 401 for authentication, 404 for not found and 500 for server errors.",
        "res.status() can be chained with methods such as res.json() to send both a status code and response data.",
      ],
      remember:
        "Use res.status() to communicate the result of an HTTP request through a status code.",
    },

    analogy: {
      heading: "Status Code as a Result Label",
      items: [
        {
          icon: "✅",
          title: "200",
          text: "The request was successfully processed.",
        },
        {
          icon: "🆕",
          title: "201",
          text: "A resource was successfully created.",
        },
        {
          icon: "🔎",
          title: "404",
          text: "The requested resource was not found.",
        },
        {
          icon: "⚠️",
          title: "500",
          text: "The server encountered an internal error.",
        },
      ],
    },

    visual: {
      heading: "Setting a Response Status",
      description:
        "A response can include both a status code and response data.",
      steps: [
        {
          icon: "1️⃣",
          title: "Request",
          text: "Client sends a request.",
        },
        {
          icon: "2️⃣",
          title: "Process",
          text: "Express processes the request.",
        },
        {
          icon: "3️⃣",
          title: "Status",
          text: "The server sets an appropriate status code.",
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "Status and data are returned to the client.",
        },
      ],
      flow:
        "Request → Processing → res.status(code) → Response",
    },

    code: {
      title: "Using res.status()",
      description:
        "Set a 201 status when creating a resource.",
      language: "javascript",
      code: `app.post("/products", (req, res) => {
  res.status(201).json({
    message: "Product created successfully"
  });
});`,
      output: `HTTP Status: 201

{
  "message": "Product created successfully"
}`,
      explanation:
        "res.status(201) sets the HTTP status code and res.json() sends the JSON response. Chaining these methods is common in Express APIs.",
    },

    interview: {
      question: "What does res.status() do?",
      answer:
        "res.status() sets the HTTP status code that Express sends with the response.",
      tip:
        "Know common codes such as 200, 201, 400, 401, 403, 404 and 500.",
    },

    tricky: {
      question:
        "Does res.status(404) automatically send the response?",
      answer:
        "No. It sets the status code. A response body can then be sent using methods such as res.send() or res.json().",
    },

    practice: {
      question:
        "Create a route that returns status 404 with a JSON error message.",
      hint:
        "Use res.status(404).json().",
    },

    challenge: {
      title: "Create Proper API Status Responses",
      description:
        "Practice returning meaningful HTTP status codes.",
      task:
        "Create one route returning 200, one returning 201 and one returning 404. Send a JSON message with each response.",
    },
  },
  "what-is-middleware": {
  concept: {
    heading: "What Is Middleware?",
    paragraphs: [
      "Middleware is a function that runs between the incoming request and the final response in an Express.js application.",
      "It can inspect the request, modify the request or response, perform a task, and then pass control to the next middleware or route handler.",
      "Middleware is one of the most important concepts in Express because it allows common application logic to be separated from individual routes."
    ],
    remember:
      "Middleware runs between the request and the final response and uses next() to pass control forward."
  },

  analogy: {
    heading: "Think of Middleware Like a Security Checkpoint",
    items: [
      {
        icon: "🚪",
        title: "Request Arrives",
        text: "A client sends a request to the Express server."
      },
      {
        icon: "🔍",
        title: "Middleware Checks",
        text: "Middleware can check authentication, logging, validation, or other conditions."
      },
      {
        icon: "➡️",
        title: "Pass Control",
        text: "If everything is okay, middleware calls next() and the request continues."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The route handler finally processes the request and sends a response."
      }
    ]
  },

  visual: {
    heading: "Middleware Request Flow",
    description:
      "Express can execute multiple middleware functions before reaching the final route handler.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client Request",
        text: "The browser, mobile app, or API client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Middleware 1",
        text: "The first middleware performs its task and calls next()."
      },
      {
        icon: "3️⃣",
        title: "Middleware 2",
        text: "Another middleware can perform another task."
      },
      {
        icon: "4️⃣",
        title: "Route Handler",
        text: "The route handler processes the request and creates the response."
      }
    ],
    flow:
      "Client → Middleware 1 → Middleware 2 → Route Handler → Response"
  },

  code: {
    title: "Basic Middleware Example",
    description:
      "This example creates middleware that logs every incoming request before passing control to the route.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output: `GET /
Home Page`,
    explanation:
      "The logger middleware runs before the home route. The next() function tells Express to continue to the next middleware or route handler."
  },

  interview: {
    question: "What is middleware in Express.js?",
    answer:
      "Middleware is a function that has access to the request object, response object, and the next() function. It can perform operations during the request-response cycle and pass control to the next function.",
    tip:
      "Remember the three important parts: req, res, and next."
  },

  tricky: {
    question: "What happens if middleware does not call next() and does not send a response?",
    answer:
      "The request will remain pending because Express has no instruction to continue to the next middleware or send a response."
  },

  practice: {
    question:
      "Create a middleware that prints 'Request received' in the terminal for every incoming request.",
    hint:
      "Create a function with req, res, and next parameters and call next() after console.log()."
  },

  challenge: {
    title: "Create a Request Logger",
    description:
      "Build a middleware that logs the HTTP method and URL for every incoming request.",
    task:
      "Create a logger middleware, register it using app.use(), and test it with GET and POST requests."
  }
},

"why-middleware": {
  concept: {
    heading: "Why Do We Use Middleware?",
    paragraphs: [
      "Middleware helps us organize common logic that needs to run for multiple routes.",
      "Without middleware, developers may have to repeat the same code inside many route handlers.",
      "Middleware makes Express applications easier to maintain by separating responsibilities such as logging, authentication, validation, parsing request data, and error handling."
    ],
    remember:
      "Use middleware when the same processing logic needs to run before one or more routes."
  },

  analogy: {
    heading: "Middleware as a Common Processing Layer",
    items: [
      {
        icon: "📝",
        title: "Logging",
        text: "Record information about incoming requests."
      },
      {
        icon: "🔐",
        title: "Authentication",
        text: "Check whether the user is authenticated."
      },
      {
        icon: "✅",
        title: "Validation",
        text: "Check whether incoming data is valid."
      },
      {
        icon: "🛡️",
        title: "Security",
        text: "Apply common security-related processing."
      }
    ]
  },

  visual: {
    heading: "Why Middleware Is Useful",
    description:
      "A common task can be written once as middleware and reused across multiple routes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Without Middleware",
        text: "The same logic may be repeated inside several route handlers."
      },
      {
        icon: "2️⃣",
        title: "Create Middleware",
        text: "Move the common logic into a reusable function."
      },
      {
        icon: "3️⃣",
        title: "Register Middleware",
        text: "Use app.use() or attach middleware to selected routes."
      },
      {
        icon: "4️⃣",
        title: "Reuse",
        text: "Multiple requests can use the same middleware."
      }
    ],
    flow:
      "Common Logic → Middleware → Multiple Routes"
  },

  code: {
    title: "Reusable Authentication Middleware",
    description:
      "The following example demonstrates how authentication logic can be separated from route handlers.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const checkAuth = (req, res, next) => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  next();
};

app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Dashboard");
});

app.listen(3000);`,
    output: `Dashboard`,
    explanation:
      "The checkAuth middleware runs before the dashboard route. If authentication succeeds, next() allows the route handler to execute."
  },

  interview: {
    question: "Why is middleware useful in Express.js?",
    answer:
      "Middleware allows reusable processing logic such as authentication, logging, validation, and request parsing to be separated from route handlers.",
    tip:
      "Think of middleware as reusable processing between request and response."
  },

  tricky: {
    question: "Can middleware be used for only one route?",
    answer:
      "Yes. Middleware can be applied globally, to a group of routes, or to a specific route."
  },

  practice: {
    question:
      "Create authentication middleware and use it only for a /profile route.",
    hint:
      "Pass the middleware function between the route path and route handler."
  },

  challenge: {
    title: "Build Reusable Authentication",
    description:
      "Create middleware that checks a simple authentication condition before allowing access to a protected route.",
    task:
      "Create checkAuth middleware and use it with /profile and /dashboard routes."
  }
},

"application-middleware": {
  concept: {
    heading: "Application-Level Middleware",
    paragraphs: [
      "Application-level middleware is middleware attached to the Express application using app.use() or app.METHOD().",
      "When middleware is registered with app.use(), it can run for requests that match the specified path.",
      "Application-level middleware is commonly used for logging, authentication, parsing request data, and other application-wide processing."
    ],
    remember:
      "Application-level middleware is attached directly to the Express application."
  },

  analogy: {
    heading: "Think of the Application as the Main Building",
    items: [
      {
        icon: "🏢",
        title: "Application",
        text: "The Express app represents the main application."
      },
      {
        icon: "🚪",
        title: "Entry Check",
        text: "Application middleware can process requests entering the application."
      },
      {
        icon: "🔍",
        title: "Processing",
        text: "The middleware performs a common task."
      },
      {
        icon: "➡️",
        title: "Continue",
        text: "next() passes control to the next step."
      }
    ]
  },

  visual: {
    heading: "Application Middleware Flow",
    description:
      "Application middleware can run before route handlers.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "A request reaches the Express application."
      },
      {
        icon: "2️⃣",
        title: "app.use()",
        text: "Registered middleware executes."
      },
      {
        icon: "3️⃣",
        title: "next()",
        text: "The middleware passes control forward."
      },
      {
        icon: "4️⃣",
        title: "Route",
        text: "The matching route handler executes."
      }
    ],
    flow:
      "Request → app.use() Middleware → next() → Route Handler → Response"
  },

  code: {
    title: "Application-Level Middleware Example",
    description:
      "This middleware logs every request received by the application.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000);`,
    output: `Request received: GET /
Home Page`,
    explanation:
      "Because the middleware is registered with app.use(), it runs before both the / and /about route handlers."
  },

  interview: {
    question: "What is application-level middleware?",
    answer:
      "Application-level middleware is middleware attached to an Express application using methods such as app.use().",
    tip:
      "app.use() is one of the most common ways to register application middleware."
  },

  tricky: {
    question: "Does app.use() automatically send a response?",
    answer:
      "No. Middleware normally performs a task and calls next(), unless it intentionally ends the request by sending a response."
  },

  practice: {
    question:
      "Create application middleware that prints the current date and time for every request.",
    hint:
      "Use new Date() inside the middleware and then call next()."
  },

  challenge: {
    title: "Create a Global Logger",
    description:
      "Build an application-level middleware that records every request method and URL.",
    task:
      "Register the logger with app.use() and test it with at least three different routes."
  }
},

"router-middleware": {
  concept: {
    heading: "Router-Level Middleware",
    paragraphs: [
      "Router-level middleware works in the same way as application-level middleware, but it is attached to an Express Router instance.",
      "It is useful when middleware should apply only to a particular group of routes.",
      "This approach helps organize larger applications into separate modules such as users, products, orders, or authentication."
    ],
    remember:
      "Router-level middleware is attached to an Express Router instead of the main app."
  },

  analogy: {
    heading: "Think of Different Departments",
    items: [
      {
        icon: "🏢",
        title: "Main Application",
        text: "The main Express application contains multiple route groups."
      },
      {
        icon: "👥",
        title: "User Router",
        text: "User-related routes can have their own middleware."
      },
      {
        icon: "📦",
        title: "Product Router",
        text: "Product routes can use different middleware."
      },
      {
        icon: "🔐",
        title: "Route Protection",
        text: "Middleware can protect only the routes that need it."
      }
    ]
  },

  visual: {
    heading: "Router Middleware Flow",
    description:
      "Router middleware applies to routes handled by a specific router.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "A client requests a URL."
      },
      {
        icon: "2️⃣",
        title: "Router",
        text: "Express forwards the request to the matching router."
      },
      {
        icon: "3️⃣",
        title: "Router Middleware",
        text: "Middleware attached to that router executes."
      },
      {
        icon: "4️⃣",
        title: "Route Handler",
        text: "The selected route handler processes the request."
      }
    ],
    flow:
      "Request → Router → Router Middleware → Route Handler → Response"
  },

  code: {
    title: "Router-Level Middleware Example",
    description:
      "This example creates a router for user routes and adds middleware specifically to that router.",
    language: "javascript",
    code: `const express = require("express");

const app = express();
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("User router middleware");
  next();
});

userRouter.get("/profile", (req, res) => {
  res.send("User Profile");
});

userRouter.get("/settings", (req, res) => {
  res.send("User Settings");
});

app.use("/users", userRouter);

app.listen(3000);`,
    output: `User router middleware
User Profile`,
    explanation:
      "The middleware runs for routes handled by userRouter. The router is mounted at /users, so /users/profile and /users/settings use this middleware."
  },

  interview: {
    question: "What is router-level middleware?",
    answer:
      "Router-level middleware is middleware attached to an Express Router instance using router.use() or router.METHOD().",
    tip:
      "Use router-level middleware when processing should be limited to a specific group of routes."
  },

  tricky: {
    question: "What is the main difference between app.use() and router.use()?",
    answer:
      "app.use() registers middleware at the application level, while router.use() registers middleware for a specific Express Router."
  },

  practice: {
    question:
      "Create a product router and add middleware that logs every product request.",
    hint:
      "Create express.Router(), use router.use(), and mount the router with app.use()."
  },

  challenge: {
    title: "Build a Protected Router",
    description:
      "Create a router for admin routes and protect all routes inside that router with middleware.",
    task:
      "Create adminRouter, add authentication middleware, and create /dashboard and /users routes."
  }
},

"built-in-middleware": {
  concept: {
    heading: "Built-in Middleware",
    paragraphs: [
      "Express provides several built-in middleware functions that handle common tasks.",
      "The most commonly used built-in middleware includes express.json() for parsing JSON request bodies and express.urlencoded() for parsing URL-encoded form data.",
      "Built-in middleware reduces the need to write common request-processing logic manually."
    ],
    remember:
      "Express built-in middleware provides ready-to-use functionality for common request-processing tasks."
  },

  analogy: {
    heading: "Ready-Made Tools",
    items: [
      {
        icon: "🧰",
        title: "Toolbox",
        text: "Express provides useful middleware as ready-made tools."
      },
      {
        icon: "📄",
        title: "JSON Parser",
        text: "express.json() helps read JSON request bodies."
      },
      {
        icon: "📝",
        title: "Form Parser",
        text: "express.urlencoded() helps process form-style data."
      },
      {
        icon: "📁",
        title: "Static Files",
        text: "express.static() serves static files such as images and CSS."
      }
    ]
  },

  visual: {
    heading: "Common Built-in Middleware",
    description:
      "Express provides middleware for several common application tasks.",
    steps: [
      {
        icon: "1️⃣",
        title: "express.json()",
        text: "Parses incoming JSON request bodies."
      },
      {
        icon: "2️⃣",
        title: "express.urlencoded()",
        text: "Parses URL-encoded form data."
      },
      {
        icon: "3️⃣",
        title: "express.static()",
        text: "Serves static files from a directory."
      },
      {
        icon: "4️⃣",
        title: "Use in Application",
        text: "Register the middleware before routes that need it."
      }
    ],
    flow:
      "Request → Built-in Middleware → Parsed/Processed Data → Route"
  },

  code: {
    title: "Using express.json()",
    description:
      "express.json() allows Express to read JSON data sent in the request body.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User received",
    data: req.body
  });
});

app.listen(3000);`,
    output: `{
  name: "Student",
  course: "Node.js"
}`,
    explanation:
      "express.json() parses the JSON request body and makes the parsed data available through req.body."
  },

  interview: {
    question: "Why do we use express.json()?",
    answer:
      "express.json() is used to parse incoming JSON request bodies so that the data can be accessed through req.body.",
    tip:
      "For JSON API requests, express.json() is commonly registered before the routes."
  },

  tricky: {
    question: "What happens if express.json() is not used for a JSON request body?",
    answer:
      "Express will not automatically parse the JSON body into req.body using this middleware."
  },

  practice: {
    question:
      "Create a POST route that receives JSON data and prints req.body.",
    hint:
      "Register app.use(express.json()) before creating the POST route."
  },

  challenge: {
    title: "Build a JSON API",
    description:
      "Create a POST /products endpoint that accepts product information as JSON.",
    task:
      "Use express.json(), read req.body, and return the received product as JSON."
  }
},

"custom-middleware": {
  concept: {
    heading: "Custom Middleware",
    paragraphs: [
      "Custom middleware is middleware written by the developer to perform application-specific tasks.",
      "A custom middleware function normally receives req, res, and next as parameters.",
      "Custom middleware can be used for logging, authentication, validation, request tracking, role checking, and many other tasks."
    ],
    remember:
      "Custom middleware is developer-created logic placed inside the Express request-response cycle."
  },

  analogy: {
    heading: "Create Your Own Checkpoint",
    items: [
      {
        icon: "🧑‍💻",
        title: "Developer Logic",
        text: "You decide what the middleware should check or perform."
      },
      {
        icon: "🔍",
        title: "Inspect",
        text: "The middleware can inspect request information."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "It can modify data or perform another task."
      },
      {
        icon: "➡️",
        title: "Continue",
        text: "next() passes control to the next step."
      }
    ]
  },

  visual: {
    heading: "Custom Middleware Flow",
    description:
      "A custom middleware function can perform any application-specific processing.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "A request enters the Express application."
      },
      {
        icon: "2️⃣",
        title: "Custom Logic",
        text: "Your middleware performs its required task."
      },
      {
        icon: "3️⃣",
        title: "Decision",
        text: "The middleware can continue or end the request."
      },
      {
        icon: "4️⃣",
        title: "Next Step",
        text: "next() sends control to the next middleware or route."
      }
    ],
    flow:
      "Request → Custom Middleware → next() → Route Handler → Response"
  },

  code: {
    title: "Custom Logging Middleware",
    description:
      "This middleware adds a simple request log before allowing the request to continue.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

function requestLogger(req, res, next) {
  console.log(
    "Method:",
    req.method,
    "URL:",
    req.url
  );

  next();
}

app.use(requestLogger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`,
    output: `Method: GET URL: /
Home Page`,
    explanation:
      "requestLogger is custom middleware. It reads request information, logs it, and calls next() so the route can continue."
  },

  interview: {
    question: "What is custom middleware?",
    answer:
      "Custom middleware is middleware created by the developer to perform application-specific processing during the request-response cycle.",
    tip:
      "A custom middleware function commonly receives req, res, and next."
  },

  tricky: {
    question: "Can custom middleware modify req or res?",
    answer:
      "Yes. Middleware can read and modify request and response objects before passing control to the next function."
  },

  practice: {
    question:
      "Create custom middleware that adds a property called requestTime to req.",
    hint:
      "Set req.requestTime = new Date() and then call next()."
  },

  challenge: {
    title: "Create Request Tracking Middleware",
    description:
      "Create middleware that stores the time when a request reaches the server.",
    task:
      "Add requestTime to req and display it inside a route handler."
  }
},

"error-middleware": {
  concept: {
    heading: "Error-Handling Middleware",
    paragraphs: [
      "Error-handling middleware is used to handle errors that occur during request processing.",
      "Express identifies error-handling middleware by its four parameters: err, req, res, and next.",
      "A centralized error handler can provide consistent error responses instead of repeating error-response code in every route."
    ],
    remember:
      "Express error-handling middleware has four parameters: err, req, res, next."
  },

  analogy: {
    heading: "Think of an Emergency Desk",
    items: [
      {
        icon: "⚠️",
        title: "Problem",
        text: "Something goes wrong during request processing."
      },
      {
        icon: "🚨",
        title: "Error Passed",
        text: "The error is passed to the error-handling middleware."
      },
      {
        icon: "🧑‍💻",
        title: "Error Handler",
        text: "The centralized handler decides how to respond."
      },
      {
        icon: "📤",
        title: "Error Response",
        text: "The client receives a consistent error response."
      }
    ]
  },

  visual: {
    heading: "Error Handling Flow",
    description:
      "Errors can be passed through Express middleware to a centralized error handler.",
    steps: [
      {
        icon: "1️⃣",
        title: "Route Error",
        text: "A route or middleware encounters an error."
      },
      {
        icon: "2️⃣",
        title: "next(error)",
        text: "The error is passed to Express."
      },
      {
        icon: "3️⃣",
        title: "Error Middleware",
        text: "Express sends the error to the four-parameter middleware."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The error handler sends an appropriate response."
      }
    ],
    flow:
      "Error → next(error) → Error Middleware → Error Response"
  },

  code: {
    title: "Basic Error-Handling Middleware",
    description:
      "This example demonstrates centralized error handling in Express.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: "Internal Server Error"
  });
});

app.listen(3000);`,
    output: `{
  "message": "Internal Server Error"
}`,
    explanation:
      "Calling next(error) tells Express that an error has occurred. Express then passes control to the error-handling middleware."
  },

  interview: {
    question: "How do you identify error-handling middleware in Express?",
    answer:
      "Error-handling middleware has four parameters: err, req, res, and next.",
    tip:
      "The first parameter must be the error object."
  },

  tricky: {
    question: "Why does error middleware have four parameters?",
    answer:
      "Express uses the four-parameter signature to recognize a middleware function as an error handler."
  },

  practice: {
    question:
      "Create a route that generates an error and pass it to an error-handling middleware using next(error).",
    hint:
      "Create an Error object and pass it to next()."
  },

  challenge: {
    title: "Build a Central Error Handler",
    description:
      "Create a reusable error-handling middleware for your Express application.",
    task:
      "Return a JSON response containing an error message and status code when a route fails."
  }
},

"middleware-flow": {
  concept: {
    heading: "Middleware Flow",
    paragraphs: [
      "Express processes middleware functions in the order in which they are registered.",
      "A middleware function can perform a task and call next() to continue, or it can end the request by sending a response.",
      "Understanding middleware order is important because changing the order can change application behavior."
    ],
    remember:
      "Express executes middleware in registration order."
  },

  analogy: {
    heading: "Think of an Assembly Line",
    items: [
      {
        icon: "🏭",
        title: "Stage 1",
        text: "The request enters the first processing stage."
      },
      {
        icon: "⚙️",
        title: "Stage 2",
        text: "Another middleware performs its task."
      },
      {
        icon: "🔍",
        title: "Stage 3",
        text: "Validation or authentication can happen."
      },
      {
        icon: "📦",
        title: "Final Stage",
        text: "The route handler creates the response."
      }
    ]
  },

  visual: {
    heading: "Complete Middleware Flow",
    description:
      "Multiple middleware functions can form a processing chain before the final route handler.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "The client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Logger",
        text: "The logger records request information."
      },
      {
        icon: "3️⃣",
        title: "Authentication",
        text: "Authentication middleware checks access."
      },
      {
        icon: "4️⃣",
        title: "Route",
        text: "The final route handler sends the response."
      }
    ],
    flow:
      "Client → Logger → Authentication → Validation → Route → Response"
  },

  code: {
    title: "Multiple Middleware Functions",
    description:
      "This example demonstrates how multiple middleware functions execute in sequence.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const firstMiddleware = (req, res, next) => {
  console.log("First middleware");
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Second middleware");
  next();
};

app.use(firstMiddleware);
app.use(secondMiddleware);

app.get("/", (req, res) => {
  console.log("Route handler");
  res.send("Done");
});

app.listen(3000);`,
    output: `First middleware
Second middleware
Route handler
Done`,
    explanation:
      "The middleware functions execute in the order they were registered. Each one calls next() so Express can continue to the next function."
  },

  interview: {
    question: "In what order does Express execute middleware?",
    answer:
      "Express executes middleware in the order in which the middleware functions are registered and matched to the request.",
    tip:
      "Middleware order matters."
  },

  tricky: {
    question: "What happens if an earlier middleware sends a response?",
    answer:
      "The request can end at that middleware, so later middleware and the route handler may not execute."
  },

  practice: {
    question:
      "Create three middleware functions and print their execution order in the terminal.",
    hint:
      "Register them one after another and call next() from each middleware."
  },

  challenge: {
    title: "Build a Middleware Chain",
    description:
      "Create a request pipeline containing logging, authentication, and validation middleware.",
    task:
      "Make each middleware log its name, call next(), and finally return a response from the route handler."
  }
},
"what-is-rest-api": {
  concept: {
    heading: "What Is REST API?",
    paragraphs: [
      "REST API is a way for applications to communicate with each other over HTTP using a structured set of resources and operations.",
      "REST stands for Representational State Transfer. A REST API commonly uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE to work with resources.",
      "In an Express.js application, REST APIs are commonly used to connect frontend applications, mobile applications, and other clients with backend services."
    ],
    remember:
      "REST API uses HTTP methods and resource-based URLs to communicate between clients and servers."
  },

  analogy: {
    heading: "Think of a REST API Like a Restaurant",
    items: [
      {
        icon: "🍽️",
        title: "Client",
        text: "The customer represents the frontend or application making a request."
      },
      {
        icon: "🧑‍🍳",
        title: "Server",
        text: "The kitchen represents the backend that processes the request."
      },
      {
        icon: "📋",
        title: "API",
        text: "The menu represents the API through which available operations are defined."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The completed order represents the data returned by the server."
      }
    ]
  },

  visual: {
    heading: "REST API Request Flow",
    description:
      "A REST API connects a client with backend resources through HTTP requests.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "A frontend or application sends an HTTP request."
      },
      {
        icon: "2️⃣",
        title: "API Endpoint",
        text: "The request reaches a specific REST API endpoint."
      },
      {
        icon: "3️⃣",
        title: "Server Processing",
        text: "Express processes the request and performs the required operation."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server sends data and an HTTP status code back to the client."
      }
    ],
    flow:
      "Client → HTTP Request → REST API → Server → HTTP Response → Client"
  },

  code: {
    title: "Simple REST API",
    description:
      "This example creates a simple GET endpoint that returns a list of products.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Keyboard" }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output: `[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Keyboard"
  }
]`,
    explanation:
      "The /api/products endpoint represents a product resource. A GET request retrieves the available products and returns them as JSON."
  },

  interview: {
    question: "What is a REST API?",
    answer:
      "A REST API is an HTTP-based API that uses resource-oriented URLs and HTTP methods such as GET, POST, PUT, PATCH, and DELETE to perform operations.",
    tip:
      "Remember: Resources + URLs + HTTP methods + HTTP responses."
  },

  tricky: {
    question: "Is REST itself a programming language or framework?",
    answer:
      "No. REST is an architectural style. Express.js can be used to build REST APIs."
  },

  practice: {
    question:
      "Create a GET /api/students endpoint that returns an array of student objects.",
    hint:
      "Use app.get() and res.json() to return the array."
  },

  challenge: {
    title: "Create Your First REST API",
    description:
      "Build a small REST API for managing products.",
    task:
      "Create a /api/products endpoint that returns at least three product objects as JSON."
  }
},

"rest-principles": {
  concept: {
    heading: "REST Principles",
    paragraphs: [
      "REST follows a set of architectural principles that help APIs remain simple, predictable, and scalable.",
      "Important REST concepts include client-server separation, stateless communication, a uniform interface, resource-based URLs, and proper use of HTTP methods and status codes.",
      "Understanding these principles helps developers design APIs that are easier for frontend and backend applications to consume."
    ],
    remember:
      "REST focuses on resources, stateless requests, a uniform interface, and clear HTTP operations."
  },

  analogy: {
    heading: "Think of API Rules Like Traffic Rules",
    items: [
      {
        icon: "🚦",
        title: "Clear Rules",
        text: "Every client follows predictable communication rules."
      },
      {
        icon: "🛣️",
        title: "Resources",
        text: "URLs represent resources such as users, products, or orders."
      },
      {
        icon: "📨",
        title: "Requests",
        text: "Each request contains the information needed to process it."
      },
      {
        icon: "📤",
        title: "Responses",
        text: "The server returns a predictable response."
      }
    ]
  },

  visual: {
    heading: "Core REST Principles",
    description:
      "REST APIs follow several principles that make communication predictable.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client-Server",
        text: "The client and server have separate responsibilities."
      },
      {
        icon: "2️⃣",
        title: "Stateless",
        text: "Each request contains the information needed to process it."
      },
      {
        icon: "3️⃣",
        title: "Uniform Interface",
        text: "Resources and operations follow consistent conventions."
      },
      {
        icon: "4️⃣",
        title: "Resource-Based",
        text: "URLs identify resources rather than actions."
      }
    ],
    flow:
      "Client → Resource URL → HTTP Method → Server → Response"
  },

  code: {
    title: "Resource-Based API Design",
    description:
      "A REST-style API uses resource names in URLs instead of action-based URLs.",
    language: "javascript",
    code: `// Resource-based routes

app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct);

app.post("/api/products", createProduct);

app.put("/api/products/:id", updateProduct);

app.delete("/api/products/:id", deleteProduct);`,
    output: `GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id`,
    explanation:
      "The resource in this example is products. Different HTTP methods represent different operations on the resource."
  },

  interview: {
    question: "What does stateless mean in REST?",
    answer:
      "Stateless means the server does not depend on stored client session state to understand a request. Each request should contain the information needed to process it.",
    tip:
      "Think: Every request should be understandable on its own."
  },

  tricky: {
    question: "Does stateless mean the server cannot use a database?",
    answer:
      "No. Stateless communication does not prevent the server from using a database. It means request processing should not depend on stored client session state."
  },

  practice: {
    question:
      "Design REST endpoints for a student resource using GET, POST, PUT, and DELETE.",
    hint:
      "Use /api/students as the collection resource and /api/students/:id for one student."
  },

  challenge: {
    title: "Design RESTful Routes",
    description:
      "Design a clean REST API for a student management system.",
    task:
      "Create routes for listing students, getting one student, creating, updating, and deleting a student."
  }
},

"api-endpoints": {
  concept: {
    heading: "API Endpoints",
    paragraphs: [
      "An API endpoint is a specific URL through which a client can communicate with a backend service.",
      "An endpoint is usually identified by a URL path and an HTTP method. Together they describe the operation that the client wants to perform.",
      "For example, GET /api/products can retrieve products while POST /api/products can create a new product."
    ],
    remember:
      "An endpoint is a combination of an HTTP method and a URL path used to access a backend operation."
  },

  analogy: {
    heading: "Think of Endpoints Like Different Counters",
    items: [
      {
        icon: "🏪",
        title: "API",
        text: "The application is like a large service center."
      },
      {
        icon: "🚪",
        title: "Endpoint",
        text: "Each endpoint is like a specific counter."
      },
      {
        icon: "📨",
        title: "Request",
        text: "The client approaches a counter with a request."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The counter provides the requested result."
      }
    ]
  },

  visual: {
    heading: "Anatomy of an API Endpoint",
    description:
      "An endpoint is defined using an HTTP method and a URL path.",
    steps: [
      {
        icon: "1️⃣",
        title: "HTTP Method",
        text: "Defines the operation such as GET or POST."
      },
      {
        icon: "2️⃣",
        title: "Base URL",
        text: "Identifies the server or API."
      },
      {
        icon: "3️⃣",
        title: "Resource Path",
        text: "Identifies the resource being accessed."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server returns the result."
      }
    ],
    flow:
      "HTTP Method + URL Path → Endpoint → Server Processing → Response"
  },

  code: {
    title: "Creating API Endpoints",
    description:
      "The same resource can have different endpoints depending on the HTTP method.",
    language: "javascript",
    code: `app.get("/api/products", (req, res) => {
  res.send("Get Products");
});

app.post("/api/products", (req, res) => {
  res.send("Create Product");
});

app.delete("/api/products/:id", (req, res) => {
  res.send("Delete Product");
});`,
    output: `GET    /api/products
POST   /api/products
DELETE /api/products/:id`,
    explanation:
      "Each route is an endpoint. The HTTP method and path together determine what operation Express should perform."
  },

  interview: {
    question: "What is an API endpoint?",
    answer:
      "An API endpoint is a specific HTTP-accessible location, defined by a method and path, through which a client interacts with a backend resource.",
    tip:
      "Method + Path = Endpoint."
  },

  tricky: {
    question: "Can two endpoints have the same URL path?",
    answer:
      "Yes. Different HTTP methods can use the same path for different operations, such as GET /api/products and POST /api/products."
  },

  practice: {
    question:
      "Create GET, POST, and DELETE endpoints for an /api/books resource.",
    hint:
      "Use /api/books for collection operations and /api/books/:id for deleting one book."
  },

  challenge: {
    title: "Design an API Endpoint Set",
    description:
      "Create endpoints for a simple inventory system.",
    task:
      "Design endpoints for products including listing, creating, retrieving one product, updating, and deleting."
  }
},

"crud-api": {
  concept: {
    heading: "CRUD API",
    paragraphs: [
      "CRUD stands for Create, Read, Update, and Delete.",
      "A CRUD API provides the basic operations required to manage resources in an application.",
      "In Express.js, CRUD operations are commonly mapped to POST, GET, PUT or PATCH, and DELETE HTTP methods."
    ],
    remember:
      "CRUD = Create, Read, Update, Delete."
  },

  analogy: {
    heading: "Think of Managing a Student Record",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Add a new student record."
      },
      {
        icon: "👀",
        title: "Read",
        text: "View existing student records."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Change information about a student."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a student record."
      }
    ]
  },

  visual: {
    heading: "CRUD HTTP Mapping",
    description:
      "CRUD operations are commonly mapped to HTTP methods.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create",
        text: "POST creates a new resource."
      },
      {
        icon: "2️⃣",
        title: "Read",
        text: "GET retrieves resources."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "PUT or PATCH updates a resource."
      },
      {
        icon: "4️⃣",
        title: "Delete",
        text: "DELETE removes a resource."
      }
    ],
    flow:
      "POST → Create | GET → Read | PUT/PATCH → Update | DELETE → Delete"
  },

  code: {
    title: "CRUD API Routes",
    description:
      "These routes demonstrate the basic structure of a CRUD API.",
    language: "javascript",
    code: `app.post("/api/students", createStudent);

app.get("/api/students", getStudents);

app.put("/api/students/:id", updateStudent);

app.delete("/api/students/:id", deleteStudent);`,
    output: `POST   /api/students
GET    /api/students
PUT    /api/students/:id
DELETE /api/students/:id`,
    explanation:
      "Each route represents one CRUD operation. In a real application, the route handlers would interact with a database."
  },

  interview: {
    question: "What is CRUD?",
    answer:
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations commonly performed on application resources.",
    tip:
      "Remember the HTTP mapping: POST, GET, PUT/PATCH, DELETE."
  },

  tricky: {
    question: "Can PATCH be used instead of PUT for updating data?",
    answer:
      "Yes. PATCH is commonly used for partial updates, while PUT is commonly used when replacing or updating a complete resource representation."
  },

  practice: {
    question:
      "Create CRUD routes for a /api/products resource.",
    hint:
      "Use POST, GET, PUT or PATCH, and DELETE."
  },

  challenge: {
    title: "Build a CRUD API",
    description:
      "Create a complete CRUD API for managing products.",
    task:
      "Implement endpoints for creating, reading, updating, and deleting products."
  }
},

"get-api": {
  concept: {
    heading: "GET API",
    paragraphs: [
      "The GET method is used to retrieve data from a server.",
      "A GET API should generally be used for reading resources rather than creating or modifying them.",
      "Express provides app.get() for creating GET routes."
    ],
    remember:
      "GET is primarily used to retrieve data."
  },

  analogy: {
    heading: "Think of GET Like Asking for Information",
    items: [
      {
        icon: "🔎",
        title: "Request",
        text: "The client asks the server for information."
      },
      {
        icon: "📚",
        title: "Resource",
        text: "The server locates the requested resource."
      },
      {
        icon: "⚙️",
        title: "Processing",
        text: "The backend retrieves the data."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server returns the requested data."
      }
    ]
  },

  visual: {
    heading: "GET API Flow",
    description:
      "A GET request retrieves data from the backend.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "The client sends a GET request."
      },
      {
        icon: "2️⃣",
        title: "Route",
        text: "Express matches the GET endpoint."
      },
      {
        icon: "3️⃣",
        title: "Data",
        text: "The server retrieves the requested information."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server returns the data."
      }
    ],
    flow:
      "Client → GET /api/products → Express → Data → JSON Response"
  },

  code: {
    title: "GET API Example",
    description:
      "This endpoint returns a list of products.",
    language: "javascript",
    code: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});`,
    output: `[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Mouse"
  }
]`,
    explanation:
      "When the client sends GET /api/products, Express executes the route handler and returns the products as JSON."
  },

  interview: {
    question: "What is the purpose of the GET method?",
    answer:
      "GET is used to retrieve data or resources from a server.",
    tip:
      "GET = Read."
  },

  tricky: {
    question: "Should GET normally be used to create database records?",
    answer:
      "No. GET is intended for retrieving resources. POST is commonly used for creating resources."
  },

  practice: {
    question:
      "Create a GET /api/courses endpoint that returns three courses.",
    hint:
      "Create an array and return it using res.json()."
  },

  challenge: {
    title: "Build a GET API",
    description:
      "Create a GET API for a course listing.",
    task:
      "Return course id, title, duration, and fee for at least three courses."
  }
},

"post-api": {
  concept: {
    heading: "POST API",
    paragraphs: [
      "The POST method is commonly used to create a new resource on the server.",
      "Data for a POST request is usually sent in the request body.",
      "In Express, express.json() is commonly used to parse JSON request bodies before the POST route accesses req.body."
    ],
    remember:
      "POST is commonly used to create a new resource."
  },

  analogy: {
    heading: "Think of POST Like Submitting a New Form",
    items: [
      {
        icon: "📝",
        title: "Enter Data",
        text: "The client prepares information for a new resource."
      },
      {
        icon: "📨",
        title: "Submit",
        text: "The client sends the data using POST."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The server validates and processes the data."
      },
      {
        icon: "✅",
        title: "Create",
        text: "The server creates the new resource."
      }
    ]
  },

  visual: {
    heading: "POST API Flow",
    description:
      "POST sends data to the server to create a new resource.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "The client prepares JSON data."
      },
      {
        icon: "2️⃣",
        title: "POST Request",
        text: "The client sends the data in the request body."
      },
      {
        icon: "3️⃣",
        title: "Server",
        text: "Express reads req.body and processes the data."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server returns the created resource or result."
      }
    ],
    flow:
      "Client → POST + JSON Body → Express → Create Resource → Response"
  },

  code: {
    title: "POST API Example",
    description:
      "This endpoint receives product data through req.body.",
    language: "javascript",
    code: `app.use(express.json());

app.post("/api/products", (req, res) => {
  const product = req.body;

  res.status(201).json({
    message: "Product created",
    data: product
  });
});`,
    output: `{
  "message": "Product created",
  "data": {
    "name": "Keyboard",
    "price": 1200
  }
}`,
    explanation:
      "express.json() parses the incoming JSON. The route accesses that data through req.body and returns a 201 Created response."
  },

  interview: {
    question: "What is POST used for in a REST API?",
    answer:
      "POST is commonly used to create a new resource or submit data for server-side processing.",
    tip:
      "POST commonly works with request body data."
  },

  tricky: {
    question: "Where is POST data commonly stored in Express?",
    answer:
      "For JSON requests, parsed request data is commonly available through req.body after express.json() has been registered."
  },

  practice: {
    question:
      "Create a POST /api/students endpoint that accepts name and course.",
    hint:
      "Use express.json() and read the values from req.body."
  },

  challenge: {
    title: "Create a Product API",
    description:
      "Build a POST endpoint that accepts product information.",
    task:
      "Accept name, price, and category through req.body and return the created product with a 201 status."
  }
},

"put-patch-api": {
  concept: {
    heading: "PUT & PATCH API",
    paragraphs: [
      "PUT and PATCH are HTTP methods commonly used to update resources.",
      "PUT is generally associated with replacing or updating the complete representation of a resource, while PATCH is intended for partial updates.",
      "The exact behavior depends on the API design, but understanding the distinction helps create predictable REST APIs."
    ],
    remember:
      "PUT is commonly used for full replacement or update; PATCH is commonly used for partial updates."
  },

  analogy: {
    heading: "Think of Updating a Student Record",
    items: [
      {
        icon: "📄",
        title: "PUT",
        text: "Send the complete updated representation of the record."
      },
      {
        icon: "✏️",
        title: "PATCH",
        text: "Send only the fields that need to change."
      },
      {
        icon: "🔎",
        title: "Resource",
        text: "The URL identifies the resource being updated."
      },
      {
        icon: "✅",
        title: "Response",
        text: "The server returns the update result."
      }
    ]
  },

  visual: {
    heading: "PUT vs PATCH",
    description:
      "Both methods can update resources, but they are commonly used differently.",
    steps: [
      {
        icon: "1️⃣",
        title: "PUT",
        text: "Commonly sends the complete resource representation."
      },
      {
        icon: "2️⃣",
        title: "PATCH",
        text: "Commonly sends only fields that need modification."
      },
      {
        icon: "3️⃣",
        title: "Server",
        text: "Express processes the request and updates the resource."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The API returns the updated result."
      }
    ],
    flow:
      "Client → PUT/PATCH → Resource → Update → Response"
  },

  code: {
    title: "PUT and PATCH Example",
    description:
      "These routes demonstrate the common Express syntax for PUT and PATCH.",
    language: "javascript",
    code: `app.put("/api/products/:id", (req, res) => {
  res.json({
    message: "Product completely updated",
    id: req.params.id,
    data: req.body
  });
});

app.patch("/api/products/:id", (req, res) => {
  res.json({
    message: "Product partially updated",
    id: req.params.id,
    changes: req.body
  });
});`,
    output: `PUT   /api/products/10
PATCH /api/products/10`,
    explanation:
      "Both routes use the product ID from req.params. PUT can represent a complete update, while PATCH can represent a partial update."
  },

  interview: {
    question: "What is the difference between PUT and PATCH?",
    answer:
      "PUT is commonly used to replace or fully update a resource, while PATCH is commonly used to partially update a resource.",
    tip:
      "PUT = complete representation; PATCH = partial changes."
  },

  tricky: {
    question: "Can both PUT and PATCH update the same resource?",
    answer:
      "Yes. An API can provide both methods if it defines different update semantics for them."
  },

  practice: {
    question:
      "Create PUT and PATCH endpoints for /api/students/:id.",
    hint:
      "Use req.params.id to identify the student and req.body for update data."
  },

  challenge: {
    title: "Build Update APIs",
    description:
      "Create separate PUT and PATCH endpoints for a product resource.",
    task:
      "Make PUT accept a complete product object and PATCH accept only selected fields."
  }
},

"delete-api": {
  concept: {
    heading: "DELETE API",
    paragraphs: [
      "The DELETE method is used to request removal of a resource.",
      "In Express, the app.delete() method is used to create a DELETE route.",
      "A resource is commonly identified through a route parameter such as /api/products/:id."
    ],
    remember:
      "DELETE is used to remove a resource."
  },

  analogy: {
    heading: "Think of DELETE Like Removing a Record",
    items: [
      {
        icon: "🔎",
        title: "Identify",
        text: "The client identifies the resource to remove."
      },
      {
        icon: "🗑️",
        title: "Delete Request",
        text: "The client sends a DELETE request."
      },
      {
        icon: "⚙️",
        title: "Server",
        text: "The backend removes the resource."
      },
      {
        icon: "✅",
        title: "Confirmation",
        text: "The server returns the result."
      }
    ]
  },

  visual: {
    heading: "DELETE API Flow",
    description:
      "A DELETE request identifies and removes a resource.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "The client sends a DELETE request."
      },
      {
        icon: "2️⃣",
        title: "Resource ID",
        text: "The route identifies the resource using an ID."
      },
      {
        icon: "3️⃣",
        title: "Delete",
        text: "The backend removes the resource."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server confirms the operation."
      }
    ],
    flow:
      "Client → DELETE /api/products/:id → Server → Delete → Response"
  },

  code: {
    title: "DELETE API Example",
    description:
      "This endpoint receives a product ID and returns a deletion confirmation.",
    language: "javascript",
    code: `app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    message: "Product deleted",
    id: productId
  });
});`,
    output: `{
  "message": "Product deleted",
  "id": "10"
}`,
    explanation:
      "The product ID is received from req.params.id. In a real application, the server would use that ID to delete the record from a database."
  },

  interview: {
    question: "What is DELETE used for in REST APIs?",
    answer:
      "DELETE is used to request removal of a resource identified by the API endpoint.",
    tip:
      "DELETE = Remove."
  },

  tricky: {
    question: "Where does the resource ID usually come from in a DELETE endpoint?",
    answer:
      "It commonly comes from a route parameter such as /api/products/:id."
  },

  practice: {
    question:
      "Create DELETE /api/students/:id and return the ID of the deleted student.",
    hint:
      "Use req.params.id."
  },

  challenge: {
    title: "Build a Delete Endpoint",
    description:
      "Create a DELETE API for removing products.",
    task:
      "Create /api/products/:id and return an appropriate success response after identifying the product."
  }
},

"postman-api-testing": {
  concept: {
    heading: "Testing APIs with Postman",
    paragraphs: [
      "Postman is a tool used to send HTTP requests and inspect API responses.",
      "It is useful for testing Express APIs before connecting them to a frontend application.",
      "You can select an HTTP method, enter a URL, add headers or request body data, send the request, and inspect the response."
    ],
    remember:
      "Postman allows you to test backend API endpoints independently from the frontend."
  },

  analogy: {
    heading: "Think of Postman Like an API Testing Console",
    items: [
      {
        icon: "🧪",
        title: "Prepare",
        text: "Choose the HTTP method and enter the endpoint."
      },
      {
        icon: "📨",
        title: "Send",
        text: "Send the request directly to the Express server."
      },
      {
        icon: "📥",
        title: "Inspect",
        text: "View the response body and status code."
      },
      {
        icon: "🔧",
        title: "Debug",
        text: "Use the result to identify API problems."
      }
    ]
  },

  visual: {
    heading: "Postman Testing Flow",
    description:
      "Postman allows backend endpoints to be tested without building a frontend.",
    steps: [
      {
        icon: "1️⃣",
        title: "Select Method",
        text: "Choose GET, POST, PUT, PATCH, or DELETE."
      },
      {
        icon: "2️⃣",
        title: "Enter URL",
        text: "Enter the Express API endpoint."
      },
      {
        icon: "3️⃣",
        title: "Add Data",
        text: "For applicable requests, add headers and request body."
      },
      {
        icon: "4️⃣",
        title: "Send & Inspect",
        text: "Send the request and check the response."
      }
    ],
    flow:
      "Postman → HTTP Request → Express API → HTTP Response → Postman"
  },

  code: {
    title: "API Endpoint for Postman Testing",
    description:
      "Use this endpoint to test a simple GET request in Postman.",
    language: "javascript",
    code: `app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    products: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mouse" }
    ]
  });
});`,
    output: `Status: 200 OK

{
  "success": true,
  "products": [
    {
      "id": 1,
      "name": "Laptop"
    },
    {
      "id": 2,
      "name": "Mouse"
    }
  ]
}`,
    explanation:
      "Start the Express server, open Postman, select GET, enter the endpoint URL, and send the request. Postman displays the status code and response body."
  },

  interview: {
    question: "Why is Postman used during API development?",
    answer:
      "Postman allows developers to test API endpoints independently by sending HTTP requests and inspecting responses.",
    tip:
      "Postman is especially useful before connecting the API to a frontend."
  },

  tricky: {
    question: "Can Postman test POST requests?",
    answer:
      "Yes. Postman can send POST requests with request bodies, headers, query parameters, and other HTTP request data."
  },

  practice: {
    question:
      "Use Postman to test GET and POST endpoints of an Express application.",
    hint:
      "Start your Express server first, then use localhost with the correct port."
  },

  challenge: {
    title: "Test a Complete CRUD API",
    description:
      "Use Postman to test all major operations of a product API.",
    task:
      "Test GET, POST, PUT or PATCH, and DELETE endpoints and record the response status and body for each request."
  }
},
"mongodb-connection": {
  concept: {
    heading: "Connecting MongoDB",
    paragraphs: [
      "MongoDB is a NoSQL database that stores data in flexible document structures. An Express application can connect to MongoDB to store and retrieve application data.",
      "In a Node.js application, the MongoDB connection is commonly handled using the MongoDB driver or Mongoose.",
      "A database connection should normally be established before application routes start performing database operations."
    ],
    remember:
      "Express handles HTTP requests, while MongoDB stores application data."
  },

  analogy: {
    heading: "Think of MongoDB Like a Storage Room",
    items: [
      {
        icon: "🏢",
        title: "Express App",
        text: "The application receives requests from clients."
      },
      {
        icon: "🔌",
        title: "Connection",
        text: "The Node.js application connects to MongoDB."
      },
      {
        icon: "🗄️",
        title: "Database",
        text: "MongoDB stores application data."
      },
      {
        icon: "📤",
        title: "Result",
        text: "The database returns data to the application."
      }
    ]
  },

  visual: {
    heading: "Express + MongoDB Flow",
    description:
      "The Express application communicates with MongoDB when a route needs database data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client Request",
        text: "A frontend or API client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Express Route",
        text: "Express receives and processes the request."
      },
      {
        icon: "3️⃣",
        title: "MongoDB",
        text: "The application reads or writes data in MongoDB."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "Express sends the database result back to the client."
      }
    ],
    flow:
      "Client → Express → MongoDB → Express → JSON Response"
  },

  code: {
    title: "Connecting Node.js to MongoDB",
    description:
      "This example uses Mongoose to create a MongoDB connection.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Connection error:", error.message);
  });`,
    output: `MongoDB connected`,
    explanation:
      "mongoose.connect() starts the connection to MongoDB. The then() block runs when the connection succeeds, while catch() handles connection errors."
  },

  interview: {
    question: "How can an Express application connect to MongoDB?",
    answer:
      "An Express application can connect to MongoDB using the MongoDB Node.js driver or an ODM such as Mongoose.",
    tip:
      "Mongoose is commonly used in Express applications for schema and model management."
  },

  tricky: {
    question: "Is MongoDB part of Express.js?",
    answer:
      "No. Express.js is a Node.js web framework, while MongoDB is a separate database system."
  },

  practice: {
    question:
      "Create a Node.js file that connects to a local MongoDB database.",
    hint:
      "Install mongoose and use mongoose.connect() with your MongoDB connection string."
  },

  challenge: {
    title: "Connect Express to MongoDB",
    description:
      "Create a basic Express application and connect it to a MongoDB database.",
    task:
      "Display a success message when the MongoDB connection is established and handle connection errors."
  }
},

"mongoose-setup": {
  concept: {
    heading: "Mongoose Setup",
    paragraphs: [
      "Mongoose is an Object Data Modeling library for MongoDB and Node.js.",
      "It provides a structured way to define schemas, create models, validate data, and interact with MongoDB collections.",
      "Mongoose is commonly used with Express because it makes database operations easier to organize."
    ],
    remember:
      "Mongoose provides schemas and models that make MongoDB operations easier to manage in Node.js."
  },

  analogy: {
    heading: "Think of Mongoose as a Database Assistant",
    items: [
      {
        icon: "📋",
        title: "Schema",
        text: "Defines the expected structure of documents."
      },
      {
        icon: "🏷️",
        title: "Model",
        text: "Provides an interface for working with a collection."
      },
      {
        icon: "✅",
        title: "Validation",
        text: "Helps check whether data follows defined rules."
      },
      {
        icon: "🗄️",
        title: "MongoDB",
        text: "Stores the actual documents."
      }
    ]
  },

  visual: {
    heading: "Mongoose Architecture",
    description:
      "Mongoose sits between the Node.js application and MongoDB.",
    steps: [
      {
        icon: "1️⃣",
        title: "Express",
        text: "A route receives an API request."
      },
      {
        icon: "2️⃣",
        title: "Mongoose",
        text: "The application uses a model to work with data."
      },
      {
        icon: "3️⃣",
        title: "MongoDB",
        text: "MongoDB stores or retrieves the document."
      },
      {
        icon: "4️⃣",
        title: "Result",
        text: "Mongoose returns the result to the application."
      }
    ],
    flow:
      "Express → Mongoose Model → MongoDB → Mongoose → Express"
  },

  code: {
    title: "Installing and Connecting Mongoose",
    description:
      "Install Mongoose and create a basic database connection.",
    language: "javascript",
    code: `npm install mongoose

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error.message));`,
    output: `MongoDB connected`,
    explanation:
      "After installing Mongoose, require it in the application and use mongoose.connect() to connect to MongoDB."
  },

  interview: {
    question: "What is Mongoose?",
    answer:
      "Mongoose is an ODM library for MongoDB and Node.js that provides schemas, models, validation, and database operation helpers.",
    tip:
      "ODM stands for Object Data Modeling."
  },

  tricky: {
    question: "Is Mongoose required to use MongoDB with Node.js?",
    answer:
      "No. Node.js can use the official MongoDB driver directly. Mongoose is an optional ODM."
  },

  practice: {
    question:
      "Install Mongoose and create a connection to a database named schooldb.",
    hint:
      "Use npm install mongoose and mongoose.connect()."
  },

  challenge: {
    title: "Set Up Mongoose",
    description:
      "Prepare an Express project for MongoDB development using Mongoose.",
    task:
      "Install Mongoose, create a database connection file, and handle both successful and failed connections."
  }
},

"mongoose-schema": {
  concept: {
    heading: "Mongoose Schema",
    paragraphs: [
      "A Mongoose schema defines the structure and rules for documents that a model will manage.",
      "A schema can define fields, data types, default values, required fields, validation rules, and other options.",
      "Schemas help applications maintain a consistent structure even though MongoDB itself is a flexible document database."
    ],
    remember:
      "A schema defines the structure and rules of documents."
  },

  analogy: {
    heading: "Think of a Schema Like a Form Template",
    items: [
      {
        icon: "📄",
        title: "Template",
        text: "The schema describes what information a document should contain."
      },
      {
        icon: "🏷️",
        title: "Fields",
        text: "Each field has a name and usually a data type."
      },
      {
        icon: "🔢",
        title: "Data Types",
        text: "Fields can use types such as String, Number, Boolean, and Date."
      },
      {
        icon: "✅",
        title: "Rules",
        text: "Fields can have validation and required rules."
      }
    ]
  },

  visual: {
    heading: "Schema Creation Flow",
    description:
      "A schema defines how application documents should be structured.",
    steps: [
      {
        icon: "1️⃣",
        title: "Define Fields",
        text: "Decide which fields a document should contain."
      },
      {
        icon: "2️⃣",
        title: "Define Types",
        text: "Assign appropriate Mongoose data types."
      },
      {
        icon: "3️⃣",
        title: "Add Rules",
        text: "Use options such as required or default."
      },
      {
        icon: "4️⃣",
        title: "Create Model",
        text: "Use the schema to create a Mongoose model."
      }
    ],
    flow:
      "Fields → Data Types → Validation Rules → Schema → Model"
  },

  code: {
    title: "Creating a Mongoose Schema",
    description:
      "This schema defines the structure of a student document.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    default: "Node.js"
  }
});`,
    output: `Student schema created`,
    explanation:
      "The schema defines name, age, and course fields. name and age are required, while course has a default value."
  },

  interview: {
    question: "What is a Mongoose schema?",
    answer:
      "A Mongoose schema defines the structure, data types, and validation rules for documents managed by a Mongoose model.",
    tip:
      "Schema = Structure and rules."
  },

  tricky: {
    question: "Does a Mongoose schema directly create a MongoDB collection?",
    answer:
      "The schema itself does not represent the collection interface. A Mongoose model is created from the schema and is used to interact with a MongoDB collection."
  },

  practice: {
    question:
      "Create a product schema with name, price, category, and stock fields.",
    hint:
      "Use String for name and category, Number for price and stock."
  },

  challenge: {
    title: "Design a Student Schema",
    description:
      "Create a complete schema for a student management application.",
    task:
      "Include name, email, course, age, and enrollmentDate with appropriate types and validation rules."
  }
},

"mongoose-model": {
  concept: {
    heading: "Mongoose Model",
    paragraphs: [
      "A Mongoose model is created from a schema and provides an interface for interacting with MongoDB documents.",
      "Models are commonly used to create, read, update, and delete documents.",
      "For example, a Student model can be used to work with student documents in a MongoDB collection."
    ],
    remember:
      "Schema defines the structure; Model provides the interface for database operations."
  },

  analogy: {
    heading: "Schema vs Model",
    items: [
      {
        icon: "📋",
        title: "Schema",
        text: "Defines how the document should look."
      },
      {
        icon: "🏷️",
        title: "Model",
        text: "Represents the database collection through Mongoose."
      },
      {
        icon: "⚙️",
        title: "Operations",
        text: "The model provides methods for database operations."
      },
      {
        icon: "🗄️",
        title: "MongoDB",
        text: "The actual documents are stored in MongoDB."
      }
    ]
  },

  visual: {
    heading: "Schema to Model",
    description:
      "A Mongoose model is created from a schema.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Schema",
        text: "Define the document structure."
      },
      {
        icon: "2️⃣",
        title: "Create Model",
        text: "Pass the schema to mongoose.model()."
      },
      {
        icon: "3️⃣",
        title: "Use Model",
        text: "Use model methods to work with documents."
      },
      {
        icon: "4️⃣",
        title: "MongoDB",
        text: "The model communicates with the database."
      }
    ],
    flow:
      "Schema → Mongoose Model → Database Operations → MongoDB"
  },

  code: {
    title: "Creating a Mongoose Model",
    description:
      "This example creates a Student model from a schema.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  age: Number
});

const Student = mongoose.model(
  "Student",
  studentSchema
);

module.exports = Student;`,
    output: `Student model created`,
    explanation:
      "mongoose.model() creates the Student model from studentSchema. The model can then be used for database operations."
  },

  interview: {
    question: "What is a Mongoose model?",
    answer:
      "A Mongoose model is a compiled version of a schema that provides methods for interacting with MongoDB documents.",
    tip:
      "Schema defines; Model operates."
  },

  tricky: {
    question: "Can one schema be used to create a model?",
    answer:
      "Yes. A schema can be compiled into a Mongoose model using mongoose.model()."
  },

  practice: {
    question:
      "Create a Product model using a product schema.",
    hint:
      "Use mongoose.model('Product', productSchema)."
  },

  challenge: {
    title: "Create a Course Model",
    description:
      "Create a Mongoose model for storing course information.",
    task:
      "Define a course schema and compile it into a Course model."
  }
},

"create-data": {
  concept: {
    heading: "Create Data",
    paragraphs: [
      "Creating data means adding a new document to a MongoDB collection.",
      "With Mongoose, a model can be used to create and save a new document.",
      "In an Express REST API, POST requests are commonly used to receive new data from the client."
    ],
    remember:
      "POST + req.body + Mongoose Model = common pattern for creating data."
  },

  analogy: {
    heading: "Think of Creating Data Like Adding a New Record",
    items: [
      {
        icon: "📝",
        title: "Receive Data",
        text: "The Express API receives data from the client."
      },
      {
        icon: "✅",
        title: "Validate",
        text: "The data is checked against the schema."
      },
      {
        icon: "💾",
        title: "Save",
        text: "The document is saved to MongoDB."
      },
      {
        icon: "📤",
        title: "Respond",
        text: "The API returns the created document."
      }
    ]
  },

  visual: {
    heading: "Create Data Flow",
    description:
      "A POST request can create a new MongoDB document.",
    steps: [
      {
        icon: "1️⃣",
        title: "POST Request",
        text: "Client sends JSON data."
      },
      {
        icon: "2️⃣",
        title: "req.body",
        text: "Express reads the submitted data."
      },
      {
        icon: "3️⃣",
        title: "Model.create()",
        text: "Mongoose creates and saves the document."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The created document is returned."
      }
    ],
    flow:
      "POST → req.body → Model.create() → MongoDB → Response"
  },

  code: {
    title: "Creating a Student",
    description:
      "This route creates a new student document.",
    language: "javascript",
    code: `app.post("/api/students", async (req, res) => {
  const student = await Student.create(req.body);

  res.status(201).json(student);
});`,
    output: `{
  "_id": "generated-id",
  "name": "Student",
  "course": "Node.js"
}`,
    explanation:
      "Student.create() creates a new document using the request body and saves it to MongoDB."
  },

  interview: {
    question: "How can you create a document using Mongoose?",
    answer:
      "A document can be created using methods such as Model.create() or by creating a model instance and calling save().",
    tip:
      "Model.create() is a convenient option for creating documents."
  },

  tricky: {
    question: "Should raw client data always be trusted?",
    answer:
      "No. Production applications should validate and sanitize incoming data before storing it."
  },

  practice: {
    question:
      "Create a POST API that stores a product in MongoDB.",
    hint:
      "Use express.json(), req.body, and Product.create()."
  },

  challenge: {
    title: "Create a Student API",
    description:
      "Build an endpoint that creates student records in MongoDB.",
    task:
      "Accept student data through POST /api/students, save it with Mongoose, and return the created document."
  }
},

"read-data": {
  concept: {
    heading: "Read Data",
    paragraphs: [
      "Reading data means retrieving documents from MongoDB.",
      "Mongoose provides methods such as find(), findOne(), and findById() for retrieving documents.",
      "Express GET routes are commonly used to expose database data through REST APIs."
    ],
    remember:
      "GET routes commonly use Mongoose query methods to retrieve MongoDB documents."
  },

  analogy: {
    heading: "Think of Reading Data Like Searching Records",
    items: [
      {
        icon: "🔎",
        title: "Request",
        text: "The client asks for data."
      },
      {
        icon: "🗄️",
        title: "Database",
        text: "MongoDB contains the stored documents."
      },
      {
        icon: "🔍",
        title: "Query",
        text: "Mongoose searches for matching documents."
      },
      {
        icon: "📤",
        title: "Result",
        text: "The API returns the matching data."
      }
    ]
  },

  visual: {
    heading: "Read Data Flow",
    description:
      "A GET request can retrieve documents from MongoDB.",
    steps: [
      {
        icon: "1️⃣",
        title: "GET Request",
        text: "The client requests data."
      },
      {
        icon: "2️⃣",
        title: "Mongoose Query",
        text: "The model queries MongoDB."
      },
      {
        icon: "3️⃣",
        title: "MongoDB",
        text: "Matching documents are returned."
      },
      {
        icon: "4️⃣",
        title: "JSON Response",
        text: "Express sends the result to the client."
      }
    ],
    flow:
      "GET → Mongoose Query → MongoDB → Documents → JSON Response"
  },

  code: {
    title: "Reading All Students",
    description:
      "find() retrieves multiple documents from a collection.",
    language: "javascript",
    code: `app.get("/api/students", async (req, res) => {
  const students = await Student.find();

  res.json(students);
});`,
    output: `[
  {
    "_id": "1",
    "name": "Student",
    "course": "Node.js"
  }
]`,
    explanation:
      "Student.find() retrieves matching documents. Without a filter, it returns all documents from the model's collection."
  },

  interview: {
    question: "What is the difference between find() and findById()?",
    answer:
      "find() is commonly used to retrieve multiple matching documents, while findById() retrieves a document using its MongoDB identifier.",
    tip:
      "find() → collection search; findById() → one document by ID."
  },

  tricky: {
    question: "What does find() return if no documents match?",
    answer:
      "find() returns an empty array when no documents match the query."
  },

  practice: {
    question:
      "Create GET /api/products to return all products.",
    hint:
      "Use Product.find() inside an async route."
  },

  challenge: {
    title: "Build a Read API",
    description:
      "Create APIs for reading all students and one student by ID.",
    task:
      "Use find() for all students and findById() for a single student."
  }
},

"update-data": {
  concept: {
    heading: "Update Data",
    paragraphs: [
      "Updating data means modifying an existing MongoDB document.",
      "Mongoose provides methods such as findByIdAndUpdate() and findOneAndUpdate() for updating documents.",
      "Express PUT and PATCH routes are commonly used to expose update operations through a REST API."
    ],
    remember:
      "PUT or PATCH + Mongoose update method = common pattern for updating data."
  },

  analogy: {
    heading: "Think of Updating Like Editing a Record",
    items: [
      {
        icon: "🔎",
        title: "Find",
        text: "Identify the document that needs to change."
      },
      {
        icon: "✏️",
        title: "Modify",
        text: "Provide the new or changed values."
      },
      {
        icon: "💾",
        title: "Save",
        text: "MongoDB stores the updated document."
      },
      {
        icon: "📤",
        title: "Return",
        text: "The API returns the updated result."
      }
    ]
  },

  visual: {
    heading: "Update Data Flow",
    description:
      "An API can identify a document by ID and update selected fields.",
    steps: [
      {
        icon: "1️⃣",
        title: "PUT/PATCH",
        text: "The client sends an update request."
      },
      {
        icon: "2️⃣",
        title: "Document ID",
        text: "The route identifies the document."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "Mongoose updates the matching document."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The updated document can be returned."
      }
    ],
    flow:
      "PUT/PATCH → ID + Data → Mongoose Update → MongoDB → Response"
  },

  code: {
    title: "Updating a Student",
    description:
      "findByIdAndUpdate() can update a document using its ID.",
    language: "javascript",
    code: `app.patch("/api/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(student);
});`,
    output: `{
  "_id": "1",
  "name": "Updated Student",
  "course": "Express.js"
}`,
    explanation:
      "findByIdAndUpdate() finds the document using the ID and applies the values from req.body. The new: true option returns the updated document."
  },

  interview: {
    question: "How can Mongoose update a document by ID?",
    answer:
      "Methods such as findByIdAndUpdate() can be used to find a document by its ID and update it.",
    tip:
      "Use { new: true } when you want the updated document returned."
  },

  tricky: {
    question: "What is the purpose of new: true?",
    answer:
      "It tells Mongoose to return the updated document rather than the document as it existed before the update."
  },

  practice: {
    question:
      "Create PATCH /api/products/:id to update a product name and price.",
    hint:
      "Use Product.findByIdAndUpdate() with req.params.id and req.body."
  },

  challenge: {
    title: "Build an Update API",
    description:
      "Create a PATCH endpoint for updating student information.",
    task:
      "Find a student by ID, update the supplied fields, return the updated document, and handle a missing ID."
  }
},

"delete-data": {
  concept: {
    heading: "Delete Data",
    paragraphs: [
      "Deleting data means removing an existing document from MongoDB.",
      "Mongoose provides methods such as findByIdAndDelete() and findOneAndDelete() for removing documents.",
      "Express DELETE routes are commonly used to expose delete operations through a REST API."
    ],
    remember:
      "DELETE route + Mongoose delete method = common pattern for removing data."
  },

  analogy: {
    heading: "Think of Delete Like Removing a Record",
    items: [
      {
        icon: "🔎",
        title: "Find",
        text: "Identify the document that should be removed."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Mongoose removes the matching document."
      },
      {
        icon: "✅",
        title: "Confirm",
        text: "The server checks whether the operation succeeded."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The API sends a suitable response to the client."
      }
    ]
  },

  visual: {
    heading: "Delete Data Flow",
    description:
      "A DELETE request can remove a MongoDB document by its ID.",
    steps: [
      {
        icon: "1️⃣",
        title: "DELETE Request",
        text: "The client sends a DELETE request."
      },
      {
        icon: "2️⃣",
        title: "Document ID",
        text: "The route identifies the document."
      },
      {
        icon: "3️⃣",
        title: "Delete",
        text: "Mongoose removes the matching document."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "Express returns the result to the client."
      }
    ],
    flow:
      "DELETE → ID → Mongoose Delete → MongoDB → Response"
  },

  code: {
    title: "Deleting a Student",
    description:
      "findByIdAndDelete() removes a document using its ID.",
    language: "javascript",
    code: `app.delete("/api/students/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(
    req.params.id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.json({
    message: "Student deleted",
    data: student
  });
});`,
    output: `{
  "message": "Student deleted",
  "data": {
    "_id": "1",
    "name": "Student"
  }
}`,
    explanation:
      "findByIdAndDelete() finds and removes the document. If no document is found, the API returns a 404 response."
  },

  interview: {
    question: "How can you delete a MongoDB document using Mongoose?",
    answer:
      "Methods such as findByIdAndDelete() can be used to find and remove a document by its ID.",
    tip:
      "Always consider what response should be returned when the document does not exist."
  },

  tricky: {
    question: "What happens if findByIdAndDelete() cannot find the document?",
    answer:
      "It returns null, so the API should handle that case appropriately."
  },

  practice: {
    question:
      "Create DELETE /api/products/:id to remove a product.",
    hint:
      "Use Product.findByIdAndDelete(req.params.id)."
  },

  challenge: {
    title: "Complete the Delete API",
    description:
      "Create a production-style delete endpoint for student records.",
    task:
      "Delete the student by ID, return 404 when it does not exist, and return a success response when deletion is successful."
  }
},
"authentication-basics": {
  concept: {
    heading: "Authentication",
    paragraphs: [
      "Authentication is the process of verifying the identity of a user before allowing access to protected application resources.",
      "In an Express.js application, authentication commonly involves registration, login, password hashing, and token-based authentication.",
      "A typical authentication system first verifies the user's credentials and then provides an authentication mechanism such as a JWT that can be used for later protected requests."
    ],
    remember:
      "Authentication verifies the identity of the user before allowing access to protected resources."
  },

  analogy: {
    heading: "Think of Authentication Like an Entry Pass",
    items: [
      {
        icon: "👤",
        title: "User",
        text: "The user wants to access a protected application."
      },
      {
        icon: "🔑",
        title: "Credentials",
        text: "The user provides login credentials such as email and password."
      },
      {
        icon: "🔍",
        title: "Verification",
        text: "The server checks whether the credentials are valid."
      },
      {
        icon: "🎟️",
        title: "Access Token",
        text: "After successful authentication, the server can provide a token for authenticated requests."
      }
    ]
  },

  visual: {
    heading: "Authentication Flow",
    description:
      "A typical Express authentication system verifies credentials before providing authenticated access.",
    steps: [
      {
        icon: "1️⃣",
        title: "Register",
        text: "The user creates an account with required information."
      },
      {
        icon: "2️⃣",
        title: "Login",
        text: "The user submits email and password."
      },
      {
        icon: "3️⃣",
        title: "Verify",
        text: "The server finds the user and verifies the password."
      },
      {
        icon: "4️⃣",
        title: "Authenticate",
        text: "The server creates an authentication token."
      }
    ],
    flow:
      "Register → Login → Verify Credentials → JWT → Protected Requests"
  },

  code: {
    title: "Authentication Structure",
    description:
      "This example shows the basic structure of authentication using Express, bcrypt, and JWT.",
    language: "javascript",
    code: `const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token
  });
});

app.listen(3000);`,
    output: `{
  "message": "Login successful",
  "token": "generated-jwt-token"
}`,
    explanation:
      "The login API finds the user by email, compares the submitted password with the stored password hash, and creates a JWT after successful verification."
  },

  interview: {
    question: "What are the main steps in Express authentication?",
    answer:
      "The common flow is user registration, secure password storage, login credential verification, token or session creation, and authentication of protected requests.",
    tip:
      "Remember the flow: Register → Login → Verify → Token → Protected Route."
  },

  tricky: {
    question: "What is the difference between authentication and authorization?",
    answer:
      "Authentication verifies who the user is, while authorization determines what that authenticated user is allowed to access or perform."
  },

  practice: {
    question:
      "Create a basic Express login API that accepts email and password and verifies an existing user.",
    hint:
      "Use User.findOne() to find the user and bcrypt.compare() to verify the password."
  },

  challenge: {
    title: "Build an Authentication System",
    description:
      "Create a complete authentication flow for an Express application.",
    task:
      "Implement registration with password hashing, login with password verification, JWT generation, and authentication middleware for a protected route."
  }
},

"register-api": {
  concept: {
    heading: "Register API",
    paragraphs: [
      "A Register API allows a new user to create an account in an application.",
      "The client sends information such as name, email, and password to the server.",
      "The Express server validates the input, checks whether the email already exists, securely hashes the password, and stores the new user in the database.",
      "Passwords should never be stored as plain text."
    ],
    remember:
      "Register API = Validate → Check User → Hash Password → Save User → Send Response."
  },

  analogy: {
    heading: "Think of Registration Like Creating a Membership",
    items: [
      {
        icon: "📝",
        title: "User Form",
        text: "The user enters registration information."
      },
      {
        icon: "🔍",
        title: "Validation",
        text: "The server checks whether the submitted information is valid."
      },
      {
        icon: "🔐",
        title: "Hash Password",
        text: "The password is converted into a secure hash."
      },
      {
        icon: "💾",
        title: "Save User",
        text: "The new user record is stored in the database."
      }
    ]
  },

  visual: {
    heading: "Register API Flow",
    description:
      "A registration request passes through validation and password protection before the user is stored.",
    steps: [
      {
        icon: "1️⃣",
        title: "Receive Data",
        text: "Express receives name, email, and password from req.body."
      },
      {
        icon: "2️⃣",
        title: "Validate",
        text: "Check required fields and validate the submitted data."
      },
      {
        icon: "3️⃣",
        title: "Hash Password",
        text: "Use bcrypt to securely hash the password."
      },
      {
        icon: "4️⃣",
        title: "Save User",
        text: "Create and save the user document in MongoDB."
      }
    ],
    flow:
      "Client → POST /register → Validate → Hash Password → MongoDB → Response"
  },

  code: {
    title: "Register API",
    description:
      "Basic registration API using Express and bcrypt.",
    language: "javascript",
    code: `const bcrypt = require("bcrypt");

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful",
      userId: user._id
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});`,
    output: `{
  "message": "Registration successful",
  "userId": "generated-user-id"
}`,
    explanation:
      "The API checks whether the email already exists, hashes the password using bcrypt, creates the user, and returns a successful response."
  },

  interview: {
    question: "Why should passwords be hashed during registration?",
    answer:
      "Passwords should be hashed so that the original password is not stored directly in the database.",
    tip:
      "Never store user passwords as plain text."
  },

  tricky: {
    question: "Should the original password be stored in MongoDB?",
    answer:
      "No. The application should store a secure password hash instead of the original password."
  },

  practice: {
    question:
      "Create a POST /register endpoint that accepts name, email, and password.",
    hint:
      "Use bcrypt.hash() before saving the password."
  },

  challenge: {
    title: "Build a Registration API",
    description:
      "Create a complete user registration endpoint.",
    task:
      "Validate user input, check for an existing email, hash the password using bcrypt, save the user, and return a suitable response."
  }
},

"login-api": {
  concept: {
    heading: "Login API",
    paragraphs: [
      "A Login API allows an existing user to authenticate with the application using credentials such as email and password.",
      "The client sends the login information to the Express server.",
      "The server finds the user, verifies the password against the stored password hash, and creates an authentication token when the credentials are valid.",
      "The token can then be used to access protected API endpoints."
    ],
    remember:
      "Login API = Receive credentials → Find user → Verify password → Generate token → Return response."
  },

  analogy: {
    heading: "Think of Login Like Entering a Secure Building",
    items: [
      {
        icon: "👤",
        title: "User",
        text: "The user already has an account and wants to access the application."
      },
      {
        icon: "🔑",
        title: "Credentials",
        text: "The user provides an email and password."
      },
      {
        icon: "🔍",
        title: "Verification",
        text: "The server verifies the credentials."
      },
      {
        icon: "🎟️",
        title: "Token",
        text: "The server provides a token after successful authentication."
      }
    ]
  },

  visual: {
    heading: "Login API Flow",
    description:
      "The login process verifies the user's credentials before creating an authenticated token.",
    steps: [
      {
        icon: "1️⃣",
        title: "Login Request",
        text: "The client sends email and password."
      },
      {
        icon: "2️⃣",
        title: "Find User",
        text: "The server searches for the user by email."
      },
      {
        icon: "3️⃣",
        title: "Verify Password",
        text: "bcrypt compares the submitted password with the stored hash."
      },
      {
        icon: "4️⃣",
        title: "Generate JWT",
        text: "A JWT is generated after successful verification."
      }
    ],
    flow:
      "Login Request → Find User → Verify Password → JWT → Response"
  },

  code: {
    title: "Login API with Express",
    description:
      "Basic login API using bcrypt and JSON Web Token.",
    language: "javascript",
    code: `const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});`,
    output: `{
  "message": "Login successful",
  "token": "generated-jwt-token"
}`,
    explanation:
      "The API finds the user, verifies the password with bcrypt, creates a JWT, and returns the token."
  },

  interview: {
    question: "How does a Login API work?",
    answer:
      "It receives credentials, finds the user, verifies the password, generates an authentication token, and returns the response.",
    tip:
      "Remember: Request → User → Password → JWT → Response."
  },

  tricky: {
    question:
      "Why should login errors avoid revealing whether the email exists?",
    answer:
      "A generic invalid-credentials message can avoid unnecessarily revealing whether a particular email is registered."
  },

  practice: {
    question:
      "Create a POST /login endpoint that verifies an existing user's email and password.",
    hint:
      "Use User.findOne() and bcrypt.compare()."
  },

  challenge: {
    title: "Build a Complete Login API",
    description:
      "Create a secure login endpoint.",
    task:
      "Find the user, verify the password using bcrypt, generate a JWT, and return the token."
  }
},

"password-hashing": {
  concept: {
    heading: "Password Hashing",
    paragraphs: [
      "Password hashing converts a password into a one-way hashed value before it is stored in a database.",
      "Hashing protects users because the original password does not need to be stored directly.",
      "In Node.js and Express applications, bcrypt is commonly used for password hashing and password verification.",
      "During login, bcrypt.compare() checks the submitted password against the stored hash."
    ],
    remember:
      "Never store plain-text passwords. Store a secure password hash."
  },

  analogy: {
    heading: "Think of Hashing Like a One-Way Lock",
    items: [
      {
        icon: "🔑",
        title: "Original Password",
        text: "The user enters the original password."
      },
      {
        icon: "🔐",
        title: "Hash",
        text: "bcrypt converts the password into a secure hash."
      },
      {
        icon: "💾",
        title: "Database",
        text: "Only the hash is stored."
      },
      {
        icon: "✅",
        title: "Verification",
        text: "bcrypt.compare() verifies a submitted password."
      }
    ]
  },

  visual: {
    heading: "Password Hashing Flow",
    description:
      "The password is hashed before storage and verified during login.",
    steps: [
      {
        icon: "1️⃣",
        title: "Password",
        text: "User enters a password."
      },
      {
        icon: "2️⃣",
        title: "bcrypt.hash()",
        text: "The password is converted into a hash."
      },
      {
        icon: "3️⃣",
        title: "Store Hash",
        text: "The hash is stored in the database."
      },
      {
        icon: "4️⃣",
        title: "Compare",
        text: "bcrypt.compare() verifies login passwords."
      }
    ],
    flow:
      "Password → bcrypt.hash() → Hash → Database → bcrypt.compare() → Result"
  },

  code: {
    title: "Hashing a Password",
    description:
      "Use bcrypt to hash a password before storing it.",
    language: "javascript",
    code: `const bcrypt = require("bcrypt");

const password = "securePassword123";

const hashedPassword = await bcrypt.hash(
  password,
  10
);

console.log(hashedPassword);

// During login
const isMatch = await bcrypt.compare(
  password,
  hashedPassword
);

console.log(isMatch);`,
    output: `A bcrypt hash is generated.
true`,
    explanation:
      "bcrypt.hash() creates the stored password hash. During login, bcrypt.compare() checks whether the submitted password matches that hash."
  },

  interview: {
    question: "What is password hashing?",
    answer:
      "Password hashing converts a password into a one-way hashed representation that can be stored securely instead of storing the original password.",
    tip:
      "Hash during registration and compare during login."
  },

  tricky: {
    question: "Can a hashed password normally be converted back to the original password?",
    answer:
      "A password hash is designed as a one-way representation. Applications verify passwords by comparing them with the stored hash rather than reversing the hash."
  },

  practice: {
    question:
      "Hash a password using bcrypt and then verify it using bcrypt.compare().",
    hint:
      "Use bcrypt.hash() first and bcrypt.compare() during verification."
  },

  challenge: {
    title: "Secure User Passwords",
    description:
      "Add password hashing to a registration system.",
    task:
      "Hash every new user's password before saving the user document and verify the password during login."
  }
},

"jwt-authentication": {
  concept: {
    heading: "JWT Authentication",
    paragraphs: [
      "JWT stands for JSON Web Token. It is commonly used to represent authenticated user information between a client and server.",
      "After successful login, the server can generate a JWT containing selected user information.",
      "The client can send the token with later requests to protected endpoints.",
      "The server verifies the token before allowing access to protected resources."
    ],
    remember:
      "JWT allows a server to verify an authenticated request using a signed token."
  },

  analogy: {
    heading: "Think of JWT Like a Digital Entry Pass",
    items: [
      {
        icon: "🎫",
        title: "Token",
        text: "The server creates a signed digital token."
      },
      {
        icon: "📤",
        title: "Client",
        text: "The client stores and sends the token with protected requests."
      },
      {
        icon: "🔍",
        title: "Verification",
        text: "The server verifies the token signature."
      },
      {
        icon: "🚪",
        title: "Access",
        text: "A valid token allows the request to continue."
      }
    ]
  },

  visual: {
    heading: "JWT Authentication Flow",
    description:
      "JWT authentication connects login with protected API requests.",
    steps: [
      {
        icon: "1️⃣",
        title: "Login",
        text: "The user submits valid credentials."
      },
      {
        icon: "2️⃣",
        title: "Generate Token",
        text: "The server creates a signed JWT."
      },
      {
        icon: "3️⃣",
        title: "Send Token",
        text: "The client receives the JWT."
      },
      {
        icon: "4️⃣",
        title: "Protected Request",
        text: "The client sends the token with a protected API request."
      }
    ],
    flow:
      "Login → JWT Generated → Client → Protected Request → Verify JWT → Access"
  },

  code: {
    title: "Creating and Verifying a JWT",
    description:
      "Basic JWT creation and verification using jsonwebtoken.",
    language: "javascript",
    code: `const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: "12345" },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

console.log(token);

// Verify token
const decoded = jwt.verify(
  token,
  process.env.JWT_SECRET
);

console.log(decoded);`,
    output:
      "A signed JWT is generated and then verified successfully.",
    explanation:
      "jwt.sign() creates a signed token. jwt.verify() checks whether the token is valid using the same secret."
  },

  interview: {
    question: "What is JWT?",
    answer:
      "JWT is a compact token format commonly used to represent authenticated information between a client and server.",
    tip:
      "Explain JWT together with login and protected routes."
  },

  tricky: {
    question: "Should sensitive passwords be stored inside a JWT?",
    answer:
      "No. Passwords and other sensitive secrets should not be placed inside JWT payload data."
  },

  practice: {
    question:
      "Create a JWT containing a user ID and verify the token using jwt.verify().",
    hint:
      "Use jwt.sign() to create the token and jwt.verify() to validate it."
  },

  challenge: {
    title: "Implement JWT Authentication",
    description:
      "Connect login with JWT-based protected routes.",
    task:
      "Generate a JWT after successful login and create middleware that verifies the token before allowing access to a protected endpoint."
  }
},

"protected-routes": {
  concept: {
    heading: "Protected Routes",
    paragraphs: [
      "A protected route is an API endpoint that should only be accessible to authenticated users.",
      "Express middleware can check whether a request contains a valid authentication token before allowing the request to continue.",
      "JWT authentication is commonly used to protect REST API routes.",
      "If the token is missing or invalid, the server should reject the request."
    ],
    remember:
      "Protected Route = Verify Authentication Before Giving Access."
  },

  analogy: {
    heading: "Think of a Protected Route Like a Restricted Room",
    items: [
      {
        icon: "🚪",
        title: "Route",
        text: "The API endpoint represents a restricted resource."
      },
      {
        icon: "🎫",
        title: "Token",
        text: "The user provides an authentication token."
      },
      {
        icon: "🔍",
        title: "Middleware",
        text: "Middleware verifies the token."
      },
      {
        icon: "✅",
        title: "Access",
        text: "A valid token allows the request to reach the route."
      }
    ]
  },

  visual: {
    heading: "Protected Route Flow",
    description:
      "Authentication middleware runs before the protected route handler.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "Client requests a protected endpoint."
      },
      {
        icon: "2️⃣",
        title: "Read Token",
        text: "Middleware reads the authorization token."
      },
      {
        icon: "3️⃣",
        title: "Verify",
        text: "JWT is verified using the secret."
      },
      {
        icon: "4️⃣",
        title: "Allow or Reject",
        text: "Valid requests continue; invalid requests are rejected."
      }
    ],
    flow:
      "Request → Authentication Middleware → Verify JWT → Protected Route"
  },

  code: {
    title: "Authentication Middleware",
    description:
      "Middleware can verify a JWT before allowing access to a protected route.",
    language: "javascript",
    code: `const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
}

app.get(
  "/profile",
  authenticate,
  (req, res) => {
    res.json({
      message: "Protected profile",
      user: req.user
    });
  }
);`,
    output: `{
  "message": "Protected profile",
  "user": {
    "userId": "12345"
  }
}`,
    explanation:
      "The authenticate middleware checks the Authorization header, verifies the JWT, stores the decoded user information in req.user, and calls next() to continue."
  },

  interview: {
    question: "How do you protect an Express route?",
    answer:
      "Use authentication middleware that verifies the user's credentials or token before allowing the request to reach the protected route.",
    tip:
      "Middleware runs before the protected route handler."
  },

  tricky: {
    question: "What happens when next() is not called after successful authentication?",
    answer:
      "The request will not continue to the next middleware or route handler unless the middleware sends a response or otherwise completes the request."
  },

  practice: {
    question:
      "Create authentication middleware that verifies a JWT before allowing access to /profile.",
    hint:
      "Read req.headers.authorization and use jwt.verify()."
  },

  challenge: {
    title: "Create Protected Routes",
    description:
      "Build JWT middleware and use it with protected endpoints.",
    task:
      "Create authentication middleware and protect /profile and /dashboard routes."
  }
},

"authorization": {
  concept: {
    heading: "Authorization",
    paragraphs: [
      "Authorization determines what an authenticated user is allowed to access or perform.",
      "Authentication answers the question 'Who are you?', while authorization answers 'What are you allowed to do?'.",
      "For example, an application may allow regular users to view products while only administrators can create, update, or delete certain resources.",
      "Authorization is commonly implemented using roles or permissions."
    ],
    remember:
      "Authentication identifies the user. Authorization controls the user's permissions."
  },

  analogy: {
    heading: "Think of Authorization Like Different Access Levels",
    items: [
      {
        icon: "👤",
        title: "User",
        text: "A normal authenticated user may have limited permissions."
      },
      {
        icon: "👑",
        title: "Admin",
        text: "An administrator may have additional permissions."
      },
      {
        icon: "🔐",
        title: "Permission",
        text: "The server checks whether the user has permission for an action."
      },
      {
        icon: "🚫",
        title: "Access Denied",
        text: "Users without permission should receive an appropriate response."
      }
    ]
  },

  visual: {
    heading: "Authorization Flow",
    description:
      "Authorization checks the user's role or permissions after authentication.",
    steps: [
      {
        icon: "1️⃣",
        title: "Authenticate",
        text: "Verify the user's identity."
      },
      {
        icon: "2️⃣",
        title: "Read Role",
        text: "Identify the user's role or permissions."
      },
      {
        icon: "3️⃣",
        title: "Check Permission",
        text: "Determine whether the requested action is allowed."
      },
      {
        icon: "4️⃣",
        title: "Allow or Reject",
        text: "Continue or return an access-denied response."
      }
    ],
    flow:
      "Authentication → User Role → Permission Check → Allow / Deny"
  },

  code: {
    title: "Role-Based Authorization",
    description:
      "Middleware can check whether the authenticated user has the required role.",
    language: "javascript",
    code: `function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied"
    });
  }

  next();
}

app.delete(
  "/users/:id",
  authenticate,
  authorizeAdmin,
  deleteUser
);`,
    output: `Admin user → Request allowed

Regular user → 403 Access denied`,
    explanation:
      "The authentication middleware identifies the user first. The authorization middleware then checks the user's role before allowing access to the delete operation."
  },

  interview: {
    question: "What is the difference between authentication and authorization?",
    answer:
      "Authentication verifies identity. Authorization determines what the authenticated user is allowed to access or perform.",
    tip:
      "Authentication = Who are you? Authorization = What can you do?"
  },

  tricky: {
    question: "Can authorization happen before authentication?",
    answer:
      "Authorization normally depends on knowing the identity or permissions of the requester, so authentication is generally performed first."
  },

  practice: {
    question:
      "Create middleware that allows only users with the admin role to access an endpoint.",
    hint:
      "Check req.user.role and return status 403 when the role is not allowed."
  },

  challenge: {
    title: "Build Role-Based Authorization",
    description:
      "Create different access levels for users and administrators.",
    task:
      "Implement authentication and create authorization middleware that allows only admins to create, update, or delete selected resources."
  }
},

"cors": {
  concept: {
    heading: "CORS",
    paragraphs: [
      "CORS stands for Cross-Origin Resource Sharing.",
      "Browsers use the same-origin policy to restrict certain cross-origin requests. CORS provides a mechanism for a server to specify which origins are allowed to access its resources.",
      "In Express applications, the cors package can be used to configure cross-origin access.",
      "CORS is especially common when a frontend application and backend API run on different origins during development or deployment."
    ],
    remember:
      "CORS controls which origins are allowed to access resources from a server."
  },

  analogy: {
    heading: "Think of CORS Like an Entry Permission List",
    items: [
      {
        icon: "🌐",
        title: "Origin",
        text: "A browser request comes from a particular origin."
      },
      {
        icon: "🚪",
        title: "Server",
        text: "The server decides which origins can access its resources."
      },
      {
        icon: "✅",
        title: "Allowed",
        text: "An allowed origin can make the required browser request."
      },
      {
        icon: "🚫",
        title: "Blocked",
        text: "A browser may block access when the server does not allow the origin."
      }
    ]
  },

  visual: {
    heading: "CORS Flow",
    description:
      "CORS configuration tells the browser which cross-origin requests are allowed.",
    steps: [
      {
        icon: "1️⃣",
        title: "Frontend Request",
        text: "A frontend application requests data from an API."
      },
      {
        icon: "2️⃣",
        title: "Different Origin",
        text: "The frontend and backend may use different origins."
      },
      {
        icon: "3️⃣",
        title: "CORS Headers",
        text: "The server sends appropriate CORS headers."
      },
      {
        icon: "4️⃣",
        title: "Browser Decision",
        text: "The browser determines whether the response can be accessed by the frontend."
      }
    ],
    flow:
      "Frontend → Cross-Origin Request → Express/CORS → Response Headers → Browser"
  },

  code: {
    title: "Using CORS in Express",
    description:
      "The cors package can be used to allow cross-origin requests.",
    language: "javascript",
    code: `const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop"
    }
  ]);
});

app.listen(5000);`,
    output:
      "The Express API allows browser requests from the configured frontend origin.",
    explanation:
      "The cors middleware adds the required CORS behavior and headers. The origin option limits which frontend origin is allowed."
  },

  interview: {
    question: "What is CORS?",
    answer:
      "CORS is a browser security mechanism that allows a server to specify which cross-origin requests can access its resources.",
    tip:
      "Remember: CORS is mainly about cross-origin browser requests."
  },

  tricky: {
    question: "Does CORS itself authenticate a user?",
    answer:
      "No. CORS controls cross-origin browser access. Authentication verifies the identity of a user."
  },

  practice: {
    question:
      "Configure an Express API so that requests from a frontend running on http://localhost:3000 are allowed.",
    hint:
      "Install cors and use cors({ origin: 'http://localhost:3000' })."
  },

  challenge: {
    title: "Configure CORS for a Frontend",
    description:
      "Connect a frontend application to an Express API using appropriate CORS configuration.",
    task:
      "Configure your Express server to allow requests from your frontend application while avoiding unnecessarily broad access."
  }
},

"environment-variables": {
  concept: {
    heading: "Environment Variables",
    paragraphs: [
      "Environment variables store configuration values outside the application source code.",
      "They are useful for values such as database connection strings, JWT secrets, API keys, and environment-specific settings.",
      "In Node.js applications, environment variables are commonly accessed through process.env.",
      "Secrets should not be hard-coded directly into source code or committed to a public repository."
    ],
    remember:
      "Use environment variables for configuration and sensitive values such as database URLs and JWT secrets."
  },

  analogy: {
    heading: "Think of Environment Variables Like a Private Configuration Box",
    items: [
      {
        icon: "📦",
        title: "Configuration",
        text: "Application settings are stored outside the main source code."
      },
      {
        icon: "🔐",
        title: "Secrets",
        text: "Sensitive values such as JWT secrets can be kept out of the source code."
      },
      {
        icon: "🌍",
        title: "Environment",
        text: "Development, testing, and production can use different values."
      },
      {
        icon: "⚙️",
        title: "process.env",
        text: "Node.js applications can access environment variables through process.env."
      }
    ]
  },

  visual: {
    heading: "Environment Variable Flow",
    description:
      "Configuration values are loaded from the environment and accessed by the Node.js application.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Configuration",
        text: "Store values in environment configuration."
      },
      {
        icon: "2️⃣",
        title: "Load Variables",
        text: "The Node.js application loads the environment values."
      },
      {
        icon: "3️⃣",
        title: "Access Values",
        text: "Use process.env to read configuration."
      },
      {
        icon: "4️⃣",
        title: "Use in Application",
        text: "Use the values for database connections, JWT, APIs, and other configuration."
      }
    ],
    flow:
      ".env → Environment Variables → process.env → Express Application"
  },

  code: {
    title: "Using Environment Variables",
    description:
      "Store sensitive configuration outside the application source code.",
    language: "javascript",
    code: `// .env

PORT=5000
JWT_SECRET=my-super-secret-key
MONGODB_URI=mongodb://127.0.0.1:27017/appdb

// app.js

require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`,
    output:
      "Server running on port 5000",
    explanation:
      "dotenv loads values from the .env file into process.env. The application can then access configuration values without hard-coding them directly into the source."
  },

  interview: {
    question: "Why are environment variables used in Node.js applications?",
    answer:
      "They keep configuration and sensitive values outside the application source code and allow different environments to use different settings.",
    tip:
      "Common examples: PORT, MONGODB_URI, JWT_SECRET, and API keys."
  },

  tricky: {
    question: "Should a .env file containing secrets be committed to a public Git repository?",
    answer:
      "Sensitive .env files should generally not be committed to a public repository. They should be protected and appropriate environment variables should be configured securely in the deployment environment."
  },

  practice: {
    question:
      "Create a .env file containing PORT and JWT_SECRET and access them using process.env.",
    hint:
      "Install dotenv and use require('dotenv').config()."
  },

  challenge: {
    title: "Secure Express Configuration",
    description:
      "Move application configuration and secrets out of the source code.",
    task:
      "Create environment variables for the server port, MongoDB connection string, and JWT secret. Load them using dotenv and use process.env in the Express application."
  }
},
// =====================================================
// ADVANCED EXPRESS.JS
// =====================================================

"express-router": {
  concept: {
    heading: "Express Router",
    paragraphs: [
      "Express Router is used to create modular and organized route handlers in an Express.js application.",
      "Instead of keeping every route inside app.js or server.js, routes can be separated into different router files.",
      "Express Router is especially useful when an application has multiple resources such as users, products, students, and orders."
    ],
    remember:
      "Express Router helps organize related routes into separate and reusable modules."
  },

  analogy: {
    heading: "Think of Router Like Separate Departments",
    items: [
      {
        icon: "📁",
        title: "Main Application",
        text: "The main Express application connects different routers."
      },
      {
        icon: "👥",
        title: "User Router",
        text: "User-related routes can be kept together."
      },
      {
        icon: "📦",
        title: "Product Router",
        text: "Product-related routes can be maintained separately."
      },
      {
        icon: "🔗",
        title: "Connect",
        text: "The routers are connected to the main Express application."
      }
    ]
  },

  visual: {
    heading: "Express Router Flow",
    description:
      "Express Router separates routes into smaller modules.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Router",
        text: "Create an Express Router instance."
      },
      {
        icon: "2️⃣",
        title: "Define Routes",
        text: "Add related GET, POST, PUT, and DELETE routes."
      },
      {
        icon: "3️⃣",
        title: "Export Router",
        text: "Export the router from its module."
      },
      {
        icon: "4️⃣",
        title: "Use Router",
        text: "Connect the router to the main Express application."
      }
    ],
    flow:
      "Router File → Define Routes → Export → app.use() → Express Application"
  },

  code: {
    title: "Creating an Express Router",
    description:
      "Create a separate router for user-related routes.",
    language: "javascript",
    code: `const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "All users"
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: "Single user",
    id: req.params.id
  });
});

module.exports = router;

// app.js

const userRouter = require("./routes/users");

app.use("/api/users", userRouter);`,
    output: `GET /api/users
{
  "message": "All users"
}

GET /api/users/10
{
  "message": "Single user",
  "id": "10"
}`,
    explanation:
      "The router handles user-related routes while app.js connects the router using app.use()."
  },

  interview: {
    question: "Why is Express Router used?",
    answer:
      "Express Router is used to organize related routes into separate modules and keep the application structure maintainable.",
    tip:
      "Mention modularity, organization, and reusable route handling."
  },

  tricky: {
    question: "Is express.Router() a complete Express application?",
    answer:
      "No. It creates a modular router that can be mounted inside an Express application."
  },

  practice: {
    question:
      "Create a product router containing GET and POST routes.",
    hint:
      "Use express.Router() and connect it with app.use()."
  },

  challenge: {
    title: "Create Modular Routers",
    description:
      "Organize an Express application using separate routers.",
    task:
      "Create separate userRouter and productRouter files and connect both routers to the main Express application."
  }
},

"modular-routes": {
  concept: {
    heading: "Modular Routes",
    paragraphs: [
      "Modular routes separate application routes into individual files based on resources or features.",
      "This keeps the main server file smaller and makes the application easier to maintain.",
      "For example, user routes, product routes, and order routes can each have their own modules.",
      "Modular routing becomes increasingly important as an Express application grows."
    ],
    remember:
      "One resource or feature can have its own route module."
  },

  analogy: {
    heading: "Think of Modular Routes Like Organized Files",
    items: [
      {
        icon: "👥",
        title: "Users",
        text: "User routes are stored in users.js."
      },
      {
        icon: "📦",
        title: "Products",
        text: "Product routes are stored in products.js."
      },
      {
        icon: "🛒",
        title: "Orders",
        text: "Order routes are stored in orders.js."
      },
      {
        icon: "🧩",
        title: "Main App",
        text: "The main application combines all modules."
      }
    ]
  },

  visual: {
    heading: "Modular Route Structure",
    description:
      "A modular Express application separates routes by responsibility.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Route Files",
        text: "Create separate files for different resources."
      },
      {
        icon: "2️⃣",
        title: "Define Routes",
        text: "Keep resource-specific routes inside each file."
      },
      {
        icon: "3️⃣",
        title: "Export",
        text: "Export each router."
      },
      {
        icon: "4️⃣",
        title: "Mount",
        text: "Mount routers using app.use()."
      }
    ],
    flow:
      "Resource → Router File → Export → app.use() → API"
  },

  code: {
    title: "Modular Route Example",
    description:
      "Separate product routes from the main Express application.",
    language: "javascript",
    code: `// routes/products.js

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Product list"
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "Product created"
  });
});

module.exports = router;


// app.js

const productRouter = require("./routes/products");

app.use("/api/products", productRouter);`,
    output:
      "GET /api/products → Product list\nPOST /api/products → Product created",
    explanation:
      "The product routes are maintained separately and mounted under the /api/products path."
  },

  interview: {
    question: "What are modular routes?",
    answer:
      "Modular routes are routes separated into different files or modules based on application resources or features.",
    tip:
      "They improve maintainability and organization."
  },

  tricky: {
    question: "Why should a large Express application avoid putting every route in app.js?",
    answer:
      "A very large route file becomes difficult to understand and maintain. Modular routes keep responsibilities separated."
  },

  practice: {
    question:
      "Create a separate studentRouter for student-related routes.",
    hint:
      "Use express.Router() and mount it with app.use('/api/students', studentRouter)."
  },

  challenge: {
    title: "Build a Modular API",
    description:
      "Organize an API using multiple router modules.",
    task:
      "Create user, product, and order routers and connect them to the main Express application."
  }
},

"controllers": {
  concept: {
    heading: "Controllers",
    paragraphs: [
      "A controller contains the logic that handles a request and creates a response.",
      "Controllers help keep route files focused on defining endpoints while business logic is moved into separate functions.",
      "This separation makes Express applications easier to test, maintain, and extend."
    ],
    remember:
      "Routes define the endpoint. Controllers handle the request logic."
  },

  analogy: {
    heading: "Think of Controllers Like Managers",
    items: [
      {
        icon: "🛣️",
        title: "Route",
        text: "The route receives the request."
      },
      {
        icon: "👨‍💼",
        title: "Controller",
        text: "The controller decides what should happen."
      },
      {
        icon: "💾",
        title: "Database",
        text: "The controller can interact with data through services or models."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The controller sends the final response."
      }
    ]
  },

  visual: {
    heading: "Controller Flow",
    description:
      "Controllers separate request-handling logic from route definitions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "Client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Route",
        text: "Express matches the route."
      },
      {
        icon: "3️⃣",
        title: "Controller",
        text: "Controller processes the request."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "Controller sends the response."
      }
    ],
    flow:
      "Client → Route → Controller → Service/Model → Response"
  },

  code: {
    title: "Controller Example",
    description:
      "Move request logic into a controller function.",
    language: "javascript",
    code: `// controllers/userController.js

exports.getUsers = (req, res) => {
  res.json({
    message: "All users"
  });
};


// routes/users.js

const express = require("express");

const router = express.Router();

const {
  getUsers
} = require("../controllers/userController");

router.get("/", getUsers);

module.exports = router;`,
    output:
      `GET /api/users

{
  "message": "All users"
}`,
    explanation:
      "The route only connects the endpoint to the controller. The controller contains the request-handling logic."
  },

  interview: {
    question: "What is a controller in Express?",
    answer:
      "A controller is a function or group of functions responsible for processing requests and generating responses.",
    tip:
      "Controllers help separate route definitions from application logic."
  },

  tricky: {
    question: "Should all business logic be written directly inside route definitions?",
    answer:
      "For small examples it can be acceptable, but larger applications benefit from separating route, controller, service, and data-access responsibilities."
  },

  practice: {
    question:
      "Create a studentController with getStudents and createStudent functions.",
    hint:
      "Connect both controller functions to routes."
  },

  challenge: {
    title: "Create a Controller Layer",
    description:
      "Separate request handling from route definitions.",
    task:
      "Create controllers for users and products and connect them to their respective Express routers."
  }
},

"services": {
  concept: {
    heading: "Services",
    paragraphs: [
      "A service layer contains reusable business logic that can be called by controllers.",
      "Services are useful when an application has complex operations that should not be placed directly inside route handlers or controllers.",
      "A service can communicate with models, perform calculations, apply business rules, or combine multiple operations."
    ],
    remember:
      "Controller handles the request. Service handles reusable business logic."
  },

  analogy: {
    heading: "Think of a Service Like a Specialist",
    items: [
      {
        icon: "📨",
        title: "Controller",
        text: "Receives the request."
      },
      {
        icon: "🧠",
        title: "Service",
        text: "Performs business logic."
      },
      {
        icon: "💾",
        title: "Model",
        text: "Handles database operations."
      },
      {
        icon: "📤",
        title: "Response",
        text: "Controller returns the result."
      }
    ]
  },

  visual: {
    heading: "Service Layer Flow",
    description:
      "The service layer keeps reusable business logic separate from request handling.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "Client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Controller",
        text: "Controller receives the request."
      },
      {
        icon: "3️⃣",
        title: "Service",
        text: "Service performs business logic."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "Controller sends the service result."
      }
    ],
    flow:
      "Request → Controller → Service → Model/Database → Controller → Response"
  },

  code: {
    title: "Service Example",
    description:
      "Separate reusable logic into a service function.",
    language: "javascript",
    code: `// services/userService.js

exports.getUserCount = async () => {
  return await User.countDocuments();
};


// controllers/userController.js

const {
  getUserCount
} = require("../services/userService");

exports.getCount = async (req, res) => {
  const count = await getUserCount();

  res.json({
    count
  });
};`,
    output:
      `{ "count": 25 }`,
    explanation:
      "The service performs the reusable database operation while the controller manages the HTTP request and response."
  },

  interview: {
    question: "Why use a service layer?",
    answer:
      "A service layer keeps reusable business logic separate from controllers and makes complex application logic easier to maintain and test.",
    tip:
      "Think: Controller = HTTP, Service = Business Logic."
  },

  tricky: {
    question: "Is a service layer mandatory in every Express application?",
    answer:
      "No. It is an architectural choice that becomes more useful as the application's business logic grows."
  },

  practice: {
    question:
      "Create a product service containing a function that returns the number of products.",
    hint:
      "Use Product.countDocuments()."
  },

  challenge: {
    title: "Build a Service Layer",
    description:
      "Separate business logic from controllers.",
    task:
      "Create services for user registration and product management and call them from controllers."
  }
},

"error-handling": {
  concept: {
    heading: "Error Handling",
    paragraphs: [
      "Error handling allows an Express application to respond safely when something goes wrong.",
      "Errors can occur because of invalid input, database failures, missing resources, programming errors, or external service failures.",
      "Express provides error-handling middleware that can centralize application errors."
    ],
    remember:
      "Good error handling prevents application failures from producing confusing responses."
  },

  analogy: {
    heading: "Think of Error Handling Like an Emergency System",
    items: [
      {
        icon: "⚠️",
        title: "Problem",
        text: "Something goes wrong during request processing."
      },
      {
        icon: "🚨",
        title: "Error",
        text: "The error is passed to the error handler."
      },
      {
        icon: "🛠️",
        title: "Handler",
        text: "The centralized middleware processes the error."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The client receives a suitable error response."
      }
    ]
  },

  visual: {
    heading: "Express Error Flow",
    description:
      "Errors can be forwarded to centralized error-handling middleware.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "Client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Error Occurs",
        text: "An operation fails."
      },
      {
        icon: "3️⃣",
        title: "next(error)",
        text: "The error is passed to Express."
      },
      {
        icon: "4️⃣",
        title: "Error Middleware",
        text: "Centralized middleware creates the response."
      }
    ],
    flow:
      "Request → Route/Controller → Error → next(error) → Error Middleware → Response"
  },

  code: {
    title: "Error-Handling Middleware",
    description:
      "Create centralized error-handling middleware.",
    language: "javascript",
    code: `app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();

    res.json(users);

  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    message: "Something went wrong"
  });
});`,
    output:
      `{ "message": "Something went wrong" }`,
    explanation:
      "The route forwards the error using next(error). Express then passes control to the error-handling middleware."
  },

  interview: {
    question: "How does Express error-handling middleware work?",
    answer:
      "Error-handling middleware has four parameters: error, request, response, and next. Express uses it to process errors passed through next(error).",
    tip:
      "Remember the four parameters: (err, req, res, next)."
  },

  tricky: {
    question: "How is error middleware different from normal middleware?",
    answer:
      "Error-handling middleware has four parameters, beginning with the error parameter."
  },

  practice: {
    question:
      "Create centralized error-handling middleware that returns status 500.",
    hint:
      "Use app.use((err, req, res, next) => {})."
  },

  challenge: {
    title: "Build Centralized Error Handling",
    description:
      "Create a reusable error-handling system.",
    task:
      "Create error middleware and forward errors from at least two asynchronous route handlers."
  }
},

"async-error-handling": {
  concept: {
    heading: "Async Error Handling",
    paragraphs: [
      "Express applications frequently perform asynchronous operations such as database queries and API calls.",
      "These operations can fail, so asynchronous errors need to be handled correctly.",
      "try/catch can be used with async/await, and errors can then be passed to Express using next(error).",
      "Centralized error middleware can then generate the final response."
    ],
    remember:
      "Async errors should be caught and forwarded to centralized error-handling middleware."
  },

  analogy: {
    heading: "Think of Async Errors Like Delayed Problems",
    items: [
      {
        icon: "⏳",
        title: "Async Operation",
        text: "The application waits for a database or API operation."
      },
      {
        icon: "⚠️",
        title: "Failure",
        text: "The asynchronous operation may fail."
      },
      {
        icon: "🔄",
        title: "Forward Error",
        text: "The error is passed to the Express error handler."
      },
      {
        icon: "🛠️",
        title: "Handle",
        text: "Centralized middleware sends the response."
      }
    ]
  },

  visual: {
    heading: "Async Error Flow",
    description:
      "Async operations should be wrapped with suitable error handling.",
    steps: [
      {
        icon: "1️⃣",
        title: "Async Request",
        text: "Route starts an asynchronous operation."
      },
      {
        icon: "2️⃣",
        title: "Await",
        text: "The application waits for the result."
      },
      {
        icon: "3️⃣",
        title: "Catch",
        text: "try/catch catches the error."
      },
      {
        icon: "4️⃣",
        title: "next(error)",
        text: "The error is forwarded to error middleware."
      }
    ],
    flow:
      "Async Operation → await → Error → catch → next(error) → Error Middleware"
  },

  code: {
    title: "Handling Async Errors",
    description:
      "Use try/catch with async/await and forward errors to Express.",
    language: "javascript",
    code: `app.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();

    res.json(products);

  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Unable to load products"
  });
});`,
    output:
      `{ "message": "Unable to load products" }`,
    explanation:
      "If the database operation fails, catch receives the error and next(error) sends it to the centralized error handler."
  },

  interview: {
    question: "How can async errors be handled in Express?",
    answer:
      "With async/await, errors can be caught using try/catch and passed to Express error middleware using next(error).",
    tip:
      "Always consider database and API failures in asynchronous code."
  },

  tricky: {
    question: "Why is error handling important for database operations?",
    answer:
      "Database operations can fail due to connection problems, invalid queries, unavailable services, or other issues."
  },

  practice: {
    question:
      "Create an async route that fetches products and forwards database errors to error middleware.",
    hint:
      "Use try/catch and next(error)."
  },

  challenge: {
    title: "Handle Async API Errors",
    description:
      "Create robust asynchronous Express routes.",
    task:
      "Implement async routes for users and products with centralized error handling."
  }
},

"validation": {
  concept: {
    heading: "Validation",
    paragraphs: [
      "Validation checks whether incoming data follows the rules expected by the application.",
      "Express APIs should validate request data before storing it or using it in application logic.",
      "Validation can check required fields, data types, formats, lengths, ranges, and other business rules.",
      "Validation helps prevent invalid data from entering the application."
    ],
    remember:
      "Validate request data before processing or storing it."
  },

  analogy: {
    heading: "Think of Validation Like a Form Checker",
    items: [
      {
        icon: "📝",
        title: "Input",
        text: "The client sends data to the API."
      },
      {
        icon: "🔍",
        title: "Check",
        text: "The server checks whether the data follows the rules."
      },
      {
        icon: "❌",
        title: "Invalid",
        text: "Invalid data produces a validation response."
      },
      {
        icon: "✅",
        title: "Valid",
        text: "Valid data continues to the next step."
      }
    ]
  },

  visual: {
    heading: "Validation Flow",
    description:
      "Validation should happen before application logic processes incoming data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Receive Data",
        text: "Read data from the request."
      },
      {
        icon: "2️⃣",
        title: "Validate",
        text: "Check the required rules."
      },
      {
        icon: "3️⃣",
        title: "Reject or Continue",
        text: "Return an error for invalid data or continue for valid data."
      },
      {
        icon: "4️⃣",
        title: "Process",
        text: "Store or use the validated data."
      }
    ],
    flow:
      "Request → Validation → Invalid Response / Continue → Business Logic"
  },

  code: {
    title: "Simple Request Validation",
    description:
      "Validate required fields before creating a user.",
    language: "javascript",
    code: `app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  res.status(201).json({
    message: "User data is valid"
  });
});`,
    output:
      `{ "message": "User data is valid" }`,
    explanation:
      "The route checks whether name and email exist before continuing. Invalid input receives a 400 response."
  },

  interview: {
    question: "Why is validation important in an API?",
    answer:
      "Validation prevents invalid or unexpected data from entering application logic or the database.",
    tip:
      "Mention required fields, data types, formats, and business rules."
  },

  tricky: {
    question: "Should validation only be performed on the frontend?",
    answer:
      "No. Server-side validation is essential because client-side validation can be bypassed."
  },

  practice: {
    question:
      "Validate name, email, and age in a POST /users API.",
    hint:
      "Check required fields and ensure age is a valid number."
  },

  challenge: {
    title: "Build API Validation",
    description:
      "Create reusable validation for incoming API requests.",
    task:
      "Validate a user registration request and return clear validation errors for missing or invalid fields."
  }
},

"api-response-structure": {
  concept: {
    heading: "API Response Structure",
    paragraphs: [
      "A consistent API response structure makes frontend development easier and keeps APIs predictable.",
      "A response can contain information such as success status, a message, returned data, and error details.",
      "Different applications may use different response formats, but consistency within one API is important."
    ],
    remember:
      "Keep API responses predictable and consistent."
  },

  analogy: {
    heading: "Think of an API Response Like a Standard Report",
    items: [
      {
        icon: "✅",
        title: "Success",
        text: "Shows whether the operation was successful."
      },
      {
        icon: "💬",
        title: "Message",
        text: "Provides useful information about the result."
      },
      {
        icon: "📦",
        title: "Data",
        text: "Contains the requested or created resource."
      },
      {
        icon: "⚠️",
        title: "Error",
        text: "Contains useful information when an operation fails."
      }
    ]
  },

  visual: {
    heading: "API Response Structure",
    description:
      "A consistent response format can contain success, message, data, and error information.",
    steps: [
      {
        icon: "1️⃣",
        title: "HTTP Status",
        text: "Use an appropriate HTTP status code."
      },
      {
        icon: "2️⃣",
        title: "Success",
        text: "Indicate whether the operation succeeded."
      },
      {
        icon: "3️⃣",
        title: "Message",
        text: "Explain the result."
      },
      {
        icon: "4️⃣",
        title: "Data",
        text: "Return the relevant data when appropriate."
      }
    ],
    flow:
      "Request → Controller → Status Code + Consistent JSON Response"
  },

  code: {
    title: "Consistent API Response",
    description:
      "A simple response structure for a successful API operation.",
    language: "javascript",
    code: `res.status(200).json({
  success: true,
  message: "Products fetched successfully",
  data: products
});

// Error response

res.status(400).json({
  success: false,
  message: "Invalid request",
  error: "Required field is missing"
});`,
    output: `{
  "success": true,
  "message": "Products fetched successfully",
  "data": []
}`,
    explanation:
      "The response clearly communicates the operation status, message, and returned data. Error responses can use the same predictable structure."
  },

  interview: {
    question: "Why should API responses have a consistent structure?",
    answer:
      "A consistent structure makes APIs easier to understand, consume, test, and maintain.",
    tip:
      "Mention predictable frontend integration."
  },

  tricky: {
    question: "Should every API response use status code 200?",
    answer:
      "No. Different situations require appropriate HTTP status codes such as 201 for creation, 400 for invalid requests, 401 for authentication problems, 403 for forbidden access, and 404 for missing resources."
  },

  practice: {
    question:
      "Create a consistent success and error response structure for a product API.",
    hint:
      "Use success, message, data, and error fields where appropriate."
  },

  challenge: {
    title: "Standardize API Responses",
    description:
      "Create a predictable response format for an Express REST API.",
    task:
      "Use consistent JSON response structures for successful GET, POST, UPDATE, and DELETE operations and their errors."
  }
},

// =====================================================
// EXPRESS.JS PROJECTS
// =====================================================

"express-project-1": {
  concept: {
    heading: "Project 1 — Student REST API",
    paragraphs: [
      "In this project, you will build a REST API for managing student records using Express.js.",
      "The API will support CRUD operations such as creating, reading, updating, and deleting students.",
      "This project combines routing, request and response handling, middleware, validation, REST API design, and database concepts.",
      "The project can later be connected to MongoDB and Mongoose."
    ],
    remember:
      "Student REST API = Express + REST Routes + CRUD + Validation + Database."
  },

  analogy: {
    heading: "Think of the API Like a Student Management Office",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Add a new student record."
      },
      {
        icon: "📋",
        title: "Read",
        text: "View student records."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Modify student information."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a student record."
      }
    ]
  },

  visual: {
    heading: "Student REST API Flow",
    description:
      "The project exposes REST endpoints for student management.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "Postman or a frontend sends a request."
      },
      {
        icon: "2️⃣",
        title: "Express Route",
        text: "Express matches the HTTP method and endpoint."
      },
      {
        icon: "3️⃣",
        title: "CRUD Logic",
        text: "The application creates, reads, updates, or deletes data."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The API returns JSON data."
      }
    ],
    flow:
      "Client → Express Route → CRUD Logic → Data → JSON Response"
  },

  code: {
    title: "Student REST API Starter",
    description:
      "A simple in-memory student API for understanding the project structure.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

let students = [
  {
    id: 1,
    name: "Student One",
    course: "MERN"
  }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course
  };

  students.push(student);

  res.status(201).json(student);
});

app.listen(5000);`,
    output:
      "GET /api/students → Student list\nPOST /api/students → New student",
    explanation:
      "The starter API uses an array for data so that the REST concepts can be understood before adding MongoDB."
  },

  interview: {
    question: "What CRUD operations are used in the Student REST API?",
    answer:
      "Create, Read, Update, and Delete operations are used to manage student records.",
    tip:
      "Connect CRUD operations with POST, GET, PUT/PATCH, and DELETE."
  },

  tricky: {
    question: "Why is an in-memory array not suitable for production data storage?",
    answer:
      "Data stored only in memory is lost when the server restarts and does not provide persistent database storage."
  },

  practice: {
    question:
      "Add PUT and DELETE endpoints to the Student REST API.",
    hint:
      "Use req.params.id to identify the student."
  },

  challenge: {
    title: "Complete Student REST API",
    description:
      "Build a complete CRUD API for student records.",
    task:
      "Create GET, POST, PUT, PATCH, and DELETE endpoints and then connect the API to MongoDB using Mongoose."
  }
},

"express-project-2": {
  concept: {
    heading: "Project 2 — Blog REST API",
    paragraphs: [
      "The Blog REST API project manages blog posts through Express REST endpoints.",
      "Users can create, read, update, and delete blog posts.",
      "The project introduces resource-based API design and prepares the application for database integration.",
      "Authentication can later be added so only authenticated users can create or modify posts."
    ],
    remember:
      "Blog API = Posts + REST Endpoints + CRUD + Validation + Authentication."
  },

  analogy: {
    heading: "Think of the Blog API Like a Publishing System",
    items: [
      {
        icon: "📝",
        title: "Create Post",
        text: "Create a new article."
      },
      {
        icon: "📖",
        title: "Read Posts",
        text: "View published articles."
      },
      {
        icon: "✏️",
        title: "Edit",
        text: "Update an existing article."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove an article."
      }
    ]
  },

  visual: {
    heading: "Blog API Flow",
    description:
      "The API manages blog posts through REST endpoints.",
    steps: [
      {
        icon: "1️⃣",
        title: "POST /posts",
        text: "Create a blog post."
      },
      {
        icon: "2️⃣",
        title: "GET /posts",
        text: "Read blog posts."
      },
      {
        icon: "3️⃣",
        title: "PUT /posts/:id",
        text: "Update a post."
      },
      {
        icon: "4️⃣",
        title: "DELETE /posts/:id",
        text: "Delete a post."
      }
    ],
    flow:
      "Client → Blog Routes → Controller → Database → JSON Response"
  },

  code: {
    title: "Blog API Route Example",
    description:
      "Create a basic POST endpoint for blog posts.",
    language: "javascript",
    code: `app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  const post = {
    id: Date.now(),
    title,
    content
  };

  res.status(201).json({
    message: "Post created",
    post
  });
});`,
    output:
      `{ "message": "Post created", "post": { ... } }`,
    explanation:
      "The route validates the incoming data and creates a blog post object."
  },

  interview: {
    question: "What resources would a Blog REST API contain?",
    answer:
      "The main resource can be posts, with endpoints for creating, reading, updating, and deleting posts.",
    tip:
      "Use nouns such as /posts rather than action-based endpoint names."
  },

  tricky: {
    question: "Should a POST /posts endpoint normally return status 200 after creating a resource?",
    answer:
      "A successful resource creation is commonly represented with HTTP status 201 Created."
  },

  practice: {
    question:
      "Create GET, POST, PUT, and DELETE endpoints for blog posts.",
    hint:
      "Use /api/posts and /api/posts/:id."
  },

  challenge: {
    title: "Build a Blog REST API",
    description:
      "Create a complete blog backend.",
    task:
      "Build CRUD endpoints for posts, add validation, connect MongoDB, and protect create/update/delete operations with authentication."
  }
},

"express-project-3": {
  concept: {
    heading: "Project 3 — Authentication API",
    paragraphs: [
      "The Authentication API project implements user registration and login using Express.js.",
      "The project combines password hashing, JWT authentication, middleware, protected routes, and authorization concepts.",
      "Users can register an account, log in, receive a JWT, and use the token to access protected endpoints."
    ],
    remember:
      "Authentication API = Register + Hash Password + Login + JWT + Protected Routes."
  },

  analogy: {
    heading: "Think of the Project Like a Secure Application",
    items: [
      {
        icon: "📝",
        title: "Register",
        text: "Create a new user account."
      },
      {
        icon: "🔐",
        title: "Password",
        text: "Store the password securely using hashing."
      },
      {
        icon: "🎟️",
        title: "JWT",
        text: "Create a token after successful login."
      },
      {
        icon: "🚪",
        title: "Protected Route",
        text: "Verify the token before allowing access."
      }
    ]
  },

  visual: {
    heading: "Authentication API Flow",
    description:
      "The project combines registration, login, JWT, and protected routes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Register",
        text: "Create a user and hash the password."
      },
      {
        icon: "2️⃣",
        title: "Login",
        text: "Verify the user's credentials."
      },
      {
        icon: "3️⃣",
        title: "JWT",
        text: "Generate a signed authentication token."
      },
      {
        icon: "4️⃣",
        title: "Protected API",
        text: "Verify the token before allowing access."
      }
    ],
    flow:
      "Register → Login → Verify → JWT → Middleware → Protected Route"
  },

  code: {
    title: "Protected Authentication Route",
    description:
      "A simple example of a protected profile endpoint.",
    language: "javascript",
    code: `app.get(
  "/api/profile",
  authenticate,
  (req, res) => {
    res.json({
      message: "Profile data",
      user: req.user
    });
  }
);`,
    output:
      `{ "message": "Profile data", "user": { "userId": "12345" } }`,
    explanation:
      "The authenticate middleware verifies the JWT before the profile controller is allowed to execute."
  },

  interview: {
    question: "What technologies are commonly combined in an Express authentication API?",
    answer:
      "Express routes, password hashing such as bcrypt, JWT authentication, middleware, and a database such as MongoDB are commonly combined.",
    tip:
      "Explain the complete Register → Login → JWT → Protected Route flow."
  },

  tricky: {
    question: "Why is JWT middleware needed for protected routes?",
    answer:
      "The middleware verifies the token before the protected route is allowed to process the request."
  },

  practice: {
    question:
      "Create register, login, and profile endpoints.",
    hint:
      "Use bcrypt for passwords and JWT for authentication."
  },

  challenge: {
    title: "Build Authentication API",
    description:
      "Create a complete authentication backend.",
    task:
      "Implement registration, password hashing, login, JWT generation, authentication middleware, a protected profile route, and role-based authorization."
  }
},

"express-project-4": {
  concept: {
    heading: "Project 4 — E-commerce Backend API",
    paragraphs: [
      "The E-commerce Backend API project combines many Express.js concepts into a larger application.",
      "The backend can manage products, users, authentication, carts, and orders.",
      "This project is designed to bring together routing, controllers, services, MongoDB, validation, authentication, authorization, and error handling."
    ],
    remember:
      "E-commerce Backend = Products + Users + Authentication + Cart + Orders + REST API."
  },

  analogy: {
    heading: "Think of It Like an Online Store Backend",
    items: [
      {
        icon: "📦",
        title: "Products",
        text: "Manage products and product information."
      },
      {
        icon: "👤",
        title: "Users",
        text: "Manage accounts and authentication."
      },
      {
        icon: "🛒",
        title: "Cart",
        text: "Manage products selected by customers."
      },
      {
        icon: "📋",
        title: "Orders",
        text: "Create and manage customer orders."
      }
    ]
  },

  visual: {
    heading: "E-commerce API Architecture",
    description:
      "Different resources are connected through modular routes, controllers, services, and database models.",
    steps: [
      {
        icon: "1️⃣",
        title: "Frontend",
        text: "The frontend communicates with the backend API."
      },
      {
        icon: "2️⃣",
        title: "Routes",
        text: "Express routes identify the requested resource."
      },
      {
        icon: "3️⃣",
        title: "Controllers",
        text: "Controllers process HTTP requests."
      },
      {
        icon: "4️⃣",
        title: "Services & Database",
        text: "Business logic and database operations are performed."
      }
    ],
    flow:
      "Frontend → Express Routes → Controllers → Services → MongoDB → Response"
  },

  code: {
    title: "Product API Example",
    description:
      "A basic product creation endpoint.",
    language: "javascript",
    code: `app.post("/api/products", authenticate, async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (!name || price == null || stock == null) {
      return res.status(400).json({
        message: "Product information is required"
      });
    }

    const product = await Product.create({
      name,
      price,
      stock
    });

    res.status(201).json({
      success: true,
      message: "Product created",
      data: product
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to create product"
    });
  }
});`,
    output:
      `{ "success": true, "message": "Product created", "data": { ... } }`,
    explanation:
      "The endpoint authenticates the request, validates the product information, creates the database record, and returns a structured response."
  },

  interview: {
    question: "What Express concepts are used in an e-commerce backend?",
    answer:
      "An e-commerce backend can use routing, controllers, services, MongoDB, validation, authentication, authorization, middleware, error handling, and REST APIs.",
    tip:
      "Explain the architecture instead of listing only technologies."
  },

  tricky: {
    question: "Why should e-commerce business logic be separated into services?",
    answer:
      "Separating business logic helps keep controllers manageable and makes complex operations easier to reuse and maintain."
  },

  practice: {
    question:
      "Design API endpoints for products, users, carts, and orders.",
    hint:
      "Start with resource-based routes such as /api/products and /api/orders."
  },

  challenge: {
    title: "Build an E-commerce Backend",
    description:
      "Create a production-style Express backend structure.",
    task:
      "Build product, user, cart, and order APIs using modular routes, controllers, services, MongoDB, authentication, authorization, validation, and centralized error handling."
  }
},

// =====================================================
// INTERVIEW PREPARATION
// =====================================================

"express-interview": {
  concept: {
    heading: "Express.js Interview Questions",
    paragraphs: [
      "Express.js interview preparation requires understanding how the framework handles requests, routes, middleware, responses, APIs, and errors.",
      "Interview questions can range from basic Express concepts to application architecture and production practices.",
      "The best preparation is to understand why a feature is used rather than memorizing definitions."
    ],
    remember:
      "Understand the request → middleware → route/controller → response flow."
  },

  analogy: {
    heading: "Think of Interview Preparation Like Debugging",
    items: [
      {
        icon: "❓",
        title: "Question",
        text: "The interviewer presents a technical question."
      },
      {
        icon: "🧠",
        title: "Concept",
        text: "Explain the underlying Express concept."
      },
      {
        icon: "💻",
        title: "Example",
        text: "Support the explanation with a practical example."
      },
      {
        icon: "🎯",
        title: "Reason",
        text: "Explain when and why the feature is used."
      }
    ]
  },

  visual: {
    heading: "Express Interview Preparation",
    description:
      "Prepare from fundamentals through real-world application architecture.",
    steps: [
      {
        icon: "1️⃣",
        title: "Fundamentals",
        text: "Express, routes, requests, responses, and middleware."
      },
      {
        icon: "2️⃣",
        title: "REST APIs",
        text: "HTTP methods, status codes, CRUD, and API design."
      },
      {
        icon: "3️⃣",
        title: "Advanced",
        text: "Routers, controllers, services, validation, and error handling."
      },
      {
        icon: "4️⃣",
        title: "Projects",
        text: "Explain real-world Express projects and architecture."
      }
    ],
    flow:
      "Fundamentals → REST → Middleware → Architecture → Projects → Interview"
  },

  code: {
    title: "Basic Express Interview Example",
    description:
      "Understand the basic request-response flow.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully"
  });
});

app.listen(5000);`,
    output:
      `{ "message": "Users fetched successfully" }`,
    explanation:
      "An Express GET route receives a request and sends a JSON response with an HTTP status code."
  },

  interview: {
    question: "What is Express.js?",
    answer:
      "Express.js is a web application framework for Node.js that provides features for building HTTP servers, routes, middleware, and APIs.",
    tip:
      "Mention that Express simplifies server and API development on Node.js."
  },

  tricky: {
    question: "Is Express.js a programming language?",
    answer:
      "No. Express.js is a web framework that runs on Node.js."
  },

  practice: {
    question:
      "Explain the difference between Node.js and Express.js in your own words.",
    hint:
      "Node.js provides the runtime. Express provides a framework for building web applications and APIs."
  },

  challenge: {
    title: "Express Interview Practice",
    description:
      "Prepare concise and practical answers for Express.js interviews.",
    task:
      "Explain Express, middleware, routing, REST APIs, controllers, error handling, authentication, and MongoDB integration using examples."
  }
},

"rest-api-interview": {
  concept: {
    heading: "REST API Interview Questions",
    paragraphs: [
      "REST API interviews commonly test HTTP methods, resources, endpoints, status codes, CRUD operations, stateless communication, and API design.",
      "You should be able to explain how frontend applications communicate with backend APIs.",
      "Practical API examples are useful because they demonstrate understanding beyond memorized definitions."
    ],
    remember:
      "REST APIs expose resources through HTTP methods and meaningful endpoints."
  },

  analogy: {
    heading: "Think of REST API Like a Service Counter",
    items: [
      {
        icon: "📋",
        title: "Resource",
        text: "The resource is the thing being managed."
      },
      {
        icon: "📨",
        title: "Request",
        text: "The client sends an HTTP request."
      },
      {
        icon: "⚙️",
        title: "Server",
        text: "The server processes the request."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server returns a status and data."
      }
    ]
  },

  visual: {
    heading: "REST API Interview Flow",
    description:
      "Understand the complete request-response cycle.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client Request",
        text: "Frontend or Postman sends an HTTP request."
      },
      {
        icon: "2️⃣",
        title: "Endpoint",
        text: "The server identifies the requested resource."
      },
      {
        icon: "3️⃣",
        title: "Processing",
        text: "Controller and business logic process the request."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The API returns status and JSON data."
      }
    ],
    flow:
      "Client → HTTP Request → Endpoint → Server Logic → HTTP Response"
  },

  code: {
    title: "REST API Example",
    description:
      "A simple REST API endpoint.",
    language: "javascript",
    code: `app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(
    req.params.id
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json({
    data: product
  });
});`,
    output:
      "200 → Product found\n404 → Product not found",
    explanation:
      "The endpoint uses a resource-based URL, route parameter, HTTP status code, and JSON response."
  },

  interview: {
    question: "What is a REST API?",
    answer:
      "A REST API is an HTTP-based interface that exposes resources through endpoints and standard HTTP methods.",
    tip:
      "Use a practical resource such as /api/products in your answer."
  },

  tricky: {
    question: "What is the difference between PUT and PATCH?",
    answer:
      "PUT is generally used to replace a resource representation, while PATCH is used for partial updates."
  },

  practice: {
    question:
      "Explain GET, POST, PUT, PATCH, and DELETE with a product API.",
    hint:
      "Connect each method with CRUD operations."
  },

  challenge: {
    title: "REST API Interview Drill",
    description:
      "Practice explaining REST concepts using real API examples.",
    task:
      "Prepare answers for REST, HTTP methods, status codes, endpoints, CRUD, statelessness, authentication, and API versioning."
  }
},

"middleware-interview": {
  concept: {
    heading: "Middleware Interview Questions",
    paragraphs: [
      "Middleware is one of the most important Express.js concepts for interviews.",
      "Middleware functions can access the request and response objects and control whether the request continues.",
      "Common uses include authentication, logging, validation, CORS, parsing request data, and error handling."
    ],
    remember:
      "Middleware runs between the incoming request and the final response."
  },

  analogy: {
    heading: "Think of Middleware Like Security Checkpoints",
    items: [
      {
        icon: "🚶",
        title: "Request",
        text: "A request enters the application."
      },
      {
        icon: "🔍",
        title: "Check",
        text: "Middleware checks or modifies the request."
      },
      {
        icon: "➡️",
        title: "next()",
        text: "Middleware can allow the request to continue."
      },
      {
        icon: "🚫",
        title: "Stop",
        text: "Middleware can also send a response and stop processing."
      }
    ]
  },

  visual: {
    heading: "Middleware Interview Flow",
    description:
      "Middleware can perform tasks before a route handler executes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Request",
        text: "Client sends a request."
      },
      {
        icon: "2️⃣",
        title: "Middleware",
        text: "Middleware performs its task."
      },
      {
        icon: "3️⃣",
        title: "next()",
        text: "The request continues when appropriate."
      },
      {
        icon: "4️⃣",
        title: "Route",
        text: "The final route handler executes."
      }
    ],
    flow:
      "Request → Middleware → next() → Route Handler → Response"
  },

  code: {
    title: "Authentication Middleware",
    description:
      "A common middleware interview example.",
    language: "javascript",
    code: `function checkAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  next();
}

app.get(
  "/dashboard",
  checkAuth,
  (req, res) => {
    res.json({
      message: "Dashboard"
    });
  }
);`,
    output:
      "Token present → Dashboard accessible\nNo token → 401 Authentication required",
    explanation:
      "The middleware checks the request before allowing it to reach the dashboard route."
  },

  interview: {
    question: "What is middleware in Express.js?",
    answer:
      "Middleware is a function that has access to the request, response, and next function and can perform processing before the request reaches the final handler.",
    tip:
      "Mention req, res, and next."
  },

  tricky: {
    question: "What happens if middleware neither sends a response nor calls next()?",
    answer:
      "The request can remain unfinished because Express has not been told to continue and no response has been sent."
  },

  practice: {
    question:
      "Create middleware that logs the HTTP method and request URL.",
    hint:
      "Use req.method and req.url, then call next()."
  },

  challenge: {
    title: "Middleware Interview Practice",
    description:
      "Prepare practical middleware explanations.",
    task:
      "Create examples for logger middleware, authentication middleware, validation middleware, and error-handling middleware."
  }
},

"express-coding-questions": {
  concept: {
    heading: "Express Coding Questions",
    paragraphs: [
      "Express coding interviews often require building small routes, middleware, REST APIs, validation logic, or authentication flows.",
      "The goal is usually to demonstrate practical understanding rather than write a large application.",
      "A good approach is to first understand the request, identify the required middleware or route, and then implement the smallest clear solution."
    ],
    remember:
      "Understand the requirement first, then implement the route, middleware, and response."
  },

  analogy: {
    heading: "Think of Coding Questions Like Small API Tasks",
    items: [
      {
        icon: "❓",
        title: "Understand",
        text: "Read and break down the requirement."
      },
      {
        icon: "🛣️",
        title: "Route",
        text: "Choose the appropriate HTTP method and endpoint."
      },
      {
        icon: "⚙️",
        title: "Implement",
        text: "Write the required Express logic."
      },
      {
        icon: "🧪",
        title: "Test",
        text: "Test the endpoint with Postman or another client."
      }
    ]
  },

  visual: {
    heading: "Express Coding Question Flow",
    description:
      "Use a structured approach when solving Express coding problems.",
    steps: [
      {
        icon: "1️⃣",
        title: "Understand Requirement",
        text: "Identify inputs, processing, and expected output."
      },
      {
        icon: "2️⃣",
        title: "Create Route",
        text: "Choose the HTTP method and endpoint."
      },
      {
        icon: "3️⃣",
        title: "Write Logic",
        text: "Implement the required functionality."
      },
      {
        icon: "4️⃣",
        title: "Test",
        text: "Verify successful and error cases."
      }
    ],
    flow:
      "Requirement → Route → Logic → Validation → Test → Response"
  },

  code: {
    title: "Coding Question: Create a GET API",
    description:
      "Create an endpoint that returns a list of products.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Keyboard",
    price: 1500
  }
];

app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    data: products
  });
});

app.listen(5000);`,
    output: `{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 50000
    }
  ]
}`,
    explanation:
      "The endpoint returns a JSON response containing the product collection and an HTTP 200 status."
  },

  interview: {
    question: "How would you approach an Express coding question?",
    answer:
      "First understand the requirement, identify the route and input, implement the required logic, handle errors, and test the endpoint.",
    tip:
      "Explain your approach while coding instead of silently writing code."
  },

  tricky: {
    question: "Why should you test error cases as well as successful cases?",
    answer:
      "Real API requests can contain invalid input, missing resources, or server failures, so robust code should handle both successful and unsuccessful scenarios."
  },

  practice: {
    question:
      "Create a POST /api/products endpoint that validates name and price before creating a product.",
    hint:
      "Return status 400 when required information is missing and 201 after successful creation."
  },

  challenge: {
    title: "Express Coding Challenge",
    description:
      "Build a small REST API under interview conditions.",
    task:
      "Create CRUD endpoints for products, add validation middleware, handle errors, and return appropriate HTTP status codes."
  }
},
};