import './onepost.css';
import { useEffect,useState } from 'react';
import { client } from '../../../client';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)}

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
            <div className='onepost initial'> 
               <h1 className='initial'>hola mundo</h1>            
               <h1 className='initial'>{onePost.title}</h1>            
               <h2 className='initial'>{onePost.publishedAt}</h2>
               <img src={urlFor(onePost.mainImage).width(100).height(100).blur(5).url()} alt="" />          
               <PortableText
                 value={onePost.body}
               />       
            </div>
  )
}
export default OnePost