// src/pages/EditDisability.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditDisability() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [disabilityName, setDisabilityName] = useState(name || "");
  const [disabilityType, setDisabilityType] = useState("Physical Disability");

  const handleSave = () => {
    alert(`Saved: ${disabilityName} - ${disabilityType}`);
    navigate("/disability-info");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800">Edit Disability</h1>
      <div className="card bg-base-100 shadow p-6 space-y-4">
        <div className="form-control">
          <label className="label font-semibold">Disability Name</label>
          <p></p>
          <input
            className="input input-bordered"
            value={disabilityName}
            onChange={(e) => setDisabilityName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Disability Type</label>
          <p></p>
          <select
            className="select select-bordered"
            value={disabilityType}
            onChange={(e) => setDisabilityType(e.target.value)}
          >
            <option>Mobility</option>
            <option>Visual</option>
            <option>Hearing</option>
            <option>Intellectual</option>
            <option>Psychological</option>
            <option>Speech</option>
            <option>Multiple</option>
            <option>Others</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
