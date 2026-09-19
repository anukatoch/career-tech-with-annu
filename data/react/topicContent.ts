export type ReactTopicContent = {
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

export const reactTopicContent: Record<string, ReactTopicContent> = {
 "what-is-react": {
  concept: {
  heading: "What Is React?",
  paragraphs: [
    "React is a JavaScript library used to build interactive user interfaces.",

    "It allows us to divide a large interface into small, reusable components.",

    "React is useful for applications where the UI changes based on user actions or data."
  ],
  remember:
    "React is a JavaScript library for building interactive UIs with reusable components."
},

  analogy: {
    heading: "Think of a Website Like Building With Blocks",
    items: [
      {
        icon: "🧱",
        title: "Small Building Blocks",
        text: "A large building can be created using many smaller blocks. In the same way, a React application can be divided into many smaller UI components."
      },
      {
        icon: "🧩",
        title: "Reusable Components",
        text: "A component can be created once and reused in different parts of an application. For example, the same Button component can be used on a login page, product page, and checkout page."
      },
      {
        icon: "🔄",
        title: "Dynamic Updates",
        text: "When application data changes, the interface may also need to change. React helps update the required user interface based on the current data or state."
      },
      {
        icon: "🏗️",
        title: "Complete Application",
        text: "Many small components can be combined to create a complete application such as an e-commerce website, dashboard, learning platform, or social application."
      }
    ]
  },

  visual: {
    heading: "How React Builds a User Interface",
    description:
      "A React application is organized into components. Components use data and state to determine what should appear on the screen. When relevant data or state changes, React updates the interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "React Application",
        text: "The application contains different parts of the user interface and the logic required to make the interface interactive."
      },
      {
        icon: "2️⃣",
        title: "Components",
        text: "The interface is divided into reusable components such as Header, Navbar, ProductCard, Form, Sidebar, and Footer."
      },
      {
        icon: "3️⃣",
        title: "Data & State",
        text: "Components can receive data through props and manage changing information through state."
      },
      {
        icon: "4️⃣",
        title: "React",
        text: "React uses the component structure and current data or state to determine what the user interface should display."
      },
      {
        icon: "5️⃣",
        title: "Browser UI",
        text: "The browser displays the resulting interface. When relevant data or state changes, React updates the necessary part of the interface."
      }
    ],
    flow:
      "React Application → Components → Data & State → React → Browser UI"
  },

  code: {
    title: "Practical Example — Your First React Component",
    description:
      "A React component can be created as a JavaScript function that returns JSX. The component can then be reused inside another component.",
    language: "jsx",
    code: `function Welcome() {
  return <h1>Welcome to React</h1>;
}

function Product() {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Learn React step by step.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Welcome />
      <Product />
    </div>
  );
}`,
    output: `Welcome to React

Product Details
Learn React step by step.`,
    explanation:
      "The Welcome function is a React component because it returns JSX representing part of the user interface. The Product function is another component that contains product-related information. The App component combines both components using <Welcome /> and <Product />. This demonstrates the component-based structure of React, where a large interface can be created by combining smaller reusable components."
  },

  interview: {
    question: "What is React?",
    answer:
      "React is a JavaScript library used for building interactive user interfaces. It allows developers to create reusable components and describe how the interface should look based on the current data or state.",
    tip:
      "In an interview, mention three important points: React is a JavaScript library, it uses reusable components, and it is commonly used to build interactive user interfaces."
  },

  tricky: {
    question:
      "Does React replace JavaScript?",
    answer:
      "No. React does not replace JavaScript. React is built on JavaScript and provides a component-based and declarative approach for creating user interfaces. JavaScript is still used for variables, functions, conditions, calculations, event handling, data processing, and application logic."
  },

  practice: {
    question:
      "Create a React component named Product that displays a product title, price, and short description.",
    hint:
      "Create a function component, return JSX containing an h2 for the title, a paragraph for the price, and another paragraph for the description. Then render the Product component inside App."
  },

  challenge: {
    title: "Build a Component-Based Page",
    description:
      "Practice the basic React concept of dividing a user interface into reusable components.",
    task:
      "Create four React components named Header, Product, Button, and Footer. Header should display a website heading. Product should display a product title, price, and description. Button should display a button labeled 'Buy Now'. Footer should display a simple footer message. Render all four components inside the App component."
  }
},
"why-react": {
 concept: {
  heading: "Why React?",
  paragraphs: [
    "React makes it easier to build interactive and dynamic user interfaces.",

    "Its component-based approach allows us to create reusable parts and organize large applications.",

    "React also helps update the UI when application data or state changes."
  ],
  remember:
    "React helps us build reusable, interactive, and maintainable user interfaces."
},

  analogy: {
    heading: "Think of React Like a Smart Room",
    items: [
      {
        icon: "🏠",
        title: "Different Parts",
        text: "A smart room can have separate systems for lights, fans, temperature, and security. Similarly, a React application can have separate components for different parts of the interface."
      },
      {
        icon: "🔘",
        title: "User Interaction",
        text: "When a user presses a switch, the required device responds. In React, when a user interacts with the interface, the relevant component can respond to the changed data or state."
      },
      {
        icon: "♻️",
        title: "Reusable System",
        text: "A standard smart switch can be installed in multiple rooms. Similarly, a reusable React component can be used in multiple places in an application."
      },
      {
        icon: "🧠",
        title: "Smart Updates",
        text: "A smart system can respond according to current conditions. React helps the interface display the appropriate UI based on the current data and state."
      }
    ]
  },

  visual: {
    heading: "Why Developers Use React",
    description:
      "React provides a structured way to create interfaces where reusable components work together and respond to changing data and user interactions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Break the UI",
        text: "Divide a large interface into smaller components such as Navbar, ProductCard, Form, Sidebar, and Footer."
      },
      {
        icon: "2️⃣",
        title: "Reuse Components",
        text: "Use the same component in multiple places instead of creating the same UI structure repeatedly."
      },
      {
        icon: "3️⃣",
        title: "Manage Data",
        text: "Components can receive information through props and manage changing information through state."
      },
      {
        icon: "4️⃣",
        title: "Respond to Actions",
        text: "User actions such as clicks, typing, selections, and form submissions can change application data or state."
      },
      {
        icon: "5️⃣",
        title: "Update the UI",
        text: "React renders the interface according to the current data and state, helping keep the displayed UI consistent with application information."
      }
    ],
    flow:
      "Components → Reuse → Data/State → User Interaction → UI Update"
  },

  code: {
    title: "Practical Example — Updating a Product Quantity",
    description:
      "A common React use case is updating the user interface when application state changes. In this example, clicking a button changes the product quantity.",
    language: "jsx",
    code: `import { useState } from "react";

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Product</h2>

      <p>Quantity: {quantity}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        Add One
      </button>
    </div>
  );
}`,
    output: `Product

Quantity: 1

[ Add One ]

After clicking the button:

Quantity: 2

After clicking again:

Quantity: 3`,
    explanation:
      "The useState Hook creates a quantity state variable with an initial value of 1. The setQuantity function is used to update that value. When the button is clicked, setQuantity(quantity + 1) changes the state. React then renders the component again using the updated value, so the displayed quantity changes from 1 to 2, then 3, and so on."
  },

  interview: {
    question: "Why is React used for web development?",
    answer:
      "React is used to build interactive user interfaces using reusable components. It helps developers organize large interfaces, manage changing UI data, and update the interface according to the current state.",
    tip:
      "In an interview, explain component reusability, interactive UI, declarative rendering, and easier organization of large applications."
  },

  tricky: {
    question:
      "Is React necessary for every website?",
    answer:
      "No. React is not necessary for every website. A simple static website may be built effectively using HTML and CSS with some JavaScript. React becomes particularly useful when an application has reusable components, complex interactions, and frequently changing UI data."
  },

  practice: {
    question:
      "Create a React component that displays a counter starting at 0. Add a button that increases the counter by 1 whenever the user clicks it.",
    hint:
      "Import useState, create a state variable with an initial value of 0, display the value, and update it inside the button's onClick handler."
  },

  challenge: {
    title: "Build a Product Quantity Controller",
    description:
      "Practice why React is useful for creating interactive interfaces that respond to changing state.",
    task:
      "Create a Product component with a quantity starting at 1. Add an 'Increase' button and a 'Decrease' button. Increase should add 1 to the quantity, while Decrease should subtract 1. Prevent the quantity from becoming less than 1."
  }
},
"react-features": {
 concept: {
  heading: "React Features",
  paragraphs: [
    "React provides features that make UI development easier and more organized.",

    "Important features include components, JSX, props, state, declarative UI, and one-way data flow.",

    "These features help developers create reusable and interactive applications."
  ],
  remember:
    "Components, JSX, props, state, and declarative UI are key React concepts."
},

  analogy: {
    heading: "Think of React Like a Well-Organized Kitchen",
    items: [
      {
        icon: "🧩",
        title: "Separate Sections",
        text: "A kitchen may have separate areas for cooking, washing, storage, and preparation. React similarly divides a user interface into separate components."
      },
      {
        icon: "♻️",
        title: "Reusable Tools",
        text: "The same kitchen tools can be used for many dishes. React components can also be reused in different parts of an application."
      },
      {
        icon: "📋",
        title: "Clear Instructions",
        text: "A recipe describes what the final dish should contain. React uses a declarative approach where developers describe what the UI should display for the current state."
      },
      {
        icon: "🔄",
        title: "Changing Ingredients",
        text: "If an ingredient changes, the final dish may change. Similarly, when React state or data changes, the displayed interface can change."
      }
    ]
  },

  visual: {
    heading: "Key Features of React",
    description:
      "React combines several concepts to make UI development more organized, reusable, and interactive.",
    steps: [
      {
        icon: "1️⃣",
        title: "Components",
        text: "Break the user interface into small, independent, and reusable pieces."
      },
      {
        icon: "2️⃣",
        title: "JSX",
        text: "Write HTML-like UI structure inside JavaScript expressions."
      },
      {
        icon: "3️⃣",
        title: "Declarative UI",
        text: "Describe what the interface should look like for the current data or state."
      },
      {
        icon: "4️⃣",
        title: "Props & State",
        text: "Pass information through props and manage changing component information using state."
      },
      {
        icon: "5️⃣",
        title: "UI Updates",
        text: "When relevant data changes, React determines the updated UI and renders the required changes."
      }
    ],
    flow:
      "Components + JSX → Props/State → Declarative UI → React Rendering → Updated Interface"
  },

  code: {
    title: "Practical Example — Multiple React Features Together",
    description:
      "This example demonstrates components, JSX, state, event handling, and declarative UI in a small React application.",
    language: "jsx",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <p>Current value: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>React Features</h1>
      <Counter />
    </div>
  );
}`,
    output: `React Features

Counter
Current value: 0

[ Increase ]

After clicking:

Current value: 1

After clicking again:

Current value: 2`,
    explanation:
      "The Counter function is a reusable React component. JSX is used to describe the interface. useState stores the changing count value. The button uses an event handler to update the state. When the state changes, React renders the component with the new value. The developer does not manually find the paragraph and change its text; the UI is described according to the current state."
  },

  interview: {
    question: "What are some important features of React?",
    answer:
      "Important React features include component-based architecture, JSX, declarative UI, one-way data flow, state management, reusable components, and efficient UI updates through React's rendering and reconciliation process.",
    tip:
      "For an interview answer, do not simply list features. Explain at least three features briefly, especially components, JSX, and declarative UI."
  },

  tricky: {
    question:
      "Is JSX the same as HTML?",
    answer:
      "No. JSX looks similar to HTML, but it is a JavaScript syntax extension used by React. JSX is transformed into JavaScript that React can use to create the user interface. JSX also follows JavaScript-based rules, so some attributes and expressions differ from normal HTML."
  },

  practice: {
    question:
      "Create a React component that displays a count starting at 0 and provides a button to increase the count by 1.",
    hint:
      "Use useState to store the count. Display the state value inside JSX and call the state update function from the button's onClick handler."
  },

  challenge: {
    title: "Build an Interactive Feature Card",
    description:
      "Practice components, JSX, state, and event handling by creating a small interactive interface.",
    task:
      "Create a FeatureCard component with a title and a button. Add a state variable named isActive with an initial value of false. When the button is clicked, change the state between true and false. Display 'Feature Active' when the state is true and 'Feature Inactive' when it is false."
  }
},
"react-vs-javascript": {
  concept: {
  heading: "React vs JavaScript",
  paragraphs: [
    "JavaScript is a programming language, while React is a JavaScript library for building user interfaces.",

    "JavaScript can directly control webpage elements, while React provides a component-based approach to manage the UI.",

    "React does not replace JavaScript. React applications use JavaScript for their logic and behavior."
  ],
  remember:
    "JavaScript is the language; React is a library built around JavaScript for UI development."
},
  analogy: {
    heading: "Think of JavaScript as a Language and React as a Toolkit",
    items: [
      {
        icon: "🗣️",
        title: "JavaScript — The Language",
        text: "A language provides the basic words and rules needed to communicate. JavaScript provides programming concepts such as variables, functions, conditions, objects, arrays, and events."
      },
      {
        icon: "🧰",
        title: "React — The Toolkit",
        text: "A toolkit provides organized tools for a particular type of work. React provides components and patterns that make building interactive user interfaces more structured."
      },
      {
        icon: "🏗️",
        title: "Building the Interface",
        text: "JavaScript can be used to build and control a web interface directly. React provides an additional component-based structure for building larger and more interactive interfaces."
      },
      {
        icon: "🤝",
        title: "Used Together",
        text: "React and JavaScript are not competing technologies. React applications use JavaScript for application logic while React helps organize and render the user interface."
      }
    ]
  },

  visual: {
    heading: "JavaScript and React — How They Relate",
    description:
      "React is built around JavaScript. Understanding JavaScript fundamentals makes it easier to understand React concepts and write React applications.",
    steps: [
      {
        icon: "1️⃣",
        title: "JavaScript",
        text: "JavaScript provides the programming language and core concepts used by web applications."
      },
      {
        icon: "2️⃣",
        title: "React Library",
        text: "React provides a component-based approach for creating user interfaces with JavaScript."
      },
      {
        icon: "3️⃣",
        title: "Components",
        text: "Developers create reusable UI components using JavaScript and JSX."
      },
      {
        icon: "4️⃣",
        title: "State & Events",
        text: "React components can work with changing state and respond to user interactions."
      },
      {
        icon: "5️⃣",
        title: "Interactive UI",
        text: "The application displays an interface that responds to data and user actions."
      }
    ],
    flow:
      "JavaScript → React → Components → State & Events → Interactive UI"
  },

  code: {
    title: "Practical Example — JavaScript vs React",
    description:
      "The following examples show two different approaches to changing text after a button click.",
    language: "jsx",
    code: `// JavaScript

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Button clicked!";
});


// React

