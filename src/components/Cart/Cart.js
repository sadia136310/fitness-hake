import React from 'react';
import './Cart.css'

const Cart = () => {
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
               <button className='btn-1'>10s</button>
               <button className='btn-1'>10s</button>
               <button className='btn-1'>10s</button>
               <button className='btn-1'>10s</button>
               <button className='btn-1'>10s</button>
            </button>
            <br />
            <p>Exercise Details</p>
            <button className='ex-time'>Exercise time</button>
            <br />
            <br />
            <button className='br-time'>Break time</button>
            <br />
            <br />
            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default Cart;