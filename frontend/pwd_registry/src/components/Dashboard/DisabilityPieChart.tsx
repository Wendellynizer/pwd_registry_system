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
        label: "By Disability Type",
        data: [1075, 860, 602, 430, 387, 301, 322, 323],
        backgroundColor: [
          "#2563eb",
          "#f97316",
          "#facc15",
          "#22c55e",
          "#8b5cf6",
          "#ec4899",
          "#14b8a6",
          "#64748b",
        ],
      },
    ],
  };

  return (
    <div className="card shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">By Disability Type</h2>
      <Pie data={data} />
    </div>
  );
};

export default DisabilityPieChart;
