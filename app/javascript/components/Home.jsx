import React from "react";
import Instructions from "./Instructions"
import Leaderboards from "./Leaderboards"
import { Link } from "react-router-dom";


export default () => (
  <div className = "container-fluid">
      <div className = "row d-flex">
          <div className = "col-6 d-flex justify-content-center">
                <div className = "leaderboard">
                    <Leaderboards />
                </div>
          </div>
          <div className = "col-6 d-flex justify-content-center flex-column">
                <div className = "instructions">
                    <Instructions />
                </div>
                <Link to="/game" className="btn btn-success">
                    Play!
                </Link>
          </div>
      </div>
  </div>
);