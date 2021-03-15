import React from "react";

const Leaderboards = (props) => {
    return (
        <div className = "leaderboards-container">
            <div className = "leaderboard-names">
                Leaderboard examples:
                {/* fetch calls to get top 10 */}
                <div>Johnny</div>
                <div>Jack</div>
                <div>Jones</div>
                <div>Justin</div>
            </div>
        </div>
    )
}

export default Leaderboards;