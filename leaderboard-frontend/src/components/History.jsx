import "../styles/History.css";

const History = ({ history }) => {
    return (
        <div className="history-container">
            <h2>Claim History</h2>
            <table className="history-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Points</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item) => (
                        <tr key={item._id}>
                            <td>{item.userId.name}</td>
                            <td>{item.points}</td>
                            <td>{new Date(item.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;
