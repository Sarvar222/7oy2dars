import { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

// action
export const action = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  return { email, password };
};

function Login() {
  const { loginWithEmailAndPassword } = useLogin();
  const data = useActionData();

  useEffect(() => {
    if (data) {
      loginWithEmailAndPassword(data.email, data.password);
    }
  }, [data]);

  return (
    <div className="h-screen grid place-items-center w-full bg-gray-100">
      <Form
        method="post"
        className="max-w-md mx-auto w-full bg-white p-6 shadow-md rounded-md"
      >
        <h2 className="text-4xl font-bold text-center mb-5 uppercase text-gray-700">
          Login
        </h2>
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

        <div className="mt-5">
          <button className="btn btn-neutral btn-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </div>
        <div className="my-5 text-center">
          <p className="text-gray-600">
            Do not have an account?{" "}
            <Link
              to="/register"
              className="link link-primary text-blue-500 font-semibold text-lg hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
