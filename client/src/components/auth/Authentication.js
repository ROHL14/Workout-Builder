import React, { Fragment } from "react";

import Register from "./Register";
import Login from "./Login";

const Authentication = () => {
  const handleClick = () => {
    const signUpBtn = document.getElementById("signUp");
    const signInBtn = document.getElementById("signIn");
    const container = document.getElementById("container");
    signUpBtn.addEventListener("click", () =>
      container.classList.add("right-panel-active")
    );

    signInBtn.addEventListener("click", () =>
      container.classList.remove("right-panel-active")
    );
  };

  return (
    <Fragment>
      <div className="background"></div>
      <section className="section-authentication">
        <div className="section-authentication__container" id="container">
          <Register />
          <Login />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay__panel overlay__left">
                <h1 className="overlay__main-text">Welcome Back!</h1>
                <p className="overlay__sub-text">
                  To keep connected with us please login with your account
                </p>
                <button
                  className="btn-form btn-ghost"
                  id="signIn"
                  onClick={handleClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay__panel overlay__right">
                <h1 className="overlay__main-text">Hello, Friend!</h1>
                <p className="overlay__sub-text">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="btn-form btn-ghost"
                  id="signUp"
                  onClick={handleClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Authentication;
