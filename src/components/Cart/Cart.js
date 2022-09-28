import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
let time=0;
for(const data of cart){
   time= time + parseInt(data.time);
}

    return (
     
           <div>
             <h2> Sadia Islam</h2>
            <p>Dhaka,Bangladesh</p>
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
               <button className='btn-1'>20s</button>
               <button className='btn-1'>15s</button>
               <button className='btn-1'>30s</button>
               <button className='btn-1'>25s</button>
               <button className='btn-1'>40s</button>
            </button>
            <br />
            <p>Exercise Details</p>
            <button className='ex-time'>
               <h4> Exercise time </h4>
                <p> {time}sec</p></button>
            <br />
            <br />
            <button className='br-time'>Break time </button>
            <br />
            <br />
            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;