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
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: any;
  last_updated: string;
}

function Coins() {
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
                  <img src={coin.image} alt={coin.id} />
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
