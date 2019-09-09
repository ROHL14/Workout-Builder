import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <span>Logo</span>
        <nav>
          <ul>
            <li>
              <a href="/">Index</a>
            </li>
            <li>
              <a href="/exercises">Exercises</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/user">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
