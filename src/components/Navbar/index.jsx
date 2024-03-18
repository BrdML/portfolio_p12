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
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
      });
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

    // Gestion du mode sombre
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    
    const handleToggleMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };


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