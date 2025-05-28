// src/pages/EditPWDProfile.tsx
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "../components/Shared/BreadCrumbs";
import { FaCheckCircle, FaTrash } from "react-icons/fa";

export default function EditPWDProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  // Simulated pre-filled data
  const [form, setForm] = useState({
    dateApplied: "2024-05-01",
    firstName: "Renelyn",
    middleName: "Lumbia",
    lastName: "Borja",
    maidenName: "",
    suffix: "",
    birthdate: "1995-03-15",
    sex: "Female",
    civilStatus: "Single",
    mobile: "09231234567",
    email: "renelyn@example.com",
    landline: "",
    houseNo: "12",
    street: "Mabini",
    barangay: "Mabini",
    city: "Panabo City",
    province: "Davao del Norte",
    educational: "College",
    employmentStatus: "Employed",
    sector: "Government",
    employmentType: "Regular",
    occupation: "Teacher",
    specify: "",
    identifiers: {
      sss: "123456789",
      gsis: "",
      pagibig: "",
      psn: "",
      philhealth: "",
      other: "",
    },
  });

  const [disabilities, setDisabilities] = useState([
    { type: "Mobility", specific: "Schizophrenia" },
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      identifiers: { ...form.identifiers, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate(`/pwd-info/${id}`);
    }, 1500);
  };

  const handleDisabilityChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...disabilities];
    updated[index][field as keyof (typeof updated)[0]] = value;
    setDisabilities(updated);
  };

  const addDisability = () => {
    setDisabilities([...disabilities, { type: "", specific: "" }]);
  };

  const removeDisability = (index: number) => {
    if (disabilities.length > 1) {
      setDisabilities(disabilities.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <Breadcrumbs
        items={[
          { label: "PWD Management", to: "/pwd-info" },
          { label: "Edit PWD Profile" },
        ]}
      />

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Edit PWD Profile</h1>
        <button className="btn btn-sm btn-outline" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Applied */}
        <div className="card bg-base-100 shadow-md p-6 max-w-md">
          <div className="form-control space-y-1">
            <label className="label font-medium">Date Applied</label>
            <input
              type="date"
              className="input input-bordered"
              value={form.dateApplied}
              disabled
            />
          </div>
        </div>

        {/* Personal Info */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "lastName",
              "firstName",
              "middleName",
              "maidenName",
              "suffix",
            ].map((field) => (
              <div className="form-control" key={field}>
                <label className="label font-medium">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={(form as any)[field]}
                  onChange={handleChange}
                  className="input input-bordered"
                  placeholder={field}
                />
              </div>
            ))}
            <div className="form-control">
              <label className="label font-medium">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                value={form.birthdate}
                onChange={handleChange}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label font-medium">Sex</label>
              <div className="flex gap-4">
                {["Male", "Female"].map((val) => (
                  <label className="flex items-center gap-2" key={val}>
                    <input
                      type="radio"
                      name="sex"
                      value={val}
                      checked={form.sex === val}
                      onChange={handleChange}
                      className="radio"
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>
            <div className="form-control">
              <label className="label font-medium">Civil Status</label>
              <select
                name="civilStatus"
                value={form.civilStatus}
                onChange={handleChange}
                className="select select-bordered"
              >
                {["Single", "Married", "Widowed"].map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["mobile", "email", "landline"].map((field) => (
              <div className="form-control" key={field}>
                <label className="label font-medium">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  name={field}
                  value={(form as any)[field]}
                  onChange={handleChange}
                  className="input input-bordered"
                  placeholder={field}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Address</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["houseNo", "street", "barangay", "city", "province"].map(
              (field) => (
                <div className="form-control" key={field}>
                  <label className="label font-medium">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    name={field}
                    value={(form as any)[field]}
                    onChange={handleChange}
                    className="input input-bordered"
                    placeholder={field}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Background */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Background</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "educational",
                options: ["Elementary", "High School", "College"],
              },
              { name: "employmentStatus", options: ["Employed", "Unemployed"] },
              { name: "sector", options: ["Government", "Private"] },
              {
                name: "employmentType",
                options: ["Regular", "Contractual", "Job Order"],
              },
            ].map(({ name, options }) => (
              <div className="form-control" key={name}>
                <label className="label font-medium">
                  {name.replace(/([A-Z])/g, " $1")}
                </label>
                <select
                  name={name}
                  value={(form as any)[name]}
                  onChange={handleChange}
                  className="select select-bordered"
                >
                  {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
            {["occupation", "specify"].map((field) => (
              <div className="form-control" key={field}>
                <label className="label font-medium">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={(form as any)[field]}
                  onChange={handleChange}
                  className="input input-bordered"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disability Details */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Disability Details</h2>
          {disabilities.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center w-full"
            >
              <div className="w-full md:w-2/5">
                <select
                  className="select select-bordered w-full"
                  value={entry.type}
                  onChange={(e) =>
                    handleDisabilityChange(index, "type", e.target.value)
                  }
                >
                  <option disabled value="">
                    Select Type
                  </option>
                  {[
                    "Mobility",
                    "Visual",
                    "Hearing",
                    "Intellectual",
                    "Psychological",
                    "Speech",
                    "Multiple",
                    "Others",
                  ].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-3/5">
                <input
                  className="input input-bordered w-full"
                  placeholder="Specific Disability (e.g. Amputation)"
                  value={entry.specific}
                  onChange={(e) =>
                    handleDisabilityChange(index, "specific", e.target.value)
                  }
                />
              </div>
              <div className="pt-1 md:pt-0">
                <button
                  type="button"
                  className="btn btn-error btn-square"
                  onClick={() => removeDisability(index)}
                  disabled={disabilities.length === 1}
                  title="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline btn-primary"
            onClick={addDisability}
          >
            ➕ Add Another Disability
          </button>
        </div>

        {/* Identifiers */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Identifiers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["sss", "gsis", "pagibig", "psn", "philhealth", "other"].map(
              (field) => (
                <div className="form-control" key={field}>
                  <label className="label font-medium">
                    {field.toUpperCase()} No.
                  </label>
                  <input
                    name={field}
                    value={
                      form.identifiers[field as keyof typeof form.identifiers]
                    }
                    onChange={handleIdentifierChange}
                    className="input input-bordered"
                    placeholder={field}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-4">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4 animate-bounce-in">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
            <h2 className="text-xl font-bold">Profile Updated!</h2>
            <p className="text-gray-600">Redirecting to PWD Profile...</p>
          </div>
        </div>
      )}
    </div>
  );
}
