import React, { Fragment } from "react";

const TableHead = () => {
  return (
    <Fragment>
      <thead className="table__head">
        <tr className="table__row">
          <th className="">Name</th>
          <th className="">Muscle</th>
          <th className="">Sets</th>
          <th className="">Repetitions</th>
          <th className="">Delete</th>
        </tr>
      </thead>
    </Fragment>
  );
};

export default TableHead;
