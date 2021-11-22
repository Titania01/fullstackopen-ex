import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      Total number of exercises{" "}
      {parts.reduce((sum, value) => sum + value.exercises, 0)}{" "}
    </p>
  );
};

export default Total;
