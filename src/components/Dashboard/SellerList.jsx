import { useEffect, useState } from "react";
import Toggle from "./Toggle";

export default function SellerList() {
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
            <Toggle />
          </div>
        </li>
      ))}
    </ul>
  );
}
