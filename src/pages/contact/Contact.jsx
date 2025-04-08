import { Headeraux } from '../../components'
import './contact.css'
import { HEADER } from '../../constants/data'
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div> 
      <Headeraux title={HEADER[4].title} 
                 text={HEADER[4].text}
                 imgUrl={HEADER[4].imgUrl} 
      />
      <section className="contact">
        <section className="container contact__container">
          <section className='contact__wrapper '>              
          <a href='https://wa.me/12364575567?text=Hi BOREALIS,I have questions and want more information about the academy' target= '_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
                        
             <address>
             Visit us at: <br />
             <strong>Second Floor 1040 Richter St, Kelowna,</strong> <br />British Columbia V1Y 2K5 <br />
             </address>
          </section>
          <section className='contact__form '>
            <h2>CONTACT <span>ME</span></h2>         
            <form className='contact__form-content'action="https://formspree.io/f/xyyqlvze" method='POST'>
                  <div className="cta__form-input">
                    <input type='text' placeholder='Full Name'name ='Name'required/>
                    <input type='email' placeholder='e.g.,email@example.com'name='Email'required/>
                  </div>
                  <div className="cta__form-input">
                    <input type='number' placeholder='Mobile Number'name='Mobile'required/>
                    <input type='text' placeholder='Email Subject' name='subject'required/>
                  </div>
                    <textarea name='message' id='message' cols='30' rows='4' placeholder='Your Message'></textarea>
                    <button className='btn 'type='submit'>SEND MESSAGE</button>
            </form>              
          </section>
        </section>
      </section>   
    </div>
  )
}

export default Contact


        
        
      