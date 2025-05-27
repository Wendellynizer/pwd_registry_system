import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddDisability() {
  const navigate = useNavigate();
  const [disabilityName, setDisabilityName] = useState("");
  const [disabilityType, setDisabilityType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Disability Added:\nType: ${disabilityType}\nName: ${disabilityName}`
    );
    navigate("/disability-info");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs text-gray-600">
        <ul>
          <li>
            <button
              className="link"
              onClick={() => navigate("/disability-info")}
            >
              Disability Information
            </button>
          </li>
          <li className="font-semibold text-primary">Add Disability</li>
        </ul>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Add Disability</h1>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline btn-sm px-4"
        >
          ← Back
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-md p-8 space-y-6 border border-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Disability Type
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={disabilityType}
              onChange={(e) => setDisabilityType(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Disability Name
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={disabilityName}
              onChange={(e) => setDisabilityName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
