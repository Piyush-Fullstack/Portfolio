import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/piyushvermaprofile.png';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const childVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={childVariants} className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl">
              Piyush Verma
            </motion.h1>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-xl py-6 font-light leading-relaxed">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <div className="flex justify-center">
            <img src={profilepic} alt="Piyush Verma" className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-80 lg:w-96" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
