import { apiSlice } from "./apiSlice";
const PRODUCTS_URL = "/products";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: PRODUCTS_URL + "/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    getAllProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
} = productApiSlice;
