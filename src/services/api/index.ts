import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Planet, PlanetResponse } from 'types/planet'
import { PeopleResponse, Person } from 'types/people'
import { Starship, StarshipResponse } from 'types/starship'

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
    getPlanetById: builder.query<Planet, string>({
      query: (id) => `/planets/${id}`,
    }),
    getStarshipById: builder.query<Starship, string>({
      query: (id) => `/starships/${id}`,
    }),
    getStarshipsBySearch: builder.query<StarshipResponse, string>({
      query: (search) => `/starships/?search=${search}`,
    }),
    getPlanetsBySearch: builder.query<PlanetResponse, string>({
      query: (search) => `/planets/?search=${search}`,
    }),
    getPeopleBySearch: builder.query<PeopleResponse, string>({
      query: (search) => `/people/?search=${search}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPeopleQuery,
  useGetPeopleByIdQuery,
  useGetPlanetByIdQuery,
  useGetStarshipByIdQuery,
  useGetPeopleBySearchQuery,
  useGetPlanetsBySearchQuery,
  useGetStarshipsBySearchQuery,
} = api
