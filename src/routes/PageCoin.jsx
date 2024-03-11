import { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";

function PageCoin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Coins</h1>
      {loading ? <h1>loading</h1> : null}
      <ul>
        {coins.map((coin) => {
          return <CoinCard key={coin.id} coin={coin} />;
        })}
      </ul>
    </div>
  );
}

export default PageCoin;
