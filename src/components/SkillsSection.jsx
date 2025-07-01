import React from "react";
import { motion } from "framer-motion";
import { Skills } from "./Skills"; // Adjust the path if needed

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
  viewport: { once: true },
});

const SkillsSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          My Skills
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are the main technologies and tools I use in my projects.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {Skills.map((skill, index) => (
          <motion.div
            key={skill.slug}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
            {...fadeIn(index * 0.1)}
          >
            <skill.Component className="text-5xl text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <skill.Description />
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
