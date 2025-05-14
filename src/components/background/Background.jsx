import React from 'react'
import './background.css'
import images from '../../constants/images'
import Videoprueba from '../../assets/video1.mp4'

const Background = ({playStatus,heroCount}) => {
  if (playStatus) {
    return ( 
             <video  className='background fade-in video'autoPlay loop muted>
              <source src={Videoprueba} type='video/mp4'/>
             </video>
        )    
      } 
  else if (
    heroCount===0) {
        return <img src={images.photo08} className ='background fade-in'alt="image1" />    
  }
  else if (
    heroCount===1) {
        return <img src={images.photo06} className ='background fade-in'alt="image2" />    
  }
  else if (
    heroCount===2) {
        return <img src={images.photo07} className ='background fade-in'alt="image3" />    
  }  
}
export default Background