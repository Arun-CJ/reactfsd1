import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import setAuthToken from "./SetAuthToken";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (user.password.length < 3) {
    //   alert("Password length should be more than 3 characters");
    // } else if (user.email === "ibridge@gmail.com" && user.password === "123") {
    //   sessionStorage.setItem("userEmail", user.email);
    //   navigate("/dashboard");
    // } else {
    //   alert("Email or password does not match");
    // }
    axios
      .post("/api/auth/loginuser", user)
      .then((res) => {
        alert(res.data.message);
        const token = res?.data?.token;
        setAuthToken(token);
        localStorage.setItem("todoapp", token);
        navigate("/todolist");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <form
      style={{ width: "600px", margin: "auto" }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => handleInputs(e)}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
