import React from 'react';
import './classes.css';
import { Headeraux } from '../../components';
import { HEADER } from '../../constants/data';

const Classes = () => {
  return (
    <div>
    <Headeraux title={HEADER[3].title} 
               text={HEADER[3].text}
               imgUrl={HEADER[3].imgUrl} 
      />
    <h1>PENDIENTE</h1>
    </div>
  )
}

export default Classes