import Link from 'next/link';
import Avatar1 from '/public/assets/images/avatarhome.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css'
function Footer() {
  const links = [
    {url: "/", title: "Accueil"},
    {url: "/profil", title: "Profil"},
    {url: "/skills", title: "Compétences"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"}
];
  return (
    <div className="footer w-[100%] flex flex-col items-center bg-[#C4552F] dark:bg-dark-darkbg p-5 my-20">
      <div className='flex flex-col'>
        <p className='font-bold'>Réseaux Social</p>
        <div className='socialIconFooter flex gap-5 my-5'>
          <Link href="https://www.linkedin.com/in/menel-bertrand/" className='dark:bg-dark-secondary dark:text-dark-text' target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="likedinIcon p-3"
            />
          </Link>
          <Link href="https://github.com/BrdML" className='dark:bg-dark-secondary dark:text-dark-text' target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="githubIcon p-3"
            />
          </Link>
        </div>
      </div>
      <p className='font-bold text-wrap'>© Bertrand Menel 2024 - All rights reserved </p>
    </div>
  )
}

export default Footer