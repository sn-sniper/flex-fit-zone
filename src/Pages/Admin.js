import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/Admin.css";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for form inputs
    const [workoutName, setWorkoutName] = useState("");
    const [daysPerWeek, setDaysPerWeek] = useState("");
    const [duration, setDuration] = useState("");
    const [level, setLevel] = useState("");
    const [exercises, setExercises] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3030/api/auth/admin');
                setUsers(response.data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddWorkout = async (e) => {
        e.preventDefault();

        // Validation
        if (!workoutName || !daysPerWeek || !duration || !level || !exercises) {
            alert("All fields are required!");
            return;
        }

        const exercisesArray = exercises.split(",").map((ex) => ex.trim());
        if (exercisesArray.length === 0) {
            alert("Please provide at least one exercise.");
            return;
        }

        // Construct the request payload
        const payload = {
            workout_name: workoutName,
            days_per_week: parseInt(daysPerWeek, 10),
            duration,
            level,
            exercises: exercisesArray,
        };

        try {
            const response = await axios.post('http://localhost:3030/api/auth/admin/addWorkout', payload);
            alert(response.data.message);
            handleCloseModal();
        } catch (error) {
            console.error("Error adding workout:", error);
            alert(error.response?.data?.error || "An error occurred");
        }
    };

    return (
        <React.Fragment>
            <div className="admin-container">
                <h1>
                    Admin Dashboard
                    <button className="add-btn" onClick={handleOpenModal}>
                        <ion-icon name="add-outline"></ion-icon>Add Workout
                    </button>
                </h1>
                <hr />
                <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">ID</div>
                            <div className="col col-2">Username</div>
                            <div className="col col-3">Email</div>
                            <div className="col col-4">Membership</div>
                            <div className="col col-5">Admin</div>
                        </li>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <li className="table-row" key={index}>
                                    <div className="col col-1" data-label="ID">#{user.id}</div>
                                    <div className="col col-2" data-label="Username">{user.username}</div>
                                    <div className="col col-3" data-label="Email">{user.email}</div>
                                    <div className="col col-4" data-label="Plan Type">
                                        {user.planType === "premium" ? <ion-icon name="diamond"></ion-icon> : <ion-icon name="leaf"></ion-icon>}
                                        {user.planType}
                                    </div>
                                    <div className="col col-5" data-label="Admin">{user.admin === 1 ? "Yes" : "No"}</div>
                                </li>
                            ))
                        ) : (
                            <li className="table-row">
                                <div className="col col-1">No users found</div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <h2>Add a New Workout</h2>
                <form onSubmit={handleAddWorkout}>
                    <label>Workout Name:</label>
                    <input
                        type="text"
                        placeholder="Enter workout name"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                    />
                    <label>Days Per Week:</label>
                    <input
                        type="number"
                        placeholder="Days Per Week"
                        value={daysPerWeek}
                        onChange={(e) => setDaysPerWeek(e.target.value)}
                    />
                    <label>Duration:</label>
                    <input
                        type="text"
                        placeholder="Enter Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                    <label>Level:</label>
                    <input
                        type="text"
                        placeholder="Enter Level"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                    <label>Exercises (comma-separated):</label>
                    <textarea
                        placeholder="Enter Exercises"
                        value={exercises}
                        onChange={(e) => setExercises(e.target.value)}
                    ></textarea>
                    <button type="submit" className="submit-btn">Add Workout</button>
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default Admin;
    