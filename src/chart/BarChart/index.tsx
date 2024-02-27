import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import useViewModel from "./viewModel";
import { options } from "./constants/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartExample = () => {
  const { data } = useViewModel();

  return (
    <div className="mx-auto mt-60 w-1/2 h-80">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChartExample;
