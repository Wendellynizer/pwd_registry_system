import { FaSearch } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// import TagumMap from "../components/TagumMap";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Map() {
  const chartData = {
    labels: ["Apleton", "Binuangan", "Busaon", "Canocotan"],
    datasets: [
      {
        label: "Bar1",
        data: [310, 120, 190, 230],
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter */}
      {/* <div className="flex items-center gap-2">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <FaSearch />
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button className="btn btn-outline">Filter</button>
      </div> */}

      {/* Main Content: Map + Chart */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Image (replace src with actual image file) */}
        
        <div className="border">
          <MapContainer center={[7.405113492418119, 125.78985918853762]} zoom={13}>
           <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        </div>

        {/* Chart + Legend */}
        <div className="space-y-4 absolute right-5 top-20">
          <div className="card p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">By Barangay</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>

          <div className="card p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">Legend</h2>
            <ul className="space-y-1">
              <li>
                <span className="inline-block w-4 h-4 bg-green-600 mr-2 rounded-full"></span>{" "}
                New Balamban
              </li>
              <li>
                <span className="inline-block w-4 h-4 bg-lime-600 mr-2 rounded-full"></span>{" "}
                Libuganon
              </li>
              <li>
                <span className="inline-block w-4 h-4 bg-emerald-600 mr-2 rounded-full"></span>{" "}
                Busaon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
