import './allposts.css'
import { HEADER } from '../../constants/data';
import { Headeraux } from '../../components';
import { useState,useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import {client} from '../../../client'
   
const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
      useEffect(() => {
        const query =`*[_type == 'post']
             {
                title,
                slug,
                publishedAt,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        client.fetch(query)
          .then((data) => setAllPosts(data))
          .catch (err=>console.error(err));
           }, []); 
  return (
    <div>
       <Headeraux  title={HEADER[3].title} 
                      text={HEADER[3].text}
                      imgUrl={HEADER[3].imgUrl}
         />       
        <div className='posts' > 
         { allPosts && allPosts.map((post,index) => (
           <article key={post.slug.current} >              
                <span key={index} className='post__item'>
                 <div>{post.title}</div> 
                 <img src={post.mainImage.asset.url} />               
                 <div>{post.publishedAt}</div>                                  
                </span>              
                <button className='btn'>
                  <Link to={"/allposts/"+ post.slug.current } key={post.slug.current}className='test'>read  article </Link>
                </button>                             
           </article>
          ))}    
        </div>            
    </div>
   )
 }

export default AllPosts