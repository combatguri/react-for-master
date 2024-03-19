import { createBrowserRouter } from "react-router-dom";

/**
 * extend Router
 */
import usersRouter from "./users";
import coinRouter from "./coin";

/**
 * import Views
 */
import App from "../App";
import Home from "../screens/Home";
import About from "../screens/About";

/**
 * import Global Views
 */
import NotFound from "../screens/NotFound";
import CoinList from "../screens/coin/Coins";
import CoinInformation from "../screens/coin/Coin";

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
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
