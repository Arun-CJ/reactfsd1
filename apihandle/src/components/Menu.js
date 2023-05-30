import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="nav navbar-nav">
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
            to="/postlist"
          >
            Post List
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
            to="/contact-us"
          >
            Contact Us
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/sign-in"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Sign In
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/users"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
            state="cj"
          >
            Users List
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/todolist"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Todo List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
