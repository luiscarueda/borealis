import React from 'react'
import './oneclass.css'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { client } from '../../../client';
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)}

const OneClass = () => {
    const [oneclass,setOneClass] =useState(null);
    const { slug } = useParams();
    useEffect(() => 
     {
        client.fetch(
            `*[slug.current == "${slug}"]
             { title,
               slug,
               description,
               price,               
               mainImage{
                asset->{
                  _id,
                  url
                }
               }               
              }`,              
            )
            .then((data)=>setOneClass(data[0]))
            .catch(console.error);
      }, [slug]) 
        
        if (!oneclass) return <div>Loading...</div>  ;  


  return (
    <div className='oneclass'>
      <div className='flex__center oneclass__left'>
           <h1 className>{oneclass.title}</h1>
           <div className='oneclass__image'>
            <img src={urlFor(oneclass.mainImage.asset.url)} alt="" />
        </div>
      </div>
      <div className="oneclass__right">
             <PortableText value={oneclass.description}/>
             <h2>{oneclass.price}</h2>
             <h2>CAD</h2>
              <button className='btn'>REGISTER NOW</button> 
              <button className='btn'>BACK TO CLASSES</button>
      </div>                                       
    </div>
  )
}

export default OneClass