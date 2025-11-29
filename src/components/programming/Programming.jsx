import './programming.css'
import { BsFiletypePdf } from "react-icons/bs";
import { useEffect,useState } from 'react';
import {client,urlFor} from '../../../client';

const Programming = () => {
  const [schedules,setSchedules] = useState(null);

  useEffect( () => {   
    const query =`*[_type == 'schedule'] 
  {
     current,
     posterior,
     mainImage{asset->{ _id, url }},
     currentfile,
     posteriorfile
  }`      
    
    client.fetch(query)
    .then((data) => setSchedules(data[0]))
    .catch (err=>console.error(err));
   }, []);

   if (!schedules) return<div>LOADING...</div>; 
   return (
    <section className='programming'>
      <div className='container programming__container'>
        <div className='programming__left '>
            <div className='programming__image '>
             <img src={urlFor(schedules.mainImage.asset.url)} alt="imagen" />               
            </div>
        </div>                                                
        <div className='programming__right flex__center '>
            <h3>Stay up to date with our monthly calendar, plus events and other activities we have for our entire community.</h3>
             <div className ='section '>
                <h3>Download Schedule</h3>             
                <div className='section__intern'>
                  <div className='download '>                  
                      <h4 className='title '>{schedules.current}</h4>                             
                         <a className ='btn' href={schedules.currentfile}  download  target='_blank'  rel='noreferrer noopener '>
                           < BsFiletypePdf className='color'/>
                         </a>
                  </div>
                  <div className='download'>
                       <h4 className='title '>{schedules.posterior}</h4>                
                         <a className ='btn' href={schedules.posteriorfile} download  target='_blank'  rel='noreferrer noopener '>
                           <BsFiletypePdf className='color'/>
                         </a>
                  </div>  
              </div>                   
          </div>                     
       </div>          
     </div>                  
    </section>
  )
}

export default Programming