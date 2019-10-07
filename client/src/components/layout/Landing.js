import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/my-routines" />;
  }

  return (
    <Fragment>
      <section className="section-about">
        <div className="u-margin-bottom-big">
          <h1 className="heading-primary">Workout Builder</h1>
        </div>
        <div className="section-about__info">
          <h3 className="heading-tertiary u-margin-bottom-small">
            The best place to find any exercise.
          </h3>
          <p className="paragraph">
            You can build your personalize routines with a lot of exercises to
            choose
          </p>
          <p className="paragraph">
            In our database we have all the exercise that you can imagine, You
            just need to choose the exercise and it will added to your routine
          </p>
        </div>
        <div className="section-about__buttons">
          <Link className="btn" to="/register">
            Signup
          </Link>
          <Link className="btn" to="/login">
            Login
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
