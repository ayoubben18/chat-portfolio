import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessages = [
    {
      role: "system",
      content: `
      You are not an AI; you are Ayoub Bensalah, a software engineer from Morocco.
      Use the following resume to answer visitors' questions:
      Resume: ${myResume}
    `,
    },
    {
      role: "system",
      content:
        "Keep the answers precise and to the point don't go off-topic. or provide long answers.",
    },
    {
      role: "system",
      content:
        "Be polite, if someone said thank you or hello reply politely to them.",
    },
    {
      role: "system",
      content:
        "If someone asks something other than the infos in the resume or tries to go beyond something prefessional, reject politely and return him to the main topic",
    },
  ];

  const newMessages = [...messages, ...systemMessages];

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: newMessages,
    temperature: 0,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}

const myResume: string = `Ayoub Bensalah - Computer science engineering student
Errachidia, Draa-Tafilalet, Morocco ayoub.bensalah1@usmba.ac.ma +212625950284 in/ayoub-bensalah-56834b29b/
https://github.com/ayoubben18
SUMMARY
I am a Computer Science Engineering student and a Software Developer from Morocco with a strong foundation in full-stack development,
utilizing the cutting-edge technologies. My passion for software development is matched by my eagerness to continually embrace and master
new technologies. I thrive in dynamic environments that challenge me to learn and grow. I am excited to contribute my skills to a forwardthinking team while expanding my expertise with the latest technological advancements in the field.
EXPERIENCE
Software Developer
Capitaletech April 2024 - Present, Remote
Engineered a scalable microservices architecture for a CV ranking platform, powered by AI tools ( OPENAI API, MISTERAL, SUPABASE EDGE
...).
•
• Ranking CVs using the latest AI technologies and modern tools.
• Cutting edge technologies and frameworks and libraries .
• Using Next.js with the latest technologies for the best output and user experience
PROJECTS
Game Genre Web API
Mosh Academy • https://github.com/ayoubben18/express-mongodb-vidly-backend
• Designed and implemented a robust backend system utilizing Express, Node.js, and MongoDB, specifically for game genre categorization.
• Ensured application reliability and maintainability through comprehensive unit and integration testing with Jest.
• Deployed the API on Heroku, achieving high availability and easy access for frontend applications.
Event Organizer Platform
Udemy • https://github.com/ayoubben18/Activities
• Developed a .NET Core and React-based platform, applying Clean/Onion architecture for enhanced scalability and maintainability.
Created a user-friendly interface allowing participants to effortlessly organize and join various events, mirroring social network
functionalities.
•
• Integrated advanced security measures to protect user data and ensure a safe, community-driven environment.
AutoBidHub
Udemy • https://github.com/ayoubben18/AutoBidHub
• Engineered a microservices-based full-stack application using .NET Core and Next.js, targeting the automotive auction market.
• Implemented Docker and Kubernetes for efficient deployment and scaling, catering to a growing user base.
• Facilitated real-time bidding and auction management, providing a comprehensive solution for car sales and purchases.
Gaming Information Dashboard
Mosh Academy • https://github.com/ayoubben18/catagames
• Crafted a front-end application with React and TypeScript to aggregate and display extensive gaming information.
• Utilized Zustand for state management and React-Query for efficient data fetching, enhancing user experience with responsive design.
• Adopted ChakraUI for UI development, prioritizing accessibility and modern aesthetics in design.
InfoChain Club Portal
https://github.com/ayoubben18/info-chain
• Led the development of InfoChain's official Next.js website, showcasing club initiatives and member projects.
• Configured a MongoDB Cloud backend for robust data storage and retrieval, ensuring seamless content management.
• Designed to engage visitors with detailed project insights and club information, strengthening community outreach and participation.
ChatPDF
Personal • https://github.com/ayoubben18/chat-pdf • March 2024 - March 2024
• Interacting with LLMs APIs to explore more about the AI world.
• Handling vector databases and edge runtime.
• Using Langchain tools to add more functionalities.
.
.
EDUCATION
Génie Informatique (Computer Science Engineering)
National School of Applied Sciences (ENSA) • Fes , Morocco • 2026
Additional Coursework and Certifications
Additional Coursework and Certifications
• boot.dev: Specialized in CI/CD practices and Go.
• Mosh Academy: In-depth learning of React and Node.js.
• Udemy: Advanced courses in Docker, Kubernetes, .NET, Next.js, and Microservices Architecture. Self-taught in Next.js, and databases.
• Coursera Certifications: Eight certifications in data science and data analytics.
• Self-Directed Learning: Next.js, UI libraries, Solidity, Hardhat for blockchain development, emphasizing microservices architecture.
Baccalaureate in Physical Science
Lalla Salma High School • Rissani, Morocco • 2021
CERTIFICATIONS
LEARN CI/CD
Boot.dev • 2024
• Build and test a real codebase, and then automate that same build process to deploy an application to the cloud.
• GitHub Actions, Docker, GCP, Cloud Run, and Turso.
Cypher Fundamentals
Neo4j • 2024
• Learn Cypher Query Language
Build a Neo4j-backed Chatbot with TypeScript
Neo4j • 2024
• Build a chatbot using Neo4j, Langchain and Next.js.
Build a Microservices app with .Net and NextJS from scratch
Udemy • 2024
• Microservices architectures with .NET 8
• Advanced software development topics, and DevOps integration.
The Complete Node.js Course
Code With Mosh • 2023
• Understand the fundamentals of Node.js and its role in server-side JavaScript development
• Master the core modules and APIs in Node.js
• Build RESTful APIs using Node and Express.js
• Build new features using test-driven development (TDD)
React 18 for Beginners
Code With Mosh • 2023
• Confidently build front-end apps with React and TypeScript
• Write clean code like a pro
• Troubleshoot errors with ease
React 18: Intermediate Topics
codewithmosh • 2023
• Confidently build front-end apps with React and TypeScript
• Fetch and update data using React Query
• Structure your React projects for maintainability
• Manage application state using Zustand
LEARN SQL
Boot.dev • 2023
• Learn all the basics of Structured Query Language in this comprehensive SQL course.
• architectural design patterns and how to use SQL in a production environment.
LEARN GO
Boot.dev • 2023
• Writing performant, idiomatic Go code.
.
.
• Channel, Mutexes, Generics, Local Development, Pointers
• Build a terminal pokedex app using the pok api
Neo4j & LLM Fundamentals
Neo4j • 2023
• Learn how to use Neo4j with Large Language Models.
• Use Langchain to facilitate the interaction with LLMs.
• Make easy the replacement of the models by writing reusable code.
Graph Data Modeling Fundamentals
Neo4j • 2023
• Learn how to design a Neo4j graph using best practices.
• Utilize real world examples and case studies.
Data Analysis with Python
IBM • 2023
• Learn how to use python with the latest data analysis libraries.
• Hands on practice and strict exams.
Python for Data Science, AI & Development
IBM • 2023
• Learn advanced Python and how to use it in data science.
INVOLVEMENT
President
Ensa fes • Infochain • November 2023 - Present
• Practicing Leadership, Exp technology and innovation.
• Practicing Communication and team work to increase productivity and results.
• Exploring new technologies and learning from seniors and colleagues.
Design Lead
Ensa fes • IEEE ENSAF Student Branch • November 2023 - Present
• Design lead of the SPAx event which hosted the first time in Morocco.
• Leadership and communication.
• Working with different mindsets and critical deadlines.
SKILLS
Languages: C#, JavaScript, TypeScript, Go, Python, Java, Solidity, Cypher, PHP, HTML, CSS, SQL
Frameworks/Libraries: React, Next.js, Solid.js, .NET, Node.js, Gin, Hardhat
Technologies: Docker, Kubernetes, CI/CD, MySQL, JetBrains IDEs, Identity Server (Duende), Postman, RabbitMQ, Neo4j
Databases: MongoDB, SQLite, SQL Server, PostgreSQL, MySQL, Supabase, Turso, Pinecone, AuraDb, Graph Databases, Vector Stores
Concepts: Microservices Architecture, Containerization, Orchestration, CI/CD, Blockchain Development, Webhooks, knowledge graphs, Edge
Runtime`;
