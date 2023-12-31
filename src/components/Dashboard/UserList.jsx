import { useEffect, useMemo } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { useGetAllUsersQuery } from "../../slices/ApiSlices/usersApiSlice";
import axios from "axios";

export default function UserList() {
  // const { data, isLoading, isError, error, isSuccess } = useGetAllUsersQuery();

  // const users = useMemo(
  //   () => data?.data?.filter((user) => !user.isAdmin),
  //   [data]
  // );

  // if (isSuccess) console.log(data);
  // if (isError) console.log(error);
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8080/", {
          withCredentials: true,
        });

        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return null;

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
            <button className="btn-edit">
              <AiFillEdit />
            </button>
            <button className="btn-view">
              <HiArrowUpRight />
            </button>
            <button className="btn-delete">
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
