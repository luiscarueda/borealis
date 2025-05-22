import React, { useState } from 'react'
import './pagepost.css'
import { useEffect } from 'react'
import { client } from '../../../client'
import { Link } from 'react-router-dom'
import { Headeraux } from '../../components'
import { HEADER } from '../../constants/data'
import {format} from 'date-fns'

const Pagepost = () => {
const [pagepost,setPagePost] = useState([]);
  useEffect(() => {
  client.fetch(
    `*[_type == 'post']|order(publishedAt desc)
     {
        title,
        slug,
        publishedAt,
        mainImage{asset->{_id,url}
     }    
    }`
  )
  .then  ((data) => setPagePost(data))
  .catch (console.error);
  
   }, []);  

  return (
    <>      
      <div className="pagepost">
        <div className="container " > 
        <Headeraux  title={HEADER[3].title} 
                      text={HEADER[3].text}
                      imgUrl={HEADER[3].imgUrl}
         />       
          {
            pagepost[0]&&(
            <div className='pagepost__container '>                           

             <a href={`/onepost/${pagepost[0].slug}`}>
                 <section className='pagepost__left'>
                   <h1>{pagepost[0].title}</h1>
                   <h4>{format(new Date(pagepost[0].publishedAt),'dd MMMM yyyy')}</h4>
                   <img src={pagepost[0].mainImage.asset.url} alt="" />
                 </section>
             </a>
                <section className="pagepost__right">
                  <div className='pagepost__post'>
                  <img src={pagepost[1].mainImage.asset.url} />
                  <div className='pagepost__content '>
                    <h2>{pagepost[1].title}</h2>
                    <h4>{format(new Date(pagepost[1].publishedAt),'dd MMMM yyyy')}</h4>   
                    <button className='btn'>read more</button>              
                  </div>                    
                </div>
                  <div className='pagepost__post'>
                   <img src={pagepost[2].mainImage.asset.url} />
                   <div className="pagepost__content">
                   <h2>{pagepost[2].title}</h2>
                   <h4>{format(new Date(pagepost[2].publishedAt),'dd MMMM yyyy')}</h4>
                   <button className='btn'>read more</button>
                   </div>
                  </div>
                  <Link to={"/allposts/"}>
                        <button className='btn'>read all blog posts</button>
                  </Link>
                </section>             
            </div>      
        )
      }
    </div>        
   </div> 

    </>
    

  
  )
}

export default Pagepost