import './header.css'
import { MAINHEADER } from '../../constants/data'
import Videoprueba from '../../assets/video1.mp4'


const Header = () => {
  return (
    <div className='main__header '>
      <div className="container main__header-container" >
         <section className='main__header-left '>
           <h1>{MAINHEADER[0].title}</h1>
           <div className="main__header-image">
            <img src={MAINHEADER[0].imgUrl} alt="image" />
           </div>          
           <h4>{MAINHEADER[0].hook}</h4>       
         </section>
         <section className='main__header-right '>
            <video  className='fade-in background video'autoPlay loop muted>
                <source src={Videoprueba} type='video/mp4'/>
             </video>    
        </section>
      </div>      
  </div> 
  )
}
export default Header