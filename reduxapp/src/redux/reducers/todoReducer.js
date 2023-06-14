import { ADD_TODO } from "../actions/actionTypes";

const instialState = {
  todoList: [],
  todoname: "",
};

export default function (state = instialState, actions) {
  switch (actions.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.push(actions.payload),
      };

    default:
      return state;
  }
}
