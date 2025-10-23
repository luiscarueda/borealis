import './programs.css'
import {PROGRAMS,DROPIN } from '../../constants/data';
import SectionHead from '../SectionHead/SectionHead';
import { FaCrown } from 'react-icons/fa';
import { ServicesCard,DropinCard } from '../../UI';


const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title='MONTHLY MEMBERSHIP'/>       
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
         <div className='programs__wrapper '>
          {DROPIN.map((dropin,index)=>(
            <div key={index} className='programs__card '>
               <DropinCard
               title={dropin.title} 
               info={dropin.info} 
               price={dropin.price}
               />
            </div>
          ))}        
         </div>                             
      </div>           
    </section>
  )
}

export default Programs



     
      



     
      
    
     