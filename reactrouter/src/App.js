import { createContext, useEffect, useState } from "react";
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
import SampleContext from "./Components/Context/SampleContext";
import SideBar from "./Components/Sidebar";
import SignUp from "./Components/signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./features/authSlice";

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.todoapp) {
      dispatch(getUserInfo());
      // axios.get("/api/user/getUserInfo").then((res) => {
      //   // console.log(res.data.data);
      //   setUser(res?.data?.data);
      // });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <SideBar>
          {/* <Menu /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
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

            <Route
              path="/todolist"
              element={
                <ProtectedRoute>
                  <TodoList />
                </ProtectedRoute>
              }
            />
            <Route path="/samplecontext" element={<SampleContext />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SideBar>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
