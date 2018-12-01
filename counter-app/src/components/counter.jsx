import React, { Component } from "react";
import "../styles/counter.css";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <div className={this.getBadgeClasses()}>{this.formatCount()}</div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn btn-success m-2 "
        >
          + 1
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger "
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "test badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
