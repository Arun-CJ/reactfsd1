import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button className="btn btn-primary" onClick={() => navigate("/about-us")}>
        Go to About Us
      </button>
      <button className="btn btn-warning">
        <Link to="/about-us">About Us</Link>
      </button>
    </div>
  );
};

export default Home;
