// src/pages/PWDInfo.tsx
import { FaEye, FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteConfirmationModal from "../components/Shared/DeleteConfirmationModal"; // ✅ Add this

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

  return (
    <div className="space-y-4">
      {/* Title and Counters */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">PWD Management</h1>
          <div className="flex gap-4 mt-2">
            <span className="text-green-600">● Total Active</span>
            <span className="text-red-600">● Total Inactive</span>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={() => navigate("/walk-in-application")}
        >
          <FaPlus /> Walk-in Application
        </button>
      </div>
      {/* Search and Filter */}
      <div className="flex gap-2 items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <FaSearch />
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button className="btn btn-outline">Filter</button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-sky-950 text-white">
            <tr>
              <th>#</th>
              <th>Issued PWD ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Sex</th>
              <th>Disability Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pwds.map((pwd, i) => (
              <tr
                key={i}
                className={pwd.status === "Inactive" ? "bg-red-100" : ""}
              >
                <td>{i + 1}</td>
                <td>{pwd.id}</td>
                <td>{pwd.lastName}</td>
                <td>{pwd.firstName}</td>
                <td>{pwd.middleName}</td>
                <td>{pwd.sex}</td>
                <td>{pwd.type}</td>
                <td
                  className={`font-semibold ${
                    pwd.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {pwd.status}
                </td>
                <td className="flex gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 text-sm">Showing 1-8 of 4300 entries</div>
        <div className="join mt-2">
          <button className="join-item btn">Previous</button>
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">...</button>
          <button className="join-item btn">Next</button>
        </div>
      </div>
      <DeleteConfirmationModal
        id={selectedId || ""}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      ;
    </div>
  );
}
