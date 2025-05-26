import InfoCards from "../components/Dashboard/InfoCards";
import DisabilityPieChart from "../components/Dashboard/DisabilityPieChart";
import AgeGroupBarChart from "../components/Dashboard/AgeGroupBarChart";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <InfoCards />
      <div className="grid md:grid-cols-2 gap-6">
        <DisabilityPieChart />
        <AgeGroupBarChart />
      </div>
    </div>
  );
}
