"use client"

import  { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import Avatar1 from '/public/assets/images/avatarhome.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css';

export default function Home() {
  
  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >        
      <main className="container main_home mx-auto p-4 my-14">
        <div className='homecontainer h-full flex justify-between mx-auto'>
          <div className="home flex flex-col gap-6">
              <p className="font-bold text-2xl">Salut, c&apos;est Moi</p>
              <h1 className="font-extrabold text-4xl">Bertrand Menel</h1>
              <p className="font-bold text-2xl">Un Développeur <span className="text-[#C4552F] dark:text-dark-secondary">Front-end</span> & <span className="text-[#C4552F] dark:text-dark-secondary">Intégrateur web</span></p>
              <p className="w-[100%]">
                Passionné par la création d&apos;interfaces web intuitives <br />
                et esthétiques, je suis à votre disposition pour collaborer <br />
                sur vos projets digitaux. - <span className=" font-bold text-[#C4552F] dark:text-dark-secondary">LET‘S BUILD SOMETHING TOGETHER</span> -
              </p>
              <div className='socialIcon flex gap-5'>
                <Link href="" className=" dark:bg-dark-secondary">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="likedinIcon p-3"
                  />
                </Link>
                <Link href="" className=" dark:bg-dark-secondary">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="githubIcon p-3"
                  />
                </Link>
              </div>
              <div className='homeBtn'>
                <Link href="" className="dark:bg-dark-secondary dark:text-dark-text">Mon Cv</Link>
                <Link href="/contact" className=" dark:bg-dark-secondary dark:text-dark-text">Me contacter</Link>
              </div>
            </div>
            <div className='firstAvatar'>
              <Image className='' width={300} height={400} src={Avatar1} alt='Home avatar'/>
            </div>
        </div>
      </main>
    </motion.div>
  );
}
