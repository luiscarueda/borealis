import './onepost.css';
import { useEffect,useState } from 'react';
import { client } from '../../../client';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';
import { Link } from 'react-router-dom';

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
          <>
          <section className='onepost initial'>
            <div className='container onepost__container'>
              <div className='onepost__content flex__center'>
                <h1 className='gradient__text'>{onePost.title}</h1>            
                <h2 >{onePost.publishedAt}</h2>
                <PortableText
                   value={onePost.body}
                />
              <Link to={"/pagepost/"}>
              <button className='btn'>Back to Posts</button>
              </Link>    
              </div>
              <div className='onepost__image initial'>
                <img src={urlFor(onePost.mainImage).width(200).height(200).blur(2).url()} alt="" />          
              </div>             
             </div>

              
            </section>
          </>
            
  )
}
export default OnePost