import { useNavigate } from "react-router-dom";
import { FaSearch, FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const personnel = [
  { id: 1, lastName: "Reynolds", firstName: "Jasmine", role: "Personnel" },
  { id: 2, lastName: "Morgan", firstName: "Elijah", role: "Personnel" },
  { id: 3, lastName: "Grant", firstName: "Blake", role: "Personnel" },
];

export default function User() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Title & Add */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Personnel Management
        </h1>
        <button
          className="btn btn-success shadow-md"
          onClick={() => navigate("/add-personnel")}
        >
          <FaPlus className="mr-2" /> Add Personnel
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-2 items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <FaSearch />
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button className="btn btn-outline">Filter</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="table table-hover text-sm">
          <thead className="bg-sky-950 text-white text-sm">
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {personnel.map((person, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-all">
                <td className="font-medium">{person.lastName}</td>
                <td>{person.firstName}</td>
                <td>{person.role}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      className="btn btn-sm btn-error text-white tooltip"
                      data-tip="Delete"
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="btn btn-sm btn-warning text-white tooltip"
                      data-tip="Edit"
                      onClick={() => navigate(`/edit-personnel/${person.id}`)}
                    >
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center text-sm px-2">
          <span>Showing 1-5 of 23 entries</span>
          <div className="join">
            <button className="join-item btn btn-sm">Previous</button>
            <button className="join-item btn btn-sm btn-active">1</button>
            <button className="join-item btn btn-sm">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">...</button>
            <button className="join-item btn btn-sm">5</button>
            <button className="join-item btn btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
