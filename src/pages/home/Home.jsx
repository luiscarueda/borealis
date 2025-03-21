import './home.css'
import { Google, Header, Programming, Programs } from '../../components'

const Home = () => {
  return (
    <main>
      <Header />
      <Programming/>
      <Programs/> 
      <Google/>                 
    </main>
  )
}
export default Home