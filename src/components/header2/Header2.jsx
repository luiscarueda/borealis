import React from 'react';
import './header2.css';
import Videoprueba from '../../assets/video2.mp4'
import ReactPlayer from 'react-player'



const Header2 = () => {
  return (
    <>
    <div className='header2 '>
     <ReactPlayer className='header2__container  '
          url={Videoprueba}
          width='100%'
          height='100%'
          loop
          muted   
          controls                  
         />  
    </div>
    
    </>
    
  )
}

export default Header2