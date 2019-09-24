import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <div className="landing">
        <section className="title-section">
          <h1 className="title">Workout Builder</h1>
        </section>

        <section className="info-section">
          <p className="info">
            Is the best place to find the exercise that you are looking for.
            <br />
            <br />
            You can also build your personalize routines with a lot of exercises
            to choose
            <br />
            <br />
            We have really good routines that will help to build muscles, also
            those routines will help you as a guideline to know what you need to
            build your personalize routine.
          </p>
        </section>
        <section className="auth-section">
          <Link className="auth-item" to="/signup">
            Signup
          </Link>
          <Link className="auth-item" to="/login">
            Login
          </Link>
        </section>
      </div>
    );
  }
}

export default Layout;
