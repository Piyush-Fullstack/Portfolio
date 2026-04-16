import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="py-24">
      <h2 className="text-center text-5xl font-bold mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
          >
            <div className="overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-cyan-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
