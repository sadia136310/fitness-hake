import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
    return (
        <div className='title-container'>
            <div className='club'>
          <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
          <h1 className='title'>Fitness Club</h1>
        </div>
        <nav>
            <a href="/home">Home</a>
            <a href="activity">Activity</a>
            <a href="/about us">About Us</a>
        </nav>
        </div>
    );
};

export default Header;