import React, { useContext, useState, useEffect } from "react";
import "../Styles/UserDashboard.css";
import { useNavigate, useLocation } from "react-router-dom";
import UserSidebar from "../Components/UserSidebar";
import { RegistrationContext } from '../Context/RegistrationContext';
import Explore from "../Components/Explore";
import axios from "axios";

const UserDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { registrationData, logout } = useContext(RegistrationContext);
    const [userData, setUserData] = useState(registrationData);
    const [userWorkouts, setUserWorkouts] = useState([]);

    useEffect(() => {
        const storedData = sessionStorage.getItem("ClientData");
        if (storedData) {
            setUserData(JSON.parse(storedData));
        }
    }, []);
    console.log("userData",userData);
    
    useEffect(() => {
        const fetchUserWorkouts = async () => {
            if (!userData.id) return;
            try {
                const response = await axios.get(`http://localhost:3030/api/auth/getUserWorkouts/${userData.id}`);
                console.log(response.data); // Debug response
                setUserWorkouts(response.data.userWorkouts);
            } catch (error) {
                console.error('Error fetching user workouts:', error);
            }
        };

        fetchUserWorkouts();
    }, [userData.id]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <React.Fragment>
            <div className="UserDashboard-Container">
                {location.pathname.includes('dashboard') && (
                    <UserSidebar plantype={userData.planType || 'free'} username={userData.username || 'Guest'} />
                )}
                <div className="Dashboard-Content">
                    {location.pathname.includes('explore') ? <Explore /> : (
                        <div className="Dashboard-Workouts">
                            {userWorkouts.length > 0 ? (
                                userWorkouts.map((workout, index) => (
                                    <div className="card" key={index}>
                                        <div className="header">
                                            <span className="title">{workout.workout_name}</span>
                                        </div>
                                        <p className="desc">Duration: {workout.duration}</p>
                                        <p className="desc">Days per week: {workout.daysPerWeek}</p>
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
                                        <button type="button" className="action">Go To</button>
                                    </div>
                                ))
                            ) : (
                                <p className="no-workouts-message">You have not added any workouts yet.</p>
                            )}
                        </div>
                    )}
                    <button className="logout-btn" onClick={handleLogout}>
                        <ion-icon name="exit-outline"></ion-icon>
                        Logout
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};


export default UserDashboard;
