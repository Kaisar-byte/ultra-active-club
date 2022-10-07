import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';
import './Home.css'
import profileImage from '../../images/profile-img.png'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data.exercise))
    }, []);

    const [cart, setCart] = useState([])
    return (
        <div className='home-container'>
            <div className="left-content">
                <Header></Header>
                <Exercises cart={cart} setCart={setCart} exercises={exercises}></Exercises>

            </div>
            <div className="right-sideBar">
                <div className="profile-sec">
                    <img src={profileImage} alt="" />
                    <div className='profile-text'>
                        <h3>Mohammad Khan</h3>
                        <p>Bouar, Central Africa</p>
                    </div>
                </div>
                <div className="break-section">
                    <nav className='break-section-nav'>
                        <a href="#">10<span className='nav-seconds'>s</span></a>
                        <a href="#" className='active'>20<span className='nav-seconds'>s</span></a>
                        <a href="#">30<span className='nav-seconds'>s</span></a>
                        <a href="#">40<span className='nav-seconds'>s</span></a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;