import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../features/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const todoItem = useRef("");

  const handleAdd = () => {
    console.log(todoItem.current.value, todoItem);
    const data = {
      id: Date.now(),
      name: todoItem.current.value,
    };
    dispatch(addTodo(data));
  };

  return (
    <div>
      <p>Todo App</p>
      <p>
        <input name="todo" ref={todoItem} />{" "}
        <button onClick={() => handleAdd()}>Add Todo</button>
      </p>
      <div>
        {todo.todoList?.map((item) => {
          return (
            <div key={item.id}>
              {item.name}{" "}
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                Delete Item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
