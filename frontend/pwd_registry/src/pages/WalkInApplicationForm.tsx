// src/pages/WalkInApplicationForm.tsx (Updated with Contact Info Card + Label Positions)
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "../components/Shared/BreadCrumbs";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

export default function WalkInApplicationForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const [disabilities, setDisabilities] = useState([
    { type: "", specific: "" },
  ]);

  const [dateApplied, setDateApplied] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // format: YYYY-MM-DD
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/pwd-info");
    }, 1500); // You can adjust the delay
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
          { label: "Walk-in Application" },
        ]}
      />
      {/* Header: Title left, Back right */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Walk-in Application
        </h1>
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
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Personal Information */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold">Personal Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label font-medium">Last Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Last Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">First Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="First Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Middle Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Middle Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Maiden Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Maiden Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Suffix</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Suffix"
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Birthdate</label>
              <input type="date" className="input input-bordered" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sex */}
            <div className="form-control">
              <label className="label font-medium">Sex</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="sex" className="radio" /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="sex" className="radio" /> Female
                </label>
              </div>
            </div>

            {/* Civil Status */}
            <div className="form-control">
              <label className="label font-medium">Civil Status</label>
              <p></p>
              <select className="select select-bordered">
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Mobile No.", "Email", "Landline No."].map((label, index) => (
              <div className="form-control space-y-1" key={index}>
                <label className="label font-medium">{label}</label>
                <p></p>
                <input className="input input-bordered" placeholder={label} />
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="card bg-base-100 shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold">Address</h2>
          <p></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">House No.</label>
              <p></p>
              <input className="input input-bordered" placeholder="House No." />
            </div>
            <div className="form-control space-y-1">
              <label className="label font-medium">Street</label>
              <p></p>
              <input className="input input-bordered" placeholder="Street" />
            </div>
            {["Barangay", "City/Municipality", "Province"].map(
              (label, index) => (
                <div className="form-control space-y-1" key={index}>
                  <label className="label font-medium">{label}</label>
                  <p></p>
                  <input className="input input-bordered" placeholder={label} />
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
                label: "Educational Attainment",
                options: ["Elementary", "High School", "College"],
              },
              {
                label: "Employment Status",
                options: ["Employed", "Unemployed"],
              },
              { label: "Sector", options: ["Government", "Private"] },
              {
                label: "Employment Type",
                options: ["Regular", "Contractual", "Job Order"],
              },
            ].map((dropdown, i) => (
              <div className="form-control space-y-1" key={i}>
                <label className="label font-medium">{dropdown.label}</label>
                <p></p>
                <select className="select select-bordered">
                  {dropdown.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
            {["Occupation", "Specify"].map((label) => (
              <div className="form-control space-y-1" key={label}>
                <label className="label font-medium">{label}</label>
                <p></p>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder={label}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Disability */}
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
                  ].map((d, i) => (
                    <option key={i}>{d}</option>
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
            {[
              "SSS No.",
              "GSIS No.",
              "PAGIBIG No.",
              "PSN No.",
              "PHILHEALTH No.",
              "Other ID",
            ].map((label, index) => (
              <div className="form-control space-y-1" key={index}>
                <label className="label font-medium">{label}</label>
                <input className="input input-bordered" placeholder={label} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button type="button" className="btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-4 animate-bounce-in">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
            <h2 className="text-xl font-bold">Submitted Successfully!</h2>
            <p className="text-gray-600">Redirecting to PWD Management...</p>
          </div>
        </div>
      )}
    </div>
  );
}
