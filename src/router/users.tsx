/**
 * import Views
 */
import App from "../App";
import User from "../screens/users/User";
import Followers from "../screens/users/Followers";

/**
 * import Global Views
 */
import NotFound from "../screens/NotFound";

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
  ],
};

export default usersRouter;
