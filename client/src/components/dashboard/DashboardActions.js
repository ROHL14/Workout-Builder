import React from "react";
import { Link } from "react-router-dom";
import CreateRoutine from "../routines/CreateRoutine";

const DashboardActions = () => {
  return (
    <div className="">
      <Link to="/create-routine" className="">
        Build a Routine
      </Link>
      <button
        type="button"
        className="btn btn-light"
        data-toggle="modal"
        data-target="#Modal"
      >
        Build a Routine
      </button>
      <CreateRoutine id="Modal" />
    </div>
  );
};

export default DashboardActions;
