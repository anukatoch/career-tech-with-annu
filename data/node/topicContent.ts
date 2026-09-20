export type NodeTopicContent = {
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

export const nodeTopicContent: Record<string, NodeTopicContent> = {
  "what-is-nodejs": {
    concept: {
      heading: "What Is Node.js?",
      paragraphs: [
        "Node.js is a JavaScript runtime environment that allows JavaScript code to run outside a web browser.",
        "Normally, JavaScript runs inside a browser and is used to make web pages interactive. Node.js allows developers to use JavaScript for backend and server-side development.",
        "Node.js is built on Chrome's V8 JavaScript engine. The V8 engine executes JavaScript code efficiently and allows Node.js to run JavaScript directly on a computer or server.",
        "Node.js is commonly used to build web servers, REST APIs, backend applications, real-time applications, command-line tools and other server-side systems.",
        "Node.js is not a programming language and it is not a framework. JavaScript is the programming language, Node.js is the runtime environment, and Express.js is a popular framework used with Node.js."
      ],
      remember:
        "Remember: JavaScript is the language, Node.js is the runtime environment, and Express.js is a framework commonly used with Node.js."
    },

    analogy: {
      heading: "Think of Node.js Like a Restaurant Kitchen",
      items: [
        {
          icon: "👨‍🍳",
          title: "JavaScript = Instructions",
          text: "JavaScript provides the instructions that tell the application what to do."
        },
        {
          icon: "⚙️",
          title: "Node.js = Working Environment",
          text: "Node.js provides the environment where JavaScript can execute outside the browser."
        },
        {
          icon: "📨",
          title: "Request = Customer Order",
          text: "A client request is like a customer placing an order. The server receives the request and processes it."
        },
        {
          icon: "📤",
          title: "Response = Completed Order",
          text: "After processing the request, Node.js sends the required result back to the client."
        }
      ]
    },

    visual: {
      heading: "How Node.js Fits Into a Web Application",
      description:
        "A typical web application can use JavaScript on the frontend and Node.js on the backend.",
      steps: [
        {
          icon: "🖥️",
          title: "1. Client",
          text: "The browser or application sends a request."
        },
        {
          icon: "📨",
          title: "2. Request",
          text: "The request reaches the Node.js server."
        },
        {
          icon: "⚙️",
          title: "3. Node.js",
          text: "Node.js receives and processes the request."
        },
        {
          icon: "🗄️",
          title: "4. Database / API",
          text: "Node.js can communicate with a database or another service."
        },
        {
          icon: "📤",
          title: "5. Response",
          text: "The processed result is sent back to the client."
        }
      ],
      flow:
        "Browser / App → Request → Node.js Server → Database / API → Node.js Server → Response"
    },

    code: {
      title: "Your First Node.js Program",
      description:
        "Run JavaScript directly from the terminal using Node.js.",
      language: "javascript",
      code: `console.log("Hello from Node.js!");

const course = "Backend Development";

console.log("Learning:", course);`,
      output: `Hello from Node.js!
Learning: Backend Development`,
      explanation:
        "Save this code in a file named app.js. Open the terminal in the same folder and run node app.js. The console.log() statements will display their output directly in the terminal."
    },

    interview: {
      question: "What is Node.js?",
      answer:
        "Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows JavaScript to run outside the browser and is commonly used for backend applications, APIs and servers.",
      tip:
        "Interview Tip: Do not describe Node.js as a programming language or framework. Describe it as a JavaScript runtime environment."
    },

    tricky: {
      question: "Is Node.js a programming language?",
      answer:
        "No. Node.js is not a programming language. JavaScript is the programming language, while Node.js provides the runtime environment for executing JavaScript outside the browser."
    },

    practice: {
      question:
        "Create a Node.js file that prints an application name, version number and a short message in the terminal.",
      hint:
        "Use three console.log() statements and run the file using node app.js."
    },

    challenge: {
      title: "Mini Challenge — Create Your First Node.js Script",
      description:
        "Practice running JavaScript outside the browser.",
      task:
        "Create a file named app.js. Print an application name, a version number and a message saying that you are learning backend development with Node.js. Run the file using node app.js."
    }
  },
  "why-nodejs": {
  concept: {
    heading: "Why Use Node.js?",
    paragraphs: [
      "Node.js allows developers to use JavaScript for backend development. This means the same programming language can be used for both frontend and backend parts of a web application.",
      "Node.js is designed around an event-driven, non-blocking approach. This allows a server to handle many operations efficiently without waiting for every operation to finish before handling other work.",
      "Node.js is especially useful for applications that handle many network requests, APIs, real-time communication and I/O operations.",
      "Another important advantage is the npm ecosystem. Developers can install thousands of reusable packages instead of building every feature from scratch.",
      "Node.js is commonly used with frameworks such as Express.js to build structured backend applications and REST APIs."
    ],
    remember:
      "Remember: Node.js is useful when you want JavaScript on the server and need an efficient environment for APIs, web servers and I/O-heavy applications."
  },

  analogy: {
    heading: "Think of Node.js Like a Smart Reception Desk",
    items: [
      {
        icon: "🧑‍💼",
        title: "Reception Desk",
        text: "The Node.js server receives requests from different users."
      },
      {
        icon: "📋",
        title: "Collect the Request",
        text: "The server understands what each client is asking for."
      },
      {
        icon: "⚙️",
        title: "Process the Work",
        text: "Node.js starts the required operation such as reading data or calling a database."
      },
      {
        icon: "📤",
        title: "Send the Result",
        text: "After processing, the server sends the required response back to the client."
      }
    ]
  },

  visual: {
    heading: "Why Node.js Is Useful",
    description:
      "Node.js combines JavaScript with server-side capabilities and an extensive package ecosystem.",
    steps: [
      {
        icon: "🟨",
        title: "JavaScript Everywhere",
        text: "Developers can use JavaScript on both the frontend and backend."
      },
      {
        icon: "⚡",
        title: "Non-Blocking Operations",
        text: "Node.js can continue handling other work while waiting for I/O operations."
      },
      {
        icon: "📦",
        title: "npm Ecosystem",
        text: "Reusable packages can be installed through npm."
      },
      {
        icon: "🌐",
        title: "Backend Development",
        text: "Node.js can create servers, APIs and backend applications."
      },
      {
        icon: "🔄",
        title: "Real-Time Applications",
        text: "Node.js can be used for applications involving frequent client-server communication."
      }
    ],
    flow:
      "JavaScript → Node.js → Server → API / Database → Response"
  },

  code: {
    title: "A Simple Node.js Example",
    description:
      "Node.js can execute JavaScript directly from the terminal.",
    language: "javascript",
    code: `const users = 10;

console.log("Total users:", users);
console.log("Backend is running with Node.js");`,
    output: `Total users: 10
Backend is running with Node.js`,
    explanation:
      "The code creates a variable and prints its value using console.log(). Unlike browser JavaScript, this code can be executed directly in a terminal using Node.js."
  },

  interview: {
    question: "Why is Node.js commonly used for backend development?",
    answer:
      "Node.js allows JavaScript to run outside the browser and provides an event-driven, non-blocking environment that is useful for servers, APIs and I/O-heavy applications.",
    tip:
      "Interview Tip: Mention JavaScript on the server, event-driven architecture, non-blocking I/O and the npm ecosystem."
  },

  tricky: {
    question: "Does Node.js make every operation asynchronous?",
    answer:
      "No. Node.js supports asynchronous programming, but not every operation is automatically asynchronous. Some operations are synchronous, while many I/O APIs provide asynchronous versions."
  },

  practice: {
    question:
      "Create a Node.js program that stores the number of products and prints a message showing how many products are available.",
    hint:
      "Create a variable such as const products = 25 and display it using console.log()."
  },

  challenge: {
    title: "Mini Challenge — Build a Small Node.js Information Program",
    description:
      "Practice using JavaScript code in the Node.js runtime.",
    task:
      "Create a Node.js program that stores an application name, number of users and application status. Print all three values in the terminal."
  }
},

"nodejs-features": {
  concept: {
    heading: "Node.js Features",
    paragraphs: [
      "Node.js provides several features that make it suitable for backend and server-side development.",
      "One important feature is its event-driven architecture. Node.js can respond to events such as incoming requests, completed file operations or received data.",
      "Node.js uses non-blocking I/O for many operations. Instead of waiting for an I/O operation to finish, the application can continue handling other work.",
      "Node.js also provides access to a large ecosystem of packages through npm. These packages can add functionality such as authentication, database access, validation and API development.",
      "Node.js is cross-platform, which means Node.js applications can run on operating systems such as Windows, macOS and Linux."
    ],
    remember:
      "Remember: Important Node.js features include event-driven programming, non-blocking I/O, npm, cross-platform support and server-side JavaScript."
  },

  analogy: {
    heading: "Think of Node.js Like a Multi-Tasking Office",
    items: [
      {
        icon: "📨",
        title: "Incoming Requests",
        text: "Different customers can send different requests to the office."
      },
      {
        icon: "⚡",
        title: "Efficient Handling",
        text: "The office can keep processing other work while waiting for a response from another department."
      },
      {
        icon: "📦",
        title: "Reusable Tools",
        text: "npm packages are like ready-made tools that can be added when needed."
      },
      {
        icon: "💻",
        title: "Works on Different Systems",
        text: "Node.js applications can run on multiple operating systems."
      }
    ]
  },

  visual: {
    heading: "Major Features of Node.js",
    description:
      "These features explain why Node.js is widely used for backend development.",
    steps: [
      {
        icon: "⚡",
        title: "Event-Driven",
        text: "Applications can respond to events such as requests and completed operations."
      },
      {
        icon: "🚫",
        title: "Non-Blocking I/O",
        text: "Many I/O operations can be handled without blocking the entire application."
      },
      {
        icon: "📦",
        title: "npm",
        text: "Developers can install and manage reusable packages."
      },
      {
        icon: "🌍",
        title: "Cross-Platform",
        text: "Node.js applications can run across major desktop and server operating systems."
      },
      {
        icon: "🟨",
        title: "JavaScript Runtime",
        text: "JavaScript can execute outside a browser."
      }
    ],
    flow:
      "Request → Event → Node.js Processing → I/O Operation → Response"
  },

  code: {
    title: "Using an Event in Node.js",
    description:
      "Node.js provides an events module for working with custom events.",
    language: "javascript",
    code: `const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("Message event received");
});

emitter.emit("message");`,
    output: `Message event received`,
    explanation:
      "EventEmitter allows an application to create and listen for events. The on() method registers a listener, while emit() triggers the event."
  },

  interview: {
    question: "What are some important features of Node.js?",
    answer:
      "Important Node.js features include its event-driven architecture, non-blocking I/O, npm ecosystem, cross-platform support and the ability to execute JavaScript outside the browser.",
    tip:
      "Interview Tip: Give at least three features and explain what each feature means instead of only listing names."
  },

  tricky: {
    question: "Is non-blocking I/O the same as multi-threading?",
    answer:
      "No. Non-blocking I/O and multi-threading are different concepts. Node.js uses an event-driven architecture and asynchronous APIs to handle many operations efficiently, while some underlying work can use the system or thread pool."
  },

  practice: {
    question:
      "Create a Node.js program that registers a custom event and prints a message when the event is triggered.",
    hint:
      "Use the events module, create an EventEmitter and use on() and emit()."
  },

  challenge: {
    title: "Mini Challenge — Create a Custom Event",
    description:
      "Practice the event-driven nature of Node.js.",
    task:
      "Create a custom event named 'login'. Register a listener for it and trigger the event using emit(). Display a message when the login event occurs."
  }
},

"nodejs-vs-browser": {
  concept: {
    heading: "Node.js vs Browser JavaScript",
    paragraphs: [
      "JavaScript is the programming language used in both browser environments and Node.js. However, the available environment and APIs are different.",
      "Browser JavaScript runs inside a browser and has access to browser APIs such as the DOM, window and document.",
      "Node.js runs outside the browser and provides server-side APIs for tasks such as working with files, creating servers, accessing operating-system information and networking.",
      "Node.js does not provide the browser DOM by default. Instead, it provides modules such as fs, path, http and os.",
      "The same JavaScript language can therefore be used in two different environments, but the available APIs depend on the runtime."
    ],
    remember:
      "Remember: JavaScript is the language; the browser and Node.js are different runtime environments with different APIs."
  },

  analogy: {
    heading: "Think of JavaScript as a Worker in Different Workplaces",
    items: [
      {
        icon: "👨‍💻",
        title: "Same Language",
        text: "The worker knows JavaScript in both environments."
      },
      {
        icon: "🌐",
        title: "Browser Workplace",
        text: "The browser provides DOM and web APIs for working with web pages."
      },
      {
        icon: "🖥️",
        title: "Node.js Workplace",
        text: "Node.js provides server-side APIs and access to the operating system."
      },
      {
        icon: "🧰",
        title: "Different Tools",
        text: "Each environment provides APIs designed for its specific purpose."
      }
    ]
  },

  visual: {
    heading: "Browser vs Node.js",
    description:
      "The language is JavaScript, but the runtime environment changes the APIs available to your code.",
    steps: [
      {
        icon: "🌐",
        title: "Browser",
        text: "JavaScript runs inside a browser."
      },
      {
        icon: "📄",
        title: "DOM",
        text: "Browser JavaScript can work with document elements."
      },
      {
        icon: "🖥️",
        title: "Node.js",
        text: "JavaScript runs outside the browser."
      },
      {
        icon: "📁",
        title: "Server APIs",
        text: "Node.js provides modules for files, networking and operating-system tasks."
      }
    ],
    flow:
      "JavaScript → Browser → DOM / Web APIs"
  },

  code: {
    title: "Browser API vs Node.js API",
    description:
      "The available global objects depend on the runtime environment.",
    language: "javascript",
    code: `// Browser
console.log(window.location.href);

// Node.js
console.log(process.version);`,
    output: `Browser → Current page URL
Node.js → Current Node.js version`,
    explanation:
      "window is a browser-specific global object. Node.js provides process as a global object containing information about the current Node.js process."
  },

  interview: {
    question: "What is the difference between Node.js and browser JavaScript?",
    answer:
      "Both use JavaScript, but they run in different environments. Browser JavaScript has access to browser APIs such as the DOM, while Node.js provides server-side APIs for files, networking, processes and other backend tasks.",
    tip:
      "Interview Tip: Explain the difference in terms of runtime environment and available APIs."
  },

  tricky: {
    question: "Can Node.js directly access the browser DOM?",
    answer:
      "No. Node.js does not provide the browser DOM by default. APIs such as document and window are provided by browsers."
  },

  practice: {
    question:
      "Write down five APIs or global objects commonly associated with the browser and five commonly used in Node.js.",
    hint:
      "Browser examples include document and window. Node.js examples include process and modules such as fs and path."
  },

  challenge: {
    title: "Mini Challenge — Identify the Runtime",
    description:
      "Practice identifying whether JavaScript code belongs to the browser or Node.js environment.",
    task:
      "Create two small examples. One should use a browser API such as document, and the other should use a Node.js feature such as process or fs. Explain why each example belongs to its environment."
  }
},

"where-nodejs-used": {
  concept: {
    heading: "Where Is Node.js Used?",
    paragraphs: [
      "Node.js is used in many types of backend and server-side applications.",
      "One common use is REST API development. A Node.js server can receive HTTP requests, process data and return JSON responses.",
      "Node.js is also used for real-time applications such as chat systems, notifications and collaborative applications where clients frequently exchange data with a server.",
      "Node.js can be used for command-line tools and developer utilities because JavaScript can run directly from the terminal.",
      "Node.js is also commonly used as the backend layer of full-stack applications, often together with Express.js and databases such as MongoDB."
    ],
    remember:
      "Remember: Node.js is commonly used for APIs, web servers, real-time applications, command-line tools and full-stack backends."
  },

  analogy: {
    heading: "Think of Node.js as a Backend Toolkit",
    items: [
      {
        icon: "🌐",
        title: "Web APIs",
        text: "Node.js can provide data to frontend applications through APIs."
      },
      {
        icon: "💬",
        title: "Real-Time Apps",
        text: "Node.js can support applications where clients exchange data frequently."
      },
      {
        icon: "🛠️",
        title: "Developer Tools",
        text: "Node.js can be used to build command-line and automation tools."
      },
      {
        icon: "🛒",
        title: "Full-Stack Applications",
        text: "Node.js can provide the backend for applications such as e-commerce systems."
      }
    ]
  },

  visual: {
    heading: "Common Node.js Use Cases",
    description:
      "Node.js can act as the backend layer between a client application and services such as databases.",
    steps: [
      {
        icon: "🌐",
        title: "REST APIs",
        text: "Build APIs that provide data to web and mobile applications."
      },
      {
        icon: "💬",
        title: "Real-Time Applications",
        text: "Build chat, notification and live communication systems."
      },
      {
        icon: "🛠️",
        title: "CLI Tools",
        text: "Create tools that run directly from the command line."
      },
      {
        icon: "🛒",
        title: "Backend Systems",
        text: "Create server-side logic for full-stack applications."
      },
      {
        icon: "🔗",
        title: "Database Applications",
        text: "Connect backend applications with databases and external services."
      }
    ],
    flow:
      "Client → Node.js Backend → Business Logic → Database / External API → Response"
  },

  code: {
    title: "Simple JSON Response",
    description:
      "A common backend task is returning structured data from a Node.js application.",
    language: "javascript",
    code: `const product = {
  id: 101,
  name: "Laptop",
  price: 55000
};

console.log(JSON.stringify(product));`,
    output:
      `{"id":101,"name":"Laptop","price":55000}`,
    explanation:
      "The object contains structured application data. JSON.stringify() converts the JavaScript object into a JSON string, a format commonly used when sending data through APIs."
  },

  interview: {
    question: "Where is Node.js commonly used?",
    answer:
      "Node.js is commonly used for REST APIs, web servers, real-time applications, command-line tools, backend systems and full-stack web applications.",
    tip:
      "Interview Tip: Give practical examples such as REST APIs, chat applications and backend services."
  },

  tricky: {
    question: "Is Node.js only used to create web servers?",
    answer:
      "No. Node.js can also be used for APIs, command-line applications, automation tools, real-time systems and other server-side programs."
  },

  practice: {
    question:
      "List three applications you could build using Node.js and explain what role Node.js would play in each.",
    hint:
      "Think about a REST API, a chat application and a command-line tool."
  },

  challenge: {
    title: "Mini Challenge — Plan a Node.js Backend",
    description:
      "Practice identifying where Node.js fits in a real application.",
    task:
      "Choose a simple application such as a task manager. Identify the client, Node.js backend, API endpoints and database that could be used."
  }
},

"how-nodejs-works": {
  concept: {
    heading: "How Node.js Works",
    paragraphs: [
      "Node.js uses an event-driven architecture to handle application operations.",
      "When a client sends a request, Node.js receives the request and starts processing it.",
      "For operations such as reading files or communicating with a database, Node.js can use asynchronous APIs so the application does not have to wait in a blocking way for the operation to complete.",
      "When the operation finishes, its result is handled through the appropriate callback, promise or async/await flow.",
      "The event loop plays an important role in coordinating asynchronous operations and allowing Node.js to continue processing other work."
    ],
    remember:
      "Remember: Node.js uses an event-driven architecture and an event loop to coordinate asynchronous operations."
  },

  analogy: {
    heading: "Think of Node.js Like a Restaurant Manager",
    items: [
      {
        icon: "🧑‍💼",
        title: "Manager",
        text: "The Node.js process coordinates incoming work."
      },
      {
        icon: "📝",
        title: "Order",
        text: "A client request represents a task that needs to be handled."
      },
      {
        icon: "👨‍🍳",
        title: "Kitchen Work",
        text: "The required operation is performed, such as reading data or querying a service."
      },
      {
        icon: "📤",
        title: "Completed Order",
        text: "When the work is complete, the result is returned to the customer."
      }
    ]
  },

  visual: {
    heading: "Basic Node.js Request Flow",
    description:
      "A simplified view of how a request moves through a Node.js application.",
    steps: [
      {
        icon: "🌐",
        title: "Client Sends Request",
        text: "A browser, mobile application or another client sends a request."
      },
      {
        icon: "📨",
        title: "Node.js Receives It",
        text: "The Node.js application receives and starts handling the request."
      },
      {
        icon: "⚙️",
        title: "Operation Starts",
        text: "The application may perform file, database or network operations."
      },
      {
        icon: "🔄",
        title: "Event Loop Continues",
        text: "Node.js can continue processing other available work while asynchronous operations are pending."
      },
      {
        icon: "📤",
        title: "Response",
        text: "When the required result is ready, the application sends the response."
      }
    ],
    flow:
      "Request → Node.js → Async Operation → Event Loop → Result → Response"
  },

  code: {
    title: "Asynchronous Operation Example",
    description:
      "The following example shows how Node.js can start an asynchronous timer and continue executing other code.",
    language: "javascript",
    code: `console.log("Start");

setTimeout(() => {
  console.log("Async operation completed");
}, 2000);

console.log("End");`,
    output: `Start
End
Async operation completed`,
    explanation:
      "setTimeout() schedules the callback to run later. Node.js does not stop at that line and wait for two seconds before executing the next console.log(). The End message is therefore printed before the timer callback."
  },

  interview: {
    question: "What is the event loop in Node.js?",
    answer:
      "The event loop is a mechanism that helps Node.js coordinate asynchronous operations and process callbacks when their related operations are ready to complete.",
    tip:
      "Interview Tip: Explain the event loop together with asynchronous, non-blocking operations rather than treating it as a separate unrelated feature."
  },

  tricky: {
    question: "Does the event loop execute all Node.js code at the same time?",
    answer:
      "No. JavaScript execution in Node.js is primarily handled on a single main JavaScript thread. The event loop coordinates when callbacks and other work can be processed."
  },

  practice: {
    question:
      "Predict the output order of a program containing console.log(), setTimeout() and another console.log().",
    hint:
      "The synchronous console.log() statements execute before the timer callback."
  },

  challenge: {
    title: "Mini Challenge — Understand the Event Loop",
    description:
      "Practice predicting asynchronous execution order.",
    task:
      "Create a Node.js program with three messages: one before setTimeout(), one inside setTimeout() and one after setTimeout(). Predict the output order before running the program."
  }
},
"nodejs-installation": {
  concept: {
    heading: "Node.js Installation",
    paragraphs: [
      "Before writing backend applications with Node.js, you need to install the Node.js runtime on your computer.",
      "The official Node.js installation includes Node.js and npm. Node.js is used to execute JavaScript, while npm is used to install and manage packages.",
      "For most learners and development projects, the Node.js LTS release is a suitable choice because it is intended for long-term stability.",
      "After installation, you can verify that Node.js is available by opening a terminal and running the node --version command.",
      "You can also check npm using npm --version."
    ],
    remember:
      "Remember: Install Node.js first, then verify both Node.js and npm from the terminal."
  },

  analogy: {
    heading: "Think of Node.js Installation Like Setting Up a Workshop",
    items: [
      {
        icon: "🧰",
        title: "Install the Tools",
        text: "Installing Node.js prepares your computer for server-side JavaScript development."
      },
      {
        icon: "⚙️",
        title: "Node.js Runtime",
        text: "The runtime allows JavaScript files to execute outside the browser."
      },
      {
        icon: "📦",
        title: "npm",
        text: "npm helps install and manage reusable packages for your projects."
      },
      {
        icon: "✅",
        title: "Verify Setup",
        text: "Version commands confirm that the installation is working correctly."
      }
    ]
  },

  visual: {
    heading: "Node.js Installation Flow",
    description:
      "A simple setup process helps you confirm that your development environment is ready.",
    steps: [
      {
        icon: "🌐",
        title: "Download Node.js",
        text: "Download a suitable Node.js release from the official Node.js website."
      },
      {
        icon: "💻",
        title: "Install Node.js",
        text: "Run the installer and complete the installation steps."
      },
      {
        icon: "⌨️",
        title: "Open Terminal",
        text: "Open Command Prompt, PowerShell or another terminal."
      },
      {
        icon: "🔍",
        title: "Check Version",
        text: "Run node --version to verify that Node.js is available."
      },
      {
        icon: "📦",
        title: "Check npm",
        text: "Run npm --version to verify the package manager."
      }
    ],
    flow:
      "Download → Install → Open Terminal → Check Node → Check npm"
  },

  code: {
    title: "Verify Node.js Installation",
    description:
      "Use these commands in your terminal after installing Node.js.",
    language: "bash",
    code: `node --version
npm --version`,
    output:
      `v22.x.x
10.x.x`,
    explanation:
      "The exact version numbers depend on the Node.js and npm versions installed on your computer. If both commands return version numbers, the basic Node.js installation is available from your terminal."
  },

  interview: {
    question: "How do you verify that Node.js is installed?",
    answer:
      "Open a terminal and run node --version. You can also run npm --version to verify that npm is installed and available.",
    tip:
      "Interview Tip: Remember the two commands: node --version and npm --version."
  },

  tricky: {
    question: "Is npm the same thing as Node.js?",
    answer:
      "No. Node.js is the JavaScript runtime environment, while npm is a package manager commonly installed with Node.js and used to manage packages and project dependencies."
  },

  practice: {
    question:
      "Open your terminal and check the installed Node.js and npm versions.",
    hint:
      "Run node --version and npm --version."
  },

  challenge: {
    title: "Mini Challenge — Verify Your Environment",
    description:
      "Make sure your computer is ready for Node.js development.",
    task:
      "Run node --version and npm --version. Note the versions displayed by your terminal and confirm that both commands work."
  }
},

"check-node-version": {
  concept: {
    heading: "Check Node Version",
    paragraphs: [
      "Knowing your Node.js version is important when starting a project because different Node.js versions can support different features and package requirements.",
      "The node --version command displays the version of the Node.js runtime currently available in your terminal.",
      "You can also use the shorter -v option with the node command.",
      "npm --version displays the installed npm version.",
      "When troubleshooting installation or project problems, checking the Node.js version is often one of the first useful steps."
    ],
    remember:
      "Remember: Use node --version or node -v to check Node.js, and npm --version to check npm."
  },

  analogy: {
    heading: "Think of a Version Number Like a Product Model",
    items: [
      {
        icon: "🏷️",
        title: "Version Label",
        text: "A version number identifies the release of the software installed on your system."
      },
      {
        icon: "🔍",
        title: "Check Before Use",
        text: "Checking the version helps you know which runtime you are using."
      },
      {
        icon: "🛠️",
        title: "Troubleshooting",
        text: "Version information is useful when diagnosing compatibility problems."
      },
      {
        icon: "📋",
        title: "Project Requirements",
        text: "A project may specify a Node.js version that should be used."
      }
    ]
  },

  visual: {
    heading: "Checking Your Node.js Version",
    description:
      "The terminal provides a quick way to identify the installed runtime version.",
    steps: [
      {
        icon: "⌨️",
        title: "Open Terminal",
        text: "Open Command Prompt, PowerShell or your preferred terminal."
      },
      {
        icon: "▶️",
        title: "Run Command",
        text: "Type node --version and press Enter."
      },
      {
        icon: "🔢",
        title: "Read Version",
        text: "The terminal displays the installed Node.js version."
      },
      {
        icon: "📦",
        title: "Check npm",
        text: "Run npm --version to check the npm version."
      }
    ],
    flow:
      "Terminal → node --version → Node Version → npm --version → npm Version"
  },

  code: {
    title: "Node Version Commands",
    description:
      "You can use either the long or short form of the Node.js version command.",
    language: "bash",
    code: `node --version
node -v

npm --version`,
    output:
      `v22.x.x
v22.x.x
10.x.x`,
    explanation:
      "node --version and node -v perform the same basic task: displaying the installed Node.js version. npm --version displays the npm version."
  },

  interview: {
    question: "Which command is used to check the Node.js version?",
    answer:
      "The Node.js version can be checked using node --version or the shorter node -v command.",
    tip:
      "Interview Tip: Be comfortable using both node --version and node -v."
  },

  tricky: {
    question: "Will node -v show the npm version?",
    answer:
      "No. node -v shows the Node.js version. Use npm --version or npm -v to check the npm version."
  },

  practice: {
    question:
      "Check your Node.js version using both node --version and node -v.",
    hint:
      "Both commands should display the same Node.js version."
  },

  challenge: {
    title: "Mini Challenge — Compare Version Commands",
    description:
      "Practice the basic Node.js and npm version commands.",
    task:
      "Run node --version, node -v, npm --version and npm -v. Compare the results and identify which commands belong to Node.js and which belong to npm."
  }
},

"first-nodejs-program": {
  concept: {
    heading: "First Node.js Program",
    paragraphs: [
      "A Node.js program can be a normal JavaScript file with a .js extension.",
      "Unlike browser JavaScript, the file can be executed directly from the terminal using the node command.",
      "The console.log() function can be used to display information in the terminal.",
      "A simple first program is useful because it confirms that Node.js can execute JavaScript files correctly.",
      "After creating a JavaScript file, navigate to its folder in the terminal and run it using node followed by the filename."
    ],
    remember:
      "Remember: Create a .js file, write JavaScript code, then run it using node filename.js."
  },

  analogy: {
    heading: "Think of a Node.js File Like a Recipe",
    items: [
      {
        icon: "📝",
        title: "Write the Recipe",
        text: "The JavaScript file contains the instructions for the program."
      },
      {
        icon: "▶️",
        title: "Run the Recipe",
        text: "The node command tells the runtime to execute the JavaScript file."
      },
      {
        icon: "⚙️",
        title: "Node.js Executes",
        text: "Node.js reads and executes the JavaScript code."
      },
      {
        icon: "📺",
        title: "See the Result",
        text: "Output from console.log() appears in the terminal."
      }
    ]
  },

  visual: {
    heading: "Create Your First Node.js Program",
    description:
      "The basic workflow requires only a JavaScript file and the node command.",
    steps: [
      {
        icon: "📁",
        title: "Create Folder",
        text: "Create a folder for your Node.js practice."
      },
      {
        icon: "📄",
        title: "Create app.js",
        text: "Create a JavaScript file named app.js."
      },
      {
        icon: "✍️",
        title: "Write Code",
        text: "Add JavaScript code using console.log()."
      },
      {
        icon: "⌨️",
        title: "Open Terminal",
        text: "Open the terminal inside the project folder."
      },
      {
        icon: "▶️",
        title: "Run Program",
        text: "Execute the file using node app.js."
      }
    ],
    flow:
      "Create Folder → app.js → Write Code → Terminal → node app.js"
  },

  code: {
    title: "Hello Node.js",
    description:
      "This is a simple first Node.js program.",
    language: "javascript",
    code: `console.log("Hello Node.js!");

console.log("My first backend program");`,
    output:
      `Hello Node.js!
My first backend program`,
    explanation:
      "Save the code as app.js. Open a terminal in the same folder and run node app.js. Node.js executes the JavaScript file and displays the messages in the terminal."
  },

  interview: {
    question: "How do you run a JavaScript file using Node.js?",
    answer:
      "Use the node command followed by the JavaScript filename, for example: node app.js.",
    tip:
      "Interview Tip: Remember that the terminal command is node followed by the file name."
  },

  tricky: {
    question: "Do you need an HTML file to run a Node.js JavaScript file?",
    answer:
      "No. Node.js can execute a JavaScript file directly from the terminal. An HTML file is not required for a basic Node.js program."
  },

  practice: {
    question:
      "Create an app.js file and print three different messages using console.log().",
    hint:
      "Use three console.log() statements and run the file with node app.js."
  },

  challenge: {
    title: "Mini Challenge — Build Your First Script",
    description:
      "Create a small JavaScript program and execute it with Node.js.",
    task:
      "Create app.js and print an application name, a learning goal and a message confirming that the program is running with Node.js."
  }
},

"running-js-files": {
  concept: {
    heading: "Running JavaScript Files",
    paragraphs: [
      "Node.js allows JavaScript files to be executed directly from a terminal.",
      "The most common command is node followed by the JavaScript filename.",
      "The terminal must be opened in the directory containing the file, or you must provide the correct file path.",
      "If the filename is app.js, the command is node app.js.",
      "When the program finishes, the output generated by console.log() and other operations appears in the terminal."
    ],
    remember:
      "Remember: Use node filename.js to execute a JavaScript file with Node.js."
  },

  analogy: {
    heading: "Think of the Terminal Like a Remote Control",
    items: [
      {
        icon: "📄",
        title: "JavaScript File",
        text: "The file contains the program you want Node.js to execute."
      },
      {
        icon: "⌨️",
        title: "Command",
        text: "The terminal command tells Node.js which file should be executed."
      },
      {
        icon: "⚙️",
        title: "Execution",
        text: "Node.js loads and runs the JavaScript code."
      },
      {
        icon: "📤",
        title: "Output",
        text: "The program displays its result in the terminal."
      }
    ]
  },

  visual: {
    heading: "How a JavaScript File Runs",
    description:
      "The node command connects your JavaScript file with the Node.js runtime.",
    steps: [
      {
        icon: "📄",
        title: "Create File",
        text: "Create a JavaScript file such as app.js."
      },
      {
        icon: "📂",
        title: "Open Folder",
        text: "Open the terminal in the folder containing the file."
      },
      {
        icon: "⌨️",
        title: "Enter Command",
        text: "Run node app.js."
      },
      {
        icon: "⚙️",
        title: "Node Executes",
        text: "Node.js loads and executes the JavaScript."
      },
      {
        icon: "📤",
        title: "View Output",
        text: "The terminal displays the program output."
      }
    ],
    flow:
      "app.js → Terminal → node app.js → Node.js Runtime → Output"
  },

  code: {
    title: "Run a JavaScript File",
    description:
      "Create a JavaScript file and execute it from the terminal.",
    language: "javascript",
    code: `// app.js

const message = "Node.js is running";

console.log(message);`,
    output:
      `Node.js is running`,
    explanation:
      "Save the code as app.js. Open the terminal in the same directory and run node app.js. Node.js executes the file and prints the value of message."
  },

  interview: {
    question: "What command is used to execute app.js?",
    answer:
      "The command node app.js executes the JavaScript file named app.js using Node.js.",
    tip:
      "Interview Tip: The current terminal directory matters when you run a file using a relative filename."
  },

  tricky: {
    question: "What happens if the terminal is not opened in the file's folder?",
    answer:
      "If you use only the filename and the terminal is in another directory, Node.js may not find the file. You can change to the correct directory or provide the appropriate file path."
  },

  practice: {
    question:
      "Create two JavaScript files and run both from the terminal.",
    hint:
      "For example, create app.js and test.js, then use node app.js and node test.js."
  },

  challenge: {
    title: "Mini Challenge — Run Multiple Scripts",
    description:
      "Practice working with more than one JavaScript file.",
    task:
      "Create two files named app.js and info.js. Put different console messages in each file and execute both files separately from the terminal."
  }
},

"node-repl": {
  concept: {
    heading: "Node REPL",
    paragraphs: [
      "REPL stands for Read-Eval-Print Loop. Node.js provides a built-in interactive REPL that allows you to type JavaScript directly into the terminal.",
      "The REPL reads the expression you enter, evaluates it, prints the result and waits for the next expression.",
      "It is useful for quickly testing JavaScript expressions, methods and small pieces of code without creating a file.",
      "You can start the Node.js REPL by typing node in the terminal without a filename.",
      "The REPL is useful for learning and experimenting, while larger programs are normally written in JavaScript files."
    ],
    remember:
      "Remember: Run node without a filename to enter the Node.js REPL."
  },

  analogy: {
    heading: "Think of REPL Like a Scratch Pad",
    items: [
      {
        icon: "✍️",
        title: "Write",
        text: "Type a JavaScript expression directly into the terminal."
      },
      {
        icon: "⚙️",
        title: "Evaluate",
        text: "Node.js evaluates the expression immediately."
      },
      {
        icon: "📤",
        title: "Print",
        text: "The result is displayed immediately."
      },
      {
        icon: "🔁",
        title: "Repeat",
        text: "You can enter another expression and continue experimenting."
      }
    ]
  },

  visual: {
    heading: "REPL Working Flow",
    description:
      "The Node.js REPL provides an interactive JavaScript environment in the terminal.",
    steps: [
      {
        icon: "⌨️",
        title: "Start REPL",
        text: "Type node in the terminal and press Enter."
      },
      {
        icon: "✍️",
        title: "Enter Expression",
        text: "Type a JavaScript expression."
      },
      {
        icon: "⚙️",
        title: "Evaluate",
        text: "Node.js evaluates the expression."
      },
      {
        icon: "📤",
        title: "Print Result",
        text: "The result appears immediately."
      },
      {
        icon: "🔁",
        title: "Continue",
        text: "Enter another expression and continue testing."
      }
    ],
    flow:
      "node → REPL → JavaScript Expression → Evaluate → Result"
  },

  code: {
    title: "Using the Node.js REPL",
    description:
      "Start the REPL and test simple JavaScript expressions.",
    language: "bash",
    code: `node

> 10 + 20
30

> "Node".toUpperCase()
'NODE'

> const price = 500
undefined

> price * 2
1000`,
    output:
      `30
'NODE'
undefined
1000`,
    explanation:
      "The REPL evaluates each expression immediately. A variable declaration may display undefined because the declaration itself does not produce a value, but the variable can then be used in later expressions."
  },

  interview: {
    question: "What does REPL stand for in Node.js?",
    answer:
      "REPL stands for Read-Eval-Print Loop. It is an interactive environment where Node.js reads JavaScript input, evaluates it, prints the result and waits for more input.",
    tip:
      "Interview Tip: Remember the four words: Read, Eval, Print and Loop."
  },

  tricky: {
    question: "Do you need to create a .js file to use the Node.js REPL?",
    answer:
      "No. You can start the REPL by typing node in the terminal without specifying a JavaScript file."
  },

  practice: {
    question:
      "Open the Node.js REPL and test arithmetic operations, string methods and variables.",
    hint:
      "Start by typing node, then try expressions such as 25 + 15 and 'hello'.toUpperCase()."
  },

  challenge: {
    title: "Mini Challenge — Explore the REPL",
    description:
      "Use the Node.js REPL as a quick JavaScript experimentation tool.",
    task:
      "Start the REPL and create two variables representing a product price and quantity. Calculate the total price directly inside the REPL."
  }
},

"node-project-setup": {
  concept: {
    heading: "Node.js Project Setup",
    paragraphs: [
      "A Node.js project normally starts with a dedicated project folder that contains the application's source code and configuration files.",
      "The npm init command can be used to create a package.json file for a project.",
      "The package.json file stores important project information such as the project name, version, scripts and dependencies.",
      "Keeping each project inside its own folder makes the source code, configuration and installed packages easier to manage.",
      "A clean project structure becomes especially important when the application grows into an Express API or full-stack backend."
    ],
    remember:
      "Remember: A basic Node.js project commonly starts with a project folder and a package.json file."
  },

  analogy: {
    heading: "Think of a Node.js Project Like a Project File Cabinet",
    items: [
      {
        icon: "📁",
        title: "Project Folder",
        text: "The folder keeps all files related to one application together."
      },
      {
        icon: "📄",
        title: "package.json",
        text: "This file stores project metadata, scripts and dependency information."
      },
      {
        icon: "💻",
        title: "Source Files",
        text: "JavaScript files contain the application's logic."
      },
      {
        icon: "📦",
        title: "Packages",
        text: "External packages can be installed when the project needs additional functionality."
      }
    ]
  },

  visual: {
    heading: "Basic Node.js Project Setup",
    description:
      "The following workflow creates a clean starting point for a Node.js project.",
    steps: [
      {
        icon: "📁",
        title: "Create Folder",
        text: "Create and open a folder for your project."
      },
      {
        icon: "⌨️",
        title: "Open Terminal",
        text: "Open the terminal inside the project folder."
      },
      {
        icon: "📦",
        title: "Initialize npm",
        text: "Run npm init -y to create a basic package.json file."
      },
      {
        icon: "📄",
        title: "Create Source File",
        text: "Create a JavaScript file such as app.js."
      },
      {
        icon: "▶️",
        title: "Run Application",
        text: "Execute the JavaScript file using Node.js."
      }
    ],
    flow:
      "Project Folder → npm init → package.json → app.js → node app.js"
  },

  code: {
    title: "Create a Basic Node.js Project",
    description:
      "These commands create a simple Node.js project from the terminal.",
    language: "bash",
    code: `mkdir my-node-app
cd my-node-app

npm init -y

node app.js`,
    output:
      `Wrote to .../my-node-app/package.json`,
    explanation:
      "mkdir creates a project folder, cd moves into that folder, and npm init -y creates package.json with default values. After creating app.js, node app.js can execute the application."
  },

  interview: {
    question: "Why is package.json important in a Node.js project?",
    answer:
      "package.json stores project metadata and configuration, including dependencies, scripts and other information needed to manage the Node.js project.",
    tip:
      "Interview Tip: Mention dependencies and scripts when explaining package.json."
  },

  tricky: {
    question: "Does npm init -y install Express.js?",
    answer:
      "No. npm init -y creates a package.json file with default values. It does not install Express.js or other external packages."
  },

  practice: {
    question:
      "Create a new Node.js project folder and initialize it using npm init -y.",
    hint:
      "Create a folder, move into it with cd and run npm init -y."
  },

  challenge: {
    title: "Mini Challenge — Create a Node.js Project",
    description:
      "Set up a clean project that can be expanded into a backend application.",
    task:
      "Create a folder named backend-practice, initialize npm inside it, create app.js and run the file using Node.js."
  }
},
"modules-introduction": {
  concept: {
    heading: "Modules Introduction",
    paragraphs: [
      "A module is a reusable unit of code that can be kept in a separate file and used by another part of an application.",
      "As a Node.js application grows, keeping all code in one file becomes difficult to maintain. Modules help divide an application into smaller and more manageable parts.",
      "Node.js provides built-in modules, and developers can also create their own custom modules or install external packages.",
      "A module can contain functions, variables, objects or classes that are exported so other files can use them.",
      "Node.js supports different module systems. CommonJS is traditionally associated with require() and module.exports, while modern Node.js also supports ECMAScript modules."
    ],
    remember:
      "Remember: Modules divide code into reusable files and help keep Node.js applications organized."
  },

  analogy: {
    heading: "Think of Modules Like Departments",
    items: [
      {
        icon: "🏢",
        title: "Main Application",
        text: "The main application is like a company that needs different departments."
      },
      {
        icon: "👨‍💻",
        title: "Separate Module",
        text: "Each module handles a specific responsibility."
      },
      {
        icon: "📤",
        title: "Export",
        text: "A module can make selected functionality available to other files."
      },
      {
        icon: "📥",
        title: "Import",
        text: "Another file can use the exported functionality."
      }
    ]
  },

  visual: {
    heading: "How Modules Work",
    description:
      "Modules allow a large application to be divided into smaller reusable parts.",
    steps: [
      {
        icon: "📄",
        title: "Create Module",
        text: "Create a JavaScript file containing related functionality."
      },
      {
        icon: "📤",
        title: "Export",
        text: "Expose the functions or values that other files need."
      },
      {
        icon: "📥",
        title: "Import",
        text: "Load the exported functionality into another file."
      },
      {
        icon: "⚙️",
        title: "Use",
        text: "Call the imported function or use the imported value."
      }
    ],
    flow:
      "Module File → Export → Import → Use in Another File"
  },

  code: {
    title: "Simple Custom Module",
    description:
      "A small CommonJS example shows the basic idea of exporting and importing functionality.",
    language: "javascript",
    code: `// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;


// app.js
const add = require("./math");

console.log(add(10, 20));`,
    output:
      `30`,
    explanation:
      "The math.js file exports the add function. The app.js file imports it using require() and then calls the function."
  },

  interview: {
    question: "What is a module in Node.js?",
    answer:
      "A module is a reusable unit of code that can be kept in a separate file and used by another part of a Node.js application.",
    tip:
      "Interview Tip: Explain that modules help organize, reuse and maintain application code."
  },

  tricky: {
    question: "Are Node.js modules only files containing functions?",
    answer:
      "No. A module can export functions, variables, objects, classes or other values."
  },

  practice: {
    question:
      "Create a custom module containing a function that multiplies two numbers and use it from another JavaScript file.",
    hint:
      "Export the function from one file and import it with require() in another file."
  },

  challenge: {
    title: "Mini Challenge — Create a Utility Module",
    description:
      "Practice dividing Node.js code into reusable modules.",
    task:
      "Create a utility module containing add(), subtract() and multiply() functions. Export them and use all three functions from app.js."
  }
},

"commonjs-modules": {
  concept: {
    heading: "CommonJS Modules",
    paragraphs: [
      "CommonJS is a module system widely used in Node.js applications.",
      "In CommonJS, require() is commonly used to load a module, while module.exports or exports is used to expose values from a module.",
      "CommonJS modules are typically written using .js files in projects configured for CommonJS.",
      "Each CommonJS module has its own scope, which helps prevent variables from one module from accidentally becoming variables in another module.",
      "CommonJS is still widely found in Node.js projects, although modern Node.js also supports ECMAScript modules using import and export."
    ],
    remember:
      "Remember: CommonJS commonly uses require() for loading modules and module.exports for exporting functionality."
  },

  analogy: {
    heading: "Think of CommonJS Like a Library Checkout System",
    items: [
      {
        icon: "📚",
        title: "Module",
        text: "A module is like a separate book containing useful information or tools."
      },
      {
        icon: "📤",
        title: "Export",
        text: "The module decides what functionality is available to others."
      },
      {
        icon: "📥",
        title: "require()",
        text: "Another file uses require() to bring the module into its code."
      },
      {
        icon: "🛠️",
        title: "Use",
        text: "The imported functionality can then be used by the application."
      }
    ]
  },

  visual: {
    heading: "CommonJS Module Flow",
    description:
      "CommonJS provides a simple pattern for separating and reusing Node.js code.",
    steps: [
      {
        icon: "📄",
        title: "Create Module",
        text: "Write functionality in a separate JavaScript file."
      },
      {
        icon: "📤",
        title: "module.exports",
        text: "Export the functionality that should be shared."
      },
      {
        icon: "📥",
        title: "require()",
        text: "Load the module from another file."
      },
      {
        icon: "▶️",
        title: "Execute",
        text: "Use the imported functionality in the application."
      }
    ],
    flow:
      "CommonJS Module → module.exports → require() → Application"
  },

  code: {
    title: "CommonJS Example",
    description:
      "This example exports an object containing reusable functions.",
    language: "javascript",
    code: `// calculator.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply
};


// app.js
const calculator = require("./calculator");

console.log(calculator.add(5, 3));
console.log(calculator.multiply(5, 3));`,
    output:
      `8
15`,
    explanation:
      "The calculator module exports two functions as an object. app.js loads that object with require() and then uses its functions."
  },

  interview: {
    question: "What is CommonJS in Node.js?",
    answer:
      "CommonJS is a module system used in Node.js that commonly uses require() to load modules and module.exports or exports to expose functionality.",
    tip:
      "Interview Tip: Know the basic relationship between require(), module.exports and CommonJS."
  },

  tricky: {
    question: "Is CommonJS the only module system supported by modern Node.js?",
    answer:
      "No. Modern Node.js supports both CommonJS and ECMAScript modules, depending on project configuration and file/module settings."
  },

  practice: {
    question:
      "Create a CommonJS module that exports two functions and use both functions from another file.",
    hint:
      "Use module.exports to export an object containing the functions."
  },

  challenge: {
    title: "Mini Challenge — Build a CommonJS Utility",
    description:
      "Practice creating a reusable CommonJS module.",
    task:
      "Create a module named stringUtils.js with functions to convert text to uppercase and lowercase. Export both functions and use them from app.js."
  }
},

"require-module-exports": {
  concept: {
    heading: "require() & module.exports",
    paragraphs: [
      "require() and module.exports are two important parts of the CommonJS module system.",
      "module.exports defines the value that a module makes available to other files.",
      "require() loads that exported value into another file.",
      "A module can export a single function, object, array, class or another JavaScript value.",
      "Understanding the relationship between export and require is important when working with traditional Node.js CommonJS projects."
    ],
    remember:
      "Remember: module.exports sends functionality out of a module, while require() brings that functionality into another file."
  },

  analogy: {
    heading: "Think of Export and Require Like Sending a Package",
    items: [
      {
        icon: "📦",
        title: "Create Package",
        text: "The module contains functionality that another file needs."
      },
      {
        icon: "📤",
        title: "Send Package",
        text: "module.exports makes the functionality available."
      },
      {
        icon: "📥",
        title: "Receive Package",
        text: "require() loads the exported value."
      },
      {
        icon: "🛠️",
        title: "Use Package",
        text: "The receiving file can use the imported functionality."
      }
    ]
  },

  visual: {
    heading: "Export and Require Flow",
    description:
      "The two operations work together to share functionality between CommonJS modules.",
    steps: [
      {
        icon: "📄",
        title: "module.js",
        text: "Create a function or value in the module."
      },
      {
        icon: "📤",
        title: "module.exports",
        text: "Export the function or value."
      },
      {
        icon: "📥",
        title: "require()",
        text: "Load it inside another file."
      },
      {
        icon: "⚙️",
        title: "Use",
        text: "Call or use the imported value."
      }
    ],
    flow:
      "module.js → module.exports → require() → app.js"
  },

  code: {
    title: "Export a Function",
    description:
      "A CommonJS module can directly export a function.",
    language: "javascript",
    code: `// greet.js
function greet() {
  return "Hello from the module";
}

module.exports = greet;


// app.js
const greet = require("./greet");

console.log(greet());`,
    output:
      `Hello from the module`,
    explanation:
      "greet.js exports the greet function directly. app.js receives that function from require() and calls it."
  },

  interview: {
    question: "What is the difference between require() and module.exports?",
    answer:
      "module.exports defines what a CommonJS module exports, while require() is used to load that exported value into another module.",
    tip:
      "Interview Tip: Remember the direction: module.exports → out of the module; require() → into the current file."
  },

  tricky: {
    question: "Can module.exports export more than one function?",
    answer:
      "Yes. Multiple functions or values can be exported together, commonly by assigning an object containing those values to module.exports."
  },

  practice: {
    question:
      "Create a module that exports two functions: square() and cube(). Import both functions into app.js.",
    hint:
      "Export an object containing square and cube."
  },

  challenge: {
    title: "Mini Challenge — Create a Math Module",
    description:
      "Practice using require() and module.exports together.",
    task:
      "Create math.js with functions for addition, subtraction and multiplication. Export all three functions and use them from app.js."
  }
},

"built-in-modules": {
  concept: {
    heading: "Built-in Modules",
    paragraphs: [
      "Node.js provides many built-in modules that add useful functionality without requiring separate installation from npm.",
      "These modules are included with Node.js and can be loaded when needed.",
      "Examples include fs for file-system operations, path for working with file and directory paths, os for operating-system information and events for event-driven programming.",
      "The http module provides functionality for creating HTTP servers and working with HTTP requests and responses.",
      "Using built-in modules allows developers to perform common backend tasks without installing an external package for every requirement."
    ],
    remember:
      "Remember: Built-in modules are provided by Node.js itself and do not need to be installed separately with npm."
  },

  analogy: {
    heading: "Think of Built-in Modules Like a Built-in Toolbox",
    items: [
      {
        icon: "🧰",
        title: "Toolbox",
        text: "Node.js comes with useful tools already available."
      },
      {
        icon: "📁",
        title: "fs",
        text: "The fs module provides file-system functionality."
      },
      {
        icon: "📍",
        title: "path",
        text: "The path module helps work with file and directory paths."
      },
      {
        icon: "💻",
        title: "os",
        text: "The os module provides operating-system information."
      }
    ]
  },

  visual: {
    heading: "Common Node.js Built-in Modules",
    description:
      "Different modules provide different capabilities for backend development.",
    steps: [
      {
        icon: "📁",
        title: "fs",
        text: "Read, write and manage files and directories."
      },
      {
        icon: "📍",
        title: "path",
        text: "Work safely with file and directory paths."
      },
      {
        icon: "💻",
        title: "os",
        text: "Read information about the operating system."
      },
      {
        icon: "🔔",
        title: "events",
        text: "Create and handle custom events."
      },
      {
        icon: "🌐",
        title: "http",
        text: "Create HTTP servers and handle HTTP communication."
      }
    ],
    flow:
      "Node.js → Built-in Modules → fs / path / os / events / http"
  },

  code: {
    title: "Using a Built-in Module",
    description:
      "The os module is available directly from Node.js.",
    language: "javascript",
    code: `const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());`,
    output:
      `Platform: win32
Architecture: x64`,
    explanation:
      "The os module is built into Node.js, so it can be loaded with require() without installing a package. The exact output depends on the operating system."
  },

  interview: {
    question: "What are Node.js built-in modules?",
    answer:
      "Built-in modules are modules provided by Node.js itself for common tasks such as file handling, path operations, operating-system information, events and HTTP communication.",
    tip:
      "Interview Tip: Know practical examples such as fs, path, os, events and http."
  },

  tricky: {
    question: "Do you need npm install fs before using the Node.js fs module?",
    answer:
      "No. fs is a built-in Node.js module and does not need to be installed separately."
  },

  practice: {
    question:
      "Use a Node.js built-in module and print one useful piece of information from it.",
    hint:
      "Try the os module and methods such as os.platform() or os.arch()."
  },

  challenge: {
    title: "Mini Challenge — Explore Built-in Modules",
    description:
      "Practice identifying which tasks can be handled by Node.js built-in modules.",
    task:
      "Create a program that uses os and path. Display the operating-system platform and create a sample file path using path.join()."
  }
},

"path-module": {
  concept: {
    heading: "path Module",
    paragraphs: [
      "The path module is a built-in Node.js module used for working with file and directory paths.",
      "Different operating systems can represent paths differently. The path module provides methods that help construct and analyze paths in a platform-aware way.",
      "Common methods include path.join(), path.basename(), path.dirname(), path.extname() and path.parse().",
      "path.join() is especially useful when you need to combine multiple path segments into a valid path.",
      "Using the path module is safer and more portable than manually building paths with hard-coded slash characters."
    ],
    remember:
      "Remember: Use the path module when you need to create, analyze or manipulate file and directory paths."
  },

  analogy: {
    heading: "Think of path Like a Navigation System",
    items: [
      {
        icon: "🗺️",
        title: "Path",
        text: "A file path tells the application where something is located."
      },
      {
        icon: "🧩",
        title: "Join",
        text: "path.join() combines path parts into one usable path."
      },
      {
        icon: "📄",
        title: "File Name",
        text: "path.basename() can identify the final file or directory name."
      },
      {
        icon: "📁",
        title: "Directory",
        text: "path.dirname() identifies the directory portion of a path."
      }
    ]
  },

  visual: {
    heading: "Working With File Paths",
    description:
      "The path module provides utilities for constructing and understanding paths.",
    steps: [
      {
        icon: "🧩",
        title: "Path Segments",
        text: "Start with individual directory or file segments."
      },
      {
        icon: "🔗",
        title: "Join",
        text: "Use path.join() to combine the segments."
      },
      {
        icon: "📄",
        title: "Analyze",
        text: "Use methods such as basename() and extname() to inspect the path."
      },
      {
        icon: "⚙️",
        title: "Use",
        text: "Use the generated path with file-system operations."
      }
    ],
    flow:
      "Segments → path.join() → Complete Path → File Operation"
  },

  code: {
    title: "Using path.join()",
    description:
      "path.join() combines path segments into a single path.",
    language: "javascript",
    code: `const path = require("path");

const filePath = path.join(
  "project",
  "data",
  "users.json"
);

console.log(filePath);`,
    output:
      `project/data/users.json`,
    explanation:
      "path.join() combines the supplied segments using the correct path separator for the current platform."
  },

  interview: {
    question: "Why is the path module used in Node.js?",
    answer:
      "The path module provides utilities for creating, analyzing and manipulating file and directory paths in a platform-aware way.",
    tip:
      "Interview Tip: Know path.join(), path.basename(), path.dirname() and path.extname()."
  },

  tricky: {
    question: "Why should you avoid manually joining paths with '/'?",
    answer:
      "Path separators can differ between operating systems. path methods provide a more portable way to construct paths."
  },

  practice: {
    question:
      "Use path.join() to create a path for a file named products.json inside a data folder.",
    hint:
      `const filePath = path.join("data", "products.json");`
  },

  challenge: {
    title: "Mini Challenge — Build and Analyze a Path",
    description:
      "Practice multiple methods from the Node.js path module.",
    task:
      "Create a path for data/products.json using path.join(). Then use basename(), dirname() and extname() to analyze the generated path."
  }
},

"fs-module": {
  concept: {
    heading: "fs Module",
    paragraphs: [
      "The fs module, short for File System, is a built-in Node.js module used to work with files and directories.",
      "Using fs, a Node.js application can read files, create files, write data, append data, rename files and remove files or directories.",
      "The fs module provides synchronous and asynchronous APIs. Asynchronous operations are commonly preferred in server applications because they can avoid blocking the main JavaScript execution flow.",
      "Common methods include fs.readFile(), fs.writeFile(), fs.appendFile(), fs.unlink() and directory-related methods.",
      "The fs module is useful when a Node.js application needs to work with local files or directories."
    ],
    remember:
      "Remember: fs is Node.js's built-in File System module for working with files and directories."
  },

  analogy: {
    heading: "Think of fs Like a Filing Department",
    items: [
      {
        icon: "📖",
        title: "Read",
        text: "Read information stored inside a file."
      },
      {
        icon: "✍️",
        title: "Write",
        text: "Create or replace file content."
      },
      {
        icon: "➕",
        title: "Append",
        text: "Add new information to existing content."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a file when it is no longer needed."
      }
    ]
  },

  visual: {
    heading: "Basic File System Operations",
    description:
      "The fs module provides methods for common file-management tasks.",
    steps: [
      {
        icon: "📄",
        title: "Choose File",
        text: "Identify the file that your application needs to work with."
      },
      {
        icon: "📖",
        title: "Read",
        text: "Use an fs read method to access file content."
      },
      {
        icon: "✍️",
        title: "Write",
        text: "Use a write method to create or replace content."
      },
      {
        icon: "➕",
        title: "Append",
        text: "Add information without replacing the existing content."
      },
      {
        icon: "🗑️",
        title: "Remove",
        text: "Delete a file when required."
      }
    ],
    flow:
      "File → Read / Write / Append / Delete → Result"
  },

  code: {
    title: "Write and Read a File",
    description:
      "This example uses the synchronous fs methods for a simple demonstration.",
    language: "javascript",
    code: `const fs = require("fs");

fs.writeFileSync(
  "message.txt",
  "Hello from Node.js"
);

const data = fs.readFileSync(
  "message.txt",
  "utf8"
);

console.log(data);`,
    output:
      `Hello from Node.js`,
    explanation:
      "writeFileSync() creates or replaces the file content. readFileSync() reads the file. The utf8 option converts the file content into a string."
  },

  interview: {
    question: "What is the fs module in Node.js?",
    answer:
      "The fs module is a built-in Node.js module used to work with files and directories.",
    tip:
      "Interview Tip: Mention reading, writing, appending and deleting files as common fs operations."
  },

  tricky: {
    question: "Does fs.readFile() block Node.js while reading a file?",
    answer:
      "The standard fs.readFile() API is asynchronous, so it does not block execution in the same way as fs.readFileSync()."
  },

  practice: {
    question:
      "Create a text file using Node.js and then read its contents from the program.",
    hint:
      "For a simple practice example, try writeFileSync() and readFileSync()."
  },

  challenge: {
    title: "Mini Challenge — Create a Notes File",
    description:
      "Use the fs module to create and read a local file.",
    task:
      "Create a notes.txt file containing three lines of text. Read the file using Node.js and display its contents in the terminal."
  }
},

"os-module": {
  concept: {
    heading: "os Module",
    paragraphs: [
      "The os module is a built-in Node.js module that provides information about the operating system and computer environment.",
      "It can provide information such as the operating-system platform, CPU architecture, CPU information, memory and home directory.",
      "The os module is useful when an application needs to understand the environment in which it is running.",
      "Methods such as os.platform(), os.arch(), os.cpus(), os.totalmem() and os.freemem() provide different system details.",
      "Because these values depend on the computer running the application, the output can be different on different machines."
    ],
    remember:
      "Remember: The os module provides information about the operating system and computer environment."
  },

  analogy: {
    heading: "Think of os Like a Computer Information Desk",
    items: [
      {
        icon: "💻",
        title: "Platform",
        text: "Find out which operating system platform is running."
      },
      {
        icon: "🧠",
        title: "CPU",
        text: "Get information about available CPU cores."
      },
      {
        icon: "💾",
        title: "Memory",
        text: "Check total and available system memory."
      },
      {
        icon: "🏠",
        title: "Home Directory",
        text: "Access information about the current user's home directory."
      }
    ]
  },

  visual: {
    heading: "Reading System Information",
    description:
      "Node.js can access selected operating-system information through the os module.",
    steps: [
      {
        icon: "📥",
        title: "Load os",
        text: "Import the built-in os module."
      },
      {
        icon: "💻",
        title: "Read Platform",
        text: "Use os.platform() to identify the platform."
      },
      {
        icon: "🧠",
        title: "Read CPU",
        text: "Use os.cpus() to inspect CPU information."
      },
      {
        icon: "💾",
        title: "Read Memory",
        text: "Use totalmem() and freemem() for memory information."
      }
    ],
    flow:
      "Node.js → os Module → System Information → Application"
  },

  code: {
    title: "Read Operating System Information",
    description:
      "Use the os module to display basic system information.",
    language: "javascript",
    code: `const os = require("os");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);`,
    output:
      `Platform: win32
Architecture: x64
CPU Cores: 8`,
    explanation:
      "The output depends on the computer where the program runs. os.platform() identifies the platform, os.arch() returns the CPU architecture and os.cpus() returns CPU information."
  },

  interview: {
    question: "What is the os module used for?",
    answer:
      "The os module provides information about the operating system and computer environment in which a Node.js application is running.",
    tip:
      "Interview Tip: Know examples such as platform, architecture, CPU and memory information."
  },

  tricky: {
    question: "Will os.platform() always return the same value on every computer?",
    answer:
      "No. The result depends on the operating system where the Node.js application is running."
  },

  practice: {
    question:
      "Write a Node.js program that displays the platform, architecture and number of CPU cores.",
    hint:
      "Use os.platform(), os.arch() and os.cpus().length."
  },

  challenge: {
    title: "Mini Challenge — System Information Tool",
    description:
      "Build a small command-line utility using the os module.",
    task:
      "Create a program that displays the platform, architecture, CPU core count, total memory and free memory of the current computer."
  }
},

"events-module": {
  concept: {
    heading: "events Module",
    paragraphs: [
      "The events module is a built-in Node.js module used to create and handle events.",
      "Node.js applications often work with event-driven patterns. An event represents something that has happened or is ready to be handled.",
      "The EventEmitter class provided by the events module allows you to register listeners and trigger custom events.",
      "The on() method is commonly used to register a listener, while emit() triggers an event.",
      "The events module is useful for understanding how event-driven Node.js applications communicate between different parts of an application."
    ],
    remember:
      "Remember: EventEmitter uses methods such as on() to listen for events and emit() to trigger events."
  },

  analogy: {
    heading: "Think of Events Like a Doorbell",
    items: [
      {
        icon: "🔔",
        title: "Event",
        text: "Pressing a doorbell represents an event happening."
      },
      {
        icon: "👂",
        title: "Listener",
        text: "Someone listening for the doorbell is waiting for the event."
      },
      {
        icon: "▶️",
        title: "emit()",
        text: "emit() triggers the event."
      },
      {
        icon: "⚙️",
        title: "Handler",
        text: "The registered listener runs when the event occurs."
      }
    ]
  },

  visual: {
    heading: "EventEmitter Flow",
    description:
      "The EventEmitter pattern connects an event with one or more listeners.",
    steps: [
      {
        icon: "📡",
        title: "Create Emitter",
        text: "Create an EventEmitter object."
      },
      {
        icon: "👂",
        title: "Register Listener",
        text: "Use on() to define what should happen when an event occurs."
      },
      {
        icon: "▶️",
        title: "Emit Event",
        text: "Use emit() to trigger the event."
      },
      {
        icon: "⚙️",
        title: "Run Handler",
        text: "The registered listener executes."
      }
    ],
    flow:
      "EventEmitter → on() → emit() → Listener Executes"
  },

  code: {
    title: "Create a Custom Event",
    description:
      "This example creates and triggers a simple custom event.",
    language: "javascript",
    code: `const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log("User login event received");
});

emitter.emit("login");`,
    output:
      `User login event received`,
    explanation:
      "EventEmitter is imported from the events module. The on() method registers a listener for the login event, and emit() triggers that event."
  },

  interview: {
    question: "What is EventEmitter in Node.js?",
    answer:
      "EventEmitter is a class provided by the events module that allows Node.js applications to create, listen for and trigger custom events.",
    tip:
      "Interview Tip: Remember the basic EventEmitter pattern: create → on() → emit()."
  },

  tricky: {
    question: "Does emit() register an event listener?",
    answer:
      "No. emit() triggers an event. The on() method is used to register an event listener."
  },

  practice: {
    question:
      "Create an EventEmitter and register an event named 'orderPlaced'.",
    hint:
      "Use emitter.on('orderPlaced', callback) and emitter.emit('orderPlaced')."
  },

  challenge: {
    title: "Mini Challenge — Order Event System",
    description:
      "Practice using EventEmitter with a realistic event name.",
    task:
      "Create an orderPlaced event. When the event is triggered, display a message that an order has been received. Then trigger the event from your program."
  }
},
"what-is-npm": {
  concept: {
    heading: "What Is npm?",
    paragraphs: [
      "npm stands for Node Package Manager. It is the standard package manager commonly used with Node.js.",
      "npm allows developers to install, update, remove and manage packages that a Node.js project needs.",
      "A package is reusable code that provides functionality which can be added to an application instead of building everything from scratch.",
      "npm also helps manage project dependencies and provides commands for running project scripts.",
      "When a package is installed in a project, information about that package is normally stored in package.json."
    ],
    remember:
      "Remember: Node.js runs JavaScript, while npm helps manage packages and dependencies used by Node.js projects."
  },

  analogy: {
    heading: "Think of npm Like an App Store for Developer Tools",
    items: [
      {
        icon: "🏪",
        title: "Package Store",
        text: "npm provides access to a huge ecosystem of reusable JavaScript packages."
      },
      {
        icon: "📦",
        title: "Install Package",
        text: "You can add a package to your project when you need its functionality."
      },
      {
        icon: "🔄",
        title: "Update Package",
        text: "npm can update installed packages according to the project's requirements."
      },
      {
        icon: "🗑️",
        title: "Remove Package",
        text: "Packages that are no longer required can be removed from a project."
      }
    ]
  },

  visual: {
    heading: "How npm Works",
    description:
      "npm connects your Node.js project with reusable packages and dependency information.",
    steps: [
      {
        icon: "📁",
        title: "Create Project",
        text: "Start with a Node.js project containing package.json."
      },
      {
        icon: "🔎",
        title: "Choose Package",
        text: "Find a package that provides the functionality you need."
      },
      {
        icon: "📥",
        title: "Install",
        text: "Use npm install to add the package to your project."
      },
      {
        icon: "📦",
        title: "Dependency Saved",
        text: "The package is recorded as a project dependency."
      },
      {
        icon: "💻",
        title: "Use Package",
        text: "Import or require the package in your application."
      }
    ],
    flow:
      "Project → npm install → Package → package.json → Application"
  },

  code: {
    title: "Install a Package",
    description:
      "The following command installs Express.js into a Node.js project.",
    language: "bash",
    code: `npm install express`,
    output:
      `added packages and updated package.json`,
    explanation:
      "The npm install command downloads the requested package into the project and records it in package.json. npm also creates or updates package-lock.json."
  },

  interview: {
    question: "What is npm?",
    answer:
      "npm is the package manager commonly used with Node.js to install, manage and share JavaScript packages and project dependencies.",
    tip:
      "Interview Tip: Explain that npm is used for package management, dependency management and project scripts."
  },

  tricky: {
    question: "Is npm a programming language?",
    answer:
      "No. npm is a package manager and command-line tool used to manage packages and dependencies in Node.js projects."
  },

  practice: {
    question:
      "Create a Node.js project and install one npm package using npm install.",
    hint:
      "Initialize a project with npm init -y and then install a package such as lodash or express."
  },

  challenge: {
    title: "Mini Challenge — Install Your First Package",
    description:
      "Practice adding an external package to a Node.js project.",
    task:
      "Create a new Node.js project, initialize package.json and install one package using npm install. Check package.json and node_modules after installation."
  }
},

"npm-commands": {
  concept: {
    heading: "npm Commands",
    paragraphs: [
      "npm provides many commands for managing Node.js projects.",
      "npm init creates a package.json file for a new project, while npm install installs dependencies.",
      "npm uninstall removes a package from the project.",
      "npm update can update installed packages according to the project's dependency configuration.",
      "npm run is used to execute scripts defined inside package.json.",
      "Knowing the most common npm commands makes everyday Node.js development much easier."
    ],
    remember:
      "Remember: npm commands help you initialize projects, install packages, remove packages, update dependencies and run scripts."
  },

  analogy: {
    heading: "Think of npm Commands Like Project Management Controls",
    items: [
      {
        icon: "🆕",
        title: "npm init",
        text: "Creates the initial configuration for a Node.js project."
      },
      {
        icon: "📥",
        title: "npm install",
        text: "Adds packages and dependencies to the project."
      },
      {
        icon: "🗑️",
        title: "npm uninstall",
        text: "Removes a package from the project."
      },
      {
        icon: "▶️",
        title: "npm run",
        text: "Runs scripts defined in package.json."
      }
    ]
  },

  visual: {
    heading: "Common npm Commands",
    description:
      "These commands cover many basic package-management tasks.",
    steps: [
      {
        icon: "📄",
        title: "npm init",
        text: "Create package.json for a new project."
      },
      {
        icon: "📥",
        title: "npm install",
        text: "Install project dependencies."
      },
      {
        icon: "🗑️",
        title: "npm uninstall",
        text: "Remove a dependency."
      },
      {
        icon: "🔄",
        title: "npm update",
        text: "Update installed packages."
      },
      {
        icon: "▶️",
        title: "npm run",
        text: "Execute a package.json script."
      }
    ],
    flow:
      "Initialize → Install → Develop → Run Scripts → Update / Remove"
  },

  code: {
    title: "Useful npm Commands",
    description:
      "Here are some commands you will use frequently in Node.js projects.",
    language: "bash",
    code: `npm init -y

npm install express

npm uninstall express

npm install

npm run start`,
    output:
      `Project initialized
Package installed
Package removed
Dependencies installed
Start script executed`,
    explanation:
      "npm init -y creates package.json with default values. npm install express adds Express. npm uninstall removes it. npm install installs dependencies listed in package.json. npm run start executes the start script if it exists."
  },

  interview: {
    question: "What is the difference between npm install and npm uninstall?",
    answer:
      "npm install adds a package or installs project dependencies, while npm uninstall removes a package from the project.",
    tip:
      "Interview Tip: Also know npm init, npm run and npm update."
  },

  tricky: {
    question: "Does npm install without a package name install Express automatically?",
    answer:
      "No. npm install without a package name installs the dependencies already listed in package.json."
  },

  practice: {
    question:
      "Initialize a project and practice npm install, npm uninstall and npm install again.",
    hint:
      "Install a small package, remove it, and then install the project's dependencies again."
  },

  challenge: {
    title: "Mini Challenge — Practice npm Commands",
    description:
      "Build confidence with common package-management commands.",
    task:
      "Create a Node.js project, install a package, remove it, install it again and create a start script that runs your app.js file."
  }
},

"package-json": {
  concept: {
    heading: "package.json",
    paragraphs: [
      "package.json is a configuration file used by Node.js projects to store important project information.",
      "It can contain the project name, version, description, scripts, dependencies, development dependencies and other metadata.",
      "When you run npm init, npm can create a package.json file for your project.",
      "The dependencies section records packages required by the application, while devDependencies records packages mainly required during development.",
      "The scripts section allows developers to create shortcuts for commonly used commands."
    ],
    remember:
      "Remember: package.json is the main project configuration file for npm-based Node.js applications."
  },

  analogy: {
    heading: "Think of package.json Like a Project Identity Card",
    items: [
      {
        icon: "🪪",
        title: "Project Identity",
        text: "It stores information such as the project name and version."
      },
      {
        icon: "📦",
        title: "Dependencies",
        text: "It records packages required by the application."
      },
      {
        icon: "🛠️",
        title: "Development Tools",
        text: "It can record packages needed mainly during development."
      },
      {
        icon: "▶️",
        title: "Scripts",
        text: "It stores reusable commands that can be executed with npm run."
      }
    ]
  },

  visual: {
    heading: "Important Parts of package.json",
    description:
      "A package.json file contains project metadata and configuration.",
    steps: [
      {
        icon: "📌",
        title: "name",
        text: "Identifies the project."
      },
      {
        icon: "🔢",
        title: "version",
        text: "Defines the current project version."
      },
      {
        icon: "📦",
        title: "dependencies",
        text: "Lists packages required by the application."
      },
      {
        icon: "🛠️",
        title: "devDependencies",
        text: "Lists packages mainly required during development."
      },
      {
        icon: "▶️",
        title: "scripts",
        text: "Defines commands that can be run with npm run."
      }
    ],
    flow:
      "package.json → Metadata + Scripts + Dependencies + Development Tools"
  },

  code: {
    title: "Example package.json",
    description:
      "A simplified package.json file can look like this.",
    language: "json",
    code: `{
  "name": "backend-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}`,
    output:
      `npm start → runs node app.js`,
    explanation:
      "The scripts section defines a start command. The dependencies section records Express as an application dependency. npm uses this information when installing and managing the project."
  },

  interview: {
    question: "What is package.json?",
    answer:
      "package.json is a Node.js project configuration file that stores project metadata, scripts and dependency information.",
    tip:
      "Interview Tip: Be ready to explain dependencies, devDependencies and scripts."
  },

  tricky: {
    question: "Is package.json the same as package-lock.json?",
    answer:
      "No. package.json describes the project's configuration and dependency requirements, while package-lock.json records the resolved dependency tree and exact package versions used for the installation."
  },

  practice: {
    question:
      "Create a package.json file and add a start script that runs app.js.",
    hint:
      `Use a scripts section containing "start": "node app.js".`
  },

  challenge: {
    title: "Mini Challenge — Configure package.json",
    description:
      "Practice creating a useful npm project configuration.",
    task:
      "Create a Node.js project with package.json. Add a start script for app.js and install Express as a dependency."
  }
},

"installing-packages": {
  concept: {
    heading: "Installing Packages",
    paragraphs: [
      "Node.js projects often use external packages to add functionality without implementing everything from scratch.",
      "The npm install command downloads a package and adds it to the project dependencies by default.",
      "Installed packages are stored inside the node_modules directory.",
      "The package information is recorded in package.json and the exact dependency tree is recorded in package-lock.json.",
      "You can install a package locally for one project or install certain command-line tools globally when global installation is appropriate."
    ],
    remember:
      "Remember: npm install package-name installs a package locally into the current Node.js project."
  },

  analogy: {
    heading: "Think of Installing a Package Like Adding a Tool",
    items: [
      {
        icon: "🧰",
        title: "Choose Tool",
        text: "Select a package that provides the functionality your project needs."
      },
      {
        icon: "📥",
        title: "Install",
        text: "npm downloads the package into the project."
      },
      {
        icon: "📦",
        title: "node_modules",
        text: "The installed package and its dependencies are stored in node_modules."
      },
      {
        icon: "📋",
        title: "Record",
        text: "The package is recorded in package.json and the dependency tree in package-lock.json."
      }
    ]
  },

  visual: {
    heading: "Package Installation Flow",
    description:
      "Installing a package updates the project's dependency information.",
    steps: [
      {
        icon: "🔎",
        title: "Choose Package",
        text: "Identify the package your application needs."
      },
      {
        icon: "⌨️",
        title: "Run npm install",
        text: "Execute npm install followed by the package name."
      },
      {
        icon: "📦",
        title: "Download",
        text: "npm downloads the package and its required dependencies."
      },
      {
        icon: "🗂️",
        title: "Update Project",
        text: "package.json and package-lock.json are updated."
      },
      {
        icon: "💻",
        title: "Use Package",
        text: "Import or require the package in your code."
      }
    ],
    flow:
      "npm install → Download → node_modules → package.json → Use Package"
  },

  code: {
    title: "Install Express",
    description:
      "Express is a commonly used framework for Node.js web applications.",
    language: "bash",
    code: `npm install express`,
    output:
      `added packages`,
    explanation:
      "Running npm install express installs Express locally in the current project and records it as a dependency."
  },

  interview: {
    question: "Where are npm packages installed locally?",
    answer:
      "Local npm packages are installed inside the project's node_modules directory.",
    tip:
      "Interview Tip: Also remember that package.json records dependency information."
  },

  tricky: {
    question: "Should node_modules be uploaded to GitHub?",
    answer:
      "Typically no. node_modules is usually excluded using .gitignore because dependencies can be restored with npm install from package.json and package-lock.json."
  },

  practice: {
    question:
      "Install Express in a new Node.js project and inspect package.json and node_modules.",
    hint:
      "Run npm init -y followed by npm install express."
  },

  challenge: {
    title: "Mini Challenge — Add a Backend Package",
    description:
      "Practice installing and using an npm package.",
    task:
      "Create a Node.js project, install Express, check the changes made to package.json and then create a small file that loads Express."
  }
},

"dependencies-devdependencies": {
  concept: {
    heading: "Dependencies vs DevDependencies",
    paragraphs: [
      "A Node.js project can have dependencies that are required when the application runs and development dependencies that are mainly required while developing or testing the application.",
      "Dependencies are stored under the dependencies section of package.json. They are packages the application needs for its normal functionality.",
      "Development dependencies are stored under devDependencies. These commonly include testing tools, formatters, linters, development servers and other development utilities.",
      "npm install package installs a package as a regular dependency by default.",
      "npm install package --save-dev installs a package as a development dependency."
    ],
    remember:
      "Remember: dependencies are needed by the application; devDependencies are mainly tools needed during development."
  },

  analogy: {
    heading: "Think of a Restaurant and Its Kitchen Tools",
    items: [
      {
        icon: "🍽️",
        title: "Runtime Dependency",
        text: "A tool required to serve customers is like a production dependency."
      },
      {
        icon: "🧰",
        title: "Development Tool",
        text: "A tool used while preparing the restaurant is like a development dependency."
      },
      {
        icon: "📦",
        title: "dependencies",
        text: "These packages support the application's normal operation."
      },
      {
        icon: "🛠️",
        title: "devDependencies",
        text: "These packages mainly support development activities."
      }
    ]
  },

  visual: {
    heading: "Dependencies and DevDependencies",
    description:
      "The two sections help distinguish runtime packages from development tools.",
    steps: [
      {
        icon: "📦",
        title: "dependencies",
        text: "Packages required by the application at runtime."
      },
      {
        icon: "🛠️",
        title: "devDependencies",
        text: "Packages mainly used during development."
      },
      {
        icon: "📄",
        title: "package.json",
        text: "Both groups are recorded in the project configuration."
      },
      {
        icon: "📥",
        title: "npm install",
        text: "npm can install both dependency groups according to the project configuration."
      }
    ],
    flow:
      "Application Packages → dependencies | Development Tools → devDependencies"
  },

  code: {
    title: "Install a Development Dependency",
    description:
      "A development tool can be installed using the --save-dev option.",
    language: "bash",
    code: `npm install express

npm install nodemon --save-dev`,
    output:
      `express → dependencies
nodemon → devDependencies`,
    explanation:
      "Express is commonly used by the running application, so it is installed as a dependency. nodemon is commonly used as a development utility, so it can be installed as a devDependency."
  },

  interview: {
    question: "What is the difference between dependencies and devDependencies?",
    answer:
      "dependencies contain packages needed by the application, while devDependencies contain packages mainly needed during development, testing or tooling.",
    tip:
      "Interview Tip: Give a practical example such as Express as a runtime dependency and nodemon as a development tool."
  },

  tricky: {
    question: "Does devDependency mean the package can never be used by application code?",
    answer:
      "No. The distinction describes the intended role of the package in the project. devDependencies are generally packages needed for development and tooling rather than production runtime functionality."
  },

  practice: {
    question:
      "Install one runtime package and one development package and inspect package.json.",
    hint:
      "Try Express as a dependency and nodemon as a devDependency."
  },

  challenge: {
    title: "Mini Challenge — Organize Project Packages",
    description:
      "Practice classifying project packages correctly.",
    task:
      "Create a project using Express and nodemon. Install Express normally and nodemon using --save-dev. Open package.json and identify where each package appears."
  }
},
"nodemon": {
  concept: {
    heading: "nodemon",
    paragraphs: [
      "nodemon is a development utility that automatically restarts a Node.js application when files in the project change.",
      "Normally, if you modify a Node.js file while the application is running, you may need to stop and start the application again.",
      "nodemon watches project files and can restart the Node.js process when a relevant change is detected.",
      "Because nodemon is mainly useful during development, it is commonly installed as a development dependency.",
      "nodemon improves the development workflow but is not required for Node.js itself.",
    ],
    remember:
      "Remember: nodemon automatically restarts a Node.js application when files change during development.",
  },

  analogy: {
    heading: "Think of nodemon Like an Automatic Restart Assistant",
    items: [
      {
        icon: "👀",
        title: "Watch",
        text: "nodemon watches files for changes.",
      },
      {
        icon: "✏️",
        title: "Detect Change",
        text: "When you save a file, nodemon detects the modification.",
      },
      {
        icon: "🔄",
        title: "Restart",
        text: "The Node.js application is restarted automatically.",
      },
      {
        icon: "⚡",
        title: "Continue Coding",
        text: "You can continue development without manually restarting the server each time.",
      },
    ],
  },

  visual: {
    heading: "How nodemon Works",
    description:
      "nodemon simplifies the repeated stop-and-start cycle during development.",
    steps: [
      {
        icon: "▶️",
        title: "Start App",
        text: "Start the Node.js application using nodemon.",
      },
      {
        icon: "👀",
        title: "Watch Files",
        text: "nodemon watches the project files.",
      },
      {
        icon: "✏️",
        title: "Change Code",
        text: "You edit and save a JavaScript file.",
      },
      {
        icon: "🔄",
        title: "Restart",
        text: "nodemon automatically restarts the application.",
      },
      {
        icon: "✅",
        title: "Continue",
        text: "The updated application is ready to test.",
      },
    ],
    flow:
      "Start → Watch → Code Change → Automatic Restart → Test Again",
  },

  code: {
    title: "Using nodemon",
    description:
      "Install nodemon as a development dependency and use it to run app.js.",
    language: "bash",
    code: `npm install nodemon --save-dev

npx nodemon app.js`,
    output: `nodemon starts app.js
waiting for file changes...`,
    explanation:
      "The --save-dev option places nodemon in devDependencies. npx can execute the locally installed package without requiring a global installation.",
  },

  interview: {
    question: "What is nodemon?",
    answer:
      "nodemon is a development utility that watches project files and automatically restarts a Node.js application when changes are detected.",
    tip:
      "Interview Tip: Explain that nodemon is mainly a development tool and is commonly placed in devDependencies.",
  },

  tricky: {
    question: "Is nodemon required to run a Node.js application?",
    answer:
      "No. Node.js applications can be run directly using node app.js. nodemon is a development convenience that automatically restarts the application after file changes.",
  },

  practice: {
    question:
      "Install nodemon as a development dependency and run your Node.js application with it.",
    hint:
      "Use npm install nodemon --save-dev and then npx nodemon app.js.",
  },

  challenge: {
    title: "Mini Challenge — Automatic Restart",
    description:
      "Improve your Node.js development workflow with nodemon.",
    task:
      "Create an app.js file, install nodemon as a devDependency, start the application using npx nodemon app.js, then change the console message and observe the automatic restart.",
  },
},
"http-module": {
  concept: {
    heading: "HTTP Module",
    paragraphs: [
      "The HTTP module is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses.",
      "Because it is built into Node.js, you do not need to install an external package to use it.",
      "The HTTP module provides the createServer() method, which allows a Node.js application to listen for incoming requests.",
      "The request object contains information about the incoming request, while the response object is used to send data back to the client.",
      "The HTTP module is useful for understanding how web servers work before moving to higher-level frameworks such as Express.js."
    ],
    remember:
      "Remember: The Node.js HTTP module provides the basic tools for creating web servers and handling HTTP requests and responses."
  },

  analogy: {
    heading: "Think of the HTTP Module Like a Reception Desk",
    items: [
      {
        icon: "📨",
        title: "Receive Request",
        text: "The server receives a request from a client such as a browser."
      },
      {
        icon: "🔍",
        title: "Process Request",
        text: "Node.js examines the request and decides what response should be returned."
      },
      {
        icon: "📤",
        title: "Send Response",
        text: "The server sends the requested information back to the client."
      },
      {
        icon: "🔄",
        title: "Handle More Requests",
        text: "The server continues listening for new requests."
      }
    ]
  },

  visual: {
    heading: "How the HTTP Module Works",
    description:
      "The HTTP module connects a client request with a server response.",
    steps: [
      {
        icon: "🌐",
        title: "Client",
        text: "A browser or another application sends an HTTP request."
      },
      {
        icon: "📥",
        title: "Server Receives",
        text: "Node.js receives the request through the HTTP server."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The server processes the request."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server sends a response back to the client."
      }
    ],
    flow:
      "Client → HTTP Request → Node.js Server → Process → HTTP Response → Client"
  },

  code: {
    title: "Creating a Basic HTTP Server",
    description:
      "The following example uses the built-in HTTP module to create a simple server.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Hello from Node.js HTTP Server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Server running on port 3000

Open:
http://localhost:3000

Browser Output:
Hello from Node.js HTTP Server`,
    explanation:
      "require() loads the built-in HTTP module. createServer() creates the server, while res.end() sends the final response. listen() starts the server on port 3000."
  },

  interview: {
    question: "What is the HTTP module in Node.js?",
    answer:
      "The HTTP module is a built-in Node.js module used to create HTTP servers and handle HTTP requests and responses.",
    tip:
      "Interview Tip: Mention that the HTTP module is built into Node.js and does not require npm installation."
  },

  tricky: {
    question: "Do you need to install the HTTP module using npm?",
    answer:
      "No. The HTTP module is part of Node.js core modules, so it can be imported directly using require('http')."
  },

  practice: {
    question:
      "Create a Node.js HTTP server that returns a welcome message when a browser sends a request.",
    hint:
      "Use require('http'), createServer(), res.end(), and server.listen()."
  },

  challenge: {
    title: "Mini Challenge — Basic HTTP Server",
    description:
      "Build a simple HTTP server using only the built-in HTTP module.",
    task:
      "Create a server on port 3000 that returns a different text response from the server. Start it and test the response in a browser."
  }
},

"creating-server": {
  concept: {
    heading: "Creating a Server",
    paragraphs: [
      "A server is a program that listens for requests and sends responses to clients.",
      "In Node.js, the HTTP module provides createServer() for creating a basic HTTP server.",
      "The callback passed to createServer() runs whenever the server receives a request.",
      "The server must listen on a port before clients can connect to it.",
      "A port acts as a communication endpoint through which clients connect to the application."
    ],
    remember:
      "Remember: createServer() creates the server and listen() starts listening for incoming requests."
  },

  analogy: {
    heading: "Think of a Server Like a Service Counter",
    items: [
      {
        icon: "🏢",
        title: "Server",
        text: "The server represents the service counter that is ready to handle requests."
      },
      {
        icon: "📥",
        title: "Customer Request",
        text: "A client sends a request to the server."
      },
      {
        icon: "⚙️",
        title: "Processing",
        text: "The server performs the required operation."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server sends the result back to the client."
      }
    ]
  },

  visual: {
    heading: "How to Create a Server",
    description:
      "A basic Node.js server follows a simple create, listen, and respond flow.",
    steps: [
      {
        icon: "1️⃣",
        title: "Import HTTP",
        text: "Load the built-in HTTP module."
      },
      {
        icon: "2️⃣",
        title: "Create Server",
        text: "Use http.createServer() to create the server."
      },
      {
        icon: "3️⃣",
        title: "Define Response",
        text: "Use the response object to send data to the client."
      },
      {
        icon: "4️⃣",
        title: "Listen",
        text: "Use server.listen() to start the server."
      }
    ],
    flow:
      "Import HTTP → createServer() → Handle Request → Send Response → listen()"
  },

  code: {
    title: "Create a Node.js Server",
    description:
      "This example creates a server that returns different messages for two paths.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `http://localhost:3000/
Home Page

http://localhost:3000/about
About Page

http://localhost:3000/contact
Page Not Found`,
    explanation:
      "The request URL is checked to decide which response should be returned. The server listens on port 3000 and handles each incoming request."
  },

  interview: {
    question: "How do you create a server in Node.js?",
    answer:
      "A basic server can be created using the http.createServer() method and started using the server.listen() method.",
    tip:
      "Interview Tip: Explain the role of createServer(), the request-response callback, and listen()."
  },

  tricky: {
    question: "Does createServer() automatically start the server?",
    answer:
      "No. createServer() creates the server object. The server must call listen() to start accepting connections."
  },

  practice: {
    question:
      "Create a Node.js server with Home, About, and Contact responses.",
    hint:
      "Check req.url inside the createServer() callback and return a different response for each path."
  },

  challenge: {
    title: "Mini Challenge — Multi-Page Server",
    description:
      "Create a simple server that handles multiple URLs.",
    task:
      "Create routes for /, /about, /services, and /contact. Return a suitable message for each route and a 404 response for unknown URLs."
  }
},

"request-response": {
  concept: {
    heading: "Request & Response",
    paragraphs: [
      "HTTP communication between a client and server is based on requests and responses.",
      "The request object, commonly written as req, contains information about what the client is asking for.",
      "The response object, commonly written as res, is used by the server to send information back to the client.",
      "The request can contain the URL, HTTP method, headers, and other information.",
      "The response can contain a status code, headers, and response data."
    ],
    remember:
      "Remember: req represents the incoming request and res represents the outgoing response."
  },

  analogy: {
    heading: "Think of Request and Response Like an Order",
    items: [
      {
        icon: "🧑",
        title: "Client",
        text: "The client is like a customer placing an order."
      },
      {
        icon: "📝",
        title: "Request",
        text: "The request describes what the customer wants."
      },
      {
        icon: "👨‍💻",
        title: "Server",
        text: "The server processes the request."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The response contains the result returned to the customer."
      }
    ]
  },

  visual: {
    heading: "Request-Response Flow",
    description:
      "Every basic HTTP interaction follows a request-response cycle.",
    steps: [
      {
        icon: "🌐",
        title: "Client Sends Request",
        text: "A browser sends an HTTP request to the server."
      },
      {
        icon: "📥",
        title: "Server Receives",
        text: "Node.js receives the request object."
      },
      {
        icon: "⚙️",
        title: "Server Processes",
        text: "The application decides what data should be returned."
      },
      {
        icon: "📤",
        title: "Server Responds",
        text: "The response object sends the result to the client."
      }
    ],
    flow:
      "Client → Request → Server Processing → Response → Client"
  },

  code: {
    title: "Working with Request and Response",
    description:
      "This example reads the request URL and returns it in the response.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(\`Requested URL: \${req.url}\`);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `If you open:
http://localhost:3000/products

Browser Output:
Requested URL: /products`,
    explanation:
      "req.url provides the requested URL path. res.end() sends the final response to the client."
  },

  interview: {
    question: "What is the difference between req and res in Node.js?",
    answer:
      "req represents information received from the client, while res is used by the server to send a response back to the client.",
    tip:
      "Interview Tip: Mention examples such as req.url and req.method for request information and res.statusCode and res.end() for responses."
  },

  tricky: {
    question: "Can a server send a response without receiving a request?",
    answer:
      "In the normal HTTP request-response cycle, the server sends a response as part of handling a client request."
  },

  practice: {
    question:
      "Create a server that displays both the requested URL and HTTP method.",
    hint:
      "Use req.url and req.method inside the server callback."
  },

  challenge: {
    title: "Mini Challenge — Request Inspector",
    description:
      "Build a small server that displays basic request information.",
    task:
      "Create a server that returns the requested URL, HTTP method, and a simple message describing the request."
  }
},

"http-methods": {
  concept: {
    heading: "HTTP Methods",
    paragraphs: [
      "HTTP methods describe the action that a client wants to perform on a server resource.",
      "GET is commonly used to retrieve data.",
      "POST is commonly used to send data to create a new resource.",
      "PUT is commonly used to replace an existing resource.",
      "PATCH is commonly used to partially update an existing resource.",
      "DELETE is commonly used to remove a resource."
    ],
    remember:
      "Remember: HTTP methods communicate the intended action of a request."
  },

  analogy: {
    heading: "Think of HTTP Methods Like Different Actions",
    items: [
      {
        icon: "👀",
        title: "GET",
        text: "Ask the server to provide information."
      },
      {
        icon: "➕",
        title: "POST",
        text: "Send information to create something new."
      },
      {
        icon: "🔄",
        title: "PUT / PATCH",
        text: "Update existing information."
      },
      {
        icon: "🗑️",
        title: "DELETE",
        text: "Remove an existing resource."
      }
    ]
  },

  visual: {
    heading: "Common HTTP Methods",
    description:
      "Different HTTP methods represent different operations on server resources.",
    steps: [
      {
        icon: "GET",
        title: "Read",
        text: "Retrieve information from the server."
      },
      {
        icon: "POST",
        title: "Create",
        text: "Send data to create a new resource."
      },
      {
        icon: "PUT",
        title: "Replace",
        text: "Replace an existing resource."
      },
      {
        icon: "PATCH",
        title: "Update",
        text: "Partially update an existing resource."
      },
      {
        icon: "DELETE",
        title: "Remove",
        text: "Delete an existing resource."
      }
    ],
    flow:
      "GET → Read | POST → Create | PUT/PATCH → Update | DELETE → Remove"
  },

  code: {
    title: "Checking the HTTP Method",
    description:
      "The request method is available through req.method.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET") {
    res.end("GET request received");
  } else if (req.method === "POST") {
    res.end("POST request received");
  } else {
    res.end(\`\${req.method} request received\`);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `GET request received

For a POST request:
POST request received`,
    explanation:
      "req.method contains the HTTP method used by the client. The server can use this value to decide how to process the request."
  },

  interview: {
    question: "What are common HTTP methods used in REST APIs?",
    answer:
      "Common methods include GET for reading, POST for creating, PUT for replacing, PATCH for partial updates, and DELETE for removing resources.",
    tip:
      "Interview Tip: Connect each method with CRUD operations when explaining REST APIs."
  },

  tricky: {
    question: "Are PUT and PATCH exactly the same?",
    answer:
      "No. PUT is generally used to replace the complete representation of a resource, while PATCH is generally used for a partial update."
  },

  practice: {
    question:
      "Create a server that returns a different message for GET, POST, PUT, PATCH, and DELETE requests.",
    hint:
      "Use req.method and compare it with each HTTP method."
  },

  challenge: {
    title: "Mini Challenge — Method Handler",
    description:
      "Create a server that identifies different HTTP methods.",
    task:
      "Handle GET, POST, PUT, PATCH, and DELETE requests and return a clear response for each method."
  }
},

"http-status-codes": {
  concept: {
    heading: "HTTP Status Codes",
    paragraphs: [
      "HTTP status codes tell the client what happened when the server processed a request.",
      "Status codes are grouped into categories such as 2xx for successful requests, 3xx for redirection, 4xx for client errors, and 5xx for server errors.",
      "The 200 status code commonly indicates a successful request.",
      "The 404 status code indicates that the requested resource was not found.",
      "The 500 status code indicates an internal server error."
    ],
    remember:
      "Remember: HTTP status codes communicate the result of an HTTP request."
  },

  analogy: {
    heading: "Think of Status Codes Like Result Messages",
    items: [
      {
        icon: "✅",
        title: "2xx",
        text: "The request was successfully processed."
      },
      {
        icon: "↪️",
        title: "3xx",
        text: "The client needs to follow a redirection."
      },
      {
        icon: "⚠️",
        title: "4xx",
        text: "There is a problem with the client request."
      },
      {
        icon: "❌",
        title: "5xx",
        text: "The server encountered a problem while processing the request."
      }
    ]
  },

  visual: {
    heading: "Status Code Categories",
    description:
      "The first digit of a status code identifies its general category.",
    steps: [
      {
        icon: "2️⃣",
        title: "2xx Success",
        text: "The request was successfully received and processed."
      },
      {
        icon: "3️⃣",
        title: "3xx Redirection",
        text: "The client needs to take additional action."
      },
      {
        icon: "4️⃣",
        title: "4xx Client Error",
        text: "The request contains a client-side problem."
      },
      {
        icon: "5️⃣",
        title: "5xx Server Error",
        text: "The server failed while processing the request."
      }
    ],
    flow:
      "Request → Server Processing → Status Code → Client Understands Result"
  },

  code: {
    title: "Sending a Status Code",
    description:
      "Node.js allows you to set the HTTP status code before ending the response.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Home Page");
  } else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `/
Status: 200
Home Page

/unknown
Status: 404
Page Not Found`,
    explanation:
      "res.statusCode sets the HTTP status code that will be sent to the client. A successful page can use 200, while an unknown route can use 404."
  },

  interview: {
    question: "What does HTTP status code 404 mean?",
    answer:
      "HTTP 404 means that the requested resource could not be found on the server.",
    tip:
      "Interview Tip: Know common codes such as 200, 201, 400, 401, 403, 404, and 500."
  },

  tricky: {
    question: "Does a 404 status always mean that the server is down?",
    answer:
      "No. A 404 normally means the server responded but could not find the requested resource."
  },

  practice: {
    question:
      "Create a server that returns 200 for the home route and 404 for unknown routes.",
    hint:
      "Set res.statusCode before calling res.end()."
  },

  challenge: {
    title: "Mini Challenge — Status Code Handler",
    description:
      "Practice returning appropriate HTTP status codes.",
    task:
      "Create a server with /, /about, and an unknown route. Return 200 for valid routes and 404 for the unknown route."
  }
},

"http-headers": {
  concept: {
    heading: "HTTP Headers",
    paragraphs: [
      "HTTP headers contain additional information about an HTTP request or response.",
      "Request headers can provide information such as the client's accepted content types or authentication information.",
      "Response headers allow the server to describe the returned data.",
      "The Content-Type header tells the client what type of data is being returned.",
      "Node.js provides methods such as setHeader() and writeHead() for setting response headers."
    ],
    remember:
      "Remember: HTTP headers carry additional metadata about requests and responses."
  },

  analogy: {
    heading: "Think of Headers Like a Package Label",
    items: [
      {
        icon: "📦",
        title: "Data",
        text: "The response body contains the actual information."
      },
      {
        icon: "🏷️",
        title: "Header",
        text: "Headers provide information about that data."
      },
      {
        icon: "📄",
        title: "Content Type",
        text: "Content-Type tells the client how the response data should be interpreted."
      },
      {
        icon: "📤",
        title: "Send",
        text: "The server sends headers along with the response."
      }
    ]
  },

  visual: {
    heading: "How Response Headers Work",
    description:
      "Headers are sent along with the HTTP response before the response body.",
    steps: [
      {
        icon: "📥",
        title: "Request",
        text: "The client sends a request to the server."
      },
      {
        icon: "⚙️",
        title: "Server",
        text: "The server prepares the response."
      },
      {
        icon: "🏷️",
        title: "Headers",
        text: "The server adds metadata such as Content-Type."
      },
      {
        icon: "📤",
        title: "Body",
        text: "The server sends the response body."
      }
    ],
    flow:
      "Request → Server Processing → Response Headers → Response Body → Client"
  },

  code: {
    title: "Setting a Response Header",
    description:
      "This example tells the browser that the response contains plain text.",
    language: "javascript",
    code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-App-Name", "Node-Learning");

  res.end("Hello from the server");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Browser Output:
Hello from the server

Response Headers:
Content-Type: text/plain
X-App-Name: Node-Learning`,
    explanation:
      "setHeader() adds a response header. Content-Type tells the client how to interpret the response body, while X-App-Name is a custom application header."
  },

  interview: {
    question: "What are HTTP headers?",
    answer:
      "HTTP headers are key-value pairs that carry additional information about an HTTP request or response.",
    tip:
      "Interview Tip: Give Content-Type as a common example and explain that headers are separate from the response body."
  },

  tricky: {
    question: "Can response headers be changed after the response is sent?",
    answer:
      "No. Headers must be set before the response headers are sent to the client."
  },

  practice: {
    question:
      "Create a server that returns plain text and sets Content-Type and a custom header.",
    hint:
      "Use res.setHeader() before res.end()."
  },

  challenge: {
    title: "Mini Challenge — Custom Headers",
    description:
      "Practice creating useful HTTP response headers.",
    task:
      "Create a server that returns a message with Content-Type set to text/plain and add a custom X-App-Name response header."
  }
},
"express-introduction": {
  concept: {
    heading: "Express.js Introduction",
    paragraphs: [
      "Express.js is a lightweight web framework built on top of Node.js.",
      "It provides a simpler way to create web servers, routes, APIs, and middleware.",
      "Node.js provides low-level tools through modules such as HTTP, while Express.js provides convenient features for building web applications.",
      "Express is widely used for backend applications and REST APIs.",
      "Express works with Node.js and can be extended with many npm packages."
    ],
    remember:
      "Remember: Express.js is a Node.js web framework that makes server and API development easier."
  },

  analogy: {
    heading: "Think of Express Like a Traffic Manager",
    items: [
      {
        icon: "🚦",
        title: "Receive Request",
        text: "Express receives incoming client requests."
      },
      {
        icon: "🛣️",
        title: "Choose Route",
        text: "Express identifies which route should handle the request."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "Route handlers and middleware process the request."
      },
      {
        icon: "📤",
        title: "Response",
        text: "Express sends the appropriate response to the client."
      }
    ]
  },

  visual: {
    heading: "How Express.js Works",
    description:
      "Express provides a structured request-processing flow for Node.js applications.",
    steps: [
      {
        icon: "🌐",
        title: "Client",
        text: "A browser or application sends an HTTP request."
      },
      {
        icon: "📥",
        title: "Express",
        text: "Express receives the incoming request."
      },
      {
        icon: "🧭",
        title: "Route",
        text: "Express matches the request with the appropriate route."
      },
      {
        icon: "⚙️",
        title: "Handler",
        text: "The route handler processes the request."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server sends a response to the client."
      }
    ],
    flow:
      "Client → Express → Route → Handler → Response → Client"
  },

  code: {
    title: "Basic Express Server",
    description:
      "This example creates a simple Express server with a home route.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(3000, () => {
  console.log("Express server running on port 3000");
});`,
    output:
      `Express server running on port 3000

Browser:
Welcome to Express.js`,
    explanation:
      "express() creates the application, app.get() defines a GET route, and app.listen() starts the server."
  },

  interview: {
    question: "What is Express.js?",
    answer:
      "Express.js is a lightweight web framework for Node.js used to build web applications, servers, and REST APIs.",
    tip:
      "Interview Tip: Explain that Express simplifies routing, middleware, and request-response handling compared with using the Node.js HTTP module directly."
  },

  tricky: {
    question: "Is Express.js a replacement for Node.js?",
    answer:
      "No. Express.js is a framework that runs on Node.js. Node.js provides the runtime environment."
  },

  practice: {
    question:
      "Create an Express application with a home route that returns a welcome message.",
    hint:
      "Use express(), app.get(), and app.listen()."
  },

  challenge: {
    title: "Mini Challenge — First Express Server",
    description:
      "Create your first Express.js backend application.",
    task:
      "Create an Express server on port 3000 and add a GET / route that returns a welcome message."
  }
},

"express-setup": {
  concept: {
    heading: "Express.js Setup",
    paragraphs: [
      "Before using Express.js, create a Node.js project and initialize npm.",
      "Express is installed as an npm package using npm install express.",
      "The package is then listed in the dependencies section of package.json.",
      "A JavaScript file such as app.js can be used as the main application file.",
      "After setup, the application can import Express and create a server."
    ],
    remember:
      "Remember: npm init creates the project configuration and npm install express adds Express to the project."
  },

  analogy: {
    heading: "Think of Express Setup Like Preparing a Workshop",
    items: [
      {
        icon: "📁",
        title: "Create Project",
        text: "Create a separate folder for the backend project."
      },
      {
        icon: "📦",
        title: "Initialize npm",
        text: "Create package.json to manage the project."
      },
      {
        icon: "⬇️",
        title: "Install Express",
        text: "Install Express as a project dependency."
      },
      {
        icon: "🚀",
        title: "Start Application",
        text: "Create the server and run it with Node.js."
      }
    ]
  },

  visual: {
    heading: "Express Setup Flow",
    description:
      "A basic Express project can be prepared in a few steps.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Folder",
        text: "Create and open a backend project folder."
      },
      {
        icon: "2️⃣",
        title: "Initialize npm",
        text: "Run npm init -y to create package.json."
      },
      {
        icon: "3️⃣",
        title: "Install Express",
        text: "Run npm install express."
      },
      {
        icon: "4️⃣",
        title: "Create App",
        text: "Create app.js and initialize Express."
      }
    ],
    flow:
      "Project Folder → npm init → Install Express → Create app.js → Run Server"
  },

  code: {
    title: "Express Project Setup",
    description:
      "Run these commands to create a basic Express project.",
    language: "bash",
    code: `mkdir express-demo
cd express-demo

npm init -y
npm install express

node app.js`,
    output:
      `Express package installed successfully.

The Node.js application can now use Express.`,
    explanation:
      "npm init -y creates package.json with default settings. npm install express installs Express and adds it to dependencies."
  },

  interview: {
    question: "How do you install Express.js in a Node.js project?",
    answer:
      "Initialize the Node.js project with npm and install Express using npm install express.",
    tip:
      "Interview Tip: Mention that Express should normally be installed inside the project rather than relying on a global installation."
  },

  tricky: {
    question: "Why is package.json important in an Express project?",
    answer:
      "package.json stores project metadata, scripts, and dependency information required to manage the Node.js application."
  },

  practice: {
    question:
      "Create a new Node.js project and install Express.",
    hint:
      "Use npm init -y followed by npm install express."
  },

  challenge: {
    title: "Mini Challenge — Express Project",
    description:
      "Prepare a clean Express.js project.",
    task:
      "Create a project folder, initialize npm, install Express, create app.js, and run a basic Express server on port 3000."
  }
},

"express-routes": {
  concept: {
    heading: "Routes",
    paragraphs: [
      "A route defines how an Express application responds to a particular HTTP method and URL path.",
      "Routes are used to organize application endpoints such as /, /about, /products, or /users.",
      "Express provides methods such as app.get(), app.post(), app.put(), app.patch(), and app.delete().",
      "A route normally contains a path and a handler function.",
      "Routes are the foundation of Express web applications and REST APIs."
    ],
    remember:
      "Remember: An Express route connects an HTTP method and URL path to a handler function."
  },

  analogy: {
    heading: "Think of Routes Like Different Doors",
    items: [
      {
        icon: "🚪",
        title: "URL Path",
        text: "Each path represents a different door into the application."
      },
      {
        icon: "🔑",
        title: "HTTP Method",
        text: "The HTTP method determines what type of action the client wants."
      },
      {
        icon: "⚙️",
        title: "Handler",
        text: "The route handler decides what should happen."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The handler returns a response to the client."
      }
    ]
  },

  visual: {
    heading: "How Express Routes Work",
    description:
      "Express matches the incoming method and path with a registered route.",
    steps: [
      {
        icon: "📥",
        title: "Request",
        text: "The client sends an HTTP request."
      },
      {
        icon: "🔍",
        title: "Match",
        text: "Express checks the HTTP method and URL."
      },
      {
        icon: "⚙️",
        title: "Handler",
        text: "The matching route handler runs."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The handler sends the response."
      }
    ],
    flow:
      "Request → Method + URL Match → Route Handler → Response"
  },

  code: {
    title: "Creating Express Routes",
    description:
      "This example creates multiple GET routes.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `/
Home Page

/about
About Page

/products
Products Page`,
    explanation:
      "Each app.get() call registers a separate GET route. Express executes the matching handler when the client requests that URL."
  },

  interview: {
    question: "What is a route in Express.js?",
    answer:
      "A route defines how an Express application responds to a specific HTTP method and URL path.",
    tip:
      "Interview Tip: Mention both parts of a route: the HTTP method and the URL path."
  },

  tricky: {
    question: "Can two routes have the same path?",
    answer:
      "Multiple handlers can be registered for the same path, but route ordering and middleware behavior determine which handlers execute."
  },

  practice: {
    question:
      "Create GET routes for /, /about, /services, and /contact.",
    hint:
      "Use app.get() for each route."
  },

  challenge: {
    title: "Mini Challenge — Website Routes",
    description:
      "Build the basic route structure of a small website.",
    task:
      "Create GET routes for Home, About, Services, Contact, and Products pages. Return a different response for each route."
  }
},

"express-request-response": {
  concept: {
    heading: "Request & Response in Express.js",
    paragraphs: [
      "Express provides request and response objects to every route handler.",
      "The req object contains information about the incoming request.",
      "The res object provides methods for sending a response to the client.",
      "Common request properties include req.method, req.url, req.params, req.query, and req.body.",
      "Common response methods include res.send(), res.json(), res.status(), and res.end()."
    ],
    remember:
      "Remember: req contains incoming request information and res provides methods for sending the server response."
  },

  analogy: {
    heading: "Think of req and res Like a Question and Answer",
    items: [
      {
        icon: "❓",
        title: "Request",
        text: "The client asks the server to perform an operation."
      },
      {
        icon: "📋",
        title: "Request Data",
        text: "The server reads information from the request."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The route handler processes the request."
      },
      {
        icon: "💬",
        title: "Response",
        text: "The server sends the result back to the client."
      }
    ]
  },

  visual: {
    heading: "Express Request-Response Flow",
    description:
      "Express makes it easy to read request information and send different response types.",
    steps: [
      {
        icon: "📥",
        title: "Request",
        text: "Express receives the client request."
      },
      {
        icon: "🔍",
        title: "Read Data",
        text: "The route handler reads information from req."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The application performs the required operation."
      },
      {
        icon: "📤",
        title: "Send Response",
        text: "The application uses res to return the result."
      }
    ],
    flow:
      "Client → req → Route Handler → res → Client"
  },

  code: {
    title: "Using req and res",
    description:
      "This example reads the request method and sends a JSON response.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/info", (req, res) => {
  res.json({
    method: req.method,
    message: "Request received successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `{
  "method": "GET",
  "message": "Request received successfully"
}`,
    explanation:
      "req.method identifies the HTTP method. res.json() sends a JavaScript object as a JSON response."
  },

  interview: {
    question: "What is the difference between req and res in Express?",
    answer:
      "req contains information about the incoming client request, while res provides methods for sending a response back to the client.",
    tip:
      "Interview Tip: Know common examples such as req.params, req.query, req.body, res.send(), and res.json()."
  },

  tricky: {
    question: "Can res.json() send an object directly?",
    answer:
      "Yes. Express converts the JavaScript object into a JSON response and sets the appropriate response content type."
  },

  practice: {
    question:
      "Create a route that returns the request method and URL as JSON.",
    hint:
      "Use req.method, req.url, and res.json()."
  },

  challenge: {
    title: "Mini Challenge — Request Information API",
    description:
      "Create a small endpoint that returns useful request information.",
    task:
      "Create GET /info and return the HTTP method, requested URL, and a custom message as JSON."
  }
},

"express-middleware": {
  concept: {
    heading: "Middleware",
    paragraphs: [
      "Middleware functions are functions that execute during the request-response cycle.",
      "Middleware can inspect the request, modify request or response objects, perform authentication, log information, or end the request.",
      "Middleware receives req, res, and next as parameters.",
      "Calling next() passes control to the next middleware or route handler.",
      "Middleware is one of the most important concepts in Express.js because it allows application logic to be organized into reusable functions."
    ],
    remember:
      "Remember: Middleware runs between the incoming request and the final response."
  },

  analogy: {
    heading: "Think of Middleware Like a Security Checkpoint",
    items: [
      {
        icon: "🚶",
        title: "Request Arrives",
        text: "A client request enters the application."
      },
      {
        icon: "🔍",
        title: "Check",
        text: "Middleware examines or processes the request."
      },
      {
        icon: "➡️",
        title: "next()",
        text: "Middleware can pass control to the next step."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The final route handler sends the response."
      }
    ]
  },

  visual: {
    heading: "Middleware Flow",
    description:
      "Middleware creates a processing chain between a request and the final route.",
    steps: [
      {
        icon: "📥",
        title: "Request",
        text: "The client sends a request."
      },
      {
        icon: "⚙️",
        title: "Middleware 1",
        text: "The first middleware performs its task."
      },
      {
        icon: "➡️",
        title: "next()",
        text: "Control moves to the next middleware."
      },
      {
        icon: "🧭",
        title: "Route",
        text: "The matching route handler executes."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server sends the response."
      }
    ],
    flow:
      "Request → Middleware → next() → Route Handler → Response"
  },

  code: {
    title: "Creating Custom Middleware",
    description:
      "This middleware logs the HTTP method and URL before continuing to the route.",
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
    output:
      `GET /

Browser:
Home Page`,
    explanation:
      "app.use(logger) registers the middleware. The middleware logs request information and calls next() so Express can continue to the route handler."
  },

  interview: {
    question: "What is middleware in Express.js?",
    answer:
      "Middleware is a function that runs during the request-response cycle and can process a request, modify data, end the response, or pass control using next().",
    tip:
      "Interview Tip: Explain the three common parameters req, res, and next."
  },

  tricky: {
    question: "What happens if middleware does not call next() or send a response?",
    answer:
      "The request may remain pending because Express has no instruction to continue to another handler or finish the response."
  },

  practice: {
    question:
      "Create middleware that logs every incoming request method and URL.",
    hint:
      "Create a function with req, res, next and call next() after logging."
  },

  challenge: {
    title: "Mini Challenge — Request Logger",
    description:
      "Build reusable logging middleware for an Express application.",
    task:
      "Create a logger middleware that records the current time, HTTP method, and request URL for every incoming request."
  }
},

"route-parameters": {
  concept: {
    heading: "Route Parameters",
    paragraphs: [
      "Route parameters allow values to be captured directly from a URL path.",
      "In Express, a route parameter is defined by placing a colon before its name, such as /users/:id.",
      "The value is available through req.params.",
      "Route parameters are useful when working with individual resources such as users, products, or orders.",
      "For example, /users/25 can provide the value 25 through req.params.id."
    ],
    remember:
      "Remember: Route parameters are dynamic values captured from the URL path and accessed through req.params."
  },

  analogy: {
    heading: "Think of Route Parameters Like an ID on a File",
    items: [
      {
        icon: "📁",
        title: "Resource",
        text: "The application stores many resources such as users or products."
      },
      {
        icon: "🏷️",
        title: "Identifier",
        text: "An ID identifies one specific resource."
      },
      {
        icon: "🔗",
        title: "URL",
        text: "The ID can be placed directly inside the URL."
      },
      {
        icon: "📥",
        title: "req.params",
        text: "Express provides the captured value through req.params."
      }
    ]
  },

  visual: {
    heading: "How Route Parameters Work",
    description:
      "Express captures dynamic values from URL paths and makes them available to the route handler.",
    steps: [
      {
        icon: "🌐",
        title: "Client URL",
        text: "The client requests a URL such as /users/25."
      },
      {
        icon: "🧭",
        title: "Route Pattern",
        text: "Express matches the route /users/:id."
      },
      {
        icon: "🔍",
        title: "Capture Value",
        text: "Express stores 25 as the id parameter."
      },
      {
        icon: "📦",
        title: "req.params",
        text: "The route handler reads req.params.id."
      }
    ],
    flow:
      "URL /users/25 → /users/:id → req.params.id → 25"
  },

  code: {
    title: "Using Route Parameters",
    description:
      "This example reads a product ID from the URL.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    message: "Product received",
    id: productId,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Request:
GET /products/101

Response:
{
  "message": "Product received",
  "id": "101"
}`,
    explanation:
      "The :id part of the route is dynamic. Express stores the value in req.params.id. Route parameters are strings by default."
  },

  interview: {
    question: "What are route parameters in Express.js?",
    answer:
      "Route parameters are dynamic values captured from a URL path and accessed through req.params.",
    tip:
      "Interview Tip: Use /users/:id as a simple example and show how req.params.id retrieves the value."
  },

  tricky: {
    question: "Are route parameter values automatically numbers?",
    answer:
      "No. Route parameters are received as strings. If numeric processing is required, the value must be converted."
  },

  practice: {
    question:
      "Create a GET /users/:id route that returns the requested user ID.",
    hint:
      "Read the value using req.params.id."
  },

  challenge: {
    title: "Mini Challenge — Product Route",
    description:
      "Create a dynamic product endpoint.",
    task:
      "Create GET /products/:id and return the product ID, a message, and a simple product status as JSON."
  }
},

