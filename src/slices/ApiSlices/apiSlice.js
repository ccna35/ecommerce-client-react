import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.DEV
  ? "http://localhost:8080/api"
  : "https://online-store-server-dr62.onrender.com/api";

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
