import Smurf from "./Smurf";
import { useEffect } from "react";
import { fetchSmurfs } from "../actions/smurfActions";
import { connect } from "react-redux";
import React from 'react'

const SmurfList = (props) => {
  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <div>
      <p>List of Smurfs</p>
      {props.data.map((item) => {
        return <Smurf key={item.id} details={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
