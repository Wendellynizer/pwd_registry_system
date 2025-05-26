import { useState } from "react";

export default function Settings() {
  const [firstName, setFirstName] = useState("Melverin");
  const [lastName, setLastName] = useState("Admin");
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const accountLevel = "Admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Profile updated successfully!");
    // Implement save logic here
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Account Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow-md p-6 space-y-4"
      >
        <div className="form-control">
          <label className="label font-semibold">First Name</label>
          <input
            className="input input-bordered"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Last Name</label>
          <input
            className="input input-bordered"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Username</label>
          <input
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Password</label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Confirm Password</label>
          <input
            type="password"
            className="input input-bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label font-semibold">Account Level</label>
          <input
            className="input input-bordered bg-gray-100 cursor-not-allowed"
            value={accountLevel}
            readOnly
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
