import { Component } from "react";
import ColorComponent from "./ColorComponent";
import NameComponent from "./NameComponent";

class SampleClass extends Component {
  constructor(props) {
    console.log("Inside construtor method");
    super(props);
    this.state = {
      color: "red",
      name: "CJ",
      arr: [1, 2, 3, 4],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside get Derived state from props");
  }

  componentDidMount() {
    console.log("inside component did mount");
  }

  render() {
    const { color, name, arr } = this.state;

    console.log("Inside render method");
    return (
      <div>
        This is Class Component
        <ColorComponent arrayValues={arr} color={color} name={name} />
        <NameComponent name={name} />
        <button onClick={() => this.setState({ color: "green", name: "DJ" })}>
          Update Color to Green
        </button>
        <button onClick={() => this.setState({ color: "red", name: "CJ" })}>
          Update Color to Red
        </button>
      </div>
    );
  }
}

export default SampleClass;
