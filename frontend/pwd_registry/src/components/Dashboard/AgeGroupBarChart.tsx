import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const AgeGroupBarChart = () => {
  const data = {
    labels: ["0-17", "18-35", "36-59", "60+"],
    datasets: [
      {
        label: "PWDs by Age Group",
        data: [700, 950, 1300, 1300],
        backgroundColor: "#3b82f6",
      },
    ],
  };
  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: { legend: { display: false } },
  };
  return (
    <div className="card shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">PWDs by Age Group</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
export default AgeGroupBarChart;
