import React from 'react';
import './Nav.css'

const Nav = ({ handleBreakDown }) => {
    return (
        <div>
            <nav className='break-section-nav'>
                <button className='btn-breakDownMins' onClick={handleBreakDown}><p>10</p></button>
                <button className='btn-breakDownMins' onClick={handleBreakDown}><p>20</p></button>
                <button className='btn-breakDownMins' onClick={handleBreakDown}><p>30</p></button>
                <button className='btn-breakDownMins' onClick={handleBreakDown}><p>40</p></button>
            </nav>
        </div >
    );
};

export default Nav;