import React from "react";
const Smurf = (props) => {
  const { details } = props;
  return (
    <div>
      <div className="spell-list">
        <p> {details.name}</p>
        <p> {details.age}</p>
        <p> {details.height}</p>
      </div>
    </div>
  );
};

export default Smurf;
