import {Header, Programming, Programs,Google} from '../../components'
import './home.css'

const Home = () => {
  return (
    <main className='home'>
      <Header/>
      <Programming/> 
      <Programs/>  
      <Google/>                                     
    </main>
  )
}
export default Home