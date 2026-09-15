export type JsTopic = {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

export type JsSection = {
  id: string;
  title: string;
  description: string;
  topics: JsTopic[];
};

export const javascriptSections: JsSection[] = [
  {
    id: "introduction",
    title: "01. Introduction",
    description: "Understand the basics of JavaScript and how it works.",
    topics: [
      {
        id: "what-is-javascript",
        title: "What is JavaScript?",
        description: "Learn what JavaScript is and why it is important.",
        level: "Beginner",
      },
{
  id: "getting-started",
  title: "Getting Started with JavaScript",
  description: "Learn how to set up JavaScript and run your first program.",
  level: "Beginner",
},
      
      {
        id: "why-javascript",
        title: "Why Do We Need JavaScript?",
        description: "Understand how JavaScript makes websites interactive.",
        level: "Beginner",
      },
      {
        id: "html-css-javascript",
        title: "HTML vs CSS vs JavaScript",
        description: "Understand the role of HTML, CSS and JavaScript.",
        level: "Beginner",
      },
      {
        id: "where-javascript-used",
        title: "Where is JavaScript Used?",
        description: "Explore real-world uses of JavaScript.",
        level: "Beginner",
      },
      {
        id: "first-javascript-program",
        title: "Your First JavaScript Program",
        description: "Write and run your first JavaScript code.",
        level: "Beginner",
      },
    ],
  },

  {
    id: "variables",
    title: "02. Variables",
    description: "Learn how JavaScript stores and manages data.",
    topics: [
      {
        id: "variables-introduction",
        title: "What is a Variable?",
        description: "Understand variables with simple real-world examples.",
        level: "Beginner",
      },
      {
        id: "var",
        title: "var",
        description: "Learn the traditional way of declaring variables.",
        level: "Beginner",
      },
      {
        id: "let",
        title: "let",
        description: "Understand block-scoped variables using let.",
        level: "Beginner",
      },
      {
        id: "const",
        title: "const",
        description: "Learn how and when to use const.",
        level: "Beginner",
      },
      {
        id: "var-let-const",
        title: "var vs let vs const",
        description: "Compare the three variable declarations.",
        level: "Beginner",
      },
    ],
  },

  {
    id: "data-types",
    title: "03. Data Types",
    description: "Understand different types of data in JavaScript.",
    topics: [
      {
        id: "primitive-data-types",
        title: "Primitive Data Types",
        description: "Learn string, number, boolean, null, undefined and more.",
        level: "Beginner",
      },
      {
        id: "non-primitive-data-types",
        title: "Non-Primitive Data Types",
        description: "Understand objects, arrays and functions.",
        level: "Beginner",
      },
      {
        id: "typeof",
        title: "typeof Operator",
        description: "Check the type of a JavaScript value.",
        level: "Beginner",
      },
    ],
  },

  {
    id: "operators",
    title: "04. Operators",
    description: "Learn how JavaScript performs calculations and comparisons.",
    topics: [
      {
        id: "arithmetic-operators",
        title: "Arithmetic Operators",
        description: "Perform mathematical operations.",
        level: "Beginner",
      },
      {
        id: "assignment-operators",
        title: "Assignment Operators",
        description: "Assign and update values.",
        level: "Beginner",
      },
      {
        id: "comparison-operators",
        title: "Comparison Operators",
        description: "Compare values using JavaScript operators.",
        level: "Beginner",
      },
      {
        id: "logical-operators",
        title: "Logical Operators",
        description: "Work with AND, OR and NOT conditions.",
        level: "Beginner",
      },
    ],
  },

  {
    id: "type-conversion",
    title: "05. Type Conversion & Coercion",
    description: "Understand how JavaScript converts values between types.",
    topics: [
      {
        id: "type-conversion",
        title: "Type Conversion",
        description: "Convert values manually from one type to another.",
        level: "Beginner",
      },
      {
        id: "type-coercion",
        title: "Type Coercion",
        description: "Understand automatic type conversion in JavaScript.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "input-output",
    title: "06. Input & Output",
    description: "Learn basic ways to interact with users and the browser.",
    topics: [
      {
        id: "console",
        title: "console.log()",
        description: "Display information in the browser console.",
        level: "Beginner",
      },
      {
        id: "alert",
        title: "alert()",
        description: "Display messages to the user.",
        level: "Beginner",
      },
      {
        id: "prompt",
        title: "prompt()",
        description: "Take basic input from the user.",
        level: "Beginner",
      },
    ],
  },

  {
    id: "conditions",
    title: "07. Conditional Statements",
    description: "Learn how JavaScript makes decisions.",
    topics: [
      {
        id: "if",
        title: "if Statement",
        description: "Execute code when a condition is true.",
        level: "Beginner",
      },
      {
        id: "if-else",
        title: "if...else",
        description: "Handle true and false conditions.",
        level: "Beginner",
      },
      {
        id: "else-if",
        title: "else if",
        description: "Handle multiple conditions.",
        level: "Beginner",
      },
      {
        id: "switch",
        title: "switch Statement",
        description: "Handle multiple fixed cases.",
        level: "Beginner",
      },
      {
        id: "ternary",
        title: "Ternary Operator",
        description: "Write simple conditions in a shorter way.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "loops",
    title: "08. Loops",
    description: "Learn how to repeat code efficiently.",
    topics: [
      {
  id: "while-loop",
  title: "while Loop",
  description: "Repeat code while a condition is true.",
  level: "Beginner",
},
{
  id: "do-while",
  title: "do...while Loop",
  description: "Learn how to run a loop at least once before checking the condition.",
  level: "Beginner",
},
{
  id: "for-loop",
  title: "for Loop",
  description: "Repeat code using initialization, condition, and update.",
  level: "Beginner",
},
{
  id: "break-statement",
  title: "break Statement",
  description: "Learn how to stop a loop immediately using the break statement.",
  level: "Beginner",
},
{
  id: "continue-statement",
  title: "continue Statement",
  description: "Learn how to skip the current loop iteration using continue.",
  level: "Beginner",
},
     
    ],
  },

  {
    id: "functions",
    title: "09. Functions",
    description: "Learn how to create reusable blocks of code.",
    topics: [
      {
        id: "function-basics",
        title: "Function Basics",
        description: "Understand what functions are and why we use them.",
        level: "Beginner",
      },
      {
        id: "function-declaration",
        title: "Function Declaration",
        description: "Create functions using declarations.",
        level: "Beginner",
      },
      {
        id: "parameters-arguments",
        title: "Parameters & Arguments",
        description: "Pass data into functions.",
        level: "Beginner",
      },
      {
        id: "return",
        title: "return Statement",
        description: "Return a value from a function.",
        level: "Beginner",
      },
      {
        id: "function-expression",
        title: "Function Expression",
        description: "Store functions inside variables.",
        level: "Intermediate",
      },
      {
        id: "arrow-functions",
        title: "Arrow Functions",
        description: "Write modern JavaScript functions.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "scope",
    title: "10. Scope",
    description: "Understand where variables can be accessed.",
    topics: [
      {
        id: "global-scope",
        title: "Global Scope",
        description: "Understand globally accessible variables.",
        level: "Beginner",
      },
      {
        id: "function-scope",
        title: "Function Scope",
        description: "Understand variables inside functions.",
        level: "Beginner",
      },
      {
        id: "block-scope",
        title: "Block Scope",
        description: "Understand block-level scope with let and const.",
        level: "Intermediate",
      },

      {
  id: "scope-comparison",
  title: "Scope Comparison",
  description: "Compare global, function and block scope with practical examples.",
  level: "Beginner",
},
    ],
  },

  {
  id: "strings",
  title: "11. Strings",
  description: "Learn how to work with text and strings in JavaScript.",
  topics: [
    {
      id: "string-basics",
      title: "String Basics",
      description: "Learn what strings are and how to create them.",
      level: "Beginner",
    },
    {
      id: "string-indexing",
      title: "String Indexing",
      description: "Access individual characters using indexes.",
      level: "Beginner",
    },
    {
      id: "string-length",
      title: "String Length",
      description: "Find the number of characters in a string.",
      level: "Beginner",
    },
    {
      id: "string-methods",
      title: "String Methods",
      description: "Learn common methods used to work with strings.",
      level: "Beginner",
    },
    {
      id: "string-search-methods",
      title: "String Search Methods",
      description: "Search for text and characters inside a string.",
      level: "Beginner",
    },
    {
      id: "string-slice-substring",
      title: "String Slice & Substring",
      description: "Extract parts of a string using slice() and substring().",
      level: "Beginner",
    },
    {
      id: "template-literals",
      title: "String Templates (Template Literals)",
      description: "Create dynamic strings using template literals.",
      level: "Intermediate",
    },
  ],
},

  {
  id: "arrays",
  title: "12. Arrays",
  description:
    "Learn how to store, access, search, sort, and process collections of values.",
  topics: [
    {
      id: "array-basics",
      title: "Array Basics",
      description:
        "Learn what arrays are and how to create and use them.",
      level: "Beginner",
    },
    {
      id: "array-indexing",
      title: "Array Indexing",
      description:
        "Access individual array values using index positions.",
      level: "Beginner",
    },
    {
      id: "multidimensional-arrays",
      title: "Multidimensional Arrays",
      description:
        "Work with arrays containing other arrays and understand rows and columns.",
      level: "Intermediate",
    },
    {
      id: "array-methods",
      title: "Array Methods",
      description:
        "Learn common methods for adding, removing, and working with array values.",
      level: "Beginner",
    },
    {
      id: "array-search",
      title: "Array Search",
      description:
        "Search for values and find elements inside an array.",
      level: "Intermediate",
    },
    {
      id: "array-sorting",
      title: "Array Sorting",
      description:
        "Sort array values in ascending and descending order.",
      level: "Intermediate",
    },
    {
      id: "for-each",
      title: "forEach()",
      description:
        "Run an action for every element in an array.",
      level: "Beginner",
    },
    {
      id: "map",
      title: "map()",
      description:
        "Transform array values and create a new array.",
      level: "Intermediate",
    },
    {
      id: "filter",
      title: "filter()",
      description:
        "Select values that satisfy a condition and create a new array.",
      level: "Intermediate",
    },
    {
      id: "reduce",
      title: "reduce()",
      description:
        "Combine array values into one final result.",
      level: "Intermediate",
    },
  ],
},  

  {
  id: "objects",
  title: "13. Objects",
  description:
    "Learn how to create, access, modify, and work with objects in JavaScript.",
  topics: [
    {
      id: "object-basics",
      title: "Object Basics",
      description:
        "Learn what objects are and how to create objects using key-value pairs.",
      level: "Beginner",
    },
    {
      id: "object-properties",
      title: "Object Properties",
      description:
        "Learn how to access, add, update, and delete object properties.",
      level: "Beginner",
    },
    {
      id: "object-methods",
      title: "Object Methods",
      description:
        "Learn how functions can be stored and used inside objects.",
      level: "Beginner",
    },
    {
      id: "this-keyword",
      title: "this Keyword",
      description:
        "Understand how the this keyword refers to the current object or context.",
      level: "Intermediate",
    },
    {
      id: "object-destructuring",
      title: "Object Destructuring",
      description:
        "Extract object properties into variables using destructuring.",
      level: "Intermediate",
    },
    {
      id: "for-in",
      title: "for...in Loop",
      description:
        "Loop through the enumerable properties of an object.",
      level: "Intermediate",
    },
    {
      id: "constructor-functions",
      title: "Constructor Functions",
      description:
        "Create multiple objects with a common structure using constructor functions.",
      level: "Intermediate",
    },
    {
      id: "getters-setters",
      title: "Getters & Setters",
      description:
        "Control how object properties are read and updated using get and set.",
      level: "Advanced",
    },
    {
      id: "prototype",
      title: "Prototype",
      description:
        "Understand prototypes and how JavaScript objects share properties and methods.",
      level: "Advanced",
    },
    {
      id: "prototype-chain",
      title: "Prototype Chain",
      description:
        "Understand how JavaScript searches for properties through the prototype chain.",
      level: "Advanced",
    },
    {
      id: "object-create",
      title: "Object.create()",
      description:
        "Create a new object with a specified prototype.",
      level: "Advanced",
    },
    {
      id: "object-keys-values-entries",
      title: "Object.keys(), values() & entries()",
      description:
        "Convert object properties into arrays for easy processing.",
      level: "Intermediate",
    },
    {
      id: "object-spread-rest",
      title: "Object Spread & Rest",
      description:
        "Copy, combine, and extract object properties using spread and rest syntax.",
      level: "Intermediate",
    },
  ],
},
  {
    id: "es6",
    title: "14. ES6+ Modern JavaScript",
    description:
      "Learn the modern JavaScript features introduced and improved with ES6 and later versions.",
    topics: [
      {
        id: "es6-introduction",
        title: "What is ES6?",
        description:
          "Understand ES6, why it was introduced, and how it changed modern JavaScript.",
        level: "Beginner",
      },
      {
        id: "default-parameters",
        title: "Default Parameters",
        description:
          "Provide default values for function parameters when no value is supplied.",
        level: "Beginner",
      },
      {
        id: "rest-parameters",
        title: "Rest Parameters",
        description:
          "Collect multiple function arguments into a single array using rest syntax.",
        level: "Intermediate",
      },
      {
        id: "spread-operator",
        title: "Spread Operator",
        description:
          "Expand array and object values using the spread syntax.",
        level: "Intermediate",
      },
      {
        id: "destructuring",
        title: "Destructuring",
        description:
          "Extract values from arrays and objects using destructuring syntax.",
        level: "Intermediate",
      },
      {
        id: "enhanced-object-literals",
        title: "Enhanced Object Literals",
        description:
          "Use shorthand properties, methods, and computed property names in objects.",
        level: "Intermediate",
      },
      {
        id: "optional-chaining",
        title: "Optional Chaining (?.)",
        description:
          "Safely access nested properties and methods without unnecessary errors.",
        level: "Intermediate",
      },
      {
        id: "nullish-coalescing",
        title: "Nullish Coalescing (??)",
        description:
          "Provide fallback values when a value is null or undefined.",
        level: "Intermediate",
      },
      {
        id: "modules",
        title: "JavaScript Modules",
        description:
          "Organize JavaScript applications using export and import.",
        level: "Intermediate",
      },
      {
        id: "classes",
        title: "Classes",
        description:
          "Create reusable object-oriented structures using class syntax.",
        level: "Intermediate",
      },
      {
        id: "class-inheritance",
        title: "Class Inheritance",
        description:
          "Create parent-child relationships between classes using extends and super.",
        level: "Advanced",
      },
      {
        id: "static-members",
        title: "Static Members",
        description:
          "Create properties and methods that belong to the class itself.",
        level: "Advanced",
      },
      {
        id: "private-class-fields",
        title: "Private Class Fields",
        description:
          "Create private class properties and methods using the # syntax.",
        level: "Advanced",
      },
      {
        id: "class-getters-setters",
        title: "Getters & Setters in Classes",
        description:
          "Control how class properties are read and updated using getters and setters.",
        level: "Advanced",
      },
    ],
  },

  {
    id: "advanced-javascript",
    title: "15. Advanced JavaScript",
    description:
      "Understand important JavaScript concepts used in real applications and technical interviews.",
    topics: [
      {
        id: "execution-context",
        title: "Execution Context",
        description:
          "Understand how JavaScript creates and manages the environment in which code runs.",
        level: "Advanced",
      },
      {
        id: "hoisting",
        title: "Hoisting",
        description:
          "Understand how JavaScript handles variable and function declarations before execution.",
        level: "Advanced",
      },
      {
        id: "closures",
        title: "Closures",
        description:
          "Understand how functions remember and access variables from their outer scope.",
        level: "Advanced",
      },
      {
        id: "this",
        title: "this in Different Contexts",
        description:
          "Understand how the value of this is determined in different JavaScript situations.",
        level: "Advanced",
      },
      {
        id: "call-apply-bind",
        title: "call(), apply() & bind()",
        description:
          "Control the value of this and reuse functions with different objects and arguments.",
        level: "Advanced",
      },
      {
        id: "callbacks",
        title: "Callback Functions",
        description:
          "Understand how functions can be passed to other functions and executed later.",
        level: "Intermediate",
      },
      {
        id: "higher-order-functions",
        title: "Higher-Order Functions",
        description:
          "Understand functions that accept other functions or return functions as values.",
        level: "Advanced",
      },
    ],
  },

  {
    id: "async-javascript",
    title: "16. Asynchronous JavaScript",
    description:
      "Learn how JavaScript handles tasks that take time and manage asynchronous operations.",
    topics: [
      {
        id: "synchronous-vs-asynchronous",
        title: "Synchronous vs Asynchronous",
        description:
          "Understand the difference between synchronous and asynchronous execution.",
        level: "Intermediate",
      },
      {
        id: "callbacks-async",
        title: "Async Callbacks",
        description:
          "Handle asynchronous operations using callback functions.",
        level: "Intermediate",
      },
      {
        id: "promises",
        title: "Promises",
        description:
          "Handle asynchronous results using promises.",
        level: "Intermediate",
      },
      {
        id: "async-await",
        title: "async / await",
        description:
          "Write cleaner and easier-to-read asynchronous JavaScript.",
        level: "Intermediate",
      },
      {
        id: "error-handling",
        title: "Error Handling",
        description:
          "Handle errors using try, catch and finally.",
        level: "Intermediate",
      },
      {
        id: "event-loop",
        title: "Event Loop",
        description:
          "Understand how JavaScript manages asynchronous tasks.",
        level: "Advanced",
      },
    ],
  },

  {
    id: "dom",
    title: "17. DOM",
    description:
      "Learn how JavaScript interacts with and changes HTML elements.",
    topics: [
      {
        id: "dom-introduction",
        title: "What is DOM?",
        description:
          "Understand the Document Object Model and how browsers represent HTML.",
        level: "Beginner",
      },
      {
        id: "select-elements",
        title: "Selecting Elements",
        description:
          "Select HTML elements using JavaScript.",
        level: "Beginner",
      },
      {
        id: "change-content",
        title: "Changing Content",
        description:
          "Change HTML content dynamically using JavaScript.",
        level: "Beginner",
      },
      {
        id: "change-style",
        title: "Changing Styles",
        description:
          "Modify element styles using JavaScript.",
        level: "Beginner",
      },
      {
        id: "create-elements",
        title: "Creating Elements",
        description:
          "Create HTML elements dynamically using JavaScript.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "events",
    title: "18. Events",
    description:
      "Learn how JavaScript responds to user actions and browser events.",
    topics: [
      {
        id: "event-basics",
        title: "Event Basics",
        description:
          "Understand browser events and how they work.",
        level: "Beginner",
      },
      {
        id: "click-event",
        title: "Click Event",
        description:
          "Handle button and element clicks.",
        level: "Beginner",
      },
      {
        id: "input-event",
        title: "Input Event",
        description:
          "Respond to user input and changes.",
        level: "Beginner",
      },
      {
        id: "event-listener",
        title: "addEventListener()",
        description:
          "Attach event handlers using addEventListener().",
        level: "Intermediate",
      },
      {
        id: "event-bubbling",
        title: "Event Bubbling",
        description:
          "Understand how events move through the DOM.",
        level: "Advanced",
      },
    ],
  },

  {
    id: "browser-storage",
    title: "19. Browser Storage",
    description:
      "Learn how to store and manage data inside the user's browser.",
    topics: [
      {
        id: "local-storage",
        title: "localStorage",
        description:
          "Store data that remains available after the browser is closed.",
        level: "Intermediate",
      },
      {
        id: "session-storage",
        title: "sessionStorage",
        description:
          "Store data that remains available during a browser session.",
        level: "Intermediate",
      },
      {
        id: "json",
        title: "JSON",
        description:
          "Understand and work with JSON data in JavaScript.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "fetch-api",
    title: "20. Fetch API & APIs",
    description:
      "Learn how frontend applications communicate with servers and APIs.",
    topics: [
      {
        id: "what-is-api",
        title: "What is an API?",
        description:
          "Understand APIs with simple real-world examples.",
        level: "Beginner",
      },
      {
        id: "fetch",
        title: "fetch()",
        description:
          "Request data from an API using the Fetch API.",
        level: "Intermediate",
      },
      {
        id: "get-request",
        title: "GET Request",
        description:
          "Fetch data from a server using a GET request.",
        level: "Intermediate",
      },
      {
        id: "post-request",
        title: "POST Request",
        description:
          "Send data to a server using a POST request.",
        level: "Intermediate",
      },
      {
        id: "api-project",
        title: "API Mini Project",
        description:
          "Build a practical application using an API.",
        level: "Intermediate",
      },
    ],
  },

  {
    id: "projects",
    title: "21. JavaScript Projects",
    description:
      "Build practical projects and apply the JavaScript concepts you have learned.",
    topics: [
      {
        id: "calculator",
        title: "Calculator App",
        description:
          "Build a calculator using JavaScript.",
        level: "Beginner",
      },
      {
        id: "todo-app",
        title: "Todo App",
        description:
          "Build a practical Todo application.",
        level: "Intermediate",
      },
      {
        id: "quiz-app",
        title: "Quiz App",
        description:
          "Build an interactive quiz application.",
        level: "Intermediate",
      },
      {
        id: "weather-app",
        title: "Weather App",
        description:
          "Build a weather application using an API.",
        level: "Intermediate",
      },
      {
        id: "crud-app",
        title: "CRUD Application",
        description:
          "Build a complete CRUD application using JavaScript.",
        level: "Advanced",
      },
    ],
  },

  {
    id: "interview",
    title: "22. Interview Preparation",
    description:
      "Practice JavaScript interview questions and coding challenges.",
    topics: [
      {
        id: "basic-interview",
        title: "Basic JavaScript Questions",
        description:
          "Practice beginner-level JavaScript interview questions.",
        level: "Beginner",
      },
      {
        id: "output-questions",
        title: "Output-Based Questions",
        description:
          "Predict the output of JavaScript code.",
        level: "Intermediate",
      },
      {
        id: "tricky-questions",
        title: "Tricky JavaScript Questions",
        description:
          "Practice commonly confusing JavaScript concepts.",
        level: "Advanced",
      },
      {
        id: "coding-questions",
        title: "JavaScript Coding Questions",
        description:
          "Solve practical JavaScript coding problems.",
        level: "Intermediate",
      },
    ],
  },
 ];  
 