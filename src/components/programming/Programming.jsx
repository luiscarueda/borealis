import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'


const Programming = () => {
  return (
    <section className='programming '>
        <div className='container programming__container'>
          <div className='programming__content'>
            <h4>This is the schedule of the month</h4>
            <h2>DOWNLOAD IT NOW</h2>
          </div>           
          <div className="programming__pdf">
            <a href={pdf} download target='_blank' rel='noreferrer noopener'><MdOutlinePictureAsPdf /></a>
          </div>
         </div>
    </section>
  )
}

export default Programming