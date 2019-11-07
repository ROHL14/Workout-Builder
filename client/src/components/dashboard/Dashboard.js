import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Routine from "../routines/Routine";

const Dashboard = ({ auth: { user } }) => {
  return user === null ? (
    <Spinner></Spinner>
  ) : (
    <Fragment>
      <div className="dashboard">
        <div className="dashboard__welcome">
          <h1 className="dashboard__welcome--title">Routines</h1>
          <h4 className="dashboard__welcome--user">
            Welcome {user && user.name}
          </h4>
        </div>
        <Routine></Routine>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
