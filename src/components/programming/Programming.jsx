import './programming.css'
import { BsFiletypePdf } from "react-icons/bs";
import pdf from '../../assets/555470952_788216670621376_3277599675888420307_n.jpg';
import { useEffect,useState } from 'react';
import {client} from '../../../client';

const Programming = () => {
  const [schedules,setSchedules] = useState([null]);
  useEffect(() => {   
    const query =`*[_type == 'schedule'] 
  {
     current,
     posterior  
  }
  ` 

    client.fetch(query)
            .then((data)=>setSchedules(data))
            .catch(console.error);
      }, []) 
  

  return (
    <section className='programming'>
      <div className='container programming__container '>
        <div className='programming__left'>
            <div className='programming__image'>
            <img src={pdf} alt="imagen" />
              
            </div>
        </div>                                                
        <div className='programming__right'>
            <h3>Stay up to date with our monthly calendar, plus events and other activities we have for our entire community.</h3>
             <div className ='section'>
                <h3>Download Schedule</h3>
                <div className='section__intern'>
                  <div className='download '>                  
                  <h4 className='title '>OCTOBER</h4>                 
                    <a className ='btn'
                     href={pdf} 
                     download 
                     target='_blank' 
                     rel='noreferrer noopener '>
                     < BsFiletypePdf className='color'/>
                    </a>
                </div>
              <div className='download'>
                <h4 className='title '>NOVEMBER</h4>
                  <a className ='btn'
                     href={pdf} 
                     download 
                     target='_blank' 
                     rel='noreferrer noopener '>
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