import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Click the button");

  return (
    <div>
      <p>{message}</p>

      <button onClick={() => setMessage("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
}`,
    output: `Before clicking:

Click the button
[ Click Me ]

After clicking:

Button clicked!
[ Click Me ]`,
    explanation:
      "In the JavaScript example, the code directly selects HTML elements and changes the textContent of the paragraph when the button is clicked. In the React example, the message is stored in state. Clicking the button changes the state using setMessage. React then renders the UI using the updated state. Both approaches can create interactive behavior, but React provides a component and state-based structure for organizing larger interfaces."
  },

  interview: {
    question: "What is the difference between JavaScript and React?",
    answer:
      "JavaScript is a programming language used to create application logic and interactive behavior. React is a JavaScript library used mainly for building user interfaces with reusable components and a declarative approach.",
    tip:
      "Remember the basic distinction: JavaScript is the language, while React is a library that uses JavaScript to help build user interfaces."
  },

  tricky: {
    question:
      "Can React work without JavaScript?",
    answer:
      "No. React is a JavaScript library and React applications depend on JavaScript. React provides additional tools and patterns for building user interfaces, but JavaScript remains the underlying programming language."
  },

  practice: {
    question:
      "Create a small React component that displays a message and changes the message when a button is clicked. Then explain how the same task could be performed using plain JavaScript.",
    hint:
      "For React, use useState and an onClick event. For plain JavaScript, select the button and message elements and use an event listener to change the text."
  },

  challenge: {
    title: "Build the Same Interaction in Two Ways",
    description:
      "Compare the programming approach used by plain JavaScript and React.",
    task:
      "Create a simple 'Show Details' interaction using plain JavaScript first. Display a button and a hidden paragraph. When the button is clicked, show the paragraph. Then create the same interaction as a React component using useState. Compare how both approaches manage the UI update."
  }
},
"where-react-used": {
 concept: {
  heading: "Where Is React Used?",
  paragraphs: [
    "React is used to build interactive web applications with reusable UI components.",

    "It is commonly used for e-commerce websites, dashboards, learning platforms, booking systems, and social applications.",

    "React can also work with backend technologies and APIs to build complete applications."
  ],
  remember:
    "React can be used for almost any interactive web application."
},
  analogy: {
    heading: "Think of React Like a Flexible Construction System",
    items: [
      {
        icon: "🏢",
        title: "Different Buildings",
        text: "The same construction system can be used for offices, schools, shops, and homes. Similarly, React can be used to build many different types of web applications."
      },
      {
        icon: "🧩",
        title: "Reusable Parts",
        text: "Doors, windows, and other standard parts can be reused in different buildings. React components can also be reused across different pages and features."
      },
      {
        icon: "🔄",
        title: "Changing Requirements",
        text: "A building may need different arrangements depending on its purpose. React applications can also change their interface according to user actions and application data."
      },
      {
        icon: "🏗️",
        title: "Complete Application",
        text: "Many individual parts can be combined to create a complete structure. In React, components can be combined to create complete applications."
      }
    ]
  },

  visual: {
    heading: "Common Applications Built With React",
    description:
      "React can be used wherever an application needs a structured, reusable, and interactive user interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "E-Commerce",
        text: "Build product listings, filters, carts, checkout interfaces, product details, and customer account pages."
      },
      {
        icon: "2️⃣",
        title: "Dashboards",
        text: "Create admin panels with cards, tables, charts, filters, forms, reports, and navigation."
      },
      {
        icon: "3️⃣",
        title: "Education Platforms",
        text: "Create course pages, quizzes, progress tracking, lesson navigation, and student dashboards."
      },
      {
        icon: "4️⃣",
        title: "Social Applications",
        text: "Build feeds, profiles, comments, notifications, messaging interfaces, and search features."
      },
      {
        icon: "5️⃣",
        title: "Service & Booking Apps",
        text: "Create search interfaces, booking forms, appointment systems, selection screens, and dynamic results."
      }
    ],
    flow:
      "React → Reusable Components → Interactive Features → Different Application Types"
  },

  code: {
    title: "Practical Example — Product Card",
    description:
      "An e-commerce application can use a reusable React component to display product information. The same component can then be used for many products.",
    language: "jsx",
    code: `function ProductCard({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ProductCard
        title="Laptop"
        price={55000}
      />

      <ProductCard
        title="Headphones"
        price={2500}
      />

      <ProductCard
        title="Keyboard"
        price={1800}
      />
    </div>
  );
}`,
    output: `Laptop
Price: ₹55000
[ Add to Cart ]

Headphones
Price: ₹2500
[ Add to Cart ]

Keyboard
Price: ₹1800
[ Add to Cart ]`,
    explanation:
      "ProductCard is a reusable React component. It receives title and price as props. Instead of creating separate HTML structures for every product, the same component can be reused with different values. This is one of the reasons React is useful for applications such as e-commerce websites, where many items may have the same UI structure but different data."
  },

  interview: {
    question: "Where is React commonly used?",
    answer:
      "React is commonly used for interactive web applications such as e-commerce websites, dashboards, learning platforms, social applications, booking systems, admin panels, and other applications that benefit from reusable UI components.",
    tip:
      "Instead of mentioning only one example, give two or three examples such as e-commerce, dashboards, and learning platforms, and explain why reusable components are useful in them."
  },

  tricky: {
    question:
      "Can React be used only for single-page applications?",
    answer:
      "No. React is commonly associated with single-page applications, but it can also be used for many other types of web interfaces. React can be used as part of different application architectures depending on the project's requirements and the tools used with it."
  },

  practice: {
    question:
      "Think of an e-commerce website and list at least five UI parts that could be created as React components.",
    hint:
      "Consider components such as Navbar, ProductCard, ProductList, SearchBar, Cart, Footer, LoginForm, or ProductDetails."
  },

  challenge: {
    title: "Design a React Application Structure",
    description:
      "Practice identifying reusable components for a real-world application.",
    task:
      "Choose one application type: E-Commerce, Learning Platform, or Booking System. List at least eight UI components that could be created in React. For each component, write one sentence explaining what it would display or control."
  }
},
"react-setup": {
  concept: {
  heading: "React Setup",
  paragraphs: [
    "To build a React application, we need a few basic tools such as Node.js, npm, a code editor, and Vite.",

    "Node.js and npm help us run and manage the project, while Vite helps us create and run the React application.",

    "Once the setup is ready, we can create our React project and start writing components."
  ],
  remember:
    "Node.js + npm + Vite + Code Editor = Basic React Development Setup"
},

  analogy: {
    heading: "Think of React Setup Like Preparing a Workshop",
    items: [
      {
        icon: "🏭",
        title: "Workshop",
        text: "Before building a product, you need a properly prepared workshop. Similarly, before developing a React application, you need the required development tools."
      },
      {
        icon: "🧰",
        title: "Tools",
        text: "A workshop needs tools for different tasks. In React development, Node.js, npm, VS Code, and Vite perform different roles in the development process."
      },
      {
        icon: "📦",
        title: "Packages",
        text: "A workshop may need additional materials for a project. npm helps install and manage the packages required by a React application."
      },
      {
        icon: "🚀",
        title: "Ready to Build",
        text: "Once the workshop is prepared, you can start building. Once the React environment is ready, you can create and run your first React application."
      }
    ]
  },

  visual: {
    heading: "React Development Setup Flow",
    description:
      "A React project needs a few tools before development can begin. Each tool has a specific role in the development workflow.",
    steps: [
      {
        icon: "1️⃣",
        title: "Install Node.js",
        text: "Install Node.js to get the JavaScript runtime and npm package manager."
      },
      {
        icon: "2️⃣",
        title: "Verify Installation",
        text: "Open a terminal and check the installed Node.js and npm versions."
      },
      {
        icon: "3️⃣",
        title: "Install a Code Editor",
        text: "Use a code editor such as Visual Studio Code to create and edit React project files."
      },
      {
        icon: "4️⃣",
        title: "Create React Project",
        text: "Use a project tool such as Vite to create the initial React application structure."
      },
      {
        icon: "5️⃣",
        title: "Start Development Server",
        text: "Run the development server and open the application in a browser."
      }
    ],
    flow:
      "Node.js → npm → Code Editor → Vite React Project → Development Server → Browser"
  },

  code: {
    title: "Practical Example — Create a React Project With Vite",
    description:
      "The following commands show a common way to create a React project using Vite. Run these commands in a terminal.",
    language: "bash",
    code: `# Check Node.js version
node --version

# Check npm version
npm --version

# Create a new React project
npm create vite@latest react-learning

# Move into the project
cd react-learning

# Install project dependencies
npm install

# Start the development server
npm run dev`,
    output: `Example version check:

v22.x.x
10.x.x

After running the development server:

Local: http://localhost:5173/

Open the local address in your browser to view the React application.`,
    explanation:
      "The node --version command checks the installed Node.js version, while npm --version checks npm. The npm create vite@latest command starts the Vite project creation process. After selecting React and the required project options, cd moves into the project directory, npm install installs the project's dependencies, and npm run dev starts the development server. The exact version numbers and local port can vary depending on the installed tools and project configuration."
  },

  interview: {
    question: "What tools are commonly required to set up a React project?",
    answer:
      "A common React development setup includes Node.js, npm, a code editor such as Visual Studio Code, and a project development tool such as Vite.",
    tip:
      "Explain the role of each tool instead of only listing their names. Node.js provides the runtime, npm manages packages, VS Code is used for development, and Vite helps create and run the project."
  },

  tricky: {
    question:
      "Do you install React globally using npm before creating every React project?",
    answer:
      "No. Modern React projects commonly use project-specific dependencies. Tools such as Vite can create the project and configure the required React packages inside that project. You generally do not need to install React globally."
  },

  practice: {
    question:
      "Open your terminal and check whether Node.js and npm are installed on your computer. Write down the versions returned by node --version and npm --version.",
    hint:
      "Open Command Prompt, PowerShell, Terminal, or another shell and run the two version commands separately."
  },

  challenge: {
    title: "Create Your First React Environment",
    description:
      "Practice setting up the basic environment required for React development.",
    task:
      "Verify Node.js and npm on your computer. Then create a new Vite React project named react-practice, install its dependencies, start the development server, and open the application in your browser. Finally, identify the main files and folders created by the project."
  }
},
"first-react-app": {
  concept: {
    heading: "First React App",
    paragraphs: [
      "A React application is built using components that describe what should appear on the screen.",

      "After creating a React project, we can edit the main component, add JSX, and run the application using the development server.",

      "The browser then displays the React UI, and changes made during development can be seen through the development server."
    ],
    remember:
      "A React app is built by creating components and rendering them in the browser."
  },

  analogy: {
    heading: "Think of It Like Your First Small Project",
    items: [
      {
        icon: "📁",
        title: "Project Folder",
        text: "The React project provides the basic files and folders needed to build the application."
      },
      {
        icon: "🧩",
        title: "Component",
        text: "You create components that represent different parts of the user interface."
      },
      {
        icon: "🖥️",
        title: "Browser",
        text: "The React application is displayed in the browser when the development server is running."
      }
    ]
  },

  visual: {
    heading: "How a React App Works",
    description:
      "A simple React application follows a basic flow from project files to the user interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Project",
        text: "Create a React project using a tool such as Vite."
      },
      {
        icon: "2️⃣",
        title: "Write Component",
        text: "Create or edit a component using JavaScript and JSX."
      },
      {
        icon: "3️⃣",
        title: "Render Component",
        text: "React renders the component as the application's user interface."
      },
      {
        icon: "4️⃣",
        title: "Run App",
        text: "Start the development server and open the application in a browser."
      }
    ],
    flow:
      "React Project → Component → JSX → React Rendering → Browser UI"
  },

  code: {
    title: "Practical Example — Simple React App",
    description:
      "This example creates a simple React component and displays it in the browser.",
    language: "jsx",
    code: `export default function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <p>Welcome to React.</p>
      <button>Get Started</button>
    </div>
  );
}`,
    output: `My First React App

Welcome to React.

[ Get Started ]`,
    explanation:
      "App is a React component. It returns JSX containing a heading, paragraph, and button. When the application runs, React renders this JSX and the browser displays the resulting user interface."
  },

  interview: {
    question: "How do you create a simple React application?",
    answer:
      "First, create a React project using a tool such as Vite. Then install the project dependencies, create or edit React components using JSX, start the development server, and open the application in a browser.",
    tip:
      "Remember the basic workflow: create project → install dependencies → write component → run development server → view in browser."
  },

  tricky: {
    question:
      "Does a React component directly become HTML?",
    answer:
      "A React component returns JSX, which describes the user interface. React processes this JSX and renders the resulting elements so they can be displayed by the browser."
  },

  practice: {
    question:
      "Create a React App component that displays a heading, a paragraph, and a button.",
    hint:
      "Use a function component and return JSX containing h1, p, and button elements."
  },

  challenge: {
    title: "Create Your First React Screen",
    description:
      "Practice creating a simple user interface using a React component.",
    task:
      "Create an App component for a learning website. Display a heading, a short description, a list of three courses, and a 'Start Learning' button."
  }
},
"project-structure": {
  concept: {
    heading: "React Project Structure",
    paragraphs: [
      "A React project contains different files and folders, and each one has a specific purpose.",

      "The src folder usually contains the main application code, such as components, pages, styles, and other project files.",

      "Files such as package.json manage project dependencies and scripts, while the public folder can contain static files used by the application."
    ],
    remember:
      "A clear project structure makes React applications easier to develop and maintain."
  },

  analogy: {
    heading: "Think of a Project Like an Organized Office",
    items: [
      {
        icon: "🏢",
        title: "Main Office",
        text: "The project folder is like the complete office containing everything required for the work."
      },
      {
        icon: "📂",
        title: "Departments",
        text: "Different folders organize different types of files, just like departments organize different types of work."
      },
      {
        icon: "🧩",
        title: "Components",
        text: "Reusable React components can be kept in an organized location so they are easy to find and reuse."
      }
    ]
  },

  visual: {
    heading: "Basic React Project Structure",
    description:
      "A React project contains configuration files and source files that work together to create the application.",
    steps: [
      {
        icon: "1️⃣",
        title: "Project Root",
        text: "The main project folder contains configuration files, dependencies, and source code."
      },
      {
        icon: "2️⃣",
        title: "src",
        text: "The src folder contains the main application source code."
      },
      {
        icon: "3️⃣",
        title: "Components",
        text: "Reusable UI components can be organized inside the source code."
      },
      {
        icon: "4️⃣",
        title: "package.json",
        text: "This file contains project information, dependencies, and commonly used npm scripts."
      },
      {
        icon: "5️⃣",
        title: "Browser",
        text: "The project runs through the development server and displays the application in the browser."
      }
    ],
    flow:
      "Project Root → src → Components & App Code → Build/Development Tools → Browser"
  },

  code: {
    title: "Practical Example — Understanding the Structure",
    description:
      "A simple React project may contain files and folders similar to the following structure.",
    language: "text",
    code: `react-learning/
│
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js`,
    output: `src/
  → Main application source code

components/
  → Reusable React components

App.jsx
  → Main application component

main.jsx
  → Entry point that starts the React application

package.json
  → Project dependencies and scripts

public/
  → Static files`,
    explanation:
      "The exact structure can vary depending on the tools and project configuration. In a typical Vite React project, src contains the main application code, App.jsx represents the main application component, and main.jsx is the entry point that connects the React application to the browser. package.json stores project dependencies and scripts."
  },

  interview: {
    question: "What is the purpose of the src folder in a React project?",
    answer:
      "The src folder usually contains the main source code of the React application, including components, application logic, styles, and other files used to build the UI.",
    tip:
      "Remember: src means source code. It is normally where most of your React development work happens."
  },

  tricky: {
    question:
      "Can we put all React code in one file?",
    answer:
      "Yes, a small React application can technically contain most of its code in one file. However, larger applications are usually divided into components and organized into separate files and folders to improve readability, reuse, and maintenance."
  },

  practice: {
    question:
      "Open a React project and identify the purpose of the src folder, App component, main entry file, package.json, and public folder.",
    hint:
      "Open each file or folder and observe what type of code or information it contains."
  },

  challenge: {
    title: "Organize a React Project",
    description:
      "Practice creating a simple and understandable folder structure for a React application.",
    task:
      "Create a simple React project structure containing a components folder and create three component files: Header.jsx, Card.jsx, and Footer.jsx. Then identify which file acts as the main application component and which file starts the React application."
  }
},
"what-is-jsx": {
  concept: {
    heading: "What Is JSX?",
    paragraphs: [
      "JSX is a syntax extension for JavaScript that is commonly used in React to describe the user interface.",

      "JSX looks similar to HTML, but it is written inside JavaScript and follows JavaScript-based rules.",

      "JSX makes React code easier to read because the component structure and UI elements can be written together."
    ],
    remember:
      "JSX lets us write HTML-like UI syntax inside JavaScript."
  },

  analogy: {
    heading: "Think of JSX Like a UI Blueprint",
    items: [
      {
        icon: "📐",
        title: "Blueprint",
        text: "A blueprint shows how a building should be arranged. JSX describes how a React user interface should be arranged."
      },
      {
        icon: "🧩",
        title: "UI Parts",
        text: "A blueprint can contain different sections. JSX can contain headings, paragraphs, buttons, components, and other UI elements."
      },
      {
        icon: "⚡",
        title: "JavaScript Power",
        text: "JSX is written within JavaScript, so JavaScript expressions can be used directly inside JSX."
      }
    ]
  },

  visual: {
    heading: "How JSX Works",
    description:
      "JSX provides a readable way to describe the UI inside a React component.",
    steps: [
      {
        icon: "1️⃣",
        title: "Write JSX",
        text: "Write HTML-like elements inside a React component."
      },
      {
        icon: "2️⃣",
        title: "Add JavaScript",
        text: "Use JavaScript expressions inside curly braces when dynamic values are needed."
      },
      {
        icon: "3️⃣",
        title: "React Processes JSX",
        text: "React and the project's build tools process the JSX into JavaScript that can be executed."
      },
      {
        icon: "4️⃣",
        title: "Render UI",
        text: "React uses the resulting information to render the user interface in the browser."
      }
    ],
    flow:
      "JSX → JavaScript Processing → React → Browser UI"
  },

  code: {
    title: "Practical Example — JSX With JavaScript",
    description:
      "JavaScript expressions can be placed inside JSX using curly braces.",
    language: "jsx",
    code: `export default function App() {
  const course = "React";
  const duration = 8;

  return (
    <div>
      <h1>Learning {course}</h1>
      <p>Duration: {duration} weeks</p>
      <button>Start Learning</button>
    </div>
  );
}`,
    output: `Learning React

Duration: 8 weeks

