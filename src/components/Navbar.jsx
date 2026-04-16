import React from 'react';
import logo from '../assets/piyushvermalogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbFileCv } from "react-icons/tb";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl shadow-2xl"
      >
        <motion.img 
          whileHover={{ rotate: 360 }} 
          transition={{ duration: 0.5 }}
          className="w-10 h-10 object-contain" 
          src={logo} 
          alt="logo" 
        />
        
        <div className="flex items-center gap-6 text-xl">
          {[
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vermapiyush11/" },
            { icon: <FaGithub />, href: "https://github.com/piyush-777-debug" },
            { icon: <TbFileCv />, href: "https://drive.google.com/file/d/..." }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              whileHover={{ y: -3, color: "#22d3ee" }}
              className="text-neutral-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
