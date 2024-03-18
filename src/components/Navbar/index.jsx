"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Logo from '/public/assets/images/logo.png';
import Image from 'next/image';
import './index.css';
import NavLink from '../navLink';
import { motion } from 'framer-motion';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const [open, setOpen] = useState(false);
    
    // Variables pour les animations du menu burger
    const topVariants = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor: "rgb(255,255,255)",
        }
    }
    const centerVariants = {
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    }
    const bottomVariants = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const listVariants = {
        closed:{
            x:"100vw"
        },
        opened:{
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren: 0.2,
            }
        },
    }
    const listItemVariants = {
        closed:{
            x:-10,
            opacity: 0,
        },
        opened:{
            x:0,
            opacity: 1,
        },
    }

 
  const handleToggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

    // Effet pour mettre à jour la classe de l'élément racine HTML en fonction du mode sombre
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
            setDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);


    // Liens de la barre de navigation
    const links = [
        {url: "/", title: "Accueil"},
        {url: "/profil", title: "Profil"},
        {url: "/competences", title: "Compétences"},
        {url: "/portfolio", title: "Portfolio"},
        {url: "/contact", title: "Contact"}
    ];

  return (
    <div className='container flex w-[100%] justify-between items-center p-4 mx-auto'>
        <div className='navLogo'>
            <Link href="/">
                {/* Logo */}
                <Image width={50} height={50} src={Logo} alt='LOGO'/>
            </Link>
        </div>
        <div className='navLinks hidden flex gap-10'>
            {/* Menu list */}
            {links.map(link=>(
                <NavLink key={link.title} link={link}/>
            ))} 
        </div>
        {open && (
            <motion.div 
                variants={listVariants} 
                initial="closed" 
                animate="opened" 
                className='navLinks h-screen flex gap-10 text-2xl'
            >
                {/* Menu list mobile*/}
                {links.map(link=>(
                    <motion.div variants={listItemVariants} className='' key={link.title}>
                        <NavLink link={link}/>
                    </motion.div>
                ))}
            </motion.div>
        )}
        <div className='menuBurger'>
            {/* Responsive Menu */}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={(()=>setOpen(!open))}>
                <motion.div 
                    variants={topVariants} 
                    className='w-10 h-1 bg-black rounded origin-left'
                    animate={open ? "opened" : "closed"}
                >
                </motion.div>
                <motion.div 
                    variants={centerVariants} 
                    className='w-10 h-1 bg-black rounded'
                    animate={open ? "opened" : "closed"}
                >          
                </motion.div>
                <motion.div 
                    variants={bottomVariants} 
                    className='w-10 h-1 bg-black rounded origin-left'
                    animate={open ? "opened" : "closed"}
                >     
                </motion.div>
            </button>
        </div>
        <div className='flex gap-10 hidden sm:hidden md:flex'>
            <button className='btnLanguage btnBackground dark:bg-dark-secondary'>
                <span>EN</span>
                {/* <span>FR</span> */}
            </button>
            <div className='btnDarkMode'>
                <button className='btnBackground dark:bg-dark-secondary' onClick={handleToggleMode}>
                <FontAwesomeIcon
                    icon={!darkMode ? faMoon : faSun}
                    className="light-mode-icon"
                />
                </button>
            </div>
        </div>


    </div>
  )
}

export default Navbar