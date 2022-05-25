import Image from "next/image";
import Stats from "../components/Stats";
import Button from "../components/Button";
import { motion } from 'framer-motion';

// definition of easing curve
const easing = [.6, -.05, .01, .99]

// definition of specific animation we're going to use
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
};

const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
};

const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
};

// definition of stagger effect
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }  
};

function player() {
  return (
    <motion.div 
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="bg-arena bg-cover bg-center w-auto h-screen">
        <div className="pt-10 flex w-auto justify-center align-middle">
            <motion.div variants={fadeInRight}>
              <Image
                src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
                width={520}
                height={380}/>
            </motion.div>
            <motion.div variants={fadeInLeft}>
              <Image 
                  src="https://cdn.nba.com/logos/nba/1610612747/global/D/logo.svg"
                  width={520}
                  height={380}/>
            </motion.div>
        </div>
        <h1 className="font-bold text-7xl text-center bg-gradient-to-r from-transparent via-black to-transparent">LeBron James</h1>
        <Stats/>
        <div className="my-10 flex justify-center">
          <Button title="Another search"/> 
        </div>
    </motion.div>
  )
}

export default player
