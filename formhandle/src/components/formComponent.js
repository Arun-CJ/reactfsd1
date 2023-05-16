import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);
  };

  const handleInput = (e) => {
    // console.log({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value, e.target.name, e.target.type);
  };
  return (
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
  );
};

export default FormComponent;