[ Start Learning ]`,
    explanation:
      "The course and duration variables are normal JavaScript variables. They are displayed inside JSX using curly braces. This allows dynamic JavaScript values to be included directly in the user interface."
  },

  interview: {
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension for JavaScript that allows developers to write HTML-like syntax inside JavaScript code. It is commonly used in React components to describe the user interface.",
    tip:
      "Remember that JSX looks like HTML but is written in JavaScript and follows JSX-specific rules."
  },

  tricky: {
    question: "Is JSX HTML?",
    answer:
      "No. JSX is not HTML. It is a JavaScript syntax extension that looks similar to HTML and is used to describe React UI."
  },

  practice: {
    question:
      "Create a React component that displays a course name and duration using JavaScript variables inside JSX.",
    hint:
      "Create two variables and place them inside JSX using curly braces."
  },

  challenge: {
    title: "Create a Dynamic JSX Card",
    description:
      "Practice using JavaScript values inside JSX.",
    task:
      "Create a React component with variables for a course name, instructor role, and course duration. Display all three values inside a simple JSX card and add a 'Join Course' button."
  }
},
"jsx-expressions": {
  concept: {
    heading: "JSX Expressions",
    paragraphs: [
      "JSX expressions allow us to use JavaScript values and expressions inside JSX.",

      "JavaScript expressions are written inside curly braces `{ }`. We can use variables, calculations, function calls, and conditional expressions inside them.",

      "This makes JSX dynamic because the displayed UI can be created from JavaScript data."
    ],
    remember:
      "Use `{ }` in JSX when you want to insert a JavaScript expression."
  },

  analogy: {
    heading: "Think of JSX Expressions Like Filling Blanks",
    items: [
      {
        icon: "📝",
        title: "Fixed Text",
        text: "A normal sentence can contain fixed information such as a heading or label."
      },
      {
        icon: "✏️",
        title: "Dynamic Value",
        text: "A blank space can be filled with a changing value. JSX expressions work in a similar way by inserting JavaScript values inside JSX."
      },
      {
        icon: "🔄",
        title: "Updated Information",
        text: "When the JavaScript value changes, the displayed information can also change."
      }
    ]
  },

  visual: {
    heading: "How JSX Expressions Work",
    description:
      "Curly braces connect JavaScript expressions with the JSX user interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "Create a variable or JavaScript value."
      },
      {
        icon: "2️⃣",
        title: "Use Curly Braces",
        text: "Place the JavaScript expression inside `{ }`."
      },
      {
        icon: "3️⃣",
        title: "React Processes It",
        text: "React uses the expression result while rendering the component."
      },
      {
        icon: "4️⃣",
        title: "Display Result",
        text: "The resulting value appears in the user interface."
      }
    ],
    flow:
      "JavaScript Value → { Expression } → React → UI"
  },

  code: {
    title: "Practical Example — Expressions in JSX",
    description:
      "JSX can display variables, calculations, and function results using curly braces.",
    language: "jsx",
    code: `export default function App() {
  const price = 1000;
  const quantity = 2;

  function getTotal() {
    return price * quantity;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ₹{getTotal()}</p>
      <p>Discount Price: ₹{price - 100}</p>
    </div>
  );
}`,
    output: `Product Details

Price: ₹1000
Quantity: 2
Total: ₹2000
Discount Price: ₹900`,
    explanation:
      "The price and quantity variables are displayed using curly braces. The expression price - 100 performs a calculation directly inside JSX. The getTotal() function is also called inside JSX, and its returned value is displayed."
  },

  interview: {
    question: "What is a JSX expression?",
    answer:
      "A JSX expression is a JavaScript expression written inside curly braces in JSX. It can be used to display values, perform calculations, call functions, or evaluate expressions.",
    tip:
      "The most important syntax to remember is `{ expression }`."
  },

  tricky: {
    question:
      "Can we write any JavaScript statement inside JSX curly braces?",
    answer:
      "No. JSX curly braces are mainly used for JavaScript expressions that produce a value. Statements such as if and for cannot be written directly inside JSX curly braces."
  },

  practice: {
    question:
      "Create a React component with price and quantity variables. Display the price, quantity, and total amount using JSX expressions.",
    hint:
      "Use `{price}`, `{quantity}`, and `{price * quantity}` inside JSX."
  },

  challenge: {
    title: "Build a Dynamic Price Summary",
    description:
      "Practice using JavaScript expressions inside JSX.",
    task:
      "Create variables for product price, quantity, and discount. Display the original price, quantity, discount amount, and final price using JSX expressions. Calculate the final price using JavaScript."
  }
},
"jsx-attributes": {
  concept: {
    heading: "JSX Attributes",
    paragraphs: [
      "JSX attributes are used to provide additional information to elements and React components.",

      "They look similar to HTML attributes, but JSX uses some different names and JavaScript-based values.",

      "For dynamic values, JavaScript expressions can be placed inside curly braces."
    ],
    remember:
      "JSX attributes provide information or values to elements and components."
  },

  analogy: {
    heading: "Think of Attributes Like Product Details",
    items: [
      {
        icon: "🏷️",
        title: "Basic Information",
        text: "A product can have details such as name, price, and category. Similarly, an element can have attributes that provide additional information."
      },
      {
        icon: "🔗",
        title: "Connection",
        text: "An image needs a source and a link needs a destination. JSX attributes provide these values to the corresponding elements."
      },
      {
        icon: "⚡",
        title: "Dynamic Values",
        text: "Attribute values can also come from JavaScript variables, making the interface dynamic."
      }
    ]
  },

  visual: {
    heading: "How JSX Attributes Work",
    description:
      "Attributes add additional information to JSX elements and can contain either fixed or dynamic values.",
    steps: [
      {
        icon: "1️⃣",
        title: "Choose Element",
        text: "Start with a JSX element such as img, button, input, or a custom component."
      },
      {
        icon: "2️⃣",
        title: "Add Attribute",
        text: "Add an attribute such as src, alt, className, or disabled."
      },
      {
        icon: "3️⃣",
        title: "Provide Value",
        text: "Use a fixed value or a JavaScript expression inside curly braces."
      },
      {
        icon: "4️⃣",
        title: "Render UI",
        text: "React uses the attribute information while rendering the element."
      }
    ],
    flow:
      "JSX Element → Attribute → Value → React → UI"
  },

  code: {
    title: "Practical Example — JSX Attributes",
    description:
      "This example demonstrates common JSX attributes and a dynamic attribute value.",
    language: "jsx",
    code: `export default function App() {
  const imageUrl = "https://example.com/product.jpg";
  const productName = "Laptop";

  return (
    <div>
      <h1>{productName}</h1>

      <img
        src={imageUrl}
        alt={productName}
        width="200"
      />

      <button className="primary-button">
        Buy Now
      </button>
    </div>
  );
}`,
    output: `Laptop

[ Product Image ]

[ Buy Now ]`,
    explanation:
      "The img element uses src, alt, and width attributes. The src and alt values come from JavaScript variables using curly braces. The button uses className instead of the HTML class attribute. JSX uses className because class is a JavaScript keyword."
  },

  interview: {
    question: "What are JSX attributes?",
    answer:
      "JSX attributes provide additional information or values to JSX elements and components. They are similar to HTML attributes but follow JSX rules.",
    tip:
      "Remember common JSX differences such as className instead of class and camelCase for many attributes."
  },

  tricky: {
    question:
      "Why do we use className instead of class in JSX?",
    answer:
      "JSX is used inside JavaScript, and class is a reserved JavaScript keyword. Therefore, React uses className to specify a CSS class."
  },

  practice: {
    question:
      "Create a React component that displays an image with a dynamic src and alt value stored in JavaScript variables.",
    hint:
      "Create imageUrl and imageAlt variables and use them inside the img element with curly braces."
  },

  challenge: {
    title: "Create a Product Card",
    description:
      "Practice using JSX attributes with both fixed and dynamic values.",
    task:
      "Create a ProductCard component with variables for product name and image URL. Display the product name and image. Add a button with a CSS class using className and an appropriate alt attribute for the image."
  }
},    
"jsx-conditions": {
  concept: {
    heading: "Conditional JSX",
    paragraphs: [
      "Conditional JSX allows a React component to display different UI based on a condition.",

      "JavaScript conditions such as the ternary operator and logical AND operator can be used inside JSX.",

      "Conditional rendering is useful for situations such as login status, loading messages, permissions, and showing or hiding UI elements."
    ],
    remember:
      "Conditional JSX displays different UI depending on a condition."
  },

  analogy: {
    heading: "Think of Conditional JSX Like a Traffic Signal",
    items: [
      {
        icon: "🚦",
        title: "Condition",
        text: "A traffic signal checks the current condition and decides which action should happen."
      },
      {
        icon: "🟢",
        title: "One Result",
        text: "If the condition is true, React can display one part of the interface."
      },
      {
        icon: "🔴",
        title: "Another Result",
        text: "If the condition is false, React can display a different part of the interface."
      }
    ]
  },

  visual: {
    heading: "How Conditional Rendering Works",
    description:
      "React evaluates a JavaScript condition and renders the UI according to its result.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check Data",
        text: "React receives or reads a value such as isLoggedIn or isLoading."
      },
      {
        icon: "2️⃣",
        title: "Evaluate Condition",
        text: "JavaScript checks whether the condition is true or false."
      },
      {
        icon: "3️⃣",
        title: "Choose UI",
        text: "The condition determines which JSX should be displayed."
      },
      {
        icon: "4️⃣",
        title: "Render Result",
        text: "React displays the selected user interface."
      }
    ],
    flow:
      "Data → Condition → Choose JSX → React → Display UI"
  },

  code: {
    title: "Practical Example — Conditional Rendering",
    description:
      "The ternary operator can be used to display different content depending on a condition.",
    language: "jsx",
    code: `export default function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Learning Portal</h1>

      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}`,
    output: `Learning Portal

Welcome back!`,
    explanation:
      "The isLoggedIn variable contains true. The ternary expression checks this value. Because the condition is true, React displays 'Welcome back!'. If isLoggedIn were false, React would display 'Please log in to continue.'"
  },

  interview: {
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering means displaying different UI elements depending on a condition. React commonly uses JavaScript techniques such as the ternary operator and logical AND operator for conditional rendering.",
    tip:
      "Be ready to explain the ternary operator with a simple true/false example."
  },

  tricky: {
    question:
      "Can we directly write an if statement inside JSX?",
    answer:
      "A normal if statement cannot be placed directly inside JSX curly braces. You can use if statements before the return, or use expressions such as the ternary operator and logical AND inside JSX."
  },

  practice: {
    question:
      "Create a React component that displays 'Online' when a variable isOnline is true and 'Offline' when it is false.",
    hint:
      "Use the ternary operator inside JSX: condition ? valueIfTrue : valueIfFalse."
  },

  challenge: {
    title: "Build a Login Status UI",
    description:
      "Practice conditional rendering with a realistic user interface.",
    task:
      "Create a variable named isLoggedIn. If it is true, display a welcome message and a 'Logout' button. If it is false, display a 'Please Log In' message and a 'Login' button."
  }
},
"components-basics": {
  concept: {
    heading: "Components Basics",
    paragraphs: [
      "A React component is a reusable piece of the user interface.",

      "Components are usually written as JavaScript functions that return JSX. A large application can be divided into smaller components.",

      "Components make UI code easier to organize, reuse, and maintain."
    ],
    remember:
      "A React component is a reusable UI building block."
  },

  analogy: {
    heading: "Think of Components Like Building Blocks",
    items: [
      {
        icon: "🧱",
        title: "Small Block",
        text: "Each component represents a small part of the user interface."
      },
      {
        icon: "♻️",
        title: "Reusable Block",
        text: "The same component can be used multiple times with different data."
      },
      {
        icon: "🏗️",
        title: "Complete UI",
        text: "Multiple components can be combined to create a complete application."
      }
    ]
  },

  visual: {
    heading: "How React Components Work",
    description:
      "React applications are created by combining small components into larger parts of the user interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Component",
        text: "Create a JavaScript function that returns JSX."
      },
      {
        icon: "2️⃣",
        title: "Add UI",
        text: "Define the interface that the component should display."
      },
      {
        icon: "3️⃣",
        title: "Reuse",
        text: "Use the component wherever the same UI structure is required."
      },
      {
        icon: "4️⃣",
        title: "Combine",
        text: "Combine multiple components to create a complete page."
      }
    ],
    flow:
      "Component → JSX → Reuse → Combine Components → Complete UI"
  },

  code: {
    title: "Practical Example — Creating a Component",
    description:
      "A simple React component can be created as a function that returns JSX.",
    language: "jsx",
    code: `function Welcome() {
  return <h2>Welcome to React</h2>;
}

export default function App() {
  return (
    <div>
      <h1>Learning Portal</h1>
      <Welcome />
      <Welcome />
    </div>
  );
}`,
    output: `Learning Portal

Welcome to React
Welcome to React`,
    explanation:
      "Welcome is a React component because it returns JSX. The App component uses <Welcome /> twice, demonstrating that the same component can be reused multiple times."
  },

  interview: {
    question: "What is a React component?",
    answer:
      "A React component is a reusable piece of UI. It is commonly created as a JavaScript function that returns JSX.",
    tip:
      "Mention the three key ideas: component, reusable UI, and JSX."
  },

  tricky: {
    question:
      "Can one React component be used multiple times?",
    answer:
      "Yes. A component can be rendered multiple times in an application. Each usage can also receive different data through props."
  },

  practice: {
    question:
      "Create a React component named Header that returns a website heading and render it inside App.",
    hint:
      "Create a function named Header, return JSX, and use <Header /> inside App."
  },

  challenge: {
    title: "Build a Component-Based Page",
    description:
      "Practice dividing a simple page into reusable React components.",
    task:
      "Create Header, CourseCard, and Footer components. Header should display a website title, CourseCard should display a course name and description, and Footer should display a footer message. Render all three inside App."
  }
},
"functional-components": {
  concept: {
    heading: "Functional Components",
    paragraphs: [
      "A functional component is a JavaScript function that returns JSX to describe a part of the user interface.",

      "Functional components can receive data through props and can manage their own state using React Hooks.",

      "They are the standard way of creating components in modern React applications."
    ],
    remember:
      "A functional component is a JavaScript function that returns JSX."
  },

  analogy: {
    heading: "Think of a Component Like a Small Worker",
    items: [
      {
        icon: "👷",
        title: "A Specific Job",
        text: "A worker can have a specific responsibility. Similarly, a component can handle a specific part of the user interface."
      },
      {
        icon: "📥",
        title: "Receive Information",
        text: "A worker may receive instructions or materials. A React component can receive data through props."
      },
      {
        icon: "📤",
        title: "Produce a Result",
        text: "A worker completes a task and produces a result. A functional component returns JSX that represents part of the UI."
      }
    ]
  },

  visual: {
    heading: "How a Functional Component Works",
    description:
      "A functional component receives optional data and returns JSX that React can render.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "Create a JavaScript function using a component name that starts with a capital letter."
      },
      {
        icon: "2️⃣",
        title: "Write JSX",
        text: "Return the JSX that describes the component's user interface."
      },
      {
        icon: "3️⃣",
        title: "Export Component",
        text: "Export the component when it needs to be imported into another file."
      },
      {
        icon: "4️⃣",
        title: "Use Component",
        text: "Render the component using JSX syntax such as <Header />."
      }
    ],
    flow:
      "Function → JSX → Export → <Component /> → UI"
  },

  code: {
    title: "Practical Example — Functional Component",
    description:
      "This example creates a simple functional component and uses it inside another component.",
    language: "jsx",
    code: `function CourseCard() {
  return (
    <div>
      <h2>React Course</h2>
      <p>Learn React step by step.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Available Course</h1>
      <CourseCard />
    </div>
  );
}`,
    output: `Available Course

React Course
Learn React step by step.`,
    explanation:
      "CourseCard is a functional component because it is a JavaScript function that returns JSX. The App component renders it using <CourseCard />. React then displays the JSX returned by CourseCard as part of the application's UI."
  },

  interview: {
    question: "What is a functional component in React?",
    answer:
      "A functional component is a JavaScript function that returns JSX and represents a part of the user interface. It can receive props and use Hooks to manage state and other React features.",
    tip:
      "A simple interview definition is: functional component = JavaScript function + JSX."
  },

  tricky: {
    question:
      "Why should a React component name start with a capital letter?",
    answer:
      "React uses capitalization to distinguish custom components from regular HTML elements. For example, <CourseCard /> is treated as a React component, while <div> is treated as a built-in HTML element."
  },

  practice: {
    question:
      "Create a functional component named StudentCard that displays a heading and a short description.",
    hint:
      "Create a function named StudentCard, return JSX, and render it inside App using <StudentCard />."
  },

  challenge: {
    title: "Build Reusable Functional Components",
    description:
      "Practice creating multiple functional components for a simple application.",
    task:
      "Create three functional components named Header, CourseCard, and Footer. Each component should return its own JSX. Render all three components inside App to create a simple learning page."
  }
},
"component-composition": {
  concept: {
    heading: "Component Composition",
    paragraphs: [
      "Component composition means building a larger user interface by combining smaller React components.",

      "Instead of creating one large component, we can divide the UI into smaller components and place them inside other components.",

      "Composition makes applications easier to organize and allows components to be reused in different parts of the interface."
    ],
    remember:
      "Component composition means combining smaller components to build a larger UI."
  },

  analogy: {
    heading: "Think of Components Like a Team",
    items: [
      {
        icon: "👥",
        title: "Different Roles",
        text: "A team has people with different responsibilities. Similarly, different React components can handle different parts of a user interface."
      },
      {
        icon: "🧩",
        title: "Work Together",
        text: "Individual team members work together to complete a larger task. Components can also work together to create a complete page."
      },
      {
        icon: "🏗️",
        title: "Complete Structure",
        text: "Small components can be combined to form a larger application without putting all the UI code into one component."
      }
    ]
  },

  visual: {
    heading: "How Component Composition Works",
    description:
      "A parent component can combine multiple smaller components to create a complete user interface.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Small Components",
        text: "Create separate components for different UI responsibilities."
      },
      {
        icon: "2️⃣",
        title: "Create Parent Component",
        text: "Create a component that will organize and combine the smaller components."
      },
      {
        icon: "3️⃣",
        title: "Compose Components",
        text: "Place child components inside the parent component using JSX."
      },
      {
        icon: "4️⃣",
        title: "Build Complete UI",
        text: "React combines the components to create the final interface."
      }
    ],
    flow:
      "Small Components → Parent Component → Composition → Complete UI"
  },

  code: {
    title: "Practical Example — Composing Components",
    description:
      "A page can be created by combining Header, CourseCard, and Footer components.",
    language: "jsx",
    code: `function Header() {
  return <h1>Learning Portal</h1>;
}

