import { useState, useEffect } from "react";
import "./counter.css";

const CounterComponent = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [name, setName] = useState("Ibridge");
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(counterValue);
  }, [counterValue, name]);

  useEffect(() => {
    console.log("component loaded");
  }, []);

  //   useEffect(() => {
  //     if (name === "Arun") {
  //       alert("Name found");
  //     }
  //   }, [name]);

  const handleInput = (event) => {
    console.log("clicked", event.target.value);
    setAddress(event.target.value);
  };

  const counterButtonStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bolder",
    marginRight: "5px",
  };

  return (
    <div>
      Counter Application
      <div>
        <button
          className="increment"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          Count + 1
        </button>

        <button
          className="decrement"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          Count - 1
        </button>
        <button onClick={() => setName("Arun")}>Change Name</button>
      </div>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(event) => handleInput(event)}
      />
      <br />
      Counter Value : {counterValue}
      <br />
      Name value: {name}
      <br />
      Address value : {address}
    </div>
  );
};

export default CounterComponent;
