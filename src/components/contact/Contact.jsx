import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
const form = useRef();




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgp7c7l', 'template_adqxnf6', form.current, 'V8Y-heTROkXZmpk3s')
    e.target.reset();
    
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>mervatel99@gmail.com</h5>
              <a href="https://mail.google.com/mail/u/0/" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Mervatco</h5>
              <a href="https://www.facebook.com/people/Mervat-Mohamed/100080114771110/" target='_blank' rel="noreferrer">Send a message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href="https://web.whatsapp.com/send?phone01006781684" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>


        {/* END Of CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>




      </div>

    </section>
  )
}

export default Contact