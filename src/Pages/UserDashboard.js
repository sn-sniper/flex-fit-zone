import React from "react";
import "../Styles/UserDashboard.css";
import UserSidebar from "../Components/UserSidebar";

const workouts = [
    {
        workoutName: "Full Body Strength",
        daysPerWeek: 3,
        duration: "45 minutes",
        level: "Intermediate",
        exercises: ["Deadlifts", "Push-ups", "Pull-ups", "Lunges", "Plank"]
    },
    {
        workoutName: "Cardio Blast",
        daysPerWeek: 5,
        duration: "30 minutes",
        level: "Beginner",
        exercises: ["Jump Rope", "High Knees", "Mountain Climbers", "Burpees", "Jogging"]
    }
];

const UserDashboard = () => {
    return (
        <React.Fragment>
            <div className="UserDashboard-Container">
                <UserSidebar />
                <div className="Dashboard-Content">
                    <div className="Dashboard-Workouts">
                        {workouts.map((workout, index) => (
                            <div className="card" key={index}>
                                <div className="header">
                                    <span className="title">{workout.workoutName}</span>
                                </div>
                                <p className="desc">Duration:{workout.duration}</p>
                                <p className="desc">Days per week:{workout.daysPerWeek}</p>
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
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserDashboard;
