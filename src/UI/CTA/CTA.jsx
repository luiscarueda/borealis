import React from 'react'
import './cta.css'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <>
      <div >
        <div className='container cta__container'>       
        <button className='btn'>
              <Link to={"/fullclasses/" } >BACK TO ENROLL</Link>
        </button>
        <h3>Start exploring the endless possibilities.</h3>
        <button className='btn ' >
               <Link to={"/contact/" } >REGISTER NOW</Link>
        </button>              
        </div>     
      </div>      
    </>
  )
}

export default CTA
