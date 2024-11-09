import './navbar.css'
import { Link,NavLink } from 'react-router-dom'
import { navlinksData } from '../../constants/data'
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import Logo from '../../assets/4.png';
import {useState} from 'react';
import ReactSwitch from 'react-switch';

const Navbar = () => {
  
  const [isNavShowing,setIsNavShowing] = useState(false);
  return (
    <nav>            
            <div className="container nav__container">
                <Link to='/'className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className= {`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                  {navlinksData.map(({label,path },index)=>{
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
                 <ReactSwitch/>
                <select name="language" id="language">
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                </select>               
                <button className="nav__toggle-btn" onClick={()=> setIsNavShowing
                  (!isNavShowing)}>
                    {
                      isNavShowing ? <MdOutlineClose/>: <FaBars/>
                    }                
                 </button>
            </div>
    </nav>
  )
}

export default Navbar