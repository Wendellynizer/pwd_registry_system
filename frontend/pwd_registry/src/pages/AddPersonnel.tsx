import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPersonnel() {
  const navigate = useNavigate();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You may replace this with API call later
    alert(
      `Personnel Added:\nLast Name: ${lastName}\nFirst Name: ${firstName}\nRole: ${role}`
    );
    navigate("/user");
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Add Personnel</h1>

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-md p-6 space-y-4"
      >
        <div className="form-control">
          <label className="label font-semibold">Last Name</label>
          <input
            type="text"
            className="input input-bordered"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">First Name</label>
          <input
            type="text"
            className="input input-bordered"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Role</label>
          <select
            className="select select-bordered"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option disabled value="">
              Select Role
            </option>
            <option>Administrator</option>
            <option>Encoder</option>
            <option>Staff</option>
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
