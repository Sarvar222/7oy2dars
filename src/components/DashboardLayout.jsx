import { Link, useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="h-screen grid grid-cols-12">
      {/* Sidebar */}
      <aside className="col-span-2 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6">
        {/* Avatar */}
        <div className="bg-gray-600 w-24 h-24 flex items-center justify-center text-xl font-bold rounded-full">
          <img src="../public/images.png" alt="123123"/>
        </div>
        <p className="text-lg font-semibold">User Name</p>

        {/* Navigation */}
        <div className="space-y-4 w-full text-center">
          <Link
            to="/"
            className="block w-full py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Create
          </Link>
          <Link
            to="/project"
            className="block w-full py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Project
          </Link>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 hover:bg-red-500 rounded w-2/3"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="col-span-8 bg-gray-100 p-6">
        <div className="grid grid-cols-2 gap-4 h-full">
          <h3>Home</h3>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="col-span-2 bg-gray-200 p-6 space-y-4"></aside>
    </div>
  );
}

export default DashboardLayout;
