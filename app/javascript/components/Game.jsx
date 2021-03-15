import React from "react";
import Navbar from "./Navbar"
import Gameboard from "./Gameboard"

const Game = (props) => {
    return (
        <div className = "game">
            <Navbar />
            <Gameboard />
        </div>
    )
}

export default Game;