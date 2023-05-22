import users from "./users";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  console.log(users);
  return (
    <div className="container">
      <h3>User List</h3>
      <div className="row">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="col-4"
              style={{
                borderStyle: "solid",
                padding: "5px 5px 5px 5px",
              }}
            >
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.phone}</p>
              <p>{user.email}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/user-info/${user.id}`)}
              >
                View User Info
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
