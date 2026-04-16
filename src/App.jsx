 import { motion } from "framer-motion";

import About from "./components/About";

import Contact from "./components/Contact";

import Hero from "./components/Hero";

import Navbar from "./components/Navbar";

import Projects from "./components/Projects";

import Technologies from "./components/Technologies";



const App = () => {

  return (

    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">

      {/* Animated Background */}

      <motion.div

        className="fixed top-0 -z-10 h-full w-full"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ duration: 1.2 }}

      >

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </motion.div>



      <div className="container mx-auto px-8">

        {/* Navbar */}

        <motion.div

          initial={{ y: -50, opacity: 0 }}

          animate={{ y: 0, opacity: 1 }}

          transition={{ duration: 0.6, ease: "easeOut" }}

        >

          <Navbar />

        </motion.div>



        {/* Hero */}

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}

        >

          <Hero />

        </motion.div>



        {/* About */}

        <motion.div

          initial={{ x: -100, opacity: 0 }}

          whileInView={{ x: 0, opacity: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}

        >

          <About />

        </motion.div>



        {/* Technologies */}

        <motion.div

          initial={{ x: 100, opacity: 0 }}

          whileInView={{ x: 0, opacity: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}

        >

          <Technologies />

        </motion.div>



        {/* Projects */}

        <motion.div

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 1, delay: 0.2 }}

        >

          <Projects />

        </motion.div>



        {/* Contact */}

        <motion.div

          initial={{ scale: 0.9, opacity: 0 }}

          whileInView={{ scale: 1, opacity: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}

        >

          <Contact />

        </motion.div>

      </div>

    </div>

  );

};



export default App; 
