import { apiSlice } from "./apiSlice";
const PRODUCTS_URL = "/product";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: PRODUCTS_URL + `/${data.id}/review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Review"],
    }),

    getAllReviews: builder.query({
      query: () => PRODUCTS_URL + "/all/reviews",
      providesTags: ["Review"],
    }),
  }),
});

export const { useAddReviewMutation, useGetAllReviewsQuery } = reviewApiSlice;
