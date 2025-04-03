import React from 'react';
import './dropdown.css';
import { CLASSESDROPDOWN } from '../../constants/data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Dropdown = () => {
    const [dropdown, setDropdown]= useState(false);
  return (
    <div >
       <ul className={dropdown?'submenu clicked':'submenu'} 
           onClick={()=>setDropdown(!dropdown)}>            
         {CLASSESDROPDOWN.map((item,index)=>(
             <li key={item}>
                <Link to={item.path}
                      onClick={()=>setDropdown(false)}
                      className='submenu-item'>
                    {item.label}                    
                </Link>
             </li>
          ))}                   
       </ul> 
    </div>
  )
}
export default Dropdown