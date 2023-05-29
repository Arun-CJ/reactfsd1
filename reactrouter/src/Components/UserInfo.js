import users from "./users";
import { useParams, useLocation } from "react-router-dom";

const UserInfo = () => {
  const params = useParams();
  const location = useLocation();
  console.log("location", location);
  console.log("params", params.userid);
  const userData = users.find((user) => user.id === parseInt(params.userid));
  console.log(userData);
  return (
    <div className="container">
      Name:<p>{userData?.name}</p>
      Username:<p>{userData?.username}</p>
      Phone<p>{userData?.phone}</p>
      Email<p>{userData?.email}</p>
      City:<p>{userData?.address.city}</p>
      company:<p>{userData?.company?.name}</p>
    </div>
  );
};

export default UserInfo;
