function OnlineUsers({ users }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-bold mb-4">Online Users</h3>
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-3">
            <img
              src="../public/images.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineUsers;
