import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FaWheelchair,
  FaMapMarkedAlt,
  FaClipboardList,
  FaUser,
  FaClock,
  FaInfoCircle,
  FaCalendarTimes,
  FaRegClipboard,
  FaCog,
  FaSignOutAlt,

} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";
import CurrentDateTime from "../components/Shared/CurrentDateTime";

const SidebarLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const SidebarNavItem = ({
    to,
    icon: Icon,
    label,
    isSidebarOpen,
    extraActivePaths = [],
  }: {
    to: string;
    icon: React.ElementType;
    label: string;
    isSidebarOpen: boolean;
    extraActivePaths?: string[];
  }) => {
    const isActive =
      location.pathname === to || extraActivePaths.includes(location.pathname);

    return (
      <NavLink
        to={to}
        end={to === "/"}
        className={({ isActive }) =>
          `group relative flex items-center transition-all duration-300 ease-in-out rounded-md ${
            isSidebarOpen
              ? "px-4 py-2 gap-3 justify-start"
              : "w-12 h-12 justify-center"
          } ${
            isActive
              ? "bg-white text-sky-950 font-bold shadow-md"
              : "hover:bg-sky-950 hover:text-white text-white"
          }`
        }
      >
        <Icon className="text-lg transition-all duration-300 ease-in-out" />
        <span
          className={`transition-opacity duration-300 ease-in-out ${
            isSidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          {label}
        </span>
      </NavLink>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ease-in-out bg-sky-950 text-white flex flex-col shadow-lg overflow-hidden border-r border-sky-900 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4 border-b border-cyan-100 flex items-center gap-2">
          <span className="text-2xl">♿</span>
          {isSidebarOpen && (
            <span className="text-xl font-bold">iPWD Registry</span>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-6 text-sm">
          {/* Menu */}
          <div>
            {isSidebarOpen && (
              <p className="uppercase text-xs mb-2 text-white">Menu</p>
            )}
            <SidebarNavItem
              to="/"
              icon={MdDashboard}
              label="Dashboard"
              isSidebarOpen={isSidebarOpen}
            />
          </div>

          {/* Manage */}
          <div className="space-y-3">
            {isSidebarOpen && (
              <p className="uppercase text-xs mb-2 text-white">Manage</p>
            )}
            <SidebarNavItem
              to="/pwd-info"
              icon={FaWheelchair}
              label="PWD Management"
              isSidebarOpen={isSidebarOpen}
              extraActivePaths={["/walk-in-application"]}
            />
            <SidebarNavItem
              to="/application"
              icon={FaRegClipboard }
              label="Applications"
              isSidebarOpen={isSidebarOpen}
            />
            <SidebarNavItem
              to="/disability-info"
              icon={FaInfoCircle}
              label="Disability Information"
              isSidebarOpen={isSidebarOpen}
            />
            <SidebarNavItem
              to="/user"
              icon={FaUser}
              label="Personnel Management"
              isSidebarOpen={isSidebarOpen}
            />
          </div>

          {/* Others */}
          <div className="space-y-3">
            {isSidebarOpen && (
              <p className="uppercase text-xs mb-2 text-white">Others</p>
            )}
            <SidebarNavItem
              to="/map"
              icon={FaMapMarkedAlt}
              label="Map"
              isSidebarOpen={isSidebarOpen}
            />
            <SidebarNavItem
              to="/analytics"
              icon={FaClock}
              label="Analytics"
              isSidebarOpen={isSidebarOpen}
            />
            <SidebarNavItem
              to="/reports"
              icon={FaClipboardList}
              label="Reports"
              isSidebarOpen={isSidebarOpen}
            />
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto w-full border-t border-cyan-100 py-4 px-3">
          {isSidebarOpen ? (
            <div className="flex flex-col items-center gap-3">
              <div className="text-sm font-medium text-white text-center">
                Welcome, Melverin
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="btn btn-sm btn-circle btn-outline border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => navigate("/settings")}
                  title="Settings"
                >
                  <FaCog />
                </button>
                <button
                  className="btn btn-sm btn-circle btn-outline border-white text-white hover:bg-white hover:text-red-600"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 mt-2">
              <button
                className="btn btn-sm btn-circle btn-outline border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => navigate("/settings")}
                title="Settings"
              >
                <FaCog />
              </button>
              <button
                className="btn btn-sm btn-circle btn-outline border-white text-white hover:bg-white hover:text-red-600"
                onClick={handleLogout}
                title="Logout"
              >
                <FaSignOutAlt />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white p-4 shadow text-sm flex justify-between items-center">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            ☰
          </button>
          <CurrentDateTime />
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
