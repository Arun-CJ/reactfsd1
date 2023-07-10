import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

let currentTime;
let decoded;

if (localStorage.todoapp) {
  const token = localStorage.getItem("todoapp");

  decoded = jwt_decode(token);
  console.log(decoded);

  currentTime = Date.now() / 1000;
  console.log(new Date(currentTime), new Date(decoded.exp * 1000));
  console.log(currentTime / 1000);
}

const ProtectedRoute = ({ children }) => {
  if (!localStorage.todoapp || decoded?.exp < currentTime) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectedRoute;
