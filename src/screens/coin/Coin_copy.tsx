import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  PathMatch,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import Loading from "../../components/Loading";
import styled from "styled-components";

import Api from "../../api";
import { useQuery } from "react-query";

// interface IRouteParams {
//   coinId: string;
//   // other properties...
// }
/**
 * Route params Interface
 */
interface IRouteParams extends Record<string, string | undefined> {
  coinId: string;
  // other properties...
}

/**
 * state fro useLocation Interface
 */
interface IRouteState {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: ICoinInterface;
}

interface ICoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

/**
 * InfoData interface
 */
interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  // tags: ITag[];
  // team: ITeam[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  // links: ILinks;
  // links_extended: ILinksextended;
  // whitepaper: IWhitepaper;
  first_data_at: string;
  last_data_at: string;
}
/*
interface ITag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}
interface ITeam {
  id: string;
  name: string;
  position: string;
}
interface ILinks {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
}
interface IWhitepaper {
  link: string;
  thumbnail: string;
}
interface ILinksextended {
  url: string;
  type: string;
  stats?: IStats;
}
interface IStats {
  subscribers?: number;
  contributors?: number;
  stars?: number;
  followers?: number;
}
*/

/**
 * PriceData Interface
 */
interface ITickersData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: Quotes;
}
interface Quotes {
  USD: USD;
}
interface USD {
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_15m: number;
  percent_change_30m: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_1y: number;
  ath_price: number;
  ath_date: string;
  percent_from_price_ath: number;
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: ${(props) => props.theme.colors.teal};
  margin-top: 0.5em;
  margin-bottom: 0.725em;
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.cyan : props.theme.colors.gray100};
  a {
    display: block;
  }
`;

function Coin() {
  // url params
  const params = useParams<IRouteParams>();
  const { coinId } = params;

  // injecton state in Coins.tsx
  const { state } = useLocation() as IRouteState;

  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<IInfoData>();
  // const [priceInfo, setPriceInfo] = useState<IPriceData>();

  // const priceMatch = useMatch("coin/:coinId/price");
  const priceMatch: PathMatch<"coinId"> | null = useMatch("coin/:coinId/price");
  const chartMatch: PathMatch<"coinId"> | null = useMatch("coin/:coinId/chart");

  // const chartMatch: PathMatch<"coinId"> | null = useMatch("/:coinId/chart");

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //     ).json();
  //     const priceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //     ).json();

  //     // console.log(infoData, priceData);

  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info", coinId],
    () => Api.coins.fetchCoinInfo(coinId!)
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ITickersData>(["tickers", coinId], () =>
      Api.coins.fetchCoinTickers(coinId!)
    );
  const loading = infoLoading || tickersLoading;

  return (
    <div>
      <Title>{state?.name || coinId || "Loading"}</Title>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/coin/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/coin/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Outlet />
        </>
      )}
    </div>
  );
}

export default Coin;