"query-parameters": {
  concept: {
    heading: "Query Parameters",
    paragraphs: [
      "Query parameters are optional values added to a URL after a question mark.",
      "They are commonly used for filtering, searching, sorting, and pagination.",
      "In Express, query parameters are available through req.query.",
      "For example, /products?category=books contains category as a query parameter.",
      "Multiple query parameters can be separated using an ampersand."
    ],
    remember:
      "Remember: Query parameters are optional URL values accessed through req.query."
  },

  analogy: {
    heading: "Think of Query Parameters Like Search Filters",
    items: [
      {
        icon: "🔎",
        title: "Search",
        text: "A user enters a search keyword."
      },
      {
        icon: "🏷️",
        title: "Filter",
        text: "Additional values can narrow the results."
      },
      {
        icon: "🔗",
        title: "URL",
        text: "These values can be added after ? in the URL."
      },
      {
        icon: "📥",
        title: "req.query",
        text: "Express makes query values available through req.query."
      }
    ]
  },

  visual: {
    heading: "How Query Parameters Work",
    description:
      "Query parameters allow clients to send optional filtering or search information.",
    steps: [
      {
        icon: "🌐",
        title: "URL",
        text: "The client sends a URL containing query parameters."
      },
      {
        icon: "🔍",
        title: "Express",
        text: "Express parses the query string."
      },
      {
        icon: "📦",
        title: "req.query",
        text: "The route handler accesses the values."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server uses the values to prepare a response."
      }
    ],
    flow:
      "/products?category=books&sort=price → req.query → Filter/Sort → Response"
  },

  code: {
    title: "Using Query Parameters",
    description:
      "This example reads search and category values from the URL.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  const { search, category } = req.query;

  res.json({
    search: search || "all",
    category: category || "all",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Request:
GET /products?search=phone&category=electronics

Response:
{
  "search": "phone",
  "category": "electronics"
}`,
    explanation:
      "req.query contains the query parameters. Because query parameters are optional, the example provides default values when they are not supplied."
  },

  interview: {
    question: "What is the difference between route parameters and query parameters?",
    answer:
      "Route parameters are part of the URL path and usually identify a specific resource, while query parameters are optional values commonly used for filtering, searching, sorting, or pagination.",
    tip:
      "Interview Tip: Compare /users/25 with /users?role=admin to clearly demonstrate the difference."
  },

  tricky: {
    question: "Are query parameters required?",
    answer:
      "No. Query parameters are generally optional and can be omitted from the URL."
  },

  practice: {
    question:
      "Create /products that reads search and category from query parameters.",
    hint:
      "Use req.query.search and req.query.category."
  },

  challenge: {
    title: "Mini Challenge — Product Search API",
    description:
      "Build a simple search endpoint using query parameters.",
    task:
      "Create GET /products and support search, category, and sort query parameters. Return the received values as JSON."
  }
},

"static-files": {
  concept: {
    heading: "Serving Static Files",
    paragraphs: [
      "Static files are files that can be sent directly to the client without generating their content dynamically.",
      "Common static files include HTML, CSS, JavaScript, images, fonts, and other assets.",
      "Express provides express.static() middleware for serving static files.",
      "A folder such as public can contain assets that should be accessible by clients.",
      "Static file serving is useful when an Express application needs to deliver frontend assets or uploaded public resources."
    ],
    remember:
      "Remember: express.static() allows Express to serve files directly from a directory."
  },

  analogy: {
    heading: "Think of Static Files Like a Public Library Shelf",
    items: [
      {
        icon: "📚",
        title: "Public Folder",
        text: "The public folder contains files that can be accessed by clients."
      },
      {
        icon: "🔗",
        title: "URL",
        text: "A client requests a file using its URL."
      },
      {
        icon: "📄",
        title: "Static File",
        text: "Express finds the requested file in the configured directory."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The file is sent back to the client."
      }
    ]
  },

  visual: {
    heading: "How Static Files Work",
    description:
      "Express maps incoming file requests to files stored in a static directory.",
    steps: [
      {
        icon: "📁",
        title: "Create Public Folder",
        text: "Store static assets inside a public directory."
      },
      {
        icon: "⚙️",
        title: "Configure Express",
        text: "Use express.static() to expose the directory."
      },
      {
        icon: "🌐",
        title: "Client Request",
        text: "The browser requests a file."
      },
      {
        icon: "📤",
        title: "File Response",
        text: "Express sends the requested file."
      }
    ],
    flow:
      "public/ → express.static() → File URL → Client"
  },

  code: {
    title: "Serving Static Files",
    description:
      "This example serves files from a public folder.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Project:
public/
  index.html
  style.css

Server:
http://localhost:3000/index.html

Express serves the file from the public folder.`,
    explanation:
      "express.static('public') tells Express to serve files from the public directory. A request for a file is mapped to the corresponding file inside that directory."
  },

  interview: {
    question: "How do you serve static files in Express.js?",
    answer:
      "Static files can be served using the built-in express.static() middleware.",
    tip:
      "Interview Tip: Mention that CSS, JavaScript, images, and HTML files are common examples of static assets."
  },

  tricky: {
    question: "Does express.static() create a database or API?",
    answer:
      "No. express.static() serves files from a directory. It does not create database operations or REST API endpoints."
  },

  practice: {
    question:
      "Create a public folder and configure Express to serve its files.",
    hint:
      "Use app.use(express.static('public'))."
  },

  challenge: {
    title: "Mini Challenge — Static Website",
    description:
      "Serve a simple frontend using Express static file middleware.",
    task:
      "Create a public folder containing index.html and style.css. Configure Express to serve the folder and open the HTML file through the browser."
  }
},
"rest-api-basics": {
  concept: {
    heading: "REST API Basics",
    paragraphs: [
      "REST stands for Representational State Transfer. It is an architectural style commonly used for designing web APIs.",
      "A REST API allows clients such as web applications, mobile applications, or other services to communicate with a backend using HTTP.",
      "REST APIs usually represent data as resources. Examples of resources include users, products, orders, and courses.",
      "HTTP methods such as GET, POST, PUT, PATCH, and DELETE are used to perform operations on resources.",
      "REST APIs commonly exchange data using JSON because JSON is easy for both humans and applications to read and process."
    ],
    remember:
      "Remember: A REST API exposes resources through URLs and uses HTTP methods to perform operations on those resources."
  },

  analogy: {
    heading: "Think of a REST API Like a Restaurant",
    items: [
      {
        icon: "📱",
        title: "Client",
        text: "The client is like a customer who wants something from the restaurant."
      },
      {
        icon: "📝",
        title: "Request",
        text: "The customer places an order describing what is needed."
      },
      {
        icon: "👨‍🍳",
        title: "Server",
        text: "The backend processes the request."
      },
      {
        icon: "🍽️",
        title: "Response",
        text: "The server returns the requested data or result to the client."
      }
    ]
  },

  visual: {
    heading: "How a REST API Works",
    description:
      "A REST API provides a structured way for clients and servers to communicate.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "A frontend application sends an HTTP request."
      },
      {
        icon: "2️⃣",
        title: "API Endpoint",
        text: "The request is sent to a specific resource URL."
      },
      {
        icon: "3️⃣",
        title: "Server",
        text: "The backend processes the request."
      },
      {
        icon: "4️⃣",
        title: "Data",
        text: "The server reads or changes the required data."
      },
      {
        icon: "5️⃣",
        title: "Response",
        text: "The API sends a response, commonly in JSON format."
      }
    ],
    flow:
      "Client → HTTP Request → REST API → Server/Data → JSON Response → Client"
  },

  code: {
    title: "Basic REST API",
    description:
      "This example creates a simple REST-style endpoint that returns product data.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 1500,
    },
  ]);
});

