import './header.css'
import { MAINHEADER } from '../../constants/data'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video1.mp4'

const Header = () => {
  return (
    <div className='main__header '>
      <div className="container main__header-container" >
          <section className='main__header-left '>
            <h1 >{MAINHEADER[0].title}</h1>
             <div className="main__header-image">
              <img src={MAINHEADER[0].imgUrl} alt="image" />
             </div>          
            <h3>{MAINHEADER[0].hook}</h3>       
          </section>
          <section className='main__header-right fade-in '>         
            <ReactPlayer  
             url={Videoprueba}           
             muted
             loop 
             playing
             width='40%'
             height='30%'                 
            />       
          </section>
      </div>      
    </div> 
  )
}
export default Header