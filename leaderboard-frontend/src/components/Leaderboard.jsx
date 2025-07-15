import TopThreeUsers from "./TopThreeUsers";
import RemainingUsers from "./RemainingUsers";
import "../styles/Leaderboard.css";

const Leaderboard = ({ leaderboard }) => {
    const topThree = leaderboard.slice(0, 3);
    const remaining = leaderboard.slice(3);

    return (
        <div>
            <TopThreeUsers users={topThree} />
            <RemainingUsers users={remaining} />
        </div>
    );
};

export default Leaderboard;