function CourseCard() {
  return (
    <div>
      <h2>React Course</h2>
      <p>Learn React step by step.</p>
    </div>
  );
}

function Footer() {
  return <p>Start learning today.</p>;
}

export default function App() {
  return (
    <div>
      <Header />
      <CourseCard />
      <Footer />
    </div>
  );
}`,
    output: `Learning Portal

React Course
Learn React step by step.

Start learning today.`,
    explanation:
      "Header, CourseCard, and Footer are separate components. The App component combines them by rendering each component inside its JSX. This is component composition: smaller components are combined to create a complete user interface."
  },

  interview: {
    question: "What is component composition in React?",
    answer:
      "Component composition is the practice of combining smaller React components to build a larger user interface. A parent component can render multiple child components.",
    tip:
      "Use a simple example in an interview: App can compose Header, Sidebar, Content, and Footer components to create a complete page."
  },

  tricky: {
    question:
      "Is component composition the same as copying and pasting code?",
    answer:
      "No. Composition means combining reusable components. The same component can be rendered in different places without copying its implementation code."
  },

  practice: {
    question:
      "Create Header, MainContent, and Footer components and combine them inside an App component.",
    hint:
      "Create each component separately and then render all three inside App."
  },

  challenge: {
    title: "Build a Composed Learning Page",
    description:
      "Practice creating a complete page from smaller reusable components.",
    task:
      "Create Navbar, CourseCard, CourseList, and Footer components. CourseList should contain multiple CourseCard components. Combine all components inside App to create a simple learning page."
  }
},
"props": {
  concept: {
    heading: "Props",
    paragraphs: [
      "Props, short for properties, are used to pass data from a parent component to a child component.",

      "Props are read-only inside the receiving component. A child component uses the values it receives to display or control its UI.",

      "Props make components reusable because the same component can receive different data each time it is used."
    ],
    remember:
      "Props pass data from a parent component to a child component."
  },

  analogy: {
    heading: "Think of Props Like a Delivery Package",
    items: [
      {
        icon: "📦",
        title: "Parent Sends Data",
        text: "A parent prepares a package containing information. Similarly, a parent component can pass data to a child through props."
      },
      {
        icon: "📥",
        title: "Child Receives Data",
        text: "The child receives the package and uses the information for its task. A child component receives props and uses them in its UI."
      },
      {
        icon: "♻️",
        title: "Same Component, Different Data",
        text: "The same type of package can contain different items. Similarly, the same component can receive different prop values."
      }
    ]
  },

  visual: {
    heading: "How Props Flow in React",
    description:
      "Props normally flow from a parent component to a child component.",
    steps: [
      {
        icon: "1️⃣",
        title: "Parent Has Data",
        text: "The parent component has information that another component needs."
      },
      {
        icon: "2️⃣",
        title: "Pass Props",
        text: "The parent sends the data as attributes when rendering the child component."
      },
      {
        icon: "3️⃣",
        title: "Child Receives Props",
        text: "The child component receives the values through its props parameter."
      },
      {
        icon: "4️⃣",
        title: "Display Data",
        text: "The child uses the received values to create its UI."
      }
    ],
    flow:
      "Parent Data → Props → Child Component → UI"
  },

  code: {
    title: "Practical Example — Passing Props",
    description:
      "The same CourseCard component can display different courses by receiving data through props.",
    language: "jsx",
    code: `function CourseCard({ title, duration }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Duration: {duration}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <CourseCard
        title="React"
        duration="8 Weeks"
      />

      <CourseCard
        title="Node.js"
        duration="6 Weeks"
      />
    </div>
  );
}`,
    output: `React
Duration: 8 Weeks

