import { atom } from "recoil";

export const todoListAtom = atom({
  key: "todoList",
  default: [],
});

const TodoAtom = {
  todoListAtom,
};

export default TodoAtom;
