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
            <div className="oneclass__right initial ">
              <h1 >{oneclass.title}</h1>
              <PortableText  value={oneclass.mainGoal}/>             
              <PortableText value={oneclass.description}/>
              <h3>INSTRUCTOR CARLOS RUEDA</h3>
              <div className="aditional">
                <h4 >mondays 4:00 5:00</h4>
                <h2>PRICE : 150</h2>  
              </div>                                                                            
            </div>
          </div>                                         
        <CTA/> 
       </section>    
  )
}
export default OneClass