import {  Descriptionleft, Descriptionright, Headeraux } from '../../components'
import './about.css'
import { headerData } from '../../constants/data'
import { aboutData } from '../../constants/data'

const About = () => {
   
  return (
    <div className='initial'>
      <Headeraux  title={headerData[0].title} 
                 text={headerData[0].text}
                 imgUrl={headerData[0].imgUrl} 
      />
      <Descriptionleft title={aboutData[0].title}
                       text={aboutData[0].text}
                       imgUrl={aboutData[0].imgUrl}
      />
      <Descriptionright title={aboutData[1].title}
                        text={aboutData[1].text}
                       imgUrl={aboutData[1].imgUrl}
      />
      <Descriptionleft title={aboutData[2].title}
                       text={aboutData[2].text}
                       imgUrl={aboutData[2].imgUrl}
      />     
               
     </div>
  )
}

export default About