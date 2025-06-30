import { motion } from "framer-motion";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Left: Copyright */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left text-sm text-gray-400"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.div>

        {/* Right: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center md:justify-end space-x-6"
        >
          {[FiGithub, FiFacebook, FiInstagram, FiLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-violet-500 transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
