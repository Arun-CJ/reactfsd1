import "./App.css";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import UserList from "./Components/UserList";
import UserInfo from "./Components/UserInfo";
import NotFound from "./Components/Notfound";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/users" element={<UserList />} />
        <Route path="/users/:userid" element={<UserInfo />} />
        <Route path="/users/adduser" element={<UserList />} />
        <Route path="/users/deleteuser" element={<UserList />} /> */}
        <Route path="/users">
          <Route index element={<UserList />} />
          <Route path=":userid" element={<UserInfo />} />
          <Route path="adduser" element={<UserList />} />
        </Route>

        <Route path="/todolist" element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
