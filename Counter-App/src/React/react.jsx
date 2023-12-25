import React from "react";
import "../App.css";

class CounterApp extends React.Component {
  state = {
    count: 0,
  };

  Dec = () => {
    if (this.state.count === 0) {
      alert("The count is already equal to zero");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };

  Inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.Inc}>+</button>
          <button onClick={this.Dec}>-</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