Node.js
Duration: 6 Weeks`,
    explanation:
      "The parent App component passes title and duration to CourseCard as props. CourseCard receives these values through its function parameter and displays them inside JSX. The same component is reused with different data."
  },

  interview: {
    question: "What are props in React?",
    answer:
      "Props are values passed from a parent component to a child component. They allow components to receive data and make the same component reusable with different values.",
    tip:
      "Remember: props are used for passing data, and the receiving component should treat props as read-only."
  },

  tricky: {
    question:
      "Can a child component directly change its props?",
    answer:
      "No. Props are read-only in the receiving component. If a value needs to change, the parent can manage the state and pass the updated value to the child."
  },

  practice: {
    question:
      "Create a UserCard component that receives name, role, and city through props and displays them.",
    hint:
      "Pass the three values from App and receive them in the UserCard function parameter."
  },

  challenge: {
    title: "Build Reusable Course Cards",
    description:
      "Practice passing different data to the same React component.",
    task:
      "Create a CourseCard component that receives courseName, duration, and level as props. Render the component three times with different course data."
  }
},"state": {
  concept: {
    heading: "State",
    paragraphs: [
      "State is data that a React component can store and manage over time.",

      "When state changes, React re-renders the component so the UI can show the updated value.",

      "State is useful for changing information such as counters, form values, selected items, menus, and login status."
    ],
    remember:
      "State stores changing data inside a React component."
  },

  analogy: {
    heading: "Think of State Like a Scoreboard",
    items: [
      {
        icon: "🏆",
        title: "Current Value",
        text: "A scoreboard stores the current score. Similarly, state stores the current value used by a component."
      },
      {
        icon: "🔄",
        title: "Value Changes",
        text: "When a team scores, the scoreboard changes. When state changes, the React UI can update."
      },
      {
        icon: "📺",
        title: "Updated Display",
        text: "The new score appears on the scoreboard. React displays the updated state in the user interface."
      }
    ]
  },

  visual: {
    heading: "How State Works",
    description:
      "State allows a component to remember changing information and update its UI when that information changes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create State",
        text: "Use a React Hook such as useState to create a state variable."
      },
      {
        icon: "2️⃣",
        title: "Display State",
        text: "Use the state value inside JSX to display it in the interface."
      },
      {
        icon: "3️⃣",
        title: "Update State",
        text: "Use the state setter function when the value needs to change."
      },
      {
        icon: "4️⃣",
        title: "UI Updates",
        text: "React renders the component again using the updated state."
      }
    ],
    flow:
      "State → Display → User Action → Update State → Re-rendered UI"
  },

  code: {
    title: "Practical Example — Counter State",
    description:
      "The useState Hook can store a counter value and update the UI when the value changes.",
    language: "jsx",
    code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`,
    output: `Counter: 0

[ Increase ]

After clicking:

Counter: 1

After clicking again:

Counter: 2`,
    explanation:
      "useState creates the count state variable with an initial value of 0. setCount is used to update the value. When the button is clicked, the state changes and React renders the component again with the new count."
  },

  interview: {
    question: "What is state in React?",
    answer:
      "State is data managed by a React component that can change over time. When state changes, React updates the component's UI to reflect the new value.",
    tip:
      "A simple interview example is a counter. The counter value is stored in state and changes when the user clicks a button."
  },

  tricky: {
    question:
      "Can we change React state directly?",
    answer:
      "State should not be changed directly. Use the state setter function provided by useState so React can properly process the update and render the updated UI."
  },

  practice: {
    question:
      "Create a counter component with a state value starting at 0 and two buttons: Increase and Decrease.",
    hint:
      "Use useState and update the value using its setter function."
  },

  challenge: {
    title: "Build a Quantity Controller",
    description:
      "Practice managing changing data with React state.",
    task:
      "Create a product quantity controller with an initial quantity of 1. Add Increase and Decrease buttons. Do not allow the quantity to go below 1."
  }
},
"props-vs-state": {
  concept: {
    heading: "Props vs State",
    paragraphs: [
      "Props and state are both used to work with data in React, but they have different purposes.",

      "Props are used to pass data from a parent component to a child component, while state stores data that a component manages and can update.",

      "Props are read-only for the receiving component, while state can change using a state update function."
    ],
    remember:
      "Props are passed into a component; state is managed by the component."
  },

  analogy: {
    heading: "Think of Props and State Like a Classroom",
    items: [
      {
        icon: "📄",
        title: "Props — Given Information",
        text: "A teacher may give information or instructions to a student. Similarly, a parent component passes data to a child through props."
      },
      {
        icon: "🧠",
        title: "State — Own Information",
        text: "A student may keep track of their own progress. Similarly, a component can manage its own changing state."
      },
      {
        icon: "🔄",
        title: "Changing Data",
        text: "The information given by the teacher is not changed directly by the student, while the student's own progress can change over time. Props and state work similarly."
      }
    ]
  },

  visual: {
    heading: "Props vs State Flow",
    description:
      "Props normally flow into a component, while state is managed inside the component.",
    steps: [
      {
        icon: "1️⃣",
        title: "Props",
        text: "A parent component passes data to a child component."
      },
      {
        icon: "2️⃣",
        title: "Child Receives Props",
        text: "The child uses the received values to display its UI."
      },
      {
        icon: "3️⃣",
        title: "State",
        text: "The component can store changing information using state."
      },
      {
        icon: "4️⃣",
        title: "Update",
        text: "A state setter updates the state when required."
      },
      {
        icon: "5️⃣",
        title: "UI Changes",
        text: "React renders the updated UI based on the new state."
      }
    ],
    flow:
      "Parent → Props → Child ← State → Update → UI"
  },

  code: {
    title: "Practical Example — Props and State Together",
    description:
      "A component can receive product information through props while managing its own quantity through state.",
    language: "jsx",
    code: `import { useState } from "react";

function ProductCard({ name, price }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ProductCard
      name="Laptop"
      price={55000}
    />
  );
}`,
    output: `Laptop
Price: ₹55000
Quantity: 1

[ Increase ]

After clicking:

Quantity: 2`,
    explanation:
      "name and price are props passed from App to ProductCard. The quantity is state managed inside ProductCard. The props provide product information, while state manages the changing quantity. This example shows how props and state can work together in the same component."
  },

  interview: {
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from a parent to a child component and are read-only for the receiving component. State is data managed by a component and can change over time using a state update function.",
    tip:
      "Remember: Props = received data. State = managed and changing data."
  },

  tricky: {
    question:
      "Can props and state contain the same type of data?",
    answer:
      "Yes. Both can contain values such as strings, numbers, arrays, objects, or other data. The important difference is how the data is provided and managed."
  },

  practice: {
    question:
      "Create a ProductCard component that receives name and price through props and manages quantity using state.",
    hint:
      "Use props for name and price. Use useState for quantity."
  },

  challenge: {
    title: "Build a Product Counter",
    description:
      "Practice using props and state together in a reusable component.",
    task:
      "Create a ProductCard component that receives productName and price through props. Add a quantity state starting at 1 and provide Increase and Decrease buttons. Display the product information and current quantity."
  }
},
"react-events": {
  concept: {
    heading: "Events",
    paragraphs: [
      "Events are actions that happen in the browser, such as clicking a button, typing in an input, submitting a form, or moving the mouse.",

      "React provides event handling so a component can respond when a user interacts with the interface.",

      "React event names use camelCase, such as onClick, onChange, and onSubmit."
    ],
    remember:
      "React events allow components to respond to user actions."
  },

  analogy: {
    heading: "Think of Events Like a Doorbell",
    items: [
      {
        icon: "🔔",
        title: "Action",
        text: "Someone presses a doorbell. This is the event."
      },
      {
        icon: "👂",
        title: "Listen",
        text: "The system detects the bell press. In React, an event handler listens for the user action."
      },
      {
        icon: "⚡",
        title: "Response",
        text: "The bell produces a response. A React event handler runs code when the event occurs."
      }
    ]
  },

  visual: {
    heading: "How React Events Work",
    description:
      "A user performs an action, React detects the event, and the assigned event handler runs.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Action",
        text: "The user clicks, types, submits, or performs another supported action."
      },
      {
        icon: "2️⃣",
        title: "Event Detected",
        text: "React detects the event on the relevant element."
      },
      {
        icon: "3️⃣",
        title: "Event Handler",
        text: "The function connected to the event is executed."
      },
      {
        icon: "4️⃣",
        title: "UI Response",
        text: "The application performs the required action or updates the UI."
      }
    ],
    flow:
      "User Action → React Event → Event Handler → Application Response"
  },

  code: {
    title: "Practical Example — Handling a Click",
    description:
      "The onClick event can be used to run a function when the user clicks a button.",
    language: "jsx",
    code: `export default function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h2>Event Example</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}`,
    output: `Event Example

[ Click Me ]

After clicking:

Button clicked!`,
    explanation:
      "The handleClick function contains the code that should run when the button is clicked. The onClick attribute connects the button to this function. React calls handleClick when the click event occurs."
  },

  interview: {
    question: "How are events handled in React?",
    answer:
      "React handles events by using event attributes such as onClick, onChange, and onSubmit and assigning functions to them.",
    tip:
      "Remember that React event names use camelCase, such as onClick instead of onclick."
  },

  tricky: {
    question:
      "What is the difference between onClick={handleClick} and onClick={handleClick()}?",
    answer:
      "onClick={handleClick} passes the function to React so it can be called when the event occurs. onClick={handleClick()} calls the function immediately while the component is rendering."
  },

  practice: {
    question:
      "Create a button that displays an alert message when the user clicks it.",
    hint:
      "Create a function and connect it to the button using onClick."
  },

  challenge: {
    title: "Build an Interactive Button",
    description:
      "Practice handling user interactions with React events.",
    task:
      "Create a button labeled 'Show Message'. When the user clicks it, display a message below the button. Use a React event handler to handle the click."
  }
},
"event-handlers": {
  concept: {
    heading: "Event Handlers",
    paragraphs: [
      "An event handler is a function that runs when a specific user action occurs.",

      "In React, we connect an event handler to an element using event props such as onClick, onChange, and onSubmit.",

      "Event handlers keep user interaction logic separate and make components easier to understand and maintain."
    ],
    remember:
      "An event handler is a function that responds to a user action."
  },

  analogy: {
    heading: "Think of an Event Handler Like a Reception Desk",
    items: [
      {
        icon: "🛎️",
        title: "Request",
        text: "A visitor makes a request at the reception desk. This is similar to a user performing an action."
      },
      {
        icon: "👂",
        title: "Handler",
        text: "The receptionist listens to the request and decides what action is required. An event handler does the same for a UI event."
      },
      {
        icon: "⚡",
        title: "Response",
        text: "The receptionist takes the required action. The event handler runs the code needed to respond to the user's action."
      }
    ]
  },

  visual: {
    heading: "How Event Handlers Work",
    description:
      "React connects a user action with a function that should run when that action occurs.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Action",
        text: "The user clicks, types, submits, or performs another interaction."
      },
      {
        icon: "2️⃣",
        title: "Event",
        text: "React detects the event on the relevant element."
      },
      {
        icon: "3️⃣",
        title: "Handler Runs",
        text: "React calls the function connected to the event."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The function performs the required operation or updates the UI."
      }
    ],
    flow:
      "User Action → Event → Event Handler → Response"
  },

  code: {
    title: "Practical Example — Event Handler With Input",
    description:
      "An event handler can receive the event object and use information from the user's interaction.",
    language: "jsx",
    code: `import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div>
      <h2>Event Handler Example</h2>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something"
      />

      <p>You typed: {message}</p>
    </div>
  );
}`,
    output: `Event Handler Example

[ Type something ]

You typed: React

If the user types:

Hello

The UI displays:

You typed: Hello`,
    explanation:
      "The handleChange function is the event handler for the input's onChange event. React passes an event object to the function. event.target.value contains the current input value. setMessage updates the state, and React displays the updated value."
  },

  interview: {
    question: "What is an event handler in React?",
    answer:
      "An event handler is a function that runs in response to a user interaction such as a click, input change, or form submission.",
    tip:
      "Give a simple example such as onClick={handleClick} and explain that handleClick runs when the button is clicked."
  },

  tricky: {
    question:
      "How can an event handler access the user's input value?",
    answer:
      "For an input event, the handler receives an event object. The current value can commonly be accessed using event.target.value."
  },

  practice: {
    question:
      "Create an input field and an event handler that displays the current input value below the field.",
    hint:
      "Use onChange and read the value using event.target.value."
  },

  challenge: {
    title: "Build a Live Text Preview",
    description:
      "Practice using an event handler to respond to input changes.",
    task:
      "Create an input field for a course title. As the user types, display the same title below the input. Use an onChange event handler and React state."
  }
},
"forms": {
  concept: {
    heading: "Forms",
    paragraphs: [
      "Forms allow users to enter and submit information such as names, email addresses, passwords, and search queries.",

      "In React, form elements such as input, textarea, select, and button can be connected to component logic.",

      "React can manage form values and handle submission using event handlers and state."
    ],
    remember:
      "React forms collect user input and connect it with component logic."
  },

  analogy: {
    heading: "Think of a Form Like an Application Form",
    items: [
      {
        icon: "📝",
        title: "Enter Information",
        text: "A person fills in details such as name or email. A web form collects similar information from the user."
      },
      {
        icon: "📥",
        title: "Collect Data",
        text: "The completed form contains the information entered by the user."
      },
      {
        icon: "📤",
        title: "Submit",
        text: "The form is submitted so the application can process the entered information."
      }
    ]
  },

  visual: {
    heading: "How Forms Work in React",
    description:
      "A React form collects user input, manages the values, and handles the submission.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Enters Data",
        text: "The user types or selects information in the form fields."
      },
      {
        icon: "2️⃣",
        title: "React Handles Input",
        text: "Event handlers can read and manage the entered values."
      },
      {
        icon: "3️⃣",
        title: "Submit Form",
        text: "The user submits the form using a button."
      },
      {
        icon: "4️⃣",
        title: "Process Data",
        text: "React can validate or process the form data before sending it to an API or another part of the application."
      }
    ],
    flow:
      "User Input → React Form → Event Handler → Submit → Process Data"
  },

  code: {
    title: "Practical Example — Simple React Form",
    description:
      "This example uses state to store a name and handles form submission.",
    language: "jsx",
    code: `import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hello " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        type="text"
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        placeholder="Enter your name"
      />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}`,
    output: `Registration Form

[ Enter your name ]

[ Submit ]

After entering:
Student

and clicking Submit:

Hello Student`,
    explanation:
      "The name value is stored in state. The input's onChange event updates that state whenever the user types. When the form is submitted, handleSubmit runs. event.preventDefault() prevents the browser's default page reload, and the entered value can then be processed by the application."
  },

  interview: {
    question: "How are forms handled in React?",
    answer:
      "React forms are commonly handled using state and event handlers. Input values can be stored in state, updated with onChange, and processed when the form is submitted using onSubmit.",
    tip:
      "Mention value, onChange, onSubmit, and event.preventDefault() when explaining a controlled React form."
  },

  tricky: {
    question:
      "Why is event.preventDefault() commonly used in React forms?",
    answer:
      "The browser normally performs its default form submission behavior, which can reload or navigate the page. event.preventDefault() stops that default behavior so the React application can handle the submission itself."
  },

  practice: {
    question:
      "Create a React form with an email input and a submit button. Display the entered email when the form is submitted.",
    hint:
      "Use useState for the email, onChange for the input, and onSubmit for the form."
  },

  challenge: {
    title: "Build a Registration Form",
    description:
      "Practice managing multiple form fields in React.",
    task:
      "Create a registration form with fields for name, email, and password. Store the values in state, prevent the default form submission, and display a message containing the submitted name and email."
  }
},
"controlled-components": {
  concept: {
    heading: "Controlled Components",
    paragraphs: [
      "A controlled component is a form element whose value is controlled by React state.",

      "The input value comes from state, and an event handler updates the state when the user changes the input.",

      "This gives React complete control over the form value and makes validation and form processing easier."
    ],
    remember:
      "In a controlled component, React state controls the input value."
  },

  analogy: {
    heading: "Think of It Like a Digital Display",
    items: [
      {
        icon: "🎛️",
        title: "Controlled Value",
        text: "A digital control panel displays a value managed by the system. Similarly, a controlled input displays the value stored in React state."
      },
      {
        icon: "⌨️",
        title: "User Changes",
        text: "When the user types, the input generates a change event."
      },
      {
        icon: "🔄",
        title: "State Updates",
        text: "React updates the state with the new value and then displays that value in the input."
      }
    ]
  },

  visual: {
    heading: "Controlled Component Flow",
    description:
      "The input value and React state remain connected through the value and onChange properties.",
    steps: [
      {
        icon: "1️⃣",
        title: "State",
        text: "React state stores the current input value."
      },
      {
        icon: "2️⃣",
        title: "value",
        text: "The input receives its displayed value from the state."
      },
      {
        icon: "3️⃣",
        title: "User Types",
        text: "The user changes the input, triggering the onChange event."
      },
      {
        icon: "4️⃣",
        title: "Update State",
        text: "The event handler updates the state with the new value."
      },
      {
        icon: "5️⃣",
        title: "Input Updates",
        text: "React renders the input with the updated state value."
      }
    ],
    flow:
      "State → value → Input → onChange → setState → Updated Input"
  },

  code: {
    title: "Practical Example — Controlled Input",
    description:
      "The input value is controlled by React state using value and onChange.",
    language: "jsx",
    code: `import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
        placeholder="Enter email"
      />

      <p>Email: {email}</p>
    </div>
  );
}`,
    output: `Login

[ Enter email ]

As the user types:

Email: user@example.com`,
    explanation:
      "The email state stores the current input value. The value prop connects the input to that state. Whenever the user types, onChange runs and setEmail updates the state. React then renders the updated value back into the input and the paragraph."
  },

  interview: {
    question: "What is a controlled component in React?",
    answer:
      "A controlled component is a form element whose value is controlled by React state. The value prop displays the state value and an event such as onChange updates the state.",
    tip:
      "The two important parts are value and onChange."
  },

  tricky: {
    question:
      "What happens if value is provided but onChange does not update the state?",
    answer:
      "The input can become effectively read-only because React keeps rendering the same state value. To allow the user to change a controlled input, the change handler normally needs to update the state."
  },

  practice: {
    question:
      "Create a controlled input for a course title. Display the current value below the input.",
    hint:
      "Create state for the course title and connect it using value and onChange."
  },

  challenge: {
    title: "Build a Controlled Login Form",
    description:
      "Practice controlling multiple form fields using React state.",
    task:
      "Create controlled inputs for email and password. Display the current email below the form. Add a submit button and prevent the browser's default form submission."
  }
},
"hooks-introduction": {
  concept: {
    heading: "Hooks Introduction",
    paragraphs: [
      "Hooks are special React functions that allow functional components to use features such as state and side effects.",

      "Hooks make it possible to manage component data and behavior without using class components.",

      "Common Hooks include useState, useEffect, useContext, useRef, useReducer, useMemo, and useCallback."
    ],
    remember:
      "Hooks let functional components use important React features."
  },

  analogy: {
    heading: "Think of Hooks Like Tools",
    items: [
      {
        icon: "🧰",
        title: "Different Tools",
        text: "A toolbox contains different tools for different tasks. React provides different Hooks for different component needs."
      },
      {
        icon: "📦",
        title: "Store Data",
        text: "Some tools help manage information. The useState Hook allows a component to store changing data."
      },
      {
        icon: "⚡",
        title: "Perform Actions",
        text: "Some tasks need to happen after rendering or when data changes. Hooks such as useEffect help handle these situations."
      }
    ]
  },

  visual: {
    heading: "How React Hooks Fit Into Components",
    description:
      "Hooks provide functional components with access to different React features.",
    steps: [
      {
        icon: "1️⃣",
        title: "Functional Component",
        text: "Create a normal React function component."
      },
      {
        icon: "2️⃣",
        title: "Choose a Hook",
        text: "Select the Hook required for the component's task."
      },
      {
        icon: "3️⃣",
        title: "Use Hook",
        text: "Call the Hook inside the component according to its rules."
      },
      {
        icon: "4️⃣",
        title: "React Feature",
        text: "The component can now use the functionality provided by that Hook."
      }
    ],
    flow:
      "Functional Component → Hook → React Feature → Component Behavior"
  },

  code: {
    title: "Practical Example — Using a Hook",
    description:
      "useState is one of the most commonly used React Hooks. It allows a component to store changing data.",
    language: "jsx",
    code: `import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => setMessage("Welcome to React")}>
        Change Message
      </button>
    </div>
  );
}`,
    output: `Hello

[ Change Message ]

After clicking:

Welcome to React`,
    explanation:
      "useState is a React Hook. It creates a state value called message and a function called setMessage for updating it. When the button is clicked, setMessage changes the value and React updates the displayed UI."
  },

  interview: {
    question: "What are Hooks in React?",
    answer:
      "Hooks are special React functions that allow functional components to use features such as state, side effects, context, and references.",
    tip:
      "Mention useState and useEffect as common examples of React Hooks."
  },

  tricky: {
    question:
      "Can Hooks be called anywhere in a React application?",
    answer:
      "No. Hooks should normally be called at the top level of React function components or inside custom Hooks. They should not be called inside loops, conditions, or nested functions."
  },

  practice: {
    question:
      "Create a component that uses useState to store a message and changes the message when a button is clicked.",
    hint:
      "Import useState, create message state, and update it inside an onClick handler."
  },

  challenge: {
    title: "Explore React Hooks",
    description:
      "Practice identifying which Hook can be useful for different React tasks.",
    task:
      "Create a list of five React Hooks and write one simple use case for each. Then create a small component using useState."
  }
},
"useState": {
  concept: {
    heading: "useState",
    paragraphs: [
      "useState is a React Hook used to add state to a functional component.",

      "It returns two values: the current state value and a function used to update that value.",

      "When the state update function is called, React renders the component again with the new state."
    ],
    remember:
      "useState lets a functional component store and update changing data."
  },

  analogy: {
    heading: "Think of useState Like a Digital Counter",
    items: [
      {
        icon: "🔢",
        title: "Current Value",
        text: "A digital counter keeps track of its current number. useState stores the current value for a component."
      },
      {
        icon: "➕",
        title: "Update",
        text: "Pressing a button can change the counter. The state setter function changes the state value."
      },
      {
        icon: "🖥️",
        title: "Display",
        text: "The updated number appears on the display. React updates the UI when state changes."
      }
    ]
  },

  visual: {
    heading: "How useState Works",
    description:
      "useState creates a state value and a setter function that can update the value.",
    steps: [
      {
        icon: "1️⃣",
        title: "Import useState",
        text: "Import the Hook from React."
      },
      {
        icon: "2️⃣",
        title: "Create State",
        text: "Call useState with an initial value."
      },
      {
        icon: "3️⃣",
        title: "Use Value",
        text: "Display or use the state value inside the component."
      },
      {
        icon: "4️⃣",
        title: "Update State",
        text: "Call the setter function when the value needs to change."
      },
      {
        icon: "5️⃣",
        title: "Re-render",
        text: "React renders the component with the updated state."
      }
    ],
    flow:
      "useState → State Value → User Action → Setter Function → Re-render"
  },

  code: {
    title: "Practical Example — Counter With useState",
    description:
      "This example uses useState to create a counter that increases when the button is clicked.",
    language: "jsx",
    code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}`,
    output: `Count: 0

[ Increase ]

After one click:

Count: 1

After two clicks:

Count: 2`,
    explanation:
      "useState(0) creates count with an initial value of 0. setCount is the function used to update count. When increaseCount runs, setCount changes the state. React then renders the component again and displays the updated count."
  },

  interview: {
    question: "What does useState return?",
    answer:
      "useState returns an array containing two values: the current state value and a setter function used to update that state.",
    tip:
      "For example, const [count, setCount] = useState(0). count is the state value and setCount updates it."
  },

  tricky: {
    question:
      "Why do we use the setter function instead of changing the state variable directly?",
    answer:
      "The setter function tells React that the state has changed and allows React to process the update and render the component with the new value."
  },

  practice: {
    question:
      "Create a counter using useState with Increase and Decrease buttons.",
    hint:
      "Start the count at 0 and use the setter function to increase or decrease the value."
  },

  challenge: {
    title: "Build a Like Counter",
    description:
      "Practice using useState to manage changing UI data.",
    task:
      "Create a LikeCounter component with a like count starting at 0. Add a 'Like' button that increases the count by 1 and display the current number of likes."
  }
},
"useeffect": {
  concept: {
    heading: "useEffect",
    paragraphs: [
      "useEffect is a React Hook used to perform side effects in a functional component.",
      "Side effects include tasks such as fetching data, updating the document title, setting timers, or working with external systems.",
      "useEffect runs after React renders the component, and its dependency array controls when the effect should run."
    ],
    remember:
      "useEffect is used for side effects that happen after a component renders."
  },

  analogy: {
    heading: "Think of useEffect Like an Automatic Task",
    items: [
      {
        icon: "⚛️",
        title: "Component Renders",
        text: "React displays the component UI."
      },
      {
        icon: "⚙️",
        title: "Effect Runs",
        text: "React performs the required side effect after rendering."
      },
      {
        icon: "🔄",
        title: "Dependencies",
        text: "The dependency array decides when the effect should run again."
      }
    ]
  },

  visual: {
    heading: "How useEffect Works",
    description:
      "useEffect allows a component to perform an action after rendering.",
    steps: [
      {
        icon: "1️⃣",
        title: "Component Renders",
        text: "React renders the component on the screen."
      },
      {
        icon: "2️⃣",
        title: "Effect Is Checked",
        text: "React checks the useEffect dependency array."
      },
      {
        icon: "3️⃣",
        title: "Effect Runs",
        text: "The effect function performs the required side effect."
      },
      {
        icon: "4️⃣",
        title: "Dependency Changes",
        text: "If a dependency changes, the effect can run again."
      },
      {
        icon: "5️⃣",
        title: "Cleanup",
        text: "Some effects can return a cleanup function to remove timers or subscriptions."
      }
    ],
    flow:
      "Render → Check Dependencies → Run Effect → Dependency Changes → Run Again / Cleanup"
  },

  code: {
    title: "Simple useEffect Example",
    description:
      "This example updates the browser document title whenever the count changes.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`,
    output:
      "When the count changes, the browser tab title also changes to show the current count.",
    explanation:
      "The useEffect function runs after the component renders. Because count is included in the dependency array, the effect runs again whenever count changes."
  },

  interview: {
    question: "What is useEffect in React?",
    answer:
      "useEffect is a React Hook used to perform side effects such as data fetching, timers, document updates, and subscriptions.",
    tip:
      "Remember that useEffect runs after rendering and its dependencies control when it runs again."
  },

  tricky: {
    question:
      "What happens if the dependency array is empty?",
    answer:
      "An effect with an empty dependency array runs after the initial render and does not run again because of later state or prop changes."
  },

  practice: {
    question:
      "Create a component that updates the document title whenever a counter value changes.",
    hint:
      "Use useEffect and place the counter state variable inside the dependency array."
  },

  challenge: {
    title: "Build a Timer Effect",
    description:
      "Create a component that uses useEffect to run a timer.",
    task:
      "Create a timer using setInterval. Display the elapsed seconds and return a cleanup function that clears the interval when the component is removed."
  }
},

