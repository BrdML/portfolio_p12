"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectSlide = () => {
  const [projects, setProjects] = useState([]);
    const [positionIndex, setPositionIndex] = useState([0, 1, 2]);

    const handleNext = () => {
        setPositionIndex((prevIndex) => {
            const updatedIndex = prevIndex.map((prevIndex) => (prevIndex + 1) % 3)
            return updatedIndex
        }) 
    }

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/data/projects.json');
        const data = await response.json(); 
        setProjects(data);
      };
    
      fetchData();
    }, []);

    

    const positions = [
        'center',
        'left1',
        'left',
        'right1',
        'right',
    ]

    const imageVariants = {
        center: {x: '0%', scale: 1, zIndex: 5},
        left1: {x: '50%', scale: 0.7, zIndex: 2},
        left: {x: '-50%', scale: 0.7, zIndex: 2},
        right: {x: '90%', scale: 0.5, zIndex: 1},
        right1: {x: '50%', scale: 0.7, zIndex: 2},
    }
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className='overflow-hidden'
          initial='center'
          animate={positions[positionIndex[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: '40%', position: 'absolute' }}
        >
            <div className='bg-white dark:bg-dark-secondary rounded flex flex-col items-center'>
                <Link href={project.link}>
                <Image
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={200}
                    className='object-cover'
                />
                </Link>
                <div className='p-4 flex items-center flex-col justify-center'>
                    <h3 className='font-bold text-xl mb-2 text-center'>{project.title}</h3>
                    <div>

                    </div>
                    <div className='linkproject flex items-center'>
                    <Link href={project.link} className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-sm font-semibold'>Voir le Projet</Link> 
                        <Link href={project.github} className='w-10 m-auto'target="_blank">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="githubIcon p-3"
                            />
                            </Link>
                    </div>
                </div>
            </div>
        </motion.div>
      ))}            
        <button onClick={handleNext} className='absolute bottom-0 mt-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 p-4 rounded'>
            Projet suivant
         </button>
    </div>
  )
}

export default ProjectSlide