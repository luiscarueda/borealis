import React from 'react'
import './fullclasses.css'
import { Headeraux } from '../../components';
import { HEADER } from '../../constants/data';
import { useState,useEffect } from 'react';
import {client} from '../../../client'
import { Link } from 'react-router-dom';
import {Programs} from '../../components';

const FullClasses = () => {
  const [fullclasses,setFullClasses] = useState([]);

  useEffect(() => {
    client.fetch(
        `*[_type == 'classes']
         {
            title,
            slug,                      
            mainImage{
                asset->{_id,url}
            }
        }`
    )
  .then((data) => setFullClasses(data))
  .catch (err=>console.error(err));
    }, []);

  return (
    <div>
      <Headeraux  title={HEADER[2].title} 
                      text={HEADER[2].text}
                      imgUrl={HEADER[2].imgUrl}
      />
       <div className='fullclasses ' > 
         { fullclasses && fullclasses.map((classes,index) => (
           <article className='fullclasses__card'key={classes.slug.current}>              
                <span key={index} className='fullclasses__item'>
                   <h2>{classes.title}</h2>                   
                   <div className='fullclasses__image'>
                    <img src={classes.mainImage.asset.url} />
                   </div>                    
                 <button className='btn'>
                  <Link to={"/fullclasses/"+ classes.slug.current } key={classes.slug.current}>read more</Link>
                </button>                                                             
                </span>                                              
           </article>
          ))}    
        </div>
      <Programs/>                           
    </div>
  )
 }
export default FullClasses