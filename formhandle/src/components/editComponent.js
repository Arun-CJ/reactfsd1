import { useState } from "react";

const EditComponent = (props) => {
  const { user, editFunction, index } = props;
  const [formData, setFormData] = useState(user);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          className="form-control col-sm-3"
          name="name"
          value={formData.name}
          onChange={(e) => handleInput(e)}
        />
      </td>
      <td>
        <input
          type="email"
          className="form-control col-sm-3"
          name="email"
          value={formData.email}
          onChange={(e) => handleInput(e)}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control col-sm-3"
          name="age"
          value={formData.age}
          onChange={(e) => handleInput(e)}
        />
      </td>
      <td>
        <input
          type="number"
          className="form-control col-sm-3"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => handleInput(e)}
        />
      </td>
      <td>
        {" "}
        <button onClick={() => editFunction(formData, index)}>Save</button>
      </td>
    </tr>
  );
};

export default EditComponent;
