import React from 'react'
import './about.css'
import { Descriptionleft, Descriptionright} from '../../components'
import { ABOUT  } from '../../constants/data'
import Gallery from '../../components/gallery/Gallery'
import { HEADER } from '../../constants/data';
import { Headeraux } from '../../components';

const About = () => {
  return (
    <div >
        <Headeraux    title={HEADER[0].title} 
                      imgUrl={HEADER[0].imgUrl}
        />                     
       <div className='about'>    
          <Descriptionleft  title={ABOUT[0].title}
                         text={ABOUT[0].text}
                         text2={ABOUT[0].text2}
                         text3={ABOUT[0].text3}
                         imgUrl={ABOUT[0].imgUrl}
          />
          <Descriptionright title={ABOUT[1].title}
                         text={ABOUT[1].text}
                         text2={ABOUT[1].text2}
                         text3={ABOUT[1].text3}
                         imgUrl={ABOUT[1].imgUrl}
          />
          <Descriptionleft  title={ABOUT[2].title}
                         text={ABOUT[2].text}
                         text2={ABOUT[2].text2}
                         text3={ABOUT[2].text3}
                         imgUrl={ABOUT[2].imgUrl}
          />                             
       </div>
      <Gallery/>              
    </div>
  )
}
export default About