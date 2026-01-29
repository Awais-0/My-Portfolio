import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ navLinks, toggleMenu, socialLinks, openContactForm, isOpen }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else console.log('section not found')
    toggleMenu();
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
    >
      <nav className="flex flex-col space-y-3">
        {navLinks.map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item)}
            className="text-left text-gray-600 dark:text-gray-300 font-medium py-2 focus:outline-none"
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex space-x-5">
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index}>
              <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            toggleMenu();
            openContactForm();
          }}
          className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default MobileNav;
