// import { useEffect, useState } from "react";
// import { get_all_barangays, get_all_city, get_all_province, get_education, get_occupations } from "./endpoints/api";

// function App() {
//   	const [username, setUsername] = useState("");
//   	const [password, setPassword] = useState("");

// 	const [barangays, setBarangays] = useState<any[]>([]);
// 	const [cities, setCities] = useState<any[]>([]);
// 	const [provinces, setProvinces] = useState<any[]>([]);
// 	const [educations, setEducations] = useState<any[]>([]);
// 	const [occupations, setOccupations] = useState<any[]>([]);
	
// 	const [formData, setFormData] = useState({});

// 	function test() {
// 		// test values here
// 		// console.log('i')
// 	}

// 	const login = async () => {
// 		try {
// 		const response = await fetch("http://127.0.0.1:8000/api/token/", {
// 			method: "POST",
// 			headers: {
// 			"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ username, password }),
// 		});

// 		const data = await response.json();

// 		if (response.ok) {
// 			console.log(data.access);
// 			console.log(data.refresh);
// 		} else {
// 			console.log("error");
// 		}
// 		} catch (e) {
// 		console.log("blahblag");
// 		}
// 	};

// 	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();

// 		const form = e.currentTarget;
// 		const formData = new FormData(form);
// 		console.log(Array.from(formData.keys()))
// 	};

// 	const fetchBarangays = async () => {
// 		test();

// 		// setBarangays(await get_all_barangays());
// 		// setCities(await get_all_city());
// 		// setProvinces(await get_all_province());
// 		// setEducations(await get_education());
// 		// setOccupations(await get_occupations());
// 	}

// 	useEffect(() => {
// 		fetchBarangays()
// 	}, []);

//   return (

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SidebarLayout from "./layout/SidebarLayout";
import PWDInfo from "./pages/PWDInfo";
import Application from "./pages/Application";
import Barangay from "./pages/Barangay";
import DisabilityInfo from "./pages/DisabilityInfo";
import User from "./pages/User";
import Map from "./pages/Map";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import WalkInApplicationForm from "./pages/WalkInApplicationForm";
import AddDisability from "./pages/AddDisability";
import AddPersonnel from "./pages/AddPersonnel";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import PWDProfile from "./pages/PWDProfile";
import EditPWDProfile from "./pages/EditPWDProfile";
import EditDisability from "./pages/EditDisability";
import EditPersonnel from "./pages/EditPersonnel";


const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔓 Public Login Route */}
        <Route path="/login" element={<Login />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/*"
          element={
            <RequireAuth>
              <SidebarLayout />
            </RequireAuth>
          }
        >
          {/* Nested Routes */}
          <Route index element={<Dashboard />} />
          <Route path="pwd-info" element={<PWDInfo />} />
          <Route path="application" element={<Application />} />
          <Route path="barangay" element={<Barangay />} />
          <Route path="disability-info" element={<DisabilityInfo />} />
          <Route path="user" element={<User />} />
          <Route path="map" element={<Map />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route
            path="walk-in-application"
            element={<WalkInApplicationForm />}
          />
          <Route path="add-disability" element={<AddDisability />} />
          <Route path="add-personnel" element={<AddPersonnel />} />
          <Route path="settings" element={<Settings />} />
          <Route path="pwd-info/:id" element={<PWDProfile />} />
          <Route path="pwd-info/:id/edit" element={<EditPWDProfile />} />
          <Route path="edit-disability/:name" element={<EditDisability />} />
          <Route path="edit-personnel/:id" element={<EditPersonnel />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
