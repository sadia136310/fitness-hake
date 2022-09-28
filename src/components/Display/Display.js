import React from 'react';
import './Display.css'

const Display = (props) => {
    // console.log(props);
    const {name,img,benefits,age,time}=props.data
    return (
        <div className='display'>
            <img src={img} alt="" />
        
          <div className='display-container'>
          <h2>{name}</h2>
            <p>{benefits}</p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}</h5>
            <button className='btn'>
                Add to cart
            </button>
          </div>
        </div>
    );
};

export default Display;