import { Headeraux } from '../../components'
import './contact.css'
import { headerData } from '../../constants/data'
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";



const Contact = () => {
  return (
    <div> 
      <Headeraux title={headerData[3].title} 
                 text={headerData[3].text}
                 imgUrl={headerData[3].imgUrl} 
      />
      <section className="contact">
        <section className="container contact__container">
          <section className='contact__wrapper'>
              <a href=""><MdOutlineEmail /></a>
              <a href=""><IoLogoWhatsapp /></a>
          </section>
          <section className='contact__form'>
            <h2>CONTACT <span>ME</span></h2>
            <form action="https://formspree.io/f/xyyqlvze" method='POST'>
                  <div className="cta__form-input">
                    <input type='text' placeholder='Full Name'name ='Name'required/>
                    <input type='email' placeholder='Email Address'name='Email'required/>
                  </div>
                  <div className="cta__form-input">
                    <input type='number' placeholder='Mobile Number'name='Mobile'required/>
                    <input type='text' placeholder='Email Subject' name='subject'required/>
                  </div>
                    <textarea name='message' id='message' cols='30' rows='4' placeholder='Your Message'></textarea>
                    <button className='btn'type='submit'>SEND MESSAGE</button>
            </form>

              
          </section>
        </section>

      </section>   
    </div>
  )
}

export default Contact


        
        
      