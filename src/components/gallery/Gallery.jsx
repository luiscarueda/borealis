import React from 'react';
import './gallery.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import { IMAGES } from '../../constants/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation,Pagination} from 'swiper/modules';
const  Gallery = () => {
  return (
    <div className='gallery '>    
      <div className='container gallery__container'>
       <Swiper className='swiper'       
        slidesPerView={1}
        spaceBetween={50}
        loop={true}      
        pagination={{ clickable: true }}      
        navigation={true}     
        modules={[Navigation,Pagination]}
        > 
        { IMAGES.map((slide,index)=>(
            <SwiperSlide  key={index} className='gallery__arrow'>
              <div className='image'>
                <img src={slide.original} alt="avatar" />
              </div>          
            </SwiperSlide>
         ))}   
       </Swiper>    
      </div>           
    </div>
  )
}
export default Gallery