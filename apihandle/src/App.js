import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postlist" element={<Posts />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost/:postid" element={<EditPost />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
