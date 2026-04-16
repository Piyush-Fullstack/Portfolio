import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        className="my-20 text-center text-4xl font-light"
      >
        Behind The <span className="text-slate-500 italic">Code</span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Profile Image with Artistic Border */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group mx-auto max-w-sm">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              className="relative rounded-2xl grayscale hover:grayscale-0 transition duration-500 shadow-2xl"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>

        {/* Text Section with Stats */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-6 max-w-xl py-6 text-lg leading-relaxed text-slate-400 font-light text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
            
            {/* Minimalist Stats/Highlights */}
            <div className="flex gap-8 justify-center lg:justify-start">
              <div>
                <h4 className="text-2xl font-bold text-cyan-500">MERN</h4>
                <p className="text-sm text-slate-500">Specialization</p>
              </div>
              <div className="border-l border-slate-800 h-10"></div>
              <div>
                <h4 className="text-2xl font-bold text-cyan-500">React</h4>
                <p className="text-sm text-slate-500">Expertise</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
