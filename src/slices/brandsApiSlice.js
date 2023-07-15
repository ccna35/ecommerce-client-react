import { apiSlice } from "./apiSlice";
const BRANDS_URL = "/brands";

export const brandApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBrand: builder.mutation({
      query: (data) => ({
        url: BRANDS_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Brand"],
    }),

    getAllBrands: builder.query({
      query: () => BRANDS_URL,
      providesTags: ["Brand"],
    }),
  }),
});

export const { useAddBrandMutation, useGetAllBrandsQuery } = brandApiSlice;
