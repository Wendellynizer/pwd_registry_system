import InfoCards from "../components/Dashboard/InfoCards";
import DisabilityPieChart from "../components/Dashboard/DisabilityPieChart";
import AgeGroupBarChart from "../components/Dashboard/AgeGroupBarChart";
import SummaryCards from "../components/Dashboard/SummaryCards";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <InfoCards />

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left side: Pie chart */}
        <div className="h-full">
          <DisabilityPieChart />
        </div>

        {/* Right side: Summary + Bar */}
        <div className="flex flex-col h-full space-y-6">
          <SummaryCards />
          <AgeGroupBarChart />
        </div>
      </div>
    </div>
  );
}
