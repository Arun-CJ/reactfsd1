import { Component } from "react";
import ColorComponent from "./colorComponent";

class SampleClass extends Component {
  constructor(props) {
    console.log("Inside construtor method");
    super(props);
    this.state = {
      color: "red",
      name: "CJ",
      arr: [1, 2, 3, 4],
      displayColorComponent: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside get Derived state from props");
    console.log("state values", state);
  }

  componentDidMount() {
    console.log("inside component did mount");
  }

  shouldComponentUpdate() {
    console.log("inside should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, previousState) {
    console.log("inside get snapshot before update", previousState, this.state);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    const { color, name, arr, displayColorComponent } = this.state;

    console.log("Inside render method");
    return (
      <div>
        This is Class Component
        <div>Color value is : {color}</div>
        <div>Name value is : {name}</div>
        <br />
        <button onClick={() => this.setState({ color: "green", name: "DJ" })}>
          Update Color to Green
        </button>
        <button onClick={() => this.setState({ color: "red", name: "CJ" })}>
          Update Color to Red
        </button>
        <br />
        <button
          onClick={() =>
            this.setState({ displayColorComponent: !displayColorComponent })
          }
        >
          Show/Hide Color component
        </button>
        {displayColorComponent === true ? <ColorComponent /> : null}
      </div>
    );
  }
}

export default SampleClass;
