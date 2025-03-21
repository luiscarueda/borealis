import React from 'react';
import './gallery.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import { IMAGES } from '../../constants/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation,Pagination,EffectFade} from 'swiper/modules';
const Gallery = () => {
  return (
    <div>    
        <div className='gallery__principal'>
      <Swiper
      effect={'fade'}
      grabCursor={true}
      pagination={{ clickable: true }}      
      navigation={true}     
      modules={[Navigation,Pagination,EffectFade]}
      spaceBetween={50}    
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     >
      
      {
        IMAGES.map((slide,index)=>(
          <SwiperSlide key={index} className='gallery'>
           <div className='image '>
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