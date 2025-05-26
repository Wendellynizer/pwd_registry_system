// src/pages/DisabilityInfo.tsx
import { FaSearch, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const disabilities = [
  { name: "Schizophrenia", type: "Mental Disability" },
  { name: "Amputation", type: "Physical Disability" },
  { name: "Aphasia", type: "Speech Impairment" },
  { name: "Down Syndrome", type: "Intellectual Disability" },
  { name: "Blind", type: "Visual Disability" },
];

export default function DisabilityInfo() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Title and Add Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Disability Information</h1>
        <button
          className="btn btn-success"
          onClick={() => navigate("/add-disability")}
        >
          <FaPlus /> Add
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-2 items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <FaSearch />
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button className="btn btn-outline">Filter</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-sky-950 text-white">
            <tr>
              <th>Disability Name</th>
              <th>Disability Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {disabilities.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td className="flex gap-2">
                  <button className="btn btn-error btn-sm text-white">
                    <FaTrash />
                  </button>
                  <button className="btn btn-warning btn-sm text-white">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="text-sm mt-2">Showing 1-5 of 23 entries</div>
        <div className="join mt-2">
          <button className="join-item btn">Previous</button>
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">...</button>
          <button className="join-item btn">5</button>
          <button className="join-item btn">Next</button>
        </div>
      </div>
    </div>
  );
}
