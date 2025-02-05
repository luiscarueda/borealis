import { Headeraux } from '../../components'
import './contact.css'
import { HEADER } from '../../constants/data'
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div> 
      <Headeraux title={HEADER[3].title} 
                 text={HEADER[3].text}
                 imgUrl={HEADER[3].imgUrl} 
      />
      <section className="contact">
        <section className="container contact__container">
          <section className='contact__wrapper '>
              
          <a href='https://wa.me/12364575567?text=Hi BOREALIS,I have questions and want more information about the academy' target= '_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
              <iframe className='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6188968269867!2d-119.49453930133608!3d49.896531264477375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537df35c35c6997b%3A0xc171d6ac1debaf07!2s1040%20Richter%20St%2C%20Kelowna%2C%20BC%20V1Y%202K5%2C%20Canad%C3%A1!5e1!3m2!1ses-419!2sco!4v1721143568888!5m2!1ses-419!2sco"></iframe> 
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


        
        
      