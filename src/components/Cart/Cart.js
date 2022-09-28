
import React, { useState } from 'react';
import './Cart.css'
import img from '../../images/280115748_1643689546029636_4366612206964565876_n.jpg'

const Cart = ({cart}) => {
    // console.log(cart);
let time=0;
for(const data of cart){
   time= time + parseInt(data.time);
}
const [show,setShow]= useState(0)
const handleShow=()=>setShow(10);



    return (
           <div>
        <small>
        <img src={img} alt="" />
             <h2> Sadia Islam</h2>
            <p>Dhaka,Bangladesh</p>
        </small>
          <br />
          <br />
            <button className='cart-container'>
                <div>
                <p>54KG</p>
                <p>Weight</p>
                </div>
                <div>
                    <p>5'2"</p>
                    <p>Height</p>
                </div>
                <div>
                    <p>23years</p>
                    <p>age</p>
                </div>
            </button>
            <br />
            <p>Add a break</p>
            
            <button className='other-container'>
               <button onClick={handleShow} className='btn-1'>10s</button>
               <button className='btn-1'>20s</button>
               <button className='btn-1'>30s</button>
               <button className='btn-1'>40s</button>
               <button className='btn-1'>50s</button>
            </button>
            <br />
            <p>Exercise Details</p>
            <button className='ex-time'>
               <h4> Exercise time </h4>
                <p> {time}sec</p>
                </button>
            <br />
            <br />
            <button className='br-time'>
            <h4> Break time  </h4>
                <p>{show} sec</p>
            </button>
            <br />
            <br />
            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;