import { Component } from "react";

class ColorComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Component has been removed");
  }

  render() {
    return <div>This is color component</div>;
  }
}

export default ColorComponent;
