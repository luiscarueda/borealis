import './FAQCard.css'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from 'react';

const FAQCard = ({question,answer}) => {
  const[isAnswerShowing,setIsAnswerShowing]= useState(false);
  return (

    <article className='FAQCard'onClick={()=>setIsAnswerShowing(prev=>!prev)}>
      <div className='FAQCard__container'>
         <h4>{question}</h4>
         <button className="FAQCard__icon">
          {
            isAnswerShowing? <AiOutlineMinus/>:<AiOutlinePlus/>
          }
          </button>
      </div>
      {isAnswerShowing&&<p>{answer}</p>}       
      
    </article>
  )
}

export default FAQCard