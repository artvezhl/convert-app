import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../contants'
import type { TCurrency } from './types'

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        prepareHeaders: (headers, { getState }) => {
            headers.set('apikey', 'LgoNVoq1B4LIa6qpBB7BbvvyYoe6Y6Cz')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getCurrencyByName: builder.query<TCurrency, string>({
            query: (name) => `/latest?base=${name}`,
        }),
    }),
})

export const { useGetCurrencyByNameQuery } = currencyApi
