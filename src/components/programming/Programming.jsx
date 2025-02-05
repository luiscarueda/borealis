import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'
import calendar from '../../assets/july2024.jpg'
import {FAQs} from '../../components'


const Programming = () => {
  return (
    <section className='programming'>
      <div >
        <div >           
            <img className='programming__image' src= {calendar} alt="calendar" />               
            <div className='programming__pdf initial'>
              <h4 className='initial'>download pdf</h4>
              <a className ='btn'href={pdf} 
                 download target='_blank' rel='noreferrer noopener '>
                <MdOutlinePictureAsPdf />
              </a>
            </div>
          <FAQs/>  
        </div>          
      </div>        
    </section>
  )
}

export default Programming