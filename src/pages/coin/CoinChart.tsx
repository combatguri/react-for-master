// Router
import { useLocation, useNavigate } from "react-router-dom";
// Interface
import { ICoin, IRouteState } from "./Interface";
// chart Api 라이브러리
import ApexChart from "react-apexcharts";
// UI
import Loading from "../../components/Loading";
// interface IOutletContext {
//   coinId: string;
// }

interface IRoute extends IRouteState {
  state: {
    coinData: ICoin;
  };
}

function CoinChart() {
  // const { coinId } = useOutletContext<IOutletContext>();
  // console.log("ctx", coinId);

  const {
    state: { coinData },
  } = useLocation() as IRoute;
  const tickers = coinData.tickers;
  const isLoading = !coinData;

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ApexChart
            // https://apexcharts.com/docs/chart-types/line-chart/
            // https://apexcharts.com/react-chart-demos/line-charts/gradient/
            type="line"
            series={[
              {
                name: "price",
                data: tickers.map((ticker) => ticker.volume) ?? [],
              },
              // {
              //   name: "price",
              //   data:
              //     data?.map((price: IHistorical) => parseFloat(price.close)) ??
              //     [],
              // },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
                // stepSize: 10,
                // forceNiceScale: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                // type: "datetime",
                // categories: tickers.map((ticker) => ticker.timestamp),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CoinChart;
