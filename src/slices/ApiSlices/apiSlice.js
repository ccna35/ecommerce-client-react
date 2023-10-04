import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_URL
  : import.meta.env.VITE_PRODUCTION_URL;

// console.log(import.meta.env.VITE_PRODUCTION_URL);

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Category", "Brand", "Product"],
  endpoints: () => ({}),
});
