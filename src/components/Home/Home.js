import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import profileImage from '../../images/profile-img.png'
import './Home.css'
import Swal from 'sweetalert2'
const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [list, setList] = useState([])
    const [btnValue, setBtnValue] = useState([])


    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data.exercise))
    }, []);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('exercise-list'));
        if (list) {
            setList(list)
        }
    }, []);

    const total = list.reduce((a, b) => {
        return a + b.exerciseDuration
    }, 0)

    const handleBreakDown = (e) => {
        const prevValue = [e.target.innerText]
        setBtnValue(prevValue);
        Swal.fire(`You selected ${prevValue} minutes`)

    }

    return (
        <div className='home-container'>
            <div className="left-content">
                <Header></Header>
                <Exercises list={list} setList={setList} exercises={exercises}></Exercises>

            </div>
            <div className="right-sideBar">
                <div className='sticky-bar'>
                    <div className="profile-sec">
                        <img src={profileImage} alt="" />
                        <div className='profile-text'>
                            <h3>Mohammad Khan</h3>
                            <p>Bouar, Central Africa</p>
                        </div>
                        <div className='profile-data'>
                            <div className='data'>
                                <h4>Weight</h4>
                                <p>70<span>kg</span></p>
                            </div>
                            <div className='data'>
                                <h4>Height</h4>
                                <p>83<span>CM</span></p>
                            </div>
                            <div className='data'>
                                <h4>Age</h4>
                                <p>37<span>Yr</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="break-section">
                        <Nav handleBreakDown={handleBreakDown}></Nav>
                        <div>
                            <div className='exercise-details'>
                                <h3>Exercise Details</h3>
                                <div className='exercise-time-text'>
                                    <p className='exercise-time'>Exercise Time</p>
                                    <span className='time-value'>{total} minutes</span>
                                </div>
                                <div className='exercise-time-text'>
                                    <p className='break-time'>Break Time</p>
                                    <span className='time-value'>{btnValue} minutes</span>
                                    <button className='activity'>Activity Completed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;