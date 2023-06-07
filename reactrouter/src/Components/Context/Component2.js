import { useContext } from "react";
import Component3 from "./Component3";
import { NameContext } from "./SampleContext";

const Component2 = () => {
  const user = useContext(NameContext);
  return (
    <>
      Component 2 : The calue of user is {user}
      <Component3 />
    </>
  );
};

export default Component2;
