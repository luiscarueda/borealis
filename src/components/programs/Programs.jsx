import './programs.css'
import {PROGRAMS } from '../../constants/data';
import SectionHead from '../SectionHead/SectionHead';
import { FaCrown } from 'react-icons/fa';
import { ServicesCard } from '../../UI';

const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title='MEMBERSHIP'/>
         <div className='programs__wrapper '> 
         {PROGRAMS.map((programs,index)=>(
            <div key={index} className='programs__card '>
               <ServicesCard 
               title={programs.title} 
               info={programs.info} 
               price={programs.price}
               />
            </div>          
           ))} 
                  
         </div>       
      </div>     
    </section>
  )
}

export default Programs



     
      



     
      
    
     