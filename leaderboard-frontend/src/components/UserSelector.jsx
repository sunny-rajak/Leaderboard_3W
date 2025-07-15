import "../styles/UserSelector.css";

const UserSelector = ({ users, selectedUser, setSelectedUser, onClaim }) => {
    return (
        <div className="user-selector">
            <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
            >
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
            <button onClick={onClaim}>Claim Points</button>
        </div>
    );
};

export default UserSelector;
