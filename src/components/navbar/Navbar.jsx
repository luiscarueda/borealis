import './navbar.css'
import { Link,NavLink } from 'react-router-dom'
import { NAVLINKS } from '../../constants/data'
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import {useState} from 'react';
import  Logo from '../../assets/4.png';

const Navbar = () => {
  
  const [isNavShowing,setIsNavShowing] = useState(false);
  return (
    <nav>            
      <div className="container nav__container">
        <Link to='/'className='logo'>
              <img src={Logo} alt="logo"/>
        </Link>
            <ul className= {`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
              {NAVLINKS.map(({label,path },index)=>{
                return(
                  <li key={index}>
                    <NavLink to={path} className={({isActive})=>isActive?'active-nav': ''}>
                      {label}
                    </NavLink>
                  </li>                      
                  )
                })
              }                    
            </ul>                 
                          
                <button className="nav__toggle-btn" onClick={()=> setIsNavShowing
                  (!isNavShowing)}>
                    {
                      isNavShowing ? <MdOutlineClose/>: <FaBars/>
                    }                
                 </button>
       </div>
    </nav>
  )}
export default Navbar