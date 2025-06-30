import { AnimatePresence, motion } from "framer-motion"
import { FiX } from 'react-icons/fi'

const ContactFormModal = ({contactFormOpen, closeContactForm}) => {
  return (
    <AnimatePresence>
            {contactFormOpen && (
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:1}}
                transition={{duration:0.6}}
                className="fixed inset-0 bg-black/45 backdrop-blur-sm z-60 flex items-center justify-center p-4"
>

                    <motion.div
                    initial={{opacity:0, scale:0.8, y:30}}
                    animate={{scale:1, opacity:1, y:0}}
                    exit={{opacity:0, scale:0.8, y:30}}
                    transition={{
                        type:'spring',
                        damping: 30,
                        stiffness:200,
                        duration: 0.8
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-gray-300">Get in touch</h1>
                            <button onClick={closeContactForm}>
                                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                            </button>
                        </div>

                        {/*Input fields*/}
                        <form action="" className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your email" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">Message</label>
                                <textarea rows='4' id="message" placeholder="Send me a message" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700" />
                            </div>
                            <motion.button
                            whileHover={{scale:1.03}}
                            whileTap={{scale: 0.97}}
                            animate={{}}
                            type="submit"
                            className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                                Send message
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
  )
}

export default ContactFormModal