import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-500/30 selection:text-white">
      {/* Enhanced Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
