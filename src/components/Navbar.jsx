import React from 'react';
import logo from '../assets/piyushvermalogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 lg:px-16 backdrop-blur-lg bg-slate-950/70 border-b border-slate-800/50">
      
      <motion.div 
        className="flex flex-shrink-0 items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className="w-20 h-auto brightness-110" src={logo} alt="logo" />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-6 text-xl text-slate-300"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vermapiyush11/" },
          { icon: <FaGithub />, link: "https://github.com/piyush-777-debug" },
          { icon: <TbFileCv />, link: "https://drive.google.com/file/d/1tO0VAFaRsxPfNXmjAXD5XuoXtAyQpyC9/view?usp=sharing" }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
