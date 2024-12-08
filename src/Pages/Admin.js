import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styles/Admin.css";

const Admin = () => {
    const [users, setUsers] = useState([]);

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

    return (
        <React.Fragment>
            <div className='admin-container'>   
                <h1>Admin Dashboard</h1>
                <hr />
                <div className='container'>
                    <ul className='responsive-table'>
                        <li className='table-header'>
                            <div className='col col-1'>ID</div>
                            <div className='col col-2'>Username</div>
                            <div className='col col-3'>Email</div>
                            <div className='col col-4'>Membership</div>
                            <div className='col col-5'>Admin</div>
                        </li>
                        {users.length > 0 ? (
                            users.map((user,index)=>(
                                <li className='table-row' key={index}>
                                    <div className='col col-1'>#{user.id}</div>
                                    <div className='col col-2'>{user.username}</div>
                                    <div className='col col-3'>{user.email}</div>
                                    <div className='col col-4'>{user.planType}</div>
                                    <div className='col col-5'>{user.admin === 1 ? "Yes" : "No"}</div>
                                </li>
                            ))
                        ):(
                            <li className='table-raw'>
                                <div className='col col-1'>No users found</div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Admin;
