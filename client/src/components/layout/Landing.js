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
      <main className="wrapper">
        <div className="background"></div>
        <section className="section-about">
          <div className="section-about__title">
            <h1 className="section-about__title--text">Workout Builder</h1>
          </div>
          <div className="section-about__slogan">
            <h1 className="section-about__slogan--main">The Best Place</h1>
            <h1 className="section-about__slogan--sub">to find any exercise</h1>
          </div>
          <div className="section-about__info">
            <p className="section-about__info--text">
              You can build your personalize routines with a lot of exercises to
              choose
            </p>
            <p className="section-about__info--text">
              In our database we have all the exercise that you can imagine, You
              just need to choose the exercise and it will added to your routine
            </p>
          </div>
        </section>
      </main>
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
