import React from "react";
import WaldoFace from 'images/wheres-waldo-face.png'
const Instructions = (props) => {
    return (
        <div className = "instructions-container">
            <div className = "instructions-text">
                <p>Find Waldo in the fastest time possible to make it into the leaderboards.</p>
            </div>
            <div className = "instructions-img">
                <img className = "waldo-face-img" src = {WaldoFace} width = "100" />
            </div>
        </div>
    )
}

export default Instructions;