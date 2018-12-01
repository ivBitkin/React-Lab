//Impport the react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

function getTime() {
  return new Date().toLocaleTimeString();
}
//Create a react component
const App = () => {
  const buttonText = { test: "Click Me!" };
  const labelText = "Enter name:";
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" for="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.test}</button>
      <div>
        <h2>Current Time</h2>
        <h4>{getTime()}</h4>
      </div>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById("root"));
