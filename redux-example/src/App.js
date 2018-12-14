import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="test">
        <input type="text" />
        <button>Add Track</button>
        <ul>
          {this.props.testStore.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
