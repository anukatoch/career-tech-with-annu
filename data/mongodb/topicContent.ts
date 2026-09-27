import type { TopicContent } from "@/data/javascript/topicContent";

export const mongodbTopicContent: Record<string, TopicContent> = {
  "what-is-mongodb": {
    concept: {
      heading: "What Is MongoDB?",
      paragraphs: [
        "MongoDB is a NoSQL database that stores data in flexible documents instead of traditional rows and tables.",
        "MongoDB documents use a JSON-like structure, which makes it convenient for modern applications built with JavaScript, Node.js and other programming technologies.",
        "A MongoDB database contains collections, and collections contain documents. Each document can store related information as fields and values.",
      ],
      remember:
        "MongoDB is a document-oriented NoSQL database that stores data in flexible documents.",
    },

    analogy: {
      heading: "Think of MongoDB Like a Digital Filing System",
      items: [
        {
          icon: "🗄️",
          title: "Database",
          text: "Think of a database as a filing cabinet that contains related information.",
        },
        {
          icon: "📁",
          title: "Collection",
          text: "A collection is similar to a folder containing documents of a particular type.",
        },
        {
          icon: "📄",
          title: "Document",
          text: "A document is like an individual record containing fields and values.",
        },
        {
          icon: "🏷️",
          title: "Field",
          text: "A field stores one piece of information such as name, price or email.",
        },
      ],
    },

    visual: {
      heading: "MongoDB Data Structure",
      description:
        "MongoDB organizes data using databases, collections and documents.",
      steps: [
        {
          icon: "🗄️",
          title: "Database",
          text: "The database contains collections related to an application.",
        },
        {
          icon: "📁",
          title: "Collection",
          text: "A collection groups documents of a similar type.",
        },
        {
          icon: "📄",
          title: "Document",
          text: "A document stores one record using fields and values.",
        },
        {
          icon: "🔑",
          title: "Field",
          text: "Fields represent individual pieces of information.",
        },
      ],
      flow: "Database → Collection → Document → Fields",
    },

    code: {
      title: "A Simple MongoDB Document",
      description:
        "A MongoDB document can represent a user record using key-value pairs.",
      language: "JSON",
      code: `{
  "name": "Student",
  "age": 21,
  "course": "Full Stack Development",
  "isActive": true
}`,
      output: `name: Student
age: 21
course: Full Stack Development
isActive: true`,
      explanation:
        "The document contains fields such as name, age, course and isActive. MongoDB stores this type of document inside a collection.",
    },

    interview: {
      question: "What is MongoDB?",
      answer:
        "MongoDB is a NoSQL, document-oriented database that stores data in flexible BSON documents.",
      tip:
        "Remember the keywords: NoSQL, document-oriented, BSON and flexible schema.",
    },

    tricky: {
      question:
        "Is MongoDB completely schema-free?",
      answer:
        "MongoDB provides flexible schemas, but applications can still enforce validation rules when required.",
    },

    practice: {
      question:
        "Create a MongoDB document representing a product with name, price, category and stock.",
      hint:
        "Use a JSON-like object with four fields: name, price, category and stock.",
    },

    challenge: {
      title: "Create Your First MongoDB Document",
      description:
        "Practice representing application data using a MongoDB document.",
      task:
        "Create a document for a course containing title, duration, fee and an active status.",
    },
  },

  "why-mongodb": {
    concept: {
      heading: "Why Use MongoDB?",
      paragraphs: [
        "MongoDB is useful when an application needs flexible document-based data storage and the data structure may change over time.",
        "Its document model works naturally with JavaScript objects and JSON-like application data.",
        "MongoDB also provides features such as indexing, aggregation, replication and horizontal scaling for applications that need them.",
      ],
      remember:
        "MongoDB is commonly chosen for flexible data models and modern application development.",
    },

    analogy: {
      heading: "Why a Flexible Filing System Can Help",
      items: [
        {
          icon: "📝",
          title: "Flexible Records",
          text: "Different documents can contain different fields when the application requires flexibility.",
        },
        {
          icon: "⚡",
          title: "Developer Friendly",
          text: "The document structure is familiar to developers working with JavaScript objects.",
        },
        {
          icon: "📈",
          title: "Scalable",
          text: "MongoDB provides features designed to support applications that grow in data and traffic.",
        },
        {
          icon: "🔎",
          title: "Powerful Queries",
          text: "MongoDB provides query operators, indexes and aggregation for working with data.",
        },
      ],
    },

    visual: {
      heading: "Benefits of MongoDB",
      description:
        "MongoDB combines a flexible document model with features for querying and scaling applications.",
      steps: [
        {
          icon: "🧩",
          title: "Flexible Data",
          text: "Documents can represent application data naturally.",
        },
        {
          icon: "💻",
          title: "Modern Development",
          text: "MongoDB works well with Node.js and JavaScript applications.",
        },
        {
          icon: "🔍",
          title: "Querying",
          text: "Documents can be searched and filtered using MongoDB query operators.",
        },
        {
          icon: "📊",
          title: "Growth",
          text: "MongoDB provides features that support growing applications.",
        },
      ],
      flow: "Flexible Data → Easy Development → Powerful Queries → Scalable Applications",
    },

    code: {
      title: "Document-Oriented Data",
      description:
        "Related information can be stored together inside a document.",
      language: "JSON",
      code: `{
  "name": "Student",
  "contact": {
    "email": "student@example.com",
    "city": "Delhi"
  },
  "skills": ["HTML", "CSS", "JavaScript"]
}`,
      output: `Student
Email: student@example.com
City: Delhi
Skills: HTML, CSS, JavaScript`,
      explanation:
        "MongoDB can store nested objects and arrays inside documents, which can make related application data easier to represent.",
    },

    interview: {
      question: "Why is MongoDB popular for modern web applications?",
      answer:
        "MongoDB provides a flexible document model, powerful queries and features that support modern application development and scaling.",
      tip:
        "Mention flexible documents and the ability to work naturally with application data.",
    },

    tricky: {
      question:
        "Does flexible schema mean every document must have completely different fields?",
      answer:
        "No. Documents in a collection commonly follow a similar structure, but MongoDB allows flexibility when different documents need different fields.",
    },

    practice: {
      question:
        "List three reasons why a developer might choose MongoDB for a web application.",
      hint:
        "Think about data flexibility, developer experience and application growth.",
    },

    challenge: {
      title: "Choose MongoDB for a Scenario",
      description:
        "Think about an application where the data structure may evolve frequently.",
      task:
        "Describe why a flexible document database could be useful for that application.",
    },
  },

  "mongodb-vs-sql": {
    concept: {
      heading: "MongoDB vs SQL Databases",
      paragraphs: [
        "SQL databases organize data primarily using tables, rows and columns, while MongoDB organizes data using collections and documents.",
        "SQL databases commonly use structured schemas and relationships between tables. MongoDB uses flexible documents and can store related data inside documents when appropriate.",
        "Both database types are widely used. The choice depends on the application's data model, relationships, query requirements and operational needs.",
      ],
      remember:
        "SQL databases use tables and rows; MongoDB uses collections and documents.",
    },

    analogy: {
      heading: "Two Ways to Organize Records",
      items: [
        {
          icon: "📊",
          title: "SQL Table",
          text: "Imagine a spreadsheet where every row follows a defined set of columns.",
        },
        {
          icon: "📄",
          title: "MongoDB Document",
          text: "Imagine individual records stored as flexible documents containing fields.",
        },
        {
          icon: "🔗",
          title: "Relationships",
          text: "SQL commonly represents relationships using keys between tables.",
        },
        {
          icon: "🧩",
          title: "Embedded Data",
          text: "MongoDB can embed related information inside a document when suitable.",
        },
      ],
    },

    visual: {
      heading: "SQL vs MongoDB Structure",
      description:
        "The same type of user information can be represented differently in relational and document databases.",
      steps: [
        {
          icon: "📊",
          title: "SQL",
          text: "Database → Table → Row → Column",
        },
        {
          icon: "🍃",
          title: "MongoDB",
          text: "Database → Collection → Document → Field",
        },
        {
          icon: "🔗",
          title: "SQL Relationships",
          text: "Related records are commonly connected using keys.",
        },
        {
          icon: "📦",
          title: "MongoDB Documents",
          text: "Related information can sometimes be embedded together.",
        },
      ],
      flow: "SQL: Database → Table → Row → Column\nMongoDB: Database → Collection → Document → Field",
    },

    code: {
      title: "Representing the Same Data",
      description:
        "A user record can be represented as a MongoDB document.",
      language: "JSON",
      code: `{
  "name": "Student",
  "email": "student@example.com",
  "course": "JavaScript"
}`,
      output: `One MongoDB document represents one user record.`,
      explanation:
        "In a relational database, similar information would normally be represented as a row in a table with defined columns.",
    },

    interview: {
      question: "What is the main difference between MongoDB and SQL databases?",
      answer:
        "SQL databases primarily organize data in tables and rows, while MongoDB stores data as flexible documents inside collections.",
      tip:
        "Use the terms table/row/column versus collection/document/field.",
    },

    tricky: {
      question:
        "Is MongoDB always better than a SQL database?",
      answer:
        "No. Both approaches have different strengths, and the appropriate choice depends on application requirements.",
    },

    practice: {
      question:
        "Write two differences between a MongoDB document and a SQL table row.",
      hint:
        "Compare their data structures and schema approach.",
    },

    challenge: {
      title: "Compare the Data Models",
      description:
        "Practice identifying the structural difference between SQL and MongoDB.",
      task:
        "Take a simple student record and describe how it would be represented in a SQL table and a MongoDB collection.",
    },
  },

  "mongodb-features": {
    concept: {
      heading: "MongoDB Features",
      paragraphs: [
        "MongoDB provides a document-oriented data model where records are stored as BSON documents.",
        "It supports rich queries, indexes, aggregation, replication and other features used in modern applications.",
        "Its flexible document model can make it convenient to represent nested objects and arrays.",
      ],
      remember:
        "Important MongoDB features include documents, flexible schemas, queries, indexes, aggregation and replication.",
    },

    analogy: {
      heading: "MongoDB as a Modern Data Toolkit",
      items: [
        {
          icon: "📄",
          title: "Documents",
          text: "Store application records as flexible documents.",
        },
        {
          icon: "🔎",
          title: "Queries",
          text: "Find and filter documents using MongoDB query operators.",
        },
        {
          icon: "⚡",
          title: "Indexes",
          text: "Indexes can improve query performance for suitable workloads.",
        },
        {
          icon: "📊",
          title: "Aggregation",
          text: "Aggregation processes documents to produce calculated or grouped results.",
        },
      ],
    },

    visual: {
      heading: "Important MongoDB Features",
      description:
        "MongoDB provides several capabilities for storing, searching and processing application data.",
      steps: [
        {
          icon: "📄",
          title: "Document Model",
          text: "Store records using BSON documents.",
        },
        {
          icon: "🔍",
          title: "Query System",
          text: "Search documents using expressions and operators.",
        },
        {
          icon: "⚡",
          title: "Indexes",
          text: "Create indexes for frequently queried fields.",
        },
        {
          icon: "📊",
          title: "Aggregation",
          text: "Transform and summarize collections of documents.",
        },
      ],
      flow: "Documents → Queries → Indexes → Aggregation",
    },

    code: {
      title: "Example Document with Different Data Types",
      description:
        "A MongoDB document can contain strings, numbers, arrays and boolean values.",
      language: "JSON",
      code: `{
  "name": "Product",
  "price": 999,
  "tags": ["coding", "learning"],
  "available": true
}`,
      output: `Product
Price: 999
Tags: coding, learning
Available: true`,
      explanation:
        "MongoDB documents can contain different BSON-supported data types and nested structures.",
    },

    interview: {
      question: "Name some important MongoDB features.",
      answer:
        "Important features include document storage, flexible schemas, rich queries, indexes, aggregation and replication.",
      tip:
        "Mention features that relate to storage, querying and application scalability.",
    },

    tricky: {
      question:
        "Does MongoDB only store simple key-value pairs?",
      answer:
        "No. MongoDB documents can contain nested documents, arrays and several BSON data types.",
    },

    practice: {
      question:
        "Write four important features of MongoDB and explain each in one sentence.",
      hint:
        "Choose features from document model, queries, indexes and aggregation.",
    },

    challenge: {
      title: "Identify MongoDB Features",
      description:
        "Connect common MongoDB features with their purpose.",
      task:
        "Create a small table with four MongoDB features and describe how each can help an application.",
    },
  },

  "where-mongodb-used": {
    concept: {
      heading: "Where Is MongoDB Used?",
      paragraphs: [
        "MongoDB can be used in many types of applications where document-based data storage is appropriate.",
        "Common examples include content platforms, product catalogs, user profiles, analytics systems and web application backends.",
        "The suitability of MongoDB depends on the application's data structure, relationships, queries and operational requirements.",
      ],
      remember:
        "MongoDB can be used for many modern applications, but database choice should always match application requirements.",
    },

    analogy: {
      heading: "MongoDB in Different Applications",
      items: [
        {
          icon: "🛒",
          title: "E-commerce",
          text: "Product documents can contain details such as price, category, tags and inventory.",
        },
        {
          icon: "📰",
          title: "Content Platforms",
          text: "Articles and other content can be represented as documents with flexible fields.",
        },
        {
          icon: "👤",
          title: "User Profiles",
          text: "Profiles can contain nested preferences, contact information and other user data.",
        },
        {
          icon: "📊",
          title: "Analytics",
          text: "Document data can be processed using queries and aggregation pipelines.",
        },
      ],
    },

    visual: {
      heading: "MongoDB Application Examples",
      description:
        "Different application types can use MongoDB when its document model fits their data.",
      steps: [
        {
          icon: "🛍️",
          title: "Product Catalog",
          text: "Store products with flexible attributes and categories.",
        },
        {
          icon: "📝",
          title: "Blog",
          text: "Store posts, tags, authors and other content data.",
        },
        {
          icon: "👥",
          title: "User System",
          text: "Store user profiles and preferences.",
        },
        {
          icon: "📈",
          title: "Data Processing",
          text: "Use aggregation to analyze document data.",
        },
      ],
      flow: "Application → MongoDB → Collections → Documents → Queries",
    },

    code: {
      title: "Example Product Document",
      description:
        "An e-commerce application can represent a product as a MongoDB document.",
      language: "JSON",
      code: `{
  "name": "Laptop",
  "price": 55000,
  "category": "Electronics",
  "tags": ["computer", "work"],
  "inStock": true
}`,
      output: `Product: Laptop
Price: 55000
Category: Electronics
In Stock: true`,
      explanation:
        "The document keeps related product information together and can be extended with additional fields when needed.",
    },

    interview: {
      question: "Where is MongoDB commonly used?",
      answer:
        "MongoDB can be used in web applications, content platforms, product catalogs, user systems, analytics applications and other systems where a document model is suitable.",
      tip:
        "Give practical examples rather than naming only one type of application.",
    },

    tricky: {
      question:
        "Can MongoDB be used for every type of application?",
      answer:
        "MongoDB is versatile, but the appropriate database depends on data relationships, consistency requirements, query patterns and other application needs.",
    },

    practice: {
      question:
        "Name three applications where MongoDB could be useful and explain why.",
      hint:
        "Think about applications with flexible or document-like data.",
    },

    challenge: {
      title: "Choose a MongoDB Use Case",
      description:
        "Practice matching MongoDB with a realistic application scenario.",
      task:
        "Choose one application and design three MongoDB collections that could support it.",
    },
  },

  "mongodb-architecture": {
    concept: {
      heading: "MongoDB Architecture",
      paragraphs: [
        "MongoDB uses a document-oriented architecture in which data is organized into databases, collections and documents.",
        "A MongoDB deployment can run as a standalone server or as a replica set, and MongoDB also supports sharded deployments for distributing data across servers.",
        "Applications communicate with MongoDB through drivers or libraries such as the MongoDB Node.js driver and Mongoose.",
      ],
      remember:
        "At the application level, think: Application → Driver/Mongoose → MongoDB → Database → Collection → Document.",
    },

    analogy: {
      heading: "Think of MongoDB Architecture as a Complete System",
      items: [
        {
          icon: "💻",
          title: "Application",
          text: "The application sends requests to read or modify database data.",
        },
        {
          icon: "🔌",
          title: "Driver",
          text: "A MongoDB driver allows application code to communicate with MongoDB.",
        },
        {
          icon: "🗄️",
          title: "Database",
          text: "The database contains collections for the application's data.",
        },
        {
          icon: "📄",
          title: "Documents",
          text: "Collections contain the actual BSON documents.",
        },
      ],
    },

    visual: {
      heading: "MongoDB Architecture Flow",
      description:
        "Application code communicates with MongoDB through a driver or library.",
      steps: [
        {
          icon: "💻",
          title: "Application",
          text: "Frontend or backend application needs data.",
        },
        {
          icon: "🔌",
          title: "Driver / Mongoose",
          text: "The application sends database operations through a driver or Mongoose.",
        },
        {
          icon: "🗄️",
          title: "MongoDB Server",
          text: "MongoDB processes the database operation.",
        },
        {
          icon: "📁",
          title: "Collection",
          text: "The operation works with documents inside a collection.",
        },
      ],
      flow: "Application → Driver / Mongoose → MongoDB Server → Database → Collection → Document",
    },

    code: {
      title: "Node.js Connecting to MongoDB",
      description:
        "A Node.js application can use the MongoDB driver to connect to a database.",
      language: "JavaScript",
      code: `import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb://127.0.0.1:27017"
);

await client.connect();

console.log("MongoDB connected");`,
      output: `MongoDB connected`,
      explanation:
        "The MongoClient provides the connection between the Node.js application and MongoDB. In production applications, the connection string should normally be stored securely rather than hard-coded.",
    },

    interview: {
      question: "What is the basic architecture of a MongoDB application?",
      answer:
        "A typical application communicates with MongoDB through a driver or library, which performs operations on databases, collections and documents.",
      tip:
        "Explain the flow from application to driver to database rather than memorizing only definitions.",
    },

    tricky: {
      question:
        "Is MongoDB architecture limited to a single server?",
      answer:
        "No. MongoDB can run in different deployment configurations, including replica sets and sharded clusters.",
    },

    practice: {
      question:
        "Draw the flow of a Node.js application communicating with MongoDB.",
      hint:
        "Start with Application and end with Document.",
    },

    challenge: {
      title: "Draw MongoDB Architecture",
      description:
        "Create a simple architecture diagram for a web application using MongoDB.",
      task:
        "Show Application → Driver/Mongoose → MongoDB → Database → Collection → Document.",
    },
  },
  

  
  "mongodb-installation": {
    concept: {
      heading: "MongoDB Installation",
      paragraphs: [
        "MongoDB can be installed locally on your computer so you can create databases, collections and documents without using a cloud database.",
        "For learning MongoDB with Node.js and MERN Stack development, a local MongoDB installation is useful because you can practice CRUD operations and database connections on your own system."
      ],
      remember:
        "MongoDB installation allows you to run a MongoDB database server on your own computer."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "💾",
          title: "Storage System",
          text: "Think of MongoDB as a digital storage room where application data can be stored and managed."
        },
        {
          icon: "⚙️",
          title: "Installation",
          text: "Installing MongoDB prepares your computer so that the MongoDB database server can run."
        },
        {
          icon: "🔌",
          title: "Connection",
          text: "Applications such as Node.js can connect to the running MongoDB server and work with stored data."
        }
      ]
    },

    visual: {
      heading: "MongoDB Installation Flow",
      description:
        "Follow these basic steps to prepare MongoDB for local development.",
      steps: [
        {
          icon: "1️⃣",
          title: "Download MongoDB",
          text: "Download the MongoDB Community Server for your operating system."
        },
        {
          icon: "2️⃣",
          title: "Install MongoDB",
          text: "Run the installer and complete the installation process."
        },
        {
          icon: "3️⃣",
          title: "Start MongoDB Server",
          text: "Make sure the MongoDB server is running on your computer."
        },
        {
          icon: "4️⃣",
          title: "Verify Installation",
          text: "Use the terminal to check the installed MongoDB and MongoDB Shell versions."
        }
      ],
      flow:
        "Download → Install → Start MongoDB Server → Verify → Connect"
    },

    code: {
      title: "Check MongoDB Installation",
      description:
        "Use these commands in the terminal to check whether MongoDB tools are available.",
      language: "bash",
      code: `mongod --version

mongosh --version`,
      output:
        "The terminal should display the installed MongoDB Server and MongoDB Shell versions.",
      explanation:
        "mongod --version checks the MongoDB server version. mongosh --version checks the MongoDB Shell version."
    },

    interview: {
      question: "What is the purpose of installing MongoDB locally?",
      answer:
        "Local MongoDB installation allows developers to run a MongoDB database server on their own computer and practice database operations without depending on a remote database.",
      tip:
        "MongoDB Server stores and manages data, while tools such as Compass and MongoDB Shell are used to interact with it."
    },

    tricky: {
      question: "Is MongoDB Compass the MongoDB database server?",
      answer:
        "No. MongoDB Compass is a graphical user interface used to work with MongoDB. The MongoDB server is responsible for storing and managing the database."
    },

    practice: {
      question:
        "Install MongoDB locally and verify that the MongoDB Server and MongoDB Shell are available.",
      hint:
        "Use mongod --version and mongosh --version in the terminal."
    },

    challenge: {
      title: "Verify MongoDB Setup",
      description:
        "Set up MongoDB locally and verify that the MongoDB server and MongoDB tools are available.",
      task:
        "Install MongoDB, verify the installation from the terminal and connect to the local MongoDB server using MongoDB Compass."
    }
  },

  "mongodb-atlas": {
    concept: {
      heading: "MongoDB Atlas",
      paragraphs: [
        "MongoDB Atlas is a cloud-based service for hosting MongoDB databases.",
        "Instead of running MongoDB only on your own computer, Atlas allows you to create a database in the cloud and connect to it from applications such as Node.js, Express.js and React-based projects.",
        "Atlas is commonly used when developing and deploying modern web applications."
      ],
      remember:
        "MongoDB Atlas is a cloud service for creating and managing MongoDB databases."
    },

    analogy: {
      heading: "Local MongoDB vs MongoDB Atlas",
      items: [
        {
          icon: "💻",
          title: "Local MongoDB",
          text: "Local MongoDB stores and runs the database on your own computer."
        },
        {
          icon: "☁️",
          title: "MongoDB Atlas",
          text: "MongoDB Atlas hosts the database in the cloud so applications can connect to it over the internet."
        },
        {
          icon: "🔗",
          title: "Application Connection",
          text: "A Node.js or other backend application can connect to an Atlas cluster using a connection string."
        }
      ]
    },

    visual: {
      heading: "MongoDB Atlas Flow",
      description:
        "A typical Atlas setup requires an account, cluster, access configuration and a connection string.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Account",
          text: "Create or sign in to your MongoDB Atlas account."
        },
        {
          icon: "2️⃣",
          title: "Create a Cluster",
          text: "Create a MongoDB Atlas cluster for your application."
        },
        {
          icon: "3️⃣",
          title: "Configure Access",
          text: "Create a database user and configure the required network access."
        },
        {
          icon: "4️⃣",
          title: "Get Connection String",
          text: "Copy the connection string and use it from your backend application or MongoDB Compass."
        }
      ],
      flow:
        "Atlas Account → Cluster → User & Network Access → Connection String → Application"
    },

    code: {
      title: "Atlas Connection String",
      description:
        "MongoDB Atlas provides a connection string that applications can use to connect to the cloud database.",
      language: "text",
      code: `mongodb+srv://username:password@cluster.mongodb.net/databaseName`,
      output:
        "The application uses the connection string to establish a connection with the Atlas database.",
      explanation:
        "Credentials should be stored securely and should not be exposed in frontend code. In a Node.js application, connection details are normally stored in environment variables."
    },

    interview: {
      question: "What is MongoDB Atlas?",
      answer:
        "MongoDB Atlas is a cloud database service that allows developers to create, manage and use MongoDB databases without managing the database server infrastructure themselves.",
      tip:
        "Local MongoDB runs on your computer, while MongoDB Atlas provides MongoDB as a cloud service."
    },

    tricky: {
      question: "Can MongoDB Atlas be used without installing MongoDB locally?",
      answer:
        "Yes. Atlas is a cloud service, so you can use it without running a local MongoDB server. You still need an appropriate client or application to connect to the Atlas database."
    },

    practice: {
      question:
        "Create a MongoDB Atlas cluster and connect to it using MongoDB Compass.",
      hint:
        "Create a cluster, create a database user, configure network access and then use the Atlas connection string."
    },

    challenge: {
      title: "Create an Atlas Database",
      description:
        "Create a cloud MongoDB database using MongoDB Atlas and connect to it using MongoDB Compass.",
      task:
        "Create an Atlas cluster, configure access, obtain the connection string and successfully connect to the cluster."
    }
  },

  "mongodb-compass": {
    concept: {
      heading: "MongoDB Compass",
      paragraphs: [
        "MongoDB Compass is a graphical user interface for MongoDB.",
        "It allows developers to view databases, create collections, insert documents, run queries and inspect database information without using only the command line.",
        "Compass is especially useful for beginners because database information can be viewed visually."
      ],
      remember:
        "MongoDB Compass is a GUI tool for working with MongoDB databases."
    },

    analogy: {
      heading: "MongoDB Compass as a Control Panel",
      items: [
        {
          icon: "⌨️",
          title: "MongoDB Shell",
          text: "MongoDB Shell lets you interact with MongoDB by typing commands."
        },
        {
          icon: "🖥️",
          title: "MongoDB Compass",
          text: "Compass provides a graphical interface where database information can be viewed and managed visually."
        },
        {
          icon: "🗄️",
          title: "Database View",
          text: "You can open databases, collections and documents and inspect their stored data."
        }
      ]
    },

    visual: {
      heading: "Compass Workflow",
      description:
        "Use MongoDB Compass to connect to MongoDB and visually work with databases and collections.",
      steps: [
        {
          icon: "1️⃣",
          title: "Open Compass",
          text: "Start MongoDB Compass on your computer."
        },
        {
          icon: "2️⃣",
          title: "Enter Connection String",
          text: "Enter the connection string for your local MongoDB server or Atlas cluster."
        },
        {
          icon: "3️⃣",
          title: "Connect",
          text: "Connect to the MongoDB server."
        },
        {
          icon: "4️⃣",
          title: "Explore Data",
          text: "Select databases and collections and view or modify documents."
        }
      ],
      flow:
        "Open Compass → Connection String → Connect → Database → Collection → Documents"
    },

    code: {
      title: "Connect Using Local MongoDB",
      description:
        "Use the local MongoDB connection string in MongoDB Compass.",
      language: "text",
      code: `mongodb://127.0.0.1:27017`,
      output:
        "MongoDB Compass connects to the MongoDB server running locally on the default port.",
      explanation:
        "127.0.0.1 refers to the local computer. Port 27017 is the default MongoDB server port."
    },

    interview: {
      question: "What is MongoDB Compass?",
      answer:
        "MongoDB Compass is a graphical user interface that helps developers interact with MongoDB databases visually.",
      tip:
        "Do not confuse Compass with the database server. Compass is a client tool used to interact with MongoDB."
    },

    tricky: {
      question: "Does MongoDB Compass replace MongoDB Server?",
      answer:
        "No. Compass is a client application. The MongoDB server stores and manages the database."
    },

    practice: {
      question:
        "Connect MongoDB Compass to your local MongoDB server and explore a database.",
      hint:
        "Use mongodb://127.0.0.1:27017 as the local connection string when MongoDB is running on the default port."
    },

    challenge: {
      title: "Explore MongoDB Compass",
      description:
        "Use MongoDB Compass to create and inspect a MongoDB database.",
      task:
        "Connect to MongoDB Compass, create a database and collection, insert a document and verify the document visually."
    }
  },

  "creating-database": {
    concept: {
      heading: "Creating Database",
      paragraphs: [
        "A MongoDB database contains collections, and collections contain documents.",
        "Unlike some SQL databases, MongoDB generally creates a database when you first store data in it.",
        "You can select a database using MongoDB Shell, create it through Compass, or work with it through application code."
      ],
      remember:
        "In MongoDB, a database becomes persistent when data is stored in it."
    },

    analogy: {
      heading: "Think of a Database as a School",
      items: [
        {
          icon: "🏫",
          title: "Database",
          text: "The school building represents the MongoDB database."
        },
        {
          icon: "📚",
          title: "Collections",
          text: "Different registers inside the school represent collections."
        },
        {
          icon: "📄",
          title: "Documents",
          text: "Individual student records inside a register represent documents."
        }
      ]
    },

    visual: {
      heading: "MongoDB Database Structure",
      description:
        "MongoDB organizes application data in a hierarchy from server to fields.",
      steps: [
        {
          icon: "1️⃣",
          title: "MongoDB Server",
          text: "The server manages MongoDB databases and their data."
        },
        {
          icon: "2️⃣",
          title: "Database",
          text: "A database groups related collections."
        },
        {
          icon: "3️⃣",
          title: "Collection",
          text: "A collection stores related documents."
        },
        {
          icon: "4️⃣",
          title: "Document",
          text: "A document stores fields and values."
        }
      ],
      flow:
        "MongoDB Server → Database → Collection → Document → Fields & Values"
    },

    code: {
      title: "Create Database",
      description:
        "Use the use command to select a database and insert data so the database becomes persistent.",
      language: "javascript",
      code: `use school

db.students.insertOne({
  name: "Rahul",
  course: "MERN Stack"
})`,
      output:
        "A school database is created when the first document is stored.",
      explanation:
        "The use command selects a database. The database becomes persistent when data is inserted into it."
    },

    interview: {
      question: "How do you create a database in MongoDB?",
      answer:
        "A database can be selected using the use command, and MongoDB creates the database when data is first stored in it.",
      tip:
        "Remember that use selects the database; inserting data makes the database persistent."
    },

    tricky: {
      question:
        "Does simply using the use command always create a permanent database?",
      answer:
        "No. Selecting a database with use does not necessarily make it persistent. Data must be stored before the database is created as a persistent database."
    },

    practice: {
      question:
        "Create or select a database named school and store a student document inside it.",
      hint:
        "Use use school followed by db.students.insertOne(...)."
    },

    challenge: {
      title: "Create a School Database",
      description:
        "Create a school database and store student information inside it.",
      task:
        "Create a school database, insert at least three student documents and verify that the database contains the stored data."
    }
  },

  "creating-collection": {
    concept: {
      heading: "Creating Collection",
      paragraphs: [
        "A collection is a group of MongoDB documents.",
        "Collections are similar to tables in relational databases, but MongoDB collections store flexible JSON-like documents.",
        "A collection can be created explicitly or automatically when the first document is inserted."
      ],
      remember:
        "A collection stores related MongoDB documents."
    },

    analogy: {
      heading: "Think of Collections as Registers",
      items: [
        {
          icon: "🎓",
          title: "Students",
          text: "A students collection can store student documents."
        },
        {
          icon: "👨‍🏫",
          title: "Teachers",
          text: "A teachers collection can store teacher documents."
        },
        {
          icon: "📘",
          title: "Courses",
          text: "A courses collection can store course documents."
        }
      ]
    },

    visual: {
      heading: "Collection Structure",
      description:
        "A collection belongs to a database and contains related MongoDB documents.",
      steps: [
        {
          icon: "1️⃣",
          title: "Database",
          text: "Select the database where the collection should exist."
        },
        {
          icon: "2️⃣",
          title: "Collection",
          text: "Create or select a collection."
        },
        {
          icon: "3️⃣",
          title: "Document",
          text: "Add documents to the collection."
        },
        {
          icon: "4️⃣",
          title: "Fields",
          text: "Each document contains fields and values."
        }
      ],
      flow:
        "Database → Collection → Document → Fields"
    },

    code: {
      title: "Create Collection",
      description:
        "Use createCollection() to explicitly create a collection.",
      language: "javascript",
      code: `use school

db.createCollection("students")

show collections`,
      output:
        "The students collection appears in the list of collections.",
      explanation:
        "createCollection() explicitly creates a collection. show collections displays the collections available in the selected database."
    },

    interview: {
      question: "What is a collection in MongoDB?",
      answer:
        "A collection is a group of MongoDB documents. It is conceptually similar to a table in a relational database.",
      tip:
        "A MongoDB collection stores documents instead of rows."
    },

    tricky: {
      question:
        "Do you always need createCollection() before inserting documents?",
      answer:
        "No. MongoDB can automatically create a collection when the first document is inserted into it."
    },

    practice: {
      question:
        "Create students, teachers and courses collections inside a school database.",
      hint:
        "Use db.createCollection() for explicit collection creation."
    },

    challenge: {
      title: "Design a College Database",
      description:
        "Create students, teachers and courses collections and decide what type of documents each collection should contain.",
      task:
        "Create students, teachers and courses collections in MongoDB and explain what type of documents each collection should contain."
    }
  },

  "insert-documents": {
    concept: {
      heading: "Insert Documents",
      paragraphs: [
        "A document is the basic unit of data stored in MongoDB.",
        "Documents contain fields and values and are stored inside collections.",
        "MongoDB provides insertOne() for inserting a single document and insertMany() for inserting multiple documents."
      ],
      remember:
        "Use insertOne() for one document and insertMany() for multiple documents."
    },

    analogy: {
      heading: "Think of Documents as Records",
      items: [
        {
          icon: "📋",
          title: "Collection",
          text: "A collection can be compared to a register that stores related records."
        },
        {
          icon: "📄",
          title: "Document",
          text: "Each document represents one record, such as one student."
        },
        {
          icon: "🧩",
          title: "Fields",
          text: "Fields such as name, age and course store individual pieces of information."
        }
      ]
    },

    visual: {
      heading: "Insert Document Flow",
      description:
        "MongoDB stores documents inside collections. If _id is not supplied, MongoDB generates it automatically.",
      steps: [
        {
          icon: "1️⃣",
          title: "Select Database",
          text: "Select the database where the collection exists."
        },
        {
          icon: "2️⃣",
          title: "Select Collection",
          text: "Choose the collection where the document should be stored."
        },
        {
          icon: "3️⃣",
          title: "Create Document",
          text: "Create a document containing the required fields and values."
        },
        {
          icon: "4️⃣",
          title: "Insert Document",
          text: "Use insertOne() or insertMany() to store the document or documents."
        }
      ],
      flow:
        "Database → Collection → Create Document → Insert → MongoDB Generates _id"
    },

    code: {
      title: "Insert Documents",
      description:
        "Use insertOne() for a single document and insertMany() for multiple documents.",
      language: "javascript",
      code: `use school

db.students.insertOne({
  name: "Rahul",
  age: 22,
  course: "MERN Stack"
})

db.students.insertMany([
  {
    name: "Aman",
    age: 21,
    course: "JavaScript"
  },
  {
    name: "Neha",
    age: 23,
    course: "React"
  }
])`,
      output:
        "The documents are inserted into the students collection. MongoDB generates an _id for each document when one is not provided.",
      explanation:
        "insertOne() adds one document, while insertMany() adds multiple documents to a collection."
    },

    interview: {
      question:
        "What is the difference between insertOne() and insertMany()?",
      answer:
        "insertOne() inserts a single document, while insertMany() inserts multiple documents in one operation.",
      tip:
        "Remember: insertOne = one document, insertMany = multiple documents."
    },

    tricky: {
      question:
        "Do you need to manually provide _id for every document?",
      answer:
        "No. MongoDB automatically generates a unique _id value when you do not provide one."
    },

    practice: {
      question:
        "Insert one student using insertOne() and three students using insertMany().",
      hint:
        "After inserting the documents, use db.students.find() to verify them."
    },

    challenge: {
      title: "Build a Student Collection",
      description:
        "Create a students collection and populate it with student documents.",
      task:
        "Insert at least five student documents using insertOne() and insertMany(), then retrieve them using find()."
    }
  },

  
    "documents": {
    concept: {
      heading: "Documents",
      paragraphs: [
        "A document is the basic unit of data in MongoDB. It stores related information in a JSON-like structure using field and value pairs.",
        "MongoDB documents are stored in BSON format internally. A document can contain strings, numbers, arrays, nested objects and other supported data types.",
        "Documents inside the same collection do not have to contain exactly the same fields, which gives MongoDB a flexible data model."
      ],
      remember:
        "MongoDB stores data as documents. A document contains fields and values."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📄",
          title: "Document",
          text: "Think of a document as one student admission form containing all information about a student."
        },
        {
          icon: "🏷️",
          title: "Field",
          text: "A field is one piece of information, such as name, age or course."
        },
        {
          icon: "📚",
          title: "Collection",
          text: "A collection contains many related documents, such as many student records."
        }
      ]
    },

    visual: {
      heading: "Document Structure",
      description:
        "A MongoDB document contains fields and their corresponding values.",
      steps: [
        {
          icon: "1️⃣",
          title: "Document",
          text: "Create an object representing one record."
        },
        {
          icon: "2️⃣",
          title: "Fields",
          text: "Add meaningful fields such as name, age and course."
        },
        {
          icon: "3️⃣",
          title: "Values",
          text: "Assign values to each field."
        },
        {
          icon: "4️⃣",
          title: "Store",
          text: "Save the document inside a MongoDB collection."
        }
      ],
      flow: "Collection → Document → Fields → Values"
    },

    code: {
      title: "Example MongoDB Document",
      description:
        "The following document represents a student record.",
      language: "javascript",
      code: `{
  name: "Rahul",
  age: 20,
  course: "MERN",
  skills: ["HTML", "JavaScript", "React"]
}`,
      output: `Document stored in MongoDB`,
      explanation:
        "The document contains string, number and array values. MongoDB allows documents to contain different types of data."
    },

    interview: {
      question: "What is a document in MongoDB?",
      answer:
        "A document is the basic unit of data in MongoDB. It contains field-value pairs and is stored inside a collection.",
      tip: "Remember: SQL uses rows, while MongoDB uses documents."
    },

    tricky: {
      question: "Must all documents in a MongoDB collection have exactly the same fields?",
      answer:
        "No. MongoDB has a flexible document model, so documents in the same collection can have different fields."
    },

    practice: {
      question:
        "Create a MongoDB document containing name, age, city and skills.",
      hint:
        "Use a JavaScript-style object with field-value pairs."
    },
