/**
 * import Global Views
 */
// import { Outlet } from "react-router-dom";
// import Error from "../screens/Error";

/**
 * import Views
 */
import App from "../App";
import Coins from "../pages/coin/Coins";
import Coin from "../pages/coin/Coin";
import CoinPrice from "../pages/coin/CoinPrice";
import CoinChart from "../pages/coin/CoinChart";

const coinRouter = {
  path: "/coin",
  element: <App />,
  children: [
    {
      path: "",
      element: <Coins />,
    },
    {
      path: ":coinId",
      element: <Coin />,
      children: [
        {
          path: "price",
          element: <CoinPrice />,
        },
        {
          path: "chart",
          element: <CoinChart />,
        },
      ],
    },
  ],
};

export default coinRouter;
