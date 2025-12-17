import React from "react";
import { motion } from "framer-motion";
import { Skills } from "../data/Skills";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  viewport: { once: true },
});

const SkillsSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Current field of expertise: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Web Development</span>
        </p>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build amazing experiences.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {Skills.map((skill, index) => (
          <motion.div
            key={skill.slug}
            className="flex flex-col items-center text-center bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800 dark:to-black rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700 dark:border-gray-600 transition-all duration-300"
            {...fadeIn(index * 0.1)}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <skill.Component className="text-5xl text-blue-400 dark:text-blue-400 mb-4" />
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              <skill.Description />
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
