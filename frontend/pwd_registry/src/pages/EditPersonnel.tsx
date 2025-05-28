// src/pages/EditPersonnel.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditPersonnel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    lastName: "Reynolds",
    firstName: "Jasmine",
    role: "Personnel",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Saved Personnel ID ${id}`);
    navigate("/user");
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold">Edit Personnel</h1>
      <p></p>
      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow p-6 space-y-4"
      >
        <div className="form-control">
          <label className="label font-semibold">Last Name</label>
          <p></p>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">First Name</label>
          <p></p>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Role</label>
          <p></p>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="select select-bordered"
          >
            <option>Administrator</option>
            <option>Encoder</option>
            <option>Personnel</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
