import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="nav navbar-nav">
        <li style={{ marginRight: "15px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/about-us">About Us</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/sign-in">Sign In</Link>
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
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/samplecontext"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Context Api
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