app.listen(3000, () => {
  console.log("API server running on port 3000");
});`,
    output:
      `GET /api/products

[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  },
  {
    "id": 2,
    "name": "Keyboard",
    "price": 1500
  }
]`,
    explanation:
      "The /api/products endpoint represents a products resource. A GET request retrieves the available products and res.json() sends the data as JSON."
  },

  interview: {
    question: "What is a REST API?",
    answer:
      "A REST API is an API designed around REST principles that allows clients and servers to communicate using HTTP methods and resource-based URLs.",
    tip:
      "Interview Tip: Explain resources, HTTP methods, endpoints, and JSON responses."
  },

  tricky: {
    question: "Is REST itself a programming language or library?",
    answer:
      "No. REST is an architectural style. Frameworks such as Express.js can be used to build REST APIs."
  },

  practice: {
    question:
      "Create a GET endpoint /api/users that returns an array of user objects as JSON.",
    hint:
      "Use Express app.get() and res.json()."
  },

  challenge: {
    title: "Mini Challenge — Products REST API",
    description:
      "Create your first resource-based REST API.",
    task:
      "Create /api/products and return at least three product objects with id, name, and price fields."
  }
},

"get-api": {
  concept: {
    heading: "GET API",
    paragraphs: [
      "The GET HTTP method is commonly used to retrieve data from a server.",
      "A GET API endpoint usually returns one or more resources without changing the server data.",
      "For example, GET /api/products can return a list of products.",
      "GET requests can also use route parameters to retrieve a specific resource.",
      "GET APIs are commonly used by frontend applications to display data."
    ],
    remember:
      "Remember: GET is generally used to retrieve data from a server."
  },

  analogy: {
    heading: "Think of GET Like Asking for Information",
    items: [
      {
        icon: "🔎",
        title: "Ask",
        text: "The client asks the server for information."
      },
      {
        icon: "📚",
        title: "Find",
        text: "The server finds the requested resource."
      },
      {
        icon: "📦",
        title: "Prepare",
        text: "The server prepares the requested data."
      },
      {
        icon: "📤",
        title: "Return",
        text: "The API sends the data back to the client."
      }
    ]
  },

  visual: {
    heading: "GET API Flow",
    description:
      "A GET request retrieves data from an API.",
    steps: [
      {
        icon: "🌐",
        title: "Client Request",
        text: "The client sends a GET request."
      },
      {
        icon: "🧭",
        title: "Endpoint",
        text: "The request reaches the appropriate API endpoint."
      },
      {
        icon: "🔍",
        title: "Find Data",
        text: "The server finds the required data."
      },
      {
        icon: "📤",
        title: "JSON Response",
        text: "The server returns the data as JSON."
      }
    ],
    flow:
      "GET Request → API Endpoint → Find Data → JSON Response"
  },

  code: {
    title: "Creating a GET API",
    description:
      "This example returns a list of products.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `GET /api/products

