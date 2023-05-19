import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button className="btn btn-primary" onClick={() => navigate("/about-us")}>
        Go to About Us
      </button>
    </div>
  );
};

export default Home;
