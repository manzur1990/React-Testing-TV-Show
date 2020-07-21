import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow } from './components/api/fetchShow';

jest.mock('./components/api/fetchShow')

const data = {
    data: {
    id: 2993,
    url: 'http://www.tvmaze.com/shows/2993/stranger-things',
    name: 'Stranger Things',
    type: 'Scripted',
    language: 'English',
    genres: [
      'Drama',
      'Fantasy',
      'Science-Fiction'
    ],
    status: 'Running',
    runtime: 60,
    premiered: '2016-07-15',
    officialSite: 'https://www.netflix.com/title/80057281',
    schedule: {
      time: '',
      days: [
        'Thursday'
      ]
    }
}
}

    test("Data is fetching and renders correctly", async () => {
     
        fetchShow.mockResolvedValueOnce(data);

      render (<App />);

        await waitFor(async () => {

          expect(await screen.findByAltText(/stranger things/i)).toBeInTheDocument();
        });
        expect(fetchShow).toHaveBeenCalledTimes(0);


    })

   