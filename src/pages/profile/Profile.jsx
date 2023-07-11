import BackButton from "../../components/common/BackButton";

const Profile = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="flex gap-4 items-center justify-between mb-8">
        <div className="flex gap-4 items-center">
          <h1>Hello Barney</h1>
          <p className="py-1 px-2 bg-blue-500 text-white rounded-sm text-sm">
            Member
          </p>
        </div>
        <BackButton />
      </div>
      <form>
        <div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3 mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-3 mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                />
              </div>
              <div className="sm:col-span-3 mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="block w-full sm:max-w-sm rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-chestnutRose sm:text-sm sm:leading-6"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 rounded-md bg-chestnutRose px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Update Account Details
        </button>
      </form>
    </div>
  );
};

export default Profile;
