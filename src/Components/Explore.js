import React, { useState, useEffect, useContext } from 'react';
import "../Styles/Explore.css";
import axios from 'axios';
import { RegistrationContext } from '../Context/RegistrationContext';

export default function Explore() {
    const [workouts, setWorkouts] = useState([]);
    const { registrationData } = useContext(RegistrationContext);
    const [userData, setUserData] = useState(registrationData);

    useEffect(() => {
        const storedData = sessionStorage.getItem("ClientData");
        if (storedData) {
            try {
                setUserData(JSON.parse(storedData));
            } catch (error) {
                console.error("Invalid session data in sessionStorage", error);
            }
        }

        const fetchWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:3030/api/auth/getWorkouts');
                console.log(response.data); // Ensure the data structure is correct
                if (response?.data?.workoutData) {
                    setWorkouts(response.data.workoutData);
                } else {
                    console.error('Unexpected workoutData structure:', response.data);
                }
            } catch (error) {
                console.log('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, []);


    const handleAddWorkout = async (workout) => {
        try {
            const response = await axios.post('http://localhost:3030/api/auth/addUserWorkout', {
                userId: userData.id, // Ensure user ID is fetched from the context or session
                workoutId: workout.id
            });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error adding workout for user:', error);
        }
    };


    return (
        <React.Fragment>
            <div className='Explore-Container'>
                <div className="Dashboard-Workouts">
                    {workouts.map((workout, index) => (
                        <div className="card" key={index}>
                            <div className="header">
                                <span className="title">{workout.workout_name}</span>
                            </div>
                            <p className="desc">Duration: {workout.duration}</p>
                            <p className="desc">Days per week: {workout.days_per_week}</p>
                            <ul className="lists">
                                {workout.exercises.map((exercise, i) => (
                                    <li className="list" key={i}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>{exercise}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                className="action"
                                onClick={() => handleAddWorkout(workout)}
                            >
                                Add To Lessons
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
