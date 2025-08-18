import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'
import calendar from '../../assets/july2024.jpg'
import { useEffect,useState } from 'react';
import {client} from '../../../client'

const Programming = () => {
  const [schedule,setSchedule] = useState([null]);
  useEffect(() => {
  client.fetch(
    `*[_type == 'schedule']
       {
        current,
        posterior,
        schedule,
        mainImage{asset->{_id,url}

       }
    }`
  )
  .then  ((data) => setSchedule(data))
  .catch (console.error);
  
   }, []);  

  return (
    <section className='programming'>
      <div className='container programming__container'>
        <div>programing left</div>
        <div className='programming__image'>                                                      
            <img  src= {calendar} alt="calendar" />                                 
            <div >
              <h4 className='title '>download pdf</h4>
              <a className ='btn'
              href={pdf} 
              download 
              target='_blank' 
              rel='noreferrer noopener '
              >
                <MdOutlinePictureAsPdf />
            </a>
            </div>          
        </div>          
      </div>        
    </section>
  )
}

export default Programming