import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Create from "./pages/Create";

function App() {
  const user = {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
  };

  const onlineUsers = [
    { id: 2, name: "Jane Smith", avatar: "https://via.placeholder.com/150" },
    { id: 3, name: "Mike Johnson", avatar: "https://via.placeholder.com/150" },
    { id: 4, name: "Sara Connor", avatar: "https://via.placeholder.com/150" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <DashboardLayout user={user}>
              <Home onlineUsers={onlineUsers} />
            </DashboardLayout>
          }
        />
        <Route
          path="/project"
          element={
            <DashboardLayout user={user}>
              <Project />
            </DashboardLayout>
          }
        />
        <Route
          path="/create"
          element={
            <DashboardLayout user={user}>
              <Create />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
