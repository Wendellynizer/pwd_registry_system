import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddDisability() {
  const navigate = useNavigate();
  const [disabilityName, setDisabilityName] = useState("");
  const [disabilityType, setDisabilityType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here (e.g., API call)
    alert(
      `Disability Added:\nName: ${disabilityName}\nType: ${disabilityType}`
    );
    navigate("/disability-info");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Add Disability</h1>

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-md p-6 space-y-4"
      >
        <div className="form-control">
          <label className="label font-semibold">Disability Name</label>
          <input
            type="text"
            className="input input-bordered"
            value={disabilityName}
            onChange={(e) => setDisabilityName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Disability Type</label>
          <select
            className="select select-bordered"
            value={disabilityType}
            onChange={(e) => setDisabilityType(e.target.value)}
            required
          >
            <option disabled value="">
              Select Type
            </option>
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

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
