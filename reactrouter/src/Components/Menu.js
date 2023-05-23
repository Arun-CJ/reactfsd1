import { Link } from "react-router-dom";

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
          <Link to="/user-list">Users List</Link>
        </li>
        <li style={{ marginRight: "15px" }}>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