challenge: {
  title: "Create a Student Document",
  description:
    "Create a student document containing personal information, course information and an array of skills.",
  task:
    "Create the document in MongoDB and verify that it is stored correctly."
}
  },

  "collections": {
    concept: {
      heading: "Collections",
      paragraphs: [
        "A collection is a group of MongoDB documents. It is broadly similar to a table in a relational database.",
        "Collections help organize related documents. For example, a college database can contain students, teachers and courses collections.",
        "MongoDB collections can contain flexible documents, so documents do not necessarily need to have an identical structure."
      ],
      remember:
        "A collection stores related MongoDB documents."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🗄️",
          title: "Collection",
          text: "Think of a collection as a filing cabinet."
        },
        {
          icon: "📄",
          title: "Documents",
          text: "Each document is like one file stored inside the cabinet."
        },
        {
          icon: "🏷️",
          title: "Organization",
          text: "Different cabinets can store different categories of information."
        }
      ]
    },

    visual: {
      heading: "MongoDB Data Organization",
      description:
        "MongoDB organizes data using databases, collections and documents.",
      steps: [
        {
          icon: "1️⃣",
          title: "Database",
          text: "The database contains related collections."
        },
        {
          icon: "2️⃣",
          title: "Collection",
          text: "A collection contains related documents."
        },
        {
          icon: "3️⃣",
          title: "Document",
          text: "Each document represents one record."
        },
        {
          icon: "4️⃣",
          title: "Fields",
          text: "Fields contain individual pieces of information."
        }
      ],
      flow: "Database → Collection → Document → Fields"
    },

    code: {
      title: "Create a Collection",
      description:
        "A collection can be explicitly created using createCollection().",
      language: "javascript",
      code: `db.createCollection("students")`,
      output: `{ ok: 1 }`,
      explanation:
        "This command creates a collection named students in the current database."
    },

    interview: {
      question: "What is a collection in MongoDB?",
      answer:
        "A collection is a group of related MongoDB documents and is broadly comparable to a table in SQL.",
      tip: "Collection → Documents → Fields."
    },

    tricky: {
      question: "Can two documents in the same collection have different fields?",
      answer:
        "Yes. MongoDB supports a flexible document structure."
    },

    practice: {
      question:
        "Create a collection named courses in your MongoDB database.",
      hint:
        "Use db.createCollection() in MongoDB Shell."
    },

    challenge: {
  title: "Design a College Database",
  description:
    "Create students, teachers and courses collections and decide what type of documents each collection should contain.",
  task:
    "Create students, teachers and courses collections in MongoDB and explain what type of documents each collection should contain."
}
  },

  "bson": {
    concept: {
      heading: "BSON",
      paragraphs: [
        "BSON stands for Binary JSON. MongoDB uses BSON to store documents internally.",
        "BSON is similar to JSON in structure but supports additional data types that are useful for database operations, such as ObjectId and Date.",
        "When developers work with MongoDB documents, they usually see a JSON-like representation while MongoDB handles the BSON representation internally."
      ],
      remember:
        "BSON means Binary JSON and is the format MongoDB uses to store documents."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📝",
          title: "JSON",
          text: "Think of JSON as an easy-to-read representation of structured data."
        },
        {
          icon: "⚙️",
          title: "BSON",
          text: "BSON is the database-oriented binary representation MongoDB uses internally."
        },
        {
          icon: "🗃️",
          title: "Database Storage",
          text: "MongoDB uses BSON to efficiently represent and store documents."
        }
      ]
    },

    visual: {
      heading: "JSON and BSON",
      description:
        "MongoDB documents look similar to JSON but are stored using BSON.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Data",
          text: "Developers create JSON-like documents."
        },
        {
          icon: "2️⃣",
          title: "MongoDB Processes",
          text: "MongoDB works with the document using BSON."
        },
        {
          icon: "3️⃣",
          title: "Additional Types",
          text: "BSON supports types such as ObjectId and Date."
        },
        {
          icon: "4️⃣",
          title: "Storage",
          text: "The document is stored in BSON representation."
        }
      ],
      flow: "JSON-like Document → BSON Representation → MongoDB Storage"
    },

    code: {
      title: "JSON-like MongoDB Document",
      description:
        "A MongoDB document is commonly represented in a JSON-like format.",
      language: "javascript",
      code: `{
  name: "Rahul",
  age: 20,
  active: true
}`,
      output: "MongoDB stores the document using BSON",
      explanation:
        "The syntax looks similar to JSON, but MongoDB uses BSON internally to represent stored documents."
    },

    interview: {
      question: "What is BSON?",
      answer:
        "BSON stands for Binary JSON. It is the binary-encoded serialization format MongoDB uses to store documents.",
      tip: "BSON is not simply JSON; it also supports additional data types."
    },

    tricky: {
      question: "Is BSON exactly the same as JSON?",
      answer:
        "No. BSON is designed for MongoDB document storage and supports additional data types such as ObjectId and Date."
    },

    practice: {
      question:
        "Write a JSON-like MongoDB document containing a name, date and active status.",
      hint:
        "Think about which values would benefit from BSON-supported types."
    },

  challenge: {
  title: "Understand BSON",
  description:
    "Create three MongoDB documents using different data types and identify which values can benefit from BSON-specific types.",
  task:
    "Create three MongoDB documents using different data types and identify the BSON-supported data types used in each document."
}
  },

  "mongodb-data-types": {
    concept: {
      heading: "MongoDB Data Types",
      paragraphs: [
        "MongoDB supports multiple data types for storing different kinds of information inside documents.",
        "Common types include String, Number, Boolean, Array, Object, Date, Null and ObjectId.",
        "Choosing an appropriate data type helps keep your database data meaningful and easier to query."
      ],
      remember:
        "MongoDB supports many data types, including String, Number, Boolean, Array, Object, Date and ObjectId."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🔤",
          title: "String",
          text: "Used for text such as names and city names."
        },
        {
          icon: "🔢",
          title: "Number",
          text: "Used for values such as age, price and quantity."
        },
        {
          icon: "📦",
          title: "Array",
          text: "Used when one field needs to store multiple values."
        }
      ]
    },

    visual: {
      heading: "Common MongoDB Data Types",
      description:
        "Different fields can use different data types depending on the information being stored.",
      steps: [
        {
          icon: "🔤",
          title: "String",
          text: "Stores text values."
        },
        {
          icon: "🔢",
          title: "Number",
          text: "Stores numeric values."
        },
        {
          icon: "✅",
          title: "Boolean",
          text: "Stores true or false."
        },
        {
          icon: "📅",
          title: "Date",
          text: "Stores date and time information."
        }
      ],
      flow: "Field → Data Type → Value → MongoDB Document"
    },

    code: {
      title: "Different Data Types",
      description:
        "A single MongoDB document can contain multiple data types.",
      language: "javascript",
      code: `{
  name: "Rahul",
  age: 20,
  active: true,
  skills: ["React", "Node.js"],
  address: {
    city: "Delhi"
  }
}`,
      output: "Document with multiple data types",
      explanation:
        "The document contains String, Number, Boolean, Array and nested Object values."
    },

    interview: {
      question: "Name some common MongoDB data types.",
      answer:
        "Common MongoDB data types include String, Number, Boolean, Array, Object, Date, Null and ObjectId.",
      tip: "Be comfortable identifying the type of each field in a MongoDB document."
    },

    tricky: {
      question: "Can one MongoDB document contain different data types?",
      answer:
        "Yes. Different fields within the same document can contain different data types."
    },

    practice: {
      question:
        "Create a document using String, Number, Boolean, Array and Object values.",
      hint:
        "Use a student document as your example."
    },

    challenge: {
  title: "Build a Mixed-Type Document",
  description:
    "Create a product document containing name, price, available status, categories array and a nested supplier object.",
  task:
    "Create the product document in MongoDB and identify the data type of each field."
}
  },

  "mongodb-id-objectid": {
    concept: {
      heading: "_id and ObjectId",
      paragraphs: [
        "Every MongoDB document normally has a unique _id field. This field identifies the document inside its collection.",
        "If you insert a document without specifying _id, MongoDB automatically generates an ObjectId.",
        "ObjectId is commonly used as the default identifier because it provides a unique value suitable for identifying documents."
      ],
      remember:
        "The _id field identifies a MongoDB document. MongoDB commonly generates an ObjectId automatically."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🪪",
          title: "ID Card",
          text: "An _id is like a unique ID number assigned to one person."
        },
        {
          icon: "🔑",
          title: "Unique Identifier",
          text: "It helps MongoDB distinguish one document from another."
        },
        {
          icon: "📄",
          title: "Document",
          text: "Each stored document normally has its own _id."
        }
      ]
    },

    visual: {
      heading: "_id and ObjectId Flow",
      description:
        "MongoDB can automatically generate an identifier when a document is inserted.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Document",
          text: "Create a document without an _id."
        },
        {
          icon: "2️⃣",
          title: "Insert",
          text: "Insert the document into a collection."
        },
        {
          icon: "3️⃣",
          title: "Generate ID",
          text: "MongoDB generates an ObjectId."
        },
        {
          icon: "4️⃣",
          title: "Store",
          text: "The _id is stored with the document."
        }
      ],
      flow: "Document → Insert → ObjectId → _id → Stored Document"
    },

    code: {
      title: "Automatic ObjectId",
      description:
        "MongoDB generates an ObjectId when _id is not provided.",
      language: "javascript",
      code: `db.students.insertOne({
  name: "Rahul",
  course: "MERN"
})`,
      output: `{
  acknowledged: true,
  insertedId: ObjectId("...")
}`,
      explanation:
        "The insertedId represents the automatically generated identifier for the new document."
    },

    interview: {
      question: "What is ObjectId in MongoDB?",
      answer:
        "ObjectId is a commonly used MongoDB identifier type. MongoDB can automatically generate an ObjectId for the _id field of a new document.",
      tip: "Remember the relationship: _id is the field, ObjectId is one common value type used for it."
    },

    tricky: {
      question: "Is _id always an ObjectId?",
      answer:
        "No. MongoDB requires an _id field for documents, but the value can use different supported types. ObjectId is the common default when MongoDB generates it automatically."
    },

    practice: {
      question:
        "Insert a document without specifying _id and inspect the generated _id.",
      hint:
        "Use insertOne() and then examine the inserted document."
    },
