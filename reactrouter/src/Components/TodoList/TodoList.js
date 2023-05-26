import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemData, setSelectedItemData] = useState("");

  const handleTodo = () => {
    setTodoList([...todoList, todoItem]);
  };

  const handleEdit = (data, idx) => {
    setSelectedItemData(data);
    setSelectedItem(idx);
  };

  const handleSave = (data, idx) => {
    setSelectedItem(null);
    console.log(data, idx, selectedItemData, todoList);
    let list = todoList;
    list[idx] = selectedItemData;
    setTodoList(list);
  };

  const handleDelete = (data, idx) => {
    console.log(data, idx);
    const filteredList = todoList.filter(
      (item, itemIndex) => itemIndex !== idx
    );
    console.log(filteredList);
    setTodoList(filteredList);
    // console.log(arr2);
    // console.log(todoList.());
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
                  {item}
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
