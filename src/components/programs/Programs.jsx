import './programs.css'
import { programsData } from '../../constants/data';
import SectionHead from '../SectionHead/SectionHead';
import { FaCrown } from 'react-icons/fa';
import { ServicesCard } from '../../UI';





const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title='PROGRAMAS'/>
        <div className='programs__wrapper'>
          {programsData.map((programs,index)=>(
            <div key={index}>
               <ServicesCard title={programs.title} info={programs.info} price={programs.price}/>
            </div>
           
          ))}
        </div>       
      </div>     
    </section>
  )
}

export default Programs



     
      



     
      
    
     