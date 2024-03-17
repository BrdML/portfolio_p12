"use cleint"

import { useEffect, useState } from "react";





  "use client"

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_o2icca6',
        'template_fk71s0e',
        e.target,
        '4xSQ8A4hNetI33DZ0'
      )
      .then(() => {
        setIsSubmitting(false);
        setSuccessMessage('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        setSuccessMessage('Une erreur est survenue. Veuillez réessayer.');
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

          <p className='text-wrap w-80'>N'hesitez pas à me contacter pour plus d'informations ou 
            pour me proposer une alternance ! Vous trouverez également 
            mes réseaux en bas de page.</p>

          <form onSubmit={handleSubmit} className='flex flex-col gap-10 w-80'>
            <input
            className='rounded h-10'
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            />
            <input
              className='rounded h-10'
              type="email"
              name="email"
              placeholder="Votre adresse email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className='rounded h-20'
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
          </div>
        </main>
      </motion.div>
    )
  }
  
  export default Contact