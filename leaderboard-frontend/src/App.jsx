import React, { useEffect, useState } from "react";
import API from "./api/api";
import UserSelector from "./components/UserSelector";
import AddUserForm from "./components/AddUserForm";
import Leaderboard from "./components/Leaderboard";
import History from "./components/History";
import "./App.css";

const App = () => {
    const [users, setUsers] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);

    const fetchLeaderboard = async () => {
        const res = await API.get("/leaderboard");
        setLeaderboard(res.data);
        setUsers(res.data);
    };

    const fetchHistory = async () => {
        const res = await API.get("/history");
        setHistory(res.data);
    };

    useEffect(() => {
        fetchLeaderboard();
        fetchHistory();
        const interval = setInterval(() => {
            fetchLeaderboard();
            fetchHistory();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleClaimPoints = async () => {
        if (!selectedUser) return alert("Select a user");
        const res = await API.post("/claim-points", { userId: selectedUser });

        setMessage(`+${res.data.points} points to ${res.data.user.name}`);
        setTimeout(() => setMessage(""), 2000);

        fetchLeaderboard();
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Leaderboard System</h1>
            <AddUserForm onUserAdded={fetchLeaderboard} />
            <br />
            <UserSelector
                users={users}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                onClaim={handleClaimPoints}
            />
            {message && (
                <div
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        background: "#dff0d8",
                        color: "#3c763d",
                        borderRadius: "8px",
                    }}
                >
                    {message}
                </div>
            )}
            <br />
            <Leaderboard leaderboard={leaderboard} />
            <br />
            <History history={history} />
        </div>
    );
};

export default App;
