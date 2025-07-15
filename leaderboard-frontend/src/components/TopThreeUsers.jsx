import "../styles/TopThreeUsers.css";

const TopThreeUsers = ({ users }) => {
    const crowns = ["🥈", "👑", "🥉"];

    return (
        <div className="podium-container">
            <div className="podium-user second">
                <div className="podium-avatar">{crowns[0]}</div>
                <strong>{users[1]?.name}</strong>
                <div>{users[1]?.totalPoints} 🏆</div>
            </div>
            <div className="podium-user first">
                <div className="podium-avatar">{crowns[1]}</div>
                <strong>{users[0]?.name}</strong>
                <div>{users[0]?.totalPoints} 🏆</div>
            </div>
            <div className="podium-user third">
                <div className="podium-avatar">{crowns[2]}</div>
                <strong>{users[2]?.name}</strong>
                <div>{users[2]?.totalPoints} 🏆</div>
            </div>
        </div>
    );
};

export default TopThreeUsers;
