import axios from "axios";

const getTodoList = (userId) => {
  axios
    .get(`/api/todo/getUserTodoList/${userId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return { message: "Failed to fetch user tasks" };
    });
};
const addTodoItem = (data) => {
  axios
    .post("/api/todo/addTodoItem", data)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getTodoList, addTodoItem };
