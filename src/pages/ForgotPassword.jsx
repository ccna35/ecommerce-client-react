import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    setIsLoading(true);
    if (email) {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/user/forgotPassword",
          {
            email,
          }
        );

        console.log(res);
        setSuccessMsg(res.data.message);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
        setErrorMsg(error.response.data.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
      if (userInfo?.isAdmin) navigate("/dashboard");
      if (!userInfo?.isAdmin) navigate("/profile");
    }
  }, [navigate, userInfo]);

  return (
    <main className="bg-bgColor h-screen grid place-items-center">
      <div className="container mx-auto grid place-items-center">
        <div className="logo mt-16">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <form className="max-w-md py-16">
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-2xl text-mainColor">
                Enter your email to reset your password
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    {isLoading ? "Loading..." : "Reset my password"}
                  </button>
                  {errorMsg && (
                    <p className="mt-4 p-2 rounded-sm border border-red-200 bg-red-100 text-red-800">
                      {errorMsg}
                    </p>
                  )}
                  {successMsg && (
                    <p className="mt-4 p-2 rounded-sm border border-green-200 bg-green-100 text-green-800">
                      {successMsg}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
