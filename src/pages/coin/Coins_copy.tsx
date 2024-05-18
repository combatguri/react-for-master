/**
 * All coins
 * CoinDetail.tsx (coin/:id)
 *
 * /btc/information
 * /btc/chart
 * https://api.coinpaprika.com/v1/coins
 *
 */

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

import { useQuery } from "react-query";
import Api from "../../api";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1em;
`;

const CoinWrapper = styled.div`
  height: 100%;
  width: 100%;
  ul {
    padding: 1em 0;
    li {
      padding: 1em;
      margin-bottom: 0.725em;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 0.725em;

      &:hover {
        a {
          color: ${(p) => p.theme.colors.orange};
        }
      }

      a {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.gray900};
        img {
          height: 1.25em;
          margin-right: 0.5em;
        }
      }
    }
  }
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(`https://api.coinpaprika.com/v1/coins`);
  //     const json = await res.json();
  //     const coin100 = json.slice(0, 100);
  //     setCoins(coin100);
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading, data } = useQuery<ICoin[]>(
    "allCoins",
    Api.coins.fetchCoinList
  );

  return (
    <Container>
      <h2>코인</h2>

      <CoinWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <ul>
            {data?.slice(0, 100).map((coin) => (
              <li key={coin.id}>
                <Link to={`${coin.id}`} state={coin}>
                  <img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                    alt={`${coin.id}`}
                  />
                  {coin.id}, {coin.name} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CoinWrapper>
    </Container>
  );
}

export default Coins;
