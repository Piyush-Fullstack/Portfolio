import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/piyushvermaprofile.png';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi'; // Isse install kar lena: npm install react-icons

const Hero = () => {
  return (
    <div className="pb-20 pt-10 lg:pt-20">
      <div className="flex flex-wrap items-center">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="pb-6 text-5xl font-bold tracking-tight lg:text-8xl bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Piyush Verma
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Opportunities
            </motion.div>

            <motion.span
              className="text-3xl lg:text-4xl font-medium text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              MERN Stack <span className="text-cyan-500">Architect</span>
            </motion.span>

            <motion.p
              className="my-6 max-w-xl text-lg leading-relaxed text-slate-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons / CTA */}
            <motion.div 
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)]"
              >
                Hire Me
              </a>
              <a 
                href="RESUME_LINK" 
                target="_blank"
                className="px-8 py-3 border border-slate-700 hover:bg-slate-800 text-slate-200 rounded-xl font-medium flex items-center gap-2 transition-all"
              >
                Resume <FiDownload />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Profile Picture with Glow */}
        <div className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
            
            <motion.img
              src={profilepic}
              alt="Piyush Verma"
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-[2.5rem] object-cover border-2 border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
