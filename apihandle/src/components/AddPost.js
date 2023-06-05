import { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    userId: 1,
  });
  const [insertedId, setInsertedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);
    const data = {
      title: formData.title,
      body: formData.bodyContent,
      userId: formData.userId,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response.data);
        setInsertedId(response.data.id);
      })
      .catch((err) => console.log(err));
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(responseData);
    //     setInsertedId(responseData.id);
    //   })
    //   .catch((error) => console.log("Error while adding post data", error));
  };

  const handleInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e);
  };

  return (
    <div className="container">
      <form
        style={{ width: "600px", margin: "auto" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            User Id
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userId"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleInputs(e)}
            name="title"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Body Content{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleInputs(e)}
            name="bodyContent"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>New Id inserted: {insertedId}</div>
    </div>
  );
};

export default AddPost;
