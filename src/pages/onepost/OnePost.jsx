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
               body,
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
               <h1>hola mundo</h1>            
               <h1 >{onePost.title}</h1>            
               <h2>{onePost.publishedAt}</h2>           
                    
        
              <img src={onePost.mainImage.asset.url} />  
              
                       
        </div>
  )
}

export default OnePost