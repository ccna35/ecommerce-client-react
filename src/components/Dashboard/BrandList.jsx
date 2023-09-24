import { useGetAllBrandsQuery } from "../../slices/ApiSlices/brandsApiSlice";

export default function BrandList() {
  const { data, isLoading, isError, error } = useGetAllBrandsQuery();

  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.data.map((brand) => (
        <li
          key={brand._id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {brand.name}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