[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  },
  {
    "id": 2,
    "name": "Mouse",
    "price": 800
  }
]`,
    explanation:
      "The GET route returns the products array as JSON. The endpoint does not modify the products."
  },

  interview: {
    question: "What is the purpose of a GET request?",
    answer:
      "GET is commonly used to retrieve data from a server.",
    tip:
      "Interview Tip: Mention that GET is generally used for reading resources and should not normally be used to modify server data."
  },

  tricky: {
    question: "Should a GET request normally create or delete data?",
    answer:
      "No. GET is intended for retrieving resources. Data-changing operations should normally use methods such as POST, PUT, PATCH, or DELETE."
  },

  practice: {
    question:
      "Create GET /api/users and return a list of users.",
    hint:
      "Create an array and return it using res.json()."
  },

  challenge: {
    title: "Mini Challenge — GET Products",
    description:
      "Build a GET endpoint for product data.",
    task:
      "Create GET /api/products and return at least five products with id, name, category, and price."
  }
},

"post-api": {
  concept: {
    heading: "POST API",
    paragraphs: [
      "The POST HTTP method is commonly used to send data to a server and create a new resource.",
      "POST request data is commonly sent inside the request body.",
      "In Express, req.body can be used to access JSON request data after express.json() middleware is enabled.",
      "A POST API is commonly used for operations such as user registration, creating products, or submitting orders.",
      "A successful resource creation commonly returns HTTP status code 201."
    ],
    remember:
      "Remember: POST is commonly used to send data to the server and create a new resource."
  },

  analogy: {
    heading: "Think of POST Like Submitting a New Form",
    items: [
      {
        icon: "📝",
        title: "Prepare Data",
        text: "The client prepares information for a new resource."
      },
      {
        icon: "📤",
        title: "Send",
        text: "The data is sent to the server in the request body."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The server validates and processes the data."
      },
      {
        icon: "➕",
        title: "Create",
        text: "The server creates the new resource."
      }
    ]
  },

  visual: {
    heading: "POST API Flow",
    description:
      "A POST request sends data to the backend so that a new resource can be created.",
    steps: [
      {
        icon: "📝",
        title: "Client Data",
        text: "The client prepares the new resource data."
      },
      {
        icon: "📤",
        title: "POST Request",
        text: "The client sends the data in the request body."
      },
      {
        icon: "🔍",
        title: "Validation",
        text: "The server checks the received data."
      },
      {
        icon: "➕",
        title: "Create Resource",
        text: "The server creates the resource."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The API returns the created resource."
      }
    ],
    flow:
      "Client Data → POST → Request Body → Server → Create → Response"
  },

  code: {
    title: "Creating a POST API",
    description:
      "This example creates a product using data received in the request body.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/products", (req, res) => {
  const product = req.body;

  res.status(201).json({
    message: "Product created successfully",
    product,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `POST /api/products

