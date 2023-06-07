import { useContext } from "react";
import { NameContext } from "./SampleContext";

const Component4 = () => {
  const user = useContext(NameContext);
  return (
    <>
      <p>Component 4 : The value of user is :{user}</p>
    </>
  );
};

export default Component4;
