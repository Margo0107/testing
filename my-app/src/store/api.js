import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => "posts",
      providesTags: ["post"],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useGetPostQuery, useAddPostMutation } = api;
