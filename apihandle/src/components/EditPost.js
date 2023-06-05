import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const [formData, setFormData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [insertedId, setInsertedId] = useState(null);
  const params = useParams();

  useEffect(() => {
    console.log("inside useeffect");
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
      .then((response) => response.json())
      .then((json) => setFormData(json))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", formData);

    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${params.postid}`,
        formData
      )
      .then((response) => {
        setUpdatedData(response.data);
      })
      .catch((err) => console.log("err", err));

    // fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`, {
    //   method: "PUT",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => setUpdatedData(json))
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
            value={formData.userId}
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
            value={formData.title}
            onChange={(e) => handleInputs(e)}
            name="title"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Body Content{" "}
          </label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleInputs(e)}
            value={formData.body}
            name="body"
            rows={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>
        Updated Title: {updatedData.title}
        <br />
        Updated Body: {updatedData.body}
        <br />
        Updated User Id: {updatedData.userId}
      </div>
    </div>
  );
};

export default EditPost;
