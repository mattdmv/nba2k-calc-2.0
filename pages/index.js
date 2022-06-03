import Head from 'next/head';
//import Image from 'next/image';
import { motion } from 'framer-motion';
import Search from '../components/Search';
//import Footer from '../components/Footer';

// animate: defines animation
// initial: defines initial state of animation or starting point
// exit: defines animation when component exits

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

// definition of stagger effect
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }  
};

export default function Home() {
  return (
    <motion.div 
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }} >
      <Head>
        <title>NBA2k calc 2.0</title>
      </Head>
      <div className="flex bg-arena bg-cover bg-center w-auto h-screen">
        <motion.div
        variants={stagger}
        className="flex-column w-full my-auto">
          <motion.div variants={fadeInUp}>
            <h1 className="font-extrabold text-5xl xl:text-7xl text-center bg-gradient-to-r from-transparent via-blue-700 to-transparent">NBA2k player rating calculator</h1>
            <p className="font-bold text-center text-base xl:text-xl bg-gradient-to-r from-transparent via-blue-700 to-transparent">Predicting NBA2k player ratings is now one of the easiest tasks in the world. You just need to search for a player and you're good to go!</p>
          </motion.div>
          <motion.div variants={fadeInUp}
          className="flex w-full h-max py-10 justify-center">
            <Search/>
          </motion.div>
        </motion.div>
      </div>  
    </motion.div>
    
  )
}
