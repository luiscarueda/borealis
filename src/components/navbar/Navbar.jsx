import './navbar.css'
import { Link,NavLink } from 'react-router-dom'
import { NAVLINKS } from '../../constants/data'
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import {useState} from 'react';
import Logo from '../../assets/4.png';

const Navbar = () => {  
  const [isNavShowing,setIsNavShowing] = useState(false);  
  return (
    <>   
      <nav className="container nav__container">
        <Link to='/'className='logo '>
              <img src= {Logo} alt="logo"/>
        </Link> 
        <ul className = {`nav__links ${ isNavShowing ? 'show__nav' : 'hide__nav'}`}>
              {NAVLINKS.map((item,index)=>{                                                 
                return(
                  <li key={index}>
                    <NavLink to={item.path} className={({isActive})=>isActive?'active-nav': ''}
                              onClick={()=> setIsNavShowing (prev=>!prev)}>
                    {item.label}
                    </NavLink>                    
                  </li>                      
                  )})
              }                    
            </ul>                                               
        <button className="nav__toggle-btn" onClick={()=> setIsNavShowing (prev=>!prev)}>
                { isNavShowing ? <MdOutlineClose/>: <FaBars/> }                
        </button>                               
      </nav>         
    </>
  )}
export default Navbar