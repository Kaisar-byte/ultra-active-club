import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, cart, setCart }) => {
    const { exerciseDescription, exerciseDuration, exerciseName, exerciseThumbnail, exerciseMinAge, exerciseId } = exercise
    console.log(exercise)
    const addToCart = id => {
        console.log(id)
    }
    return (
        <div>
            <div className='exercise-card'>
                <img src={exerciseThumbnail} alt="" />
                <div className='exercise-card-info'>
                    <p><strong>{exerciseName.toUpperCase()}</strong></p>
                    <p>Age: {exerciseMinAge} </p>
                    <p>Time required: {exerciseDuration} minutes</p>
                    <p style={{ textAlign: 'justify' }}>Exercise Descriptions: {exerciseDescription.slice(0, 105)}</p>
                    <button onClick={() => addToCart(exerciseId)} className='btn-addToList'>
                        <p>Add to List</p>
                    </button>
                </div>

            </div>
        </div >
    );
};

export default Exercise;