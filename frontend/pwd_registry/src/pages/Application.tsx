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
          <h1 className="text-2xl font-bold text-gray-800">PWD Application</h1>

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
              <th>Registratoin No.</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Sex</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr
                key={i}
                className={`transition-all hover:bg-blue-50 ${
                  app.status === "Inactive" ? "bg-red-50" : ""
                }`}
              >
                <td>{i + 1}</td>
                <td className="font-mono">{app.registration_no}</td>
                <td>{app.applicant.lastname}</td>
                <td>{app.applicant.firstname}</td>
                <td>{app.date_applied}</td>
                <td>{app.applicant.gender}</td>
                <td></td>
                <td>
                   {app.application_status === "APPROVED" ? (
                      <div className="badge badge-success">{app.application_status}</div>
                    ) : app.application_status === "PENDING" ? (
                     <div className="badge badge-warning">{app.application_status}</div>
                    ) : (
                      <div className="badge badge-danger">{app.application_status}</div>
                    )}
                </td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      className="btn btn-sm btn-info text-white tooltip"
                      data-tip="View"
                      onClick={() => navigate(`/pwd-info/${app.id}`)}
                    >
                      <FaEye />
                    </button>
                    <button
                      className="btn btn-sm btn-error text-white tooltip"
                      data-tip="Delete"
                      onClick={() => handleDeleteClick(app.id)}
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
        <div className="mt-4 flex justify-between items-center text-sm px-2 pb-3 py-5">
          <span>Showing 3 of 3 entries</span>
          <div className="join">
            <button className="join-item btn btn-sm">Previous</button>
            <button className="join-item btn btn-sm btn-active">1</button>
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
