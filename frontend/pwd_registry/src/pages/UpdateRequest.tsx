import { FaEye, FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "../components/Shared/DeleteConfirmationModal";
import { getApplications, deleteApplication, getPWDs } from "../endpoints/api";

export default function Application() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [applications, setApplications] = useState([]);

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("Deleting", selectedId); // Replace with actual delete logic

    await deleteApplication(selectedId).then(() => {
        // Refresh list after delete
        setApplications(applications.filter(app => app.id !== selectedId));
      });

    setModalOpen(false);
  };

  const rqs = [
    {
      id: 1,
      requester: "Clarice Dela Cruz",
      barangay: "Apokon",
      dateRequest: "May 27, 2025",
      status: "PENDING",
    },
  ];

  const fetchData = async () => {
    setApplications(await getApplications());
  }

  useEffect(() => {
    fetchData();
    // console.log(applications);
  }, []);


   return (
    <div className="space-y-6">
      {/* Title & Summary Cards */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Update Request</h1>

        </div>

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
              <th>Requester</th>
              <th>Barangay</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rqs.map((rq, i) => (
              <tr
                key={i}
                className={`transition-all hover:bg-blue-50 ${
                  rq.status === "Inactive" ? "bg-red-50" : ""
                }`}
              >
                <td>{i + 1}</td>
                <td className="font-mono">{rq.requester}</td>
                <td>{rq.barangay}</td>
                <td>{rq.dateRequest}</td>
                <td>
                   {rq.status === "APPROVED" ? (
                      <div className="badge badge-success">{rq.status}</div>
                    ) : rq.status === "PENDING" ? (
                     <div className="badge badge-warning">{rq.status}</div>
                    ) : (
                      <div className="badge badge-danger">{rq.status}</div>
                    )}
                </td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      className="btn btn-sm btn-info text-white tooltip"
                      data-tip="View"
                      onClick={() => navigate(`/pwd-info/${rq.id}`)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="btn btn-sm btn-error text-white tooltip"
                      data-tip="Delete"
                      onClick={() => handleDeleteClick(rq.id)}
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
