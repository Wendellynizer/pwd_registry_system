// src/pages/WalkInApplicationForm.tsx (Updated with Contact Info Card + Label Positions)
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumbs from "../components/Shared/BreadCrumbs";
import { FaTrash, FaCheckCircle } from "react-icons/fa";
import { createApplication, createDisability, getAllBarangays, getAllDisabilities, getAllOccupations } from "../endpoints/api";

export default function WalkInApplicationForm() {
  const formState = {
    applicant: {
      lastname: "",
      firstname: "",
      middlename: "",
      suffix: "",
      maiden_name: "",
      birthdate: "",
      gender: "",
      civil_status: "SINGLE",
      landline: "",
      mobile_no: "",
      email: "",
      education: 1,
      address: {
        street_address: "",
        barangay_id: 1,
        city: "Tagum",
        province: "Davao del Norte",
      },
      emp_info: {
        emp_status: "UNEMPLOYED",
        emp_category: "",
        emp_type: "",
        occupation_id: 1,
      },
      family_details: {
        father_lastname: "",
        father_firstname: "",
        father_middlename: "",
        mother_lastname: "",
        mother_firstname: "",
        mother_middlename: "",
        guardian_lastname: "",
        guardian_firstname: "",
        guardian_middlename: "",
      },
      identifications: {
        sss_no: "",
        gsis_no: "",
        pagibig_no: "",
        psn_no: "",
        philhealth_no: "",
        other_id: "",
        other_id_no: "",
      },
      applicant_disability: [
        // {"specific_disability": 1, "origin": 1},
        // {"specific_disability": 1, "origin": 1}
      ],
      coordinates: { x: "0", y: "0" },
    },
    registration_no: "",
    registration_type: "WALK-IN",
    date_applied: "",
    accomplished_by: "",
    accomplished_by_name: "",
    processing_officer: 1,
    approving_officer: "",
    encoder: "",
  };

  const [formData, setFormData] = useState(formState);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
 

  const [dateApplied, setDateApplied] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // format: YYYY-MM-DD
  });

  const handleChange = (e: any, path: any) => {
    const value = e.target.value;

    setFormData((prev) => {
      const newData = { ...prev };
      const keys = path.split(".");
      let temp: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        temp = temp[keys[i]];
      }

      temp[keys[keys.length - 1]] = value;
      return newData;
    });
  };


  const handleDisabilityChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...disabilities];
    updated[index][field as keyof (typeof updated)[0]] = value;
    setDisabilities(updated);

     const updatedFormData = {
      ...formData,
      applicant: {
        ...formData.applicant,
        applicant_disability: disabilities,
      },
    };

    setFormData(updatedFormData);

  };

  const addDisability = () => {
    setDisabilities([...disabilities, { origin: "", specific_disability_id: "" }]);
    console.log(disabilities);
  };

  const removeDisability = (index: number) => {
    if (disabilities.length > 1) {
      setDisabilities(disabilities.filter((_, i) => i !== index));
    }
  };

   const [disabilities, setDisabilities] = useState([
    { origin: "", specific_disability_id: ""},
  ]);
  const [barangays, setBarangays] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [specificDisabilities, setSpecificDisabilities] = useState([]);

  const [newDisability, setNewDisability] = useState({
    disability_cat_id: -1, disability_name: ''
  });

  const createNewDisability = async() => {
    const response = createDisability(newDisability);

    // if(response.status == 200) 
    //   return

    alert("Successfully added disability")
    let updatedDisabilities = await getAllDisabilities()
    setSpecificDisabilities(updatedDisabilities);
  }

  // fetch data to be used in dropdowns
  const fetchData = async () => {
    setBarangays(await getAllBarangays());
    setOccupations(await getAllOccupations());
    setSpecificDisabilities(await getAllDisabilities());
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      applicant: {
        ...formData.applicant,
        applicant_disability: disabilities,
      },
    };

    setFormData(updatedFormData);

    const response = createApplication(formData);

    if(response.status != 200) {
      // error thingz here
      console.log(response.data)
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/application");
    }, 1500); // You can adjust the delay
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    console.log(formData);
  }, [formData])


  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
     
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
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            👤 Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
              <label className="label font-medium">Last Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Last Name"
                name="lastname"
                onChange={(e) => handleChange(e, "applicant.lastname")}
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">First Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="First Name"
                name="firstname"
                onChange={(e) => handleChange(e, "applicant.firstname")}
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Middle Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Middle Name"
                name="middlename"
                onChange={(e) => handleChange(e, "applicant.middlename")}
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Maiden Name</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Maiden Name"
                name="maidenname"
                onChange={(e) => handleChange(e, "applicant.maiden_name")}
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Suffix</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Suffix"
                name="suffix"
                onChange={(e) => handleChange(e, "applicant.suffix")}
              />
            </div>
            <div className="form-control">
              <label className="label font-medium">Birthdate</label>
              <input
                type="date"
                className="input input-bordered"
                name="birthdate"
                onChange={(e) => handleChange(e, "applicant.birthdate")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sex */}
            <div className="form-control">
              <label className="label font-medium">Sex</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio"
                    value="MALE"
                    checked={formData.applicant.gender === "MALE"}
                    onChange={(e) => handleChange(e, "applicant.gender")}
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    className="radio"
                    value="FEMALE"
                    checked={formData.applicant.gender === "FEMALE"}
                    onChange={(e) => handleChange(e, "applicant.gender")}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Civil Status */}
            <div className="form-control">
              <label className="label font-medium">Civil Status</label>
              <select
                className="select select-bordered"
                name="civil_status"
                onChange={(e) => handleChange(e, "applicant.civil_status")}
              >
                <option value="SINGLE">Single</option>
                <option value="MARRIED">Married</option>
                <option value="WIDOW/ER">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            📞 Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">Mobile No.</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="Mobile No"
                name="mobile_no"
                onChange={(e) => handleChange(e, "applicant.mobile_no")}
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Landline No.</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="Landline"
                name="landline"
                onChange={(e) => handleChange(e, "applicant.landline")}
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Email</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e, "applicant.email")}
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            📍 Address
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">House No.and Street</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="House No. and Street"
                name="street_address"
                onChange={(e) =>
                  handleChange(e, "applicant.address.street_address")
                }
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Barangay</label>
              <p></p>
              <select
                className="select select-bordered"
                name="barangay"
                onChange={(e) => handleChange(e, "applicant.address.barangay_id")}
              >
                <option>--</option>

                {barangays.map((barangay) => (
                  <option key={barangay.id} value={barangay.id}>
                    {barangay.barangay_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">City</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="City"
                value="Tagum"
                name="city"
                onChange={(e) => handleChange(e, "applicant.address.city")}
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Province</label>
              <p></p>
              <input
                className="input input-bordered"
                placeholder="Province"
                value="Davao del Norte"
                name="province"
                onChange={(e) => handleChange(e, "applicant.address.province")}
              />
            </div>
          </div>
        </div>

        {/* Background */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            🏫 Background
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">
                Educational Attainment
              </label>
              <p></p>
              <select
                className="select select-bordered"
                name="education"
                onChange={(e) => handleChange(e, "applicant.education")}
              >
                <option value="1">None</option>
                <option value="2">Kindergarten</option>
                <option value="3">Elementary</option>
                <option value="4">Junior High School</option>
                <option value="5">Senior High School</option>
                <option value="6">College</option>
                <option value="7">Vocational</option>
                <option value="8">Post College</option>
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Status of Employement</label>
              <p></p>
              <select
                className="select select-bordered"
                name="emp_status"
                onChange={(e) =>
                  handleChange(e, "applicant.emp_info.emp_status")
                }
              >
                <option value="UNEMPLOYED">Unemployed</option>
                <option value="EMPLOYED">Employed</option>
                <option value="SELF-EMPLOYED">Self-Employed</option>
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">
                Category of Employment
              </label>
              <p></p>
              <select
                className="select select-bordered"
                name="emp_category"
                onChange={(e) =>
                  handleChange(e, "applicant.emp_info.emp_category")
                }
              >
                <option>--</option>
                <option value="GOVERNMENT">Government</option>
                <option value="PRIVATE">Private</option>
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Type of Employment</label>
              <p></p>
              <select
                className="select select-bordered"
                name="emp_type"
                onChange={(e) => handleChange(e, "applicant.emp_info.emp_type")}
              >
                <option>--</option>
                <option value="REGULAR">Permanent/Regular</option>
                <option value="SEASONAL">Seasonal</option>
                <option value="CASUAL">Casual</option>
                <option value="EMERGENCY">Emergency</option>
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Occupation</label>
              <p></p>
              <select
                className="select select-bordered"
                name="occupation_id"
                onChange={(e) =>
                  handleChange(e, "applicant.emp_info.occupation_id")
                }
              >
                <option value="None">None</option>
                {occupations.map((occupation) => (
                  <option value={occupation.id} key={occupation.id}>
                    {occupation.occupation_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Disability */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            📇 Disability Details
          </h2>

            <p>(Add disability if it does not exist.)</p>
            <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                <select className="select select-bordered w-50"
                onChange={(e) => setNewDisability(prev => ({
                  ...prev,
                  disability_cat_id: parseInt(e.target.value)
                }))}>
                  <option>Select Type</option>
                  <option value="1">Speech</option>
                  <option value="2">Learning</option>
                  <option value="3">Intellectual</option>
                  <option value="4">Mental</option>
                  <option value="5">Visual</option>
                  <option value="6">Psychosocial</option>
                  <option value="7">Physical</option>
                  <option value="8">Hearing</option>
                  <option value="9">Cancer</option>
                  <option value="10">Rare Disease</option>
                </select>

                <div className="w-full md:w-3/5">
                  <input
                    className="input input-bordered w-full"
                    placeholder="(e.g. Amputation)"
                     onChange={(e) => setNewDisability(prev => ({
                        ...prev,
                        disability_name: e.target.value
                    }))}
                  />
                </div>

                <button className="btn btn-info text-white" type="button"
                value={newDisability.disability_name}
                onClick={createNewDisability}>Add Disability</button>
            </div>
            

          {disabilities.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center w-full"
            >

              <div className="w-full md:w-2/5">
                <p>Cause of Disability</p>
                <select
                  className="select select-bordered w-full"
                  value={entry.origin}
                  onChange={(e) =>
                    handleDisabilityChange(index, "origin", e.target.value)
                  }
                >
                  <option value="1">Acquired</option>
                  <option value="2">Congenital/Inborn</option>
                </select>
              </div>

              <div className="w-full md:w-2/5">
                <p>Disability</p>
                <select
                  className="select select-bordered w-full"
                  onChange={(e) =>
                    handleDisabilityChange(index, "specific_disability_id", e.target.value)
                  }
                >
                  <option>Select Disability</option>
                  {specificDisabilities.map((dis) => (
                    <option value={dis.id} key={dis.id}>
                      {dis.disability_name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="w-full md:w-3/5">
                <input
                  className="input input-bordered w-full"
                  placeholder="Specific Disability (e.g. Amputation)"
                  value={entry.specific_disability}
                  onChange={(e) =>
                    handleDisabilityChange(index, "specific_disability", e.target.value)
                  }
                />
                
              </div> */}
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
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            🪪 Identifiers
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">SSS No.</label>
              <input className="input input-bordered" placeholder="SSS No." 
              onChange={(e) => handleChange(e, "applicant.identifications.sss_no")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">GSIS No.</label>
              <input className="input input-bordered" placeholder="GSIS No." 
              onChange={(e) => handleChange(e, "applicant.identifications.gsis_no")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">PAGIBIG No.</label>
              <input className="input input-bordered" placeholder="PAGIBIG No." 
              onChange={(e) => handleChange(e, "applicant.identifications.pagibig_no")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">PSN No.</label>
              <input className="input input-bordered" placeholder="PSN No." 
              onChange={(e) => handleChange(e, "applicant.identifications.psn_no")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Philhealth No.</label>
              <input className="input input-bordered" placeholder="Philhealth No." 
              onChange={(e) => handleChange(e, "applicant.identifications.philhealth_no")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Other ID</label>
              <input className="input input-bordered" placeholder="Other ID" 
              onChange={(e) => handleChange(e, "applicant.identifications.other_id")} />
            </div>

            <div className="form-control space-y-1">
              <label className="label font-medium">Other ID No.</label>
              <input className="input input-bordered" placeholder="Other ID" 
              onChange={(e) => handleChange(e, "applicant.identifications.other_id_no")} />
            </div>
           
          </div>
        </div>
        {/* Family Background */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            👨‍👩‍👧‍👦 Family Background
          </h2>

          <div className="space-y-4">
            {/* Father Info */}
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Father
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                  <div className="form-control">
                    <label className="label font-medium">Last Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.father_lastname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">First Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="First Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.father_firstname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">Middle Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Middle Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.father_middlename")}
                    />
                  </div>

              
              </div>
            </div>

            {/* Mother Info */}
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Mother
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                  <div className="form-control">
                    <label className="label font-medium">Last Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.mother_lastname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">First Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="First Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.mother_lastname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">Middle Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Middle Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.mother_lastname")}
                    />
                  </div>
              </div>
            </div>

            {/* Guardian Info */}
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Guardian
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                  <div className="form-control">
                    <label className="label font-medium">Last Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.guardian_lastname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">First Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="First Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.guardian_lastname")}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-medium">Middle Name</label>
                    <input
                      className="input input-bordered"
                      placeholder="Middle Name"
                      onChange={(e) => handleChange(e, "applicant.family_details.guardian_lastname")}
                    />
                  </div>

              
              </div>
            </div>
          </div>
        </div>

        {/* Process Information */}
        <div className="card bg-base-100 shadow-md p-6 space-y-6">
          <h2 className="text-lg font-semibold text-sky-950 border-b pb-2">
            ✅ Process
          </h2>

          {/* Accomplished By */}
          <div className="form-control">
            <label className="label font-medium">Accomplished By</label>
            <div className="flex gap-4">
              {["APPLICANT", "GUARDIAN", "REPRESENTATIVE"].map((role, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="radio" name="accomplishedBy" value={role} className="radio" 
                  onChange={(e) => handleChange(e, "accomplished_by")}/>{" "}
                  {role}
                </label>
              ))}
            </div>
          </div>

          {/* Names & Officers */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="form-control space-y-1">
              <label className="label font-medium">Accomplished By Name</label>
              <input className="input input-bordered" placeholder='Full Name'
              onChange={(e) => handleChange(e, "accomplished_by_name")}/>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
              <div className="form-control space-y-1">
                <label className="label font-medium">Processing Officer</label>
                <input className="input input-bordered" placeholder="Processing Officer" 
                onChange={(e) => handleChange(e, "processing_officer")}/>
              </div>

              <div className="form-control space-y-1">
                <label className="label font-medium">Approving Officer</label>
                <input className="input input-bordered" placeholder="Processing Officer" 
                onChange={(e) => handleChange(e, "approving_officer")}/>
              </div>

              <div className="form-control space-y-1">
                <label className="label font-medium">Encoder</label>
                <input className="input input-bordered" placeholder="Processing Officer" 
                onChange={(e) => handleChange(e, "encoder")}/>
              </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008D]">
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
