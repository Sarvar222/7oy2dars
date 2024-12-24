import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DashboardLayout({ user, children }) {
  const navigate = useNavigate();
  const [onlineUsers, setOnlineUsers] = useState([]);

  // Функция для загрузки пользователей из localStorage
  const loadOnlineUsers = () => {
    const users = JSON.parse(localStorage.getItem("onlineUsers")) || [];
    setOnlineUsers(users);
  };

  // Сохранение списка онлайн пользователей в localStorage
  const saveOnlineUsers = (users) => {
    localStorage.setItem("onlineUsers", JSON.stringify(users));
    setOnlineUsers(users);
  };

  // Эмуляция добавления или удаления пользователя
  const addUser = (user) => {
    const updatedUsers = [...onlineUsers, user];
    saveOnlineUsers(updatedUsers);
  };

  const removeUser = (userId) => {
    const updatedUsers = onlineUsers.filter((user) => user.id !== userId);
    saveOnlineUsers(updatedUsers);
  };

  // Эффект для загрузки пользователей при монтировании компонента
  useEffect(() => {
    loadOnlineUsers();
  }, []);

  const handleLogout = () => {
    console.log("User logged out:", user);
    // Удаляем текущего пользователя из списка онлайн пользователей
    removeUser(user.id);
    navigate("/login");
  };

  return (
    <div className="h-screen grid grid-cols-12">
      {/* Левый Sidebar */}
      <aside className="col-span-2 bg-gray-800 text-white flex flex-col items-center py-6 space-y-6">
        {/* Аватар и информация пользователя */}
        <div className="w-full text-center">
          <div className="bg-gray-600 w-24 h-24 flex items-center justify-center text-xl font-bold rounded-full overflow-hidden mx-auto">
            <img
              src="../public/images.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-semibold">
          Sarvar
          </p>
          <p className="text-sm text-gray-400">
            {user?.email || "sarvar@example.com"}
          </p>
        </div>

        {/* Навигация */}
        <div className="space-y-4 w-full text-center">
          <Link
            to="/create"
            className="block w-11/12 mx-auto py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Create Page
          </Link>
          <Link
            to="/project"
            className="block w-11/12 mx-auto py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Project
          </Link>
        </div>

        {/* Кнопка выхода */}
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 hover:bg-red-500 rounded w-2/3 mt-auto"
        >
          Logout
        </button>
      </aside>

      {/* Основной контент */}
      <main className="col-span-8 bg-gray-100 p-6">
        {children || (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          </div>
        )}
      </main>

      {/* Правый Sidebar */}
      <aside className="col-span-2 bg-gray-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold mb-4">Online Users</h2>
        <ul className="space-y-2">
          {onlineUsers.length > 0 ? (
            onlineUsers.map((user, index) => (
              <li
                key={index}
                className="bg-white shadow p-2 rounded flex items-center space-x-4"
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src={user.avatar || "/images/default-avatar.png"}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-sm text-gray-500">No users online</p>
          )}
        </ul>
      </aside>
    </div>
  );
}

export default DashboardLayout;
