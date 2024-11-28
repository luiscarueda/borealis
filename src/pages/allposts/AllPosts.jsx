import './allposts.css'
import { headerData } from '../../constants/data'
import { Headeraux } from '../../components'
import React, { useState, useEffect } from 'react';


const AllPosts = () => {
  
  return (
    <div>
          <Headeraux  title={headerData[1].title} 
                      text={headerData[1].text}
                      imgUrl={headerData[1].imgUrl}
           />
        <div>        
           <h1>WORKING IN THIS SECTION</h1>
          
         </div>    
    </div>
  )
}

export default AllPosts