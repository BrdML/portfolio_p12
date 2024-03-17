"use client"

import SkillsCard from '../../components/SkillsCard';
import { motion } from 'framer-motion';
import './index.css';

const images = {
  javascript: '/assets/images/competences/javascript_icon.svg',
  react: '/assets/images/competences/react_icon.svg',
  nextjs: '/assets/images/competences/nextjs_icon.svg',
  tailwindCss: '/assets/images/competences/tailwind_icon.svg',
  bootstrap: '/assets/images/competences/bootstrap_icon.svg',
  nodejs: '/assets/images/competences/nodejs_icon.svg',
  mongo: '/assets/images/competences/mongo_icon.svg',
  mysql: '/assets/images/competences/mysql_icon.svg',
  github: '/assets/images/competences/github_icon.svg',
  figma: '/assets/images/competences/figma_icon.svg',
  sass: '/assets/images/competences/sass_icon.svg',
};

function skills() {
  return (
    <motion.div
    className= "h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0%"}}
    transition={{duration: 1}}
    >  
      <main className='container containerSkills p-4 mx-auto'>
        <h1 className='text-2xl font-bold my-20'>Mes compétences</h1>
        <div className='flex flex-col gap-20 mx-auto'>
          <div>
            <div>
              <h2 className='text-2xl font-bold'>Langages</h2>
              <hr className='border-0 h-1 w-7 bg-[#C4552F] shadow-xl rounded-full mt-3 mb-10'></hr>
            </div>
                {/* icon */}
                <SkillsCard image={images.javascript} title="Javascript" alt="Javascript icon"/>
          </div>
          <div>
            <div>
              <h2 className='text-2xl font-bold'>Front-end</h2>
              <hr className='border-0 h-1 w-7 bg-[#C4552F] shadow-xl rounded-full mt-3 mb-10'></hr>
            </div>
              <div className='flex flex-row flex-wrap gap-10'>
                {/* icon */}
                <SkillsCard image={images.react} title="React" alt="React icon"/>
                <SkillsCard image={images.nextjs} title="NextJs" alt="NextJS icon"/>
                <SkillsCard image={images.tailwindCss} title="TailswindCss" alt="Tailwindcss icon"/>
                <SkillsCard image={images.bootstrap} title="Bootstrap" alt="Bootstrap icon"/>
                <SkillsCard image={images.sass} title="Sass" alt="Sass icon"/>
              </div>
          </div>
          <div>
            <div>
              <h2 className='text-2xl font-bold'>Back-end</h2>
              <hr className='border-0 h-1 w-7 bg-[#C4552F] shadow-xl rounded-full mt-3 mb-10'></hr>
            </div>
              <div>
                {/* icon */}
                <SkillsCard image={images.nodejs} title="NodeJs" alt="NodeJs icon"/>
              </div>
          </div>
          <div>
            <div>
              <h2 className='text-2xl font-bold'>Base de données</h2>
              <hr className='border-0 h-1 w-7 bg-[#C4552F] shadow-xl rounded-full mt-3 mb-10'></hr>
            </div>
              <div className='flex flex-row gap-10'>
                {/* icon */}
                <SkillsCard image={images.mongo} title="MongoDb" alt="MongoDb icon"/>
                <SkillsCard image={images.mysql} title="Mysql" alt="Mysql icon"/>
              </div>
          </div>
          <div>
            <div>
              <h2 className='text-2xl font-bold'>Outils divers</h2>
              <hr className='border-0 h-1 w-7 bg-[#C4552F] shadow-xl rounded-full mt-3 mb-10'></hr>
            </div>
              <div className='flex flex-row gap-10'>
                {/* icon */}
                <SkillsCard image={images.github} title="Github" alt="Github icon"/>
                <SkillsCard image={images.figma} title="Figma" alt="Figma icon"/>
              </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default skills