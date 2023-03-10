import React from 'react';
import './Exercise.css'
import Swal from 'sweetalert2'

const Exercise = ({ exercise, list, setList }) => {

    const { exerciseDescription, exerciseDuration, exerciseName, exerciseThumbnail, exerciseMinAge, exerciseId } = exercise

    const addToList = id => {
        const listedItem = {
            exerciseDuration,
            exerciseId
        }

        if (list?.length) {
            // const newList = parseInt(setList([...list, time]));
            const newList = [...list, listedItem]
            setList(newList)
        }
        else {
            // const prevList = parseInt(setList(time));
            const prevList = [listedItem]
            setList(prevList)
        }

        // Local Storage 
        const preStorage = localStorage.getItem('exercise-list');
        const oldStorage = JSON.parse(preStorage);

        if (oldStorage) {
            const isListed = oldStorage.find(p => p.exerciseId === id)
            if (isListed) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already exist!',
                    footer: '<a href="">Why do you clicked for 2nd times?</a>'
                })
                return;
            }
            const NewVale = localStorage.setItem('exercise-list', JSON.stringify([...oldStorage, listedItem]));
            setList(NewVale)

        }
        else {
            const PreValue = localStorage.setItem('exercise-list', JSON.stringify([listedItem]));
            setList(PreValue)
        }


    }

    return (
        <div>
            <div className='exercise-card' data-aos="zoom-in">
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