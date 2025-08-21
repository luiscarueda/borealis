import React from 'react'
import './google.css'

const Google = () => {
  return (
    <div className='google'>
      <div className='google__container'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8259.194620558661!2d-119.488753!3d49.89651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df35c35ce0a55%3A0x770725cd9dacb385!2s1040%20Richter%20St%20%231040%2C%20Kelowna%2C%20BC%20V1Y%202K5%2C%20Canada!5e1!3m2!1sen!2sco!4v1747872060348!5m2!1sen!2sco" 
        width="600" 
        height="600"          
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">        
       </iframe>                                       
      </div>   
  </div>
  )
}

export default Google