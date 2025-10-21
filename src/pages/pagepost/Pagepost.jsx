import React, { useState } from 'react'
import './pagepost.css'
import { useEffect } from 'react'
import { client } from '../../../client'
import { Link } from 'react-router-dom'
import { Headeraux } from '../../components'
import { HEADER } from '../../constants/data'
import {format  } from 'date-fns'

const Pagepost = () => {
const [pagepost,setPagePost] = useState([]);
useEffect(() => {
    const query =`*[_type == 'post']|order(publishedAt desc)
     {
        title,
        slug,
        publishedAt,
        mainImage{asset->{_id,url}
     }    
    }`

client.fetch(query)
  .then  ((data) => setPagePost(data))
  .catch (console.error);
  
   }, []);  

  return (
    <>           
      <Headeraux  title={HEADER[3].title} 
                      text={HEADER[3].text}
                      imgUrl={HEADER[4].imgUrl}
       />
      
      <div className="pagepost" >               
          { pagepost[0]&&(
             <div className='container pagepost__container' >                 
               <a href={`/allposts/${pagepost[0].slug}`}>
                 <section className='pagepost__left'>
                   <h1>{pagepost[0].title}</h1>
                   <h4>{format(new Date(pagepost[0].publishedAt),'dd MMMM yyyy')}</h4>
                   <img src={pagepost[0].mainImage.asset.url} alt="main_post" />
                   <button className='btn'>
                      <Link to={"/allposts/"+ pagepost[0].slug.current } key={pagepost[0].slug.current}>read article </Link>
                   </button>
                 </section>
             </a>
                <section className="pagepost__right">
                  <div className='pagepost__post'>
                  <img src={pagepost[1].mainImage.asset.url} />
                  <div className='pagepost__content '>
                    <h3>{pagepost[1].title}</h3>
                    <h4>{format(new Date(pagepost[1].publishedAt),'dd MMMM yyyy')}</h4>                                
                    <button className='btn'>
                      <Link to={"/allposts/"+ pagepost[1].slug.current } key={pagepost[1].slug.current}>read article </Link>
                    </button>                                                           
                  </div>                    
                </div>
                  <div className='pagepost__post'>
                   <img src={pagepost[2].mainImage.asset.url} />
                   <div className="pagepost__content">
                   <h3>{pagepost[2].title}</h3>
                   <h4>{format(new Date(pagepost[2].publishedAt),'dd MMMM yyyy')}</h4>
                   <button className='btn'>
                      <Link to={"/allposts/"+ pagepost[2].slug.current } key={pagepost[2].slug.current}>read article </Link>
                    </button>           
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
    </>
    

  
  )
}

export default Pagepost