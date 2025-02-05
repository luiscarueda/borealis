import './home.css'
import { Descriptionleft, Descriptionright, Header} from '../../components'
import { ABOUT  } from '../../constants/data'

const Home = () => {
  return (
    <main>
      <Header />
      <div className='about'>    
       <Descriptionleft  title={ABOUT[0].title}
                         text={ABOUT[0].text}
                         imgUrl={ABOUT[0].imgUrl}
       />
       <Descriptionright title={ABOUT[1].title}
                         text={ABOUT[1].text}
                         imgUrl={ABOUT[1].imgUrl}
       />
       <Descriptionleft  title={ABOUT[2].title}
                         text={ABOUT[2].text}
                         imgUrl={ABOUT[2].imgUrl}
       />                   
      </div>      
    </main>
  )
}
export default Home