import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import SampleClass from "./components/Dashboard/classComponent";

function App() {
  const websiteName = "FirstApp";

  return (
    <div>
      <Header name={websiteName} menus="Home" />
      <h1>Sample React App component</h1>
      <SampleClass />
    </div>
  );
}

export default App;
