import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DisabilityPieChart = () => {
  const data = {
    labels: [
      "Mobility",
      "Visual",
      "Hearing",
      "Intellectual",
      "Psychological",
      "Speech",
      "Multiple",
      "Others",
    ],
    datasets: [
      {
        label: "PWD Count",
        data: [1075, 860, 602, 430, 387, 301, 322, 323],
        backgroundColor: [
          "#2563EB", // Mobility - blue-600
          "#10B981", // Visual - emerald-500
          "#06B6D4", // Hearing - cyan-500
          "#4F46E5", // Intellectual - indigo-600
          "#F97316", // Psychological - orange-500
          "#F43F5E", // Speech - rose-500
          "#475569", // Multiple - slate-600
          "#71717A", // Others - zinc-500
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            family: "Poppins",
            size: 13,
          },
        },
      },
    },
    layout: {
      padding: {
        top: 20, // ⬅️ Add padding between legend and chart
      },
    },
  };

  return (
    <div className="card shadow-md p-4 border border-gray-200 rounded-lg pb-13">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        By Disability Type
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DisabilityPieChart;
