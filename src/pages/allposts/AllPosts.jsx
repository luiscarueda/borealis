import './allposts.css'
import { HEADER } from '../../constants/data'
import { Headeraux } from '../../components'
import React, { useState, useEffect } from 'react';


const AllPosts = () => {
  
  return (
    <div>
          <Headeraux  title={HEADER[1].title} 
                      text={HEADER[1].text}
                      imgUrl={HEADER[1].imgUrl}
           />
        <div>        
           <h1>WORKING IN THIS SECTION</h1>
          
         </div>    
    </div>
  )
}

export default AllPosts