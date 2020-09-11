import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf, fetchSmurfs } from "../actions/smurfActions";

const initFormValues = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const [formValues, setFormValues] = useState(initFormValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

  }

  const addSmurf = (e) => {
    e.preventDefault();
    const newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: `${formValues.height}cm`,
    }
    postSmurf(newSmurf);
    setFormValues(initFormValues);  
};


return (
  <div>
    <h2> Smurf Application </h2>
    <form>
      <label>
        Name : &nbsp;
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={onInputChange}
        />
      </label>
      <label>
        Age :  &nbsp;
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formValues.age}
          onChange={onInputChange}
        />
      </label>
      <label>
        Height :  &nbsp;
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={formValues.height}
          onChange={onInputChange}
        />
      </label>
      <button type="submit" onClick={addSmurf}>
        Submit 
      </button>
    </form>
  </div>
);
  }

export default connect(null, {postSmurf, fetchSmurfs})(SmurfForm);