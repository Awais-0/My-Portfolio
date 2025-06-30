import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className='h-screen bg-gradient-to-b from-indigo-950 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-10 px-10 relative overflow-hidden scroll-mt-24'>
        
        {/* left section */}
        <div className="z-30 xl:mb-0 mb-[20%] pointer-events-none">
            <motion.h1
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:'spring',
                stiffness: 40,
                damping:25,
                delay:1.3,
                duration:1
            }}
            className='text-2xl md:text-4xl lg:text-6xl font-bold z-10 mb-6'>
                Hi, <br />  Welcome to my portfolio
            </motion.h1>
            <motion.p
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:'spring',
                stiffness: 40,
                damping:25,
                delay:1.8,
                duration:1
            }}
            className="text-xl md:text-1xl lg:text-1xl text-gray-400 max-w-2xl">
                Coding wizard by day, coffee enthusiast by night — I create interactive sites that are as fun as they are functional. Ready to make something awesome?
            </motion.p>
        </div>

        {/* Right section */}
        <Spline className="absolute xl:right-[-25%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/CzkPiUy71z9jqImO/scene.splinecode" />
    </section>
  )
}

export default HeroSection