import React from 'react';
import './Display.css'

const Display = ({data,handleClick}) => {

    // console.log(props);
    const {name,img,age,time}=data;

    
    return (
        <div className='display'>
            <img src={img} alt="" />
        
          <div className='display-container'>
          <h2>{name}</h2>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}</h5>
            <button onClick={()=>handleClick(data)} className='btn-add'>Add to cart </button>
          </div>
        </div>
    );
};

export default Display;