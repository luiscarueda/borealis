import {  Descriptionleft, Descriptionright, Headeraux } from '../../components'
import './about.css'
import { HEADER } from '../../constants/data'
import { ABOUT  } from '../../constants/data'

const About = () => {
   
  return (
    <div className='about'>
      <Headeraux  title={HEADER[0].title} 
                  text={HEADER[0].text}
                  imgUrl={HEADER[0].imgUrl} 
      />
      <Descriptionleft title={ABOUT[0].title}
                       text={ABOUT[0].text}
                       imgUrl={ABOUT[0].imgUrl}
      />
      <Descriptionright title={ABOUT[1].title}
                        text={ABOUT[1].text}
                        imgUrl={ABOUT[1].imgUrl}
      />
      <Descriptionleft title={ABOUT[2].title}
                       text={ABOUT[2].text}
                       imgUrl={ABOUT[2].imgUrl}
      />                   
     </div>
  )
}

export default About