import "./App.css";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import UserList from "./Components/UserList";
import UserInfo from "./Components/UserInfo";
import NotFound from "./Components/Notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-info/:userid" element={<UserInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
