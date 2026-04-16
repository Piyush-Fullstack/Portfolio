import { RiReactjsLine } from "react-icons/ri";

import { TbBrandNextjs,TbBrandFramerMotion } from "react-icons/tb";

import { SiMongodb,SiMysql, SiExpress } from "react-icons/si";

import { DiRedis } from "react-icons/di";

import { FaJs, FaJava, FaNodeJs } from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";

import { BiLogoTailwindCss } from "react-icons/bi";

import { motion } from "framer-motion";

import { IoLogoCss3 } from "react-icons/io5";

import { IoLogoHtml5 } from "react-icons/io";



const iconVariants = (duration, delay) => ({

  initial: { y: -10, rotate: -5, opacity: 0 },

  animate: {

    y: [10, -10],

    rotate: [5, -5],

    opacity: 1,

    transition: {

      y: {

        duration: duration,

        ease: "linear",

        repeat: Infinity,

        repeatType: "reverse",

        delay: delay, 

      },

      rotate: {

        duration: duration * 2,

        ease: "easeInOut",

        repeat: Infinity,

        repeatType: "reverse",

        delay: delay,

      },

      opacity: { duration: 0.5, delay: delay },

    },

  },

});



const techIcons = [

  { icon: <IoLogoHtml5 className="text-7xl text-orange-600" />, delay: 1 },

  { icon: <IoLogoCss3 className="text-7xl text-blue-500" />, delay: 1 },

  { icon: <FaJs className="text-7xl text-yellow-400" />, delay: 1 },

  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, delay: 0 },

  { icon: <FaNodeJs className="text-7xl text-green-500" />, delay: 0.8 },

  { icon: <SiExpress className="text-7xl text-black-400" />, delay: 1 },

  { icon: <SiMongodb className="text-7xl text-green-500" />, delay: 0.4 },

  { icon: <SiMysql className="text-7xl text-blue-200" />, delay: 1 },

  { icon: <FaJava className="text-7xl text-blue-300" />, delay: 1 },

  { icon: <TbBrandFramerMotion className="text-7xl text-white-300" />, delay: 1 },

  { icon: <BiLogoTailwindCss className="text-7xl text-blue-400" />, delay: 1 },

];



const Technologies = () => {

  return (

    <div className="border-b border-neutral-800 pb-24">

      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">

        {techIcons.map((item, index) => (

          <motion.div

            key={index}

            className="rounded-2xl border-4 border-neutral-800 p-4"

            variants={iconVariants(2, item.delay)} 

            initial="initial"

            animate="animate"

          >

            {item.icon}

          </motion.div>

        ))}

      </div>

    </div>

  );

};



export default Technologies;
