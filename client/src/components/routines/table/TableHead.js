import React, { Fragment } from "react";

const TableHead = () => {
  return (
    <Fragment>
      <thead>
        <tr>
          <th>Name</th>
          <th className="">Muscle</th>
          <th className="">description</th>
          <th className="">Sets</th>
          <th className="">Repetitions</th>
        </tr>
      </thead>
    </Fragment>
  );
};

export default TableHead;
