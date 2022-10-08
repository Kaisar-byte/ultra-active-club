import React from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';

const Exercises = ({ exercises, list, setList }) => {

    return (
        <div>

            <h2 className='exercise-text'>Select your exercise</h2>
            <div className='exercises-container'>
                {
                    exercises.map(exercise => <Exercise key={exercise.exerciseId} list={list} setList={setList} exercise={exercise}></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;