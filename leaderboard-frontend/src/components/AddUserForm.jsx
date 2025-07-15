import React, { useState } from "react";
import API from "../api/api";
import "../styles/AddUserForm.css";

const AddUserForm = ({ onUserAdded }) => {
    const [name, setName] = useState("");

    const handleAddUser = async () => {
        if (!name) return alert("Enter name");
        await API.post("/add-user", { name });
        setName("");
        onUserAdded(); // Refresh user list
    };

    return (
        <div className="user-actions-container">
            <div className="add-user-form">
                <input
                    type="text"
                    value={name}
                    placeholder="New User Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>
        </div>
    );
};

export default AddUserForm;
