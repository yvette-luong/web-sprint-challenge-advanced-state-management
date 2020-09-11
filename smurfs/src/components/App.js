import React, { useEffect } from "react";
import SmurfList from './SmurfList'
import SmurfForm from '../components/smurfForm'
import { fetchSmurfs } from '../actions/smurfActions'
import "./App.css";

function App() {
  useEffect(()=>{
    fetchSmurfs()
  },[])
    return (
      <div className="App">
        <h1>SMURFS! With Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfForm/>
        <SmurfList/>
      </div>
    );
  
}

export default App;
