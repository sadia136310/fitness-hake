import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'

import './Fitness.css'
import Display from '../Display/Display';
const Fitness = () => {
const [datas,setDatas]=useState([]);

useEffect(()=>{
    fetch('datas.json')
    .then(res=>res.json())
     .then(data=>setDatas(data))
},[])

    return (
        
        <div className='title-container'>
            <div className='club'>
          <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
          <h1 className='title'>Fitness Club</h1>
       </div>

       <h3>Select today's activity!</h3>
            <div className='container'>
            <div className="fitness-container">

          {/* <h3>data: {datas.length}</h3> */}
       
          {
            datas.map(data=><Display 
                key={data.id}
                data={data}
                ></Display>)
          }
          
            </div>
            <div className="cart-container">
                <h1>cart</h1>
            </div>
        </div>
        </div>
    );
};

export default Fitness;