"usecontext": {
  concept: {
    heading: "useContext",
    paragraphs: [
      "useContext is a React Hook used to access shared data from a Context without passing props through every component.",
      "It is useful for data that many components need, such as theme settings, language preferences, or user information.",
      "A Context provides the data, and components can read that data using the useContext Hook."
    ],
    remember:
      "useContext lets components access shared data without passing props through every level."
  },

  analogy: {
    heading: "Think of Context Like a Shared Notice Board",
    items: [
      {
        icon: "📌",
        title: "Shared Information",
        text: "Important information is placed in one common location."
      },
      {
        icon: "👥",
        title: "Multiple Components",
        text: "Different components can access the shared information."
      },
      {
        icon: "🔗",
        title: "No Prop Drilling",
        text: "Components do not need to pass the same data through every intermediate component."
      }
    ]
  },

  visual: {
    heading: "How useContext Works",
    description:
      "Context allows shared data to move from a provider to components that need it.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Context",
        text: "Create a React Context for the shared data."
      },
      {
        icon: "2️⃣",
        title: "Provide Data",
        text: "A Context Provider makes the data available to its child components."
      },
      {
        icon: "3️⃣",
        title: "Component Needs Data",
        text: "A child component needs to access the shared value."
      },
      {
        icon: "4️⃣",
        title: "useContext",
        text: "The component uses useContext to read the Context value."
      },
      {
        icon: "5️⃣",
        title: "Use the Data",
        text: "The component uses the shared value in its UI or logic."
      }
    ],
    flow:
      "Create Context → Provider → Child Component → useContext → Shared Data"
  },

  code: {
    title: "Simple useContext Example",
    description:
      "This example shares a theme value with a child component using Context.",
    language: "jsx",
    code: `import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function CourseCard() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <CourseCard />
    </ThemeContext.Provider>
  );
}

export default App;`,
    output:
      "The CourseCard component displays: Current Theme: dark",
    explanation:
      "ThemeContext stores shared data. The Provider supplies the value 'dark', and CourseCard uses useContext to read that value directly without receiving it through props."
  },

  interview: {
    question: "What is useContext in React?",
    answer:
      "useContext is a React Hook that allows a component to read a value from a React Context.",
    tip:
      "Use Context when several components need access to shared data and passing props through many levels becomes inconvenient."
  },

  tricky: {
    question:
      "Does useContext replace props in every React application?",
    answer:
      "No. Props are still useful for passing data directly between related components. Context is useful when shared data needs to be accessed by components at different levels of the component tree."
  },

  practice: {
    question:
      "Create a ThemeContext and display the current theme inside a child component.",
    hint:
      "Create the Context, wrap the child with the Provider, and use useContext inside the child."
  },

  challenge: {
    title: "Build a Theme Context",
    description:
      "Create a small React application that shares a theme using Context.",
    task:
      "Create a ThemeContext with light and dark values. Provide the selected theme from the parent and display it inside a child component using useContext."
  }
},
"useRef": {
  concept: {
    heading: "useRef",
    paragraphs: [
      "useRef is a React Hook used to store a value that can persist between renders without causing a re-render.",
      "It is commonly used to access DOM elements directly, such as focusing an input or reading an element's current value.",
      "The value stored by useRef is available through the current property."
    ],
    remember:
      "useRef stores a persistent value or gives direct access to a DOM element without causing a re-render."
  },

  analogy: {
    heading: "Think of useRef Like a Storage Box",
    items: [
      {
        icon: "📦",
        title: "Store a Value",
        text: "A ref can hold a value that needs to remain available between renders."
      },
      {
        icon: "🔄",
        title: "Persists",
        text: "The stored value remains available when the component renders again."
      },
      {
        icon: "🎯",
        title: "Access an Element",
        text: "A ref can also point directly to a DOM element."
      }
    ]
  },

  visual: {
    heading: "How useRef Works",
    description:
      "useRef creates a ref object whose current property can store a value or reference a DOM element.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Ref",
        text: "Call useRef() inside the functional component."
      },
      {
        icon: "2️⃣",
        title: "Attach Ref",
        text: "The ref can be attached to a JSX element using the ref attribute."
      },
      {
        icon: "3️⃣",
        title: "Access Current",
        text: "The referenced element or stored value is available through ref.current."
      },
      {
        icon: "4️⃣",
        title: "Update Ref",
        text: "The current property can be changed without triggering a component re-render."
      }
    ],
    flow:
      "useRef() → Ref Object → ref.current → Access or Store Value"
  },

  code: {
    title: "Focus an Input with useRef",
    description:
      "This example uses useRef to access an input element and focus it when the button is clicked.",
    language: "jsx",
    code: `import { useRef } from "react";

function LoginForm() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your email"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default LoginForm;`,
    output:
      "When the Focus Input button is clicked, the cursor moves into the input field.",
    explanation:
      "useRef creates inputRef. React connects the ref to the input element through the ref attribute. The DOM element can then be accessed using inputRef.current."
  },

  interview: {
    question: "What is useRef in React?",
    answer:
      "useRef is a React Hook used to persist a value between renders or directly access a DOM element.",
    tip:
      "Remember that changing ref.current does not cause the component to re-render."
  },

  tricky: {
    question:
      "Does changing ref.current trigger a React re-render?",
    answer:
      "No. Updating ref.current does not automatically cause the component to render again."
  },

  practice: {
    question:
      "Create an input and use useRef to focus it when a button is clicked.",
    hint:
      "Create a ref with useRef(null), attach it to the input, and call inputRef.current.focus()."
  },

  challenge: {
    title: "Build an Auto Focus Form",
    description:
      "Create a form that automatically focuses an input when the component loads.",
    task:
      "Use useRef and useEffect to automatically focus the input when the component is first rendered."
  }
},

"useReducer": {
  concept: {
    heading: "useReducer",
    paragraphs: [
      "useReducer is a React Hook used to manage state with a reducer function.",
      "It is useful when state logic contains multiple related actions or becomes difficult to manage with several useState calls.",
      "The reducer receives the current state and an action, then returns the next state."
    ],
    remember:
      "useReducer manages state by sending actions to a reducer function."
  },

  analogy: {
    heading: "Think of useReducer Like a Control Room",
    items: [
      {
        icon: "🎛️",
        title: "State",
        text: "The control room keeps track of the current application state."
      },
      {
        icon: "📩",
        title: "Action",
        text: "An action describes what the user wants to change."
      },
      {
        icon: "⚙️",
        title: "Reducer",
        text: "The reducer decides how the state should change."
      }
    ]
  },

  visual: {
    heading: "How useReducer Works",
    description:
      "useReducer updates state by sending an action to a reducer function.",
    steps: [
      {
        icon: "1️⃣",
        title: "Initial State",
        text: "The component starts with an initial state."
      },
      {
        icon: "2️⃣",
        title: "User Action",
        text: "A user interaction creates an action."
      },
      {
        icon: "3️⃣",
        title: "Dispatch",
        text: "The dispatch function sends the action to the reducer."
      },
      {
        icon: "4️⃣",
        title: "Reducer",
        text: "The reducer calculates the next state."
      },
      {
        icon: "5️⃣",
        title: "UI Updates",
        text: "React renders the component using the updated state."
      }
    ],
    flow:
      "Initial State → User Action → dispatch() → Reducer → New State → UI Update"
  },

  code: {
    title: "Simple useReducer Counter",
    description:
      "This example manages a counter using actions and a reducer function.",
    language: "jsx",
    code: `import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }

  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(
    reducer,
    { count: 0 }
  );

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;`,
    output:
      "The counter starts at 0. Increase adds 1 and Decrease subtracts 1.",
    explanation:
      "dispatch sends an action to the reducer. The reducer checks the action type and returns the updated state. React then renders the UI using the new state."
  },

  interview: {
    question: "What is useReducer in React?",
    answer:
      "useReducer is a React Hook used to manage state with a reducer function and dispatched actions.",
    tip:
      "useReducer is especially useful when state updates involve multiple related actions or complex logic."
  },

  tricky: {
    question:
      "When might useReducer be preferred over useState?",
    answer:
      "useReducer can be useful when a component has complex state logic, multiple related state updates, or several actions that modify the same state."
  },

  practice: {
    question:
      "Create a counter using useReducer with Increase, Decrease, and Reset actions.",
    hint:
      "Create a reducer with three action types and call dispatch() from each button."
  },

  challenge: {
    title: "Build a Shopping Cart Reducer",
    description:
      "Create a small shopping cart using useReducer.",
    task:
      "Create actions for adding an item, removing an item, increasing quantity, and decreasing quantity. Use the reducer to update the cart state."
  }
},
"usememo": {
  concept: {
    heading: "useMemo",
    paragraphs: [
      "useMemo is a React Hook used to remember the result of a calculation between renders.",
      "It can help avoid repeating an expensive calculation when the values used by that calculation have not changed.",
      "useMemo should be used when there is a real performance reason, not for every calculation in a component."
    ],
    remember:
      "useMemo remembers a calculated value and recomputes it when its dependencies change."
  },

  analogy: {
    heading: "Think of useMemo Like Saving a Calculation",
    items: [
      {
        icon: "🧮",
        title: "Calculate",
        text: "The component performs a calculation using some data."
      },
      {
        icon: "💾",
        title: "Remember",
        text: "useMemo remembers the calculated result."
      },
      {
        icon: "🔄",
        title: "Recalculate When Needed",
        text: "The calculation runs again when a dependency changes."
      }
    ]
  },

  visual: {
    heading: "How useMemo Works",
    description:
      "useMemo stores a calculated value and recalculates it when its dependencies change.",
    steps: [
      {
        icon: "1️⃣",
        title: "Component Renders",
        text: "React renders the component."
      },
      {
        icon: "2️⃣",
        title: "Calculation Runs",
        text: "The calculation creates a result."
      },
      {
        icon: "3️⃣",
        title: "Result Is Remembered",
        text: "useMemo stores the calculated result."
      },
      {
        icon: "4️⃣",
        title: "Component Renders Again",
        text: "React renders the component again."
      },
      {
        icon: "5️⃣",
        title: "Dependencies Checked",
        text: "The calculation runs again only when a dependency changes."
      }
    ],
    flow:
      "Calculation → useMemo → Remember Result → Re-render → Check Dependencies → Recalculate if Needed"
  },

  code: {
    title: "Simple useMemo Example",
    description:
      "This example calculates the total price only when the price or quantity changes.",
    language: "jsx",
    code: `import { useMemo, useState } from "react";

function Product() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => {
    return price * quantity;
  }, [price, quantity]);

  return (
    <div>
      <h2>Total: ₹{total}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>

      <button onClick={() => setPrice(price + 10)}>
        Increase Price
      </button>
    </div>
  );
}

export default Product;`,
    output:
      "The total price updates whenever price or quantity changes.",
    explanation:
      "useMemo remembers the result of price * quantity. React recalculates total when either price or quantity changes."
  },

  interview: {
    question: "What is useMemo in React?",
    answer:
      "useMemo is a React Hook that memoizes the result of a calculation and recomputes it when its dependencies change.",
    tip:
      "useMemo is mainly a performance optimization for expensive calculations."
  },

  tricky: {
    question:
      "Should useMemo be used for every calculation?",
    answer:
      "No. Simple calculations usually do not need useMemo. It is useful when avoiding an expensive repeated calculation provides a meaningful performance benefit."
  },

  practice: {
    question:
      "Create a product component that calculates the total price using useMemo.",
    hint:
      "Create price and quantity state and calculate price * quantity inside useMemo."
  },

  challenge: {
    title: "Build a Product Calculator",
    description:
      "Create a product price calculator using useMemo.",
    task:
      "Create inputs for price and quantity. Calculate the total amount using useMemo and display the result."
  }
},

"usecallback": {
  concept: {
    heading: "useCallback",
    paragraphs: [
      "useCallback is a React Hook used to remember a function between component renders.",
      "It returns the same function reference until one of its dependencies changes.",
      "useCallback can be useful when passing functions to optimized child components and when unnecessary function recreation affects performance."
    ],
    remember:
      "useCallback remembers a function reference until its dependencies change."
  },

  analogy: {
    heading: "Think of useCallback Like Reusing an Instruction",
    items: [
      {
        icon: "📝",
        title: "Create Function",
        text: "A component creates a function for a specific task."
      },
      {
        icon: "💾",
        title: "Remember Function",
        text: "useCallback keeps the same function reference between renders."
      },
      {
        icon: "🔄",
        title: "Update When Needed",
        text: "A new function is created when a dependency changes."
      }
    ]
  },

  visual: {
    heading: "How useCallback Works",
    description:
      "useCallback remembers a function so its reference can remain stable between renders.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "The component defines a callback function."
      },
      {
        icon: "2️⃣",
        title: "useCallback",
        text: "React remembers the function reference."
      },
      {
        icon: "3️⃣",
        title: "Component Re-renders",
        text: "The parent component renders again."
      },
      {
        icon: "4️⃣",
        title: "Dependencies Checked",
        text: "React checks the dependency array."
      },
      {
        icon: "5️⃣",
        title: "Reuse or Create",
        text: "The previous function is reused if dependencies have not changed; otherwise a new function is created."
      }
    ],
    flow:
      "Function → useCallback → Remember Reference → Re-render → Check Dependencies → Reuse / Create New"
  },

  code: {
    title: "Simple useCallback Example",
    description:
      "This example remembers a function that updates a counter.",
    language: "jsx",
    code: `import { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`,
    output:
      "Each click increases the counter by 1.",
    explanation:
      "useCallback remembers the increase function. Because the dependency array is empty, the same function reference can be reused across renders."
  },

  interview: {
    question: "What is useCallback in React?",
    answer:
      "useCallback is a React Hook that memoizes a function reference and creates a new function when its dependencies change.",
    tip:
      "useCallback is about remembering a function, while useMemo is about remembering a calculated value."
  },

  tricky: {
    question:
      "What is the main difference between useMemo and useCallback?",
    answer:
      "useMemo memoizes the result of a calculation, while useCallback memoizes a function reference."
  },

  practice: {
    question:
      "Create a button handler using useCallback that updates a counter.",
    hint:
      "Create the function inside useCallback and use the function as the button's onClick handler."
  },

  challenge: {
    title: "Build a Reusable Callback",
    description:
      "Create a parent component that passes a callback function to a child component.",
    task:
      "Use useCallback to create a stable callback and pass it to a child button component."
  }
},"lists": {
  concept: {
    heading: "Rendering Lists",
    paragraphs: [
      "React can display multiple items from an array by using JavaScript array methods such as map().",
      "The map() method creates JSX for each item in the array, allowing us to build lists of products, courses, users, or other data.",
      "When rendering a list, each item should have a unique key so React can efficiently identify individual elements."
    ],
    remember:
      "Use map() to create multiple React elements from an array."
  },

  analogy: {
    heading: "Think of Rendering Lists Like Displaying a Product Catalog",
    items: [
      {
        icon: "📋",
        title: "Data List",
        text: "An array contains multiple items that need to be displayed."
      },
      {
        icon: "🔁",
        title: "map()",
        text: "map() processes each item and creates the required JSX."
      },
      {
        icon: "🖥️",
        title: "UI List",
        text: "React displays the generated elements on the screen."
      }
    ]
  },

  visual: {
    heading: "How React Renders Lists",
    description:
      "React uses JavaScript array methods to create repeated UI elements from data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "Store multiple items inside an array."
      },
      {
        icon: "2️⃣",
        title: "Use map()",
        text: "Loop through the array using map()."
      },
      {
        icon: "3️⃣",
        title: "Return JSX",
        text: "Create JSX for each array item."
      },
      {
        icon: "4️⃣",
        title: "Add Key",
        text: "Give each rendered item a unique key."
      },
      {
        icon: "5️⃣",
        title: "Display List",
        text: "React renders all the generated elements."
      }
    ],
    flow:
      "Array Data → map() → JSX for Each Item → Key → React UI"
  },

  code: {
    title: "Render a Product List",
    description:
      "This example displays multiple products using the map() method.",
    language: "jsx",
    code: `function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Keyboard", price: 2000 },
    { id: 3, name: "Mouse", price: 1000 }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;`,
    output:
      "The page displays three products with their names and prices.",
    explanation:
      "map() goes through every product in the array and returns JSX for that product. The id is used as the key so React can identify each list item."
  },

  interview: {
    question: "How do you render a list in React?",
    answer:
      "A list can be rendered by using JavaScript's map() method to create JSX elements from an array.",
    tip:
      "Remember to provide a unique key for each item in a rendered list."
  },

  tricky: {
    question:
      "Can we use forEach() directly to return a React list?",
    answer:
      "No. forEach() does not return a new array. map() is commonly used because it returns a new array containing the JSX elements."
  },

  practice: {
    question:
      "Create an array of five courses and display their names using map().",
    hint:
      "Store the courses in an array and return an element for each course inside map()."
  },

  challenge: {
    title: "Build a Course List",
    description:
      "Create a reusable React component that displays course information.",
    task:
      "Create an array containing course name, duration, and fee. Use map() to display every course with a unique key."
  }
},

