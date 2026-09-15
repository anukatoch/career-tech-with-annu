export type TopicContent = {
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

export const javascriptTopicContent: Record<string, TopicContent> = {

  // ============================================================
// TOPIC 01 — WHAT IS JAVASCRIPT?
// ============================================================
"what-is-javascript": {
  concept: {
    heading: "What Is JavaScript?",
    paragraphs: [
      "JavaScript is a programming language used to add logic, interaction, and dynamic behavior to websites and web applications.",

      "A webpage can be built using three core technologies: HTML, CSS, and JavaScript. HTML creates the structure of the page, CSS controls its appearance, and JavaScript controls how the page behaves when users interact with it.",

      "JavaScript can respond to clicks, read user input, perform calculations, validate forms, change webpage content, show messages, communicate with APIs, and control application behavior.",

      "JavaScript can run inside web browsers and can also run outside the browser using environments such as Node.js. This makes JavaScript useful for both frontend and backend development.",

      "For a beginner, the most important idea is simple: JavaScript allows a webpage to do something instead of only displaying something."
    ],

    remember:
      "HTML creates structure, CSS controls appearance, and JavaScript adds behavior and logic."
  },

  analogy: {
    heading: "Think of a Website Like a Human Body",
    items: [
      {
        icon: "🦴",
        title: "HTML = Structure",
        text: "HTML is like the skeleton of a webpage. It defines elements such as headings, paragraphs, buttons, images, forms, and sections."
      },
      {
        icon: "👕",
        title: "CSS = Appearance",
        text: "CSS is like clothes and appearance. It controls colors, fonts, spacing, sizes, layout, and the visual design of the webpage."
      },
      {
        icon: "🧠",
        title: "JavaScript = Behavior",
        text: "JavaScript is like the brain. It allows the webpage to respond to actions, make decisions, perform calculations, and change what the user sees."
      }
    ]
  },

  visual: {
    heading: "How JavaScript Works",
    description:
      "When a user interacts with a webpage, JavaScript can receive that action, execute logic, and produce a response.",

    steps: [
      {
        icon: "1️⃣",
        title: "User Action",
        text: "The user clicks a button, enters text, selects an option, submits a form, or performs another action."
      },
      {
        icon: "2️⃣",
        title: "JavaScript Code",
        text: "JavaScript code is connected to the webpage and contains instructions for what should happen."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Engine",
        text: "The browser's JavaScript engine processes and executes the JavaScript instructions."
      },
      {
        icon: "4️⃣",
        title: "Logic Is Performed",
        text: "JavaScript can calculate values, check conditions, read data, call functions, or modify webpage content."
      },
      {
        icon: "5️⃣",
        title: "Result Appears",
        text: "The webpage responds by showing a message, changing content, updating a value, displaying an error, or performing another action."
      }
    ],

    flow:
      "User Action → JavaScript Code → JavaScript Engine → Logic → Website Response"
  },

  code: {
    title: "Practical Example — Make a Button Interactive",
    description:
      "This example shows one of the simplest uses of JavaScript. When the user clicks the button, JavaScript executes a function and displays a message.",

    language: "html",

    code: `<button onclick="showMessage()">
  Click Me
</button>

<script>
  function showMessage() {
    alert("Hello! JavaScript is working.");
  }
</script>`,

    output:
      "Click the button → A browser alert appears with the message: Hello! JavaScript is working.",

    explanation:
      "The button is created using HTML. The onclick event tells the browser to call the showMessage() function when the button is clicked. JavaScript then executes the function and displays an alert message. This demonstrates the basic idea of JavaScript: user action → JavaScript logic → response."
  },

  interview: {
    question: "What is JavaScript?",

    answer:
      "JavaScript is a programming language used to add logic, interactivity, and dynamic behavior to websites and applications. It can run in browsers and can also be used outside the browser with environments such as Node.js.",

    tip:
      "In an interview, do not say that JavaScript is only a frontend language. Mention that it is used for both frontend and backend development."
  },

  tricky: {
    question:
      "What is the difference between JavaScript and Java?",

    answer:
      "JavaScript and Java are different programming languages. They have different syntax, ecosystems, runtimes, and typical use cases. The similar names do not mean that they are the same language."
  },

  practice: {
    question:
      "Create a button that displays a message when the user clicks it.",

    hint:
      "Create a button in HTML, define a JavaScript function, connect the function using onclick, and use alert() to display the message."
  },

  challenge: {
    title: "Build Your First Interactive Feature",

    description:
      "Create a small webpage that demonstrates how HTML and JavaScript work together.",

    task:
      "Create a button with the text 'Show Message'. When the user clicks the button, JavaScript should display a message using alert(). Then modify the program so that the message is different from the example shown in this lesson."
  }
},
"getting-started": {
  concept: {
    heading: "Getting Started with JavaScript",

    paragraphs: [
      "Before writing JavaScript programs, you need to understand where JavaScript can run and which tools you can use.",

      "There are two common ways to start learning JavaScript. You can run JavaScript online without installing anything, or you can install the required tools on your computer.",

      "An online JavaScript editor is useful when you want to quickly test a small piece of code. It is especially helpful for beginners because you can start coding immediately.",

      "For professional development and real-world projects, it is better to create a local development environment on your computer.",

      "In a local environment, VS Code can be used to write and manage your code, while Node.js can be used to execute JavaScript programs outside the browser.",

      "In this topic, you will learn how to run JavaScript online, install VS Code, install Node.js, verify the installation, create a JavaScript file, and run your first program."
    ],

    remember:
      "You can start JavaScript online without installation. For real development, learn to use VS Code and Node.js."
  },

  analogy: {
    heading: "Think of It Like Setting Up a Workshop",

    items: [
      {
        icon: "🧰",
        title: "VS Code — Your Workspace",
        text: "VS Code is a code editor. You use it to create, edit, organize, and manage your JavaScript files."
      },

      {
        icon: "⚙️",
        title: "Node.js — Your Runtime",
        text: "Node.js provides a JavaScript runtime that allows JavaScript programs to run outside a web browser."
      },

      {
        icon: "📄",
        title: ".js File — Your Program",
        text: "JavaScript code is normally saved inside a file with the .js extension, such as app.js."
      },

      {
        icon: "▶️",
        title: "Run — Execute Your Code",
        text: "After writing your program, you can run the JavaScript file and see the result in the terminal."
      }
    ]
  },

  visual: {
    heading: "Your JavaScript Setup Journey",

    description:
      "Follow these steps to prepare your computer for JavaScript development.",

    steps: [
      {
        icon: "1️⃣",
        title: "Choose Your Environment",
        text: "Use an online editor for quick practice or prepare your computer for local development."
      },

      {
        icon: "2️⃣",
        title: "Install VS Code",
        text: "Download and install Visual Studio Code. It will be your main coding environment."
      },

      {
        icon: "3️⃣",
        title: "Install Node.js",
        text: "Download the Node.js LTS version and complete the installation."
      },

      {
        icon: "4️⃣",
        title: "Verify Node.js",
        text: "Open a terminal or command prompt and run node --version to check whether Node.js is installed correctly."
      },

      {
        icon: "5️⃣",
        title: "Create a JavaScript File",
        text: "Create a file such as app.js and write your JavaScript code inside it."
      },

      {
        icon: "6️⃣",
        title: "Run the Program",
        text: "Use Node.js to execute your JavaScript file and check the output."
      }
    ],

    flow:
      "Choose Environment → Install VS Code → Install Node.js → Verify Setup → Create .js File → Write Code → Run Program"
  },

  code: {
    title: "Practical Example — Create and Run app.js",

    description:
      "After installing VS Code and Node.js, create a file named app.js. Add the following code and run it from the terminal.",

    language: "javascript",

    code: `// app.js

console.log("JavaScript setup is working!");

console.log("Welcome to JavaScript.");

let number1 = 10;
let number2 = 20;

let total = number1 + number2;

console.log("Number 1:", number1);
console.log("Number 2:", number2);
console.log("Total:", total);`,

    output: `JavaScript setup is working!
Welcome to JavaScript.
Number 1: 10
Number 2: 20
Total: 30`,

    explanation:
      "The first console.log() statements display messages in the terminal. The program then stores two numbers, calculates their total, and displays the result. This simple program confirms that the JavaScript file is being executed successfully."
  },

  interview: {
    question:
      "What is the difference between VS Code and Node.js?",

    answer:
      "VS Code is a code editor used to write and manage JavaScript code. Node.js is a JavaScript runtime used to execute JavaScript programs outside the browser.",

    tip:
      "Remember: VS Code is where you write the code. Node.js is what can run the JavaScript code outside the browser."
  },

  tricky: {
    question:
      "Do you need Node.js to run JavaScript in a web browser?",

    answer:
      "No. Modern browsers already contain JavaScript engines, so JavaScript can run directly in the browser. Node.js is mainly used when you want to run JavaScript outside the browser."
  },

  practice: {
    question:
      "Set up a local JavaScript environment. Install VS Code and Node.js, create an app.js file, and print three different messages using console.log().",

    hint:
      "First check node --version. Then create app.js, write your code, open the terminal in the correct folder, and run node app.js."
  },

  challenge: {
    title: "Complete Your JavaScript Environment",

    description:
      "Set up your development environment and successfully run your first local JavaScript program.",

    task:
      "Complete the following steps:\n\n1. Install Visual Studio Code.\n2. Install the Node.js LTS version.\n3. Open Command Prompt or Terminal.\n4. Run node --version.\n5. Create a folder named javascript-learning.\n6. Open the folder in VS Code.\n7. Create a file named app.js.\n8. Add at least three console.log() statements.\n9. Run the file using node app.js.\n10. Check the output in the terminal."
  }
},

// ============================================================
// TOPIC 02 — WHY JAVASCRIPT?
// ============================================================

"why-javascript": {
  concept: {
    heading: "Why Do We Need JavaScript?",
    paragraphs: [
      "HTML and CSS can create a beautiful webpage, but they cannot provide the complete programming logic required for an interactive application.",
      "JavaScript allows a website to respond to user actions and make decisions.",
      "It can perform calculations, validate user input, update information, control application behavior, and communicate with servers.",
      "Because of its flexibility, JavaScript is used in frontend development, backend development, APIs, web applications, mobile applications, and many other areas."
    ],
    remember:
      "JavaScript turns a static webpage into an interactive and intelligent application."
  },

  analogy: {
    heading: "Imagine a Smart Room",
    items: [
      {
        icon: "🏠",
        title: "Room Structure",
        text: "The walls, doors, windows, and furniture represent the structure of the room."
      },
      {
        icon: "🎨",
        title: "Room Design",
        text: "Colors, lighting, furniture arrangement, and decoration represent the appearance."
      },
      {
        icon: "💡",
        title: "Smart Control",
        text: "Automatic lights, temperature control, and sensors represent behavior and logic."
      }
    ]
  },

  visual: {
    heading: "From Static Page to Interactive Website",
    description:
      "JavaScript connects user actions with application logic and responses.",
    steps: [
      {
        icon: "1️⃣",
        title: "Static Page",
        text: "HTML and CSS display the basic webpage."
      },
      {
        icon: "2️⃣",
        title: "User Action",
        text: "The user clicks, types, selects, or submits information."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Logic",
        text: "JavaScript processes the action and decides what should happen."
      },
      {
        icon: "4️⃣",
        title: "Application Response",
        text: "The application displays or performs the required result."
      }
    ],
    flow:
      "Static Page → User Action → JavaScript Logic → Website Response"
  },

  code: {
    title: "Why JavaScript Is Useful — Practical Example",
    description:
      "A simple calculation demonstrates how JavaScript can process information instead of only displaying static text.",
    language: "javascript",
    code: `let price = 2000;
let quantity = 3;

let total = price * quantity;

console.log("Product Price:", price);
console.log("Quantity:", quantity);
console.log("Total Amount:", total);`,
    output: `Product Price: 2000
Quantity: 3
Total Amount: 6000`,
    explanation:
      "The program stores product information, performs a multiplication, and calculates the total amount. This is the beginning of application logic. Real applications use the same programming concepts for shopping carts, invoices, billing systems, and many other tasks."
  },

  interview: {
    question: "Why is JavaScript important for web development?",
    answer:
      "JavaScript is important because it allows websites to perform logic, respond to user actions, process data, and create dynamic application behavior.",
    tip:
      "Remember the three major roles: interaction, logic, and dynamic behavior."
  },

  tricky: {
    question:
      "Can HTML and CSS alone create a complete interactive application?",
    answer:
      "HTML and CSS can create structure and presentation, but JavaScript or another programming technology is generally needed for application logic and complex interactions."
  },

  practice: {
    question:
      "Create variables for a product price and quantity. Calculate and display the total amount.",
    hint:
      "Multiply price by quantity."
  },

  challenge: {
    title: "Simple Shopping Calculation",
    description:
      "Build the logic for a small shopping calculation.",
    task:
      "Create a product price of 1500 and quantity of 4. Calculate the total amount and display the product price, quantity, and total."
  }
},

// ============================================================
// TOPIC 03 — HTML, CSS AND JAVASCRIPT
// ============================================================

"html-css-javascript": {
  concept: {
    heading: "HTML, CSS and JavaScript",
    paragraphs: [
      "Modern websites commonly use HTML, CSS, and JavaScript together.",
      "HTML defines what exists on the webpage. CSS defines how those elements look. JavaScript defines how the webpage behaves.",
      "Understanding these three roles is one of the most important concepts for a beginner web developer.",
      "A frontend developer combines structure, design, and behavior to create complete user interfaces."
    ],
    remember:
      "HTML = Structure, CSS = Presentation, JavaScript = Behavior."
  },

  analogy: {
    heading: "Building a House",
    items: [
      {
        icon: "🏗️",
        title: "HTML = Building Structure",
        text: "HTML is like the structure of a house: rooms, doors, windows, and other basic elements."
      },
      {
        icon: "🎨",
        title: "CSS = Interior Design",
        text: "CSS controls colors, sizes, spacing, decoration, and visual presentation."
      },
      {
        icon: "⚙️",
        title: "JavaScript = Functionality",
        text: "JavaScript makes things happen, such as opening doors, controlling systems, or responding to actions."
      }
    ]
  },

  visual: {
    heading: "Three Technologies Working Together",
    description:
      "A modern webpage combines structure, design, and behavior.",
    steps: [
      {
        icon: "1️⃣",
        title: "HTML",
        text: "Creates headings, paragraphs, buttons, forms, images, and other elements."
      },
      {
        icon: "2️⃣",
        title: "CSS",
        text: "Controls colors, fonts, spacing, positioning, and responsive design."
      },
      {
        icon: "3️⃣",
        title: "JavaScript",
        text: "Adds calculations, decisions, interactions, data processing, and dynamic behavior."
      },
      {
        icon: "4️⃣",
        title: "Complete Website",
        text: "All three technologies work together to create a functional user experience."
      }
    ],
    flow:
      "HTML = Structure → CSS = Design → JavaScript = Behavior"
  },

  code: {
    title: "Practical Example — A Simple Website Feature",
    description:
      "Imagine a webpage displaying a product. HTML can display the product, CSS can design it, and JavaScript can calculate its price.",
    language: "javascript",
    code: `let productName = "Laptop";
let price = 50000;
let quantity = 2;

let totalAmount = price * quantity;

console.log("Product:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total Amount:", totalAmount);`,
    output: `Product: Laptop
Price: 50000
Quantity: 2
Total Amount: 100000`,
    explanation:
      "In a real website, HTML would provide the product information area, CSS would make it visually attractive, and JavaScript would perform calculations and other application logic. Here we are focusing only on the JavaScript part."
  },

  interview: {
    question: "What is the difference between HTML, CSS, and JavaScript?",
    answer:
      "HTML creates webpage structure, CSS controls presentation and layout, and JavaScript adds logic and behavior.",
    tip:
      "A simple interview answer is: HTML is structure, CSS is style, and JavaScript is behavior."
  },

  tricky: {
    question:
      "Can JavaScript replace HTML and CSS completely?",
    answer:
      "JavaScript can create and modify webpage elements, but HTML and CSS remain fundamental technologies for defining structure and presentation."
  },

  practice: {
    question:
      "Write a JavaScript program that stores a product name, price, and quantity and calculates the total.",
    hint:
      "Use three variables and one calculation."
  },

  challenge: {
    title: "Think Like a Web Developer",
    description:
      "Analyze a simple shopping product page.",
    task:
      "Write down which part would be handled by HTML, which part by CSS, and which part by JavaScript for a product card containing a product name, price, quantity selector, and total price."
  }
},

// ============================================================
// TOPIC 04 — WHERE IS JAVASCRIPT USED?
// ============================================================

"where-javascript-used": {
  concept: {
    heading: "Where Is JavaScript Used?",
    paragraphs: [
      "JavaScript started as a language for adding behavior to web pages, but its usage has grown significantly.",
      "Today JavaScript can be used for frontend applications, backend servers, APIs, mobile applications, desktop applications, browser extensions, games, automation, and more.",
      "Learning JavaScript gives developers a foundation that can be used across many areas of software development."
    ],
    remember:
      "JavaScript is not limited to buttons and webpages. It can be used across the application stack."
  },

  analogy: {
    heading: "One Language, Many Places",
    items: [
      {
        icon: "🌐",
        title: "Websites",
        text: "JavaScript adds interaction and dynamic behavior to websites."
      },
      {
        icon: "🖥️",
        title: "Backend",
        text: "With Node.js, JavaScript can run on servers and handle backend logic."
      },
      {
        icon: "📱",
        title: "Mobile Apps",
        text: "JavaScript-based technologies can be used to create mobile applications."
      },
      {
        icon: "🎮",
        title: "Games",
        text: "JavaScript can also be used to build browser-based games."
      }
    ]
  },

  visual: {
    heading: "Where Can JavaScript Take You?",
    description:
      "The same JavaScript foundation can lead to different development paths.",
    steps: [
      {
        icon: "1️⃣",
        title: "JavaScript Foundation",
        text: "Learn syntax, variables, data types, operators, logic, functions, and objects."
      },
      {
        icon: "2️⃣",
        title: "Web Development",
        text: "Use JavaScript to build interactive frontend applications."
      },
      {
        icon: "3️⃣",
        title: "Backend Development",
        text: "Use technologies such as Node.js to build server-side applications."
      },
      {
        icon: "4️⃣",
        title: "APIs and Services",
        text: "Connect applications with databases, external services, and APIs."
      },
      {
        icon: "5️⃣",
        title: "Other Applications",
        text: "JavaScript can also be used in mobile apps, desktop apps, browser extensions, and games."
      }
    ],
    flow:
      "JavaScript → Web → Web Apps → Backend → APIs → Mobile → Games"
  },

  code: {
    title: "Practical Example — JavaScript Application Logic",
    description:
      "A simple order calculation represents the type of logic used inside real applications.",
    language: "javascript",
    code: `let product = "Headphones";
let price = 2500;
let quantity = 2;

let subtotal = price * quantity;
let deliveryCharge = 100;

let finalAmount = subtotal + deliveryCharge;

console.log("Product:", product);
console.log("Subtotal:", subtotal);
console.log("Delivery Charge:", deliveryCharge);
console.log("Final Amount:", finalAmount);`,
    output: `Product: Headphones
Subtotal: 5000
Delivery Charge: 100
Final Amount: 5100`,
    explanation:
      "The same type of calculation can be part of a shopping website, billing application, order management system, or backend service. JavaScript provides the logic that processes the data."
  },

  interview: {
    question: "Where can JavaScript be used?",
    answer:
      "JavaScript can be used for frontend web development, backend development, APIs, mobile applications, desktop applications, browser extensions, games, and other software applications.",
    tip:
      "Mention both frontend and backend when answering this question."
  },

  tricky: {
    question:
      "Is JavaScript only a browser language?",
    answer:
      "No. JavaScript can run in browsers and outside browsers using environments such as Node.js."
  },

  practice: {
    question:
      "List five different areas where JavaScript can be used.",
    hint:
      "Think beyond websites."
  },

  challenge: {
    title: "JavaScript Career Map",
    description:
      "Understand how JavaScript skills can connect to different development roles.",
    task:
      "Create a simple list connecting JavaScript with frontend development, backend development, APIs, mobile applications, and games. Write one practical use case for each."
  }
},

// ============================================================
// TOPIC 05 — YOUR FIRST JAVASCRIPT PROGRAM
// ============================================================

"first-javascript-program": {
  concept: {
    heading: "Your First JavaScript Program",
    paragraphs: [
      "A JavaScript program is a set of instructions written using JavaScript syntax.",
      "JavaScript executes instructions according to the program flow. For beginners, console.log() is one of the easiest ways to see what the program is doing.",
      "Before learning complex applications, it is important to become comfortable with writing instructions, displaying values, performing calculations, and understanding output.",
      "The browser Developer Console provides a simple environment for testing JavaScript code."
    ],
    remember:
      "Start small: write an instruction, run it, observe the output, and understand why the output appeared."
  },

  analogy: {
    heading: "Think of a Program as a Recipe",
    items: [
      {
        icon: "📋",
        title: "Instructions",
        text: "A recipe contains instructions. A JavaScript program also contains instructions."
      },
      {
        icon: "🥣",
        title: "Input",
        text: "A recipe starts with ingredients. A program starts with values and data."
      },
      {
        icon: "👨‍🍳",
        title: "Processing",
        text: "The recipe processes ingredients through different steps. JavaScript processes data using instructions."
      },
      {
        icon: "🍽️",
        title: "Output",
        text: "The final dish is the result. In a program, the output is the result produced by the instructions."
      }
    ]
  },

  visual: {
    heading: "How Does a JavaScript Program Work?",
    description:
      "A simple JavaScript program follows a basic flow from writing instructions to producing a result.",
    steps: [
      {
        icon: "1️⃣",
        title: "Write Code",
        text: "The developer writes JavaScript instructions."
      },
      {
        icon: "2️⃣",
        title: "JavaScript Reads the Code",
        text: "The JavaScript engine processes the instructions."
      },
      {
        icon: "3️⃣",
        title: "Execute Instructions",
        text: "JavaScript performs the requested operations."
      },
      {
        icon: "4️⃣",
        title: "Produce Output",
        text: "The program produces a result that can be displayed or used by another part of the application."
      }
    ],
    flow:
      "Write Code → Read → Execute → Process Data → Output"
  },

  code: {
    title: "Practical Example — Building a Small Program",
    description:
      "Start with simple output and gradually combine values and calculations.",
    language: "javascript",
    code: `// Step 1: Display a message
console.log("Welcome to JavaScript");

// Step 2: Store information
let product = "Laptop";
let price = 50000;
let quantity = 2;

// Step 3: Process the information
let totalAmount = price * quantity;

// Step 4: Display the result
console.log("Product:", product);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total Amount:", totalAmount);`,
    output: `Welcome to JavaScript
Product: Laptop
Price: 50000
Quantity: 2
Total Amount: 100000`,
    explanation:
      "First, the program displays a message. Then it stores product information in variables. Next, it calculates the total amount by multiplying price and quantity. Finally, it displays the stored information and calculated result. This simple pattern—store data, process data, and display a result—is used throughout programming."
  },

  interview: {
    question: "What is console.log() used for?",
    answer:
      "console.log() is used to display values or messages in the browser console. It is commonly used for testing, learning, and debugging JavaScript code.",
    tip:
      "The console is a development tool. It is not the same as displaying content directly on a webpage."
  },

  tricky: {
    question: `console.log("10 + 20");
console.log(10 + 20);`,
    answer:
      "The first line displays the text 10 + 20 because it is inside quotes. The second line performs the addition and displays 30."
  },

  practice: {
    question:
      "Create a small program that stores a product name, price, and quantity. Calculate the total and display all information.",
    hint:
      "Follow this order: store values → calculate total → display values."
  },

  challenge: {
    title: "Build Your First Mini Program",
    description:
      "Create a small billing calculation using the concepts learned so far.",
    task:
      "Create variables for a product name, price, quantity, and discount. Calculate the subtotal, subtract the discount, and display the final amount.",
  }
},
// =====================================================
// TOPIC 06 — VARIABLES INTRODUCTION
// =====================================================

"variables-introduction": {
  concept: {
    heading: "What Are JavaScript Variables?",
    paragraphs: [
      "A variable is a named container used to store data in a program.",
      "In JavaScript, variables allow us to give a name to a value so that we can use that value later.",
      "For example, if a student's name is Riya, we can store that name inside a variable called studentName."
    ],
    remember:
      "Remember: A variable is a named container used to store data."
  },

  analogy: {
    heading: "Imagine a Storage Box",
    items: [
      {
        icon: "📦",
        title: "Box",
        text: "A box can contain a value or piece of information."
      },
      {
        icon: "🏷️",
        title: "Label",
        text: "We give the box a name, such as studentName."
      },
      {
        icon: "🔍",
        title: "Use",
        text: "We can access the stored value later using its variable name."
      }
    ]
  },

  visual: {
    heading: "How a Variable Stores Data",
    description:
      "A variable connects a name with a value so that the value can be used in a program.",
    steps: [
      {
        icon: "📝",
        title: "Create",
        text: "Choose a meaningful name for the variable."
      },
      {
        icon: "📦",
        title: "Store",
        text: "Store a value inside the variable."
      },
      {
        icon: "🔎",
        title: "Access",
        text: "Use the variable name to access its value."
      },
      {
        icon: "🔄",
        title: "Change",
        text: "Some variables can be updated with a new value."
      }
    ],
    flow: "Variable Name → Store Value → Access Value → Use in Program"
  },

  code: {
    title: "Creating Your First Variable",
    description: "Use the let keyword to create a variable.",
    language: "javascript",
    code: `let studentName = "Riya";

console.log(studentName);`,
    output: "Riya",
    explanation:
      'Here, studentName is the variable and "Riya" is the value stored inside it. console.log() displays the value.'
  },

  interview: {
    question: "What is a variable in JavaScript?",
    answer:
      "A variable is a named container used to store a value that can be used later in a program.",
    tip:
      "Give a simple definition followed by a small example."
  },

  tricky: {
    question: "Can a variable store only numbers?",
    answer:
      "No. JavaScript variables can store strings, numbers, booleans, arrays, objects, and other types of values."
  },

  practice: {
    question:
      "Create a variable called city, store your city name in it, and print it to the console.",
    hint:
      'Example: let city = "Delhi";'
  },

  challenge: {
    title: "Create Your Student Variables",
    description:
      "Create basic variables for student information.",
    task:
      "Create three variables called studentName, age, and course. Store suitable values and print them to the console."
  }
},

// =====================================================
// TOPIC 07 — VAR
// =====================================================

"var": {
  concept: {
    heading: "The var Keyword",
    paragraphs: [
      "var is the traditional keyword used to declare variables in JavaScript.",
      "Modern JavaScript generally prefers let and const, but understanding var is important because it is commonly found in older JavaScript code.",
      "A variable declared with var can be assigned a new value later."
    ],
    remember:
      "Remember: var is the traditional variable declaration keyword, and its value can be reassigned."
  },

  analogy: {
    heading: "Imagine an Editable Storage Box",
    items: [
      {
        icon: "📦",
        title: "Storage Box",
        text: "A storage box contains some information."
      },
      {
        icon: "✏️",
        title: "Edit",
        text: "The information inside the box can be replaced with a new value."
      },
      {
        icon: "🔄",
        title: "Reuse",
        text: "The same variable can be used again in the program."
      }
    ]
  },

  visual: {
    heading: "How var Works",
    description:
      "The var keyword creates a variable whose value can be changed later.",
    steps: [
      {
        icon: "1️⃣",
        title: "Declare",
        text: "Declare a variable using the var keyword."
      },
      {
        icon: "2️⃣",
        title: "Assign",
        text: "Give the variable an initial value."
      },
      {
        icon: "3️⃣",
        title: "Reassign",
        text: "Assign a new value to the variable later."
      }
    ],
    flow: "var → Initial Value → New Value → Updated Variable"
  },

  code: {
    title: "Using var",
    description: "Create and update a variable using var.",
    language: "javascript",
    code: `var age = 20;

console.log(age);

age = 21;

console.log(age);`,
    output: `20
21`,
    explanation:
      "The age variable initially contains 20. Later, its value is changed to 21."
  },

  interview: {
    question: "What is var in JavaScript?",
    answer:
      "var is a traditional JavaScript keyword used to declare variables.",
    tip:
      "Mention that modern JavaScript generally prefers let and const."
  },

  tricky: {
    question: "Can a variable declared with var be reassigned?",
    answer:
      "Yes. A variable declared with var can be assigned a new value."
  },

  practice: {
    question:
      "Create a price variable using var and update its value.",
    hint:
      "Start with 500 and then change the value to 700."
  },

  challenge: {
    title: "Update Product Price",
    description:
      "Store and update a product price using var.",
    task:
      "Create a price variable, print its initial value, assign a new value, and print the updated value."
  }
},

// =====================================================
// TOPIC 08 — LET
// =====================================================

"let": {
  concept: {
    heading: "The let Keyword",
    paragraphs: [
      "let is a commonly used keyword for declaring variables in modern JavaScript.",
      "A variable declared with let can be assigned a new value later.",
      "let is block-scoped, which makes its behavior more predictable than var in many situations."
    ],
    remember:
      "Remember: let allows reassignment, but the same variable cannot be redeclared in the same scope."
  },

  analogy: {
    heading: "Imagine an Editable Notebook",
    items: [
      {
        icon: "📓",
        title: "Notebook",
        text: "A notebook contains information that can be updated."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "The existing information can be replaced with new information."
      },
      {
        icon: "🔒",
        title: "One Name",
        text: "The same let variable name cannot be declared again in the same scope."
      }
    ]
  },

  visual: {
    heading: "How let Works",
    description:
      "The let keyword creates a variable whose value can be changed during program execution.",
    steps: [
      {
        icon: "📝",
        title: "Declare",
        text: "Create a variable using let."
      },
      {
        icon: "📦",
        title: "Assign",
        text: "Store an initial value."
      },
      {
        icon: "🔄",
        title: "Update",
        text: "Assign a new value when needed."
      }
    ],
    flow: "let → Store Value → Reassign → Updated Value"
  },

  code: {
    title: "Using let",
    description: "Create and update a variable using let.",
    language: "javascript",
    code: `let score = 50;

console.log(score);

score = 80;

console.log(score);`,
    output: `50
80`,
    explanation:
      "The score variable initially contains 50. Later, its value is updated to 80."
  },

  interview: {
    question: "Can a let variable be reassigned?",
    answer:
      "Yes. A variable declared with let can be assigned a new value.",
    tip:
      "It is useful to compare let with const during interviews."
  },

  tricky: {
    question: "Can you redeclare the same let variable in the same scope?",
    answer:
      "No. The same let variable cannot be redeclared in the same scope."
  },

  practice: {
    question:
      "Create a marks variable using let and update its value.",
    hint:
      "Set marks to 60 first and then update it to 90."
  },

  challenge: {
    title: "Update Student Score",
    description:
      "Update a student's score using a let variable.",
    task:
      "Create a score variable, print the initial score, update it, and print the new score."
  }
},

// =====================================================
// TOPIC 09 — CONST
// =====================================================

"const": {
  concept: {
    heading: "The const Keyword",
    paragraphs: [
      "const is used in modern JavaScript when a variable should not be reassigned.",
      "A const variable must be initialized with a value when it is declared.",
      "Once a primitive value is assigned to a const variable, that variable cannot be assigned a different value."
    ],
    remember:
      "Remember: A const variable cannot be reassigned."
  },

  analogy: {
    heading: "Imagine a Fixed ID Card",
    items: [
      {
        icon: "🪪",
        title: "ID",
        text: "An ID card contains fixed identification information."
      },
      {
        icon: "🔒",
        title: "Fixed",
        text: "The ID value is not normally changed."
      },
      {
        icon: "🎯",
        title: "Use",
        text: "const is useful when a variable should not be reassigned."
      }
    ]
  },

  visual: {
    heading: "How const Works",
    description:
      "A const variable is declared with a value and cannot be reassigned later.",
    steps: [
      {
        icon: "1️⃣",
        title: "Declare",
        text: "Use the const keyword."
      },
      {
        icon: "2️⃣",
        title: "Assign",
        text: "Provide a value during declaration."
      },
      {
        icon: "3️⃣",
        title: "Keep",
        text: "Do not reassign the variable to another value."
      }
    ],
    flow: "const → Initial Value → Fixed Assignment"
  },

  code: {
    title: "Using const",
    description: "Store a value using const.",
    language: "javascript",
    code: `const country = "India";

console.log(country);`,
    output: "India",
    explanation:
      'The country variable is declared using const and contains the value "India".'
  },

  interview: {
    question: "What is const in JavaScript?",
    answer:
      "const is used to declare a variable that cannot be reassigned after initialization.",
    tip:
      "Remember that a const variable must be initialized when declared."
  },

  tricky: {
    question: "Can you declare a const variable without assigning a value?",
    answer:
      "No. A const variable must be initialized when it is declared."
  },

  practice: {
    question:
      "Create a company variable using const and print the company name.",
    hint:
      'Example: const company = "Career Tech";'
  },

  challenge: {
    title: "Create Fixed Information",
    description:
      "Store information that should not be reassigned.",
    task:
      "Create country and course variables using const and print both values."
  }
},

// =====================================================
// TOPIC 10 — VAR VS LET VS CONST
// =====================================================

"var-let-const": {
  concept: {
    heading: "var vs let vs const",
    paragraphs: [
      "JavaScript provides three commonly discussed keywords for declaring variables: var, let, and const.",
      "var is the traditional keyword. let is useful when a variable needs to be reassigned, while const is useful when a variable should not be reassigned.",
      "In modern JavaScript, let and const are generally preferred."
    ],
    remember:
      "Quick Rule: If the value needs to change, use let. If it should not be reassigned, use const."
  },

  analogy: {
    heading: "Three Types of Storage Boxes",
    items: [
      {
        icon: "📦",
        title: "var Box",
        text: "A traditional type of variable declaration commonly found in older code."
      },
      {
        icon: "🔄",
        title: "let Box",
        text: "Useful when the stored value needs to change."
      },
      {
        icon: "🔒",
        title: "const Box",
        text: "Useful when the variable should not be reassigned."
      }
    ]
  },

  visual: {
    heading: "Choosing the Right Variable",
    description:
      "Use this simple decision flow to choose between let and const.",
    steps: [
      {
        icon: "❓",
        title: "Will the value change?",
        text: "Think about whether the variable needs a new value later."
      },
      {
        icon: "🔄",
        title: "Yes → let",
        text: "Use let when the variable needs to be reassigned."
      },
      {
        icon: "🔒",
        title: "No → const",
        text: "Use const when the variable should not be reassigned."
      },
      {
        icon: "📚",
        title: "var",
        text: "Understand var mainly for older JavaScript code and interviews."
      }
    ],
    flow: "Need a Variable → Will Value Change? → Yes: let | No: const"
  },

  code: {
    title: "Comparing var, let and const",
    description:
      "See the basic use of all three variable keywords.",
    language: "javascript",
    code: `var oldValue = 10;

let score = 50;
score = 80;

const country = "India";

console.log(oldValue);
console.log(score);
console.log(country);`,
    output: `10
80
India`,
    explanation:
      "var is the traditional declaration, let allows reassignment, and const is not reassigned."
  },

  interview: {
    question: "What is the difference between var, let and const?",
    answer:
      "var is traditional and function-scoped, let is block-scoped and can be reassigned, while const is block-scoped and cannot be reassigned.",
    tip:
      "Mention both scope and reassignment when answering this interview question."
  },

  tricky: {
    question: "Why are let and const generally preferred in modern JavaScript?",
    answer:
      "They provide block scope and make variable behavior more predictable."
  },

  practice: {
    question:
      "Create one variable whose value will change and another whose value will remain fixed. Choose the correct keyword for each.",
    hint:
      "Changing value → let. Fixed assignment → const."
  },

  challenge: {
    title: "Choose the Correct Keyword",
    description:
      "Choose appropriate variable keywords for real-world information.",
    task:
      "Create variables for student name, student marks, and country. Decide where let or const is more appropriate."
  }
},

// =====================================================
// TOPIC 11 — PRIMITIVE DATA TYPES
// =====================================================

"primitive-data-types": {
  concept: {
    heading: "Primitive Data Types",
    paragraphs: [
      "A data type tells us what kind of data a variable contains.",
      "Primitive data types represent simple individual values in JavaScript.",
      "Important primitive types include String, Number, Boolean, Undefined, Null, BigInt, and Symbol."
    ],
    remember:
      "Remember: Primitive data types represent basic individual values."
  },

  analogy: {
    heading: "Imagine Different Types of Information",
    items: [
      {
        icon: "🔤",
        title: "String",
        text: "Text information such as a student's name."
      },
      {
        icon: "🔢",
        title: "Number",
        text: "Numeric information such as age or marks."
      },
      {
        icon: "✅",
        title: "Boolean",
        text: "A value that can be true or false."
      },
      {
        icon: "❓",
        title: "Undefined / Null",
        text: "Values that can represent missing or intentionally empty information."
      }
    ]
  },

  visual: {
    heading: "JavaScript Primitive Types",
    description:
      "Different primitive types represent different kinds of basic information.",
    steps: [
      {
        icon: "🔤",
        title: "String",
        text: "Used for text data."
      },
      {
        icon: "🔢",
        title: "Number",
        text: "Used for numeric values."
      },
      {
        icon: "✅",
        title: "Boolean",
        text: "Represents true or false."
      },
      {
        icon: "❓",
        title: "Undefined",
        text: "A variable that has not been assigned a value."
      },
      {
        icon: "⭕",
        title: "Null",
        text: "Represents an intentionally empty value."
      }
    ],
    flow: "Data → Identify Type → String / Number / Boolean / Undefined / Null"
  },

  code: {
    title: "Working with Primitive Values",
    description:
      "Store different primitive values in JavaScript variables.",
    language: "javascript",
    code: `let name = "Riya";
let age = 25;
let isStudent = true;
let city;
let result = null;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(result);`,
    output: `Riya
25
true
undefined
null`,
    explanation:
      "Each variable contains a different type of primitive value."
  },

  interview: {
    question: "What are primitive data types in JavaScript?",
    answer:
      "Primitive data types represent simple individual values such as string, number, boolean, undefined, null, bigint, and symbol.",
    tip:
      "Be able to explain String, Number, Boolean, Undefined, and Null with examples."
  },

  tricky: {
    question: "Is String a primitive data type in JavaScript?",
    answer:
      "Yes. String is one of JavaScript's primitive data types."
  },

  practice: {
    question:
      "Create one String, one Number, and one Boolean variable.",
    hint:
      'Example: let name = "Riya"; let age = 25; let active = true;'
  },

  challenge: {
    title: "Create a Student Profile",
    description:
      "Use different primitive data types to store student information.",
    task:
      "Create variables for name, age, percentage, and student status. Print all values to the console."
  }
},

// =====================================================
// TOPIC 12 — NON-PRIMITIVE DATA TYPES
// =====================================================

"non-primitive-data-types": {
  concept: {
    heading: "Non-Primitive Data Types",
    paragraphs: [
      "Non-primitive data structures are used to represent collections of values or more complex structures.",
      "Arrays and objects are common non-primitive data structures in JavaScript.",
      "An array stores multiple values in an ordered collection, while an object stores related information using key-value pairs."
    ],
    remember:
      "Remember: Array = collection of values. Object = related data using key-value pairs."
  },

  analogy: {
    heading: "Imagine a School Bag",
    items: [
      {
        icon: "🎒",
        title: "Bag",
        text: "A bag can contain multiple different items."
      },
      {
        icon: "📋",
        title: "Array",
        text: "An array can store multiple values as an ordered list."
      },
      {
        icon: "🪪",
        title: "Object",
        text: "An object can store related information using named properties."
      }
    ]
  },

  visual: {
    heading: "Primitive vs Non-Primitive",
    description:
      "Understand the basic difference between simple values and grouped data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Single Value",
        text: "Primitive types represent basic individual values."
      },
      {
        icon: "2️⃣",
        title: "Multiple Values",
        text: "An array groups multiple values together."
      },
      {
        icon: "3️⃣",
        title: "Related Data",
        text: "An object groups related information using properties."
      }
    ],
    flow: "Simple Value → Primitive | Grouped Data → Array / Object"
  },

  code: {
    title: "Array and Object",
    description:
      "Look at the basic structure of an array and an object.",
    language: "javascript",
    code: `let skills = ["HTML", "CSS", "JavaScript"];

let student = {
  name: "Riya",
  age: 25,
  course: "JavaScript"
};

console.log(skills);
console.log(student);`,
    output: `[ "HTML", "CSS", "JavaScript" ]
{ name: "Riya", age: 25, course: "JavaScript" }`,
    explanation:
      "skills is an array containing multiple values. student is an object containing related information as key-value pairs."
  },

  interview: {
    question: "What is a non-primitive data type?",
    answer:
      "Non-primitive data structures can represent collections or more complex structures, such as arrays and objects.",
    tip:
      "Explain arrays and objects with simple real-world examples."
  },

  tricky: {
    question: "What is the basic difference between an array and an object?",
    answer:
      "An array is generally an ordered collection of values, while an object stores related data using key-value properties."
  },

  practice: {
    question:
      "Store three of your favorite skills inside an array.",
    hint:
      'Example: let skills = ["HTML", "CSS", "JavaScript"];'
  },

  challenge: {
    title: "Create Student Data",
    description:
      "Practice the basic use of arrays and objects.",
    task:
      "Create a skills array and a student object. Print both to the console."
  }
},

// =====================================================
// TOPIC 13 — TYPEOF
// =====================================================

"typeof": {
  concept: {
    heading: "The typeof Operator",
    paragraphs: [
      "typeof is a JavaScript operator used to check the data type of a value or variable.",
      "It is useful for understanding data and debugging JavaScript programs.",
      "The result returned by typeof is generally a string such as \"string\", \"number\", or \"boolean\"."
    ],
    remember:
      "Remember: Use typeof to check the data type of a value."
  },

  analogy: {
    heading: "Imagine a Data Inspector",
    items: [
      {
        icon: "🔎",
        title: "Inspect",
        text: "An inspector checks an item carefully."
      },
      {
        icon: "🏷️",
        title: "Identify",
        text: "The inspector identifies the category of the item."
      },
      {
        icon: "💻",
        title: "typeof",
        text: "The typeof operator helps JavaScript identify the type of a value."
      }
    ]
  },

  visual: {
    heading: "How typeof Works",
    description:
      "Use typeof before a value or variable to check its data type.",
    steps: [
      {
        icon: "1️⃣",
        title: "Take a Value",
        text: "Choose a variable or value to inspect."
      },
      {
        icon: "2️⃣",
        title: "Use typeof",
        text: "Place the value after the typeof operator."
      },
      {
        icon: "3️⃣",
        title: "Get the Type",
        text: "JavaScript returns the detected type as a string."
      }
    ],
    flow: "Value → typeof → Data Type"
  },

  code: {
    title: "Checking Data Types",
    description:
      "Check the types of different values using typeof.",
    language: "javascript",
    code: `let name = "Riya";
let age = 25;
let active = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof active);`,
    output: `string
number
boolean`,
    explanation:
      'typeof name returns "string", typeof age returns "number", and typeof active returns "boolean".'
  },

  interview: {
    question: "What does typeof do in JavaScript?",
    answer:
      "The typeof operator returns a string indicating the type of a value.",
    tip:
      'Use a simple example such as typeof 10 → "number".'
  },

  tricky: {
    question: "What does typeof return?",
    answer:
      "The typeof operator generally returns the data type name as a string."
  },

  practice: {
    question:
      "Create String, Number, and Boolean variables and check their types using typeof.",
    hint:
      "Use typeof followed by the variable name."
  },

  challenge: {
    title: "Build a Type Checker",
    description:
      "Identify the types of different JavaScript values.",
    task:
      "Create at least five different values and use typeof to print the type of each value."
  }
},

// =====================================================
// TOPIC 14 — ARITHMETIC OPERATORS
// =====================================================

"arithmetic-operators": {
  concept: {
    heading: "Arithmetic Operators",
    paragraphs: [
      "Arithmetic operators are used to perform mathematical calculations with numbers.",
      "Common JavaScript arithmetic operators include +, -, *, /, %, and **.",
      "These operators are used in calculators, billing systems, marks calculations, and many other programs."
    ],
    remember:
      "Remember: Arithmetic operators are used for mathematical calculations."
  },

  analogy: {
    heading: "Imagine a Calculator",
    items: [
      {
        icon: "➕",
        title: "Add",
        text: "Combine two numbers to get their total."
      },
      {
        icon: "➖",
        title: "Subtract",
        text: "Subtract one number from another."
      },
      {
        icon: "✖️",
        title: "Multiply",
        text: "Multiply numbers to calculate a product."
      },
      {
        icon: "➗",
        title: "Divide",
        text: "Divide one number by another."
      }
    ]
  },

  visual: {
    heading: "Arithmetic Operations Flow",
    description:
      "Numbers are combined with operators to produce a calculated result.",
    steps: [
      {
        icon: "🔢",
        title: "Numbers",
        text: "Choose two or more numeric values."
      },
      {
        icon: "➕",
        title: "Operator",
        text: "Choose the required arithmetic operator."
      },
      {
        icon: "🧮",
        title: "Calculation",
        text: "JavaScript evaluates the mathematical expression."
      },
      {
        icon: "📊",
        title: "Result",
        text: "The calculated result is produced."
      }
    ],
    flow: "Numbers → Operator → Calculation → Result"
  },

  code: {
    title: "Basic Arithmetic Operations",
    description:
      "Perform common mathematical operations in JavaScript.",
    language: "javascript",
    code: `let a = 20;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);`,
    output: `26
14
120
3.3333333333333335
2
400`,
    explanation:
      "+ performs addition, - subtraction, * multiplication, / division, % returns the remainder, and ** performs exponentiation."
  },

  interview: {
    question: "What are arithmetic operators in JavaScript?",
    answer:
      "Arithmetic operators are used to perform mathematical calculations such as addition, subtraction, multiplication, and division.",
    tip:
      "Remember the common operators: +, -, *, /, %, and **."
  },

  tricky: {
    question: "What does the % operator return in JavaScript?",
    answer:
      "The % operator returns the remainder after division."
  },

  practice: {
    question:
      "Create two numbers and perform addition, subtraction, multiplication, and division.",
    hint:
      "Try using a = 20 and b = 5."
  },

  challenge: {
    title: "Build a Mini Calculator",
    description:
      "Use arithmetic operators to create basic calculator logic.",
    task:
      "Create two numbers and print the result of +, -, *, /, and % operations."
  }
},

// =====================================================
// TOPIC 15 — ASSIGNMENT OPERATORS
// =====================================================

"assignment-operators": {
  concept: {
    heading: "Assignment Operators",
    paragraphs: [
      "Assignment operators are used to assign values to variables or update existing values.",
      "The basic assignment operator is =.",
      "JavaScript also provides compound assignment operators such as +=, -=, *=, /=, and %=."
    ],
    remember:
      "Remember: Assignment operators assign or update values stored in variables."
  },

  analogy: {
    heading: "Imagine Updating a Scoreboard",
    items: [
      {
        icon: "🎯",
        title: "Start",
        text: "The scoreboard contains an initial score."
      },
      {
        icon: "➕",
        title: "Increase",
        text: "New points can be added to the existing score."
      },
      {
        icon: "➖",
        title: "Decrease",
        text: "Points can also be removed from the score."
      },
      {
        icon: "🔄",
        title: "Update",
        text: "Assignment operators provide a convenient way to update values."
      }
    ]
  },

  visual: {
    heading: "How Assignment Operators Work",
    description:
      "Assignment operators can update an existing variable value using a shorter syntax.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Variable",
        text: "Store an initial value in a variable."
      },
      {
        icon: "2️⃣",
        title: "Choose Operator",
        text: "Choose the required assignment operator."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "Calculate and update the existing value."
      },
      {
        icon: "4️⃣",
        title: "Use New Value",
        text: "Use the updated value in the program."
      }
    ],
    flow: "Variable → Assignment Operator → Update Value → New Value"
  },
code: {
  title: "Practical Example — Assignment Operators",

  description:
    "Assignment operators are used to assign a value to a variable or update its existing value.",

  language: "javascript",

  code: `// Assignment (=)
let balance = 1000;

console.log("Initial Balance:", balance);

// Add and assign (+=)
balance += 500;
console.log("After Deposit:", balance);

// Subtract and assign (-=)
balance -= 200;
console.log("After Spending:", balance);

// Multiply and assign (*=)
balance *= 2;
console.log("After Multiplication:", balance);

// Divide and assign (/=)
balance /= 2;
console.log("After Division:", balance);`,

  output: `Initial Balance: 1000
After Deposit: 1500
After Spending: 1300
After Multiplication: 2600
After Division: 1300`,

  explanation:
    "The = operator assigns an initial value to the variable. The += operator adds a value to the existing value. The -= operator subtracts a value. The *= operator multiplies the existing value, and the /= operator divides it. These operators provide a shorter way to update variable values."
},

  interview: {
    question: "What are assignment operators?",
    answer:
      "Assignment operators are used to assign or update values in variables.",
    tip:
      "Explain the basic = operator and common compound operators such as +=, -=, *=, and /=."
  },

  tricky: {
    question: "What does score += 10 mean?",
    answer:
      "It is a shorter way of writing score = score + 10."
  },

  practice: {
    question:
      "Create a balance variable and update it using += and -=.",
    hint:
      "Start with a balance of 1000."
  },

  challenge: {
    title: "Build a Wallet Update",
    description:
      "Use assignment operators to update a wallet balance.",
    task:
      "Set an initial balance, add money, spend some money, and print the final balance."
  }
},


// =========================
// TOPIC 16 — COMPARISON OPERATORS
// =========================

"comparison-operators": {
  concept: {
    heading: "Comparison Operators",

    paragraphs: [
      "Comparison operators are used to compare two values.",
      "The result of a comparison is always a Boolean value: true or false.",
      "Comparison operators are very important when making decisions in JavaScript.",
      "For example, you can compare marks with a passing score or compare a product price with a budget."
    ],

    remember:
      "Comparison operators check a relationship between values and return true or false."
  },

  analogy: {
    heading: "Think About Comparing Marks",

    items: [
      {
        icon: "📊",
        title: "Student Marks",
        text: "Suppose a student has scored 75 marks."
      },
      {
        icon: "✅",
        title: "Passing Check",
        text: "We can check whether 75 is greater than or equal to 40."
      },
      {
        icon: "❌",
        title: "Result",
        text: "The comparison gives either true or false."
      }
    ]
  },

  visual: {
    heading: "How Comparison Works",

    description:
      "JavaScript compares two values and returns a Boolean result.",

    steps: [
      {
        icon: "1️⃣",
        title: "Take Two Values",
        text: "Choose the values that you want to compare."
      },
      {
        icon: "2️⃣",
        title: "Use a Comparison Operator",
        text: "Use operators such as >, <, >=, <=, === or !==."
      },
      {
        icon: "3️⃣",
        title: "Get the Result",
        text: "JavaScript returns true or false."
      }
    ],

    flow:
      "Value A → Comparison Operator → Value B → true / false"
  },

 
  

    code: {
  title: "Practical Example — Comparison Operators",

  description:
    "Comparison operators are used to compare values. The result is always true or false.",

  language: "javascript",

  code: `// Equal value
console.log(5 == "5");      // true

// Equal value and type
console.log(5 === "5");     // false

// Not equal
console.log(5 != 3);        // true

// Not equal value or type
console.log(5 !== "5");     // true

// Greater than
console.log(10 > 5);        // true

// Less than
console.log(3 < 8);         // true

// Greater than or equal to
console.log(10 >= 10);      // true

// Less than or equal to
console.log(5 <= 10);       // true`,

  output: `true
false
true
true
true
true
true
true`,

  explanation:
    "== compares values and may perform type conversion. === compares both value and data type. != checks whether values are different, while !== checks whether the value or data type is different. The >, <, >= and <= operators compare numeric values."
},
  interview: {
    question: "What is the result of a comparison operation in JavaScript?",

    answer:
      "A comparison operation returns a Boolean value: true or false.",

    tip:
      "Comparison operators are commonly used inside if statements and other decision-making logic."
  },

  tricky: {
    question: "What is the difference between == and ===?",

    answer:
      "== compares values after possible type conversion, while === checks both value and data type. In most cases, === is preferred because it performs a strict comparison."
  },

  practice: {
    question:
      "Create a variable age = 20 and check whether the age is greater than or equal to 18.",

    hint:
      "Use the >= comparison operator."
  },

  challenge: {
    title: "Product Price Check",

    description:
      "Compare a product price with a customer's budget.",

    task:
      "Create productPrice = 1500 and budget = 2000. Check whether the product is within the budget. Also check whether the price is exactly 1500."
  }
},
// =========================
// TOPIC 17 — LOGICAL OPERATORS
// =========================

"logical-operators": {
  concept: {
    heading: "What Are Logical Operators?",
    paragraphs: [
      "Logical operators are used to combine or reverse Boolean conditions.",
      "JavaScript provides three main logical operators: AND (&&), OR (||), and NOT (!).",
      "They are especially useful when a program needs to check multiple conditions."
    ],
    remember:
      "Logical operators help JavaScript work with multiple true/false conditions."
  },

  analogy: {
    heading: "Logical Decisions in Real Life",
    items: [
      {
        icon: "🎫",
        title: "AND Condition",
        text: "A person may need a valid ticket AND an ID card to enter an event."
      },
      {
        icon: "🌧️",
        title: "OR Condition",
        text: "You may carry an umbrella if it is raining OR if the weather forecast predicts rain."
      },
      {
        icon: "🚫",
        title: "NOT Condition",
        text: "If something is not available, the program can display an unavailable message."
      }
    ]
  },

  visual: {
    heading: "How Logical Operators Work",
    description:
      "Logical operators combine Boolean values to produce another Boolean result.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Conditions",
        text: "Example: age >= 18 and hasId === true"
      },
      {
        icon: "2️⃣",
        title: "Combine Conditions",
        text: "Use &&, ||, or !."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Evaluates",
        text: "JavaScript checks the complete logical expression."
      },
      {
        icon: "4️⃣",
        title: "Get Result",
        text: "The final result can be true or false."
      }
    ],
    flow: "Condition 1 + Condition 2 → Logical Operator → Final Result"
  },

  code: {
  title: "Practical Example — Logical Operators",

  description:
    "Logical operators are used to combine multiple conditions or reverse a condition. They return a Boolean result: true or false.",

  language: "javascript",

  code: `// AND (&&)
let age = 25;
let hasID = true;

console.log("Can Enter:", age >= 18 && hasID);

// OR (||)
let isStudent = false;
let hasCoupon = true;

console.log("Can Get Offer:", isStudent || hasCoupon);

// NOT (!)
let loggedIn = false;

console.log("Not Logged In:", !loggedIn);

// Combining comparison and logical operators
let marks = 75;
let attendance = 85;

let eligible = marks >= 40 && attendance >= 75;

console.log("Eligible:", eligible);`,

  output: `Can Enter: true
Can Get Offer: true
Not Logged In: true
Eligible: true`,

  explanation:
    "The && operator returns true only when both conditions are true. The || operator returns true when at least one condition is true. The ! operator reverses a Boolean value. Logical operators are commonly combined with comparison operators to create real-world conditions."
},

  interview: {
    question: "What are the three main logical operators in JavaScript?",
    answer:
      "The three main logical operators are && (AND), || (OR), and ! (NOT).",
    tip:
      "AND means all required conditions, OR means at least one condition, and NOT reverses the result."
  },

  tricky: {
    question: `console.log(true && false);`,
    answer:
      "false, because the AND operator requires both conditions to be true."
  },

  practice: {
    question:
      "Create two Boolean variables and use && and || to combine them.",
    hint:
      "Try values such as isStudent = true and hasId = true."
  },

  challenge: {
    title: "Event Entry Checker",
    description:
      "Create conditions for entering an event.",
    task:
      "A visitor must be 18 or older AND have a valid ID. Create the variables and combine the conditions using &&."
  }
},

// =========================
// TOPIC 18 — TYPE CONVERSION
// =========================

"type-conversion": {
  concept: {
    heading: "What Is Type Conversion?",
    paragraphs: [
      "Type conversion means changing a value from one data type to another.",
      "JavaScript provides built-in methods such as String(), Number(), and Boolean() for explicit conversion.",
      "Type conversion is very useful when working with user input, forms, APIs, and data from external sources."
    ],
    remember:
      "Type conversion means intentionally changing a value from one type to another."
  },

  analogy: {
    heading: "Changing Data Into the Required Form",
    items: [
      {
        icon: "🔢",
        title: "Text to Number",
        text: "A number entered by a user often arrives as text and may need to be converted into a number."
      },
      {
        icon: "🔤",
        title: "Number to String",
        text: "A number may need to be converted into text before being displayed or combined with text."
      },
      {
        icon: "✅",
        title: "Value to Boolean",
        text: "A value can be converted into true or false using Boolean()."
      }
    ]
  },

  visual: {
    heading: "How Explicit Type Conversion Works",
    description:
      "The programmer tells JavaScript which data type is required.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With a Value",
        text: "Example: \"500\""
      },
      {
        icon: "2️⃣",
        title: "Choose Conversion",
        text: "Use Number() to convert the string into a number."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Converts",
        text: "The value is changed into the requested type."
      },
      {
        icon: "4️⃣",
        title: "Use the New Type",
        text: "The converted value can now be used appropriately."
      }
    ],
    flow: "Original Value → Conversion Method → New Data Type → Use Value"
  },

  code: {
    title: "Type Conversion Practical Example",
    description:
      "This example converts values into different JavaScript data types.",
    language: "javascript",
    code: `let priceText = "1500";
let price = Number(priceText);

let quantity = 3;
let quantityText = String(quantity);

let isAvailable = Boolean(1);

console.log(price);
console.log(typeof price);

console.log(quantityText);
console.log(typeof quantityText);

console.log(isAvailable);`,
    output: `1500
number
3
string
true`,
    explanation:
      "Number() converts text into a number, String() converts a value into a string, and Boolean() converts a value into true or false."
  },

  interview: {
    question: "What is explicit type conversion?",
    answer:
      "Explicit type conversion happens when the programmer intentionally converts a value using methods such as Number(), String(), or Boolean().",
    tip:
      "Explicit means the programmer clearly tells JavaScript to convert the value."
  },

  tricky: {
    question: `let value = Number("100");
console.log(typeof value);`,
    answer:
      "The output is number because Number() explicitly converts the string into a number."
  },

  practice: {
    question:
      "Convert the string \"2500\" into a number and print its data type.",
    hint:
      "Use Number() and typeof."
  },

  challenge: {
    title: "Shopping Price Converter",
    description:
      "Imagine a product price is received as text from an external source.",
    task:
      "Create priceText = \"2499\". Convert it into a number and print both the converted value and its type."
  }
},

// =========================
// TOPIC 19 — TYPE COERCION
// =========================

"type-coercion": {
  concept: {
    heading: "What Is Type Coercion?",
    paragraphs: [
      "Type coercion happens when JavaScript automatically converts one data type into another during an operation.",
      "Unlike explicit type conversion, the programmer does not directly call a conversion method.",
      "Understanding coercion is important because JavaScript may produce results that beginners do not expect."
    ],
    remember:
      "Type coercion is automatic type conversion performed by JavaScript."
  },

  analogy: {
    heading: "Automatic Conversion",
    items: [
      {
        icon: "🤖",
        title: "JavaScript Decides",
        text: "JavaScript may automatically convert a value when an operation requires a compatible type."
      },
      {
        icon: "➕",
        title: "String Concatenation",
        text: "When + is used with a string, JavaScript may convert another value into a string."
      },
      {
        icon: "➖",
        title: "Numeric Operation",
        text: "Operators such as - may convert numeric strings into numbers."
      }
    ]
  },

  visual: {
    heading: "How Type Coercion Happens",
    description:
      "JavaScript detects different data types and may automatically convert one value during an operation.",
    steps: [
      {
        icon: "1️⃣",
        title: "Different Types",
        text: "Example: \"10\" and 5"
      },
      {
        icon: "2️⃣",
        title: "Perform Operation",
        text: "Example: \"10\" + 5"
      },
      {
        icon: "3️⃣",
        title: "Automatic Conversion",
        text: "JavaScript converts the number to a string for +."
      },
      {
        icon: "4️⃣",
        title: "Result",
        text: "The result becomes \"105\"."
      }
    ],
    flow: "Different Types → Operation → Automatic Conversion → Result"
  },

  code: {
    title: "Type Coercion Practical Example",
    description:
      "These examples show how JavaScript behaves when different data types are used together.",
    language: "javascript",
    code: `console.log("10" + 5);
console.log("10" - 5);
console.log(true + 1);
console.log("20" * 2);`,
    output: `105
5
2
40`,
    explanation:
      "With +, the number is converted to a string because one operand is a string. With -, *, and similar numeric operators, JavaScript may convert numeric strings into numbers. true can behave like 1 in numeric operations."
  },

  interview: {
    question: "What is type coercion in JavaScript?",
    answer:
      "Type coercion is the automatic conversion of one data type into another by JavaScript during an operation.",
    tip:
      "Conversion = you do it. Coercion = JavaScript does it automatically."
  },

  tricky: {
    question: `console.log("5" + 2);`,
    answer:
      "The output is \"52\" because + with a string performs string concatenation in this case."
  },

  practice: {
    question:
      "Predict the output of \"20\" - 5 and \"20\" + 5 before running the code.",
    hint:
      "Think about how + and - handle strings."
  },

  challenge: {
    title: "Coercion Explorer",
    description:
      "Create different expressions using strings, numbers, and Boolean values.",
    task:
      "Test at least five expressions and observe how JavaScript automatically converts the values."
  }
},

// =========================
// TOPIC 20 — CONSOLE
// =========================

"console": {
  concept: {
    heading: "What Is the Console?",
    paragraphs: [
      "The browser console is a developer tool used to view messages, values, warnings, and errors.",
      "The most commonly used method is console.log().",
      "The console is extremely useful while learning JavaScript because it helps developers understand what their code is doing."
    ],
    remember:
      "Use the console to inspect values, debug code, and understand program execution."
  },

  analogy: {
    heading: "Console as a Developer Notebook",
    items: [
      {
        icon: "📒",
        title: "Write Information",
        text: "A developer can print important values to the console."
      },
      {
        icon: "🔍",
        title: "Inspect Values",
        text: "The console helps developers check whether variables contain the expected values."
      },
      {
        icon: "🐞",
        title: "Find Problems",
        text: "Console messages can help identify where a program is behaving differently than expected."
      }
    ]
  },

  visual: {
    heading: "How Console Logging Works",
    description:
      "JavaScript sends information to the browser's developer console.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "Store information in variables."
      },
      {
        icon: "2️⃣",
        title: "Use console.log()",
        text: "Send the information to the console."
      },
      {
        icon: "3️⃣",
        title: "Browser Displays It",
        text: "The browser shows the value in Developer Tools."
      },
      {
        icon: "4️⃣",
        title: "Inspect",
        text: "The developer can check whether the value is correct."
      }
    ],
    flow: "JavaScript Code → console.log() → Browser Console → Developer Inspection"
  },

  code: {
    title: "Console Practical Example",
    description:
      "This example uses different console methods to inspect application data.",
    language: "javascript",
    code: `let product = "Laptop";
let price = 55000;
let quantity = 2;

console.log("Product:", product);
console.log("Price:", price);
console.log("Quantity:", quantity);

console.warn("This is a warning message.");
console.error("This is an error message.");

console.table([
  { product: "Laptop", price: 55000 },
  { product: "Mouse", price: 1200 }
]);`,
    output: `Product: Laptop
Price: 55000
Quantity: 2

Warning message
Error message

A table containing product and price information`,
    explanation:
      "console.log() displays normal information, console.warn() displays warnings, console.error() displays errors, and console.table() displays structured data in table format."
  },

  interview: {
    question: "Why is console.log() commonly used in JavaScript?",
    answer:
      "console.log() is commonly used to display values and messages in the console, making it useful for testing and debugging.",
    tip:
      "During development, console.log() is one of the easiest ways to inspect a variable."
  },

  tricky: {
    question: `let price = 500;
console.log("price");`,
    answer:
      "The output is the text price, not 500. To print the variable value, use console.log(price)."
  },

  practice: {
    question:
      "Create three variables for product name, price, and quantity and print them using console.log().",
    hint:
      "Pass multiple values to console.log()."
  },

  challenge: {
    title: "Product Debugger",
    description:
      "Create a small product data set and inspect it using the browser console.",
    task:
      "Create variables for product name, price, quantity, and availability. Print each value and use at least one warning or error message."
  }
},

// =========================
// TOPIC 21 — ALERT
// =========================

"alert": {
  concept: {
    heading: "What Is alert()?",
    paragraphs: [
      "The alert() method displays a message in a browser popup box.",
      "It is commonly used to show simple notifications or important information to a user.",
      "alert() is a browser feature, so it should be tested in a browser environment."
    ],
    remember:
      "alert() displays a message in a browser popup."
  },

  analogy: {
    heading: "Alert as a Notification",
    items: [
      {
        icon: "🔔",
        title: "Show Information",
        text: "A website can display an important message to the user."
      },
      {
        icon: "⚠️",
        title: "Show Warning",
        text: "A simple warning can be displayed using an alert."
      },
      {
        icon: "👋",
        title: "Welcome Message",
        text: "A website can show a welcome message when a user enters a page."
      }
    ]
  },

  visual: {
    heading: "How alert() Works",
    description:
      "The browser receives the alert command and displays the message in a popup.",
    steps: [
      {
        icon: "1️⃣",
        title: "Write Message",
        text: "Create a message string."
      },
      {
        icon: "2️⃣",
        title: "Call alert()",
        text: "Pass the message to alert()."
      },
      {
        icon: "3️⃣",
        title: "Browser Opens Popup",
        text: "The browser displays the message."
      },
      {
        icon: "4️⃣",
        title: "User Reads It",
        text: "The user closes the popup to continue."
      }
    ],
    flow: "Message → alert() → Browser Popup → User Reads Message"
  },

  code: {
    title: "Alert Practical Example",
    description:
      "This example shows how alert() can be used for simple website notifications.",
    language: "javascript",
    code: `let username = "Rahul";
let course = "JavaScript";

alert("Welcome " + username);
alert("You are learning " + course);`,
    output:
      "Two browser popup messages will appear:\nWelcome Rahul\nYou are learning JavaScript",
    explanation:
      "The alert() method displays each message in a browser popup. This code should be tested in a browser console."
  },

  interview: {
    question: "What does alert() do in JavaScript?",
    answer:
      "alert() displays a message in a browser popup dialog.",
    tip:
      "alert() is mainly used for simple user notifications and demonstrations."
  },

  tricky: {
    question: `let message = "Hello";
alert(message);`,
    answer:
      "The browser displays Hello in an alert popup."
  },

  practice: {
    question:
      "Create a variable containing a welcome message and display it using alert().",
    hint:
      "Store the message in a variable first."
  },

  challenge: {
    title: "Welcome Popup",
    description:
      "Create a simple welcome notification for a website visitor.",
    task:
      "Create variables for a username and course name. Use alert() to display a personalized welcome message."
  }
},

// =========================
// TOPIC 22 — PROMPT
// =========================

"prompt": {
  concept: {
    heading: "What Is prompt()?",
    paragraphs: [
      "The prompt() method displays a popup that allows the user to enter information.",
      "The value returned by prompt() is normally a string.",
      "prompt() is useful for learning user input before working with HTML forms and DOM events."
    ],
    remember:
      "prompt() collects input from the user and normally returns it as a string."
  },

  analogy: {
    heading: "Prompt as a Simple Question Box",
    items: [
      {
        icon: "❓",
        title: "Ask a Question",
        text: "The program can ask the user for information."
      },
      {
        icon: "⌨️",
        title: "User Enters Data",
        text: "The user types a value into the popup."
      },
      {
        icon: "📦",
        title: "Store the Answer",
        text: "The returned value can be stored in a variable."
      }
    ]
  },

  visual: {
    heading: "How prompt() Works",
    description:
      "The browser asks the user for input and returns the entered value.",
    steps: [
      {
        icon: "1️⃣",
        title: "Ask for Input",
        text: "Call prompt() with a question."
      },
      {
        icon: "2️⃣",
        title: "User Types",
        text: "The user enters information."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Receives Input",
        text: "prompt() returns the entered value."
      },
      {
        icon: "4️⃣",
        title: "Store and Use",
        text: "The program can store and process the value."
      }
    ],
    flow: "prompt() → User Input → Returned Value → Variable → Program"
  },

  code: {
  title: "Practical Example — Taking User Input",

  description:
    "The prompt() function takes input from the user. Since prompt() returns a string, parseInt() can be used to convert whole-number input into an integer, while parseFloat() can be used for decimal numbers.",

  language: "javascript",

  code: `// Taking input as a string
let name = prompt("Enter your name:");

console.log("Name:", name);


// Taking an integer input
let age = parseInt(prompt("Enter your age:"));

console.log("Age:", age);


// Taking two integer inputs
let price = parseInt(prompt("Enter product price:"));
let quantity = parseInt(prompt("Enter quantity:"));

let total = price * quantity;

console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total:", total);


// Taking a decimal input
let rating = parseFloat(prompt("Enter product rating:"));

console.log("Rating:", rating);`,

  output: `Name: User
Age: 25
Price: 500
Quantity: 3
Total: 1500
Rating: 4.5`,

  explanation:
    "prompt() returns the value entered by the user as a string. parseInt() converts a numeric string such as '25' into an integer 25. parseFloat() converts a numeric string such as '4.5' into a decimal number. After conversion, numeric values can be used for calculations such as multiplication and addition."
},
  interview: {
    question: "What type of value does prompt() normally return?",
    answer:
      "prompt() normally returns a string containing the user's input. It can also return null if the user cancels the dialog.",
    tip:
      "Remember: prompt input is text by default."
  },

  tricky: {
    question: `let age = prompt("Enter your age:");
console.log(typeof age);`,
    answer:
      "The result is normally string, even when the user enters a number such as 25."
  },

  practice: {
    question:
      "Use prompt() to ask the user for their favorite programming language and print the answer.",
    hint:
      "Store the returned value in a variable."
  },

  challenge: {
    title: "Simple User Information",
    description:
      "Create a small program that collects basic information from a user.",
    task:
      "Ask for name, city, and favorite programming language using prompt(). Print all three values in the console."
  }
},

// =========================
// TOPIC 23 — IF STATEMENT
// =========================

"if": {
  concept: {
    heading: "What Is an if Statement?",
    paragraphs: [
      "The if statement allows JavaScript to execute code only when a condition is true.",
      "It is one of the most important building blocks of decision-making in programming.",
      "The condition inside if is usually created using comparison or logical operators."
    ],
    remember:
      "if runs a block of code only when its condition is true."
  },

  analogy: {
    heading: "Making a Simple Decision",
    items: [
      {
        icon: "🎓",
        title: "Exam Eligibility",
        text: "If attendance is high enough, a student may be allowed to appear for an exam."
      },
      {
        icon: "🛒",
        title: "Shopping",
        text: "If a customer has enough balance, a purchase can be allowed."
      },
      {
        icon: "🔐",
        title: "Access",
        text: "If a user meets a required condition, access can be provided."
      }
    ]
  },

  visual: {
    heading: "How an if Statement Works",
    description:
      "JavaScript checks a condition before deciding whether to execute the code inside if.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Condition",
        text: "Example: age >= 18"
      },
      {
        icon: "2️⃣",
        title: "Check Condition",
        text: "JavaScript evaluates whether the condition is true."
      },
      {
        icon: "3️⃣",
        title: "True",
        text: "If the condition is true, the code inside if runs."
      },
      {
        icon: "4️⃣",
        title: "False",
        text: "If the condition is false, the code inside if is skipped."
      }
    ],
    flow: "Condition → true → Execute Code / false → Skip Code"
  },

  code: {
    title: "if Statement Practical Example",
    description:
      "This example checks whether a student has scored enough marks for a certificate.",
    language: "javascript",
    code: `let marks = 75;

if (marks >= 60) {
  console.log("Certificate approved.");
}

console.log("Program completed.");`,
    output: `Certificate approved.
Program completed.`,
    explanation:
      "Because marks is 75, the condition marks >= 60 is true, so the message inside the if block runs."
  },

  interview: {
    question: "What is the purpose of an if statement?",
    answer:
      "An if statement executes a block of code only when its condition evaluates to true.",
    tip:
      "Think of if as: 'Only do this when this condition is true.'"
  },

  tricky: {
    question: `let age = 15;

if (age >= 18) {
  console.log("Eligible");
}

console.log("Done");`,
    answer:
      "Only Done is printed because age >= 18 is false."
  },

  practice: {
    question:
      "Create a variable temperature = 35 and use if to print a message when the temperature is greater than 30.",
    hint:
      "Use the > comparison operator."
  },

  challenge: {
    title: "Age Eligibility Checker",
    description:
      "Create a simple age-checking program.",
    task:
      "Create age = 21. Use an if statement to print \"Eligible to apply.\" when age is 18 or above."
  }
},

// =========================
// TOPIC 24 — IF ELSE
// =========================

"if-else": {
  concept: {
    heading: "What Is if-else?",
    paragraphs: [
      "The if-else statement allows a program to choose between two paths.",
      "The if block runs when the condition is true, while the else block runs when the condition is false.",
      "It is useful when there are exactly two possible outcomes."
    ],
    remember:
      "if handles the true case; else handles the false case."
  },

  analogy: {
    heading: "Two Possible Decisions",
    items: [
      {
        icon: "🎓",
        title: "Pass or Fail",
        text: "If marks are high enough, the result is pass; otherwise, it is fail."
      },
      {
        icon: "💳",
        title: "Payment",
        text: "If enough balance is available, payment succeeds; otherwise, payment fails."
      },
      {
        icon: "🔑",
        title: "Access",
        text: "If the required condition is true, access is allowed; otherwise, access is denied."
      }
    ]
  },

  visual: {
    heading: "How if-else Works",
    description:
      "The program chooses exactly one of two main paths.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check Condition",
        text: "JavaScript evaluates the condition."
      },
      {
        icon: "2️⃣",
        title: "Condition True",
        text: "The if block executes."
      },
      {
        icon: "3️⃣",
        title: "Condition False",
        text: "The else block executes."
      },
      {
        icon: "4️⃣",
        title: "Continue Program",
        text: "After the selected block, the program continues."
      }
    ],
    flow: "Condition → TRUE → if block / FALSE → else block"
  },

  code: {
    title: "Pass or Fail Example",
    description:
      "This is a common real-world example of using if-else.",
    language: "javascript",
    code: `let marks = 48;

if (marks >= 50) {
  console.log("Result: Pass");
} else {
  console.log("Result: Fail");
}

console.log("Result processing completed.");`,
    output: `Result: Fail
Result processing completed.`,
    explanation:
      "Because marks is less than 50, the condition is false and the else block runs."
  },

  interview: {
    question: "When should you use if-else?",
    answer:
      "Use if-else when a program needs to choose between two possible outcomes based on a condition.",
    tip:
      "Two outcomes usually mean if-else is a good choice."
  },

  tricky: {
    question: `let balance = 1000;

if (balance >= 2000) {
  console.log("Purchase allowed");
} else {
  console.log("Insufficient balance");
}`,
    answer:
      "The output is Insufficient balance because 1000 is less than 2000."
  },

  practice: {
    question:
      "Create an age variable and use if-else to print whether a person is eligible to vote.",
    hint:
      "Use 18 as the minimum age."
  },

  challenge: {
    title: "Shopping Eligibility",
    description:
      "Build a simple purchase eligibility check.",
    task:
      "Create balance = 5000 and price = 3500. Use if-else to print whether the purchase is allowed."
  }
},

// =========================
// TOPIC 25 — ELSE IF
// =========================

"else-if": {
  concept: {
    heading: "What Is else-if?",
    paragraphs: [
      "The else-if statement is used when a program needs to check multiple conditions.",
      "JavaScript checks the conditions from top to bottom.",
      "When one condition becomes true, its block runs and the remaining else-if conditions are skipped."
    ],
    remember:
      "Use else-if when you have multiple possible conditions or outcomes."
  },

  analogy: {
    heading: "Multiple Choices in Real Life",
    items: [
      {
        icon: "🏆",
        title: "Grade System",
        text: "Different mark ranges can produce different grades."
      },
      {
        icon: "💰",
        title: "Discount Levels",
        text: "Different shopping amounts can receive different discount percentages."
      },
      {
        icon: "🌡️",
        title: "Temperature",
        text: "Different temperature ranges can produce different descriptions."
      }
    ]
  },

  visual: {
    heading: "How else-if Works",
    description:
      "JavaScript checks multiple conditions in sequence until it finds a true condition.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check First Condition",
        text: "JavaScript checks the if condition first."
      },
      {
        icon: "2️⃣",
        title: "Check Next Conditions",
        text: "If the first condition is false, JavaScript checks the next else-if condition."
      },
      {
        icon: "3️⃣",
        title: "First True Condition",
        text: "The first true condition gets executed."
      },
      {
        icon: "4️⃣",
        title: "Else",
        text: "If all conditions are false, the final else block can execute."
      }
    ],
    flow: "if → else-if → else-if → else → Final Result"
  },

  code: {
    title: "Student Grade System",
    description:
      "This practical example assigns a grade based on marks.",
    language: "javascript",
    code: `let marks = 82;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Needs Improvement");
}

console.log("Grade calculation completed.");`,
    output: `Grade: A
Grade calculation completed.`,
    explanation:
      "JavaScript checks each condition from top to bottom. Since 82 is not greater than or equal to 90 but is greater than or equal to 80, Grade A is printed."
  },

  interview: {
    question: "Why is else-if used in JavaScript?",
    answer:
      "else-if is used when a program needs to evaluate multiple conditions and choose an appropriate outcome.",
    tip:
      "Conditions are checked from top to bottom."
  },

  tricky: {
    question: `let marks = 85;

if (marks >= 60) {
  console.log("C");
} else if (marks >= 80) {
  console.log("A");
}`,
    answer:
      "The output is C because the first condition is already true. JavaScript does not continue to the else-if block."
  },

  practice: {
    question:
      "Create an else-if program that displays Excellent, Good, Average, or Needs Improvement based on marks.",
    hint:
      "Use multiple mark ranges."
  },

  challenge: {
    title: "Shopping Discount System",
    description:
      "Create a realistic discount system using multiple conditions.",
    task:
      "Use the following rules:\n₹10,000 or more → 20% discount\n₹5,000 or more → 10% discount\n₹2,000 or more → 5% discount\nBelow ₹2,000 → No discount"
  }
},

"switch": {
  concept: {
    heading: "switch Statement",

    paragraphs: [
      "The switch statement is used when you want to compare one value with multiple possible cases.",

      "It is useful when there are several fixed choices, such as selecting a day, menu option, payment status, or user role.",

      "The switch statement checks the value against each case. When a matching case is found, its code is executed.",

      "The break statement stops the switch after a matching case is executed. The default case runs when none of the cases match."
    ],

    remember:
      "switch is useful when one value needs to be compared with multiple fixed choices."
  },

  analogy: {
    heading: "Think About a Restaurant Menu",

    items: [
      {
        icon: "🍕",
        title: "Choose an Option",
        text: "A customer selects an item number from a menu."
      },

      {
        icon: "1️⃣",
        title: "Check the Case",
        text: "The program checks which menu option matches the selected number."
      },

      {
        icon: "🍔",
        title: "Execute the Choice",
        text: "The matching case displays the selected item."
      },

      {
        icon: "❓",
        title: "Default",
        text: "If the customer enters an invalid option, the default case displays a message."
      }
    ]
  },

  visual: {
    heading: "How switch Works",

    description:
      "A switch statement compares one value with different cases and executes the matching case.",

    steps: [
      {
        icon: "1️⃣",
        title: "Start with a Value",
        text: "The switch expression provides the value that needs to be checked."
      },

      {
        icon: "2️⃣",
        title: "Check the Cases",
        text: "JavaScript compares the value with each case."
      },

      {
        icon: "3️⃣",
        title: "Find a Match",
        text: "When a matching case is found, its statements are executed."
      },

      {
        icon: "4️⃣",
        title: "Use break",
        text: "break stops the switch from continuing into the next cases."
      },

      {
        icon: "5️⃣",
        title: "Use default",
        text: "default runs when no case matches the value."
      }
    ],

    flow:
      "Value → Check Cases → Match Found → Execute Code → break → End"
  },

  code: {
    title: "Practical Example — Menu Selection",

    description:
      "A switch statement can be used to handle a fixed set of menu choices.",

    language: "javascript",

    code: `let choice = 2;

switch (choice) {
  case 1:
    console.log("Home");
    break;

  case 2:
    console.log("Products");
    break;

  case 3:
    console.log("Contact");
    break;

  default:
    console.log("Invalid choice");
}`,

    output: `Products`,

    explanation:
      "The value of choice is 2. JavaScript checks each case and finds case 2. It executes console.log('Products') and then break stops the switch statement. If choice does not match 1, 2, or 3, the default case runs."
  },

  interview: {
    question: "What is the purpose of the break statement in switch?",

    answer:
      "The break statement stops the switch statement after a matching case has been executed.",

    tip:
      "Without break, JavaScript can continue executing the statements in the following cases."
  },

  tricky: {
    question: `let choice = 2;

switch (choice) {
  case 1:
    console.log("Home");

  case 2:
    console.log("Products");

  case 3:
    console.log("Contact");

  default:
    console.log("Invalid choice");
}`,

    answer:
      "The output will be Products, Contact, and Invalid choice because there are no break statements. After case 2 matches, JavaScript continues executing the following cases. This behavior is called fall-through."
  },

  practice: {
    question:
      "Create a switch statement for a day number. Display Monday for 1, Tuesday for 2, Wednesday for 3, and use default for an invalid number.",

    hint:
      "Create a variable such as day = 2 and add separate cases for 1, 2, and 3."
  },

  challenge: {
    title: "Order Status System",

    description:
      "Create a simple order status system using switch.",

    task:
      "Create a variable status with one of these values: 'pending', 'shipped', 'delivered', or 'cancelled'. Use switch to display a suitable message for each status. Add a default case for an unknown status."
  }
},

"ternary": {
  concept: {
    heading: "Ternary Operator (Conditional Operator)",

    paragraphs: [
      "The ternary operator is a short way to write a simple if-else condition.",

      "It is called the conditional operator because it checks a condition and chooses one of two values based on the result.",

      "The ternary operator uses three parts: a condition, a value when the condition is true, and a value when the condition is false.",

      "It is useful when you need a simple two-choice decision. For complex conditions or multiple statements, if-else is usually easier to understand."
    ],

    remember:
      "Ternary operator is a short form of if-else and is written using ?, and :."
  },

  analogy: {
    heading: "Think About a Simple Decision",

    items: [
      {
        icon: "❓",
        title: "Ask a Question",
        text: "Is the customer eligible for a discount?"
      },

      {
        icon: "✅",
        title: "If True",
        text: "Display Discount Available."
      },

      {
        icon: "❌",
        title: "If False",
        text: "Display No Discount."
      }
    ]
  },

  visual: {
    heading: "How the Ternary Operator Works",

    description:
      "The ternary operator checks one condition and chooses between two possible values.",

    steps: [
      {
        icon: "1️⃣",
        title: "Check the Condition",
        text: "JavaScript first evaluates the condition."
      },

      {
        icon: "2️⃣",
        title: "Use ?",
        text: "If the condition is true, the value after ? is selected."
      },

      {
        icon: "3️⃣",
        title: "Use :",
        text: "If the condition is false, the value after : is selected."
      },

      {
        icon: "4️⃣",
        title: "Store or Display the Result",
        text: "The selected value can be stored in a variable or directly used."
      }
    ],

    flow:
      "Condition → true ? value → false : value → Result"
  },

  code: {
    title: "Practical Example — Check Age",

    description:
      "A ternary operator can be used when there are only two possible results.",

    language: "javascript",

    code: `let age = 20;

let result = age >= 18
  ? "Eligible"
  : "Not Eligible";

console.log("Age:", age);
console.log("Result:", result);`,

    output: `Age: 20
Result: Eligible`,

    explanation:
      "The condition age >= 18 is true because age is 20. Therefore, the value after ? — 'Eligible' — is selected. If the condition were false, the value after : — 'Not Eligible' — would be selected."
  },

  interview: {
    question: "What is the ternary operator in JavaScript?",

    answer:
      "The ternary operator is a short form of an if-else statement. It checks a condition and returns one of two values.",

    tip:
      "Remember the pattern: condition ? valueIfTrue : valueIfFalse."
  },

  tricky: {
    question: `let marks = 35;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);`,

    answer:
      "The output is Fail because marks is 35, and the condition marks >= 40 is false. Therefore, the value after : is selected."
  },

  practice: {
    question:
      "Create a variable temperature = 30. Use the ternary operator to display 'Hot' when the temperature is greater than or equal to 30, otherwise display 'Normal'.",

    hint:
      "Use temperature >= 30 as the condition."
  },

  challenge: {
    title: "Shopping Discount Check",

    description:
      "Use the ternary operator to make a simple discount decision.",

    task:
      "Create a variable purchaseAmount = 6000. If the purchase amount is greater than or equal to 5000, display 'Discount Available'. Otherwise, display 'No Discount'."
  }
},

"while-loop": {
  concept: {
    heading: "while Loop",

    paragraphs: [
      "A while loop repeats a block of code as long as a specified condition is true.",
      "The condition is checked before every iteration of the loop.",
      "If the condition is true, the code inside the loop runs. After that, the condition is checked again.",
      "A while loop is useful when repetition depends on a condition and the exact number of repetitions may not always be known."
    ],

    remember:
      "while loop: Check the condition first, then execute the code."
  },

  analogy: {
    heading: "Think About a Countdown",

    items: [
      {
        icon: "⏳",
        title: "Start",
        text: "Start counting from 1."
      },
      {
        icon: "❓",
        title: "Check",
        text: "Check whether the count is still within the required limit."
      },
      {
        icon: "▶️",
        title: "Execute",
        text: "Print the current number."
      },
      {
        icon: "➕",
        title: "Update",
        text: "Increase the number and check the condition again."
      }
    ]
  },

  visual: {
    heading: "How a while Loop Works",

    description:
      "The condition is checked before the code is executed.",

    steps: [
      {
        icon: "1️⃣",
        title: "Create a Starting Value",
        text: "Create a variable before the loop."
      },
      {
        icon: "2️⃣",
        title: "Check the Condition",
        text: "JavaScript checks whether the condition is true."
      },
      {
        icon: "3️⃣",
        title: "Execute the Code",
        text: "If the condition is true, the loop body runs."
      },
      {
        icon: "4️⃣",
        title: "Update the Value",
        text: "Change the variable so the loop can eventually stop."
      },
      {
        icon: "🔁",
        title: "Repeat",
        text: "The process continues until the condition becomes false."
      }
    ],

    flow:
      "Start → Check Condition → Execute → Update → Check Again → Stop"
  },

  code: {
    title: "Practical Example — Print Numbers",

    description:
      "Use a while loop to print numbers from 1 to 5.",

    language: "javascript",

    code: `let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

console.log("Loop Finished");`,

    output: `1
2
3
4
5
Loop Finished`,

    explanation:
      "The variable count starts at 1. The condition count <= 5 is checked before every iteration. The number is printed and count++ increases the value by 1. When count becomes 6, the condition becomes false and the loop stops."
  },

  interview: {
    question: "When does a while loop stop?",

    answer:
      "A while loop stops when its condition becomes false.",

    tip:
      "The condition is checked before every iteration."
  },

  tricky: {
    question: `let count = 10;

while (count < 5) {
  console.log(count);
}`,

    answer:
      "Nothing is printed because the condition 10 < 5 is false from the beginning. A while loop may execute zero times."
  },

  practice: {
    question:
      "Create a while loop that prints numbers from 1 to 10.",

    hint:
      "Start count at 1, continue while count <= 10, and increase count inside the loop."
  },

  challenge: {
    title: "Countdown Program",

    description:
      "Create a simple countdown using a while loop.",

    task:
      "Start with count = 5. Use a while loop to print 5, 4, 3, 2, 1 and finally print 'Start!'."
  }
},
"do-while": {
  concept: {
    heading: "do...while Loop",

    paragraphs: [
      "A do...while loop repeats a block of code while a condition is true.",
      "The main difference from a while loop is that the code runs first and the condition is checked afterward.",
      "Because the condition is checked after execution, a do...while loop always runs at least once.",
      "It is useful when an action must happen at least once, such as displaying a menu or asking the user for input."
    ],

    remember:
      "do...while: Execute first, then check the condition."
  },

  analogy: {
    heading: "Think About Showing a Menu",

    items: [
      {
        icon: "📋",
        title: "Show Menu",
        text: "The menu should appear at least once."
      },
      {
        icon: "❓",
        title: "Check Choice",
        text: "After showing the menu, check whether the user wants to continue."
      },
      {
        icon: "🔁",
        title: "Repeat",
        text: "If the condition is true, show the menu again."
      }
    ]
  },

  visual: {
    heading: "How do...while Works",

    description:
      "The code runs first. The condition is checked after the first execution.",

    steps: [
      {
        icon: "1️⃣",
        title: "Execute",
        text: "Run the code inside the do block."
      },
      {
        icon: "2️⃣",
        title: "Check Condition",
        text: "JavaScript checks the condition after execution."
      },
      {
        icon: "3️⃣",
        title: "Repeat",
        text: "If the condition is true, the loop runs again."
      },
      {
        icon: "🛑",
        title: "Stop",
        text: "If the condition is false, the loop ends."
      }
    ],

    flow:
      "Execute → Check Condition → Repeat or Stop"
  },

  code: {
    title: "Practical Example — Menu Display",

    description:
      "A do...while loop is useful when the code must execute at least once.",

    language: "javascript",

    code: `let choice = 1;

do {
  console.log("1. View Products");
  console.log("2. Exit");

  choice++;
} while (choice <= 2);

console.log("Menu Closed");`,

    output: `1. View Products
2. Exit
1. View Products
2. Exit
Menu Closed`,

    explanation:
      "The do block executes first and displays the menu. After that, JavaScript checks choice <= 2. Because the condition is true after the first iteration, the menu runs again. When the condition becomes false, the loop stops."
  },

  interview: {
    question: "What is the main difference between while and do...while?",

    answer:
      "A while loop checks the condition before execution, while a do...while loop executes the code first and checks the condition afterward.",

    tip:
      "while → Check First. do...while → Execute First."
  },

  tricky: {
    question: `let number = 10;

do {
  console.log(number);
} while (number < 5);`,

    answer:
      "The output is 10. Even though 10 < 5 is false, the do...while loop executes once before checking the condition."
  },

  practice: {
    question:
      "Create a do...while loop that prints numbers from 1 to 3.",

    hint:
      "Start number at 1, print it, and increase it after each iteration."
  },

  challenge: {
    title: "Menu Program",

    description:
      "Create a menu that is displayed at least once.",

    task:
      "Use a do...while loop to display '1. Start' and '2. Exit'. Continue displaying the menu while the choice is not 2."
  }
},
"for-loop": {
  concept: {
    heading: "for Loop",

    paragraphs: [
      "A for loop is used to repeat a block of code multiple times.",
      "It is especially useful when you know the starting point, stopping condition, and how the value should change.",
      "A for loop contains three main parts: initialization, condition, and update.",
      "The loop checks the condition before each iteration. If the condition is true, the code runs and the update takes place."
    ],

    remember:
      "for loop: Start → Check → Execute → Update → Repeat."
  },

  analogy: {
    heading: "Think About Counting",

    items: [
      {
        icon: "🔢",
        title: "Start",
        text: "Start counting from a specific number."
      },
      {
        icon: "✅",
        title: "Check",
        text: "Check whether the current number is within the required limit."
      },
      {
        icon: "▶️",
        title: "Execute",
        text: "Run the code for the current number."
      },
      {
        icon: "➕",
        title: "Update",
        text: "Increase or decrease the counter and repeat."
      }
    ]
  },

  visual: {
    heading: "How a for Loop Works",

    description:
      "The initialization, condition, and update are written together in the loop structure.",

    steps: [
      {
        icon: "1️⃣",
        title: "Initialization",
        text: "Set the starting value of the loop variable."
      },
      {
        icon: "2️⃣",
        title: "Condition",
        text: "Check whether the loop should continue."
      },
      {
        icon: "3️⃣",
        title: "Execute",
        text: "Run the code inside the loop."
      },
      {
        icon: "4️⃣",
        title: "Update",
        text: "Increase or decrease the loop variable."
      },
      {
        icon: "🔁",
        title: "Repeat",
        text: "Continue until the condition becomes false."
      }
    ],

    flow:
      "Initialization → Condition → Execute → Update → Repeat → Stop"
  },

  code: {
    title: "Practical Examples — for Loop",

    description:
      "The for loop is useful for counting, generating tables, and repeating tasks a specific number of times.",

    language: "javascript",

    code: `// Example 1: Print numbers

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Example 2: Print even numbers

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}


// Example 3: Multiplication table

let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}`,

    output: `1
2
3
4
5

2
4
6
8
10

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
...
5 x 10 = 50`,

    explanation:
      "In the first example, i starts at 1 and increases by 1 after every iteration. In the second example, i increases by 2, so only even numbers are printed. In the third example, the loop generates the multiplication table of 5."
  },

  interview: {
    question: "What are the three main parts of a for loop?",

    answer:
      "The three main parts are initialization, condition, and update.",

    tip:
      "Think: Where to start → When to stop → How to change."
  },

  tricky: {
    question: `for (let i = 1; i <= 3; i++) {
  console.log(i);
}`,

    answer:
      "The output is 1, 2, and 3. When i becomes 4, the condition 4 <= 3 is false, so the loop stops."
  },

  practice: {
    question:
      "Use a for loop to print numbers from 1 to 10.",

    hint:
      "Start i at 1, continue while i <= 10, and increase i by 1."
  },

  challenge: {
    title: "Multiplication Table",

    description:
      "Use a for loop to generate a multiplication table.",

    task:
      "Create a variable number = 7 and use a for loop to print its multiplication table from 1 to 10."
  }
},
"break-statement": {
  concept: {
    heading: "What is the break Statement?",
    paragraphs: [
      "The break statement is used to stop a loop immediately.",
      "When JavaScript reaches break, the loop ends and the program continues with the statement after the loop.",
      "break is useful when you have found the required result or when you want to stop processing further iterations."
    ],
    remember:
      "break = Stop the loop immediately."
  },

  analogy: {
    heading: "Think of break Like an Exit",
    items: [
      {
        icon: "🛑",
        title: "Stop",
        text: "The break statement tells JavaScript to stop the loop."
      },
      {
        icon: "🚪",
        title: "Exit",
        text: "Execution leaves the loop immediately."
      },
      {
        icon: "➡️",
        title: "Continue Program",
        text: "After the loop stops, JavaScript continues with the next statement."
      }
    ]
  },

  visual: {
    heading: "How break Works",
    description:
      "The loop continues normally until the break condition becomes true.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Loop",
        text: "The loop starts and executes its statements."
      },
      {
        icon: "2️⃣",
        title: "Check Condition",
        text: "JavaScript checks whether the break condition is true."
      },
      {
        icon: "3️⃣",
        title: "break",
        text: "If the condition is true, the loop stops immediately."
      },
      {
        icon: "4️⃣",
        title: "Exit Loop",
        text: "Execution continues after the loop."
      }
    ],
    flow:
      "Start Loop → Check Condition → break? → Yes → Exit Loop → Continue Program"
  },

  code: {
    title: "Practical Example — Stop a Loop",
    description:
      "Here, the loop prints numbers from 1 to 10. When the value becomes 5, break stops the loop.",
    language: "javascript",
    code: `for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

console.log("Loop Ended");`,
    output: `1
2
3
4
Loop Ended`,
    explanation:
      "The loop starts from 1. When i becomes 5, the condition i === 5 becomes true. The break statement immediately stops the loop, so 5 to 10 are not printed. The program then executes the statement after the loop."
  },

  interview: {
    question: "What does the break statement do in JavaScript?",
    answer:
      "The break statement immediately terminates the loop or switch statement in which it is used.",
    tip:
      "Remember: break stops the complete loop."
  },

  tricky: {
    question:
      "What will be printed when break is executed at i === 3?",
    answer:
      "Only the values before 3 will be printed because break stops the loop immediately."
  },

  practice: {
    question:
      "Write a for loop from 1 to 20 and stop the loop when the number becomes 8.",
    hint:
      "Use if (i === 8) followed by break."
  },

  challenge: {
    title: "Find the Stop Point",
    description:
      "Practice stopping a loop when a specific condition becomes true.",
    task:
      "Create a loop from 1 to 50. Print each number and stop the loop when the number reaches 15."
  }
},
"continue-statement": {
  concept: {
    heading: "What is the continue Statement?",
    paragraphs: [
      "The continue statement is used to skip the current iteration of a loop.",
      "Unlike break, continue does not stop the entire loop. It skips the remaining statements for the current iteration and moves to the next iteration.",
      "continue is useful when you want to ignore specific values or conditions while continuing the loop."
    ],
    remember:
      "continue = Skip the current iteration and move to the next one."
  },

  analogy: {
    heading: "Think of continue Like Skip",
    items: [
      {
        icon: "⏭️",
        title: "Skip",
        text: "The continue statement skips the current iteration."
      },
      {
        icon: "🔄",
        title: "Next Iteration",
        text: "The loop does not stop. It moves to the next iteration."
      },
      {
        icon: "▶️",
        title: "Keep Running",
        text: "The remaining loop iterations continue normally."
      }
    ]
  },

  visual: {
    heading: "How continue Works",
    description:
      "The loop skips only the current iteration and then continues with the next iteration.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Loop",
        text: "The loop starts and executes its statements."
      },
      {
        icon: "2️⃣",
        title: "Check Condition",
        text: "JavaScript checks whether the continue condition is true."
      },
      {
        icon: "3️⃣",
        title: "continue",
        text: "If true, the remaining code for that iteration is skipped."
      },
      {
        icon: "4️⃣",
        title: "Next Iteration",
        text: "The loop moves to the next iteration."
      }
    ],
    flow:
      "Start Loop → Check Condition → continue? → Yes → Skip Current Iteration → Next Iteration"
  },

  code: {
    title: "Practical Example — Skip a Number",
    description:
      "Here, the loop prints numbers from 1 to 5. When the value becomes 3, continue skips that iteration.",
    language: "javascript",
    code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

console.log("Loop Ended");`,
    output: `1
2
4
5
Loop Ended`,
    explanation:
      "When i becomes 3, the continue statement skips console.log(i) for that iteration. The loop then moves to the next value, 4. Unlike break, continue does not stop the loop."
  },

  interview: {
    question: "What is the difference between break and continue?",
    answer:
      "break completely stops the loop, while continue skips only the current iteration and allows the loop to continue.",
    tip:
      "Remember: break = stop, continue = skip."
  },

  tricky: {
    question:
      "If continue is executed when i is 3, does the loop stop?",
    answer:
      "No. Only the current iteration is skipped. The loop continues with the next iteration."
  },

  practice: {
    question:
      "Write a loop from 1 to 10 and skip the number 5 using continue.",
    hint:
      "Use if (i === 5) followed by continue."
  },

  challenge: {
    title: "Skip Even Numbers",
    description:
      "Practice using continue to skip values that match a condition.",
    task:
      "Create a loop from 1 to 10. Use continue to skip even numbers and print only odd numbers."
  }
},
"function-basics": {
  concept: {
    heading: "What is a Function?",
    paragraphs: [
      "A function is a reusable block of code designed to perform a specific task.",
      "Instead of writing the same code again and again, you can write it once inside a function and execute it whenever you need it.",
      "A function can perform an action, calculate a value, display information, or handle a specific part of a program."
    ],
    remember:
      "Function = Write code once, reuse it whenever needed."
  },

  analogy: {
    heading: "Think of a Function Like a Machine",
    items: [
      {
        icon: "⚙️",
        title: "Create",
        text: "You create a function with instructions for a particular task."
      },
      {
        icon: "▶️",
        title: "Call",
        text: "You call the function whenever you want those instructions to run."
      },
      {
        icon: "♻️",
        title: "Reuse",
        text: "The same function can be called multiple times."
      }
    ]
  },

  visual: {
    heading: "How a Function Works",
    description:
      "A function separates a task into a reusable block of code.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "Write the instructions inside a function."
      },
      {
        icon: "2️⃣",
        title: "Give It a Name",
        text: "Use a meaningful name so the function can be identified."
      },
      {
        icon: "3️⃣",
        title: "Call Function",
        text: "Use the function name followed by parentheses to execute it."
      },
      {
        icon: "4️⃣",
        title: "Execute Code",
        text: "JavaScript runs the statements inside the function."
      }
    ],
    flow:
      "Create Function → Give Name → Call Function → Execute Code"
  },

  code: {
    title: "Practical Example — Creating and Calling a Function",
    description:
      "This example creates a function that displays a welcome message and calls it multiple times.",
    language: "javascript",
    code: `function showWelcome() {
  console.log("Welcome to JavaScript!");
}

showWelcome();
showWelcome();`,
    output: `Welcome to JavaScript!
Welcome to JavaScript!`,
    explanation:
      "The function showWelcome contains one console.log statement. The function does not execute when it is created. It executes when we call showWelcome(). Since the function is called twice, the message is printed twice."
  },

  interview: {
    question: "What is a function in JavaScript?",
    answer:
      "A function is a reusable block of code designed to perform a specific task. It executes when it is called.",
    tip:
      "Remember: Function creation defines the task, while function calling executes the task."
  },

  tricky: {
    question:
      "Will the code inside a function execute automatically when the function is created?",
    answer:
      "No. A normal function runs when it is called."
  },

  practice: {
    question:
      "Create a function named showMessage() that prints 'Learning JavaScript'. Then call the function two times.",
    hint:
      "Use function showMessage() { } and call it using showMessage()."
  },

  challenge: {
    title: "Create Your First Reusable Function",
    description:
      "Practice creating a function and reusing it multiple times.",
    task:
      "Create a function named startCourse() that prints 'JavaScript Course Started'. Call the function three times."
  }
},
"function-declaration": {
  concept: {
    heading: "What is a Function Declaration?",
    paragraphs: [
      "A function declaration is a way to create a named function using the function keyword.",
      "A function declaration has a function name followed by parentheses and a block of code inside curly braces.",
      "The code inside the function runs when the function is called.",
      "Function declarations are useful when you want to create reusable tasks with clear and meaningful names."
    ],
    remember:
      "Function Declaration = function keyword + function name + parentheses + code block."
  },

  analogy: {
    heading: "Think of a Function Declaration Like a Recipe",
    items: [
      {
        icon: "📋",
        title: "Write the Recipe",
        text: "The function declaration contains the instructions for a task."
      },
      {
        icon: "🏷️",
        title: "Give It a Name",
        text: "The function gets a meaningful name that identifies the task."
      },
      {
        icon: "▶️",
        title: "Use the Recipe",
        text: "Calling the function executes the instructions."
      }
    ]
  },

  visual: {
    heading: "Structure of a Function Declaration",
    description:
      "A function declaration follows a simple and readable structure.",
    steps: [
      {
        icon: "1️⃣",
        title: "function Keyword",
        text: "The function keyword tells JavaScript that you are declaring a function."
      },
      {
        icon: "2️⃣",
        title: "Function Name",
        text: "The name identifies the function and should describe what it does."
      },
      {
        icon: "3️⃣",
        title: "Parentheses ()",
        text: "Parentheses are used after the function name. Parameters can be added here later."
      },
      {
        icon: "4️⃣",
        title: "Code Block {}",
        text: "The curly braces contain the statements that the function will execute."
      }
    ],
    flow:
      "function → Function Name → () → { Code Block } → Call Function"
  },

  code: {
    title: "Practical Example — Function Declaration",
    description:
      "This example declares a function that calculates the total price of two products.",
    language: "javascript",
    code: `function calculateTotal() {
  let price1 = 500;
  let price2 = 300;

  let total = price1 + price2;

  console.log("Total Price:", total);
}

calculateTotal();`,
    output: `Total Price: 800`,
    explanation:
      "The function calculateTotal is declared using the function keyword. Inside the function, two prices are added and the result is displayed. The function is executed when calculateTotal() is called."
  },

  interview: {
    question: "How do you declare a function in JavaScript?",
    answer:
      "A function can be declared using the function keyword followed by a function name, parentheses, and a code block.",
    tip:
      "Basic syntax: function functionName() { }"
  },

  tricky: {
    question:
      "What happens if a function declaration is created but never called?",
    answer:
      "The function is defined, but its code does not execute simply because it was declared. It needs to be called to run."
  },

  practice: {
    question:
      "Create a function named calculateSquare() that calculates the square of 5 and prints the result.",
    hint:
      "Create a function, calculate 5 * 5 inside it, and then call the function."
  },

  challenge: {
    title: "Create a Calculation Function",
    description:
      "Practice declaring and calling a function that performs a useful calculation.",
    task:
      "Create a function named calculateBill() that adds a product price of 750 and a delivery charge of 50. Print the final bill amount and call the function."
  }
},"parameters-arguments": {
  concept: {
    heading: "What are Parameters and Arguments?",
    paragraphs: [
      "Parameters are variables written inside the parentheses of a function declaration. They act as placeholders for the values that the function will receive.",
      "Arguments are the actual values passed to a function when the function is called.",
      "Parameters make functions flexible because the same function can work with different values.",
      "A function can have one parameter, multiple parameters, or no parameters."
    ],
    remember:
      "Parameter = Placeholder inside function. Argument = Actual value passed when calling the function."
  },

  analogy: {
    heading: "Think of Parameters Like Input Boxes",
    items: [
      {
        icon: "📦",
        title: "Parameter",
        text: "A parameter is like an empty input box waiting for a value."
      },
      {
        icon: "📥",
        title: "Argument",
        text: "An argument is the actual value placed into that input box."
      },
      {
        icon: "⚙️",
        title: "Process",
        text: "The function uses the received values to perform its task."
      }
    ]
  },

  visual: {
    heading: "How Parameters and Arguments Work",
    description:
      "Values are passed from the function call into the parameters.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Parameter",
        text: "Define a parameter inside the function parentheses."
      },
      {
        icon: "2️⃣",
        title: "Pass Argument",
        text: "Provide an actual value when calling the function."
      },
      {
        icon: "3️⃣",
        title: "Receive Value",
        text: "The parameter receives the argument value."
      },
      {
        icon: "4️⃣",
        title: "Use the Value",
        text: "The function uses that value to perform its task."
      }
    ],
    flow:
      "Parameter → Argument → Value Received → Function Executes"
  },

  code: {
    title: "Practical Example — Passing Values to a Function",
    description:
      "This function accepts a product price and quantity and calculates the total amount.",
    language: "javascript",
    code: `function calculateTotal(price, quantity) {
  let total = price * quantity;

  console.log("Price:", price);
  console.log("Quantity:", quantity);
  console.log("Total:", total);
}

calculateTotal(500, 3);
calculateTotal(800, 2);`,
    output: `Price: 500
Quantity: 3
Total: 1500
Price: 800
Quantity: 2
Total: 1600`,
    explanation:
      "price and quantity are parameters because they are written in the function declaration. The values 500 and 3 are arguments in the first function call. The values 800 and 2 are arguments in the second call. The same function can therefore be reused with different values."
  },

  interview: {
    question: "What is the difference between a parameter and an argument?",
    answer:
      "A parameter is a variable defined in the function declaration, while an argument is the actual value passed to the function when it is called.",
    tip:
      "Parameter = definition. Argument = function call."
  },

  tricky: {
    question:
      "Can the same function be called with different arguments?",
    answer:
      "Yes. A function can be called multiple times with different argument values."
  },

  practice: {
    question:
      "Create a function named calculateArea(length, width) that calculates and prints the area of a rectangle.",
    hint:
      "Use area = length * width and call the function with different values."
  },

  challenge: {
    title: "Create a Flexible Bill Calculator",
    description:
      "Practice using multiple parameters to create a reusable function.",
    task:
      "Create a function named calculateBill(price, quantity, discount). Calculate the total price, subtract the discount, and print the final amount."
  }
},

"return": {
  concept: {
    heading: "What is the return Statement?",
    paragraphs: [
      "The return statement is used to send a value from a function back to the place where the function was called.",
      "A function can calculate something and return the result instead of directly printing it.",
      "The returned value can be stored in a variable, used in a calculation, or passed to another function.",
      "When JavaScript reaches a return statement, the function stops executing and sends the specified value back."
    ],
    remember:
      "return = Send a value back from a function."
  },

  analogy: {
    heading: "Think of return Like Getting a Result",
    items: [
      {
        icon: "📤",
        title: "Send Result",
        text: "The function sends its result back using return."
      },
      {
        icon: "🎯",
        title: "Receive Result",
        text: "The calling code receives the returned value."
      },
      {
        icon: "♻️",
        title: "Reuse Result",
        text: "The returned value can be stored or used in another calculation."
      }
    ]
  },

  visual: {
    heading: "How return Works",
    description:
      "A function performs a task and sends the result back to the caller.",
    steps: [
      {
        icon: "1️⃣",
        title: "Call Function",
        text: "The function is called with the required values."
      },
      {
        icon: "2️⃣",
        title: "Perform Task",
        text: "The function performs its calculation or operation."
      },
      {
        icon: "3️⃣",
        title: "return Result",
        text: "The return statement sends the result back."
      },
      {
        icon: "4️⃣",
        title: "Use Result",
        text: "The returned value can be stored or used elsewhere."
      }
    ],
    flow:
      "Call Function → Perform Task → return Result → Use Result"
  },

  code: {
    title: "Practical Example — Returning a Calculation",
    description:
      "This function calculates a total and returns the result to the calling code.",
    language: "javascript",
    code: `function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(500, 3);

console.log("Total:", total);

let finalAmount = total + 100;

console.log("Final Amount:", finalAmount);`,
    output: `Total: 1500
Final Amount: 1600`,
    explanation:
      "The calculateTotal function calculates price multiplied by quantity and returns the result. The returned value is stored in total. Because the result is stored in a variable, it can be used later to calculate the final amount."
  },

  interview: {
    question: "What does the return statement do?",
    answer:
      "The return statement sends a value back from a function and immediately stops the execution of that function.",
    tip:
      "return gives a result back to the caller."
  },

  tricky: {
    question:
      "What happens to the code written after a return statement inside the same function?",
    answer:
      "It will not execute because return immediately ends the function."
  },

  practice: {
    question:
      "Create a function named calculateSquare(number) that returns the square of a number.",
    hint:
      "Use return number * number."
  },

  challenge: {
    title: "Create a Reusable Calculator",
    description:
      "Practice returning values from a function.",
    task:
      "Create a function named calculatePercentage(marks, totalMarks) that returns the percentage. Store the returned value in a variable and print it."
  }
},
"function-expression": {
  concept: {
    heading: "What is a Function Expression?",
    paragraphs: [
      "A function expression is a function that is created and assigned to a variable.",
      "Instead of declaring a function with a function name directly, we store the function inside a variable.",
      "The variable can then be used to call the function.",
      "Function expressions are commonly used when functions need to be stored, passed around, or assigned dynamically."
    ],
    remember:
      "Function Expression = Store a function inside a variable."
  },

  analogy: {
    heading: "Think of a Function Expression Like Saving a Tool",
    items: [
      {
        icon: "🧰",
        title: "Create Tool",
        text: "Create a function that performs a specific task."
      },
      {
        icon: "📦",
        title: "Store Tool",
        text: "Store the function inside a variable."
      },
      {
        icon: "▶️",
        title: "Use Tool",
        text: "Call the variable like a function to execute it."
      }
    ]
  },

  visual: {
    heading: "How a Function Expression Works",
    description:
      "The function is assigned to a variable and then called using that variable.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "Write the function expression."
      },
      {
        icon: "2️⃣",
        title: "Assign to Variable",
        text: "Store the function inside a variable."
      },
      {
        icon: "3️⃣",
        title: "Call Variable",
        text: "Use the variable followed by parentheses."
      },
      {
        icon: "4️⃣",
        title: "Execute Function",
        text: "JavaScript executes the function code."
      }
    ],
    flow:
      "Create Function → Store in Variable → Call Variable → Execute"
  },

  code: {
    title: "Practical Example — Function Expression",
    description:
      "This example stores a calculation function inside the calculateTotal variable.",
    language: "javascript",
    code: `const calculateTotal = function(price, quantity) {
  return price * quantity;
};

let total = calculateTotal(500, 3);

console.log("Total:", total);`,
    output: `Total: 1500`,
    explanation:
      "The anonymous function is assigned to the calculateTotal variable. The function accepts price and quantity and returns their product. The function is called using calculateTotal()."
  },

  interview: {
    question: "What is a function expression?",
    answer:
      "A function expression is a function that is assigned to a variable.",
    tip:
      "Function declaration creates a named function directly. Function expression stores a function in a variable."
  },

  tricky: {
    question:
      "Can a function expression be called before it is assigned to a variable?",
    answer:
      "No. A function expression assigned to a let or const variable cannot be used before its initialization."
  },

  practice: {
    question:
      "Create a function expression named calculateDouble that accepts a number and returns double its value.",
    hint:
      "Store an anonymous function in a const variable."
  },

  challenge: {
    title: "Create a Discount Calculator",
    description:
      "Practice storing a reusable calculation function inside a variable.",
    task:
      "Create a function expression named calculateDiscount that accepts price and discount percentage and returns the discounted price."
  }
},
"arrow-functions": {
  concept: {
    heading: "What is an Arrow Function?",
    paragraphs: [
      "An arrow function is a shorter way to write a function expression.",
      "Arrow functions were introduced in ES6 and are widely used in modern JavaScript.",
      "They use the arrow symbol => instead of the traditional function keyword.",
      "Arrow functions are especially common in modern JavaScript, React, and array methods."
    ],
    remember:
      "Arrow Function = Shorter function syntax using =>."
  },

  analogy: {
    heading: "Think of Arrow Functions as a Short Version",
    items: [
      {
        icon: "✂️",
        title: "Shorter Syntax",
        text: "Arrow functions allow you to write functions with less code."
      },
      {
        icon: "➡️",
        title: "Arrow Symbol",
        text: "The => symbol separates parameters from the function body."
      },
      {
        icon: "⚡",
        title: "Modern JavaScript",
        text: "Arrow functions are widely used in modern JavaScript applications."
      }
    ]
  },

  visual: {
    heading: "How an Arrow Function Works",
    description:
      "An arrow function uses parameters, the arrow symbol, and the function body.",
    steps: [
      {
        icon: "1️⃣",
        title: "Parameters",
        text: "Write parameters inside parentheses."
      },
      {
        icon: "2️⃣",
        title: "Arrow =>",
        text: "Use the arrow symbol after the parameters."
      },
      {
        icon: "3️⃣",
        title: "Function Body",
        text: "Write the code that the function should execute."
      },
      {
        icon: "4️⃣",
        title: "Call Function",
        text: "Call the function using its variable name."
      }
    ],
    flow:
      "Parameters → => → Function Body → Call Function"
  },

  code: {
    title: "Practical Example — Arrow Function",
    description:
      "This example creates an arrow function that calculates the total price.",
    language: "javascript",
    code: `const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let total = calculateTotal(500, 3);

console.log("Total:", total);`,
    output: `Total: 1500`,
    explanation:
      "The function is stored in the calculateTotal variable. The parameters price and quantity are written inside parentheses. The arrow => connects the parameters with the function body. The function returns the total price."
  },

  interview: {
    question: "What is an arrow function?",
    answer:
      "An arrow function is a shorter syntax for writing a function expression. It uses the => symbol.",
    tip:
      "Arrow functions were introduced in ES6."
  },

  tricky: {
    question:
      "Which symbol is used in an arrow function?",
    answer:
      "The arrow function uses the => symbol."
  },

  practice: {
    question:
      "Create an arrow function named calculateSquare that accepts a number and returns its square.",
    hint:
      "Use const calculateSquare = (number) => { return number * number; }"
  },

  challenge: {
    title: "Create a Simple Tax Calculator",
    description:
      "Practice creating an arrow function that returns a calculated value.",
    task:
      "Create an arrow function named calculateTax that accepts an amount and returns 18% of that amount. Call it with an amount of 1000 and print the result."
  }
},
"global-scope": {
  concept: {
    heading: "What is Global Scope?",
    paragraphs: [
      "A variable declared outside all functions and blocks is in the global scope.",
      "A globally scoped variable can generally be accessed from different parts of the program.",
      "Global variables can be useful when a value needs to be shared across different parts of an application.",
      "However, using too many global variables can make programs harder to manage because many parts of the program can access or change them."
    ],
    remember:
      "Global Scope = A variable declared outside functions and blocks can be accessed from many parts of the program."
  },

  analogy: {
    heading: "Think of Global Scope Like a Common Notice Board",
    items: [
      {
        icon: "📋",
        title: "Common Place",
        text: "A value is available in a common area outside individual functions or blocks."
      },
      {
        icon: "👀",
        title: "Access",
        text: "Different parts of the program can access the value."
      },
      {
        icon: "⚠️",
        title: "Use Carefully",
        text: "Too many global variables can make code difficult to manage."
      }
    ]
  },

  visual: {
    heading: "How Global Scope Works",
    description:
      "A variable declared outside a function can be accessed inside that function.",
    steps: [
      {
        icon: "1️⃣",
        title: "Declare Variable",
        text: "Create a variable outside all functions and blocks."
      },
      {
        icon: "2️⃣",
        title: "Global Access",
        text: "The variable is available to other parts of the program."
      },
      {
        icon: "3️⃣",
        title: "Use Inside Function",
        text: "A function can access the global variable."
      },
      {
        icon: "4️⃣",
        title: "Use Carefully",
        text: "Avoid unnecessary global variables in large applications."
      }
    ],
    flow:
      "Declare Outside → Global Scope → Access from Different Parts"
  },

  code: {
    title: "Practical Example — Global Variable",
    description:
      "The courseName variable is declared outside the function, so the function can access it.",
    language: "javascript",
    code: `let courseName = "JavaScript";

function showCourse() {
  console.log("Course:", courseName);
}

showCourse();

console.log("Available:", courseName);`,
    output: `Course: JavaScript
Available: JavaScript`,
    explanation:
      "The courseName variable is declared outside the function, so it has global scope in this example. The showCourse function can access it, and the code outside the function can also access it."
  },

  interview: {
    question: "What is global scope in JavaScript?",
    answer:
      "Global scope refers to variables that are declared outside functions and blocks and can be accessed from multiple parts of the program.",
    tip:
      "Global variable = declared outside the function or block."
  },

  tricky: {
    question:
      "Can a function access a variable declared outside the function?",
    answer:
      "Yes. A function can access a variable from an outer scope when that variable is available to it."
  },

  practice: {
    question:
      "Create a global variable called websiteName and access it inside a function named showWebsite().",
    hint:
      "Declare websiteName outside the function."
  },

  challenge: {
    title: "Create a Global Setting",
    description:
      "Practice creating and accessing a global variable.",
    task:
      "Create a global variable called taxRate with a value of 18. Create a function named showTaxRate() that prints the tax rate."
  }
},
"function-scope": {
  concept: {
    heading: "What is Function Scope?",
    paragraphs: [
      "Function scope means that a variable is available only inside the function where it is declared.",
      "Variables declared with var inside a function are function-scoped.",
      "A variable with function scope cannot be directly accessed from outside that function.",
      "Function scope helps keep variables private to a particular function and prevents them from being accessed unnecessarily by other parts of the program."
    ],
    remember:
      "Function Scope = Variable is accessible inside the function where it is declared."
  },

  analogy: {
    heading: "Think of Function Scope Like a Private Room",
    items: [
      {
        icon: "🚪",
        title: "Inside the Room",
        text: "Variables declared inside a function can be used inside that function."
      },
      {
        icon: "🔒",
        title: "Private",
        text: "Code outside the function cannot directly access the function-scoped variable."
      },
      {
        icon: "🏠",
        title: "Separate Area",
        text: "Each function can have its own local variables."
      }
    ]
  },

  visual: {
    heading: "How Function Scope Works",
    description:
      "A variable declared inside a function belongs to that function.",
    steps: [
      {
        icon: "1️⃣",
        title: "Enter Function",
        text: "JavaScript starts executing the function."
      },
      {
        icon: "2️⃣",
        title: "Create Variable",
        text: "A variable is declared inside the function."
      },
      {
        icon: "3️⃣",
        title: "Use Inside",
        text: "The variable can be used within that function."
      },
      {
        icon: "4️⃣",
        title: "Outside Access",
        text: "Code outside the function cannot directly access the variable."
      }
    ],
    flow:
      "Function Starts → Variable Created → Use Inside Function → Outside Cannot Directly Access"
  },

  code: {
    title: "Practical Example — Function Scoped Variable",
    description:
      "The message variable is created inside the function and is available only inside that function.",
    language: "javascript",
    code: `function showMessage() {
  let message = "Learning JavaScript";

  console.log(message);
}

showMessage();`,
    output: `Learning JavaScript`,
    explanation:
      "The message variable is declared inside showMessage(). Therefore, it belongs to the function's local scope and can be used inside the function."
  },

  interview: {
    question: "What is function scope?",
    answer:
      "Function scope means that a variable declared inside a function is accessible within that function.",
    tip:
      "Think: inside function = function scope."
  },

  tricky: {
    question:
      "Can code outside a function directly access a variable declared inside that function?",
    answer:
      "No. A variable declared inside the function is not directly accessible from outside that function."
  },

  practice: {
    question:
      "Create a function named calculateTotal() and declare a variable total inside it. Print total inside the function.",
    hint:
      "Declare the variable inside the function."
  },

  challenge: {
    title: "Create a Private Calculation",
    description:
      "Practice keeping a variable inside a function.",
    task:
      "Create a function named calculatePrice() with a local variable price = 1000. Print the price inside the function and call the function."
  }
},
"block-scope": {
  concept: {
    heading: "What is Block Scope?",
    paragraphs: [
      "A block is a section of code surrounded by curly braces { }.",
      "Variables declared with let and const are block-scoped.",
      "This means they can be accessed only inside the block where they are declared.",
      "Blocks are commonly created by if statements, loops, functions and other JavaScript structures."
    ],
    remember:
      "Block Scope = let and const are accessible only inside the block where they are declared."
  },

  analogy: {
    heading: "Think of Block Scope Like a Restricted Area",
    items: [
      {
        icon: "🚧",
        title: "Restricted Area",
        text: "A variable declared inside a block stays within that block."
      },
      {
        icon: "🔐",
        title: "let and const",
        text: "Variables created with let and const follow block scope."
      },
      {
        icon: "➡️",
        title: "Outside the Block",
        text: "The variable cannot be directly accessed outside its block."
      }
    ]
  },

  visual: {
    heading: "How Block Scope Works",
    description:
      "A variable declared using let or const inside curly braces belongs to that block.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Block",
        text: "A block is created using curly braces."
      },
      {
        icon: "2️⃣",
        title: "Declare Variable",
        text: "Declare a let or const variable inside the block."
      },
      {
        icon: "3️⃣",
        title: "Access Inside",
        text: "The variable can be used inside that block."
      },
      {
        icon: "4️⃣",
        title: "Block Ends",
        text: "After the block ends, the variable cannot be directly accessed."
      }
    ],
    flow:
      "Create Block → Declare let/const → Use Inside → Block Ends → Outside Access Not Allowed"
  },

  code: {
    title: "Practical Example — Block Scope with let",
    description:
      "The discount variable is available inside the if block but not outside it.",
    language: "javascript",
    code: `let price = 1000;

if (price >= 500) {
  let discount = 100;

  console.log("Discount:", discount);
}

console.log("Price:", price);`,
    output: `Discount: 100
Price: 1000`,
    explanation:
      "The discount variable is declared with let inside the if block. Therefore, it is accessible inside that block only. The price variable is declared outside the block, so it can be accessed after the block as well."
  },

  interview: {
    question: "What is block scope in JavaScript?",
    answer:
      "Block scope means that variables declared with let and const inside a block are accessible only within that block.",
    tip:
      "let and const = block scoped."
  },

  tricky: {
    question:
      "Which variables are block-scoped: var, let or const?",
    answer:
      "let and const are block-scoped. var is function-scoped."
  },

  practice: {
    question:
      "Create an if block and declare a const variable called message inside it. Print the message inside the block.",
    hint:
      "Use const inside the curly braces of an if statement."
  },

  challenge: {
    title: "Understand Block Boundaries",
    description:
      "Practice identifying which variables are available inside and outside a block.",
    task:
      "Create an if statement with a const variable called status inside it. Print status inside the block and explain why it cannot be directly accessed outside the block."
  }
},
"scope-comparison": {
  concept: {
    heading: "Global vs Function vs Block Scope",
    paragraphs: [
      "JavaScript uses scope to control where a variable can be accessed.",
      "Global scope is available outside functions and blocks. Function scope belongs to a function. Block scope belongs to a block created with curly braces.",
      "The biggest difference is the area in which the variable is accessible.",
      "Understanding scope is important because it prevents accidental access or modification of variables."
    ],
    remember:
      "Global = wider access | Function = inside function | Block = inside block"
  },

  analogy: {
    heading: "Think of Scope as Different Access Areas",
    items: [
      {
        icon: "🌍",
        title: "Global Scope",
        text: "Like a public area that can be accessed from different parts of the program."
      },
      {
        icon: "🏠",
        title: "Function Scope",
        text: "Like a private room where variables belong to a particular function."
      },
      {
        icon: "🚪",
        title: "Block Scope",
        text: "Like a smaller restricted area inside a block."
      }
    ]
  },

  visual: {
    heading: "Scope Hierarchy",
    description:
      "A smaller scope can usually access variables from an outer scope, but an outer scope cannot directly access variables created inside a smaller scope.",
    steps: [
      {
        icon: "1️⃣",
        title: "Global",
        text: "Declared outside functions and blocks."
      },
      {
        icon: "2️⃣",
        title: "Function",
        text: "Created inside a function and accessible within that function."
      },
      {
        icon: "3️⃣",
        title: "Block",
        text: "Created inside a block using let or const."
      },
      {
        icon: "4️⃣",
        title: "Access Rule",
        text: "Inner code can access suitable outer variables, but outer code cannot directly access inner variables."
      }
    ],
    flow:
      "Global Scope → Function Scope → Block Scope"
  },

  code: {
    title: "Practical Example — Comparing All Three Scopes",
    description:
      "This example shows where global, function-scoped and block-scoped variables can be accessed.",
    language: "javascript",
    code: `let globalValue = "Global";

function showScope() {
  var functionValue = "Function";

  console.log(globalValue);
  console.log(functionValue);

  if (true) {
    let blockValue = "Block";

    console.log(globalValue);
    console.log(functionValue);
    console.log(blockValue);
  }
}

showScope();

console.log(globalValue);`,
    output: `Global
Function
Global
Function
Block
Global`,
    explanation:
      "globalValue is declared outside the function, so it has global scope and can be accessed from different parts of the program. functionValue is declared inside showScope(), so it belongs to the function. blockValue is declared with let inside the if block, so it belongs only to that block. The global variable can be accessed inside the function and block, while the function and block variables cannot be directly accessed from outside their respective scopes."
  },

  interview: {
    question: "What is the main difference between global, function and block scope?",
    answer:
      "Global scope allows access from different parts of the program, function scope limits a variable to a function, and block scope limits let and const variables to a block.",
    tip:
      "Remember the access area: Global → Function → Block."
  },

  tricky: {
    question:
      "Can a block inside a function access a variable declared in the function?",
    answer:
      "Yes. A block can access variables from its outer function scope when they are available there."
  },

  practice: {
    question:
      "Create one global variable, one variable inside a function, and one let variable inside an if block. Identify where each variable can be accessed.",
    hint:
      "Check each variable from inside and outside its scope."
  },

  challenge: {
    title: "Scope Detective",
    description:
      "Test your understanding of JavaScript variable accessibility.",
    task:
      "Create a program containing one global variable, one function variable and one block variable. Add console.log() statements and identify which statements can access each variable and which would cause an error."
  }
},
"string-basics": {
  concept: {
    heading: "What is a String?",
    paragraphs: [
      "A string is a data type used to store text in JavaScript.",
      "A string can contain letters, numbers, spaces, symbols, and other characters.",
      "Strings can be written using single quotes (' '), double quotes (\" \"), or backticks (` `).",
      "When a number is written inside quotes, JavaScript treats it as text, not as a number.",
      "Strings are used in many real-world situations, such as storing product names, messages, email addresses, descriptions, and user input."
    ],
    remember:
      "String = Text data enclosed inside quotes."
  },

  analogy: {
    heading: "Think of a String Like a Text Box",
    items: [
      {
        icon: "📝",
        title: "Store Text",
        text: "A string stores text such as a product name, message, or description."
      },
      {
        icon: "🔤",
        title: "Contains Characters",
        text: "A string can contain letters, numbers, spaces, and symbols."
      },
      {
        icon: "📦",
        title: "One Value",
        text: "The complete text inside the quotes is treated as one string value."
      }
    ]
  },

  visual: {
    heading: "How a String is Created",
    description:
      "JavaScript identifies text as a string when it is enclosed inside quotes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Write Text",
        text: "Start with the text that you want to store."
      },
      {
        icon: "2️⃣",
        title: "Add Quotes",
        text: "Place the text inside single quotes, double quotes, or backticks."
      },
      {
        icon: "3️⃣",
        title: "Store the Value",
        text: "Assign the string to a variable."
      },
      {
        icon: "4️⃣",
        title: "Use the String",
        text: "The variable can now be displayed, combined, searched, or processed."
      }
    ],
    flow:
      "Text → Quotes → String Value → Variable → Use the String"
  },

  code: {
    title: "Practical Example — Creating Strings",
    description:
      "JavaScript allows strings to be created using single quotes, double quotes, or backticks.",
    language: "javascript",
    code: `let product = "Laptop";
let category = 'Electronics';
let message = \`Product is available\`;

console.log(product);
console.log(category);
console.log(message);

console.log(typeof product);`,
    output: `Laptop
Electronics
Product is available
string`,
    explanation:
      "The variables product, category, and message contain text values. Single quotes, double quotes, and backticks can all be used to create strings. The typeof operator confirms that product is a string."
  },

  interview: {
    question: "What is a string in JavaScript?",
    answer:
      "A string is a data type used to store and work with text. Strings are commonly written inside single quotes, double quotes, or backticks.",
    tip:
      "Remember: text inside quotes is treated as a string."
  },

  tricky: {
    question: "Is 100 a string or a number?",
    answer:
      "100 is a number, but \"100\" is a string because it is written inside quotes."
  },

  practice: {
    question:
      "Create three variables containing a product name, category, and description. Use different types of quotes for each string.",
    hint:
      "Use single quotes, double quotes, and backticks."
  },

  challenge: {
    title: "Create Product Information",
    description:
      "Practice creating and displaying different string values.",
    task:
      "Create variables for a product name, category, and description. Display all three values using console.log() and check the data type of one variable using typeof."
  }
},"string-indexing": {
  concept: {
    heading: "What is String Indexing?",
    paragraphs: [
      "String indexing means accessing an individual character from a string using its position.",
      "In JavaScript, string indexes start from 0, not 1.",
      "The first character is at index 0, the second character is at index 1, and each next character gets the next index number.",
      "You can access a character using square brackets [] with the index number."
    ],
    remember:
      "String indexing starts from 0. Use string[index] to access a character."
  },

  analogy: {
    heading: "Think of a String Like Numbered Boxes",
    items: [
      {
        icon: "📦",
        title: "Each Character Has a Position",
        text: "Every character in a string has a position called an index."
      },
      {
        icon: "0️⃣",
        title: "Starts From Zero",
        text: "The first character always starts at index 0."
      },
      {
        icon: "🔍",
        title: "Access a Character",
        text: "Use square brackets with the index number to access a specific character."
      }
    ]
  },

  visual: {
    heading: "How String Indexing Works",
    description:
      "JavaScript assigns an index number to every character in a string.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create a String",
        text: "Start with a string containing some characters."
      },
      {
        icon: "2️⃣",
        title: "Start From 0",
        text: "JavaScript assigns index 0 to the first character."
      },
      {
        icon: "3️⃣",
        title: "Move Forward",
        text: "Each next character gets the next index number."
      },
      {
        icon: "4️⃣",
        title: "Access Character",
        text: "Use string[index] to access a specific character."
      }
    ],
    flow:
      "String → Character Positions → Index 0, 1, 2... → string[index] → Character"
  },

  code: {
    title: "Practical Example — Accessing Characters",
    description:
      "Here, individual characters are accessed using their index positions.",
    language: "javascript",
    code: `let language = "JavaScript";

console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
console.log(language[4]);
console.log(language[9]);`,
    output: `J
a
v
S
t`,
    explanation:
      "The string 'JavaScript' starts with index 0. Therefore, language[0] gives 'J', language[1] gives 'a', and language[2] gives 'v'. The character 'S' is at index 4 and the last character 't' is at index 9."
  },

  interview: {
    question: "What is the first index of a string in JavaScript?",
    answer:
      "The first index of a string in JavaScript is 0.",
    tip:
      "Remember: JavaScript uses zero-based indexing."
  },

  tricky: {
    question: "What will string[0] return?",
    answer:
      "string[0] returns the first character of the string."
  },

  practice: {
    question:
      "Create a string containing a programming language and print its first, second, and third characters using indexes.",
    hint:
      "Remember that indexing starts from 0."
  },

  challenge: {
    title: "Explore String Characters",
    description:
      "Practice accessing different characters using their index positions.",
    task:
      "Create a string containing a product name. Print the first character, the third character, and the last character using string indexing."
  }
},

"string-length": {
  concept: {
    heading: "What is String Length?",
    paragraphs: [
      "The length of a string is the total number of characters present in the string.",
      "JavaScript provides the length property to find the number of characters in a string.",
      "The length property counts letters, numbers, spaces, and symbols.",
      "String length is useful when you need to validate, check, or process text."
    ],
    remember:
      "string.length returns the total number of characters in a string."
  },

  analogy: {
    heading: "Think of String Length Like Counting Characters",
    items: [
      {
        icon: "🔢",
        title: "Count Characters",
        text: "The length property tells you how many characters are present."
      },
      {
        icon: "📏",
        title: "Measure Text",
        text: "You can use length to measure the size of a string."
      },
      {
        icon: "⚠️",
        title: "Spaces Count",
        text: "Spaces are also counted as characters."
      }
    ]
  },

  visual: {
    heading: "How String Length Works",
    description:
      "JavaScript counts every character in the string and returns the total count.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create a String",
        text: "Store some text inside a variable."
      },
      {
        icon: "2️⃣",
        title: "Use length",
        text: "Write the variable name followed by .length."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Counts",
        text: "JavaScript counts all characters in the string."
      },
      {
        icon: "4️⃣",
        title: "Get the Result",
        text: "The total number of characters is returned."
      }
    ],
    flow:
      "String → .length → Count Characters → Total Length"
  },

  code: {
    title: "Practical Example — Finding String Length",
    description:
      "The length property can be used to find how many characters a string contains.",
    language: "javascript",
    code: `let language = "JavaScript";
let message = "Hello World";

console.log(language.length);
console.log(message.length);

let text = "Code Practice";

console.log(text.length);`,
    output: `10
11
13`,
    explanation:
      "The length property returns the total number of characters. 'JavaScript' has 10 characters. 'Hello World' has 11 characters because the space between the two words is also counted. 'Code Practice' has 13 characters including the space."
  },

  interview: {
    question: "How do you find the length of a string in JavaScript?",
    answer:
      "Use the length property. For example, text.length returns the total number of characters in the string.",
    tip:
      "length is a property, so write string.length, not string.length()."
  },

  tricky: {
    question: "Does string length count spaces?",
    answer:
      "Yes. Spaces are characters, so they are included in the string length."
  },

  practice: {
    question:
      "Create a string containing a short sentence and print its length using the length property.",
    hint:
      "Use sentence.length."
  },

  challenge: {
    title: "Check Text Length",
    description:
      "Practice finding the number of characters in different strings.",
    task:
      "Create three strings with different text values. Print the length of each string and compare which one contains the most characters."
  }
},

"string-methods": {
  concept: {
    heading: "What are String Methods?",
    paragraphs: [
      "String methods are built-in methods that help us work with and manipulate text.",
      "They can be used to change the case of text, remove extra spaces, replace text, split text, and perform many other operations.",
      "String methods are called using dot notation, such as text.toUpperCase().",
      "Most string methods return a new value instead of changing the original string."
    ],
    remember:
      "String methods are built-in tools used to work with and manipulate text."
  },

  analogy: {
    heading: "Think of String Methods Like Text Tools",
    items: [
      {
        icon: "🔤",
        title: "Change Text",
        text: "Methods such as toUpperCase() and toLowerCase() change the letter case."
      },
      {
        icon: "🧹",
        title: "Clean Text",
        text: "The trim() method removes extra spaces from the beginning and end."
      },
      {
        icon: "🔄",
        title: "Replace Text",
        text: "The replace() method can replace matching text with new text."
      },
      {
        icon: "✂️",
        title: "Split Text",
        text: "The split() method divides a string into an array."
      }
    ]
  },

  visual: {
    heading: "Common String Methods",
    description:
      "JavaScript provides many useful methods for processing strings.",
    steps: [
      {
        icon: "1️⃣",
        title: "Change Case",
        text: "Use toUpperCase() or toLowerCase() to change letter case."
      },
      {
        icon: "2️⃣",
        title: "Remove Spaces",
        text: "Use trim() to remove unnecessary spaces from the beginning and end."
      },
      {
        icon: "3️⃣",
        title: "Replace Text",
        text: "Use replace() to replace matching text."
      },
      {
        icon: "4️⃣",
        title: "Split Text",
        text: "Use split() to divide a string into smaller parts."
      }
    ],
    flow:
      "String → String Method → Process Text → New Result"
  },

  code: {
    title: "Practical Example — Using String Methods",
    description:
      "This example demonstrates several commonly used string methods.",
    language: "javascript",
    code: `let message = "  JavaScript is Powerful  ";

console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.trim());

console.log(message.replace("Powerful", "Amazing"));

console.log(message.split(" "));`,
    output: `  JAVASCRIPT IS POWERFUL  
  javascript is powerful  
JavaScript is Powerful
  JavaScript is Amazing  
[ '', 'JavaScript', 'is', 'Powerful', '', '' ]`,
    explanation:
      "toUpperCase() converts the string to uppercase. toLowerCase() converts it to lowercase. trim() removes spaces from the beginning and end. replace() replaces matching text. split() divides the string into an array using the specified separator."
  },

  interview: {
    question: "What are string methods in JavaScript?",
    answer:
      "String methods are built-in methods used to perform operations on strings, such as changing case, searching, replacing, extracting, and splitting text.",
    tip:
      "Remember common methods such as toUpperCase(), toLowerCase(), trim(), replace(), and split()."
  },

  tricky: {
    question: "Does trim() remove spaces from the middle of a string?",
    answer:
      "No. trim() removes spaces only from the beginning and end of a string."
  },

  practice: {
    question:
      "Create a string with extra spaces and use trim() to remove them. Then convert the result to uppercase.",
    hint:
      "Use trim() first and then toUpperCase()."
  },

  challenge: {
    title: "Clean and Transform Text",
    description:
      "Practice using multiple string methods together.",
    task:
      "Create a string containing extra spaces and mixed-case text. Remove the extra spaces, convert the text to lowercase, and replace one word with another."
  }
},

"string-search-methods": {
  concept: {
    heading: "What are String Search Methods?",
    paragraphs: [
      "String search methods are used to find text or characters inside a string.",
      "JavaScript provides methods such as includes(), startsWith(), endsWith(), indexOf(), and lastIndexOf().",
      "These methods are useful when you need to check whether specific text exists or find its position."
    ],
    remember:
      "String search methods help you find or check text inside a string."
  },

  analogy: {
    heading: "Think of Search Methods Like Finding Text",
    items: [
      {
        icon: "🔍",
        title: "Find",
        text: "Search methods help you find specific text inside a string."
      },
      {
        icon: "✅",
        title: "Check",
        text: "includes() checks whether a string contains specific text."
      },
      {
        icon: "📍",
        title: "Find Position",
        text: "indexOf() returns the position of the first matching text."
      }
    ]
  },

  visual: {
    heading: "How String Search Works",
    description:
      "JavaScript checks the string and returns information about the searched text.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With a String",
        text: "Create or receive a string that you want to search."
      },
      {
        icon: "2️⃣",
        title: "Search Text",
        text: "Use a search method with the text you want to find."
      },
      {
        icon: "3️⃣",
        title: "Check the Result",
        text: "JavaScript returns true, false, or a position depending on the method."
      }
    ],
    flow:
      "String → Search Text → Search Method → Result"
  },

  code: {
    title: "Practical Example — Searching Inside a String",
    description:
      "This example demonstrates the most common string search methods.",
    language: "javascript",
    code: `let message = "JavaScript is easy to learn";

console.log(message.includes("easy"));
console.log(message.startsWith("JavaScript"));
console.log(message.endsWith("learn"));

console.log(message.indexOf("easy"));
console.log(message.indexOf("Python"));`,
    output: `true
true
true
15
-1`,
    explanation:
      "includes() returns true because 'easy' exists in the string. startsWith() returns true because the string begins with 'JavaScript'. endsWith() returns true because the string ends with 'learn'. indexOf() returns the position of the first matching text. If the searched text is not found, indexOf() returns -1."
  },

  interview: {
    question: "What does indexOf() return when the text is not found?",
    answer:
      "indexOf() returns -1 when the searched text is not found.",
    tip:
      "Remember: indexOf() → position, and -1 means not found."
  },

  tricky: {
    question: "What does includes() return?",
    answer:
      "includes() returns true if the searched text exists in the string; otherwise it returns false."
  },

  practice: {
    question:
      "Create a string containing a product description. Check whether it includes the word 'new'.",
    hint:
      "Use includes('new')."
  },

  challenge: {
    title: "Build a Text Search",
    description:
      "Practice checking whether specific words exist in a string.",
    task:
      "Create a sentence and check whether it starts with a particular word, ends with a particular word, contains a specific word, and find the position of that word using indexOf()."
  }
},

"string-slice-substring": {
  concept: {
    heading: "String slice() and substring()",
    paragraphs: [
      "Sometimes we need only a part of a string instead of the complete text.",
      "The slice() and substring() methods are used to extract a portion of a string.",
      "Both methods use a starting index and an ending index.",
      "The ending index is not included in the result.",
      "slice() can work with negative indexes, while substring() treats negative values as 0."
    ],
    remember:
      "slice(start, end) and substring(start, end) extract part of a string. The end index is not included."
  },

  analogy: {
    heading: "Think of slice() Like Cutting a Section of Text",
    items: [
      {
        icon: "✂️",
        title: "Choose Start",
        text: "Give the index where the extracted text should begin."
      },
      {
        icon: "📍",
        title: "Choose End",
        text: "Give the index where extraction should stop. The end index is not included."
      },
      {
        icon: "🧩",
        title: "Get a New String",
        text: "JavaScript returns the selected part as a new string."
      }
    ]
  },

  visual: {
    heading: "How slice() and substring() Work",
    description:
      "Both methods select a section of a string using index positions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With a String",
        text: "Create the string from which you want to extract text."
      },
      {
        icon: "2️⃣",
        title: "Choose Start Index",
        text: "Specify the index where extraction should begin."
      },
      {
        icon: "3️⃣",
        title: "Choose End Index",
        text: "Specify where extraction should stop. This index is not included."
      },
      {
        icon: "4️⃣",
        title: "Get Extracted Text",
        text: "JavaScript returns the selected portion of the string."
      }
    ],
    flow:
      "String → Start Index → End Index → Extract → New String"
  },

  code: {
    title: "Practical Example — Extracting Part of a String",
    description:
      "This example shows how slice() and substring() can extract part of a string.",
    language: "javascript",
    code: `let language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.slice(4, 10));

console.log(language.substring(0, 4));
console.log(language.substring(4, 10));`,
    output: `Java
Script
Java
Script`,
    explanation:
      "slice(0, 4) extracts characters from index 0 up to, but not including, index 4. Therefore, it returns 'Java'. slice(4, 10) returns 'Script'. substring() produces the same result for these positive indexes."
  },

  interview: {
    question: "What is the difference between slice() and substring()?",
    answer:
      "Both extract part of a string. slice() supports negative indexes, while substring() treats negative indexes as 0.",
    tip:
      "Remember: slice() supports negative indexes."
  },

  tricky: {
    question: "Is the ending index included in slice()?",
    answer:
      "No. The ending index is not included in the extracted result."
  },

  practice: {
    question:
      "Create a string containing a programming language and use slice() to extract its first four characters.",
    hint:
      "Use slice(0, 4)."
  },

  challenge: {
    title: "Extract Product Information",
    description:
      "Practice extracting different parts of a string.",
    task:
      "Create a product code such as 'PROD-2026'. Use slice() to extract the first four characters and the year separately."
  }
},

"template-literals": {
  concept: {
    heading: "What are Template Literals?",
    paragraphs: [
      "Template literals are a modern way to create strings in JavaScript.",
      "They are written using backticks (`) instead of single or double quotes.",
      "Template literals allow us to insert variables and expressions directly inside a string using ${}.",
      "They are especially useful when creating dynamic messages or combining multiple values."
    ],
    remember:
      "Template literals use backticks and ${} for inserting values."
  },

  analogy: {
    heading: "Think of Template Literals Like a Dynamic Sentence",
    items: [
      {
        icon: "📝",
        title: "Write a String",
        text: "Use backticks to create the string."
      },
      {
        icon: "🔗",
        title: "Insert Values",
        text: "Use ${} to insert variables or expressions."
      },
      {
        icon: "✨",
        title: "Create Dynamic Text",
        text: "The final string automatically contains the current values."
      }
    ]
  },

  visual: {
    heading: "How Template Literals Work",
    description:
      "Template literals combine normal text with dynamic values.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Variables",
        text: "Store the values that you want to display."
      },
      {
        icon: "2️⃣",
        title: "Use Backticks",
        text: "Create the string using backticks."
      },
      {
        icon: "3️⃣",
        title: "Use ${}",
        text: "Place variables or expressions inside ${}."
      },
      {
        icon: "4️⃣",
        title: "Get Dynamic String",
        text: "JavaScript creates the final string using the current values."
      }
    ],
    flow:
      "Variables → Backticks → ${Expression} → Dynamic String"
  },

  code: {
    title: "Practical Example — Dynamic Message",
    description:
      "Template literals make it easy to combine variables with normal text.",
    language: "javascript",
    code: `let product = "Laptop";
let price = 55000;
let quantity = 2;

let total = price * quantity;

let message = \`Product: \${product}
Price: ₹\${price}
Quantity: \${quantity}
Total: ₹\${total}\`;

console.log(message);`,
    output: `Product: Laptop
Price: ₹55000
Quantity: 2
Total: ₹110000`,
    explanation:
      "The string is written using backticks. Variables and expressions are inserted using ${}. JavaScript replaces each ${} expression with its current value. Template literals also make multi-line strings easier to write."
  },

  interview: {
    question: "What is a template literal in JavaScript?",
    answer:
      "A template literal is a string written using backticks that allows variables and expressions to be embedded using ${}.",
    tip:
      "Remember: backticks + ${} = template literal."
  },

  tricky: {
    question: "Which quotes are used for template literals?",
    answer:
      "Template literals use backticks (`), not single quotes or double quotes."
  },

  practice: {
    question:
      "Create variables for a product and price. Use a template literal to print a sentence containing both values.",
    hint:
      "Use backticks and insert variables using ${}."
  },

  challenge: {
    title: "Create a Dynamic Bill",
    description:
      "Use template literals to create readable dynamic output.",
    task:
      "Create variables for a product, price, quantity, and total. Use a template literal to display a small bill containing all four values."
  }
},
"array-basics": {
  concept: {
    heading: "What is an Array?",
    paragraphs: [
      "An array is a data structure used to store multiple values in a single variable.",
      "Instead of creating separate variables for related values, we can store those values together inside an array.",
      "Arrays are commonly used to store lists such as products, prices, marks, tasks, and categories.",
      "An array can contain strings, numbers, booleans, objects, or even other arrays."
    ],
    remember:
      "Array = A single variable that can store multiple values."
  },

  analogy: {
    heading: "Think of an Array Like a List",
    items: [
      {
        icon: "📋",
        title: "Create a List",
        text: "An array allows you to keep multiple related values together."
      },
      {
        icon: "📦",
        title: "Store Multiple Values",
        text: "One array can contain many values instead of using separate variables."
      },
      {
        icon: "🔢",
        title: "Values Have Positions",
        text: "Every value in an array has an index position starting from 0."
      }
    ]
  },

  visual: {
    heading: "How an Array Stores Values",
    description:
      "JavaScript stores multiple values inside square brackets, separated by commas.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create an Array",
        text: "Use square brackets [] to create an array."
      },
      {
        icon: "2️⃣",
        title: "Add Values",
        text: "Place multiple values inside the brackets and separate them with commas."
      },
      {
        icon: "3️⃣",
        title: "Assign to a Variable",
        text: "Store the array inside a variable."
      },
      {
        icon: "4️⃣",
        title: "Use the Array",
        text: "The array can be accessed, modified, searched, and processed."
      }
    ],
    flow:
      "Multiple Values → [ ] → Array → Variable → Use the Values"
  },

  code: {
    title: "Practical Example — Creating an Array",
    description:
      "Here, related values are stored together inside arrays.",
    language: "javascript",
    code: `let products = ["Laptop", "Keyboard", "Mouse"];

let prices = [55000, 2500, 1200];

console.log(products);
console.log(prices);

console.log(typeof products);
console.log(Array.isArray(products));`,
    output: `["Laptop", "Keyboard", "Mouse"]
[55000, 2500, 1200]
object
true`,
    explanation:
      "The products array stores three product names, while the prices array stores three numbers. Arrays are created using square brackets and values are separated by commas. typeof returns 'object' for an array, so Array.isArray() is commonly used when we specifically want to check whether a value is an array."
  },

  interview: {
    question: "What is an array in JavaScript?",
    answer:
      "An array is a data structure used to store multiple values in a single variable.",
    tip:
      "Remember: arrays are useful when you need to store a collection or list of values."
  },

  tricky: {
    question: "What does typeof [] return?",
    answer:
      "typeof [] returns 'object'. To specifically check whether a value is an array, use Array.isArray()."
  },

  practice: {
    question:
      "Create an array containing five programming-related items and print the array using console.log().",
    hint:
      "Use square brackets and separate each value with a comma."
  },

  challenge: {
    title: "Create a Product List",
    description:
      "Practice storing multiple related values inside an array.",
    task:
      "Create an array containing five product names and another array containing their prices. Display both arrays using console.log(). Also check whether the products variable is an array."
  }
},



"array-indexing": {
  concept: {
    heading: "What is Array Indexing?",
    paragraphs: [
      "Array indexing means accessing individual values from an array using their position.",
      "In JavaScript, array indexes start from 0.",
      "The first value is at index 0, the second value is at index 1, and so on.",
      "You can access an array value using square brackets [] with the index number."
    ],
    remember:
      "Array indexing starts from 0. Use array[index] to access a value."
  },

  analogy: {
    heading: "Think of an Array Like Numbered Boxes",
    items: [
      {
        icon: "📦",
        title: "Each Value Has a Position",
        text: "Every value inside an array has an index position."
      },
      {
        icon: "0️⃣",
        title: "Starts From Zero",
        text: "The first array value is always stored at index 0."
      },
      {
        icon: "🔍",
        title: "Access a Value",
        text: "Use square brackets with the index number to access a specific value."
      }
    ]
  },

  visual: {
    heading: "How Array Indexing Works",
    description:
      "JavaScript assigns an index number to every value in an array.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create an Array",
        text: "Create an array containing multiple values."
      },
      {
        icon: "2️⃣",
        title: "Start From 0",
        text: "The first value receives index 0."
      },
      {
        icon: "3️⃣",
        title: "Move Forward",
        text: "Each next value receives the next index number."
      },
      {
        icon: "4️⃣",
        title: "Access a Value",
        text: "Use array[index] to access a specific value."
      }
    ],
    flow:
      "Array → Index Positions → 0, 1, 2... → array[index] → Value"
  },

  code: {
    title: "Practical Example — Accessing Array Values",
    description:
      "Here, individual values are accessed using their index positions.",
    language: "javascript",
    code: `let products = ["Laptop", "Keyboard", "Mouse", "Monitor"];

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);

console.log(products[4]);`,
    output: `Laptop
Keyboard
Mouse
Monitor
undefined`,
    explanation:
      "The first value 'Laptop' is at index 0. 'Keyboard' is at index 1, 'Mouse' is at index 2, and 'Monitor' is at index 3. Index 4 does not contain a value, so JavaScript returns undefined."
  },

  interview: {
    question: "What is the first index of an array in JavaScript?",
    answer:
      "The first index of an array is 0.",
    tip:
      "Remember: JavaScript arrays use zero-based indexing."
  },

  tricky: {
    question: "What happens when you access an index that does not exist?",
    answer:
      "JavaScript returns undefined when the requested array index does not contain a value."
  },

  practice: {
    question:
      "Create an array containing five programming languages and print the first, third, and fifth values.",
    hint:
      "Remember that the first value is at index 0."
  },

  challenge: {
    title: "Explore Array Positions",
    description:
      "Practice accessing values using different indexes.",
    task:
      "Create an array containing five products. Print the first, middle, and last values using their indexes."
  }
},

"multidimensional-arrays": {
  concept: {
    heading: "What is a Multidimensional Array?",
    paragraphs: [
      "A multidimensional array is an array that contains other arrays as its elements.",
      "It is useful for representing data in rows and columns, such as tables, marksheets, grids, and matrices.",
      "A two-dimensional array is commonly represented as an array of arrays.",
      "To access a value, we use two indexes: the first index identifies the row and the second index identifies the position inside that row."
    ],
    remember:
      "A multidimensional array is an array containing other arrays."
  },

  analogy: {
    heading: "Think of It Like a Table",
    items: [
      {
        icon: "📊",
        title: "Rows",
        text: "The outer array can represent different rows of data."
      },
      {
        icon: "📋",
        title: "Columns",
        text: "Each inner array can contain values for the columns."
      },
      {
        icon: "🔢",
        title: "Two Indexes",
        text: "Use rowIndex and columnIndex to access a specific value."
      }
    ]
  },

  visual: {
    heading: "How a Two-Dimensional Array Works",
    description:
      "A two-dimensional array can be visualized as rows and columns.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Outer Array",
        text: "Create an array that will contain multiple inner arrays."
      },
      {
        icon: "2️⃣",
        title: "Create Rows",
        text: "Each inner array represents one row."
      },
      {
        icon: "3️⃣",
        title: "Add Columns",
        text: "Values inside each inner array represent columns."
      },
      {
        icon: "4️⃣",
        title: "Access Data",
        text: "Use two indexes to access a particular value."
      }
    ],
    flow:
      "Array → Inner Arrays → Rows & Columns → array[row][column] → Value"
  },

  code: {
    title: "Practical Example — Student Marks Table",
    description:
      "A two-dimensional array can be used to represent rows and columns of related data.",
    language: "javascript",
    code: `let marks = [
  ["Student 1", 80, 75, 90],
  ["Student 2", 85, 88, 78],
  ["Student 3", 92, 90, 95]
];

console.log(marks[0][0]);
console.log(marks[0][1]);

console.log(marks[1][2]);
console.log(marks[2][3]);`,
    output: `Student 1
80
88
95`,
    explanation:
      "marks[0] represents the first row. marks[0][0] accesses the first value in that row. marks[0][1] accesses the second value. The first index selects the row and the second index selects the column."
  },

  interview: {
    question: "What is a multidimensional array?",
    answer:
      "A multidimensional array is an array that contains other arrays. It is commonly used to represent data in rows and columns.",
    tip:
      "Remember: array of arrays = multidimensional array."
  },

  tricky: {
    question: "What does marks[1][2] mean?",
    answer:
      "The first index selects the second row, and the second index selects the third value inside that row."
  },

  practice: {
    question:
      "Create a two-dimensional array containing three rows of product information. Access values from different rows and columns.",
    hint:
      "Use array[rowIndex][columnIndex]."
  },

  challenge: {
    title: "Create a Marks Table",
    description:
      "Practice creating and accessing data from a two-dimensional array.",
    task:
      "Create a two-dimensional array containing three rows. Each row should contain a subject name and three marks. Access at least four different values using two indexes."
  }
},

"array-methods": {
  concept: {
    heading: "What are Array Methods?",
    paragraphs: [
      "Array methods are built-in JavaScript methods used to add, remove, search, and work with values in an array.",
      "Some methods change the original array, while others return a new result.",
      "Common methods include push(), pop(), shift(), unshift(), includes(), and indexOf().",
      "Learning array methods makes it easier to manage lists of data."
    ],
    remember:
      "Array methods are built-in tools used to work with array values."
  },

  analogy: {
    heading: "Think of Array Methods Like List Tools",
    items: [
      {
        icon: "➕",
        title: "Add Values",
        text: "push() adds a value to the end and unshift() adds a value to the beginning."
      },
      {
        icon: "➖",
        title: "Remove Values",
        text: "pop() removes the last value and shift() removes the first value."
      },
      {
        icon: "🔍",
        title: "Search Values",
        text: "includes() checks whether a value exists and indexOf() finds its position."
      }
    ]
  },

  visual: {
    heading: "Common Array Methods",
    description:
      "Different methods perform different operations on an array.",
    steps: [
      {
        icon: "1️⃣",
        title: "Add",
        text: "Use push() and unshift() to add values."
      },
      {
        icon: "2️⃣",
        title: "Remove",
        text: "Use pop() and shift() to remove values."
      },
      {
        icon: "3️⃣",
        title: "Search",
        text: "Use includes() and indexOf() to search for values."
      },
      {
        icon: "4️⃣",
        title: "Process",
        text: "Use other array methods to work with collections of data."
      }
    ],
    flow:
      "Array → Method → Add / Remove / Search → Updated Array or Result"
  },

  code: {
    title: "Practical Example — Using Array Methods",
    description:
      "This example demonstrates common methods used to add, remove, and search array values.",
    language: "javascript",
    code: `let products = ["Laptop", "Keyboard", "Mouse"];

products.push("Monitor");
console.log(products);

products.pop();
console.log(products);

products.unshift("Webcam");
console.log(products);

products.shift();
console.log(products);`,
    output: `["Laptop", "Keyboard", "Mouse", "Monitor"]
["Laptop", "Keyboard", "Mouse"]
["Webcam", "Laptop", "Keyboard", "Mouse"]
["Laptop", "Keyboard", "Mouse"]`,
    explanation:
      "push() adds a value at the end. pop() removes the last value. unshift() adds a value at the beginning. shift() removes the first value. These methods directly modify the original array."
  },

  interview: {
    question: "What is the difference between push() and pop()?",
    answer:
      "push() adds a value to the end of an array, while pop() removes the last value.",
    tip:
      "push = add at end, pop = remove from end."
  },

  tricky: {
    question: "Which methods add values at the beginning and end?",
    answer:
      "unshift() adds a value at the beginning, while push() adds a value at the end."
  },

  practice: {
    question:
      "Create an array of three products. Add one product using push(), remove the last product using pop(), and add a product at the beginning using unshift().",
    hint:
      "Practice one method at a time and print the array after each change."
  },

  challenge: {
    title: "Manage a Product List",
    description:
      "Practice adding and removing values from an array.",
    task:
      "Create an array of products. Add two products using push(), remove the last product, add one product using unshift(), and remove the first product using shift()."
  }
},

"array-search": {
  concept: {
    heading: "How to Search an Array",
    paragraphs: [
      "Array search methods are used to find values or elements inside an array.",
      "JavaScript provides several methods for different search requirements.",
      "includes() checks whether a value exists and returns true or false.",
      "indexOf() and lastIndexOf() return the position of a value.",
      "find() returns the first element that satisfies a condition, while findIndex() returns its index."
    ],
    remember:
      "Array search methods help you check, find, or locate values inside an array."
  },

  analogy: {
    heading: "Think of Array Search Like Finding an Item",
    items: [
      {
        icon: "🔍",
        title: "Check Existence",
        text: "includes() checks whether a particular value exists."
      },
      {
        icon: "📍",
        title: "Find Position",
        text: "indexOf() returns the position of a matching value."
      },
      {
        icon: "🎯",
        title: "Find by Condition",
        text: "find() searches using a condition and returns the first matching element."
      }
    ]
  },

  visual: {
    heading: "Common Array Search Methods",
    description:
      "Different search methods return different types of results.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check",
        text: "Use includes() when you only need true or false."
      },
      {
        icon: "2️⃣",
        title: "Find Position",
        text: "Use indexOf() when you need the index of a value."
      },
      {
        icon: "3️⃣",
        title: "Search by Condition",
        text: "Use find() when the search depends on a condition."
      },
      {
        icon: "4️⃣",
        title: "Find Index",
        text: "Use findIndex() when you need the index of the matching element."
      }
    ],
    flow:
      "Array → Search Method → Check / Position / Element / Index"
  },

  code: {
    title: "Practical Example — Searching an Array",
    description:
      "This example demonstrates common array search methods.",
    language: "javascript",
    code: `let products = ["Laptop", "Keyboard", "Mouse", "Monitor", "Mouse"];

console.log(products.includes("Mouse"));
console.log(products.includes("Tablet"));

console.log(products.indexOf("Mouse"));
console.log(products.lastIndexOf("Mouse"));

let prices = [500, 1500, 2500, 3500];

let result = prices.find(function(price) {
  return price > 2000;
});

let resultIndex = prices.findIndex(function(price) {
  return price > 2000;
});

console.log(result);
console.log(resultIndex);`,
    output: `true
false
2
4
2500
2`,
    explanation:
      "includes() checks whether a value exists and returns true or false. indexOf() returns the first matching position, while lastIndexOf() returns the last matching position. find() returns the first value that satisfies the condition. findIndex() returns the index of that value."
  },

  interview: {
    question: "What is the difference between includes() and indexOf()?",
    answer:
      "includes() returns true or false to show whether a value exists, while indexOf() returns the position of the value or -1 if it is not found.",
    tip:
      "includes() → true/false. indexOf() → index/-1."
  },

  tricky: {
    question: "What does find() return when no element satisfies the condition?",
    answer:
      "find() returns undefined when no element satisfies the condition."
  },

  practice: {
    question:
      "Create an array of numbers. Use includes() to check whether a number exists and indexOf() to find the position of another number.",
    hint:
      "Test both a value that exists and a value that does not exist."
  },

  challenge: {
    title: "Build an Array Search",
    description:
      "Practice different ways of searching an array.",
    task:
      "Create an array of product prices. Check whether a particular price exists, find its index, find the first price greater than 2000, and find the index of that price."
  }
},

"array-sorting": {
  concept: {
    heading: "What is Array Sorting?",
    paragraphs: [
      "Array sorting means arranging the elements of an array in a particular order.",
      "JavaScript provides the sort() method to sort array elements.",
      "By default, sort() converts elements to strings and sorts them in Unicode order.",
      "For numbers, a comparison function should normally be provided to get correct numeric sorting.",
      "The reverse() method can be used to reverse the order of an array."
    ],
    remember:
      "Use sort() to arrange array values. For numbers, use a comparison function."
  },

  analogy: {
    heading: "Think of Sorting Like Arranging a List",
    items: [
      {
        icon: "🔤",
        title: "Arrange Text",
        text: "sort() can arrange strings in order."
      },
      {
        icon: "🔢",
        title: "Sort Numbers",
        text: "Use a comparison function when sorting numbers."
      },
      {
        icon: "🔄",
        title: "Reverse Order",
        text: "reverse() changes the order of elements from beginning to end."
      }
    ]
  },

  visual: {
    heading: "How Array Sorting Works",
    description:
      "Sorting arranges array elements according to a chosen order.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With Array",
        text: "Create an array containing values."
      },
      {
        icon: "2️⃣",
        title: "Choose Order",
        text: "Decide whether values should be ascending or descending."
      },
      {
        icon: "3️⃣",
        title: "Use sort()",
        text: "Use sort() with a comparison function when sorting numbers."
      },
      {
        icon: "4️⃣",
        title: "Get Sorted Array",
        text: "The array is arranged in the requested order."
      }
    ],
    flow:
      "Array → Sorting Rule → sort() → Ascending / Descending Order"
  },

  code: {
    title: "Practical Example — Sorting Numbers",
    description:
      "Numbers require a comparison function for reliable numeric sorting.",
    language: "javascript",
    code: `let numbers = [40, 10, 100, 25, 5];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);`,
    output: `[5, 10, 25, 40, 100]
[100, 40, 25, 10, 5]`,
    explanation:
      "The comparison function a - b sorts numbers in ascending order. The comparison function b - a sorts numbers in descending order. Without a comparison function, sort() treats array elements as strings, which can produce unexpected results for numbers."
  },

  interview: {
    question: "How do you sort numbers in ascending order in JavaScript?",
    answer:
      "Use sort() with a comparison function: numbers.sort((a, b) => a - b).",
    tip:
      "a - b → ascending. b - a → descending."
  },

  tricky: {
    question: "Why does [100, 20, 5].sort() not always give numeric order?",
    answer:
      "Because sort() converts elements to strings by default and compares their Unicode values. Use a numeric comparison function for numbers."
  },

  practice: {
    question:
      "Create an array of five numbers and sort it in ascending and descending order.",
    hint:
      "Use a - b for ascending and b - a for descending."
  },

  challenge: {
    title: "Sort Product Prices",
    description:
      "Practice sorting numerical values in both directions.",
    task:
      "Create an array containing five product prices. Sort the prices from lowest to highest and then from highest to lowest."
  }
},

"for-each": {
  concept: {
    heading: "What is forEach()?",
    paragraphs: [
      "The forEach() method executes a function once for each element in an array.",
      "It is commonly used when you want to perform an action on every array value.",
      "forEach() automatically visits each element, so you do not need to manage the loop counter manually.",
      "It is useful for displaying, processing, or performing an action on every item in an array."
    ],
    remember:
      "forEach() runs a function once for every array element."
  },

  analogy: {
    heading: "Think of forEach() Like Checking Every Item",
    items: [
      {
        icon: "📋",
        title: "Take the List",
        text: "Start with an array containing multiple values."
      },
      {
        icon: "➡️",
        title: "Visit Each Value",
        text: "forEach() automatically visits every array element one by one."
      },
      {
        icon: "⚙️",
        title: "Perform an Action",
        text: "The callback function performs an action on the current value."
      }
    ]
  },

  visual: {
    heading: "How forEach() Works",
    description:
      "forEach() processes every element in an array one by one.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With Array",
        text: "Create an array containing multiple values."
      },
      {
        icon: "2️⃣",
        title: "Visit First Value",
        text: "forEach() passes the first value to the callback function."
      },
      {
        icon: "3️⃣",
        title: "Perform Action",
        text: "The callback runs for the current value."
      },
      {
        icon: "4️⃣",
        title: "Repeat",
        text: "The same process continues until every value has been processed."
      }
    ],
    flow:
      "Array → Value 1 → Action → Value 2 → Action → ... → All Values"
  },

  code: {
    title: "Practical Example — Display Every Product",
    description:
      "forEach() can be used to perform an action on every value in an array.",
    language: "javascript",
    code: `let products = ["Laptop", "Keyboard", "Mouse"];

products.forEach(function(product) {
  console.log("Available:", product);
});`,
    output: `Available: Laptop
Available: Keyboard
Available: Mouse`,
    explanation:
      "forEach() visits every value in the products array. The current value is passed to the product parameter, and console.log() runs once for each product."
  },

  interview: {
    question: "What does forEach() do?",
    answer:
      "forEach() executes a function once for each element of an array.",
    tip:
      "forEach() → perform an action on every element."
  },

  tricky: {
    question: "Does forEach() create a new array?",
    answer:
      "No. forEach() is mainly used to perform an action for each element. It does not create a new array as map() does."
  },

  practice: {
    question:
      "Create an array of five products and use forEach() to print each product.",
    hint:
      "Pass a callback function to forEach()."
  },

  challenge: {
    title: "Display a Product List",
    description:
      "Practice processing every array element using forEach().",
    task:
      "Create an array containing five products. Use forEach() to display a message for each product, such as 'Product available: Laptop'."
  }
},

"map": {
  concept: {
    heading: "What is map()?",
    paragraphs: [
      "The map() method creates a new array by applying a function to every element of the original array.",
      "It is useful when you want to transform each value into another value.",
      "The original array is not changed by map().",
      "The new array contains the result returned for every element."
    ],
    remember:
      "map() transforms every array element and returns a new array."
  },

  analogy: {
    heading: "Think of map() Like a Transformation Machine",
    items: [
      {
        icon: "📥",
        title: "Take a Value",
        text: "map() takes one value from the original array."
      },
      {
        icon: "⚙️",
        title: "Transform It",
        text: "The function performs an operation on that value."
      },
      {
        icon: "📤",
        title: "Create New Value",
        text: "The returned value becomes an element of the new array."
      }
    ]
  },

  visual: {
    heading: "How map() Works",
    description:
      "map() processes every element and creates a new array from the returned values.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With Array",
        text: "Create an array containing values."
      },
      {
        icon: "2️⃣",
        title: "Visit Each Element",
        text: "map() processes every element one by one."
      },
      {
        icon: "3️⃣",
        title: "Transform",
        text: "Return a new value for each element."
      },
      {
        icon: "4️⃣",
        title: "Create New Array",
        text: "All returned values form the new array."
      }
    ],
    flow:
      "Original Array → Transform Each Value → Return Values → New Array"
  },

  code: {
    title: "Practical Example — Calculate Prices With Discount",
    description:
      "map() can transform every price and create a new array.",
    language: "javascript",
    code: `let prices = [1000, 2000, 3000];

let discountedPrices = prices.map(function(price) {
  return price * 0.9;
});

console.log(prices);
console.log(discountedPrices);`,
    output: `[1000, 2000, 3000]
[900, 1800, 2700]`,
    explanation:
      "map() visits every price. The function calculates 90% of each price and returns the new value. Those returned values are stored in discountedPrices. The original prices array remains unchanged."
  },

  interview: {
    question: "What does map() return?",
    answer:
      "map() returns a new array containing the results produced for every element.",
    tip:
      "map() → transform → new array."
  },

  tricky: {
    question: "Does map() change the original array?",
    answer:
      "No. map() creates and returns a new array."
  },

  practice: {
    question:
      "Create an array of numbers and use map() to create a new array containing double each number.",
    hint:
      "Return number * 2 from the map callback."
  },

  challenge: {
    title: "Transform Product Prices",
    description:
      "Practice transforming every value in an array.",
    task:
      "Create an array containing five product prices. Use map() to create a new array where every price has a 10% discount."
  }
},

"filter": {
  concept: {
    heading: "What is filter()?",
    paragraphs: [
      "The filter() method creates a new array containing only the elements that satisfy a condition.",
      "It checks every element using a function that should return true or false.",
      "If the function returns true, the element is included in the new array.",
      "If it returns false, the element is not included."
    ],
    remember:
      "filter() selects values that satisfy a condition and returns a new array."
  },

  analogy: {
    heading: "Think of filter() Like a Selection Process",
    items: [
      {
        icon: "🔍",
        title: "Check",
        text: "filter() checks every value against a condition."
      },
      {
        icon: "✅",
        title: "Keep",
        text: "Values that satisfy the condition are kept."
      },
      {
        icon: "❌",
        title: "Exclude",
        text: "Values that do not satisfy the condition are excluded from the new array."
      }
    ]
  },

  visual: {
    heading: "How filter() Works",
    description:
      "filter() checks every element and keeps only the values for which the condition is true.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With Array",
        text: "Create an array containing multiple values."
      },
      {
        icon: "2️⃣",
        title: "Check Each Value",
        text: "filter() tests every value using a condition."
      },
      {
        icon: "3️⃣",
        title: "True or False",
        text: "The callback returns true or false for each value."
      },
      {
        icon: "4️⃣",
        title: "Create New Array",
        text: "Only values with true results are included."
      }
    ],
    flow:
      "Array → Check Condition → true? → Keep Value → New Array"
  },

  code: {
    title: "Practical Example — Find Passing Marks",
    description:
      "filter() can be used to select values that meet a condition.",
    language: "javascript",
    code: `let marks = [35, 72, 48, 90, 60, 28];

let passingMarks = marks.filter(function(mark) {
  return mark >= 50;
});

console.log(marks);
console.log(passingMarks);`,
    output: `[35, 72, 48, 90, 60, 28]
[72, 90, 60]`,
    explanation:
      "filter() checks every mark. When mark >= 50 is true, that mark is included in passingMarks. Values below 50 are excluded. The original marks array remains unchanged."
  },

  interview: {
    question: "What does filter() return?",
    answer:
      "filter() returns a new array containing the elements that satisfy the condition.",
    tip:
      "filter() → condition → selected values → new array."
  },

  tricky: {
    question: "What happens if no element satisfies the condition?",
    answer:
      "filter() returns an empty array."
  },

  practice: {
    question:
      "Create an array of numbers and use filter() to create a new array containing only numbers greater than 50.",
    hint:
      "Return number > 50 from the callback."
  },

  challenge: {
    title: "Filter Available Products",
    description:
      "Practice selecting values from an array using a condition.",
    task:
      "Create an array of product prices. Use filter() to create a new array containing only prices greater than 1000."
  }
},

"reduce": {
  concept: {
    heading: "What is reduce()?",
    paragraphs: [
      "The reduce() method processes all elements of an array and combines them into a single result.",
      "The result can be a number, string, object, or another type depending on the operation.",
      "reduce() uses an accumulator to keep track of the result while processing each element.",
      "It is commonly used for calculating totals, sums, averages, counts, and other combined results."
    ],
    remember:
      "reduce() processes an array and reduces it to one final result."
  },

  analogy: {
    heading: "Think of reduce() Like a Running Total",
    items: [
      {
        icon: "📥",
        title: "Take a Value",
        text: "reduce() takes one array value at a time."
      },
      {
        icon: "➕",
        title: "Combine",
        text: "The current value is combined with the accumulated result."
      },
      {
        icon: "📊",
        title: "Keep the Result",
        text: "The accumulator stores the result and carries it to the next iteration."
      },
      {
        icon: "🎯",
        title: "Final Result",
        text: "After all elements are processed, one final result is returned."
      }
    ]
  },

  visual: {
    heading: "How reduce() Works",
    description:
      "reduce() combines array values step by step until one final result remains.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start With Array",
        text: "Create an array containing multiple values."
      },
      {
        icon: "2️⃣",
        title: "Set Initial Value",
        text: "Provide an initial value for the accumulator."
      },
      {
        icon: "3️⃣",
        title: "Process Each Value",
        text: "Combine the accumulator with the current array value."
      },
      {
        icon: "4️⃣",
        title: "Return Final Result",
        text: "After all elements are processed, reduce() returns one final value."
      }
    ],
    flow:
      "Array → Accumulator + Current Value → Updated Accumulator → Final Result"
  },

  code: {
    title: "Practical Example — Calculate Total",
    description:
      "reduce() can calculate the total of all values in an array.",
    language: "javascript",
    code: `let prices = [1000, 2500, 1500, 3000];

let total = prices.reduce(function(sum, price) {
  return sum + price;
}, 0);

console.log(total);`,
    output: `8000`,
    explanation:
      "The accumulator starts at 0. reduce() adds each price to the accumulator. After processing all four prices, the final accumulated value is 8000."
  },

  interview: {
    question: "What is the main purpose of reduce()?",
    answer:
      "reduce() is used to process all array elements and produce one final result.",
    tip:
      "reduce() → many values → one result."
  },

  tricky: {
    question: "What is an accumulator in reduce()?",
    answer:
      "The accumulator stores the result produced so far while reduce() processes the array."
  },

  practice: {
    question:
      "Create an array of numbers and use reduce() to calculate their total.",
    hint:
      "Start the accumulator with 0 and add each number to it."
  },

  challenge: {
    title: "Calculate Shopping Total",
    description:
      "Practice using reduce() to calculate a combined result.",
    task:
      "Create an array containing five product prices. Use reduce() to calculate and display the total price."
  }
},


"object-basics": {
  concept: {
    heading: "What is an Object?",
    paragraphs: [
      "An object is a data structure used to store related information together using key-value pairs.",
      "A key describes the information, and its value stores the actual data.",
      "Objects are useful when different pieces of information belong to the same entity, such as a product, user, order, or student record.",
      "An object can store different data types, including strings, numbers, booleans, arrays, and functions."
    ],
    remember:
      "Object = Collection of related data stored as key-value pairs."
  },

  analogy: {
    heading: "Think of an Object Like a Real-World Record",
    items: [
      {
        icon: "📦",
        title: "One Entity",
        text: "An object can represent one complete entity, such as a product."
      },
      {
        icon: "🏷️",
        title: "Properties",
        text: "Each key describes a property, such as name, price, or category."
      },
      {
        icon: "⚙️",
        title: "Behavior",
        text: "An object can also contain functions called methods."
      }
    ]
  },

  visual: {
    heading: "How an Object Stores Data",
    description:
      "An object groups related information using property names and values.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Object",
        text: "Use curly braces { } to create an object."
      },
      {
        icon: "2️⃣",
        title: "Add Properties",
        text: "Write properties using key: value pairs."
      },
      {
        icon: "3️⃣",
        title: "Store Related Data",
        text: "Keep related information inside the same object."
      },
      {
        icon: "4️⃣",
        title: "Access the Data",
        text: "Use dot notation or bracket notation to access properties."
      }
    ],
    flow:
      "Object → Properties → Key + Value → Access Data"
  },

  code: {
    title: "Practical Example — Creating an Object",
    description:
      "This example creates a product object containing different types of information.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,
  category: "Electronics",
  available: true
};

console.log(product);
console.log(product.name);
console.log(product.price);`,
    output: `{
  name: "Laptop",
  price: 55000,
  category: "Electronics",
  available: true
}
Laptop
55000`,
    explanation:
      "The product object contains four properties. Each property has a key and a value. Dot notation such as product.name is used to access a property."
  },

  interview: {
    question: "What is an object in JavaScript?",
    answer:
      "An object is a data structure that stores related information as key-value pairs.",
    tip:
      "Remember that objects are useful for representing real-world entities."
  },

  tricky: {
    question: "Can an object store different data types?",
    answer:
      "Yes. An object can contain strings, numbers, booleans, arrays, functions, and even other objects."
  },

  practice: {
    question:
      "Create an object representing a product with name, price, category, and availability.",
    hint:
      "Use curly braces and write each property as key: value."
  },

  challenge: {
    title: "Create a Product Object",
    description:
      "Practice creating an object containing different types of values.",
    task:
      "Create a product object with at least five properties. Display the complete object and then display two individual properties."
  }
},

"object-properties": {
  concept: {
    heading: "Working with Object Properties",
    paragraphs: [
      "Object properties are the key-value pairs stored inside an object.",
      "You can access a property using dot notation or bracket notation.",
      "You can add a new property, update an existing property, or delete a property.",
      "Dot notation is simple and commonly used when the property name is known.",
      "Bracket notation is useful when the property name is stored in a variable or contains special characters."
    ],
    remember:
      "Object properties can be accessed, added, updated, and deleted."
  },

  analogy: {
    heading: "Think of Properties Like Fields in a Form",
    items: [
      {
        icon: "📝",
        title: "Field",
        text: "Each property is like a field in a record."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "A property value can be changed when information changes."
      },
      {
        icon: "➕",
        title: "Add",
        text: "New properties can be added whenever required."
      }
    ]
  },

  visual: {
    heading: "How Object Properties Work",
    description:
      "JavaScript allows you to read and modify object properties.",
    steps: [
      {
        icon: "1️⃣",
        title: "Access",
        text: "Read an existing property using dot or bracket notation."
      },
      {
        icon: "2️⃣",
        title: "Add",
        text: "Assign a value to a new property."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "Assign a new value to an existing property."
      },
      {
        icon: "4️⃣",
        title: "Delete",
        text: "Use delete to remove a property."
      }
    ],
    flow:
      "Access → Add → Update → Delete"
  },

  code: {
    title: "Practical Example — Add, Update & Delete",
    description:
      "This example demonstrates common operations on object properties.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000
};

console.log(product.name);

product.category = "Electronics";
product.price = 60000;

console.log(product);

delete product.category;

console.log(product);`,
    output: `Laptop
{
  name: "Laptop",
  price: 60000,
  category: "Electronics"
}
{
  name: "Laptop",
  price: 60000
}`,
    explanation:
      "product.name accesses a property. product.category adds a new property. product.price updates an existing property. The delete operator removes category from the object."
  },

  interview: {
    question: "What are object properties?",
    answer:
      "Object properties are key-value pairs that store information inside an object.",
    tip:
      "Know both dot notation and bracket notation."
  },

  tricky: {
    question: "What is the difference between dot notation and bracket notation?",
    answer:
      "Dot notation uses object.property. Bracket notation uses object['property']. Bracket notation is useful when the property name is dynamic."
  },

  practice: {
    question:
      "Create an object, add a new property, update one property, and delete another property.",
    hint:
      "Use dot notation for access, assignment for add/update, and delete for removal."
  },

  challenge: {
    title: "Manage Product Properties",
    description:
      "Practice modifying an object after it has been created.",
    task:
      "Create a product object with name and price. Add category, update price, and delete category. Display the object after each important operation."
  }
},

"object-methods": {
  concept: {
    heading: "What is an Object Method?",
    paragraphs: [
      "A method is a function stored as a property of an object.",
      "Methods allow an object to contain both data and behavior.",
      "A method can access other properties of the same object using the this keyword.",
      "Methods are commonly used when an object needs to perform an action related to its own data."
    ],
    remember:
      "Method = Function stored inside an object."
  },

  analogy: {
    heading: "Data + Action",
    items: [
      {
        icon: "📦",
        title: "Data",
        text: "Properties store information about the object."
      },
      {
        icon: "⚙️",
        title: "Action",
        text: "Methods define actions that the object can perform."
      },
      {
        icon: "🔗",
        title: "Together",
        text: "Properties and methods allow an object to represent both data and behavior."
      }
    ]
  },

  visual: {
    heading: "How an Object Method Works",
    description:
      "A method is defined inside an object and can use the object's properties.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Object",
        text: "Create an object with properties."
      },
      {
        icon: "2️⃣",
        title: "Add Method",
        text: "Add a function as a property."
      },
      {
        icon: "3️⃣",
        title: "Use this",
        text: "Use this to access properties of the current object."
      },
      {
        icon: "4️⃣",
        title: "Call Method",
        text: "Use object.method() to execute the method."
      }
    ],
    flow:
      "Object → Properties + Method → this → Method Call"
  },

  code: {
    title: "Practical Example — Object Method",
    description:
      "The method uses the object's name and price properties.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,

  showDetails: function() {
    console.log(this.name);
    console.log(this.price);
  }
};

product.showDetails();`,
    output: `Laptop
55000`,
    explanation:
      "showDetails is a method because it is a function stored inside the product object. Inside the method, this refers to the product object."
  },

  interview: {
    question: "What is a method in JavaScript?",
    answer:
      "A method is a function stored as a property of an object.",
    tip:
      "Methods represent behavior, while properties usually represent data."
  },

  tricky: {
    question: "What does this refer to inside a normal object method?",
    answer:
      "When a normal method is called using object.method(), this generally refers to the object before the dot."
  },

  practice: {
    question:
      "Create an object with a property and a method that displays the property.",
    hint:
      "Define a function inside the object and use this.property inside it."
  },

  challenge: {
    title: "Build an Object with Behavior",
    description:
      "Create an object that contains both data and an action.",
    task:
      "Create a product object with name, price, and a method called showDetails(). The method should display the product information."
  }
},

"this-keyword": {
  concept: {
    heading: "Understanding the this Keyword",
    paragraphs: [
      "The this keyword refers to a context-dependent object.",
      "Its value is determined by how a function is called, not simply where the function is written.",
      "Inside a normal object method called as object.method(), this refers to the object.",
      "The this keyword is very important when working with objects, constructors, classes, and event handlers.",
      "Arrow functions behave differently because they do not create their own this value."
    ],
    remember:
      "For a normal object method called as object.method(), this refers to that object."
  },

  analogy: {
    heading: "Think of this as 'Current Object'",
    items: [
      {
        icon: "👉",
        title: "Current Context",
        text: "this points to the object or context associated with the current function call."
      },
      {
        icon: "🏠",
        title: "Inside a Method",
        text: "When an object calls its method, this can refer to that object."
      },
      {
        icon: "⚠️",
        title: "Context Matters",
        text: "Changing how a function is called can change the value of this."
      }
    ]
  },

  visual: {
    heading: "How this Works in an Object",
    description:
      "When a normal method is called through an object, JavaScript provides that object as the method's this value.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Object",
        text: "Create an object with properties."
      },
      {
        icon: "2️⃣",
        title: "Create Method",
        text: "Define a normal function inside the object."
      },
      {
        icon: "3️⃣",
        title: "Call Method",
        text: "Call the method using object.method()."
      },
      {
        icon: "4️⃣",
        title: "this Refers to Object",
        text: "Inside the method, this can access the object's properties."
      }
    ],
    flow:
      "object.method() → this → Current Object → Access Properties"
  },

  code: {
    title: "Practical Example — Using this",
    description:
      "The this keyword is used to access properties belonging to the current object.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,

  showPrice: function() {
    console.log("Product:", this.name);
    console.log("Price:", this.price);
  }
};

product.showPrice();`,
    output: `Product: Laptop
Price: 55000`,
    explanation:
      "When product.showPrice() is called, this inside showPrice refers to product. Therefore, this.name and this.price access the object's properties."
  },

  interview: {
    question: "What is this in JavaScript?",
    answer:
      "this is a special keyword whose value depends on the context and how a function is called.",
    tip:
      "Do not assume this always means the same thing. Always check the calling context."
  },

  tricky: {
    question: "Does an arrow function have its own this?",
    answer:
      "No. Arrow functions do not create their own this. They inherit this from the surrounding lexical context."
  },

  practice: {
    question:
      "Create an object with two properties and a method that uses this to display both properties.",
    hint:
      "Call the method using object.method()."
  },

  challenge: {
    title: "Use this with Object Methods",
    description:
      "Practice accessing multiple object properties through this.",
    task:
      "Create an object with name, price, and category. Create a showDetails() method that uses this to display all three values."
  }
},

"object-destructuring": {
  concept: {
    heading: "Object Destructuring",
    paragraphs: [
      "Object destructuring is a modern JavaScript feature used to extract properties from an object and store them in variables.",
      "Instead of repeatedly writing object.property, destructuring allows you to extract multiple properties in a shorter form.",
      "The variable names normally match the object property names.",
      "Destructuring is commonly used when working with function results, API responses, and configuration objects."
    ],
    remember:
      "Destructuring = Extract object properties into variables."
  },

  analogy: {
    heading: "Think of Destructuring Like Taking Items from a Box",
    items: [
      {
        icon: "📦",
        title: "Object",
        text: "The object contains several properties."
      },
      {
        icon: "✋",
        title: "Pick Values",
        text: "Destructuring lets you pick the properties you need."
      },
      {
        icon: "🏷️",
        title: "Create Variables",
        text: "The selected values are stored in variables."
      }
    ]
  },

  visual: {
    heading: "How Object Destructuring Works",
    description:
      "Destructuring extracts selected properties from an object.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Object",
        text: "Start with an object containing properties."
      },
      {
        icon: "2️⃣",
        title: "Select Properties",
        text: "Write the property names inside curly braces."
      },
      {
        icon: "3️⃣",
        title: "Create Variables",
        text: "JavaScript assigns the matching property values."
      },
      {
        icon: "4️⃣",
        title: "Use Variables",
        text: "Use the extracted values directly."
      }
    ],
    flow:
      "Object → Select Properties → Destructure → Variables"
  },

  code: {
    title: "Practical Example — Object Destructuring",
    description:
      "Extract selected properties from an object.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,
  category: "Electronics"
};

let { name, price } = product;

console.log(name);
console.log(price);`,
    output: `Laptop
55000`,
    explanation:
      "The destructuring statement extracts name and price from product and creates variables with the same names."
  },

  interview: {
    question: "What is object destructuring?",
    answer:
      "Object destructuring is a JavaScript syntax used to extract properties from an object into variables.",
    tip:
      "Object destructuring uses curly braces { }."
  },

  tricky: {
    question: "What happens if the property does not exist?",
    answer:
      "The resulting variable gets the value undefined unless a default value is provided."
  },

  practice: {
    question:
      "Create an object with three properties and extract two properties using destructuring.",
    hint:
      "Use let { property1, property2 } = object."
  },

  challenge: {
    title: "Extract Product Information",
    description:
      "Practice extracting selected object properties.",
    task:
      "Create an object with name, price, category, and available properties. Use destructuring to extract name and category and display them."
  }
},

"for-in": {
  concept: {
    heading: "for...in Loop",
    paragraphs: [
      "The for...in loop is used to iterate over the enumerable property keys of an object.",
      "During each iteration, the loop variable contains a property name.",
      "You can use the property name with bracket notation to access its value.",
      "for...in is commonly used when you need to inspect or process object properties."
    ],
    remember:
      "for...in → loops through object property keys."
  },

  analogy: {
    heading: "Think of for...in Like Checking Every Field",
    items: [
      {
        icon: "🔍",
        title: "Find Keys",
        text: "The loop visits each enumerable property key."
      },
      {
        icon: "🏷️",
        title: "Get Property",
        text: "The loop variable contains the current property name."
      },
      {
        icon: "📄",
        title: "Read Value",
        text: "Use object[key] to read the corresponding value."
      }
    ]
  },

  visual: {
    heading: "How for...in Works",
    description:
      "The loop visits object property keys one by one.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Object",
        text: "Create an object containing properties."
      },
      {
        icon: "2️⃣",
        title: "Get First Key",
        text: "for...in gets the first enumerable property key."
      },
      {
        icon: "3️⃣",
        title: "Access Value",
        text: "Use object[key] to get its value."
      },
      {
        icon: "4️⃣",
        title: "Continue",
        text: "The loop continues until all enumerable keys are processed."
      }
    ],
    flow:
      "Object → Property Key → Property Value → Next Key → Repeat"
  },

  code: {
    title: "Practical Example — Loop Through Object",
    description:
      "Use for...in to display every property and its value.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,
  category: "Electronics"
};

for (let key in product) {
  console.log(key, ":", product[key]);
}`,
    output: `name : Laptop
price : 55000
category : Electronics`,
    explanation:
      "During each iteration, key contains a property name such as name, price, or category. product[key] uses bracket notation to access the corresponding value."
  },

  interview: {
    question: "What is for...in used for?",
    answer:
      "for...in is used to iterate over the enumerable property keys of an object.",
    tip:
      "Remember: for...in → object keys."
  },

  tricky: {
    question: "What does the loop variable contain in for...in?",
    answer:
      "It contains the property key, not the property value."
  },

  practice: {
    question:
      "Create an object with three properties and use for...in to display each key and value.",
    hint:
      "Use console.log(key, object[key])."
  },

  challenge: {
    title: "Inspect an Object",
    description:
      "Practice looping through all properties of an object.",
    task:
      "Create a product object with at least four properties. Use for...in to display each property name and its corresponding value."
  }
},

"constructor-functions": {
  concept: {
    heading: "Constructor Functions",
    paragraphs: [
      "A constructor function is a function used to create multiple objects with the same structure.",
      "By convention, constructor function names usually begin with a capital letter.",
      "The new keyword creates a new object and connects it with the constructor function's prototype.",
      "Inside a constructor function, this refers to the newly created object when the function is called with new.",
      "Constructor functions were commonly used to create object-based structures before ES6 classes were introduced."
    ],
    remember:
      "Constructor function + new = Create objects with a common structure."
  },

  analogy: {
    heading: "Think of a Constructor Like a Blueprint",
    items: [
      {
        icon: "📐",
        title: "Blueprint",
        text: "The constructor function defines the common structure."
      },
      {
        icon: "🏭",
        title: "Create Objects",
        text: "new creates separate objects from the same structure."
      },
      {
        icon: "📦",
        title: "Independent Data",
        text: "Each created object can have its own property values."
      }
    ]
  },

  visual: {
    heading: "How a Constructor Function Works",
    description:
      "A constructor function acts as a reusable pattern for creating objects.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Constructor",
        text: "Define a function containing the common properties."
      },
      {
        icon: "2️⃣",
        title: "Use this",
        text: "Assign values to properties using this."
      },
      {
        icon: "3️⃣",
        title: "Use new",
        text: "Call the constructor with new."
      },
      {
        icon: "4️⃣",
        title: "Create Object",
        text: "JavaScript creates a new object with the defined properties."
      }
    ],
    flow:
      "Constructor Function → new → New Object → Properties"
  },

  code: {
    title: "Practical Example — Constructor Function",
    description:
      "Create multiple product objects using one constructor function.",
    language: "javascript",
    code: `function Product(name, price) {
  this.name = name;
  this.price = price;
}

let product1 = new Product("Laptop", 55000);
let product2 = new Product("Keyboard", 2500);

console.log(product1.name);
console.log(product2.name);`,
    output: `Laptop
Keyboard`,
    explanation:
      "Product acts as a constructor function. Each time new Product() is called, JavaScript creates a separate object. this refers to that newly created object."
  },

  interview: {
    question: "What is a constructor function?",
    answer:
      "A constructor function is used with new to create multiple objects with a common structure.",
    tip:
      "Remember the relationship: constructor function + new + this."
  },

  tricky: {
    question: "Why is the new keyword important here?",
    answer:
      "new creates a new object, sets its prototype, binds this to that new object, and returns the object unless the constructor explicitly returns another object."
  },

  practice: {
    question:
      "Create a Product constructor with name and price and create two objects using new.",
    hint:
      "Use this.name and this.price inside the constructor."
  },

  challenge: {
    title: "Create Multiple Objects",
    description:
      "Use a constructor function to create objects with the same structure.",
    task:
      "Create a Product constructor with name, price, and category. Create at least three product objects and display their information."
  }
},

"getters-setters": {
  concept: {
    heading: "Getters and Setters",
    paragraphs: [
      "A getter is a special method used to read a property value.",
      "A setter is a special method used to control how a property value is assigned.",
      "Getters and setters allow you to add logic when a property is read or changed.",
      "They are useful for validation, formatting, and controlling access to object data.",
      "A getter is accessed like a normal property, so parentheses are not used when reading it."
    ],
    remember:
      "get = control reading. set = control updating."
  },

  analogy: {
    heading: "Think of Getters and Setters Like a Controlled Door",
    items: [
      {
        icon: "🚪",
        title: "Getter",
        text: "A getter controls what happens when data is read."
      },
      {
        icon: "🔐",
        title: "Setter",
        text: "A setter controls what happens when data is changed."
      },
      {
        icon: "✅",
        title: "Validation",
        text: "A setter can check whether a new value is acceptable."
      }
    ]
  },

  visual: {
    heading: "How Getter and Setter Work",
    description:
      "Getters and setters provide controlled access to object properties.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Private-like Storage",
        text: "Store the actual value in another property."
      },
      {
        icon: "2️⃣",
        title: "Create Getter",
        text: "Use get to control how the value is read."
      },
      {
        icon: "3️⃣",
        title: "Create Setter",
        text: "Use set to control how a new value is assigned."
      },
      {
        icon: "4️⃣",
        title: "Use Like Property",
        text: "Read and assign the property without calling methods."
      }
    ],
    flow:
      "Property Access → Getter / Setter → Controlled Data"
  },

  code: {
    title: "Practical Example — Getter & Setter",
    description:
      "The setter validates the price before storing it.",
    language: "javascript",
    code: `let product = {
  _price: 0,

  get price() {
    return this._price;
  },

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("Price must be greater than 0");
    }
  }
};

product.price = 55000;

console.log(product.price);

product.price = -100;`,
    output: `55000
Price must be greater than 0`,
    explanation:
      "The setter checks the value before storing it. The getter returns the stored value. Notice that price is accessed like a normal property without parentheses."
  },

  interview: {
    question: "What is the difference between a getter and a setter?",
    answer:
      "A getter controls reading a property, while a setter controls assigning a new value to a property.",
    tip:
      "get → read, set → write."
  },

  tricky: {
    question: "Do you call a getter using parentheses?",
    answer:
      "No. A getter is accessed like a normal property, for example product.price."
  },

  practice: {
    question:
      "Create an object with a getter and setter for a price property. Prevent negative prices.",
    hint:
      "Use get price() and set price(value)."
  },

  challenge: {
    title: "Validate Object Data",
    description:
      "Use a setter to control invalid values.",
    task:
      "Create an object with a getter and setter for quantity. Allow only values greater than or equal to 0 and display the final quantity."
  }
},

"prototype": {
  concept: {
    heading: "What is a Prototype?",
    paragraphs: [
      "Every JavaScript object has a prototype from which it can inherit properties and methods.",
      "A prototype is another object that can provide shared behavior to objects.",
      "JavaScript uses prototype-based inheritance rather than classical inheritance at its core.",
      "Constructor functions can place shared methods on their prototype so that multiple objects can use the same method without creating a separate function for every object."
    ],
    remember:
      "Prototype = An object from which another object can inherit properties and methods."
  },

  analogy: {
    heading: "Think of a Prototype Like a Shared Library",
    items: [
      {
        icon: "📚",
        title: "Shared Resource",
        text: "A prototype can provide methods that many objects can use."
      },
      {
        icon: "♻️",
        title: "Reuse",
        text: "Shared methods do not need to be recreated for every object."
      },
      {
        icon: "🔗",
        title: "Connection",
        text: "Objects are connected to their prototype through the prototype chain."
      }
    ]
  },

  visual: {
    heading: "How Prototype Sharing Works",
    description:
      "Objects can access properties and methods through their prototype.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Constructor",
        text: "Create a constructor function for objects."
      },
      {
        icon: "2️⃣",
        title: "Add Shared Method",
        text: "Place a method on the constructor's prototype."
      },
      {
        icon: "3️⃣",
        title: "Create Objects",
        text: "Create objects using new."
      },
      {
        icon: "4️⃣",
        title: "Reuse Method",
        text: "All created objects can access the shared prototype method."
      }
    ],
    flow:
      "Constructor → prototype → Shared Method → Objects"
  },

  code: {
    title: "Practical Example — Shared Prototype Method",
    description:
      "A method is placed on the prototype and shared by multiple objects.",
    language: "javascript",
    code: `function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.showDetails = function() {
  console.log(this.name, this.price);
};

let product1 = new Product("Laptop", 55000);
let product2 = new Product("Keyboard", 2500);

product1.showDetails();
product2.showDetails();`,
    output: `Laptop 55000
Keyboard 2500`,
    explanation:
      "showDetails is stored on Product.prototype instead of being recreated inside every Product object. Both objects can find and use the shared method through the prototype chain."
  },

  interview: {
    question: "What is a prototype in JavaScript?",
    answer:
      "A prototype is an object that another object can inherit properties and methods from.",
    tip:
      "Prototype-based inheritance is a fundamental part of JavaScript."
  },

  tricky: {
    question: "Why put methods on a constructor's prototype?",
    answer:
      "It allows multiple objects to share the same method instead of creating a separate function for each object."
  },

  practice: {
    question:
      "Create a constructor and add a method to its prototype. Create two objects and call the method.",
    hint:
      "Use ConstructorName.prototype.methodName = function() { }."
  },

  challenge: {
    title: "Create a Shared Prototype Method",
    description:
      "Practice sharing behavior between multiple objects.",
    task:
      "Create a Product constructor and add a showDetails() method to Product.prototype. Create three objects and call the method for each."
  }
},

"prototype-chain": {
  concept: {
    heading: "Understanding the Prototype Chain",
    paragraphs: [
      "When JavaScript cannot find a property directly on an object, it looks at the object's prototype.",
      "If the property is not found there, JavaScript continues searching through the prototype's prototype.",
      "This sequence of linked objects is called the prototype chain.",
      "The search continues until the property is found or the chain reaches null."
    ],
    remember:
      "Object → Prototype → Prototype's Prototype → ... → null"
  },

  analogy: {
    heading: "Think of It Like Asking for Help",
    items: [
      {
        icon: "🙋",
        title: "Object",
        text: "First, JavaScript checks the object itself."
      },
      {
        icon: "👥",
        title: "Prototype",
        text: "If not found, JavaScript checks its prototype."
      },
      {
        icon: "🔗",
        title: "Continue",
        text: "The search continues through linked prototypes."
      }
    ]
  },

  visual: {
    heading: "How the Prototype Chain Search Works",
    description:
      "JavaScript searches from the current object upward through its prototypes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check Object",
        text: "JavaScript first checks the object's own properties."
      },
      {
        icon: "2️⃣",
        title: "Check Prototype",
        text: "If not found, it checks the object's prototype."
      },
      {
        icon: "3️⃣",
        title: "Continue Search",
        text: "The search moves to the next prototype."
      },
      {
        icon: "4️⃣",
        title: "Reach null",
        text: "The search ends when the property is found or the chain reaches null."
      }
    ],
    flow:
      "Object → Prototype → Parent Prototype → null"
  },

  code: {
    title: "Practical Example — Prototype Chain",
    description:
      "A method on a prototype can be found through the prototype chain.",
    language: "javascript",
    code: `let product = {
  name: "Laptop"
};

console.log(product.toString());`,
    output: `[object Object]`,
    explanation:
      "toString is not directly defined on product. JavaScript searches through its prototype chain and finds toString through Object.prototype."
  },

  interview: {
    question: "What is the prototype chain?",
    answer:
      "The prototype chain is the sequence of linked prototype objects JavaScript searches when looking for a property or method.",
    tip:
      "JavaScript searches the object first and then moves upward through prototypes."
  },

  tricky: {
    question: "When does the prototype chain search stop?",
    answer:
      "It stops when the property is found or when the chain reaches null."
  },

  practice: {
    question:
      "Create an object and use toString() to observe inherited behavior.",
    hint:
      "toString() is available through the prototype chain."
  },

  challenge: {
    title: "Explore Inherited Methods",
    description:
      "Understand that objects can use methods they do not directly contain.",
    task:
      "Create an object with one property and call toString(). Then explain why the object can use a method that was not directly defined on it."
  }
},

"object-create": {
  concept: {
    heading: "Object.create()",
    paragraphs: [
      "Object.create() creates a new object using another object as its prototype.",
      "The newly created object can access properties and methods from the specified prototype.",
      "This provides direct control over the prototype of a new object.",
      "Object.create() is useful when working with prototype-based inheritance."
    ],
    remember:
      "Object.create(prototype) creates a new object linked to the given prototype."
  },

  analogy: {
    heading: "Think of Object.create() Like Using a Template",
    items: [
      {
        icon: "📋",
        title: "Template",
        text: "An existing object can act as a prototype template."
      },
      {
        icon: "🆕",
        title: "New Object",
        text: "Object.create() creates a new object linked to that prototype."
      },
      {
        icon: "🔗",
        title: "Inheritance",
        text: "The new object can access inherited properties and methods."
      }
    ]
  },

  visual: {
    heading: "How Object.create() Works",
    description:
      "Object.create() creates a new object with a specified prototype.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Prototype Object",
        text: "Create an object containing shared behavior."
      },
      {
        icon: "2️⃣",
        title: "Call Object.create()",
        text: "Pass the prototype object as the argument."
      },
      {
        icon: "3️⃣",
        title: "New Object",
        text: "JavaScript creates a new object linked to the prototype."
      },
      {
        icon: "4️⃣",
        title: "Use Inherited Method",
        text: "The new object can access methods from its prototype."
      }
    ],
    flow:
      "Prototype Object → Object.create() → New Object → Inherited Behavior"
  },

  code: {
    title: "Practical Example — Object.create()",
    description:
      "Create a new object that inherits a method from another object.",
    language: "javascript",
    code: `let productPrototype = {
  showCategory: function() {
    console.log("Electronics");
  }
};

let product = Object.create(productPrototype);

product.name = "Laptop";

console.log(product.name);
product.showCategory();`,
    output: `Laptop
Electronics`,
    explanation:
      "product is created using productPrototype as its prototype. The name property belongs directly to product, while showCategory is inherited from productPrototype."
  },

  interview: {
    question: "What does Object.create() do?",
    answer:
      "Object.create() creates a new object and sets the specified object as its prototype.",
    tip:
      "The argument passed to Object.create() becomes the new object's prototype."
  },

  tricky: {
    question: "Is the prototype object's property copied directly into the new object?",
    answer:
      "No. The new object is linked to the prototype, so inherited properties are accessed through the prototype chain."
  },

  practice: {
    question:
      "Create a prototype object with a method and create another object using Object.create().",
    hint:
      "Pass the prototype object to Object.create()."
  },

  challenge: {
    title: "Create an Object from a Prototype",
    description:
      "Practice direct prototype-based object creation.",
    task:
      "Create a prototype object containing a showMessage() method. Use Object.create() to create a new object and call the inherited method."
  }
},

"object-keys-values-entries": {
  concept: {
    heading: "Object.keys(), Object.values() and Object.entries()",
    paragraphs: [
      "JavaScript provides useful methods for extracting information from an object's own enumerable properties.",
      "Object.keys() returns an array containing the property keys.",
      "Object.values() returns an array containing the property values.",
      "Object.entries() returns an array containing key-value pairs as nested arrays.",
      "These methods are useful when you want to process object data using array methods."
    ],
    remember:
      "keys() → keys, values() → values, entries() → key-value pairs."
  },

  analogy: {
    heading: "Think of an Object as a Record",
    items: [
      {
        icon: "🏷️",
        title: "keys()",
        text: "Gives you all the field names."
      },
      {
        icon: "📦",
        title: "values()",
        text: "Gives you all the stored values."
      },
      {
        icon: "🔗",
        title: "entries()",
        text: "Gives you each key together with its value."
      }
    ]
  },

  visual: {
    heading: "Three Ways to Read Object Data",
    description:
      "These methods convert object information into arrays.",
    steps: [
      {
        icon: "1️⃣",
        title: "Object.keys()",
        text: "Returns an array of property names."
      },
      {
        icon: "2️⃣",
        title: "Object.values()",
        text: "Returns an array of property values."
      },
      {
        icon: "3️⃣",
        title: "Object.entries()",
        text: "Returns an array containing key-value pairs."
      },
      {
        icon: "4️⃣",
        title: "Process Data",
        text: "The resulting arrays can be processed with array methods."
      }
    ],
    flow:
      "Object → keys() / values() / entries() → Array"
  },

  code: {
    title: "Practical Example — keys, values and entries",
    description:
      "Use the three methods to extract different parts of an object.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000,
  category: "Electronics"
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));`,
    output: `["name", "price", "category"]
["Laptop", 55000, "Electronics"]
[
  ["name", "Laptop"],
  ["price", 55000],
  ["category", "Electronics"]
]`,
    explanation:
      "Object.keys() returns property names, Object.values() returns property values, and Object.entries() returns key-value pairs."
  },

  interview: {
    question: "What is the difference between Object.keys(), Object.values(), and Object.entries()?",
    answer:
      "keys() returns keys, values() returns values, and entries() returns key-value pairs.",
    tip:
      "All three return arrays."
  },

  tricky: {
    question: "What type of value does Object.keys() return?",
    answer:
      "It returns an array containing the object's own enumerable property keys."
  },

  practice: {
    question:
      "Create an object and display its keys, values, and entries.",
    hint:
      "Use Object.keys(), Object.values(), and Object.entries()."
  },

  challenge: {
    title: "Extract Object Information",
    description:
      "Practice converting object information into arrays.",
    task:
      "Create an object with at least four properties. Display its keys, values, and entries separately."
  }
},

"object-spread-rest": {
  concept: {
    heading: "Object Spread and Rest",
    paragraphs: [
      "The spread syntax (...) allows you to expand the properties of an object into another object.",
      "Object spread is commonly used to copy or combine objects.",
      "The rest syntax (...) collects remaining properties into a new object during destructuring.",
      "Although both use the same three dots, their purpose depends on where they are used.",
      "Spread expands values, while rest collects remaining values."
    ],
    remember:
      "Spread = expand/copy. Rest = collect remaining properties."
  },

  analogy: {
    heading: "Think of Spread and Rest Like Packing and Unpacking",
    items: [
      {
        icon: "📤",
        title: "Spread",
        text: "Spread opens an object and places its properties into another object."
      },
      {
        icon: "📥",
        title: "Rest",
        text: "Rest collects the remaining properties into another object."
      },
      {
        icon: "🔄",
        title: "Reuse",
        text: "Both are useful when working with object data."
      }
    ]
  },

  visual: {
    heading: "Spread vs Rest",
    description:
      "The same ... syntax has different purposes depending on its position.",
    steps: [
      {
        icon: "1️⃣",
        title: "Spread",
        text: "Use ... when you want to expand object properties."
      },
      {
        icon: "2️⃣",
        title: "Copy or Combine",
        text: "Use object spread to create a new object or combine objects."
      },
      {
        icon: "3️⃣",
        title: "Rest",
        text: "Use ... during destructuring to collect remaining properties."
      },
      {
        icon: "4️⃣",
        title: "Remember",
        text: "Spread expands; rest collects."
      }
    ],
    flow:
      "Spread → Expand Properties | Rest → Collect Remaining Properties"
  },

  code: {
    title: "Practical Example — Object Spread & Rest",
    description:
      "Use spread to combine objects and rest to collect remaining properties.",
    language: "javascript",
    code: `let product = {
  name: "Laptop",
  price: 55000
};

let details = {
  category: "Electronics",
  available: true
};

let completeProduct = {
  ...product,
  ...details
};

console.log(completeProduct);

let { name, ...otherDetails } = completeProduct;

console.log(name);
console.log(otherDetails);`,
    output: `{
  name: "Laptop",
  price: 55000,
  category: "Electronics",
  available: true
}
Laptop
{
  price: 55000,
  category: "Electronics",
  available: true
}`,
    explanation:
      "The spread operator expands properties from product and details into completeProduct. During destructuring, name is extracted and the rest operator collects the remaining properties into otherDetails."
  },

  interview: {
    question: "What is the difference between spread and rest syntax?",
    answer:
      "Spread expands or copies values, while rest collects remaining values.",
    tip:
      "Both use ..., so always look at how the syntax is being used."
  },

  tricky: {
    question: "Is spread a deep copy of an object?",
    answer:
      "No. Object spread creates a shallow copy. Nested objects are still referenced rather than deeply copied."
  },

  practice: {
    question:
      "Create two objects and combine them using object spread. Then use rest destructuring to collect remaining properties.",
    hint:
      "Use { ...object1, ...object2 } for spread and { firstProperty, ...remaining } for rest."
  },

  challenge: {
    title: "Combine and Extract Object Data",
    description:
      "Practice both object spread and rest syntax.",
    task:
      "Create two objects containing related product information. Combine them into one object using spread. Then destructure one property and collect the remaining properties using rest."
  }
},// ============================================================
// ES6+ MODERN JAVASCRIPT
// ============================================================

"es6-introduction": {
  concept: {
    heading: "What is ES6?",
    paragraphs: [
      "ES6 stands for ECMAScript 2015. It was a major update to the JavaScript language.",
      "ES6 introduced many features that made JavaScript easier to write, easier to maintain, and more suitable for large applications.",
      "Some important ES6 features include default parameters, rest and spread syntax, destructuring, modules, classes, and enhanced object syntax.",
      "Modern JavaScript continued to add new features after ES6, so developers commonly use the term ES6+ for modern JavaScript."
    ],
    remember:
      "ES6 was a major JavaScript update that introduced many features used in modern development."
  },
  analogy: {
    heading: "Think of ES6 as a Major Upgrade",
    items: [
      {
        icon: "🚀",
        title: "Better Syntax",
        text: "ES6 introduced shorter and cleaner ways to write common JavaScript code."
      },
      {
        icon: "🧩",
        title: "Better Organization",
        text: "Features such as modules and classes help developers organize larger applications."
      },
      {
        icon: "⚡",
        title: "Modern Development",
        text: "ES6 features are now commonly used in frontend and backend JavaScript projects."
      }
    ]
  },
  visual: {
    heading: "From Older JavaScript to Modern JavaScript",
    description:
      "ES6 added several language features that improved the way developers write JavaScript.",
    steps: [
      {
        icon: "1️⃣",
        title: "Older JavaScript",
        text: "Developers used older syntax and patterns to build applications."
      },
      {
        icon: "2️⃣",
        title: "ES6 Arrives",
        text: "ES6 introduced many modern language features."
      },
      {
        icon: "3️⃣",
        title: "Modern JavaScript",
        text: "Developers combine ES6 and later features to write cleaner applications."
      }
    ],
    flow:
      "Older JavaScript → ES6 → ES6+ → Modern JavaScript Applications"
  },
  code: {
    title: "Practical Example — Modern JavaScript",
    description:
      "Here is a simple example using a modern JavaScript feature.",
    language: "javascript",
    code: `function calculateTotal(price, tax = 0) {
  return price + tax;
}

console.log(calculateTotal(1000));
console.log(calculateTotal(1000, 180));`,
    output: `1000
1180`,
    explanation:
      "The function uses a default parameter. If tax is not provided, JavaScript uses 0. This is one of the useful features introduced with ES6."
  },
  interview: {
    question: "What is ES6?",
    answer:
      "ES6, also called ECMAScript 2015, was a major update to JavaScript that introduced many modern language features.",
    tip:
      "Remember: ES6 = ECMAScript 2015."
  },
  tricky: {
    question: "Is ES6 a different programming language?",
    answer:
      "No. ES6 is a version of the JavaScript language specification."
  },
  practice: {
    question:
      "Write a function that uses a default parameter.",
    hint:
      "Give the parameter a value after the = sign."
  },
  challenge: {
    title: "Explore Modern JavaScript",
    description:
      "Identify and use one ES6 feature in a simple program.",
    task:
      "Create a function with a default parameter and call it once with a value and once without a value."
  }
},

"default-parameters": {
  concept: {
    heading: "Default Parameters",
    paragraphs: [
      "A function parameter normally receives the value passed during a function call.",
      "With default parameters, we can provide a value that JavaScript will use when the argument is missing or undefined.",
      "Default parameters make functions safer and reduce the need for separate fallback logic.",
      "The default value is written using the = operator in the parameter list."
    ],
    remember:
      "Default parameter = a fallback value for a missing or undefined argument."
  },
  analogy: {
    heading: "Think of a Default Setting",
    items: [
      {
        icon: "⚙️",
        title: "Normal Value",
        text: "The caller can provide a value."
      },
      {
        icon: "🔄",
        title: "Fallback",
        text: "If no value is provided, the default value is used."
      }
    ]
  },
  visual: {
    heading: "How Default Parameters Work",
    description:
      "JavaScript checks whether an argument was supplied.",
    steps: [
      {
        icon: "1️⃣",
        title: "Define Parameter",
        text: "Give the parameter a default value."
      },
      {
        icon: "2️⃣",
        title: "Call Function",
        text: "Pass an argument or leave it undefined."
      },
      {
        icon: "3️⃣",
        title: "Check Value",
        text: "JavaScript uses the supplied value when available."
      },
      {
        icon: "4️⃣",
        title: "Use Default",
        text: "If the argument is missing, the default value is used."
      }
    ],
    flow:
      "Function Call → Argument Available? → Yes: Use Argument | No: Use Default"
  },
  code: {
    title: "Practical Example — Default Value",
    description:
      "The function uses 10 as the default quantity.",
    language: "javascript",
    code: `function calculatePrice(price, quantity = 1) {
  return price * quantity;
}

console.log(calculatePrice(500));
console.log(calculatePrice(500, 3));`,
    output: `500
1500`,
    explanation:
      "In the first call, quantity is missing, so JavaScript uses the default value 1. In the second call, quantity is 3, so the supplied value is used."
  },
  interview: {
    question: "What is a default parameter?",
    answer:
      "A default parameter provides a value that is used when a function argument is missing or undefined.",
    tip:
      "Syntax: function test(value = defaultValue) {}"
  },
  tricky: {
    question: "When is the default parameter used?",
    answer:
      "It is used when the corresponding argument is missing or its value is undefined."
  },
  practice: {
    question:
      "Create a function with a default discount value of 10.",
    hint:
      "Use discount = 10 in the parameter list."
  },
  challenge: {
    title: "Create a Safe Function",
    description:
      "Practice using default parameters.",
    task:
      "Create a function that calculates a final price using price and discount. Give discount a default value of 10."
  }
},

"rest-parameters": {
  concept: {
    heading: "Rest Parameters",
    paragraphs: [
      "Rest parameters allow a function to accept any number of arguments and collect them into an array.",
      "The rest parameter is written using three dots (...) before the parameter name.",
      "The collected values can then be processed like a normal array.",
      "Only one rest parameter can be used in a function, and it must be the last parameter."
    ],
    remember:
      "Rest parameters collect remaining function arguments into an array."
  },
  analogy: {
    heading: "Think of a Collection Box",
    items: [
      {
        icon: "📦",
        title: "Many Values",
        text: "A function can receive many arguments."
      },
      {
        icon: "🧺",
        title: "Collect",
        text: "The rest parameter puts the remaining arguments into one array."
      },
      {
        icon: "🔢",
        title: "Process",
        text: "The array can then be processed normally."
      }
    ]
  },
  visual: {
    heading: "How Rest Parameters Work",
    description:
      "The remaining arguments are collected into an array.",
    steps: [
      {
        icon: "1️⃣",
        title: "Receive Arguments",
        text: "The function receives multiple values."
      },
      {
        icon: "2️⃣",
        title: "Use ...",
        text: "Place three dots before the rest parameter."
      },
      {
        icon: "3️⃣",
        title: "Create Array",
        text: "JavaScript collects the remaining arguments into an array."
      }
    ],
    flow:
      "Multiple Arguments → ...rest → Array of Remaining Values"
  },
  code: {
    title: "Practical Example — Adding Multiple Values",
    description:
      "The rest parameter collects all numbers passed to the function.",
    language: "javascript",
    code: `function addNumbers(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30, 40));`,
    output: `30
100`,
    explanation:
      "The numbers parameter collects all supplied arguments into an array. The loop then processes each value."
  },
  interview: {
    question: "What is a rest parameter?",
    answer:
      "A rest parameter collects multiple function arguments into an array using the ... syntax.",
    tip:
      "Rest collects remaining arguments."
  },
  tricky: {
    question: "Where must the rest parameter appear?",
    answer:
      "The rest parameter must be the last parameter in a function."
  },
  practice: {
    question:
      "Create a function that accepts any number of numbers using a rest parameter.",
    hint:
      "Use function calculate(...numbers)."
  },
  challenge: {
    title: "Build a Flexible Calculator",
    description:
      "Use rest parameters to handle different numbers of inputs.",
    task:
      "Create a function that accepts any number of prices and returns their total."
  }
},

"spread-operator": {
  concept: {
    heading: "Spread Operator",
    paragraphs: [
      "The spread operator uses three dots (...) to expand the values of an iterable or the properties of an object.",
      "With arrays, spread can be used to copy or combine arrays.",
      "With objects, spread can be used to copy or combine object properties.",
      "Spread is especially useful when creating new arrays or objects without directly changing the original."
    ],
    remember:
      "Spread expands values instead of collecting them."
  },
  analogy: {
    heading: "Spread Means Open and Expand",
    items: [
      {
        icon: "📦",
        title: "Original Collection",
        text: "Values are stored inside an array or object."
      },
      {
        icon: "↔️",
        title: "Expand",
        text: "The ... syntax expands those values."
      },
      {
        icon: "🆕",
        title: "Create New",
        text: "The expanded values can be placed into a new array or object."
      }
    ]
  },
  visual: {
    heading: "How Spread Works",
    description:
      "Spread takes values from one collection and expands them into another.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Collection",
        text: "Start with an array or object."
      },
      {
        icon: "2️⃣",
        title: "Use ...",
        text: "Place three dots before the collection."
      },
      {
        icon: "3️⃣",
        title: "Expand",
        text: "JavaScript expands the contained values."
      }
    ],
    flow:
      "Array/Object → ... → Expanded Values → New Array/Object"
  },
  code: {
    title: "Practical Example — Combining Arrays",
    description:
      "Spread can combine two arrays into a new array.",
    language: "javascript",
    code: `let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "MongoDB"];

let technologies = [...frontend, ...backend];

console.log(technologies);`,
    output:
      `["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]`,
    explanation:
      "The spread operator expands the values of both arrays and places them into a new array."
  },
  interview: {
    question: "What is the spread operator?",
    answer:
      "The spread operator expands the values of an array or properties of an object using three dots (...).",
    tip:
      "Spread = expand."
  },
  tricky: {
    question: "Does spread automatically modify the original array?",
    answer:
      "No. When used to create a new array or object, spread copies or expands the values into the new structure."
  },
  practice: {
    question:
      "Create two arrays and combine them using the spread operator.",
    hint:
      "Use [...array1, ...array2]."
  },
  challenge: {
    title: "Combine Technology Lists",
    description:
      "Practice creating a new array using spread syntax.",
    task:
      "Create separate frontend and backend technology arrays and combine them into one new array."
  }
},

"destructuring": {
  concept: {
    heading: "Destructuring",
    paragraphs: [
      "Destructuring provides a convenient way to extract values from arrays or properties from objects and store them in variables.",
      "Array destructuring works according to position.",
      "Object destructuring works according to property names.",
      "Destructuring makes code shorter and is commonly used in modern JavaScript applications."
    ],
    remember:
      "Destructuring = extract values from arrays or objects into variables."
  },
  analogy: {
    heading: "Think of Unpacking a Box",
    items: [
      {
        icon: "📦",
        title: "Collection",
        text: "The values are stored inside an array or object."
      },
      {
        icon: "📤",
        title: "Unpack",
        text: "Destructuring extracts selected values."
      },
      {
        icon: "📝",
        title: "Variables",
        text: "The extracted values are stored in variables."
      }
    ]
  },
  visual: {
    heading: "Array vs Object Destructuring",
    description:
      "Arrays use position while objects use property names.",
    steps: [
      {
        icon: "1️⃣",
        title: "Array",
        text: "Values are extracted according to their positions."
      },
      {
        icon: "2️⃣",
        title: "Object",
        text: "Properties are extracted according to their names."
      },
      {
        icon: "3️⃣",
        title: "Store",
        text: "The extracted values become variables."
      }
    ],
    flow:
      "Array/Object → Destructuring Pattern → Variables"
  },
  code: {
    title: "Practical Example — Array and Object",
    description:
      "This example shows both common forms of destructuring.",
    language: "javascript",
    code: `let products = ["Laptop", "Mouse", "Keyboard"];

let [first, second] = products;

console.log(first);
console.log(second);

let product = {
  title: "Monitor",
  price: 12000
};

let { title, price } = product;

console.log(title);
console.log(price);`,
    output:
      `Laptop
Mouse
Monitor
12000`,
    explanation:
      "Array destructuring extracts values by position. Object destructuring extracts values using matching property names."
  },
  interview: {
    question: "What is destructuring?",
    answer:
      "Destructuring is a syntax used to extract values from arrays or properties from objects into variables.",
    tip:
      "Array = position, Object = property name."
  },
  tricky: {
    question: "Does object destructuring depend on property position?",
    answer:
      "No. Object destructuring matches property names."
  },
  practice: {
    question:
      "Create an object with three properties and extract two of them using destructuring.",
    hint:
      "Use let { property1, property2 } = object."
  },
  challenge: {
    title: "Extract Product Data",
    description:
      "Practice extracting values from an object.",
    task:
      "Create a product object containing title, price and category. Use destructuring to extract title and price."
  }
},

"enhanced-object-literals": {
  concept: {
    heading: "Enhanced Object Literals",
    paragraphs: [
      "ES6 introduced several improvements to object literal syntax.",
      "When a variable name and object property name are the same, property shorthand allows us to write the name only once.",
      "ES6 also provides a shorter syntax for defining methods inside objects.",
      "Computed property names allow property names to be created dynamically."
    ],
    remember:
      "Enhanced object literals provide shorter and more flexible object syntax."
  },
  analogy: {
    heading: "Cleaner Object Creation",
    items: [
      {
        icon: "✂️",
        title: "Less Code",
        text: "Property shorthand reduces repeated variable and property names."
      },
      {
        icon: "⚡",
        title: "Short Methods",
        text: "Object methods can be written without the function keyword."
      },
      {
        icon: "🔑",
        title: "Dynamic Keys",
        text: "Computed property names allow keys to be created from expressions."
      }
    ]
  },
  visual: {
    heading: "Three Useful Improvements",
    description:
      "Enhanced object literals make object creation cleaner.",
    steps: [
      {
        icon: "1️⃣",
        title: "Property Shorthand",
        text: "Use a variable directly as a property."
      },
      {
        icon: "2️⃣",
        title: "Method Shorthand",
        text: "Define object methods using shorter syntax."
      },
      {
        icon: "3️⃣",
        title: "Computed Property",
        text: "Create a property name dynamically."
      }
    ],
    flow:
      "Variables → Shorthand Properties → Cleaner Object"
  },
  code: {
    title: "Practical Example — Enhanced Object",
    description:
      "This example uses property shorthand and method shorthand.",
    language: "javascript",
    code: `let title = "Laptop";
let price = 55000;

let product = {
  title,
  price,

  display() {
    console.log(title, price);
  }
};

console.log(product);
product.display();`,
    output:
      `{ title: "Laptop", price: 55000 }
Laptop 55000`,
    explanation:
      "The properties title and price use shorthand because the variable names and property names are the same. The display method also uses modern shorthand syntax."
  },
  interview: {
    question: "What are enhanced object literals?",
    answer:
      "They are modern object syntax improvements such as property shorthand, method shorthand and computed property names.",
    tip:
      "They make object code shorter and cleaner."
  },
  tricky: {
    question: "Can a variable be used directly as an object property?",
    answer:
      "Yes. If the variable and property should have the same name, property shorthand can be used."
  },
  practice: {
    question:
      "Create an object using property shorthand and a method shorthand.",
    hint:
      "Create variables first and then use their names directly inside the object."
  },
  challenge: {
    title: "Build a Modern Object",
    description:
      "Practice enhanced object literal syntax.",
    task:
      "Create variables for a product title and price. Build an object using shorthand properties and add a method that displays the information."
  }
},

"optional-chaining": {
  concept: {
    heading: "Optional Chaining (?.)",
    paragraphs: [
      "Optional chaining allows JavaScript to safely access a property or method when a value might be null or undefined.",
      "Without optional chaining, trying to access a property of null or undefined can produce a TypeError.",
      "The ?. operator stops the access and returns undefined when the value before it is null or undefined.",
      "Optional chaining is especially useful when working with nested data received from APIs."
    ],
    remember:
      "?. safely checks whether a value exists before continuing property access."
  },
  analogy: {
    heading: "Think of a Safety Check",
    items: [
      {
        icon: "🔍",
        title: "Check",
        text: "JavaScript checks whether the value exists."
      },
      {
        icon: "🛡️",
        title: "Protect",
        text: "If the value is null or undefined, the access stops safely."
      },
      {
        icon: "📄",
        title: "Continue",
        text: "If the value exists, JavaScript continues accessing the property."
      }
    ]
  },
  visual: {
    heading: "How Optional Chaining Works",
    description:
      "The operator protects property access when data may be missing.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Access",
        text: "Begin accessing an object property."
      },
      {
        icon: "2️⃣",
        title: "Use ?.",
        text: "Place ?. before the property that may not exist."
      },
      {
        icon: "3️⃣",
        title: "Check Value",
        text: "JavaScript checks for null or undefined."
      },
      {
        icon: "4️⃣",
        title: "Return Result",
        text: "The property value is returned or undefined is produced."
      }
    ],
    flow:
      "Object → ?. → Value Exists? → Value | undefined"
  },
  code: {
    title: "Practical Example — Safe Nested Access",
    description:
      "Optional chaining prevents an error when address data is missing.",
    language: "javascript",
    code: `let user = {
  profile: {
    address: {
      city: "Delhi"
    }
  }
};

console.log(user.profile?.address?.city);
console.log(user.profile?.contact?.phone);`,
    output:
      `Delhi
undefined`,
    explanation:
      "The first property path exists, so Delhi is returned. The contact property does not exist, so optional chaining safely returns undefined instead of throwing an error."
  },
  interview: {
    question: "What is optional chaining?",
    answer:
      "Optional chaining uses ?. to safely access properties or methods when a value may be null or undefined.",
    tip:
      "?. prevents unnecessary errors during uncertain property access."
  },
  tricky: {
    question: "What does optional chaining return when the value is null or undefined?",
    answer:
      "It returns undefined instead of throwing an error for that access."
  },
  practice: {
    question:
      "Create a nested object and safely access a property that may not exist.",
    hint:
      "Use ?. between nested properties."
  },
  challenge: {
    title: "Handle Missing API Data",
    description:
      "Practice safely accessing nested data.",
    task:
      "Create an object with profile and address data. Use optional chaining to safely access city and phone properties."
  }
},

"nullish-coalescing": {
  concept: {
    heading: "Nullish Coalescing (??)",
    paragraphs: [
      "The nullish coalescing operator ?? provides a fallback value when the left side is null or undefined.",
      "It is useful when a value may be missing but valid values such as 0, false, or an empty string should still be preserved.",
      "This makes ?? different from the logical OR operator ||, which treats many falsy values as needing a fallback."
    ],
    remember:
      "?? uses the fallback only when the value is null or undefined."
  },
  analogy: {
    heading: "Think of a Backup Value",
    items: [
      {
        icon: "📌",
        title: "Primary Value",
        text: "JavaScript first checks the value on the left."
      },
      {
        icon: "🔄",
        title: "Fallback",
        text: "If the value is null or undefined, the right side is used."
      },
      {
        icon: "✅",
        title: "Keep Valid Values",
        text: "Values such as 0 and false are not replaced."
      }
    ]
  },
  visual: {
    heading: "How ?? Works",
    description:
      "The operator checks specifically for null or undefined.",
    steps: [
      {
        icon: "1️⃣",
        title: "Check Value",
        text: "JavaScript checks the value on the left."
      },
      {
        icon: "2️⃣",
        title: "Nullish?",
        text: "If it is null or undefined, use the fallback."
      },
      {
        icon: "3️⃣",
        title: "Valid Value",
        text: "Otherwise keep the original value."
      }
    ],
    flow:
      "Value → null/undefined? → Yes: Fallback | No: Original Value"
  },
  code: {
    title: "Practical Example — Safe Default Value",
    description:
      "The fallback is used only for null or undefined.",
    language: "javascript",
    code: `let quantity = 0;
let discount = null;

console.log(quantity ?? 10);
console.log(discount ?? 10);`,
    output:
      `0
10`,
    explanation:
      "quantity is 0, and 0 is a valid value, so it is preserved. discount is null, so JavaScript uses the fallback value 10."
  },
  interview: {
    question: "What does the nullish coalescing operator do?",
    answer:
      "It returns the right-side fallback value when the left side is null or undefined.",
    tip:
      "?? checks null and undefined specifically."
  },
  tricky: {
    question: "Does 0 trigger the fallback with ??",
    answer:
      "No. 0 is not null or undefined, so it is returned."
  },
  practice: {
    question:
      "Create a variable with null and use ?? to provide a default value.",
    hint:
      "Example: value ?? defaultValue"
  },
  challenge: {
    title: "Create a Safe Setting",
    description:
      "Use nullish coalescing to provide a fallback setting.",
    task:
      "Create a variable called pageSize with null and use ?? to provide a default value of 10."
  }
},

"modules": {
  concept: {
    heading: "JavaScript Modules",
    paragraphs: [
      "A module is a JavaScript file that contains code which can be shared with other JavaScript files.",
      "Modules help divide a large application into smaller, focused files.",
      "JavaScript modules use export to make values available and import to use exported values in another file.",
      "Modules improve code organization, maintainability, and reusability."
    ],
    remember:
      "export shares code; import uses shared code."
  },
  analogy: {
    heading: "Think of Modules as Separate Departments",
    items: [
      {
        icon: "📁",
        title: "Separate Files",
        text: "Different responsibilities can be placed in different files."
      },
      {
        icon: "📤",
        title: "Export",
        text: "A module can make selected values available."
      },
      {
        icon: "📥",
        title: "Import",
        text: "Another module can use those exported values."
      }
    ]
  },
  visual: {
    heading: "Module Flow",
    description:
      "Modules allow JavaScript files to communicate in an organized way.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Module",
        text: "Place reusable code inside a JavaScript file."
      },
      {
        icon: "2️⃣",
        title: "Export",
        text: "Export the value or function that should be shared."
      },
      {
        icon: "3️⃣",
        title: "Import",
        text: "Import the required value into another file."
      },
      {
        icon: "4️⃣",
        title: "Use",
        text: "Use the imported functionality."
      }
    ],
    flow:
      "Module A → export → import → Module B → Use"
  },
  code: {
    title: "Practical Example — Export and Import",
    description:
      "These two files demonstrate the basic module pattern.",
    language: "javascript",
    code: `// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";

console.log(add(10, 20));`,
    output:
      `30`,
    explanation:
      "The add function is exported from math.js and imported into app.js. The application can then use the function."
  },
  interview: {
    question: "Why are JavaScript modules used?",
    answer:
      "Modules divide applications into smaller files and allow reusable code to be shared using export and import.",
    tip:
      "Modules help organize large applications."
  },
  tricky: {
    question: "Which keywords are commonly used with JavaScript modules?",
    answer:
      "The export and import keywords are used to share and use module values."
  },
  practice: {
    question:
      "Create a function in one file and export it.",
    hint:
      "Use export before the function declaration."
  },
  challenge: {
    title: "Create Two JavaScript Modules",
    description:
      "Practice separating reusable code into files.",
    task:
      "Create a utility file containing a function that calculates a total. Export it and import it into another JavaScript file."
  }
},

"classes": {
  concept: {
    heading: "JavaScript Classes",
    paragraphs: [
      "A class is a template for creating objects with shared properties and methods.",
      "Classes provide a cleaner syntax for object-oriented programming in JavaScript.",
      "A class can contain a constructor that initializes object data.",
      "Methods defined in a class can be used by objects created from that class."
    ],
    remember:
      "Class = template for creating similar objects."
  },
  analogy: {
    heading: "Think of a Class as a Blueprint",
    items: [
      {
        icon: "📐",
        title: "Blueprint",
        text: "A class defines the structure and behaviour."
      },
      {
        icon: "🏗️",
        title: "Create Objects",
        text: "Objects can be created from the class."
      },
      {
        icon: "⚙️",
        title: "Methods",
        text: "Objects can use methods defined by the class."
      }
    ]
  },
  visual: {
    heading: "Class to Object",
    description:
      "A class defines a reusable structure.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Class",
        text: "Define the class structure."
      },
      {
        icon: "2️⃣",
        title: "Constructor",
        text: "Initialize object properties."
      },
      {
        icon: "3️⃣",
        title: "Create Object",
        text: "Use new to create an object."
      },
      {
        icon: "4️⃣",
        title: "Use Methods",
        text: "Call methods through the object."
      }
    ],
    flow:
      "Class → new → Object → Properties + Methods"
  },
  code: {
    title: "Practical Example — Product Class",
    description:
      "A class can be used to create multiple product objects with the same structure.",
    language: "javascript",
    code: `class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  display() {
    console.log(this.title, this.price);
  }
}

let product = new Product("Laptop", 55000);

product.display();`,
    output:
      `Laptop 55000`,
    explanation:
      "The Product class defines a common structure. The new keyword creates an object from the class, and the display method can be called through that object."
  },
  interview: {
    question: "What is a class in JavaScript?",
    answer:
      "A class is a template used to create objects with shared properties and methods.",
    tip:
      "Class defines; object is created from the class."
  },
  tricky: {
    question: "Which keyword is used to create an object from a class?",
    answer:
      "The new keyword is used."
  },
  practice: {
    question:
      "Create a class with a constructor and one method.",
    hint:
      "Use class, constructor(), and new."
  },
  challenge: {
    title: "Build a Product Class",
    description:
      "Practice creating reusable objects with classes.",
    task:
      "Create a Product class with title and price properties and a method that displays the product information."
  }
},

"class-inheritance": {
  concept: {
    heading: "Class Inheritance",
    paragraphs: [
      "Inheritance allows one class to reuse properties and methods from another class.",
      "The extends keyword creates a relationship between a child class and a parent class.",
      "The super() keyword is used to call the parent class constructor.",
      "Inheritance is useful when multiple classes share common behaviour but also need their own additional features."
    ],
    remember:
      "extends creates inheritance; super() calls the parent constructor."
  },
  analogy: {
    heading: "Think of Parent and Child Templates",
    items: [
      {
        icon: "👨‍👩‍👧",
        title: "Parent Class",
        text: "Contains common properties and methods."
      },
      {
        icon: "⬇️",
        title: "Child Class",
        text: "Inherits the common functionality."
      },
      {
        icon: "➕",
        title: "Extra Features",
        text: "The child can add its own properties and methods."
      }
    ]
  },
  visual: {
    heading: "How Inheritance Works",
    description:
      "A child class reuses functionality from a parent class.",
    steps: [
      {
        icon: "1️⃣",
        title: "Parent Class",
        text: "Create common functionality."
      },
      {
        icon: "2️⃣",
        title: "extends",
        text: "Create a child class using extends."
      },
      {
        icon: "3️⃣",
        title: "super()",
        text: "Call the parent constructor when required."
      },
      {
        icon: "4️⃣",
        title: "Add Features",
        text: "The child class can add its own behaviour."
      }
    ],
    flow:
      "Parent Class → extends → Child Class → Reuse + Extend"
  },
  code: {
    title: "Practical Example — Inheritance",
    description:
      "The PremiumProduct class inherits from Product.",
    language: "javascript",
    code: `class Product {
  constructor(title) {
    this.title = title;
  }

  display() {
    console.log(this.title);
  }
}

class PremiumProduct extends Product {
  constructor(title, warranty) {
    super(title);
    this.warranty = warranty;
  }

  showWarranty() {
    console.log(this.warranty);
  }
}

let product = new PremiumProduct("Laptop", "2 Years");

product.display();
product.showWarranty();`,
    output:
      `Laptop
2 Years`,
    explanation:
      "PremiumProduct extends Product, so it can use the display method from Product. super(title) calls the parent constructor."
  },
  interview: {
    question: "What is class inheritance?",
    answer:
      "Class inheritance allows a child class to reuse and extend functionality from a parent class.",
    tip:
      "Use extends for inheritance and super() for the parent constructor."
  },
  tricky: {
    question: "Can a child class add its own methods?",
    answer:
      "Yes. A child class can inherit existing methods and define additional methods."
  },
  practice: {
    question:
      "Create a parent class and a child class using extends.",
    hint:
      "Use class Child extends Parent."
  },
  challenge: {
    title: "Create a Parent and Child Class",
    description:
      "Practice inheritance using a realistic structure.",
    task:
      "Create a Product class and a DigitalProduct class that extends it. Add one extra property and method to the child class."
  }
},

"static-members": {
  concept: {
    heading: "Static Members",
    paragraphs: [
      "Static properties and methods belong to the class itself rather than to individual objects created from the class.",
      "They are accessed using the class name.",
      "Static members are useful for functionality or information that belongs to the overall class rather than one specific object."
    ],
    remember:
      "Static members belong to the class, not to individual instances."
  },
  analogy: {
    heading: "Class-Level Information",
    items: [
      {
        icon: "🏢",
        title: "Class",
        text: "The class owns the static member."
      },
      {
        icon: "👤",
        title: "Object",
        text: "Individual objects do not access static members through the object."
      },
      {
        icon: "📌",
        title: "Direct Access",
        text: "Use the class name to access static members."
      }
    ]
  },
  visual: {
    heading: "Static Access",
    description:
      "Static members are accessed directly through the class.",
    steps: [
      {
        icon: "1️⃣",
        title: "Define",
        text: "Create a static method or property."
      },
      {
        icon: "2️⃣",
        title: "Class Owns It",
        text: "The member belongs to the class itself."
      },
      {
        icon: "3️⃣",
        title: "Access",
        text: "Use the class name to access it."
      }
    ],
    flow:
      "static member → Class → Class.staticMember()"
  },
  code: {
    title: "Practical Example — Static Method",
    description:
      "The createId method belongs to the Product class.",
    language: "javascript",
    code: `class Product {
  static createId() {
    return "PROD-001";
  }
}

console.log(Product.createId());`,
    output:
      `PROD-001`,
    explanation:
      "createId is static, so it is called using Product.createId(). It is not necessary to create a Product object first."
  },
  interview: {
    question: "What is a static method?",
    answer:
      "A static method belongs to the class itself and is accessed using the class name.",
    tip:
      "Static → class level."
  },
  tricky: {
    question: "Can a static method normally be called through an object instance?",
    answer:
      "No. It is accessed through the class name."
  },
  practice: {
    question:
      "Create a class with a static method that returns a fixed value.",
    hint:
      "Use static before the method name."
  },
  challenge: {
    title: "Create a Class Utility",
    description:
      "Practice creating a static utility method.",
    task:
      "Create a Product class with a static method that returns a product category or code."
  }
},

"private-class-fields": {
  concept: {
    heading: "Private Class Fields",
    paragraphs: [
      "Private class fields are properties that can only be accessed from inside the class.",
      "They are created by placing # before the field name.",
      "Private fields help protect internal data from direct access outside the class.",
      "This is useful when a class should control how important data is read or changed."
    ],
    remember:
      "A # field is private and can only be accessed inside its class."
  },
  analogy: {
    heading: "Think of a Locked Storage Area",
    items: [
      {
        icon: "🔒",
        title: "Private Data",
        text: "The value is kept inside the class."
      },
      {
        icon: "🚫",
        title: "No Direct Access",
        text: "Code outside the class cannot directly access the private field."
      },
      {
        icon: "🔑",
        title: "Controlled Access",
        text: "Class methods can provide controlled access."
      }
    ]
  },
  visual: {
    heading: "Private Field Flow",
    description:
      "Private fields keep internal class data protected.",
    steps: [
      {
        icon: "1️⃣",
        title: "Declare",
        text: "Use # before the field name."
      },
      {
        icon: "2️⃣",
        title: "Store",
        text: "Store internal data in the private field."
      },
      {
        icon: "3️⃣",
        title: "Access Internally",
        text: "Class methods can access the private field."
      },
      {
        icon: "4️⃣",
        title: "Protect",
        text: "Outside code cannot directly access it."
      }
    ],
    flow:
      "Private Field → Class Internal Access → Protected from Direct External Access"
  },
  code: {
    title: "Practical Example — Private Price",
    description:
      "The price field can only be accessed inside the class.",
    language: "javascript",
    code: `class Product {
  #price;

  constructor(price) {
    this.#price = price;
  }

  getPrice() {
    return this.#price;
  }
}

let product = new Product(55000);

console.log(product.getPrice());`,
    output:
      `55000`,
    explanation:
      "The #price field is private. The getPrice method provides controlled access to its value."
  },
  interview: {
    question: "How do you create a private class field?",
    answer:
      "Place the # symbol before the field name.",
    tip:
      "Example: #price"
  },
  tricky: {
    question: "Can code outside the class directly access a #private field?",
    answer:
      "No. Private fields can only be accessed inside the class."
  },
  practice: {
    question:
      "Create a class with a private field and a method to read it.",
    hint:
      "Use # before the field name."
  },
  challenge: {
    title: "Protect Internal Data",
    description:
      "Practice using a private class field.",
    task:
      "Create a Product class with a private price field and a method that returns the price."
  }
},

"class-getters-setters": {
  concept: {
    heading: "Getters & Setters in Classes",
    paragraphs: [
      "A getter allows a property to be read using property-like syntax while running a method internally.",
      "A setter allows a property to be assigned using property-like syntax while running controlled logic internally.",
      "Getters and setters are useful when a class needs to control how a property is read or updated.",
      "They can also be used to validate or transform values before storing them."
    ],
    remember:
      "Getter controls reading; setter controls updating."
  },
  analogy: {
    heading: "Think of Controlled Access",
    items: [
      {
        icon: "👁️",
        title: "Getter",
        text: "Controls what happens when a property is read."
      },
      {
        icon: "✏️",
        title: "Setter",
        text: "Controls what happens when a property is changed."
      },
      {
        icon: "🛡️",
        title: "Validation",
        text: "A setter can validate incoming values before storing them."
      }
    ]
  },
  visual: {
    heading: "Getter and Setter Flow",
    description:
      "Classes can control property access through getters and setters.",
    steps: [
      {
        icon: "1️⃣",
        title: "Property Read",
        text: "Code reads a property."
      },
      {
        icon: "2️⃣",
        title: "Getter Runs",
        text: "The getter method returns the required value."
      },
      {
        icon: "3️⃣",
        title: "Property Update",
        text: "Code assigns a new value."
      },
      {
        icon: "4️⃣",
        title: "Setter Runs",
        text: "The setter validates or processes the new value."
      }
    ],
    flow:
      "Read Property → Getter | Assign Property → Setter"
  },
  code: {
    title: "Practical Example — Controlled Price",
    description:
      "The setter validates the price before storing it.",
    language: "javascript",
    code: `class Product {
  #price = 0;

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value >= 0) {
      this.#price = value;
    }
  }
}

let product = new Product();

product.price = 55000;

console.log(product.price);`,
    output:
      `55000`,
    explanation:
      "The getter allows price to be read using product.price. The setter controls updates and only stores values that are zero or greater."
  },
  interview: {
    question: "What is the difference between a getter and setter?",
    answer:
      "A getter controls reading a property, while a setter controls assigning a new value.",
    tip:
      "get = read, set = update."
  },
  tricky: {
    question: "Do we call a getter like a normal method?",
    answer:
      "No. A getter is accessed like a property, for example product.price."
  },
  practice: {
    question:
      "Create a class with a getter and setter for a quantity property.",
    hint:
      "Use get quantity() and set quantity(value)."
  },
  challenge: {
    title: "Build Controlled Product Data",
    description:
      "Use getters and setters to control a product property.",
    task:
      "Create a Product class with a private price field, a getter for price, and a setter that accepts only non-negative values."
  }
},

// ============================================================
// ADVANCED JAVASCRIPT
// ============================================================

// ============================================================
// TOPIC — EXECUTION CONTEXT
// ============================================================

"execution-context": {
  concept: {
    heading: "What Is Execution Context?",
    paragraphs: [
      "Execution Context is the environment created by JavaScript when it executes code. It contains the information required to run that code.",

      "When a JavaScript program starts, JavaScript creates a Global Execution Context. When a function is called, JavaScript creates a new Function Execution Context for that function.",

      "An execution context contains information such as variables, functions, scope information, and the value of this.",

      "Execution Context is created and managed by the JavaScript engine. Understanding it helps explain hoisting, scope, the call stack, and closures.",

      "Execution happens in two important phases. First, JavaScript prepares the environment and sets up declarations. Then JavaScript executes the code."
    ],
    remember:
      "Execution Context is the environment in which JavaScript code is executed. Global code creates the Global Execution Context, and function calls create Function Execution Contexts."
  },

  analogy: {
    heading: "Think of Execution Context Like a Workspace",
    items: [
      {
        icon: "🏢",
        title: "Global Workspace",
        text: "When a JavaScript program starts, a global workspace is created for the main program."
      },
      {
        icon: "📦",
        title: "Function Workspace",
        text: "When a function runs, JavaScript creates a separate execution environment for that function."
      },
      {
        icon: "🧠",
        title: "Memory",
        text: "JavaScript prepares memory for variables and function declarations before executing the code."
      },
      {
        icon: "▶️",
        title: "Execution",
        text: "After preparation, JavaScript executes statements according to the program flow."
      }
    ]
  },

  visual: {
    heading: "How Execution Context Works",
    description:
      "JavaScript creates an execution environment before running code.",
    steps: [
      {
        icon: "1️⃣",
        title: "Program Starts",
        text: "JavaScript starts executing the program and creates the Global Execution Context."
      },
      {
        icon: "2️⃣",
        title: "Memory Preparation",
        text: "Variables and function declarations are prepared in the execution environment."
      },
      {
        icon: "3️⃣",
        title: "Code Execution",
        text: "JavaScript executes statements and evaluates expressions."
      },
      {
        icon: "4️⃣",
        title: "Function Call",
        text: "When a function is called, JavaScript creates a new Function Execution Context."
      },
      {
        icon: "5️⃣",
        title: "Function Finishes",
        text: "After the function completes, its execution context is removed from the call stack."
      }
    ],
    flow:
      "Program Start → Global Context → Execute Code → Function Call → Function Context → Function Complete"
  },

  code: {
    title: "Execution Context in Action",
    description:
      "A function call creates a new execution context for the function.",
    language: "javascript",
    code: `let globalValue = 10;

function calculate() {
  let localValue = 20;

  console.log("Global:", globalValue);
  console.log("Local:", localValue);
}

calculate();`,
    output: `Global: 10
Local: 20`,
    explanation:
      "When the program starts, the Global Execution Context is created. When calculate() is called, JavaScript creates a Function Execution Context for calculate. The function can access its local variable and also access the global variable."
  },

  interview: {
    question: "What is an Execution Context in JavaScript?",
    answer:
      "Execution Context is the environment created by JavaScript to execute code. It contains information required for variables, functions, scope, and execution.",
    tip:
      "Mention Global Execution Context and Function Execution Context in an interview answer."
  },

  tricky: {
    question:
      "When is a Function Execution Context created?",
    answer:
      "A Function Execution Context is created when a function is invoked or called."
  },

  practice: {
    question:
      "Create a global variable and a function with a local variable. Print both values from inside the function.",
    hint:
      "Create one variable outside the function and another inside the function."
  },

  challenge: {
    title: "Understand Execution Context",
    description:
      "Practice identifying global and function execution environments.",
    task:
      "Create two global variables and a function containing two local variables. Call the function and print both global and local values. Identify which values belong to the Global Execution Context and which belong to the Function Execution Context."
  }
},

// ============================================================
// TOPIC — HOISTING
// ============================================================

"hoisting": {
  concept: {
    heading: "What Is Hoisting?",
    paragraphs: [
      "Hoisting is the behavior in which JavaScript processes declarations before executing the code in their current scope.",

      "Function declarations are available before their position in the source code because JavaScript prepares the function declaration during the setup phase.",

      "Variables declared with var are also hoisted, but their initial value is undefined until the assignment statement is executed.",

      "Variables declared with let and const are also processed during the setup phase, but they cannot be accessed before their declaration. The time between entering the scope and reaching the declaration is called the Temporal Dead Zone.",

      "Hoisting does not mean that JavaScript physically moves code to the top. It describes how declarations are handled before execution."
    ],
    remember:
      "Hoisting is about how JavaScript handles declarations before execution. Function declarations can be called before their declaration, while let and const cannot be accessed before declaration."
  },

  analogy: {
    heading: "Think of Hoisting Like Preparing a Workspace",
    items: [
      {
        icon: "🗂️",
        title: "Prepare First",
        text: "Before work begins, JavaScript prepares information about declarations."
      },
      {
        icon: "📋",
        title: "Function Declaration",
        text: "A function declaration is available during execution even when it appears later in the code."
      },
      {
        icon: "❓",
        title: "var",
        text: "A var variable is initialized with undefined during the setup phase."
      },
      {
        icon: "🔒",
        title: "let and const",
        text: "let and const cannot be accessed before their declaration because they are in the Temporal Dead Zone."
      }
    ]
  },

  visual: {
    heading: "How Hoisting Works",
    description:
      "JavaScript prepares declarations before executing statements.",
    steps: [
      {
        icon: "1️⃣",
        title: "JavaScript Starts",
        text: "The JavaScript engine begins preparing the execution context."
      },
      {
        icon: "2️⃣",
        title: "Declarations Prepared",
        text: "Variable and function declarations are processed."
      },
      {
        icon: "3️⃣",
        title: "Code Executes",
        text: "JavaScript starts executing statements from the beginning."
      },
      {
        icon: "4️⃣",
        title: "Declaration Rules Apply",
        text: "Function, var, let, and const behave differently during this process."
      }
    ],
    flow:
      "Execution Context → Declaration Setup → Code Execution → Hoisting Rules"
  },

  code: {
    title: "Function Hoisting Example",
    description:
      "Function declarations can be called before they appear in the source code.",
    language: "javascript",
    code: `sayHello();

function sayHello() {
  console.log("Hello from JavaScript");
}`,
    output:
      "Hello from JavaScript",
    explanation:
      "The function declaration is available when JavaScript executes the program, so sayHello() can be called before the function declaration appears in the source code."
  },

  interview: {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting describes how JavaScript processes declarations before executing code in a scope.",
    tip:
      "Explain that function declarations, var, let, and const do not behave identically."
  },

  tricky: {
    question:
      "Does JavaScript physically move declarations to the top of the file?",
    answer:
      "No. Hoisting is a way of describing how declarations are processed during execution-context creation. JavaScript does not simply move the source code."
  },

  practice: {
    question:
      "Create a function declaration and call it before the function declaration.",
    hint:
      "Use a normal function declaration, not a function expression."
  },

  challenge: {
    title: "Explore Hoisting",
    description:
      "Compare function declaration and variable behavior.",
    task:
      "Create one function declaration and call it before its declaration. Then experiment separately with var, let, and const to observe how they behave when accessed before declaration."
  }
},

// ============================================================
// TOPIC — CLOSURES
// ============================================================

"closures": {
  concept: {
    heading: "What Is a Closure?",
    paragraphs: [
      "A closure is created when a function remembers and can access variables from its outer lexical scope even after the outer function has finished executing.",

      "Closures are possible because JavaScript functions keep a connection to the environment in which they were created.",

      "A closure is commonly created when an inner function is returned from an outer function.",

      "Closures are useful for data privacy, counters, function factories, callbacks, and maintaining state between function calls.",

      "The important idea is that the inner function does not lose access to the variables it depends on from its outer scope."
    ],
    remember:
      "A closure allows an inner function to remember variables from its outer scope even after the outer function has finished."
  },

  analogy: {
    heading: "Think of a Closure Like a Backpack",
    items: [
      {
        icon: "🎒",
        title: "Outer Function",
        text: "The outer function creates values that the inner function may need."
      },
      {
        icon: "📦",
        title: "Stored Data",
        text: "The inner function keeps access to the required outer variables."
      },
      {
        icon: "🚶",
        title: "Function Leaves",
        text: "The outer function finishes execution."
      },
      {
        icon: "🔐",
        title: "Data Remains Accessible",
        text: "The returned inner function can still access the remembered variable."
      }
    ]
  },

  visual: {
    heading: "How a Closure Is Created",
    description:
      "An inner function remembers variables from its outer lexical environment.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Outer Function",
        text: "The outer function creates a variable."
      },
      {
        icon: "2️⃣",
        title: "Create Inner Function",
        text: "An inner function uses the outer variable."
      },
      {
        icon: "3️⃣",
        title: "Return Inner Function",
        text: "The outer function returns the inner function."
      },
      {
        icon: "4️⃣",
        title: "Outer Function Finishes",
        text: "The outer function completes execution."
      },
      {
        icon: "5️⃣",
        title: "Closure Remembers",
        text: "The returned function still has access to the outer variable."
      }
    ],
    flow:
      "Outer Function → Variable → Inner Function → Return → Outer Finishes → Closure Remembers"
  },

  code: {
    title: "Closure Example — Counter",
    description:
      "A closure can maintain private state between function calls.",
    language: "javascript",
    code: `function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());`,
    output: `1
2
3`,
    explanation:
      "createCounter() creates the count variable and returns an inner function. The inner function remembers count even after createCounter() has finished. Each time counter() runs, it updates the remembered value."
  },

  interview: {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is created when a function retains access to variables from its outer lexical scope even after the outer function has finished executing.",
    tip:
      "A counter is one of the easiest practical examples to explain closures."
  },

  tricky: {
    question:
      "Why does the counter remember its previous value?",
    answer:
      "Because the returned function forms a closure over the count variable and retains access to that variable."
  },

  practice: {
    question:
      "Create a function that returns another function. Store a number in the outer function and increase it every time the returned function is called.",
    hint:
      "Use an outer variable and return an inner function."
  },

  challenge: {
    title: "Build a Private Counter",
    description:
      "Use a closure to create private state.",
    task:
      "Create a createCounter() function with a private count variable. Return an inner function that increases and returns the count. Create a counter and call it multiple times."
  }
},

// ============================================================
// TOPIC — THIS IN DIFFERENT CONTEXTS
// ============================================================

"this": {
  concept: {
    heading: "this in Different Contexts",
    paragraphs: [
      "The this keyword refers to a value determined by how a function is called.",

      "In an object method, this commonly refers to the object that owns the method call.",

      "The value of this is not simply determined by where the function is written. The calling pattern is very important.",

      "Arrow functions behave differently. They do not create their own this value. Instead, they use this from their surrounding lexical scope.",

      "Understanding this is important when working with objects, classes, event handlers, callbacks, and methods."
    ],
    remember:
      "The value of this depends mainly on how a function is called. Arrow functions inherit this from their surrounding scope."
  },

  analogy: {
    heading: "Think of this Like 'Who Is Calling?'",
    items: [
      {
        icon: "👤",
        title: "Caller",
        text: "The calling pattern helps determine what this refers to."
      },
      {
        icon: "🏠",
        title: "Object Method",
        text: "When a method is called through an object, this commonly refers to that object."
      },
      {
        icon: "➡️",
        title: "Arrow Function",
        text: "Arrow functions do not create their own this value."
      },
      {
        icon: "🎯",
        title: "Context Matters",
        text: "The same function can behave differently depending on how it is invoked."
      }
    ]
  },

  visual: {
    heading: "Understanding the this Keyword",
    description:
      "The calling context determines how this behaves.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Object",
        text: "Create an object containing data and a method."
      },
      {
        icon: "2️⃣",
        title: "Call Method",
        text: "Call the method using object.method()."
      },
      {
        icon: "3️⃣",
        title: "Determine this",
        text: "In this method call, this refers to the object before the dot."
      },
      {
        icon: "4️⃣",
        title: "Use Data",
        text: "The method can access object properties through this."
      }
    ],
    flow:
      "Object → Method Call → this → Calling Object → Access Properties"
  },

  code: {
    title: "this Inside an Object Method",
    description:
      "When a method is called through an object, this commonly refers to that object.",
    language: "javascript",
    code: `const product = {
  name: "Laptop",
  price: 50000,

  showDetails() {
    console.log(this.name);
    console.log(this.price);
  }
};

product.showDetails();`,
    output: `Laptop
50000`,
    explanation:
      "showDetails() is called as product.showDetails(). In this method call, this refers to the product object, so this.name gives Laptop and this.price gives 50000."
  },

  interview: {
    question: "What does this refer to in JavaScript?",
    answer:
      "this refers to a value determined by the way a function is called. In an object method called through an object, this commonly refers to that object.",
    tip:
      "Also mention that arrow functions inherit this from their surrounding lexical scope."
  },

  tricky: {
    question:
      "Do arrow functions have their own this?",
    answer:
      "No. Arrow functions do not have their own this. They use this from the surrounding lexical scope."
  },

  practice: {
    question:
      "Create an object with name and price properties and a method that prints both properties using this.",
    hint:
      "Use this.name and this.price inside the method."
  },

  challenge: {
    title: "Practice this with Objects",
    description:
      "Use this to access object properties from a method.",
    task:
      "Create a product object with name, price, and quantity properties. Add a method called showDetails() that prints all three values using this."
  }
},

// ============================================================
// TOPIC — CALL, APPLY AND BIND
// ============================================================

"call-apply-bind": {
  concept: {
    heading: "call(), apply() and bind()",
    paragraphs: [
      "call(), apply(), and bind() are methods available on JavaScript functions. They allow developers to control the value of this when calling or preparing a function.",

      "call() invokes a function immediately and accepts arguments separately.",

      "apply() also invokes a function immediately, but it accepts arguments as an array or array-like structure.",

      "bind() does not immediately execute the function. Instead, it returns a new function with a selected this value and optionally predefined arguments.",

      "These methods are useful when a function needs to work with a specific object or when a function needs to be reused with different data."
    ],
    remember:
      "call() executes immediately with separate arguments. apply() executes immediately with an array of arguments. bind() returns a new function for later execution."
  },

  analogy: {
    heading: "Think of call, apply and bind as Function Controls",
    items: [
      {
        icon: "📞",
        title: "call()",
        text: "Call the function now and provide arguments one by one."
      },
      {
        icon: "📋",
        title: "apply()",
        text: "Call the function now and provide arguments inside an array."
      },
      {
        icon: "🔗",
        title: "bind()",
        text: "Prepare a new function that can be executed later."
      },
      {
        icon: "🎯",
        title: "Control this",
        text: "All three methods can be used to control the this value."
      }
    ]
  },

  visual: {
    heading: "call vs apply vs bind",
    description:
      "The main difference is how and when the function is executed.",
    steps: [
      {
        icon: "1️⃣",
        title: "call()",
        text: "Set this, pass arguments separately, and execute immediately."
      },
      {
        icon: "2️⃣",
        title: "apply()",
        text: "Set this, pass arguments as an array, and execute immediately."
      },
      {
        icon: "3️⃣",
        title: "bind()",
        text: "Set this and create a new function without executing it immediately."
      }
    ],
    flow:
      "Function → call() → Execute Now | apply() → Execute Now | bind() → New Function"
  },

  code: {
    title: "call(), apply() and bind() Example",
    description:
      "See how the three methods can control this and function arguments.",
    language: "javascript",
    code: `const product = {
  name: "Laptop"
};

function showProduct(price, quantity) {
  console.log(this.name);
  console.log(price);
  console.log(quantity);
}

showProduct.call(product, 50000, 2);

showProduct.apply(product, [50000, 2]);

const boundFunction = showProduct.bind(product, 50000, 2);

boundFunction();`,
    output: `Laptop
50000
2
Laptop
50000
2
Laptop
50000
2`,
    explanation:
      "call() receives the product object followed by separate arguments. apply() receives the product object followed by an array of arguments. bind() creates a new function with product, 50000, and 2 already prepared, and that function is executed later."
  },

  interview: {
    question: "What is the difference between call(), apply(), and bind()?",
    answer:
      "call() and apply() execute a function immediately. call() accepts arguments separately, while apply() accepts them as an array. bind() returns a new function that can be executed later.",
    tip:
      "Remember the simple pattern: call = separate arguments, apply = array, bind = new function."
  },

  tricky: {
    question:
      "Does bind() execute the function immediately?",
    answer:
      "No. bind() returns a new function. The returned function can be called later."
  },

  practice: {
    question:
      "Create a function that uses this to display product information. Use call(), apply(), and bind() to execute it.",
    hint:
      "Use an object as the this value and provide price and quantity as arguments."
  },

  challenge: {
    title: "Control Function Context",
    description:
      "Practice controlling this with call(), apply(), and bind().",
    task:
      "Create a product object and a showProduct() function. Execute the function using call() and apply(). Then create a new function using bind() and execute it separately."
  }
},

// ============================================================
// TOPIC — CALLBACKS
// ============================================================

"callbacks": {
  concept: {
    heading: "What Is a Callback Function?",
    paragraphs: [
      "A callback is a function passed as an argument to another function so that it can be called later or when a particular operation is completed.",

      "JavaScript treats functions as first-class values. This means a function can be stored in a variable, passed to another function, and returned from another function.",

      "Callbacks are commonly used for event handling, array methods, timers, and asynchronous operations.",

      "A callback does not automatically mean asynchronous code. A callback can be used in both synchronous and asynchronous programs.",

      "Understanding callbacks is important before learning promises and async/await."
    ],
    remember:
      "A callback is a function passed to another function to be executed by that function."
  },

  analogy: {
    heading: "Think of a Callback Like a Follow-Up Instruction",
    items: [
      {
        icon: "📋",
        title: "Main Task",
        text: "A function performs its main operation."
      },
      {
        icon: "📨",
        title: "Give Another Function",
        text: "You pass another function as an instruction for what should happen next."
      },
      {
        icon: "▶️",
        title: "Execute Callback",
        text: "The receiving function calls the callback when appropriate."
      },
      {
        icon: "🔄",
        title: "Reusable Logic",
        text: "Different callbacks can be supplied for different behaviors."
      }
    ]
  },

  visual: {
    heading: "How a Callback Works",
    description:
      "A callback is passed to another function and invoked from there.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "Create a function that accepts another function as an argument."
      },
      {
        icon: "2️⃣",
        title: "Pass Callback",
        text: "Pass a function when calling the main function."
      },
      {
        icon: "3️⃣",
        title: "Main Function Runs",
        text: "The main function performs its operation."
      },
      {
        icon: "4️⃣",
        title: "Callback Runs",
        text: "The main function calls the callback at the required point."
      }
    ],
    flow:
      "Create Callback → Pass Function → Main Function → Execute Callback"
  },

  code: {
    title: "Simple Callback Example",
    description:
      "A function can receive another function as an argument and execute it.",
    language: "javascript",
    code: `function processData(value, callback) {
  const result = value * 2;

  callback(result);
}

function displayResult(result) {
  console.log("Result:", result);
}

processData(10, displayResult);`,
    output:
      "Result: 20",
    explanation:
      "displayResult is passed to processData as a callback. processData calculates the result and then calls displayResult(result)."
  },

  interview: {
    question: "What is a callback function?",
    answer:
      "A callback is a function passed as an argument to another function so that it can be executed by that function.",
    tip:
      "Mention that callbacks are widely used with events, array methods, timers, and asynchronous operations."
  },

  tricky: {
    question:
      "Are all callback functions asynchronous?",
    answer:
      "No. A callback can be synchronous or asynchronous. For example, callbacks used by many array methods are commonly executed synchronously."
  },

  practice: {
    question:
      "Create a function that accepts a number and a callback. Double the number and pass the result to the callback.",
    hint:
      "The callback should receive the calculated result."
  },

  challenge: {
    title: "Build a Callback Processor",
    description:
      "Create reusable processing logic using a callback.",
    task:
      "Create a processNumber() function that accepts a number and a callback. Create two different callbacks: one that displays double the number and another that displays the square of the number."
  }
},

// ============================================================
// TOPIC — HIGHER-ORDER FUNCTIONS
// ============================================================

"higher-order-functions": {
  concept: {
    heading: "What Are Higher-Order Functions?",
    paragraphs: [
      "A higher-order function is a function that takes another function as an argument, returns a function, or does both.",

      "Higher-order functions are possible because JavaScript functions are first-class values.",

      "Array methods such as map(), filter(), and reduce() are common examples of higher-order functions because they accept callback functions.",

      "Higher-order functions help developers create reusable and flexible logic instead of writing the same code repeatedly.",

      "Understanding higher-order functions is especially important when working with modern JavaScript, React, and functional programming concepts."
    ],
    remember:
      "A higher-order function takes a function as an argument, returns a function, or does both."
  },

  analogy: {
    heading: "Think of a Higher-Order Function Like a Machine",
    items: [
      {
        icon: "🏭",
        title: "Main Machine",
        text: "The higher-order function controls the main operation."
      },
      {
        icon: "⚙️",
        title: "Function as Input",
        text: "Another function can be supplied as an instruction."
      },
      {
        icon: "🔄",
        title: "Reusable Process",
        text: "Different functions can produce different behaviors."
      },
      {
        icon: "🎯",
        title: "Flexible Result",
        text: "The same main function can work with different logic."
      }
    ]
  },

  visual: {
    heading: "How Higher-Order Functions Work",
    description:
      "A higher-order function works with another function as data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Function",
        text: "Create a function that can accept another function."
      },
      {
        icon: "2️⃣",
        title: "Pass Function",
        text: "Pass another function as an argument."
      },
      {
        icon: "3️⃣",
        title: "Use Function",
        text: "The higher-order function executes or uses the supplied function."
      },
      {
        icon: "4️⃣",
        title: "Produce Result",
        text: "The final operation produces the required result."
      }
    ],
    flow:
      "Function → Accept Another Function → Execute Logic → Result"
  },

  code: {
    title: "Higher-Order Function Example",
    description:
      "This example creates a function that accepts another function and applies it to a value.",
    language: "javascript",
    code: `function calculate(value, operation) {
  return operation(value);
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

console.log(calculate(5, double));
console.log(calculate(5, square));`,
    output: `10
25`,
    explanation:
      "calculate() is a higher-order function because it receives another function as an argument. The first call passes double(), while the second call passes square(). The same calculate() function therefore supports different operations."
  },

  interview: {
    question: "What is a higher-order function?",
    answer:
      "A higher-order function is a function that accepts another function as an argument, returns a function, or does both.",
    tip:
      "Use map(), filter(), or a simple custom function as an example."
  },

  tricky: {
    question:
      "Why are map(), filter(), and reduce() called higher-order functions?",
    answer:
      "They accept callback functions as arguments, so they satisfy the definition of higher-order functions."
  },

  practice: {
    question:
      "Create a higher-order function that accepts a number and another function. Use the supplied function to process the number.",
    hint:
      "Create two different processing functions and pass them one at a time."
  },

  challenge: {
    title: "Create a Flexible Calculator",
    description:
      "Build a higher-order function that can perform different calculations.",
    task:
      "Create a calculate() function that accepts two numbers and an operation function. Create separate functions for addition, subtraction, multiplication, and division. Pass each operation to calculate() and display the results."
  }
},
// ============================================================
// ASYNC JAVASCRIPT
// TOPIC 01 — SYNCHRONOUS VS ASYNCHRONOUS
// ============================================================

"synchronous-vs-asynchronous": {
  concept: {
    heading: "Synchronous vs Asynchronous JavaScript",
    paragraphs: [
      "JavaScript code can be executed synchronously or asynchronously.",

      "In synchronous execution, JavaScript performs one task at a time. The next statement waits until the current statement has finished.",

      "In asynchronous execution, JavaScript can start a task that may take some time and continue executing other code instead of waiting for that task to finish.",

      "Asynchronous behavior is very important when working with timers, API requests, file operations, database operations, and other tasks that may take time.",

      "JavaScript itself executes code using a single main thread, but the JavaScript runtime provides mechanisms such as the Web APIs, task queues, and event loop to handle asynchronous operations."
    ],
    remember:
      "Synchronous means one task waits for the previous task to finish. Asynchronous allows other JavaScript work to continue while a time-consuming operation is being handled."
  },

  analogy: {
    heading: "Think of Synchronous and Asynchronous Like a Restaurant",
    items: [
      {
        icon: "🍽️",
        title: "Synchronous",
        text: "Imagine ordering one meal and standing at the counter until it is completely prepared. Only after receiving it do you place the next order."
      },
      {
        icon: "🧑‍🍳",
        title: "Asynchronous",
        text: "You place an order, receive a waiting number, and continue with another activity while the kitchen prepares your meal."
      },
      {
        icon: "⏳",
        title: "Waiting Time",
        text: "Some operations take time. Asynchronous programming helps prevent the entire application flow from unnecessarily waiting."
      },
      {
        icon: "🔔",
        title: "Completion",
        text: "When an asynchronous operation finishes, JavaScript can respond using mechanisms such as callbacks, promises, or async/await."
      }
    ]
  },

  visual: {
    heading: "Synchronous vs Asynchronous Flow",
    description:
      "The main difference is whether JavaScript waits for an operation to finish before moving to the next task.",
    steps: [
      {
        icon: "1️⃣",
        title: "Synchronous Task",
        text: "JavaScript starts a task and waits until that task is completed."
      },
      {
        icon: "2️⃣",
        title: "Next Statement",
        text: "Only after the first task finishes does JavaScript continue to the next statement."
      },
      {
        icon: "3️⃣",
        title: "Asynchronous Task",
        text: "JavaScript starts an operation that may take time and can continue with other work."
      },
      {
        icon: "4️⃣",
        title: "Operation Completes",
        text: "The runtime handles the asynchronous operation and makes its result available when it is ready."
      },
      {
        icon: "5️⃣",
        title: "JavaScript Responds",
        text: "A callback, promise, or async/await can be used to handle the completed operation."
      }
    ],
    flow:
      "Synchronous → Task 1 → Wait → Task 2 → Wait → Task 3\n\nAsynchronous → Start Task 1 → Continue Other Work → Task 1 Completes → Handle Result"
  },

  code: {
    title: "Synchronous vs Asynchronous Example",
    description:
      "The following example shows how normal synchronous code and setTimeout-based asynchronous code behave differently.",
    language: "javascript",
    code: `console.log("Start");

setTimeout(() => {
  console.log("Async task completed");
}, 2000);

console.log("End");`,
    output: `Start
End
Async task completed`,
    explanation:
      "The program first prints Start. setTimeout() schedules the callback to run after approximately 2 seconds, but JavaScript does not stop the remaining code. It immediately prints End. After the timer finishes, the callback runs and prints Async task completed."
  },

  interview: {
    question: "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous JavaScript executes tasks one after another and waits for each task to finish. Asynchronous programming allows certain operations to continue in the background while JavaScript continues with other work.",
    tip:
      "Use a simple setTimeout() example to explain asynchronous behavior in an interview."
  },

  tricky: {
    question:
      "Does asynchronous JavaScript mean that JavaScript executes multiple pieces of JavaScript code at exactly the same time?",
    answer:
      "No. JavaScript code execution is coordinated through its runtime and event loop. Asynchronous operations allow JavaScript to avoid blocking while waiting for operations such as timers or network requests."
  },

  practice: {
    question:
      "Create a program that prints Start, uses setTimeout() to print a message after 2 seconds, and then immediately prints End.",
    hint:
      "Place console.log(\"End\") after setTimeout(). Observe which message appears first."
  },

  challenge: {
    title: "Understand Asynchronous Execution",
    description:
      "Use a timer to observe how JavaScript continues execution without waiting for the timer callback.",
    task:
      "Create a program with three messages: Start, a delayed message inside setTimeout(), and End. Set the timer to 3 seconds. Run the program and write down the exact order in which the messages appear."
  }
},// ============================================================
// TOPIC 02 — CALLBACKS IN ASYNC JAVASCRIPT
// ============================================================

"callbacks-async": {
  concept: {
    heading: "Callbacks in Asynchronous JavaScript",
    paragraphs: [
      "A callback is a function that is passed to another function and is executed later when a particular operation is completed.",

      "Callbacks are commonly used in asynchronous JavaScript because some operations do not finish immediately.",

      "For example, a timer may take a few seconds to complete. Instead of stopping the entire program, JavaScript can continue executing other code and later execute the callback.",

      "Callbacks were one of the earliest common ways of handling asynchronous operations in JavaScript.",

      "Callbacks are still useful for understanding JavaScript, although promises and async/await are generally easier to manage for complex asynchronous code."
    ],
    remember:
      "In asynchronous programming, a callback can be executed after an operation has completed."
  },

  analogy: {
    heading: "Think of an Async Callback Like a Notification",
    items: [
      {
        icon: "⏳",
        title: "Start Task",
        text: "An operation starts and may take some time."
      },
      {
        icon: "🚶",
        title: "Continue Working",
        text: "JavaScript can continue with other available work instead of waiting."
      },
      {
        icon: "🔔",
        title: "Completion Notification",
        text: "When the operation completes, the callback can be executed."
      },
      {
        icon: "▶️",
        title: "Handle Result",
        text: "The callback contains the logic that should run after the operation."
      }
    ]
  },

  visual: {
    heading: "How an Async Callback Works",
    description:
      "A callback allows JavaScript to define what should happen after an asynchronous operation completes.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Operation",
        text: "An asynchronous operation is started."
      },
      {
        icon: "2️⃣",
        title: "Register Callback",
        text: "A callback function is provided for the completion step."
      },
      {
        icon: "3️⃣",
        title: "Continue Execution",
        text: "JavaScript continues executing other available code."
      },
      {
        icon: "4️⃣",
        title: "Operation Completes",
        text: "The asynchronous operation finishes."
      },
      {
        icon: "5️⃣",
        title: "Callback Executes",
        text: "The callback runs to handle the next step."
      }
    ],
    flow:
      "Start Async Task → Register Callback → Continue Code → Task Completes → Callback Executes"
  },

  code: {
    title: "setTimeout() with a Callback",
    description:
      "setTimeout() schedules a callback to run after a specified delay.",
    language: "javascript",
    code: `console.log("Start");

setTimeout(() => {
  console.log("Task completed");
}, 2000);

console.log("End");`,
    output: `Start
End
Task completed`,
    explanation:
      "The callback passed to setTimeout() does not execute immediately. The timer schedules it to run after approximately 2 seconds. JavaScript continues and prints End first. After the timer completes, the callback prints Task completed."
  },

  interview: {
    question: "What is an asynchronous callback?",
    answer:
      "An asynchronous callback is a function that is executed after an asynchronous operation reaches the point where its callback can run.",
    tip:
      "Use setTimeout() as a simple example."
  },

  tricky: {
    question:
      "Does JavaScript wait for setTimeout() before executing the next line?",
    answer:
      "No. setTimeout() schedules the callback and JavaScript continues executing the next available code."
  },

  practice: {
    question:
      "Use setTimeout() to print a message after 3 seconds and immediately print another message outside the timer.",
    hint:
      "Observe the order of the output."
  },

  challenge: {
    title: "Create an Async Notification",
    description:
      "Practice using a callback with a delayed operation.",
    task:
      "Create a function called processTask() that accepts a callback. Use setTimeout() inside the function to simulate a task taking 2 seconds. After the delay, execute the callback."
  }
},

// ============================================================
// TOPIC 03 — PROMISES
// ============================================================

"promises": {
  concept: {
    heading: "Promises in JavaScript",
    paragraphs: [
      "A Promise is an object that represents the eventual result of an asynchronous operation.",

      "A promise can be in one of three states: pending, fulfilled, or rejected.",

      "Pending means the operation is still in progress. Fulfilled means the operation completed successfully. Rejected means the operation failed.",

      "The then() method is used to handle a successful result, while catch() is used to handle an error or rejection.",

      "Promises provide a cleaner way to organize asynchronous operations compared with deeply nested callbacks."
    ],
    remember:
      "A Promise represents a future result. Its main states are pending, fulfilled, and rejected."
  },

  analogy: {
    heading: "Think of a Promise Like an Order Token",
    items: [
      {
        icon: "🎫",
        title: "Promise Created",
        text: "You receive a token representing an operation that has started."
      },
      {
        icon: "⏳",
        title: "Pending",
        text: "The operation is still being processed."
      },
      {
        icon: "✅",
        title: "Fulfilled",
        text: "The operation completed successfully and produced a result."
      },
      {
        icon: "❌",
        title: "Rejected",
        text: "The operation failed and produced an error."
      }
    ]
  },

  visual: {
    heading: "Promise Lifecycle",
    description:
      "A Promise starts in the pending state and eventually becomes fulfilled or rejected.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Promise",
        text: "A Promise is created for an asynchronous operation."
      },
      {
        icon: "2️⃣",
        title: "Pending",
        text: "The operation is still in progress."
      },
      {
        icon: "3️⃣",
        title: "Success or Failure",
        text: "The operation either completes successfully or fails."
      },
      {
        icon: "4️⃣",
        title: "Fulfilled",
        text: "resolve() is used when the operation succeeds."
      },
      {
        icon: "5️⃣",
        title: "Rejected",
        text: "reject() is used when the operation fails."
      }
    ],
    flow:
      "Promise Created → Pending → Fulfilled OR Rejected"
  },

  code: {
    title: "Creating and Using a Promise",
    description:
      "This example creates a promise that resolves after a short delay.",
    language: "javascript",
    code: `const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed successfully");
  }, 2000);
});

task
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });`,
    output:
      "Task completed successfully",
    explanation:
      "The Promise starts in the pending state. After 2 seconds, resolve() changes it to fulfilled. The then() callback receives the resolved value and prints it. If the promise were rejected, catch() would handle the error."
  },

  interview: {
    question: "What is a Promise in JavaScript?",
    answer:
      "A Promise is an object representing the eventual success or failure of an asynchronous operation.",
    tip:
      "Remember the three states: pending, fulfilled, and rejected."
  },

  tricky: {
    question:
      "Can a Promise change from fulfilled back to pending?",
    answer:
      "No. Once a Promise is fulfilled or rejected, it is settled and its state cannot change again."
  },

  practice: {
    question:
      "Create a Promise that resolves with a success message after 2 seconds.",
    hint:
      "Use new Promise(), setTimeout(), resolve(), and then()."
  },

  challenge: {
    title: "Build a Task Promise",
    description:
      "Create a Promise that simulates a task such as loading data.",
    task:
      "Create a Promise that waits for 3 seconds. After the delay, resolve it with a success message. Use then() to display the message and catch() to handle errors."
  }
},

// ============================================================
// TOPIC 04 — ASYNC / AWAIT
// ============================================================

"async-await": {
  concept: {
    heading: "Async and Await",
    paragraphs: [
      "async and await provide a cleaner way to work with Promises.",

      "The async keyword is used before a function to make it return a Promise.",

      "The await keyword can be used inside an async function to wait for a Promise to settle before continuing that function's execution.",

      "await makes asynchronous code easier to read because the code can be written in a style that looks similar to synchronous code.",

      "async/await is commonly used when working with APIs, database operations, authentication requests, and other asynchronous tasks."
    ],
    remember:
      "async makes a function return a Promise, while await pauses that async function until the awaited Promise settles."
  },

  analogy: {
    heading: "Think of async/await Like Waiting for a Result",
    items: [
      {
        icon: "📤",
        title: "Start Request",
        text: "An asynchronous operation starts."
      },
      {
        icon: "⏳",
        title: "await",
        text: "The async function waits for the Promise result before moving to the next statement inside that function."
      },
      {
        icon: "✅",
        title: "Result Available",
        text: "When the Promise fulfills, await gives the resolved value."
      },
      {
        icon: "▶️",
        title: "Continue",
        text: "The next statement inside the async function can now execute."
      }
    ]
  },

  visual: {
    heading: "How async/await Works",
    description:
      "async/await provides a readable way to consume Promise-based operations.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Promise",
        text: "An asynchronous operation returns a Promise."
      },
      {
        icon: "2️⃣",
        title: "Create async Function",
        text: "Use async before the function declaration."
      },
      {
        icon: "3️⃣",
        title: "Use await",
        text: "Use await before the Promise inside the async function."
      },
      {
        icon: "4️⃣",
        title: "Receive Result",
        text: "When the Promise fulfills, await provides its resolved value."
      },
      {
        icon: "5️⃣",
        title: "Continue",
        text: "The async function continues with the next statement."
      }
    ],
    flow:
      "Promise → async Function → await → Promise Settles → Result → Continue"
  },

  code: {
    title: "Simple async/await Example",
    description:
      "Use async and await to consume a Promise.",
    language: "javascript",
    code: `function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully");
    }, 2000);
  });
}

async function showData() {
  const result = await getData();

  console.log(result);
}

showData();`,
    output:
      "Data loaded successfully",
    explanation:
      "getData() returns a Promise. showData() is an async function, so it can use await. await waits for the Promise to fulfill and stores the resolved value in result. Then console.log() displays the result."
  },

  interview: {
    question: "What is async/await in JavaScript?",
    answer:
      "async/await is syntax used to work with Promises in a more readable way. async makes a function return a Promise, and await waits for a Promise to settle inside an async function.",
    tip:
      "Explain async and await separately before explaining them together."
  },

  tricky: {
    question:
      "Can await normally be used inside any regular function?",
    answer:
      "No. In the common case, await is used inside an async function. Modern JavaScript also supports top-level await in modules."
  },

  practice: {
    question:
      "Create a function that returns a Promise after 2 seconds and use async/await to display its result.",
    hint:
      "Create one normal function that returns a Promise and one async function that awaits it."
  },

  challenge: {
    title: "Build an Async Data Loader",
    description:
      "Simulate loading data using a Promise and async/await.",
    task:
      "Create a getData() function that returns a Promise and resolves after 3 seconds. Create an async function called loadData() that uses await to receive the result and displays it."
  }
},

// ============================================================
// TOPIC 05 — ERROR HANDLING
// ============================================================

"error-handling": {
  concept: {
    heading: "Error Handling in Asynchronous JavaScript",
    paragraphs: [
      "Errors can occur while JavaScript is executing synchronous or asynchronous operations.",

      "JavaScript provides try, catch, and finally statements for handling errors.",

      "The try block contains code that may produce an error. If an error occurs, execution moves to the catch block.",

      "The finally block is optional and runs whether an error occurs or not. It is useful for cleanup operations.",

      "When using async/await, try/catch is commonly used to handle rejected Promises and other errors that occur inside the async function."
    ],
    remember:
      "Use try for risky code, catch to handle errors, and finally for code that should run whether the operation succeeds or fails."
  },

  analogy: {
    heading: "Think of Error Handling Like a Safety System",
    items: [
      {
        icon: "🧪",
        title: "Try",
        text: "Attempt an operation that may fail."
      },
      {
        icon: "🚨",
        title: "Error",
        text: "Something unexpected happens during the operation."
      },
      {
        icon: "🛠️",
        title: "Catch",
        text: "Handle the problem instead of allowing the application flow to fail silently."
      },
      {
        icon: "🧹",
        title: "Finally",
        text: "Perform cleanup or final actions regardless of success or failure."
      }
    ]
  },

  visual: {
    heading: "How Async Error Handling Works",
    description:
      "try/catch can be used with async/await to handle rejected Promises.",
    steps: [
      {
        icon: "1️⃣",
        title: "Start Operation",
        text: "Call an asynchronous function that returns a Promise."
      },
      {
        icon: "2️⃣",
        title: "await Result",
        text: "Use await inside the try block."
      },
      {
        icon: "3️⃣",
        title: "Success",
        text: "If the Promise fulfills, continue with the successful result."
      },
      {
        icon: "4️⃣",
        title: "Failure",
        text: "If the Promise rejects, control moves to the catch block."
      },
      {
        icon: "5️⃣",
        title: "Final Step",
        text: "The finally block can run after either success or failure."
      }
    ],
    flow:
      "Async Operation → try → Success → Continue\n\nAsync Operation → try → Error → catch → Handle Error → finally"
  },

  code: {
    title: "try/catch with async/await",
    description:
      "Handle a rejected Promise using try/catch.",
    language: "javascript",
    code: `function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Unable to load data");
    }, 1000);
  });
}

async function loadData() {
  try {
    const result = await getData();

    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Operation finished");
  }
}

loadData();`,
    output: `Error: Unable to load data
Operation finished`,
    explanation:
      "getData() rejects the Promise after one second. Because await is inside the try block, the rejected Promise transfers control to catch. The error message is displayed, and finally runs after the error handling is complete."
  },

  interview: {
    question: "How do you handle errors with async/await?",
    answer:
      "Errors from awaited Promises can commonly be handled using a try/catch block inside an async function.",
    tip:
      "A good practical example is an API request that fails."
  },

  tricky: {
    question:
      "Will the finally block run when an error occurs?",
    answer:
      "Yes. If a finally block is present, it normally runs after the try/catch process whether the operation succeeds or fails."
  },

  practice: {
    question:
      "Create an async function that awaits a rejected Promise and handles the error using try/catch.",
    hint:
      "Use reject() inside the Promise and catch the error around await."
  },

  challenge: {
    title: "Build a Safe Async Operation",
    description:
      "Create an asynchronous operation with proper error handling.",
    task:
      "Create a function that returns a Promise. Make it randomly resolve or reject. Use async/await with try/catch/finally to display either the successful result or the error, and always display a final completion message."
  }
},// ============================================================
// TOPIC 06 — EVENT LOOP
// ============================================================

"event-loop": {
  concept: {
    heading: "The JavaScript Event Loop",
    paragraphs: [
      "The Event Loop is an important part of the JavaScript runtime that helps JavaScript handle asynchronous operations while keeping the main JavaScript execution thread available.",

      "JavaScript uses a call stack to execute synchronous code. When an asynchronous operation such as a timer or network request is started, the runtime can handle that operation outside the main JavaScript execution flow.",

      "When an asynchronous operation is ready, its callback is placed into an appropriate queue. The Event Loop continuously checks whether the call stack is empty and whether queued work is ready to be processed.",

      "One important detail is that Promise callbacks use the microtask queue, while timer callbacks commonly use the task or callback queue. Microtasks are processed before the next task is taken from the task queue.",

      "Understanding the Event Loop explains why asynchronous JavaScript does not simply execute code in the order it appears in the file."
    ],
    remember:
      "The Event Loop coordinates the Call Stack and queued asynchronous work. JavaScript processes microtasks before moving to the next task."
  },

  analogy: {
    heading: "Think of the Event Loop Like a Traffic Controller",
    items: [
      {
        icon: "🛣️",
        title: "Call Stack",
        text: "The call stack is like the main road where JavaScript executes the current code."
      },
      {
        icon: "🚦",
        title: "Event Loop",
        text: "The Event Loop checks when the main road is free and decides when queued work can move toward execution."
      },
      {
        icon: "📋",
        title: "Task Queue",
        text: "Completed timer and other task callbacks can wait in a queue until the call stack is available."
      },
      {
        icon: "⚡",
        title: "Microtask Queue",
        text: "Promise reactions such as then() callbacks are placed in the microtask queue and are processed before the next regular task."
      }
    ]
  },

  visual: {
    heading: "How the Event Loop Works",
    description:
      "The Event Loop coordinates JavaScript execution with asynchronous callbacks and queues.",
    steps: [
      {
        icon: "1️⃣",
        title: "Call Stack",
        text: "JavaScript executes synchronous code using the call stack."
      },
      {
        icon: "2️⃣",
        title: "Async Operation",
        text: "A timer, network request, or another asynchronous operation is started."
      },
      {
        icon: "3️⃣",
        title: "Runtime Handles It",
        text: "The JavaScript runtime manages the asynchronous operation while JavaScript can continue executing available code."
      },
      {
        icon: "4️⃣",
        title: "Queue",
        text: "When the operation is ready, its callback is placed into the appropriate queue."
      },
      {
        icon: "5️⃣",
        title: "Event Loop Checks",
        text: "The Event Loop checks whether the call stack is empty."
      },
      {
        icon: "6️⃣",
        title: "Callback Executes",
        text: "Queued work is moved toward the call stack according to the runtime's scheduling rules."
      }
    ],
    flow:
      "Call Stack → Async Operation → Runtime → Queue → Event Loop → Call Stack → Execute"
  },

  code: {
    title: "Event Loop — Promise vs Timer",
    description:
      "This example demonstrates an important Event Loop rule: Promise microtasks are processed before timer tasks when both are ready after the current synchronous code.",
    language: "javascript",
    code: `console.log("1");

setTimeout(() => {
  console.log("2 - Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Promise");
});

console.log("4");`,
    output: `1
4
3 - Promise
2 - Timer`,
    explanation:
      "First, the synchronous statements run, so 1 and 4 are printed. The Promise callback is scheduled as a microtask, while the setTimeout callback is scheduled as a task. After the current synchronous code finishes, the microtask is processed before the timer task. Therefore, the Promise message appears before the Timer message."
  },

  interview: {
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop is a mechanism used by the JavaScript runtime to coordinate the call stack with queued asynchronous work. It checks when the call stack is available and helps schedule queued callbacks for execution.",
    tip:
      "For a strong interview answer, mention Call Stack, Microtask Queue, Task Queue, and Event Loop."
  },

  tricky: {
    question:
      "Which runs first: a Promise callback or a setTimeout() callback?",
    answer:
      "When both are scheduled from the same synchronous execution and are ready to run, the Promise reaction is placed in the microtask queue and is processed before the timer task."
  },

  practice: {
    question:
      "Write a program containing console.log(), setTimeout(), and Promise.resolve().then(). Predict the output order before running the program.",
    hint:
      "First identify synchronous code, then the microtask, and finally the timer task."
  },

  challenge: {
    title: "Predict the Event Loop",
    description:
      "Practice understanding the execution order of synchronous code, Promise callbacks, and timer callbacks.",
    task:
      "Create a program with four console messages. Add one setTimeout() callback and one Promise.then() callback. Before running the program, write down the expected output order. Then run it and compare your prediction with the actual result."
  }
},"dom-introduction": {
  concept: {
    heading: "What is the DOM?",
    paragraphs: [
      "DOM stands for Document Object Model. It is a programming interface created by the browser for an HTML document.",
      "When a browser loads an HTML page, it converts the HTML document into a tree-like structure called the DOM Tree. JavaScript can use this structure to access and modify HTML elements.",
      "The DOM connects JavaScript with HTML. Using the DOM, JavaScript can change text, styles, attributes, elements, and respond to user actions.",
      "For example, JavaScript can change a heading, update a paragraph, hide an element, create a new button, or change the style of an element without reloading the entire page."
    ],
    remember:
      "HTML creates the page structure, CSS controls presentation, and JavaScript uses the DOM to interact with and change the page."
  },

  analogy: {
    heading: "Think of the DOM Like a Tree",
    items: [
      {
        icon: "🌳",
        title: "Document",
        text: "The complete web page is represented as a document."
      },
      {
        icon: "🏠",
        title: "HTML Element",
        text: "Elements such as html, body, heading, paragraph, and button become nodes in the DOM tree."
      },
      {
        icon: "🔗",
        title: "Parent and Child",
        text: "Elements have relationships. For example, body can be a parent of a heading and paragraph."
      },
      {
        icon: "⚙️",
        title: "JavaScript",
        text: "JavaScript can access these DOM nodes and change their content, styles, attributes, or structure."
      }
    ]
  },

  visual: {
    heading: "How the Browser Creates the DOM",
    description:
      "The browser reads the HTML document and creates a tree-like representation that JavaScript can work with.",
    steps: [
      {
        icon: "1️⃣",
        title: "HTML is loaded",
        text: "The browser receives and reads the HTML document."
      },
      {
        icon: "2️⃣",
        title: "HTML is parsed",
        text: "The browser reads the HTML tags and understands their parent-child relationships."
      },
      {
        icon: "3️⃣",
        title: "DOM Tree is created",
        text: "The browser creates DOM nodes representing the document structure."
      },
      {
        icon: "4️⃣",
        title: "JavaScript accesses the DOM",
        text: "JavaScript can use the document object and DOM methods to find and work with elements."
      },
      {
        icon: "5️⃣",
        title: "Page is updated",
        text: "JavaScript can modify the DOM, and the browser updates the visible page."
      }
    ],
    flow:
      "HTML → Browser → DOM Tree → JavaScript → DOM Changes → Updated Page"
  },

  code: {
    title: "Accessing the DOM",
    description:
      "The document object represents the web page. We can use it to access HTML elements.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>

  <h1 id="heading">Welcome to JavaScript</h1>

  <p id="message">
    Learning the DOM makes web pages interactive.
  </p>

  <script>
    const heading = document.getElementById("heading");
    const message = document.getElementById("message");

    console.log(heading);
    console.log(message);
  </script>

</body>
</html>`,
    output:
      "The browser console shows the selected h1 and p elements.",
    explanation:
      "document represents the current HTML document. getElementById() searches the DOM for an element with the specified id. The returned element is stored in a variable, which allows JavaScript to work with that element."
  },

  interview: {
    question: "What is the DOM in JavaScript?",
    answer:
      "DOM stands for Document Object Model. It represents an HTML document as a tree of objects or nodes so that JavaScript can access and modify the page.",
    tip:
      "Remember: DOM is the connection between JavaScript and the HTML page."
  },

  tricky: {
    question:
      "Is the DOM the same thing as the original HTML source code?",
    answer:
      "No. HTML is the source document, while the DOM is the browser's in-memory object representation of that document. JavaScript works with the DOM."
  },

  practice: {
    question:
      "Create an HTML page containing a heading and a paragraph. Give both elements unique ids and use document.getElementById() to access them.",
    hint:
      "Use const variables and document.getElementById(\"your-id\") inside the script."
  },

  challenge: {
    title: "Explore the DOM",
    description:
      "Create a simple HTML page and use JavaScript to access multiple elements through the DOM.",
    task:
      "Create a heading, paragraph, and button. Give each element a unique id. Use document.getElementById() to select all three elements and print them using console.log()."
  }
},"select-elements": {
  concept: {
    heading: "Selecting HTML Elements",
    paragraphs: [
      "Before JavaScript can change an HTML element, it needs to find or select that element from the DOM.",
      "The DOM provides several methods for selecting elements. The most commonly used methods are getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll().",
      "getElementById() selects one element using its id. getElementsByClassName() selects elements using a class name, while getElementsByTagName() selects elements using an HTML tag name.",
      "querySelector() uses a CSS selector and returns the first matching element. querySelectorAll() uses a CSS selector and returns all matching elements.",
      "Choosing the correct method makes DOM code easier to read and maintain."
    ],
    remember:
      "First select the element, then perform an operation on it. querySelector() and querySelectorAll() are especially useful because they support CSS selectors."
  },

  analogy: {
    heading: "Think of Selecting Elements Like Finding Items",
    items: [
      {
        icon: "🆔",
        title: "ID",
        text: "An id identifies a specific element. getElementById() is useful when you want one particular element."
      },
      {
        icon: "🏷️",
        title: "Class",
        text: "A class can be shared by multiple elements. getElementsByClassName() can select all elements having that class."
      },
      {
        icon: "🔖",
        title: "Tag",
        text: "A tag name such as p, h1, or button can be used to select elements of that type."
      },
      {
        icon: "🎯",
        title: "CSS Selector",
        text: "querySelector() and querySelectorAll() allow you to select elements using CSS-style selectors."
      }
    ]
  },

  visual: {
    heading: "Common DOM Selection Methods",
    description:
      "Different selectors are useful in different situations. Start with the simplest selector that clearly identifies the element you need.",
    steps: [
      {
        icon: "1️⃣",
        title: "getElementById()",
        text: "Selects an element by its unique id."
      },
      {
        icon: "2️⃣",
        title: "getElementsByClassName()",
        text: "Selects elements that have a particular class name."
      },
      {
        icon: "3️⃣",
        title: "getElementsByTagName()",
        text: "Selects elements using their HTML tag name."
      },
      {
        icon: "4️⃣",
        title: "querySelector()",
        text: "Selects the first element that matches a CSS selector."
      },
      {
        icon: "5️⃣",
        title: "querySelectorAll()",
        text: "Selects all elements that match a CSS selector."
      }
    ],
    flow:
      "HTML Element → Selector → DOM Method → Selected Element(s) → JavaScript Operation"
  },

  code: {
    title: "Different Ways to Select Elements",
    description:
      "This example demonstrates the five commonly used DOM selection methods.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>DOM Selection</title>
</head>
<body>

  <h1 id="title">JavaScript DOM</h1>

  <p class="message">Learn DOM step by step.</p>
  <p class="message">Practice makes DOM easier.</p>

  <button class="btn">Start Learning</button>

  <script>
    // 1. Select by ID
    const title = document.getElementById("title");

    // 2. Select by class name
    const messages = document.getElementsByClassName("message");

    // 3. Select by tag name
    const paragraphs = document.getElementsByTagName("p");

    // 4. Select the first matching element
    const firstMessage = document.querySelector(".message");

    // 5. Select all matching elements
    const allMessages = document.querySelectorAll(".message");

    console.log(title);
    console.log(messages);
    console.log(paragraphs);
    console.log(firstMessage);
    console.log(allMessages);
  </script>

</body>
</html>`,
    output:
      "The console shows the selected heading, HTML collections, the first matching paragraph, and all matching paragraphs.",
    explanation:
      "getElementById() finds an element using its id. getElementsByClassName() finds elements using a class name. getElementsByTagName() finds elements using a tag name. querySelector() returns the first element matching a CSS selector. querySelectorAll() returns all matching elements."
  },

  interview: {
    question: "What is the difference between querySelector() and querySelectorAll()?",
    answer:
      "querySelector() returns the first element that matches the given CSS selector, while querySelectorAll() returns all matching elements.",
    tip:
      "Remember: querySelector() = first match, querySelectorAll() = all matches."
  },

  tricky: {
    question:
      "What happens if querySelector() does not find a matching element?",
    answer:
      "It returns null. Therefore, trying to directly access a property or method on the result without checking it can cause an error."
  },

  practice: {
    question:
      "Create three paragraphs with the same class name. Use querySelector() to select the first paragraph and querySelectorAll() to select all three paragraphs.",
    hint:
      "Use document.querySelector(\".className\") for the first match and document.querySelectorAll(\".className\") for all matches."
  },

  challenge: {
    title: "Build an Element Selector Demo",
    description:
      "Create a small HTML page containing different types of elements and select them using different DOM methods.",
    task:
      "Create one heading with an id, three paragraphs with the same class, and two buttons. Select the heading using getElementById(), the paragraphs using querySelectorAll(), and the buttons using querySelectorAll(). Print all selected elements in the console."
  }
},"change-content": {
  concept: {
    heading: "Changing HTML Content with JavaScript",
    paragraphs: [
      "After selecting an HTML element, JavaScript can change the content inside that element.",
      "The most commonly used properties are textContent, innerHTML, and innerText.",
      "textContent changes or reads the text content of an element. It treats the value as plain text, so HTML tags are not interpreted.",
      "innerHTML can read or replace the HTML content inside an element. When HTML markup is assigned to innerHTML, the browser interprets that markup.",
      "innerText works with the visible text of an element and is affected by CSS and layout.",
      "For simple text changes, textContent is usually the clearest choice. Use innerHTML when you intentionally need to insert HTML markup."
    ],
    remember:
      "Select the element first, then change its content using textContent or innerHTML depending on whether you need plain text or HTML."
  },

  analogy: {
    heading: "Think of Content Like Changing a Message",
    items: [
      {
        icon: "📝",
        title: "textContent",
        text: "Replace the text inside an element with plain text."
      },
      {
        icon: "🌐",
        title: "innerHTML",
        text: "Replace the content using HTML markup when formatted HTML is required."
      },
      {
        icon: "👁️",
        title: "innerText",
        text: "Works with the visible text of an element."
      },
      {
        icon: "🔄",
        title: "Dynamic Update",
        text: "JavaScript can update page content whenever an event or condition occurs."
      }
    ]
  },

  visual: {
    heading: "How Content Changes",
    description:
      "JavaScript first selects an element and then assigns a new value to its content property.",
    steps: [
      {
        icon: "1️⃣",
        title: "Select the element",
        text: "Find the required HTML element using a DOM selection method."
      },
      {
        icon: "2️⃣",
        title: "Choose the property",
        text: "Use textContent for plain text or innerHTML when HTML markup is required."
      },
      {
        icon: "3️⃣",
        title: "Assign new content",
        text: "Set the property to the new text or HTML."
      },
      {
        icon: "4️⃣",
        title: "DOM is updated",
        text: "The browser updates the content displayed on the page."
      }
    ],
    flow:
      "HTML Element → Select Element → Change Content → DOM Updated → New Content Visible"
  },

  code: {
    title: "Changing Text and HTML",
    description:
      "This example demonstrates textContent, innerHTML, and innerText.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Changing Content</title>
</head>
<body>

  <h1 id="title">Original Heading</h1>

  <p id="message">Original paragraph text.</p>

  <div id="box">Original content</div>

  <script>
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const box = document.getElementById("box");

    // Change plain text
    title.textContent = "Updated Heading";

    // Change plain text
    message.textContent = "The paragraph content has been updated.";

    // Insert HTML
    box.innerHTML = "<strong>Updated content</strong>";

    console.log(title.innerText);
    console.log(message.textContent);
  </script>

</body>
</html>`,
    output:
      "The page displays 'Updated Heading', an updated paragraph, and bold 'Updated content'.",
    explanation:
      "textContent replaces the text inside an element. innerHTML can replace the content with HTML markup. innerText reads or changes visible text and is affected by the rendered page."
  },

  interview: {
    question: "What is the difference between textContent and innerHTML?",
    answer:
      "textContent treats the assigned value as plain text, while innerHTML interprets HTML markup inside the assigned value.",
    tip:
      "Use textContent for normal text. Use innerHTML only when you intentionally need HTML markup."
  },

  tricky: {
    question:
      "What will happen if HTML tags are assigned using textContent?",
    answer:
      "The tags will be displayed as text instead of being interpreted as HTML.",
  },

  practice: {
    question:
      "Create a heading and paragraph. Select both elements with JavaScript and change their content using textContent.",
    hint:
      "Use document.getElementById() followed by the textContent property."
  },

  challenge: {
    title: "Build a Dynamic Message",
    description:
      "Create a simple page where JavaScript replaces the original heading and message with new content.",
    task:
      "Create a heading, paragraph, and div. Use textContent to update the heading and paragraph. Use innerHTML to add a bold message inside the div."
  }
},"event-basics": {
  concept: {
    heading: "What is an Event in JavaScript?",
    paragraphs: [
      "An event is an action or occurrence that happens in a web page. Events can be caused by the user, the browser, or JavaScript.",
      "Common user events include clicking a button, typing into an input field, submitting a form, moving the mouse, and pressing a keyboard key.",
      "JavaScript can detect these events and execute specific code when they occur. This is what makes web pages interactive.",
      "For example, a button can display a message when it is clicked, or a form can validate data when the user submits it.",
      "Events are an important part of DOM programming because they allow JavaScript to respond to what is happening on the page."
    ],
    remember:
      "An event represents something that happens. JavaScript can listen for the event and run code in response."
  },

  analogy: {
    heading: "Think of Events Like Real-World Actions",
    items: [
      {
        icon: "🖱️",
        title: "Click",
        text: "A user clicks a button or another element."
      },
      {
        icon: "⌨️",
        title: "Keyboard",
        text: "A user presses or releases a keyboard key."
      },
      {
        icon: "✍️",
        title: "Input",
        text: "A user types or changes a value in an input field."
      },
      {
        icon: "📋",
        title: "Submit",
        text: "A user submits a form."
      }
    ]
  },

  visual: {
    heading: "How Events Work",
    description:
      "JavaScript waits for an event and executes the required code when that event occurs.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Action",
        text: "The user performs an action such as clicking a button."
      },
      {
        icon: "2️⃣",
        title: "Event Occurs",
        text: "The browser detects the action and creates an event."
      },
      {
        icon: "3️⃣",
        title: "JavaScript Listens",
        text: "JavaScript has code that listens for that event."
      },
      {
        icon: "4️⃣",
        title: "Handler Runs",
        text: "The event handler or callback function executes."
      },
      {
        icon: "5️⃣",
        title: "Page Responds",
        text: "The page performs the required action."
      }
    ],
    flow:
      "User Action → Event → Event Handler → JavaScript Code → Page Response"
  },

  code: {
    title: "A Simple Click Event",
    description:
      "This example responds when a button is clicked.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Event Basics</title>
</head>
<body>

  <button id="button">Click Me</button>

  <script>
    const button = document.getElementById("button");

    button.addEventListener("click", function () {
      console.log("Button was clicked.");
    });
  </script>

</body>
</html>`,
    output:
      "When the button is clicked, 'Button was clicked.' appears in the browser console.",
    explanation:
      "The button is selected from the DOM. addEventListener() listens for the click event. When the click occurs, the callback function executes."
  },

  interview: {
    question: "What is an event in JavaScript?",
    answer:
      "An event is an action or occurrence detected by the browser, such as a click, keyboard action, input change, or form submission.",
    tip:
      "Events allow JavaScript to respond to user actions and browser activity."
  },

  tricky: {
    question:
      "Does JavaScript continuously run the event handler before the event happens?",
    answer:
      "No. The event handler runs when the specified event actually occurs."
  },

  practice: {
    question:
      "Create a button and write JavaScript that displays a message in the console when the button is clicked.",
    hint:
      "Select the button and listen for the click event."
  },

  challenge: {
    title: "Create an Interactive Button",
    description:
      "Build a button that responds to a user action.",
    task:
      "Create a button and use an event handler so that clicking the button changes a paragraph message."
  }
},"change-style": {
  concept: {
    heading: "Changing HTML Styles with JavaScript",
    paragraphs: [
      "JavaScript can change the appearance of an HTML element by modifying its style through the DOM.",
      "After selecting an element, the style property can be used to change CSS properties such as color, backgroundColor, fontSize, width, height, display, and border.",
      "CSS property names that contain a hyphen are written in camelCase when used with JavaScript. For example, background-color becomes backgroundColor and font-size becomes fontSize.",
      "JavaScript style changes are useful when a page needs to react to user actions, conditions, or application state.",
      "For larger applications, changing CSS classes is often easier to maintain than setting many individual style properties."
    ],
    remember:
      "Select the element first, then use element.style.property to change an individual CSS property."
  },

  analogy: {
    heading: "Think of JavaScript Like a Style Controller",
    items: [
      {
        icon: "🎨",
        title: "Color",
        text: "JavaScript can change the text or background color of an element."
      },
      {
        icon: "📏",
        title: "Size",
        text: "Font size, width, and height can be changed dynamically."
      },
      {
        icon: "👁️",
        title: "Visibility",
        text: "Elements can be shown or hidden by changing properties such as display."
      },
      {
        icon: "🔄",
        title: "Dynamic Styling",
        text: "Styles can change when a user clicks a button or when a condition becomes true."
      }
    ]
  },

  visual: {
    heading: "How JavaScript Changes Styles",
    description:
      "The style property provides access to inline styles that JavaScript can modify.",
    steps: [
      {
        icon: "1️⃣",
        title: "Select the element",
        text: "Find the HTML element using a DOM selection method."
      },
      {
        icon: "2️⃣",
        title: "Access style",
        text: "Use the element.style property."
      },
      {
        icon: "3️⃣",
        title: "Set a CSS property",
        text: "Assign a value to properties such as color, backgroundColor, or fontSize."
      },
      {
        icon: "4️⃣",
        title: "Browser updates the page",
        text: "The visual appearance changes immediately."
      }
    ],
    flow:
      "HTML Element → Select Element → element.style → CSS Property Changed → Updated Appearance"
  },

  code: {
    title: "Changing Styles Dynamically",
    description:
      "This example changes multiple CSS properties when the button is clicked.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Changing Styles</title>
</head>
<body>

  <h1 id="title">JavaScript Styling</h1>

  <p id="message">
    This style will be changed using JavaScript.
  </p>

  <button id="button">Change Style</button>

  <script>
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const button = document.getElementById("button");

    button.addEventListener("click", function () {
      title.style.fontSize = "36px";
      title.style.textAlign = "center";

      message.style.backgroundColor = "lightblue";
      message.style.padding = "15px";
      message.style.fontSize = "20px";
    });
  </script>

</body>
</html>`,
    output:
      "When the button is clicked, the heading becomes larger and centered. The paragraph gets a background color, padding, and larger text.",
    explanation:
      "The selected elements are stored in variables. When the button is clicked, JavaScript changes their style properties. CSS properties such as font-size and background-color are written as fontSize and backgroundColor in JavaScript."
  },

  interview: {
    question: "How can JavaScript change the CSS style of an element?",
    answer:
      "After selecting an element, JavaScript can use the element.style property to change individual CSS properties.",
    tip:
      "Remember the pattern: element.style.property = value."
  },

  tricky: {
    question:
      "How do you write CSS background-color in JavaScript?",
    answer:
      "CSS properties containing hyphens are generally written in camelCase through the style property. For example, background-color becomes backgroundColor."
  },

  practice: {
    question:
      "Create a heading and button. When the button is clicked, change the heading's font size, color, and text alignment.",
    hint:
      "Select the heading and button, then use button.addEventListener() to run the style changes."
  },

  challenge: {
    title: "Build a Dynamic Style Changer",
    description:
      "Create a small page where a button changes the appearance of a content section.",
    task:
      "Create a heading, paragraph, and button. When the button is clicked, change the heading size, paragraph background color, paragraph padding, and text alignment."
  }
},
"create-elements": {
  concept: {
    heading: "Creating HTML Elements with JavaScript",
    paragraphs: [
      "JavaScript can create new HTML elements dynamically using the DOM.",
      "The document.createElement() method creates a new element. For example, document.createElement(\"p\") creates a new paragraph element.",
      "Creating an element does not automatically place it on the webpage. The new element must be inserted into an existing DOM element.",
      "We can add text using textContent, add CSS classes using classList, and set attributes using methods such as setAttribute().",
      "The appendChild() and append() methods can then be used to insert the new element into the page.",
      "This technique is commonly used for dynamic lists, product cards, notifications, comments, menus, and other interactive content."
    ],
    remember:
      "createElement() creates a new element. appendChild() or append() inserts that element into the DOM."
  },

  analogy: {
    heading: "Think of Creating an Element Like Building Something New",
    items: [
      {
        icon: "🏗️",
        title: "Create",
        text: "document.createElement() creates a new HTML element."
      },
      {
        icon: "✏️",
        title: "Configure",
        text: "Add text, classes, attributes, or other properties to the new element."
      },
      {
        icon: "📍",
        title: "Choose Parent",
        text: "Select the existing element where the new element should be placed."
      },
      {
        icon: "➕",
        title: "Insert",
        text: "Use append() or appendChild() to add the new element to the DOM."
      }
    ]
  },

  visual: {
    heading: "How to Create an HTML Element",
    description:
      "A new element is created first, configured next, and finally inserted into the DOM.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create the Element",
        text: "Use document.createElement() with the required tag name."
      },
      {
        icon: "2️⃣",
        title: "Add Content",
        text: "Use textContent or innerHTML to add content."
      },
      {
        icon: "3️⃣",
        title: "Add Classes or Attributes",
        text: "Use classList or setAttribute() when required."
      },
      {
        icon: "4️⃣",
        title: "Select the Parent",
        text: "Find the existing DOM element where the new element should be inserted."
      },
      {
        icon: "5️⃣",
        title: "Append the Element",
        text: "Use append() or appendChild() to insert the new element."
      }
    ],
    flow:
      "createElement() → Add Content → Configure → Select Parent → append() → Element Appears"
  },

  code: {
    title: "Creating and Adding Elements Dynamically",
    description:
      "This example creates a new list item when the button is clicked.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Creating Elements</title>
</head>
<body>

  <h1>Dynamic List</h1>

  <button id="button">Add Item</button>

  <ul id="list"></ul>

  <script>
    const button = document.getElementById("button");
    const list = document.getElementById("list");

    button.addEventListener("click", function () {

      // Create a new li element
      const listItem = document.createElement("li");

      // Add text
      listItem.textContent = "New item added";

      // Add a CSS class
      listItem.classList.add("list-item");

      // Add the element to the list
      list.appendChild(listItem);

    });
  </script>

</body>
</html>`,
    output:
      "Each time the button is clicked, a new list item containing 'New item added' appears inside the unordered list.",
    explanation:
      "document.createElement(\"li\") creates a new list item. textContent adds text to it. classList.add() adds a CSS class. Finally, appendChild() inserts the new element inside the ul."
  },

  interview: {
    question: "How do you create a new HTML element using JavaScript?",
    answer:
      "Use document.createElement() to create the element and then use append() or appendChild() to insert it into the DOM.",
    tip:
      "Remember: create first, configure second, append last."
  },

  tricky: {
    question:
      "Does document.createElement() automatically display the new element?",
    answer:
      "No. It only creates the element in memory. You must insert it into the DOM using append(), appendChild(), or another DOM insertion method."
  },

  practice: {
    question:
      "Create a button and an empty div. When the button is clicked, create a new paragraph and add it inside the div.",
    hint:
      "Use document.createElement(\"p\"), set textContent, and then use appendChild()."
  },

  challenge: {
    title: "Build a Dynamic List",
    description:
      "Create a small application that dynamically adds items to a list.",
    task:
      "Create an input field, an Add Item button, and an empty ul. When the button is clicked, create a new li element, use the input value as its text, and append the li to the ul."
  }
},
"click-event": {
  concept: {
    heading: "Click Event",
    paragraphs: [
      "The click event occurs when a user clicks an element such as a button, link, image, or another interactive element.",
      "The click event is one of the most frequently used events in JavaScript because many web interactions begin with a click.",
      "JavaScript can listen for a click and then perform an action such as changing content, changing styles, showing a message, hiding an element, or creating new content.",
      "The addEventListener() method is a common way to handle click events because it keeps event logic separate from the HTML."
    ],
    remember:
      "A click event occurs when the user clicks an element. Use addEventListener(\"click\", handler) to respond to it."
  },

  analogy: {
    heading: "Click Event in Real Applications",
    items: [
      {
        icon: "🔘",
        title: "Button",
        text: "Clicking a button can start an action."
      },
      {
        icon: "🛒",
        title: "Add to Cart",
        text: "Clicking an Add to Cart button can add an item to a shopping cart."
      },
      {
        icon: "☰",
        title: "Menu",
        text: "Clicking a menu icon can open or close navigation."
      },
      {
        icon: "❤️",
        title: "Like",
        text: "Clicking a like button can update the interface."
      }
    ]
  },

  visual: {
    heading: "Click Event Flow",
    description:
      "A click event connects the user's mouse action with JavaScript code.",
    steps: [
      {
        icon: "1️⃣",
        title: "Select Element",
        text: "Find the button or other clickable element."
      },
      {
        icon: "2️⃣",
        title: "Listen for Click",
        text: "Attach a click event listener."
      },
      {
        icon: "3️⃣",
        title: "User Clicks",
        text: "The user clicks the element."
      },
      {
        icon: "4️⃣",
        title: "Handler Executes",
        text: "JavaScript runs the function connected to the event."
      }
    ],
    flow:
      "Button → click event → Event Handler → JavaScript Action → Updated Page"
  },

  code: {
    title: "Changing Content on Click",
    description:
      "This example changes paragraph content when the button is clicked.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Click Event</title>
</head>
<body>

  <h1 id="title">Welcome</h1>

  <p id="message">Click the button to continue.</p>

  <button id="button">Continue</button>

  <script>
    const message = document.getElementById("message");
    const button = document.getElementById("button");

    button.addEventListener("click", function () {
      message.textContent = "The button was clicked successfully.";
    });
  </script>

</body>
</html>`,
    output:
      "After clicking the button, the paragraph changes to 'The button was clicked successfully.'",
    explanation:
      "The button is selected and a click event listener is attached to it. When the user clicks the button, the function changes the paragraph's text using textContent."
  },

  interview: {
    question: "How do you handle a click event in JavaScript?",
    answer:
      "A click event can be handled using addEventListener(\"click\", function). The function runs whenever the selected element is clicked.",
    tip:
      "The event name for a normal mouse click is 'click'."
  },

  tricky: {
    question:
      "Can elements other than buttons have click events?",
    answer:
      "Yes. Many HTML elements can respond to click events, although interactive elements such as buttons and links are generally preferred for user actions."
  },

  practice: {
    question:
      "Create a button that changes a heading from 'Welcome' to 'Hello JavaScript' when clicked.",
    hint:
      "Select the heading and button, then change the heading's textContent inside the click handler."
  },

  challenge: {
    title: "Build a Click Counter",
    description:
      "Create a simple counter that responds to button clicks.",
    task:
      "Create a number displayed on the page and a button. Every time the button is clicked, increase the number by 1 and display the updated value."
  }
},"input-event": {
  concept: {
    heading: "Input Event",
    paragraphs: [
      "The input event occurs when the value of an input, textarea, or other editable form control changes as the user interacts with it.",
      "Unlike waiting for form submission, the input event allows JavaScript to respond while the user is entering data.",
      "This is useful for live search, character counters, password strength indicators, live previews, and instant validation.",
      "The event object provides information about the event. For form controls, event.target refers to the element that generated the event, and event.target.value gives its current value."
    ],
    remember:
      "The input event is useful when you want to react immediately as the user changes the value of a form field."
  },

  analogy: {
    heading: "Input Event in Real Applications",
    items: [
      {
        icon: "🔎",
        title: "Live Search",
        text: "Search results can update while the user types."
      },
      {
        icon: "🔢",
        title: "Character Counter",
        text: "A page can show how many characters have been entered."
      },
      {
        icon: "👁️",
        title: "Live Preview",
        text: "Typed content can be displayed immediately somewhere else on the page."
      },
      {
        icon: "✅",
        title: "Validation",
        text: "JavaScript can check input while the user is typing."
      }
    ]
  },

  visual: {
    heading: "How the Input Event Works",
    description:
      "The input event runs whenever the user changes the value of an editable form element.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Types",
        text: "The user enters or changes a value."
      },
      {
        icon: "2️⃣",
        title: "Input Event Fires",
        text: "The browser generates an input event."
      },
      {
        icon: "3️⃣",
        title: "Handler Runs",
        text: "The JavaScript event handler executes."
      },
      {
        icon: "4️⃣",
        title: "Read Value",
        text: "The current value can be accessed using event.target.value."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "JavaScript can update another element immediately."
      }
    ],
    flow:
      "User Types → input Event → Handler → event.target.value → UI Update"
  },

  code: {
    title: "Live Input Preview",
    description:
      "This example displays the input value immediately while the user types.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Input Event</title>
</head>
<body>

  <input
    id="input"
    type="text"
    placeholder="Type something"
  >

  <p id="preview">Your text will appear here.</p>

  <script>
    const input = document.getElementById("input");
    const preview = document.getElementById("preview");

    input.addEventListener("input", function (event) {
      preview.textContent = event.target.value;
    });
  </script>

</body>
</html>`,
    output:
      "As the user types, the same text appears immediately inside the paragraph.",
    explanation:
      "The input event runs whenever the input value changes. event.target refers to the input element, and event.target.value contains the current text."
  },

  interview: {
    question: "What is the input event used for?",
    answer:
      "The input event is used to detect changes to an editable form control as the user interacts with it.",
    tip:
      "Use input when you need a live response while the user is entering data."
  },

  tricky: {
    question:
      "What does event.target.value represent for a text input?",
    answer:
      "It represents the current value entered into that input element."
  },

  practice: {
    question:
      "Create an input and paragraph. Display the current input value in the paragraph while the user types.",
    hint:
      "Listen for the input event and use event.target.value."
  },

  challenge: {
    title: "Build a Live Character Counter",
    description:
      "Create a text input that shows the number of characters entered.",
    task:
      "Create an input field and a paragraph. Listen for the input event and display the current number of characters using the input value's length."
  }
},
"event-listener": {
  concept: {
    heading: "Event Listener",
    paragraphs: [
      "An event listener is a mechanism that waits for a specific event to occur and then executes a function.",
      "The addEventListener() method is the standard way to attach an event listener to a DOM element.",
      "Its basic syntax is element.addEventListener(eventName, function). The first argument specifies the event type and the second argument specifies the function that should run.",
      "A single element can have multiple event listeners for different events. Multiple listeners can also be attached to the same event.",
      "Using addEventListener() keeps JavaScript event handling separate from HTML and makes code easier to maintain."
    ],
    remember:
      "addEventListener() connects an event to a function that should execute when that event occurs."
  },

  analogy: {
    heading: "Think of an Event Listener Like a Watcher",
    items: [
      {
        icon: "👂",
        title: "Listen",
        text: "The listener waits for a specific event."
      },
      {
        icon: "🎯",
        title: "Event Type",
        text: "You specify what event should be detected, such as click or input."
      },
      {
        icon: "⚙️",
        title: "Function",
        text: "The callback function contains the action to perform."
      },
      {
        icon: "🔁",
        title: "Repeat",
        text: "The listener can respond every time the event occurs."
      }
    ]
  },

  visual: {
    heading: "addEventListener() Flow",
    description:
      "The event listener connects an element, an event type, and a callback function.",
    steps: [
      {
        icon: "1️⃣",
        title: "Select Element",
        text: "Find the element that should respond to an event."
      },
      {
        icon: "2️⃣",
        title: "Choose Event",
        text: "Specify the event type such as click or input."
      },
      {
        icon: "3️⃣",
        title: "Provide Function",
        text: "Write the function that should execute."
      },
      {
        icon: "4️⃣",
        title: "Event Occurs",
        text: "The browser detects the event."
      },
      {
        icon: "5️⃣",
        title: "Function Executes",
        text: "The callback function runs."
      }
    ],
    flow:
      "Element → addEventListener() → Event → Callback Function → Action"
  },

  code: {
    title: "Using Multiple Event Listeners",
    description:
      "An element can respond to more than one type of event.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Event Listener</title>
</head>
<body>

  <button id="button">Interact</button>

  <p id="message">Waiting for an event...</p>

  <script>
    const button = document.getElementById("button");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
      message.textContent = "The button was clicked.";
    });

    button.addEventListener("mouseover", function () {
      console.log("Mouse is over the button.");
    });
  </script>

</body>
</html>`,
    output:
      "Clicking the button changes the paragraph. Moving the mouse over the button prints a message in the console.",
    explanation:
      "Two separate event listeners are attached to the same button. One listens for click and the other listens for mouseover. Each listener has its own callback function."
  },

  interview: {
    question: "What is addEventListener()?",
    answer:
      "addEventListener() is a DOM method used to attach a function that runs when a specified event occurs on an element.",
    tip:
      "Basic pattern: element.addEventListener(\"event\", handler)."
  },

  tricky: {
    question:
      "Can one element have multiple event listeners?",
    answer:
      "Yes. An element can have multiple listeners for different events, and multiple listeners can also be attached to the same event."
  },

  practice: {
    question:
      "Create a button with a click listener and a mouseover listener. Display different messages for both events.",
    hint:
      "Use addEventListener() twice with different event names."
  },

  challenge: {
    title: "Build an Event Interaction Demo",
    description:
      "Create one element that responds differently to multiple user actions.",
    task:
      "Create a button and paragraph. Use separate event listeners for click, mouseover, and mouseout. Display an appropriate message for each event."
  }
},
"event-bubbling": {
  concept: {
    heading: "Event Bubbling",
    paragraphs: [
      "Event bubbling is a behavior where an event that occurs on a nested element can propagate upward through its parent elements.",
      "For example, if a button is placed inside a div and the button is clicked, the click event can first be handled by the button and then continue to the parent div.",
      "This movement from the target element toward its parent elements is called event bubbling.",
      "Event bubbling is important because it allows developers to use event delegation, where one parent listener can handle events from multiple child elements.",
      "The event object provides properties such as target and currentTarget. target refers to the element where the event originally occurred, while currentTarget refers to the element whose listener is currently running."
    ],
    remember:
      "In event bubbling, an event moves from the target element upward through its parent elements."
  },

  analogy: {
    heading: "Think of Bubbling Like Passing a Message Upward",
    items: [
      {
        icon: "🎯",
        title: "Target",
        text: "The event starts on the element that was interacted with."
      },
      {
        icon: "⬆️",
        title: "Parent",
        text: "The event can move from the target to its parent."
      },
      {
        icon: "🏠",
        title: "Ancestor",
        text: "The event can continue upward through higher-level parent elements."
      },
      {
        icon: "🛑",
        title: "Stop Propagation",
        text: "event.stopPropagation() can stop the event from continuing upward."
      }
    ]
  },

  visual: {
    heading: "How Event Bubbling Works",
    description:
      "When a nested element is clicked, the event can travel upward from the target to its parent elements.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Clicks Child",
        text: "The user interacts with a nested element."
      },
      {
        icon: "2️⃣",
        title: "Target Receives Event",
        text: "The event starts at the element that was clicked."
      },
      {
        icon: "3️⃣",
        title: "Event Bubbles",
        text: "The event moves upward to the parent element."
      },
      {
        icon: "4️⃣",
        title: "Parent Handler Runs",
        text: "The parent can also respond to the same event."
      },
      {
        icon: "5️⃣",
        title: "Propagation Can Stop",
        text: "stopPropagation() can prevent the event from continuing upward."
      }
    ],
    flow:
      "Child Element → Parent Element → Higher Parent → Document"
  },

  code: {
    title: "Understanding Event Bubbling",
    description:
      "This example demonstrates how a click event moves from a button to its parent container.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling</title>
</head>
<body>

  <div id="container">
    <button id="button">Click Button</button>
  </div>

  <script>
    const container = document.getElementById("container");
    const button = document.getElementById("button");

    button.addEventListener("click", function () {
      console.log("Button clicked");
    });

    container.addEventListener("click", function () {
      console.log("Container clicked");
    });
  </script>

</body>
</html>`,
    output:
      "When the button is clicked, the console shows 'Button clicked' first and then 'Container clicked'.",
    explanation:
      "The click event starts on the button. The button's event handler runs first. Then the event bubbles upward to the container, so the container's click handler also runs."
  },

  interview: {
    question: "What is event bubbling?",
    answer:
      "Event bubbling is the process in which an event propagates from the target element upward through its parent elements.",
    tip:
      "Remember the direction: child → parent → ancestor."
  },

  tricky: {
    question:
      "What is the difference between event.target and event.currentTarget?",
    answer:
      "event.target is the element where the event originally occurred. event.currentTarget is the element whose event listener is currently executing."
  },

  practice: {
    question:
      "Create a parent div containing a button. Add click listeners to both and observe the order in which the messages appear.",
    hint:
      "Click the button and compare the console output from the child and parent listeners."
  },

  challenge: {
    title: "Practice Event Bubbling",
    description:
      "Create nested elements and observe how a click event moves through the DOM.",
    task:
      "Create a div containing another div and a button. Add click listeners to all three elements. Print a different message from each listener and observe the bubbling order. Then use event.stopPropagation() on the middle element and observe the difference."
  }
},"local-storage": {
  concept: {
    heading: "Local Storage",
    paragraphs: [
      "Local Storage is a browser feature that allows JavaScript to store data in the user's browser.",
      "Data stored in localStorage remains available even after the browser tab is closed or the browser is restarted, until the data is removed.",
      "localStorage stores data as key-value pairs. Both the key and value are stored as strings.",
      "The most commonly used methods are setItem(), getItem(), removeItem(), and clear().",
      "Local Storage is useful for saving simple client-side data such as user preferences, theme settings, small application settings, and temporary application state.",
      "Sensitive information such as passwords, authentication secrets, or private tokens should not be stored in localStorage."
    ],
    remember:
      "localStorage stores key-value data in the browser and normally persists until it is explicitly removed."
  },

  analogy: {
    heading: "Think of Local Storage Like a Small Browser Locker",
    items: [
      {
        icon: "📦",
        title: "Store",
        text: "setItem() saves a value using a key."
      },
      {
        icon: "🔍",
        title: "Read",
        text: "getItem() retrieves a stored value."
      },
      {
        icon: "🗑️",
        title: "Remove",
        text: "removeItem() deletes one stored item."
      },
      {
        icon: "🧹",
        title: "Clear",
        text: "clear() removes all localStorage data for the current origin."
      }
    ]
  },

  visual: {
    heading: "How Local Storage Works",
    description:
      "JavaScript communicates with the browser's localStorage object to save and retrieve small amounts of client-side data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "JavaScript creates a key and value that needs to be stored."
      },
      {
        icon: "2️⃣",
        title: "Store Data",
        text: "setItem() saves the value in localStorage."
      },
      {
        icon: "3️⃣",
        title: "Retrieve Data",
        text: "getItem() reads the stored value using its key."
      },
      {
        icon: "4️⃣",
        title: "Update or Remove",
        text: "The value can be replaced or removed when needed."
      }
    ],
    flow:
      "JavaScript → localStorage → Key-Value Data → Browser Storage → Retrieve Later"
  },

  code: {
    title: "Using Local Storage",
    description:
      "This example stores, reads, updates, and removes a value from localStorage.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Local Storage</title>
</head>
<body>

  <button id="save">Save Data</button>
  <button id="read">Read Data</button>
  <button id="remove">Remove Data</button>

  <p id="message">No data loaded.</p>

  <script>
    const saveButton = document.getElementById("save");
    const readButton = document.getElementById("read");
    const removeButton = document.getElementById("remove");
    const message = document.getElementById("message");

    saveButton.addEventListener("click", function () {
      localStorage.setItem("theme", "dark");
      message.textContent = "Data saved.";
    });

    readButton.addEventListener("click", function () {
      const theme = localStorage.getItem("theme");

      if (theme !== null) {
        message.textContent = "Stored value: " + theme;
      } else {
        message.textContent = "No data found.";
      }
    });

    removeButton.addEventListener("click", function () {
      localStorage.removeItem("theme");
      message.textContent = "Data removed.";
    });
  </script>

</body>
</html>`,
    output:
      "Clicking Save Data stores 'dark'. Clicking Read Data displays the stored value. Clicking Remove Data deletes the stored value.",
    explanation:
      "setItem() stores data using a key. getItem() retrieves the value. removeItem() removes a specific key. localStorage stores values as strings."
  },

  interview: {
    question: "What is localStorage in JavaScript?",
    answer:
      "localStorage is a browser storage mechanism used to store key-value data that normally persists even after the browser or tab is closed.",
    tip:
      "Remember: localStorage persists until the stored data is removed."
  },

  tricky: {
    question: "Does localStorage store JavaScript objects directly?",
    answer:
      "No. localStorage stores strings. Objects must be converted to JSON strings using JSON.stringify() before storing and converted back using JSON.parse() after retrieving."
  },

  practice: {
    question:
      "Store a key named 'language' with the value 'JavaScript' in localStorage. Then retrieve and display it.",
    hint:
      "Use setItem() to store the value and getItem() to retrieve it."
  },

  challenge: {
    title: "Build a Preference Saver",
    description:
      "Create a small application that saves a user's preferred theme.",
    task:
      "Create two buttons: Dark Mode and Light Mode. Store the selected theme in localStorage and display the currently saved theme when the page loads."
  }
},"session-storage": {
  concept: {
    heading: "Session Storage",
    paragraphs: [
      "Session Storage is a browser storage mechanism that allows JavaScript to store data for the current browser session.",
      "Like localStorage, sessionStorage stores data as key-value pairs and stores values as strings.",
      "The important difference is persistence. sessionStorage data is generally available only for the lifetime of the current page session and is cleared when that page session ends.",
      "The main methods are setItem(), getItem(), removeItem(), and clear().",
      "Session Storage can be useful for temporary page state, multi-step form data, temporary selections, and other information that should not normally persist as long as localStorage."
    ],
    remember:
      "localStorage is designed for persistent browser storage, while sessionStorage is designed for temporary storage associated with a page session."
  },

  analogy: {
    heading: "Local Storage vs Session Storage",
    items: [
      {
        icon: "💾",
        title: "Local Storage",
        text: "Data normally remains available after closing and reopening the browser until it is removed."
      },
      {
        icon: "⏳",
        title: "Session Storage",
        text: "Data is intended for the current page session and is cleared when that session ends."
      },
      {
        icon: "🔑",
        title: "Key-Value",
        text: "Both storage types use key-value pairs and store values as strings."
      },
      {
        icon: "🛠️",
        title: "Same API Style",
        text: "Both provide methods such as setItem(), getItem(), removeItem(), and clear()."
      }
    ]
  },

  visual: {
    heading: "How Session Storage Works",
    description:
      "JavaScript can save temporary information in sessionStorage while the page session is active.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "JavaScript creates a key and value."
      },
      {
        icon: "2️⃣",
        title: "Store in Session",
        text: "setItem() stores the value in sessionStorage."
      },
      {
        icon: "3️⃣",
        title: "Use Data",
        text: "getItem() retrieves the stored value during the session."
      },
      {
        icon: "4️⃣",
        title: "Session Ends",
        text: "The session data is cleared when the page session ends."
      }
    ],
    flow:
      "JavaScript → sessionStorage → Temporary Data → Current Page Session → Session Ends"
  },

  code: {
    title: "Using Session Storage",
    description:
      "This example stores and retrieves temporary session data.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Session Storage</title>
</head>
<body>

  <button id="save">Save Session Data</button>
  <button id="read">Read Session Data</button>

  <p id="message">No session data loaded.</p>

  <script>
    const saveButton = document.getElementById("save");
    const readButton = document.getElementById("read");
    const message = document.getElementById("message");

    saveButton.addEventListener("click", function () {
      sessionStorage.setItem("currentStep", "2");
      message.textContent = "Session data saved.";
    });

    readButton.addEventListener("click", function () {
      const currentStep = sessionStorage.getItem("currentStep");

      if (currentStep !== null) {
        message.textContent =
          "Current step: " + currentStep;
      } else {
        message.textContent = "No session data found.";
      }
    });
  </script>

</body>
</html>`,
    output:
      "Clicking Save Session Data stores the current step. Clicking Read Session Data retrieves and displays it.",
    explanation:
      "sessionStorage.setItem() stores temporary data. sessionStorage.getItem() retrieves it. The API is similar to localStorage, but the intended lifetime of the data is different."
  },

  interview: {
    question: "What is the difference between localStorage and sessionStorage?",
    answer:
      "localStorage is designed for persistent browser storage, while sessionStorage is designed for data associated with the current page session.",
    tip:
      "Think: localStorage = longer persistence, sessionStorage = temporary session data."
  },

  tricky: {
    question:
      "Do localStorage and sessionStorage store numbers and objects in their original JavaScript types?",
    answer:
      "No. Both storage mechanisms store values as strings. Numbers need conversion when necessary, and objects are commonly handled using JSON.stringify() and JSON.parse()."
  },

  practice: {
    question:
      "Store a temporary value named 'step' in sessionStorage and retrieve it when a button is clicked.",
    hint:
      "Use sessionStorage.setItem() and sessionStorage.getItem()."
  },

  challenge: {
    title: "Build a Temporary Progress Saver",
    description:
      "Create a small multi-step interface that remembers the current step during the page session.",
    task:
      "Create Next and Previous buttons. Store the current step number in sessionStorage and display the current step on the page."
  }
},
"json": {
  concept: {
    heading: "JSON in JavaScript",
    paragraphs: [
      "JSON stands for JavaScript Object Notation. It is a text-based data format commonly used for storing and exchanging structured data.",
      "JSON looks similar to JavaScript object syntax, but JSON is a data format with its own rules. Property names must be written in double quotes.",
      "JSON is widely used when JavaScript applications communicate with APIs or when structured data needs to be stored or transferred.",
      "JavaScript provides two important methods for working with JSON: JSON.stringify() and JSON.parse().",
      "JSON.stringify() converts a JavaScript value, commonly an object or array, into a JSON string.",
      "JSON.parse() converts a valid JSON string back into a JavaScript value."
    ],
    remember:
      "JSON.stringify() converts JavaScript data to a JSON string. JSON.parse() converts a JSON string back to JavaScript data."
  },

  analogy: {
    heading: "Think of JSON Like a Data Package",
    items: [
      {
        icon: "📦",
        title: "JavaScript Object",
        text: "Your application works with normal JavaScript objects and arrays."
      },
      {
        icon: "🔄",
        title: "JSON.stringify()",
        text: "Converts JavaScript data into a JSON string for storage or transfer."
      },
      {
        icon: "📨",
        title: "JSON Data",
        text: "The string can be stored or sent through a network."
      },
      {
        icon: "🔄",
        title: "JSON.parse()",
        text: "Converts the JSON string back into a JavaScript object or array."
      }
    ]
  },

  visual: {
    heading: "JavaScript and JSON Conversion",
    description:
      "JSON is commonly used as a bridge between JavaScript data and stored or transferred text.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create JavaScript Data",
        text: "Create an object or array in JavaScript."
      },
      {
        icon: "2️⃣",
        title: "Convert to JSON",
        text: "Use JSON.stringify() to convert the data into a JSON string."
      },
      {
        icon: "3️⃣",
        title: "Store or Transfer",
        text: "The JSON string can be stored in browser storage or sent to an API."
      },
      {
        icon: "4️⃣",
        title: "Parse JSON",
        text: "Use JSON.parse() to convert the string back into JavaScript data."
      }
    ],
    flow:
      "JavaScript Object → JSON.stringify() → JSON String → Storage/API → JSON.parse() → JavaScript Object"
  },

  code: {
    title: "Using JSON with Local Storage",
    description:
      "This example converts an object into JSON before storing it and parses it after retrieving it.",
    language: "javascript",
    code: `const product = {
  name: "Laptop",
  price: 55000,
  available: true
};

// Convert object to JSON string
const jsonData = JSON.stringify(product);

localStorage.setItem("product", jsonData);

// Get JSON string from storage
const storedData = localStorage.getItem("product");

if (storedData !== null) {
  // Convert JSON string back to object
  const restoredProduct = JSON.parse(storedData);

  console.log(restoredProduct);
  console.log(restoredProduct.name);
  console.log(restoredProduct.price);
}`,
    output:
      "The console shows the restored JavaScript object and its name and price properties.",
    explanation:
      "localStorage stores strings, so the product object is first converted into a JSON string using JSON.stringify(). After retrieving the string, JSON.parse() converts it back into a JavaScript object."
  },

  interview: {
    question: "What is the difference between JSON.stringify() and JSON.parse()?",
    answer:
      "JSON.stringify() converts a JavaScript value into a JSON string. JSON.parse() converts a valid JSON string back into a JavaScript value.",
    tip:
      "Remember the direction: stringify = JavaScript → JSON string, parse = JSON string → JavaScript."
  },

  tricky: {
    question:
      "Why is JSON.stringify() needed before storing an object in localStorage?",
    answer:
      "Because localStorage stores strings. JSON.stringify() converts the JavaScript object into a string representation that can be stored."
  },

  practice: {
    question:
      "Create an object containing a product name and price. Convert it to JSON using JSON.stringify(), then convert it back using JSON.parse().",
    hint:
      "Store the result of JSON.stringify() in a variable and pass that string to JSON.parse()."
  },

  challenge: {
    title: "Build a Stored Product Object",
    description:
      "Practice combining JavaScript objects, JSON, and localStorage.",
    task:
      "Create a product object containing name, price, and available properties. Convert it into a JSON string, store it in localStorage, retrieve it, parse it back into an object, and display its properties in the console."
  }
},"what-is-api": {
  concept: {
    heading: "What is an API?",
    paragraphs: [
      "API stands for Application Programming Interface. An API allows different software systems to communicate with each other.",
      "In web development, a web API commonly provides data or functionality that a client application can request over a network.",
      "For example, a frontend application may request product data, weather information, user records, or other resources from a server through an API.",
      "The client sends a request to an API endpoint. The server processes the request and sends a response, often in JSON format.",
      "APIs make it possible for frontend applications to communicate with backend servers and external services."
    ],
    remember:
      "An API provides a way for one application to communicate with another application or service."
  },

  analogy: {
    heading: "Think of an API Like a Restaurant Waiter",
    items: [
      {
        icon: "👤",
        title: "Client",
        text: "The client is like a customer who wants something."
      },
      {
        icon: "📝",
        title: "Request",
        text: "The client sends a request describing what data or action is needed."
      },
      {
        icon: "🍽️",
        title: "API",
        text: "The API acts as the communication layer between the client and server."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The server sends the requested data or result back to the client."
      }
    ]
  },

  visual: {
    heading: "How a Web API Works",
    description:
      "A typical API interaction involves a client sending a request and receiving a response from a server.",
    steps: [
      {
        icon: "1️⃣",
        title: "Client",
        text: "A browser or application needs some data."
      },
      {
        icon: "2️⃣",
        title: "Request",
        text: "The client sends a request to an API endpoint."
      },
      {
        icon: "3️⃣",
        title: "Server",
        text: "The server receives and processes the request."
      },
      {
        icon: "4️⃣",
        title: "Response",
        text: "The server sends data or a result back."
      },
      {
        icon: "5️⃣",
        title: "Client Uses Data",
        text: "The application displays or processes the response."
      }
    ],
    flow:
      "Client → API Request → Server → API Response → Client"
  },

  code: {
    title: "Understanding an API Response",
    description:
      "A web API commonly returns structured data such as JSON.",
    language: "javascript",
    code: `const apiResponse = {
  id: 101,
  title: "JavaScript Course",
  price: 999,
  available: true
};

console.log(apiResponse.title);
console.log(apiResponse.price);`,
    output:
      "JavaScript Course\n999",
    explanation:
      "The example represents the kind of structured object an API may return. A real API response is commonly received over a network and may contain many fields."
  },

  interview: {
    question: "What is an API?",
    answer:
      "An API is an Application Programming Interface that provides a defined way for software systems to communicate and exchange data or functionality.",
    tip:
      "For web development, remember the basic flow: request → server processing → response."
  },

  tricky: {
    question: "Is an API the same thing as a database?",
    answer:
      "No. A database stores data, while an API provides a way for applications to communicate with a server or service and access data or functionality."
  },

  practice: {
    question:
      "Explain the difference between a client, API, server, request, and response.",
    hint:
      "Think about the complete communication flow from the browser to the server and back."
  },

  challenge: {
    title: "Design an API Flow",
    description:
      "Practice understanding how a frontend application communicates with a backend.",
    task:
      "Draw a simple flow showing a browser requesting product data from an API, the server processing the request, and the JSON response returning to the browser."
  }
},
"fetch": {
  concept: {
    heading: "Fetch API",
    paragraphs: [
      "The Fetch API is a modern browser API used to make network requests from JavaScript.",
      "The fetch() function can request data from a URL and returns a Promise representing the result of the network operation.",
      "Because fetch() is asynchronous, the response can be handled using then() and catch(), or with async and await.",
      "The response object provides methods such as json() for reading JSON response data.",
      "Fetch is commonly used in frontend applications to communicate with REST APIs and backend services."
    ],
    remember:
      "fetch() makes a network request and returns a Promise."
  },

  analogy: {
    heading: "Think of fetch() Like Sending a Delivery Request",
    items: [
      {
        icon: "📤",
        title: "Send Request",
        text: "fetch() sends a request to the specified URL."
      },
      {
        icon: "⏳",
        title: "Wait",
        text: "The network operation happens asynchronously."
      },
      {
        icon: "📨",
        title: "Receive Response",
        text: "The server sends a response back."
      },
      {
        icon: "📋",
        title: "Read Data",
        text: "The response can be converted to JSON or another format."
      }
    ]
  },

  visual: {
    heading: "Fetch Request Flow",
    description:
      "The Fetch API provides a Promise-based way to communicate with a web server.",
    steps: [
      {
        icon: "1️⃣",
        title: "Call fetch()",
        text: "Provide the API URL."
      },
      {
        icon: "2️⃣",
        title: "Request Sent",
        text: "The browser sends the network request."
      },
      {
        icon: "3️⃣",
        title: "Response Received",
        text: "The Promise resolves with a Response object."
      },
      {
        icon: "4️⃣",
        title: "Read Response",
        text: "Use response.json() to read JSON data."
      },
      {
        icon: "5️⃣",
        title: "Use Data",
        text: "The JavaScript application can display or process the data."
      }
    ],
    flow:
      "fetch() → Request → Response → response.json() → JavaScript Data"
  },

  code: {
    title: "Fetching Data from an API",
    description:
      "This example requests data from a public API and displays the result.",
    language: "javascript",
    code: `fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error("Request failed:", error);
  });`,
    output:
      "The console displays a JSON object containing data for the requested post.",
    explanation:
      "fetch() sends the request and returns a Promise. response.json() reads the response body and converts JSON into a JavaScript value. The second then() receives the parsed data. catch() handles network or processing errors."
  },

  interview: {
    question: "What does fetch() return?",
    answer:
      "fetch() returns a Promise that resolves to a Response object when the request receives a response.",
    tip:
      "Remember that fetch() is asynchronous and Promise-based."
  },

  tricky: {
    question:
      "Does fetch() automatically convert a JSON response into a JavaScript object?",
    answer:
      "No. You normally need to call response.json() to read and parse a JSON response body."
  },

  practice: {
    question:
      "Use fetch() to request data from an API and print the response data in the console.",
    hint:
      "Use fetch(), response.json(), then(), and catch()."
  },

  challenge: {
    title: "Build an API Data Viewer",
    description:
      "Create a simple page that retrieves data from a public API.",
    task:
      "Use fetch() to request JSON data from an API. Display at least three fields from the response on the webpage and show an error message if the request fails."
  }
},
"get-request": {
  concept: {
    heading: "GET Request",
    paragraphs: [
      "A GET request is commonly used to retrieve data from a server.",
      "When a frontend application needs information such as products, users, posts, or categories, it can send a GET request to an API endpoint.",
      "fetch() uses GET as its default HTTP method, so a simple fetch(url) call sends a GET request.",
      "GET requests can also include query parameters when the client needs to filter, search, sort, or customize the requested data.",
      "A successful response commonly contains JSON data that can be converted into a JavaScript object or array."
    ],
    remember:
      "GET is mainly used to retrieve data from a server."
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
        icon: "📡",
        title: "Request",
        text: "A GET request is sent to an API endpoint."
      },
      {
        icon: "🗄️",
        title: "Server",
        text: "The server finds the requested data."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The server sends the requested data back."
      }
    ]
  },

  visual: {
    heading: "GET Request Flow",
    description:
      "A GET request retrieves data from a server without using the request body for normal query data.",
    steps: [
      {
        icon: "1️⃣",
        title: "Choose Endpoint",
        text: "Identify the API URL from which data is needed."
      },
      {
        icon: "2️⃣",
        title: "Send GET Request",
        text: "Use fetch() to request the resource."
      },
      {
        icon: "3️⃣",
        title: "Server Processes",
        text: "The server finds or generates the requested data."
      },
      {
        icon: "4️⃣",
        title: "Receive Response",
        text: "The browser receives a Response object."
      },
      {
        icon: "5️⃣",
        title: "Read JSON",
        text: "Convert the response body into JavaScript data."
      }
    ],
    flow:
      "Client → GET /resource → Server → JSON Response → Client"
  },

  code: {
    title: "Making a GET Request",
    description:
      "This example retrieves a list of posts from a public API.",
    language: "javascript",
    code: `async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const posts = await response.json();

    console.log(posts);
    console.log("Total posts:", posts.length);
  } catch (error) {
    console.error("Failed to fetch posts:", error.message);
  }
}

getPosts();`,
    output:
      "The console displays an array of posts and the total number of posts returned by the API.",
    explanation:
      "fetch() sends a GET request because GET is the default method. response.ok checks whether the HTTP response indicates success. response.json() converts the JSON response into a JavaScript value."
  },

  interview: {
    question: "What is a GET request used for?",
    answer:
      "A GET request is generally used to retrieve data from a server.",
    tip:
      "GET → Retrieve data."
  },

  tricky: {
    question:
      "Does fetch() require method: 'GET' for a normal GET request?",
    answer:
      "No. GET is the default method for fetch(), so fetch(url) is already a GET request."
  },

  practice: {
    question:
      "Use fetch() to retrieve a list of products from an API and print the first product.",
    hint:
      "Use await fetch(), await response.json(), and access the first array element."
  },

  challenge: {
    title: "Build a Product Viewer",
    description:
      "Create a page that retrieves product data from an API.",
    task:
      "Make a GET request to a suitable API, convert the response to JSON, and display product titles and prices on the webpage."
  }
},
"post-request": {
  concept: {
    heading: "POST Request",
    paragraphs: [
      "A POST request is commonly used to send data to a server, often to create a new resource.",
      "For example, a frontend application may send form data to a backend when creating a new product, registering an account, or submitting a comment.",
      "With fetch(), the HTTP method can be set to POST using the method property.",
      "Data is commonly sent in the request body. When sending JSON, the body is usually created with JSON.stringify() and the Content-Type header is set to application/json.",
      "The server processes the request and returns a response indicating the result."
    ],
    remember:
      "POST is commonly used to send data to a server and create a new resource."
  },

  analogy: {
    heading: "Think of POST Like Submitting a Form",
    items: [
      {
        icon: "📝",
        title: "Prepare Data",
        text: "The client prepares the information that needs to be sent."
      },
      {
        icon: "📤",
        title: "POST Request",
        text: "The data is sent to the server in the request body."
      },
      {
        icon: "⚙️",
        title: "Server Processes",
        text: "The server validates and processes the submitted data."
      },
      {
        icon: "✅",
        title: "Response",
        text: "The server returns a response describing the result."
      }
    ]
  },

  visual: {
    heading: "POST Request Flow",
    description:
      "A POST request sends data from the client to the server.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create Data",
        text: "Prepare the object that should be sent."
      },
      {
        icon: "2️⃣",
        title: "Convert Data",
        text: "Convert the object to JSON using JSON.stringify()."
      },
      {
        icon: "3️⃣",
        title: "Send POST",
        text: "Use fetch() with method POST and a request body."
      },
      {
        icon: "4️⃣",
        title: "Server Processes",
        text: "The server receives and processes the data."
      },
      {
        icon: "5️⃣",
        title: "Receive Response",
        text: "The client reads the server response."
      }
    ],
    flow:
      "JavaScript Object → JSON.stringify() → POST Request → Server → Response"
  },

  code: {
    title: "Making a POST Request",
    description:
      "This example sends JSON data to a public testing API.",
    language: "javascript",
    code: `async function createPost() {
  const postData = {
    title: "JavaScript Practice",
    body: "Learning API requests with Fetch.",
    userId: 1
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

createPost();`,
    output:
      "The testing API returns a JSON response containing the submitted data and an assigned id.",
    explanation:
      "The method property changes the request to POST. The Content-Type header tells the server that JSON is being sent. JSON.stringify() converts the JavaScript object into a JSON string for the request body."
  },

  interview: {
    question: "What is a POST request used for?",
    answer:
      "A POST request is commonly used to send data to a server, often to create a new resource.",
    tip:
      "POST → Send data / create resource."
  },

  tricky: {
    question:
      "Why is JSON.stringify() commonly used in a POST request?",
    answer:
      "When JSON is being sent in the request body, JSON.stringify() converts the JavaScript object into a JSON string that can be transmitted."
  },

  practice: {
    question:
      "Create a JavaScript object containing title and description fields and send it to a testing API using a POST request.",
    hint:
      "Use method: 'POST', a Content-Type header, and JSON.stringify() for the body."
  },

  challenge: {
    title: "Build a Create Data Form",
    description:
      "Create a small form that sends user-entered data to an API.",
    task:
      "Create two input fields and a Submit button. Read the input values, create an object, send it using a POST request, and display the API response on the page."
  }
},
"api-project": {
  concept: {
    heading: "Build an API Data Viewer",
    paragraphs: [
      "Now we can combine DOM manipulation, events, async JavaScript, Fetch API, JSON, and error handling into one practical project.",
      "The project will request data from an API and display the results on the webpage.",
      "A typical API project follows a simple flow: user action starts the request, fetch() communicates with the API, the response is converted to JSON, and JavaScript creates or updates DOM elements.",
      "A good API application should also handle loading states and errors so that the user knows what is happening."
    ],
    remember:
      "A real API project combines Fetch API + async/await + JSON + DOM + Events + Error Handling."
  },

  analogy: {
    heading: "Think of the Project as a Complete Communication Cycle",
    items: [
      {
        icon: "🖱️",
        title: "User Action",
        text: "The user clicks a button to request data."
      },
      {
        icon: "📡",
        title: "API Request",
        text: "JavaScript sends a GET request using fetch()."
      },
      {
        icon: "📦",
        title: "API Response",
        text: "The server returns structured data."
      },
      {
        icon: "🖥️",
        title: "UI Update",
        text: "JavaScript displays the received data on the webpage."
      }
    ]
  },

  visual: {
    heading: "Complete API Project Flow",
    description:
      "The project connects events, Fetch API, JSON, DOM manipulation, and error handling.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Clicks Button",
        text: "The click event starts the application logic."
      },
      {
        icon: "2️⃣",
        title: "Show Loading",
        text: "The interface tells the user that data is being loaded."
      },
      {
        icon: "3️⃣",
        title: "Fetch Data",
        text: "JavaScript sends a GET request to the API."
      },
      {
        icon: "4️⃣",
        title: "Parse JSON",
        text: "The response is converted into JavaScript data."
      },
      {
        icon: "5️⃣",
        title: "Create Elements",
        text: "JavaScript creates DOM elements for the returned data."
      },
      {
        icon: "6️⃣",
        title: "Display Results",
        text: "The API data appears on the webpage."
      }
    ],
    flow:
      "User Click → Loading → Fetch API → JSON → Create DOM Elements → Display Data"
  },

  code: {
    title: "Mini API Data Viewer",
    description:
      "This project fetches posts and dynamically displays them on the page.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>API Data Viewer</title>
</head>
<body>

  <h1>API Data Viewer</h1>

  <button id="loadButton">Load Posts</button>

  <p id="status"></p>

  <div id="container"></div>

  <script>
    const loadButton =
      document.getElementById("loadButton");

    const status =
      document.getElementById("status");

    const container =
      document.getElementById("container");

    async function loadPosts() {
      status.textContent = "Loading...";
      container.innerHTML = "";

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
          throw new Error(
            "HTTP error: " + response.status
          );
        }

        const posts = await response.json();

        posts.forEach(function (post) {
          const article = document.createElement("article");
          const title = document.createElement("h2");
          const body = document.createElement("p");

          title.textContent = post.title;
          body.textContent = post.body;

          article.appendChild(title);
          article.appendChild(body);

          container.appendChild(article);
        });

        status.textContent = "Data loaded successfully.";
      } catch (error) {
        status.textContent =
          "Unable to load data: " + error.message;
      }
    }

    loadButton.addEventListener(
      "click",
      loadPosts
    );
  </script>

</body>
</html>`,
    output:
      "After clicking Load Posts, the application requests five posts from the API and dynamically creates headings and paragraphs for each post.",
    explanation:
      "The button click starts loadPosts(). fetch() requests data from the API. The response is checked with response.ok and converted to JavaScript data using response.json(). forEach() processes each post, createElement() creates DOM elements, and appendChild() inserts them into the page. If something goes wrong, catch() displays an error message."
  },

  interview: {
    question: "What concepts are combined in a basic API project?",
    answer:
      "A basic API project commonly combines events, Fetch API, Promises or async/await, JSON, DOM manipulation, and error handling.",
    tip:
      "Think of the complete flow: Event → Fetch → Response → JSON → DOM → UI."
  },

  tricky: {
    question:
      "Why should response.ok be checked when using fetch()?",
    answer:
      "fetch() does not reject its Promise simply because the server returns an HTTP error status such as 404 or 500. Checking response.ok allows the application to handle unsuccessful HTTP responses explicitly."
  },

  practice: {
    question:
      "Modify the project so that it displays only the titles returned by the API.",
    hint:
      "Create only an h2 element for each item and append it to the container."
  },

  challenge: {
    title: "Build a Complete API Viewer",
    description:
      "Create a polished API-based application using the concepts learned so far.",
    task:
      "Build an API viewer with a Load button, loading message, error message, and dynamically generated cards. Fetch data from a public API, convert the response to JSON, create DOM elements for each record, and display the results on the page."
  }
},
"calculator": {
  concept: {
    heading: "Build a JavaScript Calculator",
    paragraphs: [
      "A calculator is a useful beginner project because it combines variables, functions, conditions, events, DOM manipulation, and operators.",
      "The calculator receives input from buttons, performs a mathematical operation, and displays the result.",
      "A simple calculator can support addition, subtraction, multiplication, division, and clearing the display.",
      "The main idea is to keep track of the values entered by the user and perform the selected operation when the equals button is pressed."
    ],
    remember:
      "A calculator project combines JavaScript logic with DOM events and user input."
  },

  analogy: {
    heading: "How a Calculator Works",
    items: [
      {
        icon: "🔢",
        title: "Input",
        text: "The user enters numbers using calculator buttons."
      },
      {
        icon: "➕",
        title: "Operation",
        text: "The user selects an arithmetic operation."
      },
      {
        icon: "🧮",
        title: "Calculation",
        text: "JavaScript performs the required calculation."
      },
      {
        icon: "📺",
        title: "Display",
        text: "The result is displayed on the calculator screen."
      }
    ]
  },

  visual: {
    heading: "Calculator Flow",
    description:
      "The calculator takes user input, performs an operation, and displays the result.",
    steps: [
      {
        icon: "1️⃣",
        title: "Enter Number",
        text: "The user enters the first number."
      },
      {
        icon: "2️⃣",
        title: "Select Operator",
        text: "The user chooses +, -, *, or /."
      },
      {
        icon: "3️⃣",
        title: "Enter Number",
        text: "The user enters the second number."
      },
      {
        icon: "4️⃣",
        title: "Calculate",
        text: "JavaScript performs the selected operation."
      },
      {
        icon: "5️⃣",
        title: "Show Result",
        text: "The result appears on the calculator display."
      }
    ],
    flow:
      "Input → Operator → Calculation → Result → Display"
  },

  code: {
    title: "Simple Calculator",
    description:
      "A basic calculator that performs four arithmetic operations.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Calculator</title>
</head>
<body>

  <h1>JavaScript Calculator</h1>

  <input id="num1" type="number" placeholder="First number">

  <select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>

  <input id="num2" type="number" placeholder="Second number">

  <button id="calculate">Calculate</button>

  <p id="result">Result: </p>

  <script>
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operator = document.getElementById("operator");
    const calculate = document.getElementById("calculate");
    const result = document.getElementById("result");

    calculate.addEventListener("click", function () {
      const first = Number(num1.value);
      const second = Number(num2.value);
      let answer;

      if (operator.value === "+") {
        answer = first + second;
      } else if (operator.value === "-") {
        answer = first - second;
      } else if (operator.value === "*") {
        answer = first * second;
      } else if (operator.value === "/") {
        if (second === 0) {
          result.textContent = "Cannot divide by zero.";
          return;
        }

        answer = first / second;
      }

      result.textContent = "Result: " + answer;
    });
  </script>

</body>
</html>`,
    output:
      "If the user enters 20, selects +, and enters 10, the result displayed is 30.",
    explanation:
      "The input values are converted from strings to numbers using Number(). The selected operator determines which calculation is performed. The result is then displayed using textContent."
  },

  interview: {
    question: "Which JavaScript concepts are used in a calculator project?",
    answer:
      "A calculator can use variables, operators, conditions, functions, DOM manipulation, events, and user input.",
    tip:
      "Projects are useful because they combine multiple concepts into one application."
  },

  tricky: {
    question:
      "Why should input values be converted to numbers before performing calculations?",
    answer:
      "Values from HTML input elements are strings. Converting them to numbers ensures arithmetic operations behave as expected."
  },

  practice: {
    question:
      "Add a percentage operation to the calculator.",
    hint:
      "Read the two numbers and calculate the required percentage."
  },

  challenge: {
    title: "Build a Better Calculator",
    description:
      "Create a calculator with a cleaner interface and additional operations.",
    task:
      "Build a calculator that supports addition, subtraction, multiplication, division, percentage, clear, and decimal values."
  }
},
"todo-app": {
  concept: {
    heading: "Build a Todo App",
    paragraphs: [
      "A Todo App is one of the most useful beginner JavaScript projects because it combines DOM manipulation, events, arrays, objects, functions, and user input.",
      "The application allows users to add tasks, display them, mark tasks as completed, and remove tasks.",
      "Each task can be represented as an object containing information such as the task text and completion status.",
      "The application state can be stored in an array, while the DOM displays the current state to the user."
    ],
    remember:
      "A Todo App teaches how JavaScript data and the DOM can work together to create an interactive application."
  },

  analogy: {
    heading: "Todo App Flow",
    items: [
      {
        icon: "✍️",
        title: "Enter Task",
        text: "The user enters a task into an input field."
      },
      {
        icon: "➕",
        title: "Add Task",
        text: "JavaScript adds the task to the application data."
      },
      {
        icon: "📋",
        title: "Display",
        text: "The task is displayed in the task list."
      },
      {
        icon: "✅",
        title: "Complete or Remove",
        text: "The user can mark the task complete or remove it."
      }
    ]
  },

  visual: {
    heading: "Todo Application Flow",
    description:
      "The application keeps task data in an array and updates the DOM whenever the data changes.",
    steps: [
      {
        icon: "1️⃣",
        title: "User Enters Task",
        text: "Read the task from the input field."
      },
      {
        icon: "2️⃣",
        title: "Store Task",
        text: "Add a task object to the tasks array."
      },
      {
        icon: "3️⃣",
        title: "Render Tasks",
        text: "Create DOM elements for the tasks."
      },
      {
        icon: "4️⃣",
        title: "User Interaction",
        text: "The user completes or deletes a task."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "Render the updated task list."
      }
    ],
    flow:
      "Input → Task Object → Array → DOM → User Action → Updated DOM"
  },

  code: {
    title: "Simple Todo App",
    description:
      "This project allows users to add and remove tasks.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
</head>
<body>

  <h1>Todo App</h1>

  <input id="taskInput" type="text" placeholder="Enter a task">

  <button id="addButton">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const taskInput =
      document.getElementById("taskInput");

    const addButton =
      document.getElementById("addButton");

    const taskList =
      document.getElementById("taskList");

    const tasks = [];

    function renderTasks() {
      taskList.innerHTML = "";

      tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        li.textContent = task;

        const deleteButton =
          document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener(
          "click",
          function () {
            tasks.splice(index, 1);
            renderTasks();
          }
        );

        li.append(" ", deleteButton);
        taskList.appendChild(li);
      });
    }

    addButton.addEventListener(
      "click",
      function () {
        const task = taskInput.value.trim();

        if (task === "") {
          return;
        }

        tasks.push(task);

        taskInput.value = "";

        renderTasks();
      }
    );
  </script>

</body>
</html>`,
    output:
      "The user can enter a task, click Add Task, and see the task appear in the list. Each task also has a Delete button.",
    explanation:
      "Tasks are stored in an array. renderTasks() clears the existing list and creates DOM elements from the current array. Adding or deleting a task changes the array and then re-renders the list."
  },

  interview: {
    question: "Why is an array useful in a Todo App?",
    answer:
      "An array can store multiple tasks and provides methods such as push() and splice() to add and remove items.",
    tip:
      "Think of the array as the application's task data."
  },

  tricky: {
    question:
      "Why is renderTasks() called after adding or deleting a task?",
    answer:
      "Because the application data has changed, the DOM needs to be updated so that the displayed task list matches the current data."
  },

  practice: {
    question:
      "Add a completed state to each task and allow the user to mark a task as completed.",
    hint:
      "Store each task as an object with text and completed properties."
  },

  challenge: {
    title: "Build a Complete Todo App",
    description:
      "Create a Todo application with useful task management features.",
    task:
      "Build an application that supports adding tasks, deleting tasks, marking tasks as completed, filtering completed tasks, and saving tasks in localStorage."
  }
},
"quiz-app": {
  concept: {
    heading: "Build a JavaScript Quiz App",
    paragraphs: [
      "A Quiz App is a practical project for learning arrays, objects, conditions, functions, events, DOM manipulation, and application state.",
      "Questions can be stored as objects inside an array. Each question can contain the question text, answer options, and the correct answer.",
      "The application displays one question at a time and checks whether the selected answer is correct.",
      "The score can be updated after every answer and displayed when the quiz is completed."
    ],
    remember:
      "A quiz application is mainly a combination of structured data, user events, conditions, and DOM updates."
  },

  analogy: {
    heading: "Quiz App Flow",
    items: [
      {
        icon: "❓",
        title: "Question",
        text: "The application displays a question and its options."
      },
      {
        icon: "👆",
        title: "Answer",
        text: "The user selects an answer."
      },
      {
        icon: "✅",
        title: "Check",
        text: "JavaScript compares the selected answer with the correct answer."
      },
      {
        icon: "🏆",
        title: "Score",
        text: "The application updates the score and moves to the next question."
      }
    ]
  },

  visual: {
    heading: "Quiz Application Flow",
    description:
      "The quiz reads question data, displays it, checks answers, and maintains the score.",
    steps: [
      {
        icon: "1️⃣",
        title: "Load Question",
        text: "Read the current question from the questions array."
      },
      {
        icon: "2️⃣",
        title: "Display Options",
        text: "Create buttons for the available answers."
      },
      {
        icon: "3️⃣",
        title: "Select Answer",
        text: "The user clicks an answer."
      },
      {
        icon: "4️⃣",
        title: "Check Answer",
        text: "Compare the selected answer with the correct answer."
      },
      {
        icon: "5️⃣",
        title: "Update Score",
        text: "Increase the score when the answer is correct."
      }
    ],
    flow:
      "Question Data → Display → User Answer → Check → Score → Next Question"
  },

  code: {
    title: "Simple Quiz App",
    description:
      "This example creates a small quiz using an array of question objects.",
    language: "html",
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Quiz App</title>
</head>
<body>

  <h1 id="question"></h1>

  <div id="options"></div>

  <p id="result"></p>

  <script>
    const questions = [
      {
        question: "Which keyword declares a constant?",
        options: ["var", "let", "const", "static"],
        answer: "const"
      },
      {
        question: "Which method converts JSON to an object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.object()",
          "JSON.convert()"
        ],
        answer: "JSON.parse()"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement =
      document.getElementById("question");

    const optionsElement =
      document.getElementById("options");

    const resultElement =
      document.getElementById("result");

    function showQuestion() {
      const current = questions[currentQuestion];

      questionElement.textContent =
        current.question;

      optionsElement.innerHTML = "";

      current.options.forEach(function (option) {
        const button =
          document.createElement("button");

        button.textContent = option;

        button.addEventListener(
          "click",
          function () {
            checkAnswer(option);
          }
        );

        optionsElement.appendChild(button);
      });
    }

    function checkAnswer(selectedAnswer) {
      if (
        selectedAnswer ===
        questions[currentQuestion].answer
      ) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        questionElement.textContent =
          "Quiz Completed";

        optionsElement.innerHTML = "";

        resultElement.textContent =
          "Score: " + score + "/" + questions.length;
      }
    }

    showQuestion();
  </script>

</body>
</html>`,
    output:
      "The quiz displays questions and options. After all questions are answered, the final score is displayed.",
    explanation:
      "Questions are stored as objects inside an array. showQuestion() displays the current question and creates answer buttons. checkAnswer() compares the selected answer with the correct answer and updates the score."
  },

  interview: {
    question: "Why are objects useful for storing quiz questions?",
    answer:
      "An object can group related information such as question text, options, and the correct answer.",
    tip:
      "Use arrays for multiple questions and objects for the data belonging to each question."
  },

  tricky: {
    question:
      "Why is currentQuestion increased after checking the answer?",
    answer:
      "It moves the application to the next question in the questions array."
  },

  practice: {
    question:
      "Add five questions to the quiz and display the final score.",
    hint:
      "Add more objects to the questions array."
  },

  challenge: {
    title: "Build a Complete Quiz App",
    description:
      "Create a more interactive quiz application.",
    task:
      "Add a progress indicator, next button, score display, answer feedback, restart functionality, and at least ten questions."
  }
},
"weather-app": {
  concept: {
    heading: "Weather App",
    paragraphs: [
      "A Weather App is a practical JavaScript project that displays weather information for a selected city.",
      "This project combines JavaScript, DOM manipulation, Fetch API, asynchronous programming, JSON data, and user input.",
      "The basic flow is simple: the user enters a city, JavaScript sends a request to a weather API, receives JSON data, and displays useful information on the webpage.",
      "This project is important because it connects many JavaScript concepts together in one real-world application."
    ],
    remember:
      "Weather App = User Input → API Request → JSON Response → Process Data → Update DOM"
  },

  analogy: {
    heading: "Real-World Analogy",
    items: [
      {
        icon: "🔎",
        title: "Search",
        text: "The user enters the name of a city."
      },
      {
        icon: "📡",
        title: "Request",
        text: "The application sends the city information to a weather service."
      },
      {
        icon: "📦",
        title: "Response",
        text: "The weather service returns data in JSON format."
      },
      {
        icon: "🖥️",
        title: "Display",
        text: "JavaScript extracts the required values and displays them on the webpage."
      }
    ]
  },

  visual: {
    heading: "How a Weather App Works",
    description:
      "The application follows a simple data flow from user input to the final weather information.",
    steps: [
      {
        icon: "1️⃣",
        title: "Enter City",
        text: "The user enters a city name in an input field."
      },
      {
        icon: "2️⃣",
        title: "Send API Request",
        text: "JavaScript uses fetch() to request weather data."
      },
      {
        icon: "3️⃣",
        title: "Receive JSON",
        text: "The API sends weather information as JSON."
      },
      {
        icon: "4️⃣",
        title: "Process Data",
        text: "JavaScript reads values such as temperature and weather condition."
      },
      {
        icon: "5️⃣",
        title: "Update UI",
        text: "The DOM is updated to show the weather information."
      }
    ],
    flow:
      "User Input → fetch() → Weather API → JSON Response → JavaScript → DOM → Weather Display"
  },

  code: {
    title: "Simple Weather App Structure",
    description:
      "This example demonstrates the basic structure of a weather application. Replace the API URL with a valid weather API endpoint and API key.",
    language: "javascript",
    code: `const cityInput = document.querySelector("#city");
const weatherBox = document.querySelector("#weather");

async function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherBox.textContent = "Please enter a city.";
    return;
  }

  try {
    const apiUrl = "YOUR_WEATHER_API_URL";

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Unable to fetch weather data.");
    }

    const data = await response.json();

    weatherBox.innerHTML = \`
      <h2>\${data.city}</h2>
      <p>Temperature: \${data.temperature}°C</p>
      <p>Condition: \${data.condition}</p>
    \`;
  } catch (error) {
    weatherBox.textContent = error.message;
  }
}`,
    output:
      "The webpage displays the city, temperature, and weather condition returned by the API.",
    explanation:
      "querySelector() selects the input and output elements. fetch() sends the API request. await waits for the response. response.json() converts the response into a JavaScript object. The required values are then displayed using innerHTML."
  },

  interview: {
    question: "Which JavaScript concepts are used in a Weather App?",
    answer:
      "A Weather App commonly uses DOM manipulation, user input, Fetch API, Promises, async/await, JSON, error handling, and dynamic HTML updates.",
    tip:
      "When explaining this project in an interview, focus on the complete data flow rather than only showing the UI."
  },

  tricky: {
    question: "What happens if the weather API request fails?",
    answer:
      "The fetch request can fail because of network problems, an invalid API key, an incorrect URL, or an API/server error. The application should handle these cases using error handling such as try/catch."
  },

  practice: {
    question:
      "Modify the Weather App so that it also displays humidity and wind speed.",
    hint:
      "Check the JSON response from your weather API and use the correct property names to display the additional values."
  },

  challenge: {
    title: "Build a Complete Weather App",
    description:
      "Create a weather application that accepts a city name and displays live weather information.",
    task:
      "Create an input field and search button. Use fetch() with a weather API, handle loading and errors, parse the JSON response, and display temperature, weather condition, humidity, and wind speed."
  }
},
"crud-app": {
  concept: {
    heading: "CRUD App",
    paragraphs: [
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used when working with application data.",
      "A CRUD App allows users to add new data, view existing data, modify existing data, and remove data.",
      "CRUD operations are used in almost every real-world application. Examples include product management systems, student records, employee management, inventory systems, and admin dashboards.",
      "In JavaScript, a CRUD project is a good way to practice arrays, objects, functions, DOM manipulation, forms, events, and data handling."
    ],
    remember:
      "CRUD = Create → Read → Update → Delete"
  },

  analogy: {
    heading: "Real-World Analogy",
    items: [
      {
        icon: "➕",
        title: "Create",
        text: "Add a new product record."
      },
      {
        icon: "👀",
        title: "Read",
        text: "View the products already stored."
      },
      {
        icon: "✏️",
        title: "Update",
        text: "Change the information of an existing product."
      },
      {
        icon: "🗑️",
        title: "Delete",
        text: "Remove a product record that is no longer required."
      }
    ]
  },

  visual: {
    heading: "How a CRUD App Works",
    description:
      "A CRUD application manages data through four basic operations.",
    steps: [
      {
        icon: "1️⃣",
        title: "Create",
        text: "Collect information from a form and add a new record."
      },
      {
        icon: "2️⃣",
        title: "Read",
        text: "Display stored records on the webpage."
      },
      {
        icon: "3️⃣",
        title: "Update",
        text: "Select a record and modify its information."
      },
      {
        icon: "4️⃣",
        title: "Delete",
        text: "Remove a selected record from the data."
      }
    ],
    flow:
      "Form → Create Data → Display Data → Edit Data → Update Data → Delete Data"
  },

  code: {
    title: "Simple CRUD App",
    description:
      "This example demonstrates basic CRUD operations using an array of objects and DOM manipulation.",
    language: "javascript",
    code: `let products = [];

function createProduct() {
  const product = {
    id: Date.now(),
    name: "Laptop",
    price: 50000
  };

  products.push(product);
  readProducts();
}

function readProducts() {
  console.log(products);
}

function updateProduct(id) {
  const product = products.find(item => item.id === id);

  if (product) {
    product.price = 55000;
  }

  readProducts();
}

function deleteProduct(id) {
  products = products.filter(item => item.id !== id);
  readProducts();
}

createProduct();

const productId = products[0].id;

updateProduct(productId);
deleteProduct(productId);`,
    output:
      "The application creates a product, displays the data, updates the product price, and finally removes the product.",
    explanation:
      "Create uses push() to add a new object. Read displays the current data. Update uses find() to locate a record and changes its property. Delete uses filter() to create a new array without the selected record."
  },

  interview: {
    question: "What does CRUD mean?",
    answer:
      "CRUD means Create, Read, Update, and Delete. These operations represent the basic ways an application manages data.",
    tip:
      "Be able to explain where each CRUD operation is used in a real application."
  },

  tricky: {
    question:
      "Why is a unique ID important in a CRUD application?",
    answer:
      "A unique ID helps the application identify one specific record when updating or deleting data. Without a reliable identifier, it can be difficult to know exactly which record should be changed."
  },

  practice: {
    question:
      "Add a quantity property to each product and create a function that updates the quantity.",
    hint:
      "Find the product using its id and then change its quantity property."
  },

  challenge: {
    title: "Build a Product CRUD App",
    description:
      "Create a complete product management application using JavaScript.",
    task:
      "Create a form for product name and price. Add products to a list, display all products, provide Edit and Delete buttons, and update the displayed list whenever the data changes."
  }
},
"basic-interview": {
  concept: {
    heading: "Basic JavaScript Interview Questions",
    paragraphs: [
      "JavaScript interviews usually test whether you understand the language concepts and can apply them in practical situations.",
      "For beginners, important areas include variables, data types, operators, functions, arrays, objects, scope, DOM, events, and asynchronous JavaScript.",
      "The goal is not only to remember definitions. You should understand why a feature is used and how it behaves when the code runs.",
      "A good interview answer is usually short, clear, and supported by a simple example."
    ],
    remember:
      "Understand the concept → Explain it simply → Give an example → Mention a real-world use"
  },

  analogy: {
    heading: "How to Prepare for JavaScript Interviews",
    items: [
      {
        icon: "📚",
        title: "Understand",
        text: "Learn what the JavaScript feature does and why it is used."
      },
      {
        icon: "💻",
        title: "Practice",
        text: "Write small programs instead of only reading theory."
      },
      {
        icon: "🔍",
        title: "Analyze",
        text: "Predict what the code will do before running it."
      },
      {
        icon: "🎯",
        title: "Explain",
        text: "Practice explaining concepts using simple language."
      }
    ]
  },

  visual: {
    heading: "JavaScript Interview Preparation Flow",
    description:
      "Use this process to prepare effectively for basic JavaScript interview questions.",
    steps: [
      {
        icon: "1️⃣",
        title: "Learn the Concept",
        text: "Understand the definition, purpose, and basic syntax."
      },
      {
        icon: "2️⃣",
        title: "Write Code",
        text: "Create a small example using the concept."
      },
      {
        icon: "3️⃣",
        title: "Predict Output",
        text: "Try to determine the result before executing the code."
      },
      {
        icon: "4️⃣",
        title: "Explain",
        text: "Explain the concept clearly as if you are answering an interviewer."
      },
      {
        icon: "5️⃣",
        title: "Solve",
        text: "Apply the concept to a small coding problem."
      }
    ],
    flow:
      "Concept → Example → Practice → Predict Output → Explain → Solve"
  },

  code: {
    title: "Common Basic Interview Concepts",
    description:
      "The following examples cover some commonly asked JavaScript fundamentals.",
    language: "javascript",
    code: `// 1. let and const
let score = 80;
const passingScore = 40;

// 2. Function
function add(a, b) {
  return a + b;
}

// 3. Array
const numbers = [10, 20, 30];

// 4. Object
const product = {
  name: "Laptop",
  price: 50000
};

// 5. Strict equality
console.log(score === 80);

// 6. typeof
console.log(typeof score);

// 7. Array method
console.log(numbers.map(number => number * 2));`,
    output: `true
number
[20, 40, 60]`,
    explanation:
      "These examples demonstrate important interview fundamentals: variables, functions, arrays, objects, strict equality, typeof, and array methods. Interviewers may ask you to explain what each part does or predict its output."
  },

  interview: {
    question:
      "What is JavaScript and where is it commonly used?",
    answer:
      "JavaScript is a programming language mainly used to make web pages interactive and dynamic. It can be used in browsers for frontend development and also on servers using environments such as Node.js.",
    tip:
      "Do not simply say that JavaScript is a scripting language. Mention its practical use in frontend, backend, APIs, and web applications."
  },

  tricky: {
    question:
      "What is the difference between == and === in JavaScript?",
    answer:
      "The == operator compares values after allowing type conversion in many cases, while === checks both value and data type without performing that implicit conversion.",
  },

  practice: {
    question:
      "Create a JavaScript program that stores three numbers in an array and prints their total, average, and largest value.",
    hint:
      "Use an array, a loop or array methods, and comparison logic to calculate the required values."
  },

  challenge: {
    title: "JavaScript Interview Practice",
    description:
      "Prepare a small set of JavaScript questions and solve them without looking at the answers.",
    task:
      "Write answers for these questions: What is JavaScript? What is the difference between let, const, and var? What is the difference between == and ===? What is a function? What is an array? What is an object? What is typeof? Then write one code example for each concept."
  }
},
"output-questions": {
  concept: {
    heading: "JavaScript Output-Based Questions",
    paragraphs: [
      "Output-based questions are very common in JavaScript interviews. You are given a small piece of code and asked what it will print or how it will behave.",
      "These questions test whether you understand JavaScript execution, variables, data types, operators, scope, functions, arrays, objects, and asynchronous code.",
      "Do not guess the answer by looking at the code quickly. Read the code step by step and track the value of each variable.",
      "For asynchronous questions, pay special attention to the call stack, promises, timers, and the event loop."
    ],
    remember:
      "Read the code → Execute it mentally → Track values → Predict the output → Explain why"
  },

  analogy: {
    heading: "How to Solve Output Questions",
    items: [
      {
        icon: "👀",
        title: "Read Carefully",
        text: "Read every line and identify what each statement is doing."
      },
      {
        icon: "🧠",
        title: "Think Step by Step",
        text: "Follow the order in which JavaScript executes the statements."
      },
      {
        icon: "📝",
        title: "Track Values",
        text: "Keep track of changing variable values while reading the code."
      },
      {
        icon: "🎯",
        title: "Explain the Reason",
        text: "After finding the output, explain why JavaScript produced that result."
      }
    ]
  },

  visual: {
    heading: "Output Question Solving Process",
    description:
      "Use a systematic approach instead of guessing the output.",
    steps: [
      {
        icon: "1️⃣",
        title: "Identify Variables",
        text: "Find the variables and their initial values."
      },
      {
        icon: "2️⃣",
        title: "Follow Execution",
        text: "Read statements in JavaScript execution order."
      },
      {
        icon: "3️⃣",
        title: "Check Operations",
        text: "Understand operators, conditions, functions, and expressions."
      },
      {
        icon: "4️⃣",
        title: "Check Scope",
        text: "Determine which variable is accessible at each location."
      },
      {
        icon: "5️⃣",
        title: "Predict Output",
        text: "Write the exact output before running the program."
      }
    ],
    flow:
      "Read Code → Track Execution → Check Values → Check Scope → Predict Output → Explain"
  },

  code: {
    title: "Common Output-Based Questions",
    description:
      "Try to predict the output of each example before checking the result.",
    language: "javascript",
    code: `// Question 1
let a = 10;
let b = 20;

console.log(a + b);

// Question 2
let x = "10";
let y = 5;

console.log(x + y);
console.log(Number(x) + y);

// Question 3
let value = 10;

if (value > 5) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

// Question 4
const numbers = [10, 20, 30];

console.log(numbers[1]);

// Question 5
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));

// Question 6
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");`,
    output: `30

105
15

Greater

20

20

Start
End
Timer`,
    explanation:
      "In Question 1, 10 + 20 gives 30. In Question 2, the + operator concatenates a string with a number, producing 105, while Number(x) converts the string to a number and produces 15. Question 3 checks a condition and prints Greater. Question 4 accesses the array element at index 1, which is 20. Question 5 calls the function and returns 20. In Question 6, the timer callback is asynchronous, so Start and End are printed before Timer."
  },

  interview: {
    question:
      "Why should you understand output-based questions instead of only memorizing answers?",
    answer:
      "Because interviewers often change the values or slightly modify the code. Understanding execution allows you to solve new problems instead of depending on memorized outputs.",
    tip:
      "Always explain the execution order and the JavaScript rule responsible for the output."
  },

  tricky: {
    question:
      "What is the output of this code?\\n\\nconsole.log(1 + \"2\");\\nconsole.log(1 - \"2\");",
    answer:
      "The first statement prints 12 because + performs string concatenation when one operand is a string. The second prints -1 because the - operator converts the string \"2\" into a number."
  },

  practice: {
    question:
      "Predict the output before running this code:\\n\\nlet a = 5;\\nlet b = \"5\";\\n\\nconsole.log(a == b);\\nconsole.log(a === b);",
    hint:
      "Remember that == allows type conversion in this comparison, while === checks both value and type."
  },

  challenge: {
    title: "Output Prediction Challenge",
    description:
      "Test your JavaScript execution knowledge by predicting outputs without running the code.",
    task:
      "Create 10 output-based questions covering variables, type conversion, operators, arrays, functions, scope, objects, promises, and setTimeout(). Predict every output first. Then run the programs and compare your answers with the actual results."
  }
},"tricky-questions": {
  concept: {
    heading: "Tricky JavaScript Questions",
    paragraphs: [
      "Tricky JavaScript questions are designed to test whether you really understand how JavaScript behaves rather than whether you have memorized definitions.",
      "These questions often involve type coercion, scope, hoisting, closures, this, equality, arrays, objects, and asynchronous execution.",
      "The best way to solve a tricky question is to identify the JavaScript rule involved and then execute the code step by step.",
      "A confusing result is usually not random. There is a specific JavaScript rule behind it."
    ],
    remember:
      "Do not guess tricky questions. Find the JavaScript rule first, then trace the execution."
  },

  analogy: {
    heading: "Why Tricky Questions Are Asked",
    items: [
      {
        icon: "🧩",
        title: "Test Understanding",
        text: "The interviewer wants to know whether you understand the concept beyond its definition."
      },
      {
        icon: "🔍",
        title: "Check Reasoning",
        text: "You may need to explain why JavaScript produces an unexpected result."
      },
      {
        icon: "⚙️",
        title: "Test Execution Knowledge",
        text: "Some questions check how JavaScript processes code internally."
      },
      {
        icon: "🎯",
        title: "Test Practical Skills",
        text: "Tricky questions can reveal whether you can identify bugs and avoid common mistakes."
      }
    ]
  },

  visual: {
    heading: "How to Solve a Tricky Question",
    description:
      "Use a structured approach instead of trying to remember every possible JavaScript behavior.",
    steps: [
      {
        icon: "1️⃣",
        title: "Read the Code",
        text: "Read the complete code carefully before deciding the answer."
      },
      {
        icon: "2️⃣",
        title: "Identify the Concept",
        text: "Determine whether the question involves scope, coercion, hoisting, this, or another concept."
      },
      {
        icon: "3️⃣",
        title: "Apply the Rule",
        text: "Apply the JavaScript rule related to that concept."
      },
      {
        icon: "4️⃣",
        title: "Trace Execution",
        text: "Follow the code step by step and track the values."
      },
      {
        icon: "5️⃣",
        title: "Explain Why",
        text: "Give the result and explain the reason clearly."
      }
    ],
    flow:
      "Read Code → Identify Concept → Apply Rule → Trace Execution → Explain Result"
  },

  code: {
    title: "Common Tricky JavaScript Examples",
    description:
      "These examples cover several JavaScript behaviors that commonly confuse beginners.",
    language: "javascript",
    code: `// 1. Type coercion
console.log("5" + 2);
console.log("5" - 2);

// 2. Equality
console.log(0 == false);
console.log(0 === false);

// 3. Array comparison
console.log([] == false);
console.log([] === false);

// 4. Scope
let value = "global";

function test() {
  let value = "local";
  console.log(value);
}

test();
console.log(value);

// 5. Closure
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());

// 6. Asynchronous execution
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");`,
    output: `52
3

true
false

true
false

local
global

1
2

A
D
C
B`,
    explanation:
      "The + operator can concatenate a string with a number, while - converts the string to a number. With ==, type conversion can occur, while === checks both value and type. Arrays are objects, and comparisons involving arrays can involve type coercion. The scope example shows that the local variable is used inside the function while the global variable remains unchanged outside it. The closure keeps access to count between function calls. In the asynchronous example, normal synchronous code runs first, the Promise callback runs before the timer callback, and the timer runs afterward."
  },

  interview: {
    question:
      "Why does JavaScript sometimes produce surprising results with type conversion?",
    answer:
      "JavaScript can automatically convert values from one type to another in certain operations. This behavior is called type coercion. Operators such as +, -, ==, and comparison operators can behave differently depending on the types of their operands.",
    tip:
      "When you see a confusing result, first check the data types and whether JavaScript is performing implicit type conversion."
  },

  tricky: {
    question:
      "What is the output?\\n\\nconsole.log([] == false);\\nconsole.log([] === false);",
    answer:
      "The first statement is true because == allows type coercion. The empty array can be converted during the comparison. The second statement is false because === compares both type and value, and an array is an object while false is a boolean."
  },

  practice: {
    question:
      "Predict the output before running this code:\\n\\nconsole.log(null == undefined);\\nconsole.log(null === undefined);",
    hint:
      "Compare the behavior of loose equality and strict equality. Pay attention to both value and data type."
  },

  challenge: {
    title: "Tricky JavaScript Challenge",
    description:
      "Practice explaining JavaScript behavior instead of simply giving an output.",
    task:
      "Create 8 tricky JavaScript questions covering type coercion, == vs ===, scope, hoisting, closures, this, promises, and setTimeout(). For every question, write the output and explain the JavaScript rule responsible for the result."
  }
},"coding-questions": {
  concept: {
    heading: "JavaScript Coding Interview Questions",
    paragraphs: [
      "Coding interview questions test your ability to convert a problem into a logical JavaScript solution.",
      "Interviewers usually focus on problem-solving, loops, conditions, functions, arrays, strings, objects, and basic algorithms.",
      "You should first understand the problem, identify the input and expected output, create a simple approach, and then write the code.",
      "A good solution is not only one that works. You should also be able to explain your logic and discuss possible improvements."
    ],
    remember:
      "Understand the problem → Plan the logic → Write code → Test → Explain the solution"
  },

  analogy: {
    heading: "Coding Interview Approach",
    items: [
      {
        icon: "📖",
        title: "Understand",
        text: "Read the problem carefully and identify what is required."
      },
      {
        icon: "🧠",
        title: "Plan",
        text: "Break the problem into smaller steps before writing code."
      },
      {
        icon: "💻",
        title: "Implement",
        text: "Write the JavaScript solution using appropriate concepts."
      },
      {
        icon: "🧪",
        title: "Test",
        text: "Test normal cases, edge cases, and unexpected input."
      }
    ]
  },

  visual: {
    heading: "Coding Problem Solving Flow",
    description:
      "Follow this process when solving a JavaScript coding question in an interview.",
    steps: [
      {
        icon: "1️⃣",
        title: "Read the Problem",
        text: "Understand the input, output, and required result."
      },
      {
        icon: "2️⃣",
        title: "Create the Logic",
        text: "Think about the steps required to solve the problem."
      },
      {
        icon: "3️⃣",
        title: "Write the Code",
        text: "Convert your logic into JavaScript."
      },
      {
        icon: "4️⃣",
        title: "Test the Code",
        text: "Check the solution with different inputs."
      },
      {
        icon: "5️⃣",
        title: "Explain",
        text: "Explain your approach, result, and possible improvements."
      }
    ],
    flow:
      "Problem → Logic → Code → Test → Explain → Improve"
  },

  code: {
    title: "Common JavaScript Coding Questions",
    description:
      "These examples demonstrate common beginner-to-intermediate coding problems asked in JavaScript interviews.",
    language: "javascript",
    code: `// 1. Reverse a String

function reverseString(value) {
  return value.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));


// 2. Find the Largest Number

function findLargest(numbers) {
  let largest = numbers[0];

  for (let number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

console.log(findLargest([10, 45, 20, 80, 35]));


// 3. Check Even or Odd

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

console.log(checkEvenOdd(12));


// 4. Count Vowels

function countVowels(value) {
  let count = 0;

  for (let character of value.toLowerCase()) {
    if ("aeiou".includes(character)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript"));


// 5. Remove Duplicate Values

function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

console.log(removeDuplicates([10, 20, 10, 30, 20]));`,
    output: `tpircSavaJ

80

Even

3

[10, 20, 30]`,
    explanation:
      "The first solution reverses a string by converting it into an array, reversing the array, and joining it again. The second loops through the numbers and keeps track of the largest value. The third uses the remainder operator to determine whether a number is divisible by 2. The fourth checks each character against the vowels. The fifth uses Set to keep only unique values and the spread operator to convert the Set back into an array."
  },

  interview: {
    question:
      "How should you approach a coding problem during a JavaScript interview?",
    answer:
      "First understand the problem and clarify the input and expected output. Then explain your approach, write the solution, test it with different cases, and finally discuss its efficiency or possible improvements.",
    tip:
      "Do not immediately start typing code. Explaining your approach first shows your problem-solving ability."
  },

  tricky: {
    question:
      "Is using a built-in method always the best solution in a coding interview?",
    answer:
      "Not necessarily. Built-in methods can provide a clean and practical solution, but an interviewer may ask you to implement the logic manually to test your understanding of loops, conditions, and algorithms.",
  },

  practice: {
    question:
      "Write a function that finds the second largest number in an array without sorting the array.",
    hint:
      "Keep track of the largest and second largest values while iterating through the array."
  },

  challenge: {
    title: "JavaScript Coding Interview Challenge",
    description:
      "Solve common coding problems using JavaScript fundamentals.",
    task:
      "Write solutions for these problems: reverse a string, find the largest number, check whether a number is prime, count vowels in a string, find duplicate values in an array, find the second largest number, check whether a string is a palindrome, and calculate the frequency of each character in a string."
  }
},


};
