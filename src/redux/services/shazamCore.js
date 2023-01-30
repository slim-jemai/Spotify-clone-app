import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/* const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79770c44a1mshbb151ae283239bep1a3e9fjsnec56c88459f5',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  }; 
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '79770c44a1mshbb151ae283239bep1a3e9fjsnec56c88459f5');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const{
    useGetTopChartsQuery,
} = shazamCoreApi;