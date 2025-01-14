import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const displayName = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  const repeatPassword = form.get("repeatPassword");

  if (password !== repeatPassword) {
    return { error: "Passwords do not match" };
  }

  return { displayName, email, password };
};

function Register() {
  const { registerWithEmailAndPassword } = useRegister();
  const data = useActionData();

  useEffect(() => {
    if (data && data.displayName && data.email && data.password) {
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
        {data?.error && <p className="text-red-500 text-center">{data.error}</p>}
        <FormInput
          type="text"
          placeholder="Name"
          label="Enter your Name"
          name="name"
        />
        <FormInput
          type="email"
          placeholder="Email"
          label="Enter your email"
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
        />
        <FormInput
          type="password"
          placeholder="Repeat Password"
          label="Repeat Password"
          name="repeatPassword"
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
