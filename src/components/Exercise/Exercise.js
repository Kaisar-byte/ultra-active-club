import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, list, setList, changeListText, setChangeListText, handleBreakDown }) => {

    const { exerciseDescription, exerciseDuration, exerciseName, exerciseThumbnail, exerciseMinAge, exerciseId } = exercise

    const addToList = id => {
        const time = {
            exerciseDuration,
            exerciseId
        }

        console.log(time)
        if (list?.length) {
            // const newList = parseInt(setList([...list, time]));
            const newList = [...list, time]
            setList(newList)
        }
        else {
            // const prevList = parseInt(setList(time));
            const prevList = [time]
            setList(prevList)
        }

        const preStorage = localStorage.getItem('list')
        const oldStorage = JSON.parse(preStorage)
        if (oldStorage) {
            console.log('acchee')
            // const isExist = oldStorage.find(p => p.exerciseId === id);
            // console.log(isExist)
        } else {
            console.log('naiiiii');
            localStorage.setItem('list', JSON.stringify([...oldStorage, time]))
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