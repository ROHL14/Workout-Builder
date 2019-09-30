import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import GoogleAuth from "../GoogleAuth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="items">
      <li className="item">
        <Link to="/my-routines">
          <i className="fas fa-user"></i> <span className="">My Routines</span>
        </Link>
      </li>
      <li className="item">
        <Link to="/exercises">
          <i className="fas fa-dumbbell"></i>{" "}
          <span className="">Exercises</span>
        </Link>
      </li>
      <li className="item">
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="items">
      <li className="item">
        <Link to="/exercises">Exercises</Link>
      </li>
      <li className="item">
        <Link to="/register">Register</Link>
      </li>
      <li className="item">
        <Link to="/login">Login</Link>
      </li>
      <li className="item">
        <GoogleAuth />
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1 className="logo">
        <i className="fas fa-dumbbell"></i>
        <Link to="/"> WorkoutBuilder</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
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
