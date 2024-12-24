import { Link, useNavigate } from "react-router-dom";

function Sidebar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out:", user.name);
    navigate("/login");
  };

  return (
    <div className="h-full w-60 bg-gray-800 text-white flex flex-col justify-between">
      <div>
        {/* User Info */}
        <div className="p-4 text-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <h2 className="mt-2 font-bold">{user.name}</h2>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-3 text-center">
            <li>
              <Link to="/" className="block py-2 px-4 bg-gray-700 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="block py-2 px-4 bg-gray-700 rounded"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="block py-2 px-4 bg-gray-700 rounded"
              >
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 py-2 px-4 rounded text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
