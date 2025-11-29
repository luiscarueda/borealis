import React from 'react'
import './video.css'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video1.mp4'

const Video = () => {
  return (
    <>
      <div className='video fade-in'>
        <ReactPlayer
          url={Videoprueba}           
          muted
          width ='55%'
          height= '45%'
          loop 
          playing   
        />
      </div> 
    </>
  )
}
export default Video