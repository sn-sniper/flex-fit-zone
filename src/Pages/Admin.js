import React from "react";

const users = [
    { name: "John Doe", email: "john.doe@example.com", membership: "Premium", progress: "80%" },
    { name: "Jane Smith", email: "jane.smith@example.com", membership: "Pro", progress: "65%" },
    { name: "Bob Johnson", email: "bob.johnson@example.com", membership: "Free", progress: "30%" }
];

const Admin = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ color: "white" }}>Admin Dashboard</h1>
            <div style={{ marginTop: "20px", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#212121", color: "white" }}>
                    <thead style={{ backgroundColor: "#414141" }}>
                        <tr>
                            <th style={{ border: "1px solid white", padding: "10px" }}>Name</th>
                            <th style={{ border: "1px solid white", padding: "10px" }}>Email</th>
                            <th style={{ border: "1px solid white", padding: "10px" }}>Membership</th>
                            <th style={{ border: "1px solid white", padding: "10px" }}>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid white", padding: "10px" }}>{user.name}</td>
                                <td style={{ border: "1px solid white", padding: "10px" }}>{user.email}</td>
                                <td style={{ border: "1px solid white", padding: "10px" }}>{user.membership}</td>
                                <td style={{ border: "1px solid white", padding: "10px" }}>{user.progress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
