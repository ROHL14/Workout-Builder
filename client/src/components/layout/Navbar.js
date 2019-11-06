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
        <Link className="navigation__link" onClick={logout} to="/">
          <span className="">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link className="navigation__link" to="/">
          Home
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/exercises">
          Exercises
        </Link>
      </li>

      <li className="navigation__item">
        <Link className="navigation__link" to="/authenticate">
          Get Started
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label
        htmlFor="navi-toggle"
        className="navigation__item navigation__button"
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav">
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
