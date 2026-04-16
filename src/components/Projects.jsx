import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:justify-center gap-8 lg:gap-16"
          >
            <div className="w-full lg:w-1/4 flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg h-40 object-cover"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left">
              <h3 className="mb-2 font-bold text-xl text-purple-200">{project.title}</h3>
              <p className="mb-4 text-neutral-400 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="rounded-full bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-400 border border-purple-900/50">
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
