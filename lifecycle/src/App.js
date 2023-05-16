import logo from "./logo.svg";
import "./App.css";
import SampleClass from "./components/classComponent";
import Counter from "./components/counter";
import CounterComponent from "./components/counterFunction";

function App() {
  return (
    <div className="App">
      React Component Life Cycle
      {/* <SampleClass /> */}
      <CounterComponent />
    </div>
  );
}

export default App;
