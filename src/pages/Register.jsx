import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GradientBackground from "../components/GradientBackground";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatPassword.trim();

    if (!trimmedEmail || !trimmedPassword || !trimmedRepeatPassword) {
      toast.warning("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    if (trimmedPassword.length < 6) {
      toast.error("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    if (trimmedPassword !== trimmedRepeatPassword) {
      toast.error("Parollar mos kelmaydi!");
      return;
    }

    console.log("User registered:", { email });
    toast.success("Roʻyxatdan oʻtish muvaffaqiyatli oʻtdi!");

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
            Registration Form
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
          <FormInput
            type="password"
            placeholder="Repeat password"
            label="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="mt-5">
            <button className="btn btn-neutral btn-block text-lg md:text-xl btn-sm md:btn-md">
              Register
            </button>
          </div>
          <div className="text-center mt-5">
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
