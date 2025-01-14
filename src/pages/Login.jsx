import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import { useAuthWithGoogle } from "../hooks/useAuthWithGoogle";

function Login() {
  const navigate = useNavigate(); // Хук для навигации
  const { authenticateWithGoogle, isPending } = useAuthWithGoogle();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Ваш код для логина, например, аутентификация через email и password
    // После успешной аутентификации:
    navigate('/dashboard'); // Переход на страницу Dashboard
  };

  return (
      <div className="max-w-md mx-auto w-full bg-white p-6 shadow-md rounded-md mt-24">
        <div className="align-elements flex w-full max-w-96 flex-col gap-5">
          <h2 className="text-center text-2xl font-bold text-gray-700 md:text-4xl">
            Log In
          </h2>
        </div>
        <Form method="post" onSubmit={handleLogin}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            size="input-sm md:input-md"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            size="input-sm md:input-md"
          />
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <button className="btn btn-primary btn-sm grow md:btn-md">
              Log In
            </button>
            <button
              type="button"
              onClick={authenticateWithGoogle}
              disabled={isPending}
              className="btn btn-secondary btn-sm grow md:btn-md"
            >
              {isPending ? "Loading..." : "Log In with Google"}
            </button>
          </div>
        </Form>
        <div className="text-center text-gray-700 mt-5">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="link link-primary bg-white">
              Register
            </Link>
          </p>
        </div>
      </div>
  );
}

export default Login;
