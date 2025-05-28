import AnalyticsCards from "../components/Analytics/AnalyticsCards";
import RegistrationLineChart from "../components/Analytics/RegistrationLineChart";
import AgeGroupBarChart from "../components/Dashboard/AgeGroupBarChart";
import DisabilityPieChart from "../components/Dashboard/DisabilityPieChart";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Analytics</h1>
      <AnalyticsCards />
      <div className="grid md:grid-cols-2 gap-6">
        <RegistrationLineChart />
        <AgeGroupBarChart />
        <DisabilityPieChart />
      </div>
    </div>
  );
}
