import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { useSelector } from "react-redux";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState("");
  const { authSlice } = useSelector((state) => state);
  const navigate = useNavigate();
  // const userDetails = useContext(UserContext);
  const userDetails = authSlice?.user;

  const getTodoList = () => {
    // const token = localStorage.getItem("todoapp");
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    axios
      .get(`/api/todo/getUserTodoList/${userDetails?.user?.id}`)
      .then((res) => {
        setTodoList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodoList();
  }, [userDetails?.user?.id]);

  const handleTodo = () => {
    // setTodoList([...todoList, todoItem]);
    const data = {
      name: todoItem,
      userId: userDetails?.user?.id,
    };
    axios
      .post("/api/todo/addTodoItem", data)
      .then((res) => {
        alert(res.data.message);
        getTodoList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (data, idx) => {
    setSelectedItemData(data.name);
    setSelectedItem(idx);
  };

  const handleSave = (data, idx) => {
    setSelectedItem(null);
    console.log(data);

    const apiData = {
      name: selectedItemData,
      id: data?.todoId,
    };
    axios
      .put("/api/todo/updateTodoItem", apiData)
      .then((res) => {
        alert(res.data.message);
        getTodoList();
      })
      .catch((err) => {
        console.log(err);
      });
    // let list = todoList;
    // list[idx] = selectedItemData;
    // setTodoList(list);
  };

  const handleDelete = (data, idx) => {
    // console.log(data, idx);
    // const filteredList = todoList.filter(
    //   (item, itemIndex) => itemIndex !== idx
    // );
    // console.log(filteredList);
    // setTodoList(filteredList);
    // console.log(arr2);
    // console.log(todoList.());
    axios
      .delete(`/api/todo/deleteTodoItem/${data.todoId}`)
      .then((res) => {
        alert(res.data.message);
        getTodoList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Todo List</h3>
      <div>
        <input
          type="text"
          name="todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className="m-3 btn btn-primary" onClick={() => handleTodo()}>
          Add ToDo
        </button>
        <button className="m-3 btn btn-danger" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <div className="container">
        {todoList?.map((item, index) => {
          return (
            <div key={index}>
              {selectedItem === index ? (
                <p>
                  <input
                    type="text"
                    name="edittodo"
                    value={selectedItemData}
                    onChange={(e) => setSelectedItemData(e.target.value)}
                  />
                  <button
                    className="m-3 btn btn-warning"
                    onClick={() => handleSave(item, index)}
                  >
                    Save
                  </button>
                </p>
              ) : (
                <p>
                  {item.name}
                  <button
                    className="m-3 btn btn-warning"
                    onClick={() => handleEdit(item, index)}
                  >
                    Edit
                  </button>

                  <button
                    className="m-3 btn btn-danger"
                    onClick={() => handleDelete(item, index)}
                  >
                    Delete
                  </button>
                </p>
              )}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
