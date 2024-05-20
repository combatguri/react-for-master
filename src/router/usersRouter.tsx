/**
 * import Views
 */
import App from "../App";
import User from "../pages/users/User";
import Followers from "../pages/users/Followers";
import Form from "../pages/users/join/Form";

/**
 * import Global Views
 */
import NotFound from "../pages/NotFound";

const usersRouter = {
  path: "/users",
  element: <User />,
  errorElement: <NotFound />,
  children: [
    {
      path: "",
      element: <User />,
      children: [
        {
          path: "followers",
          element: <Followers />,
        },
      ],
    },
    {
      path: ":id",
      element: <User />,
      children: [
        {
          path: "followers",
          element: <Followers />,
        },
      ],
    },
    {
      path: "join",
      element: <Form />,
    },
  ],
};

export default usersRouter;
