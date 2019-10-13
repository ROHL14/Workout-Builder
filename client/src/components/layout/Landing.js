import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/my-routines" />;
  }

  return (
    <Fragment>
      <div className="background"></div>
      <section className="section-about">
        <div className="section-about__info">
          <h2 className="heading-tertiary">
            The best place to find any exercise.
          </h2>
          <p className="paragraph">
            You can build your personalize routines with a lot of exercises to
            choose
          </p>
          <p className="paragraph">
            In our database we have all the exercise that you can imagine, You
            just need to choose the exercise and it will added to your routine
          </p>
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
