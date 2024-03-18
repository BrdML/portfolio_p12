"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProjectSlide = () => {
  // Etat des projets à afficher
  const [projects, setProjects] = useState([]);

  // Etat des positions des projets (pour l'animation)
  const [positionIndex, setPositionIndex] = useState([0, 1, 2]);

  const [showCard, setShowCard] = useState(false);
  const [cardIndex, setCardIndex] = useState(null);

  // Fonction pour faire défiler les projets vers la position suivante
  const handleNext = () => {
    setPositionIndex((prevIndex) => {
      const updatedIndex = prevIndex.map((prevIndex) => (prevIndex + 1) % 3);
      return updatedIndex;
    });
  };

  const handleMouseEnter = (index) => {
    setShowCard(true);
    setCardIndex(index);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
    setCardIndex(null);
  };
  const handlePrevious = () => {
    setPositionIndex((prevIndex) => {
      const updatedIndex = prevIndex.map((prevIndex) => {
        return prevIndex === 0 ? 2 : prevIndex - 1;
      });
      return updatedIndex;
    });
  };


  // Récupération des données des projets au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/projects.json');
      const data = await response.json(); 
      setProjects(data);
    };
    
    fetchData();
  }, []);

  // Définition des positions possibles des projets pour l'animation
  const positions = [
      'center',
      'left1',
      'left',
      'right1',
      'right',
  ]

  // Définition des variantes d'animation pour chaque position
  const imageVariants = {
      center: {x: '0%', scale: 1, zIndex: 5},
      left1: {x: '50%', scale: 0.7, zIndex: 2},
      left: {x: '-50%', scale: 0.7, zIndex: 2},
      right: {x: '90%', scale: 0.5, zIndex: 1},
      right1: {x: '50%', scale: 0.7, zIndex: 2},
  }
  return (
    <div className='flex items-center justify-center flex-col h-screen relative'>
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
                    onMouseEnter={() => handleMouseEnter(index)} 
                    onMouseLeave={handleMouseLeave}
                />
                </Link>
                <div className='p-4 flex items-center flex-col justify-center'>
                    <h3 className='font-bold text-xl mb-2 text-center'>{project.title}</h3>
                    <div>

                    </div>
                    <div className='linkproject flex items-center'> 
                        <Link href={project.github} className='w-10 m-auto'target="_blank">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="githubIcon p-3"
                            />
                            </Link>
                    </div>
                </div>
            </div>
            {showCard && cardIndex === index && (
              <div className='cardDescription absolute top-0 left-0 w-full text-center'>
                {/* Adjust tooltip position and styles as needed */}
                <p className='text-white bg-black bg-opacity-70 p-2 rounded'>{project.summary}</p>
              </div>
            )}
        </motion.div>
      ))}            
      <div className='w-full flex justify-between'>
        <button onClick={handlePrevious} className='font-bold text-5xl'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={handleNext} className='font-bold text-5xl'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default ProjectSlide