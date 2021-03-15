import React from "react";
import WaldoMap from 'images/waldomap.png'

const Gameboard = (props) => {
    return (
        <div className = "board">
            <img className = "waldo-map-img" src = {WaldoMap}/>
        </div>

    )
}

export default Gameboard;