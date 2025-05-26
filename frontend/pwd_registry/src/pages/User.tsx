import { useNavigate } from "react-router-dom";
import { FaSearch, FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const personnel = [
  { lastName: "Reynolds", firstName: "Jasmine", role: "Personnel" },
  { lastName: "Morgan", firstName: "Elijah", role: "Personnel" },
  { lastName: "Grant", firstName: "Blake", role: "Personnel" },
];

export default function User() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Title + Add Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Personnel Management</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            console.log("Navigating to /add-personnel");
            navigate("/add-personnel");
          }}
        >
          <FaPlus /> Add
        </button>
      </div>

      {/* Search + Filter */}
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
          <thead className="bg-blue-600 text-white">
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {personnel.map((person, idx) => (
              <tr key={idx}>
                <td>{person.lastName}</td>
                <td>{person.firstName}</td>
                <td>{person.role}</td>
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
