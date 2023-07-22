import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:8080/api" || "https://ecommerce-store-server-vsnh.onrender.com/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Category", "Brand", "Product"],
  endpoints: (builder) => ({}),
});
