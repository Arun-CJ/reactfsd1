import { useState } from "react";
import UserComponent from "./UserComponent";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [display, setDisplay] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsers = [...users, formData];
    console.log("submitted", formData, users, typeof users, newUsers);
    setUsers(newUsers);
  };

  const handleEdit = (data, idx) => {
    // console.log(data, idx);
    let updatedUsers = users;
    updatedUsers[idx] = data;
    // console.log(users, updatedUsers);
    setUsers(updatedUsers);
    setDisplay(false);
  };

  const handleInput = (e) => {
    // console.log({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value, e.target.name, e.target.type);
  };
  return (
    <div>
      <form
        style={{ width: "500px", margin: "auto" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={(e) => handleInput(e)}
          />
        </div>{" "}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Gender
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value={formData.gender}
              onChange={(e) => handleInput(e)}
            />{" "}
            Male
            <br />
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value={"Female"}
              onChange={(e) => handleInput(e)}
            />{" "}
            Female
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <UserComponent
        userData={users}
        editFunction={handleEdit}
        display={display}
        setDisplay={setDisplay}
      />
    </div>
  );
};

export default FormComponent;
