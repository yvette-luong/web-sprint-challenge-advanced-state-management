import React from "react";
const Smurf = (props) => {
  const { details } = props;
  return (
    <div>
      <p> {details.name}</p>
    </div>
  );
};

export default Smurf;
