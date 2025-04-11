import React from 'react'
import './backgrounddata.css'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png' 

const BackgroundData = ({heroCount,setHeroCount,playStatus,setPlayStatus,BACKGROUND})=>{
 
  return (
    <div className='backgrounddata'>
      <div className='backgrounddata__text ' >
        <p>{BACKGROUND.text1}</p>
        <p>{BACKGROUND.text2}</p>
      </div>
      <div className='elements '>
        <div className='backgrounddata__dot '>
         <ul className='backgrounddata__dots '>
           <li onClick = {()=>setHeroCount(0)}className={heroCount===0? 'hero-dot blue':'hero-dot'}></li>
           <li onClick = {()=>setHeroCount(1)}className={heroCount===1? 'hero-dot blue':'hero-dot'}></li>
           <li onClick = {()=>setHeroCount(2)}className={heroCount===2? 'hero-dot blue':'hero-dot'}></li>
         </ul> 
        <div className='background__play'>
         <img onClick ={()=>setPlayStatus(!playStatus) } src={playStatus?pause_icon:play_icon} alt="video" />
         <p>See the video</p>
        </div>       
      </div>   
     </div>        
    </div>
  )
}
export default BackgroundData