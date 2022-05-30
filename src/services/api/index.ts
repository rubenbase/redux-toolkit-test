import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PeopleResponse, Person } from 'types/people'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, void>({
      query: () => `/people`,
    }),
    getPeopleById: builder.query<Person, string>({
      query: (id) => `/people/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPeopleQuery, useGetPeopleByIdQuery } = api
