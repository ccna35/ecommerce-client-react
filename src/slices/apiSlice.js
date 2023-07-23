import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.DEV
  ? "http://localhost:8080/api"
  : "https://ecommerce-store-server-vsnh.onrender.com/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Category", "Brand", "Product"],
  endpoints: (builder) => ({}),
});
