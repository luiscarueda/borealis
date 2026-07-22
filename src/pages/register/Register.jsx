import React, { useEffect } from 'react'
import './register.css'
import { HEADER } from '../../constants/data'
import { Headeraux } from '../../components'
import { ABOUT  } from '../../constants/data'

const Register = () => {
  
  return (
    <>
      <Headeraux  title={HEADER[6].title} 
                  imgUrl={HEADER[6].imgUrl}
      />      
        <div className='register'>
          <div className="container register__container">
           <div className="register__left">
                <img src={ABOUT[2].imgUrl} alt="PHOTO" />
           </div>
            <section className='register__right' >
             <h2>NEW ON BOREALIS?</h2>    
             <form action="https://formspree.io/f/mvzwwygp" method='POST'>
                  <h4> 1.Fill this form</h4>
                  <div className="cta__form-input">
                    <input type='text' placeholder='Full Name'name ='Name'required/>
                    <input type='email' placeholder='email@example.com'name='Email'required/>
                  </div>
                  <div className='checkbox'>
                     <label for="salsa1"> SALSA 1</label>
                     <input type="checkbox" id="salsa1" name="salsa1" value="salsa1"/>
                    <label for="bachata1">BACHATA 1</label>
                     <input type="checkbox" id="bachata1" name="bachata1" value="bachata1"/>
                     
                  </div>
                  <textarea name='message' id='message' cols='30' rows='4' placeholder='Your message'></textarea>
                    <h4>2.Pay by E-TRANSFER <strong>bailaborealis@gmail.com</strong></h4>
                    <button className='btn addition'type='submit'>SEND MESSAGE</button>
                    <h4> 3.That's all,we'll be waiting for you</h4>    
            </form>              
          </section>
            
            </div>  
        </div>
    </>
  )
}

export default Register