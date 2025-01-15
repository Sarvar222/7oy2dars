import { Link, NavLink } from "react-router-dom";
import "../UserSidebar.css";
import Avatar from "./Avatar";

import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";

// icons
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { useCollection } from "../hooks/useCollection";
import Button from "./Button";

function UserNavbar() {
  const { logout } = useLogout();
  const { user } = useSelector((store) => store.user);
  const { documents } = useCollection("users");
  return (
    <div
      className="bg-base-300 min-h-screen py-10 text-base-content
 flex flex-col shadow-lg"
    >
      <div className="w-[300px] mx-auto">
        {/* User Profile */}
        <div className="flex flex-col items-center mb-8">
          <Avatar user={user} />
          <h2 className="mt-4 text-xl font-semibold">{user?.displayName}</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col ">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 text-lg transition-all duration-500 ${
                  isActive
                    ? " bg-green-600 text-white shadow-lg"
                    : "hover:bg-gray-400"
                }`
              }
            >
              <GoProject className="text-2xl" /> Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2  text-lg transition-all duration-500 ${
                  isActive
                    ? " bg-green-600 text-white shadow-lg"
                    : "hover:bg-gray-400"
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
                `flex items-center gap-3 px-2 py-2  text-lg transition-all duration-500 ${
                  isActive
                    ? " bg-green-600 text-white shadow-lg"
                    : "hover:bg-gray-300"
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
          className="w-full py-3 mt-8 bg-green-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-gray-700 focus:outline-none transition-all duration-300"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default UserNavbar;
