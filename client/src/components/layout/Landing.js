import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/my-routines" />;
  }

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
        <Link className="auth-item" to="/register">
          Signup
        </Link>
        <Link className="auth-item" to="/login">
          Login
        </Link>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
