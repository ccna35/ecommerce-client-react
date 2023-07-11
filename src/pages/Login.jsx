import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const res = await fetch("http://localhost:5000/api/users/auth", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await res.json();
        console.log(data);

        localStorage.setItem("user", JSON.stringify(data));

        navigate("/profile");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("The two fields are required!");
    }
  };

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
                Sign in to our website
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="sm:col-span-6">
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p>Not registered?</p>
            <Link to="/register" className="text-chestnutRose">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
