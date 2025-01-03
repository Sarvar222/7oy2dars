import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  return { displayName, email, password };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();

  useEffect(() => {
    if (data) {
      registerWithEmailAndPassword(data.displayName, data.email, data.password);
    }
  }, [data]);

  return (
    <div className="h-screen grid place-items-center w-full bg-gray-100">
      <Form
        method="post"
        className="max-w-md mx-auto w-full bg-white p-6 shadow-md rounded-md"
      >
        <h2 className="text-4xl font-bold text-center mb-5 uppercase text-gray-700">
          Register
        </h2>
        <FormInput
          type="text"
          placeholder="Name"
          lebel="Enter your Name"
          name="name"
        />
        <FormInput
          type="email"
          placeholder="Email"
          lebel="Enter your email"
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          lebel="Password"
          name="password"
        />
        <FormInput
          type="password"
          placeholder="Repeat Password"
          lebel="Repeat Password"
        />
        <div className="mt-5">
          <button className="btn btn-neutral btn-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Register
          </button>
        </div>
        <div className="my-5 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="link link-primary text-blue-500 font-semibold text-lg hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Register;
