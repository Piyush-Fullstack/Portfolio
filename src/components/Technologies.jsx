import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";

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

const techIcons = [
  { icon: <SiHtml5 />, color: "text-orange-500", label: "HTML5", duration: 2.5 },
  { icon: <SiCss3 />, color: "text-blue-500", label: "CSS3", duration: 3 },
  { icon: <SiJavascript />, color: "text-yellow-400", label: "JS", duration: 5 },
  { icon: <RiReactjsLine />, color: "text-cyan-400", label: "React", duration: 2 },
  { icon: <FaNodeJs />, color: "text-green-500", label: "Node.js", duration: 6 },
  { icon: <SiExpress />, color: "text-white", label: "Express", duration: 4 },
  { icon: <SiMongodb />, color: "text-green-400", label: "MongoDB", duration: 3.5 },
  { icon: <SiTailwindcss />, color: "text-sky-400", label: "Tailwind", duration: 4.5 },
  { icon: <TbBrandFramerMotion />, color: "text-pink-500", label: "Framer", duration: 2.8 },
  { icon: <FaJava />, color: "text-red-500", label: "Java", duration: 5.5 },
];

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        className="my-20 text-center text-4xl font-light tracking-wider"
      >
        Tech <span className="text-slate-500 italic text-3xl font-thin">Stack</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-2 border-slate-800 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900"
          >
            <div className={`text-6xl ${tech.color}`}>{tech.icon}</div>
            {/* Tooltip on Hover */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-0 rounded bg-slate-800 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
              {tech.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
