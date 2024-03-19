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
import { ICoins } from "./Interface";

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

const ImgWrapper = styled.div`
  padding: 1em 0;
  > span {
    display: inline-block;
    width: 30%;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);

    img {
      display: block;
      width: 100%;
    }
  }
`;

function Coins() {
  const { isLoading, data } = useQuery<ICoins[]>(
    "allCoins",
    Api.coins.fetchCoinList
  );

  return (
    <Container>
      <h2>코인</h2>
      <ImgWrapper>
        <span>
          <img
            src="https://static.coingecko.com/s/coingecko-branding-guide-8447de673439420efa0ab1e0e03a1f8b0137270fbc9c0b7c086ee284bd417fa1.png"
            alt=""
          />
        </span>
      </ImgWrapper>

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
