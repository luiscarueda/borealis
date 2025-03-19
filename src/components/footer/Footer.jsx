import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../../assets/4.png'
import { FOOTERLINKS } from '../../constants/data';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
          <article>
             <Link to='/' className='logo'>
              <img src={Logo}  alt="footer logo" />
             </Link>
                <p>FOLLOW ME ON MY SOCIAL NETWORKS.</p>
            <div className="footer__socials">
              <a href='https://www.facebook.com/borealislatindance?locale=es_LA' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
              <a href='https://www.instagram.com/borealislatindance/' target='_blank' rel='noreferrer noopener'><FaInstagram /></a>              
            </div>
          </article>
           
          <article className='footer__article'>
          {FOOTERLINKS.map((section) =>(
                <div key={section.title}>
                 <h4>{section.title}</h4>
                 <ul >
                  {section.links.map((link,index)=>(
                    <li key={index}>                      
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                  </ul>
                </div>  
              ))}            
        </article>
        </div>
        <div className="footer__copyright"> Developed by <a href='mailto:luiscrueda.ing@gmail.com'><span>L<strong>UIS</strong> C@RLOS RUEDA </span></a>
        </div>
    </footer>
  )
}

export default Footer