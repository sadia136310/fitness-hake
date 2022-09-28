import React, { useEffect, useState } from 'react';

import './Fitness.css'
import Display from '../Display/Display';
import Cart from '../Cart/Cart';
const Fitness = () => {
const [ datas, setDatas]=useState([]);
const [ cart, setCart]=useState([]);

useEffect(()=>{
    fetch('datas.json')
    .then(res=>res.json())
     .then(data=> setDatas(data))
},[]);

const handleClick=(data)=>{
   const newCart=[...cart,data];
   setCart(newCart);
}

    return (
        <div className='body'>
            <h3>Select today's Exercise</h3>
            <div className='container'>
            <div className="fitness-container">
            {
            datas.map(data=><Display 
                key={data.id}
                data={data}
                handleClick={handleClick}
                ></Display>)
            }
            </div>
            <div className="cart-container">
               <Cart 
               cart={cart}
               ></Cart>
            </div>
        </div>
        </div>
    );
};

export default Fitness;