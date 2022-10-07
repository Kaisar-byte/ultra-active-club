import React from 'react';
import './Header.css'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <FontAwesomeIcon style={{ color: 'salmon', fontSize: '30px' }} icon={faDumbbell}></FontAwesomeIcon>
                <h4 className='header-text'>MY-GYM-HOUSE</h4>
            </div>
        </div >
    );
};

export default Header;