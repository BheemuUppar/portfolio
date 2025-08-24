export const skills = [
  {
    name: "html",
    icon: "./assets/icons/html.svg",
  },
  {
    name: "css",
    icon: "./assets/icons/css.svg",
  },
  {
    name: "javascript",
    icon: "./assets/icons/javascript.svg",
  },
  {
    name: "Angular",
    icon: "./assets/icons/angular.svg",
  },
  {
    name: "React",
    icon: "./assets/icons/react.svg",
  },
  {
    name: "Tailwind",
    icon: "./assets/icons/Tailwind_CSS_Logo.svg",
  },
  {
    name: "nodejs",
    icon: "./assets/icons/nodejs.svg",
  },
  {
    name: "java",
    icon: "./assets/icons/java-icon.svg",
  },
  {
    name: "mongodb",
    icon: "./assets/icons/mongo.svg",
  },
  {
    name: "mysql",
    icon: "./assets/icons/mysql.svg",
  },
  {
    name: "git",
    icon: "./assets/icons/git.svg",
  },
];

export const projects = [
  {
    title: "Code Lens – AI-Powered Code Analysis Tool",
    img: "./assets/codelens.png",
    description:
      "An AI-driven application that analyzes source code from zip files or GitHub URLs using Google’s Gemini model, generating structured insights for quality, maintainability, and documentation.",
    technologies: ["Angular", "Nodejs", "Express", "Gemini AI Model", "socket.io"],
    buttons: [
      { name: "Frontend code", link: "https://github.com/BheemuUppar/Codelens.git" },
      { name: "Backend code", link: "https://github.com/BheemuUppar/Code-Analyser-Backend.git" },
      { name: "Live", link: "https://code-analyzer-frontend.onrender.com/" },
    ],
  },
  {
    title: "Chat Application",
    img: "./assets/chat-ui.png",
    description:
      "Developed Real-time chat app with one-on-one messaging, group chat functionality, media sharing (photos,videos, documents), and planned audio/video call features.",
    technologies: ["Angular", "Nodejs", "Express", "PL/SQL", "socket.io"],
    buttons: [
      { name: "Frontend code", link: "https://github.com/BheemuUppar/chat-application-client" },
      { name: "Backend code", link: "https://github.com/BheemuUppar/chat-application-client" },
    ],
  },
  {
    title: "Musify",
    img: "./assets/musify.png",
    description:
      "Music streaming platform with login, search, music playback, playlist creation (private & public),collaboration features.",
    technologies: ["Reactjs", "Nodejs", "Tailwind css", "MongoDB"],
    buttons: [
      { name: "Source", link: "https://github.com/BheemuUppar/musify" },
      { name: "Live", link: "https://musify-khaki.vercel.app/" },
    ],
  },
  {
    title: "Electric Bike Landing page",
    img: "./assets/rhyno.png",
    description:
      "E-commerce landing page with interactive UI and Razor pay payment gateway integration",
    technologies: ["Reactjs", "Tailwind css", "Razorpay"],
    buttons: [
      {
        name: "Source",
        link: "https://github.com/BheemuUppar/Electric-Bike-landing-page",
      },
      { name: "Live", link: "https://electric-bike-landing-page.vercel.app/" },
    ],
  },
  {
    title: "chess game",
    img: "./assets/chess-game.png",
    description:
      "Developed two-player chess game with turn indicators and possible move suggestions",
    technologies: ["html5", "CSS3", "Javascript", "Bootstrap"],
    buttons: [
      { name: "Source", link: "https://github.com/BheemuUppar/chess-game-js" },
      { name: "Live", link: "https://chess-game-javascript.onrender.com/" },
    ],
  },

  {
    title: "Recipe Management",
    img: "./assets/food recipe.png",
    description:
      " Recipe search platform with user authentication, favorites list, and integration with Spoonacular API ",
    technologies: ["Angular", "Bootstrap", "Nodejs"],
    buttons: [
      {
        name: "Source",
        link: "https://github.com/BheemuUppar/recipe-management-angular/tree/main",
      },
      { name: "Live", link: "https://recipe-management-psi.vercel.app/home" },
    ],
  },
];
