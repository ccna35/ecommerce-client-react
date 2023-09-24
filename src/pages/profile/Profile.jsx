import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../slices/ApiSlices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  console.log(userInfo);

  const [firstName, setFirstName] = useState(userInfo?.firstName);
  const [lastName, setLastName] = useState(userInfo?.lastName);
  const [email, setEmail] = useState(userInfo?.email);
  const [city, setCity] = useState(userInfo?.city);
  const [street, setStreet] = useState(userInfo?.street);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async () => {
    const body = {
      id: userInfo?.id,
      updatedData: {
        firstName,
        lastName,
        email,
        city,
        street,
      },
    };

    const res = await updateUser(body).unwrap();
    dispatch(setCredentials({ ...res }));
    // console.log(res);
    // if (res.isAdmin) {
    //   console.log(res.isAdmin);
    //   navigate("/dashboard");
    // } else {
    //   console.log(res.isAdmin);
    //   navigate("/profile");
    // }
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex gap-4 items-center justify-between mb-8">
        <div className="flex gap-4 items-center">
          <h1>Hello {userInfo?.firstName}</h1>
          <p
            className={`${
              userInfo?.isAdmin ? "bg-chestnutRose" : "bg-blue-500"
            } py-1 px-2 text-white rounded-sm text-sm`}
          >
            {userInfo?.isAdmin ? "Admin" : "Member"}
          </p>
        </div>
        {/* <BackButton /> */}
      </div>
      <form>
        <div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  readOnly
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          {isLoading ? "Updating..." : "Update Account Details"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
