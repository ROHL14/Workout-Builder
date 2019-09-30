import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Routine from "../routines/Routine";

import { getUserRoutines } from "../../actions/routine";

const Dashboard = ({
  auth: { user },
  getUserRoutines,
  routine: { routines, loading }
}) => {
  useEffect(() => {
    getUserRoutines();
  }, [getUserRoutines]);

  return loading === true && routines.length === 0 ? (
    <Spinner />
  ) : (
    <div className="container mt-5">
      <h1 className="">Routines</h1>
      <h4 className="">Welcome {user && user.name}</h4>

      {routines.length !== 0 ? (
        <Fragment>
          <DashboardActions />
          {routines.map(routine => (
            <Routine key={routine._id} routine={routine} />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <p>You don't have a routine yet, Create one</p>
          <Link to="/create-routine" className="btn btn-light">
            Create Routine
          </Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getUserRoutines: PropTypes.func.isRequired,
  routine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  routine: state.routine
});

export default connect(
  mapStateToProps,
  { getUserRoutines }
)(Dashboard);
