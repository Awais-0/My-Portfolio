import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {projects} from "../data/projects";

// Simple fadeIn animation
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.75, type: "spring" },
  },
});

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  demoLink,
}) => (
  <motion.div
    variants={fadeIn(index * 0.3)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className="flex flex-col w-full max-w-xs rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-black p-5 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 dark:border-gray-600"
  >
    <div className="relative h-56 w-full overflow-hidden rounded-xl group">
      <img 
        src={image} 
        alt={name} 
        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(sourceCodeLink, "_blank")}
          className="rounded-full bg-white/20 backdrop-blur-sm p-3 text-white hover:bg-white/30 transition-all"
          title="View Source Code"
        >
          <FiGithub size={24} />
        </motion.button>
        {demoLink && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(demoLink, "_blank")}
            className="rounded-full bg-white/20 backdrop-blur-sm p-3 text-white hover:bg-white/30 transition-all"
            title="View Demo"
          >
            <FiExternalLink size={24} />
          </motion.button>
        )}
      </div>
    </div>

    <div className="mt-4 flex-1">
      <motion.h3 
        className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        {name}
      </motion.h3>
      <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">{description}</p>
    </div>
    
    <div className="mt-4">
      <h6 className="font-bold text-xs text-gray-300 dark:text-gray-400 uppercase tracking-wider">Technologies:</h6>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <motion.span 
            key={tag.name}
            whileHover={{ scale: 1.1 }}
            className={`text-xs px-3 py-1 rounded-full bg-gray-700/50 dark:bg-gray-700/70 backdrop-blur-sm ${tag.color} font-semibold`}
          >
            {tag.name}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <section className="px-4 py-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Showcase of projects I've built. Hover to explore, click GitHub to view code, and click the external link to try live demos.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
