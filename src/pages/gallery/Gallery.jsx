import { Headeraux} from '../../components'
import './gallery.css'
import {HEADER} from '../../constants/data'
import { IMAGES } from '../../constants/data';
import {Video} from '../../components';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'
import {Navigation,Pagination,EffectFade} from 'swiper/modules';


const Gallery = () => {
  return (
    <div>
      <Headeraux  title={HEADER[2].title} 
                  text={HEADER[2].text}
                  imgUrl={HEADER[2].imgUrl}
      />
     <Video/>
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
