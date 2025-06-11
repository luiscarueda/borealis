import React from 'react';
import './header2.css';
import Videoprueba from '../../assets/video1.mp4'

const Header2 = () => {
  return (
    <>
    <div className='header2 '>     
      <video  className='header2__container'
          loop
          autoPlay
          muted       
          src={Videoprueba}           
          type="video/mp4" 
          controls={false}           
      /> 
     
    </div>
    
    </> 
    
  )
}

export default Header2