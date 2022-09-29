
import React, { useEffect, useState } from 'react';
import './Cart.css'
import img from '../../images/280115748_1643689546029636_4366612206964565876_n.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({cart}) => {
    // console.log(cart);
let time=0;
for(const data of cart){
   time= time + parseInt(data.time);
}


const [show,setShow]= useState(0);
useEffect(()=>{
    const localStorageData=localStorage.getItem('break');
  if(localStorageData){
    setShow(JSON.parse(localStorageData));
  }
},[show])
const handleShow1=()=>{
    const cart=document.getElementById('btn-1').innerText;
    localStorage.setItem('break',JSON.stringify(cart));
    setShow(0+10);
   }
const handleShow2=()=>{
    const cart=document.getElementById('btn-2').innerText;
    localStorage.setItem('break',JSON.stringify(cart));
    setShow(0+20);
   
}
const handleShow3=()=>{
    const cart=document.getElementById('btn-3').innerText;
    localStorage.setItem('break',JSON.stringify(cart));
    setShow(0+30);
   
}
const handleShow4=()=>{
    const cart=document.getElementById('btn-4').innerText;
    localStorage.setItem('break',JSON.stringify(cart));
    setShow(0+40);

}
const handleShow5=()=>{
    const cart=document.getElementById('btn-5').innerText;
    localStorage.setItem('break',JSON.stringify(cart));
    setShow(0+50);
   
}

const notify = () => {
    toast("Wow!! Successfully Completed.");
}

    return (
           <div className='cart'>
   
        <img src={img} alt="" />
            <small className='cart-text'> 
            <h2> Sadia Islam</h2>
            
            <p>Web Developer</p>
            <p>Dhaka,Bangladesh</p>
            </small>
      
          
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
         
            <h3>Add a break</h3>
            
            <button className='other-container'>
               <button onClick={handleShow1} className='btn' id='btn-1' >10</button>
               <button onClick={handleShow2} className='btn' id='btn-2'>20</button>
               <button onClick={handleShow3} className='btn' id='btn-3'>30</button>
               <button onClick={handleShow4} className='btn' id='btn-4'>40</button>
               <button onClick={handleShow5} className='btn' id='btn-5'>50</button>
            </button>
            <h3>Exercise Details</h3>
            <button className='ex-time'>
               <h4> Exercise time </h4>
                <p> {time} sec</p>
                </button>
            <br />
           
            <button className='br-time'>
            <h4> Break time  </h4>
                <p> {show} sec</p>
            </button>
            <br />
          
            <button onClick={notify} className='activity'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Cart;