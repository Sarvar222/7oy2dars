import OnlineUsers from "../components/OnlineUsers";

function Home({ onlineUsers }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <OnlineUsers users={onlineUsers} />
    </div>
  );
}

export default Home;
