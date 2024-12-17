import { createBrowserRouter, RouterProvider } from "react-router-dom";
// mainlayout
import MainLayout from "./layouts/MainLayout";
import { Navigate } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  const user = false;
  // const notify = () => toast("Wow so easy!");
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
