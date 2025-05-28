// src/pages/Reports.tsx
import { useState } from "react";

export default function Reports() {
  const [reportType, setReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = () => {
    // Handle filter logic
    console.log("Generating report:", { reportType, fromDate, toDate });
  };

  const handleExport = () => {
    // Handle export logic
    console.log("Exporting to Excel");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Reports</h1>

      {/* Filter Section */}
      <div className="card bg-base-100 shadow-md p-6 space-y-4">
        <h2 className="text-lg font-semibold">Select Type of Report</h2>

        <div className="flex flex-wrap gap-4 items-end">
          {/* Report Type Dropdown */}
          <div className="form-control">
            <label className="label font-semibold">Report Type:</label>
            <select
              className="select select-bordered"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option disabled value="">
                Please Select
              </option>
              <option>Monthly Summary</option>
              <option>New Registrations</option>
              <option>Expired IDs</option>
            </select>
          </div>

          {/* Date Range Inputs */}
          <div className="form-control">
            <label className="label font-semibold">From:</label>
            <input
              type="date"
              className="input input-bordered"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">To:</label>
            <input
              type="date"
              className="input input-bordered"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-success" onClick={handleExport}>
              Export to Excel
            </button>
          </div>
        </div>
      </div>

      {/* Data View Placeholder */}
      <div className="mt-6 text-sm font-medium">Data View</div>
      {/* TODO: Render actual report data here */}
    </div>
  );
}
