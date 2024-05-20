import App from "../App";
import Todo from "../pages/todo/Todo";
import TodoList from "../pages/todo/TodoList";

const todoRouter = {
  path: "/todo",
  element: <App />,
  children: [
    {
      path: "",
      element: <TodoList />,
    },
    {
      path: ":id",
      element: <Todo />,
    },
  ],
};

export default todoRouter;
