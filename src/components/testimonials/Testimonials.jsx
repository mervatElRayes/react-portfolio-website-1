import React from "react";
import "./textimonials.css";
import AVATAR1 from "../../assets/hamada.jpg";
import AVATAR2 from '../../assets/client-sm-1.jpg'
import AVATAR3 from '../../assets/client-sm-2.jpg'
import AVATAR4 from '../../assets/client-sm-3.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVATAR1,
    name: 'Mr Hamada',
    review:  `Modi alias animi dolorem aliquam ea eum beatae maiores, cnsectetur praesntium quibusdam, commodi velit porro
             blanditils consequatur qui molestiae. prepsiciatis aspernatur labore distinctio rate delectus voluptatem dolres
             deserunt explicabo nostrum ducimis quasil? `
  },
  {
    avatar: AVATAR2,
    name: 'Tina Snow',
    review:  `Modi alias animi dolorem aliquam ea eum beatae maiores cnsectetur praesntium quibusdam commodi velit porro
             blanditils consequatur qui molestiae prepsiciatis aspernatur labore distinctio rate delectus voluptatem dolres
             deserunt explicabo nostrum ducimis quasil`
  },

  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    review:  `Modi alias animi dolorem aliquam ea eum beatae maiores, cnsectetur praesntium quibusdam, commodi velit porro
             blanditils consequatur qui molestiae. prepsiciatis aspernatur labore distinctio rate delectus voluptatem dolres
             deserunt explicabo nostrum ducimis quasil? `
  },

  {
    avatar: AVATAR4,
    name: 'Shatta Wale',
    review:  `Modi alias animi dolorem aliquam ea eum beatae maiores, cnsectetur praesntium quibusdam, commodi velit porro
             blanditils consequatur qui molestiae. prepsiciatis aspernatur labore distinctio rate delectus voluptatem dolres
             deserunt explicabo nostrum ducimis quasil? `
  }


]












const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
      
            pagination={{ clickable: true }}
           
        
      
      
      
      >
      {
        data.map(({avatar, name,review }, index) => {
            return(
              <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt=""/>
    
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
    
            )
        })
      }
 




  
      </Swiper>
    </section>
  );
};

export default Testimonials;
