import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tech Lead, Startup XYZ",
      role: "Client",
      feedback: "Muhammad is an exceptional developer. Delivered high-quality code on time with excellent communication.",
      avatar: "👨‍💼"
    },
    {
      name: "Project Manager, Agency ABC",
      role: "Collaborator",
      feedback: "Great attention to detail and problem-solving skills. Always willing to go the extra mile.",
      avatar: "👩‍💼"
    },
    {
      name: "Fellow Developer",
      role: "Peer",
      feedback: "Impressed by clean code practices and ability to learn new technologies quickly.",
      avatar: "👨‍💻"
    }
  ];

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
    viewport: { once: true },
  });

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          What Others Say
        </h2>
        <p className="mt-4 text-gray-400 dark:text-gray-400">
          Feedback from clients and collaborators
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-black rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
            {...fadeInUp(index * 0.2)}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
              "{testimonial.feedback}"
            </p>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{testimonial.avatar}</div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
