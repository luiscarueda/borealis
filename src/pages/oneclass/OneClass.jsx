import React from 'react'
import './oneclass.css'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { client,urlFor} from '../../../client';
import { PortableText} from '@portabletext/react';
import { CTA } from '../../UI';

const OneClass = () => {
    const [oneclass,setOneClass] =useState(null);
    const { slug } = useParams();
    useEffect(() =>{
      const query =`*[slug.current == "${slug}"]
             { title,
               slug,
               description,
               mainGoal,
               price,
               days,
               time,
               "instructorName":  instructor->{instructor} ,                                                                 
               mainImage{asset->{_id,url}}              
              }`          
              
    client.fetch(query)
            .then((data)=>setOneClass(data[0]))
            .catch(console.error);
      }, [slug]) 
                   
     if (!oneclass) return <div className='spinner'></div>  ; 
     return ( 
       <section className="oneclass ">
          <div className='container oneclass__container '>          
              <div className='oneclass__image flex__center '>
              <img src={urlFor(oneclass.mainImage).width(400).height(400).blur(1).url()} alt="Oneclass"/> 
              </div>
            <div className="oneclass__right  ">
              <h1 >{oneclass.title}</h1>
              <PortableText  value={oneclass.mainGoal}/>             
              <PortableText value={oneclass.description}/>
              <h3>INSTRUCTOR CARLOS RUEDA</h3>
              <div className="aditional">
                <h2>{oneclass.days}</h2>
                <h2>{oneclass.time}</h2>  
              </div>                                                                            
            </div>
          </div>                                         
        <CTA/> 
       </section>    
  )
}
export default OneClass