import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-40 md:mb-20 sm:mb-15 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
          I’m a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full-Stack Developer</span> with expertise in building responsive web applications and engaging user experiences. From frontend interfaces in React to scalable backends with Django, I enjoy crafting clean, efficient, and maintainable code. I love learning new technologies and solving complex problems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            My Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Deliver high-quality, maintainable, and performant applications that provide great user experiences, solve real-world problems, and contribute to meaningful projects.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            What Drives Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A passion for technology, creativity, and continuous learning. I thrive on turning complex ideas into intuitive, user-friendly products that make a positive impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
