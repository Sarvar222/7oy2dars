import { Link, NavLink } from "react-router-dom";
import "../UserSidebar.css";
import Avatar from "./Avatar";

import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";

// icons
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { useCollection } from "../hooks/useCollection";
import Button from "./Button";

function UserNavbar() {
  const { logout } = useLogout();
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const { documents } = useCollection("users");
  console.log(documents);

  return (
    <div className="bg-gradient-to-b bg-green-700 min-h-screen py-10 text-white flex flex-col ">
      <div className="w-[300px] mx-auto">
        {/* User Profile */}
        <div className="flex flex-col items-center mb-8">
          <div>
            <img src="../publik/aaa.jfif" alt="" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">{user?.displayName}</h2>
          <p className="text-sm opacity-80">Hello!!!</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-lg transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r bg-green-500 text-white "
                    : "hover:bg-gradient-to-r hover:via-green-600 hover:to-green-500"
                }`
              }
            >
              <GoProjectRoadmap className="text-2xl"/> Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-lg transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r bg-green-500 text-white shadow-lg"
                    : "hover:bg-gradient-to-r hover:via-slate-600 hover:to-slate-500"
                }`
              }
            >
              <IoAddCircleOutline className="text-2xl" /> Create
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/settings`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-lg transition-all duration-500 ${
                  isActive
                    ? "bg-gradient-to-r bg-green-500 text-white shadow-lg"
                    : "hover:bg-gradient-to-r  hover:via-slate-600 hover:to-slate-500"
                }`
              }
            >
              <IoSettingsOutline className="text-2xl" /> Settings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mt-auto mx-auto w-full px-6">
        <Button
          className="w-full py-3 mt-8 bg-slate-700 text-white rounded-lg font-semibold text-lg shadow-md hover:focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default UserNavbar;