Request Body:
{
  "name": "Monitor",
  "price": 12000
}

Response:
{
  "message": "Product created successfully",
  "product": {
    "name": "Monitor",
    "price": 12000
  }
}`,
    explanation:
      "express.json() parses JSON request bodies. req.body contains the submitted data, and status(201) indicates that a new resource was created."
  },

  interview: {
    question: "What is POST used for in a REST API?",
    answer:
      "POST is commonly used to submit data to the server and create a new resource.",
    tip:
      "Interview Tip: Mention req.body, express.json(), and HTTP 201 for successful resource creation."
  },

  tricky: {
    question: "Where is POST data commonly stored in an Express request?",
    answer:
      "JSON request data is commonly available through req.body after express.json() middleware has been configured."
  },

  practice: {
    question:
      "Create POST /api/users that receives name and email from the request body.",
    hint:
      "Use app.use(express.json()) and access the values through req.body."
  },

  challenge: {
    title: "Mini Challenge — Create Product API",
    description:
      "Build an API endpoint that accepts new product data.",
    task:
      "Create POST /api/products. Accept name, category, price, and stock from the request body and return the created product with status 201."
  }
},

"put-api": {
  concept: {
    heading: "PUT API",
    paragraphs: [
      "The PUT HTTP method is commonly used to replace an existing resource with a new representation.",
      "A PUT request often identifies the resource using a route parameter such as /api/products/:id.",
      "The updated resource data is usually sent in the request body.",
      "PUT is commonly treated as a full update, meaning the client provides the representation of the resource that should replace the existing one.",
      "The exact update behavior depends on how the backend is designed."
    ],
    remember:
      "Remember: PUT is commonly used for replacing or fully updating an existing resource."
  },

  analogy: {
    heading: "Think of PUT Like Replacing a Complete Record",
    items: [
      {
        icon: "🔎",
        title: "Find",
        text: "The server identifies the resource using its ID."
      },
      {
        icon: "📋",
        title: "Receive New Data",
        text: "The client sends the replacement data."
      },
      {
        icon: "🔄",
        title: "Replace",
        text: "The existing representation is replaced."
      },
      {
        icon: "✅",
        title: "Confirm",
        text: "The server returns the updated resource."
      }
    ]
  },

  visual: {
    heading: "PUT API Flow",
    description:
      "PUT identifies an existing resource and sends replacement data.",
    steps: [
      {
        icon: "🔗",
        title: "Resource ID",
        text: "The URL identifies the resource to update."
      },
      {
        icon: "📤",
        title: "PUT Request",
        text: "The client sends the replacement data."
      },
      {
        icon: "🔍",
        title: "Find Resource",
        text: "The server finds the existing resource."
      },
      {
        icon: "🔄",
        title: "Update",
        text: "The server replaces the resource representation."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The updated resource is returned."
      }
    ],
    flow:
      "PUT /resource/:id → Find Resource → Replace → Return Updated Resource"
  },

  code: {
    title: "Creating a PUT API",
    description:
      "This example demonstrates a full-style update of a product.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

app.put("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  res.json({
    message: "Product updated successfully",
    id: productId,
    product: updatedProduct,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `PUT /api/products/10

