import React from "react";
import { Link } from "react-router-dom";


export default () => (
  <div className = "container-fluid">
      <div className = "row d-flex">
          <div className = "col-6 d-flex justify-content-center">
                <div className = "leaderboard">
                    Leaderboards
                    {/* <Leaderboards /> */}
                </div>
          </div>
          <div className = "col-6 d-flex justify-content-center flex-column">
                <div className = "instructions">
                    Instructions
                    {/* <Instructions /> */}
                </div>
                <div className = "btn btn-success">Play!</div>
          </div>
      </div>
  </div>
);