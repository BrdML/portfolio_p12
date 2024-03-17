"use client"

import { motion } from 'framer-motion';
import './index.css';
import ProjectSlide from '@/components/projectSlider';


function Portfolio() {
    return (
      <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
      >  
        <main className='container project mx-auto h-full p-4'>
          <ProjectSlide/>
        </main>
      </motion.div>
    )
  }
  
  export default Portfolio