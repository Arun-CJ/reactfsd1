import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import setAuthToken from "./SetAuthToken";
import jwt_decode from "jwt-decode";
import { UserContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../features/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authSlice } = useSelector((state) => state);
  // const userDetails = useContext(UserContext);

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let currentTime;
    let decoded;

    if (localStorage.todoapp) {
      const token = localStorage.getItem("todoapp");

      decoded = jwt_decode(token);
      // console.log(decoded);

      currentTime = Date.now() / 1000;
      if (!localStorage.todoapp || decoded?.exp < currentTime) {
      } else {
        if (authSlice?.isAuthenticated) {
          navigate("/todolist");
        }
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiData = {
      user,
      navigate,
    };
    dispatch(signInUser(apiData));
    // if (user.password.length < 3) {
    //   alert("Password length should be more than 3 characters");
    // } else if (user.email === "ibridge@gmail.com" && user.password === "123") {
    //   sessionStorage.setItem("userEmail", user.email);
    //   navigate("/dashboard");
    // } else {
    //   alert("Email or password does not match");
    // }
    // axios
    //   .post("/api/auth/loginuser", user)
    //   .then(async (res) => {
    //     alert(res.data.message);
    //     const token = res?.data?.token;
    //     setAuthToken(token);
    //     //fetch logged in user details
    //     const userData = await axios.get("/api/user/getUserInfo");
    //     // userDetails?.setUser(userData?.data?.data);
    //     console.log(userData);
    //     localStorage.setItem("todoapp", token);
    //     navigate("/todolist");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.response.data.message);
    //   });
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
