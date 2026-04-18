import project1 from "../assets/projects/Screenshot-1.png";
import project2 from "../assets/projects/project-1.png";
import project3 from "../assets/projects/Screenshot-3.jpg";
import project4 from "../assets/projects/Screenshot-2.jpg";

export const HERO_CONTENT = `Motivated Frontend Developer with strong skills in React.js, Redux Toolkit, and modern JavaScript. I build responsive, interactive web applications and enjoy working on real-world projects. I also have working knowledge of Node.js and Express.js, allowing me to collaborate effectively on full-stack applications.`;

export const ABOUT_TEXT = `I'm a React.js developer with a Bachelor of Computer Applications from COER University, Roorkee. I focus on building clean and responsive UIs using React, Redux Toolkit, and modern JavaScript (ES6+).

I've worked on projects like a Notes App with centralized state management, a media search platform using multiple APIs, and a Spotify-inspired UI. I enjoy learning new technologies and improving my problem-solving skills through DSA and hands-on development.

Currently, I'm looking for an opportunity where I can contribute to a team, grow my skills, and build impactful products.`;

export const PROJECTS = [
  {
    title: "AI Resume Builder",
    image: project1,
    link: "https://github.com/Piyush-Fullstack/ai-resume-builder",
    description:
      "Full-stack resume builder with JWT authentication and dynamic sections like education, experience, skills, and projects. Users can easily add, edit, and customize resumes.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Music Mood Website",
    image: project2,
    link: "https://github.com/Piyush-Fullstack/music-mood-app",
    description:
      "Mood-based music app that filters songs based on user selection. Integrated Deezer API for search, previews, and interactive features like liking and saving tracks.",
    technologies: ["React", "Redux Toolkit", "CSS", "Axios", "Deezer API"],
  },
  {
    title: "MediaSearch Website",
    image: project3,
    link: "https://github.com/Piyush-Fullstack/Redux-Project",
    description:
      "Search platform for images, videos, and GIFs using Pexels, Unsplash, and Giphy APIs with centralized state management via Redux Toolkit.",
    technologies: ["React", "Redux Toolkit", "Pexels API", "Unsplash API", "Giphy API"],
  },
  {
    title: "SkyCast",
    image: project4,
    link: "https://github.com/Piyush-Fullstack/SkyCast",
    description:
      "Weather app using OpenWeatherMap API with real-time data fetching and optimized performance using React Hooks.",
    technologies: ["React", "OpenWeatherMap API"],
  },
];

export const CONTACT = {
  address: "Roorkee, Uttarakhand, India",
  phoneNo: "+91 8630771651",
  email: "piyushvermaghga@gmail.com",
};
