import { apiSlice } from "./apiSlice";
const CATEGORIES_URL = "/categories";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: CATEGORIES_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    getAllCategories: builder.query({
      query: () => CATEGORIES_URL,
      providesTags: ["Category"],
    }),
  }),
});

export const { useAddCategoryMutation, useGetAllCategoriesQuery } =
  categoryApiSlice;
