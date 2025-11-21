import './allposts.css'
import { HEADER } from '../../constants/data';
import { Headeraux } from '../../components';
import { useState,useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import {client,urlFor} from '../../../client'
import { format} from 'date-fns';
   
const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
      useEffect(() => {
        const query =`*[_type == 'post'] | order(publishedAt desc)
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
    <>
       <Headeraux  title={HEADER[4].title} 
                      text={HEADER[4].text}
                      imgUrl={HEADER[4].imgUrl}
         />       
        <div className='posts' > 
          <div className='container posts__container'>
            { allPosts && allPosts.map((post,index) => (
             <article key={post.slug.current} >              
                <span key={index} className='post__item'>
                 <div>{post.title}</div>                 
                 <img src={urlFor(post.mainImage.asset.url).width(300).height(300).blur(1).url()} alt="allpost" />
                 <h4>{format(new Date(post.publishedAt),'dd MMMM yyyy')}</h4>                                                            
                </span>              
                <button className='btn'>
                  <Link to={"/allposts/"+ post.slug.current } key={post.slug.current}>read  article </Link>
                </button>                             
             </article>
          ))}    
        </div>         
        </div>            
    </>
   )
 }

export default AllPosts