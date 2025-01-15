import React, { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useSelector } from "react-redux";
import { validateSignupOrLoginData } from "../utils";
import { useState } from "react";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  return { password, email };
};

function Login() {
  const [error, setError] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { isPending } = useSelector((store) => store.user);
  const { loginWithEmailAndPassword } = useLogin();
  const loginActionData = useActionData();

  useEffect(() => {
    if (loginActionData) {
      const { valid, errors } = validateSignupOrLoginData(loginActionData);

      if (valid) {
        const { email, password } = loginActionData;
        loginWithEmailAndPassword(email, password);
      } else {
        setError(errors);
      }
    }
  }, [loginActionData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <Form
        method="post"
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8 uppercase">
          Login
        </h2>

        <FormInput
          type="email"
          placeholder="Enter your email"
          label="Email Address"
          name="email"
          error={error.email && "input-error"}
          errorText={error.email}
          className="mb-5"
        />
        <FormInput
          type="password"
          placeholder="Enter your password"
          label="Password"
          name="password"
          error={error.password && "input-error"}
          errorText={error.password}
          className="mb-6"
        />

        <div className="space-y-4">
          {!isPending && (
            <button
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Login
            </button>
          )}
          {isPending && (
            <button
              className="w-full py-3 bg-blue-400 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
              disabled
            >
              Loading...
            </button>
          )}
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}


export default Login;
