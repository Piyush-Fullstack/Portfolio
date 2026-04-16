import React from 'react';

import logo from '../assets/piyushvermalogo.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { TbFileCv } from "react-icons/tb";

import { motion } from 'framer-motion';



const Navbar = () => {

  return (

    <motion.nav

      className="mb-20 flex items-center justify-between py-6"

      initial={{ y: -50, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.8, ease: 'easeOut' }}

    >

      <div className="flex flex-shrink-0 items-center">

        <motion.img

          className="mx-2 w-30 h-8"

          src={logo}

          alt="logo"

          whileHover={{ scale: 1.1, rotate: 5 }}

        />

      </div>

      <div className="flex items-center justify-center gap-4 text-2xl m-8">

          <motion.div

            whileHover={{ scale: 1.3, rotate: 10 }}

            whileTap={{ scale: 0.9 }}

          >

            <a href="https://www.linkedin.com/in/vermapiyush11/"><FaLinkedin /></a>

          </motion.div>



          <motion.div

            whileHover={{ scale: 1.3, rotate: 10 }}

            whileTap={{ scale: 0.9 }}

          >

            <a href="https://github.com/piyush-777-debug"><FaGithub /></a>

          </motion.div>



          <motion.div

            whileHover={{ scale: 1.3, rotate: 10 }}

            whileTap={{ scale: 0.9 }}

          >

            <a href="https://drive.google.com/file/d/1tO0VAFaRsxPfNXmjAXD5XuoXtAyQpyC9/view?usp=sharing"><TbFileCv /></a>

          </motion.div>



          {/* <motion.div

            whileHover={{ scale: 1.3, rotate: 10 }}

            whileTap={{ scale: 0.9 }}

          >

            <FaInstagram />

          </motion.div> */}

    </div>



    </motion.nav>

  );

};



export default Navbar; 
