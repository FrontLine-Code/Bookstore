import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ApiResponse {
  id: number;
  isbn: string;
  title: string;
  cover: string;
  author: string;
  published: number;
  pages: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://no23.lavina.tech" }),
  endpoints: (builder) => ({
    fetchData: builder.query<ApiResponse[], void>({
      query: () => "/books",
    }),
  }),
});

export const { useFetchDataQuery } = apiSlice;
