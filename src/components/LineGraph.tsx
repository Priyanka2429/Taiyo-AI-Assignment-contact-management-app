import axios from "axios";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x-axis
  LinearScale, // y-axis
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const fetchCovidCases = () => {
  return axios.get(
    `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  );
};

const LineGraph: React.FC = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "covid-cases",
    fetchCovidCases,
    {
      cacheTime: 1000 * 60 * 10.5,
      staleTime: 1000 * 60 * 10.5,
      refetchOnWindowFocus: false,
      refetchInterval: 1000 * 60 * 10.5,
      refetchIntervalInBackground: true,
    }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  const chartData = {
    labels:
      data &&
      Object.keys(data?.data?.cases)?.map(
        (item) => new Date(item).toISOString().split("T")[0]
      ),
    datasets: [
      {
        label: "Cases per day",
        data: data && Object.values(data?.data?.cases),
        borderColor: "black",
        backgroundColor: "red",
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Number of Cases" },
        },
      }}
    />
  );
};

export default LineGraph;
