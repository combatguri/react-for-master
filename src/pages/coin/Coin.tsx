import { Link, Outlet, PathMatch, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { IoCaretBack } from 'react-icons/io5';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

import Api from '@/api';
import Loading from '@components/Loading';
// import { Helmet } from "react-helmet-async";

import { ICoin, IRouteState } from './Interface';
import { CoinDescription, CoinOverview, CoinOverviewItem, CoinTab, CoinTabs, CoinTitle } from './Style';

interface ICoinRouteParams {
    [key: string]: string | undefined;
    coinId: string; // coinId가 필수 매개변수인 경우
}

interface IRoute extends IRouteState {
    state: {
        id: string;
        name: string;
        symbol: string;
        rank: number;
        is_new: boolean;
        is_active: boolean;
        type: string;
    };
}

const CloseChildBox = styled.div`
    position: relative;
    z-index: 10;
    margin-bottom: 1em;

    > span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: ${(p) => p.theme.colors.gray900};
        border-radius: 999px;
        padding: 4px 30px 4px 10px;
        font-size: 10px;
        cursor: pointer;

        > svg {
            display: inline;
            line-height: 1;
            font-size: 1.2em;
            margin: 0;
            padding: 0;
        }
    }
`;

function Coin() {
    const navigate = useNavigate();

    // url params
    const params = useParams<ICoinRouteParams>();
    const { coinId } = params;

    // injecton state in Coins.tsx
    const { state } = useLocation() as IRoute;

    // const priceMatch = useMatch("coin/:coinId/price");
    const priceMatch: PathMatch<'coinId'> | null = useMatch('coin/:coinId/price');
    const chartMatch: PathMatch<'coinId'> | null = useMatch('coin/:coinId/chart');

    const { isLoading, data } = useQuery<ICoin>(['info', coinId], () => Api.coins.fetchCoinInfo(coinId!));

    const onCloseChildBox = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        navigate(`/coin/${coinId}`);
    };

    return (
        <div>
            {/* <Helmet>
        <title>타이틀</title>
      </Helmet> */}
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <CoinTitle>
                        <img src={data?.image.small} alt={data?.id} />
                        <p>{data?.name}</p>
                    </CoinTitle>
                    <CoinOverview>
                        <CoinOverviewItem>
                            <span>Rank:</span>
                            <span>{data?.market_cap_rank}</span>
                        </CoinOverviewItem>
                        <CoinOverviewItem>
                            <span>Symbol:</span>
                            <span>{data?.symbol}</span>
                        </CoinOverviewItem>
                        <CoinOverviewItem>
                            <span>Price:</span>
                            <span>{data?.market_data.current_price.usd}</span>
                        </CoinOverviewItem>
                    </CoinOverview>
                    <CoinDescription>{data?.description.en?.substr(0, 100)}</CoinDescription>
                    <CoinOverview>
                        <CoinOverviewItem>
                            <span>Total Suply:</span>
                            <span>{data?.market_data.total_supply}</span>
                        </CoinOverviewItem>
                        <CoinOverviewItem>
                            <span>Max Supply:</span>
                            <span>{data?.market_data.max_supply ?? `-`}</span>
                        </CoinOverviewItem>
                    </CoinOverview>

                    <CoinTabs>
                        <CoinTab $isActive={chartMatch !== null}>
                            <Link to={`/coin/${coinId}/chart`} state={{ coinData: data }}>
                                Chart <MdOutlineArrowRightAlt />
                            </Link>
                        </CoinTab>
                        <CoinTab $isActive={priceMatch !== null}>
                            <Link to={`/coin/${coinId}/price`} state={{ coinData: data }}>
                                Price <MdOutlineArrowRightAlt />
                            </Link>
                        </CoinTab>
                    </CoinTabs>

                    {Boolean(chartMatch) || Boolean(priceMatch) ? (
                        <CloseChildBox onClick={onCloseChildBox}>
                            <span>
                                <IoCaretBack />
                                close {Boolean(chartMatch) ? `Chart` : 'Price'}
                            </span>
                        </CloseChildBox>
                    ) : (
                        <></>
                    )}

                    <Outlet context={{ coinId: coinId }} />
                </>
            )}
        </div>
    );
}

export default Coin;