Request Body:
{
  "name": "Updated Monitor",
  "price": 15000
}

Response:
{
  "message": "Product updated successfully",
  "id": "10",
  "product": {
    "name": "Updated Monitor",
    "price": 15000
  }
}`,
    explanation:
      "The route parameter identifies the resource. The request body contains the new representation that the server can use to update the resource."
  },

  interview: {
    question: "What is PUT commonly used for?",
    answer:
      "PUT is commonly used to replace or fully update an existing resource.",
    tip:
      "Interview Tip: Compare PUT with PATCH. PUT is generally associated with replacement, while PATCH is associated with partial updates."
  },

  tricky: {
    question: "Is PUT the same as PATCH?",
    answer:
      "No. PUT is generally used for replacement or full updates, while PATCH is generally used for partial updates."
  },

  practice: {
    question:
      "Create PUT /api/users/:id and return the ID and updated user data.",
    hint:
      "Use req.params.id and req.body."
  },

  challenge: {
    title: "Mini Challenge — Update Product",
    description:
      "Create a PUT endpoint for updating product information.",
    task:
      "Create PUT /api/products/:id and accept name, category, price, and stock in the request body."
  }
},

"patch-api": {
  concept: {
    heading: "PATCH API",
    paragraphs: [
      "The PATCH HTTP method is commonly used to partially update an existing resource.",
      "Unlike a full replacement, a PATCH request can contain only the fields that need to change.",
      "The resource is usually identified by a route parameter.",
      "PATCH is useful when only one or a few properties need to be modified.",
      "The exact update behavior depends on the backend implementation."
    ],
    remember:
      "Remember: PATCH is commonly used when only part of an existing resource needs to be updated."
  },

  analogy: {
    heading: "Think of PATCH Like Editing One Field",
    items: [
      {
        icon: "📄",
        title: "Existing Record",
        text: "The server already has a complete resource."
      },
      {
        icon: "✏️",
        title: "Change One Part",
        text: "The client wants to modify only selected information."
      },
      {
        icon: "🔧",
        title: "Partial Update",
        text: "The server changes only the supplied fields."
      },
      {
        icon: "✅",
        title: "Updated Resource",
        text: "The server returns the updated result."
      }
    ]
  },

  visual: {
    heading: "PATCH API Flow",
    description:
      "PATCH is useful when a client wants to change only selected properties.",
    steps: [
      {
        icon: "🔗",
        title: "Resource ID",
        text: "The URL identifies the resource."
      },
      {
        icon: "📤",
        title: "PATCH Request",
        text: "The client sends only the fields that need updating."
      },
      {
        icon: "🔍",
        title: "Find Resource",
        text: "The server identifies the existing resource."
      },
      {
        icon: "✏️",
        title: "Partial Update",
        text: "Only the supplied properties are changed."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The updated result is returned."
      }
    ],
    flow:
      "PATCH /resource/:id → Find Resource → Update Selected Fields → Response"
  },

  code: {
    title: "Creating a PATCH API",
    description:
      "This example updates only the fields supplied by the client.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

app.patch("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const changes = req.body;

  res.json({
    message: "User partially updated",
    id: userId,
    changes,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `PATCH /api/users/25

Request Body:
{
  "email": "updated@example.com"
}

Response:
{
  "message": "User partially updated",
  "id": "25",
  "changes": {
    "email": "updated@example.com"
  }
}`,
    explanation:
      "The PATCH endpoint accepts only the fields that need to change. In a real application, the backend would apply those changes to the stored resource."
  },

  interview: {
    question: "What is PATCH used for?",
    answer:
      "PATCH is commonly used to partially update an existing resource.",
    tip:
      "Interview Tip: Use an example such as changing only a user's email instead of replacing the complete user object."
  },

  tricky: {
    question: "Does a PATCH request have to contain every property of a resource?",
    answer:
      "No. PATCH is specifically useful when only selected properties need to be updated."
  },

  practice: {
    question:
      "Create PATCH /api/products/:id that accepts only the fields that need to change.",
    hint:
      "Use req.params.id and req.body."
  },

  challenge: {
    title: "Mini Challenge — Partial Product Update",
    description:
      "Build an endpoint that updates selected product fields.",
    task:
      "Create PATCH /api/products/:id and allow the client to update only price or stock without sending the complete product."
  }
},

"delete-api": {
  concept: {
    heading: "DELETE API",
    paragraphs: [
      "The DELETE HTTP method is commonly used to remove a resource from a server.",
      "The resource to delete is often identified using a route parameter such as /api/products/:id.",
      "The server should verify that the requested resource exists before deleting it.",
      "A successful DELETE operation may return status 204 with no response body or another suitable success response.",
      "In production applications, deletion may also require authentication and authorization checks."
    ],
    remember:
      "Remember: DELETE is commonly used to remove an existing resource."
  },

  analogy: {
    heading: "Think of DELETE Like Removing a Record",
    items: [
      {
        icon: "🔎",
        title: "Find",
        text: "The server identifies the resource using its ID."
      },
      {
        icon: "🔐",
        title: "Check",
        text: "The application can verify whether the user has permission to delete it."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "The resource is removed from storage."
      },
      {
        icon: "✅",
        title: "Confirm",
        text: "The server returns an appropriate response."
      }
    ]
  },

  visual: {
    heading: "DELETE API Flow",
    description:
      "A DELETE request identifies a resource and asks the server to remove it.",
    steps: [
      {
        icon: "🔗",
        title: "Resource ID",
        text: "The URL identifies the resource to remove."
      },
      {
        icon: "🔍",
        title: "Find Resource",
        text: "The server checks whether the resource exists."
      },
      {
        icon: "🔐",
        title: "Authorization",
        text: "The application can verify permission before deletion."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "The resource is removed."
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server confirms the operation."
      }
    ],
    flow:
      "DELETE /resource/:id → Find → Authorize → Delete → Response"
  },

  code: {
    title: "Creating a DELETE API",
    description:
      "This example demonstrates the structure of a DELETE endpoint.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    message: "Product deleted successfully",
    id: productId,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `DELETE /api/products/10

{
  "message": "Product deleted successfully",
  "id": "10"
}`,
    explanation:
      "The route parameter identifies which product should be deleted. In a real application, the backend would remove that product from a database after appropriate validation and authorization."
  },

  interview: {
    question: "What is DELETE used for in a REST API?",
    answer:
      "DELETE is commonly used to remove an existing resource from the server.",
    tip:
      "Interview Tip: Mention that real applications should validate the resource and authorization before deleting it."
  },

  tricky: {
    question: "Does DELETE always return data in the response body?",
    answer:
      "No. A successful DELETE can return a response body or use HTTP 204 No Content when no body is needed."
  },

  practice: {
    question:
      "Create DELETE /api/users/:id and return the ID of the deleted user.",
    hint:
      "Read the ID using req.params.id."
  },

  challenge: {
    title: "Mini Challenge — Delete Product API",
    description:
      "Create a REST endpoint for deleting a product.",
    task:
      "Create DELETE /api/products/:id and return an appropriate success response. Also handle the case where a product ID is not available."
  }
},

"postman-api-testing": {
  concept: {
    heading: "API Testing with Postman",
    paragraphs: [
      "Postman is a tool commonly used to test and develop APIs.",
      "It allows developers to send HTTP requests without needing to build a frontend application first.",
      "You can test methods such as GET, POST, PUT, PATCH, and DELETE using Postman.",
      "Postman allows you to provide request URLs, headers, query parameters, request bodies, and authentication information.",
      "API testing with Postman helps developers verify whether backend endpoints return the expected status codes and data."
    ],
    remember:
      "Remember: Postman allows you to manually send and inspect API requests and responses during backend development."
  },

  analogy: {
    heading: "Think of Postman Like an API Testing Console",
    items: [
      {
        icon: "🧪",
        title: "Prepare Request",
        text: "Choose the HTTP method and enter the API URL."
      },
      {
        icon: "📋",
        title: "Add Data",
        text: "Add query parameters, headers, or request body when required."
      },
      {
        icon: "📤",
        title: "Send",
        text: "Postman sends the HTTP request to the server."
      },
      {
        icon: "🔍",
        title: "Inspect",
        text: "You can inspect the status code, response headers, and response body."
      }
    ]
  },

  visual: {
    heading: "Testing an API with Postman",
    description:
      "Postman provides a simple workflow for checking API behavior.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Server",
        text: "Run the Node.js or Express backend."
      },
      {
        icon: "2️⃣",
        title: "Choose Method",
        text: "Select GET, POST, PUT, PATCH, or DELETE."
      },
      {
        icon: "3️⃣",
        title: "Enter URL",
        text: "Enter the API endpoint URL."
      },
      {
        icon: "4️⃣",
        title: "Add Data",
        text: "Add headers or JSON body when required."
      },
      {
        icon: "5️⃣",
        title: "Send",
        text: "Send the request and inspect the response."
      }
    ],
    flow:
      "Start Server → Choose Method → Enter URL → Add Data → Send → Inspect Response"
  },

  code: {
    title: "Example API Testing Request",
    description:
      "Suppose the Express application provides a GET products endpoint.",
    language: "javascript",
    code: `GET http://localhost:3000/api/products

Expected Status:
200 OK

Expected Response:
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  }
]`,
    output:
      `Status: 200 OK

Response:
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  }
]`,
    explanation:
      "In Postman, select GET, enter the endpoint URL, and click Send. Postman displays the HTTP status, response headers, and response body."
  },

  interview: {
    question: "What is Postman used for?",
    answer:
      "Postman is commonly used to create, send, test, and inspect HTTP API requests and responses.",
    tip:
      "Interview Tip: Mention that Postman can test different HTTP methods, request bodies, headers, authentication, and response status codes."
  },

  tricky: {
    question: "Do you need a frontend application to test an API with Postman?",
    answer:
      "No. Postman can send API requests directly, so a separate frontend is not required for basic API testing."
  },

  practice: {
    question:
      "Use Postman to test a GET endpoint and inspect its status code and JSON response.",
    hint:
      "Start the Express server, choose GET in Postman, enter the localhost API URL, and click Send."
  },

  challenge: {
    title: "Mini Challenge — Test a REST API",
    description:
      "Use Postman to test the main REST API operations.",
    task:
      "Create a small Express API with GET, POST, PUT, PATCH, and DELETE endpoints. Test each endpoint in Postman and record the request method, URL, status code, and response."
  }
},
"mongodb-connection": {
  concept: {
    heading: "MongoDB Connection",
    paragraphs: [
      "MongoDB is a document-oriented NoSQL database commonly used with Node.js applications.",
      "A Node.js application needs a database connection before it can read or write MongoDB data.",
      "The MongoDB Node.js driver can connect directly to MongoDB, while Mongoose provides a higher-level way to work with MongoDB.",
      "A MongoDB connection usually uses a connection string that identifies the database server and database name.",
      "In production applications, connection strings and credentials should be stored securely using environment variables."
    ],
    remember:
      "Remember: A Node.js application must establish a MongoDB connection before performing database operations."
  },

  analogy: {
    heading: "Think of a Database Connection Like a Phone Connection",
    items: [
      {
        icon: "📱",
        title: "Application",
        text: "The Node.js application wants to communicate with the database."
      },
      {
        icon: "🔗",
        title: "Connection",
        text: "A connection string tells the application where the database is located."
      },
      {
        icon: "🗄️",
        title: "Database",
        text: "MongoDB receives database operations from the application."
      },
      {
        icon: "🔄",
        title: "Communication",
        text: "The application can read and write data through the established connection."
      }
    ]
  },

  visual: {
    heading: "MongoDB Connection Flow",
    description:
      "The application first connects to MongoDB and then performs database operations.",
    steps: [
      {
        icon: "💻",
        title: "Node.js App",
        text: "The backend application starts."
      },
      {
        icon: "🔗",
        title: "Connection String",
        text: "The application uses a MongoDB connection string."
      },
      {
        icon: "🗄️",
        title: "MongoDB",
        text: "MongoDB accepts the connection."
      },
      {
        icon: "✅",
        title: "Connected",
        text: "The application can now perform database operations."
      }
    ],
    flow:
      "Node.js → Connection String → MongoDB → Connected → Database Operations"
  },

  code: {
    title: "Connecting MongoDB with Mongoose",
    description:
      "This example connects a Node.js application to MongoDB using Mongoose.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/nodeapp")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });`,
    output:
      `MongoDB connected successfully`,
    explanation:
      "mongoose.connect() establishes the database connection. The then() callback runs when the connection succeeds, while catch() handles connection errors."
  },

  interview: {
    question: "How do you connect Node.js with MongoDB?",
    answer:
      "A Node.js application can connect to MongoDB using the MongoDB driver or an ODM such as Mongoose. With Mongoose, mongoose.connect() is commonly used.",
    tip:
      "Interview Tip: Mention connection strings, error handling, and environment variables for production credentials."
  },

  tricky: {
    question: "Can a Node.js application perform MongoDB operations without connecting to MongoDB?",
    answer:
      "No. The application needs an active database connection or an appropriate database client connection before it can perform database operations."
  },

  practice: {
    question:
      "Create a Node.js file that connects to a local MongoDB database named nodeapp.",
    hint:
      "Install mongoose and use mongoose.connect()."
  },

  challenge: {
    title: "Mini Challenge — MongoDB Connection",
    description:
      "Create a reusable MongoDB connection file for a Node.js application.",
    task:
      "Install Mongoose, create a database connection module, connect to a database named nodeapp, and log success or failure."
  }
},

"mongoose": {
  concept: {
    heading: "Mongoose",
    paragraphs: [
      "Mongoose is an Object Data Modeling library for MongoDB and Node.js.",
      "It provides schemas, models, validation, middleware, and convenient methods for working with MongoDB documents.",
      "A Mongoose schema defines the structure and rules for documents used by an application.",
      "A Mongoose model provides an interface for creating, reading, updating, and deleting documents.",
      "Mongoose helps organize database code in larger Node.js applications."
    ],
    remember:
      "Remember: Mongoose provides a structured way to work with MongoDB from Node.js."
  },

  analogy: {
    heading: "Think of Mongoose Like a Database Organizer",
    items: [
      {
        icon: "📋",
        title: "Schema",
        text: "Defines what fields a document should contain."
      },
      {
        icon: "🏗️",
        title: "Model",
        text: "Provides methods for working with documents."
      },
      {
        icon: "📄",
        title: "Document",
        text: "Represents an individual MongoDB record."
      },
      {
        icon: "🗄️",
        title: "Collection",
        text: "Stores related MongoDB documents."
      }
    ]
  },

  visual: {
    heading: "How Mongoose Fits Into Node.js",
    description:
      "Mongoose sits between application code and MongoDB and provides a structured data layer.",
    steps: [
      {
        icon: "💻",
        title: "Node.js Application",
        text: "The backend contains application logic."
      },
      {
        icon: "📋",
        title: "Schema",
        text: "The schema describes document structure."
      },
      {
        icon: "🏗️",
        title: "Model",
        text: "The model provides database operations."
      },
      {
        icon: "🗄️",
        title: "MongoDB",
        text: "MongoDB stores the documents."
      }
    ],
    flow:
      "Node.js → Mongoose Schema → Mongoose Model → MongoDB Collection"
  },

  code: {
    title: "Basic Mongoose Setup",
    description:
      "This example creates a simple Mongoose schema and model.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

console.log("User model created");`,
    output:
      `User model created`,
    explanation:
      "mongoose.Schema() defines the document structure. mongoose.model() creates a model that can be used to interact with the corresponding MongoDB collection."
  },

  interview: {
    question: "What is Mongoose?",
    answer:
      "Mongoose is an ODM library for Node.js and MongoDB that provides schemas, models, validation, and convenient database operations.",
    tip:
      "Interview Tip: Clearly distinguish MongoDB from Mongoose. MongoDB is the database; Mongoose is a Node.js library used to work with it."
  },

  tricky: {
    question: "Is Mongoose itself a database?",
    answer:
      "No. Mongoose is a library that helps Node.js applications work with MongoDB."
  },

  practice: {
    question:
      "Create a Mongoose schema for a product with name, price, and category fields.",
    hint:
      "Use new mongoose.Schema() and then create a model."
  },

  challenge: {
    title: "Mini Challenge — Product Model",
    description:
      "Create your first Mongoose model.",
    task:
      "Create a product schema containing name, price, category, and stock fields, then create a Product model from the schema."
  }
},

"mongoose-schema": {
  concept: {
    heading: "Schema",
    paragraphs: [
      "A Mongoose schema defines the structure of documents used by a model.",
      "A schema can specify field types such as String, Number, Boolean, Date, and Array.",
      "Schemas can also contain validation rules such as required, minimum values, maximum values, and default values.",
      "Schema validation helps applications maintain consistent data before documents are saved.",
      "A schema is converted into a model that can perform database operations."
    ],
    remember:
      "Remember: A Mongoose schema describes the structure and validation rules for MongoDB documents."
  },

  analogy: {
    heading: "Think of a Schema Like a Form Template",
    items: [
      {
        icon: "📄",
        title: "Template",
        text: "The schema acts like a template for a document."
      },
      {
        icon: "🏷️",
        title: "Fields",
        text: "The schema defines fields such as name, email, and price."
      },
      {
        icon: "✅",
        title: "Validation",
        text: "Rules can determine which values are acceptable."
      },
      {
        icon: "💾",
        title: "Save",
        text: "Valid data can be stored as a MongoDB document."
      }
    ]
  },

  visual: {
    heading: "Schema Flow",
    description:
      "A schema defines the expected structure before the application creates documents.",
    steps: [
      {
        icon: "1️⃣",
        title: "Define Fields",
        text: "Specify the fields required by the application."
      },
      {
        icon: "2️⃣",
        title: "Define Types",
        text: "Specify types such as String and Number."
      },
      {
        icon: "3️⃣",
        title: "Add Validation",
        text: "Add rules such as required and minimum values."
      },
      {
        icon: "4️⃣",
        title: "Create Model",
        text: "Use the schema to create a Mongoose model."
      }
    ],
    flow:
      "Fields → Types → Validation → Schema → Model → MongoDB"
  },

  code: {
    title: "Creating a Mongoose Schema",
    description:
      "This example defines a product schema with validation rules.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

console.log("Product schema created");`,
    output:
      `Product schema created`,
    explanation:
      "The schema defines the type and validation rules for each field. name, price, and category are required, while inStock has a default value of true."
  },

  interview: {
    question: "What is a schema in Mongoose?",
    answer:
      "A schema defines the structure, data types, and validation rules for documents handled by a Mongoose model.",
    tip:
      "Interview Tip: Mention that schemas can contain validation rules and default values."
  },

  tricky: {
    question: "Does a schema directly represent a MongoDB collection?",
    answer:
      "A schema defines document structure for a Mongoose model. The model is associated with a MongoDB collection."
  },

  practice: {
    question:
      "Create a user schema with name, email, age, and active fields.",
    hint:
      "Use String, Number, and Boolean field types and add suitable validation."
  },

  challenge: {
    title: "Mini Challenge — User Schema",
    description:
      "Create a validated user schema.",
    task:
      "Create a user schema with required name and email, a minimum age of 18, and an active field with a default value of true."
  }
},

