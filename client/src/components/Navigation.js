import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div>
            <Link to="/exercises">Exercises</Link>
            <Link to="/builder">Builder</Link>
            <GoogleAuth />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
