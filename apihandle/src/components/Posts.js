import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const [postlist, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("called");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPostList(json))
      .catch((err) => console.log("error in api", err));
  }, []);

  const handleDelete = (data, idx) => {
    console.log(data, idx);
    fetch("https://jsonplaceholder.typicode.com/posts/" + data.id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        alert(`Post id ${data.id} deleted successfully`);
        const filteredList = postlist.filter(
          (item, itemIndex) => itemIndex !== idx
        );
        // console.log(filteredList);
        setPostList(filteredList);
      })
      .catch((err) => console.log("error in api", err));

    // console.log(arr2);
    // console.log(todoList.());
  };

  return (
    <div className="container">
      <div className="row">
        {postlist?.map((item, index) => {
          return (
            <div className="col-sm-4">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/editpost/${item.id}`)}
                >
                  Edit Post
                </button>
              </p>
              <p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item, index)}
                >
                  Delete Post
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
