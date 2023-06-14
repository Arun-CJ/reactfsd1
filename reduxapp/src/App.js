import logo from "./logo.svg";
import "./App.css";
import SampleComponent from "./components/sampleComponent";
import Todo from "./components/todoList";

function App() {
  return (
    <div className="App">
      <p>Redux Application</p>
      <SampleComponent />
      <Todo />
    </div>
  );
}

export default App;
