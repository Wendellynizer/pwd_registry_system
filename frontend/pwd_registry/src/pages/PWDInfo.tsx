import { FaEye, FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteConfirmationModal from "../components/Shared/DeleteConfirmationModal";

export default function PWDManage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting", selectedId); // Replace with actual delete logic
    setModalOpen(false);
  };

  const pwds = [
    {
      id: "04-1005-000-0000020",
      lastName: "BORJA",
      firstName: "RENELYN",
      middleName: "LUMBIA",
      sex: "Female",
      type: "Mental Disability",
      status: "Active",
    },
    {
      id: "04-1005-000-0000021",
      lastName: "DOE",
      firstName: "JHON",
      middleName: "GREENFIELD",
      sex: "Male",
      type: "Physical Disability",
      status: "Active",
    },
    {
      id: "04-1005-000-0000022",
      lastName: "DOE",
      firstName: "DOE",
      middleName: "GREENFIELD",
      sex: "Female",
      type: "Physical Disability",
      status: "Active",
    },
    {
      id: "04-1005-000-0000023",
      lastName: "GO",
      firstName: "SHANE",
      middleName: "N/A",
      sex: "Female",
      type: "Speech Impairment",
      status: "Inactive",
    },
    {
      id: "04-1005-000-0000024",
      lastName: "MANALO",
      firstName: "LIWAYWAY",
      middleName: "N/A",
      sex: "Male",
      type: "Orthopedic Disability",
      status: "Active",
    },
  ];

  const totalActive = pwds.filter((p) => p.status === "Active").length;
  const totalInactive = pwds.filter((p) => p.status === "Inactive").length;

  return (
    <div className="space-y-6">
      {/* Title & Summary Cards */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">PWD Management</h1>
          <div className="mt-4 flex gap-4">
            <div className="card bg-green-100 border-l-4 border-green-600 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-sm text-green-700 font-semibold">
                  Total Active
                </h2>
                <p className="text-lg font-bold text-green-900">
                  {totalActive}
                </p>
              </div>
            </div>
            <div className="card bg-red-100 border-l-4 border-red-600 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-sm text-red-700 font-semibold">
                  Total Inactive
                </h2>
                <p className="text-lg font-bold text-red-900">
                  {totalInactive}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-success shadow-md"
          onClick={() => navigate("/walk-in-application")}
        >
          <FaPlus className="mr-2" /> Walk-in Application
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
              <th>#</th>
              <th>Issued PWD ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Sex</th>
              <th>Disability Type</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pwds.map((pwd, i) => (
              <tr
                key={i}
                className={`transition-all hover:bg-blue-50 ${
                  pwd.status === "Inactive" ? "bg-red-50" : ""
                }`}
              >
                <td>{i + 1}</td>
                <td className="font-mono">{pwd.id}</td>
                <td>{pwd.lastName}</td>
                <td>{pwd.firstName}</td>
                <td>{pwd.middleName}</td>
                <td>{pwd.sex}</td>
                <td>{pwd.type}</td>
                <td
                  className={`font-medium ${
                    pwd.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {pwd.status}
                </td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      className="btn btn-sm btn-info text-white tooltip"
                      data-tip="View"
                      onClick={() => navigate(`/pwd-info/${pwd.id}`)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="btn btn-sm btn-error text-white tooltip"
                      data-tip="Delete"
                      onClick={() => handleDeleteClick(pwd.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center text-sm px-2">
          <span>Showing 1-8 of 4300 entries</span>
          <div className="join">
            <button className="join-item btn btn-sm">Previous</button>
            <button className="join-item btn btn-sm btn-active">1</button>
            <button className="join-item btn btn-sm">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">...</button>
            <button className="join-item btn btn-sm">Next</button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation */}
      <DeleteConfirmationModal
        id={selectedId || ""}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
