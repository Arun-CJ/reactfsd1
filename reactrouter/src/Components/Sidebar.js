import { Link, NavLink } from "react-router-dom";

const SideBar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap" style={{ height: "100vh" }}>
        <div className="col-auto bg-dark">
          <ul className="nav flex-column">
            <li style={{ marginRight: "15px" }} className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li style={{ marginRight: "15px" }} className="mb-2">
              <Link to="/about-us">About Us</Link>
            </li>
            <li style={{ marginRight: "15px" }} className="mb-2">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li style={{ marginRight: "15px" }} className="mb-2">
              <Link to="/sign-in">Sign In</Link>
            </li>
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
          </ul>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default SideBar;
