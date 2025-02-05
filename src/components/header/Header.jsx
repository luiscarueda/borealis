import './header.css'
import { Link } from 'react-router-dom'
import { MAINHEADER } from '../../constants/data' 

const Header = () => {
  return (
    <header className='main__header '>
      <div className="container main__header-container">
        <section className='main__header-left'>
          <h1>{MAINHEADER[0].title}</h1>
          <p>{MAINHEADER[0].text}</p>        
          <Link to='/plans' className='btn'>GET STARTED</Link>
        </section>
        <section className='main__header-right '>
          <div className="main__header-image">
            <img src={MAINHEADER[0].imgUrl} alt="image" />
          </div>
        </section>
      </div>    
    </header>
  )
}
export default Header