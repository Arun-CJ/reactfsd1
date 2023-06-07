import { createContext } from "react";
import Component1 from "./Component1";

const NameContext = createContext();

const SampleContext = () => {
  return (
    <>
      <p>Main Component</p>
      <NameContext.Provider value={"Arun"}>
        <Component1 />
      </NameContext.Provider>
    </>
  );
};

export default SampleContext;
export { NameContext };
