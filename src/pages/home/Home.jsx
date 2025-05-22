import './home.css'
import { Hero, Header, Programming, Programs,Google } from '../../components'

const Home = () => {
  return (
    <main>            
      <Header />
      <Programming/>             
      <Programs/> 
      <Google/>
      <Hero/>                 
    </main>
  )
}
export default Home