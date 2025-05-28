import { FaSquare } from "react-icons/fa";

const disabilityData = [
  { label: "Mobility", value: 1075, color: "#2563eb" },
  { label: "Visual", value: 860, color: "#10b981" },
  { label: "Hearing", value: 602, color: "#06b6d4" },
  { label: "Intellectual", value: 430, color: "#4f46e5" },
  { label: "Psychological", value: 387, color: "#f97316" },
  { label: "Speech", value: 301, color: "#f43f5e" },
  { label: "Multiple", value: 322, color: "#475569" },
  { label: "Others", value: 323, color: "#71717a" },
];

const ageGroupData = [
  { label: "0–17", value: 700, color: "#3b82f6" },
  { label: "18–35", value: 950, color: "#0ea5e9" },
  { label: "36–59", value: 1300, color: "#6366f1" },
  { label: "60+", value: 1300, color: "#8b5cf6" },
];

const SummaryList = ({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) => {
  const sorted = [...data].sort((a, b) => b.value - a.value);
  return (
    <div className="space-y-1 mt-2">
      {sorted.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-2 text-sm rounded-md px-3 py-1"
          style={{ backgroundColor: item.color + "20" }}
        >
          <FaSquare className="text-xs" style={{ color: item.color }} />
          <span className="flex-1">{item.label}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function SummaryCards() {
  const disabilityTotal = disabilityData.reduce((sum, x) => sum + x.value, 0);
  const ageGroupTotal = ageGroupData.reduce((sum, x) => sum + x.value, 0);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Disability Summary */}
      <div className="card shadow-md border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-800">
          Disability Type Summary
        </h2>
        <p className="text-sm text-gray-600">
          The pie chart visualizes <strong>{disabilityTotal}</strong> PWDs
          across 8 disability categories.
        </p>
        <SummaryList data={disabilityData} />
      </div>

      {/* Age Group Summary */}
      <div className="card shadow-md border border-gray-200 p-4">
        <h2 className="text-base font-semibold text-gray-800">
          Age Group Summary
        </h2>
        <p className="text-sm text-gray-600">
          There are <strong>{ageGroupTotal}</strong> registered PWDs grouped by
          age.
        </p>
        <SummaryList data={ageGroupData} />
      </div>
    </div>
  );
}
