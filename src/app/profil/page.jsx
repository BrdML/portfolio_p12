"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Avatar2 from '/public/assets/images/avatar2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHourglass, faList, faMagnifyingGlass, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Profil() {
    return (
      <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >  
      <div className='container profilContainer mx-auto h-full p-4 flex flex-col gap-20'>
        <div className='profil flex flex-row gap-10 item-center'>
          <Image width={350} height={350} src={Avatar2} alt='avatar2'/>
          <div className='flex flex-col gap-5 items-center justify-center'>
            <h2 className='text-left text-2xl font-bold text-[#C4552F]'>Profil</h2>
            <p className='textProfil flex item-center justify-center text-wrap w-[54%]'>
              Bonjour et bienvenue sur mon portfolio !
              Après 7 ans dans l’électrotechnique, j’ai décider de 
              faire une reconversion en tant que développeur web.

              Ma formation m’a permis d’acquérir de solide bases 
              dans la Gestion de projet grace à la méthode agile,
              La mainteance et le débugage de site web, ainsi que
              la maitraise du framework React Js.

              Motivé par l&apos;envie de créer, je saurai être un atout 
              dans votre entreprise.
            </p>
          </div>
        </div>
        <div className='iconContainer flex flex-row'>
            <div className='iconProfil'>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
              />
              <p>Résolution de problème</p>
            </div>
            <div className='iconProfil'>
              <FontAwesomeIcon
                icon={faHourglass}
              />
              <p>Patience et persévérance</p>
            </div>
            <div  className='iconProfil'>
              <FontAwesomeIcon
                icon={faList}
              />
              <p>capacité d&apos;adaptation et organisation</p>
            </div>
            <div  className='iconProfil'>
              <FontAwesomeIcon
                icon={faBook}
              />
              <p>curiosité et soif d&apos;apprendre</p>
            </div>
            <div  className='iconProfil '>
              <FontAwesomeIcon
                icon={faPeopleGroup}
              />
              <p>Travail en colaboration et esprit d&apos;équipe</p>
            </div>
          </div>
      </div>
    </motion.div>
    )
  }
  
  export default Profil