import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
import GradientBackground from "../components/GradientBackground";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedRepeatPassword = repeatPassword.trim();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedRepeatPassword
    ) {
      toast.warning("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    if (trimmedPassword.length < 6) {
      toast.error("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    if (trimmedPassword !== trimmedRepeatPassword) {
      toast.error("Parollar mos emas!");
      return;
    }

    const containsLetter = /[a-zA-Z]/.test(trimmedPassword);
    if (!containsLetter) {
      toast.error("Parolda kamida bitta harf bo‘lishi kerak!");
      return;
    }

    console.log("Yangi foydalanuvchi:", {
      name: trimmedName,
      email: trimmedEmail,
    });
    toast.success("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
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
            type="text"
            placeholder="Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
              Submit
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
