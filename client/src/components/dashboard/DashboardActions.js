import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="">
      <Link to="/builder" className="btn btn-light">
        Build a Routine
      </Link>
    </div>
  );
};

export default DashboardActions;
