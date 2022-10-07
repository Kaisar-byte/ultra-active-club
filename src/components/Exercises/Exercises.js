import React from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';

const Exercises = ({ exercises, cart, setCart }) => {

    return (
        <div>

            <h2 className='exercise-text'>Select your exercise</h2>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise cart={cart} setCart={setCart} exercise={exercise}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;