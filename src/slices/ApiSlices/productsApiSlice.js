import { apiSlice } from "./apiSlice";
const PRODUCTS_URL = "/product";

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

    getProductsByCategory: builder.query({
      query: (id) => PRODUCTS_URL + "/search/category/" + id,
      providesTags: ["Product"],
    }),

    getProductDetails: builder.query({
      query: (id) => PRODUCTS_URL + "/" + id,
      providesTags: ["Product"],
    }),

    updateProductDetails: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL + "/" + data.id,
        method: "PATCH",
        body: data.updatedData,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useGetProductsByCategoryQuery,
  useGetProductDetailsQuery,
  useUpdateProductDetailsMutation,
} = productApiSlice;
