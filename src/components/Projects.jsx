import { PROJECTS } from "../constants";

import { motion } from "framer-motion";



const Projects = () => {

  return (

    <div className="border-b border-neutral-900 pb-4">

      <h1 className="my-20 text-center text-4xl">Projects</h1>

      <div>

        {PROJECTS.map((project, index) => (

          <motion.div

            key={index}

            className="mb-8 flex flex-wrap lg:justify-center"

            initial={{ opacity: 0, scale: 0.9 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            transition={{ delay: index * 0.2, duration: 0.6 }}

          >

            {/* Image Section */}

            <div className="w-full lg:w-1/4">

              <motion.img

                src={project.image}

                width={150}

                height={150}

                alt={project.title}

                className="mb-6 rounded"

                whileHover={{ scale: 1.05, rotate: 3 }}

              />

            </div>



            {/* Project Details Section */}

            <div className="w-full max-w-xl lg:w-3/4">

              <h6 className="mb-2 font-semibold">{project.title}</h6>

              <p className="mb-4 text-neutral-400">{project.description}</p>



              {/* Technologies */}

              {project.technologies.map((tech, techIndex) => (

                <span

                  key={techIndex}

                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"

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
