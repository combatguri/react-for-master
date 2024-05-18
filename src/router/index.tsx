import { createBrowserRouter } from "react-router-dom";

/**
 * extend Router
 */
import usersRouter from "./users";
import coinRouter from "./coin";
import todoRouter from "./todo";

/**
 * import Views
 */
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

/**
 * import Global Views
 */
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        usersRouter,
      ],
      errorElement: <NotFound />,
    },
    coinRouter,
    todoRouter,
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
