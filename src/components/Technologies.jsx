import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const techIcons = [
  { icon: <RiReactjsLine />, color: "text-cyan-400", name: "React", size: "col-span-2 row-span-2" },
  { icon: <FaNodeJs />, color: "text-green-500", name: "Node.js", size: "col-span-1" },
  { icon: <SiMongodb />, color: "text-green-400", name: "MongoDB", size: "col-span-1" },
  { icon: <SiExpress />, color: "text-white", name: "Express", size: "col-span-2" },
  { icon: <SiTailwindcss />, color: "text-sky-400", name: "Tailwind", size: "col-span-1" },
  { icon: <SiJavascript />, color: "text-yellow-400", name: "JS", size: "col-span-1" },
];

const Technologies = () => {
  return (
    <div className="py-24">
      <h2 className="text-center text-5xl font-bold mb-16 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-4">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
            className={`flex flex-col items-center justify-center p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm ${tech.size}`}
          >
            <div className={`text-6xl ${tech.color}`}>{tech.icon}</div>
            <p className="mt-4 text-sm font-semibold text-neutral-500">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
