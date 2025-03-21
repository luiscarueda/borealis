import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'
import calendar from '../../assets/july2024.jpg'



const Programming = () => {
  return (
    <section className='programming'>
      <div >
        <div >           
            <img className='programming__image' src= {calendar} alt="calendar" />               
            <div className='programming__pdf'>
              <h4 className='title '>download pdf</h4>
              <a className ='btn'href={pdf} 
                 download target='_blank' rel='noreferrer noopener '>
                <MdOutlinePictureAsPdf />
              </a>
            </div>
          
        </div>          
      </div>        
    </section>
  )
}

export default Programming