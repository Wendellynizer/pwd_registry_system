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
import UpdateRequest from "./pages/UpdateRequest";


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
          <Route path="update-requests" element={<UpdateRequest />} />
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
