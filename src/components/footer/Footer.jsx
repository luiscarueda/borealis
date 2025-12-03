import './footer.css'
import { Link,NavLink } from 'react-router-dom'
import Logo from '../../assets/4.png'
import { FOOTERLINKS } from '../../constants/data';
import { SocialIcons } from '../../UI';

const Footer = () => {
  return (
    <section className='footer'>
        <div className="container footer__container">
          <article className='footer__logo'>
             <Link to='/' className='logo'>
              <img src={Logo}  alt="footer logo" />
             </Link>
             <SocialIcons/>         
          </article>           
          <article className='footer__article'>
           {FOOTERLINKS.map((section) =>(
                <div key={section.title}>
                  <h4>{section.title}</h4>
                  <ul>
                  {section.links.map((link,index)=>(
                    <li key={index}>    
                        <NavLink to={link.link} >
                            {link.name}
                        </NavLink>                    
                    </li>
                   ))}
                 </ul>
                </div>  
              ))}            
           </article>
        </div>
        <div className="footer__copyright"> Developed by <a href='mailto:luiscrueda.ing@gmail.com'><span>L<strong>UIS</strong> C@RLOS RUEDA </span></a>
      </div>
    </section>
  )
}

export default Footer