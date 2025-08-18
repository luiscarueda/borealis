import React from 'react'
import './about.css'
import { Descriptionleft, Descriptionright} from '../../components'
import { ABOUT  } from '../../constants/data'
import Gallery from '../../components/gallery/Gallery'
import { HEADER } from '../../constants/data';
import { Headeraux } from '../../components';

const About = () => {
  return (
    <div className='about'>
        <Headeraux  title={HEADER[0].title} 
                      text={HEADER[0].text}
                      imgUrl={HEADER[0].imgUrl}
        />                     
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
      <Gallery/>               
    </div>
  )
}
export default About