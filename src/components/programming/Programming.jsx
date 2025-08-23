import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'
import calendar from '../../assets/july2024.jpg'
import { useEffect,useState } from 'react';
import {client} from '../../../client'

const Programming = () => {
  const [schedule,setSchedule] = useState([null]);

  useEffect(() => {
  const query =  `*[_type == 'schedule']
       {
        current,
        posterior,
        schedule,
        mainImage{asset->{_id,url}
       }
    }`

  client.fetch(query)
  .then  ((data) => setSchedule(data))
  .catch (console.error);
  
   }, []);  

  return (
    <section className='programming'>
      <div className='container programming__container '>
        <div className='programming__left'>
            <div className='programming__image'>
                <img  src= {calendar} alt="calendar" />
            </div>
        </div>                                                   
          
        <div className='programming__right'>
            <h3>Stay up to date with our monthly calendar, plus events and other activities we have for our entire community.</h3>
             <div className ='section'>
                <h3>Download Schedule</h3>
                <div className='section__intern'>
                  <div className='download '>
                    <h4 className='title '>JULY</h4>
                    <a className ='btn'
                     href={pdf} 
                     download 
                     target='_blank' 
                     rel='noreferrer noopener '>
                     <MdOutlinePictureAsPdf />
                    </a>
                </div>
              <div className='download'>
                <h4 className='title '>AUGUST</h4>
                  <a className ='btn'
                     href={pdf} 
                     download 
                     target='_blank' 
                     rel='noreferrer noopener '>
                    <MdOutlinePictureAsPdf />
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