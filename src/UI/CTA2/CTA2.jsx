import React from 'react'
import './cta2.css'
import { Link } from 'react-router-dom';

const CTA2 = () => {
  return (
  <>
    <div className='container cta2__container'>       
      <h3>Start exploring the endless possibilities.</h3>
      <button className='btn ' >
        <Link to={"/contact/" } >REGISTER NOW</Link>
      </button>              
    </div>        
   </>
  )
}

export default CTA2