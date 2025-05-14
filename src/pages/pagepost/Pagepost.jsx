import React, { useState } from 'react'
import './pagepost.css'
import { useEffect } from 'react'
import { client } from '../../../client'

const Pagepost = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    client.fetch()
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <>
    <section>
      <article>
        <img src="" alt="" />
        <div>
           <h1>HOLA</h1>
           <p>lorem ipsum</p>
           <button>READ MORE</button>
        </div>
      </article>
      <section className='pagepost__post'>
        <article>
          <img src="" alt="" />
          <div>
            <p>date</p>
            <h1>TITLE</h1>
            <p>lorem ipsum</p>
          </div>
        </article>
        <article>
          <img src="" alt="" />
          <div>
            <p>date</p>
            <h1>TITLE</h1>
            <p>lorem ipsum</p>
          </div>
        </article>
      </section>
      <div>
         <button className='btn'>Read All Blog Posts</button>  
      </div>
             
    </section>
        
    </>
  )
}

export default Pagepost