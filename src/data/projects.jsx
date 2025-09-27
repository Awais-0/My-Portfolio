import carrent from "../assets/carrent.webp";
import TodoApp from "../assets/TodoApp.webp";
import tripguide from "../assets/tripguide.webp";

export const projects = [
  {
    name: "VirtuComm",
    description:
      "Web-based platform that allows users to learn modern communication techniques and prepare interviews by simulating communication between 3D models integrated with AI model",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "python", color: "text-green-400" },
      { name: "bootstrap", color: "text-pink-400" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    demoLink: "",
  },
  {
    name: "Todo App",
    description:
      "Simple todo manager having multiple users functionality with authentication implemented",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "node", color: "text-green-400" },
      { name: "tailwindcss", color: "text-pink-400" },
    ],
    image: TodoApp,
    sourceCodeLink: "https://github.com/",
    demoLink: "https://todoapp-frontend-steel.vercel.app/",
  },
  {
    name: "Blogg App",
    description:
      "Platform to share your stories effortlessly with beautifully designed, feature-rich blog apps built for seamless reading and easy publishing.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "redux", color: "text-green-400" },
      { name: "tailwindcss", color: "text-pink-400" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    demoLink: "",
  },
];