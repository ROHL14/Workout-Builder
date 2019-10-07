import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
//import GoogleAuth from "../auth/GoogleAuth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link className="navigation__link" to="/my-routines">
          My Routines
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/exercises">
          <span className="">Exercises</span>
        </Link>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" onClick={logout} href="#!">
          <span className="">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link className="navigation__link" to="/exercises">
          Exercises
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/register">
          Register
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <h1 className="navigation__logo">
          <Link className="navigation__link" to="/">
            WorkoutBuilder
          </Link>
        </h1>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
