import React, { useState } from 'react'
import './hero.css'
import Background from '../background/Background'
import BackgroundData from '../backgrounddata/BackgroundData';
import { useEffect } from 'react';

const Hero = () => {
    let BACKGROUND = [
      { text1: "FEEL",   text2: 'THE RITHM' },      
      { text1: "SALSA AND",  text2: 'BACHATA'  },
      { text1: "REGISTER",     text2: 'NOW'  },            
     ];
    const [heroCount,setHeroCount]=useState(0);
    const [playStatus,setPlayStatus]=useState(false);
    useEffect(() => {
      setInterval(()=>{
        setHeroCount(
          (count)=>{return count===2?0:count+1})
          },5000);        
         }, [])    
    
  return (
    <div className=' container'>
        <Background     heroCount={heroCount}
                        playStatus={playStatus}                         
        />
        <BackgroundData heroCount={heroCount}
                        playStatus={playStatus}
                        setHeroCount={setHeroCount}                        
                        setPlayStatus={setPlayStatus}
                        BACKGROUND ={BACKGROUND[heroCount]}                      
                        
        />
    </div>
  )
}

export default Hero