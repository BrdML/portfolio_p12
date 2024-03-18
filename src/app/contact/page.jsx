"use client"

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import './index.css'

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isHuman, setIsHuman] = useState(false);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation de l'email à l'aide d'une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorsMessage('Veuillez entrer une adresse email valide.');
      setTimeout(() => {
        setErrorsMessage("");
      }, 5000);
      setIsSubmitting(false);
      return;
    }

    // Vérifier si tous les champs obligatoires sont remplis
    if (!email || !name || !message) {
      setErrorsMessage('Veuillez remplir tous les champs obligatoires.');
      setTimeout(() => {
        setErrorsMessage("");
      }, 5000);
      setIsSubmitting(false);
      return;
    }

    // Vérifier si la case "isHuman" est cochée
    if(!isHuman) {
      setErrorsMessage('Veuillez cocher la case.');
      setTimeout(() => {
        setErrorsMessage("");
      }, 5000);
      setIsSubmitting(false);
    }
    // Envoye d'email en utilisant la bibliothèque emailjs
    emailjs
      .sendForm(
        'service_o2icca6', // ID de service EmailJS
        'template_fk71s0e', // ID de template EmailJS
        e.target, // Données du formulaire
        '4xSQ8A4hNetI33DZ0' // ID utilisateur EmailJS
      )
      .then(() => {
        setIsSubmitting(false);
        setEmail('');
        setName('');
        setMessage('');
        setSuccessMessage('Votre message a été envoyé avec succès !');
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        setErrorsMessage('Une erreur est survenue. Veuillez réessayer !');
      });
  };

    return (
      <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
      >  
        <main className='container w-full h-screen m-auto flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-10'>
          <h2 className='font-semibold'>Formulaire de contact</h2>

          <p className='text-wrap w-80'>N&apos;hesitez pas à me contacter pour plus d&apos;informations ! Vous trouverez également 
            mes réseaux en bas de page.</p>

          <form onSubmit={handleSubmit} className='flex flex-col gap-10 w-80'>
            <input
            className='rounded h-10 focus:border-[#C4552F] border-2'
            type="text"
            name="name"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
              className='rounded h-10 focus:border-[#C4552F] border-2'
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className='rounded h-20 focus:border-[#C4552F] border-2'
              name="message"
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="checkbox-container">
              <input
                className='focus:border-[#C4552F] border-2'
                type="checkbox"
                id="is-human"
                name="isHuman"
                value={isHuman}
                onChange={() => setIsHuman(!isHuman)}
                required
              />
              <label htmlFor="is-human" className='font-bold text-red-800'> cocher la case pour envoyer</label>
            </div>
            <button type="submit" disabled={!isHuman}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {successMessage && (<p className="success-message">{successMessage}</p>)}
            {errorsMessage && (<p className="error-message">{errorsMessage}</p>)}
          </form>
          </div>
        </main>
      </motion.div>
    )
  }
  
  export default Contact