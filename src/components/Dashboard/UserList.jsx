import { useMemo } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { useGetAllUsersQuery } from "../../slices/usersApiSlice";

export default function UserList() {
  const { data, isLoading, isError, error, isSuccess } = useGetAllUsersQuery();

  const users = useMemo(() => data?.filter((user) => !user.isAdmin), [data]);

  if (isSuccess) console.log(data);
  if (isError) console.log(error);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li
          key={user._id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12">
              <img
                className="flex-none rounded-full bg-gray-50"
                src="/userPhoto.svg"
                alt={user.firstName}
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {user.firstName + " " + user.lastName}
              </p>
              <p className="max-w-sm truncate text-sm font-extralight leading-6 text-gray-900">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
              <AiFillEdit />
            </button>
            <button className="px-2 py-1 rounded-sm bg-blue-700 text-white">
              <HiArrowUpRight />
            </button>
            <button className="px-2 py-1 rounded-sm bg-red-700 text-white">
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
