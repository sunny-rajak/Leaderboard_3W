const RemainingUsers = ({ users }) => {
    return (
        <div className="remaining-users-container">
            {users.map((user) => (
                <div key={user.id} className="remaining-user">
                    <span>
                        #{user.rank} {user.name}
                    </span>
                    <span>{user.totalPoints.toLocaleString()} 🏆</span>
                </div>
            ))}
        </div>
    );
};

export default RemainingUsers;
