import React from "react";
import CreateRoutine from "../routines/CreateRoutine";

const DashboardActions = () => {
  return (
    <div className="">
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
