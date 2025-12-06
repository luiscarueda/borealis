import './onepost.css';
import { useEffect,useState } from 'react';
import { client,urlFor} from '../../../client';
import { useParams } from 'react-router-dom';
import {PortableText} from '@portabletext/react';
import { Link } from 'react-router-dom';
import {format} from 'date-fns'

const OnePost = () => {
    const [onePost,setOnePost] =useState(null);
    const { slug } = useParams();
    useEffect(() => {
      const query =  `*[slug.current == "${slug}"]
             { title,
               _id,
               slug,
               body,
               publishedAt,
               mainImage{ asset->{ _id, url}
               }               
              }`      
        client.fetch(query)
            .then((data)=>setOnePost(data[0]))
            .catch(console.error);
           }, [slug])  

        if (!onePost) return <div>Loading...</div>  ;                    
         return (
        <>
          <section className='onepost'>
            <div className='container onepost__container '>
              <div className='onepost__left flex__center'>
                   <h1 >{onePost.title}</h1> 
                   <img src={urlFor(onePost.mainImage).width(500).height(600).blur(1).url()} alt="Onepost"/>
                   <h3 >{format(new Date(onePost.publishedAt),'dd MMMM yyyy')}</h3>                            
              </div>                 
              <div className='onepost__right flex__center'>
                    <PortableText
                         value={onePost.body}
                    />
                 <Link to={"/pagepost/"}>
                        <button className='btn'>Back to Posts</button>
                 </Link>
                            
              </div>             
            </div>                   
          </section>
        </>            
  )
}
export default OnePost