import project1 from "../assets/projects/Screenshot-1.png";
import project2 from "../assets/projects/project-1.png";
import project3 from "../assets/projects/Screenshot-3.jpg";
import project4 from "../assets/projects/Screenshot-2.jpg";

export const HERO_CONTENT = `Motivated and detail-oriented Frontend Developer with strong proficiency in React.js, Redux Toolkit, JavaScript, and modern UI frameworks. Passionate about building interactive, responsive web applications and eager to contribute to dynamic development teams. Additionally, I have a solid understanding of backend technologies like Node.js and Express.js, which helps me collaborate effectively on full-stack projects.`;

export const ABOUT_TEXT = `I'm a passionate React.js developer completed my Bachelor of Computer Applications from COER University, Roorkee. I specialize in building responsive and interactive user interfaces using React.js, Redux Toolkit, and modern JavaScript (ES6+). I've completed several hands-on projects like a Notes App with centralized state management, a Random Quote Generator using APIs, and a Spotify UI Clone.I enjoy exploring new web technologies and improving my problem-solving skills through DSA and real-world project work. I am actively seeking an opportunity to join a dynamic team where I can contribute, learn, and grow as a frontend developer.`;

export const PROJECTS = [
  {
    title: "AI Resume Builder",
    image: project1,
    link: https://github.com/Piyush-Fullstack/ai-resume-builder,
    description:
      "Built a full-stack Resume Builder using React, Node.js, Express, and MongoDB with secure JWT authentication. Implemented dynamic sections like Education, Experience, Skills, and Projects with add/remove functionality for customizable resumes.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Music Mood Website",
    image: project2,
    link: https://github.com/Piyush-Fullstack/music-mood-app,
    description:
      "Developed a mood-based music streaming application that dynamically filters and displays songs based on user-selected moods. Integrated Deezer API for song search with 30-second previews and interactive features like liking and saving tracks.",
    technologies: ["React", "Redux Toolkit", "CSS", "Axios", "Deezer API"],
  },
  {
    title: "MediaSearch Website",
    image: project3,
    link: https://github.com/Piyush-Fullstack/Redux-Project,
    description:
      "Built a media search platform to explore images, videos, and GIFs using Pexels, Unsplash, and Giphy APIs. Managed global state using Redux Toolkit for smooth data handling and performance.",
    technologies: ["React", "Redux Toolkit", "Pexels API", "Unsplash API", "Giphy API"],
  },
  {
    title: "SkyCast",
    image: project4,
    link: https://github.com/Piyush-Fullstack/SkyCast,
    description:
      "Developed a real-time weather application using OpenWeatherMap API. Used React Hooks for efficient state management and optimized rendering.",
    technologies: ["React", "OpenWeather API"],
  },
];

export const CONTACT = {
  address: "Roorkee, Uttarakhand",
  phoneNo: "+91 8630771651 ",
  email: "piyushvermaghga@gmail.com",
};
