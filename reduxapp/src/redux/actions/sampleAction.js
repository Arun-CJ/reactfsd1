import { GET_NAMES, GET_USER_NAME } from "./actionTypes";

export const getName = () => {
  console.log(
    "Inside action dispatches to sample reducer with GET_NAMES type case"
  );
  return {
    type: GET_NAMES,
    payload: { name: "Ibridge" },
  };
};

export const getUserName = () => {
  console.log(
    "Inside action dispatches to sample reducer with GET_USER_NAME type case"
  );
  return {
    type: GET_USER_NAME,
    payload: { username: "CJ" },
  };
};
