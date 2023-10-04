import { apiSlice } from "./apiSlice";
// const USERS_URL = "http://localhost:8080";
const USERS_URL = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_URL_USER
  : import.meta.env.VITE_PRODUCTION_URL_USER;

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USERS_URL + "/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: USERS_URL + "/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.id}`,
        method: "PATCH",
        body: data.updatedData,
      }),
    }),
    fetchProfile: builder.query({
      query: () => `/api/users/profile`,
    }),
    getAllUsers: builder.query({
      query: () => USERS_URL,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useFetchProfileQuery,
  useGetAllUsersQuery,
} = userApiSlice;
