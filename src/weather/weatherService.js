import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () => `forecast?q=M%C3%BCnchen,DE&appid=92d7b81b099d57154bd55d9472884403`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherQuery } = weatherApi