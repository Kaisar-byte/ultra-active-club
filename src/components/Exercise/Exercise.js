import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, list, setList, changeListText, setChangeListText }) => {

    const { exerciseDescription, exerciseDuration, exerciseName, exerciseThumbnail, exerciseMinAge, exerciseId } = exercise

    const addToList = id => {
        const time = {
            exerciseDuration
        }


        if (list?.length) {
            // const newList = parseInt(setList([...list, time]));
            const newList = [...list, time]
            setList(newList)
        }
        else {
            // const prevList = parseInt(setList(time));
            const prevList = [time]
            setList(prevList)
            console.log(list)
        }

        const preStorage = localStorage.getItem('list')
        if (preStorage) {
            
        }

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
                    <button onClick={() => addToList(exerciseId)} className='btn-addToList'>
                        <p>Add to List</p>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Exercise;