challenge: {
  title: "Explore ObjectId",
  description:
    "Insert three documents and compare their generated _id values. Observe how each document receives a different identifier.",
  task:
    "Insert three documents without providing _id and inspect the automatically generated ObjectId values."
}
  },

  "embedded-documents": {
    concept: {
      heading: "Embedded Documents",
      paragraphs: [
        "An embedded document is a document stored inside another MongoDB document.",
        "Embedding is useful when related information is naturally part of the parent document and is usually accessed together.",
        "For example, a student document can contain an embedded address object containing city, state and postal code."
      ],
      remember:
        "Embedded documents allow related data to be stored as nested objects inside a parent document."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📦",
          title: "Main Package",
          text: "The main document is like a package containing related information."
        },
        {
          icon: "📄",
          title: "Nested Document",
          text: "An embedded document is like a smaller document placed inside the main package."
        },
        {
          icon: "🏠",
          title: "Address",
          text: "An address can naturally belong inside a student or customer document."
        }
      ]
    },

    visual: {
      heading: "Embedded Document Structure",
      description:
        "Related information can be represented as a nested object.",
      steps: [
        {
          icon: "1️⃣",
          title: "Parent Document",
          text: "Create the main document."
        },
        {
          icon: "2️⃣",
          title: "Nested Object",
          text: "Add a related object as a field."
        },
        {
          icon: "3️⃣",
          title: "Nested Fields",
          text: "Add fields inside the embedded object."
        },
        {
          icon: "4️⃣",
          title: "Store",
          text: "MongoDB stores the nested structure as part of the document."
        }
      ],
      flow: "Parent Document → Embedded Object → Nested Fields"
    },

    code: {
      title: "Embedded Address",
      description:
        "The address object is embedded inside the student document.",
      language: "javascript",
      code: `{
  name: "Rahul",
  course: "MERN",
  address: {
    city: "Delhi",
    state: "Delhi",
    pincode: 110001
  }
}`,
      output: "Student document with embedded address",
      explanation:
        "The address is stored inside the student document instead of being stored as a separate document."
    },

    interview: {
      question: "What is an embedded document?",
      answer:
        "An embedded document is a nested document stored inside another MongoDB document.",
      tip: "Embedding is useful when related information belongs closely to the parent document."
    },

    tricky: {
      question: "Does an embedded document need its own collection?",
      answer:
        "No. An embedded document is stored inside its parent document and does not require a separate collection."
    },

    practice: {
      question:
        "Create a customer document with an embedded address object.",
      hint:
        "Create an address field containing city, state and pincode."
    },

    challenge: {
  title: "Create an Embedded Profile",
  description:
    "Create a student document with an embedded address and an embedded education object.",
  task:
    "Create the student document in MongoDB with address and education as embedded objects."
}
  },

  "arrays": {
    concept: {
      heading: "Arrays",
      paragraphs: [
        "MongoDB supports arrays as field values. An array can contain multiple values inside a single document.",
        "Arrays are useful for information such as skills, tags, categories, phone numbers or course names.",
        "MongoDB also provides query and update features for working with array values."
      ],
      remember:
        "Arrays allow a MongoDB document to store multiple related values inside one field."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📋",
          title: "List",
          text: "An array is like a list containing multiple related items."
        },
        {
          icon: "🎯",
          title: "Skills",
          text: "A developer can have multiple skills stored inside a skills array."
        },
        {
          icon: "🏷️",
          title: "Tags",
          text: "A blog post can contain multiple tags inside one tags field."
        }
      ]
    },

    visual: {
      heading: "Array Structure",
      description:
        "An array stores multiple values inside one field.",
      steps: [
        {
          icon: "1️⃣",
          title: "Field",
          text: "Create a field such as skills."
        },
        {
          icon: "2️⃣",
          title: "Array",
          text: "Assign multiple values to the field."
        },
        {
          icon: "3️⃣",
          title: "Store",
          text: "MongoDB stores the array inside the document."
        },
        {
          icon: "4️⃣",
          title: "Query",
          text: "MongoDB can query documents based on array values."
        }
      ],
      flow: "Document → Array Field → Multiple Values"
    },

    code: {
      title: "Array Example",
      description:
        "A student can have multiple skills stored in an array.",
      language: "javascript",
      code: `{
  name: "Rahul",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]
}`,
      output: "Document containing a skills array",
      explanation:
        "The skills field contains multiple string values inside one array."
    },

    interview: {
      question: "Why are arrays used in MongoDB?",
      answer:
        "Arrays allow multiple related values to be stored inside a single document field.",
      tip: "Common examples include skills, tags, categories and phone numbers."
    },

    tricky: {
      question: "Can a MongoDB array contain objects?",
      answer:
        "Yes. MongoDB arrays can contain values such as strings, numbers and nested objects."
    },

    practice: {
      question:
        "Create a product document with a categories array containing three categories.",
      hint:
        "Use square brackets to define the array."
    },

