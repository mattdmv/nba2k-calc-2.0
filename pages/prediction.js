import Image from "next/image";
import Stats from "../components/Stats";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import PredictionItem from "../components/PredictionItem";

// definition of easing curvecommi
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

const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
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

function Prediction({ results }) {

  const router = useRouter();

  const playersrc = `https://cdn.nba.com/headshots/nba/latest/1040x760/${results.player_id}.png`
  console.log(playersrc)

  const teamsrc = `https://cdn.nba.com/logos/nba/${results.team_id}/global/D/logo.svg`
  console.log(teamsrc)

  return (
    <motion.div 
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="bg-arena bg-cover bg-center w-auto h-screen">
        <div className="pt-10 flex w-auto justify-center align-middle">
            <motion.div variants={fadeInRight}>
              <Image
                src={playersrc}
                width={260}
                height={190}
                alt="player"/>
            </motion.div>
            <motion.div variants={fadeInLeft}>
              <Image 
                  src={teamsrc}
                  width={260}
                  height={190}
                  alt="team logo"/>
            </motion.div>
        </div>
        <motion.h1 variants={fadeIn} className="font-bold text-5xl 2xl:text-7xl text-center bg-gradient-to-r from-transparent via-black to-transparent">{results.name}</motion.h1>
        <motion.div variants={stagger}>
        <motion.div variants={fadeInUp}>
            <Stats stats={results.player_stats}/>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <PredictionItem rating={results.predicted_value}/>
          </motion.div>
        </motion.div>
        <div className="my-10 flex justify-center">
          <div className="mx-2 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-900 hover:from-green-600 hover:to-green-900
          hover:cursor-pointer transition-all font-bold">
            <a onClick={() => router.push('/')}>Another search</a>
          </div>
        </div>
    </motion.div>
  )
}


export async function getServerSideProps({ query }) {

  // Get data from the form.
  const data = {
    name: query.name,
  }

  console.log(data.name)

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = process.env.PREDICT_URL

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  // Fetch data from external API
  const res = await fetch(endpoint, options)
  const results = await res.json()

  // Pass data to the page via props
  return { props: { results } }
}

export default Prediction
