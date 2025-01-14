import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import { useAuthWithGoogle } from "../hooks/useAuthWithGoogle";

function Login() {
  const { authenticateWithGoogle, isPending } = useAuthWithGoogle();

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back!
          </h2>
          <p className="mt-2 text-gray-600">Please login to access your account</p>
        </div>
        <Form method="post" className="mt-6 space-y-6">
          <FormInput
            label="Email"
            type="email"
            name="email"
            size="input-md"
            className="w-full"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            size="input-md"
            className="w-full"
          />
          <div className="space-y-4">
            <button
              className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition duration-300"
              type="submit"
            >
              Login
            </button>
            <button
              type="button"
              onClick={authenticateWithGoogle}
              disabled={isPending}
              className={`w-full py-3 px-4 rounded-lg shadow-md ${
                isPending
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg"
              } focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300`}
            >
              {isPending ? "Loading..." : "Sign in with Google"}
            </button>
          </div>
        </Form>
        <div className="mt-6 text-center text-gray-600">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-600 hover:underline transition duration-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
