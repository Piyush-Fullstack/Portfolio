import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaJs, FaJava } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techList = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2.5 },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 3 },
  { icon: <SiMongodb className="text-7xl text-green-400" />, duration: 5 },
  { icon: <SiExpress className="text-7xl text-white" />, duration: 2 },
  { icon: <SiTailwindcss className="text-7xl text-sky-400" />, duration: 4 },
  { icon: <SiMysql className="text-7xl text-blue-400" />, duration: 2.8 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -50 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, borderColor: "#a855f7" }}
            className="rounded-2xl border-4 border-neutral-800 p-6 transition-colors"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
