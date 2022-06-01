import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps}/>
      </AnimatePresence>
    </>
  )
}

export default MyApp
