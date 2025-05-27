import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPersonnel() {
  const navigate = useNavigate();

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert(
      `Personnel Added:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nRole: ${role}\nUsername: ${username}`
    );
    navigate("/user");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs text-gray-600">
        <ul>
          <li>
            <button className="link" onClick={() => navigate("/user")}>
              Personnel Management
            </button>
          </li>
          <li className="font-semibold text-primary">Add Personnel</li>
        </ul>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Add Personnel</h1>
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
        {/* First Name / Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Username / Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">Role</label>
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
        </div>

        {/* Password / Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
