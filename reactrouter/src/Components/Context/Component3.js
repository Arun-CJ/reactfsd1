import Component4 from "./Component4";
import { NameContext } from "./SampleContext";

const Component3 = () => {
  return (
    <>
      <p>Component 3</p>
      <NameContext.Consumer>{(value) => <p>{value}</p>}</NameContext.Consumer>
      <Component4 />
    </>
  );
};

export default Component3;
