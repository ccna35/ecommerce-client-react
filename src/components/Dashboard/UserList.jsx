import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(`https://fakestoreapi.com/users`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      //   console.log(await res.json());
      setUsers(await res.json());
      //   return res.json();
    })();

    // return () => {

    // }
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12">
              <img
                className="flex-none rounded-full bg-gray-50"
                src="/userPhoto.svg"
                alt={user.name.firstname}
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {user.name.firstname + " " + user.name.lastname}
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