"keys": {
  concept: {
    heading: "Keys",
    paragraphs: [
      "Keys are special attributes used by React when rendering lists of elements.",
      "A key helps React identify which list item has changed, been added, or been removed.",
      "Keys should be unique among the items in the same list and should remain stable when possible."
    ],
    remember:
      "Keys help React identify individual items when rendering lists."
  },

  analogy: {
    heading: "Think of Keys Like Unique ID Cards",
    items: [
      {
        icon: "🪪",
        title: "Unique Identity",
        text: "Each list item receives an identifier that distinguishes it from other items."
      },
      {
        icon: "🔍",
        title: "React Tracks Items",
        text: "React uses keys to understand which item corresponds to which previous item."
      },
      {
        icon: "🔄",
        title: "Efficient Updates",
        text: "Stable keys help React update the list correctly when data changes."
      }
    ]
  },

  visual: {
    heading: "How Keys Work",
    description:
      "Keys give React a stable identity for each item in a rendered list.",
    steps: [
      {
        icon: "1️⃣",
        title: "List Data",
        text: "The application has multiple items in an array."
      },
      {
        icon: "2️⃣",
        title: "Render Items",
        text: "map() creates JSX for each item."
      },
      {
        icon: "3️⃣",
        title: "Assign Key",
        text: "Each item receives a unique and stable key."
      },
      {
        icon: "4️⃣",
        title: "Data Changes",
        text: "An item may be added, removed, or updated."
      },
      {
        icon: "5️⃣",
        title: "React Identifies Items",
        text: "React uses keys to determine which elements need updating."
      }
    ],
    flow:
      "List → map() → Unique Key → Data Changes → React Identifies Items → UI Update"
  },

  code: {
    title: "Using Keys in a List",
    description:
      "This example uses a product ID as the key for each rendered item.",
    language: "jsx",
    code: `function ProductList() {
  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Keyboard" },
    { id: 103, name: "Mouse" }
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;`,
    output:
      "The browser displays Laptop, Keyboard, and Mouse as a list.",
    explanation:
      "Each list item uses product.id as its key. Because the IDs identify individual products, React can track the items when the list changes."
  },

  interview: {
    question: "Why are keys important in React?",
    answer:
      "Keys help React identify individual elements in a list and determine which items need to be updated when the list changes.",
    tip:
      "Use a stable unique identifier from your data when possible."
  },

  tricky: {
    question:
      "Should the array index always be used as a key?",
    answer:
      "No. An index can be used in some static lists, but it can cause problems when items are inserted, removed, or reordered. A stable unique ID is generally preferable."
  },

  practice: {
    question:
      "Create a list of products with unique IDs and render them using map() and key.",
    hint:
      "Use product.id as the key for each rendered product."
  },

  challenge: {
    title: "Build a Dynamic List",
    description:
      "Create a list where items can be added and removed.",
    task:
      "Create a React list of products with Add and Delete functionality. Use a stable unique ID as the key for every product."
  }
},"react-router": {
  concept: {
    heading: "React Router",
    paragraphs: [
      "React Router is a library used to manage navigation between different views or pages in a React application.",
      "It allows users to move between URLs without requiring a full browser page reload.",
      "Routes connect URL paths with React components, making it possible to build multi-page-like experiences in a single-page application."
    ],
    remember:
      "React Router connects URL paths with React components for client-side navigation."
  },

  analogy: {
    heading: "Think of React Router Like a Building Directory",
    items: [
      {
        icon: "🏢",
        title: "Application",
        text: "The React application is like a building containing different sections."
      },
      {
        icon: "🗺️",
        title: "Route",
        text: "A route tells the application which component belongs to a particular URL."
      },
      {
        icon: "🚪",
        title: "Component",
        text: "The matching component is displayed when the user visits that URL."
      }
    ]
  },

  visual: {
    heading: "How React Router Works",
    description:
      "React Router checks the current URL and displays the component associated with that route.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Visits URL",
        text: "The user opens a URL such as /courses."
      },
      {
        icon: "2️⃣",
        title: "Router Checks Path",
        text: "React Router matches the URL with a configured route."
      },
      {
        icon: "3️⃣",
        title: "Route Matches",
        text: "The router finds the component connected to that path."
      },
      {
        icon: "4️⃣",
        title: "Component Renders",
        text: "React displays the matching component."
      },
      {
        icon: "5️⃣",
        title: "Navigation Continues",
        text: "Users can move to another route without a full page reload."
      }
    ],
    flow:
      "URL → Router → Route Match → React Component → UI"
  },

  code: {
    title: "Basic React Router Example",
    description:
      "This example creates routes for Home and Courses pages.",
    language: "jsx",
    code: `import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function Courses() {
  return <h2>Courses Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/courses">Courses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={<Courses />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,
    output:
      "Clicking Home displays the Home Page, while clicking Courses displays the Courses Page without a full browser reload.",
    explanation:
      "BrowserRouter provides routing functionality. Routes contains the route definitions, Route connects a URL path to a component, and Link provides navigation between routes."
  },

  interview: {
    question: "What is React Router?",
    answer:
      "React Router is a library used to handle client-side routing and navigation in React applications.",
    tip:
      "Understand the roles of BrowserRouter, Routes, Route, and Link."
  },

  tricky: {
    question:
      "Does React Router create separate HTML pages for every route?",
    answer:
      "In a typical single-page React application, routing changes the displayed React components while the application continues running in the browser."
  },

  practice: {
    question:
      "Create Home, About, and Contact routes in a React application.",
    hint:
      "Use BrowserRouter, Routes, Route, and Link."
  },

  challenge: {
    title: "Build a Multi-Page React Navigation",
    description:
      "Create a small React application with multiple routes.",
    task:
      "Create Home, Courses, About, and Contact pages. Add navigation links so users can move between all routes."
  }
},

"navigation": {
  concept: {
    heading: "Navigation",
    paragraphs: [
      "Navigation allows users to move from one view or route to another in a React application.",
      "With React Router, components such as Link and NavLink can provide navigation without requiring a full browser page reload.",
      "Good navigation helps users understand where they are and move easily between different parts of an application."
    ],
    remember:
      "React Router navigation lets users move between routes without a full page reload."
  },

  analogy: {
    heading: "Think of Navigation Like Direction Signs",
    items: [
      {
        icon: "🪧",
        title: "Navigation Link",
        text: "A link tells the user where they can go."
      },
      {
        icon: "📍",
        title: "Current Location",
        text: "The application can indicate which route the user is currently viewing."
      },
      {
        icon: "➡️",
        title: "Move Between Views",
        text: "Users can move between different React views through navigation."
      }
    ]
  },

  visual: {
    heading: "How React Navigation Works",
    description:
      "Navigation changes the current route and displays the corresponding React component.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Clicks Link",
        text: "The user selects a navigation link."
      },
      {
        icon: "2️⃣",
        title: "URL Changes",
        text: "The application changes to the target route."
      },
      {
        icon: "3️⃣",
        title: "Router Matches",
        text: "React Router finds the component for that route."
      },
      {
        icon: "4️⃣",
        title: "UI Updates",
        text: "The matching component is rendered."
      }
    ],
    flow:
      "Click Link → Change Route → Match Route → Render Component"
  },

  code: {
    title: "Navigation with Link and NavLink",
    description:
      "This example creates navigation links for different application routes.",
    language: "jsx",
    code: `import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Courses() {
  return <h2>Courses</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/courses">Courses</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={<Courses />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`,
    output:
      "The navigation displays Home and Courses links. Clicking a link changes the route and displays the matching component.",
    explanation:
      "NavLink works like Link but can also provide information about whether the current route is active. This is useful for navigation menus where the active page needs different styling."
  },

  interview: {
    question: "What is the difference between Link and NavLink?",
    answer:
      "Both provide client-side navigation, but NavLink also provides information about whether its route is currently active.",
    tip:
      "NavLink is useful when you want to highlight the active navigation item."
  },

  tricky: {
    question:
      "Why use Link instead of a normal HTML anchor for internal React routes?",
    answer:
      "Link is designed for client-side navigation in React Router and can navigate between routes without performing a traditional full-page browser request."
  },

  practice: {
    question:
      "Create a navigation menu with Home, Courses, About, and Contact links.",
    hint:
      "Use NavLink for each route and define the matching Route components."
  },

  challenge: {
    title: "Build a Course Navigation",
    description:
      "Create a navigation system for an online learning application.",
    task:
      "Create routes for Home, Courses, Tutorials, About, and Contact. Use NavLink and add active styling to the current route."
  }
},"api-integration": {
  concept: {
    heading: "API Integration",
    paragraphs: [
      "API integration allows a React application to communicate with an external service and exchange data.",
      "A React application can request data from a backend API and use the response to display information in the user interface.",
      "API integration is commonly used for features such as user accounts, products, courses, search, payments, and dashboards."
    ],
    remember:
      "API integration connects a React application with external data or backend services."
  },

  analogy: {
    heading: "Think of an API Like a Restaurant Waiter",
    items: [
      {
        icon: "🍽️",
        title: "Customer",
        text: "The React application requests the information it needs."
      },
      {
        icon: "🧑‍💼",
        title: "API",
        text: "The API receives the request and communicates with the backend service."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The backend sends data back through the API."
      }
    ]
  },

  visual: {
    heading: "How API Integration Works",
    description:
      "React sends a request to an API, receives a response, and uses the returned data to update the UI.",
    steps: [
      {
        icon: "1️⃣",
        title: "React Application",
        text: "The user interacts with the React application."
      },
      {
        icon: "2️⃣",
        title: "API Request",
        text: "React sends a request to the required API endpoint."
      },
      {
        icon: "3️⃣",
        title: "Backend Processes",
        text: "The server processes the request and prepares the data."
      },
      {
        icon: "4️⃣",
        title: "API Response",
        text: "The server sends a response back to the React application."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "React uses the response data to display updated information."
      }
    ],
    flow:
      "React UI → API Request → Backend → API Response → React State → Updated UI"
  },

  code: {
    title: "Simple API Integration",
    description:
      "This example requests product data from an API and displays the result.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

export default Products;`,
    output:
      "After the API responds, the product names are displayed in the React application.",
    explanation:
      "useEffect starts the API request after the component renders. fetch() sends the request, response.json() converts the response into JavaScript data, and setProducts() stores the data in React state."
  },

  interview: {
    question: "What is API integration in React?",
    answer:
      "API integration is the process of connecting a React application with an external API to send requests and receive data.",
    tip:
      "Understand the complete flow: request, server processing, response, state update, and UI rendering."
  },

  tricky: {
    question:
      "Does React itself provide a backend API?",
    answer:
      "No. React is primarily a UI library. A React application can communicate with backend APIs or external services to retrieve and manage data."
  },

  practice: {
    question:
      "Create a React component that requests a list of products from an API and displays their names.",
    hint:
      "Use useEffect for the request and useState to store the response."
  },

  challenge: {
    title: "Build an API Product Page",
    description:
      "Create a React page that loads product data from an API.",
    task:
      "Fetch product data, display a loading message while the request is running, show the products after a successful response, and display an error message if the request fails."
  }
},

"fetch-api": {
  concept: {
    heading: "Fetch API",
    paragraphs: [
      "The Fetch API is a browser API used to make HTTP requests and communicate with web servers.",
      "In React, fetch() can be used to request data from an API and process the returned response.",
      "fetch() returns a Promise, so the response can be handled using then() or async and await."
    ],
    remember:
      "fetch() is a browser API used to make HTTP requests and receive server responses."
  },

  analogy: {
    heading: "Think of fetch() Like Sending a Request",
    items: [
      {
        icon: "📨",
        title: "Send Request",
        text: "The application sends a request to a server endpoint."
      },
      {
        icon: "⏳",
        title: "Wait for Response",
        text: "The application waits for the server to respond."
      },
      {
        icon: "📥",
        title: "Receive Data",
        text: "The response is converted into usable JavaScript data."
      }
    ]
  },

  visual: {
    heading: "How fetch() Works",
    description:
      "The Fetch API sends an HTTP request and provides a Promise for the server response.",
    steps: [
      {
        icon: "1️⃣",
        title: "Call fetch()",
        text: "Provide the API URL to fetch()."
      },
      {
        icon: "2️⃣",
        title: "Request Sent",
        text: "The browser sends an HTTP request to the server."
      },
      {
        icon: "3️⃣",
        title: "Receive Response",
        text: "The server returns an HTTP response."
      },
      {
        icon: "4️⃣",
        title: "Convert Data",
        text: "response.json() converts JSON response data into JavaScript data."
      },
      {
        icon: "5️⃣",
        title: "Use Data",
        text: "The React component can store and display the returned data."
      }
    ],
    flow:
      "fetch() → HTTP Request → Server → Response → response.json() → JavaScript Data → UI"
  },

  code: {
    title: "Fetching Data with async/await",
    description:
      "This example uses fetch() and async/await to retrieve product data.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(
        "https://api.example.com/products"
      );

      const data = await response.json();

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

export default Products;`,
    output:
      "The component fetches product data and displays each product name after the response is received.",
    explanation:
      "fetch() returns a Promise. await waits for the response, response.json() converts the response body into JavaScript data, and setProducts() stores the result in state."
  },

  interview: {
    question: "What is the Fetch API?",
    answer:
      "The Fetch API is a browser API used to make HTTP requests and handle responses from web servers.",
    tip:
      "Know that fetch() returns a Promise and response.json() also returns a Promise."
  },

  tricky: {
    question:
      "Does fetch() automatically reject the Promise when the server returns a 404 or 500 response?",
    answer:
      "No. fetch() normally resolves with a Response object for HTTP error status codes. Code should check response.ok or the status before processing the data."
  },

  practice: {
    question:
      "Fetch a list of users and display their names in a React component.",
    hint:
      "Use useEffect, fetch(), response.json(), and useState."
  },

  challenge: {
    title: "Build a Data Fetching Component",
    description:
      "Create a React component that loads data from an API.",
    task:
      "Use fetch() with async/await. Add loading, success, and error states and display the returned records in a list."
  }
},"axios": {
  concept: {
    heading: "Axios",
    paragraphs: [
      "Axios is a JavaScript library used to make HTTP requests from a React application to APIs.",
      "It can be used for common HTTP operations such as GET, POST, PUT, PATCH, and DELETE requests.",
      "Axios simplifies API communication by providing a convenient request and response handling syntax."
    ],
    remember:
      "Axios is a JavaScript library that makes HTTP requests easier to work with."
  },

  analogy: {
    heading: "Think of Axios Like a Delivery Service",
    items: [
      {
        icon: "📦",
        title: "Prepare Request",
        text: "The React application prepares the information it wants to send."
      },
      {
        icon: "🚚",
        title: "Axios Sends It",
        text: "Axios sends the HTTP request to the API endpoint."
      },
      {
        icon: "📥",
        title: "Receive Response",
        text: "Axios receives the server response so the application can use the returned data."
      }
    ]
  },

  visual: {
    heading: "How Axios Works",
    description:
      "Axios connects a React application with an API and handles the request and response process.",
    steps: [
      {
        icon: "1️⃣",
        title: "React Component",
        text: "The component decides what data it needs."
      },
      {
        icon: "2️⃣",
        title: "Axios Request",
        text: "Axios sends a request to the API endpoint."
      },
      {
        icon: "3️⃣",
        title: "Server",
        text: "The server processes the request."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server sends data back to Axios."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "React stores the response and displays the data."
      }
    ],
    flow:
      "React → Axios → API → Server → Response → React State → UI"
  },

  code: {
    title: "GET Request with Axios",
    description:
      "This example uses Axios to request product data from an API.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

export default Products;`,
    output:
      "The product names returned by the API are displayed in the React application.",
    explanation:
      "axios.get() sends a GET request. The response object contains the server response, and response.data contains the returned data. setProducts() stores that data in React state."
  },

  interview: {
    question: "What is Axios in React?",
    answer:
      "Axios is a JavaScript library used to make HTTP requests and communicate with APIs.",
    tip:
      "Remember the common Axios methods: axios.get(), axios.post(), axios.put(), axios.patch(), and axios.delete()."
  },

  tricky: {
    question: "Is Axios built into React?",
    answer:
      "No. Axios is a separate JavaScript library that must be installed in the project before it can be imported."
  },

  practice: {
    question:
      "Create a React component that uses Axios to fetch a list of users and display their names.",
    hint:
      "Install Axios, import it, use axios.get(), and store response.data in state."
  },

  challenge: {
    title: "Build an Axios Product Loader",
    description:
      "Create a React component that loads products using Axios.",
    task:
      "Use Axios to fetch products, display a loading message, handle an API error, and show the returned products in a list."
  }
},

"crud": {
  concept: {
    heading: "CRUD Application",
    paragraphs: [
      "CRUD stands for Create, Read, Update, and Delete, which are the four basic operations used to manage data.",
      "A React application can provide a user interface for performing CRUD operations through a backend API.",
      "CRUD applications are commonly used for products, users, students, tasks, employees, and other types of records."
    ],
    remember:
      "CRUD means Create, Read, Update, and Delete data."
  },

  analogy: {
    heading: "Think of CRUD Like Managing a Record Book",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Add a new record to the system."
      },
      {
        icon: "👀",
        title: "Read",
        text: "View existing records."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Change information in an existing record."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a record that is no longer needed."
      }
    ]
  },

  visual: {
    heading: "CRUD Application Flow",
    description:
      "A React CRUD application uses UI components and API requests to manage records.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create",
        text: "A form collects information and sends a POST request."
      },
      {
        icon: "2️⃣",
        title: "Read",
        text: "A GET request retrieves records from the server."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "An existing record is edited and sent using PUT or PATCH."
      },
      {
        icon: "4️⃣",
        title: "Delete",
        text: "A DELETE request removes the selected record."
      },
      {
        icon: "5️⃣",
        title: "Refresh UI",
        text: "React updates the displayed data after the operation."
      }
    ],
    flow:
      "React Form/List → API Request → Backend → Database → Response → React State → Updated UI"
  },

  code: {
    title: "Basic CRUD Structure",
    description:
      "This example shows the basic idea of creating and reading records from an API.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  async function addUser() {
    const response = await fetch(
      "https://api.example.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      }
    );

    const newUser = await response.json();

    setUsers((currentUsers) => [
      ...currentUsers,
      newUser
    ]);

    setName("");
  }

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter user name"
      />

      <button onClick={addUser}>
        Add User
      </button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;`,
    output:
      "The component displays existing users and allows a new user record to be sent to the API.",
    explanation:
      "The GET request reads existing records. The POST request creates a new record. React state stores the records and updates the UI when a new user is added. Update and Delete operations can be added using PUT, PATCH, and DELETE requests."
  },

  interview: {
    question: "What does CRUD stand for?",
    answer:
      "CRUD stands for Create, Read, Update, and Delete.",
    tip:
      "Remember the common HTTP methods: POST for Create, GET for Read, PUT/PATCH for Update, and DELETE for Delete."
  },

  tricky: {
    question: "Can React perform CRUD operations without a backend?",
    answer:
      "React can manage CRUD-like interactions in the browser, but persistent application data normally requires a backend API or another data storage service."
  },

  practice: {
    question:
      "Create a small React application that displays a list of records and provides buttons for adding, editing, and deleting records.",
    hint:
      "Use state for the UI and connect the Create, Read, Update, and Delete actions to API requests."
  },

  challenge: {
    title: "Build a Complete CRUD App",
    description:
      "Create a React application for managing records through an API.",
    task:
      "Build a form for creating records, display all records, add edit functionality, add delete functionality, and show loading and error states during API operations."
  }
},
"react-project-1": {
  concept: {
    heading: "Project 1 — Todo App",
    paragraphs: [
      "A Todo App is a practical React project for learning how to create, display, update, and remove tasks.",
      "The project uses important React concepts such as components, state, events, controlled inputs, and list rendering.",
      "Building a Todo App helps connect individual React concepts into a small working application."
    ],
    remember:
      "A Todo App is a simple project for practicing React state, events, forms, and list rendering."
  },

  analogy: {
    heading: "Think of a Todo App Like a Task Notebook",
    items: [
      {
        icon: "📝",
        title: "Add Task",
        text: "Write a new task that needs to be completed."
      },
      {
        icon: "📋",
        title: "View Tasks",
        text: "See all tasks in one place."
      },
      {
        icon: "✅",
        title: "Complete Task",
        text: "Mark a task as completed when the work is finished."
      },
      {
        icon: "🗑️",
        title: "Delete Task",
        text: "Remove a task that is no longer needed."
      }
    ]
  },

  visual: {
    heading: "Todo App Flow",
    description:
      "The Todo App uses React state to store tasks and event handlers to respond to user actions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Enter Task",
        text: "The user types a task into the input field."
      },
      {
        icon: "2️⃣",
        title: "Add Task",
        text: "An event handler adds the task to the state."
      },
      {
        icon: "3️⃣",
        title: "Render List",
        text: "React uses map() to display the tasks."
      },
      {
        icon: "4️⃣",
        title: "Update Task",
        text: "The user can mark a task as completed."
      },
      {
        icon: "5️⃣",
        title: "Delete Task",
        text: "The selected task can be removed from state."
      }
    ],
    flow:
      "Input → Event Handler → State → map() → Todo List → User Action → State Update"
  },

  code: {
    title: "Todo App",
    description:
      "This example demonstrates adding, completing, and deleting tasks using React state.",
    language: "jsx",
    code: `import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos((currentTodos) => [
      ...currentTodos,
      newTodo
    ]);

    setTask("");
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`,
    output:
      "The application allows the user to enter a task, add it to the list, mark it as completed, and delete it.",
    explanation:
      "useState stores the input value and todo list. The controlled input updates task state. addTodo creates a new object and adds it to the array. map() updates a selected todo, while filter() removes a todo. React then re-renders the list with the updated state."
  },

  interview: {
    question: "Which React concepts are commonly used in a Todo App?",
    answer:
      "A Todo App commonly uses useState, controlled inputs, event handlers, conditional rendering, and array methods such as map() and filter().",
    tip:
      "Be able to explain why state is needed and how changing state updates the UI."
  },

  tricky: {
    question:
      "Why should we not directly modify the todos array?",
    answer:
      "React state should be treated as immutable. Instead of directly changing the existing array, create a new array using methods such as map(), filter(), or the spread operator and pass it to the state setter."
  },

  practice: {
    question:
      "Create a Todo App that allows users to add tasks and delete tasks.",
    hint:
      "Start with two state values: one for the input and one for the todo array."
  },

  challenge: {
    title: "Build an Advanced Todo App",
    description:
      "Extend the basic Todo App with more useful features.",
    task:
      "Add task completion, edit functionality, task filtering, and a counter showing the number of remaining tasks."
  }
},"react-project-2": {
  concept: {
    heading: "Project 2 — Weather App",
    paragraphs: [
      "A Weather App is a practical React project that retrieves weather information from an API and displays it to the user.",
      "The project combines React state, controlled inputs, event handling, API requests, loading states, error handling, and conditional rendering.",
      "Building a Weather App helps developers understand how a React interface communicates with an external service and updates when new data is received."
    ],
    remember:
      "A Weather App combines React UI, state, user input, API integration, and conditional rendering."
  },

  analogy: {
    heading: "Think of a Weather App Like a Weather Information Desk",
    items: [
      {
        icon: "🔎",
        title: "Search City",
        text: "The user provides the name of the city they want weather information for."
      },
      {
        icon: "🌐",
        title: "Request Data",
        text: "The application sends the city information to a weather API."
      },
      {
        icon: "☁️",
        title: "Receive Weather",
        text: "The API returns weather information for the requested location."
      },
      {
        icon: "📱",
        title: "Display Result",
        text: "React displays the weather information in the user interface."
      }
    ]
  },

  visual: {
    heading: "Weather App Flow",
    description:
      "The Weather App takes a city name, requests weather information, and updates the interface with the API response.",
    steps: [
      {
        icon: "1️⃣",
        title: "Enter City",
        text: "The user enters a city name into a controlled input."
      },
      {
        icon: "2️⃣",
        title: "Search",
        text: "An event handler starts the weather request."
      },
      {
        icon: "3️⃣",
        title: "API Request",
        text: "The application requests weather data from the weather service."
      },
      {
        icon: "4️⃣",
        title: "Process Response",
        text: "The application checks the response and extracts the required weather data."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "React state is updated and the weather information is displayed."
      }
    ],
    flow:
      "City Input → Search Event → Weather API → Response → State → Weather UI"
  },

  code: {
    title: "Weather App Structure",
    description:
      "This example demonstrates the main React structure for searching weather data. Replace the API URL and key with credentials from your chosen weather service.",
    language: "jsx",
    code: `import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather() {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.example.com/weather?city=" +
          encodeURIComponent(city)
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Weather App</h2>

      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city"
      />

      <button onClick={searchWeather}>
        Search
      </button>

      {loading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.city}</h3>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;`,
    output:
      "The user enters a city, clicks Search, and the application displays the returned temperature and weather condition.",
    explanation:
      "The city state stores the user's input. The searchWeather function validates the input, sets the loading state, sends the API request, and processes the response. If the request succeeds, weather state is updated. If it fails, an error message is displayed. The finally block stops the loading state."
  },

  interview: {
    question: "Which React concepts are used in a Weather App?",
    answer:
      "A Weather App commonly uses useState, controlled inputs, event handlers, fetch or Axios, loading and error states, and conditional rendering.",
    tip:
      "Be able to explain the complete flow from user input to API request, response, state update, and UI rendering."
  },

  tricky: {
    question:
      "Why do we need loading and error states in a Weather App?",
    answer:
      "API requests take time and can fail. A loading state tells the user that the request is in progress, while an error state provides feedback when the request cannot be completed."
  },

  practice: {
    question:
      "Create a React Weather App with a city input and a Search button.",
    hint:
      "Use useState for city, weather, loading, and error. Fetch weather data after the user clicks Search."
  },

  challenge: {
    title: "Build a Complete Weather App",
    description:
      "Create a polished React Weather App using a real weather API.",
    task:
      "Add city search, loading state, error handling, temperature, weather condition, humidity, wind information, and a responsive weather card."
  }
},"react-project-3": {
  concept: {
    heading: "Project 3 — CRUD App",
    paragraphs: [
      "A CRUD App is a practical React project used to create, read, update, and delete records through a user interface.",
      "The project combines components, forms, state, event handling, API integration, and conditional rendering into one complete application.",
      "A CRUD project helps developers understand how frontend applications communicate with backend APIs to manage real application data."
    ],
    remember:
      "A CRUD App combines React UI, forms, state, API requests, and Create, Read, Update, and Delete operations."
  },

  analogy: {
    heading: "Think of a CRUD App Like Managing a Digital Record System",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Enter information into a form and add a new record."
      },
      {
        icon: "📋",
        title: "Read",
        text: "Request records from the server and display them in the application."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Select an existing record, modify its information, and save the changes."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove an existing record when it is no longer required."
      }
    ]
  },

  visual: {
    heading: "Complete CRUD Application Flow",
    description:
      "The React frontend communicates with a backend API to manage records stored by the application.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create",
        text: "The user submits a form and React sends a POST request."
      },
      {
        icon: "2️⃣",
        title: "Read",
        text: "React sends a GET request and displays the returned records."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "The user edits a record and React sends a PUT or PATCH request."
      },
      {
        icon: "4️⃣",
        title: "Delete",
        text: "The user selects a record and React sends a DELETE request."
      },
      {
        icon: "5️⃣",
        title: "Refresh UI",
        text: "React updates its state so the latest data appears on the screen."
      }
    ],
    flow:
      "React UI → HTTP Request → Backend API → Database → Response → React State → Updated UI"
  },

  code: {
    title: "CRUD App Structure",
    description:
      "This example demonstrates the main CRUD operations using the Fetch API.",
    language: "jsx",
    code: `import { useEffect, useState } from "react";

const API_URL = "https://api.example.com/users";

function CrudApp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function loadUsers() {
    const response = await fetch(API_URL);
    const data = await response.json();

    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function saveUser() {
    if (!name.trim()) return;

    const method = editingId ? "PUT" : "POST";

    const url = editingId
      ? API_URL + "/" + editingId
      : API_URL;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    });

    const savedUser = await response.json();

    if (editingId) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingId
            ? savedUser
            : user
        )
      );
    } else {
      setUsers((currentUsers) => [
        ...currentUsers,
        savedUser
      ]);
    }

    setName("");
    setEditingId(null);
  }

  async function deleteUser(id) {
    await fetch(API_URL + "/" + id, {
      method: "DELETE"
    });

    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  }

  function startEdit(user) {
    setName(user.name);
    setEditingId(user.id);
  }

  return (
    <div>
      <h2>User Management</h2>

      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />

      <button onClick={saveUser}>
        {editingId ? "Update" : "Add"}
      </button>

      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>

          <button onClick={() => startEdit(user)}>
            Edit
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CrudApp;`,
    output:
      "The application displays records and allows the user to add, edit, and delete records through the API.",
    explanation:
      "loadUsers() performs the Read operation using GET. saveUser() performs Create with POST or Update with PUT. deleteUser() performs Delete with DELETE. React state is updated after each operation so the interface reflects the latest data."
  },

  interview: {
    question: "How would you build a CRUD application in React?",
    answer:
      "Create a form for input, use React state to manage the UI, connect the application to API endpoints, and use GET, POST, PUT or PATCH, and DELETE requests for the CRUD operations.",
    tip:
      "Understand both sides: the React frontend and the backend API that stores the data."
  },

  tricky: {
    question:
      "Why should a CRUD application usually use a backend API for persistent data?",
    answer:
      "React state exists in the browser and can be lost when the application is refreshed. A backend and database provide persistent storage that can be shared across users and sessions."
  },

  practice: {
    question:
      "Create a React CRUD application for managing a list of products.",
    hint:
      "Use a form for product information and implement GET, POST, PUT or PATCH, and DELETE requests."
  },

  challenge: {
    title: "Build a Complete CRUD Management System",
    description:
      "Create a production-style React CRUD application for managing records.",
    task:
      "Build a form, display records in a table or cards, add Create, Read, Update, and Delete functionality, handle loading and errors, validate form input, and keep the UI synchronized with the API."
  }
},"react-interview": {
  concept: {
    heading: "React Interview Questions",
    paragraphs: [
      "React interviews usually test both fundamental concepts and practical application development skills.",
      "Important areas include components, JSX, props, state, Hooks, events, forms, lists, routing, API integration, and performance.",
      "A good interview preparation approach is to understand why a React feature is used, how it works, and where it can be applied in a real application."
    ],
    remember:
      "React interview preparation requires both conceptual understanding and practical coding knowledge."
  },

  analogy: {
    heading: "Think of an Interview Like a Practical Check",
    items: [
      {
        icon: "📚",
        title: "Concept",
        text: "The interviewer checks whether you understand the React concept."
      },
      {
        icon: "💡",
        title: "Reason",
        text: "You may need to explain why a particular React feature is useful."
      },
      {
        icon: "💻",
        title: "Code",
        text: "You may be asked to write or explain a small React program."
      },
      {
        icon: "🏗️",
        title: "Application",
        text: "You may need to explain how the concept is used in a real project."
      }
    ]
  },

  visual: {
    heading: "React Interview Preparation Flow",
    description:
      "Prepare by connecting React concepts with practical examples and coding problems.",
    steps: [
      {
        icon: "1️⃣",
        title: "Learn Concept",
        text: "Understand the basic meaning and purpose of a React feature."
      },
      {
        icon: "2️⃣",
        title: "Understand Why",
        text: "Learn when and why the feature should be used."
      },
      {
        icon: "3️⃣",
        title: "Write Code",
        text: "Practice implementing the concept in a small component."
      },
      {
        icon: "4️⃣",
        title: "Explain",
        text: "Practice explaining the concept clearly in your own words."
      },
      {
        icon: "5️⃣",
        title: "Apply",
        text: "Understand how the concept fits into a real React application."
      }
    ],
    flow:
      "Concept → Why → Code → Explanation → Real Project Application"
  },

  code: {
    title: "Common React Interview Examples",
    description:
      "These are small examples of concepts that are frequently discussed during React interviews.",
    language: "jsx",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`,
    output:
      "The initial count is 0. Each time the button is clicked, the state increases and the updated value appears in the UI.",
    explanation:
      "This small example demonstrates several important React concepts: a functional component, useState, an event handler, state updating, JSX expressions, and re-rendering."
  },

  interview: {
    question: "What is the difference between props and state?",
    answer:
      "Props are values passed from a parent component to a child component, while state is data managed by a component that can change over time.",
    tip:
      "When answering interview questions, explain the definition first and then give a small practical example."
  },

  tricky: {
    question:
      "Does changing a normal JavaScript variable automatically update the React UI?",
    answer:
      "No. Changing a normal variable does not tell React to render the component again. React state should be updated using its state setter when the UI needs to respond to changing data."
  },

  practice: {
    question:
      "Prepare short explanations for components, JSX, props, state, useEffect, useContext, useRef, and controlled components.",
    hint:
      "For each concept, learn what it is, why it is used, and one simple example."
  },

  challenge: {
    title: "React Interview Practice",
    description:
      "Prepare yourself for a practical React interview.",
    task:
      "Explain 15 React concepts without looking at notes, write a small counter component, create a controlled form, render an array using map(), and explain how a React application communicates with an API."
  }
},
"react-coding-questions": {
  concept: {
    heading: "React Coding Questions",
    paragraphs: [
      "React coding questions test whether you can use React concepts to solve practical programming problems.",
      "Common tasks include creating components, managing state, handling events, rendering lists, creating forms, using Hooks, and working with APIs.",
      "The best way to prepare is to practice small problems first and then combine multiple React concepts into complete features."
    ],
    remember:
      "React coding practice helps you convert React concepts into working application features."
  },

  analogy: {
    heading: "Think of Coding Practice Like Building with Blocks",
    items: [
      {
        icon: "🧱",
        title: "Basic Concept",
        text: "Start with one React concept such as state or props."
      },
      {
        icon: "🔧",
        title: "Small Feature",
        text: "Use the concept to build a small working feature."
      },
      {
        icon: "🧩",
        title: "Combine Concepts",
        text: "Combine state, events, forms, and components."
      },
      {
        icon: "🏗️",
        title: "Build Application",
        text: "Use multiple concepts together to create a complete React feature."
      }
    ]
  },

  visual: {
    heading: "React Coding Practice Flow",
    description:
      "Start with a small problem, identify the required React concepts, write the component, and test the result.",
    steps: [
      {
        icon: "1️⃣",
        title: "Understand Problem",
        text: "Read the requirement carefully and identify what the application needs to do."
      },
      {
        icon: "2️⃣",
        title: "Choose Concepts",
        text: "Decide whether you need state, props, events, forms, lists, or Hooks."
      },
      {
        icon: "3️⃣",
        title: "Write Component",
        text: "Create the component and implement the required functionality."
      },
      {
        icon: "4️⃣",
        title: "Test",
        text: "Interact with the application and check different input and state changes."
      },
      {
        icon: "5️⃣",
        title: "Improve",
        text: "Refactor the code and handle edge cases such as empty input or errors."
      }
    ],
    flow:
      "Problem → React Concepts → Component → Test → Handle Edge Cases → Improve"
  },

  code: {
    title: "React Coding Question — Counter",
    description:
      "Create a counter component that increases, decreases, and resets its value.",
    language: "jsx",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((currentCount) => currentCount + 1);
  }

  function decrease() {
    setCount((currentCount) => currentCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={decrease}>
        Decrease
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;`,
    output:
      "The counter starts at 0. Increase adds 1, Decrease subtracts 1, and Reset changes the value back to 0.",
    explanation:
      "The count value is stored using useState. Each button has an event handler that updates the state. When state changes, React renders the component again and displays the new count."
  },

  interview: {
    question: "How should you approach a React coding question?",
    answer:
      "First understand the requirement, identify the React concepts needed, build a small component, test the behavior, and then improve the code by handling edge cases.",
    tip:
      "During an interview, explain your approach while coding instead of writing code silently."
  },

  tricky: {
    question:
      "Why is it useful to break a coding problem into smaller React components?",
    answer:
      "Smaller components make the code easier to understand, test, reuse, and maintain. They also help separate different responsibilities within the application."
  },

  practice: {
    question:
      "Build a counter, a character counter, a toggle button, a todo list, and a controlled form using React.",
    hint:
      "Start each problem with the smallest possible component and add functionality one step at a time."
  },

  challenge: {
    title: "React Coding Challenge",
    description:
      "Combine several React concepts into one practical application.",
    task:
      "Build a task manager with a controlled input, add and delete functionality, completed-task tracking, filtering, reusable components, and a counter showing the number of remaining tasks."
  }
},

};