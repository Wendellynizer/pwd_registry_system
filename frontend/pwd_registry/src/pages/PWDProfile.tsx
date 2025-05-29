// src/pages/PWDProfile.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaEdit, FaTrash } from "react-icons/fa";
import DeleteConfirmationModal from "../components/Shared/DeleteConfirmationModal";
import defaultPhoto from "../assets/default.png";
import { getApplication } from "../endpoints/api";

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

  const getAge = (birthdateStr: string) => {
    const birthdate = new Date(birthdateStr);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const [application, setApplication] = useState();

  const fetchData = async () => {
    setApplication(await getApplication(id));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-bounce-in">
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
              src={defaultPhoto}
              alt="PWD"
              className="w-40 h-40 object-cover rounded shadow"
            />

            <button className="mt-2 btn btn-wide btn-outline btn-warning">
              Edit Picture
            </button>
          </div>
          <div className="space-y-2 text-sm text-gray-800">
            <p>
              <strong>Issued PWD ID:</strong>{" "}
              <span className="text-blue-700">
                {application?.pwdprofiles?.pwd_card_id}
              </span>
            </p>
            <p>
              <strong>Registration No:</strong>{" "}
              <span className="text-blue-700">
                {application?.registration_no}
              </span>
            </p>
            <p>
              <strong>Full Name:</strong> {application?.applicant?.firstname}{" "}
              {application?.applicant?.middlename}{" "}
              {application?.applicant?.lastname}
            </p>
            <p>
              <strong>Age:</strong> {getAge(application?.applicant?.birthdate)}
            </p>
            <p>
              <strong>Gender:</strong> {application?.applicant?.gender}
            </p>
            <p>
              <strong>Disability Type:</strong> {pwd.disabilityType}
            </p>
            <p>
              <strong>Specific Disability:</strong> {pwd.specificDisability}
            </p>
            <p>
              <strong>Address:</strong>
              <div>
                {application?.applicant?.address?.street_address}{" "}
                {application?.applicant?.address.city} City,{" "}
                {application?.applicant?.address.province}
              </div>
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`badge 
                                ${
                                  application?.application_status === "APPROVED"
                                    ? "badge-success"
                                    : application?.application_status ===
                                      "REJECTED"
                                    ? "badge-error"
                                    : application?.application_status ===
                                      "PENDING"
                                    ? "badge-warning"
                                    : ""
                                }`}
              >
                {application?.application_status || "UNKNOWN"}
              </span>
            </p>
          </div>

          <div className="flex gap-5">
            <button className="btn btn-outline btn-error ">Reject</button>
            <button className="btn btn-success">Approve</button>
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