"mongoose-model": {
  concept: {
    heading: "Model",
    paragraphs: [
      "A Mongoose model is created from a schema and provides an interface for interacting with MongoDB documents.",
      "Models provide methods for creating, finding, updating, and deleting documents.",
      "For example, a User model can be used to create and query user documents.",
      "The model connects application code with a MongoDB collection.",
      "Models are commonly placed in separate files to keep backend projects organized."
    ],
    remember:
      "Remember: A Mongoose model is created from a schema and provides methods for working with MongoDB documents."
  },

  analogy: {
    heading: "Think of a Model Like a Database Manager",
    items: [
      {
        icon: "📋",
        title: "Schema",
        text: "The schema defines how the data should look."
      },
      {
        icon: "🏗️",
        title: "Model",
        text: "The model uses the schema to work with documents."
      },
      {
        icon: "🔍",
        title: "Query",
        text: "The model can find existing documents."
      },
      {
        icon: "💾",
        title: "Save",
        text: "The model can create or update documents."
      }
    ]
  },

  visual: {
    heading: "Schema to Model Flow",
    description:
      "The model is the application-level interface used to perform database operations.",
    steps: [
      {
        icon: "📋",
        title: "Schema",
        text: "Define the document structure."
      },
      {
        icon: "🏗️",
        title: "Create Model",
        text: "Pass the schema to mongoose.model()."
      },
      {
        icon: "🔍",
        title: "Use Model",
        text: "Call model methods such as find() or create()."
      },
      {
        icon: "🗄️",
        title: "MongoDB",
        text: "The model communicates with the MongoDB collection."
      }
    ],
    flow:
      "Schema → Model → Query/Operation → MongoDB Collection"
  },

  code: {
    title: "Creating a Mongoose Model",
    description:
      "This example creates a Product model from a schema.",
    language: "javascript",
    code: `const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

const product = new Product({
  name: "Keyboard",
  price: 1500,
});

console.log(product);`,
    output:
      `{
  name: "Keyboard",
  price: 1500
}`,
    explanation:
      "The Product model is created from productSchema. A new Product instance can then be created using the model."
  },

  interview: {
    question: "What is a Mongoose model?",
    answer:
      "A Mongoose model is a compiled representation of a schema that provides methods for interacting with MongoDB documents.",
    tip:
      "Interview Tip: Explain the relationship as Schema → Model → Document."
  },

  tricky: {
    question: "Can you create a Mongoose model without a schema?",
    answer:
      "Mongoose models are normally created from schemas, which define the structure and behavior expected for the documents."
  },

  practice: {
    question:
      "Create an Order schema and an Order model.",
    hint:
      "Define the schema first and pass it to mongoose.model()."
  },

  challenge: {
    title: "Mini Challenge — Order Model",
    description:
      "Create a reusable Mongoose model for orders.",
    task:
      "Create an Order schema with productName, quantity, price, and status fields, then create an Order model from it."
  }
},

"mongodb-crud": {
  concept: {
    heading: "CRUD with MongoDB",
    paragraphs: [
      "CRUD stands for Create, Read, Update, and Delete.",
      "These four operations represent the basic data operations performed by most backend applications.",
      "With Mongoose, models provide methods for creating documents, finding documents, updating documents, and deleting documents.",
      "CRUD operations are commonly exposed through REST API endpoints.",
      "A typical application connects the frontend to REST endpoints, which then use Mongoose to communicate with MongoDB."
    ],
    remember:
      "Remember: CRUD means Create, Read, Update, and Delete—the four basic operations used to manage data."
  },

  analogy: {
    heading: "Think of CRUD Like Managing a Product List",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Add a new product to the collection."
      },
      {
        icon: "👀",
        title: "Read",
        text: "Retrieve products from the collection."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Change existing product information."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a product from the collection."
      }
    ]
  },

  visual: {
    heading: "MongoDB CRUD Flow",
    description:
      "CRUD operations connect API actions with database operations.",
    steps: [
      {
        icon: "➕",
        title: "Create",
        text: "Create a new MongoDB document."
      },
      {
        icon: "🔍",
        title: "Read",
        text: "Find one or more documents."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Modify an existing document."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove an existing document."
      }
    ],
    flow:
      "Create → Read → Update → Delete → MongoDB Data Management"
  },

  code: {
    title: "Basic Mongoose CRUD Operations",
    description:
      "This example demonstrates common Mongoose operations.",
    language: "javascript",
    code: `const Product = require("./models/Product");

// Create
const product = await Product.create({
  name: "Laptop",
  price: 50000,
});

// Read
const products = await Product.find();

// Update
await Product.findByIdAndUpdate(
  product._id,
  { price: 52000 },
  { new: true }
);

// Delete
await Product.findByIdAndDelete(product._id);

console.log("CRUD operations completed");`,
    output:
      `CRUD operations completed`,
    explanation:
      "Product.create() creates a document, Product.find() reads documents, findByIdAndUpdate() updates a document, and findByIdAndDelete() removes a document. These operations are asynchronous and should be handled with async/await or promises."
  },

  interview: {
    question: "What does CRUD stand for?",
    answer:
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used to manage application data.",
    tip:
      "Interview Tip: Connect CRUD with REST methods: POST commonly maps to Create, GET to Read, PUT/PATCH to Update, and DELETE to Delete."
  },

  tricky: {
    question: "Are CRUD operations limited to MongoDB?",
    answer:
      "No. CRUD is a general concept used with many types of databases, including SQL and NoSQL databases."
  },

  practice: {
    question:
      "Create a Product model and practice creating, finding, updating, and deleting a product.",
    hint:
      "Use create(), find(), findByIdAndUpdate(), and findByIdAndDelete()."
  },

  challenge: {
    title: "Mini Challenge — Product CRUD API",
    description:
      "Connect Express, Mongoose, and MongoDB to build a complete CRUD backend.",
    task:
      "Create Product schema and model, connect MongoDB, then build POST, GET, PUT or PATCH, and DELETE endpoints for products. Test every endpoint with Postman."
  }
},
"authentication-basics": {
  concept: {
    heading: "Authentication Basics",
    paragraphs: [
      "Authentication is the process of verifying who a user is.",
      "A backend application usually authenticates users by checking credentials such as an email address and password.",
      "Authentication is different from authorization. Authentication answers 'Who are you?', while authorization answers 'What are you allowed to do?'.",
      "A typical authentication system includes registration, login, password protection, and a way to maintain the user's authenticated session or identity.",
      "In modern Node.js APIs, authentication is often implemented using secure password hashing and tokens such as JSON Web Tokens."
    ],
    remember:
      "Remember: Authentication verifies identity, while authorization determines what an authenticated user is allowed to access."
  },

  analogy: {
    heading: "Think of Authentication Like an Entry Gate",
    items: [
      {
        icon: "🚪",
        title: "Entry Point",
        text: "The user wants to access a protected application."
      },
      {
        icon: "🪪",
        title: "Identity",
        text: "The user provides information that identifies the account."
      },
      {
        icon: "🔐",
        title: "Verification",
        text: "The server verifies the user's credentials."
      },
      {
        icon: "✅",
        title: "Access",
        text: "A successfully authenticated user can continue according to their permissions."
      }
    ]
  },

  visual: {
    heading: "Authentication Flow",
    description:
      "A typical authentication system verifies credentials before allowing access to protected resources.",
    steps: [
      {
        icon: "👤",
        title: "User",
        text: "The user provides login credentials."
      },
      {
        icon: "📤",
        title: "Login Request",
        text: "The client sends the credentials to the backend."
      },
      {
        icon: "🔍",
        title: "Verify",
        text: "The server checks the account and credentials."
      },
      {
        icon: "🎫",
        title: "Authentication Result",
        text: "The server creates an authenticated session or token when appropriate."
      },
      {
        icon: "🔒",
        title: "Protected Access",
        text: "The authenticated client can request protected resources."
      }
    ],
    flow:
      "User → Login Request → Verify Credentials → Authentication Result → Protected Resource"
  },

  code: {
    title: "Basic Authentication Concept",
    description:
      "This example demonstrates the basic structure of checking credentials. It is only for understanding the flow; passwords should never be stored as plain text.",
    language: "javascript",
    code: `const users = [
  {
    email: "user@example.com",
    password: "example-password",
  },
];

const email = "user@example.com";
const password = "example-password";

const user = users.find((item) => item.email === email);

if (user && user.password === password) {
  console.log("Authentication successful");
} else {
  console.log("Invalid credentials");
}`,
    output:
      `Authentication successful`,
    explanation:
      "The example shows the basic idea of finding a user and verifying credentials. Real applications should never store plain-text passwords. Passwords should be securely hashed before storage."
  },

  interview: {
    question: "What is authentication?",
    answer:
      "Authentication is the process of verifying the identity of a user or client.",
    tip:
      "Interview Tip: Clearly distinguish authentication from authorization. Authentication verifies identity; authorization controls access."
  },

  tricky: {
    question: "Is authentication the same as authorization?",
    answer:
      "No. Authentication verifies who the user is, while authorization determines what that authenticated user is allowed to access."
  },

  practice: {
    question:
      "Explain the authentication flow from user login to accessing a protected API.",
    hint:
      "Think about credentials, verification, token or session, and protected resources."
  },

  challenge: {
    title: "Mini Challenge — Authentication Flow",
    description:
      "Design the authentication flow for a Node.js application.",
    task:
      "Write down the steps for registration, login, authentication result, and access to a protected route. Identify where password hashing and token verification would be used."
  }
},

"password-hashing": {
  concept: {
    heading: "Password Hashing",
    paragraphs: [
      "Password hashing converts a password into a one-way representation before it is stored in a database.",
      "A secure application should never store users' plain-text passwords.",
      "bcrypt is a commonly used Node.js package for password hashing and password comparison.",
      "During registration, the password is hashed before it is stored.",
      "During login, the submitted password is compared with the stored hash instead of comparing plain-text passwords."
    ],
    remember:
      "Remember: Store password hashes, not plain-text passwords."
  },

  analogy: {
    heading: "Think of Password Hashing Like a Secure Lock",
    items: [
      {
        icon: "🔑",
        title: "Original Password",
        text: "The user enters a password during registration."
      },
      {
        icon: "🔐",
        title: "Hash",
        text: "The password is converted into a secure hash."
      },
      {
        icon: "💾",
        title: "Database",
        text: "Only the hash is stored in the database."
      },
      {
        icon: "🔍",
        title: "Compare",
        text: "During login, the submitted password is compared against the stored hash."
      }
    ]
  },

  visual: {
    heading: "Password Hashing Flow",
    description:
      "Passwords should be protected before they are stored in the database.",
    steps: [
      {
        icon: "👤",
        title: "Registration",
        text: "The user submits a password."
      },
      {
        icon: "🔐",
        title: "Hash Password",
        text: "bcrypt creates a password hash."
      },
      {
        icon: "💾",
        title: "Store Hash",
        text: "The application stores the hash instead of the original password."
      },
      {
        icon: "🔎",
        title: "Login",
        text: "The submitted password is compared with the stored hash."
      }
    ],
    flow:
      "Password → bcrypt Hash → Store Hash → Login → bcrypt Compare → Result"
  },

  code: {
    title: "Hashing a Password with bcrypt",
    description:
      "This example demonstrates how bcrypt can hash and compare passwords.",
    language: "javascript",
    code: `const bcrypt = require("bcrypt");

const password = "example-password";

async function demo() {
  const hash = await bcrypt.hash(password, 10);

  console.log("Password Hash:");
  console.log(hash);

  const isMatch = await bcrypt.compare(password, hash);

  console.log("Password Match:", isMatch);
}

demo();`,
    output:
      `Password Hash:
$2b$10$...

Password Match: true`,
    explanation:
      "bcrypt.hash() creates a password hash using a work factor. bcrypt.compare() checks whether a plain-text password matches the stored hash. The actual hash value will be different each time because bcrypt uses a salt."
  },

  interview: {
    question: "Why should passwords be hashed?",
    answer:
      "Passwords should be hashed so that the original password is not stored directly in the database.",
    tip:
      "Interview Tip: Mention bcrypt, one-way hashing, salt, and bcrypt.compare() when explaining password security."
  },

  tricky: {
    question: "Can you get the original password directly from a bcrypt hash?",
    answer:
      "bcrypt is designed as a one-way password hashing system. Applications should verify a password using bcrypt.compare() rather than trying to reverse the hash."
  },

  practice: {
    question:
      "Install bcrypt and create a function that hashes a password and then verifies it.",
    hint:
      "Use bcrypt.hash() and bcrypt.compare()."
  },

  challenge: {
    title: "Mini Challenge — Secure Password Storage",
    description:
      "Practice implementing secure password handling.",
    task:
      "Create a small Node.js script that hashes a password, prints the hash, and verifies both a correct and an incorrect password using bcrypt.compare()."
  }
},

"jwt": {
  concept: {
    heading: "JWT Authentication",
    paragraphs: [
      "JWT stands for JSON Web Token. It is a token format commonly used to represent authentication information between a client and server.",
      "After successful login, a server can create a signed JWT containing selected claims such as a user identifier.",
      "The client can send the token with later requests to protected endpoints.",
      "The server verifies the token signature before trusting the token's claims.",
      "A JWT is not a replacement for password hashing. Passwords and tokens solve different parts of the authentication process."
    ],
    remember:
      "Remember: JWT can carry signed authentication claims so the server can verify the identity associated with a request."
  },

  analogy: {
    heading: "Think of JWT Like an Entry Pass",
    items: [
      {
        icon: "🎫",
        title: "Create Pass",
        text: "The server creates a signed token after successful authentication."
      },
      {
        icon: "📱",
        title: "Client Stores",
        text: "The client keeps the token according to the application's security design."
      },
      {
        icon: "📤",
        title: "Send Token",
        text: "The client sends the token with a protected API request."
      },
      {
        icon: "🔍",
        title: "Verify",
        text: "The server verifies the token before allowing access."
      }
    ]
  },

  visual: {
    heading: "JWT Authentication Flow",
    description:
      "JWT allows a server to verify a signed token sent by an authenticated client.",
    steps: [
      {
        icon: "👤",
        title: "Login",
        text: "The user submits valid credentials."
      },
      {
        icon: "🎫",
        title: "Create JWT",
        text: "The server signs a token containing appropriate claims."
      },
      {
        icon: "📱",
        title: "Client",
        text: "The client stores and uses the token according to the application's security design."
      },
      {
        icon: "📤",
        title: "Protected Request",
        text: "The client sends the token with a protected request."
      },
      {
        icon: "✅",
        title: "Verify",
        text: "The server verifies the token and continues if valid."
      }
    ],
    flow:
      "Login → Credentials Verified → JWT Created → Client Sends JWT → Server Verifies JWT"
  },

  code: {
    title: "Creating and Verifying a JWT",
    description:
      "This example demonstrates the basic jsonwebtoken workflow.",
    language: "javascript",
    code: `const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not configured");
}

const token = jwt.sign(
  { userId: "user-101" },
  secret,
  { expiresIn: "1h" }
);

console.log("Token created");

const decoded = jwt.verify(token, secret);

console.log(decoded);`,
    output:
      `Token created

{
  userId: "user-101",
  iat: ...,
  exp: ...
}`,
    explanation:
      "jwt.sign() creates a signed token and jwt.verify() verifies it. The secret should come from a secure environment variable and should never be hardcoded or committed to source control."
  },

  interview: {
    question: "What is JWT authentication?",
    answer:
      "JWT authentication uses signed JSON Web Tokens to represent authentication claims that a server can verify on later requests.",
    tip:
      "Interview Tip: Explain signing, verification, expiration, and the Authorization header."
  },

  tricky: {
    question: "Does a JWT encrypt the data inside the token?",
    answer:
      "A standard signed JWT provides integrity and authenticity through its signature, but its payload is generally readable. Sensitive secrets should not be placed in a normal JWT payload."
  },

  practice: {
    question:
      "Create a JWT containing a user ID and verify it using jsonwebtoken.",
    hint:
      "Use jwt.sign() and jwt.verify() with a secret from process.env.JWT_SECRET."
  },

  challenge: {
    title: "Mini Challenge — JWT Token",
    description:
      "Create a basic JWT authentication utility.",
    task:
      "Create a function that generates a JWT containing a user ID and another function that verifies the token. Read the signing secret from an environment variable."
  }
},

"login-register-api": {
  concept: {
    heading: "Login & Register API",
    paragraphs: [
      "A registration API creates a new user account after validating the submitted information.",
      "The password should be hashed before the user document is stored in MongoDB.",
      "A login API finds the account using an identifier such as email and compares the submitted password with the stored password hash.",
      "After successful login, the backend can issue an authentication token such as a JWT.",
      "Real applications should also validate input, handle duplicate accounts, protect secrets, and return appropriate HTTP status codes."
    ],
    remember:
      "Remember: Registration stores a password hash; login verifies the password and can issue an authentication token."
  },

  analogy: {
    heading: "Think of Register and Login Like Creating and Using an Account",
    items: [
      {
        icon: "📝",
        title: "Register",
        text: "A new user submits account information."
      },
      {
        icon: "🔐",
        title: "Protect Password",
        text: "The password is hashed before storage."
      },
      {
        icon: "🔑",
        title: "Login",
        text: "The user submits credentials to access the account."
      },
      {
        icon: "🎫",
        title: "Token",
        text: "After successful authentication, the server can issue a JWT."
      }
    ]
  },

  visual: {
    heading: "Register and Login Flow",
    description:
      "Registration creates the account, while login verifies the account and creates an authenticated session or token.",
    steps: [
      {
        icon: "1️⃣",
        title: "Register",
        text: "Receive and validate user information."
      },
      {
        icon: "2️⃣",
        title: "Hash Password",
        text: "Hash the password using bcrypt."
      },
      {
        icon: "3️⃣",
        title: "Save User",
        text: "Store the user and password hash in MongoDB."
      },
      {
        icon: "4️⃣",
        title: "Login",
        text: "Find the user and compare the submitted password."
      },
      {
        icon: "5️⃣",
        title: "Issue Token",
        text: "Create a JWT after successful authentication."
      }
    ],
    flow:
      "Register → Validate → Hash → Save → Login → Compare → JWT"
  },

  code: {
    title: "Register and Login API Structure",
    description:
      "This example demonstrates the core structure using Express, bcrypt, and JWT. Database persistence is represented by comments.",
    language: "javascript",
    code: `const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  // Save email and passwordHash to MongoDB.

  res.status(201).json({
    message: "User registered successfully",
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email in MongoDB.
  const user = null;

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({
      message: "JWT secret is not configured",
    });
  }

  const token = jwt.sign(
    { userId: user._id },
    secret,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `POST /api/register
201 Created

{
  "message": "User registered successfully"
}

POST /api/login
200 OK

{
  "token": "JWT_TOKEN"
}`,
    explanation:
      "Registration hashes the password before storage. Login verifies the password hash and creates a JWT. In a real application, the user lookup and storage operations would use a MongoDB model."
  },

  interview: {
    question: "What happens during a typical login process?",
    answer:
      "The server finds the user account, compares the submitted password with the stored password hash, and after successful verification can issue an authentication token.",
    tip:
      "Interview Tip: Explain the complete flow rather than only saying 'check email and password'."
  },

  tricky: {
    question: "Should a login API return the user's password?",
    answer:
      "No. Passwords should never be returned to the client. The server should only confirm authentication and return the appropriate authentication result."
  },

  practice: {
    question:
      "Design register and login endpoints using Express, bcrypt, MongoDB, and JWT.",
    hint:
      "Registration: validate → hash → save. Login: find → compare → create JWT."
  },

  challenge: {
    title: "Mini Challenge — Authentication API",
    description:
      "Build the foundation of a real user authentication system.",
    task:
      "Create User schema and model, then implement POST /api/register and POST /api/login using bcrypt for passwords and JWT for successful authentication."
  }
},

"protected-routes": {
  concept: {
    heading: "Protected Routes",
    paragraphs: [
      "A protected route is an API endpoint that requires successful authentication before its main logic can run.",
      "A common JWT approach reads the token from the Authorization header.",
      "The authentication middleware verifies the token and can attach the authenticated user's identity to the request.",
      "If the token is missing or invalid, the middleware can return an appropriate unauthorized response.",
      "Protected routes are commonly used for profile data, dashboards, orders, admin operations, and other private resources."
    ],
    remember:
      "Remember: Authentication middleware verifies the user's token before allowing access to protected routes."
  },

  analogy: {
    heading: "Think of a Protected Route Like a Security Gate",
    items: [
      {
        icon: "🚪",
        title: "Protected Area",
        text: "The API endpoint contains information that should not be publicly accessible."
      },
      {
        icon: "🎫",
        title: "Token",
        text: "The client provides an authentication token."
      },
      {
        icon: "🔍",
        title: "Verify",
        text: "Middleware verifies the token."
      },
      {
        icon: "✅",
        title: "Allow Access",
        text: "A valid token allows the request to continue."
      }
    ]
  },

  visual: {
    heading: "Protected Route Flow",
    description:
      "Authentication middleware checks the token before the protected route executes.",
    steps: [
      {
        icon: "📤",
        title: "Request",
        text: "The client requests a protected endpoint."
      },
      {
        icon: "🎫",
        title: "Authorization Header",
        text: "The request contains a Bearer token."
      },
      {
        icon: "🔍",
        title: "Verify Token",
        text: "Middleware verifies the JWT."
      },
      {
        icon: "❌",
        title: "Reject or Continue",
        text: "Invalid tokens are rejected; valid tokens continue."
      },
      {
        icon: "🔒",
        title: "Protected Route",
        text: "The authenticated request reaches the route handler."
      }
    ],
    flow:
      "Request → Bearer Token → Middleware → Verify → Protected Route"
  },

  code: {
    title: "JWT Protected Route Middleware",
    description:
      "This example demonstrates middleware that reads and verifies a Bearer token.",
    language: "javascript",
    code: `const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  const token = authorization.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({
      message: "JWT secret is not configured",
    });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected profile data",
    user: req.user,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    output:
      `Without valid token:
401 Unauthorized

With valid token:
200 OK

{
  "message": "Protected profile data",
  "user": {
    "userId": "user-101"
  }
}`,
    explanation:
      "The middleware reads the Authorization header, extracts the Bearer token, verifies it using the JWT secret, and stores the decoded claims on req.user before calling next()."
  },

  interview: {
    question: "How do you protect a route using JWT in Express?",
    answer:
      "Create authentication middleware that reads the JWT from the Authorization header, verifies it, and calls next() only when the token is valid.",
    tip:
      "Interview Tip: Explain the Bearer token format and the role of middleware."
  },

  tricky: {
    question: "What should happen when a protected route receives an invalid JWT?",
    answer:
      "The authentication middleware should reject the request, commonly with HTTP 401 Unauthorized, instead of allowing the protected route to execute."
  },

  practice: {
    question:
      "Create authentication middleware that verifies a JWT before allowing access to /api/profile.",
    hint:
      "Read req.headers.authorization, extract the Bearer token, and use jwt.verify()."
  },

  challenge: {
    title: "Mini Challenge — Protected Profile API",
    description:
      "Build a protected API endpoint using JWT middleware.",
    task:
      "Create JWT authentication middleware and protect GET /api/profile. Return 401 when the token is missing or invalid and return the authenticated user's information when the token is valid."
  }
},
"node-project-1": {
  concept: {
    heading: "Project 1 — Todo REST API",
    paragraphs: [
      "A Todo REST API is a practical Node.js project used to understand how Express, MongoDB, Mongoose, routes, controllers, and CRUD operations work together.",
      "The API allows clients to create, read, update, and delete todo items using HTTP requests.",
      "This project is useful because it combines several Node.js concepts into one realistic backend application.",
      "A typical Todo API can provide endpoints such as GET /api/todos, POST /api/todos, PUT /api/todos/:id, and DELETE /api/todos/:id.",
    ],
    remember:
      "Remember: A Todo REST API combines Express, MongoDB, Mongoose, routing, and CRUD operations.",
  },
  analogy: {
    heading: "Think of a Todo API Like a Task Manager",
    items: [
      {
        icon: "📝",
        title: "Create",
        text: "Add a new task to the task manager.",
      },
      {
        icon: "📋",
        title: "Read",
        text: "View existing tasks.",
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Change the task title or completion status.",
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a task that is no longer required.",
      },
    ],
  },
  visual: {
    heading: "Todo REST API Flow",
    description:
      "The client sends an HTTP request to Express. The server processes the request and communicates with MongoDB through Mongoose.",
    steps: [
      {
        icon: "💻",
        title: "Client",
        text: "A frontend application or Postman sends an HTTP request.",
      },
      {
        icon: "🛣️",
        title: "Express Route",
        text: "Express identifies the requested endpoint and HTTP method.",
      },
      {
        icon: "⚙️",
        title: "Controller Logic",
        text: "Application logic processes the requested operation.",
      },
      {
        icon: "🍃",
        title: "MongoDB",
        text: "Mongoose communicates with MongoDB to store or retrieve data.",
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server sends JSON data back to the client.",
      },
    ],
    flow:
      "Client → Express Route → Controller → Mongoose → MongoDB → JSON Response",
  },
  code: {
    title: "Todo API — Core Example",
    description:
      "The following example shows the basic structure of a Todo GET endpoint.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

app.use(express.json());

const todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build REST API", completed: true },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});`,
    output: `GET http://localhost:5000/api/todos

[
  {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
  },
  {
    "id": 2,
    "title": "Build REST API",
    "completed": true
  }
]`,
    explanation:
      "The Express server exposes a GET endpoint that returns todo data as JSON. In a complete project, the array would normally be replaced with MongoDB and Mongoose operations.",
  },
  interview: {
    question: "How would you design a Todo REST API?",
    answer:
      "A Todo REST API can use Express for routing, Mongoose for MongoDB operations, and separate routes or controllers for creating, reading, updating, and deleting todo documents.",
    tip:
      "Interview Tip: Explain the HTTP method used for each CRUD operation and how the request flows from route to database.",
  },
  tricky: {
    question: "Why should a REST API return JSON instead of HTML for a typical frontend client?",
    answer:
      "A REST API usually provides structured data such as JSON so that different clients, including React applications or mobile applications, can consume the same backend service.",
  },
  practice: {
    question:
      "Create a Todo REST API with GET, POST, PUT, and DELETE endpoints.",
    hint:
      "Start with Express routes and then connect the Todo model to MongoDB using Mongoose.",
  },
  challenge: {
    title: "Project Challenge — Complete Todo API",
    description:
      "Build a complete backend for managing todo items.",
    task:
      "Create an Express and MongoDB application with a Todo model. Implement GET all todos, GET one todo, POST a todo, PUT a todo, and DELETE a todo. Test every endpoint using Postman.",
  },
},

