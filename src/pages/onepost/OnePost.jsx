import './onepost.css';
import { useEffect,useState } from 'react';
import { client } from '../../../client';
import { useParams } from 'react-router-dom';


const OnePost = () => {
    const [onePost,setOnePost] =useState(null);
    const { slug } = useParams();

    useEffect(() => 
    {
        client.fetch(
            `*[slug.current == "${slug}"]
             { title,
               _id,
               slug,
               publishedAt,
               mainImage{
                asset->{
                  _id,
                  url
                }
               }               
              }`,
              
            )
            .then((data)=>setOnePost(data[0]))
            .catch(console.error);
           }, [slug])  
   
        if (!onePost) return <div>Loading...</div>  ;            
         return (
           <div>
              
               
              <h2>{onePost.publishedAt}</h2>
              <h1 >{onePost.title}</h1>
              <h1 className='testname'>working in this section</h1> 
             
             
           
        </div>
  )
}

export default OnePost