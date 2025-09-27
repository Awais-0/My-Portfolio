import { motion } from "framer-motion"
import { useState } from "react"
import { FiFacebook, FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import ContactFormModal from "./ContactFormModal";
import MobileNav from "./mobileNav";

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true)
    const closeContactForm = () => setContactFormOpen(false)
    const toggleMenu = () => setisOpen(!isOpen)
    const navLinks = ["Home", "About", "Projects", "Skills"]
    const socialLinks = [
        { icon: FiGithub, href: "https://github.com/Awais-0" },
        { icon: FiFacebook, href: "#" },
        { icon: FiLinkedin, href: "https://www.linkedin.com/in/awais-raza-88262022a/" },
    ];
    return (
        <header className="fixed w-full z-50 transition-all duration-300">
            <div className="h-16 md:h-20 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between backdrop-blur-lg bg-black/40">
                {/* Logo, name */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2
                    }}
                    className="flex items-center">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center mr-3 overflow-hidden">
                        <img
                            className="h-full w-full object-cover object-center"
                            src="/me.webp"
                            alt="My Image"
                        />
                    </div>

                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">M Awais Raza</span>
                </motion.div>

                {/* Navigation Bar Desktop */}
                <nav className="lg:flex hidden space-x-8">
                    {navLinks.map((item, index) => (
                        <motion.button
                            type="button"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 20,
                                delay: 0.3 + index * 0.2,
                            }}
                            key={index}
                            onClick={() => {
                                const sectionId = item.toLowerCase();
                                const section = document.getElementById(sectionId);
                                if (section) section.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-500 font-medium transition-colors duration-300 group focus:outline-none">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.button>
                    ))}
                </nav>


                {/* Social Links */}
                <div className="md:flex hidden items-center space-x-4">
                    {/* github */}
                    {
                        socialLinks.map((link, index) => (
                            <motion.a
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                href={link.href} key={index} className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-color duration-300">
                                <link.icon className="w-5 h-5" />
                            </motion.a>
                        ))
                    }

                    {/* Hire me */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
                        onClick={openContactForm}>
                        Hire me
                    </motion.button>
                </div>

                {/* Mobile Navigation - Menu button */}
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
                        className="text-gray-300">
                        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav navLinks={navLinks} toggleMenu={toggleMenu} socialLinks={socialLinks} openContactForm={openContactForm} isOpen={isOpen} />

            {/* Contact me form */}
            <ContactFormModal contactFormOpen={contactFormOpen} closeContactForm={closeContactForm} />

        </header>
    )
}

export default Header