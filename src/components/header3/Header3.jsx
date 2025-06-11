import React from 'react'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video2.mp4'

const Header3 = () => {
  return (
    <div className='header3'>
        <ReactPlayer className='header3__container  '
          url={Videoprueba}
          width='100%'
          height='100%'
          loop
          muted   
          controls                  
         />
    </div>
  )
}

export default Header3