"node-project-2": {
  concept: {
    heading: "Project 2 — User Authentication API",
    paragraphs: [
      "A User Authentication API is a practical backend project that demonstrates registration, login, password hashing, JSON Web Tokens, and protected routes.",
      "During registration, the user's password should not be stored as plain text. A password-hashing library such as bcrypt can be used to create a secure hash.",
      "During login, the server verifies the submitted credentials and can generate a JWT after successful authentication.",
      "Protected routes can then verify the token before allowing access to private resources.",
    ],
    remember:
      "Remember: Never store plain-text passwords. Hash passwords and protect private routes with authentication.",
  },
  analogy: {
    heading: "Think of Authentication Like an Entry System",
    items: [
      {
        icon: "📝",
        title: "Register",
        text: "A user creates an account with their credentials.",
      },
      {
        icon: "🔐",
        title: "Hash Password",
        text: "The password is converted into a secure hash before storage.",
      },
      {
        icon: "🔑",
        title: "Login",
        text: "The server verifies the user's credentials.",
      },
      {
        icon: "🎫",
        title: "JWT",
        text: "A token can be issued after successful authentication.",
      },
    ],
  },
  visual: {
    heading: "Authentication Flow",
    description:
      "Registration stores a password hash. Login verifies the credentials and creates a token. Protected routes verify that token.",
    steps: [
      {
        icon: "👤",
        title: "Register",
        text: "Client sends registration details to the server.",
      },
      {
        icon: "🔐",
        title: "Hash",
        text: "The password is hashed before being stored.",
      },
      {
        icon: "🚪",
        title: "Login",
        text: "The server checks the submitted credentials.",
      },
      {
        icon: "🎫",
        title: "Token",
        text: "A JWT can be generated after successful login.",
      },
      {
        icon: "🛡️",
        title: "Protected Route",
        text: "Middleware verifies the token before allowing access.",
      },
    ],
    flow:
      "Register → Hash Password → Login → JWT → Protected Route",
  },
  code: {
    title: "JWT Authentication — Core Example",
    description:
      "This example shows the core idea of creating a JWT after successful authentication.",
    language: "javascript",
    code: `const jwt = require("jsonwebtoken");

const user = {
  id: "user123",
  role: "user",
};

const token = jwt.sign(
  user,
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

console.log(token);`,
    output: `A JWT token is generated.

eyJhbGciOiJIUzI1NiIs...`,
    explanation:
      "The JWT contains application data and is signed using a secret stored in an environment variable. The real application should validate credentials before creating the token.",
  },
  interview: {
    question: "Why should passwords be hashed before storing them?",
    answer:
      "Passwords should be hashed so the original password is not stored directly in the database. During login, the submitted password can be compared with the stored hash.",
    tip:
      "Interview Tip: Mention bcrypt or another established password-hashing library and explain that passwords should never be stored as plain text.",
  },
  tricky: {
    question: "Should the JWT secret be written directly inside the source code?",
    answer:
      "No. Sensitive configuration such as JWT secrets should normally be stored in environment variables and should not be committed to a public repository.",
  },
  practice: {
    question:
      "Build registration and login APIs using Express, MongoDB, bcrypt, and JWT.",
    hint:
      "Create a User model, hash passwords during registration, compare passwords during login, and generate a JWT after successful authentication.",
  },
  challenge: {
    title: "Project Challenge — Secure Authentication API",
    description:
      "Build a complete authentication backend.",
    task:
      "Create register and login endpoints. Hash passwords using bcrypt, generate JWT tokens after successful login, create authentication middleware, and add one protected profile endpoint.",
  },
},

"node-project-3": {
  concept: {
    heading: "Project 3 — E-commerce Backend",
    paragraphs: [
      "An E-commerce Backend is a larger Node.js project that combines products, users, carts, orders, authentication, and REST APIs.",
      "The backend provides APIs that a web or mobile frontend can use to display products, manage shopping carts, and create orders.",
      "MongoDB and Mongoose can be used to store product, user, cart, and order data.",
      "Authentication and authorization can be used to restrict operations such as creating products or viewing private orders.",
    ],
    remember:
      "Remember: An e-commerce backend is a combination of multiple APIs and database models working together.",
  },
  analogy: {
    heading: "Think of an E-commerce Backend Like an Online Store System",
    items: [
      {
        icon: "📦",
        title: "Products",
        text: "The system stores product information such as name, price, and stock.",
      },
      {
        icon: "🛒",
        title: "Cart",
        text: "Users can add products to a shopping cart.",
      },
      {
        icon: "👤",
        title: "Users",
        text: "Customer accounts can be authenticated and managed.",
      },
      {
        icon: "🧾",
        title: "Orders",
        text: "The backend stores order details after checkout.",
      },
    ],
  },
  visual: {
    heading: "E-commerce Backend Flow",
    description:
      "Different resources communicate through REST APIs while MongoDB stores application data.",
    steps: [
      {
        icon: "🌐",
        title: "Frontend",
        text: "The frontend requests product and user data from the API.",
      },
      {
        icon: "🛣️",
        title: "API Routes",
        text: "Express routes receive product, cart, and order requests.",
      },
      {
        icon: "⚙️",
        title: "Business Logic",
        text: "The server validates requests and applies application rules.",
      },
      {
        icon: "🍃",
        title: "Database",
        text: "Mongoose communicates with MongoDB.",
      },
      {
        icon: "📦",
        title: "Response",
        text: "The API returns JSON data to the frontend.",
      },
    ],
    flow:
      "Frontend → Express API → Business Logic → MongoDB → JSON Response",
  },
  code: {
    title: "Product API — Core Example",
    description:
      "A product endpoint can return products from a database.",
    language: "javascript",
    code: `const express = require("express");

const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json({
    count: products.length,
    products,
  });
});

module.exports = router;`,
    output: `GET /api/products

{
  "count": 2,
  "products": [
    {
      "name": "Laptop",
      "price": 65000
    },
    {
      "name": "Keyboard",
      "price": 2500
    }
  ]
}`,
    explanation:
      "The route retrieves product documents using the Product Mongoose model and sends the result as JSON. A production application should also include validation and error handling.",
  },
  interview: {
    question: "What models might an e-commerce backend contain?",
    answer:
      "A typical e-commerce backend can contain models such as User, Product, Cart, and Order. The exact design depends on the application's requirements.",
    tip:
      "Interview Tip: Explain how authentication, authorization, database relationships, validation, and REST APIs work together.",
  },
  tricky: {
    question: "Why should stock validation happen on the server instead of only in the frontend?",
    answer:
      "Frontend validation can improve user experience, but the server must enforce important business rules because client-side code can be modified or bypassed.",
  },
  practice: {
    question:
      "Design REST API endpoints for products, users, carts, and orders.",
    hint:
      "First define the resources and CRUD operations. Then decide which routes require authentication.",
  },
  challenge: {
    title: "Project Challenge — E-commerce Backend",
    description:
      "Build the backend foundation for an online store.",
    task:
      "Create Product, User, Cart, and Order models. Implement product CRUD APIs, user authentication, cart operations, and an order creation endpoint. Add validation, authentication middleware, error handling, and environment variables.",
  },
},

"node-project-4": {
  concept: {
    heading: "Project 4 — Job Portal API",
    paragraphs: [
      "A Job Portal API is a practical backend project where companies can create job listings and users can search for jobs and submit applications.",
      "The project demonstrates multiple resources and relationships such as users, jobs, and applications.",
      "Express can provide REST endpoints while MongoDB and Mongoose can store users, jobs, and application information.",
      "Authentication can be used to provide different permissions for job recruiters and job applicants.",
    ],
    remember:
      "Remember: A job portal backend connects users, job listings, and applications through REST APIs and database models.",
  },
  analogy: {
    heading: "Think of a Job Portal Like a Digital Recruitment System",
    items: [
      {
        icon: "👤",
        title: "Applicant",
        text: "A user can search for jobs and submit applications.",
      },
      {
        icon: "🏢",
        title: "Recruiter",
        text: "A recruiter can create and manage job listings.",
      },
      {
        icon: "💼",
        title: "Job",
        text: "A job listing contains information such as title, skills, location, and description.",
      },
      {
        icon: "📨",
        title: "Application",
        text: "An application connects an applicant with a job.",
      },
    ],
  },
  visual: {
    heading: "Job Portal API Flow",
    description:
      "Different users interact with different resources through authenticated REST APIs.",
    steps: [
      {
        icon: "👤",
        title: "User",
        text: "A user registers and logs into the system.",
      },
      {
        icon: "💼",
        title: "Jobs",
        text: "Recruiters can create and manage job listings.",
      },
      {
        icon: "🔎",
        title: "Search",
        text: "Applicants can retrieve available jobs.",
      },
      {
        icon: "📨",
        title: "Apply",
        text: "An applicant submits an application for a job.",
      },
      {
        icon: "🗃️",
        title: "Database",
        text: "Users, jobs, and applications are stored in MongoDB.",
      },
    ],
    flow:
      "User → Authentication → Job Search → Application → MongoDB",
  },
  code: {
    title: "Create Job — Core Example",
    description:
      "The following route demonstrates the basic idea of creating a job listing.",
    language: "javascript",
    code: `router.post("/jobs", async (req, res) => {
  const { title, company, location } = req.body;

  const job = await Job.create({
    title,
    company,
    location,
  });

  res.status(201).json(job);
});`,
    output: `POST /api/jobs

{
  "title": "Frontend Developer",
  "company": "Tech Company",
  "location": "Remote"
}

Response: 201 Created`,
    explanation:
      "The endpoint reads job information from req.body, creates a MongoDB document through the Job model, and returns the newly created job.",
  },
  interview: {
    question: "How would you design the relationship between jobs and applications?",
    answer:
      "An application can reference the user who applied and the job being applied for. Mongoose references or another suitable data-modeling approach can be used depending on the application design.",
    tip:
      "Interview Tip: Discuss authentication, authorization, validation, indexing, and database relationships when explaining a job portal backend.",
  },
  tricky: {
    question: "Why should a recruiter-only job creation route be protected?",
    answer:
      "Creating or modifying job listings is a privileged operation, so the server should verify authentication and the user's role before allowing the operation.",
  },
  practice: {
    question:
      "Design APIs for users, jobs, and applications in a job portal.",
    hint:
      "Start by identifying the resources, then define the HTTP methods and authentication requirements for each route.",
  },
  challenge: {
    title: "Project Challenge — Job Portal API",
    description:
      "Build a backend for a simple job portal.",
    task:
      "Create User, Job, and Application models. Implement authentication, job CRUD APIs, job search, application submission, and protected recruiter routes. Add role-based authorization, validation, and proper HTTP status codes.",
  },
},  
"node-interview": {
  concept: {
    heading: "Node.js Interview Questions",
    paragraphs: [
      "Node.js interviews usually test your understanding of the runtime, asynchronous programming, modules, npm, Express, APIs, databases, authentication, and error handling.",
      "A good interview answer should explain the concept clearly and, when possible, include a small practical example.",
      "You should understand not only how to write Node.js code, but also why a particular approach is used.",
      "For experienced backend development, interview questions may also cover API design, security, performance, database interaction, and project architecture.",
    ],
    remember:
      "Remember: Understand the concept, explain why it is used, and connect it with a practical example.",
  },
  analogy: {
    heading: "Think of Interview Preparation Like Building a Toolkit",
    items: [
      {
        icon: "🧠",
        title: "Concepts",
        text: "Understand Node.js fundamentals and how the runtime works.",
      },
      {
        icon: "💻",
        title: "Coding",
        text: "Practice writing small Node.js programs and API logic.",
      },
      {
        icon: "🔧",
        title: "Problem Solving",
        text: "Learn how to debug errors and choose appropriate solutions.",
      },
      {
        icon: "🎯",
        title: "Project Knowledge",
        text: "Be able to explain the architecture and decisions in your projects.",
      },
    ],
  },
  visual: {
    heading: "Node.js Interview Preparation Flow",
    description:
      "Prepare from fundamentals first and gradually move toward APIs, databases, security, and project-level questions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Core Node.js",
        text: "Review modules, npm, asynchronous programming, and the Node.js runtime.",
      },
      {
        icon: "2️⃣",
        title: "Express",
        text: "Understand routes, middleware, request-response handling, and REST APIs.",
      },
      {
        icon: "3️⃣",
        title: "Database",
        text: "Review MongoDB, Mongoose, schemas, models, and CRUD operations.",
      },
      {
        icon: "4️⃣",
        title: "Authentication",
        text: "Understand password hashing, JWT, middleware, and protected routes.",
      },
      {
        icon: "5️⃣",
        title: "Projects",
        text: "Practice explaining your backend architecture and implementation decisions.",
      },
    ],
    flow:
      "Node.js Basics → Express → REST API → Database → Authentication → Projects",
  },
  code: {
    title: "Common Node.js Interview Example",
    description:
      "A common interview task is creating a simple asynchronous operation and handling its result.",
    language: "javascript",
    code: `function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        role: "user",
      });
    }, 1000);
  });
}

async function showUser() {
  const user = await getUser();

  console.log(user);
}

showUser();`,
    output: `{
  id: 1,
  role: "user"
}`,
    explanation:
      "The getUser function returns a Promise. The async function uses await to pause until the Promise is resolved and then receives the returned object.",
  },
  interview: {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime that allows JavaScript code to run outside the browser. It is commonly used for server-side applications, APIs, command-line tools, and other backend systems.",
    tip:
      "Interview Tip: Mention that Node.js uses the V8 JavaScript engine and provides APIs for tasks such as networking, file-system access, and process management.",
  },
  tricky: {
    question: "Is Node.js a programming language?",
    answer:
      "No. JavaScript is the programming language. Node.js is a runtime environment that allows JavaScript to execute outside the browser.",
  },
  practice: {
    question:
      "Prepare short answers for these questions: What is Node.js? What is npm? What is the event loop? What is middleware? What is a Promise? What is JWT?",
    hint:
      "For every question, prepare a definition, explain why it is used, and give one practical example.",
  },
  challenge: {
    title: "Interview Challenge — Explain Your Backend",
    description:
      "Practice explaining a Node.js project as if you were answering an interview question.",
    task:
      "Choose one backend project and explain its folder structure, API routes, middleware, database models, authentication flow, error handling, and how the frontend communicates with the backend.",
  },
},

"express-interview": {
  concept: {
    heading: "Express.js Interview Questions",
    paragraphs: [
      "Express.js interviews commonly focus on routing, middleware, request and response objects, REST APIs, error handling, authentication, and application structure.",
      "You should understand how an incoming request moves through middleware and routes before the server sends a response.",
      "Interviewers may also ask why middleware is useful, how route parameters differ from query parameters, and how Express handles errors.",
      "Practical knowledge is important because Express is often used as the API layer of a Node.js backend.",
    ],
    remember:
      "Remember: Understand the complete request-response lifecycle in Express.",
  },
  analogy: {
    heading: "Think of Express Like a Traffic Controller",
    items: [
      {
        icon: "🚗",
        title: "Request",
        text: "A client sends a request to the server.",
      },
      {
        icon: "🛣️",
        title: "Route",
        text: "Express determines which route should handle the request.",
      },
      {
        icon: "🛡️",
        title: "Middleware",
        text: "Middleware can authenticate, validate, log, or modify the request.",
      },
      {
        icon: "📤",
        title: "Response",
        text: "The route handler sends a response back to the client.",
      },
    ],
  },
  visual: {
    heading: "Express Request-Response Flow",
    description:
      "An Express application processes a request through the matching middleware and route handler.",
    steps: [
      {
        icon: "📨",
        title: "Client Request",
        text: "The browser, frontend application, Postman, or another client sends a request.",
      },
      {
        icon: "🛡️",
        title: "Middleware",
        text: "Middleware performs tasks such as authentication, logging, or validation.",
      },
      {
        icon: "🛣️",
        title: "Route",
        text: "Express matches the HTTP method and URL with a route.",
      },
      {
        icon: "⚙️",
        title: "Handler",
        text: "The route handler performs the required application logic.",
      },
      {
        icon: "📤",
        title: "Response",
        text: "The server returns status, headers, and data to the client.",
      },
    ],
    flow:
      "Request → Middleware → Route → Handler → Response",
  },
  code: {
    title: "Express Middleware Interview Example",
    description:
      "This example demonstrates how middleware can run before a route handler.",
    language: "javascript",
    code: `const express = require("express");

const app = express();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logger);

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, role: "user" }
  ]);
});

app.listen(5000);`,
    output: `GET /api/users

[
  {
    "id": 1,
    "role": "user"
  }
]`,
    explanation:
      "The logger middleware executes before the route handler. Calling next() passes control to the next middleware or matching route.",
  },
  interview: {
    question: "What is middleware in Express?",
    answer:
      "Middleware is a function that can access the request and response objects and control the request-response cycle. It can perform tasks such as logging, authentication, validation, and parsing request data.",
    tip:
      "Interview Tip: Always explain the purpose of next(). It passes control to the next middleware or route handler.",
  },
  tricky: {
    question: "What happens if middleware does not send a response and does not call next()?",
    answer:
      "The request may remain pending because control is not passed to the next middleware or route and no response is sent to the client.",
  },
  practice: {
    question:
      "Create an Express application with logging middleware and a protected route.",
    hint:
      "Create one middleware function, call next(), and then add a route that responds with JSON.",
  },
  challenge: {
    title: "Interview Challenge — Express Request Lifecycle",
    description:
      "Practice explaining how Express handles an incoming request.",
    task:
      "Draw and explain the complete flow from client request to middleware, route matching, controller logic, database operation, and final response.",
  },
},

"node-coding-questions": {
  concept: {
    heading: "Node.js Coding Questions",
    paragraphs: [
      "Node.js coding interviews often test JavaScript fundamentals together with backend concepts such as asynchronous programming, APIs, data processing, and error handling.",
      "The goal is usually not only to produce working code but also to write code that is readable, predictable, and easy to maintain.",
      "Common coding tasks include working with arrays and objects, using async and await, creating API endpoints, validating input, and handling errors.",
      "Practice small problems first and then move toward complete API-based tasks.",
    ],
    remember:
      "Remember: Focus on correct logic, clean code, edge cases, and clear explanation.",
  },
  analogy: {
    heading: "Think of Coding Practice Like Problem-Solving Training",
    items: [
      {
        icon: "🧩",
        title: "Understand",
        text: "Read the problem carefully and identify the expected input and output.",
      },
      {
        icon: "📝",
        title: "Plan",
        text: "Break the problem into smaller logical steps.",
      },
      {
        icon: "💻",
        title: "Implement",
        text: "Write the solution using clear and maintainable code.",
      },
      {
        icon: "🧪",
        title: "Test",
        text: "Test normal cases, edge cases, and invalid input.",
      },
    ],
  },
  visual: {
    heading: "Coding Question Solving Flow",
    description:
      "A structured approach helps you solve coding questions more reliably.",
    steps: [
      {
        icon: "1️⃣",
        title: "Understand Problem",
        text: "Identify exactly what the problem is asking.",
      },
      {
        icon: "2️⃣",
        title: "Identify Data",
        text: "Determine the input, output, and important data structures.",
      },
      {
        icon: "3️⃣",
        title: "Write Logic",
        text: "Create the solution step by step.",
      },
      {
        icon: "4️⃣",
        title: "Test",
        text: "Run the code with different inputs.",
      },
      {
        icon: "5️⃣",
        title: "Improve",
        text: "Review readability, performance, and edge cases.",
      },
    ],
    flow:
      "Understand → Plan → Code → Test → Review",
  },
  code: {
    title: "Coding Question — Find Duplicate Values",
    description:
      "A common coding task is finding duplicate values in an array.",
    language: "javascript",
    code: `const numbers = [10, 20, 10, 30, 20, 40];

const duplicates = numbers.filter(
  (value, index) =>
    numbers.indexOf(value) !== index
);

console.log([...new Set(duplicates)]);`,
    output: `[10, 20]`,
    explanation:
      "The filter checks whether the first occurrence of a value is at a different index. Set is then used to remove repeated duplicate entries from the result.",
  },
  interview: {
    question: "What should you consider while solving a coding question?",
    answer:
      "First understand the problem and expected output, then choose an appropriate approach, write readable code, test edge cases, and explain the time and space considerations when relevant.",
    tip:
      "Interview Tip: Do not immediately start typing. Explain your approach first and then implement it.",
  },
  tricky: {
    question: "Why should coding solutions be tested with edge cases?",
    answer:
      "A solution that works for normal input may fail for empty arrays, duplicate values, missing data, unexpected input types, or boundary values.",
  },
  practice: {
    question:
      "Practice these Node.js coding tasks: reverse a string, remove duplicate array values, find the largest number, count object values, create a Promise, and create an Express GET endpoint.",
    hint:
      "Solve each problem first with simple logic. Then review whether the solution can be made clearer or more efficient.",
  },
  challenge: {
    title: "Coding Challenge — Build an API",
    description:
      "Combine JavaScript problem-solving with Express API development.",
    task:
      "Create an Express API that accepts an array of numbers, validates the input, calculates the largest number and removes duplicates, and returns the processed result as JSON. Handle invalid input with an appropriate HTTP status code.",
  },
},

};