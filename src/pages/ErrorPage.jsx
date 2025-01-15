import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error?.status == 404) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center p-10 rounded-lg space-y-6">
          <Link
            to="/"
            className="px-6 py-3 btn bg-green-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-10 rounded-lg space-y-6">   
        <Link
          to="/"
          className="px-6 py-3 btn bg-green-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
