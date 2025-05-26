import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const RegistrationLineChart = () => {
  const data = {
    labels: ["February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "Actual",
        data: [510, 560, 610],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.3,
        fill: false,
      },
      {
        label: "Forecast",
        data: [520, 580, 650, 720, 780, 840],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        borderDash: [5, 5],
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" as const } },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "no. of registry" },
      },
      x: { title: { display: true, text: "months" } },
    },
  };

  return (
    <div className="card shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">
        PWD Registration Forecasting
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default RegistrationLineChart;
