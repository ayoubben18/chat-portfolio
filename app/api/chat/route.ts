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

const myResume: string = `Ayoub Bensalah  
both GraphQL and REST APIs. Used Jest for testing, 
with React Query and Zustand for state management.  
Software and Generative AI Engineer  
Meknes, Morocco  
Gmail: ayoub.bensalah1@usmba.ac.ma  
Tel: +212 625-950284 
Linkedin:   
https://www.linkedin.com/in/ayoub-bensalah-56834b29b/ 
github: https://github.com/ayoubben18  
My Website: ( you can ask anything there ) 
https://ayoubbensalah.vercel.app/  
Summary:  
I'm a Software and AI Developer with 1 year of 
experience in full-stack development. I'm passionate 
about embracing and mastering new technologies, and I 
thrive in dynamic environments that challenge me to 
learn and grow. I'm eager to contribute my skills to a 
forward-thinking team while expanding my expertise 
with the latest advancements in the field.  
SKILLS:  
Languages: C#, JavaScript, TypeScript, Go, Python, Java, 
Solidity, Cypher, PHP, HTML, CSS, SQL, GraphQL  
Frameworks/Libraries: React, Next.js, Solid.js, .NET, Node.js,  
Gin, Hardhat, Jest, Bun, Hono, Deno, LangChain, LangSmith,  
Vercel AI SDK, Jest, Express.js, Apollo GraphQL, React Query  
Technologies: Docker, Kubernetes, CI/CD, MySQL, JetBrains  
IDEs, Identity Server (Duende), Postman, RabbitMQ, Neo4j,  
Google Cloud Platform, AWS, Vercel, Fly.io, ELK stack, testing,  
AWS  
Databases: MongoDB, SQLite, SQL Server, PostgreSQL,  
MySQL, Supabase, Turso, Pinecone, AuraDb, Graph 
Databases, Vector Stores, Redis, Qstash  
EXPERIENCE:  
Software and AI Engineer– CapitaleTech  
15 April 2024 – Now , Remote  
Architected a scalable microservices platform for CV 
ranking (Talentino), leveraging LLMs (Bedrock, OpenAI 
…), Neo4j, and Deno Edge Runtime. Integrated Redis 
for caching, Qstash for background and cron jobs, and 
Built on AWS, utilizing Lambda, Step Functions, Event 
Bridge and various AWS services for seamless 
integrations.  
Led development with Next.js (TailwindCSS, TypeScript, 
Shadcn UI, Supabase, Langchain) and integrated 
microservices using Bun, Hono, FastAPI, and Supabase 
Edge Functions.  
Employed Google Cloud Platform for real-time Gmail 
resume import and processing.  
Served as the primary developer, responsible for the 
project’s scalability and architecture.  
INVOLVEMENT:  
• President: ENSA Fez – InfoChain - November  
2023 – November 2024 
• Design Lead: ENSA Fez – IEEE Student 
Branch - November 2023 – November 2024 
EDUCATION:  
• Baccalaureate in Physical Science Lalla 
Salma High School • Rissani, Morocco •  
2021  
• Génie Informatique (Computer Science 
Engineering) National School of Applied 
Sciences (ENSA) • Fes , Morocco  
Open-source contributions:  
• Dynamic form builder, a contribution to the awesome 
shadcn community that can help you build forms the 
google form way but fancier using shadcn 
components,  you can use it in your app to let your 
users create forms and share their links for other 
users to fill if your app is about statistics or 
recruitement:  
Github repo: 
https://github.com/ayoubben18/sharableform-builder   
Live example: https://sharable-form-builder.vercel.app/   
Passions:  - - 
Content creation  
Martial arts  `;
