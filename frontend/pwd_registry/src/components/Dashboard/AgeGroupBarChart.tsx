import { useState } from "react";
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
  const values = {
    All: [700, 950, 1300, 1300],
    Mobility: [150, 250, 400, 300],
    Visual: [100, 200, 250, 310],
    Hearing: [90, 120, 200, 192],
  };

  type FilterKey = keyof typeof values;
  const [filter, setFilter] = useState<FilterKey>("All");

  const filters: FilterKey[] = ["All", "Mobility", "Visual", "Hearing"];

  const getFilteredData = () => values[filter];

  const data = {
    labels: ["0-17", "18-35", "36-59", "60+"],
    datasets: [
      {
        label: `PWDs by Age Group (${filter})`,
        data: getFilteredData(),
        backgroundColor: [
          "#3B82F6", // blue-500
          "#0EA5E9", // sky-500
          "#6366F1", // indigo-500
          "#8B5CF6", // violet-500
        ],
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: {
          family: "Poppins",
          size: 14,
        },
        bodyFont: {
          family: "Poppins",
          size: 13,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: "#E5E7EB" },
        ticks: {
          font: {
            family: "Poppins",
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: "#374151",
          font: {
            family: "Poppins",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="card shadow-md p-4 border border-gray-200 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">By Age Group</h2>
        <select
          className="select select-bordered w-40 sm:w-48 md:w-56 text-base font-medium"
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterKey)}
        >
          {filters.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AgeGroupBarChart;
