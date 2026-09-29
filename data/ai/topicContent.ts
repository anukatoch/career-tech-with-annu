import type { TopicContent } from "@/data/javascript/topicContent";

export const aiTopicContent: Record<string, TopicContent> = {
  "what-is-ai": {
    concept: {
      heading: "What is Artificial Intelligence?",
      paragraphs: [
        "Artificial Intelligence (AI) is a field of computer science that focuses on building systems that can perform tasks that normally require human intelligence.",
        "These tasks can include understanding language, recognizing images, finding patterns, making predictions, solving problems and generating content.",
        "AI systems use data, algorithms and computational models to process information and produce useful outputs.",
        "In modern applications, AI can be used to automate repetitive tasks, assist users and add intelligent features to software applications."
      ],
      remember:
        "AI enables computer systems to perform tasks that normally require human-like intelligence."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🧠",
          title: "Human Brain",
          text: "The human brain receives information, identifies patterns and makes decisions."
        },
        {
          icon: "💻",
          title: "AI System",
          text: "An AI system processes data using algorithms and models to produce an output."
        },
        {
          icon: "📚",
          title: "Learning from Data",
          text: "Many AI systems use large amounts of data to identify patterns and improve their results."
        }
      ]
    },

    visual: {
      heading: "How AI Works at a Basic Level",
      description:
        "An AI application receives information, processes it using a model and produces an output.",
      steps: [
        {
          icon: "1️⃣",
          title: "Input",
          text: "The system receives data such as text, images, audio or numbers."
        },
        {
          icon: "2️⃣",
          title: "Processing",
          text: "Algorithms and models process the supplied information."
        },
        {
          icon: "3️⃣",
          title: "Pattern Recognition",
          text: "The system uses learned patterns or programmed logic to analyze the input."
        },
        {
          icon: "4️⃣",
          title: "Output",
          text: "The AI system produces a prediction, decision, classification or generated result."
        }
      ],
      flow: "Input → AI Model → Processing → Output"
    },

    code: {
      title: "A Simple AI Application Example",
      description:
        "A web application can send user input to an AI service and display the generated response.",
      language: "javascript",
      code: `const userQuestion = "Explain JavaScript";

async function askAI() {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: userQuestion
    })
  });

  const data = await response.json();

  console.log(data.answer);
}

askAI();`,
      output:
        "The application receives an AI-generated answer and displays it to the user.",
      explanation:
        "The frontend sends a prompt to an AI service through an API. The service processes the request and returns a response that the application can display."
    },

    interview: {
      question: "What is Artificial Intelligence?",
      answer:
        "Artificial Intelligence is a field of computer science that focuses on creating systems capable of performing tasks that normally require human intelligence.",
      tip:
        "Mention examples such as language understanding, image recognition, prediction and content generation."
    },

    tricky: {
      question: "Is every automated program an AI system?",
      answer:
        "No. Traditional automation can follow fixed rules without learning or intelligent pattern-based processing. AI systems generally involve techniques designed to perform tasks associated with intelligence."
    },

    practice: {
      question:
        "Give three examples of AI features that can be added to a web application.",
      hint:
        "Think about chatbots, recommendations, content generation, search or image analysis."
    },

    challenge: {
      title: "Identify AI Features",
      description:
        "Analyze a normal web application and identify where AI could provide useful functionality.",
      task:
        "Choose an e-commerce, education or job portal application and list five features that could use AI."
    }
  },

  "ai-vs-ml-vs-deep-learning": {
    concept: {
      heading: "AI vs Machine Learning vs Deep Learning",
      paragraphs: [
        "Artificial Intelligence is the broad field of creating systems that can perform tasks associated with intelligence.",
        "Machine Learning (ML) is a subset of AI in which systems learn patterns from data and use those patterns to make predictions or decisions.",
        "Deep Learning is a subset of Machine Learning that uses multi-layer neural networks to learn complex patterns from large amounts of data.",
        "The relationship can be understood as Deep Learning being inside Machine Learning, and Machine Learning being inside the broader field of AI."
      ],
      remember:
        "AI is the broad field, Machine Learning is a subset of AI, and Deep Learning is a subset of Machine Learning."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🌳",
          title: "AI",
          text: "Think of AI as the entire tree representing intelligent computer systems."
        },
        {
          icon: "🌿",
          title: "Machine Learning",
          text: "Machine Learning is one major branch of that tree that learns patterns from data."
        },
        {
          icon: "🍃",
          title: "Deep Learning",
          text: "Deep Learning is a specialized branch using neural networks with multiple layers."
        }
      ]
    },

    visual: {
      heading: "Relationship Between AI, ML and Deep Learning",
      description:
        "AI contains Machine Learning, and Machine Learning contains Deep Learning.",
      steps: [
        {
          icon: "1️⃣",
          title: "Artificial Intelligence",
          text: "The broad field of intelligent computer systems."
        },
        {
          icon: "2️⃣",
          title: "Machine Learning",
          text: "A subset of AI that learns patterns from data."
        },
        {
          icon: "3️⃣",
          title: "Deep Learning",
          text: "A subset of Machine Learning based on multi-layer neural networks."
        },
        {
          icon: "4️⃣",
          title: "Applications",
          text: "These technologies can be used in areas such as recommendations, vision and language processing."
        }
      ],
      flow: "AI → Machine Learning → Deep Learning"
    },

    code: {
      title: "Simple Classification Example",
      description:
        "A machine learning model can be used to classify an input based on patterns learned from data.",
      language: "javascript",
      code: `const input = {
  studyHours: 6,
  assignmentsCompleted: 8
};

// A trained ML model could use
// these features to make a prediction.

const prediction = "Likely to complete course";

console.log(prediction);`,
      output: "Likely to complete course",
      explanation:
        "In a real machine learning application, a trained model would analyze input features and generate the prediction. The example only represents the basic application flow."
    },

    interview: {
      question: "What is the difference between AI, ML and Deep Learning?",
      answer:
        "AI is the broad field of intelligent computer systems. Machine Learning is a subset of AI that learns patterns from data. Deep Learning is a subset of Machine Learning that uses multi-layer neural networks.",
      tip:
        "Remember the hierarchy: AI → ML → Deep Learning."
    },

    tricky: {
      question: "Is Machine Learning the same as Artificial Intelligence?",
      answer:
        "No. Machine Learning is one approach within the broader field of Artificial Intelligence."
    },

    practice: {
      question:
        "Draw a simple diagram showing the relationship between AI, Machine Learning and Deep Learning.",
      hint:
        "Draw three nested levels: AI outside, ML inside AI, and Deep Learning inside ML."
    },

    challenge: {
      title: "Explain AI, ML and Deep Learning",
      description:
        "Practice explaining the three terms in simple language.",
      task:
        "Write a five-line explanation that clearly shows how AI, Machine Learning and Deep Learning are related."
    }
  },

  "what-is-generative-ai": {
    concept: {
      heading: "What is Generative AI?",
      paragraphs: [
        "Generative AI is a type of artificial intelligence that can create new content based on patterns learned from existing data.",
        "The generated content can include text, images, audio, video, code and other forms of digital content.",
        "Generative AI models process a user's instructions, often called prompts, and generate an output based on the model's learned patterns.",
        "For web developers, Generative AI can be integrated into applications such as chatbots, coding assistants, content tools and intelligent search experiences."
      ],
      remember:
        "Generative AI creates new content such as text, images, code, audio or other outputs from user instructions."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "✍️",
          title: "Writer",
          text: "A writer receives a topic and creates an original piece of content."
        },
        {
          icon: "🤖",
          title: "Generative AI",
          text: "A generative AI model receives a prompt and generates content based on learned patterns."
        },
        {
          icon: "💡",
          title: "Prompt",
          text: "A prompt provides instructions about what the user wants the model to generate."
        }
      ]
    },

    visual: {
      heading: "Generative AI Flow",
      description:
        "A user provides instructions and the model generates a response based on those instructions and its learned patterns.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Prompt",
          text: "The user enters an instruction or question."
        },
        {
          icon: "2️⃣",
          title: "Model Processing",
          text: "The AI model processes the prompt using its learned patterns."
        },
        {
          icon: "3️⃣",
          title: "Generation",
          text: "The model generates new content."
        },
        {
          icon: "4️⃣",
          title: "Application Output",
          text: "The web application displays the generated result."
        }
      ],
      flow: "Prompt → AI Model → Generation → Response"
    },

    code: {
      title: "AI Prompt Example",
      description:
        "A web application can prepare a prompt before sending it to an AI API.",
      language: "javascript",
      code: `const topic = "JavaScript";

const prompt = \`
Explain \${topic} to a beginner

console.log(prompt);`,
      output:
        "A structured prompt asking the AI model to explain JavaScript to a beginner.",
      explanation:
        "The application creates a prompt dynamically. The prompt can then be sent to an AI API to generate the requested content."
    },

    interview: {
      question: "What is Generative AI?",
      answer:
        "Generative AI refers to AI systems that can generate new content such as text, images, code, audio or video based on learned patterns and user instructions.",
      tip:
        "Mention examples of generated content rather than defining Generative AI only as a chatbot."
    },

    tricky: {
      question: "Does Generative AI simply copy content from its training data?",
      answer:
        "A generative model produces outputs by using patterns learned during training. Its output is generated from those learned patterns rather than being a simple copy-and-paste operation."
    },

    practice: {
      question:
        "Write a prompt that asks an AI model to explain React components to a beginner.",
      hint:
        "Clearly specify the topic, audience and type of explanation you want."
    },

    challenge: {
      title: "Create a Useful AI Prompt",
      description:
        "Design a prompt that could be used inside an educational web application.",
      task:
        "Write a prompt that asks an AI model to explain a programming topic, provide one example and then give the learner a practice question."
    }
  },

  "how-ai-models-work": {
    concept: {
      heading: "How AI Models Work",
      paragraphs: [
        "An AI model is a computational model that has been trained to identify patterns in data and produce useful outputs.",
        "During training, a model processes data and adjusts internal parameters so that it can perform a particular task.",
        "After training, the model can receive new input and use what it learned to generate a prediction, classification or response.",
        "When a user sends a request to a generative AI application, the request is processed by a model and the generated result is returned to the application."
      ],
      remember:
        "Training teaches a model patterns from data, while inference uses the trained model to process new input."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📚",
          title: "Training",
          text: "A student studies many examples to learn a subject."
        },
        {
          icon: "🧠",
          title: "Learned Patterns",
          text: "The student develops an understanding of patterns and relationships."
        },
        {
          icon: "📝",
          title: "Inference",
          text: "The student uses that knowledge to answer a new question."
        }
      ]
    },

    visual: {
      heading: "Training and Inference",
      description:
        "AI systems generally have a training stage and an inference stage.",
      steps: [
        {
          icon: "1️⃣",
          title: "Collect Data",
          text: "Relevant data is collected for the intended task."
        },
        {
          icon: "2️⃣",
          title: "Train Model",
          text: "The model learns patterns by processing training data."
        },
        {
          icon: "3️⃣",
          title: "Receive Input",
          text: "A new input is provided to the trained model."
        },
        {
          icon: "4️⃣",
          title: "Generate Output",
          text: "The trained model processes the input and produces an output."
        }
      ],
      flow: "Training Data → Model Training → Trained Model → New Input → Output"
    },

    code: {
      title: "Model Inference Concept",
      description:
        "A web application typically sends new input to an already trained model.",
      language: "javascript",
      code: `const input = {
  message: "Explain APIs"
};

// Conceptual example
const result = await aiModel.generate(input);

console.log(result);`,
      output:
        "The trained model returns an output based on the supplied input.",
      explanation:
        "The example represents inference. The model has already been trained and is now processing new input to generate an output."
    },

    interview: {
      question: "What is the difference between training and inference?",
      answer:
        "Training is the process of learning patterns from data by adjusting a model's parameters. Inference is the process of using a trained model to generate an output for new input.",
      tip:
        "A simple way to remember it is: training learns, inference uses."
    },

    tricky: {
      question: "Does a model train itself every time a user sends a request?",
      answer:
        "No. In a typical application, user requests are processed during inference using an already trained model. Model training is a separate process."
    },

    practice: {
      question:
        "Explain training and inference using a simple example from an AI chatbot.",
      hint:
        "Think about what happens before the chatbot is deployed and what happens when a user asks a question."
    },

    challenge: {
      title: "Draw an AI Model Flow",
      description:
        "Create a visual flow showing how training and inference are connected.",
      task:
        "Draw a diagram containing Training Data, Model Training, Trained Model, User Input and AI Output."
    }
  },

  "llms-explained": {
    concept: {
      heading: "Large Language Models (LLMs)",
      paragraphs: [
        "A Large Language Model (LLM) is an AI model designed to process and generate human language.",
        "LLMs are trained on large collections of text data so they can learn patterns in language, relationships between words and structures commonly found in text.",
        "When a user provides a prompt, an LLM processes the input and generates a response based on the patterns represented in the model.",
        "LLMs are commonly used for chatbots, content generation, summarization, question answering, coding assistance and other language-related tasks."
      ],
      remember:
        "An LLM is an AI model designed to understand and generate human language."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📖",
          title: "Large Library",
          text: "Imagine a system exposed to a very large collection of written language."
        },
        {
          icon: "🧩",
          title: "Language Patterns",
          text: "The model learns relationships and patterns within language data."
        },
        {
          icon: "💬",
          title: "Response",
          text: "When given a prompt, the model generates a response based on those learned patterns."
        }
      ]
    },

    visual: {
      heading: "How an LLM Processes a Prompt",
      description:
        "An LLM receives text input and generates a language response based on the model's learned representations.",
      steps: [
        {
          icon: "1️⃣",
          title: "Prompt",
          text: "The user provides a question or instruction."
        },
        {
          icon: "2️⃣",
          title: "Token Processing",
          text: "The text is represented as tokens that the model can process."
        },
        {
          icon: "3️⃣",
          title: "Model Processing",
          text: "The model analyzes relationships and patterns represented in the input."
        },
        {
          icon: "4️⃣",
          title: "Generated Response",
          text: "The model produces a sequence of tokens that forms the response."
        }
      ],
      flow: "Prompt → Tokens → LLM → Generated Tokens → Response"
    },

    code: {
      title: "Simple LLM Request Concept",
      description:
        "A web application can send a prompt to an LLM through an API.",
      language: "javascript",
      code: `const prompt = "Explain REST API in simple words";

const response = await fetch("/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ prompt })
});

const data = await response.json();

console.log(data.answer);`,
      output:
        "The application receives a language response generated by the LLM.",
      explanation:
        "The frontend sends a prompt to a backend endpoint. The backend can communicate with an LLM provider and return the generated response to the frontend."
    },

    interview: {
      question: "What is an LLM?",
      answer:
        "An LLM, or Large Language Model, is an AI model designed to process and generate human language.",
      tip:
        "Mention common applications such as chatbots, summarization, content generation and coding assistance."
    },

    tricky: {
      question: "Does an LLM store every answer as a normal database record?",
      answer:
        "No. An LLM is a trained model containing learned parameters and representations. It is not simply a database of stored answers."
    },

    practice: {
      question:
        "Create a prompt that asks an LLM to explain MongoDB CRUD operations to a beginner.",
      hint:
        "Specify the topic, audience and the format you want for the answer."
    },

    challenge: {
      title: "Design an LLM Chat Feature",
      description:
        "Plan a simple chatbot feature for a learning website.",
      task:
        "Write the frontend-to-backend flow for a chatbot: user message → frontend → backend → LLM API → response → frontend UI."
    }
  },

  "ai-in-web-development": {
    concept: {
      heading: "AI in Web Development",
      paragraphs: [
        "AI can be integrated into web applications to provide intelligent features that go beyond traditional form-based or rule-based functionality.",
        "Web developers can use AI APIs to build chatbots, recommendation systems, content generators, document analyzers, coding assistants and intelligent search features.",
        "A typical AI-powered web application contains a user interface, an application layer and an AI service or model.",
        "For production applications, developers should also consider API security, authentication, input validation, rate limiting, error handling and responsible handling of user data."
      ],
      remember:
        "AI can add intelligent features to web applications, but secure API architecture and responsible data handling are essential."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🖥️",
          title: "Frontend",
          text: "The frontend is the interface through which the user interacts with the AI feature."
        },
        {
          icon: "⚙️",
          title: "Backend",
          text: "The backend can validate requests, protect credentials and communicate with external AI services."
        },
        {
          icon: "🤖",
          title: "AI Service",
          text: "The AI model processes the request and generates the required result."
        }
      ]
    },

    visual: {
      heading: "AI-Powered Web Application Architecture",
      description:
        "A secure architecture separates the user interface from protected AI service credentials.",
      steps: [
        {
          icon: "1️⃣",
          title: "User",
          text: "The user enters a question or request."
        },
        {
          icon: "2️⃣",
          title: "Frontend",
          text: "The React or web interface sends the request to the application backend."
        },
        {
          icon: "3️⃣",
          title: "Backend",
          text: "The backend validates the request and communicates with the AI service."
        },
        {
          icon: "4️⃣",
          title: "AI Model",
          text: "The AI service processes the request and generates a response."
        }
      ],
      flow: "User → Frontend → Backend → AI Service → Backend → Frontend"
    },

    code: {
      title: "AI Feature in a Web Application",
      description:
        "The frontend can call an application endpoint instead of directly exposing a private AI API key.",
      language: "javascript",
      code: `async function askAI(question) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question
    })
  });

  if (!response.ok) {
    throw new Error("AI request failed");
  }

  const data = await response.json();

  return data.answer;
}

askAI("Explain React components")
  .then(console.log)
  .catch(console.error);`,
      output:
        "The application receives an AI-generated answer through its own API endpoint.",
      explanation:
        "The frontend sends the user's question to the application's backend. The backend can securely communicate with the AI provider and return the result."
    },

    interview: {
      question: "How can AI be integrated into a web application?",
      answer:
        "A web application can integrate AI through an AI API or model service. The frontend collects user input, the application backend communicates with the AI service, and the generated response is returned to the frontend.",
      tip:
        "Mention API integration, backend security, validation and error handling."
    },

    tricky: {
      question: "Should a private AI API key normally be exposed directly in frontend JavaScript?",
      answer:
        "A private API key should generally not be exposed in browser code because users can inspect frontend code and network requests. A backend service is commonly used to protect private credentials."
    },

    practice: {
      question:
        "Design the basic architecture for an AI chatbot inside a React application.",
      hint:
        "Think about React UI, backend API, AI service and response flow."
    },

    challenge: {
      title: "Build an AI Web App Architecture",
      description:
        "Plan the architecture for a secure AI-powered learning application.",
      task:
        "Create a diagram showing React Frontend → Node.js Backend → AI API → Node.js Backend → React Frontend. Add authentication and error handling to the design."
    }
  },
    "ai-apis": {
    concept: {
      heading: "AI APIs",
      paragraphs: [
        "An AI API allows a web application to communicate with an AI model through HTTP requests.",
        "Instead of building and training an AI model from scratch, developers can use an API provided by an AI platform.",
        "A typical AI API request contains information such as a model, user prompt and other optional parameters.",
        "The API processes the request and returns a response that can be used by the application."
      ],
      remember:
        "An AI API provides a way for applications to communicate with an AI model."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🍽️",
          title: "Restaurant",
          text: "A customer places an order instead of cooking the complete meal themselves."
        },
        {
          icon: "📋",
          title: "API Request",
          text: "The application sends a request describing what it needs."
        },
        {
          icon: "🤖",
          title: "AI Service",
          text: "The AI service processes the request and returns the generated result."
        }
      ]
    },

    visual: {
      heading: "How an AI API Works",
      description:
        "An application sends a request to an AI API and receives a model-generated response.",
      steps: [
        {
          icon: "1️⃣",
          title: "Application",
          text: "The web application collects the user's input."
        },
        {
          icon: "2️⃣",
          title: "API Request",
          text: "The application sends the prompt to the AI API."
        },
        {
          icon: "3️⃣",
          title: "AI Model",
          text: "The AI service processes the request."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "The generated result is returned to the application."
        }
      ],
      flow: "Web App → AI API → AI Model → Response → Web App"
    },

    code: {
      title: "Calling an AI API",
      description:
        "A frontend or backend application can send a request to an AI service.",
      language: "javascript",
      code: `async function generateAnswer(prompt) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt
    })
  });

  if (!response.ok) {
    throw new Error("AI API request failed");
  }

  const data = await response.json();

  return data.answer;
}

generateAnswer("Explain JavaScript")
  .then(console.log)
  .catch(console.error);`,
      output:
        "The application receives the generated AI response.",
      explanation:
        "The example sends a prompt to the application's API endpoint. The backend can then communicate with the actual AI provider and return the result."
    },

    interview: {
      question: "What is an AI API?",
      answer:
        "An AI API is an interface that allows an application to communicate with an AI model through requests and responses.",
      tip:
        "Explain that developers can use an existing AI service instead of building an AI model from scratch."
    },

    tricky: {
      question: "Does using an AI API mean that the developer has created the AI model?",
      answer:
        "No. Using an AI API generally means that the application is consuming an AI service provided by another platform or service."
    },

    practice: {
      question:
        "What information would a chatbot application normally send to an AI API?",
      hint:
        "Think about the user's message, model information and optional generation settings."
    },

    challenge: {
      title: "Design an AI API Flow",
      description:
        "Create a basic architecture for a web application using an AI API.",
      task:
        "Draw the flow: User → React UI → Backend API → AI API → Backend → React UI."
    }
  },

  "api-keys-security": {
    concept: {
      heading: "API Keys & Security",
      paragraphs: [
        "An API key is a credential used by an application or developer to authenticate requests to an API.",
        "AI API keys are sensitive credentials because they may allow access to paid or rate-limited services.",
        "A private API key should not normally be placed directly inside frontend JavaScript because browser code can be inspected by users.",
        "For production applications, private API credentials are commonly stored on the server using environment variables or a secure secrets-management system."
      ],
      remember:
        "Never expose a private AI API key directly in client-side code."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🔑",
          title: "API Key",
          text: "An API key works like a credential that allows access to a service."
        },
        {
          icon: "🏦",
          title: "Bank Password",
          text: "A private credential should not be publicly displayed or shared."
        },
        {
          icon: "🔒",
          title: "Backend",
          text: "A backend can keep sensitive credentials away from browser code."
        }
      ]
    },

    visual: {
      heading: "Secure API Key Flow",
      description:
        "The browser communicates with your backend, while the backend communicates with the AI provider using the private key.",
      steps: [
        {
          icon: "1️⃣",
          title: "User",
          text: "The user enters a prompt in the web application."
        },
        {
          icon: "2️⃣",
          title: "Frontend",
          text: "The frontend sends the prompt to your backend."
        },
        {
          icon: "3️⃣",
          title: "Backend",
          text: "The backend securely accesses the AI provider using the private API key."
        },
        {
          icon: "4️⃣",
          title: "AI Service",
          text: "The AI provider processes the request and returns a response."
        }
      ],
      flow: "Browser → Backend → AI Provider → Backend → Browser"
    },

    code: {
      title: "Using an Environment Variable",
      description:
        "A backend can read a private API key from an environment variable.",
      language: "javascript",
      code: `const apiKey = process.env.AI_API_KEY;

if (!apiKey) {
  throw new Error("AI_API_KEY is not configured");
}

console.log("API key is available on the server");`,
      output:
        "The backend can access the API key without putting the key directly in frontend code.",
      explanation:
        "Environment variables allow sensitive configuration values to be kept outside the source code. The exact environment-variable syntax can vary between frameworks and deployment platforms."
    },

    interview: {
      question: "Why should an AI API key not be exposed in frontend code?",
      answer:
        "Frontend code runs in the user's browser and can be inspected. If a private API key is included there, another person may be able to obtain and misuse it.",
      tip:
        "Mention backend protection and environment variables."
    },

    tricky: {
      question: "Is putting an API key in a frontend .env file automatically secure?",
      answer:
        "No. If the build system exposes that variable to client-side JavaScript, the value can still become visible in the browser. The key must remain server-side."
    },

    practice: {
      question:
        "Where should a private AI API key normally be stored in a Node.js application?",
      hint:
        "Think about server-side environment variables."
    },

    challenge: {
      title: "Secure an AI Application",
      description:
        "Identify security improvements for a simple React AI chatbot.",
      task:
        "Redesign the architecture so the AI API key is never sent to the browser."
    }
  },

  "prompt-engineering": {
    concept: {
      heading: "Prompt Engineering",
      paragraphs: [
        "Prompt engineering is the process of designing clear and effective instructions for an AI model.",
        "A good prompt can specify the task, context, audience, format and constraints required for the expected output.",
        "For developers, prompt engineering is useful when building chatbots, content generators, coding assistants and educational applications.",
        "The quality of the prompt can affect how relevant, structured and useful the generated response is."
      ],
      remember:
        "Prompt engineering means designing clear instructions that guide an AI model toward the desired output."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "👨‍🏫",
          title: "Teacher Instruction",
          text: "A teacher gives clear instructions so students understand exactly what they need to do."
        },
        {
          icon: "📝",
          title: "Prompt",
          text: "A prompt gives instructions to an AI model."
        },
        {
          icon: "🎯",
          title: "Expected Result",
          text: "Clear instructions can make the desired output easier for the model to produce."
        }
      ]
    },

    visual: {
      heading: "Building a Better Prompt",
      description:
        "A structured prompt can contain several useful components.",
      steps: [
        {
          icon: "1️⃣",
          title: "Task",
          text: "Clearly describe what the AI should do."
        },
        {
          icon: "2️⃣",
          title: "Context",
          text: "Provide information that helps the model understand the situation."
        },
        {
          icon: "3️⃣",
          title: "Format",
          text: "Specify how the response should be structured."
        },
        {
          icon: "4️⃣",
          title: "Constraints",
          text: "Mention important limitations such as length, audience or required points."
        }
      ],
      flow: "Task + Context + Format + Constraints → Better Prompt"
    },

    code: {
      title: "Structured Prompt",
      description:
        "A web application can build a prompt containing task, audience and output requirements.",
      language: "javascript",
      code: `const prompt = \`
Task:
Explain REST APIs.

Audience:
Beginner web developers.

Format:
Use simple language and one JavaScript example.

Constraint:
Keep the explanation concise.
\`;

console.log(prompt);`,
      output:
        "A structured instruction that clearly tells the AI what to explain and how to present it.",
      explanation:
        "The prompt contains the task, audience, format and constraint. This gives the model more useful context than a very short instruction."
    },

    interview: {
      question: "What is prompt engineering?",
      answer:
        "Prompt engineering is the process of designing and refining instructions so that an AI model can produce a useful and relevant output.",
      tip:
        "Mention task, context, format and constraints."
    },

    tricky: {
      question: "Does a longer prompt always produce a better answer?",
      answer:
        "No. A prompt should contain relevant information and clear instructions. Adding unnecessary information can make a prompt less effective."
    },

    practice: {
      question:
        "Improve this prompt: 'Explain React.'",
      hint:
        "Add the target audience, required example and preferred format."
    },

    challenge: {
      title: "Create a Developer Prompt",
      description:
        "Design a reusable prompt for an AI-powered learning application.",
      task:
        "Create a prompt that asks an AI to explain a programming concept, provide an example, mention a common mistake and give one practice question."
    }
  },

  "system-user-prompts": {
    concept: {
      heading: "System and User Prompts",
      paragraphs: [
        "AI applications can use different types of instructions to control how a model behaves and what the user wants.",
        "A system instruction generally defines high-level behavior, rules or role for the AI assistant.",
        "A user prompt contains the request or task provided by the user.",
        "Keeping these responsibilities separate can make an AI application's behavior easier to control and understand."
      ],
      remember:
        "System instructions define behavior, while user prompts usually contain the user's specific request."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📜",
          title: "System Instruction",
          text: "Think of this as the rules given to an assistant before the conversation begins."
        },
        {
          icon: "👤",
          title: "User Prompt",
          text: "This is the specific request made by the user."
        },
        {
          icon: "🤖",
          title: "AI Response",
          text: "The model uses the available instructions and user request to generate a response."
        }
      ]
    },

    visual: {
      heading: "Instruction Hierarchy",
      description:
        "An AI application can provide high-level behavior instructions and then pass the user's specific request.",
      steps: [
        {
          icon: "1️⃣",
          title: "System",
          text: "Define the assistant's role and important behavioral instructions."
        },
        {
          icon: "2️⃣",
          title: "User",
          text: "Provide the specific question or task."
        },
        {
          icon: "3️⃣",
          title: "Model",
          text: "Process the instructions and user input."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "Generate an answer following the available instructions."
        }
      ],
      flow: "System Instructions + User Prompt → AI Model → Response"
    },

    code: {
      title: "Representing System and User Instructions",
      description:
        "An application can represent different instruction roles as structured messages.",
      language: "javascript",
      code: `const messages = [
  {
    role: "system",
    content: "You are a helpful programming tutor."
  },
  {
    role: "user",
    content: "Explain JavaScript arrays."
  }
];

console.log(messages);`,
      output:
        "A structured collection containing system and user instructions.",
      explanation:
        "The exact API format differs between AI providers, but the concept is similar: separate high-level assistant behavior from the user's request."
    },

    interview: {
      question: "What is the difference between a system prompt and a user prompt?",
      answer:
        "A system prompt or instruction generally defines the assistant's behavior or role, while a user prompt contains the user's specific request.",
      tip:
        "Think: system = behavior, user = task."
    },

    tricky: {
      question: "Can a user prompt replace every system-level instruction?",
      answer:
        "Not necessarily. AI platforms can apply different instruction priorities and controls. Application developers should design system-level behavior and user input separately."
    },

    practice: {
      question:
        "Write a system instruction and a user prompt for an AI programming tutor.",
      hint:
        "System: define the tutor's behavior. User: ask a specific programming question."
    },

    challenge: {
      title: "Design a Tutor Prompt Structure",
      description:
        "Create a prompt architecture for an AI programming tutor.",
      task:
        "Write one system instruction and three different user prompts for JavaScript learners."
    }
  },

  "tokens-context": {
    concept: {
      heading: "Tokens and Context",
      paragraphs: [
        "AI language models process text using tokens rather than directly processing complete sentences as individual units.",
        "A token can represent a word, part of a word, punctuation or another piece of text depending on the tokenizer used by the model.",
        "The context window represents the amount of information a model can consider within a request or conversation.",
        "Long prompts and long chat histories consume more context, so developers need to manage conversation data carefully."
      ],
      remember:
        "Tokens are units processed by language models, while context represents the information available to the model during processing."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🧱",
          title: "Tokens",
          text: "Think of tokens as small building blocks used to represent text."
        },
        {
          icon: "📦",
          title: "Context",
          text: "Think of the context window as the amount of information that can fit into a working space."
        },
        {
          icon: "💬",
          title: "Conversation",
          text: "A long conversation can use more of the available context."
        }
      ]
    },

    visual: {
      heading: "Tokens and Context Flow",
      description:
        "Text is converted into tokens before being processed by a language model.",
      steps: [
        {
          icon: "1️⃣",
          title: "Text",
          text: "The user enters a message."
        },
        {
          icon: "2️⃣",
          title: "Tokenization",
          text: "The text is represented as tokens."
        },
        {
          icon: "3️⃣",
          title: "Context",
          text: "Relevant input and conversation information is provided to the model."
        },
        {
          icon: "4️⃣",
          title: "Generation",
          text: "The model generates the response within the available context."
        }
      ],
      flow: "Text → Tokens → Context → Model → Response"
    },

    code: {
      title: "Managing Chat History",
      description:
        "A chatbot can limit the amount of conversation history sent to an AI service.",
      language: "javascript",
      code: `const messages = [
  { role: "user", content: "What is React?" },
  { role: "assistant", content: "React is a UI library." },
  { role: "user", content: "What is a component?" }
];

const recentMessages = messages.slice(-2);

console.log(recentMessages);`,
      output:
        "Only the most recent messages are selected for the next request.",
      explanation:
        "Managing conversation history can help control context size and reduce unnecessary information sent with every request."
    },

    interview: {
      question: "What is a token in an LLM?",
      answer:
        "A token is a unit of text processed by a language model. Depending on the tokenizer, a token can represent a word, part of a word, punctuation or another text segment.",
      tip:
        "Do not assume that one token always equals one complete word."
    },

    tricky: {
      question: "Is one token always equal to one word?",
      answer:
        "No. Tokenization depends on the model and tokenizer. A token may represent a complete word, part of a word, punctuation or another text segment."
    },

    practice: {
      question:
        "Why can a very long chatbot conversation become difficult for an AI application to manage?",
      hint:
        "Think about context size and the amount of conversation sent with each request."
    },

    challenge: {
      title: "Optimize Chat Context",
      description:
        "Design a strategy for managing a long AI chatbot conversation.",
      task:
        "Create a plan that keeps recent messages while summarizing older messages to reduce unnecessary context."
    }
  },

  "temperature-model-parameters": {
    concept: {
      heading: "Temperature and Model Parameters",
      paragraphs: [
        "AI model parameters control different aspects of how a model processes requests or generates responses.",
        "Temperature is commonly used as a generation setting that influences the variability of generated output.",
        "Lower temperature settings are generally associated with more consistent and focused outputs, while higher settings can produce more varied responses.",
        "The exact behavior and available parameters depend on the AI model and provider being used."
      ],
      remember:
        "Temperature can influence output variability, but available parameters and their behavior depend on the model and provider."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📋",
          title: "Low Variation",
          text: "Like asking for a precise answer where consistency is important."
        },
        {
          icon: "🎨",
          title: "Higher Variation",
          text: "Like asking for creative alternatives where more variety may be useful."
        },
        {
          icon: "⚙️",
          title: "Parameter",
          text: "A parameter acts as a configurable setting that influences model behavior."
        }
      ]
    },

    visual: {
      heading: "Understanding Temperature",
      description:
        "Temperature can be adjusted depending on whether consistency or variation is more important.",
      steps: [
        {
          icon: "1️⃣",
          title: "Prompt",
          text: "The application sends an instruction to the model."
        },
        {
          icon: "2️⃣",
          title: "Parameter",
          text: "The application may provide generation settings supported by the model."
        },
        {
          icon: "3️⃣",
          title: "Model Generation",
          text: "The model generates output using the supplied configuration."
        },
        {
          icon: "4️⃣",
          title: "Result",
          text: "The application receives the generated response."
        }
      ],
      flow: "Prompt + Parameters → Model → Generated Response"
    },

    code: {
      title: "Generation Configuration",
      description:
        "AI SDKs may allow developers to provide generation settings.",
      language: "javascript",
      code: `const request = {
  prompt: "Generate a short product description",
  temperature: 0.4
};

console.log(request);`,
      output:
        "A request containing a prompt and a generation parameter.",
      explanation:
        "The exact request format varies between AI providers. The example demonstrates the concept of sending a generation setting with a prompt."
    },

    interview: {
      question: "What does temperature generally control in text generation?",
      answer:
        "Temperature generally influences the variability or randomness of generated output. Lower values tend to produce more consistent output, while higher values can produce more variation.",
      tip:
        "Remember that exact behavior can vary by model and provider."
    },

    tricky: {
      question: "Does increasing temperature make the AI more intelligent?",
      answer:
        "No. Temperature is a generation setting and does not make a model inherently more intelligent. It can influence the variation of generated responses."
    },

    practice: {
      question:
        "For which type of application might you prefer a more consistent output?",
      hint:
        "Think about applications where predictable formatting or answers are important."
    },

    challenge: {
      title: "Choose Model Settings",
      description:
        "Think about different applications and decide whether consistency or variation is more useful.",
      task:
        "Compare a coding assistant, creative story generator and FAQ chatbot. Explain which type of output behavior each application needs and why."
    }
  },
    "calling-ai-api": {
    concept: {
      heading: "Calling an AI API",
      paragraphs: [
        "JavaScript applications can communicate with AI services through APIs.",
        "A typical request contains information such as the user's prompt and other configuration required by the AI service.",
        "The application sends the request using HTTP and receives the AI-generated response.",
        "In production applications, sensitive API credentials should normally be handled by a secure backend rather than exposed in browser code."
      ],
      remember:
        "JavaScript can communicate with AI services through HTTP APIs."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📞",
          title: "Calling a Service",
          text: "A JavaScript application sends a request to an AI service just like a client requests a service."
        },
        {
          icon: "📨",
          title: "Request",
          text: "The application sends instructions or data to the AI service."
        },
        {
          icon: "📬",
          title: "Response",
          text: "The AI service processes the request and sends the result back."
        }
      ]
    },

    visual: {
      heading: "JavaScript to AI API Flow",
      description:
        "JavaScript uses an HTTP request to communicate with an AI service.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Input",
          text: "The user enters a question or instruction."
        },
        {
          icon: "2️⃣",
          title: "JavaScript",
          text: "JavaScript prepares the API request."
        },
        {
          icon: "3️⃣",
          title: "AI API",
          text: "The AI service processes the request."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "JavaScript receives and displays the AI response."
        }
      ],
      flow: "User → JavaScript → AI API → Response → UI"
    },

    code: {
      title: "Calling an API with fetch()",
      description:
        "The fetch API can be used to send an HTTP request from JavaScript.",
      language: "javascript",
      code: `async function sendPrompt(prompt) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt
    })
  });

  const data = await response.json();

  return data.answer;
}

sendPrompt("Explain JavaScript")
  .then(console.log);`,
      output:
        "The AI response is returned to the JavaScript application.",
      explanation:
        "The frontend sends the prompt to an application endpoint. The endpoint can communicate with the actual AI provider and return the generated result."
    },

    interview: {
      question: "How can JavaScript communicate with an AI API?",
      answer:
        "JavaScript can use HTTP requests, commonly through fetch() or an HTTP library, to send data to an AI API and receive the response.",
      tip:
        "Mention request method, headers, request body and response handling."
    },

    tricky: {
      question: "Should a browser application directly contain a private AI API key?",
      answer:
        "A private API key should generally not be exposed in browser code. A backend endpoint is commonly used to protect the credential."
    },

    practice: {
      question:
        "Write a JavaScript function that sends a user's question to /api/ai.",
      hint:
        "Use async/await, fetch(), POST and JSON.stringify()."
    },

    challenge: {
      title: "Create an AI API Function",
      description:
        "Build the JavaScript function responsible for sending a user prompt.",
      task:
        "Create a reusable sendPrompt() function that sends a POST request and returns the AI answer."
    }
  },

  "ai-chatbot-javascript": {
    concept: {
      heading: "Building an AI Chatbot with JavaScript",
      paragraphs: [
        "An AI chatbot combines a user interface, conversation state and an AI service.",
        "JavaScript can handle user input, send messages to an application API and update the chat interface with the returned response.",
        "A basic chatbot needs to manage at least the user's message, loading state, AI response and conversation history.",
        "For a production chatbot, developers should also consider authentication, rate limiting, validation, error handling and secure API credentials."
      ],
      remember:
        "An AI chatbot connects a chat interface with an AI service and manages the conversation between the user and the model."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "💬",
          title: "Conversation",
          text: "The user sends a message and expects an answer."
        },
        {
          icon: "⚙️",
          title: "JavaScript",
          text: "JavaScript manages the interaction and communicates with the application backend."
        },
        {
          icon: "🤖",
          title: "AI",
          text: "The AI service generates the response."
        }
      ]
    },

    visual: {
      heading: "Basic Chatbot Architecture",
      description:
        "A chatbot application passes the user's message through the application to the AI service.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Message",
          text: "The user types a message into the chat box."
        },
        {
          icon: "2️⃣",
          title: "JavaScript",
          text: "JavaScript captures the message and sends it to the backend."
        },
        {
          icon: "3️⃣",
          title: "AI Service",
          text: "The backend communicates with the AI service."
        },
        {
          icon: "4️⃣",
          title: "Chat Response",
          text: "The response is returned and displayed in the chat interface."
        }
      ],
      flow: "User → Chat UI → JavaScript → Backend → AI → Response"
    },

    code: {
      title: "Simple Chatbot Function",
      description:
        "This example shows the basic request flow for a chatbot.",
      language: "javascript",
      code: `async function sendMessage(message) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message
    })
  });

  if (!response.ok) {
    throw new Error("Chat request failed");
  }

  const data = await response.json();

  return data.answer;
}

sendMessage("What is React?")
  .then(answer => {
    console.log(answer);
  })
  .catch(error => {
    console.error(error);
  });`,
      output:
        "The chatbot receives an AI-generated answer.",
      explanation:
        "The function sends the user's message to a backend endpoint and returns the answer received from the server."
    },

    interview: {
      question: "What are the main parts of an AI chatbot?",
      answer:
        "A basic AI chatbot includes a user interface, message handling, conversation state, a backend or API layer and an AI model or service.",
      tip:
        "Explain the complete request-response flow."
    },

    tricky: {
      question: "Can a chatbot work without storing any conversation history?",
      answer:
        "Yes, but each request would have limited conversation context unless the application sends previous messages or another form of context with the request."
    },

    practice: {
      question:
        "List the states you would manage in a JavaScript AI chatbot.",
      hint:
        "Think about messages, loading, error and input states."
    },

    challenge: {
      title: "Build a JavaScript Chatbot",
      description:
        "Plan the logic for a simple browser-based AI chatbot.",
      task:
        "Create a chat interface that accepts a message, shows a loading state, calls /api/chat and displays the returned answer."
    }
  },

  "streaming-responses": {
    concept: {
      heading: "Streaming AI Responses",
      paragraphs: [
        "A streaming response allows an application to receive generated content progressively instead of waiting for the complete response.",
        "This can make an AI chatbot feel faster because users can see the answer appearing while it is being generated.",
        "JavaScript can process streamed data using browser APIs such as ReadableStream and the response body reader.",
        "The exact streaming format depends on the backend and AI provider."
      ],
      remember:
        "Streaming sends an AI response progressively instead of waiting for the complete response."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🚰",
          title: "Water Flow",
          text: "Instead of receiving a full container at once, water arrives continuously through a pipe."
        },
        {
          icon: "📝",
          title: "AI Text",
          text: "Generated text can arrive piece by piece."
        },
        {
          icon: "⚡",
          title: "User Experience",
          text: "The user can start reading before the complete response is finished."
        }
      ]
    },

    visual: {
      heading: "Streaming Response Flow",
      description:
        "The AI response is delivered in multiple chunks that the frontend displays progressively.",
      steps: [
        {
          icon: "1️⃣",
          title: "Request",
          text: "The application sends the user's prompt."
        },
        {
          icon: "2️⃣",
          title: "Generation",
          text: "The AI service starts generating the response."
        },
        {
          icon: "3️⃣",
          title: "Chunks",
          text: "The response is delivered in multiple pieces."
        },
        {
          icon: "4️⃣",
          title: "UI Update",
          text: "JavaScript adds each received chunk to the chat interface."
        }
      ],
      flow: "Prompt → AI Generation → Chunks → JavaScript → Live UI"
    },

    code: {
      title: "Reading a Stream",
      description:
        "The browser can read chunks from a streaming HTTP response.",
      language: "javascript",
      code: `const response = await fetch("/api/ai-stream", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    prompt: "Explain APIs"
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { value, done } = await reader.read();

  if (done) {
    break;
  }

  const chunk = decoder.decode(value, {
    stream: true
  });

  console.log(chunk);
}`,
      output:
        "Individual chunks of the AI response are logged as they arrive.",
      explanation:
        "ReadableStream allows JavaScript to process response data progressively. A real application may need additional parsing depending on the server's streaming format."
    },

    interview: {
      question: "What is streaming in an AI application?",
      answer:
        "Streaming means receiving and displaying generated output progressively rather than waiting for the complete response.",
      tip:
        "Explain why it improves the perceived responsiveness of chat applications."
    },

    tricky: {
      question: "Does streaming make the AI model generate the answer faster?",
      answer:
        "Not necessarily. Streaming mainly allows the application to receive and display partial output earlier instead of waiting for the entire response."
    },

    practice: {
      question:
        "Why is streaming useful for an AI chatbot?",
      hint:
        "Think about user experience and long responses."
    },

    challenge: {
      title: "Create a Streaming Chat UI",
      description:
        "Plan a chatbot that displays generated text as it arrives.",
      task:
        "Use a ReadableStream reader to receive chunks and append them to the current assistant message."
    }
  },

  "error-handling": {
    concept: {
      heading: "Error Handling in AI Applications",
      paragraphs: [
        "AI API requests can fail for many reasons, including network problems, invalid requests, authentication issues, rate limits and service errors.",
        "JavaScript applications should detect failed requests and provide a useful message to the user.",
        "Using try...catch with async/await is a common way to handle errors from asynchronous API calls.",
        "Good error handling should avoid exposing sensitive technical information to users while still providing enough information for debugging."
      ],
      remember:
        "AI applications should handle network, API, authentication, rate-limit and server errors gracefully."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🚦",
          title: "Normal Flow",
          text: "The request reaches the destination and the application receives a response."
        },
        {
          icon: "⚠️",
          title: "Problem",
          text: "The request may fail because of a network or service issue."
        },
        {
          icon: "🛠️",
          title: "Recovery",
          text: "The application catches the problem and shows an appropriate message."
        }
      ]
    },

    visual: {
      heading: "AI API Error Flow",
      description:
        "A robust application checks both network errors and unsuccessful HTTP responses.",
      steps: [
        {
          icon: "1️⃣",
          title: "Send Request",
          text: "JavaScript sends the AI request."
        },
        {
          icon: "2️⃣",
          title: "Check Response",
          text: "The application checks whether the HTTP request succeeded."
        },
        {
          icon: "3️⃣",
          title: "Catch Error",
          text: "Unexpected failures are handled using error handling logic."
        },
        {
          icon: "4️⃣",
          title: "User Message",
          text: "The UI displays a safe and understandable error message."
        }
      ],
      flow: "Request → Response Check → Error Handling → User Feedback"
    },

    code: {
      title: "Handling AI API Errors",
      description:
        "Use try...catch and check response.ok when calling an application API.",
      language: "javascript",
      code: `async function askAI(prompt) {
  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error("AI request failed");
    }

    const data = await response.json();

    return data.answer;
  } catch (error) {
    console.error(error);

    return "Unable to generate a response right now.";
  }
}`,
      output:
        "The application returns a user-friendly message when the request fails.",
      explanation:
        "response.ok checks the HTTP status, while catch handles errors such as network failures or errors thrown by the application."
    },

    interview: {
      question: "How do you handle errors when calling an AI API in JavaScript?",
      answer:
        "Use try...catch for asynchronous errors, check the HTTP response status and provide appropriate fallback behavior for the user.",
      tip:
        "Mention both response.ok and try...catch."
    },

    tricky: {
      question: "Is checking only try...catch enough for fetch() errors?",
      answer:
        "No. fetch() does not automatically reject the promise for every HTTP error status. The application should also check response.ok or the response status."
    },

    practice: {
      question:
        "Modify an AI API function so that it handles both HTTP errors and network errors.",
      hint:
        "Use response.ok inside try and catch errors outside the request."
    },

    challenge: {
      title: "Build Robust Error Handling",
      description:
        "Improve an AI request function so users always receive useful feedback.",
      task:
        "Handle unsuccessful HTTP responses, network failures and invalid JSON responses without exposing sensitive technical details."
    }
  },

  "loading-ui-states": {
    concept: {
      heading: "Loading and UI States",
      paragraphs: [
        "AI requests can take longer than normal local JavaScript operations because the application communicates with an external service.",
        "A good user interface should clearly show when an AI request is in progress.",
        "Common UI states include idle, loading, success and error.",
        "Managing these states prevents users from repeatedly submitting the same request and provides clear feedback while the AI response is being generated."
      ],
      remember:
        "AI interfaces should clearly manage idle, loading, success and error states."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "⏳",
          title: "Loading",
          text: "The system tells the user that work is currently in progress."
        },
        {
          icon: "✅",
          title: "Success",
          text: "The completed AI response is displayed."
        },
        {
          icon: "❌",
          title: "Error",
          text: "The interface informs the user when something goes wrong."
        }
      ]
    },

    visual: {
      heading: "AI UI State Flow",
      description:
        "The interface changes state as the AI request progresses.",
      steps: [
        {
          icon: "1️⃣",
          title: "Idle",
          text: "The user can enter a prompt."
        },
        {
          icon: "2️⃣",
          title: "Loading",
          text: "The request is being processed and the UI shows progress."
        },
        {
          icon: "3️⃣",
          title: "Success",
          text: "The AI response is displayed."
        },
        {
          icon: "4️⃣",
          title: "Error",
          text: "A useful error message is displayed if the request fails."
        }
      ],
      flow: "Idle → Loading → Success / Error"
    },

    code: {
      title: "Simple Loading State",
      description:
        "A JavaScript variable can control whether an AI request is currently running.",
      language: "javascript",
      code: `let isLoading = false;

async function askAI(prompt) {
  isLoading = true;
  console.log("Loading:", isLoading);

  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    return data.answer;
  } finally {
    isLoading = false;
    console.log("Loading:", isLoading);
  }
}`,
      output:
        "The loading state becomes true during the request and false after the request finishes.",
      explanation:
        "The finally block runs after success or failure, making it useful for resetting the loading state."
    },

    interview: {
      question: "Why is a loading state important in an AI application?",
      answer:
        "AI requests may take time, so a loading state tells the user that the request is still being processed and can prevent duplicate submissions.",
      tip:
        "Mention user experience and duplicate requests."
    },

    tricky: {
      question: "Should the loading state remain true when an API request fails?",
      answer:
        "No. The loading state should normally be reset after the request completes, whether it succeeds or fails."
    },

    practice: {
      question:
        "List four UI states that an AI chatbot can have.",
      hint:
        "Think about the state before, during and after an API request."
    },

    challenge: {
      title: "Design AI UI States",
      description:
        "Create a state flow for an AI chatbot.",
      task:
        "Design the UI behavior for idle, loading, success and error states, including which buttons should be enabled or disabled."
    }
  },

  "chat-history": {
    concept: {
      heading: "Managing Chat History",
      paragraphs: [
        "Chat history contains the messages exchanged between the user and the AI assistant.",
        "Maintaining conversation history allows the application to provide previous messages as context for future requests.",
        "A simple chat history can be represented as an array of message objects containing a role and content.",
        "For longer conversations, developers may need to limit, summarize or otherwise manage the history to control the amount of context sent to the AI service."
      ],
      remember:
        "Chat history allows an AI application to maintain conversation context across multiple messages."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📖",
          title: "Conversation Record",
          text: "A conversation record keeps track of what has already been discussed."
        },
        {
          icon: "👤",
          title: "User Message",
          text: "The user's message becomes part of the conversation history."
        },
        {
          icon: "🤖",
          title: "Assistant Message",
          text: "The AI response is also stored so the next request can understand the conversation."
        }
      ]
    },

    visual: {
      heading: "Chat History Flow",
      description:
        "Each message is added to the conversation history before the next AI request.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Message",
          text: "The user sends a new message."
        },
        {
          icon: "2️⃣",
          title: "Add Message",
          text: "The application adds the user message to the history."
        },
        {
          icon: "3️⃣",
          title: "AI Response",
          text: "The AI generates a response using the available conversation context."
        },
        {
          icon: "4️⃣",
          title: "Save Response",
          text: "The assistant response is added to the conversation history."
        }
      ],
      flow: "User Message → History → AI → Assistant Response → History"
    },

    code: {
      title: "Managing Messages with an Array",
      description:
        "A simple JavaScript array can represent the current conversation.",
      language: "javascript",
      code: `const messages = [];

function addMessage(role, content) {
  messages.push({
    role,
    content
  });
}

addMessage("user", "What is Node.js?");

addMessage(
  "assistant",
  "Node.js is a JavaScript runtime."
);

console.log(messages);`,
      output:
        "The messages array contains both user and assistant messages.",
      explanation:
        "Each message stores its role and content. This structure can later be sent to a backend or AI API in the format required by the selected provider."
    },

    interview: {
      question: "Why is chat history important in an AI chatbot?",
      answer:
        "Chat history provides previous conversation context, allowing the AI application to maintain a more meaningful multi-turn conversation.",
      tip:
        "Mention that history can increase context usage, so it may need to be managed."
    },

    tricky: {
      question: "Should an application send unlimited chat history with every request?",
      answer:
        "No. Very long histories can increase context usage and request size. Applications may limit, summarize or otherwise manage older messages."
    },

    practice: {
      question:
        "Create a JavaScript array containing three user messages and three assistant messages.",
      hint:
        "Use objects with role and content properties."
    },

    challenge: {
      title: "Build Conversation History",
      description:
        "Create the data structure for a multi-turn AI chatbot.",
      task:
        "Implement addMessage(), display the conversation in the UI and prepare the message history for an AI API request."
    }
  },
    "react-ai-chatbot": {
    concept: {
      heading: "React AI Chatbot",
      paragraphs: [
        "React is well suited for building AI chat interfaces because its component and state systems make it easy to manage dynamic conversations.",
        "A React AI chatbot usually contains a message list, input field, send button, loading state and API integration.",
        "The React frontend should normally communicate with your backend API instead of exposing private AI credentials in the browser.",
        "The backend can then communicate with the AI provider and return the generated response."
      ],
      remember:
        "React manages the chatbot interface and state, while the backend handles secure communication with the AI service."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🖥️",
          title: "React UI",
          text: "The chat interface is the screen where the user interacts with the assistant."
        },
        {
          icon: "📨",
          title: "Backend",
          text: "The backend works like a secure messenger between the React application and the AI service."
        },
        {
          icon: "🤖",
          title: "AI Model",
          text: "The AI model processes the request and generates the response."
        }
      ]
    },

    visual: {
      heading: "React AI Chatbot Flow",
      description:
        "React manages the user interface while the backend handles the AI request.",
      steps: [
        {
          icon: "1️⃣",
          title: "User",
          text: "The user enters a message in the React interface."
        },
        {
          icon: "2️⃣",
          title: "React",
          text: "React stores the message and sends it to the backend."
        },
        {
          icon: "3️⃣",
          title: "Backend",
          text: "The backend communicates with the AI service."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "React receives the response and updates the chat UI."
        }
      ],
      flow: "User → React → Backend → AI → Backend → React"
    },

    code: {
      title: "Basic React AI Request",
      description:
        "A React component can send a message to an application API.",
      language: "tsx",
      code: `import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  async function sendMessage() {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });

    const data = await response.json();

    setAnswer(data.answer);
  }

  return (
    <div>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <p>{answer}</p>
    </div>
  );
}`,
      output:
        "The React interface sends the user's message and displays the returned answer.",
      explanation:
        "useState stores the input and AI response. fetch() sends the message to the application's backend endpoint, and the response is displayed in the component."
    },

    interview: {
      question: "How would you build an AI chatbot using React?",
      answer:
        "Create a chat UI, manage messages with React state, send requests to a backend API, handle loading and errors, and display the AI response.",
      tip:
        "Explain both frontend state management and backend security."
    },

    tricky: {
      question:
        "Should React directly contain the private AI provider API key?",
      answer:
        "No. A private API key should normally remain on the server. React should communicate with a secure backend endpoint."
    },

    practice: {
      question:
        "Which React state values would you create for a basic AI chatbot?",
      hint:
        "Think about input, messages, loading and errors."
    },

    challenge: {
      title: "Create a React AI Chatbot",
      description:
        "Build the frontend structure for a simple AI chatbot.",
      task:
        "Create a React component with a message input, send button, loading state and response area connected to /api/chat."
    }
  },

  "chat-ui": {
    concept: {
      heading: "Chat UI",
      paragraphs: [
        "A chat UI is the visual interface used to display user and assistant messages.",
        "A good AI chat interface should clearly distinguish between user messages and assistant responses.",
        "Common chat UI elements include a message list, input field, send button, loading indicator and error message.",
        "React components make it possible to split these parts into reusable UI elements."
      ],
      remember:
        "A chat UI should make messages, loading states and user actions easy to understand."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "💬",
          title: "Conversation",
          text: "The chat window represents the conversation between the user and the assistant."
        },
        {
          icon: "👤",
          title: "User Bubble",
          text: "User messages are displayed separately from assistant messages."
        },
        {
          icon: "🤖",
          title: "Assistant Bubble",
          text: "AI responses appear in a different visual style."
        }
      ]
    },

    visual: {
      heading: "Chat UI Structure",
      description:
        "A simple AI chat interface can be divided into reusable components.",
      steps: [
        {
          icon: "1️⃣",
          title: "Chat Header",
          text: "Shows the chatbot name or application information."
        },
        {
          icon: "2️⃣",
          title: "Message List",
          text: "Displays user and assistant messages."
        },
        {
          icon: "3️⃣",
          title: "Input Area",
          text: "Allows the user to type a new message."
        },
        {
          icon: "4️⃣",
          title: "Send Action",
          text: "Submits the message to the application."
        }
      ],
      flow: "Header → Messages → Input → Send → New Message"
    },

    code: {
      title: "Reusable Chat Message Component",
      description:
        "A React component can render messages differently based on the sender.",
      language: "tsx",
      code: `type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

function ChatMessage({
  role,
  content
}: MessageProps) {
  return (
    <div>
      <strong>
        {role === "user" ? "You" : "Assistant"}
      </strong>

      <p>{content}</p>
    </div>
  );
}

export default ChatMessage;`,
      output:
        "The component displays either You or Assistant based on the message role.",
      explanation:
        "A reusable message component keeps the chat interface organized. The role determines how the message should be presented."
    },

    interview: {
      question: "How would you structure a React chat UI?",
      answer:
        "Use separate components for the header, message list, message item, input area and loading or error states.",
      tip:
        "Focus on component reusability."
    },

    tricky: {
      question:
        "Should every chat message have its own separate component instance?",
      answer:
        "A message component can be reused for every message through array mapping. The component itself should remain reusable rather than duplicating markup manually."
    },

    practice: {
      question:
        "Create a Message component that accepts role and content as props.",
      hint:
        "Use a TypeScript props type and a role union."
    },

    challenge: {
      title: "Build a Chat UI",
      description:
        "Create the frontend structure of an AI chat interface.",
      task:
        "Build ChatHeader, MessageList, ChatMessage and ChatInput components and connect them together."
    }
  },

  "state-management": {
    concept: {
      heading: "State Management for AI Applications",
      paragraphs: [
        "AI interfaces contain several pieces of changing data, such as the current input, conversation messages, loading status and errors.",
        "React state allows components to store and update this information.",
        "For a small chatbot, useState is often enough to manage local state.",
        "As the application becomes larger, developers may introduce Context, reducers or external state-management solutions."
      ],
      remember:
        "React state keeps the AI interface synchronized with changing data."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📦",
          title: "State",
          text: "State is like a storage box containing information that can change."
        },
        {
          icon: "🔄",
          title: "Update",
          text: "When the stored information changes, React can update the UI."
        },
        {
          icon: "🖥️",
          title: "UI",
          text: "The interface displays the current state."
        }
      ]
    },

    visual: {
      heading: "AI Chat State",
      description:
        "A chatbot can manage multiple pieces of state.",
      steps: [
        {
          icon: "1️⃣",
          title: "Input State",
          text: "Stores what the user is currently typing."
        },
        {
          icon: "2️⃣",
          title: "Messages State",
          text: "Stores the conversation."
        },
        {
          icon: "3️⃣",
          title: "Loading State",
          text: "Tracks whether an AI request is running."
        },
        {
          icon: "4️⃣",
          title: "Error State",
          text: "Stores information about a failed request."
        }
      ],
      flow: "Input + Messages + Loading + Error → React UI"
    },

    code: {
      title: "Managing Chat State",
      description:
        "Multiple useState hooks can manage the basic state of a chatbot.",
      language: "tsx",
      code: `import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <p>Messages: {messages.length}</p>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <p>Loading: {isLoading ? "Yes" : "No"}</p>

      {error && <p>{error}</p>}
    </div>
  );
}`,
      output:
        "The component maintains input, messages, loading and error state.",
      explanation:
        "Each piece of state represents a different part of the chatbot's current condition."
    },

    interview: {
      question: "What state is commonly required in an AI chatbot?",
      answer:
        "Common state includes the current input, conversation messages, loading status and error information.",
      tip:
        "Mention that state requirements grow with application complexity."
    },

    tricky: {
      question:
        "Should every piece of chatbot data be stored in one large state object?",
      answer:
        "Not necessarily. State can be split based on the application's needs. Smaller independent state values can sometimes make updates easier to understand."
    },

    practice: {
      question:
        "Create four React state variables for input, messages, loading and error.",
      hint:
        "Use useState with suitable initial values."
    },

    challenge: {
      title: "Design Chat State",
      description:
        "Plan the state required for a production-style AI chatbot.",
      task:
        "Identify state for messages, input, loading, errors, selected conversation and streaming response."
    }
  },

  "api-integration": {
    concept: {
      heading: "API Integration in React",
      paragraphs: [
        "API integration connects a React application with a backend service.",
        "For AI applications, React commonly sends user input to a backend endpoint and receives the generated result.",
        "The frontend should manage request state, response data and errors while the backend handles secure AI provider communication.",
        "A clean API integration keeps UI logic separate from backend and AI-provider logic."
      ],
      remember:
        "React handles the UI and communicates with your backend API, while the backend handles secure AI integration."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🏪",
          title: "React UI",
          text: "The user-facing counter where the request begins."
        },
        {
          icon: "📦",
          title: "Backend API",
          text: "The service layer that receives and processes the request."
        },
        {
          icon: "🤖",
          title: "AI Provider",
          text: "The external service that generates the AI response."
        }
      ]
    },

    visual: {
      heading: "React API Integration",
      description:
        "React sends data to a backend endpoint and uses the response to update the UI.",
      steps: [
        {
          icon: "1️⃣",
          title: "Collect Input",
          text: "React reads the user's prompt."
        },
        {
          icon: "2️⃣",
          title: "Send Request",
          text: "React calls the backend API."
        },
        {
          icon: "3️⃣",
          title: "Receive Response",
          text: "React receives JSON or another supported response format."
        },
        {
          icon: "4️⃣",
          title: "Update UI",
          text: "React updates state and displays the result."
        }
      ],
      flow: "React → Backend API → AI Service → Backend → React"
    },

    code: {
      title: "React API Integration",
      description:
        "A React component can call a backend endpoint and store the result.",
      language: "tsx",
      code: `import { useState } from "react";

export default function AIForm() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function submitPrompt() {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt
      })
    });

    const data = await response.json();

    setAnswer(data.answer);
  }

  return (
    <div>
      <input
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />

      <button onClick={submitPrompt}>
        Generate
      </button>

      <p>{answer}</p>
    </div>
  );
}`,
      output:
        "The React component displays the response returned by the backend API.",
      explanation:
        "The component sends the prompt through /api/ai and updates the answer state after receiving the response."
    },

    interview: {
      question: "How do you integrate an AI API into React?",
      answer:
        "Create a backend API endpoint, call that endpoint from React using fetch or an HTTP library, manage loading and errors, and update the UI with the response.",
      tip:
        "Keep private AI credentials on the backend."
    },

    tricky: {
      question:
        "Why should React call a backend endpoint instead of directly calling a private AI provider API?",
      answer:
        "A backend can protect private credentials and centralize validation, authentication, rate limiting and provider-specific logic."
    },

    practice: {
      question:
        "Create a React function that sends a prompt to /api/ai using POST.",
      hint:
        "Use fetch() and JSON.stringify()."
    },

    challenge: {
      title: "Integrate an AI Backend",
      description:
        "Connect a React form to a secure backend AI endpoint.",
      task:
        "Build a form that sends the user's prompt to /api/ai and displays loading, success and error states."
    }
  },

  "conversation-history": {
    concept: {
      heading: "Conversation History in React",
      paragraphs: [
        "Conversation history stores the sequence of messages exchanged between the user and the AI assistant.",
        "React state can be used to keep the current conversation in memory while the user interacts with the chatbot.",
        "When a new user message is submitted, the message is added to the conversation before the AI response is received.",
        "After the response arrives, the assistant message is also added to the history."
      ],
      remember:
        "Conversation history allows React to display and maintain a multi-turn AI conversation."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📚",
          title: "History",
          text: "The conversation history is like a record of everything discussed so far."
        },
        {
          icon: "👤",
          title: "User",
          text: "Each new user message is added to the record."
        },
        {
          icon: "🤖",
          title: "Assistant",
          text: "The AI response is added after the backend returns it."
        }
      ]
    },

    visual: {
      heading: "React Conversation History",
      description:
        "The conversation grows as the user and assistant exchange messages.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Message",
          text: "Create a new user message."
        },
        {
          icon: "2️⃣",
          title: "Update State",
          text: "Add the user message to the messages array."
        },
        {
          icon: "3️⃣",
          title: "AI Response",
          text: "Receive the assistant response."
        },
        {
          icon: "4️⃣",
          title: "Update Again",
          text: "Add the assistant response to the same conversation."
        }
      ],
      flow: "User Message → State → AI Response → State → UI"
    },

    code: {
      title: "Updating Conversation History",
      description:
        "React's functional state update is useful when adding a new message.",
      language: "tsx",
      code: `import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  function addMessage(
    role: Message["role"],
    content: string
  ) {
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role,
        content
      }
    ]);
  }

  return (
    <button
      onClick={() =>
        addMessage("user", "Hello")
      }
    >
      Add Message
    </button>
  );
}`,
      output:
        "A new message is added without replacing the previous conversation.",
      explanation:
        "The functional state update receives the latest messages array and creates a new array using the spread operator."
    },

    interview: {
      question: "Why use the functional form of setState when updating chat history?",
      answer:
        "It provides the latest state value, which is useful when the new state depends on the previous messages.",
      tip:
        "Remember: previous state → new state."
    },

    tricky: {
      question:
        "Why should you avoid directly modifying the existing messages array?",
      answer:
        "React state should be updated immutably so React can correctly detect the state change and render the updated UI."
    },

    practice: {
      question:
        "Create a Message type and a messages state array in React.",
      hint:
        "Use role and content properties."
    },

    challenge: {
      title: "Build Conversation History",
      description:
        "Create a React chat state that stores user and assistant messages.",
      task:
        "Implement addMessage(), render all messages and add both user and assistant responses to the conversation."
    }
  },

  "ai-powered-forms": {
    concept: {
      heading: "AI-Powered Forms",
      paragraphs: [
        "AI can enhance traditional forms by generating, improving, validating or transforming user-provided information.",
        "Examples include resume improvement forms, content generation forms, email writing assistants and text summarization tools.",
        "React manages form state while the backend handles the AI request.",
        "A well-designed AI form should validate input, show loading feedback and clearly display the generated result."
      ],
      remember:
        "AI-powered forms combine normal React form handling with AI-generated assistance."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📝",
          title: "Traditional Form",
          text: "The user provides information through form fields."
        },
        {
          icon: "🤖",
          title: "AI Assistance",
          text: "The AI processes the submitted information and generates useful output."
        },
        {
          icon: "✨",
          title: "Enhanced Result",
          text: "The application displays an improved or generated result."
        }
      ]
    },

    visual: {
      heading: "AI-Powered Form Flow",
      description:
        "React collects form data and sends it to a backend AI endpoint.",
      steps: [
        {
          icon: "1️⃣",
          title: "Form Input",
          text: "The user enters information."
        },
        {
          icon: "2️⃣",
          title: "Validation",
          text: "The application checks required fields."
        },
        {
          icon: "3️⃣",
          title: "AI Request",
          text: "The backend processes the information using an AI service."
        },
        {
          icon: "4️⃣",
          title: "Generated Result",
          text: "React displays the AI-generated result."
        }
      ],
      flow: "Form → Validation → Backend AI → Generated Result"
    },

    code: {
      title: "AI-Powered Form",
      description:
        "A React form can submit user information to a backend AI endpoint.",
      language: "tsx",
      code: `import { useState } from "react";

export default function ContentForm() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function generateContent() {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic
      })
    });

    const data = await response.json();

    setResult(data.content);
  }

  return (
    <div>
      <input
        value={topic}
        onChange={(event) =>
          setTopic(event.target.value)
        }
        placeholder="Enter a topic"
      />

      <button onClick={generateContent}>
        Generate
      </button>

      <p>{result}</p>
    </div>
  );
}`,
      output:
        "The form sends the topic to the backend and displays the generated content.",
      explanation:
        "React controls the form field and stores the generated result. The backend can use the topic to create an AI-powered response."
    },

    interview: {
      question: "What are examples of AI-powered forms?",
      answer:
        "Examples include resume analyzers, content generators, email assistants, summarization forms and AI-powered coding or interview tools.",
      tip:
        "Explain that React handles the form while the backend handles the AI integration."
    },

    tricky: {
      question:
        "Should AI-generated form output always be accepted without validation?",
      answer:
        "No. AI output should be reviewed and validated according to the application's requirements. AI-generated content can be incomplete, incorrect or unsuitable."
    },

    practice: {
      question:
        "Design a React form that accepts a topic and generates an AI-written explanation.",
      hint:
        "Use controlled input, submit action, loading state and result state."
    },

    challenge: {
      title: "Build an AI Content Form",
      description:
        "Create a React form that generates educational content using an AI backend.",
      task:
        "Create a topic input, validation, loading state, API request, error state and generated-content section."
    }
  },
    "nodejs-ai-api": {
    concept: {
      heading: "Node.js + AI API",
      paragraphs: [
        "Node.js is commonly used as the backend layer for AI-powered web applications.",
        "A Node.js server can receive requests from a React frontend, validate the input and communicate with an AI provider.",
        "Keeping the AI integration on the backend helps protect private credentials and keeps provider-specific logic away from the browser.",
        "The backend can also add authentication, logging, validation and rate limiting around the AI service."
      ],
      remember:
        "Node.js can act as a secure backend layer between a web application and an AI provider."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🌐",
          title: "React Frontend",
          text: "The frontend collects the user's request."
        },
        {
          icon: "🛡️",
          title: "Node.js Backend",
          text: "The backend validates the request and protects sensitive configuration."
        },
        {
          icon: "🤖",
          title: "AI Provider",
          text: "The AI service generates the requested response."
        }
      ]
    },

    visual: {
      heading: "Node.js AI Architecture",
      description:
        "Node.js sits between the frontend and the external AI service.",
      steps: [
        {
          icon: "1️⃣",
          title: "Frontend",
          text: "React sends the user's prompt to the Node.js server."
        },
        {
          icon: "2️⃣",
          title: "Node.js",
          text: "The server validates the request and prepares the AI API call."
        },
        {
          icon: "3️⃣",
          title: "AI Provider",
          text: "The external AI service processes the request."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "Node.js returns the generated result to the frontend."
        }
      ],
      flow: "React → Node.js → AI Provider → Node.js → React"
    },

    code: {
      title: "Node.js AI Backend Endpoint",
      description:
        "An Express endpoint can receive a prompt and prepare an AI service request.",
      language: "javascript",
      code: `import express from "express";

const app = express();

app.use(express.json());

app.post("/api/ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required"
      });
    }

    // Call the AI provider here.

    res.json({
      answer: "AI response will be returned here."
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to process AI request"
    });
  }
});

app.listen(5000);`,
      output:
        "A backend endpoint receives a prompt and returns an AI response structure.",
      explanation:
        "The backend validates the request before communicating with the AI provider. The actual provider SDK or HTTP request can be added inside the endpoint."
    },

    interview: {
      question: "Why is Node.js useful for AI-powered web applications?",
      answer:
        "Node.js can provide a secure backend layer for AI API calls while handling authentication, validation, rate limiting and communication with the frontend.",
      tip:
        "Explain the frontend → backend → AI provider architecture."
    },

    tricky: {
      question:
        "Can Node.js itself replace the AI model?",
      answer:
        "Node.js is a runtime used to build applications and services. It does not automatically replace an AI model. It can communicate with or host AI-related systems depending on the architecture."
    },

    practice: {
      question:
        "Create an Express POST endpoint at /api/ai that accepts a prompt.",
      hint:
        "Use express.json(), req.body and res.json()."
    },

    challenge: {
      title: "Build a Node.js AI Endpoint",
      description:
        "Create the backend foundation for an AI-powered application.",
      task:
        "Build a POST /api/ai endpoint that validates the prompt, handles errors and prepares the request for an AI provider."
    }
  },

  "environment-variables": {
    concept: {
      heading: "Environment Variables",
      paragraphs: [
        "Environment variables allow applications to read configuration values from the environment instead of hard-coding them into source code.",
        "AI applications commonly use environment variables for private API keys, database URLs and other configuration values.",
        "Keeping sensitive configuration outside the source code reduces the risk of accidentally committing credentials to a public repository.",
        "The exact environment-variable system depends on the framework and deployment platform."
      ],
      remember:
        "Use environment variables for sensitive configuration such as private AI API keys."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🔐",
          title: "Secret Storage",
          text: "Environment variables act like a protected place for configuration values."
        },
        {
          icon: "🔑",
          title: "API Key",
          text: "A private API key can be loaded from the environment instead of being written directly in code."
        },
        {
          icon: "🚀",
          title: "Deployment",
          text: "The same application can use different configuration values in different environments."
        }
      ]
    },

    visual: {
      heading: "Environment Variable Flow",
      description:
        "A private value is configured in the environment and read by the backend.",
      steps: [
        {
          icon: "1️⃣",
          title: "Configure",
          text: "Add the secret to the development or deployment environment."
        },
        {
          icon: "2️⃣",
          title: "Backend",
          text: "Node.js reads the value from process.env."
        },
        {
          icon: "3️⃣",
          title: "AI Request",
          text: "The backend uses the secret when communicating with the AI provider."
        },
        {
          icon: "4️⃣",
          title: "Frontend",
          text: "The private key is not sent to the browser."
        }
      ],
      flow: "Environment → Node.js → AI Provider"
    },

    code: {
      title: "Reading an Environment Variable",
      description:
        "Node.js can read environment variables through process.env.",
      language: "javascript",
      code: `const apiKey = process.env.AI_API_KEY;

if (!apiKey) {
  throw new Error(
    "AI_API_KEY is not configured"
  );
}

console.log("AI configuration loaded");`,
      output:
        "The backend confirms that the AI API configuration is available.",
      explanation:
        "The actual secret value is not written directly into the source code. The environment provides it when the application runs."
    },

    interview: {
      question: "Why are environment variables used in AI applications?",
      answer:
        "They are used to keep sensitive configuration such as private API keys outside the application's source code.",
      tip:
        "Mention security and different development/production configurations."
    },

    tricky: {
      question:
        "Does an environment variable automatically make a secret secure?",
      answer:
        "No. The variable must also be handled correctly. A server-side secret can still be exposed if the application intentionally sends it to the client or logs it."
    },

    practice: {
      question:
        "Create an environment variable named AI_API_KEY and read it from Node.js.",
      hint:
        "Use process.env.AI_API_KEY."
    },

    challenge: {
      title: "Secure AI Configuration",
      description:
        "Move an AI provider key from hard-coded JavaScript into environment configuration.",
      task:
        "Create the environment variable, read it from the backend and make sure the key is never returned to the frontend."
    }
  },

  "backend-ai-service": {
    concept: {
      heading: "Backend AI Service",
      paragraphs: [
        "A backend AI service is a dedicated server-side layer responsible for communicating with an AI provider.",
        "Instead of placing all AI logic inside route handlers, an application can create a separate service function or module.",
        "This separation makes the application easier to test, maintain and update when the AI provider or model changes.",
        "The service can handle prompts, provider configuration, response processing and error handling."
      ],
      remember:
        "Separate AI provider logic from route handling to keep the backend easier to maintain."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📞",
          title: "Route",
          text: "The route receives the request from the frontend."
        },
        {
          icon: "⚙️",
          title: "Service",
          text: "The service performs the actual AI-related operation."
        },
        {
          icon: "🤖",
          title: "Provider",
          text: "The service communicates with the external AI provider."
        }
      ]
    },

    visual: {
      heading: "Service Layer Architecture",
      description:
        "Separating routing from AI logic creates a cleaner backend structure.",
      steps: [
        {
          icon: "1️⃣",
          title: "Request",
          text: "The client sends a request to the API route."
        },
        {
          icon: "2️⃣",
          title: "Controller / Route",
          text: "The route validates the request and calls the AI service."
        },
        {
          icon: "3️⃣",
          title: "AI Service",
          text: "The service communicates with the AI provider."
        },
        {
          icon: "4️⃣",
          title: "Response",
          text: "The route returns the processed result to the client."
        }
      ],
      flow: "Client → Route → AI Service → Provider → Route → Client"
    },

    code: {
      title: "Separating AI Logic",
      description:
        "A service function can keep provider-related logic outside the route.",
      language: "javascript",
      code: `// aiService.js

export async function generateAIResponse(prompt) {
  if (!prompt) {
    throw new Error("Prompt is required");
  }

  // Call the AI provider here.

  return "Generated AI response";
}


// aiRoute.js

import express from "express";
import { generateAIResponse } from "./aiService.js";

const router = express.Router();

router.post("/ai", async (req, res) => {
  try {
    const answer = await generateAIResponse(
      req.body.prompt
    );

    res.json({ answer });
  } catch (error) {
    res.status(500).json({
      message: "AI request failed"
    });
  }
});

export default router;`,
      output:
        "The route and AI service have separate responsibilities.",
      explanation:
        "The route handles HTTP concerns while the service handles AI-related logic. This separation improves maintainability."
    },

    interview: {
      question: "Why separate AI logic into a service layer?",
      answer:
        "It separates HTTP handling from AI provider logic, making the application easier to maintain, test and modify.",
      tip:
        "Think separation of concerns."
    },

    tricky: {
      question:
        "Should the AI service directly send HTTP responses?",
      answer:
        "Usually no. A service should normally return data or throw an error, while the route/controller handles the HTTP response."
    },

    practice: {
      question:
        "Create an aiService.js file with a generateAIResponse() function.",
      hint:
        "Keep request/response handling inside the route."
    },

    challenge: {
      title: "Create an AI Service Layer",
      description:
        "Refactor AI logic into a reusable backend service.",
      task:
        "Create a route, AI service and error-handling flow where the route calls the service and returns its result."
    }
  },

  "secure-api-architecture": {
    concept: {
      heading: "Secure API Architecture",
      paragraphs: [
        "AI applications should be designed so that sensitive credentials and important business logic remain on the server.",
        "A common architecture uses a frontend, backend API and external AI provider.",
        "The backend can validate input, authenticate users, apply rate limits and protect private AI credentials.",
        "Security should be considered throughout the request flow rather than added only after the application is complete."
      ],
      remember:
        "Keep private credentials and sensitive AI operations on the backend."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🏢",
          title: "Frontend",
          text: "The frontend is like the public reception area."
        },
        {
          icon: "🛡️",
          title: "Backend",
          text: "The backend acts like a controlled security area."
        },
        {
          icon: "🔐",
          title: "AI Credentials",
          text: "Private credentials remain inside the protected backend environment."
        }
      ]
    },

    visual: {
      heading: "Secure AI Architecture",
      description:
        "The browser should communicate with your backend rather than exposing private provider credentials.",
      steps: [
        {
          icon: "1️⃣",
          title: "Client",
          text: "The browser sends the user's request."
        },
        {
          icon: "2️⃣",
          title: "Authentication",
          text: "The backend can verify the user if authentication is required."
        },
        {
          icon: "3️⃣",
          title: "Validation",
          text: "The backend validates the request before processing it."
        },
        {
          icon: "4️⃣",
          title: "AI Provider",
          text: "The backend securely communicates with the AI provider."
        }
      ],
      flow: "Browser → Auth → Validation → Backend → AI Provider"
    },

    code: {
      title: "Basic Backend Validation",
      description:
        "A backend endpoint should validate incoming AI requests before processing them.",
      language: "javascript",
      code: `app.post("/api/ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (
      typeof prompt !== "string" ||
      prompt.trim().length === 0
    ) {
      return res.status(400).json({
        message: "Valid prompt is required"
      });
    }

    if (prompt.length > 5000) {
      return res.status(400).json({
        message: "Prompt is too long"
      });
    }

    // Secure AI service call here.

    res.json({
      answer: "AI response"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});`,
      output:
        "Invalid or excessively long prompts are rejected before the AI service is called.",
      explanation:
        "Backend validation reduces unnecessary requests and helps protect the application from malformed or abusive input."
    },

    interview: {
      question: "What makes an AI API architecture secure?",
      answer:
        "Important practices include keeping secrets server-side, validating input, authenticating users when required, applying rate limits and handling errors safely.",
      tip:
        "Explain security as multiple layers rather than one feature."
    },

    tricky: {
      question:
        "Is hiding the API key enough to make an AI application secure?",
      answer:
        "No. The application also needs input validation, authentication where required, rate limiting, safe error handling and appropriate access controls."
    },

    practice: {
      question:
        "Name five security measures for an AI backend.",
      hint:
        "Think credentials, authentication, validation, rate limits and error handling."
    },

    challenge: {
      title: "Design a Secure AI API",
      description:
        "Create a secure request flow for a production AI application.",
      task:
        "Design the architecture with authentication, validation, rate limiting, private credentials and safe error handling."
    }
  },

  "rate-limiting": {
    concept: {
      heading: "Rate Limiting",
      paragraphs: [
        "Rate limiting controls how many requests a client can make within a particular period.",
        "AI APIs can be expensive or resource-intensive, so uncontrolled requests may increase costs or overload the application.",
        "A backend can apply rate limits based on users, IP addresses, API keys or other identifiers.",
        "Rate limiting is one part of a broader security and reliability strategy."
      ],
      remember:
        "Rate limiting controls request frequency and helps protect AI applications from excessive usage."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🚪",
          title: "Entry Limit",
          text: "A venue may limit how many people can enter during a certain period."
        },
        {
          icon: "⏱️",
          title: "Time Window",
          text: "The system measures requests within a defined time period."
        },
        {
          icon: "🚫",
          title: "Too Many Requests",
          text: "Requests above the allowed limit can be temporarily rejected."
        }
      ]
    },

    visual: {
      heading: "Rate Limiting Flow",
      description:
        "The backend checks request frequency before allowing an AI request to continue.",
      steps: [
        {
          icon: "1️⃣",
          title: "Request",
          text: "A client sends an AI request."
        },
        {
          icon: "2️⃣",
          title: "Check Limit",
          text: "The backend checks how many requests the client has made."
        },
        {
          icon: "3️⃣",
          title: "Allow or Reject",
          text: "The request is allowed if it is within the limit."
        },
        {
          icon: "4️⃣",
          title: "AI Request",
          text: "Allowed requests continue to the AI service."
        }
      ],
      flow: "Client → Rate Limit Check → Allow / Reject → AI Service"
    },

    code: {
      title: "Simple Request Counter",
      description:
        "This simplified example demonstrates the basic idea of tracking requests.",
      language: "javascript",
      code: `const requests = new Map();

function canMakeRequest(clientId) {
  const currentCount =
    requests.get(clientId) || 0;

  if (currentCount >= 5) {
    return false;
  }

  requests.set(
    clientId,
    currentCount + 1
  );

  return true;
}

console.log(canMakeRequest("client-1"));`,
      output:
        "The function allows requests until the configured limit is reached.",
      explanation:
        "This is only a conceptual example. Production rate limiting should normally use a reliable strategy and often a shared store such as Redis when multiple server instances are involved."
    },

    interview: {
      question: "Why is rate limiting important for AI applications?",
      answer:
        "It helps control excessive requests, protect system resources and reduce the risk of API abuse and unexpected usage costs.",
      tip:
        "Mention both security and cost control."
    },

    tricky: {
      question:
        "Is a simple in-memory counter always sufficient for production rate limiting?",
      answer:
        "No. In-memory counters may not work correctly across multiple server instances or restarts. Production systems often use a shared rate-limiting mechanism."
    },

    practice: {
      question:
        "What should happen when a user exceeds the AI request limit?",
      hint:
        "Think about HTTP status, retry timing and a useful user message."
    },

    challenge: {
      title: "Add AI Rate Limiting",
      description:
        "Design a rate-limiting strategy for an AI endpoint.",
      task:
        "Allow a limited number of requests per user within a time window and return an appropriate response when the limit is exceeded."
    }
  },

  "error-handling-node": {
    concept: {
      heading: "Error Handling in Node.js AI Applications",
      paragraphs: [
        "Backend AI applications need reliable error handling because failures can occur during validation, network communication, authentication or AI provider requests.",
        "Node.js applications can use try...catch with async functions to handle asynchronous errors.",
        "The backend should log useful technical information for developers while returning safe and understandable messages to clients.",
        "Errors from an external AI provider should not expose private credentials or internal implementation details."
      ],
      remember:
        "Log useful server-side details, but return safe error messages to the client."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🛠️",
          title: "Developer Log",
          text: "Developers need technical information to diagnose the problem."
        },
        {
          icon: "👤",
          title: "User Message",
          text: "Users usually need a simple explanation rather than internal error details."
        },
        {
          icon: "🛡️",
          title: "Security",
          text: "Sensitive information should not be included in client-facing errors."
        }
      ]
    },

    visual: {
      heading: "Node.js Error Flow",
      description:
        "A backend catches the error, logs useful information and returns a safe response.",
      steps: [
        {
          icon: "1️⃣",
          title: "AI Request",
          text: "The server calls the AI service."
        },
        {
          icon: "2️⃣",
          title: "Failure",
          text: "The provider or network returns an error."
        },
        {
          icon: "3️⃣",
          title: "Server Handling",
          text: "Node.js catches and logs the error."
        },
        {
          icon: "4️⃣",
          title: "Client Response",
          text: "The client receives a safe error message."
        }
      ],
      flow: "AI Request → Error → Node.js Handler → Safe Client Response"
    },

    code: {
      title: "Safe Error Handling",
      description:
        "A Node.js endpoint can catch errors and return a safe message.",
      language: "javascript",
      code: `app.post("/api/ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required"
      });
    }

    const answer =
      await generateAIResponse(prompt);

    res.json({
      answer
    });
  } catch (error) {
    console.error(
      "AI service error:",
      error
    );

    res.status(500).json({
      message:
        "Unable to process the AI request"
    });
  }
});`,
      output:
        "Technical details are logged on the server while the client receives a safe message.",
      explanation:
        "The server should help developers diagnose failures without exposing internal errors, credentials or implementation details to users."
    },

    interview: {
      question: "How should Node.js handle AI provider errors?",
      answer:
        "Catch asynchronous errors, log useful technical information on the server and return an appropriate safe response to the client.",
      tip:
        "Never expose API keys or sensitive internal information in error responses."
    },

    tricky: {
      question:
        "Should the backend send the complete AI provider error object to the browser?",
      answer:
        "Usually no. Provider errors may contain internal or sensitive information. The backend should return only the information appropriate for the client."
    },

    practice: {
      question:
        "Create an Express endpoint that catches errors from generateAIResponse().",
      hint:
        "Use try...catch and return HTTP 500 for unexpected server errors."
    },

    challenge: {
      title: "Build Production Error Handling",
      description:
        "Improve the error handling of an AI backend.",
      task:
        "Handle validation errors, AI provider failures and unexpected server errors with suitable HTTP responses and safe client messages."
    }
  },
    "ai-chatbot": {
    concept: {
      heading: "AI Chatbot",
      paragraphs: [
        "An AI chatbot is an application that accepts user messages and generates responses using an AI model.",
        "A typical web chatbot has a frontend chat interface, a backend API and an AI provider.",
        "The frontend displays messages and manages the user experience, while the backend handles the AI request securely.",
        "A production chatbot may also include conversation history, authentication, rate limiting and error handling."
      ],
      remember:
        "An AI chatbot connects a user interface with an AI model through an application backend."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "💬",
          title: "Chat Interface",
          text: "The user types a question into the chat interface."
        },
        {
          icon: "🧠",
          title: "AI Model",
          text: "The AI model processes the user's message and generates a response."
        },
        {
          icon: "🔄",
          title: "Conversation",
          text: "The application can maintain previous messages to provide context."
        }
      ]
    },

    visual: {
      heading: "AI Chatbot Architecture",
      description:
        "A chatbot usually connects the frontend, backend and AI provider.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Message",
          text: "The user enters a message in the chat UI."
        },
        {
          icon: "2️⃣",
          title: "Frontend",
          text: "The frontend sends the message to the backend."
        },
        {
          icon: "3️⃣",
          title: "Backend",
          text: "The backend validates the request and calls the AI service."
        },
        {
          icon: "4️⃣",
          title: "AI Response",
          text: "The generated response is returned to the frontend."
        }
      ],
      flow: "User → Chat UI → Backend → AI Model → Backend → Chat UI"
    },

    code: {
      title: "Simple AI Chatbot Request",
      description:
        "The frontend can send a message to a backend chatbot endpoint.",
      language: "javascript",
      code: `async function sendMessage(message) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: message
    })
  });

  const data = await response.json();

  return data.answer;
}

sendMessage("Explain JavaScript");`,
      output:
        "The backend receives the message and returns an AI-generated answer.",
      explanation:
        "The frontend does not need to know the AI provider's private API key. It communicates with the application's backend."
    },

    interview: {
      question: "What are the main parts of an AI chatbot?",
      answer:
        "The main parts are the chat interface, frontend state management, backend API, AI provider and usually conversation history.",
      tip:
        "Explain the complete request-response flow."
    },

    tricky: {
      question:
        "Should the browser directly call a private AI API using a secret API key?",
      answer:
        "No. A private API key should normally remain on the server. The browser should communicate with the application's backend."
    },

    practice: {
      question:
        "Design the request flow for a simple AI chatbot.",
      hint:
        "Start with User → Frontend → Backend → AI Provider."
    },

    challenge: {
      title: "Build an AI Chatbot",
      description:
        "Create the foundation of a full-stack AI chatbot.",
      task:
        "Build a chat interface that sends user messages to a Node.js backend and displays the generated AI response."
    }
  },

  "ai-resume-analyzer": {
    concept: {
      heading: "AI Resume Analyzer",
      paragraphs: [
        "An AI resume analyzer is an application that uses an AI model to review resume content.",
        "It can extract information such as skills, experience and education and provide structured feedback.",
        "A useful analyzer can compare resume content with a job description and identify missing or relevant skills.",
        "The application should clearly communicate that AI-generated feedback may require human review."
      ],
      remember:
        "An AI resume analyzer processes resume content and can generate structured feedback."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📄",
          title: "Resume",
          text: "The user provides their resume information."
        },
        {
          icon: "🔍",
          title: "Analyzer",
          text: "The application identifies skills, experience and relevant information."
        },
        {
          icon: "📊",
          title: "Feedback",
          text: "The AI produces structured suggestions and observations."
        }
      ]
    },

    visual: {
      heading: "Resume Analyzer Flow",
      description:
        "The resume is processed and transformed into structured AI feedback.",
      steps: [
        {
          icon: "1️⃣",
          title: "Upload or Input",
          text: "The user provides resume content."
        },
        {
          icon: "2️⃣",
          title: "Extract",
          text: "The application extracts readable resume text."
        },
        {
          icon: "3️⃣",
          title: "Analyze",
          text: "The AI model evaluates the provided information."
        },
        {
          icon: "4️⃣",
          title: "Report",
          text: "The application displays structured feedback."
        }
      ],
      flow: "Resume → Text Extraction → AI Analysis → Feedback"
    },

    code: {
      title: "Resume Analysis Prompt",
      description:
        "A structured prompt can ask the AI model to analyze resume information.",
      language: "javascript",
      code: `const resumeText = \`
Frontend developer with React,
JavaScript and Node.js experience.
Built web applications and REST APIs.
\`;

const prompt =
  "Analyze this resume and return:\\n" +
  "1. Key skills\\n" +
  "2. Strengths\\n" +
  "3. Missing skills\\n" +
  "4. Improvement suggestions\\n\\n" +
  resumeText;

console.log(prompt);`,
      output:
        "The prompt contains clear instructions for producing structured resume feedback.",
      explanation:
        "Giving the model a specific output structure makes the result easier to display and process in the application."
    },

    interview: {
      question: "How can AI be used in a resume analyzer?",
      answer:
        "AI can extract relevant information, identify skills, compare resume content with requirements and generate structured feedback.",
      tip:
        "Mention both information extraction and feedback generation."
    },

    tricky: {
      question:
        "Can an AI resume analyzer guarantee that a candidate will get a job?",
      answer:
        "No. AI feedback is only an analysis of the provided information and cannot guarantee a hiring outcome."
    },

    practice: {
      question:
        "Write a prompt that asks an AI model to extract five important skills from a resume.",
      hint:
        "Clearly specify the required output."
    },

    challenge: {
      title: "Build a Resume Analyzer",
      description:
        "Create an AI-powered resume analysis application.",
      task:
        "Build an interface where users provide resume text and receive structured feedback containing skills, strengths and improvement suggestions."
    }
  },

  "ai-content-generator": {
    concept: {
      heading: "AI Content Generator",
      paragraphs: [
        "An AI content generator uses a generative AI model to create text based on user instructions.",
        "Applications can generate blog ideas, product descriptions, social media captions, summaries and other content.",
        "The quality of the result depends heavily on the instructions, context and constraints provided to the model.",
        "A useful content generator should allow users to review and edit generated content before publishing it."
      ],
      remember:
        "Good AI content generation depends on clear instructions, useful context and appropriate constraints."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📝",
          title: "Instruction",
          text: "The user tells the application what content is required."
        },
        {
          icon: "🎯",
          title: "Context",
          text: "The application provides information about the topic and intended audience."
        },
        {
          icon: "✨",
          title: "Generation",
          text: "The AI creates a draft based on the instructions."
        }
      ]
    },

    visual: {
      heading: "Content Generation Flow",
      description:
        "The application combines user requirements with AI generation.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Input",
          text: "The user selects the content type and provides a topic."
        },
        {
          icon: "2️⃣",
          title: "Prompt",
          text: "The application creates a structured instruction."
        },
        {
          icon: "3️⃣",
          title: "AI Generation",
          text: "The AI model generates the requested content."
        },
        {
          icon: "4️⃣",
          title: "Editing",
          text: "The user reviews and modifies the generated result."
        }
      ],
      flow: "User Input → Prompt → AI Generation → Review → Publish"
    },

    code: {
      title: "Simple Content Generation Prompt",
      description:
        "A structured prompt can control the format and audience of generated content.",
      language: "javascript",
      code: `const topic = "JavaScript Event Loop";

const prompt =
  "Write a beginner-friendly explanation of " +
  topic +
  ". Use simple English, one real-world analogy " +
  "and one short code example.";

console.log(prompt);`,
      output:
        "The application creates a focused instruction for generating beginner-friendly content.",
      explanation:
        "The prompt specifies the topic, audience, language level and required content structure."
    },

    interview: {
      question:
        "What factors improve the output of an AI content generator?",
      answer:
        "Clear instructions, relevant context, output constraints, examples and a clearly defined target audience can improve the generated result.",
      tip:
        "Connect this answer with prompt engineering."
    },

    tricky: {
      question:
        "Should generated content always be published without review?",
      answer:
        "No. Generated content should be reviewed for accuracy, relevance, tone, originality and other requirements before publication."
    },

    practice: {
      question:
        "Create a prompt for generating a short technical article for beginners.",
      hint:
        "Specify topic, audience, length and output structure."
    },

    challenge: {
      title: "Build a Content Generator",
      description:
        "Create a simple application that generates useful content from structured user input.",
      task:
        "Build a UI where users select a content type, enter a topic and receive an AI-generated draft that they can review and edit."
    }
  },

  "ai-coding-assistant": {
    concept: {
      heading: "AI Coding Assistant",
      paragraphs: [
        "An AI coding assistant helps developers understand, generate, explain, debug or improve code.",
        "It can generate code from natural-language instructions and explain existing code in simpler terms.",
        "A coding assistant can also analyze errors and suggest possible solutions.",
        "Developers should still review generated code for correctness, security, performance and maintainability."
      ],
      remember:
        "AI coding assistants support developers, but generated code should always be reviewed and tested."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "👨‍💻",
          title: "Developer",
          text: "The developer describes the programming task."
        },
        {
          icon: "🤖",
          title: "AI Assistant",
          text: "The AI suggests code, explanations or debugging ideas."
        },
        {
          icon: "🧪",
          title: "Testing",
          text: "The developer tests and reviews the generated solution."
        }
      ]
    },

    visual: {
      heading: "AI Coding Assistant Flow",
      description:
        "An AI coding assistant works as a development support layer.",
      steps: [
        {
          icon: "1️⃣",
          title: "Task",
          text: "The developer describes the programming requirement."
        },
        {
          icon: "2️⃣",
          title: "Context",
          text: "Relevant code, language and constraints are provided."
        },
        {
          icon: "3️⃣",
          title: "AI Suggestion",
          text: "The AI generates or explains code."
        },
        {
          icon: "4️⃣",
          title: "Review",
          text: "The developer tests and validates the result."
        }
      ],
      flow: "Developer → Context → AI → Code Suggestion → Review → Test"
    },

    code: {
      title: "AI Coding Assistant Prompt",
      description:
        "A coding assistant works better when the programming context is clearly specified.",
      language: "javascript",
      code: `const prompt =
  "Explain the following JavaScript code " +
  "to a beginner. Identify what each function " +
  "does and mention one possible improvement.\\n\\n" +
  "function add(a, b) {\\n" +
  "  return a + b;\\n" +
  "}";

console.log(prompt);`,
      output:
        "The prompt asks the AI to explain code and provide one improvement.",
      explanation:
        "Providing the language, audience and expected output gives the AI useful context for the coding task."
    },

    interview: {
      question:
        "What can an AI coding assistant help a developer with?",
      answer:
        "It can help with code generation, explanation, debugging, refactoring, documentation and learning programming concepts.",
      tip:
        "Also mention that developers must validate generated code."
    },

    tricky: {
      question:
        "Is AI-generated code automatically correct?",
      answer:
        "No. AI-generated code can contain logical errors, security issues or inefficient approaches and should be reviewed and tested."
    },

    practice: {
      question:
        "Write a prompt asking an AI assistant to debug a JavaScript function.",
      hint:
        "Include the code, expected behavior and actual problem."
    },

    challenge: {
      title: "Build a Coding Assistant",
      description:
        "Create a simple AI application that helps users understand code.",
      task:
        "Build a UI where users paste code, select the programming language and ask the AI to explain, debug or improve the code."
    }
  },

  "ai-interview-assistant": {
    concept: {
      heading: "AI Interview Assistant",
      paragraphs: [
        "An AI interview assistant can simulate interview questions and provide practice feedback.",
        "The application can generate questions based on a role, technology or experience level.",
        "It can also evaluate a user's written answer against predefined criteria and suggest areas for improvement.",
        "The goal is practice and feedback rather than replacing a real interviewer or making guaranteed hiring decisions."
      ],
      remember:
        "An AI interview assistant can provide practice questions and feedback for interview preparation."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🎤",
          title: "Interviewer",
          text: "The AI generates questions based on the selected role."
        },
        {
          icon: "👤",
          title: "Candidate",
          text: "The user provides an answer."
        },
        {
          icon: "📊",
          title: "Feedback",
          text: "The AI analyzes the answer and provides practice feedback."
        }
      ]
    },

    visual: {
      heading: "AI Interview Flow",
      description:
        "The application creates an interactive practice interview.",
      steps: [
        {
          icon: "1️⃣",
          title: "Select Role",
          text: "The user selects a job role or technology."
        },
        {
          icon: "2️⃣",
          title: "Generate Question",
          text: "The AI creates an appropriate interview question."
        },
        {
          icon: "3️⃣",
          title: "Answer",
          text: "The user submits an answer."
        },
        {
          icon: "4️⃣",
          title: "Feedback",
          text: "The AI provides structured practice feedback."
        }
      ],
      flow: "Role → Question → Candidate Answer → AI Feedback"
    },

    code: {
      title: "Interview Question Prompt",
      description:
        "A structured prompt can generate role-specific interview questions.",
      language: "javascript",
      code: `const role = "React Developer";

const prompt =
  "Generate one beginner-level interview " +
  "question for a " +
  role +
  ". Include the question and a short " +
  "evaluation criteria.";

console.log(prompt);`,
      output:
        "The application creates a role-specific interview question with evaluation guidance.",
      explanation:
        "The role is included as context so that the generated question is relevant to the selected technology."
    },

    interview: {
      question:
        "How can AI be used in an interview preparation application?",
      answer:
        "AI can generate role-specific questions, evaluate practice answers, provide explanations and suggest areas for improvement.",
      tip:
        "Describe it as a practice and feedback system."
    },

    tricky: {
      question:
        "Can AI interview feedback guarantee real interview performance?",
      answer:
        "No. AI feedback is a practice tool and cannot guarantee how a candidate will perform in a real interview."
    },

    practice: {
      question:
        "Create a prompt for generating three React interview questions for a beginner.",
      hint:
        "Specify the role, experience level and number of questions."
    },

    challenge: {
      title: "Build an AI Interview Assistant",
      description:
        "Create an interactive interview practice application.",
      task:
        "Build a UI where users select a role, receive AI-generated questions, submit answers and receive structured practice feedback."
    }
  },
    "embeddings": {
    concept: {
      heading: "Embeddings",
      paragraphs: [
        "Embeddings are numerical representations of text, images or other data that capture meaningful relationships between them.",
        "Instead of treating text only as characters or words, an embedding model converts content into a vector of numbers.",
        "Similar pieces of information tend to have vectors that are closer to each other in vector space.",
        "Embeddings are commonly used for semantic search, recommendation systems and Retrieval-Augmented Generation."
      ],
      remember:
        "Embeddings convert information into numerical vectors so applications can compare semantic similarity."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📚",
          title: "Documents",
          text: "Imagine converting every document into a numerical fingerprint."
        },
        {
          icon: "🔢",
          title: "Vector",
          text: "That fingerprint is represented as a list of numbers."
        },
        {
          icon: "🔍",
          title: "Similarity",
          text: "Documents with similar meanings have vectors that are mathematically closer."
        }
      ]
    },

    visual: {
      heading: "How Embeddings Work",
      description:
        "Text is converted into vectors that can be compared mathematically.",
      steps: [
        {
          icon: "1️⃣",
          title: "Input Text",
          text: "The application receives a piece of text."
        },
        {
          icon: "2️⃣",
          title: "Embedding Model",
          text: "An embedding model converts the text into a numerical vector."
        },
        {
          icon: "3️⃣",
          title: "Vector Storage",
          text: "The vector can be stored in a vector database."
        },
        {
          icon: "4️⃣",
          title: "Similarity Search",
          text: "The application compares vectors to find semantically similar information."
        }
      ],
      flow: "Text → Embedding Model → Vector → Vector Database → Similarity Search"
    },

    code: {
      title: "Conceptual Embedding Example",
      description:
        "An embedding API can convert text into a numerical representation.",
      language: "javascript",
      code: `const text = "JavaScript is used for web development";

// Example response from an embedding model
const embedding = [
  0.125,
  -0.342,
  0.781,
  0.214,
  -0.091
];

console.log(embedding);`,
      output:
        "A text input is represented as an array of numerical values.",
      explanation:
        "Real embedding models usually return much larger vectors. The numbers represent the position of the input in a learned vector space."
    },

    interview: {
      question: "What is an embedding in AI?",
      answer:
        "An embedding is a numerical vector representation of information that allows applications to compare semantic relationships between data.",
      tip:
        "Remember: text becomes numbers, and those numbers can be compared."
    },

    tricky: {
      question:
        "Are embeddings the same thing as the original text?",
      answer:
        "No. An embedding is a numerical representation of the information, not the original human-readable text."
    },

    practice: {
      question:
        "Why are embeddings useful for semantic search?",
      hint:
        "Think about comparing the meaning of a user query with stored documents."
    },

    challenge: {
      title: "Design a Semantic Search System",
      description:
        "Use embeddings to find documents related to a user's question.",
      task:
        "Design a flow where documents are converted into embeddings, stored and compared with the embedding of a user query."
    }
  },

  "vector-databases": {
    concept: {
      heading: "Vector Databases",
      paragraphs: [
        "A vector database is designed to store and search numerical vectors efficiently.",
        "Traditional databases are excellent for structured values such as names, dates and IDs, while vector databases are useful when applications need similarity-based searches.",
        "AI applications can store document embeddings in a vector database and later search for vectors that are most similar to a user's query.",
        "Vector databases are commonly used in semantic search and RAG systems."
      ],
      remember:
        "Vector databases store embeddings and make similarity search efficient."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🗄️",
          title: "Storage",
          text: "A vector database stores numerical representations of information."
        },
        {
          icon: "🔎",
          title: "Search",
          text: "Instead of searching only exact words, it can search for similar meaning."
        },
        {
          icon: "📊",
          title: "Similarity",
          text: "The system compares vectors to find relevant information."
        }
      ]
    },

    visual: {
      heading: "Vector Database Flow",
      description:
        "Documents are converted into embeddings and stored for later similarity search.",
      steps: [
        {
          icon: "1️⃣",
          title: "Documents",
          text: "Collect the application documents or knowledge."
        },
        {
          icon: "2️⃣",
          title: "Embeddings",
          text: "Convert the documents into numerical vectors."
        },
        {
          icon: "3️⃣",
          title: "Store",
          text: "Save the vectors and associated document information."
        },
        {
          icon: "4️⃣",
          title: "Search",
          text: "Compare a query vector with stored vectors."
        }
      ],
      flow: "Documents → Embeddings → Vector Database → Similarity Search"
    },

    code: {
      title: "Conceptual Vector Search",
      description:
        "A vector database can return the documents most similar to a query vector.",
      language: "javascript",
      code: `const queryVector = [0.21, -0.18, 0.74];

const results = await vectorDatabase.search({
  vector: queryVector,
  limit: 3
});

console.log(results);`,
      output:
        "The database returns the most similar stored vectors and their associated information.",
      explanation:
        "The exact API depends on the vector database being used. The important concept is that the query is represented as a vector and compared with stored vectors."
    },

    interview: {
      question: "What is a vector database?",
      answer:
        "A vector database stores numerical vectors and provides efficient similarity search over those vectors.",
      tip:
        "Connect vector databases with embeddings and semantic search."
    },

    tricky: {
      question:
        "Why not use a normal database for every vector search use case?",
      answer:
        "Traditional databases can store numbers, but vector databases provide specialized indexing and similarity-search capabilities designed for high-dimensional vectors."
    },

    practice: {
      question:
        "What are the main steps required before searching a vector database?",
      hint:
        "Think: text, embedding and vector storage."
    },

    challenge: {
      title: "Create a Vector Search Architecture",
      description:
        "Plan a vector database system for a knowledge base.",
      task:
        "Design the flow from document ingestion to embedding generation, vector storage and semantic search."
    }
  },

  "rag": {
    concept: {
      heading: "Retrieval-Augmented Generation (RAG)",
      paragraphs: [
        "Retrieval-Augmented Generation, commonly called RAG, combines information retrieval with generative AI.",
        "Instead of relying only on the knowledge available inside a model, a RAG system first retrieves relevant information from an external knowledge source.",
        "The retrieved information is then provided to the AI model as context for generating the answer.",
        "RAG is useful for applications that need answers based on private, company-specific or frequently updated information."
      ],
      remember:
        "RAG retrieves relevant information first and then gives that information to the AI model as context."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📖",
          title: "Question",
          text: "A student asks a question."
        },
        {
          icon: "🔍",
          title: "Search",
          text: "The student first searches the relevant textbook pages."
        },
        {
          icon: "🤖",
          title: "Answer",
          text: "The AI uses the retrieved information to construct the answer."
        }
      ]
    },

    visual: {
      heading: "RAG Pipeline",
      description:
        "RAG adds a retrieval step before generation.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Query",
          text: "The user asks a question."
        },
        {
          icon: "2️⃣",
          title: "Retrieve",
          text: "The system searches the knowledge base for relevant information."
        },
        {
          icon: "3️⃣",
          title: "Context",
          text: "Relevant documents are added to the AI prompt."
        },
        {
          icon: "4️⃣",
          title: "Generate",
          text: "The AI generates an answer using the retrieved context."
        }
      ],
      flow: "User Query → Retrieval → Context → AI Model → Answer"
    },

    code: {
      title: "Conceptual RAG Flow",
      description:
        "A simplified RAG application first retrieves information and then generates an answer.",
      language: "javascript",
      code: `const query = "What is our refund policy?";

const documents =
  await vectorDatabase.search({
    query,
    limit: 3
  });

const context = documents
  .map(document => document.text)
  .join("\\n");

const prompt =
  "Answer using this context:\\n" +
  context +
  "\\nQuestion:\\n" +
  query;

// Send prompt to the AI model
console.log(prompt);`,
      output:
        "The retrieved documents are combined into context for the AI model.",
      explanation:
        "A production RAG system normally converts the query into an embedding, performs vector search and then sends the relevant context to the language model."
    },

    interview: {
      question: "What is RAG?",
      answer:
        "RAG is an architecture where relevant external information is retrieved and provided to a generative AI model as context before generating the answer.",
      tip:
        "Remember the three important ideas: retrieve, augment and generate."
    },

    tricky: {
      question:
        "Does RAG retrain the AI model with every new document?",
      answer:
        "No. RAG normally keeps the external knowledge separate and retrieves relevant information at query time."
    },

    practice: {
      question:
        "Why is RAG useful for company-specific documents?",
      hint:
        "Think about private information that may not be part of a general AI model's knowledge."
    },

    challenge: {
      title: "Build a RAG Architecture",
      description:
        "Design a chatbot that answers questions from a private document collection.",
      task:
        "Create an architecture using document chunking, embeddings, a vector database, retrieval and an AI model."
    }
  },

  "function-calling": {
    concept: {
      heading: "Function Calling",
      paragraphs: [
        "Function calling allows an AI model to request a predefined application function when it needs external data or an action.",
        "The AI model does not directly execute arbitrary code. Instead, the application defines available functions and their expected parameters.",
        "The application receives the function request, executes the appropriate operation and can then provide the result back to the model.",
        "Function calling is useful for applications such as weather assistants, database queries, booking systems and business tools."
      ],
      remember:
        "Function calling lets an AI model request structured actions that your application controls."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🤖",
          title: "AI Assistant",
          text: "The assistant understands what the user wants."
        },
        {
          icon: "🛠️",
          title: "Available Tool",
          text: "The assistant chooses a predefined tool that can perform the required operation."
        },
        {
          icon: "🖥️",
          title: "Application",
          text: "The application actually executes the operation and controls what happens."
        }
      ]
    },

    visual: {
      heading: "Function Calling Flow",
      description:
        "The model requests a predefined function while the application remains in control of execution.",
      steps: [
        {
          icon: "1️⃣",
          title: "User Request",
          text: "The user asks for information or an action."
        },
        {
          icon: "2️⃣",
          title: "AI Decision",
          text: "The model determines whether an available function is useful."
        },
        {
          icon: "3️⃣",
          title: "Application Executes",
          text: "The backend validates and executes the requested function."
        },
        {
          icon: "4️⃣",
          title: "Final Response",
          text: "The result can be provided to the AI model to formulate the final response."
        }
      ],
      flow: "User → AI → Function Request → Backend → Tool Result → AI → User"
    },

    code: {
      title: "Conceptual Function Definition",
      description:
        "Applications can describe the functions that an AI model is allowed to request.",
      language: "javascript",
      code: `const tools = [
  {
    name: "getWeather",
    description:
      "Get weather information for a city",
    parameters: {
      city: "string"
    }
  }
];

console.log(tools);`,
      output:
        "The application exposes a controlled tool definition to the AI system.",
      explanation:
        "The exact tool schema depends on the AI provider. The important idea is that the application defines the available operations and their parameters."
    },

    interview: {
      question: "What is function calling in AI?",
      answer:
        "Function calling allows an AI model to request a predefined application function using structured arguments.",
      tip:
        "The model requests the action; the application controls and executes it."
    },

    tricky: {
      question:
        "Does function calling mean the AI can execute any JavaScript function?",
      answer:
        "No. The application should expose only approved functions and validate their arguments before execution."
    },

    practice: {
      question:
        "Give two examples of tasks where function calling can be useful.",
      hint:
        "Think about external data or actions such as weather, databases or bookings."
    },

    challenge: {
      title: "Create an AI Tool",
      description:
        "Design a controlled tool that an AI assistant can request.",
      task:
        "Define a getCourseDetails function with a courseId parameter and design the flow for validating and executing the request."
    }
  },

  "ai-agents": {
    concept: {
      heading: "AI Agents",
      paragraphs: [
        "An AI agent is a system that can use an AI model together with tools, memory and application logic to complete tasks.",
        "Unlike a simple chatbot that usually responds to one prompt, an agent can follow multiple steps toward a goal.",
        "An agent may decide which tool to use, inspect the result and continue with another action.",
        "Agent systems require careful control because tool access, permissions, costs and failure handling become important."
      ],
      remember:
        "An AI agent combines a model with tools, state and decision-making to complete multi-step tasks."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🎯",
          title: "Goal",
          text: "The user gives the assistant a task to complete."
        },
        {
          icon: "🧠",
          title: "Decision",
          text: "The AI determines the next useful step."
        },
        {
          icon: "🛠️",
          title: "Tools",
          text: "The system can use approved tools to perform actions."
        },
        {
          icon: "🔄",
          title: "Iteration",
          text: "The agent can inspect results and continue until the task is completed."
        }
      ]
    },

    visual: {
      heading: "Agent Workflow",
      description:
        "An agent can repeatedly reason about the next action and use approved tools.",
      steps: [
        {
          icon: "1️⃣",
          title: "Goal",
          text: "The system receives the user's objective."
        },
        {
          icon: "2️⃣",
          title: "Plan",
          text: "The AI determines a useful next step."
        },
        {
          icon: "3️⃣",
          title: "Tool",
          text: "The application executes an approved tool."
        },
        {
          icon: "4️⃣",
          title: "Observe",
          text: "The result is returned to the agent."
        },
        {
          icon: "5️⃣",
          title: "Continue",
          text: "The agent decides whether another step is required."
        }
      ],
      flow: "Goal → Plan → Tool → Observe → Continue → Complete"
    },

    code: {
      title: "Conceptual Agent Loop",
      description:
        "A simplified agent loop repeatedly evaluates the next action.",
      language: "javascript",
      code: `let taskComplete = false;

while (!taskComplete) {
  const action = await getNextAction();

  if (action.type === "tool") {
    const result =
      await executeApprovedTool(action);

    console.log(result);
  }

  if (action.type === "complete") {
    taskComplete = true;
  }
}`,
      output:
        "The agent continues using approved actions until the task is completed.",
      explanation:
        "Real agent systems are more sophisticated and include model calls, tool schemas, state management, limits and safety controls."
    },

    interview: {
      question: "What is an AI agent?",
      answer:
        "An AI agent is a system that combines an AI model with tools, state and application logic to perform multi-step tasks toward a goal.",
      tip:
        "Differentiate a simple chatbot from a system that can use tools and perform multiple steps."
    },

    tricky: {
      question:
        "Should an AI agent be allowed to execute every available application operation?",
      answer:
        "No. Agent tools should be explicitly controlled, validated and limited according to the application's security requirements."
    },

    practice: {
      question:
        "What are the major components of an AI agent system?",
      hint:
        "Think about model, tools, state or memory and a task goal."
    },

    challenge: {
      title: "Design an AI Agent",
      description:
        "Create a conceptual agent for a course-support application.",
      task:
        "Design an agent that can search course information, retrieve student FAQs and provide a final response while using only approved tools."
    }
  },
  
    "ai-interview-questions": {
    concept: {
      heading: "AI Interview Questions",
      paragraphs: [
        "AI interviews usually test both fundamental concepts and practical application.",
        "A developer should understand what AI is, how AI APIs work, how prompts are processed and how AI features can be integrated into web applications.",
        "Interview questions can also cover security, API architecture, error handling and responsible use of AI.",
        "For developer roles, explaining a concept with a practical example is often more useful than memorizing definitions."
      ],
      remember:
        "Prepare AI fundamentals together with practical web-development integration."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "📚",
          title: "Fundamentals",
          text: "Understand the basic concepts before moving to advanced AI topics."
        },
        {
          icon: "💻",
          title: "Practical Skills",
          text: "Know how AI features are integrated into real applications."
        },
        {
          icon: "🎯",
          title: "Interview Thinking",
          text: "Explain why a particular AI architecture or approach is used."
        }
      ]
    },

    visual: {
      heading: "AI Interview Preparation",
      description:
        "Prepare across fundamentals, APIs, development and architecture.",
      steps: [
        {
          icon: "1️⃣",
          title: "Fundamentals",
          text: "AI, ML, Generative AI and LLM concepts."
        },
        {
          icon: "2️⃣",
          title: "APIs",
          text: "Prompts, tokens, API keys and model parameters."
        },
        {
          icon: "3️⃣",
          title: "Development",
          text: "JavaScript, React and Node.js AI integration."
        },
        {
          icon: "4️⃣",
          title: "Architecture",
          text: "Security, RAG, embeddings and AI agents."
        }
      ],
      flow:
        "Fundamentals → APIs → Development → Architecture"
    },

    code: {
      title: "Simple AI API Interview Example",
      description:
        "A common interview task is to explain the basic flow of an AI API request.",
      language: "javascript",
      code: `async function askAI(prompt) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt
    })
  });

  if (!response.ok) {
    throw new Error("AI request failed");
  }

  const data = await response.json();

  return data.answer;
}

askAI("Explain JavaScript closures")
  .then(answer => {
    console.log(answer);
  });`,
      output:
        "The frontend sends a prompt to the backend and receives the AI-generated answer.",
      explanation:
        "In an interview, explain that the frontend should normally communicate with your backend rather than exposing a private AI API key directly in browser code."
    },

    interview: {
      question: "What is an LLM?",
      answer:
        "An LLM, or Large Language Model, is a machine-learning model trained on large amounts of text data to understand and generate human-like language.",
      tip:
        "Also explain that an LLM predicts likely token sequences based on the context it receives."
    },

    tricky: {
      question:
        "Does an LLM understand information exactly like a human does?",
      answer:
        "No. An LLM processes patterns in data and generates responses based on its learned parameters and the provided context. Its output should not automatically be treated as human-like understanding or guaranteed factual knowledge."
    },

    practice: {
      question:
        "Explain the difference between AI, Generative AI and an LLM in simple words.",
      hint:
        "Start with AI as the broad field, then explain Generative AI and finally LLMs."
    },

    challenge: {
      title: "AI Interview Practice",
      description:
        "Prepare concise answers for common AI development questions.",
      task:
        "Write answers for: What is AI? What is Generative AI? What is an LLM? What is an AI API? Why should API keys stay on the backend?"
    }
  },

  "generative-ai-interview-questions": {
    concept: {
      heading: "Generative AI Interview Questions",
      paragraphs: [
        "Generative AI focuses on systems that can generate new content such as text, images, audio, video or code.",
        "For web developers, interview questions often focus on LLMs, prompts, tokens, context windows, embeddings, RAG and AI API integration.",
        "A strong answer should explain the concept clearly and connect it with a practical application.",
        "Developers should also understand the limitations of generated content and the importance of validation."
      ],
      remember:
        "Generative AI creates new content based on patterns learned from training data and the context provided at runtime."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "✍️",
          title: "Generation",
          text: "A user provides instructions and the AI generates new content."
        },
        {
          icon: "📖",
          title: "Context",
          text: "Additional information helps the model generate a more relevant response."
        },
        {
          icon: "✅",
          title: "Validation",
          text: "Applications may need to check generated results before using them."
        }
      ]
    },

    visual: {
      heading: "Generative AI Request Flow",
      description:
        "A generative AI application combines user input, context and model processing.",
      steps: [
        {
          icon: "1️⃣",
          title: "Prompt",
          text: "The user provides instructions."
        },
        {
          icon: "2️⃣",
          title: "Context",
          text: "The application may provide additional information."
        },
        {
          icon: "3️⃣",
          title: "Model",
          text: "The AI model processes the request."
        },
        {
          icon: "4️⃣",
          title: "Generated Output",
          text: "The model returns generated content."
        }
      ],
      flow:
        "Prompt + Context → Generative AI Model → Generated Output"
    },

    code: {
      title: "Simple Prompt-Based AI Feature",
      description:
        "A web application can send structured instructions to an AI backend.",
      language: "javascript",
      code: `const prompt = [
  "Generate a short product description.",
  "Product: Wireless Headphones",
  "Tone: Professional",
  "Length: 50 words"
].join("\\n");

const response = await fetch("/api/ai", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    prompt
  })
});

const data = await response.json();

console.log(data.answer);`,
      output:
        "The AI backend receives structured instructions and returns generated product content.",
      explanation:
        "The application gives the model a clear task and useful constraints. Structured prompts can make AI features easier to control and maintain."
    },

    interview: {
      question: "What is Generative AI?",
      answer:
        "Generative AI refers to AI systems that can generate new content such as text, images, audio, video or code based on learned patterns and provided input.",
      tip:
        "Give one practical example such as an AI chatbot or content generator."
    },

    tricky: {
      question:
        "Can Generative AI always produce factually correct information?",
      answer:
        "No. Generated output can contain incorrect or unsupported information, so applications may require validation, grounding, retrieval or human review depending on the use case."
    },

    practice: {
      question:
        "Explain why context is important when building a Generative AI application.",
      hint:
        "Think about giving the model relevant information in addition to the user's question."
    },

    challenge: {
      title: "Design a Generative AI Feature",
      description:
        "Plan a simple AI feature for a web application.",
      task:
        "Design a feature that accepts user input, adds useful context, sends the request to a backend AI service and displays the generated result."
    }
  },

  "ai-coding-questions": {
    concept: {
      heading: "AI Coding Questions",
      paragraphs: [
        "AI coding interviews can test whether a developer can integrate an AI model into a real application.",
        "Common tasks include creating an AI API endpoint, handling asynchronous requests, validating input, managing errors and protecting API credentials.",
        "Advanced tasks may involve streaming responses, conversation history, embeddings or retrieval-augmented generation.",
        "The key is to understand the complete request flow instead of treating AI integration as a single API call."
      ],
      remember:
        "AI coding questions usually test practical integration, backend security and reliable application architecture."
    },

    analogy: {
      heading: "Real-World Analogy",
      items: [
        {
          icon: "🧩",
          title: "Problem",
          text: "The interviewer gives an AI-related application requirement."
        },
        {
          icon: "💻",
          title: "Implementation",
          text: "The developer creates the required frontend or backend logic."
        },
        {
          icon: "🛡️",
          title: "Production Thinking",
          text: "The developer considers security, validation and error handling."
        }
      ]
    },

    visual: {
      heading: "AI Coding Problem Flow",
      description:
        "A practical AI coding task normally involves several application layers.",
      steps: [
        {
          icon: "1️⃣",
          title: "Requirement",
          text: "Understand what the AI feature must do."
        },
        {
          icon: "2️⃣",
          title: "Frontend",
          text: "Collect user input and display the result."
        },
        {
          icon: "3️⃣",
          title: "Backend",
          text: "Validate the request and communicate with the AI provider."
        },
        {
          icon: "4️⃣",
          title: "Reliability",
          text: "Handle errors, loading states and security."
        }
      ],
      flow:
        "Requirement → Frontend → Backend → AI Provider → Result"
    },

    code: {
      title: "AI Coding Question Example",
      description:
        "Example of a simple backend coding task for an AI application.",
      language: "javascript",
      code: `app.post("/api/summarize", async (req, res) => {
  try {
    const { text } = req.body;

    if (
      typeof text !== "string" ||
      text.trim().length === 0
    ) {
      return res.status(400).json({
        message: "Text is required"
      });
    }

    const prompt = [
      "Summarize the following text",
      "in three short bullet points:",
      text
    ].join("\\n");

    const result =
      await generateAIResponse(prompt);

    res.json({
      summary: result
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to generate summary"
    });
  }
});`,
      output:
        "The endpoint validates input, creates an AI instruction, calls the AI service and returns the generated summary.",
      explanation:
        "This example demonstrates several interview concepts together: Express routing, validation, asynchronous operations, service integration and safe error handling."
    },

    interview: {
      question:
        "How would you build a secure AI-powered API endpoint?",
      answer:
        "I would validate the input, keep the AI API key on the backend, authenticate users when required, apply rate limiting, call the AI service through a backend service layer and handle errors safely.",
      tip:
        "Explain the complete architecture instead of focusing only on the AI API call."
    },

    tricky: {
      question:
        "Why should the frontend not directly contain a private AI API key?",
      answer:
        "Browser code is accessible to users, so a private key placed there can be exposed. A backend service can keep the credential private and control access to the AI provider."
    },

    practice: {
      question:
        "Build an Express endpoint that accepts text and returns an AI-generated summary.",
      hint:
        "Use req.body, validation, an AI service function, try...catch and a JSON response."
    },

    challenge: {
      title: "Build an AI Coding Assistant API",
      description:
        "Create a small backend feature suitable for an AI coding interview.",
      task:
        "Build an Express endpoint that accepts a coding question, validates the input, sends it to an AI service and returns a safe response with proper error handling."
    }
  },
};