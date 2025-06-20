import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
const Hero = () => {
    return (
        <section className="h-screen bg-gradient-to-b from-blue-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-20 px-10 relative overflow-hidden">
            {/* left */}
            <div className='z-40 xl:mb-0 mb-[20%]'>
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
                    8GB RAM, <br />98 tabs, <br />
                    infinite creativity.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 2 }}
                    className="text-xl md:text-1xl lg:text-2xl text-blue-200 max-w-2xl">
                    Just a regular human powering through life with limited memory,
                    countless browser tabs, and a mind bursting with endless ideas.
                    Turning caffeine into code and chaos into creativity.
                    <br />
                    <br />
                    S.Aariyan
                </motion.p>
            </div>
            <motion.div
                className="absolute xl:right-[-50%] right-0 top-[10%] lg:top-10 lg:scale-100 md:scale-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                 transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3 }}
            >
                    
                <Spline scene="https://prod.spline.design/ALOaTQgDc8Ktf0oX/scene.splinecode" />
            
            </motion.div>


        </section>
    );
}

export default Hero;
