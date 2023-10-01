import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../slices/ApiSlices/productsApiSlice";

export default function ProductList() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) console.log(error);

  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data?.products?.map((product) => (
        <li
          key={product._id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <img
                className="absolute w-full h-full object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {product.name}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to={`/dashboard/products/${product._id}/edit`}>
              <button className="btn-edit">
                <AiFillEdit />
              </button>
            </Link>
            <button className="btn-view">
              <HiArrowUpRight />
            </button>
            <button
              className="btn-delete"
              onClick={() => handleDelete(product._id)}
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
