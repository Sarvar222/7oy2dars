import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
import GradientBackground from "../components/GradientBackground";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warning("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    // Симуляция успешного входа
    console.log("User logged in:", { email });
    toast.success("Siz muvaffaqiyatli tizimga kirdingiz!");

    setTimeout(() => {
      navigate("/"); // Перенаправляем на Home
    }, 1500);
  };

  return (
    <>
      <GradientBackground />
      <div className="h-screen grid place-items-center w-full font-semibold">
        <form
          onSubmit={handleSubmit}
          className="max-w-80 md:max-w-96 mx-auto w-full"
        >
          <h2 className="text-2xl md:text-3xl text-center font-bold mb-5">
            Login
          </h2>
          <FormInput
            type="email"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="my-5">
            <button
              type="submit"
              className="btn btn-neutral btn-block text-lg md:text-xl btn-sm md:btn-md"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <Link className="link" to="/register">
              Register
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
