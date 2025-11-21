import './header.css'
import { MAINHEADER } from '../../constants/data'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video1.mp4'

const Header = () => {
  return (
    <div className='header'>
      <div className="container header__container" >
          <section className='header__left flex__center'>
            <h1 >{MAINHEADER[0].title}</h1>
             <div className="header__image">
              <img src={MAINHEADER[0].imgUrl} alt="image" />
             </div>          
            <h3>{MAINHEADER[0].hook}</h3>       
          </section>
          <section className='header__right fade-in '>         
            <ReactPlayer  
             url={Videoprueba}           
             muted
             loop 
             playing                     
             width = '55%'
             height= '45%'            
            />       
          </section>
      </div>      
    </div> 
  )
}
export default Header