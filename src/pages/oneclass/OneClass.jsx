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
       <section className="oneclass">
          <div className='container oneclass__container'>
            <div className='flex__center oneclass__left'>             
             <h1 className>{oneclass.title}</h1>
              <div className='oneclass__image'>
              <img src={urlFor(oneclass.mainImage).width(400).height(400).blur(1).url()} alt="Oneclass"/> 
              </div>
            </div>
            <div className="oneclass__right ">
              <PortableText value={oneclass.mainGoal}/>             
              <PortableText value={oneclass.description}/>                                      
              <h2>{oneclass.price}</h2>                                                                             
              <h2>CAD</h2>                        
                                                            
            </div>                                       
          </div>
        <CTA/> 
       </section>    
  )
}
export default OneClass