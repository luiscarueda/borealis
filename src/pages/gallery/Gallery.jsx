import { Headeraux} from '../../components'
import './gallery.css'
import {headerData} from '../../constants/data'
import { imagesData } from '../../constants/data';

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
      <Headeraux  title={headerData[2].title} 
                  text={headerData[2].text}
                  imgUrl={headerData[2].imgUrl}
      />
     <Swiper
      effect={'fade'}
      grabCursor={true}
      pagination={true}
      navigation={true}     
      modules={[Navigation,Pagination,EffectFade]}
      spaceBetween={30}    
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     >
      {
        imagesData.map((slide,index)=>(
          <SwiperSlide key={index} className='gallery'>
           <div className='image '>
             <img src={slide.original} alt="avatar" />
           </div>          
          </SwiperSlide>
        ))}   
     </Swiper>    
    </div>
  )
}

export default Gallery
