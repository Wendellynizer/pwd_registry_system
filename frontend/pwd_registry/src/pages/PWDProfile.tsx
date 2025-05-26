// src/pages/PWDProfile.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaEdit, FaTrash } from "react-icons/fa";
import DeleteConfirmationModal from "../components/Shared/DeleteConfirmationModal";

export default function PWDProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  // Simulated PWD data – replace with real fetch
  const pwd = {
    issuedId: id,
    firstName: "Renelyn",
    middleName: "Lumbia",
    lastName: "Borja",
    birthdate: "1995-03-15",
    sex: "Female",
    disabilityType: "Mental Disability",
    specificDisability: "Schizophrenia",
    location: "Zone 1, Barangay Mabini, Panabo City",
    photoUrl: "https://via.placeholder.com/150",
  };

  const fullName = `${pwd.firstName} ${pwd.middleName} ${pwd.lastName}`;
  const age = Math.floor(
    (Date.now() - new Date(pwd.birthdate).getTime()) / 31557600000
  );

  const handleEdit = () => {
    navigate(`/pwd-info/${id}/edit`);
  };

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    alert(`Deleted PWD ID: ${id}`); // Replace with actual delete API logic
    setModalOpen(false);
    navigate("/pwd-info");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-bounce-in">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs text-gray-600">
        <ul>
          <li>
            <button
              onClick={() => navigate("/pwd-info")}
              className="text-blue-600 hover:underline"
            >
              PWD Management
            </button>
          </li>
          <li className="text-gray-800 font-medium">PWD Profile</li>
        </ul>
      </div>

      {/* Title and Back */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PWD Profile</h1>
        <button className="btn btn-sm btn-outline" onClick={() => navigate(-1)}>
          <FaChevronLeft className="mr-1" /> Back
        </button>
      </div>

      {/* Profile Card */}
      <div className="card bg-base-100 shadow-md border border-gray-200 p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <img
              src={pwd.photoUrl}
              alt="PWD"
              className="w-40 h-40 object-cover rounded shadow"
            />
          </div>
          <div className="space-y-2 text-sm text-gray-800">
            <p>
              <strong>Issued PWD ID:</strong>{" "}
              <span className="text-blue-700">{pwd.issuedId}</span>
            </p>
            <p>
              <strong>Full Name:</strong> {fullName}
            </p>
            <p>
              <strong>Age:</strong> {age}
            </p>
            <p>
              <strong>Gender:</strong> {pwd.sex}
            </p>
            <p>
              <strong>Disability Type:</strong> {pwd.disabilityType}
            </p>
            <p>
              <strong>Specific Disability:</strong> {pwd.specificDisability}
            </p>
            <p>
              <strong>Location:</strong> {pwd.location}
            </p>
          </div>
        </div>
      </div>

      {/* Actions aligned to the right */}
      <div className="flex justify-end gap-3">
        <button
          className="btn btn-warning btn-sm flex items-center gap-2"
          onClick={handleEdit}
        >
          <FaEdit /> Edit
        </button>
        <button
          className="btn btn-error btn-sm flex items-center gap-2"
          onClick={handleDeleteClick}
        >
          <FaTrash /> Delete
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        id={id || ""}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
