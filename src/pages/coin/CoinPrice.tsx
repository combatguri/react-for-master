import { useLocation } from 'react-router-dom';
import ApexChart from 'react-apexcharts';

import Loading from '@components/Loading';

import { ICoin, IRouteState } from './interface';

interface IRoute extends IRouteState {
    state: {
        coinData: ICoin;
    };
}

function CoinPrice() {
    const {
        state: { coinData }
    } = useLocation() as IRoute;
    const currentPrice = coinData?.market_data.current_price;
    const isLoading = !currentPrice;

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <ApexChart
                        type="line"
                        series={[
                            {
                                name: 'current',
                                data: Object.values(currentPrice)
                            }
                        ]}
                        options={{
                            theme: {
                                mode: 'dark'
                            },
                            chart: {
                                height: '100%',
                                width: '100%'
                            },
                            yaxis: {
                                show: false
                            },
                            xaxis: {
                                axisBorder: { show: false },
                                axisTicks: { show: false },
                                labels: { show: false }
                            }
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default CoinPrice;
