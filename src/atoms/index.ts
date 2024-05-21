import { atom } from "recoil";

import TodoAtom from "./todo";

export const isUiModeAtom = atom({
  key: "isUiMode",
  default: "light",
});

const Atom = {
  todoAtom: TodoAtom,
};

export default Atom;
