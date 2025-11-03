export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  timeline: string;
  impact: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  blogUrl?: string;
  type: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "XINGJI Travels",
    type: "Full Stack",
    description:
      "Personal Project focused on sharing my experiences travelling and living in Asia as an expat.",
    longDescription:
      "One of my long-standing aspirations has been to share the diverse experiences I've had while living and traveling across Asia. With mainstream travel media often saturated with the same destinations, I decided to take on the challenge myself, and leverage my technical acumen to create XINGJI Travels, a space for me to share the hidden gems that i've experienced during my stay in different places around Asia. This venture resulted in many firsts from a technological perspective, as the technological landscape used was wide with many new tools and frameworks leveraged.",
    technologies: [
      "Typescript",
      "Vercel",
      "Supabase",
      "Next.js",
      "Google Search Console",
    ],
    timeline: "2 months",
    impact: [
      "Deployed a Next.js app to Vercel with a registered domain",
      "Google Search Console and Google Analytics integration for indexing & analytics",
      "Utilized Supabase's remote stored procedures for more complex data processing & queries",
      "Drafted User Stories and UI Wireframes to plan out the project scope and features",
    ],
    image: "/xingjitravel.gif",
    demoUrl: "https://xingjitravel.com/",
    blogUrl: "https://adrian-blog.vercel.app/en-US/posts/70",
  },
  {
    id: "2",
    title: "ITC",
    type: "AI Assisted Development",
    description:
      "Project focused on leveraging AI assisted tools to focus more on stakeholder experience and project management.",
    longDescription:
      "With the advance of AI assisted tools, I wanted to explore how these new technologies influenced development and how it enables developers to ship at speed. As a result, I decided to take on the initative and create a website for my local fitness club. Letting the tools do the heavy lifting, I was able to focus on the stakeholder experience and project management side of things, ensuring that the end product met the needs of the stakeholders. I was also able to understand deeply the capabilities and limitations of these new AI assisted tools, which was a valuable learning experience.",
    technologies: [
      "Figma Make",
      "Vercel V0",
      "Copilot",
      "Google Analytics",
      "AMP",
    ],
    timeline: "1 month",
    impact: [
      "Worked with stakeholders to understand business requirements and the vision and goal for the website",
      "Leveraged AI assisted tools to rapidly prototype and develop the website",
    ],
    image: "/ITC.gif",
  },
  {
    id: "3",
    title: "MarkBlog",
    type: "Full Stack",
    description:
      "A markdown based blogging platform that I created to share my academic learnings and notes.",
    longDescription:
      "One of my first personal projects, MarkBlog, was born out of my desire to share my academic learnings in a space that I could own and have full control over. Having used Notion to this prior, it was a great learning experience for me to understand how full stack applications are built and managed. This project was a significant learning experience for me, as it involved me building my first full-stack application from scratch.",
    technologies: [
      "Supabase",
      "Vue.js",
      "Javascript",
      "Google Analytics",
      "Tailwind CSS",
      "i18n",
    ],
    timeline: "3 months",
    impact: [
      "Implemented Filtering and Pagination from stratch for API optimisation",
      "Built and deployed a full-stack blogging platform mainly using Vue.js and Supabase",
      "Refactored the project from End of Life Vue 2 to Next.JS",
    ],
    image: "/blogpreview.gif",
    demoUrl: "https://adrian-blog.vercel.app/",
    githubUrl: "https://github.com/adriantzkok/MarkBlog",
    blogUrl: "https://adrian-blog.vercel.app/en-US/posts/57",
  },
];
