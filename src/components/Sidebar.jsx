import Avatar from "./Avatar";
import {
  MdOutlineSpaceDashboard,
  MdAddCircle,
  MdSettings,
} from "react-icons/md";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { NavLink } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import { useThemeToggler } from "../hooks/useThemeToggler";
import { MdOutlineExitToApp } from "react-icons/md";
import { useSignOut } from "../hooks/useSignOut";

import { FaRegMoon, FaRegSun } from "react-icons/fa";

function Sidebar() {
  const { user } = useGlobalContext();
  const { document } = useDocument("users", user.uid);
  const { changeTheme, theme } = useThemeToggler();
  const { signout } = useSignOut();

  return (
    <div className="hidden w-64 shrink-0 flex-col bg-primary-content bg-opacity-50 p-2 pr-0 pt-10 dark:bg-neutral-content lg:flex">
      <div className="w-28 h-48 ml-11 rounded-2xl">
        <img src="../public/aaa.jfif" alt="" />
      </div>
      <ul className="menu mb-auto flex flex-col  rounded-r-none p-0 pl-8">
        <li>
          <NavLink
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
            to="/"
          >
            <MdOutlineSpaceDashboard />{" "}
            <span className="font-semibold">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
            to="/create"
          >
            <MdAddCircle /> <span className="font-semibold">Create</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex w-full items-center gap-3 rounded-none rounded-l-3xl py-2 pl-2 text-xl dark:bg-base-300"
            to="/profile"
          >
            <MdSettings /> <span className="font-semibold">Settings</span>
          </NavLink>
        </li>
      </ul>
      <button
        className="btn  hover:bg-base-300  mb-12 w-32 ml-12"
        onClick={signout}
      >
        Logout
      </button>
      {/* this hidden checkbox controls the state */}
      <label className="mb-5 flex cursor-pointer justify-center gap-2">
        {/* sun icon */}
        <FaRegSun className="swap-on h-5 w-5 fill-current" />
        <input
          onChange={changeTheme}
          type="checkbox"
          value="synthwave"
          checked={theme == "dracula"}
          className="theme-controller toggle"
        />
        {/* moon icon */}
        <FaRegMoon className="swap-off h-5 w-5 fill-current" />
      </label>
    </div>
  );
}

export default Sidebar;
