import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div className='home-container'>
            <div className="left-content">
                <Header></Header>
                <Exercises></Exercises>
            </div>
            <div className="right-sideBar">

            </div>
        </div>
    );
};

export default Home;