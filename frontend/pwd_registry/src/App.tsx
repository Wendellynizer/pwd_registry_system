import { useEffect, useState } from "react";
import { get_all_barangays, get_all_city, get_all_province, get_education, get_occupations } from "./endpoints/api";

function App() {
  	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");

<<<<<<< HEAD
	const [barangays, setBarangays] = useState<any[]>([]);
	const [cities, setCities] = useState<any[]>([]);
	const [provinces, setProvinces] = useState<any[]>([]);
	const [educations, setEducations] = useState<any[]>([]);
	const [occupations, setOccupations] = useState<any[]>([]);
	
	const [formData, setFormData] = useState({});

	function test() {
		// test values here
		// console.log('i')
	}

	const login = async () => {
		try {
		const response = await fetch("http://127.0.0.1:8000/api/token/", {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		const data = await response.json();

		if (response.ok) {
			console.log(data.access);
			console.log(data.refresh);
		} else {
			console.log("error");
		}
		} catch (e) {
		console.log("blahblag");
		}
	};

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		console.log(Array.from(formData.keys()))
	};

	const fetchBarangays = async () => {
		test();

		setBarangays(await get_all_barangays());
		setCities(await get_all_city());
		setProvinces(await get_all_province());
		setEducations(await get_education());
		setOccupations(await get_occupations());
	}

	useEffect(() => {
		fetchBarangays()
	}, []);

  return (
	<div>
		<p>CREATE PWD</p>

		<div>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="">Date Applied</label>
					<input type="date" name="date_applied" id="" className="border px-2 py-1 block"/>
				</div>

				<p className="font-bold mt-5">Personal Info</p>
				<div className="flex gap-2">
					<div>
						<label htmlFor="">Last Name</label>
						<input type="text" name="lastname" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">First Name</label>
						<input type="text" name="firstname" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Middle Name</label>
						<input type="text" name="midlename" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Maiden Name</label>
						<input type="text" name="maidenname" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Suffix</label>
						<input type="text" name="suffix" id="" className="border px-2 py-1 block"/>
					</div>
				</div>

				<div className="flex gap-2">
					<div>
						<label htmlFor="">Birthdate</label>
						<input type="date" name="birthdate" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Sex</label>
						
						<input type="radio" name="gender" value="male" /> Male
						<input type="radio" name="gender" value="female" /> Female
					</div>

					<div>
						<label htmlFor="">Civil Status</label>
						<select name="civil_status" id="" className="border">
							<option value="SINGLE">Single</option>
							<option value="SEPARATED">Separated</option>
							<option value="COHABITATION">Cohabitation</option>
							<option value="MARRIED">Married</option>
							<option value="WIDOW/ER">Widow/er</option>
						</select>
					</div>
				</div>
				
				<p className="font-bold mt-5">Address</p>
				<div className="flex gap-2 flex-wrap  items-center">
					<div>
						<label htmlFor="">House No. and Street</label>
						<input type="text" name="street_address" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Barangay</label>
						<select name="barangay" id="" className="border">
							<option value="">--</option>
							{barangays.map((barangay) => (
								<option key={barangay.id} value={barangay.id}>{barangay.barangay_name}</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="">City/Municipality</label>
						<select name="city" id="" className="border">
							{cities.map((city) => (
								<option key={city.id} value={city.id}>{city.city_name}</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="">Provinces</label>
						<select name="province" id="" className="border">
							{provinces.map((province) => (
								<option key={province.id} value={province.id}>{province.province_name}</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="">Landline No.</label>
						<input type="text" name="landline" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Mobile No.</label>
						<input type="text" name="mobile" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Email</label>
						<input type="text" name="email" id="" className="border px-2 py-1 block"/>
					</div>
				</div>

				<p className="font-bold mt-5">Background</p>
				<div className="flex gap-2 flex-wrap items-center">
					<div>
						<label htmlFor="">Educational Attainment</label>
						<select name="education" id="" className="border">
							{educations.map((education) => (
								<option key={education.id} value={education.id}>{education.education_name}</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="">Status of Employment</label>
						<select name="emp_status" id="" className="border">
							<option value="EMPLOYED">Employed</option>
							<option value="UNEMPLOYED">Unemployed</option>
							<option value="SELF-EMPLOYED">Self-employed</option>
						</select>
					</div>

					<div>
						<label htmlFor="">Category of Employment</label>
						<select name="emp_category" id="" className="border">
							<option value="GOVERNMENT">Government</option>
							<option value="PRIVATE">Private</option>
						</select>
					</div>

					<div>
						<label htmlFor="">Type of Employment</label>
						<select name="emp_type" id="" className="border">
							<option value="REGULAR">Regular</option>
							<option value="SEASONAL">Seasonal</option>
							<option value="CASUAL">Casual</option>
							<option value="EMERGENCY">Emergency</option>
						</select>
					</div>

					<div>
						<label htmlFor="">Occupation</label>
						<select name="emp_type" id="" className="border">
							<option value="">--</option>
							{occupations.map((occupation) => (
								<option key={occupation.id} value={occupation.id}>{occupation.occupation_name}</option>
							))}
						</select>
					</div>

					<div>
						<label htmlFor="">Specify</label>
						<input type="text" name="specify" id="" className="border px-2 py-1 block"/>
					</div>
				</div>

				<p className="font-bold mt-5">Identifier</p>
				<div className="flex gap-2 flex-wrap items-center">
					<div>
						<label htmlFor="">SSS No.</label>
						<input type="text" name="sss_no" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">GSIS No.</label>
						<input type="text" name="gsis_no" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">PAGIBIG No.</label>
						<input type="text" name="pagibig_no" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">PSN No.</label>
						<input type="text" name="psn_no" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">PHILHEALTH No.</label>
						<input type="text" name="philhealth_no" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">other id</label>
						<input type="text" name="other_id" id="" className="border px-2 py-1 block"/>
					</div>
					<div>
						<label htmlFor="">other id no.</label>
						<input type="text" name="other_id_no" id="" className="border px-2 py-1 block"/>
					</div>
				</div>

				<p className="font-bold mt-5">Family Background</p>
				<div className="flex gap-2 items-center">
					<div>
						<div>
							<label htmlFor="">Father Lastname</label>
							<input type="text" name="f_lastname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Father Firstname</label>
							<input type="text" name="f_firstname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Father Middlename</label>
							<input type="text" name="f_middlename" id="" className="border px-2 py-1 block"/>
						</div>
					</div>

					<div>
						<div>
							<label htmlFor="">Mother Lastname</label>
							<input type="text" name="m_lastname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Mother Firstname</label>
							<input type="text" name="m_firstname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Mother Middlename</label>
							<input type="text" name="m_middlename" id="" className="border px-2 py-1 block"/>
						</div>
					</div>

					<div>
						<div>
							<label htmlFor="">Guardina Lastname</label>
							<input type="text" name="g_lastname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Guardina Firstname</label>
							<input type="text" name="g_firstname" id="" className="border px-2 py-1 block"/>
						</div>
						<div>
							<label htmlFor="">Guardina Middlename</label>
							<input type="text" name="g_middlename" id="" className="border px-2 py-1 block"/>
						</div>
					</div>
					
				</div>

				<p className="font-bold mt-5">Process</p>
				<div className="flex gap-2">
					<div>
						<label htmlFor="">Accomplished By</label>
						<div>
							<input type="radio" name="accomplished_by" id="" /> Applicant
							<input type="radio" name="accomplished_by" id="" /> Guardian
							<input type="radio" name="accomplished_by" id="" /> Representative
						</div>

								
						<label htmlFor="">Lastname</label>
						<input type="text" name="accomplished_lastname" id="" className="border px-2 py-1 block"/>
						<label htmlFor="">Firstname</label>
						<input type="text" name="accomplished_firstname" id="" className="border px-2 py-1 block"/>
						<label htmlFor="">Middlename</label>
						<input type="text" name="accomplished_middlename" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">Processing Officer</label>
						<input type="text" name="processing_officer" id="" className="border px-2 py-1 block"/>

						<label htmlFor="">Approving Officer</label>
						<input type="text" name="approving_officer" id="" className="border px-2 py-1 block"/>

						<label htmlFor="">Encoder</label>
						<input type="text" name="encoder" id="" className="border px-2 py-1 block"/>
					</div>

					<div>
						<label htmlFor="">NAME OF REPORTING UNIT: (OFFICE/SECTION) </label>
						<input type="text" name="reporting_unit" id="" className="border px-2 py-1 block"/>

						<label htmlFor="">Control No.</label>
						<input type="text" name="control_no" id="" className="border px-2 py-1 block"/>
					</div>
				</div>

				<input type="submit" value="CREATE" className="border p-2 bg-green-600 text-white"/>
			</form>
		</div>
	</div>
=======
  return (
   <>
   </>
>>>>>>> b357bc3a30d3e642be8b649d37863267df977be7
  );
}

export default App;
