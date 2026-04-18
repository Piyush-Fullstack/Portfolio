import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        className="my-20 text-center text-4xl font-light"
      >
        Featured <span className="text-slate-500 italic">Work</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-cyan-500/30"
          >
            {/* Project Image with Overlay */}
            <div className="relative overflow-hidden rounded-xl h-48 mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center gap-4">
                 <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FaExternalLinkAlt /></a>
                 <a href={project.link} className="p-3 bg-slate-800 text-white rounded-full hover:scale-110 transition-transform"><FaGithub /></a>
              </div>
            </div>

            {/* Content */}
            <h3 className="mb-2 text-2xl font-semibold text-slate-100">{project.title}</h3>
            <p className="mb-6 text-slate-400 font-light text-sm">{project.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
