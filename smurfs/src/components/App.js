import React, { useEffect  } from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "../components/smurfForm";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";
import "./App.css";

function App({ fetchSmurfs, loadingSmurfs, errorMessage }) {
  
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>SMURFS! With Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div className="spell-list">
          {!loadingSmurfs ? <SmurfList /> : <div>...loading Smurfs</div>}
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
          <SmurfForm />
        </div>
        <div className="spell-list">
          <SmurfList />
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
