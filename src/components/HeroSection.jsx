import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"
import { FiArrowDown } from "react-icons/fi"
import { useScrollToSection } from "../hooks/useScroll"

const HeroSection = () => {
  const scrollToSection = useScrollToSection();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="home" className='min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-indigo-950 dark:via-blue-900 dark:to-black relative overflow-hidden flex items-center transition-colors duration-500'>
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex xl:flex-row flex-col-reverse items-center justify-between relative z-10">
            {/* left section */}
            <div className="z-30 xl:mb-0 mb-12 lg:w-1/2">
            <motion.h1
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:'spring',
                stiffness: 40,
                damping:25,
                delay:0.2,
                duration:1
            }}
            className='text-lg md:text-4xl lg:text-6xl font-bold z-10 mb-6 pointer-events-none bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent'>
                Hi, <br /> Welcome to my portfolio
            </motion.h1>
            <motion.p
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:'spring',
                stiffness: 40,
                damping:25,
                delay:0.5,
                duration:1
            }}
            className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl pointer-events-none leading-relaxed">
                Coding wizard by day, sleep enthusiast by night — I create interactive sites that are as fun as they are functional. Ready to make something awesome?
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.8, duration:0.8}}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-300 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
        </div>

        {/* Right section */}
        {/* <Spline className="absolute" scene="https://prod.spline.design/yxR5t2ee487HMCyF/scene.splinecode" /> */}
        {/* <Spline  scene="https://prod.spline.design/nd4Y1CXLh5S3wqGA/scene.splinecode" /> */}
        <div className="lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
            <Spline className="w-full h-full" scene="https://prod.spline.design/nd4Y1CXLh5S3wqGA/scene.splinecode" />
        </div>

        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-blue-300 text-2xl" />
        </motion.div>
    </section>
  )
}

export default HeroSection