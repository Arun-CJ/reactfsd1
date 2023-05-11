import { Component } from "react";

class NameComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Name inside class component: {this.props.name}</div>;
  }
}

export default NameComponent;
