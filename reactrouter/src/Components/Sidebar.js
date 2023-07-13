import { createContext, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const ThemeContext = createContext();

const SideBar = (props) => {
  const [themeColor, setThemeColor] = useState("light");
  const user = useContext(UserContext);
  const navigate = useNavigate();
  // console.log(user, "inside sidebar");

  const handleToggleButton = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }
  };

  const hanadleLogout = () => {
    localStorage.removeItem("todoapp");
    user?.setUser({});
    navigate("/sign-in");
  };

  return (
    <ThemeContext.Provider value={themeColor}>
      <div className="container-fluid">
        <div className="row flex-nowrap" style={{ height: "100vh" }}>
          <div className="col-auto bg-dark">
            <ul className="nav flex-column">
              {user?.user?.name && (
                <li style={{ marginRight: "15px" }} className="mb-2">
                  <p style={{ color: "blue" }}>Name: {user?.user?.name}</p>
                </li>
              )}
              <li style={{ marginRight: "15px" }} className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li style={{ marginRight: "15px" }} className="mb-2">
                <Link to="/about-us">About Us</Link>
              </li>
              <li style={{ marginRight: "15px" }} className="mb-2">
                <Link to="/contact-us">Contact Us</Link>
              </li>
              {!user?.user?.name && (
                <>
                  {" "}
                  <li style={{ marginRight: "15px" }} className="mb-2">
                    <Link to="/sign-up">Signup</Link>
                  </li>
                  <li style={{ marginRight: "15px" }} className="mb-2">
                    <Link to="/sign-in">Sign In</Link>
                  </li>
                </>
              )}
              <li style={{ marginRight: "15px" }} className="mb-2">
                <NavLink
                  to="/users"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                  state="cj"
                >
                  Users List
                </NavLink>
              </li>
              <li style={{ marginRight: "15px" }} className="mb-2">
                <NavLink
                  to="/todolist"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  Todo List
                </NavLink>
              </li>
              <li style={{ marginRight: "15px" }} className="mb-2">
                <NavLink
                  to="/samplecontext"
                  style={({ isActive }) => ({ color: isActive ? "red" : "" })}
                >
                  Context Api
                </NavLink>
              </li>
              <li style={{ marginRight: "15px" }} className="mb-2">
                <p
                  className="form-check form-switch"
                  style={{ marginLeft: "40%" }}
                >
                  <label>Light</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    // id="flexSwitchCheckDefault"
                    onChange={(e) => handleToggleButton(e)}
                  />
                  <label>Dark</label>
                </p>
              </li>
              {user?.user?.id && (
                <li style={{ marginRight: "15px" }} className="mb-2">
                  <button
                    className="btn btn-warning"
                    onClick={() => hanadleLogout()}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          <div>{props.children}</div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default SideBar;

export { ThemeContext };
