import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

// Sample image imports — replace with actual image paths
import carrent from '../assets/carrent.png';
import jobit from '../assets/jobit.png';
import tripguide from '../assets/tripguide.png';

const projects = [
  {
    name: 'VirtuComm',
    description:
      'Web-based platform that allows users to learn modern communication techniques and prepare interviews by simulating communication between 3D models integrated with AI model',
    tags: [
      { name: 'react', color: 'text-blue-400' },
      { name: 'python', color: 'text-green-400' },
      { name: 'bootstrap', color: 'text-pink-400' },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      { name: 'react', color: 'text-blue-400' },
      { name: 'restapi', color: 'text-green-400' },
      { name: 'scss', color: 'text-pink-400' },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Blogg App',
    description:
      'Platform to share your stories effortlessly with beautifully designed, feature-rich blog apps built for seamless reading and easy publishing.',
    tags: [
      { name: 'react', color: 'text-blue-400' },
      { name: 'redux', color: 'text-green-400' },
      { name: 'tailwindcss', color: 'text-pink-400' },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

// Simple fadeIn animation
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.75, type: 'spring' } },
});

const ProjectCard = ({ index, name, description, tags, image, sourceCodeLink }) => (
  <motion.div
    variants={fadeIn(index * 0.3)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="w-full max-w-xs rounded-2xl bg-gray-900 p-5 shadow-lg"
  >
    <div className="relative h-56 w-full overflow-hidden rounded-xl">
      <img src={image} alt={name} className="h-full w-full object-cover" />
      <div className="absolute right-2 top-2">
        <button
          onClick={() => window.open(sourceCodeLink, '_blank')}
          className="rounded-full bg-black/60 p-2 text-white hover:bg-black"
        >
          <FiGithub size={20} />
        </button>
      </div>
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>

    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag.name} className={`text-xs ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <section className="px-4 py-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">My Projects</h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Below are some of the projects I’ve worked on. Click the GitHub icon to view source code.
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
