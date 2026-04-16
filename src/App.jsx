import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    // Updated text color and selection style for a cleaner look
    <div className="overflow-x-hidden text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Dynamic Modern Background */}
      <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]"></div>
        {/* Subtle Mesh effect */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0%,rgba(0,163,255,0)_50%),radial-gradient(100%_50%_at_50%_0%,rgba(139,92,246,0.05)_0%,rgba(139,92,246,0)_50%)]"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 pt-24">
        <Navbar />
        
        {/* Smooth Section Transitions */}
        <main className="space-y-32">
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
