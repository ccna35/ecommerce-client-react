import { useGetAllCategoriesQuery } from "../../slices/categoriesApiSlice";

export default function CategoryList() {
  const { data, isLoading, isError, error } = useGetAllCategoriesQuery();

  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((category) => (
        <li
          key={category._id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {category.name}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
