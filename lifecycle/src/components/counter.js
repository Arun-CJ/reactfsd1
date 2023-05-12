import react, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.value >= 10) {
      //   alert("You have exceeded counter value");
    }
  }

  shouldComponentUpdate() {
    const { value } = this.state;
    if (value >= 10) {
      return false;
    } else if (value <= 0) {
      return false;
    } else {
      return true;
    }
  }

  getSnapshotBeforeUpdate(prevProps, previousState) {
    alert(`Value changed from ${previousState.value} to ${this.state.value}`);
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter
        <div>
          <button onClick={() => this.setState({ value: value + 1 })}>
            Count + 1
          </button>

          <button onClick={() => this.setState({ value: value - 1 })}>
            Count - 1
          </button>
        </div>
        Counter Value : {value}
      </div>
    );
  }
}

export default Counter;
