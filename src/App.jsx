import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";

function App() {
  const user = true; // Эмулируем наличие пользователя (проверку можно усложнить)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            user ? (
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
  