challenge: {
  title: "Create a Student Document",
  description:
    "Create a student document containing personal information, course information and an array of skills.",
  task:
    "Create the document in MongoDB and verify that it is stored correctly."
}
  },
    // ============================================================
  // CRUD OPERATIONS
  // ============================================================

  "insert-one": {
    concept: {
      heading: "insertOne()",
      paragraphs: [
        "The insertOne() method is used to insert a single document into a MongoDB collection.",
        "A document contains fields and values and is stored inside a collection.",
        "If the _id field is not provided, MongoDB automatically generates a unique ObjectId for the document."
      ],
      remember:
        "insertOne() is used when you want to insert one document into a MongoDB collection."
    },

    analogy: {
      heading: "Think of Adding One Student",
      items: [
        {
          icon: "👤",
          title: "One Student",
          text: "Suppose you want to add only one student to the students collection."
        },
        {
          icon: "📄",
          title: "Create Document",
          text: "The student's information is represented as a MongoDB document."
        },
        {
          icon: "➕",
          title: "Insert",
          text: "insertOne() adds that single document to the collection."
        }
      ]
    },

    visual: {
      heading: "How insertOne() Works",
      description:
        "The insertOne() method takes one document and stores it inside the selected collection.",
      steps: [
        {
          icon: "1️⃣",
          title: "Select Database",
          text: "Select the database that contains the collection."
        },
        {
          icon: "2️⃣",
          title: "Select Collection",
          text: "Choose the collection where the document should be stored."
        },
        {
          icon: "3️⃣",
          title: "Create Document",
          text: "Create an object containing the required fields and values."
        },
        {
          icon: "4️⃣",
          title: "Insert",
          text: "Use insertOne() to store the document."
        }
      ],
      flow:
        "Database → Collection → Document → insertOne() → Stored Document"
    },

    code: {
      title: "Insert One Student",
      description:
        "Insert a single student document into the students collection.",
      language: "javascript",
      code: `use school

db.students.insertOne({
  name: "Rahul",
  age: 22,
  course: "MERN Stack"
})`,
      output:
        "MongoDB returns an acknowledgement and an insertedId for the newly inserted document.",
      explanation:
        "insertOne() accepts one document. MongoDB stores the document and automatically generates _id if it was not provided."
    },

    interview: {
      question: "What is insertOne() in MongoDB?",
      answer:
        "insertOne() is a MongoDB method used to insert a single document into a collection.",
      tip:
        "Remember: insertOne() = one document."
    },

    tricky: {
      question: "What happens if _id is not provided?",
      answer:
        "MongoDB automatically generates a unique _id value for the document."
    },

    practice: {
      question:
        "Insert one student document containing name, age and course.",
      hint:
        "Use db.students.insertOne({ name: ..., age: ..., course: ... })."
    },

    challenge: {
      title: "Insert a Student",
      description:
        "Practice inserting one document into a MongoDB collection.",
      task:
        "Create a students collection and insert one student document using insertOne(). Then use find() to verify the document."
    }
  },

  "insert-many": {
    concept: {
      heading: "insertMany()",
      paragraphs: [
        "The insertMany() method is used to insert multiple documents into a MongoDB collection.",
        "It accepts an array of documents and inserts them into the selected collection.",
        "insertMany() is useful when several records need to be added together."
      ],
      remember:
        "insertMany() is used to insert multiple documents at once."
    },

    analogy: {
      heading: "Think of Adding Multiple Students",
      items: [
        {
          icon: "👥",
          title: "Multiple Students",
          text: "Suppose a school wants to add many student records at the same time."
        },
        {
          icon: "📚",
          title: "Document List",
          text: "Each student is represented by a separate document inside an array."
        },
        {
          icon: "➕",
          title: "Insert Many",
          text: "insertMany() stores all the documents in the collection."
        }
      ]
    },

    visual: {
      heading: "How insertMany() Works",
      description:
        "insertMany() accepts an array containing multiple MongoDB documents.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Documents",
          text: "Create multiple objects representing different records."
        },
        {
          icon: "2️⃣",
          title: "Create Array",
          text: "Place the documents inside an array."
        },
        {
          icon: "3️⃣",
          title: "Call insertMany()",
          text: "Pass the array to insertMany()."
        },
        {
          icon: "4️⃣",
          title: "Documents Stored",
          text: "MongoDB inserts the documents into the collection."
        }
      ],
      flow:
        "Documents → Array → insertMany() → MongoDB Collection"
    },

    code: {
      title: "Insert Multiple Students",
      description:
        "Insert multiple student documents into the students collection.",
      language: "javascript",
      code: `use school

db.students.insertMany([
  {
    name: "Rahul",
    age: 22,
    course: "MERN Stack"
  },
  {
    name: "Aman",
    age: 21,
    course: "JavaScript"
  },
  {
    name: "Neha",
    age: 23,
    course: "React"
  }
])`,
      output:
        "MongoDB returns the insertedIds of the documents that were added.",
      explanation:
        "insertMany() receives an array of documents and inserts all of them into the selected collection."
    },

    interview: {
      question: "What is insertMany()?",
      answer:
        "insertMany() is a MongoDB method used to insert multiple documents into a collection in a single operation.",
      tip:
        "Remember: insertOne() handles one document, while insertMany() handles multiple documents."
    },

    tricky: {
      question: "What type of value does insertMany() accept?",
      answer:
        "insertMany() accepts an array of documents."
    },

    practice: {
      question:
        "Insert five student documents using insertMany().",
      hint:
        "Create an array containing five student objects and pass it to db.students.insertMany()."
    },

    challenge: {
      title: "Insert Multiple Students",
      description:
        "Practice inserting several documents in one operation.",
      task:
        "Create an array containing at least five student documents and insert all of them using insertMany()."
    }
  },

  "find": {
    concept: {
      heading: "find()",
      paragraphs: [
        "The find() method is used to retrieve documents from a MongoDB collection.",
        "When find() is used without a filter, MongoDB returns documents from the collection.",
        "You can also provide a query condition to retrieve only matching documents."
      ],
      remember:
        "find() is used to retrieve documents from a MongoDB collection."
    },

    analogy: {
      heading: "Think of Searching a Register",
      items: [
        {
          icon: "📖",
          title: "Collection",
          text: "A MongoDB collection can be compared to a large register."
        },
        {
          icon: "🔍",
          title: "Search",
          text: "find() allows you to search through the documents in the collection."
        },
        {
          icon: "📄",
          title: "Results",
          text: "MongoDB returns the documents that match the query."
        }
      ]
    },

    visual: {
      heading: "How find() Works",
      description:
        "find() can return all documents or only documents matching a condition.",
      steps: [
        {
          icon: "1️⃣",
          title: "Select Collection",
          text: "Choose the collection you want to search."
        },
        {
          icon: "2️⃣",
          title: "Provide Query",
          text: "Optionally provide a filter condition."
        },
        {
          icon: "3️⃣",
          title: "MongoDB Searches",
          text: "MongoDB checks documents against the query."
        },
        {
          icon: "4️⃣",
          title: "Get Results",
          text: "Matching documents are returned."
        }
      ],
      flow:
        "Collection → Query → MongoDB Search → Matching Documents"
    },

    code: {
      title: "Find Documents",
      description:
        "Retrieve all students and then retrieve students from a particular course.",
      language: "javascript",
      code: `// Find all students
db.students.find()

// Find students from MERN Stack
db.students.find({
  course: "MERN Stack"
})`,
      output:
        "The first query returns all student documents. The second query returns only students whose course is MERN Stack.",
      explanation:
        "find() accepts an optional query object. An empty query returns documents from the collection, while a query with conditions filters the results."
    },

    interview: {
      question: "What is the purpose of find() in MongoDB?",
      answer:
        "find() is used to retrieve documents from a MongoDB collection, optionally using query conditions.",
      tip:
        "find({}) can be used when you want to retrieve documents without a filter."
    },

    tricky: {
      question: "What does db.students.find() return?",
      answer:
        "It returns the documents in the students collection rather than inserting or modifying data."
    },

    practice: {
      question:
        "Retrieve all documents from the students collection and then find students whose course is React.",
      hint:
        'Use db.students.find() and db.students.find({ course: "React" }).'
    },

    challenge: {
      title: "Search Student Records",
      description:
        "Practice retrieving documents using find().",
      task:
        "Create several student documents and use find() to retrieve all students and then retrieve only students belonging to a specific course."
    }
  },

  "find-one": {
    concept: {
      heading: "findOne()",
      paragraphs: [
        "The findOne() method is used to retrieve a single document from a MongoDB collection.",
        "It accepts an optional query object and returns the first document that matches the condition.",
        "findOne() is useful when the application needs one matching record instead of a list of documents."
      ],
      remember:
        "findOne() returns one matching document."
    },

    analogy: {
      heading: "Think of Finding One Student",
      items: [
        {
          icon: "🔎",
          title: "Search",
          text: "You search the student register using a condition."
        },
        {
          icon: "👤",
          title: "One Result",
          text: "You need only one matching student record."
        },
        {
          icon: "📄",
          title: "Document",
          text: "findOne() returns one matching MongoDB document."
        }
      ]
    },

    visual: {
      heading: "How findOne() Works",
      description:
        "findOne() searches a collection and returns one matching document.",
      steps: [
        {
          icon: "1️⃣",
          title: "Provide Condition",
          text: "Specify the field and value you want to search for."
        },
        {
          icon: "2️⃣",
          title: "MongoDB Searches",
          text: "MongoDB checks the collection for matching documents."
        },
        {
          icon: "3️⃣",
          title: "First Match",
          text: "MongoDB returns the first matching document."
        },
        {
          icon: "4️⃣",
          title: "No Match",
          text: "If no document matches, the result is null."
        }
      ],
      flow:
        "Query → Search Collection → First Matching Document → Result"
    },

    code: {
      title: "Find One Student",
      description:
        "Retrieve one student whose name matches the query.",
      language: "javascript",
      code: `db.students.findOne({
  name: "Rahul"
})`,
      output:
        "MongoDB returns one matching student document. If no matching document exists, the result is null.",
      explanation:
        "findOne() searches for a matching document and returns one document instead of a list of documents."
    },

    interview: {
      question: "What is the difference between find() and findOne()?",
      answer:
        "find() is used to retrieve multiple matching documents, while findOne() returns one matching document.",
      tip:
        "find() = multiple results, findOne() = one result."
    },

    tricky: {
      question: "What happens if multiple documents match findOne()?",
      answer:
        "findOne() returns only one matching document."
    },

    practice: {
      question:
        "Find one student whose course is MERN Stack.",
      hint:
        'Use db.students.findOne({ course: "MERN Stack" }).'
    },

    challenge: {
      title: "Find One Record",
      description:
        "Practice retrieving a single document from MongoDB.",
      task:
        "Create multiple student documents and use findOne() to retrieve one student based on a field such as name or course."
    }
  },

  "update-one": {
    concept: {
      heading: "updateOne()",
      paragraphs: [
        "The updateOne() method is used to update the first document that matches a query condition.",
        "MongoDB commonly uses the $set operator to change the value of specific fields.",
        "The original document is modified while fields that are not included in the update remain unchanged."
      ],
      remember:
        "updateOne() updates the first document that matches the filter."
    },

    analogy: {
      heading: "Think of Updating One Student Record",
      items: [
        {
          icon: "🔍",
          title: "Find",
          text: "First find a student using a condition."
        },
        {
          icon: "✏️",
          title: "Change",
          text: "Change one or more fields of that student."
        },
        {
          icon: "💾",
          title: "Save",
          text: "MongoDB stores the updated values in the document."
        }
      ]
    },

    visual: {
      heading: "How updateOne() Works",
      description:
        "updateOne() uses a filter and an update operation.",
      steps: [
        {
          icon: "1️⃣",
          title: "Filter",
          text: "Specify which document should be updated."
        },
        {
          icon: "2️⃣",
          title: "Update",
          text: "Use an update operator such as $set."
        },
        {
          icon: "3️⃣",
          title: "MongoDB Updates",
          text: "MongoDB updates the first matching document."
        },
        {
          icon: "4️⃣",
          title: "Verify",
          text: "Use findOne() or find() to verify the updated data."
        }
      ],
      flow:
        "Filter → Update Operator → First Match Updated → Verify"
    },

    code: {
      title: "Update One Student",
      description:
        "Update the course of one student.",
      language: "javascript",
      code: `db.students.updateOne(
  { name: "Rahul" },
  {
    $set: {
      course: "Full Stack Development"
    }
  }
)`,
      output:
        "MongoDB reports the number of matched and modified documents.",
      explanation:
        "The first object is the filter. The second object contains the update operation. $set changes only the specified field."
    },

    interview: {
      question: "What is updateOne()?",
      answer:
        "updateOne() updates the first document that matches a specified filter.",
      tip:
        "Use $set when you want to change the value of an existing field."
    },

    tricky: {
      question: "What happens if several documents match updateOne()?",
      answer:
        "Only the first matching document is updated."
    },

    practice: {
      question:
        "Update the age of one student using updateOne().",
      hint:
        "Use a filter such as { name: \"Rahul\" } and $set to change age."
    },

    challenge: {
      title: "Update a Student Record",
      description:
        "Practice changing selected fields in one MongoDB document.",
      task:
        "Create a student document and use updateOne() with $set to change the student's course and age."
    }
  },

  "update-many": {
    concept: {
      heading: "updateMany()",
      paragraphs: [
        "The updateMany() method is used to update all documents that match a specified filter.",
        "It is useful when the same change needs to be applied to multiple documents.",
        "The $set operator can be used to update specific fields in all matching documents."
      ],
      remember:
        "updateMany() updates every document that matches the filter."
    },

    analogy: {
      heading: "Think of Updating a Group",
      items: [
        {
          icon: "👥",
          title: "Group",
          text: "Suppose several students belong to the same course."
        },
        {
          icon: "✏️",
          title: "Common Change",
          text: "You want to update the same field for all of them."
        },
        {
          icon: "🔄",
          title: "Update Many",
          text: "updateMany() applies the change to every matching document."
        }
      ]
    },

    visual: {
      heading: "How updateMany() Works",
      description:
        "updateMany() applies an update operation to every document that matches the filter.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Filter",
          text: "Specify the documents that should be updated."
        },
        {
          icon: "2️⃣",
          title: "Create Update",
          text: "Specify the field and value that should change."
        },
        {
          icon: "3️⃣",
          title: "Match Documents",
          text: "MongoDB finds every document matching the filter."
        },
        {
          icon: "4️⃣",
          title: "Update All",
          text: "The update is applied to all matching documents."
        }
      ],
      flow:
        "Filter → Find All Matches → Apply Update → Multiple Documents Updated"
    },

    code: {
      title: "Update Multiple Students",
      description:
        "Update the status of all students enrolled in a particular course.",
      language: "javascript",
      code: `db.students.updateMany(
  { course: "MERN Stack" },
  {
    $set: {
      status: "Active"
    }
  }
)`,
      output:
        "MongoDB reports how many documents matched the filter and how many were modified.",
      explanation:
        "Every document whose course is MERN Stack receives the status field with the value Active."
    },

    interview: {
      question: "What is updateMany()?",
      answer:
        "updateMany() updates all documents that match a specified filter.",
      tip:
        "Use updateMany() carefully because it can modify many records."
    },

    tricky: {
      question: "Can updateMany() modify more than one document?",
      answer:
        "Yes. It updates every document that matches the filter."
    },

    practice: {
      question:
        "Add a status field to all students whose course is React.",
      hint:
        'Use updateMany({ course: "React" }, { $set: { status: "Active" } }).'
    },

    challenge: {
      title: "Update a Group of Students",
      description:
        "Practice updating multiple documents using one filter.",
      task:
        "Create several students with the same course and use updateMany() to add or change a common field for all matching students."
    }
  },

  "delete-one": {
    concept: {
      heading: "deleteOne()",
      paragraphs: [
        "The deleteOne() method is used to delete the first document that matches a specified filter.",
        "It permanently removes the matching document from the collection.",
        "A filter should be used carefully because deleting data is a destructive operation."
      ],
      remember:
        "deleteOne() deletes the first document that matches the filter."
    },

    analogy: {
      heading: "Think of Removing One Record",
      items: [
        {
          icon: "🔍",
          title: "Find",
          text: "Find the record that needs to be removed."
        },
        {
          icon: "🗑️",
          title: "Delete",
          text: "Remove the matching document from the collection."
        },
        {
          icon: "⚠️",
          title: "Be Careful",
          text: "Deletion permanently removes the document from the collection."
        }
      ]
    },

    visual: {
      heading: "How deleteOne() Works",
      description:
        "deleteOne() removes one document matching the specified filter.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Filter",
          text: "Specify which document should be deleted."
        },
        {
          icon: "2️⃣",
          title: "MongoDB Searches",
          text: "MongoDB looks for a matching document."
        },
        {
          icon: "3️⃣",
          title: "First Match",
          text: "The first matching document is selected."
        },
        {
          icon: "4️⃣",
          title: "Delete",
          text: "The selected document is removed."
        }
      ],
      flow:
        "Filter → Find Match → Select First Document → Delete"
    },

    code: {
      title: "Delete One Student",
      description:
        "Delete one student based on a filter.",
      language: "javascript",
      code: `db.students.deleteOne({
  name: "Rahul"
})`,
      output:
        "MongoDB reports the number of documents deleted.",
      explanation:
        "deleteOne() searches for a matching document and deletes the first match."
    },

    interview: {
      question: "What does deleteOne() do?",
      answer:
        "deleteOne() deletes the first document that matches the specified filter.",
      tip:
        "Always verify your filter before performing a delete operation."
    },

    tricky: {
      question: "What happens if multiple documents match deleteOne()?",
      answer:
        "Only the first matching document is deleted."
    },

    practice: {
      question:
        "Delete one student whose name matches a given value.",
      hint:
        'Use db.students.deleteOne({ name: "Rahul" }).'
    },

    challenge: {
      title: "Delete One Record",
      description:
        "Practice safely deleting one document from a collection.",
      task:
        "Create at least three student documents and use deleteOne() to remove one selected student. Then use find() to verify the remaining documents."
    }
  },

  "delete-many": {
    concept: {
      heading: "deleteMany()",
      paragraphs: [
        "The deleteMany() method is used to delete all documents that match a specified filter.",
        "It is useful when multiple documents need to be removed based on the same condition.",
        "Because deleteMany() can remove many records at once, the filter should always be checked carefully before execution."
      ],
      remember:
        "deleteMany() deletes every document that matches the filter."
    },

    analogy: {
      heading: "Think of Removing a Group",
      items: [
        {
          icon: "👥",
          title: "Group of Records",
          text: "Several documents may match the same condition."
        },
        {
          icon: "🔎",
          title: "Filter",
          text: "The filter identifies the documents that should be removed."
        },
        {
          icon: "🗑️",
          title: "Delete Many",
          text: "deleteMany() removes all matching documents."
        }
      ]
    },

    visual: {
      heading: "How deleteMany() Works",
      description:
        "deleteMany() removes every document that matches the specified filter.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Filter",
          text: "Define the condition for documents that should be deleted."
        },
        {
          icon: "2️⃣",
          title: "Find Matches",
          text: "MongoDB finds every document matching the filter."
        },
        {
          icon: "3️⃣",
          title: "Delete Matches",
          text: "All matching documents are removed."
        },
        {
          icon: "4️⃣",
          title: "Verify",
          text: "Use find() to check the remaining documents."
        }
      ],
      flow:
        "Filter → Find All Matches → Delete All Matches → Verify"
    },

    code: {
      title: "Delete Multiple Students",
      description:
        "Delete all students belonging to a particular course.",
      language: "javascript",
      code: `db.students.deleteMany({
  course: "JavaScript"
})`,
      output:
        "MongoDB reports the number of documents deleted.",
      explanation:
        "Every document whose course is JavaScript is removed from the students collection."
    },

    interview: {
      question: "What is deleteMany()?",
      answer:
        "deleteMany() deletes all documents that match a specified filter.",
      tip:
        "Use a precise filter because deleteMany() can remove multiple documents."
    },

    tricky: {
      question: "What can happen if deleteMany() is used with an empty filter?",
      answer:
        "An empty filter can match all documents in the collection, so deleteMany({}) can delete all documents from that collection."
    },

    practice: {
      question:
        "Delete all students whose status is Inactive.",
      hint:
        'Use db.students.deleteMany({ status: "Inactive" }).'
    },

    challenge: {
      title: "Clean Up Records",
      description:
        "Practice deleting multiple documents using a filter.",
      task:
        "Create several student documents with different statuses and use deleteMany() to remove all students whose status is Inactive. Verify the remaining records using find()."
    }
  },  // ============================================================
  // QUERY & OPERATORS
  // ============================================================

  "comparison-operators": {
    concept: {
      heading: "Comparison Operators",
      paragraphs: [
        "MongoDB comparison operators are used to compare field values with a specified value.",
        "Common comparison operators include $eq, $ne, $gt, $gte, $lt and $lte.",
        "These operators are useful when you need to retrieve documents based on conditions such as greater than, less than or equal to."
      ],
      remember:
        "$eq = equal, $ne = not equal, $gt = greater than, $gte = greater than or equal, $lt = less than, $lte = less than or equal."
    },

    analogy: {
      heading: "Think of Comparison Operators as Filters",
      items: [
        {
          icon: "🔍",
          title: "Find",
          text: "You want to find students based on a particular condition."
        },
        {
          icon: "⚖️",
          title: "Compare",
          text: "MongoDB compares the value stored in a field with the value in your query."
        },
        {
          icon: "✅",
          title: "Match",
          text: "Only documents satisfying the condition are returned."
        }
      ]
    },

    visual: {
      heading: "Comparison Operator Flow",
      description:
        "MongoDB evaluates the field value against the condition provided in the query.",
      steps: [
        {
          icon: "1️⃣",
          title: "Choose Field",
          text: "Select the field you want to compare."
        },
        {
          icon: "2️⃣",
          title: "Choose Operator",
          text: "Choose an operator such as $gt, $lt or $eq."
        },
        {
          icon: "3️⃣",
          title: "Provide Value",
          text: "Provide the value that should be compared."
        },
        {
          icon: "4️⃣",
          title: "Get Results",
          text: "MongoDB returns documents that satisfy the condition."
        }
      ],
      flow:
        "Field → Operator → Comparison Value → Matching Documents"
    },

    code: {
      title: "Comparison Operators Example",
      description:
        "Find students based on their age.",
      language: "javascript",
      code: `// Age greater than 20
db.students.find({
  age: { $gt: 20 }
})

// Age less than 25
db.students.find({
  age: { $lt: 25 }
})

// Age greater than or equal to 22
db.students.find({
  age: { $gte: 22 }
})

// Age less than or equal to 23
db.students.find({
  age: { $lte: 23 }
})`,
      output:
        "MongoDB returns only the student documents whose age satisfies each comparison condition.",
      explanation:
        "Comparison operators are placed inside the field condition. For example, { age: { $gt: 20 } } finds documents where age is greater than 20."
    },

    interview: {
      question: "What are comparison operators in MongoDB?",
      answer:
        "Comparison operators compare a field value with another value and return documents that satisfy the specified condition.",
      tip:
        "Remember the main operators: $eq, $ne, $gt, $gte, $lt and $lte."
    },

    tricky: {
      question: "What is the difference between $gt and $gte?",
      answer:
        "$gt means greater than, while $gte means greater than or equal to."
    },

    practice: {
      question:
        "Find students whose age is greater than 21 and students whose age is less than 25.",
      hint:
        "Use $gt for greater than and $lt for less than."
    },

    challenge: {
      title: "Filter Students by Age",
      description:
        "Practice using MongoDB comparison operators.",
      task:
        "Create student documents with different ages and write queries using $gt, $gte, $lt, $lte, $eq and $ne."
    }
  },

  "logical-operators": {
    concept: {
      heading: "Logical Operators",
      paragraphs: [
        "MongoDB logical operators are used to combine multiple query conditions.",
        "Common logical operators include $and, $or, $not and $nor.",
        "$and requires multiple conditions to be true, while $or returns documents when at least one condition is true."
      ],
      remember:
        "$and = all conditions, $or = any condition, $not = reverses a condition, $nor = none of the conditions."
    },

    analogy: {
      heading: "Think of Logical Operators as Rules",
      items: [
        {
          icon: "🤝",
          title: "$and",
          text: "All specified conditions must be satisfied."
        },
        {
          icon: "🔀",
          title: "$or",
          text: "At least one of the specified conditions must be satisfied."
        },
        {
          icon: "🚫",
          title: "$not",
          text: "The result of a condition is logically reversed."
        }
      ]
    },

    visual: {
      heading: "Logical Query Flow",
      description:
        "Logical operators allow multiple conditions to be combined in one query.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Conditions",
          text: "Define two or more conditions."
        },
        {
          icon: "2️⃣",
          title: "Choose Logical Operator",
          text: "Choose $and, $or, $not or $nor."
        },
        {
          icon: "3️⃣",
          title: "MongoDB Evaluates",
          text: "MongoDB evaluates the combined conditions."
        },
        {
          icon: "4️⃣",
          title: "Return Results",
          text: "Matching documents are returned."
        }
      ],
      flow:
        "Conditions → Logical Operator → Evaluation → Results"
    },

    code: {
      title: "Logical Operators Example",
      description:
        "Find students who satisfy multiple conditions.",
      language: "javascript",
      code: `// AND
db.students.find({
  $and: [
    { age: { $gte: 20 } },
    { course: "MERN Stack" }
  ]
})

// OR
db.students.find({
  $or: [
    { course: "React" },
    { course: "Node.js" }
  ]
})`,
      output:
        "$and returns students satisfying both conditions. $or returns students satisfying at least one condition.",
      explanation:
        "$and combines conditions that must all be true. $or combines conditions where at least one condition must be true."
    },

    interview: {
      question: "What is the difference between $and and $or?",
      answer:
        "$and requires all specified conditions to match, while $or requires at least one condition to match.",
      tip:
        "Remember: $and = all, $or = any."
    },

    tricky: {
      question: "Can $or contain more than two conditions?",
      answer:
        "Yes. $or can contain multiple query expressions."
    },

    practice: {
      question:
        "Find students who are at least 20 years old and belong to the MERN Stack course.",
      hint:
        "Use $and with age and course conditions."
    },

    challenge: {
      title: "Build Logical Queries",
      description:
        "Practice combining multiple MongoDB conditions.",
      task:
        "Create queries using $and and $or to find students based on age and course."
    }
  },

  "in-nin": {
    concept: {
      heading: "$in and $nin",
      paragraphs: [
        "$in is used when a field can match any value from a specified array.",
        "$nin is used when a field should not match any value from the specified array.",
        "These operators are useful when you want to compare a field against multiple possible values."
      ],
      remember:
        "$in matches any value in the list, while $nin excludes all values in the list."
    },

    analogy: {
      heading: "Think of a Selected List",
      items: [
        {
          icon: "📋",
          title: "Allowed Values",
          text: "$in lets you specify a list of accepted values."
        },
        {
          icon: "🚫",
          title: "Excluded Values",
          text: "$nin lets you specify values that should not match."
        },
        {
          icon: "🎯",
          title: "Target Records",
          text: "MongoDB returns documents according to the list."
        }
      ]
    },

    visual: {
      heading: "$in / $nin Flow",
      description:
        "Both operators compare a field against multiple values.",
      steps: [
        {
          icon: "1️⃣",
          title: "Choose Field",
          text: "Select the field you want to filter."
        },
        {
          icon: "2️⃣",
          title: "Create Value List",
          text: "Create an array of values."
        },
        {
          icon: "3️⃣",
          title: "Choose Operator",
          text: "Use $in or $nin."
        },
        {
          icon: "4️⃣",
          title: "Get Results",
          text: "MongoDB returns matching or excluded records."
        }
      ],
      flow:
        "Field → Value Array → $in / $nin → Results"
    },

    code: {
      title: "$in and $nin Example",
      description:
        "Find students belonging to selected courses.",
      language: "javascript",
      code: `// Students in React or Node.js
db.students.find({
  course: {
    $in: ["React", "Node.js"]
  }
})

// Students not in React or Node.js
db.students.find({
  course: {
    $nin: ["React", "Node.js"]
  }
})`,
      output:
        "$in returns students whose course is React or Node.js. $nin returns students whose course is neither React nor Node.js.",
      explanation:
        "$in is useful when several values should be accepted. $nin is useful when several values should be excluded."
    },

    interview: {
      question: "What is the purpose of $in in MongoDB?",
      answer:
        "$in matches documents where a field contains any value from a specified array.",
      tip:
        "Use $in when you have multiple acceptable values."
    },

    tricky: {
      question: "What is the difference between $in and $nin?",
      answer:
        "$in matches values contained in the specified list, while $nin excludes values contained in the list."
    },

    practice: {
      question:
        "Find students whose course is either JavaScript, React or Node.js.",
      hint:
        "Use the $in operator with an array containing the three course names."
    },

    challenge: {
      title: "Filter by Multiple Values",
      description:
        "Practice filtering documents using a list of accepted and excluded values.",
      task:
        "Create queries using $in and $nin to filter students by multiple course values."
    }
  },

  "exists": {
    concept: {
      heading: "$exists",
      paragraphs: [
        "The $exists operator checks whether a particular field exists in a MongoDB document.",
        "It can be used to find documents where a field is present or documents where the field is missing.",
        "The operator is useful when working with documents that may not all contain the same fields."
      ],
      remember:
        "$exists checks whether a field is present in a document."
    },

    analogy: {
      heading: "Think of Checking a Form",
      items: [
        {
          icon: "📝",
          title: "Form Field",
          text: "Imagine checking whether a form contains a particular field."
        },
        {
          icon: "✅",
          title: "Exists",
          text: "If the field exists, the document can be returned."
        },
        {
          icon: "❌",
          title: "Missing",
          text: "You can also search for documents where the field does not exist."
        }
      ]
    },

    visual: {
      heading: "$exists Flow",
      description:
        "Use true to find documents where a field exists and false to find documents where it does not exist.",
      steps: [
        {
          icon: "1️⃣",
          title: "Choose Field",
          text: "Select the field you want to check."
        },
        {
          icon: "2️⃣",
          title: "Use $exists",
          text: "Add the $exists operator to the query."
        },
        {
          icon: "3️⃣",
          title: "Choose true or false",
          text: "Use true for present fields and false for missing fields."
        },
        {
          icon: "4️⃣",
          title: "Get Results",
          text: "MongoDB returns documents matching the field-existence condition."
        }
      ],
      flow:
        "Field → $exists → true / false → Matching Documents"
    },

    code: {
      title: "Check Whether a Field Exists",
      description:
        "Find students who have an email field and students who do not have one.",
      language: "javascript",
      code: `// Email field exists
db.students.find({
  email: {
    $exists: true
  }
})

// Email field does not exist
db.students.find({
  email: {
    $exists: false
  }
})`,
      output:
        "The first query returns documents containing the email field. The second returns documents where the email field is missing.",
      explanation:
        "$exists: true checks for the presence of a field. $exists: false checks for documents where the field is not present."
    },

    interview: {
      question: "What does $exists do in MongoDB?",
      answer:
        "$exists checks whether a specified field is present in a document.",
      tip:
        "true means the field should exist; false means the field should be missing."
    },

    tricky: {
      question: "Does $exists: true check whether the field has a non-empty value?",
      answer:
        "No. It checks whether the field exists. The field can exist even if its value is null or another empty-like value."
    },

    practice: {
      question:
        "Find all students who have an email field.",
      hint:
        'Use { email: { $exists: true } }.'
    },

    challenge: {
      title: "Find Missing Fields",
      description:
        "Practice checking whether optional fields exist in MongoDB documents.",
      task:
        "Create student documents where some have an email field and some do not. Use $exists to find both groups."
    }
  },

  "regex": {
    concept: {
      heading: "$regex",
      paragraphs: [
        "The $regex operator is used to perform pattern matching on string values.",
        "It is useful when you want to search for text that starts with, ends with or contains a particular pattern.",
        "Regular expressions can make text-based MongoDB searches more flexible."
      ],
      remember:
        "$regex is used for pattern matching in string fields."
    },

    analogy: {
      heading: "Think of Searching Text",
      items: [
        {
          icon: "🔤",
          title: "Text",
          text: "A collection contains names, emails or other text values."
        },
        {
          icon: "🔎",
          title: "Pattern",
          text: "You define a pattern that the text should match."
        },
        {
          icon: "🎯",
          title: "Result",
          text: "MongoDB returns documents whose string values match the pattern."
        }
      ]
    },

    visual: {
      heading: "$regex Flow",
      description:
        "Use a regular expression pattern to search string fields.",
      steps: [
        {
          icon: "1️⃣",
          title: "Choose String Field",
          text: "Select a field such as name or email."
        },
        {
          icon: "2️⃣",
          title: "Create Pattern",
          text: "Define the text pattern to search for."
        },
        {
          icon: "3️⃣",
          title: "Apply $regex",
          text: "Use the pattern in the MongoDB query."
        },
        {
          icon: "4️⃣",
          title: "Get Matches",
          text: "MongoDB returns documents matching the pattern."
        }
      ],
      flow:
        "String Field → Pattern → $regex → Matching Documents"
    },

    code: {
      title: "Search Names Using $regex",
      description:
        "Find students whose names start with the letter R.",
      language: "javascript",
      code: `db.students.find({
  name: {
    $regex: "^R"
  }
})`,
      output:
        "MongoDB returns students whose name starts with R.",
      explanation:
        "The ^ symbol indicates the beginning of a string. Therefore, ^R matches strings that start with R."
    },

    interview: {
      question: "What is $regex used for in MongoDB?",
      answer:
        "$regex is used to perform pattern matching on string fields.",
      tip:
        "Remember that regular expressions are useful for flexible text searches."
    },

    tricky: {
      question: "What does ^ mean in the regex pattern ^R?",
      answer:
        "The ^ symbol indicates the beginning of the string, so ^R matches strings starting with R."
    },

    practice: {
      question:
        "Find students whose names start with the letter A.",
      hint:
        'Use { name: { $regex: "^A" } }.'
    },

    challenge: {
      title: "Build a Text Search",
      description:
        "Practice searching student names using regular expressions.",
      task:
        "Create student documents with different names and write regex queries to find names starting with A, ending with a specific letter, and containing a specific pattern."
    }
  },

  "projection": {
    concept: {
      heading: "Projection",
      paragraphs: [
        "Projection is used to control which fields are returned in MongoDB query results.",
        "Instead of returning every field from a document, you can specify only the fields required by the application.",
        "Projection can make query results smaller and easier to work with."
      ],
      remember:
        "Projection controls which fields are included or excluded from query results."
    },

    analogy: {
      heading: "Think of Showing Selected Columns",
      items: [
        {
          icon: "📄",
          title: "Full Document",
          text: "A MongoDB document may contain many fields."
        },
        {
          icon: "🎯",
          title: "Select Fields",
          text: "Projection lets you choose only the fields you need."
        },
        {
          icon: "📋",
          title: "Result",
          text: "The query returns a smaller set of fields."
        }
      ]
    },

    visual: {
      heading: "Projection Flow",
      description:
        "Projection can be passed as the second argument to find().",
      steps: [
        {
          icon: "1️⃣",
          title: "Query Documents",
          text: "Choose which documents should be returned."
        },
        {
          icon: "2️⃣",
          title: "Specify Fields",
          text: "Specify fields to include or exclude."
        },
        {
          icon: "3️⃣",
          title: "MongoDB Applies Projection",
          text: "MongoDB removes fields that are not required from the result."
        },
        {
          icon: "4️⃣",
          title: "Get Clean Result",
          text: "Only the requested fields are returned."
        }
      ],
      flow:
        "Query → Projection → Selected Fields → Result"
    },

    code: {
      title: "Use Projection",
      description:
        "Return only name and course from student documents.",
      language: "javascript",
      code: `db.students.find(
  {},
  {
    name: 1,
    course: 1
  }
)`,
      output:
        "The result contains the name and course fields instead of the complete student document.",
      explanation:
        "The value 1 includes a field in the result. MongoDB also includes _id by default unless it is explicitly excluded."
    },

    interview: {
      question: "What is projection in MongoDB?",
      answer:
        "Projection controls which fields are included or excluded from query results.",
      tip:
        "In a projection, 1 means include and 0 means exclude."
    },

    tricky: {
      question: "Is _id included when other fields are projected?",
      answer:
        "Yes. _id is included by default and can be explicitly excluded using _id: 0."
    },

    practice: {
      question:
        "Return only the name and age fields from the students collection.",
      hint:
        "Use { name: 1, age: 1, _id: 0 } as the projection."
    },

    challenge: {
      title: "Create a Clean Result",
      description:
        "Practice returning only the required fields from MongoDB documents.",
      task:
        "Write projection queries that return only name and course, only name and age, and all fields except _id."
    }
  },

  "sorting": {
    concept: {
      heading: "Sorting",
      paragraphs: [
        "Sorting is used to arrange MongoDB query results in ascending or descending order.",
        "The sort() method accepts a field and a value that determines the sorting direction.",
        "Use 1 for ascending order and -1 for descending order."
      ],
      remember:
        "sort({ field: 1 }) sorts ascending, while sort({ field: -1 }) sorts descending."
    },

    analogy: {
      heading: "Think of Arranging Student Records",
      items: [
        {
          icon: "⬆️",
          title: "Ascending",
          text: "Arrange ages or marks from smaller values to larger values."
        },
        {
          icon: "⬇️",
          title: "Descending",
          text: "Arrange values from larger values to smaller values."
        },
        {
          icon: "📊",
          title: "Sorted Results",
          text: "MongoDB returns the documents in the requested order."
        }
      ]
    },

    visual: {
      heading: "Sorting Flow",
      description:
        "Use sort() after a query to arrange the returned documents.",
      steps: [
        {
          icon: "1️⃣",
          title: "Find Documents",
          text: "Retrieve the documents you want to work with."
        },
        {
          icon: "2️⃣",
          title: "Choose Field",
          text: "Select the field used for sorting."
        },
        {
          icon: "3️⃣",
          title: "Choose Direction",
          text: "Use 1 for ascending or -1 for descending."
        },
        {
          icon: "4️⃣",
          title: "Sorted Result",
          text: "MongoDB returns the documents in the requested order."
        }
      ],
      flow:
        "find() → sort() → Ascending / Descending → Result"
    },

    code: {
      title: "Sort Students",
      description:
        "Sort students by age in ascending and descending order.",
      language: "javascript",
      code: `// Ascending
db.students.find().sort({
  age: 1
})

// Descending
db.students.find().sort({
  age: -1
})`,
      output:
        "The first query returns students from youngest to oldest. The second returns students from oldest to youngest.",
      explanation:
        "The value 1 represents ascending order and -1 represents descending order."
    },

    interview: {
      question: "How do you sort documents in MongoDB?",
      answer:
        "Use the sort() method with 1 for ascending order or -1 for descending order.",
      tip:
        "1 = ascending and -1 = descending."
    },

    tricky: {
      question: "What does sort({ age: -1 }) do?",
      answer:
        "It sorts the documents by age in descending order."
    },

    practice: {
      question:
        "Sort students by age from highest to lowest.",
      hint:
        "Use sort({ age: -1 })."
    },

    challenge: {
      title: "Sort Student Data",
      description:
        "Practice sorting documents using different fields and directions.",
      task:
        "Write queries to sort students by age ascending, age descending and name alphabetically."
    }
  },

  "limiting": {
    concept: {
      heading: "Limiting Results",
      paragraphs: [
        "The limit() method is used to restrict the number of documents returned by a MongoDB query.",
        "It is useful when an application needs only a small number of records.",
        "limit() can be combined with sort() to retrieve a specific number of top or bottom records."
      ],
      remember:
        "limit() controls the maximum number of documents returned by a query."
    },

    analogy: {
      heading: "Think of Showing Top Results",
      items: [
        {
          icon: "📋",
          title: "Many Records",
          text: "A collection may contain hundreds or thousands of documents."
        },
        {
          icon: "🔢",
          title: "Set Limit",
          text: "You may need only a fixed number of results."
        },
        {
          icon: "🎯",
          title: "Selected Results",
          text: "limit() returns only the requested number of documents."
        }
      ]
    },

    visual: {
      heading: "limit() Flow",
      description:
        "limit() can be used with find() to restrict the number of returned documents.",
      steps: [
        {
          icon: "1️⃣",
          title: "Find Documents",
          text: "Run a query on the collection."
        },
        {
          icon: "2️⃣",
          title: "Apply Sort if Needed",
          text: "Optionally sort the documents first."
        },
        {
          icon: "3️⃣",
          title: "Apply limit()",
          text: "Specify the maximum number of documents."
        },
        {
          icon: "4️⃣",
          title: "Get Limited Result",
          text: "MongoDB returns only the requested number of documents."
        }
      ],
      flow:
        "find() → sort() → limit() → Limited Results"
    },

    code: {
      title: "Limit Query Results",
      description:
        "Retrieve only the first three students after sorting by age.",
      language: "javascript",
      code: `db.students
  .find()
  .sort({ age: -1 })
  .limit(3)`,
      output:
        "MongoDB returns only three students, ordered from highest age to lowest age.",
      explanation:
        "sort() arranges the documents and limit(3) restricts the final result to three documents."
    },

    interview: {
      question: "What does limit() do in MongoDB?",
      answer:
        "limit() restricts the number of documents returned by a query.",
      tip:
        "It is commonly used with sort() when retrieving top or recent records."
    },

    tricky: {
      question: "Can limit() be combined with sort()?",
      answer:
        "Yes. Combining sort() and limit() is common when retrieving a specific number of top or bottom records."
    },

    practice: {
      question:
        "Retrieve only five students from the students collection.",
      hint:
        "Use db.students.find().limit(5)."
    },

    challenge: {
      title: "Find Top Students",
      description:
        "Use sorting and limiting together to retrieve selected records.",
      task:
        "Sort students by age in descending order and return only the top three students."
    }
  },

  "pagination": {
    concept: {
      heading: "Pagination",
      paragraphs: [
        "Pagination is the process of dividing a large set of documents into smaller pages.",
        "MongoDB pagination can be implemented using skip() and limit().",
        "Pagination is commonly used in web applications when displaying products, students, posts or other large datasets."
      ],
      remember:
        "Pagination commonly uses skip() to move past previous records and limit() to control the page size."
    },

    analogy: {
      heading: "Think of a Book",
      items: [
        {
          icon: "📖",
          title: "Large Data",
          text: "Imagine a book containing hundreds of pages."
        },
        {
          icon: "📄",
          title: "Page Size",
          text: "Instead of showing the entire book at once, you show a fixed number of pages."
        },
        {
          icon: "➡️",
          title: "Next Page",
          text: "skip() moves past records that were already shown and limit() selects the next group."
        }
      ]
    },

    visual: {
      heading: "Pagination Flow",
      description:
        "A common pagination formula uses the page number and page size to calculate how many documents should be skipped.",
      steps: [
        {
          icon: "1️⃣",
          title: "Choose Page",
          text: "Determine the page number requested by the user."
        },
        {
          icon: "2️⃣",
          title: "Choose Page Size",
          text: "Decide how many documents should appear on each page."
        },
        {
          icon: "3️⃣",
          title: "Calculate Skip",
          text: "Use (page - 1) × pageSize to calculate the skip value."
        },
        {
          icon: "4️⃣",
          title: "Apply skip and limit",
          text: "Skip previous records and return only the requested page size."
        }
      ],
      flow:
        "Page Number → Calculate skip → skip() → limit() → Page Results"
    },

    code: {
      title: "Basic Pagination",
      description:
        "Retrieve page 2 when each page contains 5 students.",
      language: "javascript",
      code: `const page = 2;
const pageSize = 5;

db.students
  .find()
  .skip((page - 1) * pageSize)
  .limit(pageSize)`,
      output:
        "The query skips the first five students and returns the next five students.",
      explanation:
        "For page 2 with a page size of 5, skip becomes (2 - 1) × 5 = 5. The query skips five documents and then returns five documents."
    },

    interview: {
      question: "How can pagination be implemented in MongoDB?",
      answer:
        "A basic pagination approach uses skip() to skip previous records and limit() to control the number of records returned on each page.",
      tip:
        "The common formula is skip = (page - 1) × pageSize."
    },

    tricky: {
      question: "Why is limit() alone not enough for pagination?",
      answer:
        "limit() controls how many documents are returned, but skip() is needed to move to later pages when using basic offset pagination."
    },

    practice: {
      question:
        "Create a query for page 3 where each page contains 10 students.",
      hint:
        "Use skip((3 - 1) * 10).limit(10)."
    },

    challenge: {
      title: "Build MongoDB Pagination",
      description:
        "Practice implementing basic page-based pagination.",
      task:
        "Create a pagination query that accepts page and pageSize values, calculates skip using (page - 1) * pageSize, and returns the requested page of documents."
    }
  },
    // ============================================================
  // MONGODB ADVANCED
  // ============================================================

  "indexes": {
    concept: {
      heading: "Indexes",
      paragraphs: [
        "An index is a special data structure that MongoDB uses to improve the speed of query operations.",
        "Without a suitable index, MongoDB may need to scan many documents to find matching records.",
        "Indexes can improve read performance, but they also require additional storage and can add overhead to write operations."
      ],
      remember:
        "Indexes can make queries faster, but too many indexes can increase storage and write overhead."
    },

    analogy: {
      heading: "Think of a Book Index",
      items: [
        {
          icon: "📖",
          title: "Large Book",
          text: "Searching every page of a large book would take time."
        },
        {
          icon: "🔖",
          title: "Index",
          text: "A book index tells you where a particular topic can be found."
        },
        {
          icon: "⚡",
          title: "Faster Search",
          text: "MongoDB indexes can help the database locate matching documents more efficiently."
        }
      ]
    },

    visual: {
      heading: "How an Index Helps",
      description:
        "An index gives MongoDB an additional structure that can be used while processing suitable queries.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Index",
          text: "Create an index on a field that is frequently queried."
        },
        {
          icon: "2️⃣",
          title: "Run Query",
          text: "The application sends a query using the indexed field."
        },
        {
          icon: "3️⃣",
          title: "Use Index",
          text: "MongoDB can use the index when it is appropriate for the query."
        },
        {
          icon: "4️⃣",
          title: "Return Results",
          text: "MongoDB returns the matching documents."
        }
      ],
      flow:
        "Create Index → Query → Index Used When Appropriate → Results"
    },

    code: {
      title: "Create an Index",
      description:
        "Create an ascending index on the email field.",
      language: "javascript",
      code: `db.students.createIndex({
  email: 1
})

db.students.getIndexes()`,
      output:
        "MongoDB creates an index on the email field and getIndexes() displays the indexes for the collection.",
      explanation:
        "The value 1 creates an ascending index. Indexes are useful for fields that are frequently used in queries, sorting or other supported operations."
    },

    interview: {
      question: "What is an index in MongoDB?",
      answer:
        "An index is a data structure that can improve the performance of suitable query operations by helping MongoDB locate documents more efficiently.",
      tip:
        "Indexes improve read performance in appropriate cases but add storage and write overhead."
    },

    tricky: {
      question: "Should every field have an index?",
      answer:
        "No. Creating unnecessary indexes consumes storage and can increase the cost of write operations."
    },

    practice: {
      question:
        "Create an index on the email field of the students collection.",
      hint:
        "Use db.students.createIndex({ email: 1 })."
    },

    challenge: {
      title: "Create Useful Indexes",
      description:
        "Practice creating and inspecting indexes.",
      task:
        "Create an index on email and another index on age. Then use getIndexes() to inspect the indexes of the students collection."
    }
  },

  "aggregation": {
    concept: {
      heading: "Aggregation",
      paragraphs: [
        "Aggregation is used to process documents and produce calculated or transformed results.",
        "MongoDB aggregation works through an aggregation pipeline containing stages.",
        "Common aggregation stages include $match, $group, $sort, $project and $lookup."
      ],
      remember:
        "Aggregation processes documents through a pipeline of stages to produce useful results."
    },

    analogy: {
      heading: "Think of a Data Processing Factory",
      items: [
        {
          icon: "📦",
          title: "Raw Data",
          text: "Documents enter the aggregation pipeline as raw data."
        },
        {
          icon: "⚙️",
          title: "Processing Stages",
          text: "Each pipeline stage performs a specific operation."
        },
        {
          icon: "📊",
          title: "Final Result",
          text: "The processed documents produce the required result."
        }
      ]
    },

    visual: {
      heading: "Aggregation Pipeline",
      description:
        "An aggregation pipeline passes documents through multiple processing stages.",
      steps: [
        {
          icon: "1️⃣",
          title: "Input Documents",
          text: "Documents from the collection enter the pipeline."
        },
        {
          icon: "2️⃣",
          title: "$match",
          text: "Filter documents when required."
        },
        {
          icon: "3️⃣",
          title: "$group",
          text: "Group documents and calculate values."
        },
        {
          icon: "4️⃣",
          title: "$sort / Other Stages",
          text: "Arrange or transform the resulting data."
        }
      ],
      flow:
        "Documents → $match → $group → $sort → Final Result"
    },

    code: {
      title: "Basic Aggregation",
      description:
        "Group students by course and count the number of students in each course.",
      language: "javascript",
      code: `db.students.aggregate([
  {
    $group: {
      _id: "$course",
      totalStudents: {
        $sum: 1
      }
    }
  }
])`,
      output:
        "MongoDB returns one result for each course with the number of students belonging to that course.",
      explanation:
        "$group creates groups based on the course field. $sum: 1 counts how many documents belong to each group."
    },

    interview: {
      question: "What is aggregation in MongoDB?",
      answer:
        "Aggregation is a framework used to process documents through a pipeline of stages and produce calculated or transformed results.",
      tip:
        "Think of aggregation as a data-processing pipeline."
    },

    tricky: {
      question: "Can an aggregation pipeline contain multiple stages?",
      answer:
        "Yes. An aggregation pipeline can contain multiple stages, and each stage processes the result from the previous stage."
    },

    practice: {
      question:
        "Group students by course and count the number of students in each course.",
      hint:
        "Use aggregate() with a $group stage and $sum: 1."
    },

    challenge: {
      title: "Build an Aggregation Pipeline",
      description:
        "Practice processing MongoDB documents using aggregation.",
      task:
        "Create an aggregation pipeline that groups students by course and returns the total number of students in each course."
    }
  },

  "match": {
    concept: {
      heading: "$match",
      paragraphs: [
        "The $match stage is used to filter documents inside an aggregation pipeline.",
        "It works similarly to a query filter and allows only matching documents to continue to the next pipeline stage.",
        "Using $match early in a pipeline can reduce the number of documents processed by later stages."
      ],
      remember:
        "$match filters documents in an aggregation pipeline."
    },

    analogy: {
      heading: "Think of a Selection Gate",
      items: [
        {
          icon: "🚪",
          title: "Input",
          text: "Many documents enter the aggregation pipeline."
        },
        {
          icon: "🔍",
          title: "Filter",
          text: "$match checks which documents satisfy the condition."
        },
        {
          icon: "✅",
          title: "Pass",
          text: "Only matching documents continue to the next stage."
        }
      ]
    },

    visual: {
      heading: "$match Flow",
      description:
        "$match removes documents that do not satisfy its condition from the pipeline.",
      steps: [
        {
          icon: "1️⃣",
          title: "Documents Enter",
          text: "Documents enter the aggregation pipeline."
        },
        {
          icon: "2️⃣",
          title: "Condition",
          text: "A filter condition is evaluated."
        },
        {
          icon: "3️⃣",
          title: "Matching Documents",
          text: "Documents satisfying the condition continue."
        },
        {
          icon: "4️⃣",
          title: "Next Stage",
          text: "The remaining documents are processed by the next stage."
        }
      ],
      flow:
        "Documents → $match → Matching Documents → Next Stage"
    },

    code: {
      title: "Using $match",
      description:
        "Find only students enrolled in the MERN Stack course.",
      language: "javascript",
      code: `db.students.aggregate([
  {
    $match: {
      course: "MERN Stack"
    }
  }
])`,
      output:
        "Only documents where course is MERN Stack continue through the aggregation pipeline.",
      explanation:
        "$match filters documents based on the specified condition."
    },

    interview: {
      question: "What does $match do?",
      answer:
        "$match filters documents in an aggregation pipeline based on a specified condition.",
      tip:
        "$match is commonly used before stages such as $group when only a subset of documents is needed."
    },

    tricky: {
      question: "Can $match be combined with comparison operators?",
      answer:
        "Yes. $match can use MongoDB query conditions and operators such as $gt, $gte, $lt, $in and others."
    },

    practice: {
      question:
        "Use $match to find students whose age is greater than 20.",
      hint:
        "Use { age: { $gt: 20 } } inside the $match stage."
    },

    challenge: {
      title: "Filter an Aggregation",
      description:
        "Practice filtering documents before processing them further.",
      task:
        "Create an aggregation pipeline that uses $match to select students older than 20 and then passes the results to the next stage."
    }
  },

  "group": {
    concept: {
      heading: "$group",
      paragraphs: [
        "The $group stage combines documents that have the same group key.",
        "It is commonly used to calculate totals, counts, averages, minimum values and maximum values.",
        "The _id field inside $group defines how documents are grouped."
      ],
      remember:
        "$group combines documents into groups and can calculate values for each group."
    },

    analogy: {
      heading: "Think of Grouping Students",
      items: [
        {
          icon: "👥",
          title: "Students",
          text: "Many student documents exist in the collection."
        },
        {
          icon: "📚",
          title: "Course",
          text: "Students can be grouped according to their course."
        },
        {
          icon: "🔢",
          title: "Count",
          text: "Aggregation can calculate the number of students in each group."
        }
      ]
    },

    visual: {
      heading: "$group Flow",
      description:
        "$group creates groups based on a specified expression.",
      steps: [
        {
          icon: "1️⃣",
          title: "Read Documents",
          text: "MongoDB receives documents from the previous stage."
        },
        {
          icon: "2️⃣",
          title: "Choose Group Key",
          text: "The _id expression determines how documents are grouped."
        },
        {
          icon: "3️⃣",
          title: "Calculate",
          text: "Accumulator operators can calculate values for each group."
        },
        {
          icon: "4️⃣",
          title: "Return Groups",
          text: "MongoDB returns one result document for each group."
        }
      ],
      flow:
        "Documents → Group Key → Accumulators → Group Results"
    },

    code: {
      title: "Group Students by Course",
      description:
        "Count students belonging to each course.",
      language: "javascript",
      code: `db.students.aggregate([
  {
    $group: {
      _id: "$course",
      totalStudents: {
        $sum: 1
      }
    }
  }
])`,
      output:
        "Each result contains a course name in _id and the number of students in that course.",
      explanation:
        "_id: \"$course\" creates one group for each course. $sum: 1 counts the documents in every group."
    },

    interview: {
      question: "What is the purpose of the _id field inside $group?",
      answer:
        "The _id expression defines the grouping key. Documents with the same grouping key are placed in the same group.",
      tip:
        "Inside $group, _id does not mean the document's original MongoDB _id necessarily; it defines the group key."
    },

    tricky: {
      question: "Can $group calculate more than a count?",
      answer:
        "Yes. $group can use accumulator operators such as $sum, $avg, $min, $max and others."
    },

    practice: {
      question:
        "Group students by course and calculate the total number of students in each course.",
      hint:
        "Use _id: \"$course\" and totalStudents with $sum: 1."
    },

    challenge: {
      title: "Create Course Statistics",
      description:
        "Use $group to generate statistics for student data.",
      task:
        "Create an aggregation that groups students by course and returns the number of students in each course."
    }
  },

  "sort": {
    concept: {
      heading: "$sort",
      paragraphs: [
        "The $sort aggregation stage is used to arrange documents in ascending or descending order.",
        "Use 1 for ascending order and -1 for descending order.",
        "$sort can be used after stages such as $group when the grouped results need to be ordered."
      ],
      remember:
        "In aggregation, $sort uses 1 for ascending and -1 for descending."
    },

    analogy: {
      heading: "Think of Ranking Results",
      items: [
        {
          icon: "⬆️",
          title: "Ascending",
          text: "Values are arranged from smaller to larger."
        },
        {
          icon: "⬇️",
          title: "Descending",
          text: "Values are arranged from larger to smaller."
        },
        {
          icon: "🏆",
          title: "Ranking",
          text: "Sorting can be used to rank calculated aggregation results."
        }
      ]
    },

    visual: {
      heading: "$sort Flow",
      description:
        "The $sort stage orders documents produced by the previous aggregation stage.",
      steps: [
        {
          icon: "1️⃣",
          title: "Process Data",
          text: "Documents are produced by the previous stage."
        },
        {
          icon: "2️⃣",
          title: "Choose Field",
          text: "Select the field on which the result should be sorted."
        },
        {
          icon: "3️⃣",
          title: "Choose Direction",
          text: "Use 1 or -1."
        },
        {
          icon: "4️⃣",
          title: "Sorted Results",
          text: "MongoDB returns the documents in the requested order."
        }
      ],
      flow:
        "Previous Stage → $sort → Ascending / Descending → Results"
    },

    code: {
      title: "Sort Aggregation Results",
      description:
        "Group students by course and sort the groups by student count.",
      language: "javascript",
      code: `db.students.aggregate([
  {
    $group: {
      _id: "$course",
      totalStudents: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalStudents: -1
    }
  }
])`,
      output:
        "The course groups are returned from the highest number of students to the lowest.",
      explanation:
        "The $group stage creates course statistics. The $sort stage then orders those results by totalStudents in descending order."
    },

    interview: {
      question: "What does the $sort stage do?",
      answer:
        "$sort arranges documents produced by an aggregation pipeline stage in ascending or descending order.",
      tip:
        "1 means ascending and -1 means descending."
    },

    tricky: {
      question: "Can $sort sort a field created by $group?",
      answer:
        "Yes. A later $sort stage can sort by fields produced by an earlier $group stage."
    },

    practice: {
      question:
        "Group students by course and sort the results by totalStudents in descending order.",
      hint:
        "Use $group followed by $sort."
    },

    challenge: {
      title: "Rank Course Results",
      description:
        "Practice sorting calculated aggregation results.",
      task:
        "Create an aggregation pipeline that counts students in each course and sorts the courses from the highest count to the lowest."
    }
  },

  "lookup": {
    concept: {
      heading: "$lookup",
      paragraphs: [
        "The $lookup stage is used to combine documents from two MongoDB collections.",
        "It performs a left outer join-like operation and adds matching documents from another collection to the pipeline result.",
        "$lookup is useful when related data is stored in separate collections."
      ],
      remember:
        "$lookup combines related data from another MongoDB collection."
    },

    analogy: {
      heading: "Think of Joining Two Registers",
      items: [
        {
          icon: "👨‍🎓",
          title: "Students",
          text: "One collection stores student information."
        },
        {
          icon: "📚",
          title: "Courses",
          text: "Another collection stores course information."
        },
        {
          icon: "🔗",
          title: "$lookup",
          text: "$lookup connects related documents using matching fields."
        }
      ]
    },

    visual: {
      heading: "$lookup Flow",
      description:
        "$lookup matches a field from the current collection with a field in another collection.",
      steps: [
        {
          icon: "1️⃣",
          title: "Source Collection",
          text: "Start with documents from one collection."
        },
        {
          icon: "2️⃣",
          title: "Foreign Collection",
          text: "Choose the second collection containing related information."
        },
        {
          icon: "3️⃣",
          title: "Match Fields",
          text: "Specify localField and foreignField."
        },
        {
          icon: "4️⃣",
          title: "Combined Result",
          text: "Matching documents from the foreign collection are added to the result."
        }
      ],
      flow:
        "Source Collection → Match Fields → Foreign Collection → Combined Result"
    },

    code: {
      title: "Basic $lookup",
      description:
        "Join students with courses using a matching courseId field.",
      language: "javascript",
      code: `db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseDetails"
    }
  }
])`,
      output:
        "Each student document contains a courseDetails array containing matching documents from the courses collection.",
      explanation:
        "from specifies the collection to search. localField is the field in the current collection. foreignField is the matching field in the other collection. as specifies the name of the resulting array."
    },

    interview: {
      question: "What is $lookup used for?",
      answer:
        "$lookup is used to combine related documents from another MongoDB collection.",
      tip:
        "Think of $lookup as a join-like operation between collections."
    },

    tricky: {
      question: "Does $lookup always return a single matching document?",
      answer:
        "No. The result is normally placed in an array and can contain zero, one or multiple matching documents."
    },

    practice: {
      question:
        "Create students and courses collections and use $lookup to connect students with their course details.",
      hint:
        "Use localField and foreignField to specify the relationship."
    },

    challenge: {
      title: "Join Student and Course Data",
      description:
        "Practice combining related data from two collections.",
      task:
        "Create students with courseId values and a courses collection with matching _id values. Use $lookup to display course details with each student."
    }
  },

  "data-validation": {
    concept: {
      heading: "Data Validation",
      paragraphs: [
        "MongoDB supports schema validation rules that can control the structure and types of documents stored in a collection.",
        "Validation can help ensure that important fields have the expected data types and required values.",
        "Validation is useful when an application needs more consistency while still using MongoDB's flexible document model."
      ],
      remember:
        "Schema validation helps control the structure and data types of documents stored in a collection."
    },

    analogy: {
      heading: "Think of a Registration Form",
      items: [
        {
          icon: "📝",
          title: "Form Rules",
          text: "A registration form may require a name, email and age."
        },
        {
          icon: "✅",
          title: "Validation",
          text: "The submitted data is checked against the required rules."
        },
        {
          icon: "🗄️",
          title: "Database",
          text: "Valid documents can be stored according to the collection's validation rules."
        }
      ]
    },

    visual: {
      heading: "Validation Flow",
      description:
        "Validation rules are checked when documents are inserted or updated according to the collection configuration.",
      steps: [
        {
          icon: "1️⃣",
          title: "Define Rules",
          text: "Define the required fields and data types."
        },
        {
          icon: "2️⃣",
          title: "Application Sends Data",
          text: "The application attempts to insert or update a document."
        },
        {
          icon: "3️⃣",
          title: "MongoDB Validates",
          text: "MongoDB checks the document against the configured rules."
        },
        {
          icon: "4️⃣",
          title: "Accept or Reject",
          text: "The document is accepted or rejected according to the validation settings."
        }
      ],
      flow:
        "Define Rules → Insert / Update → Validate → Accept or Reject"
    },

    code: {
      title: "Create a Collection with Validation",
      description:
        "Create a students collection that requires name and age fields.",
      language: "javascript",
      code: `db.createCollection("studentsValidated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string"
        },
        age: {
          bsonType: "int"
        }
      }
    }
  }
})`,
      output:
        "MongoDB creates the collection with schema validation rules for name and age.",
      explanation:
        "$jsonSchema defines validation rules. required specifies mandatory fields, while bsonType specifies the expected BSON data type."
    },

    interview: {
      question: "Why is data validation useful in MongoDB?",
      answer:
        "Data validation helps maintain consistency by controlling required fields and expected data types in documents.",
      tip:
        "MongoDB is flexible by default, but validation can be added when an application needs stronger data rules."
    },

    tricky: {
      question: "Does MongoDB always require a fixed schema?",
      answer:
        "No. MongoDB has a flexible document model, but schema validation rules can be configured when stronger structure is required."
    },

    practice: {
      question:
        "Create validation rules requiring name and email fields in a collection.",
      hint:
        "Use $jsonSchema with required and properties."
    },

    challenge: {
      title: "Create Validated Student Data",
      description:
        "Practice defining validation rules for a MongoDB collection.",
      task:
        "Create a collection with validation rules requiring name and email as strings and age as an integer. Test the collection with valid and invalid documents."
    }
  },
    // ============================================================
  // MONGODB + NODE.JS
  // ============================================================

  "mongodb-driver": {
    concept: {
      heading: "MongoDB Driver",
      paragraphs: [
        "The MongoDB Node.js Driver allows a Node.js application to communicate directly with a MongoDB database.",
        "It provides methods for connecting to MongoDB and performing database operations such as insert, find, update and delete.",
        "The driver works without requiring Mongoose, giving developers direct access to MongoDB functionality."
      ],
      remember:
        "The MongoDB Node.js Driver connects Node.js applications directly to MongoDB."
    },

    analogy: {
      heading: "Think of a Communication Bridge",
      items: [
        {
          icon: "🟢",
          title: "Node.js Application",
          text: "The application needs to communicate with MongoDB."
        },
        {
          icon: "🌉",
          title: "MongoDB Driver",
          text: "The driver acts as the communication bridge between Node.js and MongoDB."
        },
        {
          icon: "🍃",
          title: "MongoDB",
          text: "The database receives commands and returns results."
        }
      ]
    },

    visual: {
      heading: "Node.js to MongoDB",
      description:
        "The MongoDB Driver allows a Node.js application to establish a connection and work with MongoDB collections.",
      steps: [
        {
          icon: "1️⃣",
          title: "Install Driver",
          text: "Install the official MongoDB package in the Node.js project."
        },
        {
          icon: "2️⃣",
          title: "Create Client",
          text: "Create a MongoClient using the MongoDB connection string."
        },
        {
          icon: "3️⃣",
          title: "Connect",
          text: "Connect the Node.js application to MongoDB."
        },
        {
          icon: "4️⃣",
          title: "Database Operations",
          text: "Use collections to perform CRUD operations."
        }
      ],
      flow:
        "Node.js → MongoDB Driver → MongoDB → Database Operations"
    },

    code: {
      title: "Using MongoDB Driver",
      description:
        "Install the MongoDB driver and connect a Node.js application.",
      language: "javascript",
      code: `npm install mongodb

const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://127.0.0.1:27017"
);

async function connectDB() {
  await client.connect();

  console.log("MongoDB Connected");

  const db = client.db("studentDB");

  const students = db.collection("students");

  const data = await students.find().toArray();

  console.log(data);
}

connectDB();`,
      output:
        "MongoDB Connected followed by the documents returned from the students collection.",
      explanation:
        "MongoClient is used to create a connection to MongoDB. After connecting, db() selects a database and collection() selects a collection."
    },

    interview: {
      question: "What is the MongoDB Node.js Driver?",
      answer:
        "The MongoDB Node.js Driver is the official library that allows Node.js applications to connect to MongoDB and perform database operations.",
      tip:
        "The driver provides direct access to MongoDB without requiring Mongoose."
    },

    tricky: {
      question: "Is Mongoose required to use MongoDB with Node.js?",
      answer:
        "No. Node.js can communicate with MongoDB directly using the official MongoDB Driver."
    },

    practice: {
      question:
        "Install the MongoDB Node.js Driver and connect a Node.js application to a local MongoDB server.",
      hint:
        "Install the mongodb package and use MongoClient."
    },

    challenge: {
      title: "Connect Node.js to MongoDB",
      description:
        "Create a basic Node.js MongoDB connection.",
      task:
        "Create a Node.js application that connects to a local MongoDB database named studentDB and reads documents from the students collection."
    }
  },

  "mongodb-connection": {
    concept: {
      heading: "MongoDB Connection",
      paragraphs: [
        "A MongoDB connection allows a Node.js application to communicate with a MongoDB server.",
        "The connection string contains information required to locate the MongoDB server.",
        "Applications should establish the database connection before performing database operations."
      ],
      remember:
        "A Node.js application must establish a MongoDB connection before working with database data."
    },

    analogy: {
      heading: "Think of Connecting to a Server",
      items: [
        {
          icon: "📱",
          title: "Application",
          text: "The Node.js application wants to access database data."
        },
        {
          icon: "📡",
          title: "Connection",
          text: "The connection string tells the application where MongoDB is available."
        },
        {
          icon: "🗄️",
          title: "Database",
          text: "After connection, the application can access databases and collections."
        }
      ]
    },

    visual: {
      heading: "Connection Flow",
      description:
        "A typical Node.js application connects to MongoDB before executing database operations.",
      steps: [
        {
          icon: "1️⃣",
          title: "Connection String",
          text: "Specify the MongoDB server address."
        },
        {
          icon: "2️⃣",
          title: "MongoClient",
          text: "Create a MongoClient using the connection string."
        },
        {
          icon: "3️⃣",
          title: "Connect",
          text: "Establish the database connection."
        },
        {
          icon: "4️⃣",
          title: "Use Database",
          text: "Select a database and perform operations."
        }
      ],
      flow:
        "Connection String → MongoClient → Connect → Database"
    },

    code: {
      title: "Create a Database Connection",
      description:
        "Create a reusable MongoDB connection function.",
      language: "javascript",
      code: `const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();

    console.log("Database connected");

    return client.db("studentDB");
  } catch (error) {
    console.error("Database connection failed", error);
  }
}

connectDB();`,
      output:
        "Database connected",
      explanation:
        "The try-catch block handles connection errors. The db() method selects the studentDB database after the connection is established."
    },

    interview: {
      question: "What is a MongoDB connection string?",
      answer:
        "A MongoDB connection string contains the information required by a MongoDB client to connect to a MongoDB deployment.",
      tip:
        "For local MongoDB, a common connection string uses mongodb://127.0.0.1:27017."
    },

    tricky: {
      question: "Should database connection code be repeated before every query?",
      answer:
        "No. Applications normally establish and reuse a database connection instead of creating a new connection for every operation."
    },

    practice: {
      question:
        "Create a reusable function that connects to MongoDB and returns the studentDB database.",
      hint:
        "Use MongoClient, connect(), and db()."
    },

    challenge: {
      title: "Create a Database Connection Module",
      description:
        "Separate the database connection logic from the rest of the application.",
      task:
        "Create a db.js file that connects to MongoDB and exports a function or database reference that can be used by other parts of the Node.js application."
    }
  },

  "mongoose": {
    concept: {
      heading: "Mongoose",
      paragraphs: [
        "Mongoose is an Object Data Modeling library for MongoDB and Node.js.",
        "It provides features such as schemas, models, validation, middleware and convenient query methods.",
        "Mongoose is commonly used when a Node.js application needs a structured way to work with MongoDB documents."
      ],
      remember:
        "Mongoose provides an additional modeling layer for working with MongoDB from Node.js."
    },

    analogy: {
      heading: "Think of a Data Management Layer",
      items: [
        {
          icon: "🍃",
          title: "MongoDB",
          text: "MongoDB stores the actual documents."
        },
        {
          icon: "🧩",
          title: "Mongoose",
          text: "Mongoose provides schemas, models and application-level database features."
        },
        {
          icon: "🟢",
          title: "Node.js",
          text: "The Node.js application uses Mongoose to work with MongoDB."
        }
      ]
    },

    visual: {
      heading: "Mongoose Architecture",
      description:
        "Mongoose sits between the Node.js application and MongoDB and provides modeling features.",
      steps: [
        {
          icon: "1️⃣",
          title: "Node.js",
          text: "The application sends a database request."
        },
        {
          icon: "2️⃣",
          title: "Mongoose",
          text: "Mongoose applies schemas, models and query logic."
        },
        {
          icon: "3️⃣",
          title: "MongoDB",
          text: "MongoDB stores or retrieves the requested documents."
        },
        {
          icon: "4️⃣",
          title: "Result",
          text: "The result is returned to the Node.js application."
        }
      ],
      flow:
        "Node.js → Mongoose → MongoDB → Mongoose → Node.js"
    },

    code: {
      title: "Install and Connect Mongoose",
      description:
        "Install Mongoose and establish a connection with MongoDB.",
      language: "javascript",
      code: `npm install mongoose

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/studentDB"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});`,
      output:
        "MongoDB Connected",
      explanation:
        "mongoose.connect() establishes a connection between the Node.js application and MongoDB."
    },

    interview: {
      question: "What is Mongoose?",
      answer:
        "Mongoose is an Object Data Modeling library for MongoDB and Node.js that provides schemas, models, validation and other useful features.",
      tip:
        "Mongoose is commonly used to add structure and modeling features to MongoDB applications."
    },

    tricky: {
      question: "Is Mongoose the MongoDB database itself?",
      answer:
        "No. MongoDB is the database. Mongoose is a Node.js library used to work with MongoDB."
    },

    practice: {
      question:
        "Install Mongoose and connect a Node.js application to a MongoDB database named studentDB.",
      hint:
        "Use npm install mongoose and mongoose.connect()."
    },

    challenge: {
      title: "Create a Mongoose Connection",
      description:
        "Build a basic Node.js application using Mongoose.",
      task:
        "Create a Node.js project, install Mongoose and connect the application to a local studentDB database."
    }
  },

  "mongoose-schema": {
    concept: {
      heading: "Mongoose Schema",
      paragraphs: [
        "A Mongoose Schema defines the structure and rules for documents represented by a Mongoose model.",
        "A schema can define fields, data types, default values, validation rules and other options.",
        "Schemas help developers maintain a consistent structure at the application modeling level."
      ],
      remember:
        "A Mongoose Schema defines the structure and rules for documents."
    },

    analogy: {
      heading: "Think of a Form Structure",
      items: [
        {
          icon: "📋",
          title: "Form Design",
          text: "A form defines which fields a user should provide."
        },
        {
          icon: "🏷️",
          title: "Field Types",
          text: "Each field can have a specific type such as String or Number."
        },
        {
          icon: "🗄️",
          title: "Schema",
          text: "A Mongoose schema defines similar rules for application documents."
        }
      ]
    },

    visual: {
      heading: "Schema to Document",
      description:
        "A schema defines the expected structure used by a Mongoose model.",
      steps: [
        {
          icon: "1️⃣",
          title: "Define Schema",
          text: "Define fields and their types."
        },
        {
          icon: "2️⃣",
          title: "Create Model",
          text: "Create a Mongoose model from the schema."
        },
        {
          icon: "3️⃣",
          title: "Create Document",
          text: "Use the model to create documents."
        },
        {
          icon: "4️⃣",
          title: "Store Data",
          text: "The document can be saved in MongoDB."
        }
      ],
      flow:
        "Schema → Model → Document → MongoDB"
    },

    code: {
      title: "Create a Mongoose Schema",
      description:
        "Define a basic student schema.",
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
    type: String
  }
});`,
      output:
        "A Mongoose schema defining name, age and course fields.",
      explanation:
        "The schema defines field types and validation rules. required: true means the field must be provided when creating a document."
    },

    interview: {
      question: "What is a Mongoose Schema?",
      answer:
        "A Mongoose Schema defines the structure, field types and rules for documents handled by a Mongoose model.",
      tip:
        "Schema defines structure; Model is created from the schema."
    },

    tricky: {
      question: "Does creating a schema automatically create a MongoDB collection?",
      answer:
        "Creating a schema alone does not create a collection. The schema is used to create a model, which can then interact with MongoDB."
    },

    practice: {
      question:
        "Create a student schema with name, email and age fields.",
      hint:
        "Use mongoose.Schema and specify appropriate field types."
    },

    challenge: {
      title: "Design a Student Schema",
      description:
        "Create a structured schema for student data.",
      task:
        "Create a Mongoose schema containing name, email, age and course fields. Make name and email required."
    }
  },

  "mongoose-model": {
    concept: {
      heading: "Mongoose Model",
      paragraphs: [
        "A Mongoose Model is created from a Mongoose Schema and provides an interface for interacting with MongoDB documents.",
        "Models can be used to create, read, update and delete documents.",
        "A model represents a collection and provides methods for database operations."
      ],
      remember:
        "A Mongoose Model is created from a Schema and is used to work with MongoDB documents."
    },

    analogy: {
      heading: "Think of a Database Manager",
      items: [
        {
          icon: "📋",
          title: "Schema",
          text: "The schema defines the structure and rules."
        },
        {
          icon: "👨‍💼",
          title: "Model",
          text: "The model provides methods for working with documents."
        },
        {
          icon: "🗄️",
          title: "Collection",
          text: "The model interacts with the corresponding MongoDB collection."
        }
      ]
    },

    visual: {
      heading: "Schema to Model",
      description:
        "A Mongoose model is created from a schema and used for database operations.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Schema",
          text: "Define document structure."
        },
        {
          icon: "2️⃣",
          title: "Create Model",
          text: "Pass the schema to mongoose.model()."
        },
        {
          icon: "3️⃣",
          title: "Use Model",
          text: "Call methods such as find(), create() and updateOne()."
        },
        {
          icon: "4️⃣",
          title: "MongoDB",
          text: "The model communicates with the MongoDB collection."
        }
      ],
      flow:
        "Schema → Model → CRUD Methods → MongoDB"
    },

    code: {
      title: "Create a Mongoose Model",
      description:
        "Create a Student model from a schema.",
      language: "javascript",
      code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model(
  "Student",
  studentSchema
);

module.exports = Student;`,
      output:
        "A Student model that can be used for MongoDB operations.",
      explanation:
        "mongoose.model() creates a model using the specified schema. The Student model can then be used for CRUD operations."
    },

    interview: {
      question: "What is a Mongoose Model?",
      answer:
        "A Mongoose Model is created from a schema and provides methods for interacting with documents in a MongoDB collection.",
      tip:
        "Remember the relationship: Schema defines structure, Model performs database operations."
    },

    tricky: {
      question: "Can one model perform multiple CRUD operations?",
      answer:
        "Yes. A Mongoose model provides methods for creating, reading, updating and deleting documents."
    },

    practice: {
      question:
        "Create a Student model using a student schema.",
      hint:
        "Use mongoose.model('Student', studentSchema)."
    },

    challenge: {
      title: "Create a Student Model",
      description:
        "Build a reusable Mongoose model.",
      task:
        "Create a studentSchema and use it to create a Student model. Export the model so it can be used in other files."
    }
  },

  "mongoose-crud": {
    concept: {
      heading: "Mongoose CRUD",
      paragraphs: [
        "Mongoose provides methods for performing Create, Read, Update and Delete operations on MongoDB documents.",
        "Common methods include create(), find(), findById(), updateOne(), findByIdAndUpdate() and deleteOne().",
        "These methods allow Node.js applications to work with MongoDB using Mongoose models."
      ],
      remember:
        "Mongoose models provide convenient methods for MongoDB CRUD operations."
    },

    analogy: {
      heading: "Think of Student Records",
      items: [
        {
          icon: "➕",
          title: "Create",
          text: "Add a new student record."
        },
        {
          icon: "🔍",
          title: "Read",
          text: "Find student records."
        },
        {
          icon: "✏️",
          title: "Update",
          text: "Change student information."
        },
        {
          icon: "🗑️",
          title: "Delete",
          text: "Remove a student record."
        }
      ]
    },

    visual: {
      heading: "Mongoose CRUD Flow",
      description:
        "A Mongoose model can perform all four basic database operations.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create",
          text: "Use create() to add a document."
        },
        {
          icon: "2️⃣",
          title: "Read",
          text: "Use find() or findById() to retrieve documents."
        },
        {
          icon: "3️⃣",
          title: "Update",
          text: "Use update methods to modify documents."
        },
        {
          icon: "4️⃣",
          title: "Delete",
          text: "Use delete methods to remove documents."
        }
      ],
      flow:
        "Create → Read → Update → Delete"
    },

    code: {
      title: "Basic Mongoose CRUD",
      description:
        "Perform basic CRUD operations using a Student model.",
      language: "javascript",
      code: `// Create
const student = await Student.create({
  name: "Student One",
  age: 21,
  course: "MERN Stack"
});

// Read
const students = await Student.find();

// Update
await Student.updateOne(
  { name: "Student One" },
  { $set: { age: 22 } }
);

// Delete
await Student.deleteOne({
  name: "Student One"
});`,
      output:
        "A student document is created, retrieved, updated and then deleted.",
      explanation:
        "Mongoose model methods map common application operations to MongoDB database operations."
    },

    interview: {
      question: "How do you perform CRUD operations with Mongoose?",
      answer:
        "Mongoose provides model methods such as create(), find(), updateOne() and deleteOne() for CRUD operations.",
      tip:
        "Know at least one Create, Read, Update and Delete method."
    },

    tricky: {
      question: "Does Student.find() return one document or multiple documents?",
      answer:
        "find() returns an array of matching documents. Use methods such as findOne() or findById() when a single document is required."
    },

    practice: {
      question:
        "Create a student, find all students, update one student and delete one student using Mongoose.",
      hint:
        "Use create(), find(), updateOne() and deleteOne()."
    },

    challenge: {
      title: "Build Mongoose CRUD",
      description:
        "Create a complete CRUD flow for students.",
      task:
        "Use a Student model to create a document, retrieve students, update a student's course and delete a student."
    }
  },

  "relationships": {
    concept: {
      heading: "MongoDB Relationships",
      paragraphs: [
        "MongoDB can represent relationships between documents in different ways.",
        "Related data can be embedded inside documents or stored in separate collections using references.",
        "The appropriate approach depends on how the application reads, updates and manages the related data."
      ],
      remember:
        "MongoDB relationships can be represented using embedded documents or references."
    },

    analogy: {
      heading: "Think of Student and Course Data",
      items: [
        {
          icon: "👨‍🎓",
          title: "Student",
          text: "A student document contains student information."
        },
        {
          icon: "📚",
          title: "Course",
          text: "A course document contains course information."
        },
        {
          icon: "🔗",
          title: "Relationship",
          text: "The application can connect the two using embedding or references."
        }
      ]
    },

    visual: {
      heading: "Two Common Relationship Approaches",
      description:
        "MongoDB applications commonly choose between embedding related data and referencing another document.",
      steps: [
        {
          icon: "1️⃣",
          title: "Embedding",
          text: "Store related information inside the parent document."
        },
        {
          icon: "2️⃣",
          title: "Referencing",
          text: "Store an identifier that points to a related document."
        },
        {
          icon: "3️⃣",
          title: "Choose Based on Usage",
          text: "Consider how frequently related data is accessed and updated."
        },
        {
          icon: "4️⃣",
          title: "Query Related Data",
          text: "Use application logic, Mongoose population or aggregation when references are used."
        }
      ],
      flow:
        "Related Data → Embed OR Reference → Query Related Information"
    },

    code: {
      title: "Reference a Related Document",
      description:
        "Store a reference from a student to a course.",
      language: "javascript",
      code: `const studentSchema = new mongoose.Schema({
  name: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
});`,
      output:
        "The student schema stores a MongoDB ObjectId reference to a Course document.",
      explanation:
        "Schema.Types.ObjectId is commonly used to reference another MongoDB document. The ref option tells Mongoose which model the reference belongs to."
    },

    interview: {
      question: "How can relationships be represented in MongoDB?",
      answer:
        "Relationships can be represented using embedded documents or references between documents.",
      tip:
        "Choose the approach based on the application's data access and update requirements."
    },

    tricky: {
      question: "Is embedding always better than referencing?",
      answer:
        "No. Both approaches have different use cases. The choice depends on data size, access patterns and how related data changes."
    },

    practice: {
      question:
        "Create a Student schema that references a Course document using ObjectId.",
      hint:
        "Use mongoose.Schema.Types.ObjectId and the ref option."
    },

    challenge: {
      title: "Design a Student-Course Relationship",
      description:
        "Practice connecting two Mongoose models.",
      task:
        "Create Student and Course schemas. Store a course reference inside Student using ObjectId and ref."
    }
  },

  "population": {
    concept: {
      heading: "Mongoose Population",
      paragraphs: [
        "Mongoose population is used to replace referenced document IDs with the related documents.",
        "It is commonly used when a Mongoose schema contains a reference to another model.",
        "The populate() method makes it easier to retrieve related information in application code."
      ],
      remember:
        "populate() replaces referenced document IDs with related documents in Mongoose query results."
    },

    analogy: {
      heading: "Think of a Reference Number",
      items: [
        {
          icon: "🔢",
          title: "Reference ID",
          text: "A student document stores the ID of a related course."
        },
        {
          icon: "🔍",
          title: "Find Related Data",
          text: "Mongoose uses the reference to find the related course."
        },
        {
          icon: "📚",
          title: "Populated Result",
          text: "The query result includes the related course document."
        }
      ]
    },

    visual: {
      heading: "Population Flow",
      description:
        "populate() allows Mongoose to retrieve referenced documents along with the main document.",
      steps: [
        {
          icon: "1️⃣",
          title: "Student Document",
          text: "The student contains a course ObjectId."
        },
        {
          icon: "2️⃣",
          title: "Reference",
          text: "The schema specifies ref: 'Course'."
        },
        {
          icon: "3️⃣",
          title: "populate()",
          text: "Mongoose retrieves the referenced Course document."
        },
        {
          icon: "4️⃣",
          title: "Combined Result",
          text: "The query result contains the related course information."
        }
      ],
      flow:
        "Student → Course ID → populate() → Course Document"
    },

    code: {
      title: "Using populate()",
      description:
        "Retrieve students together with their referenced course information.",
      language: "javascript",
      code: `const students = await Student
  .find()
  .populate("course");

console.log(students);`,
      output:
        "Each student result contains the populated course document instead of only the referenced course ID.",
      explanation:
        "The populate() method uses the reference defined in the schema to retrieve related documents from the Course model."
    },

    interview: {
      question: "What is populate() in Mongoose?",
      answer:
        "populate() is a Mongoose method used to retrieve documents referenced by another document and include the related data in the query result.",
      tip:
        "Remember: ObjectId stores the reference, populate() retrieves the referenced document."
    },

    tricky: {
      question: "Does populate() work without a reference definition?",
      answer:
        "Mongoose population normally requires a reference defined in the schema using an ObjectId and the ref option."
    },

    practice: {
      question:
        "Create a Student schema with a Course reference and use populate() to retrieve course details.",
      hint:
        "Define ref: 'Course' and call .populate('course')."
    },

    challenge: {
      title: "Build a Populated Student Query",
      description:
        "Practice retrieving related course information.",
      task:
        "Create Student and Course models. Add a course reference to Student and use populate() to return students with their complete course details."
    }
  },
    // ============================================================
  // MONGODB PROJECTS
  // ============================================================

  "mongodb-project-1": {
    concept: {
      heading: "Project 1: Student Management Database",
      paragraphs: [
        "The Student Management Database is a beginner-friendly MongoDB project for practicing document creation, CRUD operations and queries.",
        "The project stores student information such as name, email, age and course.",
        "It helps learners understand how MongoDB can be used to manage structured application data."
      ],
      remember:
        "A Student Management Database is a practical way to practice MongoDB CRUD and query operations."
    },

    analogy: {
      heading: "Think of a Training Institute",
      items: [
        {
          icon: "👨‍🎓",
          title: "Students",
          text: "The system stores information about students."
        },
        {
          icon: "📚",
          title: "Courses",
          text: "Each student can be associated with a course."
        },
        {
          icon: "🔍",
          title: "Search",
          text: "The application can find students using different conditions."
        },
        {
          icon: "✏️",
          title: "Manage",
          text: "Student records can be created, updated and deleted."
        }
      ]
    },

    visual: {
      heading: "Student Management Flow",
      description:
        "The application uses MongoDB to store and manage student records.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Database",
          text: "Create a database for student management."
        },
        {
          icon: "2️⃣",
          title: "Create Collection",
          text: "Create a students collection."
        },
        {
          icon: "3️⃣",
          title: "Add Students",
          text: "Insert student documents."
        },
        {
          icon: "4️⃣",
          title: "Perform CRUD",
          text: "Read, update and delete student records."
        }
      ],
      flow:
        "Database → Students Collection → CRUD → Student Management"
    },

    code: {
      title: "Student Management Example",
      description:
        "Create and retrieve student documents using the MongoDB Node.js Driver.",
      language: "javascript",
      code: `const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb://127.0.0.1:27017"
);

async function run() {
  await client.connect();

  const db = client.db("studentDB");
  const students = db.collection("students");

  await students.insertMany([
    {
      name: "Student One",
      email: "student1@example.com",
      age: 21,
      course: "MERN Stack"
    },
    {
      name: "Student Two",
      email: "student2@example.com",
      age: 22,
      course: "React"
    }
  ]);

  const result = await students.find().toArray();

  console.log(result);
}

run();`,
      output:
        "The students collection contains student documents and the application retrieves them using find().",
      explanation:
        "This project demonstrates database connection, collection access, document insertion and document retrieval using Node.js."
    },

    interview: {
      question: "What MongoDB operations are useful in a Student Management project?",
      answer:
        "Common operations include insert, find, update and delete for managing student records.",
      tip:
        "Connect every project feature to a MongoDB CRUD operation."
    },

    tricky: {
      question: "Should all student information be stored in a single field?",
      answer:
        "No. Student information should normally be represented using separate meaningful fields such as name, email, age and course."
    },

    practice: {
      question:
        "Create a students collection and add five student documents.",
      hint:
        "Use fields such as name, email, age and course."
    },

    challenge: {
      title: "Build a Student Management Database",
      description:
        "Create a MongoDB database for managing student records.",
      task:
        "Create a studentDB database and students collection. Insert at least five students, find students by course, update one student and delete one student."
    }
  },

  "mongodb-project-2": {
    concept: {
      heading: "Project 2: Course Management System",
      paragraphs: [
        "The Course Management System stores information about courses offered by an educational platform.",
        "A course can contain information such as title, duration, instructor and fee.",
        "The project provides practice with CRUD operations, filtering, sorting and aggregation."
      ],
      remember:
        "A Course Management System is useful for practicing MongoDB documents, queries and aggregation."
    },

    analogy: {
      heading: "Think of an Online Learning Platform",
      items: [
        {
          icon: "📚",
          title: "Courses",
          text: "The system stores available courses."
        },
        {
          icon: "⏱️",
          title: "Duration",
          text: "Each course can have a defined duration."
        },
        {
          icon: "💰",
          title: "Fee",
          text: "Course pricing can be stored as numeric data."
        },
        {
          icon: "📊",
          title: "Reports",
          text: "Aggregation can be used to create course statistics."
        }
      ]
    },

    visual: {
      heading: "Course Management Flow",
      description:
        "The project manages course information and allows users to search and analyze courses.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Courses",
          text: "Store course information in MongoDB."
        },
        {
          icon: "2️⃣",
          title: "Search Courses",
          text: "Filter courses based on fields such as category or fee."
        },
        {
          icon: "3️⃣",
          title: "Sort Courses",
          text: "Sort courses by fee or duration."
        },
        {
          icon: "4️⃣",
          title: "Generate Statistics",
          text: "Use aggregation to calculate course statistics."
        }
      ],
      flow:
        "Courses → Search → Sort → Aggregation → Reports"
    },

    code: {
      title: "Course Management Example",
      description:
        "Insert course documents and find courses below a specified fee.",
      language: "javascript",
      code: `db.courses.insertMany([
  {
    title: "MERN Stack Development",
    duration: 12,
    fee: 25000,
    category: "Development"
  },
  {
    title: "React Development",
    duration: 8,
    fee: 18000,
    category: "Frontend"
  },
  {
    title: "Node.js Development",
    duration: 8,
    fee: 20000,
    category: "Backend"
  }
]);

db.courses.find({
  fee: {
    $lt: 20000
  }
});`,
      output:
        "The query returns courses whose fee is less than 20000.",
      explanation:
        "The project uses insertMany() to create course records and $lt to filter courses based on their fee."
    },

    interview: {
      question: "Which MongoDB features can be used in a Course Management System?",
      answer:
        "CRUD operations, query operators, sorting, pagination, indexes and aggregation can all be useful.",
      tip:
        "Choose MongoDB features according to the application's requirements."
    },

    tricky: {
      question: "Should course fee be stored as a string?",
      answer:
        "For numeric comparisons and calculations, fee should generally be stored using an appropriate numeric BSON type rather than a string."
    },

    practice: {
      question:
        "Find all courses whose fee is between 15000 and 25000.",
      hint:
        "Use $gte and $lte together."
    },

    challenge: {
      title: "Build a Course Management System",
      description:
        "Create and manage course records using MongoDB.",
      task:
        "Create a courses collection with title, duration, fee and category. Add at least five courses, filter courses by fee, sort them by duration and create an aggregation showing courses by category."
    }
  },

  "mongodb-project-3": {
    concept: {
      heading: "Project 3: Job Portal Database",
      paragraphs: [
        "The Job Portal Database stores information about jobs, companies and applicants.",
        "Job documents can contain fields such as title, company, location, salary and skills.",
        "The project provides practical experience with filtering, arrays, indexes and relationships between collections."
      ],
      remember:
        "A Job Portal is a practical MongoDB project for working with searchable and related data."
    },

    analogy: {
      heading: "Think of a Job Search Website",
      items: [
        {
          icon: "💼",
          title: "Jobs",
          text: "The database stores available job opportunities."
        },
        {
          icon: "🏢",
          title: "Companies",
          text: "Company information can be stored separately."
        },
        {
          icon: "🧑‍💻",
          title: "Applicants",
          text: "Applicant information can be connected to job records."
        },
        {
          icon: "🔎",
          title: "Search",
          text: "Users can search jobs by location, skills or salary."
        }
      ]
    },

    visual: {
      heading: "Job Portal Data Flow",
      description:
        "The application stores job information and allows users to search and manage job records.",
      steps: [
        {
          icon: "1️⃣",
          title: "Create Job",
          text: "Store job title, company, location and salary."
        },
        {
          icon: "2️⃣",
          title: "Add Skills",
          text: "Store required skills in an array."
        },
        {
          icon: "3️⃣",
          title: "Search",
          text: "Filter jobs using fields and array values."
        },
        {
          icon: "4️⃣",
          title: "Connect Data",
          text: "Use references or aggregation when related collections are needed."
        }
      ],
      flow:
        "Jobs → Skills → Search → Related Data"
    },

    code: {
      title: "Job Portal Example",
      description:
        "Create job documents and search for jobs requiring React.",
      language: "javascript",
      code: `db.jobs.insertMany([
  {
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Delhi",
    salary: 60000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Backend Developer",
    company: "Software Company",
    location: "Delhi",
    salary: 70000,
    skills: ["Node.js", "Express", "MongoDB"]
  }
]);

db.jobs.find({
  skills: "React"
});`,
      output:
        "The query returns job documents whose skills array contains React.",
      explanation:
        "MongoDB can match an array element directly when querying a field containing an array."
    },

    interview: {
      question: "Why are arrays useful in a Job Portal database?",
      answer:
        "Arrays can store multiple related values such as required skills for a job.",
      tip:
        "MongoDB supports querying documents based on array contents."
    },

    tricky: {
      question: "Can MongoDB search for a value inside an array field?",
      answer:
        "Yes. MongoDB can match array elements using normal query conditions and can also provide array-specific operators."
    },

    practice: {
      question:
        "Find all jobs that require JavaScript.",
      hint:
        "Query the skills field with the value JavaScript."
    },

    challenge: {
      title: "Build a Job Portal Database",
      description:
        "Create a searchable job database.",
      task:
        "Create a jobs collection containing title, company, location, salary and skills. Add at least five jobs and implement queries for location, salary and required skills. Create an index for a frequently searched field."
    }
  },

  "mongodb-project-4": {
    concept: {
      heading: "Project 4: E-Commerce Database",
      paragraphs: [
        "The E-Commerce Database stores products, customers and orders.",
        "Products can contain information such as name, category, price and stock.",
        "Orders can reference products and customers, making this project useful for practicing relationships, aggregation and $lookup."
      ],
      remember:
        "An E-Commerce database combines MongoDB CRUD, relationships, aggregation and reporting."
    },

    analogy: {
      heading: "Think of an Online Store",
      items: [
        {
          icon: "🛍️",
          title: "Products",
          text: "The store contains products with prices and stock."
        },
        {
          icon: "👤",
          title: "Customers",
          text: "Customers place orders through the application."
        },
        {
          icon: "📦",
          title: "Orders",
          text: "Orders contain information about purchased products."
        },
        {
          icon: "📊",
          title: "Reports",
          text: "Aggregation can be used to calculate sales statistics."
        }
      ]
    },

    visual: {
      heading: "E-Commerce Data Flow",
      description:
        "The database connects product, customer and order information.",
      steps: [
        {
          icon: "1️⃣",
          title: "Products",
          text: "Store product details and stock information."
        },
        {
          icon: "2️⃣",
          title: "Customers",
          text: "Store customer information."
        },
        {
          icon: "3️⃣",
          title: "Orders",
          text: "Store order details and product references."
        },
        {
          icon: "4️⃣",
          title: "Reports",
          text: "Use aggregation and lookup to analyze order data."
        }
      ],
      flow:
        "Products + Customers → Orders → Aggregation → Reports"
    },

    code: {
      title: "E-Commerce Aggregation Example",
      description:
        "Calculate the total value of order items.",
      language: "javascript",
      code: `db.orders.aggregate([
  {
    $unwind: "$items"
  },
  {
    $group: {
      _id: "$customerId",
      totalAmount: {
        $sum: {
          $multiply: [
            "$items.price",
            "$items.quantity"
          ]
        }
      }
    }
  }
])`,
      output:
        "The aggregation produces the total order amount for each customer.",
      explanation:
        "$unwind creates a separate pipeline document for each item in the items array. $group then calculates the total using $multiply and $sum."
    },

    interview: {
      question: "Why is an E-Commerce application a good MongoDB project?",
      answer:
        "It provides practical use cases for products, customers, orders, CRUD operations, references, aggregation and reporting.",
      tip:
        "Focus on how different MongoDB features solve real application requirements."
    },

    tricky: {
      question: "Why might order item information be embedded inside an order?",
      answer:
        "Embedding can keep information that belongs directly to an order together and can make retrieving the order with its items convenient. The correct design depends on application requirements."
    },

    practice: {
      question:
        "Create products and orders collections and calculate the total order amount using aggregation.",
      hint:
        "Consider an items array containing price and quantity."
    },

    challenge: {
      title: "Build an E-Commerce Database",
      description:
        "Create a complete MongoDB database structure for an online store.",
      task:
        "Create products, customers and orders collections. Implement product CRUD, create customer orders, use $lookup where appropriate and build an aggregation report showing total sales."
    }
  },
    // ============================================================
  // INTERVIEW PREPARATION
  // ============================================================

  "mongodb-interview": {
    concept: {
      heading: "MongoDB Interview Questions",
      paragraphs: [
        "MongoDB interviews commonly test database fundamentals, documents, collections, CRUD operations, queries, indexes and aggregation.",
        "Candidates should understand not only MongoDB syntax but also why a particular feature is used.",
        "Practical knowledge of designing collections and solving common database problems is important for MongoDB development."
      ],
      remember:
        "For MongoDB interviews, understand concepts, syntax and real-world use cases together."
    },

    analogy: {
      heading: "Think Like a Developer",
      items: [
        {
          icon: "📚",
          title: "Concept",
          text: "Understand what a MongoDB feature does."
        },
        {
          icon: "💻",
          title: "Syntax",
          text: "Know how to write the required MongoDB command."
        },
        {
          icon: "🧠",
          title: "Reason",
          text: "Understand when and why the feature should be used."
        },
        {
          icon: "🎯",
          title: "Application",
          text: "Be able to apply the concept in a real project."
        }
      ]
    },

    visual: {
      heading: "MongoDB Interview Preparation",
      description:
        "A strong interview preparation strategy combines fundamentals, queries, database design and practical problem solving.",
      steps: [
        {
          icon: "1️⃣",
          title: "Fundamentals",
          text: "Review documents, collections, BSON and ObjectId."
        },
        {
          icon: "2️⃣",
          title: "CRUD & Queries",
          text: "Practice insert, find, update, delete and query operators."
        },
        {
          icon: "3️⃣",
          title: "Advanced Topics",
          text: "Review indexes, aggregation, $lookup and validation."
        },
        {
          icon: "4️⃣",
          title: "Projects",
          text: "Apply MongoDB concepts in real application scenarios."
        }
      ],
      flow:
        "Fundamentals → CRUD & Queries → Advanced → Projects"
    },

    code: {
      title: "Common MongoDB Interview Questions",
      description:
        "Review some frequently discussed MongoDB concepts.",
      language: "javascript",
      code: `// Find students older than 20
db.students.find({
  age: {
    $gt: 20
  }
});

// Sort students by age
db.students.find().sort({
  age: -1
});

// Count students by course
db.students.aggregate([
  {
    $group: {
      _id: "$course",
      total: {
        $sum: 1
      }
    }
  }
]);`,
      output:
        "The examples demonstrate filtering, sorting and aggregation.",
      explanation:
        "Interview questions often ask candidates to write queries as well as explain the purpose of the MongoDB operators being used."
    },

    interview: {
      question: "What is the difference between a document and a collection in MongoDB?",
      answer:
        "A document is an individual record stored in BSON format. A collection is a group of related documents.",
      tip:
        "A useful comparison is: document is similar to a record, while collection is similar to a table in a relational database."
    },

    tricky: {
      question: "What is the difference between find() and findOne()?",
      answer:
        "find() returns a cursor that can provide multiple matching documents, while findOne() returns a single matching document or null when no document matches."
    },

    practice: {
      question:
        "Write MongoDB queries to find students older than 20, sort them by age and return only the first five results.",
      hint:
        "Use find(), $gt, sort() and limit()."
    },

    challenge: {
      title: "MongoDB Interview Practice",
      description:
        "Prepare for a practical MongoDB interview.",
      task:
        "Practice explaining documents, collections, BSON, ObjectId, CRUD, indexes, aggregation, $lookup and MongoDB relationships. Also write queries for filtering, sorting, updating and deleting documents."
    }
  },

  "mongoose-interview": {
    concept: {
      heading: "Mongoose Interview Questions",
      paragraphs: [
        "Mongoose interview questions commonly focus on schemas, models, validation, CRUD operations, references and population.",
        "Candidates should understand the relationship between a schema, model and MongoDB collection.",
        "Practical questions may require writing Mongoose queries and explaining how referenced documents are retrieved."
      ],
      remember:
        "Understand the relationship between Schema, Model and MongoDB before learning advanced Mongoose features."
    },

    analogy: {
      heading: "Think of the Mongoose Structure",
      items: [
        {
          icon: "📋",
          title: "Schema",
          text: "Defines the structure and rules for application documents."
        },
        {
          icon: "🧩",
          title: "Model",
          text: "Provides methods for interacting with MongoDB documents."
        },
        {
          icon: "🔗",
          title: "Reference",
          text: "Connects a document with a related document."
        },
        {
          icon: "🔍",
          title: "Populate",
          text: "Retrieves referenced documents in query results."
        }
      ]
    },

    visual: {
      heading: "Mongoose Interview Flow",
      description:
        "Prepare Mongoose concepts from basic modeling to relationships.",
      steps: [
        {
          icon: "1️⃣",
          title: "Schema",
          text: "Understand field definitions and validation."
        },
        {
          icon: "2️⃣",
          title: "Model",
          text: "Understand how models perform database operations."
        },
        {
          icon: "3️⃣",
          title: "CRUD",
          text: "Practice common Mongoose methods."
        },
        {
          icon: "4️⃣",
          title: "Relationships",
          text: "Understand ObjectId references and populate()."
        }
      ],
      flow:
        "Schema → Model → CRUD → Relationships → populate()"
    },

    code: {
      title: "Common Mongoose Interview Example",
      description:
        "Create a schema, model and query using populate().",
      language: "javascript",
      code: `const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }
});

const Student = mongoose.model(
  "Student",
  studentSchema
);

const students = await Student
  .find()
  .populate("course");`,
      output:
        "Students are retrieved with the referenced course documents populated.",
      explanation:
        "The schema defines the course reference, the model provides database methods and populate() retrieves the referenced Course documents."
    },

    interview: {
      question: "What is the difference between a Mongoose Schema and Model?",
      answer:
        "A Schema defines the structure and rules of documents, while a Model is created from the schema and provides methods for interacting with MongoDB.",
      tip:
        "Remember: Schema defines; Model operates."
    },

    tricky: {
      question: "What is the difference between ObjectId reference and populate()?",
      answer:
        "The ObjectId reference stores the identifier of a related document, while populate() retrieves the referenced document and includes it in the query result."
    },

    practice: {
      question:
        "Create a Student schema with a Course reference and use populate() to retrieve course details.",
      hint:
        "Use mongoose.Schema.Types.ObjectId with ref: 'Course'."
    },

    challenge: {
      title: "Mongoose Interview Practice",
      description:
        "Practice explaining Mongoose concepts and writing code.",
      task:
        "Prepare answers for Schema vs Model, MongoDB Driver vs Mongoose, validation, CRUD methods, ObjectId references and populate(). Then write a small Student-Course example."
    }
  },

  "mongodb-coding-questions": {
    concept: {
      heading: "MongoDB Coding Questions",
      paragraphs: [
        "MongoDB coding questions test the ability to write queries and aggregation pipelines for practical data problems.",
        "Common tasks include filtering documents, sorting results, updating records, working with arrays and creating aggregation pipelines.",
        "The best way to prepare is to practice writing queries against realistic collections."
      ],
      remember:
        "MongoDB coding skills improve through repeated practice with real data problems."
    },

    analogy: {
      heading: "Think of a Coding Test",
      items: [
        {
          icon: "📄",
          title: "Problem",
          text: "You receive a database requirement."
        },
        {
          icon: "🧠",
          title: "Approach",
          text: "Choose the appropriate MongoDB operator or aggregation stage."
        },
        {
          icon: "💻",
          title: "Query",
          text: "Write the MongoDB command."
        },
        {
          icon: "✅",
          title: "Result",
          text: "Verify that the query produces the expected data."
        }
      ]
    },

    visual: {
      heading: "MongoDB Coding Process",
      description:
        "Break database coding problems into smaller steps before writing the query.",
      steps: [
        {
          icon: "1️⃣",
          title: "Understand Data",
          text: "Identify the collection and relevant fields."
        },
        {
          icon: "2️⃣",
          title: "Understand Requirement",
          text: "Determine what documents or values are required."
        },
        {
          icon: "3️⃣",
          title: "Choose Operators",
          text: "Select query operators or aggregation stages."
        },
        {
          icon: "4️⃣",
          title: "Test Result",
          text: "Run and verify the query with sample data."
        }
      ],
      flow:
        "Data → Requirement → Operators / Stages → Query → Result"
    },

    code: {
      title: "MongoDB Coding Practice",
      description:
        "Practice filtering, sorting and aggregation with student data.",
      language: "javascript",
      code: `// 1. Find students older than 20
db.students.find({
  age: {
    $gt: 20
  }
});

// 2. Find students from a specific course
db.students.find({
  course: "MERN Stack"
});

// 3. Sort by age descending
db.students.find().sort({
  age: -1
});

// 4. Get the top 5 students by age
db.students
  .find()
  .sort({ age: -1 })
  .limit(5);

// 5. Count students by course
db.students.aggregate([
  {
    $group: {
      _id: "$course",
      totalStudents: {
        $sum: 1
      }
    }
  }
]);`,
      output:
        "The queries filter, sort, limit and group student documents.",
      explanation:
        "These examples demonstrate common patterns used in MongoDB coding interviews. The exact query should always be based on the structure of the collection and the requirement."
    },

    interview: {
      question: "How do you approach a MongoDB coding problem?",
      answer:
        "First understand the document structure and requirement, then select the appropriate query operators or aggregation stages and verify the result with sample data.",
      tip:
        "Do not start writing operators immediately. First understand the data and expected result."
    },

    tricky: {
      question: "Should every MongoDB problem be solved using aggregation?",
      answer:
        "No. Simple filtering, sorting, updating and deleting tasks can often be handled with normal MongoDB query methods. Aggregation is useful when multiple processing stages or calculations are required."
    },

    practice: {
      question:
        "Write a query to find the top three highest-paid jobs in a jobs collection.",
      hint:
        "Use find(), sort() with descending order and limit()."
    },

    challenge: {
      title: "MongoDB Coding Challenge",
      description:
        "Solve practical MongoDB coding problems using different query techniques.",
      task:
        "Create a students collection and solve these tasks: find students older than 20, find students from a specific course, update a student's age, delete one student, sort students by age and group students by course."
    }
  },
};