import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
//import GoogleAuth from "../auth/GoogleAuth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classToggle = () => {
    const navs = document.querySelectorAll(".navigation__list");

    navs.forEach(nav => nav.classList.toggle("navigation__toggle-show"));
  };

  const toggle = () => {
    document
      .querySelector(".navigation__item-toggle")
      .addEventListener("click", classToggle);
  };

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
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <lable
        for="navi-toggle"
        class="navigation__item navigation__item-toggle"
        onClick={toggle}
      >
        <span class="navigation__icon">&nbsp;</span>
      </lable>
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
