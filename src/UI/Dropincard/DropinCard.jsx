import React from 'react'
import './dropincard.css'

const DropinCard = ({title,info,price}) => {
  return (
    <div className='dropincard'>
         <h4 >{title}</h4>
          <p >{info}</p>
          <h2 >{price}</h2>
    </div>
  )
}

export default DropinCard