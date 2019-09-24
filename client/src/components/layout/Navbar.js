import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1 className="logo">
          <Link to="/">Logo</Link>
        </h1>
        <ul className="items">
          <li className="item">
            <Link to="/exercises">Exercises</Link>
          </li>
          <li className="item">
            <Link to="/builder">Builder</Link>
          </li>
          <li className="item">
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
