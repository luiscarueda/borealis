import React, { useState } from 'react'
import './pagepost.css'
import { useEffect } from 'react'
import { client,urlFor } from '../../../client'
import { Link } from 'react-router-dom'
import { Headeraux } from '../../components'
import { HEADER } from '../../constants/data'
import {format  } from 'date-fns'

const Pagepost = () => {
const [pagepost,setPagePost] = useState([]);
useEffect(() => {
    const query =`*[_type == 'post']|order(publishedAt desc)
     {  title,
        slug,
        publishedAt,
        mainImage{asset->{_id,url}
     }    
    }`

client.fetch(query)
  .then  ((data) => setPagePost(data))
  .catch (console.error);  
   },
 []);  

  return (
    <>           
      <Headeraux  title={HEADER[3].title} 
                      text={HEADER[3].text}
                      imgUrl={HEADER[4].imgUrl}
       />      
      <div className="pagepost" >               
          { pagepost[0]&&(
             <div className='container pagepost__container ' >              
                 <section className='pagepost__left'>
                   <h2>{pagepost[0].title}</h2>
                   <h4>{format(new Date(pagepost[0].publishedAt),'dd MMMM yyyy')}</h4>
                   <img src={urlFor(pagepost[0].mainImage.asset.url).width(500).height(500).blur(1).url()} alt="mainpost" />
                   <Link to={"/allposts/"+ pagepost[0].slug.current } key={pagepost[0].slug.current}>
                        <button className='btn'>read article</button>
                   </Link>                                                                              
                   
                 </section>               
                <section className="pagepost__right">
                  <div className='pagepost__post'>
                   <img src={urlFor(pagepost[1].mainImage.asset.url).width(150).height(150).blur(1).url()} />
                   <div className='pagepost__content '>
                    <h3>{pagepost[1].title}</h3>
                    <h5>{format(new Date(pagepost[1].publishedAt),'dd MMMM yyyy')}</h5>
                    <Link to={"/allposts/"+ pagepost[1].slug.current } key={pagepost[1].slug.current}>
                        <button className='btn'>read article</button>
                    </Link>                                                                                                    
                   </div>                    
                  </div>
                  <div className='pagepost__post'>
                   <img src={urlFor(pagepost[2].mainImage.asset.url).width(150).height(150).blur(1).url()} />
                   <div className="pagepost__content">
                      <h3>{pagepost[2].title}</h3>
                      <h5>{format(new Date(pagepost[2].publishedAt),'dd MMMM yyyy')}</h5>                   
                      <Link to={"/allposts/"+ pagepost[2].slug.current } key={pagepost[2].slug.current}>
                        <button className='btn'>read article</button>
                      </Link>                              
                    </div>                  
                  </div>
                  <div className='pagepost__historial'>
                     <Link to={"/allposts/"}>
                        <button className='btn'>post historial</button>
                  </Link>         
                  </div>
                            
                </section>             
            </div>      
        )
      }
     </div>         
    </>    
  )
}

export default Pagepost