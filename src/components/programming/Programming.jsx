import './programming.css'
import { MdOutlinePictureAsPdf } from "react-icons/md";
import pdf from '../../assets/july2024.jpg'


const Programming = () => {
  return (
    <section className='programming initial'>
        <div className='container programming__container'>
          <div className='programming__content'>
            <h4>ESTA ES LA PROGRAMACION DEL MES</h4>
            <h2>DESCARGALA YA</h2>
          </div>           
          <div className="programming__pdf">
            <a href={pdf} download target='_blank' rel='noreferrer noopener'><MdOutlinePictureAsPdf /></a>
          </div>
         </div>
    </section>
  )
}

export default Programming