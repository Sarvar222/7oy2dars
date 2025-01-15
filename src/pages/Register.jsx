import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { Link, useActionData, Form } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useSelector } from "react-redux";

import { validateSignupOrLoginData } from "../utils";
import Button from "../components/Button";

import { useAuthWithGoogle } from "../hooks/useAuthWithGoogle";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  const confirmPassword = form.get("repeadPassword");
  return { displayName, password, email, confirmPassword };
};

function Register() {
  const { authWithGoogle } = useAuthWithGoogle();
  const [error, setError] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { isPending } = useSelector((store) => store.user);
  const { registerWithEmailAndPassword } = useRegister();
  const singupActionData = useActionData();

  useEffect(() => {
    if (singupActionData) {
      const { valid, errors } = validateSignupOrLoginData(
        singupActionData,
        true
      );

      if (valid) {
        const { displayName, email, password } = singupActionData;
        registerWithEmailAndPassword(displayName, email, password);
      } else {
        setError(errors);
      }
    }
  }, [singupActionData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <Form
        method="post"
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          Create an Account
        </h2>
        <FormInput
          type="text"
          placeholder="Enter your name"
          label="Full Name"
          name="name"
          error={error.displayName && "input-error"}
          errorText={error.displayName}
          className="mb-5"
        />
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
          className="mb-5"
        />
        <FormInput
          type="password"
          placeholder="Confirm your password"
          label="Confirm Password"
          name="repeadPassword"
          error={error.confirmPassword && "input-error"}
          errorText={error.confirmPassword}
          className="mb-6"
        />
        <div className="space-y-4">
          <Button
            loading={isPending}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Register
          </Button>
          <button
            type="button"
            onClick={authWithGoogle}
            className="w-full py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg shadow-md transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">🌐</span> Sign up with Google
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-semibold"
          >
            Log In
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
